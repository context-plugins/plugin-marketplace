import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Signals = {
  fortune500Rank?: number;
  fortune1000Rank?: number;
  g2KRank?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsSchema: Schema<Signals> = s.object<Signals>(
  {
    fortune500Rank: s.optional(s.float64()),
    fortune1000Rank: s.optional(s.float64()),
    g2KRank: s.optional(s.float64()),
    _keysMap: {
      fortune500Rank: "fortune_500_rank",
      fortune1000Rank: "fortune_1000_rank",
      g2KRank: "g2k_rank",
    },
  },
  { additionalProperties: s.json() },
);
