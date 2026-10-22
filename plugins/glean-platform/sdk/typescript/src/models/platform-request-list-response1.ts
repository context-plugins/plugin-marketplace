import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformLimitIncreaseRequest1Schema,
  type PlatformLimitIncreaseRequest1,
} from "./platform-limit-increase-request1.js";

/** Authorized request page and continuation state. */
export type PlatformRequestListResponse1 = {
  /** Requests visible to the caller under the current filters and authorization. */
  results: PlatformLimitIncreaseRequest1[];
  /** Whether a further page is available through next_cursor. */
  hasMore: boolean;
  /** Opaque nonempty continuation when has_more is true; null or omitted otherwise. */
  nextCursor?: string | null;
  /** Trace identifier for this list response, not a request resource ID. */
  requestId: string;
};

export const platformRequestListResponse1Schema: Schema<PlatformRequestListResponse1> =
  s.object<PlatformRequestListResponse1>({
    results: s.array(s.lazy(() => platformLimitIncreaseRequest1Schema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
