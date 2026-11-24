import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dealInputSchema, type DealInput } from "../models/deal-input.js";
import { dealListSchema, type DealList } from "../models/deal-list.js";
import { dealSchema, type Deal } from "../models/deal.js";
import { deletedSchema, type Deleted } from "../models/deleted.js";
import type { Servers } from "../servers.js";

export class Deals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a deal (title required)
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDeal(request: Deals.CreateDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/deals"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: dealInputSchema },
      },
      {
        success: { kind: "json", schema: dealSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Soft-delete a deal
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDeal(request: Deals.DeleteDealRequest, options?: RequestOptions): ApiPromise<Deleted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/deals/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
   * Fetch a deal
   *
   * @returns Deal
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeal(request: Deals.GetDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/deals/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dealSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List deals
   *
   * @returns Deal list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDeals(request: Deals.ListDealsRequest = {}, options?: RequestOptions): ApiPromise<DealList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/deals"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "include_deleted", value: request.includeDeleted, schema: s.optional(s.boolean()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "pipeline", value: request.pipeline, schema: s.optional(s.string()) },
          { name: "pipeline_id", value: request.pipelineId, schema: s.optional(s.string()) },
          { name: "stage", value: request.stage, schema: s.optional(s.string()) },
          { name: "company_id", value: request.companyId, schema: s.optional(s.string()) },
          { name: "primary_contact_id", value: request.primaryContactId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dealListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore a deal
   *
   * @returns Restored
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreDeal(request: Deals.RestoreDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/deals/{id}/restore"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dealSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a deal (incl. moving stage/pipeline)
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDeal(request: Deals.UpdateDealRequest, options?: RequestOptions): ApiPromise<Deal, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/deals/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: dealInputSchema },
      },
      {
        success: { kind: "json", schema: dealSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Deals {
  export type CreateDealRequest = {
    /** Safely retry a create: same key + same body replays the original result. */
    idempotencyKey?: string;
    body: DealInput;
  };

  export type DeleteDealRequest = {
    id: string;
  };

  export type GetDealRequest = {
    id: string;
  };

  export type ListDealsRequest = {
    /** Page size (default 25, max 100). @default 25 */
    limit?: number;
    /** Opaque keyset cursor from a prior next_cursor. */
    cursor?: string;
    /** Include soft-deleted rows. */
    includeDeleted?: boolean;
    q?: string;
    /**
     * Scope to ONE pipeline (key or pl_ id). Omit and you get deals from ALL pipelines merged -
     * pass this whenever you reason about a single funnel, since stage keys are not unique across
     * pipelines. Alias: pipeline_id.
     */
    pipeline?: string;
    pipelineId?: string;
    stage?: string;
    companyId?: string;
    primaryContactId?: string;
  };

  export const listDealsRequestSchema: Schema<ListDealsRequest> = s.lazySchema(() =>
    s.object<ListDealsRequest>({
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      cursor: s.optional(s.string()),
      includeDeleted: s.optional(s.boolean()),
      q: s.optional(s.string()),
      pipeline: s.optional(s.string()),
      pipelineId: s.optional(s.string()),
      stage: s.optional(s.string()),
      companyId: s.optional(s.string()),
      primaryContactId: s.optional(s.string()),
    }),
  );

  export type RestoreDealRequest = {
    id: string;
  };

  export type UpdateDealRequest = {
    id: string;
    /**
     * The record's current version for optimistic concurrency; a mismatch returns 412
     * version_conflict.
     */
    ifMatch?: string;
    body: DealInput;
  };
}
