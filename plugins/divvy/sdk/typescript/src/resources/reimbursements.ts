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
  createReimbursementRequestDtoInternalSchema,
  type CreateReimbursementRequestDto,
} from "../models/create-reimbursement-request-dto.js";
import {
  paginationResponseDtoReimbursementResponseDtoInternalSchema,
  type PaginationResponseDtoReimbursementResponseDto,
} from "../models/pagination-response-dto-reimbursement-response-dto.js";
import { receiptImageInternalSchema, type ReceiptImage } from "../models/receipt-image.js";
import {
  reimbursementActionRequestDtoSchema,
  type ReimbursementActionRequestDto,
} from "../models/reimbursement-action-request-dto.js";
import {
  reimbursementImageUploadUrlResponseDtoSchema,
  type ReimbursementImageUploadUrlResponseDto,
} from "../models/reimbursement-image-upload-url-response-dto.js";
import {
  reimbursementReceiptRequestDtoInternalSchema,
  reimbursementReceiptRequestDtoSchema,
  type ReimbursementReceiptRequestDto,
} from "../models/reimbursement-receipt-request-dto.js";
import {
  reimbursementResponseDtoInternalSchema,
  type ReimbursementResponseDto,
} from "../models/reimbursement-response-dto.js";
import {
  updateReimbursementRequestDtoSchema,
  type UpdateReimbursementRequestDto,
} from "../models/update-reimbursement-request-dto.js";
import type { Servers } from "../servers.js";

export class Reimbursements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add a reimbursement receipt
   *
   * @remarks
   * Add a receipt to an existing reimbursement. In the request, use the same upload url that you
   * used to upload the receipt image. See Create a reimbursement upload URL to learn about creating
   * a reimbursement image upload URL.
   *
   * @returns Add a reimbursement receipt response
   *
   * @throws {@link Reimbursements.AddReimbursementReceiptError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addReimbursementReceipt(
    request: Reimbursements.AddReimbursementReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<ReceiptImage[], Reimbursements.AddReimbursementReceiptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}/receipts"),
        auth: noneAuth,
        pathParams: [{ name: "reimbursementId", value: request.reimbursementId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: reimbursementReceiptRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => receiptImageInternalSchema)) },
        errorFactory: Reimbursements.AddReimbursementReceiptError,
      },
      options,
    );
  }

  /**
   * Approve or deny a reimbursement
   *
   * @remarks
   * Approve or deny a reimbursement request.
   *
   * See Reimbursements in the Guides section for more information, sample requests, and responses.
   *
   * @returns Approve or deny a reimbursement response
   *
   * @throws {@link Reimbursements.ApproveOrDenyReimbursementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  approveOrDenyReimbursement(
    request: Reimbursements.ApproveOrDenyReimbursementRequest,
    options?: RequestOptions,
  ): ApiPromise<ReimbursementResponseDto, Reimbursements.ApproveOrDenyReimbursementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}/action"),
        auth: noneAuth,
        pathParams: [{ name: "reimbursementId", value: request.reimbursementId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: reimbursementActionRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: reimbursementResponseDtoInternalSchema },
        errorFactory: Reimbursements.ApproveOrDenyReimbursementError,
      },
      options,
    );
  }

  /**
   * Create a reimbursement upload URL
   *
   * @remarks
   * Create a reimbursement image upload URL.
   *
   * From the response, use the upload `url` to upload a receipt image for the reimbursement. For
   * example, to upload a JPEG image, use the following `curl` command. To upload a PNG image, set
   * the content type as `image/png`.
   *
   * ```
   * curl '{upload_url}'
   * -H 'Content-Type: image/jpeg'
   * --upload-file {file_name_with_extension}
   * ```
   *
   * **Note**: BILL supports JPG and PNG file formats for reimbursement images.
   *
   * See Reimbursements in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a reimbursement upload URL response
   *
   * @throws {@link Reimbursements.CreateImageUploadUrlError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createImageUploadUrl(
    request: Reimbursements.CreateImageUploadUrlRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ReimbursementImageUploadUrlResponseDto, Reimbursements.CreateImageUploadUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/image-upload-url"),
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
        errorFactory: Reimbursements.CreateImageUploadUrlError,
      },
      options,
    );
  }

  /**
   * Create a reimbursement
   *
   * @remarks
   * Create a new reimbursement.
   *
   * See Reimbursements in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a reimbursement response
   *
   * @throws {@link Reimbursements.CreateReimbursementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createReimbursement(
    request: Reimbursements.CreateReimbursementRequest,
    options?: RequestOptions,
  ): ApiPromise<ReimbursementResponseDto, Reimbursements.CreateReimbursementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createReimbursementRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: reimbursementResponseDtoInternalSchema },
        errorFactory: Reimbursements.CreateReimbursementError,
      },
      options,
    );
  }

  /**
   * Delete a reimbursement
   *
   * @remarks
   * Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted
   * reimbursement is not available in the list of reimbursements.
   *
   * @returns Delete a reimbursement response
   *
   * @throws {@link Reimbursements.DeleteReimbursementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReimbursement(
    request: Reimbursements.DeleteReimbursementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Reimbursements.DeleteReimbursementError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}"),
        auth: noneAuth,
        pathParams: [{ name: "reimbursementId", value: request.reimbursementId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Reimbursements.DeleteReimbursementError,
      },
      options,
    );
  }

  /**
   * Delete a reimbursement receipt
   *
   * @remarks
   * Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The
   * deleted receipt is not available in the reimbursement details.
   *
   * @returns Delete a reimbursement receipt response
   *
   * @throws {@link Reimbursements.DeleteReimbursementReceiptError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReimbursementReceipt(
    request: Reimbursements.DeleteReimbursementReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Reimbursements.DeleteReimbursementReceiptError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}"),
        auth: noneAuth,
        pathParams: [
          { name: "reimbursementId", value: request.reimbursementId, schema: s.string() },
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
        errorFactory: Reimbursements.DeleteReimbursementReceiptError,
      },
      options,
    );
  }

  /**
   * Get reimbursement details
   *
   * @remarks
   * Get details about an existing reimbursement.
   *
   * @returns Get reimbursement details response
   *
   * @throws {@link Reimbursements.GetReimbursementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReimbursement(
    request: Reimbursements.GetReimbursementRequest,
    options?: RequestOptions,
  ): ApiPromise<ReimbursementResponseDto, Reimbursements.GetReimbursementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}"),
        auth: noneAuth,
        pathParams: [{ name: "reimbursementId", value: request.reimbursementId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reimbursementResponseDtoInternalSchema },
        errorFactory: Reimbursements.GetReimbursementError,
      },
      options,
    );
  }

  /**
   * Get list of reimbursements
   *
   * @remarks
   * Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * @returns Get list of reimbursements response
   *
   * @throws {@link Reimbursements.ListReimbursementsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReimbursements(
    request: Reimbursements.ListReimbursementsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoReimbursementResponseDto, Reimbursements.ListReimbursementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoReimbursementResponseDtoInternalSchema },
        errorFactory: Reimbursements.ListReimbursementsError,
      },
      options,
    );
  }

  /**
   * Update a reimbursement
   *
   * @remarks
   * Update details about an existing reimbursement.
   *
   * @returns Update a reimbursement response
   *
   * @throws {@link Reimbursements.UpdateReimbursementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateReimbursement(
    request: Reimbursements.UpdateReimbursementRequest,
    options?: RequestOptions,
  ): ApiPromise<ReimbursementResponseDto, Reimbursements.UpdateReimbursementError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/spend/reimbursements/{reimbursementId}"),
        auth: noneAuth,
        pathParams: [{ name: "reimbursementId", value: request.reimbursementId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateReimbursementRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: reimbursementResponseDtoInternalSchema },
        errorFactory: Reimbursements.UpdateReimbursementError,
      },
      options,
    );
  }
}

export namespace Reimbursements {
  export type AddReimbursementReceiptRequest = {
    reimbursementId: string;
    apiToken?: string | null;
    body: ReimbursementReceiptRequestDto;
  };

  export const addReimbursementReceiptRequestSchema: Schema<AddReimbursementReceiptRequest> = s.lazySchema(
    () =>
      s.object<AddReimbursementReceiptRequest>({
        reimbursementId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
        body: reimbursementReceiptRequestDtoSchema,
      }),
  );

  export class AddReimbursementReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddReimbursementReceiptError> = [
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

  export type ApproveOrDenyReimbursementRequest = {
    reimbursementId: string;
    apiToken?: string | null;
    body: ReimbursementActionRequestDto;
  };

  export const approveOrDenyReimbursementRequestSchema: Schema<ApproveOrDenyReimbursementRequest> =
    s.lazySchema(() =>
      s.object<ApproveOrDenyReimbursementRequest>({
        reimbursementId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
        body: reimbursementActionRequestDtoSchema,
      }),
    );

  export class ApproveOrDenyReimbursementError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ApproveOrDenyReimbursementError> = [
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

  export type CreateImageUploadUrlRequest = {
    apiToken?: string | null;
  };

  export class CreateImageUploadUrlError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateImageUploadUrlError> = [
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

  export type CreateReimbursementRequest = {
    apiToken?: string | null;
    body: CreateReimbursementRequestDto;
  };

  export class CreateReimbursementError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateReimbursementError> = [
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

  export type DeleteReimbursementRequest = {
    reimbursementId: string;
    apiToken?: string | null;
  };

  export const deleteReimbursementRequestSchema: Schema<DeleteReimbursementRequest> = s.lazySchema(() =>
    s.object<DeleteReimbursementRequest>({
      reimbursementId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteReimbursementError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReimbursementError> = [
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

  export type DeleteReimbursementReceiptRequest = {
    reimbursementId: string;
    receiptId: string;
    apiToken?: string | null;
  };

  export const deleteReimbursementReceiptRequestSchema: Schema<DeleteReimbursementReceiptRequest> =
    s.lazySchema(() =>
      s.object<DeleteReimbursementReceiptRequest>({
        reimbursementId: s.string().check(s.minLength(1)),
        receiptId: s.string().check(s.minLength(1)),
        apiToken: s.optionalNullable(s.string()),
      }),
    );

  export class DeleteReimbursementReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReimbursementReceiptError> = [
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

  export type GetReimbursementRequest = {
    reimbursementId: string;
    apiToken?: string | null;
  };

  export const getReimbursementRequestSchema: Schema<GetReimbursementRequest> = s.lazySchema(() =>
    s.object<GetReimbursementRequest>({
      reimbursementId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetReimbursementError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReimbursementError> = [
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

  export type ListReimbursementsRequest = {
    nextPage?: string | null;
    prevPage?: string | null;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listReimbursementsRequestSchema: Schema<ListReimbursementsRequest> = s.lazySchema(() =>
    s.object<ListReimbursementsRequest>({
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListReimbursementsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReimbursementsError> = [
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

  export type UpdateReimbursementRequest = {
    reimbursementId: string;
    apiToken?: string | null;
    body: UpdateReimbursementRequestDto;
  };

  export const updateReimbursementRequestSchema: Schema<UpdateReimbursementRequest> = s.lazySchema(() =>
    s.object<UpdateReimbursementRequest>({
      reimbursementId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: updateReimbursementRequestDtoSchema,
    }),
  );

  export class UpdateReimbursementError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateReimbursementError> = [
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
