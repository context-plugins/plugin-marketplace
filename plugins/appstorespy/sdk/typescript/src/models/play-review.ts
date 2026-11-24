import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayReview = {
  /** Review ID */
  id: string;
  /** Review language */
  lang: string;
  /** ID of the review author */
  authorId: string;
  /** Name of the review author */
  authorName: string;
  /** Image URL of the review author */
  authorImage: string;
  /** App version */
  version?: string;
  /** Creation date */
  created: string;
  /** App rating */
  stars: number;
  /** Review likes */
  likes: number;
  /** Review text */
  comment: string;
  /** Reply text */
  reply?: string;
  /** Reply date */
  replied?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playReviewSchema: Schema<PlayReview> = s.object<PlayReview>(
  {
    id: s.string(),
    lang: s.string(),
    authorId: s.string(),
    authorName: s.string(),
    authorImage: s.string(),
    version: s.optional(s.string()),
    created: s.string(),
    stars: s.int(),
    likes: s.int(),
    comment: s.string(),
    reply: s.optional(s.string()),
    replied: s.optional(s.string()),
    _keysMap: {
      authorId: "author_id",
      authorName: "author_name",
      authorImage: "author_image",
    },
  },
  { additionalProperties: s.json() },
);
