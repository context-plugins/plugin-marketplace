import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Action links rendered on the place, typically on business/service-style packs (plumbers, salons,
 * …) and absent on restaurant packs whose places are plain buttons. Each key is present only when
 * Google rendered that button.
 */
export type Links1 = {
  /**
   * The business's own website URL. When the card has no website button, it comes from the place
   * data in the page.
   */
  website?: string;
  /** Absolute Google Maps directions URL */
  directions?: string;
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

export const links1Schema: Schema<Links1> = s.object<Links1>(
  {
    website: s.optional(s.string()),
    directions: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
