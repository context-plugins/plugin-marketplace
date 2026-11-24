import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MortgagecalculatorRequest = {
  /** The loan amount */
  amount: number;
  /** The interest rate (percentage) */
  rate: number;
  /** The loan term in years */
  years: number;
  /** The down payment amount */
  downpayment?: number;
  /** The annual property tax amount */
  annualPropertytax?: number;
  /** The annual home insurance amount */
  annualHomeinsurance?: number;
  /** The annual HOA amount */
  annualHoa?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MortgagecalculatorRequestSchema: Schema<V1MortgagecalculatorRequest> =
  s.object<V1MortgagecalculatorRequest>(
    {
      amount: s.float64(),
      rate: s.float64(),
      years: s.int(),
      downpayment: s.optional(s.float64()),
      annualPropertytax: s.optional(s.float64()),
      annualHomeinsurance: s.optional(s.float64()),
      annualHoa: s.optional(s.float64()),
      _keysMap: {
        annualPropertytax: "annual_propertytax",
        annualHomeinsurance: "annual_homeinsurance",
        annualHoa: "annual_hoa",
      },
    },
    { additionalProperties: s.json() },
  );
