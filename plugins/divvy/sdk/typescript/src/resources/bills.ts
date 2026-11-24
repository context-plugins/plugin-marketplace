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
  billCreateRequestDtoInternalSchema,
  type BillCreateRequestDto,
} from "../models/bill-create-request-dto.js";
import {
  billReadResponseDtoInternalSchema,
  type BillReadResponseDto,
} from "../models/bill-read-response-dto.js";
import {
  billReplaceRequestDtoInternalSchema,
  billReplaceRequestDtoSchema,
  type BillReplaceRequestDto,
} from "../models/bill-replace-request-dto.js";
import { billResponseDtoInternalSchema, type BillResponseDto } from "../models/bill-response-dto.js";
import {
  billUpdateRequestDtoInternalSchema,
  billUpdateRequestDtoSchema,
  type BillUpdateRequestDto,
} from "../models/bill-update-request-dto.js";
import {
  billWithoutApproversResponseDtoInternalSchema,
  type BillWithoutApproversResponseDto,
} from "../models/bill-without-approvers-response-dto.js";
import {
  listBillResponseDtoInternalSchema,
  type ListBillResponseDto,
} from "../models/list-bill-response-dto.js";
import {
  recordPaymentRequestDtoInternalSchema,
  type RecordPaymentRequestDto,
} from "../models/record-payment-request-dto.js";
import {
  recordPaymentResponseDtoSchema,
  type RecordPaymentResponseDto,
} from "../models/record-payment-response-dto.js";
import type { Servers } from "../servers.js";

export class Bills {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a bill
   *
   * @remarks
   * Archive an existing bill. In the response, the `archived` field is set as `true`.
   *
   * You can restore an archived bill with `POST /v3/bills/{billId}/restore`. There is no change
   * when you archive an archived bill.
   *
   * @returns Archive a bill response
   *
   * @throws {@link Bills.ArchiveBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveBill(
    request: Bills.ArchiveBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillWithoutApproversResponseDto, Bills.ArchiveBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bills/{billId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billWithoutApproversResponseDtoInternalSchema },
        errorFactory: Bills.ArchiveBillError,
      },
      options,
    );
  }

  /**
   * Create a bill
   *
   * @remarks
   * Create a new bill.
   *
   * See Bills in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a bill response
   *
   * @throws {@link Bills.CreateBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBill(
    request: Bills.CreateBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillResponseDto, Bills.CreateBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bills"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: billCreateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: billResponseDtoInternalSchema },
        errorFactory: Bills.CreateBillError,
      },
      options,
    );
  }

  /**
   * Create multiple bills
   *
   * @remarks
   * Create multiple bills with one API request. You can create up to 100 bills with one `POST
   * /v3/bills/bulk` request.
   *
   * Bulk bill creation at BILL follow a set of rules.
   * * **Successful response**: In your bulk bill creation request, all your bills must be
   *   successfully created for a successful response. If any bill creation is not successful, the
   *   entire request fails and none of the bills in the request are created.
   * * **You can create bills for multiple vendors**: You can create bills for one vendor or for
   *   multiple vendors with one `POST /v3/bills/bulk` request.
   *
   * See Bills in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create multiple bills response
   *
   * @throws {@link Bills.CreateBulkBillsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkBills(
    request: Bills.CreateBulkBillsRequest,
    options?: RequestOptions,
  ): ApiPromise<BillWithoutApproversResponseDto[], Bills.CreateBulkBillsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bills/bulk"),
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
          schema: s.array(s.lazy(() => billCreateRequestDtoInternalSchema)),
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => billWithoutApproversResponseDtoInternalSchema)),
        },
        errorFactory: Bills.CreateBulkBillsError,
      },
      options,
    );
  }

  /**
   * Get bill details
   *
   * @remarks
   * Get details about an existing bill.
   *
   * @returns Get bill details response
   *
   * @throws {@link Bills.GetBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBill(
    request: Bills.GetBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillReadResponseDto, Bills.GetBillError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/bills/{billId}"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billReadResponseDtoInternalSchema },
        errorFactory: Bills.GetBillError,
      },
      options,
    );
  }

  /**
   * Get list of bills
   *
   * @remarks
   * Get a list of bill objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of bills response
   *
   * @throws {@link Bills.ListBillsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBills(
    request: Bills.ListBillsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListBillResponseDto, Bills.ListBillsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/bills"),
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
        success: { kind: "json", schema: listBillResponseDtoInternalSchema },
        errorFactory: Bills.ListBillsError,
      },
      options,
    );
  }

  /**
   * Record AP payment
   *
   * @remarks
   * Record an offline AP payment made to a vendor.
   *
   * An offline payment is a payment made outside the BILL system. BILL simply applies the recorded
   * payment amount to one or more bills for the vendor. BILL does not process the payment or
   * transfer funds to the vendor when you record an AP payment with this endpoint.
   *
   * Use `POST /v3/payments` to create a payment with the BILL system. When you pay with `POST
   * /v3/payments`, BILL processes the payment and transfers funds from your BILL organization
   * funding account to the vendor.
   *
   * @returns Record AP payment response
   *
   * @throws {@link Bills.RecordPaymentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recordPayment(
    request: Bills.RecordPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<RecordPaymentResponseDto, Bills.RecordPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bills/record-payment"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: recordPaymentRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: recordPaymentResponseDtoSchema },
        errorFactory: Bills.RecordPaymentError,
      },
      options,
    );
  }

  /**
   * Replace a bill
   *
   * @remarks
   * Update the number of line items in a bill. You can also update other bill details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a bill. A
   * set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the bill.
   * * When you omit an existing line item `id`, the line item is removed from the bill.
   *
   * @returns Replace a bill response
   *
   * @throws {@link Bills.ReplaceBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceBill(
    request: Bills.ReplaceBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillResponseDto, Bills.ReplaceBillError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/bills/{billId}"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: billReplaceRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: billResponseDtoInternalSchema },
        errorFactory: Bills.ReplaceBillError,
      },
      options,
    );
  }

  /**
   * Restore an archived bill
   *
   * @remarks
   * Restore an archived bill. In the response, the `archived` field is set as `false`.
   *
   * You can perform any valid BILL operation on restored bills. There is no change when you restore
   * a restored bill.
   *
   * @returns Restore an archived bill response
   *
   * @throws {@link Bills.RestoreBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreBill(
    request: Bills.RestoreBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillWithoutApproversResponseDto, Bills.RestoreBillError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bills/{billId}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billWithoutApproversResponseDtoInternalSchema },
        errorFactory: Bills.RestoreBillError,
      },
      options,
    );
  }

  /**
   * Update a bill
   *
   * @remarks
   * Update details about a bill line item. You can also update other bill details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount` and
   * `description`. The bill line item `id` does not change with a PATCH operation.
   *
   * @returns Update a bill response
   *
   * @throws {@link Bills.UpdateBillError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBill(
    request: Bills.UpdateBillRequest,
    options?: RequestOptions,
  ): ApiPromise<BillResponseDto, Bills.UpdateBillError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/bills/{billId}"),
        auth: noneAuth,
        pathParams: [{ name: "billId", value: request.billId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: billUpdateRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: billResponseDtoInternalSchema },
        errorFactory: Bills.UpdateBillError,
      },
      options,
    );
  }
}

export namespace Bills {
  export type ArchiveBillRequest = {
    billId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveBillRequestSchema: Schema<ArchiveBillRequest> = s.lazySchema(() =>
    s.object<ArchiveBillRequest>({
      billId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveBillError> = [
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

  export type CreateBillRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BillCreateRequestDto;
  };

  export class CreateBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillError> = [
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

  export type CreateBulkBillsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BillCreateRequestDto[];
  };

  export class CreateBulkBillsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBulkBillsError> = [
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

  export type GetBillRequest = {
    billId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getBillRequestSchema: Schema<GetBillRequest> = s.lazySchema(() =>
    s.object<GetBillRequest>({
      billId: s.string().check(s.minLength(1), s.pattern("^00n[a-zA-Z0-9]{17}$")),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillError> = [
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

  export type ListBillsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listBillsRequestSchema: Schema<ListBillsRequest> = s.lazySchema(() =>
    s.object<ListBillsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListBillsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillsError> = [
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

  export type RecordPaymentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: RecordPaymentRequestDto;
  };

  export class RecordPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecordPaymentError> = [
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

  export type ReplaceBillRequest = {
    billId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: BillReplaceRequestDto;
  };

  export const replaceBillRequestSchema: Schema<ReplaceBillRequest> = s.lazySchema(() =>
    s.object<ReplaceBillRequest>({
      billId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: billReplaceRequestDtoSchema,
    }),
  );

  export class ReplaceBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceBillError> = [
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

  export type RestoreBillRequest = {
    billId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreBillRequestSchema: Schema<RestoreBillRequest> = s.lazySchema(() =>
    s.object<RestoreBillRequest>({
      billId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class RestoreBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreBillError> = [
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

  export type UpdateBillRequest = {
    billId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: BillUpdateRequestDto;
  };

  export const updateBillRequestSchema: Schema<UpdateBillRequest> = s.lazySchema(() =>
    s.object<UpdateBillRequest>({
      billId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: billUpdateRequestDtoSchema,
    }),
  );

  export class UpdateBillError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBillError> = [
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
