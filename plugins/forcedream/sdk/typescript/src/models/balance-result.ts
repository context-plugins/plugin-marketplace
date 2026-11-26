import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";

export type BalanceResult = {
  userId?: string;
  balance?: Balance;
  totalCalls?: number;
  earningsPct?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const balanceResultSchema: Schema<BalanceResult> = s.object<BalanceResult>(
  {
    userId: s.optional(s.string()),
    balance: s.optional(s.lazy(() => balanceSchema)),
    totalCalls: s.optional(s.int()),
    earningsPct: s.optional(s.int()),
    _keysMap: {
      userId: "user_id",
      totalCalls: "total_calls",
      earningsPct: "earnings_pct",
    },
  },
  { additionalProperties: s.json() },
);
