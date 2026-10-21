import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./unions/item.js";

export type GiftCardBalanceRequest = {
  /** A list of gift cards to request a balance for. */
  items: Item[];
};

export const giftCardBalanceRequestSchema: Schema<GiftCardBalanceRequest> = s.object<GiftCardBalanceRequest>({
  items: s.array(s.lazy(() => itemSchema)),
});
