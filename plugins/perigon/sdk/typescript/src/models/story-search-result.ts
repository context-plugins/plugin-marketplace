import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { newsClusterSchema, type NewsCluster } from "./news-cluster.js";

/** Story search result */
export type StorySearchResult = {
  status: number;
  numResults: number;
  results: NewsCluster[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storySearchResultSchema: Schema<StorySearchResult> = s.object<StorySearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => newsClusterSchema)),
  },
  { additionalProperties: s.json() },
);
