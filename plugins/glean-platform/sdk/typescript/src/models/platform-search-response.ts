import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformResultSchema, type PlatformResult } from "./platform-result.js";
import { platformWarningSchema, type PlatformWarning } from "./platform-warning.js";

export type PlatformSearchResponse = {
  /**
   * Ordered list of ranked document results. People cards, Q&A blocks, and other UI-only result
   * types are not included.
   */
  results: PlatformResult[];
  /** Indicates whether additional pages of results are available. */
  hasMore: boolean;
  /** Opaque token to pass as `cursor` in the next request. */
  nextCursor: string | null;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
  /**
   * Non-blocking warnings for this response. Required; use `[]` when there are none. Clients must
   * tolerate unknown warning codes. `results_incomplete` means some results may be unavailable for
   * the requested datasource scope while `results`, `has_more`, and `next_cursor` remain present.
   * Warning messages are generic and do not include query text or internal identifiers.
   */
  warnings: PlatformWarning[];
};

export const platformSearchResponseSchema: Schema<PlatformSearchResponse> = s.object<PlatformSearchResponse>({
  results: s.array(s.lazy(() => platformResultSchema)),
  hasMore: s.boolean(),
  nextCursor: s.nullable(s.string()),
  requestId: s.string(),
  warnings: s.array(s.lazy(() => platformWarningSchema)),
  _keysMap: {
    hasMore: "has_more",
    nextCursor: "next_cursor",
    requestId: "request_id",
  },
});
