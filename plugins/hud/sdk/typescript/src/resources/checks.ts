import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkDefinitionResponseSchema,
  type CheckDefinitionResponse,
} from "../models/check-definition-response.js";
import { checkRunRequestSchema, type CheckRunRequest } from "../models/check-run-request.js";
import { checkRunResponseSchema, type CheckRunResponse } from "../models/check-run-response.js";
import { checkSubjectTypeSchema, type CheckSubjectType } from "../models/check-subject-type.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  qcPipelineCreateRequestInternalSchema,
  type QcPipelineCreateRequest,
} from "../models/qc-pipeline-create-request.js";
import {
  qcPipelineRegistrationResponseSchema,
  type QcPipelineRegistrationResponse,
} from "../models/qc-pipeline-registration-response.js";
import { subjectTypeSchema, type SubjectType } from "../models/unions/subject-type.js";
import type { Servers } from "../servers.js";

export class Checks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Team Qc Pipeline
   *
   * @remarks
   * Register a team environment scenario as a private DataVendor QC pipeline.
   *
   * @returns Successful Response
   *
   * @throws {@link Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createTeamQcPipelineV2ChecksPipelinesPost(
    request: Checks.CreateTeamQcPipelineV2ChecksPipelinesPostRequest,
    options?: RequestOptions,
  ): ApiPromise<QcPipelineRegistrationResponse, Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/checks/pipelines"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: qcPipelineCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: qcPipelineRegistrationResponseSchema },
        errorFactory: Checks.CreateTeamQcPipelineV2ChecksPipelinesPostError,
      },
      options,
    );
  }

  /**
   * List Platform Check Runs
   *
   * @remarks
   * List recent check attempts for one authorized resource.
   *
   * @returns Successful Response
   *
   * @throws {@link Checks.ListPlatformCheckRunsV2ChecksRunsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listPlatformCheckRunsV2ChecksRunsGet(
    request: Checks.ListPlatformCheckRunsV2ChecksRunsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckRunResponse[], Checks.ListPlatformCheckRunsV2ChecksRunsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/checks/runs"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "subject_type", value: request.subjectType, schema: checkSubjectTypeSchema },
          { name: "subject_id", value: request.subjectId, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkRunResponseSchema)) },
        errorFactory: Checks.ListPlatformCheckRunsV2ChecksRunsGetError,
      },
      options,
    );
  }

  /**
   * List Platform Checks
   *
   * @remarks
   * List available checks and their supported resource types.
   *
   * @returns Successful Response
   *
   * @throws {@link Checks.ListPlatformChecksV2ChecksGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listPlatformChecksV2ChecksGet(
    request: Checks.ListPlatformChecksV2ChecksGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CheckDefinitionResponse[], Checks.ListPlatformChecksV2ChecksGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/checks"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "subject_type",
            value: request.subjectType,
            schema: s.optional(s.lazy(() => subjectTypeSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkDefinitionResponseSchema)) },
        errorFactory: Checks.ListPlatformChecksV2ChecksGetError,
      },
      options,
    );
  }

  /**
   * List Team Qc Pipelines
   *
   * @remarks
   * List QC pipelines registered by the caller's team.
   *
   * @returns Successful Response
   *
   * @throws {@link Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listTeamQcPipelinesV2ChecksPipelinesGet(
    options?: RequestOptions,
  ): ApiPromise<QcPipelineRegistrationResponse[], Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/checks/pipelines"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => qcPipelineRegistrationResponseSchema)) },
        errorFactory: Checks.ListTeamQcPipelinesV2ChecksPipelinesGetError,
      },
      options,
    );
  }

  /**
   * Run Platform Check
   *
   * @remarks
   * Run one check against an authorized resource snapshot.
   *
   * @returns Successful Response
   *
   * @throws {@link Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  runPlatformCheckV2ChecksCheckKeyRunsPost(
    request: Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckRunResponse, Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/checks/{check_key}/runs"),
        auth: noneAuth,
        pathParams: [{ name: "check_key", value: request.checkKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: checkRunRequestSchema },
      },
      {
        success: { kind: "json", schema: checkRunResponseSchema },
        errorFactory: Checks.RunPlatformCheckV2ChecksCheckKeyRunsPostError,
      },
      options,
    );
  }
}

export namespace Checks {
  export type CreateTeamQcPipelineV2ChecksPipelinesPostRequest = {
    body: QcPipelineCreateRequest;
  };

  export class CreateTeamQcPipelineV2ChecksPipelinesPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateTeamQcPipelineV2ChecksPipelinesPostError> = [
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

  export type ListPlatformCheckRunsV2ChecksRunsGetRequest = {
    subjectType: CheckSubjectType;
    subjectId: string;
    /** @default 50 */
    limit?: number;
  };

  export const listPlatformCheckRunsV2ChecksRunsGetRequestSchema: Schema<ListPlatformCheckRunsV2ChecksRunsGetRequest> =
    s.lazySchema(() =>
      s.object<ListPlatformCheckRunsV2ChecksRunsGetRequest>({
        subjectType: checkSubjectTypeSchema,
        subjectId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      }),
    );

  export class ListPlatformCheckRunsV2ChecksRunsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListPlatformCheckRunsV2ChecksRunsGetError> = [
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

  export type ListPlatformChecksV2ChecksGetRequest = {
    subjectType?: SubjectType;
  };

  export class ListPlatformChecksV2ChecksGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListPlatformChecksV2ChecksGetError> = [
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

  export class ListTeamQcPipelinesV2ChecksPipelinesGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTeamQcPipelinesV2ChecksPipelinesGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RunPlatformCheckV2ChecksCheckKeyRunsPostRequest = {
    checkKey: string;
    body: CheckRunRequest;
  };

  export class RunPlatformCheckV2ChecksCheckKeyRunsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<RunPlatformCheckV2ChecksCheckKeyRunsPostError> = [
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
