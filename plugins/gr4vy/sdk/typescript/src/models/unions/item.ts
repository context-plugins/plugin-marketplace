import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftCardRequestSchema, type GiftCardRequest } from "../gift-card-request.js";
import { giftCardStoredRequestSchema, type GiftCardStoredRequest } from "../gift-card-stored-request.js";

export type Item = GiftCardRequest | GiftCardStoredRequest;

export const itemSchema: Schema<Item> = s.of<Item>(
  s.union([s.lazy(() => giftCardRequestSchema), s.lazy(() => giftCardStoredRequestSchema)]),
);
