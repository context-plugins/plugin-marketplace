import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { searchParametersSchema, type SearchParameters } from "../models/search-parameters.js";
import { searchResponseSchema, type SearchResponse } from "../models/search-response.js";
import {
  visualSearchParameters3Schema,
  type VisualSearchParameters3,
} from "../models/unions/visual-search-parameters3.js";
import type { Servers } from "../servers.js";

/**
 * APIs for searching resources using text and visual search capabilities
 */
export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Provides a powerful query interface to filter and retrieve assets and their details
   *
   * @remarks
   * Returns a list of resources matching the specified search criteria.
   *
   * Uses a Lucene-like query language to filter assets by descriptive attributes (`public_id`,
   * `asset_id`, `filename`, `display_name`, `folder` / `asset_folder`, `tags`, `context.<key>`),
   * file details (`resource_type`, `type`, `format`, `bytes`, `width`, `height`, `duration`,
   * `pages`, `aspect_ratio`, `transparent`, `grayscale`), lifecycle dates (`uploaded_at`,
   * `created_at`, `taken_at`, `updated_at`, `last_updated.<kind>`), moderation and lifecycle state
   * (`status`, `moderation_status`, `moderation_kind`), embedded data (`image_metadata.*`),
   * structured metadata (`metadata.<external_id>`), and analysis fields (`face_count`, `colors`,
   * `quality_score`, `illustration_score`, `accessibility_analysis.*`). Supports sorting, aggregate
   * counts, and complex boolean expressions.
   *
   * Examples: `tags:shirt AND uploaded_at>1d`, `resource_type:image AND bytes>1000000`,
   * `folder:products OR context.category:electronics`. See the [search expressions
   * guide](https://cloudinary.com/documentation/search_expressions.md) for the full syntax and
   * field reference.
   *
   * @returns Successful search response
   *
   * @throws {@link Search.SearchAssetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  searchAssets(
    request: Search.SearchAssetsRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.SearchAssetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/search"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchParametersSchema },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: Search.SearchAssetsError,
      },
      options,
    );
  }

  /**
   * Finds images in your asset library based on visual similarity or content
   *
   * @remarks
   * Returns a list of resources that are visually similar to a specified image. You can provide the
   * source image for comparison in one of three ways:
   * - Provide a URL of an image
   * - Specify the asset ID of an existing image
   * - Provide a textual description
   *
   * @returns Successful visual search response
   *
   * @throws {@link Search.VisualSearchAssetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  visualSearchAssets(
    request: Search.VisualSearchAssetsRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResponse, Search.VisualSearchAssetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/resources/visual_search"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: visualSearchParameters3Schema },
      },
      {
        success: { kind: "json", schema: searchResponseSchema },
        errorFactory: Search.VisualSearchAssetsError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchAssetsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The search query parameters. */
    body: SearchParameters;
  };

  export class SearchAssetsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAssetsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type VisualSearchAssetsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The visual search parameters. */
    body: VisualSearchParameters3;
  };

  export class VisualSearchAssetsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<VisualSearchAssetsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
