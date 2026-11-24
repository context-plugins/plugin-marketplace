import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Email targeting configuration. Absent if the post has no email targets. */
export type PostEmailRecipientsResponse2 = {
  /**
   * The tier IDs targeted for email. Values are `"free"`, `"premium"`, or a specific tier's
   * prefixed ID.
   */
  tierIds?: string[];
  includeSegmentIds?: string[];
  excludeSegmentIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postEmailRecipientsResponse2Schema: Schema<PostEmailRecipientsResponse2> =
  s.object<PostEmailRecipientsResponse2>(
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
