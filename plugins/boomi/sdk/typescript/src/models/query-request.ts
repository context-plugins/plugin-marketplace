import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queryFilterSchema, type QueryFilter } from "./query-filter.js";

/** Request body for querying platform objects with filter criteria. */
export type QueryRequest = {
  /** Filter expression for narrowing query results. */
  queryFilter?: QueryFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryRequestSchema: Schema<QueryRequest> = s.object<QueryRequest>(
  {
    queryFilter: s.optional(s.lazy(() => queryFilterSchema)),
    _keysMap: {
      queryFilter: "QueryFilter",
    },
  },
  { additionalProperties: s.json() },
);
