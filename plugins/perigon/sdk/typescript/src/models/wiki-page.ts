import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikiPageSectionHolderSchema, type WikiPageSectionHolder } from "./wiki-page-section-holder.js";
import { wikidataLabelHolderSchema, type WikidataLabelHolder } from "./wikidata-label-holder.js";

export type WikiPage = {
  id?: string | null;
  scrapedAt?: string | null;
  wikiPageId?: number | null;
  wikiRevisionId?: number | null;
  wikiRevisionTs?: string | null;
  wikiCode?: string | null;
  wikiNamespace?: number | null;
  wikiTitle?: string | null;
  url?: string | null;
  topImage?: string | null;
  wikidataId?: string | null;
  wikidataInstanceOf?: WikidataLabelHolder[] | null;
  redirectTitles?: string[] | null;
  summary?: string | null;
  sections?: WikiPageSectionHolder[] | null;
  categories?: string[] | null;
  externalLinks?: string[] | null;
  references?: string[] | null;
  pageviews?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikiPageSchema: Schema<WikiPage> = s.object<WikiPage>(
  {
    id: s.optionalNullable(s.string()),
    scrapedAt: s.optionalNullable(s.string()),
    wikiPageId: s.optionalNullable(s.int()),
    wikiRevisionId: s.optionalNullable(s.int()),
    wikiRevisionTs: s.optionalNullable(s.string()),
    wikiCode: s.optionalNullable(s.string()),
    wikiNamespace: s.optionalNullable(s.int()),
    wikiTitle: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    topImage: s.optionalNullable(s.string()),
    wikidataId: s.optionalNullable(s.string()),
    wikidataInstanceOf: s.optionalNullable(s.array(s.lazy(() => wikidataLabelHolderSchema))),
    redirectTitles: s.optionalNullable(s.array(s.string())),
    summary: s.optionalNullable(s.string()),
    sections: s.optionalNullable(s.array(s.lazy(() => wikiPageSectionHolderSchema))),
    categories: s.optionalNullable(s.array(s.string())),
    externalLinks: s.optionalNullable(s.array(s.string())),
    references: s.optionalNullable(s.array(s.string())),
    pageviews: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
