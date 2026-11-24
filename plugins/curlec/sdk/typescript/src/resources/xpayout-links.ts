import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { payoutLinkSchema, type PayoutLink } from "../models/payout-link.js";
import { payoutLinksRequestSchema, type PayoutLinksRequest } from "../models/payout-links-request.js";
import { payoutLinksResponseSchema, type PayoutLinksResponse } from "../models/payout-links-response.js";
import type { Servers } from "../servers.js";

/**
 * Payout links for recipients without saved fund accounts
 */
export class XPayoutLinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a payout link
   *
   * @remarks
   * Cancel a payout link that is in `issued` or `pending` state.
   *
   * @returns Payout link cancelled
   *
   * @throws {@link XPayoutLinks.CancelPayoutLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPayoutLink(
    request: XPayoutLinks.CancelPayoutLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutLink, XPayoutLinks.CancelPayoutLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payout-links/{payout_link_id}/cancel"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_link_id", value: request.payoutLinkId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutLinkSchema },
        errorFactory: XPayoutLinks.CancelPayoutLinkError,
      },
      options,
    );
  }

  /**
   * Create a payout link
   *
   * @remarks
   * Send a payout link to a contact when fund account details are unavailable. expire_by must be at
   * least 15 minutes in the future.
   *
   * @returns Payout link created
   *
   * @throws {@link XPayoutLinks.CreatePayoutLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayoutLink(
    request: XPayoutLinks.CreatePayoutLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutLink, XPayoutLinks.CreatePayoutLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payout-links"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: payoutLinksRequestSchema },
      },
      {
        success: { kind: "json", schema: payoutLinkSchema },
        errorFactory: XPayoutLinks.CreatePayoutLinkError,
      },
      options,
    );
  }

  /**
   * Fetch a payout link
   *
   * @remarks
   * Fetch details of a specific payout link by its ID.
   *
   * @returns Payout link details
   *
   * @throws {@link XPayoutLinks.FetchPayoutLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPayoutLink(
    request: XPayoutLinks.FetchPayoutLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutLink, XPayoutLinks.FetchPayoutLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payout-links/{payout_link_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "payout_link_id", value: request.payoutLinkId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutLinkSchema },
        errorFactory: XPayoutLinks.FetchPayoutLinkError,
      },
      options,
    );
  }

  /**
   * List payout links
   *
   * @remarks
   * List all payout links. Filter by contact ID, status, or date range.
   *
   * @returns List of payout links
   *
   * @throws {@link XPayoutLinks.ListPayoutLinksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayoutLinks(
    request: XPayoutLinks.ListPayoutLinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PayoutLinksResponse, XPayoutLinks.ListPayoutLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payout-links"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "contact_id", value: request.contactId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutLinksResponseSchema },
        errorFactory: XPayoutLinks.ListPayoutLinksError,
      },
      options,
    );
  }
}

export namespace XPayoutLinks {
  export type CancelPayoutLinkRequest = {
    /** Unique identifier of the payout link to cancel. */
    payoutLinkId: string;
  };

  export class CancelPayoutLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPayoutLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreatePayoutLinkRequest = {
    body: PayoutLinksRequest;
  };

  export class CreatePayoutLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePayoutLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPayoutLinkRequest = {
    /** Unique identifier of the payout link (e.g. `poutlk_00000000000001`). */
    payoutLinkId: string;
  };

  export class FetchPayoutLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPayoutLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListPayoutLinksRequest = {
    /** Filter payout links by the contact ID of the recipient. */
    contactId?: string;
    /** Unix timestamp. Only payout links created from this timestamp onwards are returned. */
    from?: number;
    /** Unix timestamp. Only payout links created before this timestamp are returned. */
    to?: number;
    /** Number of payout links to return. Default: 10. @default 10 */
    count?: number;
    /** Number of payout links to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export class ListPayoutLinksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPayoutLinksError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
