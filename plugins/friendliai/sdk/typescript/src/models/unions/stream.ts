import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether to stream the generation result. When set to `true`, each token is sent as [server-sent
 * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
 * once generated.
 */
export type Stream = boolean;

export const streamSchema: Schema<Stream> = s.of<Stream>(s.union([s.boolean()]));
