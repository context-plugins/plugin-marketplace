import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Funding purpose. */
export type FundingPurpose = {
  /** Purpose category */
  category?: string;
  /** Purpose sub-category */
  subCategories?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingPurposeSchema: Schema<FundingPurpose> = s.object<FundingPurpose>(
  {
    category: s.optional(s.string()),
    subCategories: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
