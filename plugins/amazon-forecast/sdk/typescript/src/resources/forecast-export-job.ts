import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceExportJobsApiSchema,
  type XAmzTargetAmazonForecastServiceExportJobsApi,
} from "../models/xamz-target-amazon-forecast-service-export-jobs-api.js";
import {
  xAmzTarget1AmazonForecastServiceForecastExportJobApiSchema,
  type XAmzTarget1AmazonForecastServiceForecastExportJobApi,
} from "../models/xamz-target1-amazon-forecast-service-forecast-export-job-api.js";
import {
  xAmzTarget2AmazonForecastServiceForecastExportJobApiSchema,
  type XAmzTarget2AmazonForecastServiceForecastExportJobApi,
} from "../models/xamz-target2-amazon-forecast-service-forecast-export-job-api.js";
import {
  xAmzTarget3AmazonForecastServiceForecastExportJobApiSchema,
  type XAmzTarget3AmazonForecastServiceForecastExportJobApi,
} from "../models/xamz-target3-amazon-forecast-service-forecast-export-job-api.js";
import type { Servers } from "../servers.js";

export class ForecastExportJob {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Forecast Export Job
   *
   * @remarks
   * Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage
   * Service (Amazon S3) bucket. The forecast file name will match the following conventions: __
   * where the component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a
   * DataDestination object that includes an Identity and Access Management (IAM) role that Amazon
   * Forecast can assume to access the Amazon S3 bucket. For more information, see
   * aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all
   * your forecast export jobs, use the ListForecastExportJobs operation. The Status of the forecast
   * export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get
   * the status, use the DescribeForecastExportJob operation.
   *
   * @returns Success
   *
   * @throws {@link ForecastExportJob.CreateForecastExportJob2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createForecastExportJob2(
    request: ForecastExportJob.CreateForecastExportJob2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ForecastExportJob.CreateForecastExportJob2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateForecastExportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceExportJobsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForecastExportJob.CreateForecastExportJob2Error,
      },
      options,
    );
  }

  /**
   * Delete Forecast Export Job
   *
   * @remarks
   * Deletes a forecast export job created using the CreateForecastExportJob operation. You can
   * delete only export jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use
   * the DescribeForecastExportJob operation.
   *
   * @returns Success
   *
   * @throws {@link ForecastExportJob.DeleteForecastExportJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteForecastExportJob(
    request: ForecastExportJob.DeleteForecastExportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ForecastExportJob.DeleteForecastExportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteForecastExportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceForecastExportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForecastExportJob.DeleteForecastExportJobError,
      },
      options,
    );
  }

  /**
   * Describe Forecast Export Job
   *
   * @remarks
   * Describes a forecast export job created using the CreateForecastExportJob operation. In
   * addition to listing the properties provided by the user in the CreateForecastExportJob request,
   * this operation lists the following properties: CreationTime LastModificationTime Status Message
   * - If an error occurred, information about the error.
   *
   * @returns Success
   *
   * @throws {@link ForecastExportJob.DescribeForecastExportJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeForecastExportJob(
    request: ForecastExportJob.DescribeForecastExportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ForecastExportJob.DescribeForecastExportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeForecastExportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceForecastExportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForecastExportJob.DescribeForecastExportJobError,
      },
      options,
    );
  }

  /**
   * List Forecast Export Jobs
   *
   * @remarks
   * Returns a list of forecast export jobs created using the CreateForecastExportJob operation. For
   * each forecast export job, this operation returns a summary of its properties, including its
   * Amazon Resource Name (ARN). To retrieve the complete set of properties, use the ARN with the
   * DescribeForecastExportJob operation. You can filter the list using an array of Filter objects.
   *
   * @returns Success
   *
   * @throws {@link ForecastExportJob.ListForecastExportJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listForecastExportJobs(
    request: ForecastExportJob.ListForecastExportJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ForecastExportJob.ListForecastExportJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListForecastExportJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceForecastExportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForecastExportJob.ListForecastExportJobsError,
      },
      options,
    );
  }
}

export namespace ForecastExportJob {
  export type CreateForecastExportJob2Request = {
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi;
  };

  export class CreateForecastExportJob2Error extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateForecastExportJob2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteForecastExportJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceForecastExportJobApi;
  };

  export class DeleteForecastExportJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteForecastExportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeForecastExportJobRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceForecastExportJobApi;
  };

  export class DescribeForecastExportJobError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeForecastExportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListForecastExportJobsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceForecastExportJobApi;
  };

  export class ListForecastExportJobsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListForecastExportJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
