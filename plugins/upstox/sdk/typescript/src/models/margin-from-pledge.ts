import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MarginFromPledge = {
  total?: number;
  equity?: number;
  mutualFunds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marginFromPledgeSchema: Schema<MarginFromPledge> = s.object<MarginFromPledge>(
  {
    total: s.optional(s.float64()),
    equity: s.optional(s.float64()),
    mutualFunds: s.optional(s.float64()),
    _keysMap: {
      mutualFunds: "mutual_funds",
    },
  },
  { additionalProperties: s.json() },
);
