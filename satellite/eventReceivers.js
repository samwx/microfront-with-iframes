import { getUsers } from './services/service1';

const FRAGMENT_EVENT_PREFIX = 'fragmentEvent:';
const shouldHandleMessage = (msg) =>
    Object.keys(msg).find(
        (k) => k == 'action' && msg.action.startsWith(FRAGMENT_EVENT_PREFIX)
    );

export const handleEvent = (fragmentEvent) => {
    if (
        !fragmentEvent.data ||
        !fragmentEvent.data.message ||
        !shouldHandleMessage(fragmentEvent.data.message)
    ) {
        return;
    }

    const { message, trackingProperties } = fragmentEvent.data;
    const payload = {
        message,
        trackingProperties,
        source: fragmentEvent.source,
    };

    switch (message.action) {
        case `${FRAGMENT_EVENT_PREFIX}getUser`:
            getUsers(payload);
            break;
    }
};
