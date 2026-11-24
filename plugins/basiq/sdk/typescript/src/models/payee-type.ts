import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of payee. */
export const PayeeType = {
  Domestic: "domestic",
  Biller: "biller",
  International: "international",
  DigitalWallet: "digitalWallet",
} as const;
export type PayeeType = (typeof PayeeType)[keyof typeof PayeeType] | (string & {});

export const payeeTypeSchema: EnumSchema<PayeeType> = s.enumOf<PayeeType>(PayeeType);
