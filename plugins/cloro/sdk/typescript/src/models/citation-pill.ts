import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CitationPill = {
  /**
   * Per-source title from the citation event (e.g. `"Microsoft 365 Documentation"`, `"Productivity
   * Best Practices"`). Always present; may be an empty string when the event ships no title — read
   * `domain` / `url` for source identity in that case. Entries grouped under the same
   * `citationPillId` carry different per-source labels.
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
  /** Source description from the sources rail when Copilot ships one. Omitted when absent. */
  description?: string;
  /** 1-based position of this source in the sibling `result.sources` array. */
  position: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const citationPillSchema: Schema<CitationPill> = s.object<CitationPill>(
  {
    label: s.string(),
    citationPillId: s.int(),
    url: s.string(),
    domain: s.string(),
    description: s.optional(s.string()),
    position: s.int(),
  },
  { additionalProperties: s.json() },
);
