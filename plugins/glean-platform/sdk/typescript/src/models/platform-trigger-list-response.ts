import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerSchema, type PlatformTrigger } from "./platform-trigger.js";

export type PlatformTriggerListResponse = {
  /** Triggers owned by the caller. */
  results: PlatformTrigger[];
  /** Whether additional results are available. */
  hasMore: boolean;
  /** Cursor for the next page, or null when no more results are available. */
  nextCursor: string | null;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerListResponseSchema: Schema<PlatformTriggerListResponse> =
  s.object<PlatformTriggerListResponse>({
    results: s.array(s.lazy(() => platformTriggerSchema)),
    hasMore: s.boolean(),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
