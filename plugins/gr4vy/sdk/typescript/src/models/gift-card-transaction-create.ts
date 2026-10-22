import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Create a charge against a gift card */
export type GiftCardTransactionCreate = {
  /** The 16-19 digit number for the gift card. */
  number: string;
  /** The PIN for this gift card. */
  pin: string;
  /**
   * The monetary amount for this transaction to charge against the gift card, in the smallest
   * currency unit (for example, cents or pence).
   */
  amount: number;
};

export const giftCardTransactionCreateSchema: Schema<GiftCardTransactionCreate> =
  s.object<GiftCardTransactionCreate>({
    number: s.string(),
    pin: s.string(),
    amount: s.int(),
  });
