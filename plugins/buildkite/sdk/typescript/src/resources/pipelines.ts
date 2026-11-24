import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { pipelineInternalSchema, type Pipeline } from "../models/pipeline.js";
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
   * Create A Pipeline
   *
   * @returns Pipeline created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPipeline(
    request: Pipelines.CreatePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "org", value: request.org, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => pipelineInternalSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete A Pipeline
   *
   * @returns Pipeline deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePipeline(
    request: Pipelines.DeletePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get A Pipeline
   *
   * @returns Pipeline record
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPipeline(
    request: Pipelines.GetPipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Pipelines
   *
   * @returns A list of pipelines
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPipelines(
    request: Pipelines.ListPipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<Pipeline[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "org", value: request.org, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => pipelineInternalSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update A Pipeline
   *
   * @returns Pipeline updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePipeline(
    request: Pipelines.UpdatePipelineRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/organizations/{org}/pipelines/{pipeline}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "org", value: request.org, schema: s.string() },
          { name: "pipeline", value: request.pipeline, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Pipelines {
  export type CreatePipelineRequest = {
    /** Organization slug */
    org: string;
    body?: Pipeline;
  };

  export type DeletePipelineRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
  };

  export type GetPipelineRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
  };

  export type ListPipelinesRequest = {
    /** Organization slug */
    org: string;
  };

  export type UpdatePipelineRequest = {
    /** Organization slug */
    org: string;
    /** Pipeline slug */
    pipeline: string;
  };
}
