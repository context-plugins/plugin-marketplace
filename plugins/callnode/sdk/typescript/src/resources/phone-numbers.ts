import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1NumbersAvailableResponseInternalSchema,
  type ApiV1NumbersAvailableResponse,
} from "../models/api-v1-numbers-available-response.js";
import {
  apiV1NumbersRequestInternalSchema,
  type ApiV1NumbersRequest,
} from "../models/api-v1-numbers-request.js";
import {
  apiV1NumbersResponseInternalSchema,
  type ApiV1NumbersResponse,
} from "../models/api-v1-numbers-response.js";
import {
  apiV1NumbersResponse1InternalSchema,
  type ApiV1NumbersResponse1,
} from "../models/api-v1-numbers-response1.js";
import {
  apiV1NumbersResponse3InternalSchema,
  type ApiV1NumbersResponse3,
} from "../models/api-v1-numbers-response3.js";
import { errorSchema, type Error } from "../models/error.js";
import { prefixSchema, type Prefix } from "../models/prefix.js";
import {
  purchaseNumberRequestInternalSchema,
  type PurchaseNumberRequest,
} from "../models/purchase-number-request.js";
import {
  purchaseNumberResponseInternalSchema,
  type PurchaseNumberResponse,
} from "../models/purchase-number-response.js";
import { purchaseSource1Schema, type PurchaseSource1 } from "../models/purchase-source1.js";
import { Type3, type3Schema } from "../models/type3.js";
import type { Servers } from "../servers.js";

/**
 * Search inventory, purchase numbers, provision webhooks, and release numbers.
 */
export class PhoneNumbers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a number
   *
   * @returns The number and its webhook configuration.
   *
   * @throws {@link PhoneNumbers.GetNumberError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getNumber(
    request: PhoneNumbers.GetNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1NumbersResponse1, PhoneNumbers.GetNumberError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/numbers/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1NumbersResponse1InternalSchema },
        errorFactory: PhoneNumbers.GetNumberError,
      },
      options,
    );
  }

  /**
   * List your numbers
   *
   * @remarks
   * Your numbers, newest first. Every filter is applied server-side and they combine (AND).
   *
   * @returns Your numbers, newest first.
   *
   * @throws {@link PhoneNumbers.ListNumbersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listNumbers(
    request: PhoneNumbers.ListNumbersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1NumbersResponse, PhoneNumbers.ListNumbersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/numbers"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          {
            name: "purchaseSource",
            value: request.purchaseSource,
            schema: s.optional(s.lazy(() => purchaseSource1Schema)),
          },
          { name: "tag", value: request.tag, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1NumbersResponseInternalSchema },
        errorFactory: PhoneNumbers.ListNumbersError,
      },
      options,
    );
  }

  /**
   * Purchase a number
   *
   * @remarks
   * Purchases a number found via search and bills your wallet for the first month at your plan's
   * rate (no setup fee; an included Pro Bundle number costs nothing). Voice and messaging webhooks
   * can be provisioned in the same call, so the number is fully wired the moment it activates — no
   * dashboard visit needed.
   *
   * `type` is optional and derived from the number itself (8NN prefixes are toll-free). Purchasing
   * is idempotent on the number: re-purchasing a number you already own returns `200` with the
   * existing record instead of billing twice. A number you previously released is automatically
   * restored from the recycle bin rather than re-ordered.
   *
   * A2P messaging registration provisions asynchronously after purchase — the number's
   * `messaging.ready` flag flips to `true` when it can send SMS/MMS.
   *
   * @returns Number purchased, billed, and configured.
   *
   * @throws {@link PhoneNumbers.PurchaseNumberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchaseNumber(
    request: PhoneNumbers.PurchaseNumberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PurchaseNumberResponse, PhoneNumbers.PurchaseNumberError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/numbers"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: purchaseNumberRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: purchaseNumberResponseInternalSchema },
        errorFactory: PhoneNumbers.PurchaseNumberError,
      },
      options,
    );
  }

  /**
   * Release a number
   *
   * @remarks
   * Releases the number and stops its billing. Released numbers are parked in a recycle bin tied to
   * your account — re-purchasing the same number later restores it (with fresh billing) instead of
   * losing it forever.
   *
   * @returns Released. `restorable` tells you whether it can be re-purchased later.
   *
   * @throws {@link PhoneNumbers.ReleaseNumberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  releaseNumber(
    request: PhoneNumbers.ReleaseNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1NumbersResponse3, PhoneNumbers.ReleaseNumberError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/numbers/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1NumbersResponse3InternalSchema },
        errorFactory: PhoneNumbers.ReleaseNumberError,
      },
      options,
    );
  }

  /**
   * Search purchasable numbers
   *
   * @remarks
   * Searches live carrier inventory for numbers you can purchase right now. Local searches require
   * `areaCode`; toll-free searches accept an optional `prefix` (800–888) or a `vanity` word. The
   * `pricing` block reflects what **your** account would pay today — Pro Bundle discounts and
   * included-number slots are applied automatically.
   *
   * @returns Matching inventory plus your current pricing. An empty `numbers` array means no
   * inventory in that area — try another area code or prefix.
   *
   * @throws {@link PhoneNumbers.SearchAvailableNumbersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchAvailableNumbers(
    request: PhoneNumbers.SearchAvailableNumbersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1NumbersAvailableResponse, PhoneNumbers.SearchAvailableNumbersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/numbers/available"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(type3Schema, Type3.Local) },
          { name: "areaCode", value: request.areaCode, schema: s.optional(s.string()) },
          { name: "prefix", value: request.prefix, schema: s.optional(s.lazy(() => prefixSchema)) },
          { name: "vanity", value: request.vanity, schema: s.optional(s.string()) },
          { name: "quantity", value: request.quantity, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1NumbersAvailableResponseInternalSchema },
        errorFactory: PhoneNumbers.SearchAvailableNumbersError,
      },
      options,
    );
  }

  /**
   * Update a number's configuration
   *
   * @remarks
   * Provisions or updates the voice webhook (your AI agent endpoint), the messaging webhook, their
   * authentication, and the friendly name. Only the fields you send change; webhook secrets are
   * write-only and never echoed back (responses report `valueSet: true` instead).
   *
   * @returns The updated number.
   *
   * @throws {@link PhoneNumbers.UpdateNumberError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateNumber(
    request: PhoneNumbers.UpdateNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1NumbersResponse1, PhoneNumbers.UpdateNumberError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/numbers/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1NumbersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1NumbersResponse1InternalSchema },
        errorFactory: PhoneNumbers.UpdateNumberError,
      },
      options,
    );
  }
}

export namespace PhoneNumbers {
  export type GetNumberRequest = {
    /**
     * The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`).
     */
    id: string;
  };

  export class GetNumberError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetNumberError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListNumbersRequest = {
    /** Filter by status, e.g. `active`. */
    status?: string;
    type?: Type3;
    /** Numbers bought via the dashboard (`web`) or this API (`api`). */
    purchaseSource?: PurchaseSource1;
    /** Numbers carrying this exact tag (as stored; up to 24 characters). */
    tag?: string;
    /** Substring match on the number's digits, the friendly name (case-insensitive), or a tag. */
    q?: string;
  };

  export const listNumbersRequestSchema: Schema<ListNumbersRequest> = s.lazySchema(() =>
    s.object<ListNumbersRequest>({
      status: s.optional(s.string()),
      type: s.optional(s.lazy(() => type3Schema)),
      purchaseSource: s.optional(s.lazy(() => purchaseSource1Schema)),
      tag: s.optional(s.string().check(s.maxLength(24))),
      q: s.optional(s.string().check(s.maxLength(40))),
    }),
  );

  export class ListNumbersError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListNumbersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PurchaseNumberRequestParams = {
    body: PurchaseNumberRequest;
  };

  export class PurchaseNumberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchaseNumberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ReleaseNumberRequest = {
    /**
     * The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`).
     */
    id: string;
  };

  export class ReleaseNumberError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ReleaseNumberError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SearchAvailableNumbersRequest = {
    /** @default Type3.Local */
    type?: Type3;
    /** 3-digit area code. Required when `type` is `local`. */
    areaCode?: string;
    /** Toll-free prefix filter. 800 and 822 are usually exhausted. */
    prefix?: Prefix;
    /**
     * Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over `prefix`.
     */
    vanity?: string;
    /** How many candidates to return. @default 10 */
    quantity?: number;
  };

  export const searchAvailableNumbersRequestSchema: Schema<SearchAvailableNumbersRequest> = s.lazySchema(() =>
    s.object<SearchAvailableNumbersRequest>({
      type: s.defaulted(type3Schema, Type3.Local),
      areaCode: s.optional(s.string().check(s.pattern("^\\d{3}$"))),
      prefix: s.optional(s.lazy(() => prefixSchema)),
      vanity: s.optional(s.string().check(s.minLength(4), s.maxLength(7))),
      quantity: s.defaulted(s.int().check(s.gte(1), s.lte(25)), 10),
    }),
  );

  export class SearchAvailableNumbersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAvailableNumbersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateNumberRequest = {
    /**
     * The number's `id`, or the E.164 number itself (URL-encode the `+`, e.g. `%2B18285551234`).
     */
    id: string;
    body: ApiV1NumbersRequest;
  };

  export class UpdateNumberError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateNumberError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
