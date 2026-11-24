import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cashBreakdownSchema, type CashBreakdown } from "./cash-breakdown.js";
import { cashMarginUsedSchema, type CashMarginUsed } from "./cash-margin-used.js";

export type CashAvailableToTrade = {
  total?: number;
  cash?: CashBreakdown;
  marginUsed?: CashMarginUsed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashAvailableToTradeSchema: Schema<CashAvailableToTrade> = s.object<CashAvailableToTrade>(
  {
    total: s.optional(s.float64()),
    cash: s.optional(s.lazy(() => cashBreakdownSchema)),
    marginUsed: s.optional(s.lazy(() => cashMarginUsedSchema)),
    _keysMap: {
      marginUsed: "margin_used",
    },
  },
  { additionalProperties: s.json() },
);
