import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NewsItemData = {
  heading?: string;
  summary?: string;
  thumbnail?: string;
  articleLink?: string;
  publishedTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsItemDataSchema: Schema<NewsItemData> = s.object<NewsItemData>(
  {
    heading: s.optional(s.string()),
    summary: s.optional(s.string()),
    thumbnail: s.optional(s.string()),
    articleLink: s.optional(s.string()),
    publishedTime: s.optional(s.int()),
    _keysMap: {
      articleLink: "article_link",
      publishedTime: "published_time",
    },
  },
  { additionalProperties: s.json() },
);
