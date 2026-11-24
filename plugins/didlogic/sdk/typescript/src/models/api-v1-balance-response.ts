import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1BalanceResponse = {
  /** Current account balance rounded to 2 decimal places */
  balance: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1BalanceResponseSchema: Schema<ApiV1BalanceResponse> = s.object<ApiV1BalanceResponse>(
  {
    balance: s.float64(),
  },
  { additionalProperties: s.json() },
);
