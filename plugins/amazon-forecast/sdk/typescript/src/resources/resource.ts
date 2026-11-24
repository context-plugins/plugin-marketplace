import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceResourceApiSchema,
  type XAmzTargetAmazonForecastServiceResourceApi,
} from "../models/xamz-target-amazon-forecast-service-resource-api.js";
import {
  xAmzTarget1AmazonForecastServiceResourceApiSchema,
  type XAmzTarget1AmazonForecastServiceResourceApi,
} from "../models/xamz-target1-amazon-forecast-service-resource-api.js";
import {
  xAmzTarget2AmazonForecastServiceResourceApiSchema,
  type XAmzTarget2AmazonForecastServiceResourceApi,
} from "../models/xamz-target2-amazon-forecast-service-resource-api.js";
import type { Servers } from "../servers.js";

export class Resource {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stop Resource
   *
   * @remarks
   * Stops a resource. The resource undergoes the following states: CREATE_STOPPING and
   * CREATE_STOPPED. You cannot resume a resource once it has been stopped. This operation can be
   * applied to the following resources (and their corresponding child resources): Dataset Import
   * Job Predictor Job Forecast Job Forecast Export Job Predictor Backtest Export Job Explainability
   * Job Explainability Export Job
   *
   * @returns Success
   *
   * @throws {@link Resource.StopResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopResource(
    request: Resource.StopResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Resource.StopResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceResourceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Resource.StopResourceError,
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
   * @throws {@link Resource.TagResourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tagResource(
    request: Resource.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Resource.TagResourceError> {
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
        errorFactory: Resource.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Deletes the specified tags from a resource.
   *
   * @returns Success
   *
   * @throws {@link Resource.UntagResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  untagResource(
    request: Resource.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Resource.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceResourceApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Resource.UntagResourceError,
      },
      options,
    );
  }
}

export namespace Resource {
  export type StopResourceRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceResourceApi;
  };

  export class StopResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceResourceApi;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceResourceApi;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
