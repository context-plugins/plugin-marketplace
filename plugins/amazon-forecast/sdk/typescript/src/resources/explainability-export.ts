import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceExplainabilityExportApiSchema,
  type XAmzTargetAmazonForecastServiceExplainabilityExportApi,
} from "../models/xamz-target-amazon-forecast-service-explainability-export-api.js";
import {
  xAmzTarget1AmazonForecastServiceExplainabilityExportApiSchema,
  type XAmzTarget1AmazonForecastServiceExplainabilityExportApi,
} from "../models/xamz-target1-amazon-forecast-service-explainability-export-api.js";
import {
  xAmzTarget2AmazonForecastServiceExplainabilityExportApiSchema,
  type XAmzTarget2AmazonForecastServiceExplainabilityExportApi,
} from "../models/xamz-target2-amazon-forecast-service-explainability-export-api.js";
import {
  xAmzTarget3AmazonForecastServiceExplainabilityExportApiSchema,
  type XAmzTarget3AmazonForecastServiceExplainabilityExportApi,
} from "../models/xamz-target3-amazon-forecast-service-explainability-export-api.js";
import type { Servers } from "../servers.js";

export class ExplainabilityExport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Explainability Export
   *
   * @remarks
   * Exports an Explainability resource created by the CreateExplainability operation. Exported
   * files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a
   * DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management
   * (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more
   * information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you
   * can access the export in your Amazon S3 bucket. To get the status, use the
   * DescribeExplainabilityExport operation.
   *
   * @returns Success
   *
   * @throws {@link ExplainabilityExport.CreateExplainabilityExportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExplainabilityExport(
    request: ExplainabilityExport.CreateExplainabilityExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExplainabilityExport.CreateExplainabilityExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateExplainabilityExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceExplainabilityExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExplainabilityExport.CreateExplainabilityExportError,
      },
      options,
    );
  }

  /**
   * Delete Explainability Export
   *
   * @remarks
   * Deletes an Explainability export.
   *
   * @returns Success
   *
   * @throws {@link ExplainabilityExport.DeleteExplainabilityExportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExplainabilityExport(
    request: ExplainabilityExport.DeleteExplainabilityExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExplainabilityExport.DeleteExplainabilityExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteExplainabilityExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceExplainabilityExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExplainabilityExport.DeleteExplainabilityExportError,
      },
      options,
    );
  }

  /**
   * Describe Explainability Export
   *
   * @remarks
   * Describes an Explainability export created using the CreateExplainabilityExport operation.
   *
   * @returns Success
   *
   * @throws {@link ExplainabilityExport.DescribeExplainabilityExportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeExplainabilityExport(
    request: ExplainabilityExport.DescribeExplainabilityExportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExplainabilityExport.DescribeExplainabilityExportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeExplainabilityExport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceExplainabilityExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExplainabilityExport.DescribeExplainabilityExportError,
      },
      options,
    );
  }

  /**
   * List Explainability Exports
   *
   * @remarks
   * Returns a list of Explainability exports created using the CreateExplainabilityExport
   * operation. This operation returns a summary for each Explainability export. You can filter the
   * list using an array of Filter objects. To retrieve the complete set of properties for a
   * particular Explainability export, use the ARN with the DescribeExplainability operation.
   *
   * @returns Success
   *
   * @throws {@link ExplainabilityExport.ListExplainabilityExportsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExplainabilityExports(
    request: ExplainabilityExport.ListExplainabilityExportsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExplainabilityExport.ListExplainabilityExportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListExplainabilityExports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceExplainabilityExportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ExplainabilityExport.ListExplainabilityExportsError,
      },
      options,
    );
  }
}

export namespace ExplainabilityExport {
  export type CreateExplainabilityExportRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceExplainabilityExportApi;
  };

  export class CreateExplainabilityExportError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateExplainabilityExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteExplainabilityExportRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceExplainabilityExportApi;
  };

  export class DeleteExplainabilityExportError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteExplainabilityExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeExplainabilityExportRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceExplainabilityExportApi;
  };

  export class DescribeExplainabilityExportError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeExplainabilityExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListExplainabilityExportsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceExplainabilityExportApi;
  };

  export class ListExplainabilityExportsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListExplainabilityExportsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
