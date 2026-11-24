import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reviewLinkSchema, type ReviewLink } from "../review-link.js";

/**
 * The link to send customers to ask for a review (email, SMS, QR code). `type: "write_review"`
 * opens the platform's review form; `listing` is the public page with its review button. `null`
 * where only verified buyers or guests can review (Booking.com, eBay, Etsy, shop-review apps).
 */
export type ReviewLink1 = ReviewLink;

export const reviewLink1Schema: Schema<ReviewLink1> = s.of<ReviewLink1>(
  s.union([s.lazy(() => reviewLinkSchema)]),
);
