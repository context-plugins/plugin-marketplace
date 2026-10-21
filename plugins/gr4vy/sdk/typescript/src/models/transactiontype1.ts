import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of transaction being completed. PURCHASE for a one-off checkout, CARD_ON_FILE to retain
 * the card for future use, or BOTH.
 */
export const Transactiontype1 = {
  Purchase: "PURCHASE",
  CardOnFile: "CARD_ON_FILE",
  Both: "BOTH",
} as const;
export type Transactiontype1 = (typeof Transactiontype1)[keyof typeof Transactiontype1] | (string & {});

export const transactiontype1Schema: EnumSchema<Transactiontype1> =
  s.enumOf<Transactiontype1>(Transactiontype1);
