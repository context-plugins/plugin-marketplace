import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryToResultSizeSchema, type CategoryToResultSize } from "./category-to-result-size.js";
import {
  chatZeroStateSuggestionOptionsSchema,
  type ChatZeroStateSuggestionOptions,
} from "./chat-zero-state-suggestion-options.js";

export type FeedRequestOptions = {
  /** Number of results asked in response. If a result is a collection, counts as one. */
  resultSize: number;
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours
   * behind UTC.
   */
  timezoneOffset?: number;
  /** Mapping from category to number of results asked for the category. */
  categoryToResultSize?: Record<string, CategoryToResultSize>;
  /** Datasources for which content should be included. Empty is for all. */
  datasourceFilter?: string[];
  chatZeroStateSuggestionOptions?: ChatZeroStateSuggestionOptions;
};

export const feedRequestOptionsSchema: Schema<FeedRequestOptions> = s.object<FeedRequestOptions>({
  resultSize: s.int(),
  timezoneOffset: s.optional(s.int()),
  categoryToResultSize: s.optional(
    s.record(
      s.string(),
      s.lazy(() => categoryToResultSizeSchema),
    ),
  ),
  datasourceFilter: s.optional(s.array(s.string())),
  chatZeroStateSuggestionOptions: s.optional(s.lazy(() => chatZeroStateSuggestionOptionsSchema)),
});
