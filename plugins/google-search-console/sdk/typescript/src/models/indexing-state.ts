import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether or not the page blocks indexing through a noindex rule. */
export const IndexingState = {
  IndexingStateUnspecified: "INDEXING_STATE_UNSPECIFIED",
  IndexingAllowed: "INDEXING_ALLOWED",
  BlockedByMetaTag: "BLOCKED_BY_META_TAG",
  BlockedByHttpHeader: "BLOCKED_BY_HTTP_HEADER",
  BlockedByRobotsTxt: "BLOCKED_BY_ROBOTS_TXT",
} as const;
export type IndexingState = (typeof IndexingState)[keyof typeof IndexingState] | (string & {});

export const indexingStateSchema: EnumSchema<IndexingState> = s.enumOf<IndexingState>(IndexingState);
