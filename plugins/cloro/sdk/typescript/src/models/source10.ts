import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source10 = {
  /** 1-based position index of the source */
  position?: number;
  /** Source URL */
  url?: string;
  /** Source title (the display label Google renders on the source rail) */
  label?: string;
  /** Source description / snippet */
  description?: string;
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

export const source10Schema: Schema<Source10> = s.object<Source10>(
  {
    position: s.optional(s.float64()),
    url: s.optional(s.string()),
    label: s.optional(s.string()),
    description: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
