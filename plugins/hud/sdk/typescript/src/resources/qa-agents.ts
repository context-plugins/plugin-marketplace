import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  paginatedResponseQaAgentResponseSchema,
  type PaginatedResponseQaAgentResponse,
} from "../models/paginated-response-qa-agent-response.js";
import {
  qaAgentResourceResultDetailInternalSchema,
  type QaAgentResourceResultDetail,
} from "../models/qa-agent-resource-result-detail.js";
import {
  qaAgentResourceRunRequestInternalSchema,
  type QaAgentResourceRunRequest,
} from "../models/qa-agent-resource-run-request.js";
import { qaAgentResponseSchema, type QaAgentResponse } from "../models/qa-agent-response.js";
import {
  qaAgentResultResponseInternalSchema,
  type QaAgentResultResponse,
} from "../models/qa-agent-result-response.js";
import { qaAgentSubjectTypeSchema, type QaAgentSubjectType } from "../models/qa-agent-subject-type.js";
import { traceEventsResponseSchema, type TraceEventsResponse } from "../models/trace-events-response.js";
import { resultIdsSchema, type ResultIds } from "../models/unions/result-ids.js";
import { subjectIdsSchema, type SubjectIds } from "../models/unions/subject-ids.js";
import { subjectTypeSchema, type SubjectType } from "../models/unions/subject-type.js";
import type { Servers } from "../servers.js";

export class QaAgents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get Qa Agent Sanitized Rollout
   *
   * @remarks
   * Return an output-only QA rollout without evaluator prompts or private inputs.
   *
   * @returns Successful Response
   *
   * @throws {@link QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   *
   * @deprecated
   */
  getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGet(
    request: QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    TraceEventsResponse,
    QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa-agents/results/{result_id}/rollout"),
        auth: noneAuth,
        pathParams: [{ name: "result_id", value: request.resultId, schema: s.string() }],
        query: [
          { name: "since_seq", value: request.sinceSeq, schema: s.defaulted(s.int(), -1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: traceEventsResponseSchema },
        errorFactory: QaAgents.GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError,
      },
      options,
    );
  }

  /**
   * Get Qa Agent
   *
   * @remarks
   * Get a QA agent by id.
   *
   * @returns Successful Response
   *
   * @throws {@link QaAgents.GetQaAgentV2QaAgentsAgentIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   *
   * @deprecated
   */
  getQaAgentV2QaAgentsAgentIdGet(
    request: QaAgents.GetQaAgentV2QaAgentsAgentIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<QaAgentResponse, QaAgents.GetQaAgentV2QaAgentsAgentIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa-agents/{agent_id}"),
        auth: noneAuth,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: qaAgentResponseSchema },
        errorFactory: QaAgents.GetQaAgentV2QaAgentsAgentIdGetError,
      },
      options,
    );
  }

  /**
   * List Qa Agents
   *
   * @remarks
   * List the caller team's QA agents.
   *
   * @returns Successful Response
   *
   * @throws {@link QaAgents.ListQaAgentsV2QaAgentsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   *
   * @deprecated
   */
  listQaAgentsV2QaAgentsGet(
    request: QaAgents.ListQaAgentsV2QaAgentsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseQaAgentResponse, QaAgents.ListQaAgentsV2QaAgentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa-agents"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "subject_type",
            value: request.subjectType,
            schema: s.optional(s.lazy(() => qaAgentSubjectTypeSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseQaAgentResponseSchema },
        errorFactory: QaAgents.ListQaAgentsV2QaAgentsGetError,
      },
      options,
    );
  }

  /**
   * List Resource Qa Agent Results
   *
   * @remarks
   * List resource QA results by subject or by exact result IDs.
   *
   * @returns Successful Response
   *
   * @throws {@link QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   *
   * @deprecated
   */
  listResourceQaAgentResultsV2QaAgentsResultsResourcesGet(
    request: QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    QaAgentResourceResultDetail[],
    QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/qa-agents/results/resources"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "subject_type",
            value: request.subjectType,
            schema: s.optional(s.lazy(() => subjectTypeSchema)),
          },
          {
            name: "subject_ids",
            value: request.subjectIds,
            schema: s.optional(s.lazy(() => subjectIdsSchema)),
          },
          { name: "result_ids", value: request.resultIds, schema: s.optional(s.lazy(() => resultIdsSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => qaAgentResourceResultDetailInternalSchema)) },
        errorFactory: QaAgents.ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError,
      },
      options,
    );
  }

  /**
   * Run Resource Qa Agent
   *
   * @remarks
   * Select or launch one QA result for each canonical resource subject.
   *
   * @returns Successful Response
   *
   * @throws {@link QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   *
   * @deprecated
   */
  runResourceQaAgentV2QaAgentsAgentIdRunResourcesPost(
    request: QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest,
    options?: RequestOptions,
  ): ApiPromise<QaAgentResultResponse[], QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/qa-agents/{agent_id}/run-resources"),
        auth: noneAuth,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: qaAgentResourceRunRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => qaAgentResultResponseInternalSchema)) },
        errorFactory: QaAgents.RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError,
      },
      options,
    );
  }
}

export namespace QaAgents {
  export type GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest = {
    resultId: string;
    /** @default -1 */
    sinceSeq?: number;
    /** @default 100 */
    limit?: number;
  };

  export const getQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequestSchema: Schema<GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest> =
    s.lazySchema(() =>
      s.object<GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetRequest>({
        resultId: s.string(),
        sinceSeq: s.defaulted(s.int().check(s.gte(-1)), -1),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 100),
      }),
    );

  export class GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetError> =
      [
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

  export type GetQaAgentV2QaAgentsAgentIdGetRequest = {
    agentId: string;
  };

  export class GetQaAgentV2QaAgentsAgentIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetQaAgentV2QaAgentsAgentIdGetError> = [
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

  export type ListQaAgentsV2QaAgentsGetRequest = {
    subjectType?: QaAgentSubjectType;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listQaAgentsV2QaAgentsGetRequestSchema: Schema<ListQaAgentsV2QaAgentsGetRequest> =
    s.lazySchema(() =>
      s.object<ListQaAgentsV2QaAgentsGetRequest>({
        subjectType: s.optional(s.lazy(() => qaAgentSubjectTypeSchema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListQaAgentsV2QaAgentsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListQaAgentsV2QaAgentsGetError> = [
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

  export type ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetRequest = {
    subjectType?: SubjectType;
    subjectIds?: SubjectIds;
    resultIds?: ResultIds;
  };

  export class ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetError> = [
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

  export type RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostRequest = {
    agentId: string;
    body: QaAgentResourceRunRequest;
  };

  export class RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostError> = [
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
