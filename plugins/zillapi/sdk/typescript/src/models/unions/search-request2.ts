import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { searchRequestInternalSchema, searchRequestSchema, type SearchRequest } from "../search-request.js";
import { searchRequest1Schema, type SearchRequest1 } from "../search-request1.js";

/**
 * A search request MUST supply either `filters` containing a `bbox`, OR a `searchUrls` array. A
 * free-text location alone is not supported and is rejected with 400 invalid_filters.
 */
export type SearchRequest2 = SearchRequest | SearchRequest1;

export const searchRequest2InternalSchema: Schema<SearchRequest2> = s.of<SearchRequest2>(
  s.union([s.lazy(() => searchRequestInternalSchema), s.lazy(() => searchRequest1Schema)]),
);

export const searchRequest2Schema: Schema<SearchRequest2> = s.lazySchema(() =>
  s.of<SearchRequest2>(s.union([s.lazy(() => searchRequestSchema), s.lazy(() => searchRequest1Schema)])),
);
