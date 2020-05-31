export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Samuel Martins',
            website: 'samuelmartins.me',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
