import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1SipaccountsAllowedIpsRequestSchema,
  type ApiV1SipaccountsAllowedIpsRequest,
} from "../models/api-v1-sipaccounts-allowed-ips-request.js";
import {
  apiV1SipaccountsAllowedIpsResponseSchema,
  type ApiV1SipaccountsAllowedIpsResponse,
} from "../models/api-v1-sipaccounts-allowed-ips-response.js";
import {
  apiV1SipaccountsAllowedIpsResponse1Schema,
  type ApiV1SipaccountsAllowedIpsResponse1,
} from "../models/api-v1-sipaccounts-allowed-ips-response1.js";
import {
  apiV1SipaccountsAllowedIps403Error1Schema,
  type ApiV1SipaccountsAllowedIps403Error1,
} from "../models/api-v1-sipaccounts-allowed-ips403-error1.js";
import {
  apiV1SipaccountsRequestSchema,
  type ApiV1SipaccountsRequest,
} from "../models/api-v1-sipaccounts-request.js";
import {
  apiV1SipaccountsRequest1Schema,
  type ApiV1SipaccountsRequest1,
} from "../models/api-v1-sipaccounts-request1.js";
import {
  apiV1SipaccountsResponseSchema,
  type ApiV1SipaccountsResponse,
} from "../models/api-v1-sipaccounts-response.js";
import {
  apiV1SipaccountsResponse2Schema,
  type ApiV1SipaccountsResponse2,
} from "../models/api-v1-sipaccounts-response2.js";
import {
  apiV1SipaccountsResponse4Schema,
  type ApiV1SipaccountsResponse4,
} from "../models/api-v1-sipaccounts-response4.js";
import {
  apiV1SipaccountsResponse5Schema,
  type ApiV1SipaccountsResponse5,
} from "../models/api-v1-sipaccounts-response5.js";
import {
  apiV1Sipaccounts403Error1Schema,
  type ApiV1Sipaccounts403Error1,
} from "../models/api-v1-sipaccounts403-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  apiV1SipaccountsResponse11Schema,
  type ApiV1SipaccountsResponse11,
} from "../models/unions/api-v1-sipaccounts-response11.js";
import type { Servers } from "../servers.js";

export class SipAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add allowed IP address
   *
   * @remarks
   * Add IP address to SIP account whitelist.
   *
   * @returns Successfully adds IP to whitelist
   *
   * @throws {@link SipAccounts.SipaccountsAllowedIpsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsAllowedIpsCreate(
    request: SipAccounts.SipaccountsAllowedIpsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsAllowedIpsResponse1, SipAccounts.SipaccountsAllowedIpsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "sipaccount_id", value: request.sipaccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SipaccountsAllowedIpsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsAllowedIpsResponse1Schema },
        errorFactory: SipAccounts.SipaccountsAllowedIpsCreateError,
      },
      options,
    );
  }

  /**
   * Remove allowed IP address
   *
   * @remarks
   * Remove IP address from SIP account whitelist.
   *
   * @returns Successfully removes IP from whitelist
   *
   * @throws {@link SipAccounts.SipaccountsAllowedIpsDestroyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsAllowedIpsDestroy(
    request: SipAccounts.SipaccountsAllowedIpsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SipAccounts.SipaccountsAllowedIpsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "sipaccount_id", value: request.sipaccountId, schema: s.string() }],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SipAccounts.SipaccountsAllowedIpsDestroyError,
      },
      options,
    );
  }

  /**
   * List allowed IP addresses
   *
   * @remarks
   * Retrieve list of IP addresses allowed to authenticate this SIP account.
   *
   * `allowed_ips` feeds sipaccounts_allowed_ips_destroy as `ip`.
   *
   * @returns Successfully returns list of allowed IP addresses
   *
   * @throws {@link SipAccounts.SipaccountsAllowedIpsIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsAllowedIpsIndex(
    request: SipAccounts.SipaccountsAllowedIpsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsAllowedIpsResponse, SipAccounts.SipaccountsAllowedIpsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "sipaccount_id", value: request.sipaccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsAllowedIpsResponseSchema },
        errorFactory: SipAccounts.SipaccountsAllowedIpsIndexError,
      },
      options,
    );
  }

  /**
   * Create SIP account
   *
   * @remarks
   * Create a new SIP account (trunk) for making/receiving calls.
   *
   * `sipaccount.id` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
   * sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and
   * sipaccounts_allowed_ips_destroy; each also takes `sipaccount.name` in its place.
   * `sipaccount.name` feeds call_price_show, calls_show and click2call_create as the SIP account to
   * price, filter by or ring.
   *
   * @returns Successfully creates SIP account and returns credentials
   *
   * @throws {@link SipAccounts.SipaccountsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsCreate(
    request: SipAccounts.SipaccountsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsResponse2, SipAccounts.SipaccountsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SipaccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsResponse2Schema },
        errorFactory: SipAccounts.SipaccountsCreateError,
      },
      options,
    );
  }

  /**
   * Delete SIP account
   *
   * @remarks
   * Delete a SIP account.
   *
   * @returns Successfully deletes SIP account
   *
   * @throws {@link SipAccounts.SipaccountsDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsDestroy(
    request: SipAccounts.SipaccountsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SipAccounts.SipaccountsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SipAccounts.SipaccountsDestroyError,
      },
      options,
    );
  }

  /**
   * List SIP accounts
   *
   * @remarks
   * Retrieve list of SIP accounts (trunks) configured for the authenticated user.
   *
   * **SIP Accounts** allow making/receiving calls through the platform using SIP protocol.
   *
   * **Returned Information:**
   * - Account credentials and settings
   * - Call routing configuration
   * - Usage limits and restrictions
   * - Allowed IP addresses (if configured)
   *
   * Technical accounts the platform manages for you — the Webphone account and each SDK token's
   * account (labelled `SDK Instance: `) — are listed too, but cannot be fetched by id, updated or
   * deleted through this API.
   *
   * `sipaccounts[].id` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
   * sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and
   * sipaccounts_allowed_ips_destroy; each also takes `sipaccounts[].name` in its place.
   * `sipaccounts[].name` feeds call_price_show, calls_show and click2call_create as the SIP account
   * to price, filter by or ring. Full record: sipaccounts_show.
   *
   * @returns Successfully returns list of SIP accounts with configuration details
   *
   * @throws {@link SipAccounts.SipaccountsIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsIndex(
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsResponse, SipAccounts.SipaccountsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsResponseSchema },
        errorFactory: SipAccounts.SipaccountsIndexError,
      },
      options,
    );
  }

  /**
   * Get SIP account details
   *
   * @remarks
   * Retrieve details of a specific SIP account.
   *
   * Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.
   *
   * @returns Successfully returns SIP account configuration and settings
   *
   * @throws {@link SipAccounts.SipaccountsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsShow(
    request: SipAccounts.SipaccountsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsResponse4, SipAccounts.SipaccountsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsResponse4Schema },
        errorFactory: SipAccounts.SipaccountsShowError,
      },
      options,
    );
  }

  /**
   * Update SIP account
   *
   * @remarks
   * Update SIP account settings.
   *
   * @returns Successfully updates SIP account settings
   *
   * @throws {@link SipAccounts.SipaccountsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sipaccountsUpdate(
    request: SipAccounts.SipaccountsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SipaccountsResponse5, SipAccounts.SipaccountsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/sipaccounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SipaccountsRequest1Schema },
      },
      {
        success: { kind: "json", schema: apiV1SipaccountsResponse5Schema },
        errorFactory: SipAccounts.SipaccountsUpdateError,
      },
      options,
    );
  }
}

export namespace SipAccounts {
  export type SipaccountsAllowedIpsCreateRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    sipaccountId: string;
    body: ApiV1SipaccountsAllowedIpsRequest;
  };

  export class SipaccountsAllowedIpsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SipaccountsAllowedIps403Error1", ApiV1SipaccountsAllowedIps403Error1>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsAllowedIpsCreateError> = [
      {
        on: 403,
        kind: "apiV1SipaccountsAllowedIps403Error1",
        decode: { kind: "json", schema: apiV1SipaccountsAllowedIps403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SipaccountsAllowedIpsDestroyRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    sipaccountId: string;
    /** IP address to remove, from sipaccounts_allowed_ips_index */
    ip: string;
  };

  export class SipaccountsAllowedIpsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SipaccountsAllowedIps403Error1", ApiV1SipaccountsAllowedIps403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsAllowedIpsDestroyError> = [
      {
        on: 403,
        kind: "apiV1SipaccountsAllowedIps403Error1",
        decode: { kind: "json", schema: apiV1SipaccountsAllowedIps403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SipaccountsAllowedIpsIndexRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    sipaccountId: string;
  };

  export class SipaccountsAllowedIpsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SipaccountsAllowedIps403Error1", ApiV1SipaccountsAllowedIps403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsAllowedIpsIndexError> = [
      {
        on: 403,
        kind: "apiV1SipaccountsAllowedIps403Error1",
        decode: { kind: "json", schema: apiV1SipaccountsAllowedIps403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SipaccountsCreateRequest = {
    body: ApiV1SipaccountsRequest;
  };

  export class SipaccountsCreateError extends ApiError {
    declare readonly payload: Declared<"apiV1SipaccountsResponse11", ApiV1SipaccountsResponse11> | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsCreateError> = [
      {
        on: 403,
        kind: "apiV1SipaccountsResponse11",
        decode: { kind: "json", schema: apiV1SipaccountsResponse11Schema },
      },
    ];
  }

  export type SipaccountsDestroyRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    id: string;
  };

  export class SipaccountsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Sipaccounts403Error1", ApiV1Sipaccounts403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsDestroyError> = [
      {
        on: 403,
        kind: "apiV1Sipaccounts403Error1",
        decode: { kind: "json", schema: apiV1Sipaccounts403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class SipaccountsIndexError extends ApiError {
    declare readonly payload: Declared<"apiV1SipaccountsResponse11", ApiV1SipaccountsResponse11> | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsIndexError> = [
      {
        on: 403,
        kind: "apiV1SipaccountsResponse11",
        decode: { kind: "json", schema: apiV1SipaccountsResponse11Schema },
      },
    ];
  }

  export type SipaccountsShowRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    id: string;
  };

  export class SipaccountsShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Sipaccounts403Error1", ApiV1Sipaccounts403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsShowError> = [
      {
        on: 403,
        kind: "apiV1Sipaccounts403Error1",
        decode: { kind: "json", schema: apiV1Sipaccounts403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SipaccountsUpdateRequest = {
    /**
     * SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
     * `01234`, which may start with `0`) or the numeric **id** (e.g. `73`). Both resolve the same
     * account.
     */
    id: string;
    body: ApiV1SipaccountsRequest1;
  };

  export class SipaccountsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Sipaccounts403Error1", ApiV1Sipaccounts403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SipaccountsUpdateError> = [
      {
        on: 403,
        kind: "apiV1Sipaccounts403Error1",
        decode: { kind: "json", schema: apiV1Sipaccounts403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
