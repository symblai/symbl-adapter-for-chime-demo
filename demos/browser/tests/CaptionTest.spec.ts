import 'mocha';
import { SymblEvents, TranscriptItem, Caption, Insight, Symbl } from '../app/meetingV2/symbl';
const { assert, expect } = require('chai');
const delay = require('delay');
const jsdom = require('mocha-jsdom')


const { actionItems, questions, messages, transcripts } = require('./mocks');

describe('Caption Tests', function() {


    jsdom({ url: 'http://localhost', globalize: true });

    it('Should fire subtitleCreated event', async function() {
        var _subtitle;
        const captionHandler = {
            subtitleCreated: (subtitle: any) => {
                _subtitle = subtitle;
            }
        };
        Symbl.events.subscribe('subtitle', captionHandler);
        let caption = new Caption(messages[0].message);
        assert.equal(_subtitle, caption);
    });
    it('Should add caption to video element', async function() {

        let videoElement = document.createElement('video');
        let caption = new Caption(messages[0].message);
        // caption.setVideoElement(videoElement);
        // assert.equal(videoElement.textTracks.length, 1);
        // Looking for workaround for VTTCue not existing in JSDOM
    });

    it('Should handle handlers', async function() {
        const updatedMessage = messages[0].message.punctuated.transcript + ' Updated content';
        const captionHandler1 = {
            subtitleCreated: (subtitle: any) => {
                console.log('subtitle created', subtitle);
                assert.equal(subtitle.message, messages[0].message.punctuated.transcript);
            },
        };
        Symbl.events.subscribe('subtitle', captionHandler1);
        const cap1 = new Caption(messages[0].message);
        Symbl.events.subscribe('subtitle', captionHandler1);

        const captionHandler2 = {
            subtitleUpdated: (subtitle: any) => {

                // Check if the video element is set correctly
                console.log('subtitle updated');
                assert.equal(subtitle.message, updatedMessage);
            },
        };
        Symbl.events.subscribe('subtitle', captionHandler2);
        cap1.updateContent(updatedMessage);
    })

    it('Should update message', async function() {
        // const vidEl_1 = document.createElement('video');
        // const vidEl_2 = document.createElement('video');
        const updatedMessage = messages[0].message.punctuated.transcript + ' Updated content';

        let updatePromise = new Promise((resolve, reject) => {
            const captionHandler = {
                subtitleCreated: (subtitle: any) => {
                    console.warn('Subtitle created', subtitle);
                    // Retrieve the video element that you wish to add the subtitle tracks to.

                },
                subtitleUpdated: (subtitle: any) => {

                    // Check if the video element is set correctly
                    resolve(subtitle);

                },
            };
            Symbl.events.subscribe('subtitle', captionHandler);
            const cap1 = new Caption(messages[0].message);
            cap1.updateContent(updatedMessage);
        });
        const subtitle = await updatePromise as Caption;
        assert.equal(subtitle.message, updatedMessage);

    });
});

describe('Insight Tests', function() {
    jsdom({url: 'http://localhost'});

    it('should create question insight', async function(){
        let insightData = questions[0].insights[0];

        let insight = new Insight(insightData);
        assert.equal(insight.type, 'question');
    });

    it('should create action item insight', async function(){
        let insight = new Insight(actionItems[0].insights[0]);
        assert.equal(insight.type, 'action_item');
    });

    it('should create insight element', async function(){
        let insight = new Insight(actionItems[0].insights[0]);
        const element = insight.createElement();
        console.log(element);
    });

    it('should use handlers correctly', function(){
        let insightData = questions[0].insights[0];
        const insightHandler = {
            onInsightCreated: (insight: any)=> {
                console.log('Insight created callback', insight);
                assert.equal(insight.text, insightData.text);
            }
        };
        Symbl.events.subscribe('insight', insightHandler);
        new Insight(insightData);
    })
});

describe('Transcript Tests', function() {
    jsdom({url: 'http://localhost'});
    it('should create transcript', function(){
        const transcriptData = transcripts[0].message;
        const transcript = new TranscriptItem(transcriptData)
        console.log(transcript);
        assert.equal(transcriptData.punctuated.transcript, transcript.message);
        assert.equal(transcriptData.user.name, transcript.userName);
    })
})
