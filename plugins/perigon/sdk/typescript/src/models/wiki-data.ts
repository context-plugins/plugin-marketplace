import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikidataLabelHolderSchema, type WikidataLabelHolder } from "./wikidata-label-holder.js";

export type WikiData = {
  pageId?: string | null;
  sectionId?: string | null;
  wikiPageId?: number | null;
  wikiRevisionId?: number | null;
  wikiRevisionTs?: string | null;
  wikiCode?: string | null;
  wikiNamespace?: number | null;
  wikiTitle?: string | null;
  wikidataId?: string | null;
  wikidataInstanceOf?: WikidataLabelHolder[] | null;
  redirectTitles?: string[] | null;
  pageviews?: number | null;
  title?: string | null;
  styleLevel?: number | null;
  content?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikiDataSchema: Schema<WikiData> = s.object<WikiData>(
  {
    pageId: s.optionalNullable(s.string()),
    sectionId: s.optionalNullable(s.string()),
    wikiPageId: s.optionalNullable(s.int()),
    wikiRevisionId: s.optionalNullable(s.int()),
    wikiRevisionTs: s.optionalNullable(s.string()),
    wikiCode: s.optionalNullable(s.string()),
    wikiNamespace: s.optionalNullable(s.int()),
    wikiTitle: s.optionalNullable(s.string()),
    wikidataId: s.optionalNullable(s.string()),
    wikidataInstanceOf: s.optionalNullable(s.array(s.lazy(() => wikidataLabelHolderSchema))),
    redirectTitles: s.optionalNullable(s.array(s.string())),
    pageviews: s.optionalNullable(s.int()),
    title: s.optionalNullable(s.string()),
    styleLevel: s.optionalNullable(s.int()),
    content: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
