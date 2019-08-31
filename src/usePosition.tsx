import { useState, useEffect } from 'react';

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    // @ts-ignore
    const onChange = ({ coords, timestamp }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            timestamp,
            accuracy: coords.accuracy,
        });
    };
    // @ts-ignore
    const onError = (error) => {
        setError(error.message);
    };
    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            // @ts-ignore
            setError('Geolocation is not supported');
            return;
        }
        let watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);
    return { ...position, error };
};
