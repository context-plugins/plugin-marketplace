import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdditionalIndustry = {
  industry?: string;
  subIndustry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const additionalIndustrySchema: Schema<AdditionalIndustry> = s.object<AdditionalIndustry>(
  {
    industry: s.optional(s.string()),
    subIndustry: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
