import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Signal label from the transaction code: `buy` (P, open-market purchase), `sell` (S, open-market
 * sale), `other` for everything else — including D (sale to the issuer: a buyback/redemption, not
 * an open-market disposition). Use `transaction_code` for your own mapping.
 */
export const Side = {
  Buy: "buy",
  Sell: "sell",
  Other: "other",
} as const;
export type Side = (typeof Side)[keyof typeof Side] | (string & {});

export const sideSchema: EnumSchema<Side> = s.enumOf<Side>(Side);
