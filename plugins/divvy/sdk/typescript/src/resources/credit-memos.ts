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
  createCreditMemoRequestDtoInternalSchema,
  createCreditMemoRequestDtoSchema,
  type CreateCreditMemoRequestDto,
} from "../models/create-credit-memo-request-dto.js";
import {
  creditMemoBulkResponseDtoSchema,
  type CreditMemoBulkResponseDto,
} from "../models/credit-memo-bulk-response-dto.js";
import {
  creditMemoResponseDtoSchema,
  type CreditMemoResponseDto,
} from "../models/credit-memo-response-dto.js";
import {
  creditMemoWithUsageResponseDtoSchema,
  type CreditMemoWithUsageResponseDto,
} from "../models/credit-memo-with-usage-response-dto.js";
import {
  listResponseDtoCreditMemoWithUsageResponseDtoSchema,
  type ListResponseDtoCreditMemoWithUsageResponseDto,
} from "../models/list-response-dto-credit-memo-with-usage-response-dto.js";
import {
  replaceCreditMemoRequestDtoInternalSchema,
  replaceCreditMemoRequestDtoSchema,
  type ReplaceCreditMemoRequestDto,
} from "../models/replace-credit-memo-request-dto.js";
import {
  replaceCreditMemoWithIdRequestDtoInternalSchema,
  replaceCreditMemoWithIdRequestDtoSchema,
  type ReplaceCreditMemoWithIdRequestDto,
} from "../models/replace-credit-memo-with-id-request-dto.js";
import {
  updateCreditMemoRequestDtoInternalSchema,
  updateCreditMemoRequestDtoSchema,
  type UpdateCreditMemoRequestDto,
} from "../models/update-credit-memo-request-dto.js";
import {
  updateCreditMemoWithIdRequestDtoInternalSchema,
  updateCreditMemoWithIdRequestDtoSchema,
  type UpdateCreditMemoWithIdRequestDto,
} from "../models/update-credit-memo-with-id-request-dto.js";
import type { Servers } from "../servers.js";

export class CreditMemos {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a credit memo
   *
   * @remarks
   * Archive an existing credit memo. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived credit memo with `POST /v3/credit-memos/{creditMemoId}/restore`.
   * There is no change when you archive an archived credit memo.
   *
   * @returns Archive a credit memo response
   *
   * @throws {@link CreditMemos.ArchiveCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveCreditMemo(
    request: CreditMemos.ArchiveCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoResponseDto, CreditMemos.ArchiveCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos/{creditMemoId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "creditMemoId", value: request.creditMemoId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditMemoResponseDtoSchema },
        errorFactory: CreditMemos.ArchiveCreditMemoError,
      },
      options,
    );
  }

  /**
   * Archive multiple credit memos
   *
   * @remarks
   * Archive multiple credit memos with one API request. In the response, the `archived` field for
   * each object is set as `true`.
   *
   * @returns Archive multiple credit memos response
   *
   * @throws {@link CreditMemos.BulkArchiveCreditMemoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveCreditMemo(
    request: CreditMemos.BulkArchiveCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkArchiveCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditMemoBulkResponseDtoSchema },
        errorFactory: CreditMemos.BulkArchiveCreditMemoError,
      },
      options,
    );
  }

  /**
   * Create multiple credit memos
   *
   * @remarks
   * Create multiple credit memos with one API request. You can create up to 50 credit memos with
   * one `POST /v3/credit-memos/bulk` request.
   *
   * @returns Create multiple credit memos response
   *
   * @throws {@link CreditMemos.BulkCreateCreditMemoError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateCreditMemo(
    request: CreditMemos.BulkCreateCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkCreateCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createCreditMemoRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: creditMemoBulkResponseDtoSchema },
        errorFactory: CreditMemos.BulkCreateCreditMemoError,
      },
      options,
    );
  }

  /**
   * Replace multiple credit memos
   *
   * @remarks
   * Update the number of line items in multiple credit memos with one API request. You can also
   * update other details for each credit memo.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a credit
   * memo. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the credit memo.
   * * When you omit an existing line item `id`, the line item is removed from the credit memo.
   *
   * @returns Replace multiple credit memos response
   *
   * @throws {@link CreditMemos.BulkReplaceCreditMemoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkReplaceCreditMemo(
    request: CreditMemos.BulkReplaceCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkReplaceCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/credit-memos/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => replaceCreditMemoWithIdRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: creditMemoBulkResponseDtoSchema },
        errorFactory: CreditMemos.BulkReplaceCreditMemoError,
      },
      options,
    );
  }

  /**
   * Restore multiple credit memos
   *
   * @remarks
   * Restore multiple credit memos with one API request. In the response, the `archived` field for
   * each object is set as `false`.
   *
   * @returns Restore multiple credit memos response
   *
   * @throws {@link CreditMemos.BulkRestoreCreditMemoError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreCreditMemo(
    request: CreditMemos.BulkRestoreCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkRestoreCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditMemoBulkResponseDtoSchema },
        errorFactory: CreditMemos.BulkRestoreCreditMemoError,
      },
      options,
    );
  }

  /**
   * Update multiple credit memos
   *
   * @remarks
   * Update details about line items in multiple credit memos with one API request. You can also
   * update other credit memo details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and
   * `description`. The credit memo line item `id` does not change with a PATCH operation.
   *
   * @returns Update multiple credit memos response
   *
   * @throws {@link CreditMemos.BulkUpdateCreditMemoError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateCreditMemo(
    request: CreditMemos.BulkUpdateCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoBulkResponseDto, CreditMemos.BulkUpdateCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/credit-memos/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateCreditMemoWithIdRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: creditMemoBulkResponseDtoSchema },
        errorFactory: CreditMemos.BulkUpdateCreditMemoError,
      },
      options,
    );
  }

  /**
   * Create a credit memo
   *
   * @remarks
   * Create a new credit memo.
   *
   * With a credit memo, you can adjust the invoice amount owed by a customer.
   *
   * See Credit memos in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a credit memo response
   *
   * @throws {@link CreditMemos.CreateCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCreditMemo(
    request: CreditMemos.CreateCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoResponseDto, CreditMemos.CreateCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCreditMemoRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: creditMemoResponseDtoSchema },
        errorFactory: CreditMemos.CreateCreditMemoError,
      },
      options,
    );
  }

  /**
   * Get credit memo details
   *
   * @remarks
   * Get details about an existing credit memo.
   *
   * @returns Get credit memo details response
   *
   * @throws {@link CreditMemos.GetCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCreditMemo(
    request: CreditMemos.GetCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoWithUsageResponseDto, CreditMemos.GetCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/credit-memos/{creditMemoId}"),
        auth: noneAuth,
        pathParams: [{ name: "creditMemoId", value: request.creditMemoId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditMemoWithUsageResponseDtoSchema },
        errorFactory: CreditMemos.GetCreditMemoError,
      },
      options,
    );
  }

  /**
   * Get list of credit memos
   *
   * @remarks
   * Get a list of credit memo objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of credit memos response
   *
   * @throws {@link CreditMemos.ListCreditMemosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCreditMemos(
    request: CreditMemos.ListCreditMemosRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoCreditMemoWithUsageResponseDto, CreditMemos.ListCreditMemosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/credit-memos"),
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
        success: { kind: "json", schema: listResponseDtoCreditMemoWithUsageResponseDtoSchema },
        errorFactory: CreditMemos.ListCreditMemosError,
      },
      options,
    );
  }

  /**
   * Replace a credit memo
   *
   * @remarks
   * Update the number of line items in a credit memo. You can also update other credit memo
   * details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a credit
   * memo. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the credit memo.
   * * When you omit an existing line item `id`, the line item is removed from the credit memo.
   *
   * @returns Replace a credit memo response
   *
   * @throws {@link CreditMemos.ReplaceCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceCreditMemo(
    request: CreditMemos.ReplaceCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoResponseDto, CreditMemos.ReplaceCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/credit-memos/{creditMemoId}"),
        auth: noneAuth,
        pathParams: [{ name: "creditMemoId", value: request.creditMemoId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: replaceCreditMemoRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: creditMemoResponseDtoSchema },
        errorFactory: CreditMemos.ReplaceCreditMemoError,
      },
      options,
    );
  }

  /**
   * Restore a credit memo
   *
   * @remarks
   * Restore an archived credit memo. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored credit memos. There is no change when you
   * restore a restored credit memo.
   *
   * @returns Restore a credit memo response
   *
   * @throws {@link CreditMemos.RestoreCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreCreditMemo(
    request: CreditMemos.RestoreCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoResponseDto, CreditMemos.RestoreCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/credit-memos/{creditMemoId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "creditMemoId", value: request.creditMemoId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditMemoResponseDtoSchema },
        errorFactory: CreditMemos.RestoreCreditMemoError,
      },
      options,
    );
  }

  /**
   * Update a credit memo
   *
   * @remarks
   * Update details about a credit memo line item. You can also update other credit memo line item
   * details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and
   * `description`. The credit memo line item `id` does not change with a PATCH operation.
   *
   * @returns Update a credit memo response
   *
   * @throws {@link CreditMemos.UpdateCreditMemoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCreditMemo(
    request: CreditMemos.UpdateCreditMemoRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditMemoResponseDto, CreditMemos.UpdateCreditMemoError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/credit-memos/{creditMemoId}"),
        auth: noneAuth,
        pathParams: [{ name: "creditMemoId", value: request.creditMemoId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCreditMemoRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: creditMemoResponseDtoSchema },
        errorFactory: CreditMemos.UpdateCreditMemoError,
      },
      options,
    );
  }
}

export namespace CreditMemos {
  export type ArchiveCreditMemoRequest = {
    creditMemoId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveCreditMemoRequestSchema: Schema<ArchiveCreditMemoRequest> = s.lazySchema(() =>
    s.object<ArchiveCreditMemoRequest>({
      creditMemoId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveCreditMemoError> = [
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

  export type BulkArchiveCreditMemoRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveCreditMemoError> = [
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

  export type BulkCreateCreditMemoRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateCreditMemoRequestDto[];
  };

  export const bulkCreateCreditMemoRequestSchema: Schema<BulkCreateCreditMemoRequest> = s.lazySchema(() =>
    s.object<BulkCreateCreditMemoRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.lazy(() => createCreditMemoRequestDtoSchema)).check(s.minLength(1), s.maxLength(50)),
    }),
  );

  export class BulkCreateCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateCreditMemoError> = [
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

  export type BulkReplaceCreditMemoRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: ReplaceCreditMemoWithIdRequestDto[];
  };

  export const bulkReplaceCreditMemoRequestSchema: Schema<BulkReplaceCreditMemoRequest> = s.lazySchema(() =>
    s.object<BulkReplaceCreditMemoRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s
        .array(s.lazy(() => replaceCreditMemoWithIdRequestDtoSchema))
        .check(s.minLength(1), s.maxLength(50)),
    }),
  );

  export class BulkReplaceCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkReplaceCreditMemoError> = [
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

  export type BulkRestoreCreditMemoRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreCreditMemoError> = [
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

  export type BulkUpdateCreditMemoRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateCreditMemoWithIdRequestDto[];
  };

  export const bulkUpdateCreditMemoRequestSchema: Schema<BulkUpdateCreditMemoRequest> = s.lazySchema(() =>
    s.object<BulkUpdateCreditMemoRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s
        .array(s.lazy(() => updateCreditMemoWithIdRequestDtoSchema))
        .check(s.minLength(1), s.maxLength(50)),
    }),
  );

  export class BulkUpdateCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateCreditMemoError> = [
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

  export type CreateCreditMemoRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateCreditMemoRequestDto;
  };

  export class CreateCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCreditMemoError> = [
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

  export type GetCreditMemoRequest = {
    creditMemoId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCreditMemoRequestSchema: Schema<GetCreditMemoRequest> = s.lazySchema(() =>
    s.object<GetCreditMemoRequest>({
      creditMemoId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCreditMemoError> = [
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

  export type ListCreditMemosRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listCreditMemosRequestSchema: Schema<ListCreditMemosRequest> = s.lazySchema(() =>
    s.object<ListCreditMemosRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListCreditMemosError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCreditMemosError> = [
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

  export type ReplaceCreditMemoRequest = {
    creditMemoId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: ReplaceCreditMemoRequestDto;
  };

  export const replaceCreditMemoRequestSchema: Schema<ReplaceCreditMemoRequest> = s.lazySchema(() =>
    s.object<ReplaceCreditMemoRequest>({
      creditMemoId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: replaceCreditMemoRequestDtoSchema,
    }),
  );

  export class ReplaceCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceCreditMemoError> = [
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

  export type RestoreCreditMemoRequest = {
    creditMemoId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreCreditMemoRequestSchema: Schema<RestoreCreditMemoRequest> = s.lazySchema(() =>
    s.object<RestoreCreditMemoRequest>({
      creditMemoId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreCreditMemoError> = [
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

  export type UpdateCreditMemoRequest = {
    creditMemoId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateCreditMemoRequestDto;
  };

  export const updateCreditMemoRequestSchema: Schema<UpdateCreditMemoRequest> = s.lazySchema(() =>
    s.object<UpdateCreditMemoRequest>({
      creditMemoId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: updateCreditMemoRequestDtoSchema,
    }),
  );

  export class UpdateCreditMemoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCreditMemoError> = [
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
