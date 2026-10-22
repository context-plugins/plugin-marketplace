import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { SortBy, sortBySchema } from "../models/sort-by.js";
import { videoViewsResponseSchema, type VideoViewsResponse } from "../models/video-views-response.js";
import type { Servers } from "../servers.js";

/**
 * Gets video analytics
 */
export class VideoAnalytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get video views
   *
   * @remarks
   * Retrieves analytics data for video views. Results can be filtered using expressions based on
   * various criteria such as video public ID, view duration, viewer information, and more.
   *
   * @returns List of video views retrieved
   *
   * @throws {@link VideoAnalytics.GetVideoViewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getVideoViews(
    request: VideoAnalytics.GetVideoViewsRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoViewsResponse, VideoAnalytics.GetVideoViewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/video/analytics/views"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "expression", value: request.expression, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 10) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(sortBySchema, SortBy.ViewEndedAt2) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoViewsResponseSchema },
        errorFactory: VideoAnalytics.GetVideoViewsError,
      },
      options,
    );
  }
}

export namespace VideoAnalytics {
  export type GetVideoViewsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /**
     * A set of conditions used to limit the results to rows that match those conditions. For
     * example: `?expression=video_public_id=skate`
     */
    expression?: string;
    /** The maximum number of results to return. Default is 10. @default 10 */
    maxResults?: number;
    /**
     * Specifies the expression field by which to sort the results. Prepend values with a '-' to
     * reverse the order.
     *
     * @default SortBy.ViewEndedAt2
     */
    sortBy?: SortBy;
    /**
     * The cursor for pagination. Use the next_cursor value from a previous response to get the next
     * page of results.
     */
    nextCursor?: string;
  };

  export class GetVideoViewsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVideoViewsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
