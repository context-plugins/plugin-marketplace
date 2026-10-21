import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier11Schema,
  type BuyerExternalIdentifier11,
} from "./unions/buyer-external-identifier11.js";
import { buyerId11Schema, type BuyerId11 } from "./unions/buyer-id11.js";

export type GiftCardCreate = {
  /** The 16-19 digit number for the gift card. */
  number: string;
  /** The PIN for this gift card. */
  pin: string;
  /**
   * The ID of the buyer to associate this gift card to. If this field is provided then the
   * `buyer_external_identifier` field needs to be unset.
   */
  buyerId?: BuyerId11;
  /**
   * The `external_identifier` of the buyer to associate this gift card to. If this field is
   * provided then the `buyer_id` field needs to be unset.
   */
  buyerExternalIdentifier?: BuyerExternalIdentifier11;
};

export const giftCardCreateSchema: Schema<GiftCardCreate> = s.object<GiftCardCreate>({
  number: s.string(),
  pin: s.string(),
  buyerId: s.optional(s.lazy(() => buyerId11Schema)),
  buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier11Schema)),
  _keysMap: {
    buyerId: "buyer_id",
    buyerExternalIdentifier: "buyer_external_identifier",
  },
});
