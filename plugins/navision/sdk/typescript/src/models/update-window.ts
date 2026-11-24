import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateWindow = {
  preferredStartTimeUtc?: Date;
  preferredEndTimeUtc?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateWindowSchema: Schema<UpdateWindow> = s.object<UpdateWindow>(
  {
    preferredStartTimeUtc: s.optional(s.dateTime()),
    preferredEndTimeUtc: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
