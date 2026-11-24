import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cashUnavailableToTradeSchema, type CashUnavailableToTrade } from "./cash-unavailable-to-trade.js";
import {
  pledgeUnavailableToTradeSchema,
  type PledgeUnavailableToTrade,
} from "./pledge-unavailable-to-trade.js";

export type UnavailableToTrade = {
  cashUnavailableToTrade?: CashUnavailableToTrade;
  pledgeUnavailableToTrade?: PledgeUnavailableToTrade;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unavailableToTradeSchema: Schema<UnavailableToTrade> = s.object<UnavailableToTrade>(
  {
    cashUnavailableToTrade: s.optional(s.lazy(() => cashUnavailableToTradeSchema)),
    pledgeUnavailableToTrade: s.optional(s.lazy(() => pledgeUnavailableToTradeSchema)),
    _keysMap: {
      cashUnavailableToTrade: "cash_unavailable_to_trade",
      pledgeUnavailableToTrade: "pledge_unavailable_to_trade",
    },
  },
  { additionalProperties: s.json() },
);
