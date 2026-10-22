import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerPresetSummarySchema,
  type PlatformTriggerPresetSummary,
} from "./platform-trigger-preset-summary.js";

export type PlatformTriggerPresetListResponse = {
  /** Trigger presets available to the caller. */
  results: PlatformTriggerPresetSummary[];
  /** Whether additional results are available. */
  hasMore: boolean;
  /** Cursor for the next page, or null when no more results are available. */
  nextCursor: string | null;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerPresetListResponseSchema: Schema<PlatformTriggerPresetListResponse> =
  s.object<PlatformTriggerPresetListResponse>({
    results: s.array(s.lazy(() => platformTriggerPresetSummarySchema)),
    hasMore: s.boolean(),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
