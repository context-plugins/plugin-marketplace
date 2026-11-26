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
  createPaymentTermRequestDtoInternalSchema,
  createPaymentTermRequestDtoSchema,
  type CreatePaymentTermRequestDto,
} from "../models/create-payment-term-request-dto.js";
import {
  listResponseDtoPaymentTermResponseDtoSchema,
  type ListResponseDtoPaymentTermResponseDto,
} from "../models/list-response-dto-payment-term-response-dto.js";
import {
  paymentTermResponseDtoSchema,
  type PaymentTermResponseDto,
} from "../models/payment-term-response-dto.js";
import {
  updatePaymentTermRequestDtoInternalSchema,
  updatePaymentTermRequestDtoSchema,
  type UpdatePaymentTermRequestDto,
} from "../models/update-payment-term-request-dto.js";
import type { Servers } from "../servers.js";

export class PaymentTerms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a payment term
   *
   * @remarks
   * Create a new payment term for the organization. Use payment terms to set the number of days the
   * customer has to pay a vendor. You can set `paymentTermId` in bills and invoices.
   *
   * @returns Create a payment term response
   *
   * @throws {@link PaymentTerms.CreatePaymentTermError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentTerm(
    request: PaymentTerms.CreatePaymentTermRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentTermResponseDto, PaymentTerms.CreatePaymentTermError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}/payment-terms"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createPaymentTermRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentTermResponseDtoSchema },
        errorFactory: PaymentTerms.CreatePaymentTermError,
      },
      options,
    );
  }

  /**
   * Get payment term details
   *
   * @remarks
   * Get details about an existing payment term.
   *
   * @returns Get payment term details response
   *
   * @throws {@link PaymentTerms.GetPaymentTermError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPaymentTerm(
    request: PaymentTerms.GetPaymentTermRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentTermResponseDto, PaymentTerms.GetPaymentTermError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/organizations/{organizationId}/payment-terms/{paymentTermId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "paymentTermId", value: request.paymentTermId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentTermResponseDtoSchema },
        errorFactory: PaymentTerms.GetPaymentTermError,
      },
      options,
    );
  }

  /**
   * Get list of payment terms
   *
   * @remarks
   * Get a list of payment terms for the organization. By default, you get 20 results on one page of
   * results. Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of payment terms response
   *
   * @throws {@link PaymentTerms.ListPaymentTermsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentTerms(
    request: PaymentTerms.ListPaymentTermsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoPaymentTermResponseDto, PaymentTerms.ListPaymentTermsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/organizations/{organizationId}/payment-terms"),
        auth: noneAuth,
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoPaymentTermResponseDtoSchema },
        errorFactory: PaymentTerms.ListPaymentTermsError,
      },
      options,
    );
  }

  /**
   * Update a payment term
   *
   * @remarks
   * Update details about an existing payment term.
   *
   * @returns Update a payment term response
   *
   * @throws {@link PaymentTerms.UpdatePaymentTermError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePaymentTerm(
    request: PaymentTerms.UpdatePaymentTermRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentTermResponseDto, PaymentTerms.UpdatePaymentTermError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v3/organizations/{organizationId}/payment-terms/{paymentTermId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "paymentTermId", value: request.paymentTermId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updatePaymentTermRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentTermResponseDtoSchema },
        errorFactory: PaymentTerms.UpdatePaymentTermError,
      },
      options,
    );
  }
}

export namespace PaymentTerms {
  export type CreatePaymentTermRequest = {
    organizationId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CreatePaymentTermRequestDto;
  };

  export const createPaymentTermRequestSchema: Schema<CreatePaymentTermRequest> = s.lazySchema(() =>
    s.object<CreatePaymentTermRequest>({
      organizationId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: createPaymentTermRequestDtoSchema,
    }),
  );

  export class CreatePaymentTermError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentTermError> = [
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

  export type GetPaymentTermRequest = {
    organizationId: string;
    paymentTermId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getPaymentTermRequestSchema: Schema<GetPaymentTermRequest> = s.lazySchema(() =>
    s.object<GetPaymentTermRequest>({
      organizationId: s.string().check(s.minLength(1)),
      paymentTermId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetPaymentTermError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentTermError> = [
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

  export type ListPaymentTermsRequest = {
    organizationId: string;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listPaymentTermsRequestSchema: Schema<ListPaymentTermsRequest> = s.lazySchema(() =>
    s.object<ListPaymentTermsRequest>({
      organizationId: s.string().check(s.minLength(1)),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListPaymentTermsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentTermsError> = [
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

  export type UpdatePaymentTermRequest = {
    organizationId: string;
    paymentTermId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdatePaymentTermRequestDto;
  };

  export const updatePaymentTermRequestSchema: Schema<UpdatePaymentTermRequest> = s.lazySchema(() =>
    s.object<UpdatePaymentTermRequest>({
      organizationId: s.string().check(s.minLength(1)),
      paymentTermId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: updatePaymentTermRequestDtoSchema,
    }),
  );

  export class UpdatePaymentTermError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePaymentTermError> = [
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
