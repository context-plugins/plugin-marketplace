import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardSummarySchema, type GiftCardSummary } from "./gift-card-summary.js";

export type GiftCardSummaries = {
  /** A list of items returned for this request. */
  items: GiftCardSummary[];
};

export const giftCardSummariesSchema: Schema<GiftCardSummaries> = s.object<GiftCardSummaries>({
  items: s.array(s.lazy(() => giftCardSummarySchema)),
});
