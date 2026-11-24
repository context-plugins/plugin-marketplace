import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scoredDataWikiDataSchema, type ScoredDataWikiData } from "./scored-data-wiki-data.js";

/** Wikipedia vector search result */
export type WikipediaVectorSearchResult = {
  status: number;
  results: ScoredDataWikiData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikipediaVectorSearchResultSchema: Schema<WikipediaVectorSearchResult> =
  s.object<WikipediaVectorSearchResult>(
    {
      status: s.int(),
      results: s.array(s.lazy(() => scoredDataWikiDataSchema)),
    },
    { additionalProperties: s.json() },
  );
