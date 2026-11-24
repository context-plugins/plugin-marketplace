import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Web audience targeting. Omit this key to create no web targets. */
export type PostWebRecipients2 = {
  /**
   * The tier IDs to target. Accepts specific tier UUIDs or the special values `"free"`,
   * `"premium"`, or `"all"`. When `"all"` is provided, targets all subscriber tiers — free
   * subscribers, and premium subscribers if the publication has an active paid tier.
   */
  tierIds?: string[];
  includeSegmentIds?: string[];
  excludeSegmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postWebRecipients2Schema: Schema<PostWebRecipients2> = s.object<PostWebRecipients2>(
  {
    tierIds: s.optional(s.array(s.string())),
    includeSegmentIds: s.optional(s.array(s.string())),
    excludeSegmentIds: s.optional(s.array(s.string())),
    _keysMap: {
      tierIds: "tier_ids",
      includeSegmentIds: "include_segment_ids",
      excludeSegmentIds: "exclude_segment_ids",
    },
  },
  { additionalProperties: s.json() },
);
