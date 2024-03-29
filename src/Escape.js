import { useEffect } from 'react';

const useEscapeClick = (ref, callback) => {
    const handleEscape = (e) => {
        if (e.keyCode === 27) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscape, true);
        console.log(111);

        return () => {
            document.addEventListener("keydown", handleEscape, true);
        };
    });
};

export default useEscapeClick;