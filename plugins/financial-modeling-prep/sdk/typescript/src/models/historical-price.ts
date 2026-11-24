import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoricalPrice = {
  date?: string;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  adjClose?: number;
  volume?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalPriceSchema: Schema<HistoricalPrice> = s.object<HistoricalPrice>(
  {
    date: s.optional(s.dateOnly()),
    open: s.optional(s.float64()),
    high: s.optional(s.float64()),
    low: s.optional(s.float64()),
    close: s.optional(s.float64()),
    adjClose: s.optional(s.float64()),
    volume: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
