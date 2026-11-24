import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";

/** Source search result */
export type SourceSearchResult = {
  status: number;
  numResults: number;
  results: Source[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSearchResultSchema: Schema<SourceSearchResult> = s.object<SourceSearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => sourceSchema)),
  },
  { additionalProperties: s.json() },
);
