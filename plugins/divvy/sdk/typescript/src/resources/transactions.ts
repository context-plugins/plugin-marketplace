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
  bulkUpdateTxCustomFieldRequestDtoInternalSchema,
  bulkUpdateTxCustomFieldRequestDtoSchema,
  type BulkUpdateTxCustomFieldRequestDto,
} from "../models/bulk-update-tx-custom-field-request-dto.js";
import {
  listTransactionCustomFieldResponseDtoSchema,
  type ListTransactionCustomFieldResponseDto,
} from "../models/list-transaction-custom-field-response-dto.js";
import {
  paginationResponseDtoCustomFieldValueDtoSchema,
  type PaginationResponseDtoCustomFieldValueDto,
} from "../models/pagination-response-dto-custom-field-value-dto.js";
import {
  paginationResponseDtoTransactionResponseDtoInternalSchema,
  type PaginationResponseDtoTransactionResponseDto,
} from "../models/pagination-response-dto-transaction-response-dto.js";
import { receiptImageInternalSchema, type ReceiptImage } from "../models/receipt-image.js";
import {
  reimbursementImageUploadUrlResponseDtoSchema,
  type ReimbursementImageUploadUrlResponseDto,
} from "../models/reimbursement-image-upload-url-response-dto.js";
import { spendStatusDtoSchema, type SpendStatusDto } from "../models/spend-status-dto.js";
import { threeDsRequestDtoSchema, type ThreeDsRequestDto } from "../models/three-ds-request-dto.js";
import { threeDsResponseDtoSchema, type ThreeDsResponseDto } from "../models/three-ds-response-dto.js";
import {
  transactionReceiptRequestDtoInternalSchema,
  transactionReceiptRequestDtoSchema,
  type TransactionReceiptRequestDto,
} from "../models/transaction-receipt-request-dto.js";
import {
  transactionResponseDtoInternalSchema,
  type TransactionResponseDto,
} from "../models/transaction-response-dto.js";
import { updateTxRequestDtoSchema, type UpdateTxRequestDto } from "../models/update-tx-request-dto.js";
import type { Servers } from "../servers.js";

export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add a transaction receipt
   *
   * @remarks
   * Add a receipt to an existing transaction.
   *
   * In the request, use the same upload `url` that you used to upload the receipt image. See Create
   * a transaction upload URL to learn about creating a transaction image upload URL.
   *
   * @returns Add a transaction receipt response
   *
   * @throws {@link Transactions.AddTransactionReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTransactionReceipt(
    request: Transactions.AddTransactionReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ReceiptImage[], Transactions.AddTransactionReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}/receipts"),
        auth: noneAuth,
        pathParams: [{ name: "transactionId", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: transactionReceiptRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => receiptImageInternalSchema)) },
        errorFactory: Transactions.AddTransactionReceiptError,
      },
      options,
    );
  }

  /**
   * Create a transaction upload URL
   *
   * @remarks
   * Create a transaction image upload URL.
   *
   * From the response, use the upload `url` to upload a receipt image for the transaction. For
   * example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set
   * the content type as `image/png`.
   *
   * ```
   * curl '{upload_url}'
   * -H 'Content-Type: image/jpeg'
   * --upload-file {file_name_with_extension}
   * ```
   *
   * **Note**: BILL supports JPG and PNG file formats for transaction images.
   *
   * See Transactions in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a transaction upload URL response
   *
   * @throws {@link Transactions.CreateReceiptUploadUrlError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReceiptUploadUrl(
    request: Transactions.CreateReceiptUploadUrlRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ReimbursementImageUploadUrlResponseDto, Transactions.CreateReceiptUploadUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/transactions/receipt-upload-url"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reimbursementImageUploadUrlResponseDtoSchema },
        errorFactory: Transactions.CreateReceiptUploadUrlError,
      },
      options,
    );
  }

  /**
   * Delete a transaction receipt
   *
   * @remarks
   * Delete a receipt from an existing transaction. A deleted receipt cannot be restored. The
   * deleted receipt is not available in the transaction details.
   *
   * @returns Delete a transaction receipt response
   *
   * @throws {@link Transactions.DeleteTransactionReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTransactionReceipt(
    request: Transactions.DeleteTransactionReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Transactions.DeleteTransactionReceiptError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}/receipts/{receiptId}"),
        auth: noneAuth,
        pathParams: [
          { name: "transactionId", value: request.transactionId, schema: s.string() },
          { name: "receiptId", value: request.receiptId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Transactions.DeleteTransactionReceiptError,
      },
      options,
    );
  }

  /**
   * Get transaction details
   *
   * @remarks
   * Get details about an existing transaction.
   *
   * In the response, you get information about transactions, reversals, and refunds.
   * * **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION`
   *   or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding
   *   account. The `CLEAR` transactions receive a new ID and reference to the original
   *   `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
   * * **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType`
   *   remains `AUTHORIZATION`, but the `amount` is typically a negative value.
   * * **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is
   *   set to `CLEAR` and the `amount` is a negative value.
   *
   * @returns Get transaction details response
   *
   * @throws {@link Transactions.GetTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransaction(
    request: Transactions.GetTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionResponseDto, Transactions.GetTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}"),
        auth: noneAuth,
        pathParams: [{ name: "transactionId", value: request.transactionId, schema: s.string() }],
        query: [
          {
            name: "showCustomFieldIds",
            value: request.showCustomFieldIds,
            schema: s.optionalNullable(s.string()),
          },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionResponseDtoInternalSchema },
        errorFactory: Transactions.GetTransactionError,
      },
      options,
    );
  }

  /**
   * Get list of transaction custom field values
   *
   * @remarks
   * Get a list of custom field value objects applied to an existing transaction. By default, you
   * get 20 results on one page of results. Set `max` in your request to get up to 100 results on
   * one page.
   *
   * @returns Get list of transaction custom field value response
   *
   * @throws {@link Transactions.ListTransactionCustomFieldValuesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactionCustomFieldValues(
    request: Transactions.ListTransactionCustomFieldValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PaginationResponseDtoCustomFieldValueDto,
    Transactions.ListTransactionCustomFieldValuesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/spend/transactions/{transactionId}/custom-fields/{customFieldId}/values",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "transactionId", value: request.transactionId, schema: s.string() },
          { name: "customFieldId", value: request.customFieldId, schema: s.string() },
        ],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoCustomFieldValueDtoSchema },
        errorFactory: Transactions.ListTransactionCustomFieldValuesError,
      },
      options,
    );
  }

  /**
   * Get list of transaction custom fields
   *
   * @remarks
   * Get a list of custom field objects applied to an existing transaction.
   *
   * @returns Get list of transaction custom fields response
   *
   * @throws {@link Transactions.ListTransactionCustomFieldsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactionCustomFields(
    request: Transactions.ListTransactionCustomFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTransactionCustomFieldResponseDto, Transactions.ListTransactionCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}/custom-fields"),
        auth: noneAuth,
        pathParams: [{ name: "transactionId", value: request.transactionId, schema: s.string() }],
        query: [{ name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTransactionCustomFieldResponseDtoSchema },
        errorFactory: Transactions.ListTransactionCustomFieldsError,
      },
      options,
    );
  }

  /**
   * Get list of transactions
   *
   * @remarks
   * Get a list of transaction objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 50 results on one page.
   *
   * In the response, you get information about transactions, reversals, and refunds.
   * * **Transaction**: For a standard transaction, the `transactionType` is set as `AUTHORIZATION`
   *   or `DECLINE`. The status is updated to `CLEAR` once BILL moves the money from the funding
   *   account. The `CLEAR` transactions receive a new ID and reference to the original
   *   `AUTHORIZATION` transaction via the `originalAuthTransactionUuid` field.
   * * **Reversal**: For a reversal (a cancellation before funds are settled), the `transactionType`
   *   remains `AUTHORIZATION`, but the `amount` is typically a negative value.
   * * **Refund**: For a refund (a cancellation after funds are settled), the `transactionType` is
   *   set to `CLEAR` and the `amount` is a negative value.
   *
   * **Note**: Only parent transactions are available in the response.
   *
   * @returns Get list of transactions response
   *
   * @throws {@link Transactions.ListTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactions(
    request: Transactions.ListTransactionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoTransactionResponseDto, Transactions.ListTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/transactions"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          {
            name: "showCustomFieldIds",
            value: request.showCustomFieldIds,
            schema: s.optionalNullable(s.string()),
          },
          {
            name: "includeReceipts",
            value: request.includeReceipts,
            schema: s.optionalNullable(s.boolean()),
          },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoTransactionResponseDtoInternalSchema },
        errorFactory: Transactions.ListTransactionsError,
      },
      options,
    );
  }

  /**
   * Accept or reject a transaction
   *
   * @remarks
   * Accept or reject a transaction 3D Secure (3DS) challenge.
   *
   * When a transaction is created, a 3DS challenge may trigger to verify the identity of the
   * cardholder. Use this endpoint to approve or deny the transaction. The Spend & Expense user must
   * have the `ADMIN` user role to perform this operation.
   *
   * Subscribe to the `spend.three-ds-challenge.created` event to get a webhook notification when a
   * 3DS challenge is triggered for a transaction. See Spend & Expense 3DS challenge notification
   * payload for more information.
   *
   * See 3-D Secure - BILL Spend & Expense in the BILL Help Center to learn more about 3D Secure at
   * BILL.
   *
   * @returns Accept or reject a transaction response
   *
   * @throws {@link Transactions.ThreeDsChallengeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  threeDsChallenge(
    request: Transactions.ThreeDsChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<ThreeDsResponseDto, Transactions.ThreeDsChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{acsTransactionId}/3ds-challenge"),
        auth: noneAuth,
        pathParams: [{ name: "acsTransactionId", value: request.acsTransactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: threeDsRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: threeDsResponseDtoSchema },
        errorFactory: Transactions.ThreeDsChallengeError,
      },
      options,
    );
  }

  /**
   * Update a transaction
   *
   * @remarks
   * Update the budget for an existing transaction.
   *
   * @returns Update a transaction response
   *
   * @throws {@link Transactions.UpdateTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTransaction(
    request: Transactions.UpdateTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionResponseDto, Transactions.UpdateTransactionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}"),
        auth: noneAuth,
        pathParams: [{ name: "transactionId", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateTxRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: transactionResponseDtoInternalSchema },
        errorFactory: Transactions.UpdateTransactionError,
      },
      options,
    );
  }

  /**
   * Update transaction custom fields
   *
   * @remarks
   * Update details about custom fields and their values applied to an existing transaction.
   *
   * You cannot update custom fields in a locked transaction. When a transaction is locked,
   * `isLocked` is set as `true`. You can get information about your transactions with `GET
   * /v3/spend/transactions` or `GET /v3/spend/transactions/{transactionId}.
   *
   * See Lock or unlock custom fields for a transaction in the BILL Help Center for more
   * information.
   *
   * @returns Update transaction custom fields response
   *
   * @throws {@link Transactions.UpdateTransactionCustomFieldsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTransactionCustomFields(
    request: Transactions.UpdateTransactionCustomFieldsRequest,
    options?: RequestOptions,
  ): ApiPromise<SpendStatusDto, Transactions.UpdateTransactionCustomFieldsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/spend/transactions/{transactionId}/custom-fields"),
        auth: noneAuth,
        pathParams: [{ name: "transactionId", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: bulkUpdateTxCustomFieldRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: spendStatusDtoSchema },
        errorFactory: Transactions.UpdateTransactionCustomFieldsError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type AddTransactionReceiptRequest = {
    transactionId: string;
    apiToken?: string | null;
    body: TransactionReceiptRequestDto;
  };

  export const addTransactionReceiptRequestSchema: Schema<AddTransactionReceiptRequest> = s.lazySchema(() =>
    s.object<AddTransactionReceiptRequest>({
      transactionId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: transactionReceiptRequestDtoSchema,
    }),
  );

  export class AddTransactionReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTransactionReceiptError> = [
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

  export type CreateReceiptUploadUrlRequest = {
    apiToken?: string | null;
  };

  export class CreateReceiptUploadUrlError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReceiptUploadUrlError> = [
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

  export type DeleteTransactionReceiptRequest = {
    transactionId: string;
    receiptId: string;
    apiToken?: string | null;
  };

  export const deleteTransactionReceiptRequestSchema: Schema<DeleteTransactionReceiptRequest> = s.lazySchema(
    () =>
      s.object<DeleteTransactionReceiptRequest>({
        transactionId: s.string().check(s.minLength(1)),
        receiptId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
      }),
  );

  export class DeleteTransactionReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTransactionReceiptError> = [
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

  export type GetTransactionRequest = {
    transactionId: string;
    showCustomFieldIds?: string | null;
    apiToken?: string | null;
  };

  export const getTransactionRequestSchema: Schema<GetTransactionRequest> = s.lazySchema(() =>
    s.object<GetTransactionRequest>({
      transactionId: s.string().check(s.minLength(1)),
      showCustomFieldIds: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTransactionError> = [
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

  export type ListTransactionCustomFieldValuesRequest = {
    transactionId: string;
    customFieldId: string;
    max?: number | null;
    nextPage?: string | null;
    prevPage?: string | null;
    apiToken?: string | null;
  };

  export const listTransactionCustomFieldValuesRequestSchema: Schema<ListTransactionCustomFieldValuesRequest> =
    s.lazySchema(() =>
      s.object<ListTransactionCustomFieldValuesRequest>({
        transactionId: s.string().check(s.minLength(1)),
        customFieldId: s.string().check(s.minLength(1)),
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        nextPage: s.optionalNullable(s.string()),
        prevPage: s.optionalNullable(s.string()),
        apiToken: s.optionalNullable(s.string()),
      }),
    );

  export class ListTransactionCustomFieldValuesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionCustomFieldValuesError> = [
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

  export type ListTransactionCustomFieldsRequest = {
    transactionId: string;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listTransactionCustomFieldsRequestSchema: Schema<ListTransactionCustomFieldsRequest> =
    s.lazySchema(() =>
      s.object<ListTransactionCustomFieldsRequest>({
        transactionId: s.string().check(s.minLength(1)),
        filters: s.optionalNullable(s.string()),
        apiToken: s.optionalNullable(s.string()),
      }),
    );

  export class ListTransactionCustomFieldsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionCustomFieldsError> = [
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

  export type ListTransactionsRequest = {
    max?: number | null;
    nextPage?: string | null;
    prevPage?: string | null;
    sort?: string | null;
    filters?: string | null;
    showCustomFieldIds?: string | null;
    includeReceipts?: boolean | null;
    apiToken?: string | null;
  };

  export const listTransactionsRequestSchema: Schema<ListTransactionsRequest> = s.lazySchema(() =>
    s.object<ListTransactionsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(50))),
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      showCustomFieldIds: s.optionalNullable(s.string()),
      includeReceipts: s.optionalNullable(s.boolean()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionsError> = [
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

  export type ThreeDsChallengeRequest = {
    acsTransactionId: string;
    apiToken?: string | null;
    body: ThreeDsRequestDto;
  };

  export const threeDsChallengeRequestSchema: Schema<ThreeDsChallengeRequest> = s.lazySchema(() =>
    s.object<ThreeDsChallengeRequest>({
      acsTransactionId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: threeDsRequestDtoSchema,
    }),
  );

  export class ThreeDsChallengeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ThreeDsChallengeError> = [
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

  export type UpdateTransactionRequest = {
    transactionId: string;
    apiToken?: string | null;
    body: UpdateTxRequestDto;
  };

  export const updateTransactionRequestSchema: Schema<UpdateTransactionRequest> = s.lazySchema(() =>
    s.object<UpdateTransactionRequest>({
      transactionId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: updateTxRequestDtoSchema,
    }),
  );

  export class UpdateTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTransactionError> = [
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

  export type UpdateTransactionCustomFieldsRequest = {
    transactionId: string;
    apiToken?: string | null;
    body: BulkUpdateTxCustomFieldRequestDto;
  };

  export const updateTransactionCustomFieldsRequestSchema: Schema<UpdateTransactionCustomFieldsRequest> =
    s.lazySchema(() =>
      s.object<UpdateTransactionCustomFieldsRequest>({
        transactionId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
        body: bulkUpdateTxCustomFieldRequestDtoSchema,
      }),
    );

  export class UpdateTransactionCustomFieldsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTransactionCustomFieldsError> = [
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
