import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiSchema,
  type XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi,
} from "../models/xamz-target-amazon-transcribe-service-call-analytics-job-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiSchema,
  type XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi,
} from "../models/xamz-target1-amazon-transcribe-service-call-analytics-job-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiSchema,
  type XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi,
} from "../models/xamz-target2-amazon-transcribe-service-call-analytics-job-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiSchema,
  type XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi,
} from "../models/xamz-target3-amazon-transcribe-service-call-analytics-job-api.js";
import type { Servers } from "../servers.js";

export class CallAnalyticsJobApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Call Analytics Job
   *
   * @remarks
   * Deletes a Call Analytics job. To use this operation, specify the name of the job you want to
   * delete using CallAnalyticsJobName. Job names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsJobApi.DeleteCallAnalyticsJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCallAnalyticsJob(
    request: CallAnalyticsJobApi.DeleteCallAnalyticsJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsJobApi.DeleteCallAnalyticsJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteCallAnalyticsJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsJobApi.DeleteCallAnalyticsJobError,
      },
      options,
    );
  }

  /**
   * Get Call Analytics Job
   *
   * @remarks
   * Provides information about the specified Call Analytics job. To view the job's status, refer to
   * CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your
   * completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED,
   * FailureReason provides details on why your transcription job failed. If you enabled personally
   * identifiable information (PII) redaction, the redacted transcript appears at the location
   * specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file,
   * you can find your redacted media file at the location specified in RedactedMediaFileUri. To get
   * a list of your Call Analytics jobs, use the operation.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsJobApi.GetCallAnalyticsJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCallAnalyticsJob(
    request: CallAnalyticsJobApi.GetCallAnalyticsJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsJobApi.GetCallAnalyticsJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetCallAnalyticsJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsJobApi.GetCallAnalyticsJobError,
      },
      options,
    );
  }

  /**
   * List Call Analytics Jobs
   *
   * @remarks
   * Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are
   * specified, all Call Analytics jobs are returned. To get detailed information about a specific
   * Call Analytics job, use the operation.
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsJobApi.ListCallAnalyticsJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCallAnalyticsJobs(
    request: CallAnalyticsJobApi.ListCallAnalyticsJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsJobApi.ListCallAnalyticsJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListCallAnalyticsJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsJobApi.ListCallAnalyticsJobsError,
      },
      options,
    );
  }

  /**
   * Start Call Analytics Job
   *
   * @remarks
   * Transcribes the audio from a customer service call and applies any additional Request
   * Parameters you choose to include in your request. In addition to many standard transcription
   * features, Call Analytics provides you with call characteristics, call summarization, speaker
   * sentiment, and optional redaction of your text transcript and your audio file. You can also
   * apply custom categories to flag specified conditions. To learn more about these features and
   * insights, refer to Analyzing call center audio with Call Analytics. If you want to apply
   * categories to your Call Analytics job, you must create them before submitting your job request.
   * Categories cannot be retroactively applied to a job. To create a new category, use the
   * operation. To learn more about Call Analytics categories, see Creating categories for post-call
   * transcriptions and Creating categories for real-time transcriptions. To make a
   * StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket;
   * you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing
   * is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you
   * exceed your
   *
   * @returns Success
   *
   * @throws {@link CallAnalyticsJobApi.StartCallAnalyticsJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startCallAnalyticsJob(
    request: CallAnalyticsJobApi.StartCallAnalyticsJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, CallAnalyticsJobApi.StartCallAnalyticsJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartCallAnalyticsJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CallAnalyticsJobApi.StartCallAnalyticsJobError,
      },
      options,
    );
  }
}

export namespace CallAnalyticsJobApi {
  export type DeleteCallAnalyticsJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi;
  };

  export class DeleteCallAnalyticsJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCallAnalyticsJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetCallAnalyticsJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi;
  };

  export class GetCallAnalyticsJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCallAnalyticsJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCallAnalyticsJobsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi;
  };

  export class ListCallAnalyticsJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCallAnalyticsJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartCallAnalyticsJobRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi;
  };

  export class StartCallAnalyticsJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartCallAnalyticsJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
