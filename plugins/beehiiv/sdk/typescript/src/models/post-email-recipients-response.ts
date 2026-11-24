import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostEmailRecipientsResponse = {
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

export const postEmailRecipientsResponseSchema: Schema<PostEmailRecipientsResponse> =
  s.object<PostEmailRecipientsResponse>(
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
