import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether to stream the generation result. When set to `true`, the response is sent as [server-sent
 * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
 * once generated.
 */
export type Stream9 = boolean;

export const stream9Schema: Schema<Stream9> = s.of<Stream9>(s.union([s.boolean()]));
