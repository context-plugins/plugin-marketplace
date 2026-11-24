import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CitationPill1 = {
  /**
   * Per-source title from the sources rail (for example `"Quantum computing — Wikipedia"`). Always
   * present on the wire; may be an empty string when the rail has no title for this source —
   * consumers should read `domain` / `url` for source identity in that case.
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
  /** Source description from the sources rail when Gemini ships one. Omitted when absent. */
  description?: string;
  /** 1-based position of this source in the sibling `result.sources` array. */
  position: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const citationPill1Schema: Schema<CitationPill1> = s.object<CitationPill1>(
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
