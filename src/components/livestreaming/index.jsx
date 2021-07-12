import React from 'react';
import { Livestreaming } from '@jcgalvis/vtex.livestreaming';
import '@jcgalvis/vtex.livestreaming/dist/index.css';

const LivestreamingPortal = () => {
    return (
        <Livestreaming idLivestreaming="__IDLIVESTREAMING" account="__ACCOUNT" />
    );
};

export default LivestreamingPortal;
