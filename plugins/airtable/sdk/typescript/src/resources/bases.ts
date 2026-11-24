import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseListSchema, type BaseList } from "../models/base-list.js";
import { baseSchemaSchema, type BaseSchema } from "../models/base-schema.js";
import { createBaseRequestInternalSchema, type CreateBaseRequest } from "../models/create-base-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { includeSchema, type Include } from "../models/include.js";
import {
  metaBasesTablesResponseSchema,
  type MetaBasesTablesResponse,
} from "../models/meta-bases-tables-response.js";
import { metaWhoamiResponseSchema, type MetaWhoamiResponse } from "../models/meta-whoami-response.js";
import type { Servers } from "../servers.js";

/**
 * List and create bases, retrieve base schemas
 */
export class Bases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Airtable Create a New Base
   *
   * @remarks
   * Creates a new base in the specified workspace. The request must include the workspace ID, base
   * name, and at least one table definition with fields. Returns the newly created base with its
   * schema.
   *
   * @returns The newly created base with its schema.
   *
   * @throws {@link Bases.CreateBaseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBase(
    request: Bases.CreateBaseRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BaseSchema, Bases.CreateBaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/meta/bases"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createBaseRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: baseSchemaSchema },
        errorFactory: Bases.CreateBaseError,
      },
      options,
    );
  }

  /**
   * Airtable Get Base Schema
   *
   * @remarks
   * Returns the schema of the specified base, including all tables, their fields (with type and
   * configuration), and views. This endpoint provides a complete structural overview of the base.
   *
   * @returns The base schema with tables, fields, and views.
   *
   * @throws {@link Bases.GetBaseSchemaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBaseSchema(
    request: Bases.GetBaseSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<MetaBasesTablesResponse, Bases.GetBaseSchemaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/meta/bases/{baseId}/tables"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "baseId", value: request.baseId, schema: s.string() }],
        query: [
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => includeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metaBasesTablesResponseSchema },
        errorFactory: Bases.GetBaseSchemaError,
      },
      options,
    );
  }

  /**
   * Airtable List All Bases
   *
   * @remarks
   * Returns a paginated list of all bases that the authenticated user has access to. Each base
   * includes its ID, name, and permission level. Use the offset parameter from the response to
   * paginate through all available bases.
   *
   * @returns A paginated list of bases.
   *
   * @throws {@link Bases.ListBasesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBases(
    request: Bases.ListBasesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BaseList, Bases.ListBasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/meta/bases"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "offset", value: request.offset, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: baseListSchema },
        errorFactory: Bases.ListBasesError,
      },
      options,
    );
  }

  /**
   * Airtable Get Current User and Scopes
   *
   * @remarks
   * Returns the ID and scopes of the currently authenticated user or service account. Useful for
   * verifying authentication and checking available permissions.
   *
   * @returns The current user ID and authorized scopes.
   *
   * @throws {@link Bases.WhoamiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AirtableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whoami(options?: RequestOptions): ApiPromise<MetaWhoamiResponse, Bases.WhoamiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/meta/whoami"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metaWhoamiResponseSchema },
        errorFactory: Bases.WhoamiError,
      },
      options,
    );
  }
}

export namespace Bases {
  export type CreateBaseRequestParams = {
    body: CreateBaseRequest;
  };

  export class CreateBaseError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBaseError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetBaseSchemaRequest = {
    /** The unique identifier of the base (starts with 'app'). */
    baseId: string;
    /**
     * Additional information to include in the response. Pass visibleFieldIds to include visible
     * field IDs for each view.
     */
    include?: Include[];
  };

  export const getBaseSchemaRequestSchema: Schema<GetBaseSchemaRequest> = s.lazySchema(() =>
    s.object<GetBaseSchemaRequest>({
      baseId: s.string().check(s.pattern("^app[a-zA-Z0-9]+$")),
      include: s.optional(s.array(s.lazy(() => includeSchema))),
    }),
  );

  export class GetBaseSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBaseSchemaError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBasesRequest = {
    /** Pagination cursor from a previous response to fetch the next page. */
    offset?: string;
  };

  export class ListBasesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListBasesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class WhoamiError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<WhoamiError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
