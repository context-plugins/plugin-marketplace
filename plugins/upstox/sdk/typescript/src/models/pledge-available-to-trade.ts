import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marginFromPledgeSchema, type MarginFromPledge } from "./margin-from-pledge.js";
import { pledgeMarginUsedSchema, type PledgeMarginUsed } from "./pledge-margin-used.js";

export type PledgeAvailableToTrade = {
  marginFromPledge?: MarginFromPledge;
  marginUsed?: PledgeMarginUsed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pledgeAvailableToTradeSchema: Schema<PledgeAvailableToTrade> = s.object<PledgeAvailableToTrade>(
  {
    marginFromPledge: s.optional(s.lazy(() => marginFromPledgeSchema)),
    marginUsed: s.optional(s.lazy(() => pledgeMarginUsedSchema)),
    _keysMap: {
      marginFromPledge: "margin_from_pledge",
      marginUsed: "margin_used",
    },
  },
  { additionalProperties: s.json() },
);
