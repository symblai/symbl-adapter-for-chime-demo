const u1_id = 'b3b55a3a-1728-4d6f-a0cf-99dcc17d445b';
const rec_res_1 = {
  type: 'message',
  message: {
    type: 'recognition_result',
    isFinal: false,
    payload: {
      raw: {
        alternatives: [
          {
            words: [
              {
                word: 'I',
                startTime: { seconds: '4', nanos: '000000000' },
                endTime: { seconds: '4', nanos: '300000000' },
              },
              {
                word: 'need',
                startTime: { seconds: '4', nanos: '300000000' },
                endTime: { seconds: '4', nanos: '600000000' },
              },
              {
                word: 'to',
                startTime: { seconds: '4', nanos: '600000000' },
                endTime: { seconds: '4', nanos: '700000000' },
              },
              {
                word: 'take',
                startTime: { seconds: '4', nanos: '700000000' },
                endTime: { seconds: '5', nanos: '000000000' },
              },
              {
                word: 'out',
                startTime: { seconds: '5', nanos: '000000000' },
                endTime: { seconds: '5', nanos: '100000000' },
              },
              {
                word: 'the',
                startTime: { seconds: '5', nanos: '100000000' },
                endTime: { seconds: '5', nanos: '200000000' },
              },
              {
                word: 'trash.',
                startTime: { seconds: '5', nanos: '200000000' },
                endTime: { seconds: '5', nanos: '400000000' },
              },
            ],
            transcript: 'I need to take out the trash.',
            confidence: 0.9876289963722229,
          },
        ],
      },
    },
    punctuated: { transcript: 'I need to take out the trash.' },
    user: {
      userId: 'b3b55a3a-1728-4d6f-a0cf-99dcc17d445b',
      name: 'Test',
      id: '03f0da12-3ade-451a-ac1b-8ae93e300e81',
    },
  },
};

const rec_final = {
  type: 'message',
  message: {
    type: 'recognition_result',
    isFinal: true,
    payload: {
      raw: {
        alternatives: [
          {
            words: [
              {
                word: 'Hey,',
                startTime: { seconds: '23', nanos: '997000000' },
                endTime: { seconds: '24', nanos: '297000000' },
              },
              {
                word: "what's",
                startTime: { seconds: '24', nanos: '297000000' },
                endTime: { seconds: '24', nanos: '597000000' },
              },
              {
                word: 'going',
                startTime: { seconds: '24', nanos: '597000000' },
                endTime: { seconds: '24', nanos: '697000000' },
              },
              {
                word: 'on',
                startTime: { seconds: '24', nanos: '697000000' },
                endTime: { seconds: '25', nanos: '097000000' },
              },
              {
                word: 'on',
                startTime: { seconds: '25', nanos: '097000000' },
                endTime: { seconds: '25', nanos: '197000000' },
              },
              {
                word: 'this',
                startTime: { seconds: '25', nanos: '197000000' },
                endTime: { seconds: '25', nanos: '597000000' },
              },
              {
                word: 'side?',
                startTime: { seconds: '25', nanos: '597000000' },
                endTime: { seconds: '26', nanos: '197000000' },
              },
              {
                word: 'Hey,',
                startTime: { seconds: '26', nanos: '197000000' },
                endTime: { seconds: '26', nanos: '997000000' },
              },
              {
                word: 'Randy,',
                startTime: { seconds: '26', nanos: '997000000' },
                endTime: { seconds: '27', nanos: '597000000' },
              },
              {
                word: 'you',
                startTime: { seconds: '27', nanos: '597000000' },
                endTime: { seconds: '28', nanos: '297000000' },
              },
              {
                word: 'might',
                startTime: { seconds: '28', nanos: '297000000' },
                endTime: { seconds: '28', nanos: '497000000' },
              },
              {
                word: 'could',
                startTime: { seconds: '28', nanos: '497000000' },
                endTime: { seconds: '28', nanos: '697000000' },
              },
              {
                word: 'wear',
                startTime: { seconds: '28', nanos: '697000000' },
                endTime: { seconds: '28', nanos: '897000000' },
              },
              {
                word: 'these',
                startTime: { seconds: '28', nanos: '897000000' },
                endTime: { seconds: '29', nanos: '197000000' },
              },
              {
                word: 'to',
                startTime: { seconds: '29', nanos: '197000000' },
                endTime: { seconds: '29', nanos: '797000000' },
              },
              {
                word: 'your',
                startTime: { seconds: '29', nanos: '797000000' },
                endTime: { seconds: '29', nanos: '897000000' },
              },
              {
                word: 'job',
                startTime: { seconds: '29', nanos: '897000000' },
                endTime: { seconds: '30', nanos: '197000000' },
              },
              {
                word: 'interview.',
                startTime: { seconds: '30', nanos: '197000000' },
                endTime: { seconds: '30', nanos: '497000000' },
              },
            ],
            transcript:
              "Hey, what's going on on this side? Hey, Randy, you might could wear these to your job interview.",
            confidence: 0.8777420520782471,
          },
        ],
      },
    },
    punctuated: {
      transcript:
        "Hey, what's going on on this side? Hey, Randy, you might could wear these to your job interview.",
    },
    user: {
      userId: '4780c120-4cd6-4388-af0e-3a5164f126e2',
      name: 'Charlie',
      id: 'a9cb2235-e872-4aec-8241-dd8c548a370c',
    },
  },
};

const a1 = {
  type: 'insight_response',
  insights: [
    {
      id: 'acefc498-99fa-4060-9e93-530059d67616',
      type: 'action_item',
      text: 'Test needs to take out the trash.',
      confidence: 0.9996009401662496,
      hints: [
        { key: 'definitive', value: 'true' },
        { key: 'addressedTo', value: '["first_person_singular"]' },
        { key: 'informationScore', value: '0.9144021739130435' },
      ],
      from: {
        id: '03f0da12-3ade-451a-ac1b-8ae93e300e81',
        name: 'Test',
        userId: 'b3b55a3a-1728-4d6f-a0cf-99dcc17d445b',
      },
      assignee: {
        id: '03f0da12-3ade-451a-ac1b-8ae93e300e81',
        name: 'Test',
        userId: 'b3b55a3a-1728-4d6f-a0cf-99dcc17d445b',
      },
      tags: [],
    },
  ],
  sequenceNumber: 0,
};

const a2 = {
  type: 'insight_response',
  insights: [
    {
      id: 'af473d5d-71e1-4bd5-9994-be7a85b22d92',
      type: 'action_item',
      text: 'Join the service to make friends.',
      confidence: 0.9370109456910042,
      hints: [
        { key: 'definitive', value: 'true' },
        { key: 'informationScore', value: '0.8552989130434783' },
      ],
      from: {
        id: 'a9cb2235-e872-4aec-8241-dd8c548a370c',
        name: 'Charlie',
        userId: '4780c120-4cd6-4388-af0e-3a5164f126e2',
      },
      assignee: {
        id: 'a9cb2235-e872-4aec-8241-dd8c548a370c',
        name: 'Test',
        userId: '4780c120-4cd6-4388-af0e-3a5164f126e2',
      },
      tags: [],
    },
  ],
  sequenceNumber: 46,
};

const q1 = {
  type: 'insight_response',
  insights: [
    {
      type: 'question',
      text: "Hey, what's going on this side?",
      confidence: 0.9994603168359434,
      from: {
        id: 'a9cb2235-e872-4aec-8241-dd8c548a370c',
        name: 'Test',
        userId: '4780c120-4cd6-4388-af0e-3a5164f126e2',
      },
      assignee: {
        id: 'a9cb2235-e872-4aec-8241-dd8c548a370c',
        name: 'Test',
        userId: '4780c120-4cd6-4388-af0e-3a5164f126e2',
      },
    },
  ],
  sequenceNumber: 0,
};

module.exports = {
  actionItems: [a1, a2],
  questions: [q1],
  messages: [rec_res_1],
  transcripts: [rec_final],
};
