import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Other charges levied */
export type OtherTaxes1 = {
  /** Transaction charges */
  transaction?: number;
  /** Clearing charges */
  clearing?: number;
  /** IPF charges */
  ipft?: number;
  /** SEBI turnover charges */
  sebiTurnover?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherTaxes1Schema: Schema<OtherTaxes1> = s.object<OtherTaxes1>(
  {
    transaction: s.optional(s.float64()),
    clearing: s.optional(s.float64()),
    ipft: s.optional(s.float64()),
    sebiTurnover: s.optional(s.float64()),
    _keysMap: {
      sebiTurnover: "sebi_turnover",
    },
  },
  { additionalProperties: s.json() },
);
