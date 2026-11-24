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
  createRecurringInvoiceRequestDtoInternalSchema,
  type CreateRecurringInvoiceRequestDto,
} from "../models/create-recurring-invoice-request-dto.js";
import {
  listResponseDtoRecurringInvoiceResponseDtoSchema,
  type ListResponseDtoRecurringInvoiceResponseDto,
} from "../models/list-response-dto-recurring-invoice-response-dto.js";
import {
  recurringInvoiceReplaceRequestDtoInternalSchema,
  recurringInvoiceReplaceRequestDtoSchema,
  type RecurringInvoiceReplaceRequestDto,
} from "../models/recurring-invoice-replace-request-dto.js";
import {
  recurringInvoiceResponseDtoSchema,
  type RecurringInvoiceResponseDto,
} from "../models/recurring-invoice-response-dto.js";
import {
  updateRecurringInvoiceRequestDtoInternalSchema,
  updateRecurringInvoiceRequestDtoSchema,
  type UpdateRecurringInvoiceRequestDto,
} from "../models/update-recurring-invoice-request-dto.js";
import type { Servers } from "../servers.js";

export class RecurringInvoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a recurring invoice
   *
   * @remarks
   * Archive a recurring invoice. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived recurring invoice with `POST
   * /v3/recurring-invoices/{recurringinvoiceId}/restore`. There is no change when you archive an
   * archived recurring invoice.
   *
   * When a recurring invoice is modified, all future invoices are automatically changed.
   *
   * @returns Archive a recurring invoice response
   *
   * @throws {@link RecurringInvoices.ArchiveRecurringInvoiceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveRecurringInvoice(
    request: RecurringInvoices.ArchiveRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.ArchiveRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurring-invoices/{recurringInvoiceId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "recurringInvoiceId", value: request.recurringInvoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.ArchiveRecurringInvoiceError,
      },
      options,
    );
  }

  /**
   * Create a recurring invoice
   *
   * @remarks
   * Create a recurring invoice.
   *
   * See Recurring invoices in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Create a recurring invoice response
   *
   * @throws {@link RecurringInvoices.CreateRecurringInvoiceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRecurringInvoice(
    request: RecurringInvoices.CreateRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.CreateRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurring-invoices"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createRecurringInvoiceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.CreateRecurringInvoiceError,
      },
      options,
    );
  }

  /**
   * Get recurring invoice details
   *
   * @remarks
   * Get details about an existing recurring invoice.
   *
   * @returns Get recurring invoice details response
   *
   * @throws {@link RecurringInvoices.GetRecurringInvoiceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecurringInvoice(
    request: RecurringInvoices.GetRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.GetRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/recurring-invoices/{recurringInvoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringInvoiceId", value: request.recurringInvoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.GetRecurringInvoiceError,
      },
      options,
    );
  }

  /**
   * Get list of recurring invoices
   *
   * @remarks
   * Get a list of recurring invoice objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of recurring invoices response
   *
   * @throws {@link RecurringInvoices.ListRecurringInvoicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecurringInvoices(
    request: RecurringInvoices.ListRecurringInvoicesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoRecurringInvoiceResponseDto, RecurringInvoices.ListRecurringInvoicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/recurring-invoices"),
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
        success: { kind: "json", schema: listResponseDtoRecurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.ListRecurringInvoicesError,
      },
      options,
    );
  }

  /**
   * Replace a recurring invoice
   *
   * @remarks
   * Update the number of line items in a recurring invoice. You can also update other recurring
   * invoice details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a
   * recurring invoice. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the invoice.
   * * When you omit an existing line item `id`, the line item is removed from the invoice.
   *
   * When a recurring invoice is modified, all future invoices are automatically changed.
   *
   * @returns Replace a recurring invoice response
   *
   * @throws {@link RecurringInvoices.ReplaceRecurringInvoiceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceRecurringInvoice(
    request: RecurringInvoices.ReplaceRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.ReplaceRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/recurring-invoices/{recurringInvoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringInvoiceId", value: request.recurringInvoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recurringInvoiceReplaceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.ReplaceRecurringInvoiceError,
      },
      options,
    );
  }

  /**
   * Restore a recurring invoice
   *
   * @remarks
   * Restore an archived recurring invoice. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored recurring invoices. There is no change
   * when you restore a restored recurring invoice.
   *
   * When a recurring invoice is modified, all future invoices are automatically changed.
   *
   * @returns Restore a recurring invoice response
   *
   * @throws {@link RecurringInvoices.RestoreRecurringInvoiceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreRecurringInvoice(
    request: RecurringInvoices.RestoreRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.RestoreRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurring-invoices/{recurringInvoiceId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "recurringInvoiceId", value: request.recurringInvoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.RestoreRecurringInvoiceError,
      },
      options,
    );
  }

  /**
   * Update a recurring invoice
   *
   * @remarks
   * Update details about a recurring invoice line item. You can also update other recurring invoice
   * details.
   *
   * You can use the PATCH operation to modify line item details, such as amount and description.
   * The recurring invoice line item `id` does not change with a PATCH operation.
   *
   * When a recurring invoice is modified, all future invoices are automatically changed.
   *
   * @returns Update a recurring invoice response
   *
   * @throws {@link RecurringInvoices.UpdateRecurringInvoiceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRecurringInvoice(
    request: RecurringInvoices.UpdateRecurringInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringInvoiceResponseDto, RecurringInvoices.UpdateRecurringInvoiceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/recurring-invoices/{recurringInvoiceId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringInvoiceId", value: request.recurringInvoiceId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateRecurringInvoiceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringInvoiceResponseDtoSchema },
        errorFactory: RecurringInvoices.UpdateRecurringInvoiceError,
      },
      options,
    );
  }
}

export namespace RecurringInvoices {
  export type ArchiveRecurringInvoiceRequest = {
    recurringInvoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveRecurringInvoiceRequestSchema: Schema<ArchiveRecurringInvoiceRequest> = s.lazySchema(
    () =>
      s.object<ArchiveRecurringInvoiceRequest>({
        recurringInvoiceId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ArchiveRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveRecurringInvoiceError> = [
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

  export type CreateRecurringInvoiceRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateRecurringInvoiceRequestDto;
  };

  export class CreateRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRecurringInvoiceError> = [
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

  export type GetRecurringInvoiceRequest = {
    recurringInvoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getRecurringInvoiceRequestSchema: Schema<GetRecurringInvoiceRequest> = s.lazySchema(() =>
    s.object<GetRecurringInvoiceRequest>({
      recurringInvoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecurringInvoiceError> = [
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

  export type ListRecurringInvoicesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listRecurringInvoicesRequestSchema: Schema<ListRecurringInvoicesRequest> = s.lazySchema(() =>
    s.object<ListRecurringInvoicesRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListRecurringInvoicesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecurringInvoicesError> = [
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

  export type ReplaceRecurringInvoiceRequest = {
    recurringInvoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: RecurringInvoiceReplaceRequestDto;
  };

  export const replaceRecurringInvoiceRequestSchema: Schema<ReplaceRecurringInvoiceRequest> = s.lazySchema(
    () =>
      s.object<ReplaceRecurringInvoiceRequest>({
        recurringInvoiceId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: recurringInvoiceReplaceRequestDtoSchema,
      }),
  );

  export class ReplaceRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceRecurringInvoiceError> = [
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

  export type RestoreRecurringInvoiceRequest = {
    recurringInvoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreRecurringInvoiceRequestSchema: Schema<RestoreRecurringInvoiceRequest> = s.lazySchema(
    () =>
      s.object<RestoreRecurringInvoiceRequest>({
        recurringInvoiceId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class RestoreRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreRecurringInvoiceError> = [
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

  export type UpdateRecurringInvoiceRequest = {
    recurringInvoiceId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateRecurringInvoiceRequestDto;
  };

  export const updateRecurringInvoiceRequestSchema: Schema<UpdateRecurringInvoiceRequest> = s.lazySchema(() =>
    s.object<UpdateRecurringInvoiceRequest>({
      recurringInvoiceId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: updateRecurringInvoiceRequestDtoSchema,
    }),
  );

  export class UpdateRecurringInvoiceError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRecurringInvoiceError> = [
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
