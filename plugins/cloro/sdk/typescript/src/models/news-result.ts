import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NewsResult = {
  /** Position in news results (1-indexed) */
  position?: number;
  /** Title of the news article */
  title?: string;
  /** URL of the news article */
  link?: string;
  /** Text snippet describing the article */
  snippet?: string;
  /** News source/publisher name */
  source?: string;
  /** Publication date */
  date?: string;
  /** Page number this result appeared on (1-indexed) */
  page?: number;
  /** Thumbnail image URL (if available) */
  thumbnail?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsResultSchema: Schema<NewsResult> = s.object<NewsResult>(
  {
    position: s.optional(s.float64()),
    title: s.optional(s.string()),
    link: s.optional(s.string()),
    snippet: s.optional(s.string()),
    source: s.optional(s.string()),
    date: s.optional(s.string()),
    page: s.optional(s.float64()),
    thumbnail: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
