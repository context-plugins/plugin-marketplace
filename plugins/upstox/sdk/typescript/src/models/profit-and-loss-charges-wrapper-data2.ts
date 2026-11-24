import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profitAndLossChargesData1Schema,
  type ProfitAndLossChargesData1,
} from "./profit-and-loss-charges-data1.js";

/** Response data for brokerage */
export type ProfitAndLossChargesWrapperData2 = {
  /** Response data for charges details */
  chargesBreakdown?: ProfitAndLossChargesData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossChargesWrapperData2Schema: Schema<ProfitAndLossChargesWrapperData2> =
  s.object<ProfitAndLossChargesWrapperData2>(
    {
      chargesBreakdown: s.optional(s.lazy(() => profitAndLossChargesData1Schema)),
      _keysMap: {
        chargesBreakdown: "charges_breakdown",
      },
    },
    { additionalProperties: s.json() },
  );
