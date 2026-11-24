import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2IdentitiesRequestSchema,
  type ApiV2IdentitiesRequest,
} from "../models/api-v2-identities-request.js";
import {
  apiV2IdentitiesResponseSchema,
  type ApiV2IdentitiesResponse,
} from "../models/api-v2-identities-response.js";
import {
  apiV2IdentitiesResponse1Schema,
  type ApiV2IdentitiesResponse1,
} from "../models/api-v2-identities-response1.js";
import {
  apiV2IdentitiesResponse2Schema,
  type ApiV2IdentitiesResponse2,
} from "../models/api-v2-identities-response2.js";
import {
  apiV2Identities401Error1Schema,
  type ApiV2Identities401Error1,
} from "../models/api-v2-identities401-error1.js";
import {
  apiV2Identities404Error1Schema,
  type ApiV2Identities404Error1,
} from "../models/api-v2-identities404-error1.js";
import {
  apiV2Identities422Error1Schema,
  type ApiV2Identities422Error1,
} from "../models/api-v2-identities422-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import { Order, orderSchema } from "../models/order.js";
import type { Servers } from "../servers.js";

export class Identities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create identity
   *
   * @remarks
   * Create a new identity for document organization.
   *
   * **Required Fields:**
   * - name - Identity name
   *
   * `identity.id` feeds documents_index, documents_create, documents_update, identities_destroy and
   * numbers_purchase_update. Rows: identities_index.
   *
   * @returns creates a new identity
   *
   * @throws {@link Identities.IdentitiesCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identitiesCreate(
    request: Identities.IdentitiesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2IdentitiesResponse1, Identities.IdentitiesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/identities"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2IdentitiesRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV2IdentitiesResponse1Schema },
        errorFactory: Identities.IdentitiesCreateError,
      },
      options,
    );
  }

  /**
   * Archive identity
   *
   * @remarks
   * Archive an identity.
   *
   * **Important notes:**
   * - Identity is archived and becomes inactive
   * - Cannot delete primary/default identity
   * - Associated documents are preserved
   *
   * @returns archives the identity
   *
   * @throws {@link Identities.IdentitiesDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identitiesDestroy(
    request: Identities.IdentitiesDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2IdentitiesResponse2, Identities.IdentitiesDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/identities/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2IdentitiesResponse2Schema },
        errorFactory: Identities.IdentitiesDestroyError,
      },
      options,
    );
  }

  /**
   * List identities
   *
   * @remarks
   * Retrieve a list of identities with filtering and pagination.
   *
   * **Important notes:**
   * - Supports filtering by name, IDs, and date range
   * - Results can be sorted and paginated
   *
   * `identities[].id` feeds documents_index, documents_create, documents_update, identities_destroy
   * and numbers_purchase_update. When `documents_count` is above zero, documents_index lists those
   * documents by `identity_id`.
   *
   * @returns returns identities with documents count
   *
   * @throws {@link Identities.IdentitiesIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identitiesIndex(
    request: Identities.IdentitiesIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2IdentitiesResponse, Identities.IdentitiesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/identities"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "ids", value: request.ids, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "created_at_from", value: request.createdAtFrom, schema: s.optional(s.dateOnly()) },
          { name: "created_at_to", value: request.createdAtTo, schema: s.optional(s.dateOnly()) },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.defaulted(orderSchema, Order.Desc) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2IdentitiesResponseSchema },
        errorFactory: Identities.IdentitiesIndexError,
      },
      options,
    );
  }
}

export namespace Identities {
  export type IdentitiesCreateRequest = {
    body: ApiV2IdentitiesRequest;
  };

  export class IdentitiesCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Identities401Error1", ApiV2Identities401Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdentitiesCreateError> = [
      {
        on: 401,
        kind: "apiV2Identities401Error1",
        decode: { kind: "json", schema: apiV2Identities401Error1Schema },
      },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IdentitiesDestroyRequest = {
    /** Identity ID from identities_index, identities_create */
    id: number;
  };

  export class IdentitiesDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2Identities401Error1", ApiV2Identities401Error1>
      | Declared<"apiV2Identities404Error1", ApiV2Identities404Error1>
      | Declared<"apiV2Identities422Error1", ApiV2Identities422Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdentitiesDestroyError> = [
      {
        on: 401,
        kind: "apiV2Identities401Error1",
        decode: { kind: "json", schema: apiV2Identities401Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2Identities404Error1",
        decode: { kind: "json", schema: apiV2Identities404Error1Schema },
      },
      {
        on: 422,
        kind: "apiV2Identities422Error1",
        decode: { kind: "json", schema: apiV2Identities422Error1Schema },
      },
    ];
  }

  export type IdentitiesIndexRequest = {
    /**
     * Filter identities by IDs (comma-separated); `identity_id` from documents_index,
     * documents_show
     */
    ids?: string;
    /** Filter identities by name (partial match) */
    name?: string;
    /** Filter identities created from this date (YYYY-MM-DD) */
    createdAtFrom?: string;
    /** Filter identities created until this date (YYYY-MM-DD) */
    createdAtTo?: string;
    /** Field to sort by */
    orderBy?: string;
    /** Sort order @default Order.Desc */
    order?: Order;
    /** Page number for pagination (starts from 1) @default 1 */
    page?: number;
    /** Number of items per page @default 20 */
    perPage?: number;
  };

  export const identitiesIndexRequestSchema: Schema<IdentitiesIndexRequest> = s.lazySchema(() =>
    s.object<IdentitiesIndexRequest>({
      ids: s.optional(s.string()),
      name: s.optional(s.string()),
      createdAtFrom: s.optional(s.dateOnly()),
      createdAtTo: s.optional(s.dateOnly()),
      orderBy: s.optional(s.string()),
      order: s.defaulted(orderSchema, Order.Desc),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class IdentitiesIndexError extends ApiError {
    declare readonly payload: Declared<"apiV2Identities401Error1", ApiV2Identities401Error1> | Undeclared;

    static readonly errors: ErrorDecoders<IdentitiesIndexError> = [
      {
        on: 401,
        kind: "apiV2Identities401Error1",
        decode: { kind: "json", schema: apiV2Identities401Error1Schema },
      },
    ];
  }
}
