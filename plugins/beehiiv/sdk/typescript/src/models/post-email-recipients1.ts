import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Email audience targeting. Omit this key to create no email targets. */
export type PostEmailRecipients1 = {
  /**
   * The tier IDs to target. Accepts specific tier UUIDs or the special values `"free"`,
   * `"premium"`, or `"all"`. When `"all"` is provided, targets all subscriber tiers — free
   * subscribers, and premium subscribers if the publication has an active paid tier. Cannot be
   * combined with `include_segment_ids`.
   */
  tierIds?: string[];
  /** Cannot be combined with `tier_ids`. */
  includeSegmentIds?: string[];
  excludeSegmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postEmailRecipients1Schema: Schema<PostEmailRecipients1> = s.object<PostEmailRecipients1>(
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
