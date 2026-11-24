import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioLogDestinationSchema, type AudioLogDestination } from "./audio-log-destination.js";

export type AudioLogSetting = {
  /** Determines whether audio logging in enabled for the bot. */
  enabled: boolean;
  destination: AudioLogDestination;
  /** The option to enable selective conversation log capture for audio. */
  selectiveLoggingEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioLogSettingSchema: Schema<AudioLogSetting> = s.object<AudioLogSetting>(
  {
    enabled: s.boolean(),
    destination: audioLogDestinationSchema,
    selectiveLoggingEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
