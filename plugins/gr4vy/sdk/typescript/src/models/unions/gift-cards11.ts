import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  giftCardTokenTransactionCreateSchema,
  type GiftCardTokenTransactionCreate,
} from "../gift-card-token-transaction-create.js";
import {
  giftCardTransactionCreateSchema,
  type GiftCardTransactionCreate,
} from "../gift-card-transaction-create.js";

export type GiftCards11 = GiftCardTransactionCreate | GiftCardTokenTransactionCreate;

export const giftCards11Schema: Schema<GiftCards11> = s.of<GiftCards11>(
  s.union([
    s.lazy(() => giftCardTransactionCreateSchema),
    s.lazy(() => giftCardTokenTransactionCreateSchema),
  ]),
);
