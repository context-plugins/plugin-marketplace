import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./comments.js";
import { likesSchema, type Likes } from "./likes.js";
import { sharesSchema, type Shares } from "./shares.js";
import { typeSchema, type Type } from "./type.js";

export type Post = {
  /** The ID of the post */
  id?: string;
  /** The text content of the post */
  message?: string;
  /** Auto-generated story text for the post */
  story?: string;
  /** When the post was created */
  createdTime?: Date;
  /** When the post was last updated */
  updatedTime?: Date;
  /** URL of the full-size post image */
  fullPicture?: string;
  /** Permanent URL to the post */
  permalinkUrl?: string;
  /** Type of post content */
  type?: Type;
  /** Share count information */
  shares?: Shares;
  likes?: Likes;
  comments?: Comments;
  /** Media and link attachments on the post */
  attachments?: Record<string, unknown>;
  /** Whether the post is published */
  isPublished?: boolean;
  /** Unix timestamp for scheduled posts */
  scheduledPublishTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postProperties: s.Shape<Post> = {
  id: s.optional(s.string()),
  message: s.optional(s.string()),
  story: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  fullPicture: s.optional(s.string()),
  permalinkUrl: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  shares: s.optional(s.lazy(() => sharesSchema)),
  likes: s.optional(s.lazy(() => likesSchema)),
  comments: s.optional(s.lazy(() => commentsSchema)),
  attachments: s.optional(s.record(s.string(), s.unknown())),
  isPublished: s.optional(s.boolean()),
  scheduledPublishTime: s.optional(s.string()),
  _keysMap: {
    createdTime: "created_time",
    updatedTime: "updated_time",
    fullPicture: "full_picture",
    permalinkUrl: "permalink_url",
    isPublished: "is_published",
    scheduledPublishTime: "scheduled_publish_time",
  },
};

export const postInternalSchema: Schema<Post> = s.object<Post>(postProperties, {
  additionalProperties: s.json(),
});

export const postSchema: Schema<Post> = s.lazySchema(() =>
  s.object<Post>(
    {
      ...postProperties,
      fullPicture: s.optional(s.string().check(s.url())),
      permalinkUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
