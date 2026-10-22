import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pazeConsumerSchema, type PazeConsumer } from "./paze-consumer.js";
import { pazeMaskedCardSchema, type PazeMaskedCard } from "./paze-masked-card.js";
import { pazeSessionReviewLinksSchema, type PazeSessionReviewLinks } from "./paze-session-review-links.js";
import { shippingAddressSchema, type ShippingAddress } from "./unions/shipping-address.js";

export type PazeSessionReview = {
  consumer: PazeConsumer;
  shippingAddress: ShippingAddress;
  maskedCard: PazeMaskedCard;
  links: PazeSessionReviewLinks;
  /** Opaque token issued by the Paze service to be used in the next Paze interaction. */
  code: string;
};

export const pazeSessionReviewSchema: Schema<PazeSessionReview> = s.object<PazeSessionReview>({
  consumer: pazeConsumerSchema,
  shippingAddress: shippingAddressSchema,
  maskedCard: pazeMaskedCardSchema,
  links: pazeSessionReviewLinksSchema,
  code: s.string(),
});
