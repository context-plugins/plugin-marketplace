import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OhlcV3 = {
  /** The open price of the trading session */
  open?: number;
  /** The high price of the trading session */
  high?: number;
  /** The low price of the trading session */
  low?: number;
  /** The close price of the symbol from the previous session of trading */
  close?: number;
  /** The volume of the symbol traded in the session */
  volume?: number;
  /** Starting timestamp of candle */
  ts?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ohlcV3Schema: Schema<OhlcV3> = s.object<OhlcV3>(
  {
    open: s.optional(s.float64()),
    high: s.optional(s.float64()),
    low: s.optional(s.float64()),
    close: s.optional(s.float64()),
    volume: s.optional(s.int()),
    ts: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
