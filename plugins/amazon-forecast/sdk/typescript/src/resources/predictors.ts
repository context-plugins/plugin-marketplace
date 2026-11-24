import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServicePredictorsApiSchema,
  type XAmzTargetAmazonForecastServicePredictorsApi,
} from "../models/xamz-target-amazon-forecast-service-predictors-api.js";
import {
  xAmzTarget1AmazonForecastServicePredictorsApiSchema,
  type XAmzTarget1AmazonForecastServicePredictorsApi,
} from "../models/xamz-target1-amazon-forecast-service-predictors-api.js";
import {
  xAmzTarget2AmazonForecastServicePredictorsApiSchema,
  type XAmzTarget2AmazonForecastServicePredictorsApi,
} from "../models/xamz-target2-amazon-forecast-service-predictors-api.js";
import {
  xAmzTarget3AmazonForecastServicePredictorsApiSchema,
  type XAmzTarget3AmazonForecastServicePredictorsApi,
} from "../models/xamz-target3-amazon-forecast-service-predictors-api.js";
import type { Servers } from "../servers.js";

export class Predictors {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Predictor
   *
   * @remarks
   * This operation creates a legacy predictor that does not include all the predictor
   * functionalities provided by Amazon Forecast. To create a predictor that is compatible with all
   * aspects of Forecast, use CreateAutoPredictor. Creates an Amazon Forecast predictor. In the
   * request, provide a dataset group and either specify an algorithm or let Amazon Forecast choose
   * an algorithm for you using AutoML. If you specify an algorithm, you also can override
   * algorithm-specific hyperparameters. Amazon Forecast uses the algorithm to train a predictor
   * using the latest version of the datasets in the specified dataset group. You can then generate
   * a forecast using the CreateForecast operation. To see the evaluation metrics, use the
   * GetAccuracyMetrics operation. You can specify a featurization configuration to fill and
   * aggregate the data fields in the TARGET_TIME_SERIES dataset to improve model training. For more
   * information, see FeaturizationConfig. For RELATED_TIME_SERIES datasets, CreatePredictor
   * verifies that the DataFrequency specified when the dataset was created matches the
   * ForecastFrequency. TARGET_TIME_SERIES datasets don't have this restriction. Amazon Forecast
   * also verifies the delimiter and
   *
   * @returns Success
   *
   * @throws {@link Predictors.CreatePredictorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPredictor(
    request: Predictors.CreatePredictorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Predictors.CreatePredictorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreatePredictor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServicePredictorsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Predictors.CreatePredictorError,
      },
      options,
    );
  }

  /**
   * Delete Predictor
   *
   * @remarks
   * Deletes a predictor created using the DescribePredictor or CreatePredictor operations. You can
   * delete only predictor that have a status of ACTIVE or CREATE_FAILED. To get the status, use the
   * DescribePredictor operation.
   *
   * @returns Success
   *
   * @throws {@link Predictors.DeletePredictorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePredictor(
    request: Predictors.DeletePredictorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Predictors.DeletePredictorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeletePredictor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServicePredictorsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Predictors.DeletePredictorError,
      },
      options,
    );
  }

  /**
   * Describe Predictor
   *
   * @remarks
   * This operation is only valid for legacy predictors created with CreatePredictor. If you are not
   * using a legacy predictor, use DescribeAutoPredictor. Describes a predictor created using the
   * CreatePredictor operation. In addition to listing the properties provided in the
   * CreatePredictor request, this operation lists the following properties: DatasetImportJobArns -
   * The dataset import jobs used to import training data. AutoMLAlgorithmArns - If AutoML is
   * performed, the algorithms that were evaluated. CreationTime LastModificationTime Status Message
   * - If an error occurred, information about the error.
   *
   * @returns Success
   *
   * @throws {@link Predictors.DescribePredictorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describePredictor(
    request: Predictors.DescribePredictorRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Predictors.DescribePredictorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribePredictor"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServicePredictorsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Predictors.DescribePredictorError,
      },
      options,
    );
  }

  /**
   * List Predictors
   *
   * @remarks
   * Returns a list of predictors created using the CreateAutoPredictor or CreatePredictor
   * operations. For each predictor, this operation returns a summary of its properties, including
   * its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
   * ARN with the DescribeAutoPredictor and DescribePredictor operations. You can filter the list
   * using an array of Filter objects.
   *
   * @returns Success
   *
   * @throws {@link Predictors.ListPredictorsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPredictors(
    request: Predictors.ListPredictorsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Predictors.ListPredictorsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListPredictors"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServicePredictorsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Predictors.ListPredictorsError,
      },
      options,
    );
  }
}

export namespace Predictors {
  export type CreatePredictorRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServicePredictorsApi;
  };

  export class CreatePredictorError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePredictorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeletePredictorRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServicePredictorsApi;
  };

  export class DeletePredictorError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePredictorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribePredictorRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServicePredictorsApi;
  };

  export class DescribePredictorError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribePredictorError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListPredictorsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServicePredictorsApi;
  };

  export class ListPredictorsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListPredictorsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
