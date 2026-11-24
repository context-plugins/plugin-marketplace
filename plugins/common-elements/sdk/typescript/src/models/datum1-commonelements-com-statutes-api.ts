import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1CommonelementsComStatutesApi = {
  /** Statute section id. */
  id?: string;
  /** The chapter this section belongs to. */
  chapterNumber?: string | null;
  /** The chapter this section belongs to. */
  chapterTitle?: string | null;
  /** Section numbering as published. */
  sectionNumber?: string | null;
  /** Section numbering as published. */
  subsection?: string | null;
  /** Slug for the public statute page. */
  slug?: string;
  /** Section title and plain-language summary. */
  title?: string | null;
  /** Section title and plain-language summary. */
  summary?: string | null;
  /** Tagged topics for this section. */
  topics?: string[];
  /** Formatted legal citation, e.g. "Fla. Stat. § 718.112". */
  citation?: string | null;
  /** When this version took effect. */
  effectiveDate?: string | null;
  /** Link to the official published text. */
  sourceUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1CommonelementsComStatutesApiSchema: Schema<Datum1CommonelementsComStatutesApi> =
  s.object<Datum1CommonelementsComStatutesApi>(
    {
      id: s.optional(s.string()),
      chapterNumber: s.optionalNullable(s.string()),
      chapterTitle: s.optionalNullable(s.string()),
      sectionNumber: s.optionalNullable(s.string()),
      subsection: s.optionalNullable(s.string()),
      slug: s.optional(s.string()),
      title: s.optionalNullable(s.string()),
      summary: s.optionalNullable(s.string()),
      topics: s.optional(s.array(s.string())),
      citation: s.optionalNullable(s.string()),
      effectiveDate: s.optionalNullable(s.dateOnly()),
      sourceUrl: s.optionalNullable(s.string()),
      _keysMap: {
        chapterNumber: "chapter_number",
        chapterTitle: "chapter_title",
        sectionNumber: "section_number",
        effectiveDate: "effective_date",
        sourceUrl: "source_url",
      },
    },
    { additionalProperties: s.json() },
  );
