

import React, { useState, useContext, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import {
  Input,
  Flex,
  Heading,
  FormField,
  PrimaryButton,
  useMeetingManager,
  Modal,
  ModalBody,
  ModalHeader
} from "amazon-chime-sdk-component-library-react";

import { getErrorContext } from "../../providers/ErrorProvider";
import routes from "../../constants/routes";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import DevicePermissionPrompt from "../DevicePermissionPrompt";
import RegionSelection from "./RegionSelection";
import { fetchMeeting, createGetAttendeeCallback } from "../../utils/api";
import { useAppState } from "../../providers/AppStateProvider";

const MeetingForm: React.FC = () => {
  const meetingManager = useMeetingManager();
  const {
    setAppMeetingInfo,
    region: appRegion,
    meetingId: appMeetingId
  } = useAppState();
  const [meetingId, setMeetingId] = useState(appMeetingId);
  const [meetingErr, setMeetingErr] = useState(false);
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [region, setRegion] = useState(appRegion);
  const [isLoading, setIsLoading] = useState(false);
  const { errorMessage, updateErrorMessage } = useContext(getErrorContext());
  const history = useHistory();

  const handleJoinMeeting = async (e: React.FormEvent) => {
    e.preventDefault();

    const id = meetingId.trim().toLocaleLowerCase();
    const attendeeName = name.trim();

    if (!id || !attendeeName) {
      if (!attendeeName) {
        setNameErr(true);
      }

      if (!id) {
        setMeetingErr(true);
      }

      return;
    }

    setIsLoading(true);
    meetingManager.getAttendee = createGetAttendeeCallback(id);

    try {
      // const { JoinInfo } = await fetchMeeting(id, attendeeName, region);

      // await meetingManager.join({
      //   meetingInfo: JoinInfo.Meeting,
      //   attendeeInfo: JoinInfo.Attendee
      // });

      await meetingManager.join({
        meetingInfo: {
          ExternalMeetingId: "test chime",
          MediaPlacement: {
            AudioFallbackUrl:
              "wss://haxrp.m1.an2.app.chime.aws:443/calls/91be84e6-33db-402e-ad0b-babda747e47f",
            AudioHostUrl:
              "5398185ace26b1bb425751ec429a1812.k.m1.an2.app.chime.aws:3478",
            ScreenDataUrl:
              "wss://bitpw.m1.an2.app.chime.aws:443/v2/screen/91be84e6-33db-402e-ad0b-babda747e47f",
            ScreenSharingUrl:
              "wss://bitpw.m1.an2.app.chime.aws:443/v2/screen/91be84e6-33db-402e-ad0b-babda747e47f",
            ScreenViewingUrl:
              "wss://bitpw.m1.an2.app.chime.aws:443/ws/connect?passcode=null&viewer_uuid=null&X-BitHub-Call-Id=91be84e6-33db-402e-ad0b-babda747e47f",
            SignalingUrl:
              "wss://signal.m1.an2.app.chime.aws/control/91be84e6-33db-402e-ad0b-babda747e47f",
            TurnControlUrl: "https://ccp.cp.ue1.app.chime.aws/v2/turn_sessions"
          },
          MediaRegion: "ap-northeast-2",
          MeetingId: "91be84e6-33db-402e-ad0b-babda747e47f"
        },
        attendeeInfo: {
          AttendeeId: "5e346348-f0f5-22c9-4bf1-5a6c4bea4302",
          ExternalUserId: "kimjooho@amazon.com",
          JoinToken:
            "NWUzNDYzNDgtZjBmNS0yMmM5LTRiZjEtNWE2YzRiZWE0MzAyOmUxNTE3YWFkLWY2NjctNGY5MS1hMGYxLWQxNzRhMDhkYWVjOQ",
          Tags: null
        }
      });

      setAppMeetingInfo(id, attendeeName, region);
      history.push(routes.DEVICE);
    } catch (error) {
      updateErrorMessage(error.message);
    }
  };

  const closeError = (): void => {
    updateErrorMessage("");
    setMeetingId("");
    setName("");
    setIsLoading(false);
  };

  return (
    <form>
      <Heading tag="h1" level={4} css="margin-bottom: 1rem">
        Join a meeting
      </Heading>
      <FormField
        field={Input}
        label="Meeting Id"
        value={meetingId}
        infoText="Anyone with access to the meeting ID can join"
        fieldProps={{
          name: "meetingId",
          placeholder: "Enter Meeting Id"
        }}
        errorText="Please enter a valid meeting ID"
        error={meetingErr}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setMeetingId(e.target.value);
          if (meetingErr) {
            setMeetingErr(false);
          }
        }}
      />
      <FormField
        field={Input}
        label="Name"
        value={name}
        fieldProps={{
          name: "name",
          placeholder: "Enter Your Name"
        }}
        errorText="Please enter a valid name"
        error={nameErr}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setName(e.target.value);
          if (nameErr) {
            setNameErr(false);
          }
        }}
      />
      <RegionSelection setRegion={setRegion} region={region} />
      <Flex
        container
        layout="fill-space-centered"
        style={{ marginTop: "2.5rem" }}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <PrimaryButton label="Continue" onClick={handleJoinMeeting} />
        )}
      </Flex>
      {errorMessage && (
        <Modal size="md" onClose={closeError}>
          <ModalHeader title={`Meeting ID: ${meetingId}`} />
          <ModalBody>
            <Card
              title="Unable to join meeting"
              description="There was an issue finding that meeting. The meeting may have already ended, or your authorization may have expired."
              smallText={errorMessage}
            />
          </ModalBody>
        </Modal>
      )}
      <DevicePermissionPrompt />
    </form>
  );
};

export default MeetingForm;
