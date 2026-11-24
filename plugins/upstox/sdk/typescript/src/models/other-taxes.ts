import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OtherTaxes = {
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

export const otherTaxesSchema: Schema<OtherTaxes> = s.object<OtherTaxes>(
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
