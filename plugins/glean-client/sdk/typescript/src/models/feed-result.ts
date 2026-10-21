import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category2Schema, type Category2 } from "./category2.js";
import { feedEntrySchema, type FeedEntry } from "./feed-entry.js";
import { placementReasonSchema, type PlacementReason } from "./placement-reason.js";

export type FeedResult = {
  /** Category of the result, one of the requested categories in incoming request. */
  category: Category2;
  primaryEntry: FeedEntry;
  /** Secondary entries for the result e.g. suggested docs for the calendar, carousel. */
  secondaryEntries?: FeedEntry[];
  /** Rank of the result. Rank is suggested by server. Client side rank may differ. */
  rank?: number;
  /**
   * Placement source for ranked feed results. ORGANIC means the card was emitted by normal feed
   * ranking. PROMO means the card was inserted by the homepage cards promo framework. PINNED means
   * the card was moved to the head of the ranked stack (e.g. knowledge-gap pilot cards).
   */
  placementReason?: PlacementReason;
};

export const feedResultSchema: Schema<FeedResult> = s.object<FeedResult>({
  category: category2Schema,
  primaryEntry: feedEntrySchema,
  secondaryEntries: s.optional(s.array(s.lazy(() => feedEntrySchema))),
  rank: s.optional(s.int()),
  placementReason: s.optional(s.lazy(() => placementReasonSchema)),
});
