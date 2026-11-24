import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textLogDestinationSchema, type TextLogDestination } from "./text-log-destination.js";

export type TextLogSetting = {
  /** Determines whether conversation logs should be stored for an alias. */
  enabled: boolean;
  destination: TextLogDestination;
  /** The option to enable selective conversation log capture for text. */
  selectiveLoggingEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textLogSettingSchema: Schema<TextLogSetting> = s.object<TextLogSetting>(
  {
    enabled: s.boolean(),
    destination: textLogDestinationSchema,
    selectiveLoggingEnabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
