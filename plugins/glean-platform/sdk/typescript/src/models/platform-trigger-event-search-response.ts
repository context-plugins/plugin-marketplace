import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerEventSchema, type PlatformTriggerEvent } from "./platform-trigger-event.js";

export type PlatformTriggerEventSearchResponse = {
  /** Matching events, most recent first. */
  results: PlatformTriggerEvent[];
  /**
   * Whether more events matched than were returned. Raise `page_size` to see more; cursor-based
   * paging is not offered yet.
   */
  hasMore: boolean;
  /** Unique identifier for this request, for support and debugging. */
  requestId: string;
};

export const platformTriggerEventSearchResponseSchema: Schema<PlatformTriggerEventSearchResponse> =
  s.object<PlatformTriggerEventSearchResponse>({
    results: s.array(s.lazy(() => platformTriggerEventSchema)),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
