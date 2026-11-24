import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  searchBatchResponseInternalSchema,
  searchBatchResponseSchema,
  type SearchBatchResponse,
} from "../search-batch-response.js";
import {
  searchResponseInternalSchema,
  searchResponseSchema,
  type SearchResponse,
} from "../search-response.js";

export type SearchResponse1 = SearchResponse | SearchBatchResponse;

export const searchResponse1InternalSchema: Schema<SearchResponse1> = s.of<SearchResponse1>(
  s.union([s.lazy(() => searchResponseInternalSchema), s.lazy(() => searchBatchResponseInternalSchema)]),
);

export const searchResponse1Schema: Schema<SearchResponse1> = s.lazySchema(() =>
  s.of<SearchResponse1>(
    s.union([s.lazy(() => searchResponseSchema), s.lazy(() => searchBatchResponseSchema)]),
  ),
);
