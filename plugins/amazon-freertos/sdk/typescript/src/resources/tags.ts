import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { tagsRequestSchema, type TagsRequest } from "../models/tags-request.js";
import { tagsResponseSchema, type TagsResponse } from "../models/tags-response.js";
import type { Servers } from "../servers.js";

/**
 * Resource metadata labels
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
   * List Tags For Resource
   *
   * @remarks
   * Lists the tags (metadata) you have assigned to the resource.
   *
   * @returns Success
   *
   * @throws {@link Tags.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagsForResource(
    request: Tags.ListTagsForResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsResponse, Tags.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tags/{resourceArn}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsResponseSchema },
        errorFactory: Tags.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds to or modifies the tags of the given resource.
   *
   * @returns Success
   *
   * @throws {@link Tags.TagResourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonFreeRtosError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagResource(
    request: Tags.TagResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tags/{resourceArn}"),
        auth: this.#auth.awsSigV4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tagsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.TagResourceError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type ListTagsForResourceRequest = {
    /** The ARN of the resource. */
    resourceArn: string;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TagResourceRequest = {
    /** The ARN of the resource. */
    resourceArn: string;
    body: TagsRequest;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
