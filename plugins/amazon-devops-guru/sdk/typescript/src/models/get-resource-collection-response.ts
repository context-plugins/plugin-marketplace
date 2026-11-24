import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceCollectionFilterSchema,
  type ResourceCollectionFilter,
} from "./resource-collection-filter.js";

export type GetResourceCollectionResponse = {
  resourceCollection?: ResourceCollectionFilter;
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getResourceCollectionResponseSchema: Schema<GetResourceCollectionResponse> =
  s.object<GetResourceCollectionResponse>(
    {
      resourceCollection: s.optional(s.lazy(() => resourceCollectionFilterSchema)),
      nextToken: s.optional(s.string()),
      _keysMap: {
        resourceCollection: "ResourceCollection",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
