import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceExplainabilityApiSchema,
  type XAmzTargetAmazonForecastServiceExplainabilityApi,
} from "../models/xamz-target-amazon-forecast-service-explainability-api.js";
import {
  xAmzTarget1AmazonForecastServiceExplainabilityApiSchema,
  type XAmzTarget1AmazonForecastServiceExplainabilityApi,
} from "../models/xamz-target1-amazon-forecast-service-explainability-api.js";
import {
  xAmzTarget2AmazonForecastServiceExplainabilityApiSchema,
  type XAmzTarget2AmazonForecastServiceExplainabilityApi,
} from "../models/xamz-target2-amazon-forecast-service-explainability-api.js";
import {
  xAmzTarget3AmazonForecastServiceExplainabilityApiSchema,
  type XAmzTarget3AmazonForecastServiceExplainabilityApi,
} from "../models/xamz-target3-amazon-forecast-service-explainability-api.js";
import type { Servers } from "../servers.js";

export class Explainability {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Explainability
   *
   * @remarks
   * Explainability is only available for Forecasts and Predictors generated from an AutoPredictor
   * (CreateAutoPredictor) Creates an Amazon Forecast Explainability. Explainability helps you
   * better understand how the attributes in your datasets impact forecast. Amazon Forecast uses a
   * metric called Impact scores to quantify the relative impact of each attribute and determine
   * whether they increase or decrease forecast values. To enable Forecast Explainability, your
   * predictor must include at least one of the following: related time series, item metadata, or
   * additional datasets like Holidays and the Weather Index. CreateExplainability accepts either a
   * Predictor ARN or Forecast ARN. To receive aggregated Impact scores for all time series and time
   * points in your datasets, provide a Predictor ARN. To receive Impact scores for specific time
   * series and time points, provide a Forecast ARN. CreateExplainability with a Predictor ARN You
   * can only have one Explainability resource per predictor. If you already enabled
   * ExplainPredictor in CreateAutoPredictor, that predictor already has an Explainability resource.
   * The following parameters are required when providing a Predictor ARN: ExplainabilityName - A
   *
   * @returns Success
   *
   * @throws {@link Explainability.CreateExplainabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExplainability(
    request: Explainability.CreateExplainabilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Explainability.CreateExplainabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateExplainability"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceExplainabilityApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Explainability.CreateExplainabilityError,
      },
      options,
    );
  }

  /**
   * Delete Explainability
   *
   * @remarks
   * Deletes an Explainability resource. You can delete only predictor that have a status of ACTIVE
   * or CREATE_FAILED. To get the status, use the DescribeExplainability operation.
   *
   * @returns Success
   *
   * @throws {@link Explainability.DeleteExplainabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExplainability(
    request: Explainability.DeleteExplainabilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Explainability.DeleteExplainabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteExplainability"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceExplainabilityApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Explainability.DeleteExplainabilityError,
      },
      options,
    );
  }

  /**
   * Describe Explainability
   *
   * @remarks
   * Describes an Explainability resource created using the CreateExplainability operation.
   *
   * @returns Success
   *
   * @throws {@link Explainability.DescribeExplainabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeExplainability(
    request: Explainability.DescribeExplainabilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Explainability.DescribeExplainabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeExplainability"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceExplainabilityApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Explainability.DescribeExplainabilityError,
      },
      options,
    );
  }

  /**
   * List Explainabilities
   *
   * @remarks
   * Returns a list of Explainability resources created using the CreateExplainability operation.
   * This operation returns a summary for each Explainability. You can filter the list using an
   * array of Filter objects. To retrieve the complete set of properties for a particular
   * Explainability resource, use the ARN with the DescribeExplainability operation.
   *
   * @returns Success
   *
   * @throws {@link Explainability.ListExplainabilitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExplainabilities(
    request: Explainability.ListExplainabilitiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Explainability.ListExplainabilitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListExplainabilities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceExplainabilityApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Explainability.ListExplainabilitiesError,
      },
      options,
    );
  }
}

export namespace Explainability {
  export type CreateExplainabilityRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceExplainabilityApi;
  };

  export class CreateExplainabilityError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateExplainabilityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteExplainabilityRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceExplainabilityApi;
  };

  export class DeleteExplainabilityError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteExplainabilityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeExplainabilityRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceExplainabilityApi;
  };

  export class DescribeExplainabilityError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeExplainabilityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListExplainabilitiesRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceExplainabilityApi;
  };

  export class ListExplainabilitiesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListExplainabilitiesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
