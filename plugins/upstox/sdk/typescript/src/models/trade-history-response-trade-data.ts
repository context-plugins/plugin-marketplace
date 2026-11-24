import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TradeHistoryResponseTradeData = {
  exchange?: string;
  segment?: string;
  optionType?: string;
  quantity?: number;
  amount?: number;
  tradeId?: string;
  tradeDate?: string;
  transactionType?: string;
  scripName?: string;
  strikePrice?: string;
  expiry?: string;
  price?: number;
  isin?: string;
  symbol?: string;
  instrumentToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeHistoryResponseTradeDataSchema: Schema<TradeHistoryResponseTradeData> =
  s.object<TradeHistoryResponseTradeData>(
    {
      exchange: s.optional(s.string()),
      segment: s.optional(s.string()),
      optionType: s.optional(s.string()),
      quantity: s.optional(s.int()),
      amount: s.optional(s.float64()),
      tradeId: s.optional(s.string()),
      tradeDate: s.optional(s.string()),
      transactionType: s.optional(s.string()),
      scripName: s.optional(s.string()),
      strikePrice: s.optional(s.string()),
      expiry: s.optional(s.string()),
      price: s.optional(s.float64()),
      isin: s.optional(s.string()),
      symbol: s.optional(s.string()),
      instrumentToken: s.optional(s.string()),
      _keysMap: {
        optionType: "option_type",
        tradeId: "trade_id",
        tradeDate: "trade_date",
        transactionType: "transaction_type",
        scripName: "scrip_name",
        strikePrice: "strike_price",
        instrumentToken: "instrument_token",
      },
    },
    { additionalProperties: s.json() },
  );
