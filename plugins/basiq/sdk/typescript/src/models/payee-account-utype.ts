import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of domestic payee account. */
export const PayeeAccountUType = {
  Account: "account",
  PayId: "payId",
} as const;
export type PayeeAccountUType = (typeof PayeeAccountUType)[keyof typeof PayeeAccountUType] | (string & {});

export const payeeAccountUTypeSchema: EnumSchema<PayeeAccountUType> =
  s.enumOf<PayeeAccountUType>(PayeeAccountUType);
