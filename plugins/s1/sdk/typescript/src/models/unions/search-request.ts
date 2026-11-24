import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  searchParametersInternalSchema,
  searchParametersSchema,
  type SearchParameters,
} from "../search-parameters.js";

export type SearchRequest = SearchParameters | SearchParameters[];

export const searchRequestInternalSchema: Schema<SearchRequest> = s.of<SearchRequest>(
  s.union([
    s.lazy(() => searchParametersInternalSchema),
    s.array(s.lazy(() => searchParametersInternalSchema)),
  ]),
);

export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
  s.of<SearchRequest>(
    s.union([
      s.lazy(() => searchParametersSchema),
      s.array(s.lazy(() => searchParametersSchema)).check(s.minLength(1)),
    ]),
  ),
);
