import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkpointResponseSchema, type CheckpointResponse } from "../models/checkpoint-response.js";
import { checkpointTraceRowSchema, type CheckpointTraceRow } from "../models/checkpoint-trace-row.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { modelForkRequestInternalSchema, type ModelForkRequest } from "../models/model-fork-request.js";
import { modelListSort1Schema, type ModelListSort1 } from "../models/model-list-sort1.js";
import { modelResponseInternalSchema, type ModelResponse } from "../models/model-response.js";
import { modelResultsResponseSchema, type ModelResultsResponse } from "../models/model-results-response.js";
import { modelUpdateSchema, type ModelUpdate } from "../models/model-update.js";
import {
  paginatedResponseModelInferenceLogEntrySchema,
  type PaginatedResponseModelInferenceLogEntry,
} from "../models/paginated-response-model-inference-log-entry.js";
import {
  paginatedResponseModelResponseInternalSchema,
  type PaginatedResponseModelResponse,
} from "../models/paginated-response-model-response.js";
import { setHeadRequestSchema, type SetHeadRequest } from "../models/set-head-request.js";
import {
  suggestedTasksetsResponseSchema,
  type SuggestedTasksetsResponse,
} from "../models/suggested-tasksets-response.js";
import { checkpointIdsSchema, type CheckpointIds } from "../models/unions/checkpoint-ids.js";
import { excludeSchema, type Exclude } from "../models/unions/exclude.js";
import { purpose2Schema, type Purpose2 } from "../models/unions/purpose2.js";
import {
  scopeHudPlatformModelsApiSchema,
  type ScopeHudPlatformModelsApi,
} from "../models/unions/scope-hud-platform-models-api.js";
import { searchInternalSchema, searchSchema, type Search } from "../models/unions/search.js";
import { search1Schema, type Search1 } from "../models/unions/search1.js";
import type { Servers } from "../servers.js";

export class Models {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Fork Model
   *
   * @remarks
   * Create an owned trainable model derived from a source trainable model.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ForkModelV2ModelsForkPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  forkModelV2ModelsForkPost(
    request: Models.ForkModelV2ModelsForkPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResponse, Models.ForkModelV2ModelsForkPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/models/fork"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelForkRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: modelResponseInternalSchema },
        errorFactory: Models.ForkModelV2ModelsForkPostError,
      },
      options,
    );
  }

  /**
   * Get Model
   *
   * @remarks
   * Get a catalog model by id.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.GetModelV2ModelsModelIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getModelV2ModelsModelIdGet(
    request: Models.GetModelV2ModelsModelIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResponse, Models.GetModelV2ModelsModelIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelResponseInternalSchema },
        errorFactory: Models.GetModelV2ModelsModelIdGetError,
      },
      options,
    );
  }

  /**
   * List Checkpoint Traces
   *
   * @remarks
   * List recent traces produced by a specific model checkpoint.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(
    request: Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CheckpointTraceRow[],
    Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/checkpoints/{checkpoint_id}/traces"),
        auth: noneAuth,
        pathParams: [
          { name: "model_id", value: request.modelId, schema: s.string() },
          { name: "checkpoint_id", value: request.checkpointId, schema: s.string() },
        ],
        query: [{ name: "limit", value: request.limit, schema: s.defaulted(s.int(), 200) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkpointTraceRowSchema)) },
        errorFactory: Models.ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError,
      },
      options,
    );
  }

  /**
   * List Model Checkpoints
   *
   * @remarks
   * List a trainable model's checkpoint tree.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listModelCheckpointsV2ModelsModelIdCheckpointsGet(
    request: Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckpointResponse[], Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/checkpoints"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkpointResponseSchema)) },
        errorFactory: Models.ListModelCheckpointsV2ModelsModelIdCheckpointsGetError,
      },
      options,
    );
  }

  /**
   * List Model Inference Logs
   *
   * @remarks
   * List the caller team's gateway inference logs for a model, excluding QA analysis calls.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listModelInferenceLogsV2ModelsModelIdLogsGet(
    request: Models.ListModelInferenceLogsV2ModelsModelIdLogsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PaginatedResponseModelInferenceLogEntry,
    Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/logs"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseModelInferenceLogEntrySchema },
        errorFactory: Models.ListModelInferenceLogsV2ModelsModelIdLogsGetError,
      },
      options,
    );
  }

  /**
   * List Models
   *
   * @remarks
   * List catalog models visible to the caller.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ListModelsV2ModelsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listModelsV2ModelsGet(
    request: Models.ListModelsV2ModelsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedResponseModelResponse, Models.ListModelsV2ModelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          {
            name: "scope",
            value: request.scope,
            schema: s.optional(s.lazy(() => scopeHudPlatformModelsApiSchema)),
          },
          { name: "search", value: request.search, schema: s.optional(s.lazy(() => searchInternalSchema)) },
          { name: "trainable", value: request.trainable, schema: s.defaulted(s.boolean(), false) },
          {
            name: "include_deprecated",
            value: request.includeDeprecated,
            schema: s.defaulted(s.boolean(), true),
          },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => modelListSort1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedResponseModelResponseInternalSchema },
        errorFactory: Models.ListModelsV2ModelsGetError,
      },
      options,
    );
  }

  /**
   * Model Results
   *
   * @remarks
   * Get per-taskset evaluation results for a model's checkpoints.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ModelResultsV2ModelsModelIdResultsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  modelResultsV2ModelsModelIdResultsGet(
    request: Models.ModelResultsV2ModelsModelIdResultsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResultsResponse, Models.ModelResultsV2ModelsModelIdResultsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/results"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [
          {
            name: "checkpoint_ids",
            value: request.checkpointIds,
            schema: s.optional(s.lazy(() => checkpointIdsSchema)),
          },
          { name: "purpose", value: request.purpose, schema: s.optional(s.lazy(() => purpose2Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelResultsResponseSchema },
        errorFactory: Models.ModelResultsV2ModelsModelIdResultsGetError,
      },
      options,
    );
  }

  /**
   * Model Suggested Tasksets
   *
   * @remarks
   * Suggest tasksets to evaluate or train a model on.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(
    request: Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    SuggestedTasksetsResponse,
    Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/suggested-tasksets"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [
          { name: "exclude", value: request.exclude, schema: s.optional(s.lazy(() => excludeSchema)) },
          { name: "search", value: request.search, schema: s.optional(s.lazy(() => search1Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "purpose", value: request.purpose, schema: s.optional(s.lazy(() => purpose2Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: suggestedTasksetsResponseSchema },
        errorFactory: Models.ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError,
      },
      options,
    );
  }

  /**
   * Resolve Model
   *
   * @remarks
   * Resolve a model string (slug or id) to its catalog record.
   *
   * General slug→id lookup: any client holding a model string (e.g. a trainable model's gateway
   * slug) can map it to the id and metadata. Declared before ``/{model_id}`` so the literal
   * ``resolve`` path is not parsed as an id; a query param (not a path segment) so slugs with ``/``
   * or ``:`` need no encoding. Team-scoping still hides other teams' private fine-tunes.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.ResolveModelV2ModelsResolveGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  resolveModelV2ModelsResolveGet(
    request: Models.ResolveModelV2ModelsResolveGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResponse, Models.ResolveModelV2ModelsResolveGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/models/resolve"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "model", value: request.model, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelResponseInternalSchema },
        errorFactory: Models.ResolveModelV2ModelsResolveGetError,
      },
      options,
    );
  }

  /**
   * Set Model Head
   *
   * @remarks
   * Point the model's active checkpoint (head) at one of its checkpoint nodes.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.SetModelHeadV2ModelsModelIdHeadPutError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  setModelHeadV2ModelsModelIdHeadPut(
    request: Models.SetModelHeadV2ModelsModelIdHeadPutRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResponse, Models.SetModelHeadV2ModelsModelIdHeadPutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/models/{model_id}/head"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: setHeadRequestSchema },
      },
      {
        success: { kind: "json", schema: modelResponseInternalSchema },
        errorFactory: Models.SetModelHeadV2ModelsModelIdHeadPutError,
      },
      options,
    );
  }

  /**
   * Update Model
   *
   * @remarks
   * Update a model's catalog fields, such as name or visibility.
   *
   * @returns Successful Response
   *
   * @throws {@link Models.UpdateModelV2ModelsModelIdPatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateModelV2ModelsModelIdPatch(
    request: Models.UpdateModelV2ModelsModelIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelResponse, Models.UpdateModelV2ModelsModelIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/models/{model_id}"),
        auth: noneAuth,
        pathParams: [{ name: "model_id", value: request.modelId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelUpdateSchema },
      },
      {
        success: { kind: "json", schema: modelResponseInternalSchema },
        errorFactory: Models.UpdateModelV2ModelsModelIdPatchError,
      },
      options,
    );
  }
}

export namespace Models {
  export type ForkModelV2ModelsForkPostRequest = {
    body: ModelForkRequest;
  };

  export class ForkModelV2ModelsForkPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<ForkModelV2ModelsForkPostError> = [
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

  export type GetModelV2ModelsModelIdGetRequest = {
    modelId: string;
  };

  export class GetModelV2ModelsModelIdGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetModelV2ModelsModelIdGetError> = [
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

  export type ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest = {
    modelId: string;
    checkpointId: string;
    /** @default 200 */
    limit?: number;
  };

  export const listCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequestSchema: Schema<ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest> =
    s.lazySchema(() =>
      s.object<ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest>({
        modelId: s.string(),
        checkpointId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 200),
      }),
    );

  export class ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError> =
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

  export type ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest = {
    modelId: string;
  };

  export class ListModelCheckpointsV2ModelsModelIdCheckpointsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListModelCheckpointsV2ModelsModelIdCheckpointsGetError> = [
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

  export type ListModelInferenceLogsV2ModelsModelIdLogsGetRequest = {
    modelId: string;
    /** @default 50 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const listModelInferenceLogsV2ModelsModelIdLogsGetRequestSchema: Schema<ListModelInferenceLogsV2ModelsModelIdLogsGetRequest> =
    s.lazySchema(() =>
      s.object<ListModelInferenceLogsV2ModelsModelIdLogsGetRequest>({
        modelId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
        offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      }),
    );

  export class ListModelInferenceLogsV2ModelsModelIdLogsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListModelInferenceLogsV2ModelsModelIdLogsGetError> = [
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

  export type ListModelsV2ModelsGetRequest = {
    /** @default 100 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /**
     * `catalog` for global base models, `owned` for the team's trainable forks; both when omitted.
     * Signed-out callers must pass `catalog`.
     */
    scope?: ScopeHudPlatformModelsApi;
    /** Case-insensitive match on display name, model name, or provider name. */
    search?: Search;
    /** Only models that can be fine-tuned. @default false */
    trainable?: boolean;
    /** Include models whose deprecation date has passed. @default true */
    includeDeprecated?: boolean;
    /** Row order. Signed-out callers cannot sort by `usage`. */
    sort?: ModelListSort1;
  };

  export const listModelsV2ModelsGetRequestSchema: Schema<ListModelsV2ModelsGetRequest> = s.lazySchema(() =>
    s.object<ListModelsV2ModelsGetRequest>({
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 100),
      offset: s.defaulted(s.int().check(s.gte(0), s.lte(2147483647)), 0),
      scope: s.optional(s.lazy(() => scopeHudPlatformModelsApiSchema)),
      search: s.optional(s.lazy(() => searchSchema)),
      trainable: s.defaulted(s.boolean(), false),
      includeDeprecated: s.defaulted(s.boolean(), true),
      sort: s.optional(s.lazy(() => modelListSort1Schema)),
    }),
  );

  export class ListModelsV2ModelsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListModelsV2ModelsGetError> = [
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

  export type ModelResultsV2ModelsModelIdResultsGetRequest = {
    modelId: string;
    checkpointIds?: CheckpointIds;
    purpose?: Purpose2;
  };

  export class ModelResultsV2ModelsModelIdResultsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ModelResultsV2ModelsModelIdResultsGetError> = [
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

  export type ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest = {
    modelId: string;
    exclude?: Exclude;
    search?: Search1;
    /** @default 50 */
    limit?: number;
    purpose?: Purpose2;
  };

  export const modelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequestSchema: Schema<ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest> =
    s.lazySchema(() =>
      s.object<ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest>({
        modelId: s.string(),
        exclude: s.optional(s.lazy(() => excludeSchema)),
        search: s.optional(s.lazy(() => search1Schema)),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
        purpose: s.optional(s.lazy(() => purpose2Schema)),
      }),
    );

  export class ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError> = [
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

  export type ResolveModelV2ModelsResolveGetRequest = {
    /** Model slug (or id) to resolve to its catalog record */
    model: string;
  };

  export class ResolveModelV2ModelsResolveGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ResolveModelV2ModelsResolveGetError> = [
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

  export type SetModelHeadV2ModelsModelIdHeadPutRequest = {
    modelId: string;
    body: SetHeadRequest;
  };

  export class SetModelHeadV2ModelsModelIdHeadPutError extends ApiError {
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

    static readonly errors: ErrorDecoders<SetModelHeadV2ModelsModelIdHeadPutError> = [
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

  export type UpdateModelV2ModelsModelIdPatchRequest = {
    modelId: string;
    body: ModelUpdate;
  };

  export class UpdateModelV2ModelsModelIdPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateModelV2ModelsModelIdPatchError> = [
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
