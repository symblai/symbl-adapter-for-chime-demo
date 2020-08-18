## Browser Meeting

This demo allows you to use the Symbl Adapter for Chime SDK

### Prerequisites

To build, test, and run demos from source you will need:

* Node 10 or higher
* npm 6.11 or higher

Ensure you have AWS credentials configured in your `~/.aws` folder for a
role with a policy allowing
* `chime:CreateMeeting`
* `chime:DeleteMeeting`
* `chime:CreateAttendee`

### Running the browser demos with a local server

1. Navigate to the `demos/browser` folder: `cd demos/browser`

2. Start the demo application: `npm run start`

3. Open http://localhost:8080 in your browser.

### Demo applications

Browser demo applications are located in the `app` folder. Current demos are:

* `meetingV2`

To run a specific demo application use:

```
npm run start
```

For example, to run the `meeting` demo, run:

```
npm run start
```
