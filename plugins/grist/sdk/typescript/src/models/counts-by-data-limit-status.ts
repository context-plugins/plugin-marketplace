import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Count of documents grouped by data limit status */
export type CountsByDataLimitStatus = {
  approachingLimit?: number;
  gracePeriod?: number;
  deleteOnly?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countsByDataLimitStatusSchema: Schema<CountsByDataLimitStatus> =
  s.object<CountsByDataLimitStatus>(
    {
      approachingLimit: s.optional(s.int()),
      gracePeriod: s.optional(s.int()),
      deleteOnly: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
