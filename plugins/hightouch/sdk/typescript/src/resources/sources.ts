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
  OrderByHightouchDestinationsApi,
  orderByHightouchDestinationsApiSchema,
} from "../models/order-by-hightouch-destinations-api.js";
import { sourceCreateSchema, type SourceCreate } from "../models/source-create.js";
import { sourceUpdateSchema, type SourceUpdate } from "../models/source-update.js";
import { sourceSchema, type Source } from "../models/source.js";
import { sourcesResponseSchema, type SourcesResponse } from "../models/sources-response.js";
import { sourcesResponse1Schema, type SourcesResponse1 } from "../models/unions/sources-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Sources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Source
   *
   * @remarks
   * Create a new source
   *
   * @returns Ok
   *
   * @throws {@link Sources.CreateSourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSource(
    request: Sources.CreateSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<SourcesResponse1, Sources.CreateSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sources"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sourceCreateSchema },
      },
      {
        success: { kind: "json", schema: sourcesResponse1Schema },
        errorFactory: Sources.CreateSourceError,
      },
      options,
    );
  }

  /**
   * Get Source
   *
   * @remarks
   * Retrieve source from source ID
   *
   * @returns Ok
   *
   * @throws {@link Sources.GetSourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSource(
    request: Sources.GetSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<Source, Sources.GetSourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sources/{sourceId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "sourceId", value: request.sourceId, schema: s.float64() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourceSchema },
        errorFactory: Sources.GetSourceError,
      },
      options,
    );
  }

  /**
   * List Sources
   *
   * @remarks
   * List all the sources in the current workspace
   *
   * @returns Ok
   *
   * @throws {@link Sources.ListSourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSource(
    request: Sources.ListSourceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SourcesResponse, Sources.ListSourceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sources"),
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
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sourcesResponseSchema },
        errorFactory: Sources.ListSourceError,
      },
      options,
    );
  }

  /**
   * Update Source
   *
   * @remarks
   * Update an existing source
   *
   * Patch a source based on its Hightouch ID
   *
   * @returns Ok
   *
   * @throws {@link Sources.UpdateSourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSource(
    request: Sources.UpdateSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<SourcesResponse1, Sources.UpdateSourceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/sources/{sourceId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "sourceId", value: request.sourceId, schema: s.float64() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sourceUpdateSchema },
      },
      {
        success: { kind: "json", schema: sourcesResponse1Schema },
        errorFactory: Sources.UpdateSourceError,
      },
      options,
    );
  }
}

export namespace Sources {
  export type CreateSourceRequest = {
    body: SourceCreate;
  };

  export class CreateSourceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"validateErrorJson2", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSourceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 422, kind: "validateErrorJson2", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetSourceRequest = {
    /** The id of the source */
    sourceId: number;
  };

  export class GetSourceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSourceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListSourceRequest = {
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
  };

  export class ListSourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListSourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type UpdateSourceRequest = {
    /** The source's ID */
    sourceId: number;
    body: SourceUpdate;
  };

  export class UpdateSourceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSourceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
