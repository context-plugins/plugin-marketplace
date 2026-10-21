import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { collectorTypeSchema, type CollectorType } from "../models/collector-type.js";
import {
  countedSavedJobResponseSchema,
  type CountedSavedJobResponse,
} from "../models/counted-saved-job-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedSavedJobResponseSchema,
  type PaginatedSavedJobResponse,
} from "../models/paginated-saved-job-response.js";
import { savedJobSchema, type SavedJob } from "../models/unions/saved-job.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Collectors
 */
export class CollectorsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Collector
   *
   * @remarks
   * Create a new Collector.
   *
   * @returns The created Collector in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link CollectorsApi.CreateSavedJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSavedJob(
    request: CollectorsApi.CreateSavedJobRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedSavedJobResponse, CollectorsApi.CreateSavedJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/lib/jobs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: savedJobSchema },
      },
      {
        success: { kind: "json", schema: countedSavedJobResponseSchema },
        errorFactory: CollectorsApi.CreateSavedJobError,
      },
      options,
    );
  }

  /**
   * Delete a Collector
   *
   * @remarks
   * Delete the specified Collector.
   *
   * @returns The deleted Collector in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link CollectorsApi.DeleteSavedJobByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteSavedJobById(
    request: CollectorsApi.DeleteSavedJobByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedSavedJobResponse, CollectorsApi.DeleteSavedJobByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/lib/jobs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedSavedJobResponseSchema },
        errorFactory: CollectorsApi.DeleteSavedJobByIdError,
      },
      options,
    );
  }

  /**
   * List all Collectors
   *
   * @remarks
   * Get a list of all Collectors.
   *
   * @returns The list of Collectors in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link CollectorsApi.GetSavedJobError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSavedJob(
    request: CollectorsApi.GetSavedJobRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedSavedJobResponse, CollectorsApi.GetSavedJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lib/jobs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          {
            name: "collectorType",
            value: request.collectorType,
            schema: s.optional(s.lazy(() => collectorTypeSchema)),
          },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedSavedJobResponseSchema },
        errorFactory: CollectorsApi.GetSavedJobError,
      },
      options,
    );
  }

  /**
   * Get a Collector
   *
   * @remarks
   * Get the specified Collector.
   *
   * @returns The requested Collector in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link CollectorsApi.GetSavedJobByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSavedJobById(
    request: CollectorsApi.GetSavedJobByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedSavedJobResponse, CollectorsApi.GetSavedJobByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lib/jobs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedSavedJobResponseSchema },
        errorFactory: CollectorsApi.GetSavedJobByIdError,
      },
      options,
    );
  }

  /**
   * Update a Collector
   *
   * @remarks
   * Update the specified Collector.<br/><br/>Provide a complete representation of the Collector
   * that you want to update in the request body. This endpoint does not support partial updates.
   * Cribl removes any omitted fields when updating the Collector.<br/><br/>Confirm that the
   * configuration in your request body is correct before sending the request. If the configuration
   * is incorrect, the updated Collector might not function as expected.
   *
   * @returns The updated Collector in a response envelope with <code>count</code> and
   * <code>items</code>.
   *
   * @throws {@link CollectorsApi.UpdateSavedJobByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSavedJobById(
    request: CollectorsApi.UpdateSavedJobByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedSavedJobResponse, CollectorsApi.UpdateSavedJobByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/lib/jobs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: savedJobSchema },
      },
      {
        success: { kind: "json", schema: countedSavedJobResponseSchema },
        errorFactory: CollectorsApi.UpdateSavedJobByIdError,
      },
      options,
    );
  }
}

export namespace CollectorsApi {
  export type CreateSavedJobRequest = {
    /** SavedJob object. */
    body: SavedJob;
  };

  export class CreateSavedJobError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSavedJobError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSavedJobByIdRequest = {
    /** The <code>id</code> of the Collector to delete. */
    id: string;
  };

  export class DeleteSavedJobByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSavedJobByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetSavedJobRequest = {
    /** Filter by collector type. */
    collectorType?: CollectorType;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetSavedJobError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetSavedJobError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSavedJobByIdRequest = {
    /** The <code>id</code> of the Collector to get. */
    id: string;
  };

  export class GetSavedJobByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetSavedJobByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateSavedJobByIdRequest = {
    /** The <code>id</code> of the Collector to update. */
    id: string;
    /** SavedJob object. */
    body: SavedJob;
  };

  export class UpdateSavedJobByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSavedJobByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
