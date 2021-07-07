import React from 'react';
import { Livestreaming } from '@jcgalvis/vtex.livestreaming';
import '@jcgalvis/vtex.livestreaming/dist/index.css';

const LivestreamingPortal = () => {
    return (
        <Livestreaming
          streamUrl='https://a8a9a64b061c.us-east-1.playback.live-video.net/api/video/v1/us-east-1.356389886440.channel.VhqZMzkD4iPi.m3u8'
          wssStream='wss://nuhvpxi83d.execute-api.us-east-1.amazonaws.com/Prod'
        />
    );
};

export default LivestreamingPortal;
