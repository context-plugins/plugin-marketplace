import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { editPinRequestSchema, type EditPinRequest } from "../models/edit-pin-request.js";
import { getPinRequestSchema, type GetPinRequest } from "../models/get-pin-request.js";
import { getPinResponseSchema, type GetPinResponse } from "../models/get-pin-response.js";
import { listPinsResponseSchema, type ListPinsResponse } from "../models/list-pins-response.js";
import { pinDocumentSchema, type PinDocument } from "../models/pin-document.js";
import { pinRequestSchema, type PinRequest } from "../models/pin-request.js";
import { unpinSchema, type Unpin } from "../models/unpin.js";
import type { Servers } from "../servers.js";

export class Pins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update pin
   *
   * @remarks
   * Update an existing user-generated pin.
   *
   * @returns OK
   *
   * @throws {@link Pins.EditpinError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editpin(
    request: Pins.EditpinRequest,
    options?: RequestOptions,
  ): ApiPromise<PinDocument, Pins.EditpinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/editpin"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: editPinRequestSchema },
      },
      {
        success: { kind: "json", schema: pinDocumentSchema },
        errorFactory: Pins.EditpinError,
      },
      options,
    );
  }

  /**
   * Read pin
   *
   * @remarks
   * Read pin details given its ID.
   *
   * @returns OK
   *
   * @throws {@link Pins.GetpinError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getpin(
    request: Pins.GetpinRequest,
    options?: RequestOptions,
  ): ApiPromise<GetPinResponse, Pins.GetpinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getpin"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getPinRequestSchema },
      },
      {
        success: { kind: "json", schema: getPinResponseSchema },
        errorFactory: Pins.GetpinError,
      },
      options,
    );
  }

  /**
   * List pins
   *
   * @remarks
   * Lists all pins.
   *
   * @returns OK
   *
   * @throws {@link Pins.ListpinsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listpins(
    request: Pins.ListpinsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPinsResponse, Pins.ListpinsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/listpins"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: listPinsResponseSchema },
        errorFactory: Pins.ListpinsError,
      },
      options,
    );
  }

  /**
   * Create pin
   *
   * @remarks
   * Pin a document as a result for a given search query.Pin results that are known to be a good
   * match.
   *
   * @returns OK
   *
   * @throws {@link Pins.PinError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pin(request: Pins.PinRequestParams, options?: RequestOptions): ApiPromise<PinDocument, Pins.PinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/pin"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: pinRequestSchema },
      },
      {
        success: { kind: "json", schema: pinDocumentSchema },
        errorFactory: Pins.PinError,
      },
      options,
    );
  }

  /**
   * Delete pin
   *
   * @remarks
   * Unpin a previously pinned result.
   *
   * @returns OK
   *
   * @throws {@link Pins.UnpinError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpin(request: Pins.UnpinRequest, options?: RequestOptions): ApiPromise<undefined, Pins.UnpinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/unpin"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "locale", value: request.locale, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: unpinSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Pins.UnpinError,
      },
      options,
    );
  }
}

export namespace Pins {
  export type EditpinRequest = {
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
    /** Edit pins request */
    body: EditPinRequest;
  };

  export class EditpinError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EditpinError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetpinRequest = {
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
    /** Get pin request */
    body: GetPinRequest;
  };

  export class GetpinError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetpinError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListpinsRequest = {
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
    /** List pins request */
    body: Record<string, unknown>;
  };

  export class ListpinsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListpinsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type PinRequestParams = {
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
    /** Details about the document and query for the pin. */
    body: PinRequest;
  };

  export class PinError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PinError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UnpinRequest = {
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
    /** Details about the pin being unpinned. */
    body: Unpin;
  };

  export class UnpinError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpinError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
