import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Owner = {
  CurrentAccount: "CURRENT_ACCOUNT",
  OtherAccounts: "OTHER_ACCOUNTS",
} as const;
export type Owner = (typeof Owner)[keyof typeof Owner] | (string & {});

export const ownerSchema: EnumSchema<Owner> = s.enumOf<Owner>(Owner);
