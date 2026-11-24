import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfitAndLossOtherChargesTaxes = {
  /** transaction charges */
  transaction?: number;
  /** clearing charges */
  clearing?: number;
  /** IPF charges */
  ipft?: number;
  /** others charges */
  others?: number;
  /** SEBI turnover */
  sebiTurnover?: number;
  /** demat transaction charges */
  dematTransaction?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossOtherChargesTaxesSchema: Schema<ProfitAndLossOtherChargesTaxes> =
  s.object<ProfitAndLossOtherChargesTaxes>(
    {
      transaction: s.optional(s.float64()),
      clearing: s.optional(s.float64()),
      ipft: s.optional(s.float64()),
      others: s.optional(s.float64()),
      sebiTurnover: s.optional(s.float64()),
      dematTransaction: s.optional(s.float64()),
      _keysMap: {
        sebiTurnover: "sebi_turnover",
        dematTransaction: "demat_transaction",
      },
    },
    { additionalProperties: s.json() },
  );
