import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceTranscriptionJobsApiSchema,
  type XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi,
} from "../models/xamz-target-amazon-transcribe-service-transcription-jobs-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi,
} from "../models/xamz-target1-amazon-transcribe-service-transcription-jobs-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi,
} from "../models/xamz-target2-amazon-transcribe-service-transcription-jobs-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi,
} from "../models/xamz-target3-amazon-transcribe-service-transcription-jobs-api.js";
import type { Servers } from "../servers.js";

export class TranscriptionJobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Transcription Job
   *
   * @remarks
   * Deletes a transcription job. To use this operation, specify the name of the job you want to
   * delete using TranscriptionJobName. Job names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link TranscriptionJobs.DeleteTranscriptionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteTranscriptionJob(
    request: TranscriptionJobs.DeleteTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TranscriptionJobs.DeleteTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceTranscriptionJobsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TranscriptionJobs.DeleteTranscriptionJobError,
      },
      options,
    );
  }

  /**
   * Get Transcription Job
   *
   * @remarks
   * Provides information about the specified transcription job. To view the status of the specified
   * transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job
   * is finished. You can find the results at the location specified in TranscriptFileUri. If the
   * status is FAILED, FailureReason provides details on why your transcription job failed. If you
   * enabled content redaction, the redacted transcript can be found at the location specified in
   * RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.
   *
   * @returns Success
   *
   * @throws {@link TranscriptionJobs.GetTranscriptionJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTranscriptionJob(
    request: TranscriptionJobs.GetTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TranscriptionJobs.GetTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TranscriptionJobs.GetTranscriptionJobError,
      },
      options,
    );
  }

  /**
   * List Transcription Jobs
   *
   * @remarks
   * Provides a list of transcription jobs that match the specified criteria. If no criteria are
   * specified, all transcription jobs are returned. To get detailed information about a specific
   * transcription job, use the operation.
   *
   * @returns Success
   *
   * @throws {@link TranscriptionJobs.ListTranscriptionJobsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTranscriptionJobs(
    request: TranscriptionJobs.ListTranscriptionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TranscriptionJobs.ListTranscriptionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTranscriptionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TranscriptionJobs.ListTranscriptionJobsError,
      },
      options,
    );
  }

  /**
   * Start Transcription Job
   *
   * @remarks
   * Transcribes the audio from a media file and applies any additional Request Parameters you
   * choose to include in your request. To make a StartTranscriptionJob request, you must first
   * upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of
   * the file using the Media parameter. You must include the following parameters in your
   * StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your
   * request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to
   * Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your
   * transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri):
   * The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or
   * IdentifyMultipleLanguages: If you know the language of your media file, specify it using the
   * LanguageCode parameter; you can find all valid language codes in the Supported languages table.
   * If you do not know the languages spoken in your media, use either IdentifyLanguage or
   * IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.
   *
   * @returns Success
   *
   * @throws {@link TranscriptionJobs.StartTranscriptionJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startTranscriptionJob(
    request: TranscriptionJobs.StartTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, TranscriptionJobs.StartTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TranscriptionJobs.StartTranscriptionJobError,
      },
      options,
    );
  }
}

export namespace TranscriptionJobs {
  export type DeleteTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi;
  };

  export class DeleteTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi;
  };

  export class GetTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListTranscriptionJobsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi;
  };

  export class ListTranscriptionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTranscriptionJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi;
  };

  export class StartTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
