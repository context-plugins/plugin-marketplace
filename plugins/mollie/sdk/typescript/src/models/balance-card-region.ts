import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceCardRegion = {
  IntraEea: "intra-eea",
  IntraEu: "intra-eu",
  Domestic: "domestic",
  Other: "other",
} as const;
export type BalanceCardRegion = (typeof BalanceCardRegion)[keyof typeof BalanceCardRegion] | (string & {});

export const balanceCardRegionSchema: EnumSchema<BalanceCardRegion> =
  s.enumOf<BalanceCardRegion>(BalanceCardRegion);
