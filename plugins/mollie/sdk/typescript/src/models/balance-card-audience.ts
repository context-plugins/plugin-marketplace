import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceCardAudience = {
  Corporate: "corporate",
  Other: "other",
} as const;
export type BalanceCardAudience =
  | (typeof BalanceCardAudience)[keyof typeof BalanceCardAudience]
  | (string & {});

export const balanceCardAudienceSchema: EnumSchema<BalanceCardAudience> =
  s.enumOf<BalanceCardAudience>(BalanceCardAudience);
