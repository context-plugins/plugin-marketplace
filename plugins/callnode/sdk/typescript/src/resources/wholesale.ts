import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1WholesaleAreasResponseSchema,
  type ApiV1WholesaleAreasResponse,
} from "../models/api-v1-wholesale-areas-response.js";
import {
  apiV1WholesaleCountriesResponseSchema,
  type ApiV1WholesaleCountriesResponse,
} from "../models/api-v1-wholesale-countries-response.js";
import {
  apiV1WholesaleNumbersDeliveryRequestSchema,
  type ApiV1WholesaleNumbersDeliveryRequest,
} from "../models/api-v1-wholesale-numbers-delivery-request.js";
import {
  apiV1WholesaleNumbersDeliveryResponseInternalSchema,
  type ApiV1WholesaleNumbersDeliveryResponse,
} from "../models/api-v1-wholesale-numbers-delivery-response.js";
import {
  apiV1WholesaleNumbersRequestInternalSchema,
  type ApiV1WholesaleNumbersRequest,
} from "../models/api-v1-wholesale-numbers-request.js";
import {
  apiV1WholesaleNumbersResponseInternalSchema,
  type ApiV1WholesaleNumbersResponse,
} from "../models/api-v1-wholesale-numbers-response.js";
import {
  apiV1WholesaleStatesResponseSchema,
  type ApiV1WholesaleStatesResponse,
} from "../models/api-v1-wholesale-states-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Wholesale (SBC-as-a-Service) DID ordering — US and international numbers delivered straight to
 * your SIP endpoint. Requires wholesale to be active on your account and completed business
 * verification; every endpoint otherwise returns 403.
 *
 * **Outbound PSTN termination is SIP, not HTTP.** Where it is enabled on your account you send us
 * an INVITE on your trunk and we complete the call; there is no HTTP endpoint to call, so it is not
 * described below. The rules that matter — the caller ID you may present, what each refusal code
 * means, and how minutes are charged — are in the SIP trunking guide under "Wholesale outbound
 * termination". Whether it is enabled on your account, and at what rate, is shown on your SBC
 * Tenant page in the dashboard.
 */
export class Wholesale {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List areas (rate centres) with stock and your price
   *
   * @remarks
   * Areas with available stock and `estMonthlyUsd` — YOUR contract price per number in that area,
   * resolved server-side. There is no per-number search on wholesale inventory: you order from an
   * area and a number is allocated.
   *
   * The first fetch for a large country (the UK has 600+ rate centres) can take up to a minute;
   * results are cached server-side for ~10 minutes. Stock above zero does not guarantee an order
   * succeeds — on an order failure, pick a different area rather than retrying the same one.
   *
   * @returns Areas offering wholesale numbers.
   *
   * @throws {@link Wholesale.ListWholesaleAreasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWholesaleAreas(
    request: Wholesale.ListWholesaleAreasRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1WholesaleAreasResponse, Wholesale.ListWholesaleAreasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/wholesale/areas"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "countryId", value: request.countryId, schema: s.optional(s.string()) },
          { name: "stateId", value: request.stateId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WholesaleAreasResponseSchema },
        errorFactory: Wholesale.ListWholesaleAreasError,
      },
      options,
    );
  }

  /**
   * List wholesale countries
   *
   * @remarks
   * Countries where wholesale inventory exists — US and international.
   *
   * All `/api/v1/wholesale` endpoints are gated per request: wholesale must be ACTIVE on your
   * account (arranged with our team — raise a Wholesale Activation request from the dashboard) and
   * your business verification must be complete. Otherwise requests return `403
   * wholesale_not_activated` or `403 account_not_verified`.
   *
   * `countryId` values are opaque signed tokens with a short lifetime — fetch them per ordering
   * session and never persist them.
   *
   * @returns Countries with wholesale inventory.
   *
   * @throws {@link Wholesale.ListWholesaleCountriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWholesaleCountries(
    options?: RequestOptions,
  ): ApiPromise<ApiV1WholesaleCountriesResponse, Wholesale.ListWholesaleCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/wholesale/countries"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WholesaleCountriesResponseSchema },
        errorFactory: Wholesale.ListWholesaleCountriesError,
      },
      options,
    );
  }

  /**
   * List states/regions for a country
   *
   * @remarks
   * Regions for a country. Many countries have none — an empty list means go straight to areas with
   * just the `countryId`.
   *
   * @returns Regions (possibly empty).
   *
   * @throws {@link Wholesale.ListWholesaleStatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWholesaleStates(
    request: Wholesale.ListWholesaleStatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1WholesaleStatesResponse, Wholesale.ListWholesaleStatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/wholesale/states"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [{ name: "countryId", value: request.countryId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1WholesaleStatesResponseSchema },
        errorFactory: Wholesale.ListWholesaleStatesError,
      },
      options,
    );
  }

  /**
   * Order a wholesale number
   *
   * @remarks
   * Allocates a number from an area and starts delivering its inbound calls to your SIP endpoint.
   * Prepaid: the first month at your contract rate is charged from your wallet at allocation, then
   * monthly; inbound minutes are charged per call as they complete.
   *
   * `deliverTo` accepts three forms:
   * - a bare host (`pbx.example.com` or a public IP) — we deliver as `sip:@host`
   * - a sip: URI containing `{number}` — replaced with the allocated number
   * - a full `sip:` URI, used verbatim
   *
   * Allocation can take up to ~40 seconds. On `order_failed` for a specific area, order from a
   * DIFFERENT area — retrying the same one will not help.
   *
   * @returns Number allocated, delivering, and charged.
   *
   * @throws {@link Wholesale.OrderWholesaleNumberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  orderWholesaleNumber(
    request: Wholesale.OrderWholesaleNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WholesaleNumbersResponse, Wholesale.OrderWholesaleNumberError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/wholesale/numbers"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Idempotency-Key", value: request.xIdempotencyKey, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: apiV1WholesaleNumbersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1WholesaleNumbersResponseInternalSchema },
        errorFactory: Wholesale.OrderWholesaleNumberError,
      },
      options,
    );
  }

  /**
   * Repoint where a number delivers
   *
   * @remarks
   * Changes the delivery destination of an existing wholesale number — same `deliverTo` forms as
   * ordering, resolved against the known number. Clearing delivery is not allowed: a wholesale
   * number with no destination silently drops every call.
   *
   * @returns Delivery updated.
   *
   * @throws {@link Wholesale.UpdateWholesaleDeliveryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWholesaleDelivery(
    request: Wholesale.UpdateWholesaleDeliveryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1WholesaleNumbersDeliveryResponse, Wholesale.UpdateWholesaleDeliveryError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/wholesale/numbers/{id}/delivery"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1WholesaleNumbersDeliveryRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1WholesaleNumbersDeliveryResponseInternalSchema },
        errorFactory: Wholesale.UpdateWholesaleDeliveryError,
      },
      options,
    );
  }
}

export namespace Wholesale {
  export type ListWholesaleAreasRequest = {
    countryId?: string;
    stateId?: string;
  };

  export class ListWholesaleAreasError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWholesaleAreasError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export class ListWholesaleCountriesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWholesaleCountriesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ListWholesaleStatesRequest = {
    /** From `/wholesale/countries`. Defaults to the US when omitted. */
    countryId?: string;
  };

  export class ListWholesaleStatesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListWholesaleStatesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type OrderWholesaleNumberRequest = {
    /** A UUID. Replaying the same key returns the original result rather than acting twice. */
    xIdempotencyKey?: string;
    body: ApiV1WholesaleNumbersRequest;
  };

  export class OrderWholesaleNumberError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error402", undefined>
      | Declared<"error403", undefined>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OrderWholesaleNumberError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export type UpdateWholesaleDeliveryRequest = {
    /** The number's id (from the order response or your numbers list). */
    id: string;
    body: ApiV1WholesaleNumbersDeliveryRequest;
  };

  export class UpdateWholesaleDeliveryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWholesaleDeliveryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
