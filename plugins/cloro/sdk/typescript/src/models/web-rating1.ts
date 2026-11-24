import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebRating1 = {
  /** Rating platform name */
  platform?: string;
  /** Rating value as displayed */
  rating?: string;
  /** URL to the platform's review page */
  link?: string;
  /** Number of votes or reviews (omitted when not available) */
  votes?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webRating1Schema: Schema<WebRating1> = s.object<WebRating1>(
  {
    platform: s.optional(s.string()),
    rating: s.optional(s.string()),
    link: s.optional(s.string()),
    votes: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
