import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { queryEchoInternalSchema, queryEchoSchema, type QueryEcho } from "./query-echo.js";
import { resultRowSchema, type ResultRow } from "./result-row.js";

export type QueryResponse = {
  results: ResultRow[];
  /** Present only on breakdown responses. */
  meta?: Meta;
  /** Echo of the resolved request. */
  query: QueryEcho;
  /** True when the site has imported (e.g. GA4) data overlapping the queried window. */
  hasImport?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const queryResponseProperties: s.Shape<QueryResponse> = {
  results: s.array(s.lazy(() => resultRowSchema)),
  meta: s.optional(s.lazy(() => metaSchema)),
  query: queryEchoInternalSchema,
  hasImport: s.optional(s.boolean()),
  _keysMap: {
    hasImport: "has_import",
  },
};

export const queryResponseInternalSchema: Schema<QueryResponse> = s.object<QueryResponse>(
  queryResponseProperties,
  { additionalProperties: s.json() },
);

export const queryResponseSchema: Schema<QueryResponse> = s.lazySchema(() =>
  s.object<QueryResponse>(
    {
      ...queryResponseProperties,
      query: queryEchoSchema,
    },
    { additionalProperties: s.json() },
  ),
);
