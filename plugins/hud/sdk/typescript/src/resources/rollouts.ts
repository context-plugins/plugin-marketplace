import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cancelJobRequestSchema, type CancelJobRequest } from "../models/cancel-job-request.js";
import { cancelJobResponseSchema, type CancelJobResponse } from "../models/cancel-job-response.js";
import { cancelRequestSchema, type CancelRequest } from "../models/cancel-request.js";
import { cancelResponseSchema, type CancelResponse } from "../models/cancel-response.js";
import {
  cancelUserJobsResponseSchema,
  type CancelUserJobsResponse,
} from "../models/cancel-user-jobs-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { rolloutBatchResponseSchema, type RolloutBatchResponse } from "../models/rollout-batch-response.js";
import { rolloutResponseSchema, type RolloutResponse } from "../models/rollout-response.js";
import {
  rolloutRunListRequestInternalSchema,
  type RolloutRunListRequest,
} from "../models/rollout-run-list-request.js";
import { rolloutRunRequestInternalSchema, type RolloutRunRequest } from "../models/rollout-run-request.js";
import {
  rolloutSubmitRequestInternalSchema,
  type RolloutSubmitRequest,
} from "../models/rollout-submit-request.js";
import type { Servers } from "../servers.js";

export class Rollouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Cancel Job
   *
   * @remarks
   * Cancel all non-terminal traces in a job.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.CancelJobV2RolloutsCancelJobPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  cancelJobV2RolloutsCancelJobPost(
    request: Rollouts.CancelJobV2RolloutsCancelJobPostRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelJobResponse, Rollouts.CancelJobV2RolloutsCancelJobPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/cancel_job"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelJobRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelJobResponseSchema },
        errorFactory: Rollouts.CancelJobV2RolloutsCancelJobPostError,
      },
      options,
    );
  }

  /**
   * Cancel User Jobs
   *
   * @remarks
   * Cancel all of the caller's active jobs, reporting per-job cancellation counts.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  cancelUserJobsV2RolloutsCancelUserJobsPost(
    options?: RequestOptions,
  ): ApiPromise<CancelUserJobsResponse, Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/cancel_user_jobs"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelUserJobsResponseSchema },
        errorFactory: Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError,
      },
      options,
    );
  }

  /**
   * Cancel
   *
   * @remarks
   * Cancel a single rollout trace; noop if it already reached a terminal state.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.CancelV2RolloutsCancelPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  cancelV2RolloutsCancelPost(
    request: Rollouts.CancelV2RolloutsCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelResponse, Rollouts.CancelV2RolloutsCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/cancel"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelResponseSchema },
        errorFactory: Rollouts.CancelV2RolloutsCancelPostError,
      },
      options,
    );
  }

  /**
   * Run List
   *
   * @remarks
   * Launch a batch of hosted rollouts under one job.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.RunListV2RolloutsRunListPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  runListV2RolloutsRunListPost(
    request: Rollouts.RunListV2RolloutsRunListPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RolloutBatchResponse, Rollouts.RunListV2RolloutsRunListPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/run_list"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: rolloutRunListRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: rolloutBatchResponseSchema },
        errorFactory: Rollouts.RunListV2RolloutsRunListPostError,
      },
      options,
    );
  }

  /**
   * Run
   *
   * @remarks
   * Launch a single hosted rollout and return its trace and job identifiers.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.RunV2RolloutsRunPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  runV2RolloutsRunPost(
    request: Rollouts.RunV2RolloutsRunPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RolloutResponse, Rollouts.RunV2RolloutsRunPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/run"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: rolloutRunRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: rolloutResponseSchema },
        errorFactory: Rollouts.RunV2RolloutsRunPostError,
      },
      options,
    );
  }

  /**
   * Submit
   *
   * @remarks
   * v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.
   *
   * The SDK polls GET /v2/trace/{trace_id} to completion.
   *
   * @returns Successful Response
   *
   * @throws {@link Rollouts.SubmitV2RolloutsSubmitPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  submitV2RolloutsSubmitPost(
    request: Rollouts.SubmitV2RolloutsSubmitPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RolloutResponse, Rollouts.SubmitV2RolloutsSubmitPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/rollouts/submit"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: rolloutSubmitRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: rolloutResponseSchema },
        errorFactory: Rollouts.SubmitV2RolloutsSubmitPostError,
      },
      options,
    );
  }
}

export namespace Rollouts {
  export type CancelJobV2RolloutsCancelJobPostRequest = {
    body: CancelJobRequest;
  };

  export class CancelJobV2RolloutsCancelJobPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelJobV2RolloutsCancelJobPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class CancelUserJobsV2RolloutsCancelUserJobsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelUserJobsV2RolloutsCancelUserJobsPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CancelV2RolloutsCancelPostRequest = {
    body: CancelRequest;
  };

  export class CancelV2RolloutsCancelPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelV2RolloutsCancelPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RunListV2RolloutsRunListPostRequest = {
    body: RolloutRunListRequest;
  };

  export class RunListV2RolloutsRunListPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunListV2RolloutsRunListPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RunV2RolloutsRunPostRequest = {
    body: RolloutRunRequest;
  };

  export class RunV2RolloutsRunPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunV2RolloutsRunPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SubmitV2RolloutsSubmitPostRequest = {
    body: RolloutSubmitRequest;
  };

  export class SubmitV2RolloutsSubmitPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitV2RolloutsSubmitPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
