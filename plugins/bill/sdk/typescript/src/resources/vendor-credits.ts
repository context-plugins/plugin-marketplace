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
  createVendorCreditRequestDtoInternalSchema,
  createVendorCreditRequestDtoSchema,
  type CreateVendorCreditRequestDto,
} from "../models/create-vendor-credit-request-dto.js";
import {
  listResponseDtoVendorCreditWithUsageResponseDtoInternalSchema,
  type ListResponseDtoVendorCreditWithUsageResponseDto,
} from "../models/list-response-dto-vendor-credit-with-usage-response-dto.js";
import {
  replaceVendorCreditRequestDtoInternalSchema,
  replaceVendorCreditRequestDtoSchema,
  type ReplaceVendorCreditRequestDto,
} from "../models/replace-vendor-credit-request-dto.js";
import {
  replaceVendorCreditWithIdRequestDtoInternalSchema,
  replaceVendorCreditWithIdRequestDtoSchema,
  type ReplaceVendorCreditWithIdRequestDto,
} from "../models/replace-vendor-credit-with-id-request-dto.js";
import {
  updateVendorCreditRequestDtoInternalSchema,
  updateVendorCreditRequestDtoSchema,
  type UpdateVendorCreditRequestDto,
} from "../models/update-vendor-credit-request-dto.js";
import {
  updateVendorCreditWithIdRequestDtoInternalSchema,
  updateVendorCreditWithIdRequestDtoSchema,
  type UpdateVendorCreditWithIdRequestDto,
} from "../models/update-vendor-credit-with-id-request-dto.js";
import {
  vendorCreditBulkResponseDtoSchema,
  type VendorCreditBulkResponseDto,
} from "../models/vendor-credit-bulk-response-dto.js";
import {
  vendorCreditResponseDtoSchema,
  type VendorCreditResponseDto,
} from "../models/vendor-credit-response-dto.js";
import {
  vendorCreditWithUsageResponseDtoInternalSchema,
  type VendorCreditWithUsageResponseDto,
} from "../models/vendor-credit-with-usage-response-dto.js";
import type { Servers } from "../servers.js";

export class VendorCredits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive a vendor credit
   *
   * @remarks
   * Archive an existing vendor credit. In the response, the `archived` field is set as `true`. An
   * archived vendor credit cannot be restored.
   *
   * @returns Archive a vendor credit response
   *
   * @throws {@link VendorCredits.ArchiveVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveVendorCredit(
    request: VendorCredits.ArchiveVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditResponseDto, VendorCredits.ArchiveVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendor-credits/{vendorCreditId}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "vendorCreditId", value: request.vendorCreditId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorCreditResponseDtoSchema },
        errorFactory: VendorCredits.ArchiveVendorCreditError,
      },
      options,
    );
  }

  /**
   * Archive multiple vendor credits
   *
   * @remarks
   * Archive multiple vendor credits with one API request. In the response, the `archived` field for
   * each object is set as `true`. An archived vendor credit cannot be restored.
   *
   * @returns Archive multiple vendor credits response
   *
   * @throws {@link VendorCredits.BulkArchiveVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveVendorCredit(
    request: VendorCredits.BulkArchiveVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkArchiveVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendor-credits/bulk/archive"),
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
        success: { kind: "json", schema: vendorCreditBulkResponseDtoSchema },
        errorFactory: VendorCredits.BulkArchiveVendorCreditError,
      },
      options,
    );
  }

  /**
   * Create multiple vendor credits
   *
   * @remarks
   * Create multiple vendor credits with one API request. You can create up to 50 vendor credits
   * with one `POST /v3/vendor-credits/bulk` request.
   *
   * @returns Create multiple vendor credits response
   *
   * @throws {@link VendorCredits.BulkCreateVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateVendorCredit(
    request: VendorCredits.BulkCreateVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkCreateVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendor-credits/bulk"),
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
          schema: s.array(s.lazy(() => createVendorCreditRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: vendorCreditBulkResponseDtoSchema },
        errorFactory: VendorCredits.BulkCreateVendorCreditError,
      },
      options,
    );
  }

  /**
   * Replace multiple vendor credits
   *
   * @remarks
   * Update the number of line items in multiple vendor credits with one API request. You can also
   * update other details for each vendor credit.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a vendor
   * credit. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the vendor credit.
   * * When you omit an existing line item `id`, the line item is removed from the vendor credit.
   *
   * @returns Replace multiple vendor credits response
   *
   * @throws {@link VendorCredits.BulkReplaceVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkReplaceVendorCredit(
    request: VendorCredits.BulkReplaceVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkReplaceVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/vendor-credits/bulk"),
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
          schema: s.array(s.lazy(() => replaceVendorCreditWithIdRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: vendorCreditBulkResponseDtoSchema },
        errorFactory: VendorCredits.BulkReplaceVendorCreditError,
      },
      options,
    );
  }

  /**
   * Update multiple vendor credits
   *
   * @remarks
   * Update details about line items in multiple vendor credits with one API request. You can also
   * update other vendor credit details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and
   * `description`. The vendor credit line item `id` does not change with a PATCH operation.
   *
   * @returns Update multiple vendor credits response
   *
   * @throws {@link VendorCredits.BulkUpdateVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateVendorCredit(
    request: VendorCredits.BulkUpdateVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditBulkResponseDto, VendorCredits.BulkUpdateVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/vendor-credits/bulk"),
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
          schema: s.array(s.lazy(() => updateVendorCreditWithIdRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: vendorCreditBulkResponseDtoSchema },
        errorFactory: VendorCredits.BulkUpdateVendorCreditError,
      },
      options,
    );
  }

  /**
   * Create a vendor credit
   *
   * @remarks
   * Create a vendor credit.
   *
   * With a vendor credit, you can adjust the amount that you owe a vendor.
   *
   * See Vendor credits in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a vendor credit response
   *
   * @throws {@link VendorCredits.CreateVendorCreditError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendorCredit(
    request: VendorCredits.CreateVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditResponseDto, VendorCredits.CreateVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/vendor-credits"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createVendorCreditRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorCreditResponseDtoSchema },
        errorFactory: VendorCredits.CreateVendorCreditError,
      },
      options,
    );
  }

  /**
   * Get vendor credit details
   *
   * @remarks
   * Get details about an existing vendor credit.
   *
   * @returns Get vendor credit details response
   *
   * @throws {@link VendorCredits.GetVendorCreditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVendorCredit(
    request: VendorCredits.GetVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditWithUsageResponseDto, VendorCredits.GetVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendor-credits/{vendorCreditId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorCreditId", value: request.vendorCreditId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vendorCreditWithUsageResponseDtoInternalSchema },
        errorFactory: VendorCredits.GetVendorCreditError,
      },
      options,
    );
  }

  /**
   * Get list of vendor credits
   *
   * @remarks
   * Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of vendor credits response
   *
   * @throws {@link VendorCredits.ListVendorCreditsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVendorCredits(
    request: VendorCredits.ListVendorCreditsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoVendorCreditWithUsageResponseDto, VendorCredits.ListVendorCreditsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/vendor-credits"),
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
        success: { kind: "json", schema: listResponseDtoVendorCreditWithUsageResponseDtoInternalSchema },
        errorFactory: VendorCredits.ListVendorCreditsError,
      },
      options,
    );
  }

  /**
   * Replace a vendor credit
   *
   * @remarks
   * Update the number of line items in a vendor credit. You can also update other vendor credit
   * details.
   *
   * You can use the PUT operation to add, remove, or replace the number of line items in a vendor
   * credit. A set of rules apply with the PUT operation.
   * * When you add a new line item, a new line item `id` is generated in the vendor credit.
   * * When you omit an existing line item `id`, the line item is removed from the vendor credit.
   *
   * @returns Replace a vendor credit response
   *
   * @throws {@link VendorCredits.ReplaceVendorCreditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replaceVendorCredit(
    request: VendorCredits.ReplaceVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditResponseDto, VendorCredits.ReplaceVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/vendor-credits/{vendorCreditId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorCreditId", value: request.vendorCreditId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: replaceVendorCreditRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorCreditResponseDtoSchema },
        errorFactory: VendorCredits.ReplaceVendorCreditError,
      },
      options,
    );
  }

  /**
   * Update a vendor credit
   *
   * @remarks
   * Update details about a vendor credit line item. You can also update other vendor credit line
   * item details.
   *
   * You can use the PATCH operation to modify line item details, such as `amount`, `quantity`, and
   * `description`. The vendor credit line item `id` does not change with a PATCH operation.
   *
   * @returns Update a vendor credit response
   *
   * @throws {@link VendorCredits.UpdateVendorCreditError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateVendorCredit(
    request: VendorCredits.UpdateVendorCreditRequest,
    options?: RequestOptions,
  ): ApiPromise<VendorCreditResponseDto, VendorCredits.UpdateVendorCreditError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/vendor-credits/{vendorCreditId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorCreditId", value: request.vendorCreditId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateVendorCreditRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: vendorCreditResponseDtoSchema },
        errorFactory: VendorCredits.UpdateVendorCreditError,
      },
      options,
    );
  }
}

export namespace VendorCredits {
  export type ArchiveVendorCreditRequest = {
    vendorCreditId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveVendorCreditRequestSchema: Schema<ArchiveVendorCreditRequest> = s.lazySchema(() =>
    s.object<ArchiveVendorCreditRequest>({
      vendorCreditId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ArchiveVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveVendorCreditError> = [
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

  export type BulkArchiveVendorCreditRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveVendorCreditError> = [
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

  export type BulkCreateVendorCreditRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateVendorCreditRequestDto[];
  };

  export const bulkCreateVendorCreditRequestSchema: Schema<BulkCreateVendorCreditRequest> = s.lazySchema(() =>
    s.object<BulkCreateVendorCreditRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.lazy(() => createVendorCreditRequestDtoSchema)).check(s.minLength(1), s.maxLength(50)),
    }),
  );

  export class BulkCreateVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateVendorCreditError> = [
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

  export type BulkReplaceVendorCreditRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: ReplaceVendorCreditWithIdRequestDto[];
  };

  export const bulkReplaceVendorCreditRequestSchema: Schema<BulkReplaceVendorCreditRequest> = s.lazySchema(
    () =>
      s.object<BulkReplaceVendorCreditRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => replaceVendorCreditWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
  );

  export class BulkReplaceVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkReplaceVendorCreditError> = [
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

  export type BulkUpdateVendorCreditRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateVendorCreditWithIdRequestDto[];
  };

  export const bulkUpdateVendorCreditRequestSchema: Schema<BulkUpdateVendorCreditRequest> = s.lazySchema(() =>
    s.object<BulkUpdateVendorCreditRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s
        .array(s.lazy(() => updateVendorCreditWithIdRequestDtoSchema))
        .check(s.minLength(1), s.maxLength(50)),
    }),
  );

  export class BulkUpdateVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateVendorCreditError> = [
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

  export type CreateVendorCreditRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateVendorCreditRequestDto;
  };

  export class CreateVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorCreditError> = [
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

  export type GetVendorCreditRequest = {
    vendorCreditId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getVendorCreditRequestSchema: Schema<GetVendorCreditRequest> = s.lazySchema(() =>
    s.object<GetVendorCreditRequest>({
      vendorCreditId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorCreditError> = [
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

  export type ListVendorCreditsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listVendorCreditsRequestSchema: Schema<ListVendorCreditsRequest> = s.lazySchema(() =>
    s.object<ListVendorCreditsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListVendorCreditsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListVendorCreditsError> = [
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

  export type ReplaceVendorCreditRequest = {
    vendorCreditId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: ReplaceVendorCreditRequestDto;
  };

  export const replaceVendorCreditRequestSchema: Schema<ReplaceVendorCreditRequest> = s.lazySchema(() =>
    s.object<ReplaceVendorCreditRequest>({
      vendorCreditId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: replaceVendorCreditRequestDtoSchema,
    }),
  );

  export class ReplaceVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplaceVendorCreditError> = [
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

  export type UpdateVendorCreditRequest = {
    vendorCreditId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateVendorCreditRequestDto;
  };

  export const updateVendorCreditRequestSchema: Schema<UpdateVendorCreditRequest> = s.lazySchema(() =>
    s.object<UpdateVendorCreditRequest>({
      vendorCreditId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: updateVendorCreditRequestDtoSchema,
    }),
  );

  export class UpdateVendorCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVendorCreditError> = [
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
