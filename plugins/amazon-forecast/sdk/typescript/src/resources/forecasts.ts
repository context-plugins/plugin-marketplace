import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceForecastsApiSchema,
  type XAmzTargetAmazonForecastServiceForecastsApi,
} from "../models/xamz-target-amazon-forecast-service-forecasts-api.js";
import {
  xAmzTarget1AmazonForecastServiceForecastsApiSchema,
  type XAmzTarget1AmazonForecastServiceForecastsApi,
} from "../models/xamz-target1-amazon-forecast-service-forecasts-api.js";
import {
  xAmzTarget2AmazonForecastServiceForecastsApiSchema,
  type XAmzTarget2AmazonForecastServiceForecastsApi,
} from "../models/xamz-target2-amazon-forecast-service-forecasts-api.js";
import {
  xAmzTarget3AmazonForecastServiceForecastsApiSchema,
  type XAmzTarget3AmazonForecastServiceForecastsApi,
} from "../models/xamz-target3-amazon-forecast-service-forecasts-api.js";
import type { Servers } from "../servers.js";

export class Forecasts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Forecast
   *
   * @remarks
   * Creates a forecast for each item in the TARGET_TIME_SERIES dataset that was used to train the
   * predictor. This is known as inference. To retrieve the forecast for a single item at low
   * latency, use the operation. To export the complete forecast into your Amazon Simple Storage
   * Service (Amazon S3) bucket, use the CreateForecastExportJob operation. The range of the
   * forecast is determined by the ForecastHorizon value, which you specify in the CreatePredictor
   * request. When you query a forecast, you can request a specific date range within the forecast.
   * To get a list of all your forecasts, use the ListForecasts operation. The forecasts generated
   * by Amazon Forecast are in the same time zone as the dataset that was used to create the
   * predictor. For more information, see howitworks-forecast. The Status of the forecast must be
   * ACTIVE before you can query or export the forecast. Use the DescribeForecast operation to get
   * the status. By default, a forecast includes predictions for every item (item_id) in the dataset
   * group that was used to train the predictor. However, you can use the TimeSeriesSelector object
   * to generate a forecast on a subset of time series. Forecast creation is skipped for any
   *
   * @returns Success
   *
   * @throws {@link Forecasts.CreateForecastError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createForecast(
    request: Forecasts.CreateForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Forecasts.CreateForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceForecastsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Forecasts.CreateForecastError,
      },
      options,
    );
  }

  /**
   * Delete Forecast
   *
   * @remarks
   * Deletes a forecast created using the CreateForecast operation. You can delete only forecasts
   * that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeForecast
   * operation. You can't delete a forecast while it is being exported. After a forecast is deleted,
   * you can no longer query the forecast.
   *
   * @returns Success
   *
   * @throws {@link Forecasts.DeleteForecastError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteForecast(
    request: Forecasts.DeleteForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Forecasts.DeleteForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceForecastsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Forecasts.DeleteForecastError,
      },
      options,
    );
  }

  /**
   * Describe Forecast
   *
   * @remarks
   * Describes a forecast created using the CreateForecast operation. In addition to listing the
   * properties provided in the CreateForecast request, this operation lists the following
   * properties: DatasetGroupArn - The dataset group that provided the training data. CreationTime
   * LastModificationTime Status Message - If an error occurred, information about the error.
   *
   * @returns Success
   *
   * @throws {@link Forecasts.DescribeForecastError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeForecast(
    request: Forecasts.DescribeForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Forecasts.DescribeForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceForecastsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Forecasts.DescribeForecastError,
      },
      options,
    );
  }

  /**
   * List Forecasts
   *
   * @remarks
   * Returns a list of forecasts created using the CreateForecast operation. For each forecast, this
   * operation returns a summary of its properties, including its Amazon Resource Name (ARN). To
   * retrieve the complete set of properties, specify the ARN with the DescribeForecast operation.
   * You can filter the list using an array of Filter objects.
   *
   * @returns Success
   *
   * @throws {@link Forecasts.ListForecastsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listForecasts(
    request: Forecasts.ListForecastsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Forecasts.ListForecastsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListForecasts"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceForecastsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Forecasts.ListForecastsError,
      },
      options,
    );
  }
}

export namespace Forecasts {
  export type CreateForecastRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceForecastsApi;
  };

  export class CreateForecastError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteForecastRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceForecastsApi;
  };

  export class DeleteForecastError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeForecastRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastsApi;
  };

  export class DescribeForecastError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListForecastsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceForecastsApi;
  };

  export class ListForecastsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListForecastsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
