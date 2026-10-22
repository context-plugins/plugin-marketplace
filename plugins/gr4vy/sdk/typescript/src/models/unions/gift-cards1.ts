import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftCards11Schema, type GiftCards11 } from "./gift-cards11.js";

/**
 * The optional gift card(s) to use for this transaction. At least one gift card is required if no
 * other `payment_method` has been added. By default, only a maximum limit of 10 gift cards may be
 * used in a single transaction. Please contact our team to change this limit.
 */
export type GiftCards1 = GiftCards11[];

export const giftCards1Schema: Schema<GiftCards1> = s.of<GiftCards1>(
  s.union([s.array(s.lazy(() => giftCards11Schema))]),
);
