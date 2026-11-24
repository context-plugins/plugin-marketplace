import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectRelmCrmSearchApiSchema, type ObjectRelmCrmSearchApi } from "./object-relm-crm-search-api.js";
import { resultSchema, type Result } from "./result.js";

export type SearchResult = {
  object?: ObjectRelmCrmSearchApi;
  query?: string;
  hasMore?: boolean;
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResultSchema: Schema<SearchResult> = s.object<SearchResult>(
  {
    object: s.optional(s.lazy(() => objectRelmCrmSearchApiSchema)),
    query: s.optional(s.string()),
    hasMore: s.optional(s.boolean()),
    results: s.optional(s.array(s.lazy(() => resultSchema))),
    _keysMap: {
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
