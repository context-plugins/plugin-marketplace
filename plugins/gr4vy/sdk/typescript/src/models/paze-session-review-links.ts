import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changeCardSchema, type ChangeCard } from "./unions/change-card.js";
import { changeShippingAddressSchema, type ChangeShippingAddress } from "./unions/change-shipping-address.js";

export type PazeSessionReviewLinks = {
  /** Follow-up link to change the selected card. */
  changeCard: ChangeCard;
  /** Follow-up link to change the shipping address. */
  changeShippingAddress: ChangeShippingAddress;
};

export const pazeSessionReviewLinksSchema: Schema<PazeSessionReviewLinks> = s.object<PazeSessionReviewLinks>({
  changeCard: changeCardSchema,
  changeShippingAddress: changeShippingAddressSchema,
  _keysMap: {
    changeCard: "CHANGE_CARD",
    changeShippingAddress: "CHANGE_SHIPPING_ADDRESS",
  },
});
