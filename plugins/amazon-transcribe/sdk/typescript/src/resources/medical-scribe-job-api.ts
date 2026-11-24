import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonTranscribeServiceMedicalScribeJobApiSchema,
  type XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi,
} from "../models/xamz-target-amazon-transcribe-service-medical-scribe-job-api.js";
import {
  xAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiSchema,
  type XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi,
} from "../models/xamz-target1-amazon-transcribe-service-medical-scribe-job-api.js";
import {
  xAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiSchema,
  type XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi,
} from "../models/xamz-target2-amazon-transcribe-service-medical-scribe-job-api.js";
import {
  xAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiSchema,
  type XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi,
} from "../models/xamz-target3-amazon-transcribe-service-medical-scribe-job-api.js";
import type { Servers } from "../servers.js";

export class MedicalScribeJobApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Medical Scribe Job
   *
   * @remarks
   * Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to
   * delete using MedicalScribeJobName. Job names are case sensitive.
   *
   * @returns Success
   *
   * @throws {@link MedicalScribeJobApi.DeleteMedicalScribeJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteMedicalScribeJob(
    request: MedicalScribeJobApi.DeleteMedicalScribeJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalScribeJobApi.DeleteMedicalScribeJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteMedicalScribeJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonTranscribeServiceMedicalScribeJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalScribeJobApi.DeleteMedicalScribeJobError,
      },
      options,
    );
  }

  /**
   * Get Medical Scribe Job
   *
   * @remarks
   * Provides information about the specified Medical Scribe job. To view the status of the
   * specified medical transcription job, check the MedicalScribeJobStatus field. If the status is
   * COMPLETED, the job is finished. You can find the results at the location specified in
   * MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your
   * Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalScribeJobApi.GetMedicalScribeJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMedicalScribeJob(
    request: MedicalScribeJobApi.GetMedicalScribeJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalScribeJobApi.GetMedicalScribeJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#GetMedicalScribeJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalScribeJobApi.GetMedicalScribeJobError,
      },
      options,
    );
  }

  /**
   * List Medical Scribe Jobs
   *
   * @remarks
   * Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are
   * specified, all Medical Scribe jobs are returned. To get detailed information about a specific
   * Medical Scribe job, use the operation.
   *
   * @returns Success
   *
   * @throws {@link MedicalScribeJobApi.ListMedicalScribeJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listMedicalScribeJobs(
    request: MedicalScribeJobApi.ListMedicalScribeJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalScribeJobApi.ListMedicalScribeJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListMedicalScribeJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalScribeJobApi.ListMedicalScribeJobsError,
      },
      options,
    );
  }

  /**
   * Start Medical Scribe Job
   *
   * @remarks
   * Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services
   * HealthScribe automatically provides rich conversation transcripts, identifies speaker roles,
   * classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To
   * learn more about these features, refer to Amazon Web Services HealthScribe. To make a
   * StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket;
   * you can then specify the Amazon S3 location of the file using the Media parameter. You must
   * include the following parameters in your StartMedicalTranscriptionJob request:
   * DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission
   * on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket
   * specified in OutputBucketName, and full permissions on the KMS key specified in
   * OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to
   * assume it. Media (MediaFileUri): The Amazon S3 location of your media file.
   * MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within
   * your Amazon Web Services account. OutputBu
   *
   * @returns Success
   *
   * @throws {@link MedicalScribeJobApi.StartMedicalScribeJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonTranscribeError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startMedicalScribeJob(
    request: MedicalScribeJobApi.StartMedicalScribeJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, MedicalScribeJobApi.StartMedicalScribeJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartMedicalScribeJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MedicalScribeJobApi.StartMedicalScribeJobError,
      },
      options,
    );
  }
}

export namespace MedicalScribeJobApi {
  export type DeleteMedicalScribeJobRequestParams = {
    xAmzTarget: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi;
  };

  export class DeleteMedicalScribeJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteMedicalScribeJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetMedicalScribeJobRequestParams = {
    xAmzTarget: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi;
  };

  export class GetMedicalScribeJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMedicalScribeJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListMedicalScribeJobsRequestParams = {
    xAmzTarget: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi;
  };

  export class ListMedicalScribeJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMedicalScribeJobsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartMedicalScribeJobRequestParams = {
    xAmzTarget: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi;
  };

  export class StartMedicalScribeJobError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error409", undefined>
      | Declared<"error500", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartMedicalScribeJobError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
