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
import { mediumSchema, type Medium } from "../models/medium.js";
import { paymentLinkInternalSchema, type PaymentLink } from "../models/payment-link.js";
import {
  paymentLinksNotifyByResponseSchema,
  type PaymentLinksNotifyByResponse,
} from "../models/payment-links-notify-by-response.js";
import {
  paymentLinksRequestInternalSchema,
  type PaymentLinksRequest,
} from "../models/payment-links-request.js";
import {
  paymentLinksRequest1InternalSchema,
  type PaymentLinksRequest1,
} from "../models/payment-links-request1.js";
import {
  paymentLinksResponseInternalSchema,
  type PaymentLinksResponse,
} from "../models/payment-links-response.js";
import type { Servers } from "../servers.js";

/**
 * Payment Links are shareable URLs to collect payments without a website. Share via SMS, email, or
 * any channel. Supports partial payments, expiry, reminders, UPI-only mode, offers, and transfers
 * to linked accounts.
 */
export class PaymentLinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a payment link
   *
   * @remarks
   * Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid,
   * and already expired links cannot be cancelled.
   *
   * @returns Payment link cancelled. Status changes to 'cancelled'.
   *
   * @throws {@link PaymentLinks.CancelPaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPaymentLink(
    request: PaymentLinks.CancelPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinks.CancelPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_links/{id}/cancel"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinkInternalSchema },
        errorFactory: PaymentLinks.CancelPaymentLinkError,
      },
      options,
    );
  }

  /**
   * Create a payment link
   *
   * @remarks
   * Create a shareable payment link to collect payments via SMS and email. Supports standard links
   * (all payment methods) and UPI-only links (set upi_link=true). UPI links are not available in
   * test mode. Partial payments are not supported for UPI links. Links expire after 6 months by
   * default.
   *
   * @returns Payment link created.
   *
   * @throws {@link PaymentLinks.CreatePaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentLink(
    request: PaymentLinks.CreatePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinks.CreatePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_links"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentLinksRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentLinkInternalSchema },
        errorFactory: PaymentLinks.CreatePaymentLinkError,
      },
      options,
    );
  }

  /**
   * Fetch all payment links
   *
   * @remarks
   * Retrieve all payment links. Filter by payment_id or reference_id to narrow results.
   *
   * @returns List of payment links.
   *
   * @throws {@link PaymentLinks.FetchAllPaymentLinksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllPaymentLinks(
    request: PaymentLinks.FetchAllPaymentLinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaymentLinksResponse, PaymentLinks.FetchAllPaymentLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment_links"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "payment_id", value: request.paymentId, schema: s.optional(s.string()) },
          { name: "reference_id", value: request.referenceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinksResponseInternalSchema },
        errorFactory: PaymentLinks.FetchAllPaymentLinksError,
      },
      options,
    );
  }

  /**
   * Fetch payment link by ID
   *
   * @remarks
   * Retrieve full details of a specific payment link.
   *
   * @returns Payment link details.
   *
   * @throws {@link PaymentLinks.FetchPaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPaymentLink(
    request: PaymentLinks.FetchPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinks.FetchPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment_links/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinkInternalSchema },
        errorFactory: PaymentLinks.FetchPaymentLinkError,
      },
      options,
    );
  }

  /**
   * Send or resend payment link notification
   *
   * @remarks
   * Send or resend a payment link notification to the customer via SMS or email.
   *
   * @returns Notification sent.
   *
   * @throws {@link PaymentLinks.ResendPaymentLinkNotificationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resendPaymentLinkNotification(
    request: PaymentLinks.ResendPaymentLinkNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLinksNotifyByResponse, PaymentLinks.ResendPaymentLinkNotificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_links/{id}/notify_by/{medium}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "medium", value: request.medium, schema: mediumSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentLinksNotifyByResponseSchema },
        errorFactory: PaymentLinks.ResendPaymentLinkNotificationError,
      },
      options,
    );
  }

  /**
   * Update a payment link
   *
   * @remarks
   * Update an existing payment link. Updates are only allowed when the link is in 'created' or
   * 'partially_paid' status.
   *
   * @returns Updated payment link.
   *
   * @throws {@link PaymentLinks.UpdatePaymentLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePaymentLink(
    request: PaymentLinks.UpdatePaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentLink, PaymentLinks.UpdatePaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/payment_links/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentLinksRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: paymentLinkInternalSchema },
        errorFactory: PaymentLinks.UpdatePaymentLinkError,
      },
      options,
    );
  }
}

export namespace PaymentLinks {
  export type CancelPaymentLinkRequest = {
    /** Payment Link ID (plink_*). */
    id: string;
  };

  export class CancelPaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPaymentLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreatePaymentLinkRequest = {
    body: PaymentLinksRequest;
  };

  export class CreatePaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllPaymentLinksRequest = {
    /** Filter by associated payment ID. */
    paymentId?: string;
    /** Filter by your custom reference number. */
    referenceId?: string;
  };

  export class FetchAllPaymentLinksError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllPaymentLinksError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchPaymentLinkRequest = {
    /** Payment Link ID (plink_*). */
    id: string;
  };

  export class FetchPaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ResendPaymentLinkNotificationRequest = {
    /** Payment Link ID (plink_*). */
    id: string;
    /** Notification medium. */
    medium: Medium;
  };

  export class ResendPaymentLinkNotificationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResendPaymentLinkNotificationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdatePaymentLinkRequest = {
    /** Payment Link ID (plink_*). */
    id: string;
    body: PaymentLinksRequest1;
  };

  export class UpdatePaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePaymentLinkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
