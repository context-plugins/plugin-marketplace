import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { resourceTypeSchema, type ResourceType } from "../models/resource-type.js";
import { tagsListResponseSchema, type TagsListResponse } from "../models/tags-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Enables you to manage the tags used in your product environment.
 */
export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieves a list of tags currently applied to assets in your Cloudinary account
   *
   * @remarks
   * Retrieves a comprehensive list of all tags that exist in your product environment for assets of
   * the specified type.
   *
   * [Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)
   *
   * @returns List of tags retrieved
   *
   * @throws {@link Tags.ListResourceTagsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listResourceTags(
    request: Tags.ListResourceTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsListResponse, Tags.ListResourceTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/tags/{resource_type}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceTypeSchema },
        ],
        query: [
          { name: "prefix", value: request.prefix, schema: s.optional(s.string()) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          { name: "max_results", value: request.maxResults, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsListResponseSchema },
        errorFactory: Tags.ListResourceTagsError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type ListResourceTagsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource (image, video, or raw). */
    resourceType: ResourceType;
    /** Limit the returned tags to those that start with the specified prefix. */
    prefix?: string;
    /** Cursor for pagination. */
    nextCursor?: string;
    /** Maximum number of results to return (1-500). */
    maxResults?: number;
  };

  export class ListResourceTagsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResourceTagsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
