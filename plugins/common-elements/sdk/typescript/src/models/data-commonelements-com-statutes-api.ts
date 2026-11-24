import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataCommonelementsComStatutesApi = {
  /** Statute section id. */
  sectionId?: string;
  /** Section numbering as published. */
  sectionNumber?: string | null;
  /** Section numbering as published. */
  subsection?: string | null;
  /** Section title and plain-language summary. */
  title?: string | null;
  /** Section title and plain-language summary. */
  summary?: string | null;
  /** Full text of the section. */
  bodyText?: string;
  /** Tagged topics for this section. */
  topics?: string[];
  /** Effective date and link to the official published text. */
  effectiveDate?: string | null;
  /** Effective date and link to the official published text. */
  sourceUrl?: string | null;
  /**
   * id, slug, jurisdiction, chapter_number, short_title, citation_format for the parent chapter.
   */
  chapter?: Record<string, unknown>;
  /** Formatted legal citation for this exact section. */
  citation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCommonelementsComStatutesApiSchema: Schema<DataCommonelementsComStatutesApi> =
  s.object<DataCommonelementsComStatutesApi>(
    {
      sectionId: s.optional(s.string()),
      sectionNumber: s.optionalNullable(s.string()),
      subsection: s.optionalNullable(s.string()),
      title: s.optionalNullable(s.string()),
      summary: s.optionalNullable(s.string()),
      bodyText: s.optional(s.string()),
      topics: s.optional(s.array(s.string())),
      effectiveDate: s.optionalNullable(s.dateOnly()),
      sourceUrl: s.optionalNullable(s.dateOnly()),
      chapter: s.optional(s.record(s.string(), s.unknown())),
      citation: s.optional(s.string()),
      _keysMap: {
        sectionId: "section_id",
        sectionNumber: "section_number",
        bodyText: "body_text",
        effectiveDate: "effective_date",
        sourceUrl: "source_url",
      },
    },
    { additionalProperties: s.json() },
  );
