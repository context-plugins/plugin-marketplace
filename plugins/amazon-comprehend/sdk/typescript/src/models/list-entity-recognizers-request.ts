import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRecognizerFilterSchema, type EntityRecognizerFilter } from "./entity-recognizer-filter.js";

export type ListEntityRecognizersRequest = {
  filter?: EntityRecognizerFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** The maximum number of results to return on each page. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEntityRecognizersRequestSchema: Schema<ListEntityRecognizersRequest> =
  s.object<ListEntityRecognizersRequest>(
    {
      filter: s.optional(s.lazy(() => entityRecognizerFilterSchema)),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        filter: "Filter",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
