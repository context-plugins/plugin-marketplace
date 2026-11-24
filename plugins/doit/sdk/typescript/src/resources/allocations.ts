import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  allocationDeleteValidationSchema,
  type AllocationDeleteValidation,
} from "../models/allocation-delete-validation.js";
import { allocationInternalSchema, type Allocation } from "../models/allocation.js";
import {
  analyticsV1AllocationsResponseSchema,
  type AnalyticsV1AllocationsResponse,
} from "../models/analytics-v1-allocations-response.js";
import {
  createAllocationRequestInternalSchema,
  type CreateAllocationRequest,
} from "../models/create-allocation-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sortByDoiTAllocationsApiSchema,
  type SortByDoiTAllocationsApi,
} from "../models/sort-by-doi-tallocations-api.js";
import { sortOrderSchema, type SortOrder } from "../models/sort-order.js";
import {
  updateAllocationRequestInternalSchema,
  type UpdateAllocationRequest,
} from "../models/update-allocation-request.js";
import type { Servers } from "../servers.js";

/**
 * Define how costs are distributed across your organization.
 */
export class Allocations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an allocation
   *
   * @remarks
   * Creates a new allocation.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Allocations.CreateAllocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAllocation(
    request: Allocations.CreateAllocationRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<Allocation, Allocations.CreateAllocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/analytics/v1/allocations"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAllocationRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: allocationInternalSchema },
        errorFactory: Allocations.CreateAllocationError,
      },
      options,
    );
  }

  /**
   * Delete an allocation
   *
   * @remarks
   * Deletes the allocation specified by the Id.
   *
   * @returns OK - Allocation deleted.
   *
   * @throws {@link Allocations.DeleteAllocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAllocation(
    request: Allocations.DeleteAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Allocations.DeleteAllocationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/analytics/v1/allocations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Allocations.DeleteAllocationError,
      },
      options,
    );
  }

  /**
   * Retrieve an allocation
   *
   * @remarks
   * Returns an allocation by the specified Id.
   *
   * @returns OK - Allocation returned.
   *
   * @throws {@link Allocations.GetAllocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllocation(
    request: Allocations.GetAllocationRequest,
    options?: RequestOptions,
  ): ApiPromise<Allocation, Allocations.GetAllocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/allocations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: allocationInternalSchema },
        errorFactory: Allocations.GetAllocationError,
      },
      options,
    );
  }

  /**
   * List allocations
   *
   * @remarks
   * Returns a list of allocations that your account has access to. Allocations are listed in
   * reverse chronological order by default.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Allocations.ListAllocationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllocations(
    request: Allocations.ListAllocationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsV1AllocationsResponse, Allocations.ListAllocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/analytics/v1/allocations"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => sortByDoiTAllocationsApiSchema)),
          },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsV1AllocationsResponseSchema },
        errorFactory: Allocations.ListAllocationsError,
      },
      options,
    );
  }

  /**
   * Update an allocation
   *
   * @remarks
   * Updates the allocation specified by the Id.
   *
   * @returns OK - Allocation updated.
   *
   * @throws {@link Allocations.UpdateAllocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAllocation(
    request: Allocations.UpdateAllocationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Allocation, Allocations.UpdateAllocationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/analytics/v1/allocations/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateAllocationRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: allocationInternalSchema },
        errorFactory: Allocations.UpdateAllocationError,
      },
      options,
    );
  }
}

export namespace Allocations {
  export type CreateAllocationRequestParams = {
    body?: CreateAllocationRequest;
  };

  export class CreateAllocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAllocationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAllocationRequest = {
    /** Allocation ID */
    id: string;
  };

  export class DeleteAllocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error409", AllocationDeleteValidation[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAllocationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      {
        on: 409,
        kind: "error409",
        decode: { kind: "json", schema: s.array(s.lazy(() => allocationDeleteValidationSchema)) },
      },
    ];
  }

  export type GetAllocationRequest = {
    /** Allocation ID */
    id: string;
  };

  export class GetAllocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllocationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAllocationsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results. Valid fields: **type**, **owner**, **name**,
     * **folderId**.
     */
    filter?: string;
    /**
     * Case-insensitive substring match against the resource name. Combined with the "filter"
     * parameter using AND semantics.
     */
    nameContains?: string;
    /** A field by which the results will be sorted. */
    sortBy?: SortByDoiTAllocationsApi;
    /**
     * Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
     * descending (highest to lowest).
     */
    sortOrder?: SortOrder;
  };

  export class ListAllocationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllocationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAllocationRequestParams = {
    /** Allocation ID */
    id: string;
    body?: UpdateAllocationRequest;
  };

  export class UpdateAllocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAllocationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
