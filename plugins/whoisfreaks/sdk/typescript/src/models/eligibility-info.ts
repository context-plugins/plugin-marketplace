import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EligibilityInfo = {
  id?: string;
  name?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eligibilityInfoSchema: Schema<EligibilityInfo> = s.object<EligibilityInfo>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
