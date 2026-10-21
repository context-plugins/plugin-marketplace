import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { sortingSchema, type Sorting } from "../models/sorting.js";
import {
  v2TerminalsPairingCodesRequestSchema,
  type V2TerminalsPairingCodesRequest,
} from "../models/v2-terminals-pairing-codes-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Terminals API
 */
export class TerminalsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get terminal
   *
   * @remarks
   * Retrieve a single terminal by its ID.
   *
   * @returns The terminal object.
   *
   * @throws {@link TerminalsApi.GetTerminalError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminal(
    request: TerminalsApi.GetTerminalRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.GetTerminalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/{terminalId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "terminalId", value: request.terminalId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.GetTerminalError,
      },
      options,
    );
  }

  /**
   * List terminals
   *
   * @remarks
   * Retrieve a list of all physical point-of-sale devices.
   *
   * The results are paginated.
   *
   * @returns A list of terminal objects.
   *
   * @throws {@link TerminalsApi.ListTerminalsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTerminals(
    request: TerminalsApi.ListTerminalsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.ListTerminalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.ListTerminalsError,
      },
      options,
    );
  }

  /**
   * Get terminal pairing code
   *
   * @remarks
   * > ℹ️ **Test mode** > > This endpoint currently does not support test mode yet.
   *
   * Get a pairing code to onboard a point-of-sale terminal.
   *
   * The response includes a human-readable `code` for manual entry on the terminal and, optionally,
   * a QR Code as a base64 encoded SVG data URI when you use the `include` query parameter with
   * value `details.qrCode`.
   *
   * We keep a pairing code for one month after it is revoked or expires, then delete it. Once
   * deleted, this endpoint returns a 404. Active pairing codes are never deleted.
   *
   * @returns The requested terminal pairing code object.
   *
   * @throws {@link TerminalsApi.TerminalsGetPairingCodeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminalsGetPairingCode(
    request: TerminalsApi.TerminalsGetPairingCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.TerminalsGetPairingCodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/pairing-codes/{pairingCodeId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth),
        pathParams: [{ name: "pairingCodeId", value: request.pairingCodeId, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.TerminalsGetPairingCodeError,
      },
      options,
    );
  }

  /**
   * List terminal pairing codes
   *
   * @remarks
   * > ℹ️ **Test mode** > > This endpoint currently does not support test mode yet.
   *
   * Returns your pairing codes: `active`, `expired`, and `revoked`. Results are paginated.
   *
   * We keep a pairing code for one month after it is revoked or expires, then delete it. Deleted
   * codes drop out of this list. Active pairing codes are never deleted.
   *
   * @returns A list of terminal pairing code objects. For a complete reference of the terminal
   * pairing code object, refer to the [Get terminal pairing code
   * endpoint](terminals-get-pairing-code) documentation.
   *
   * @throws {@link TerminalsApi.TerminalsListPairingCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminalsListPairingCodes(
    request: TerminalsApi.TerminalsListPairingCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.TerminalsListPairingCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/terminals/pairing-codes"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sortingSchema)) },
          { name: "profileId", value: request.profileId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.TerminalsListPairingCodesError,
      },
      options,
    );
  }

  /**
   * Request terminal pairing code
   *
   * @remarks
   * > ℹ️ **Test mode** > > This endpoint currently does not support test mode yet.
   *
   * Request a pairing code to onboard a point-of-sale terminal.
   *
   * The response includes a human-readable `code` for manual entry on the terminal, and a QR Code
   * as a base64 encoded SVG data URI for scanning if you specify the query parameter `include` with
   * value `details.qrCode`.
   *
   * Pairing codes expire after 90 days (see `expiresAt`) and can be used multiple times.
   *
   * @returns The requested terminal pairing code object.
   *
   * @throws {@link TerminalsApi.TerminalsRequestPairingCodeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminalsRequestPairingCode(
    request: TerminalsApi.TerminalsRequestPairingCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.TerminalsRequestPairingCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/terminals/pairing-codes"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth),
        pathParams: [],
        query: [{ name: "include", value: request.include, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2TerminalsPairingCodesRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.TerminalsRequestPairingCodeError,
      },
      options,
    );
  }

  /**
   * Revoke terminal pairing code
   *
   * @remarks
   * > ℹ️ **Test mode** > > This endpoint currently does not support test mode yet.
   *
   * Revoke a pairing code, preventing the onboarding of new point-of-sale terminals.
   *
   * Terminals that have already paired with this code are not affected.
   *
   * We keep a revoked pairing code for one month, then delete it. Once deleted, this endpoint
   * returns a 404.
   *
   * @returns The revoked terminal pairing code object.
   *
   * @throws {@link TerminalsApi.TerminalsRevokePairingCodeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminalsRevokePairingCode(
    request: TerminalsApi.TerminalsRevokePairingCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TerminalsApi.TerminalsRevokePairingCodeError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/terminals/pairing-codes/{pairingCodeId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.oAuth),
        pathParams: [{ name: "pairingCodeId", value: request.pairingCodeId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TerminalsApi.TerminalsRevokePairingCodeError,
      },
      options,
    );
  }
}

export namespace TerminalsApi {
  export type GetTerminalRequest = {
    /** Provide the ID of the related terminal. */
    terminalId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetTerminalError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetTerminalError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListTerminalsRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListTerminalsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListTerminalsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TerminalsGetPairingCodeRequest = {
    /** Provide the ID of the terminal pairing code. */
    pairingCodeId: string;
    /** Include additional information in the response. */
    include?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class TerminalsGetPairingCodeError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TerminalsGetPairingCodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TerminalsListPairingCodesRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * Used for setting the direction of the result set. Defaults to descending order, meaning the
     * results are ordered from newest to oldest.
     */
    sort?: Sorting;
    /**
     * The identifier referring to the [profile](get-profile) you wish to retrieve pairing codes
     * for.
     */
    profileId?: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class TerminalsListPairingCodesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TerminalsListPairingCodesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TerminalsRequestPairingCodeRequest = {
    /** Include additional information in the response. */
    include?: string | null;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2TerminalsPairingCodesRequest;
  };

  export class TerminalsRequestPairingCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TerminalsRequestPairingCodeError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TerminalsRevokePairingCodeRequest = {
    /** Provide the ID of the terminal pairing code. */
    pairingCodeId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class TerminalsRevokePairingCodeError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TerminalsRevokePairingCodeError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
