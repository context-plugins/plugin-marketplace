import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CitationPill6 = {
  /**
   * Per-source title from the sources rail (for example `"Chase Personal Credit Cards"`). Empty
   * string when the rail has no title for this source — consumers should read `domain` / `url` for
   * source identity in that case. Entries grouped under the same `citationPillId` carry different
   * per-source labels.
   */
  label: string;
  /**
   * 1-based ordinal shared by all entries from the same chip. Group by `citationPillId` to
   * reconstruct the visible chip; the per-source `label` differs across entries within a chip.
   */
  citationPillId: number;
  /** Direct URL of the cited source. */
  url: string;
  /** Host extracted from `url`, for grouping and display. */
  domain: string;
  /**
   * Source description from the sources rail when Google ships one. Omitted when the source carries
   * no snippet.
   */
  description?: string;
  /** 1-based position of this source in the sibling `result.aioverview.sources` array. */
  position: number;
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

export const citationPill6Schema: Schema<CitationPill6> = s.object<CitationPill6>(
  {
    label: s.string(),
    citationPillId: s.int(),
    url: s.string(),
    domain: s.string(),
    description: s.optional(s.string()),
    position: s.int(),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
