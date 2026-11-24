import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceWhatIfForecastExportApiSchema,
  type XAmzTargetAmazonForecastServiceWhatIfForecastExportApi,
} from "../models/xamz-target-amazon-forecast-service-what-if-forecast-export-api.js";
import {
  xAmzTarget1AmazonForecastServiceWhatIfForecastExportApiSchema,
  type XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi,
} from "../models/xamz-target1-amazon-forecast-service-what-if-forecast-export-api.js";
import {
  xAmzTarget2AmazonForecastServiceWhatIfForecastExportApiSchema,
  type XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi,
} from "../models/xamz-target2-amazon-forecast-service-what-if-forecast-export-api.js";
import {
  xAmzTarget3AmazonForecastServiceWhatIfForecastExportApiSchema,
  type XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi,
} from "../models/xamz-target3-amazon-forecast-service-what-if-forecast-export-api.js";
import type { Servers } from "../servers.js";

export class WhatIfForecastExport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create What If Forecast Export
   *
   * @remarks
   * Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage
   * Service (Amazon S3) bucket. The forecast file name will match the following conventions: ≈__
   * The component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a
   * DataDestination object that includes an Identity and Access Management (IAM) role that Amazon
   * Forecast can assume to access the Amazon S3 bucket. For more information, see
   * aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
   * your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of
   * the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3
   * bucket. To get the status, use the DescribeWhatIfForecastExport operation.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecastExport.CreateWhatIfForecastExportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWhatIfForecastExport(
    request: WhatIfForecastExport.CreateWhatIfForecastExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecastExport.CreateWhatIfForecastExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateWhatIfForecastExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceWhatIfForecastExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecastExport.CreateWhatIfForecastExportError,
      },
      options,
    );
  }

  /**
   * Delete What If Forecast Export
   *
   * @remarks
   * Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You
   * can delete only what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get
   * the status, use the DescribeWhatIfForecastExport operation.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecastExport.DeleteWhatIfForecastExportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWhatIfForecastExport(
    request: WhatIfForecastExport.DeleteWhatIfForecastExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecastExport.DeleteWhatIfForecastExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteWhatIfForecastExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceWhatIfForecastExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecastExport.DeleteWhatIfForecastExportError,
      },
      options,
    );
  }

  /**
   * Describe What If Forecast Export
   *
   * @remarks
   * Describes the what-if forecast export created using the CreateWhatIfForecastExport operation.
   * In addition to listing the properties provided in the CreateWhatIfForecastExport request, this
   * operation lists the following properties: CreationTime LastModificationTime Message - If an
   * error occurred, information about the error. Status
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecastExport.DescribeWhatIfForecastExportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeWhatIfForecastExport(
    request: WhatIfForecastExport.DescribeWhatIfForecastExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecastExport.DescribeWhatIfForecastExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeWhatIfForecastExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceWhatIfForecastExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecastExport.DescribeWhatIfForecastExportError,
      },
      options,
    );
  }

  /**
   * List What If Forecast Exports
   *
   * @remarks
   * Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport
   * operation. For each what-if forecast export, this operation returns a summary of its
   * properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of
   * properties by using the what-if forecast export ARN with the DescribeWhatIfForecastExport
   * operation.
   *
   * @returns Success
   *
   * @throws {@link WhatIfForecastExport.ListWhatIfForecastExportsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWhatIfForecastExports(
    request: WhatIfForecastExport.ListWhatIfForecastExportsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, WhatIfForecastExport.ListWhatIfForecastExportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListWhatIfForecastExports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceWhatIfForecastExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WhatIfForecastExport.ListWhatIfForecastExportsError,
      },
      options,
    );
  }
}

export namespace WhatIfForecastExport {
  export type CreateWhatIfForecastExportRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceWhatIfForecastExportApi;
  };

  export class CreateWhatIfForecastExportError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWhatIfForecastExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteWhatIfForecastExportRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi;
  };

  export class DeleteWhatIfForecastExportError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWhatIfForecastExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeWhatIfForecastExportRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi;
  };

  export class DescribeWhatIfForecastExportError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeWhatIfForecastExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListWhatIfForecastExportsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi;
  };

  export class ListWhatIfForecastExportsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWhatIfForecastExportsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
