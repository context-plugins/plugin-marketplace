import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "../models/xamz-target-amazon-transcribe-service-medical-transcription-job-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "../models/xamz-target1-amazon-transcribe-service-medical-transcription-job-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "../models/xamz-target2-amazon-transcribe-service-medical-transcription-job-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "../models/xamz-target3-amazon-transcribe-service-medical-transcription-job-api.js";
import type { Servers } from "../servers.js";

export class MedicalTranscriptionJobApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Medical Transcription Job
   *
   * @remarks
   * Deletes a medical transcription job. To use this operation, specify the name of the job you
   * want to delete using MedicalTranscriptionJobName. Job names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMedicalTranscriptionJob(
    request: MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMedicalTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJobError,
      },
      options,
    );
  }

  /**
   * Get Medical Transcription Job
   *
   * @remarks
   * Provides information about the specified medical transcription job. To view the status of the
   * specified medical transcription job, check the TranscriptionJobStatus field. If the status is
   * COMPLETED, the job is finished. You can find the results at the location specified in
   * TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your
   * transcription job failed. To get a list of your medical transcription jobs, use the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMedicalTranscriptionJob(
    request: MedicalTranscriptionJobApi.GetMedicalTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetMedicalTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalTranscriptionJobApi.GetMedicalTranscriptionJobError,
      },
      options,
    );
  }

  /**
   * List Medical Transcription Jobs
   *
   * @remarks
   * Provides a list of medical transcription jobs that match the specified criteria. If no criteria
   * are specified, all medical transcription jobs are returned. To get detailed information about a
   * specific medical transcription job, use the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMedicalTranscriptionJobs(
    request: MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMedicalTranscriptionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalTranscriptionJobApi.ListMedicalTranscriptionJobsError,
      },
      options,
    );
  }

  /**
   * Start Medical Transcription Job
   *
   * @remarks
   * Transcribes the audio from a medical dictation or conversation and applies any additional
   * Request Parameters you choose to include in your request. In addition to many standard
   * transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary
   * and, optionally, content identification, which adds flags to personal health information (PHI).
   * To learn more about these features, refer to How Amazon Transcribe Medical works. To make a
   * StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3
   * bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You
   * must include the following parameters in your StartMedicalTranscriptionJob request: region: The
   * Amazon Web Services Region where you are making your request. For a list of Amazon Web Services
   * Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas.
   * MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique
   * within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your
   * media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3
   *
   * @returns Success
   *
   * @throws {@link MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startMedicalTranscriptionJob(
    request: MedicalTranscriptionJobApi.StartMedicalTranscriptionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartMedicalTranscriptionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalTranscriptionJobApi.StartMedicalTranscriptionJobError,
      },
      options,
    );
  }
}

export namespace MedicalTranscriptionJobApi {
  export type DeleteMedicalTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi;
  };

  export class DeleteMedicalTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMedicalTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetMedicalTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi;
  };

  export class GetMedicalTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMedicalTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMedicalTranscriptionJobsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi;
  };

  export class ListMedicalTranscriptionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMedicalTranscriptionJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartMedicalTranscriptionJobRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi;
  };

  export class StartMedicalTranscriptionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMedicalTranscriptionJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
