import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { invoiceInternalSchema, type Invoice } from "../models/invoice.js";
import {
  invoicesNotifyByResponseSchema,
  type InvoicesNotifyByResponse,
} from "../models/invoices-notify-by-response.js";
import { invoicesRequestInternalSchema, type InvoicesRequest } from "../models/invoices-request.js";
import { invoicesRequest1InternalSchema, type InvoicesRequest1 } from "../models/invoices-request1.js";
import { invoicesResponseInternalSchema, type InvoicesResponse } from "../models/invoices-response.js";
import { mediumSchema, type Medium } from "../models/medium.js";
import { type3Schema, type Type3 } from "../models/type3.js";
import type { Servers } from "../servers.js";

/**
 * Invoices and payment pages for one-time or partial-payment collection. Create in draft, issue to
 * the customer, and track payment status. Cannot be used for GST invoices (use the Dashboard for
 * those). Maximum 50 line items per invoice.
 */
export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel an invoice
   *
   * @remarks
   * Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.
   *
   * @returns Invoice cancelled.
   *
   * @throws {@link Invoices.CancelInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelInvoice(
    request: Invoices.CancelInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.CancelInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invoices/{id}/cancel"),
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
        success: { kind: "json", schema: invoiceInternalSchema },
        errorFactory: Invoices.CancelInvoiceError,
      },
      options,
    );
  }

  /**
   * Create an invoice
   *
   * @remarks
   * Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a
   * simple payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to
   * send it to the customer. Cannot be used to create GST invoices (use the Dashboard for those).
   * Maximum 50 line items per invoice.
   *
   * @returns Invoice created in draft state.
   *
   * @throws {@link Invoices.CreateInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInvoice(
    request: Invoices.CreateInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.CreateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invoices"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: invoicesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: invoiceInternalSchema },
        errorFactory: Invoices.CreateInvoiceError,
      },
      options,
    );
  }

  /**
   * Delete a draft invoice
   *
   * @remarks
   * Permanently delete a draft invoice. Only invoices in draft status can be deleted.
   *
   * @returns Invoice deleted.
   *
   * @throws {@link Invoices.DeleteInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInvoice(
    request: Invoices.DeleteInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Invoices.DeleteInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/invoices/{id}"),
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
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Invoices.DeleteInvoiceError,
      },
      options,
    );
  }

  /**
   * Fetch an invoice
   *
   * @remarks
   * Get full details of a specific invoice including status, line items, and payment information.
   *
   * @returns Invoice details.
   *
   * @throws {@link Invoices.FetchInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInvoice(
    request: Invoices.FetchInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.FetchInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/invoices/{id}"),
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
        success: { kind: "json", schema: invoiceInternalSchema },
        errorFactory: Invoices.FetchInvoiceError,
      },
      options,
    );
  }

  /**
   * Issue an invoice
   *
   * @remarks
   * Transition a draft invoice to issued status, sending a notification to the customer with the
   * payment link. Once issued, line items cannot be changed.
   *
   * @returns Invoice issued. short_url is now active.
   *
   * @throws {@link Invoices.IssueInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  issueInvoice(
    request: Invoices.IssueInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.IssueInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invoices/{id}/issue"),
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
        success: { kind: "json", schema: invoiceInternalSchema },
        errorFactory: Invoices.IssueInvoiceError,
      },
      options,
    );
  }

  /**
   * List all invoices
   *
   * @remarks
   * Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription.
   * Returns up to 100 per call.
   *
   * @returns Collection of invoices.
   *
   * @throws {@link Invoices.ListInvoicesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoices(
    request: Invoices.ListInvoicesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<InvoicesResponse, Invoices.ListInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/invoices"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type3Schema)) },
          { name: "payment_id", value: request.paymentId, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
          { name: "subscription_id", value: request.subscriptionId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoicesResponseInternalSchema },
        errorFactory: Invoices.ListInvoicesError,
      },
      options,
    );
  }

  /**
   * Send invoice notification
   *
   * @remarks
   * Send or resend the invoice payment link to the customer via SMS or email.
   *
   * @returns Notification sent.
   *
   * @throws {@link Invoices.SendInvoiceNotificationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendInvoiceNotification(
    request: Invoices.SendInvoiceNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoicesNotifyByResponse, Invoices.SendInvoiceNotificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/invoices/{id}/notify_by/{medium}"),
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
        success: { kind: "json", schema: invoicesNotifyByResponseSchema },
        errorFactory: Invoices.SendInvoiceNotificationError,
      },
      options,
    );
  }

  /**
   * Update an invoice
   *
   * @remarks
   * Update invoice fields. Updatable fields depend on current status: draft=all fields;
   * issued=partial_payment, receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes
   * only.
   *
   * @returns Updated invoice.
   *
   * @throws {@link Invoices.UpdateInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInvoice(
    request: Invoices.UpdateInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.UpdateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/invoices/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: invoicesRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: invoiceInternalSchema },
        errorFactory: Invoices.UpdateInvoiceError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type CancelInvoiceRequest = {
    /** Invoice ID (inv_*). */
    id: string;
  };

  export class CancelInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelInvoiceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateInvoiceRequest = {
    body: InvoicesRequest;
  };

  export class CreateInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInvoiceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteInvoiceRequest = {
    /** Invoice ID (inv_*). */
    id: string;
  };

  export class DeleteInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInvoiceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchInvoiceRequest = {
    /** Invoice ID (inv_*). */
    id: string;
  };

  export class FetchInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchInvoiceError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IssueInvoiceRequest = {
    /** Invoice ID (inv_*). */
    id: string;
  };

  export class IssueInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<IssueInvoiceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListInvoicesRequest = {
    /** Filter by invoice type. */
    type?: Type3;
    /** Filter invoices by the payment ID used to pay them. */
    paymentId?: string;
    /** Filter by customer ID (cust_*). */
    customerId?: string;
    /** Fetch all invoices generated for a subscription (sub_*). */
    subscriptionId?: string;
    /** Unix timestamp (seconds). Fetch records created on or after this time. */
    from?: number;
    /** Unix timestamp (seconds). Fetch records created on or before this time. */
    to?: number;
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
  };

  export const listInvoicesRequestSchema: Schema<ListInvoicesRequest> = s.lazySchema(() =>
    s.object<ListInvoicesRequest>({
      type: s.optional(s.lazy(() => type3Schema)),
      paymentId: s.optional(s.string()),
      customerId: s.optional(s.string()),
      subscriptionId: s.optional(s.string()),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class ListInvoicesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoicesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SendInvoiceNotificationRequest = {
    /** Invoice ID (inv_*). */
    id: string;
    /** Notification channel. */
    medium: Medium;
  };

  export class SendInvoiceNotificationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendInvoiceNotificationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateInvoiceRequest = {
    /** Invoice ID (inv_*). */
    id: string;
    body: InvoicesRequest1;
  };

  export class UpdateInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInvoiceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
