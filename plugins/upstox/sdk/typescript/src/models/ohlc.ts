import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Ohlc = {
  /** The open price of the trading session */
  open?: number;
  /** The high price of the trading session */
  high?: number;
  /** The low price of the trading session */
  low?: number;
  /** The close price of the symbol from the previous session of trading */
  close?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ohlcSchema: Schema<Ohlc> = s.object<Ohlc>(
  {
    open: s.optional(s.float64()),
    high: s.optional(s.float64()),
    low: s.optional(s.float64()),
    close: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
