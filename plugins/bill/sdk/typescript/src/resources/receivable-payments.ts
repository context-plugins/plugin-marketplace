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
  chargeCustomerRequestDtoSchema,
  type ChargeCustomerRequestDto,
} from "../models/charge-customer-request-dto.js";
import {
  listResponseDtoReceivablePaymentResponseDtoSchema,
  type ListResponseDtoReceivablePaymentResponseDto,
} from "../models/list-response-dto-receivable-payment-response-dto.js";
import {
  receivablePaymentResponseDtoSchema,
  type ReceivablePaymentResponseDto,
} from "../models/receivable-payment-response-dto.js";
import type { Servers } from "../servers.js";

export class ReceivablePayments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Charge a customer
   *
   * @remarks
   * Charge a customer for one or more invoices.
   *
   * Charging a customer follows a set of rules.
   * * **Customer authorization**: The customer `authorizedToCharge` field must be set as `true` for
   *   you to charge the customer for invoices. Set charge customer authorization with `POST
   *   /v3/customers/{customerId}/charge-authorization`.
   * * **Customer bank account**: A customer bank account is required for you to charge a customer.
   *   Create a customer bank account with `POST /v3/customers/{customerId}/bank-accounts`.
   *
   * @returns Charge a customer response
   *
   * @throws {@link ReceivablePayments.ChargeCustomerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chargeCustomer(
    request: ReceivablePayments.ChargeCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<ReceivablePaymentResponseDto, ReceivablePayments.ChargeCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/receivable-payments"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: chargeCustomerRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: receivablePaymentResponseDtoSchema },
        errorFactory: ReceivablePayments.ChargeCustomerError,
      },
      options,
    );
  }

  /**
   * Get received payment details
   *
   * @remarks
   * Get details about an existing received payment.
   *
   * @returns Get received payment details response
   *
   * @throws {@link ReceivablePayments.GetReceivablePaymentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReceivablePayment(
    request: ReceivablePayments.GetReceivablePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<ReceivablePaymentResponseDto, ReceivablePayments.GetReceivablePaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/receivable-payments/{receivedPaymentId}"),
        auth: noneAuth,
        pathParams: [{ name: "receivedPaymentId", value: request.receivedPaymentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: receivablePaymentResponseDtoSchema },
        errorFactory: ReceivablePayments.GetReceivablePaymentError,
      },
      options,
    );
  }

  /**
   * Get list of received payments
   *
   * @remarks
   * Get a list of received payment objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of received payments response
   *
   * @throws {@link ReceivablePayments.ListReceivablePaymentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReceivablePayments(
    request: ReceivablePayments.ListReceivablePaymentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoReceivablePaymentResponseDto, ReceivablePayments.ListReceivablePaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/receivable-payments"),
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
        success: { kind: "json", schema: listResponseDtoReceivablePaymentResponseDtoSchema },
        errorFactory: ReceivablePayments.ListReceivablePaymentsError,
      },
      options,
    );
  }
}

export namespace ReceivablePayments {
  export type ChargeCustomerRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: ChargeCustomerRequestDto;
  };

  export class ChargeCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChargeCustomerError> = [
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

  export type GetReceivablePaymentRequest = {
    receivedPaymentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetReceivablePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReceivablePaymentError> = [
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

  export type ListReceivablePaymentsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listReceivablePaymentsRequestSchema: Schema<ListReceivablePaymentsRequest> = s.lazySchema(() =>
    s.object<ListReceivablePaymentsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListReceivablePaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReceivablePaymentsError> = [
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
