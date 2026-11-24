import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceTagsApiSchema,
  type XAmzTargetAmazonForecastServiceTagsApi,
} from "../models/xamz-target-amazon-forecast-service-tags-api.js";
import {
  xAmzTarget1AmazonForecastServiceResourceApiSchema,
  type XAmzTarget1AmazonForecastServiceResourceApi,
} from "../models/xamz-target1-amazon-forecast-service-resource-api.js";
import type { Servers } from "../servers.js";

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
   * Lists the tags for an Amazon Forecast resource.
   *
   * @returns Success
   *
   * @throws {@link Tags.ListTagsForResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagsForResource(
    request: Tags.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceTagsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Associates the specified tags to a resource with the specified resourceArn. If existing tags on
   * a resource are not specified in the request parameters, they are not changed. When a resource
   * is deleted, the tags associated with that resource are also deleted.
   *
   * @returns Success
   *
   * @throws {@link Tags.TagResource2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagResource2(
    request: Tags.TagResource2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Tags.TagResource2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceResourceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Tags.TagResource2Error,
      },
      options,
    );
  }
}

export namespace Tags {
  export type ListTagsForResourceRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceTagsApi;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type TagResource2Request = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi;
  };

  export class TagResource2Error extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResource2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
