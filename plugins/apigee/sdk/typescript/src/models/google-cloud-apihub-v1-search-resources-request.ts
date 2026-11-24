import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The SearchResources method's request. */
export type GoogleCloudApihubV1SearchResourcesRequest = {
  /**
   * Optional. The maximum number of search results to return. The service may return fewer than
   * this value. If unspecified at most 10 search results will be returned. If value is negative
   * then `INVALID_ARGUMENT` error is returned. The maximum value is 25; values above 25 will be
   * coerced to 25. While paginating, you can specify a new page size parameter for each page of
   * search results to be listed.
   */
  pageSize?: number;
  /**
   * Optional. A page token, received from a previous SearchResources call. Specify this parameter
   * to retrieve the next page of transactions. When paginating, you must specify the `page_token`
   * parameter and all the other parameters except page_size should be specified with the same value
   * which was used in the previous call. If the other fields are set with a different value than
   * the previous call then `INVALID_ARGUMENT` error is returned.
   */
  pageToken?: string;
  /**
   * Optional. An expression that filters the list of search results. A filter expression consists
   * of a field name, a comparison operator, and a value for filtering. The value must be a string,
   * a number, or a boolean. The comparison operator must be `=`. Filters are not case sensitive.
   * The following field names are eligible for filtering: * `resource_type` - The type of resource
   * in the search results. Must be one of the following: `Api`, `ApiOperation`, `Deployment`,
   * `Definition`, `Spec` or `Version`. This field can only be specified once in the filter. Here
   * are is an example: * `resource_type = Api` - The resource_type is _Api_.
   */
  filter?: string;
  /**
   * Required. The free text search query. This query can contain keywords which could be related to
   * any detail of the API-Hub resources such display names, descriptions, attributes etc.
   */
  query?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SearchResourcesRequestSchema: Schema<GoogleCloudApihubV1SearchResourcesRequest> =
  s.object<GoogleCloudApihubV1SearchResourcesRequest>(
    {
      pageSize: s.optional(s.int()),
      pageToken: s.optional(s.string()),
      filter: s.optional(s.string()),
      query: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
