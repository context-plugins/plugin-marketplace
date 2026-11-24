import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The SEO metadata to use for this post. Only the provided fields within this object will be
 * updated.
 */
export type PostMetadata2 = {
  defaultDescription?: string;
  defaultTitle?: string;
  ogDescription?: string;
  ogTitle?: string;
  twitterDescription?: string;
  twitterTitle?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postMetadata2Schema: Schema<PostMetadata2> = s.object<PostMetadata2>(
  {
    defaultDescription: s.optional(s.string()),
    defaultTitle: s.optional(s.string()),
    ogDescription: s.optional(s.string()),
    ogTitle: s.optional(s.string()),
    twitterDescription: s.optional(s.string()),
    twitterTitle: s.optional(s.string()),
    _keysMap: {
      defaultDescription: "default_description",
      defaultTitle: "default_title",
      ogDescription: "og_description",
      ogTitle: "og_title",
      twitterDescription: "twitter_description",
      twitterTitle: "twitter_title",
    },
  },
  { additionalProperties: s.json() },
);
