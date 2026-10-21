import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The ID of a stored gift card to fetch a balance for. */
export type GiftCardStoredRequest = {
  /** The ID of the field to fetch a balance for. */
  id: string;
};

export const giftCardStoredRequestSchema: Schema<GiftCardStoredRequest> = s.object<GiftCardStoredRequest>({
  id: s.string(),
});
