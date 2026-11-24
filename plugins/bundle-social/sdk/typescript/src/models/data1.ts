import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  /** Instagram Media ID */
  id: string;
  /** Instagram media type */
  mediaType: string;
  /** Number of likes if available */
  likeCount?: number;
  /** Number of comments if available */
  commentsCount?: number;
  /** Media publication timestamp */
  timestamp?: string;
  /** Media caption if available */
  caption?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    id: s.string(),
    mediaType: s.string(),
    likeCount: s.optional(s.float64()),
    commentsCount: s.optional(s.float64()),
    timestamp: s.optional(s.string()),
    caption: s.optional(s.string()),
    _keysMap: {
      mediaType: "media_type",
      likeCount: "like_count",
      commentsCount: "comments_count",
    },
  },
  { additionalProperties: s.json() },
);
