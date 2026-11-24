import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityType = {
  /**
   * The name of this activity. The combination of activity type name and version must be unique
   * within a domain.
   */
  name: string;
  /**
   * The version of this activity. The combination of activity type name and version must be unique
   * with in a domain.
   */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTypeSchema: Schema<ActivityType> = s.object<ActivityType>(
  {
    name: s.string(),
    version: s.string(),
  },
  { additionalProperties: s.json() },
);
