import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [time, setTime] = useState(Date.now());
    const [count, setCount] = useState(0);

    // gets called when this route is navigated to
    useEffect(() => {
        const timer = window.setInterval(() => setTime(Date.now()), 1000);

        // gets called just before navigating away from the route
        return () => {
            clearInterval(timer);
        };
    }, []);

    // update the current time
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>Current time: {new Date(time).toLocaleString()}</div>

            <p>
                <button onClick={increment}>Click Me</button> Clicked {count}{' '}
                times.
            </p>
        </div>
    );
};

export default Profile;
