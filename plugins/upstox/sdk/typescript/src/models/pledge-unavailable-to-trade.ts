import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PledgeUnavailableToTrade = {
  equity?: number;
  mutualFunds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pledgeUnavailableToTradeSchema: Schema<PledgeUnavailableToTrade> =
  s.object<PledgeUnavailableToTrade>(
    {
      equity: s.optional(s.float64()),
      mutualFunds: s.optional(s.float64()),
      _keysMap: {
        mutualFunds: "mutual_funds",
      },
    },
    { additionalProperties: s.json() },
  );
