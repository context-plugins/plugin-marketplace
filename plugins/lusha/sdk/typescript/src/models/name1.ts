import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Name1 = {
  Angel: "angel",
  Venture: "venture",
  PrivateEquity: "private_equity",
  Crowdfunding: "crowdfunding",
  Grant: "grant",
  DebtFinancing: "debt_financing",
  Other: "other",
} as const;
export type Name1 = (typeof Name1)[keyof typeof Name1] | (string & {});

export const name1Schema: EnumSchema<Name1> = s.enumOf<Name1>(Name1);
