import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MerchantVideo1 = {
  /** Video title */
  title?: string;
  /** Video URL */
  link?: string;
  /** Video platform — omitted when not available */
  platform?: string;
  /** Video duration as displayed — omitted when not available */
  duration?: string;
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

export const merchantVideo1Schema: Schema<MerchantVideo1> = s.object<MerchantVideo1>(
  {
    title: s.optional(s.string()),
    link: s.optional(s.string()),
    platform: s.optional(s.string()),
    duration: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
