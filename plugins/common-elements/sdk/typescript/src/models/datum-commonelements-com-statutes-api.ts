import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComStatutesApi = {
  /** Statute section id, for use with /v1/statutes/sections/{id}. */
  sectionId?: string;
  /** The chapter this section belongs to. */
  chapterSlug?: string;
  /** The chapter this section belongs to. */
  chapterShortTitle?: string;
  /** The chapter this section belongs to. */
  chapterJurisdiction?: string;
  /** The chapter this section belongs to. */
  chapterNumber?: string;
  /** Section numbering as published. */
  sectionNumber?: string | null;
  /** Section numbering as published. */
  subsection?: string | null;
  /** Slug for the public statute page. */
  sectionSlug?: string;
  /** Section title and plain-language summary. */
  title?: string | null;
  /** Section title and plain-language summary. */
  summary?: string | null;
  /** Search-result highlight from the matched text. */
  snippet?: string | null;
  /** Relevance score. Results are pre-sorted by this, highest first. */
  rank?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComStatutesApiSchema: Schema<DatumCommonelementsComStatutesApi> =
  s.object<DatumCommonelementsComStatutesApi>(
    {
      sectionId: s.optional(s.string()),
      chapterSlug: s.optional(s.string()),
      chapterShortTitle: s.optional(s.string()),
      chapterJurisdiction: s.optional(s.string()),
      chapterNumber: s.optional(s.string()),
      sectionNumber: s.optionalNullable(s.string()),
      subsection: s.optionalNullable(s.string()),
      sectionSlug: s.optional(s.string()),
      title: s.optionalNullable(s.string()),
      summary: s.optionalNullable(s.string()),
      snippet: s.optionalNullable(s.string()),
      rank: s.optional(s.float64()),
      _keysMap: {
        sectionId: "section_id",
        chapterSlug: "chapter_slug",
        chapterShortTitle: "chapter_short_title",
        chapterJurisdiction: "chapter_jurisdiction",
        chapterNumber: "chapter_number",
        sectionNumber: "section_number",
        sectionSlug: "section_slug",
      },
    },
    { additionalProperties: s.json() },
  );
