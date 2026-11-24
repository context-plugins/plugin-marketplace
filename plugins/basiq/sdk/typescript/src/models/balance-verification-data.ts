import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balance3Schema, type Balance3 } from "./balance3.js";

/** Required when type is BALANCE_VERIFICATION. */
export type BalanceVerificationData = {
  balance: Balance3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceVerificationDataSchema: Schema<BalanceVerificationData> =
  s.object<BalanceVerificationData>(
    {
      balance: balance3Schema,
    },
    { additionalProperties: s.json() },
  );
