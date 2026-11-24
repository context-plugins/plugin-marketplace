import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CitationPill11 = {
  /** 1-based position of this source in the sibling `result.sources` array. */
  position: number;
  /**
   * Title of the cited source, the same as its `label` in `result.sources`. Can be an empty string.
   */
  label: string;
  /** Direct URL of the cited source. */
  url: string;
  /** Host extracted from `url`, for grouping and display. */
  domain: string;
  /** 1-based ordinal that all entries from the same chip share. */
  citationPillId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const citationPill11Schema: Schema<CitationPill11> = s.object<CitationPill11>(
  {
    position: s.int(),
    label: s.string(),
    url: s.string(),
    domain: s.string(),
    citationPillId: s.int(),
  },
  { additionalProperties: s.json() },
);
