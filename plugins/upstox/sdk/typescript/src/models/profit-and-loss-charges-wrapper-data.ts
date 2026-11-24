import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  profitAndLossChargesData1Schema,
  type ProfitAndLossChargesData1,
} from "./profit-and-loss-charges-data1.js";

export type ProfitAndLossChargesWrapperData = {
  /** Response data for charges details */
  chargesBreakdown?: ProfitAndLossChargesData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossChargesWrapperDataSchema: Schema<ProfitAndLossChargesWrapperData> =
  s.object<ProfitAndLossChargesWrapperData>(
    {
      chargesBreakdown: s.optional(s.lazy(() => profitAndLossChargesData1Schema)),
      _keysMap: {
        chargesBreakdown: "charges_breakdown",
      },
    },
    { additionalProperties: s.json() },
  );
