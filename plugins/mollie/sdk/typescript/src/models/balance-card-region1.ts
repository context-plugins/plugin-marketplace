import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** In case of payments transactions with card, the card region will be available. */
export const BalanceCardRegion1 = {
  IntraEea: "intra-eea",
  IntraEu: "intra-eu",
  Domestic: "domestic",
  Other: "other",
} as const;
export type BalanceCardRegion1 = (typeof BalanceCardRegion1)[keyof typeof BalanceCardRegion1] | (string & {});

export const balanceCardRegion1Schema: EnumSchema<BalanceCardRegion1> =
  s.enumOf<BalanceCardRegion1>(BalanceCardRegion1);
