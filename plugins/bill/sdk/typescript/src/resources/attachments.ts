import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  attachmentResponseDtoSchema,
  type AttachmentResponseDto,
} from "../models/attachment-response-dto.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  listResponseDtoAttachmentResponseDtoSchema,
  type ListResponseDtoAttachmentResponseDto,
} from "../models/list-response-dto-attachment-response-dto.js";
import { statusDtoSchema, type StatusDto } from "../models/status-dto.js";
import type { Servers } from "../servers.js";

export class Attachments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Upload customer attachment
   *
   * @remarks
   * Upload an attachment for an existing customer. The file size limit is 6 MB.
   *
   * **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload
   * process.
   *
   * See Documents and attachments in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Upload customer attachment response
   *
   * @throws {@link Attachments.CreateCustomerAttachmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerAttachment(
    request: Attachments.CreateCustomerAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentResponseDto, Attachments.CreateCustomerAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/attachments/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: attachmentResponseDtoSchema },
        errorFactory: Attachments.CreateCustomerAttachmentError,
      },
      options,
    );
  }

  /**
   * Upload invoice attachment
   *
   * @remarks
   * Upload an attachment for an existing invoice. The file size limit is 6 MB.
   *
   * **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload
   * process.
   *
   * See Documents and attachments in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Upload invoice attachment response
   *
   * @throws {@link Attachments.CreateInvoiceAttachmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInvoiceAttachment(
    request: Attachments.CreateInvoiceAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentResponseDto, Attachments.CreateInvoiceAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/attachments/invoices/{invoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          {
            name: "replaceInvoicePdf",
            value: request.replaceInvoicePdf,
            schema: s.optionalNullable(s.boolean()),
          },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: attachmentResponseDtoSchema },
        errorFactory: Attachments.CreateInvoiceAttachmentError,
      },
      options,
    );
  }

  /**
   * Upload vendor attachment
   *
   * @remarks
   * Upload an attachment for an existing vendor. The file size limit is 6 MB.
   *
   * **Note**: When you upload an attachment, it takes a few minutes for BILL to complete the upload
   * process.
   *
   * See Documents and attachments in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Upload vendor attachment response
   *
   * @throws {@link Attachments.CreateVendorAttachmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendorAttachment(
    request: Attachments.CreateVendorAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentResponseDto, Attachments.CreateVendorAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/attachments/vendors/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: attachmentResponseDtoSchema },
        errorFactory: Attachments.CreateVendorAttachmentError,
      },
      options,
    );
  }

  /**
   * Delete an attachment
   *
   * @remarks
   * Delete the existing attachment. A deleted attachment cannot be restored. The deleted attachment
   * is not available in the list of attachments.
   *
   * @returns Delete an attachment response
   *
   * @throws {@link Attachments.DeleteAttachmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAttachment(
    request: Attachments.DeleteAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusDto, Attachments.DeleteAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [{ name: "attachmentId", value: request.attachmentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: Attachments.DeleteAttachmentError,
      },
      options,
    );
  }

  /**
   * Get attachment details
   *
   * @remarks
   * Get details about an attachment.
   *
   * From the response, use `downloadLink` in a GET request to download the attachment.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
   * ```
   *
   * @returns Get attachment details response
   *
   * @throws {@link Attachments.GetAttachmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAttachment(
    request: Attachments.GetAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<AttachmentResponseDto, Attachments.GetAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/attachments/{attachmentId}"),
        auth: noneAuth,
        pathParams: [{ name: "attachmentId", value: request.attachmentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentResponseDtoSchema },
        errorFactory: Attachments.GetAttachmentError,
      },
      options,
    );
  }

  /**
   * Get list of customer attachments
   *
   * @remarks
   * Get a list of attachments associated with a customer.
   *
   * From the response, use `downloadLink` in a GET request to download the attachment.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
   * ```
   *
   * @returns Get list of customer attachments response
   *
   * @throws {@link Attachments.ListCustomerAttachmentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerAttachments(
    request: Attachments.ListCustomerAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListCustomerAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/attachments/customers/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoAttachmentResponseDtoSchema },
        errorFactory: Attachments.ListCustomerAttachmentsError,
      },
      options,
    );
  }

  /**
   * Get list of invoice attachments
   *
   * @remarks
   * Get a list of attachments associated with an invoice.
   *
   * From the response, use `downloadLink` in a GET request to download the attachment.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
   * ```
   *
   * @returns Get list of invoice attachments response
   *
   * @throws {@link Attachments.ListInvoiceAttachmentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInvoiceAttachments(
    request: Attachments.ListInvoiceAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListInvoiceAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/attachments/invoices/{invoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "invoiceId", value: request.invoiceId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoAttachmentResponseDtoSchema },
        errorFactory: Attachments.ListInvoiceAttachmentsError,
      },
      options,
    );
  }

  /**
   * Get list of vendor attachments
   *
   * @remarks
   * Get a list of attachments associated with a vendor.
   *
   * From the response, use `downloadLink` in a GET request to download the attachment.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {attachment_name}
   * ```
   *
   * @returns Get list of vendor attachments response
   *
   * @throws {@link Attachments.ListVendorAttachmentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVendorAttachments(
    request: Attachments.ListVendorAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoAttachmentResponseDto, Attachments.ListVendorAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/attachments/vendors/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoAttachmentResponseDtoSchema },
        errorFactory: Attachments.ListVendorAttachmentsError,
      },
      options,
    );
  }
}

export namespace Attachments {
  export type CreateCustomerAttachmentRequest = {
    customerId: string;
    name: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: string[];
  };

  export const createCustomerAttachmentRequestSchema: Schema<CreateCustomerAttachmentRequest> = s.lazySchema(
    () =>
      s.object<CreateCustomerAttachmentRequest>({
        customerId: s.string().check(s.minLength(1)),
        name: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s.array(s.string()),
      }),
  );

  export class CreateCustomerAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerAttachmentError> = [
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

  export type CreateInvoiceAttachmentRequest = {
    invoiceId: string;
    name: string;
    replaceInvoicePdf?: boolean | null;
    sessionId?: string | null;
    devKey?: string | null;
    body: string[];
  };

  export const createInvoiceAttachmentRequestSchema: Schema<CreateInvoiceAttachmentRequest> = s.lazySchema(
    () =>
      s.object<CreateInvoiceAttachmentRequest>({
        invoiceId: s.string().check(s.minLength(1)),
        name: s.string().check(s.minLength(1)),
        replaceInvoicePdf: s.optionalNullable(s.boolean()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s.array(s.string()),
      }),
  );

  export class CreateInvoiceAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInvoiceAttachmentError> = [
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

  export type CreateVendorAttachmentRequest = {
    vendorId: string;
    name: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: string[];
  };

  export const createVendorAttachmentRequestSchema: Schema<CreateVendorAttachmentRequest> = s.lazySchema(() =>
    s.object<CreateVendorAttachmentRequest>({
      vendorId: s.string().check(s.minLength(1)),
      name: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.string()),
    }),
  );

  export class CreateVendorAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorAttachmentError> = [
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

  export type DeleteAttachmentRequest = {
    attachmentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const deleteAttachmentRequestSchema: Schema<DeleteAttachmentRequest> = s.lazySchema(() =>
    s.object<DeleteAttachmentRequest>({
      attachmentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAttachmentError> = [
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

  export type GetAttachmentRequest = {
    attachmentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getAttachmentRequestSchema: Schema<GetAttachmentRequest> = s.lazySchema(() =>
    s.object<GetAttachmentRequest>({
      attachmentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAttachmentError> = [
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

  export type ListCustomerAttachmentsRequest = {
    customerId: string;
    max?: number | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCustomerAttachmentsRequestSchema: Schema<ListCustomerAttachmentsRequest> = s.lazySchema(
    () =>
      s.object<ListCustomerAttachmentsRequest>({
        customerId: s.string().check(s.minLength(1)),
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ListCustomerAttachmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerAttachmentsError> = [
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

  export type ListInvoiceAttachmentsRequest = {
    invoiceId: string;
    max?: number | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listInvoiceAttachmentsRequestSchema: Schema<ListInvoiceAttachmentsRequest> = s.lazySchema(() =>
    s.object<ListInvoiceAttachmentsRequest>({
      invoiceId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListInvoiceAttachmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInvoiceAttachmentsError> = [
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

  export type ListVendorAttachmentsRequest = {
    vendorId: string;
    max?: number | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listVendorAttachmentsRequestSchema: Schema<ListVendorAttachmentsRequest> = s.lazySchema(() =>
    s.object<ListVendorAttachmentsRequest>({
      vendorId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListVendorAttachmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVendorAttachmentsError> = [
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
