import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Admission1 = {
  /** Ticket provider name */
  provider?: string;
  /** Admission price as displayed */
  price?: string;
  /** URL to purchase tickets */
  link?: string;
  /** Optional badge text (e.g. "Free", "Best price") — omitted when not present */
  badge?: string;
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

export const admission1Schema: Schema<Admission1> = s.object<Admission1>(
  {
    provider: s.optional(s.string()),
    price: s.optional(s.string()),
    link: s.optional(s.string()),
    badge: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
