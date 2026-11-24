import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityDoesNotExist = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityDoesNotExistSchema: Schema<ActivityDoesNotExist> = s.object<ActivityDoesNotExist>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
