import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details of the education program being paid for. */
export type Program = {
  /** Total payment plan tenure in months. */
  paymentTenureMonths: number;
  /** Months remaining until program completion / graduation. */
  monthsToCompletion: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const programSchema: Schema<Program> = s.object<Program>(
  {
    paymentTenureMonths: s.int(),
    monthsToCompletion: s.int(),
    _keysMap: {
      paymentTenureMonths: "payment_tenure_months",
      monthsToCompletion: "months_to_completion",
    },
  },
  { additionalProperties: s.json() },
);
