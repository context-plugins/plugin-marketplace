import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { income1Schema, type Income1 } from "./income1.js";

/** Required when type is INCOME_VERIFICATION. */
export type IncomeVerificationData = {
  income: Income1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const incomeVerificationDataSchema: Schema<IncomeVerificationData> = s.object<IncomeVerificationData>(
  {
    income: income1Schema,
  },
  { additionalProperties: s.json() },
);
