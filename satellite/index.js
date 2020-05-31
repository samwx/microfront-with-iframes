import { IframeMessageProxy } from 'iframe-message-proxy';
import { handleEvent } from './eventReceivers';

// Start listen for iframe messages
IframeMessageProxy.listen();
window.addEventListener('message', handleEvent);
