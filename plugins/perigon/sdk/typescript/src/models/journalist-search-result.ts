import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { journalistSchema, type Journalist } from "./journalist.js";

/** Journalist search result */
export type JournalistSearchResult = {
  status: number;
  numResults: number;
  results: Journalist[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const journalistSearchResultSchema: Schema<JournalistSearchResult> = s.object<JournalistSearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => journalistSchema)),
  },
  { additionalProperties: s.json() },
);
