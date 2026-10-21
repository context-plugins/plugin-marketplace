import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether to stream the transcription result. When set to `true`, the transcription is sent as
 * [server-sent
 * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
 * once generated.
 */
export type Stream6 = boolean;

export const stream6Schema: Schema<Stream6> = s.of<Stream6>(s.union([s.boolean()]));
