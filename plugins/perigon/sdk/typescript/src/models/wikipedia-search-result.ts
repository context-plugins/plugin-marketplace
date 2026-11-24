import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wikiPageSchema, type WikiPage } from "./wiki-page.js";

/** Wikipedia search result */
export type WikipediaSearchResult = {
  status: number;
  numResults: number;
  results: WikiPage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikipediaSearchResultSchema: Schema<WikipediaSearchResult> = s.object<WikipediaSearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => wikiPageSchema)),
  },
  { additionalProperties: s.json() },
);
