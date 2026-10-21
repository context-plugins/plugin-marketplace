import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether to stream the response. When set to `true`, events are sent as [server-sent
 * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
 * once generated.
 */
export type Stream8 = boolean;

export const stream8Schema: Schema<Stream8> = s.of<Stream8>(s.union([s.boolean()]));
