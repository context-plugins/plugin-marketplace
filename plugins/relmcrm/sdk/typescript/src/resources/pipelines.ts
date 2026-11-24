import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deletedSchema, type Deleted } from "../models/deleted.js";
import { pipelineInputSchema, type PipelineInput } from "../models/pipeline-input.js";
import { pipelineSchema, type Pipeline } from "../models/pipeline.js";
import { pipelinesRequestSchema, type PipelinesRequest } from "../models/pipelines-request.js";
import {
  pipelinesStagesReorderRequestSchema,
  type PipelinesStagesReorderRequest,
} from "../models/pipelines-stages-reorder-request.js";
import {
  pipelinesStagesRequestSchema,
  type PipelinesStagesRequest,
} from "../models/pipelines-stages-request.js";
import {
  pipelinesStagesRequest1Schema,
  type PipelinesStagesRequest1,
} from "../models/pipelines-stages-request1.js";
import type { Servers } from "../servers.js";

export class Pipelines {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a stage to a pipeline
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addStage(request: Pipelines.AddStageRequest, options?: RequestOptions): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pipelines/{key}/stages"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelinesStagesRequestSchema },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a pipeline
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPipeline(
    request: Pipelines.CreatePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineInputSchema },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a pipeline (fails if deals still use it)
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePipeline(
    request: Pipelines.DeletePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<Deleted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/pipelines/{key}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a stage (fails if deals use it)
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStage(
    request: Pipelines.DeleteStageRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/pipelines/{key}/stages/{stage}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "stage", value: request.stage, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a pipeline
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPipeline(
    request: Pipelines.GetPipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pipelines/{key}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List pipelines with their ordered stages
   *
   * @returns Pipelines
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPipelines(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reorder stages (order = a permutation of every existing stage key)
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reorderStages(
    request: Pipelines.ReorderStagesRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pipelines/{key}/stages/reorder"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelinesStagesReorderRequestSchema },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Make this pipeline the workspace default
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setDefaultPipeline(
    request: Pipelines.SetDefaultPipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pipelines/{key}/default"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a pipeline: display `name`, `is_default`, and/or re-`key` it.
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePipeline(
    request: Pipelines.UpdatePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/pipelines/{key}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelinesRequestSchema },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Rename/retype a stage.
   *
   * @returns Pipeline
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStage(
    request: Pipelines.UpdateStageRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/pipelines/{key}/stages/{stage}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "stage", value: request.stage, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelinesStagesRequest1Schema },
      },
      {
        success: { kind: "json", schema: pipelineSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Pipelines {
  export type AddStageRequest = {
    key: string;
    body: PipelinesStagesRequest;
  };

  export type CreatePipelineRequest = {
    body: PipelineInput;
  };

  export type DeletePipelineRequest = {
    /** Pipeline key or pl_ id. */
    key: string;
  };

  export type DeleteStageRequest = {
    key: string;
    stage: string;
  };

  export type GetPipelineRequest = {
    /** Pipeline key or pl_ id. */
    key: string;
  };

  export type ReorderStagesRequest = {
    key: string;
    body: PipelinesStagesReorderRequest;
  };

  export type SetDefaultPipelineRequest = {
    key: string;
  };

  export type UpdatePipelineRequest = {
    /** Pipeline key or pl_ id. */
    key: string;
    body: PipelinesRequest;
  };

  export type UpdateStageRequest = {
    key: string;
    stage: string;
    body: PipelinesStagesRequest1;
  };
}
