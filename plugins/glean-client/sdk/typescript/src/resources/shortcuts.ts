import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createShortcutRequestSchema,
  type CreateShortcutRequest,
} from "../models/create-shortcut-request.js";
import {
  createShortcutResponseSchema,
  type CreateShortcutResponse,
} from "../models/create-shortcut-response.js";
import {
  deleteShortcutRequestSchema,
  type DeleteShortcutRequest,
} from "../models/delete-shortcut-request.js";
import { getShortcutResponseSchema, type GetShortcutResponse } from "../models/get-shortcut-response.js";
import {
  listShortcutsPaginatedRequestSchema,
  type ListShortcutsPaginatedRequest,
} from "../models/list-shortcuts-paginated-request.js";
import {
  listShortcutsPaginatedResponseSchema,
  type ListShortcutsPaginatedResponse,
} from "../models/list-shortcuts-paginated-response.js";
import {
  getShortcutRequest1Schema,
  type GetShortcutRequest1,
} from "../models/unions/get-shortcut-request1.js";
import {
  updateShortcutRequestSchema,
  type UpdateShortcutRequest,
} from "../models/update-shortcut-request.js";
import {
  updateShortcutResponseSchema,
  type UpdateShortcutResponse,
} from "../models/update-shortcut-response.js";
import type { Servers } from "../servers.js";

export class Shortcuts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create shortcut
   *
   * @remarks
   * Create a user-generated shortcut that contains an alias and destination URL.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.CreateshortcutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createshortcut(
    request: Shortcuts.CreateshortcutRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateShortcutResponse, Shortcuts.CreateshortcutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/createshortcut"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createShortcutRequestSchema },
      },
      {
        success: { kind: "json", schema: createShortcutResponseSchema },
        errorFactory: Shortcuts.CreateshortcutError,
      },
      options,
    );
  }

  /**
   * Delete shortcut
   *
   * @remarks
   * Delete an existing user-generated shortcut.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.DeleteshortcutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteshortcut(
    request: Shortcuts.DeleteshortcutRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Shortcuts.DeleteshortcutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deleteshortcut"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteShortcutRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shortcuts.DeleteshortcutError,
      },
      options,
    );
  }

  /**
   * Read shortcut
   *
   * @remarks
   * Read a particular shortcut's details given its ID.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.GetshortcutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getshortcut(
    request: Shortcuts.GetshortcutRequest,
    options?: RequestOptions,
  ): ApiPromise<GetShortcutResponse, Shortcuts.GetshortcutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getshortcut"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getShortcutRequest1Schema },
      },
      {
        success: { kind: "json", schema: getShortcutResponseSchema },
        errorFactory: Shortcuts.GetshortcutError,
      },
      options,
    );
  }

  /**
   * List shortcuts
   *
   * @remarks
   * List shortcuts editable/owned by the currently authenticated user.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.ListshortcutsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listshortcuts(
    request: Shortcuts.ListshortcutsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListShortcutsPaginatedResponse, Shortcuts.ListshortcutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/listshortcuts"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: listShortcutsPaginatedRequestSchema },
      },
      {
        success: { kind: "json", schema: listShortcutsPaginatedResponseSchema },
        errorFactory: Shortcuts.ListshortcutsError,
      },
      options,
    );
  }

  /**
   * Update shortcut
   *
   * @remarks
   * Updates the shortcut with the given ID.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.UpdateshortcutError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateshortcut(
    request: Shortcuts.UpdateshortcutRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateShortcutResponse, Shortcuts.UpdateshortcutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/updateshortcut"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateShortcutRequestSchema },
      },
      {
        success: { kind: "json", schema: updateShortcutResponseSchema },
        errorFactory: Shortcuts.UpdateshortcutError,
      },
      options,
    );
  }
}

export namespace Shortcuts {
  export type CreateshortcutRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** CreateShortcut request */
    body: CreateShortcutRequest;
  };

  export class CreateshortcutError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateshortcutError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteshortcutRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** DeleteShortcut request */
    body: DeleteShortcutRequest;
  };

  export class DeleteshortcutError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteshortcutError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetshortcutRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** GetShortcut request */
    body: GetShortcutRequest1;
  };

  export class GetshortcutError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetshortcutError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListshortcutsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Filters, sorters, paging params required for pagination */
    body: ListShortcutsPaginatedRequest;
  };

  export class ListshortcutsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListshortcutsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateshortcutRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Shortcut content. Id need to be specified for the shortcut. */
    body: UpdateShortcutRequest;
  };

  export class UpdateshortcutError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateshortcutError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
