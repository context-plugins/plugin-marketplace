import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countedPipelineSchema, type CountedPipeline } from "../models/counted-pipeline.js";
import { errorSchema, type Error } from "../models/error.js";
import { paginatedPipelineSchema, type PaginatedPipeline } from "../models/paginated-pipeline.js";
import { pipelineSchema, type Pipeline } from "../models/pipeline.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Pipelines
 */
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
   * Create a Pipeline
   *
   * @remarks
   * Create a new Pipeline.
   *
   * @returns The created Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.CreatePipelinesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPipelines(
    request: Pipelines.CreatePipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.CreatePipelinesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.CreatePipelinesError,
      },
      options,
    );
  }

  /**
   * Create a Pipeline within a Pack
   *
   * @remarks
   * Create a new Pipeline within the specified Pack.
   *
   * @returns The created Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.CreatePipelinesByPackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPipelinesByPack(
    request: Pipelines.CreatePipelinesByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.CreatePipelinesByPackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.CreatePipelinesByPackError,
      },
      options,
    );
  }

  /**
   * Delete a Pipeline
   *
   * @remarks
   * Delete the specified Pipeline.
   *
   * @returns The deleted Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.DeletePipelinesByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePipelinesById(
    request: Pipelines.DeletePipelinesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.DeletePipelinesByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.DeletePipelinesByIdError,
      },
      options,
    );
  }

  /**
   * Delete a Pipeline within a Pack
   *
   * @remarks
   * Delete the specified Pipeline within the specified Pack.
   *
   * @returns The deleted Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.DeletePipelinesByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePipelinesByPackAndId(
    request: Pipelines.DeletePipelinesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.DeletePipelinesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/p/{pack}/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.DeletePipelinesByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Pipelines
   *
   * @remarks
   * Get a list of all Pipelines.
   *
   * @returns List of Pipeline objects.
   *
   * @throws {@link Pipelines.GetPipelinesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPipelines(
    request: Pipelines.GetPipelinesRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedPipeline, Pipelines.GetPipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedPipelineSchema },
        errorFactory: Pipelines.GetPipelinesError,
      },
      options,
    );
  }

  /**
   * Get a Pipeline
   *
   * @remarks
   * Get the specified Pipeline.
   *
   * @returns The requested Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.GetPipelinesByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPipelinesById(
    request: Pipelines.GetPipelinesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.GetPipelinesByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.GetPipelinesByIdError,
      },
      options,
    );
  }

  /**
   * List all Pipelines within a Pack
   *
   * @remarks
   * Get a list of all Pipelines within the specified Pack.
   *
   * @returns List of Pipeline objects.
   *
   * @throws {@link Pipelines.GetPipelinesByPackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPipelinesByPack(
    request: Pipelines.GetPipelinesByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedPipeline, Pipelines.GetPipelinesByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/pipelines"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedPipelineSchema },
        errorFactory: Pipelines.GetPipelinesByPackError,
      },
      options,
    );
  }

  /**
   * Get a Pipeline within a Pack
   *
   * @remarks
   * Get the specified Pipeline within the specified Pack.
   *
   * @returns The requested Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.GetPipelinesByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPipelinesByPackAndId(
    request: Pipelines.GetPipelinesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.GetPipelinesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.GetPipelinesByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Pipeline
   *
   * @remarks
   * Update the specified Pipeline.<br/><br/>Provide a complete representation of the Pipeline that
   * you want to update in the request body.<br/><br/>This endpoint does not support partial
   * updates. Cribl removes any omitted fields when updating the Pipeline.<br/><br/>Confirm that the
   * configuration in your request body is correct before sending the request.<br/><br/>If the
   * configuration is incorrect, the updated Pipeline might not function as expected.
   *
   * @returns The updated Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.UpdatePipelinesByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePipelinesById(
    request: Pipelines.UpdatePipelinesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.UpdatePipelinesByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.UpdatePipelinesByIdError,
      },
      options,
    );
  }

  /**
   * Update a Pipeline within a Pack
   *
   * @remarks
   * Update the specified Pipeline within the specified Pack.<br/><br/>Provide a complete
   * representation of the Pipeline that you want to update in the request body.<br/><br/>This
   * endpoint does not support partial updates. Cribl removes any omitted fields when updating the
   * Pipeline.<br/><br/>Confirm that the configuration in your request body is correct before
   * sending the request.<br/><br/>If the configuration is incorrect, the updated Pipeline might not
   * function as expected.
   *
   * @returns The updated Pipeline object in a single-item list.
   *
   * @throws {@link Pipelines.UpdatePipelinesByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updatePipelinesByPackAndId(
    request: Pipelines.UpdatePipelinesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedPipeline, Pipelines.UpdatePipelinesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/p/{pack}/pipelines/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: pipelineSchema },
      },
      {
        success: { kind: "json", schema: countedPipelineSchema },
        errorFactory: Pipelines.UpdatePipelinesByPackAndIdError,
      },
      options,
    );
  }
}

export namespace Pipelines {
  export type CreatePipelinesRequest = {
    /** Pipeline object. */
    body: Pipeline;
  };

  export class CreatePipelinesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePipelinesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreatePipelinesByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Pipeline object. */
    body: Pipeline;
  };

  export class CreatePipelinesByPackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePipelinesByPackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeletePipelinesByIdRequest = {
    /** The <code>id</code> of the Pipeline to delete. */
    id: string;
  };

  export class DeletePipelinesByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeletePipelinesByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeletePipelinesByPackAndIdRequest = {
    /** The <code>id</code> of the Pipeline to delete. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class DeletePipelinesByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeletePipelinesByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPipelinesRequest = {
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
    /**
     * Maximum number of Pipelines to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
  };

  export class GetPipelinesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelinesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPipelinesByIdRequest = {
    /** The <code>id</code> of the Pipeline to get. */
    id: string;
  };

  export class GetPipelinesByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelinesByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPipelinesByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
    /**
     * Maximum number of Pipelines to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
  };

  export class GetPipelinesByPackError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelinesByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetPipelinesByPackAndIdRequest = {
    /** The <code>id</code> of the Pipeline to get. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetPipelinesByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPipelinesByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePipelinesByIdRequest = {
    /** The <code>id</code> of the Pipeline to update. */
    id: string;
    /** Pipeline object. */
    body: Pipeline;
  };

  export class UpdatePipelinesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePipelinesByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePipelinesByPackAndIdRequest = {
    /** The <code>id</code> of the Pipeline to update. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Pipeline object. */
    body: Pipeline;
  };

  export class UpdatePipelinesByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePipelinesByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
