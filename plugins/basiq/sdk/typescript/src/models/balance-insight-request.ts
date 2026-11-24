import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balance2Schema, type Balance2 } from "./balance2.js";

export type BalanceInsightRequest = {
  /** Balance criteria for filtering accounts. Only 'min' is required, 'max' is optional. */
  balance: Balance2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceInsightRequestSchema: Schema<BalanceInsightRequest> = s.object<BalanceInsightRequest>(
  {
    balance: balance2Schema,
  },
  { additionalProperties: s.json() },
);
