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
  listRecurringBillResponseDtoSchema,
  type ListRecurringBillResponseDto,
} from "../models/list-recurring-bill-response-dto.js";
import {
  recurringBillCreateRequestDtoInternalSchema,
  type RecurringBillCreateRequestDto,
} from "../models/recurring-bill-create-request-dto.js";
import {
  recurringBillReadResponseDtoSchema,
  type RecurringBillReadResponseDto,
} from "../models/recurring-bill-read-response-dto.js";
import {
  recurringBillReplaceRequestDtoInternalSchema,
  recurringBillReplaceRequestDtoSchema,
  type RecurringBillReplaceRequestDto,
} from "../models/recurring-bill-replace-request-dto.js";
import {
  recurringBillResponseDtoSchema,
  type RecurringBillResponseDto,
} from "../models/recurring-bill-response-dto.js";
import {
  recurringBillUpdateRequestDtoInternalSchema,
  recurringBillUpdateRequestDtoSchema,
  type RecurringBillUpdateRequestDto,
} from "../models/recurring-bill-update-request-dto.js";
import type { Servers } from "../servers.js";

export class Recurringbills {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a recurring bill
   *
   * @remarks
   * Archive a recurring bill. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived recurring bill with `POST
   * /v3/recurringbills/{recurringbillId}/restore`. There is no change when you archive an archived
   * recurring bill.
   *
   * When a recurring bill is modified, all future bills are automatically changed.
   *
   * @returns Archive a recurring bill response
   *
   * @throws {@link Recurringbills.ArchiveRecurringBillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveRecurringBill(
    request: Recurringbills.ArchiveRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillResponseDto, Recurringbills.ArchiveRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurringbills/{recurringBillId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "recurringBillId", value: request.recurringBillId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringBillResponseDtoSchema },
        errorFactory: Recurringbills.ArchiveRecurringBillError,
      },
      options,
    );
  }

  /**
   * Create a recurring bill
   *
   * @remarks
   * Create a recurring bill.
   *
   * See Recurring bills in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a recurring bill response
   *
   * @throws {@link Recurringbills.CreateRecurringBillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRecurringBill(
    request: Recurringbills.CreateRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillResponseDto, Recurringbills.CreateRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurringbills"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recurringBillCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringBillResponseDtoSchema },
        errorFactory: Recurringbills.CreateRecurringBillError,
      },
      options,
    );
  }

  /**
   * Get recurring bill details
   *
   * @remarks
   * Get details about an existing recurring bill.
   *
   * @returns Get recurring bill details response
   *
   * @throws {@link Recurringbills.GetRecurringBillError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecurringBill(
    request: Recurringbills.GetRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillReadResponseDto, Recurringbills.GetRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/recurringbills/{recurringBillId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringBillId", value: request.recurringBillId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringBillReadResponseDtoSchema },
        errorFactory: Recurringbills.GetRecurringBillError,
      },
      options,
    );
  }

  /**
   * Get list of recurring bills
   *
   * @remarks
   * Get a list of recurring bill objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of recurring bills response
   *
   * @throws {@link Recurringbills.ListRecurringBillsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecurringBills(
    request: Recurringbills.ListRecurringBillsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListRecurringBillResponseDto, Recurringbills.ListRecurringBillsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/recurringbills"),
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
        success: { kind: "json", schema: listRecurringBillResponseDtoSchema },
        errorFactory: Recurringbills.ListRecurringBillsError,
      },
      options,
    );
  }

  /**
   * Replace a recurring bill
   *
   * @remarks
   * Update the number of line items in a recurring bill. You can also update other recurring bill
   * details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a
   * recurring bill. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the bill.
   * * When you omit an existing line item `id`, the line item is removed from the bill.
   *
   * When a recurring bill is modified, all future bills are automatically changed.
   *
   * @returns Replace a recurring bill response
   *
   * @throws {@link Recurringbills.ReplaceRecurringBillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceRecurringBill(
    request: Recurringbills.ReplaceRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillResponseDto, Recurringbills.ReplaceRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/recurringbills/{recurringBillId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringBillId", value: request.recurringBillId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recurringBillReplaceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringBillResponseDtoSchema },
        errorFactory: Recurringbills.ReplaceRecurringBillError,
      },
      options,
    );
  }

  /**
   * Restore an archived recurring bill
   *
   * @remarks
   * Restore an archived recurring bill. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored recurring bills. There is no change when
   * you restore a restored recurring bill.
   *
   * When a recurring bill is modified, all future bills are automatically changed.
   *
   * @returns Restore an archived recurring bill response
   *
   * @throws {@link Recurringbills.RestoreRecurringBillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreRecurringBill(
    request: Recurringbills.RestoreRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillResponseDto, Recurringbills.RestoreRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/recurringbills/{recurringBillId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "recurringBillId", value: request.recurringBillId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: recurringBillResponseDtoSchema },
        errorFactory: Recurringbills.RestoreRecurringBillError,
      },
      options,
    );
  }

  /**
   * Update a recurring bill
   *
   * @remarks
   * Update details about a recurring bill line item. You can also update other recurring bill
   * details.
   *
   * You can use the PATCH operation to modify line item details, such as amount and description.
   * The recurring bill line item `id` does not change with a PATCH operation.
   *
   * When a recurring bill is modified, all future bills are automatically changed.
   *
   * @returns Update a recurring bill response
   *
   * @throws {@link Recurringbills.UpdateRecurringBillError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRecurringBill(
    request: Recurringbills.UpdateRecurringBillRequest,
    options?: RequestOptions,
  ): ApiPromise<RecurringBillResponseDto, Recurringbills.UpdateRecurringBillError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/recurringbills/{recurringBillId}"),
        auth: noneAuth,
        pathParams: [{ name: "recurringBillId", value: request.recurringBillId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recurringBillUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recurringBillResponseDtoSchema },
        errorFactory: Recurringbills.UpdateRecurringBillError,
      },
      options,
    );
  }
}

export namespace Recurringbills {
  export type ArchiveRecurringBillRequest = {
    recurringBillId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveRecurringBillRequestSchema: Schema<ArchiveRecurringBillRequest> = s.lazySchema(() =>
    s.object<ArchiveRecurringBillRequest>({
      recurringBillId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveRecurringBillError> = [
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

  export type CreateRecurringBillRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: RecurringBillCreateRequestDto;
  };

  export class CreateRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRecurringBillError> = [
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

  export type GetRecurringBillRequest = {
    recurringBillId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getRecurringBillRequestSchema: Schema<GetRecurringBillRequest> = s.lazySchema(() =>
    s.object<GetRecurringBillRequest>({
      recurringBillId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecurringBillError> = [
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

  export type ListRecurringBillsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listRecurringBillsRequestSchema: Schema<ListRecurringBillsRequest> = s.lazySchema(() =>
    s.object<ListRecurringBillsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListRecurringBillsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRecurringBillsError> = [
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

  export type ReplaceRecurringBillRequest = {
    recurringBillId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: RecurringBillReplaceRequestDto;
  };

  export const replaceRecurringBillRequestSchema: Schema<ReplaceRecurringBillRequest> = s.lazySchema(() =>
    s.object<ReplaceRecurringBillRequest>({
      recurringBillId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: recurringBillReplaceRequestDtoSchema,
    }),
  );

  export class ReplaceRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceRecurringBillError> = [
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

  export type RestoreRecurringBillRequest = {
    recurringBillId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreRecurringBillRequestSchema: Schema<RestoreRecurringBillRequest> = s.lazySchema(() =>
    s.object<RestoreRecurringBillRequest>({
      recurringBillId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreRecurringBillError> = [
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

  export type UpdateRecurringBillRequest = {
    recurringBillId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: RecurringBillUpdateRequestDto;
  };

  export const updateRecurringBillRequestSchema: Schema<UpdateRecurringBillRequest> = s.lazySchema(() =>
    s.object<UpdateRecurringBillRequest>({
      recurringBillId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: recurringBillUpdateRequestDtoSchema,
    }),
  );

  export class UpdateRecurringBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateRecurringBillError> = [
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
