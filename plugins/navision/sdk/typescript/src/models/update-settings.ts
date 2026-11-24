import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSettings = {
  /** Preferred start time for the update window (UTC) */
  preferredStartTimeUtc?: Date;
  /** Preferred end time for the update window (UTC) */
  preferredEndTimeUtc?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSettingsSchema: Schema<UpdateSettings> = s.object<UpdateSettings>(
  {
    preferredStartTimeUtc: s.optional(s.dateTime()),
    preferredEndTimeUtc: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
