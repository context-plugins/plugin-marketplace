import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1SearchResultSchema,
  type GoogleCloudApihubV1SearchResult,
} from "./google-cloud-apihub-v1-search-result.js";

/** Response for the SearchResources method. */
export type GoogleCloudApihubV1SearchResourcesResponse = {
  /**
   * List of search results according to the filter and search query specified. The order of search
   * results represents the ranking.
   */
  searchResults?: GoogleCloudApihubV1SearchResult[];
  /**
   * Pass this token in the SearchResourcesRequest to continue to list results. If all results have
   * been returned, this field is an empty string or not present in the response.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SearchResourcesResponseSchema: Schema<GoogleCloudApihubV1SearchResourcesResponse> =
  s.object<GoogleCloudApihubV1SearchResourcesResponse>(
    {
      searchResults: s.optional(s.array(s.lazy(() => googleCloudApihubV1SearchResultSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
