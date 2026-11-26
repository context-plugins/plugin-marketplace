import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  invoiceCreateRequestDtoInternalSchema,
  type InvoiceCreateRequestDto,
} from "../models/invoice-create-request-dto.js";
import {
  invoicePaymentLinkRequestDtoInternalSchema,
  invoicePaymentLinkRequestDtoSchema,
  type InvoicePaymentLinkRequestDto,
} from "../models/invoice-payment-link-request-dto.js";
import {
  invoicePaymentLinkResponseDtoSchema,
  type InvoicePaymentLinkResponseDto,
} from "../models/invoice-payment-link-response-dto.js";
import {
  invoiceReplaceRequestDtoInternalSchema,
  invoiceReplaceRequestDtoSchema,
  type InvoiceReplaceRequestDto,
} from "../models/invoice-replace-request-dto.js";
import { invoiceResponseDtoSchema, type InvoiceResponseDto } from "../models/invoice-response-dto.js";
import {
  invoiceUpdateRequestDtoInternalSchema,
  invoiceUpdateRequestDtoSchema,
  type InvoiceUpdateRequestDto,
} from "../models/invoice-update-request-dto.js";
import {
  listInvoiceResponseDtoSchema,
  type ListInvoiceResponseDto,
} from "../models/list-invoice-response-dto.js";
import {
  recordInvoiceRequestDtoInternalSchema,
  type RecordInvoiceRequestDto,
} from "../models/record-invoice-request-dto.js";
import {
  recordInvoiceResponseDtoSchema,
  type RecordInvoiceResponseDto,
} from "../models/record-invoice-response-dto.js";
import {
  sendInvoiceRequestDtoSchema,
  type SendInvoiceRequestDto,
} from "../models/send-invoice-request-dto.js";
import type { Servers } from "../servers.js";

export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive an invoice
   *
   * @remarks
   * Archive an existing invoice. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived invoice with `POST /v3/invoices/{invoiceId}/restore`. There is no
   * change when you archive an archived invoice.
   *
   * @returns Archive an invoice response
   *
   * @throws {@link Invoices.ArchiveInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveInvoice(
    request: Invoices.ArchiveInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.ArchiveInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.ArchiveInvoiceError,
      },
      options,
    );
  }

  /**
   * Create an invoice
   *
   * @remarks
   * Create a new invoice.
   *
   * See Invoices in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create an invoice response
   *
   * @throws {@link Invoices.CreateInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInvoice(
    request: Invoices.CreateInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.CreateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: invoiceCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.CreateInvoiceError,
      },
      options,
    );
  }

  /**
   * Get invoice details
   *
   * @remarks
   * Get details about an existing invoice.
   *
   * @returns Get invoice details response
   *
   * @throws {@link Invoices.GetInvoiceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvoice(
    request: Invoices.GetInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.GetInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.GetInvoiceError,
      },
      options,
    );
  }

  /**
   * Get invoice payment link
   *
   * @remarks
   * Get an invoice payment link. In the response, BILL sends you a payment link based on the
   * provided invoice and customer information.
   *
   * You can send the invoice payment link to your customer for getting paid by the customer. With
   * this link, the customer can complete the invoice payment without the need to set up a BILL
   * account.
   *
   * When a customer payment is made with the invoice payment link, BILL sends a payment receipt to
   * the provided email address.
   *
   * **Note**: You get valid invoice payment links only for customers that are NOT connected with
   * your organization in the BILL network.
   *
   * See Invoices in the Guides section for more information, sample requests, and responses.
   *
   * @returns Get an invoice payment link response
   *
   * @throws {@link Invoices.GetPaymentLinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentLink(
    request: Invoices.GetPaymentLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoicePaymentLinkResponseDto, Invoices.GetPaymentLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}/payment-link"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: invoicePaymentLinkRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: invoicePaymentLinkResponseDtoSchema },
        errorFactory: Invoices.GetPaymentLinkError,
      },
      options,
    );
  }

  /**
   * Get list of invoices
   *
   * @remarks
   * Get a list of invoice objects. By default, you get 20 results on one page of results. Set `max`
   * in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of invoices response
   *
   * @throws {@link Invoices.ListInvoicesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoices(
    request: Invoices.ListInvoicesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListInvoiceResponseDto, Invoices.ListInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/invoices"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInvoiceResponseDtoSchema },
        errorFactory: Invoices.ListInvoicesError,
      },
      options,
    );
  }

  /**
   * Record AR payment
   *
   * @remarks
   * Record an offline AR payment received from a customer.
   *
   * An offline payment is a payment that you receive outside the BILL system. BILL simply applies
   * the recorded payment amount to one or more invoices for the customer. Any recorded unapplied
   * amount is an overpayment and is available as a customer credit in the BILL system.
   *
   * See Recording an AR payment in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Record AR payment response
   *
   * @throws {@link Invoices.RecordInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordInvoice(
    request: Invoices.RecordInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordInvoiceResponseDto, Invoices.RecordInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices/record-payment"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recordInvoiceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recordInvoiceResponseDtoSchema },
        errorFactory: Invoices.RecordInvoiceError,
      },
      options,
    );
  }

  /**
   * Replace an invoice
   *
   * @remarks
   * Update the number of line items in an invoice. You can also update other invoice details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in an
   * invoice. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the invoice.
   * * When you omit an existing line item `id`, the line item is removed from the invoice.
   *
   * @returns Replace an invoice response
   *
   * @throws {@link Invoices.ReplaceInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceInvoice(
    request: Invoices.ReplaceInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.ReplaceInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: invoiceReplaceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.ReplaceInvoiceError,
      },
      options,
    );
  }

  /**
   * Restore an archived invoice
   *
   * @remarks
   * Restore an archived invoice. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored invoices. There is no change when you
   * restore a restored invoice.
   *
   * @returns Restore an archived invoice response
   *
   * @throws {@link Invoices.RestoreInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreInvoice(
    request: Invoices.RestoreInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.RestoreInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.RestoreInvoiceError,
      },
      options,
    );
  }

  /**
   * Send an invoice
   *
   * @remarks
   * Send an invoice to a customer email address. You can send the invoice to multiple email
   * addresses.
   *
   * See Invoices in the Guides section for more information, sample requests, and responses.
   *
   * @returns Send an invoice response
   *
   * @throws {@link Invoices.SendInvoiceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sendInvoice(
    request: Invoices.SendInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Invoices.SendInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}/email"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: sendInvoiceRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Invoices.SendInvoiceError,
      },
      options,
    );
  }

  /**
   * Update an invoice
   *
   * @remarks
   * Update details about an invoice line item. You can also update other invoice details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and
   * `description`. The invoice line item `id` does not change with a PATCH operation.
   *
   * @returns Update an invoice response
   *
   * @throws {@link Invoices.UpdateInvoiceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInvoice(
    request: Invoices.UpdateInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<InvoiceResponseDto, Invoices.UpdateInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/invoices/{invoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: invoiceUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: invoiceResponseDtoSchema },
        errorFactory: Invoices.UpdateInvoiceError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type ArchiveInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveInvoiceRequestSchema: Schema<ArchiveInvoiceRequest> = s.lazySchema(() =>
    s.object<ArchiveInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateInvoiceRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: InvoiceCreateRequestDto;
  };

  export class CreateInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getInvoiceRequestSchema: Schema<GetInvoiceRequest> = s.lazySchema(() =>
    s.object<GetInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetPaymentLinkRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: InvoicePaymentLinkRequestDto;
  };

  export const getPaymentLinkRequestSchema: Schema<GetPaymentLinkRequest> = s.lazySchema(() =>
    s.object<GetPaymentLinkRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: invoicePaymentLinkRequestDtoSchema,
    }),
  );

  export class GetPaymentLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentLinkError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListInvoicesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listInvoicesRequestSchema: Schema<ListInvoicesRequest> = s.lazySchema(() =>
    s.object<ListInvoicesRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListInvoicesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoicesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RecordInvoiceRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: RecordInvoiceRequestDto;
  };

  export class RecordInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecordInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ReplaceInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: InvoiceReplaceRequestDto;
  };

  export const replaceInvoiceRequestSchema: Schema<ReplaceInvoiceRequest> = s.lazySchema(() =>
    s.object<ReplaceInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: invoiceReplaceRequestDtoSchema,
    }),
  );

  export class ReplaceInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreInvoiceRequestSchema: Schema<RestoreInvoiceRequest> = s.lazySchema(() =>
    s.object<RestoreInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type SendInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: SendInvoiceRequestDto;
  };

  export const sendInvoiceRequestSchema: Schema<SendInvoiceRequest> = s.lazySchema(() =>
    s.object<SendInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: sendInvoiceRequestDtoSchema,
    }),
  );

  export class SendInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<SendInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateInvoiceRequest = {
    invoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: InvoiceUpdateRequestDto;
  };

  export const updateInvoiceRequestSchema: Schema<UpdateInvoiceRequest> = s.lazySchema(() =>
    s.object<UpdateInvoiceRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: invoiceUpdateRequestDtoSchema,
    }),
  );

  export class UpdateInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInvoiceError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
