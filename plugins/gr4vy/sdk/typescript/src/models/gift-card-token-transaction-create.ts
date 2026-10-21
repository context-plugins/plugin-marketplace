import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GiftCardTokenTransactionCreate = {
  /** The ID for the gift card to charge. */
  id: string;
  /**
   * The monetary amount for this transaction to charge against the gift card, in the smallest
   * currency unit (for example, cents or pence).
   */
  amount: number;
};

export const giftCardTokenTransactionCreateSchema: Schema<GiftCardTokenTransactionCreate> =
  s.object<GiftCardTokenTransactionCreate>({
    id: s.string(),
    amount: s.int(),
  });
