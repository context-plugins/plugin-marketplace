import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialPost1 = {
  /** Social platform name */
  platform?: string;
  /** Post text content */
  text?: string;
  /** URL to the post */
  link?: string;
  /** Post date as displayed by Google */
  date?: string;
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

export const socialPost1Schema: Schema<SocialPost1> = s.object<SocialPost1>(
  {
    platform: s.optional(s.string()),
    text: s.optional(s.string()),
    link: s.optional(s.string()),
    date: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
