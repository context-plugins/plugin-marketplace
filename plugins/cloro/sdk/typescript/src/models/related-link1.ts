import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RelatedLink1 = {
  /**
   * The related page's own title. Empty string when Google ships none — read `domain` / `url` for
   * identity in that case.
   */
  label: string;
  /**
   * Matches the `citationPillId` of the chip's `citationPills` entries, so a related link can be
   * grouped with its pill.
   */
  citationPillId: number;
  /** Direct URL of the related link. */
  url: string;
  /** Host extracted from `url`, for grouping and display. */
  domain: string;
  /** Snippet Google ships for the related link. Omitted when absent. */
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

export const relatedLink1Schema: Schema<RelatedLink1> = s.object<RelatedLink1>(
  {
    label: s.string(),
    citationPillId: s.int(),
    url: s.string(),
    domain: s.string(),
    description: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
