import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftCardServiceSchema, type GiftCardService } from "../gift-card-service.js";

/** The gift card service used for this transaction. */
export type GiftCardService31 = GiftCardService;

export const giftCardService31Schema: Schema<GiftCardService31> = s.of<GiftCardService31>(
  s.union([s.lazy(() => giftCardServiceSchema)]),
);
