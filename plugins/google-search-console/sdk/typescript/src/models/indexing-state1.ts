import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether or not the page blocks indexing through a noindex rule. */
export const IndexingState1 = {
  AmpIndexingStateUnspecified: "AMP_INDEXING_STATE_UNSPECIFIED",
  AmpIndexingAllowed: "AMP_INDEXING_ALLOWED",
  BlockedDueToNoindex: "BLOCKED_DUE_TO_NOINDEX",
  BlockedDueToExpiredUnavailableAfter: "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER",
} as const;
export type IndexingState1 = (typeof IndexingState1)[keyof typeof IndexingState1] | (string & {});

export const indexingState1Schema: EnumSchema<IndexingState1> = s.enumOf<IndexingState1>(IndexingState1);
