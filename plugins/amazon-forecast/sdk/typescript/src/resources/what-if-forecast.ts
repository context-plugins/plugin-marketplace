import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceWhatIfForecastApiSchema,
  type XAmzTargetAmazonForecastServiceWhatIfForecastApi,
} from "../models/xamz-target-amazon-forecast-service-what-if-forecast-api.js";
import {
  xAmzTarget1AmazonForecastServiceWhatIfForecastApiSchema,
  type XAmzTarget1AmazonForecastServiceWhatIfForecastApi,
} from "../models/xamz-target1-amazon-forecast-service-what-if-forecast-api.js";
import {
  xAmzTarget2AmazonForecastServiceWhatIfForecastApiSchema,
  type XAmzTarget2AmazonForecastServiceWhatIfForecastApi,
} from "../models/xamz-target2-amazon-forecast-service-what-if-forecast-api.js";
import {
  xAmzTarget3AmazonForecastServiceWhatIfForecastApiSchema,
  type XAmzTarget3AmazonForecastServiceWhatIfForecastApi,
} from "../models/xamz-target3-amazon-forecast-service-what-if-forecast-api.js";
import type { Servers } from "../servers.js";

export class WhatIfForecast {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create What If Forecast
   *
   * @remarks
   * A what-if forecast is a forecast that is created from a modified version of the baseline
   * forecast. Each what-if forecast incorporates either a replacement dataset or a set of
   * transformations to the original dataset.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecast.CreateWhatIfForecastError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWhatIfForecast(
    request: WhatIfForecast.CreateWhatIfForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecast.CreateWhatIfForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateWhatIfForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceWhatIfForecastApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecast.CreateWhatIfForecastError,
      },
      options,
    );
  }

  /**
   * Delete What If Forecast
   *
   * @remarks
   * Deletes a what-if forecast created using the CreateWhatIfForecast operation. You can delete
   * only what-if forecasts that have a status of ACTIVE or CREATE_FAILED. To get the status, use
   * the DescribeWhatIfForecast operation. You can't delete a what-if forecast while it is being
   * exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecast.DeleteWhatIfForecastError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWhatIfForecast(
    request: WhatIfForecast.DeleteWhatIfForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecast.DeleteWhatIfForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteWhatIfForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceWhatIfForecastApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecast.DeleteWhatIfForecastError,
      },
      options,
    );
  }

  /**
   * Describe What If Forecast
   *
   * @remarks
   * Describes the what-if forecast created using the CreateWhatIfForecast operation. In addition to
   * listing the properties provided in the CreateWhatIfForecast request, this operation lists the
   * following properties: CreationTime LastModificationTime Message - If an error occurred,
   * information about the error. Status
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecast.DescribeWhatIfForecastError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeWhatIfForecast(
    request: WhatIfForecast.DescribeWhatIfForecastRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecast.DescribeWhatIfForecastError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeWhatIfForecast"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceWhatIfForecastApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecast.DescribeWhatIfForecastError,
      },
      options,
    );
  }

  /**
   * List What If Forecasts
   *
   * @remarks
   * Returns a list of what-if forecasts created using the CreateWhatIfForecast operation. For each
   * what-if forecast, this operation returns a summary of its properties, including its Amazon
   * Resource Name (ARN). You can retrieve the complete set of properties by using the what-if
   * forecast ARN with the DescribeWhatIfForecast operation.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecast.ListWhatIfForecastsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWhatIfForecasts(
    request: WhatIfForecast.ListWhatIfForecastsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecast.ListWhatIfForecastsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListWhatIfForecasts"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceWhatIfForecastApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecast.ListWhatIfForecastsError,
      },
      options,
    );
  }
}

export namespace WhatIfForecast {
  export type CreateWhatIfForecastRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfForecastApi;
  };

  export class CreateWhatIfForecastError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWhatIfForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteWhatIfForecastRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfForecastApi;
  };

  export class DeleteWhatIfForecastError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWhatIfForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeWhatIfForecastRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfForecastApi;
  };

  export class DescribeWhatIfForecastError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeWhatIfForecastError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWhatIfForecastsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceWhatIfForecastApi;
  };

  export class ListWhatIfForecastsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWhatIfForecastsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
