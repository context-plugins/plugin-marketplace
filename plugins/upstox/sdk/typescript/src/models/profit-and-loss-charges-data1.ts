import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profitAndLossChargesTaxes1Schema,
  type ProfitAndLossChargesTaxes1,
} from "./profit-and-loss-charges-taxes1.js";
import {
  profitAndLossOtherChargesTaxes2Schema,
  type ProfitAndLossOtherChargesTaxes2,
} from "./profit-and-loss-other-charges-taxes2.js";

/** Response data for charges details */
export type ProfitAndLossChargesData1 = {
  /** Total charges for the user */
  total?: number;
  /** Brokerage charges for the order */
  brokerage?: number;
  /** Taxes levied on order */
  taxes?: ProfitAndLossChargesTaxes1;
  /** Other charges levied */
  charges?: ProfitAndLossOtherChargesTaxes2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossChargesData1Schema: Schema<ProfitAndLossChargesData1> =
  s.object<ProfitAndLossChargesData1>(
    {
      total: s.optional(s.float64()),
      brokerage: s.optional(s.float64()),
      taxes: s.optional(s.lazy(() => profitAndLossChargesTaxes1Schema)),
      charges: s.optional(s.lazy(() => profitAndLossOtherChargesTaxes2Schema)),
    },
    { additionalProperties: s.json() },
  );
