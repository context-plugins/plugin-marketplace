import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Immutable. Requests streaming for a new gateway. An attempt to change it on update is
 * rejected. If unset, the service selects the mode. This field records only what was requested and
 * is never modified by the service; read `effective_streaming_mode` for the mode the gateway is
 * served with.
 */
export const StreamingMode = {
  StreamingModeUnspecified: "STREAMING_MODE_UNSPECIFIED",
  StreamingModeEnabled: "STREAMING_MODE_ENABLED",
} as const;
export type StreamingMode = (typeof StreamingMode)[keyof typeof StreamingMode] | (string & {});

export const streamingModeSchema: EnumSchema<StreamingMode> = s.enumOf<StreamingMode>(StreamingMode);
