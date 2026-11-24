import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsStorageGatewayCacheReportApiSchema,
  type XAmzTargetAwsStorageGatewayCacheReportApi,
} from "../models/xamz-target-aws-storage-gateway-cache-report-api.js";
import {
  xAmzTarget1AwsStorageGatewayCacheReportApiSchema,
  type XAmzTarget1AwsStorageGatewayCacheReportApi,
} from "../models/xamz-target1-aws-storage-gateway-cache-report-api.js";
import {
  xAmzTarget2AwsStorageGatewayCacheReportApiSchema,
  type XAmzTarget2AwsStorageGatewayCacheReportApi,
} from "../models/xamz-target2-aws-storage-gateway-cache-report-api.js";
import {
  xAmzTarget3AwsStorageGatewayCacheReportApiSchema,
  type XAmzTarget3AwsStorageGatewayCacheReportApi,
} from "../models/xamz-target3-aws-storage-gateway-cache-report-api.js";
import {
  xAmzTarget4AwsStorageGatewayCacheReportApiSchema,
  type XAmzTarget4AwsStorageGatewayCacheReportApi,
} from "../models/xamz-target4-aws-storage-gateway-cache-report-api.js";
import type { Servers } from "../servers.js";

export class CacheReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Cache Report
   *
   * @remarks
   * Cancels generation of a specified cache report. You can use this operation to manually cancel
   * an IN-PROGRESS report for any reason. This action changes the report status from IN-PROGRESS to
   * CANCELLED. You can only cancel in-progress reports. If the the report you attempt to cancel is
   * in FAILED, ERROR, or COMPLETED state, the cancel operation returns an error.
   *
   * @returns Success
   *
   * @throws {@link CacheReport.CancelCacheReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cancelCacheReport(
    request: CacheReport.CancelCacheReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CacheReport.CancelCacheReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CancelCacheReport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsStorageGatewayCacheReportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CacheReport.CancelCacheReportError,
      },
      options,
    );
  }

  /**
   * Delete Cache Report
   *
   * @remarks
   * Deletes the specified cache report and any associated tags from the Storage Gateway database.
   * You can only delete completed reports. If the status of the report you attempt to delete still
   * IN-PROGRESS, the delete operation returns an error. You can use CancelCacheReport to cancel an
   * IN-PROGRESS report. DeleteCacheReport does not delete the report object from your Amazon S3
   * bucket.
   *
   * @returns Success
   *
   * @throws {@link CacheReport.DeleteCacheReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCacheReport(
    request: CacheReport.DeleteCacheReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CacheReport.DeleteCacheReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteCacheReport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsStorageGatewayCacheReportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CacheReport.DeleteCacheReportError,
      },
      options,
    );
  }

  /**
   * Describe Cache Report
   *
   * @remarks
   * Returns information about the specified cache report, including completion status and
   * generation progress.
   *
   * @returns Success
   *
   * @throws {@link CacheReport.DescribeCacheReportError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCacheReport(
    request: CacheReport.DescribeCacheReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CacheReport.DescribeCacheReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCacheReport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsStorageGatewayCacheReportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CacheReport.DescribeCacheReportError,
      },
      options,
    );
  }

  /**
   * List Cache Reports
   *
   * @remarks
   * Returns a list of existing cache reports for all file shares associated with your Amazon Web
   * Services account. This list includes all information provided by the DescribeCacheReport
   * action, such as report name, status, completion progress, start time, end time, filters, and
   * tags.
   *
   * @returns Success
   *
   * @throws {@link CacheReport.ListCacheReportsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCacheReports(
    request: CacheReport.ListCacheReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CacheReport.ListCacheReportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCacheReports"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsStorageGatewayCacheReportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CacheReport.ListCacheReportsError,
      },
      options,
    );
  }

  /**
   * Start Cache Report
   *
   * @remarks
   * Starts generating a report of the file metadata currently cached by an S3 File Gateway for a
   * specific file share. You can use this report to identify and resolve issues if you have files
   * failing upload from your gateway to Amazon S3. The report is a CSV file containing a list of
   * files which match the set of filter parameters you specify in the request. The Files Failing
   * Upload flag is reset every 24 hours and during gateway reboot. If this report captures the
   * files after the reset, but before they become flagged again, they will not be reported as Files
   * Failing Upload. The following requirements must be met to successfully generate a cache report:
   * You must have s3:PutObject and s3:AbortMultipartUpload permissions for the Amazon S3 bucket
   * where you want to store the cache report. No other cache reports can currently be in-progress
   * for the specified file share. There must be fewer than 10 existing cache reports for the
   * specified file share. The gateway must be online and connected to Amazon Web Services. The root
   * disk must have at least 20GB of free space when report generation starts. You must specify at
   * least one value for InclusionFilters or ExclusionFilters in the request.
   *
   * @returns Success
   *
   * @throws {@link CacheReport.StartCacheReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsStorageGatewayError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startCacheReport(
    request: CacheReport.StartCacheReportRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CacheReport.StartCacheReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartCacheReport"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsStorageGatewayCacheReportApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CacheReport.StartCacheReportError,
      },
      options,
    );
  }
}

export namespace CacheReport {
  export type CancelCacheReportRequest = {
    xAmzTarget: XAmzTargetAwsStorageGatewayCacheReportApi;
  };

  export class CancelCacheReportError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CancelCacheReportError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DeleteCacheReportRequest = {
    xAmzTarget: XAmzTarget1AwsStorageGatewayCacheReportApi;
  };

  export class DeleteCacheReportError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCacheReportError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCacheReportRequest = {
    xAmzTarget: XAmzTarget2AwsStorageGatewayCacheReportApi;
  };

  export class DescribeCacheReportError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCacheReportError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListCacheReportsRequest = {
    xAmzTarget: XAmzTarget3AwsStorageGatewayCacheReportApi;
  };

  export class ListCacheReportsError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCacheReportsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartCacheReportRequest = {
    xAmzTarget: XAmzTarget4AwsStorageGatewayCacheReportApi;
  };

  export class StartCacheReportError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartCacheReportError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
