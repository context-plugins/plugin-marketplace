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
import type { Servers } from "../servers.js";

export class ExportJobs {
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
   * @throws {@link ExportJobs.CreateForecastExportJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonForecastError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createForecastExportJob(
    request: ExportJobs.CreateForecastExportJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ExportJobs.CreateForecastExportJobError> {
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
        errorFactory: ExportJobs.CreateForecastExportJobError,
      },
      options,
    );
  }
}

export namespace ExportJobs {
  export type CreateForecastExportJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonForecastServiceExportJobsApi;
  };

  export class CreateForecastExportJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateForecastExportJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
