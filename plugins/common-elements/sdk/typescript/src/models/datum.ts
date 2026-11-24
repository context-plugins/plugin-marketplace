import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum = {
  /** Two-letter state code. */
  state?: string;
  /** Associations in the state, summed across subtypes. */
  associationCount?: number;
  /** Subtype to count, e.g. { "hoa": 51204, "condo": 27810 }. */
  bySubtype?: Record<string, unknown>;
  /** Insurance licensees recorded in the state. */
  insuranceLicenseeCount?: number;
  /** Of those, the ones recorded as active. */
  insuranceActiveCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumSchema: Schema<Datum> = s.object<Datum>(
  {
    state: s.optional(s.string()),
    associationCount: s.optional(s.float64()),
    bySubtype: s.optional(s.record(s.string(), s.unknown())),
    insuranceLicenseeCount: s.optional(s.float64()),
    insuranceActiveCount: s.optional(s.float64()),
    _keysMap: {
      associationCount: "association_count",
      bySubtype: "by_subtype",
      insuranceLicenseeCount: "insurance_licensee_count",
      insuranceActiveCount: "insurance_active_count",
    },
  },
  { additionalProperties: s.json() },
);
