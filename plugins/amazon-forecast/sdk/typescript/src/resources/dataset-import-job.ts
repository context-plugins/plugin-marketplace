import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonForecastServiceDatasetImportJobApiSchema,
  type XAmzTargetAmazonForecastServiceDatasetImportJobApi,
} from "../models/xamz-target-amazon-forecast-service-dataset-import-job-api.js";
import {
  xAmzTarget1AmazonForecastServiceDatasetImportJobApiSchema,
  type XAmzTarget1AmazonForecastServiceDatasetImportJobApi,
} from "../models/xamz-target1-amazon-forecast-service-dataset-import-job-api.js";
import {
  xAmzTarget2AmazonForecastServiceDatasetImportJobApiSchema,
  type XAmzTarget2AmazonForecastServiceDatasetImportJobApi,
} from "../models/xamz-target2-amazon-forecast-service-dataset-import-job-api.js";
import {
  xAmzTarget3AmazonForecastServiceDatasetImportJobApiSchema,
  type XAmzTarget3AmazonForecastServiceDatasetImportJobApi,
} from "../models/xamz-target3-amazon-forecast-service-dataset-import-job-api.js";
import type { Servers } from "../servers.js";

export class DatasetImportJob {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Dataset Import Job
   *
   * @remarks
   * Imports your training data to an Amazon Forecast dataset. You provide the location of your
   * training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource
   * Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource
   * object that includes an Identity and Access Management (IAM) role that Amazon Forecast can
   * assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an
   * internal Amazon Web Services system. For more information, see Set up permissions. The training
   * data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the
   * path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two
   * cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset
   * imports are not aggregated, your most recent dataset import is the one that is used when
   * training a predictor or generating a forecast. Make sure that your most recent dataset import
   * contains all of the data you want to model off of, and not just the new data collected since
   * the previous import. To get a list of all your dataset import jobs, filtered by specified
   *
   * @returns Success
   *
   * @throws {@link DatasetImportJob.CreateDatasetImportJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDatasetImportJob(
    request: DatasetImportJob.CreateDatasetImportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetImportJob.CreateDatasetImportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDatasetImportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonForecastServiceDatasetImportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetImportJob.CreateDatasetImportJobError,
      },
      options,
    );
  }

  /**
   * Delete Dataset Import Job
   *
   * @remarks
   * Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete
   * only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use
   * the DescribeDatasetImportJob operation.
   *
   * @returns Success
   *
   * @throws {@link DatasetImportJob.DeleteDatasetImportJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDatasetImportJob(
    request: DatasetImportJob.DeleteDatasetImportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetImportJob.DeleteDatasetImportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDatasetImportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonForecastServiceDatasetImportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetImportJob.DeleteDatasetImportJobError,
      },
      options,
    );
  }

  /**
   * Describe Dataset Import Job
   *
   * @remarks
   * Describes a dataset import job created using the CreateDatasetImportJob operation. In addition
   * to listing the parameters provided in the CreateDatasetImportJob request, this operation
   * includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics
   * Status Message - If an error occurred, information about the error.
   *
   * @returns Success
   *
   * @throws {@link DatasetImportJob.DescribeDatasetImportJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeDatasetImportJob(
    request: DatasetImportJob.DescribeDatasetImportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetImportJob.DescribeDatasetImportJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDatasetImportJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonForecastServiceDatasetImportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetImportJob.DescribeDatasetImportJobError,
      },
      options,
    );
  }

  /**
   * List Dataset Import Jobs
   *
   * @remarks
   * Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For
   * each import job, this operation returns a summary of its properties, including its Amazon
   * Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the
   * DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter
   * objects.
   *
   * @returns Success
   *
   * @throws {@link DatasetImportJob.ListDatasetImportJobsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDatasetImportJobs(
    request: DatasetImportJob.ListDatasetImportJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DatasetImportJob.ListDatasetImportJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasetImportJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonForecastServiceDatasetImportJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DatasetImportJob.ListDatasetImportJobsError,
      },
      options,
    );
  }
}

export namespace DatasetImportJob {
  export type CreateDatasetImportJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceDatasetImportJobApi;
  };

  export class CreateDatasetImportJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetImportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDatasetImportJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonForecastServiceDatasetImportJobApi;
  };

  export class DeleteDatasetImportJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatasetImportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDatasetImportJobRequestParams = {
    xAmzTarget: XAmzTarget2AmazonForecastServiceDatasetImportJobApi;
  };

  export class DescribeDatasetImportJobError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDatasetImportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetImportJobsRequestParams = {
    xAmzTarget: XAmzTarget3AmazonForecastServiceDatasetImportJobApi;
  };

  export class ListDatasetImportJobsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetImportJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
