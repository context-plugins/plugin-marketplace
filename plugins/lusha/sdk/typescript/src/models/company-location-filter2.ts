import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Site-level office location filter. At least `country` is required. */
export type CompanyLocationFilter2 = {
  country: string;
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLocationFilter2Schema: Schema<CompanyLocationFilter2> = s.object<CompanyLocationFilter2>(
  {
    country: s.string(),
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
