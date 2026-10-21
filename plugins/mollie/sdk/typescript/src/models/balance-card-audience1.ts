import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** In case of payments trnsactions with card, the card audience will be available. */
export const BalanceCardAudience1 = {
  Corporate: "corporate",
  Other: "other",
} as const;
export type BalanceCardAudience1 =
  | (typeof BalanceCardAudience1)[keyof typeof BalanceCardAudience1]
  | (string & {});

export const balanceCardAudience1Schema: EnumSchema<BalanceCardAudience1> =
  s.enumOf<BalanceCardAudience1>(BalanceCardAudience1);
