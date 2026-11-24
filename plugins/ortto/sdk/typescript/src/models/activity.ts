import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Activity = {
  activityId?: string;
  personId?: string;
  attributes?: Record<string, unknown>;
  fields?: Record<string, unknown>;
  location?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activitySchema: Schema<Activity> = s.object<Activity>(
  {
    activityId: s.optional(s.string()),
    personId: s.optional(s.string()),
    attributes: s.optional(s.record(s.string(), s.unknown())),
    fields: s.optional(s.record(s.string(), s.unknown())),
    location: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      activityId: "activity_id",
      personId: "person_id",
    },
  },
  { additionalProperties: s.json() },
);
