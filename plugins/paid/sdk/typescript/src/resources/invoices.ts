import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { invoiceLinesResponseSchema, type InvoiceLinesResponse } from "../models/invoice-lines-response.js";
import { invoiceListResponseSchema, type InvoiceListResponse } from "../models/invoice-list-response.js";
import { invoiceSchema, type Invoice } from "../models/invoice.js";
import {
  invoicesGetParametersPaymentStatusSchema,
  type InvoicesGetParametersPaymentStatus,
} from "../models/invoices-get-parameters-payment-status.js";
import {
  invoicesGetParametersStatusSchema,
  type InvoicesGetParametersStatus,
} from "../models/invoices-get-parameters-status.js";
import { updateInvoiceRequestSchema, type UpdateInvoiceRequest } from "../models/update-invoice-request.js";
import type { Servers } from "../servers.js";

export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get invoice
   *
   * @remarks
   * Get an invoice by ID
   *
   * @returns 200
   *
   * @throws {@link Invoices.GetInvoiceByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoiceById(
    request: Invoices.GetInvoiceByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.GetInvoiceByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/invoices/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.GetInvoiceByIdError,
      },
      options,
    );
  }

  /**
   * Get invoice lines
   *
   * @remarks
   * Get the invoice lines for an invoice by ID
   *
   * @returns 200
   *
   * @throws {@link Invoices.GetInvoiceLinesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoiceLines(
    request: Invoices.GetInvoiceLinesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceLinesResponse, Invoices.GetInvoiceLinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/invoices/{id}/lines"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceLinesResponseSchema },
        errorFactory: Invoices.GetInvoiceLinesError,
      },
      options,
    );
  }

  /**
   * List invoices
   *
   * @remarks
   * Get a list of invoices for the organization
   *
   * @returns 200
   *
   * @throws {@link Invoices.ListInvoicesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoices(
    request: Invoices.ListInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceListResponse, Invoices.ListInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/invoices/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "customerId", value: request.customerId, schema: s.optional(s.string()) },
          { name: "externalCustomerId", value: request.externalCustomerId, schema: s.optional(s.string()) },
          { name: "orderId", value: request.orderId, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => invoicesGetParametersStatusSchema)),
          },
          {
            name: "paymentStatus",
            value: request.paymentStatus,
            schema: s.optional(s.lazy(() => invoicesGetParametersPaymentStatusSchema)),
          },
          { name: "issueDateFrom", value: request.issueDateFrom, schema: s.optional(s.string()) },
          { name: "issueDateTo", value: request.issueDateTo, schema: s.optional(s.string()) },
          { name: "dueDateFrom", value: request.dueDateFrom, schema: s.optional(s.string()) },
          { name: "dueDateTo", value: request.dueDateTo, schema: s.optional(s.string()) },
          { name: "displayNumber", value: request.displayNumber, schema: s.optional(s.string()) },
          {
            name: "purchaseOrderReference",
            value: request.purchaseOrderReference,
            schema: s.optional(s.string()),
          },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceListResponseSchema },
        errorFactory: Invoices.ListInvoicesError,
      },
      options,
    );
  }

  /**
   * Update invoice
   *
   * @remarks
   * Update an invoice by ID
   *
   * @returns 200
   *
   * @throws {@link Invoices.UpdateInvoiceByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInvoiceById(
    request: Invoices.UpdateInvoiceByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Invoice, Invoices.UpdateInvoiceByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReferenceAnalyticsExperimentalApi("/invoices/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateInvoiceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: invoiceSchema },
        errorFactory: Invoices.UpdateInvoiceByIdError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type GetInvoiceByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetInvoiceByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoiceByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetInvoiceLinesRequest = {
    id: string;
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetInvoiceLinesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoiceLinesError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListInvoicesRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** Filter by customer ID. */
    customerId?: string;
    /** Filter by customer external ID. */
    externalCustomerId?: string;
    /** Filter by the order this invoice was generated from. */
    orderId?: string;
    /** Filter by invoice status. */
    status?: InvoicesGetParametersStatus;
    /** Filter by payment status. */
    paymentStatus?: InvoicesGetParametersPaymentStatus;
    /**
     * Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or
     * date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an
     * explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when
     * precision matters.
     */
    issueDateFrom?: string;
    /**
     * Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or
     * date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an
     * explicit timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when
     * precision matters.
     */
    issueDateTo?: string;
    /**
     * Only invoices whose due date is on or after this date. Invoices without a due date are not
     * matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are
     * treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one
     * (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
     */
    dueDateFrom?: string;
    /**
     * Only invoices whose due date is on or before this date. Invoices without a due date are not
     * matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are
     * treated as UTC; date-times without an explicit timezone offset are ambiguous, so include one
     * (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
     */
    dueDateTo?: string;
    /** Filter by the invoice number shown on the invoice, whether draft or posted (exact match). */
    displayNumber?: string;
    /** Filter by purchase order reference (exact match, whitespace-sensitive). */
    purchaseOrderReference?: string;
    /** Filter by invoice currency code (case-insensitive, e.g. USD). */
    currency?: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListInvoicesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoicesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateInvoiceByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateInvoiceRequest;
  };

  export class UpdateInvoiceByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInvoiceByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
