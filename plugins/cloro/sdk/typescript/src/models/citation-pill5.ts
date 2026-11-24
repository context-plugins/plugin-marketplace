import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type CitationPill5 = {
  /** The URL of the citation */
  url: string;
  /**
   * Per-source title of the citation. Always present; may be an empty string when the citation
   * event ships no title — read `domain` / `url` for source identity in that case.
   */
  label: string;
  /**
   * Description of the citation content. Omitted when the citation event carries no snippet (e.g.
   * grouped-webpage title-only cards).
   */
  description?: string;
  /** Domain of the citation source */
  domain: string;
  /**
   * ISO 8601 date string of when the source was published. Omitted when the citation event carries
   * no publication date.
   */
  datePublished?: string;
  /**
   * 0-based identifier shared by all entries from the same chip. Group by `citationPillId` to
   * recover the pill-level structure. **Note:** unlike the other providers (Google AIO, AI Mode,
   * Copilot, Perplexity, Gemini) which use 1-based `citationPillId`, ChatGPT's IDs start at 0 for
   * historical reasons.
   */
  citationPillId: number;
  /**
   * Discriminator for the underlying citation event: `searchResult` for inline search citations,
   * `groupedWebpage` for grouped-webpage cards.
   */
  type: Type3;
  /** 1-based position of this source in the sibling `result.sources` array. */
  position: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const citationPill5Properties: s.Shape<CitationPill5> = {
  url: s.string(),
  label: s.string(),
  description: s.optional(s.string()),
  domain: s.string(),
  datePublished: s.optional(s.string()),
  citationPillId: s.int(),
  type: type3Schema,
  position: s.int(),
};

export const citationPill5InternalSchema: Schema<CitationPill5> = s.object<CitationPill5>(
  citationPill5Properties,
  { additionalProperties: s.json() },
);

export const citationPill5Schema: Schema<CitationPill5> = s.lazySchema(() =>
  s.object<CitationPill5>(
    {
      ...citationPill5Properties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
