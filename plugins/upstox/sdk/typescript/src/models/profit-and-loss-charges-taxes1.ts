import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Taxes levied on order */
export type ProfitAndLossChargesTaxes1 = {
  /** GST charges */
  gst?: number;
  /** STT charges */
  stt?: number;
  /** Stamp duty charges */
  stampDuty?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profitAndLossChargesTaxes1Schema: Schema<ProfitAndLossChargesTaxes1> =
  s.object<ProfitAndLossChargesTaxes1>(
    {
      gst: s.optional(s.float64()),
      stt: s.optional(s.float64()),
      stampDuty: s.optional(s.float64()),
      _keysMap: {
        stampDuty: "stamp_duty",
      },
    },
    { additionalProperties: s.json() },
  );
