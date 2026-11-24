import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  matchBoosterTriggerInputSchema,
  type MatchBoosterTriggerInput,
} from "../models/match-booster-trigger-input.js";
import { modelCreateSchema, type ModelCreate } from "../models/model-create.js";
import { modelUpdateSchema, type ModelUpdate } from "../models/model-update.js";
import { modelSchema, type Model } from "../models/model.js";
import { modelsResponseSchema, type ModelsResponse } from "../models/models-response.js";
import {
  OrderByHightouchDestinationsApi,
  orderByHightouchDestinationsApiSchema,
} from "../models/order-by-hightouch-destinations-api.js";
import { region1Schema, type Region1 } from "../models/region1.js";
import {
  modelsMatchBoosterRunsResponseSchema,
  type ModelsMatchBoosterRunsResponse,
} from "../models/unions/models-match-booster-runs-response.js";
import {
  modelsMatchBoosterTriggerResponseSchema,
  type ModelsMatchBoosterTriggerResponse,
} from "../models/unions/models-match-booster-trigger-response.js";
import { modelsResponse1Schema, type ModelsResponse1 } from "../models/unions/models-response1.js";
import { modelsResponse11Schema, type ModelsResponse11 } from "../models/unions/models-response11.js";
import { modelsSizeResponseSchema, type ModelsSizeResponse } from "../models/unions/models-size-response.js";
import {
  modelsSizeResponse1Schema,
  type ModelsSizeResponse1,
} from "../models/unions/models-size-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Models {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Model
   *
   * @remarks
   * Create a new model
   *
   * @returns Ok
   *
   * @throws {@link Models.CreateModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createModel(
    request: Models.CreateModelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsResponse1, Models.CreateModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/models"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "skipColumnQuery",
            value: request.skipColumnQuery,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelCreateSchema },
      },
      {
        success: { kind: "json", schema: modelsResponse1Schema },
        errorFactory: Models.CreateModelError,
      },
      options,
    );
  }

  /**
   * Delete Model
   *
   * @remarks
   * Delete a model
   *
   * Deletes a model based on its Hightouch ID. Any syncs that use the model are deleted as well.
   * Deleting a parent model also deletes every audience built on it. A model that is still
   * referenced by a journey, priority list, decision engine agent, dynamic content condition, saved
   * chart, or identity resolution graph cannot be deleted until those references are removed.
   *
   * @returns Ok
   *
   * @throws {@link Models.DeleteModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteModel(
    request: Models.DeleteModelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsResponse11, Models.DeleteModelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/models/{modelId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsResponse11Schema },
        errorFactory: Models.DeleteModelError,
      },
      options,
    );
  }

  /**
   * Get an audience size
   *
   * @remarks
   * Get the state of an audience size job.
   *
   * @returns Ok
   *
   * @throws {@link Models.GetAudienceSizeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAudienceSize(
    request: Models.GetAudienceSizeRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsSizeResponse1, Models.GetAudienceSizeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/models/{modelId}/size/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "modelId", value: request.modelId, schema: s.float64() },
          { name: "jobId", value: request.jobId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsSizeResponse1Schema },
        errorFactory: Models.GetAudienceSizeError,
      },
      options,
    );
  }

  /**
   * Get Model
   *
   * @remarks
   * Retrieve models from model ID
   *
   * @returns Ok
   *
   * @throws {@link Models.GetModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getModel(
    request: Models.GetModelRequest,
    options?: RequestOptions,
  ): ApiPromise<Model, Models.GetModelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/models/{modelId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelSchema },
        errorFactory: Models.GetModelError,
      },
      options,
    );
  }

  /**
   * List Match Booster enrichment runs
   *
   * @remarks
   * List Match Booster enrichment runs for a model, most recent first.
   *
   * @returns Ok
   *
   * @throws {@link Models.ListEnrichmentRunsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEnrichmentRuns(
    request: Models.ListEnrichmentRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsMatchBoosterRunsResponse, Models.ListEnrichmentRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/models/{modelId}/match-booster/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => region1Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsMatchBoosterRunsResponseSchema },
        errorFactory: Models.ListEnrichmentRunsError,
      },
      options,
    );
  }

  /**
   * List Models
   *
   * @remarks
   * List all the models in the current workspace including parent and related models
   *
   * @returns Ok
   *
   * @throws {@link Models.ListModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listModel(
    request: Models.ListModelRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ModelsResponse, Models.ListModelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/models"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "slug", value: request.slug, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchDestinationsApiSchema, OrderByHightouchDestinationsApi.Id),
          },
          { name: "tags", value: request.tags, schema: s.optional(s.array(s.string())) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsResponseSchema },
        errorFactory: Models.ListModelError,
      },
      options,
    );
  }

  /**
   * Start an audience size job
   *
   * @remarks
   * Start a background job to compute audience size.
   *
   * @returns Ok
   *
   * @throws {@link Models.StartAudienceSizeJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startAudienceSizeJob(
    request: Models.StartAudienceSizeJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsSizeResponse, Models.StartAudienceSizeJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/models/{modelId}/size"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelsSizeResponseSchema },
        errorFactory: Models.StartAudienceSizeJobError,
      },
      options,
    );
  }

  /**
   * Trigger Match Booster enrichment
   *
   * @remarks
   * Trigger a Match Booster enrichment run for a model. The model must have Match Booster enabled.
   *
   * @returns Ok
   *
   * @throws {@link Models.TriggerEnrichmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerEnrichment(
    request: Models.TriggerEnrichmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsMatchBoosterTriggerResponse, Models.TriggerEnrichmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/models/{modelId}/match-booster/trigger"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => matchBoosterTriggerInputSchema)),
        },
      },
      {
        success: { kind: "json", schema: modelsMatchBoosterTriggerResponseSchema },
        errorFactory: Models.TriggerEnrichmentError,
      },
      options,
    );
  }

  /**
   * Update Model
   *
   * @remarks
   * Update an existing model
   *
   * Patch a model based on its Hightouch ID
   *
   * @returns Ok
   *
   * @throws {@link Models.UpdateModelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateModel(
    request: Models.UpdateModelRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelsResponse1, Models.UpdateModelError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/models/{modelId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "modelId", value: request.modelId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelUpdateSchema },
      },
      {
        success: { kind: "json", schema: modelsResponse1Schema },
        errorFactory: Models.UpdateModelError,
      },
      options,
    );
  }
}

export namespace Models {
  export type CreateModelRequest = {
    /** @default false */
    skipColumnQuery?: boolean;
    body: ModelCreate;
  };

  export class CreateModelError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateModelError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type DeleteModelRequest = {
    /** The model's ID */
    modelId: number;
  };

  export class DeleteModelError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteModelError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetAudienceSizeRequest = {
    /** The id of the audience */
    modelId: number;
    /** The id returned when the size job was started */
    jobId: string;
  };

  export class GetAudienceSizeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAudienceSizeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetModelRequest = {
    /** The id of the model */
    modelId: number;
  };

  export class GetModelError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetModelError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListEnrichmentRunsRequest = {
    /** The id of the model */
    modelId: number;
    /** Filter runs to a Match Booster region */
    region?: Region1;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
  };

  export class ListEnrichmentRunsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEnrichmentRunsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type ListModelRequest = {
    /** filter based on name */
    name?: string;
    /** filter based on slug */
    slug?: string;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderByHightouchDestinationsApi.Id */
    orderBy?: OrderByHightouchDestinationsApi;
    /**
     * filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter
     * for multiple tags.
     */
    tags?: string[];
  };

  export class ListModelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListModelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type StartAudienceSizeJobRequest = {
    /** The id of the audience */
    modelId: number;
  };

  export class StartAudienceSizeJobError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartAudienceSizeJobError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type TriggerEnrichmentRequest = {
    /** The id of the model to enrich */
    modelId: number;
    body?: MatchBoosterTriggerInput;
  };

  export class TriggerEnrichmentError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerEnrichmentError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type UpdateModelRequest = {
    /** The model's ID */
    modelId: number;
    body: ModelUpdate;
  };

  export class UpdateModelError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateModelError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
