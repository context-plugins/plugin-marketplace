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
  bulkPaymentRequestDtoInternalSchema,
  type BulkPaymentRequestDto,
} from "../models/bulk-payment-request-dto.js";
import {
  bulkPaymentResponseDtoSchema,
  type BulkPaymentResponseDto,
} from "../models/bulk-payment-response-dto.js";
import {
  checkImageDataResponseDtoSchema,
  type CheckImageDataResponseDto,
} from "../models/check-image-data-response-dto.js";
import {
  exchangeRateRequestDtoInternalSchema,
  exchangeRateRequestDtoSchema,
  type ExchangeRateRequestDto,
} from "../models/exchange-rate-request-dto.js";
import {
  exchangeRateResponseDtoSchema,
  type ExchangeRateResponseDto,
} from "../models/exchange-rate-response-dto.js";
import {
  exchangeRatesResponseDtoSchema,
  type ExchangeRatesResponseDto,
} from "../models/exchange-rates-response-dto.js";
import {
  listPaymentResponseDtoSchema,
  type ListPaymentResponseDto,
} from "../models/list-payment-response-dto.js";
import {
  massPaymentDetailsResponseDtoSchema,
  type MassPaymentDetailsResponseDto,
} from "../models/mass-payment-details-response-dto.js";
import {
  massPaymentResponseDtoSchema,
  type MassPaymentResponseDto,
} from "../models/mass-payment-response-dto.js";
import {
  paymentOptionsResponseDtoSchema,
  type PaymentOptionsResponseDto,
} from "../models/payment-options-response-dto.js";
import { paymentRequestDtoInternalSchema, type PaymentRequestDto } from "../models/payment-request-dto.js";
import { paymentResponseDtoSchema, type PaymentResponseDto } from "../models/payment-response-dto.js";
import {
  voidRequestDtoInternalSchema,
  voidRequestDtoSchema,
  type VoidRequestDto,
} from "../models/void-request-dto.js";
import type { Servers } from "../servers.js";

export class Payments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Cancel a payment
   *
   * @remarks
   * Cancel an existing payment.
   *
   * You can cancel a payment only when the payment `singleStatus` is `SCHEDULED`. When BILL starts
   * processing the payment, the payment `singleStatus` changes. At that point, you cannot cancel
   * the payment. You can attempt to void the payment with `POST /v3/payments/{paymentId}/void`.
   *
   * @returns Cancel a payment response
   *
   * @throws {@link Payments.CancelPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelPayment(
    request: Payments.CancelPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponseDto, Payments.CancelPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments/{paymentId}/cancel"),
        auth: noneAuth,
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentResponseDtoSchema },
        errorFactory: Payments.CancelPaymentError,
      },
      options,
    );
  }

  /**
   * Create a bulk payment
   *
   * @remarks
   * Create a request for paying multiple bills. You can pay up to 50 bills with one `POST
   * /v3/payments/bulk` request.
   *
   * Bulk payments at BILL follow a set of rules.
   * * **Successful response**: In your bulk payment request, all your bill payments must be
   *   successful for a successful response. If any bill payment is not successful, the entire
   *   request fails and none of the bills in the request are paid.
   * * **You can pay multiple vendors**: You can pay multiple vendors with one `POST
   *   /v3/payments/bulk` request. In this case, make sure that you do not set `vendorId` in your
   *   request.
   * * **You can only pay existing bills**: When you create a single payment with `POST
   *   /v3/payments`, you can set `createBill` as `true` in your request for creating a new bill for
   *   a vendor payment. In your bulk payment request, an existing `billId` is required for each
   *   bill to be paid.
   * * **Vendors with `"combinePayments": true`**: When you create a bulk payment for a vendor that
   *   has `"combinePayments": true`, BILL combines payments for up to 35 bills in one `payments`
   *   response object, and then combines payments for the remaining bills in a second `payments`
   *   response object.
   *
   * See Get list of vendor payment options to get details about vendor payment options and payment
   * process dates.
   *
   * **Note**: Creating a bulk payment requires an MFA-trusted API session. See MFA setup for
   * information about the BILL MFA process.
   *
   * See Payments in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a bulk payment response
   *
   * @throws {@link Payments.CreateBulkPaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkPayment(
    request: Payments.CreateBulkPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkPaymentResponseDto, Payments.CreateBulkPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: bulkPaymentRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkPaymentResponseDtoSchema },
        errorFactory: Payments.CreateBulkPaymentError,
      },
      options,
    );
  }

  /**
   * Create a mass payment
   *
   * @remarks
   * Create a mass payment request for up to 2000 bills. BILL processes each payment in the mass
   * payment request asynchronously.
   *
   * In the response, a BILL-generated payment batch ID is available. You can track the current
   * status of each payment in a mass payment batch with `GET /v3/payments/mass/{paymentBatchId}`.
   *
   * **Note**: Creating a mass payment requires an MFA-trusted API session. See MFA setup for
   * information about the BILL MFA process.
   *
   * @returns Create a mass payment response
   *
   * @throws {@link Payments.CreateMassPaymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMassPayment(
    request: Payments.CreateMassPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<MassPaymentResponseDto, Payments.CreateMassPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments/mass"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: bulkPaymentRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: massPaymentResponseDtoSchema },
        errorFactory: Payments.CreateMassPaymentError,
      },
      options,
    );
  }

  /**
   * Create a payment
   *
   * @remarks
   * Create a payment.
   *
   * See Get list of vendor payment options to get details about vendor payment options and payment
   * process dates.
   *
   * **Note**: Creating a payment requires an MFA-trusted API session. See MFA setup for information
   * about the BILL MFA process.
   *
   * See Payments in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a payment response
   *
   * @throws {@link Payments.CreatePaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPayment(
    request: Payments.CreatePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponseDto, Payments.CreatePaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: paymentRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentResponseDtoSchema },
        errorFactory: Payments.CreatePaymentError,
      },
      options,
    );
  }

  /**
   * Get check image data
   *
   * @remarks
   * Get an image of an existing check sent to a vendor.
   *
   * The check image is available when the vendor bank processes the check payment. BILL checks in
   * with the bank every 30 minutes to get the check image. The image file format is determined by
   * the vendor bank.
   *
   * From the response, use `downloadLink` in a GET request to download the front and back images of
   * the check.
   *
   * ```
   * curl '{downloadLink}' --header 'sessionId: {session_id}' --output {check_name}
   * ```
   *
   * @returns Get check image data response
   *
   * @throws {@link Payments.GetCheckImageDataError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckImageData(
    request: Payments.GetCheckImageDataRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckImageDataResponseDto, Payments.GetCheckImageDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments/{paymentId}/check-image"),
        auth: noneAuth,
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkImageDataResponseDtoSchema },
        errorFactory: Payments.GetCheckImageDataError,
      },
      options,
    );
  }

  /**
   * Get BILL exchange rate
   *
   * @remarks
   * Get the current BILL exchange rate and exchange rate batch ID for paying an international
   * vendor. When the vendor bill currency is not `USD`, the exchange rate batch ID is required for
   * creating a payment with `POST /v3/payments` or `POST /v3/payments/bulk`.
   *
   * BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is
   * generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get
   * the current exchange rate and batch ID based on the payment amount and vendor bill currency.
   *
   * In production, a BILL batch is valid for a maximum of 20 minutes. response provides the
   * timestamp when the current batch will expire. For example, if a batch has been active for 17
   * minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3
   * minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).
   *
   * **Note**:
   * * International vendor payment information is required for you to get the BILL exchange rate
   *   with this endpoint.
   * * When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US
   *   business day.
   *
   * @returns Get BILL exchange rate response
   *
   * @throws {@link Payments.GetExchangeRateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExchangeRate(
    request: Payments.GetExchangeRateRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangeRateResponseDto, Payments.GetExchangeRateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments/exchange-rate"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "vendorId", value: request.vendorId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: exchangeRateResponseDtoSchema },
        errorFactory: Payments.GetExchangeRateError,
      },
      options,
    );
  }

  /**
   * Get BILL exchange rates for multiple vendors
   *
   * @remarks
   * Get the current BILL exchange rate and exchange rate batch ID for multiple international
   * vendors with one API request. When the vendor bill currency is not `USD`, the exchange rate
   * batch ID is required for creating a payment with `POST /v3/payments` or `POST
   * /v3/payments/bulk`.
   *
   * BILL maintains all `exchangeRate` values in a batch. When a batch expires, a new batch ID is
   * generated and all `exchangeRate` values are updated in the new batch. Use this endpoint to get
   * the current exchange rate and batch ID based on the payment amount and vendor bill currency.
   *
   * In production, a BILL batch is valid for a maximum of 20 minutes. response provides the
   * timestamp when the current batch will expire. For example, if a batch has been active for 17
   * minutes when you get the `exchangeRateBatchId`, `expirationTime` indicates that you have 3
   * minutes remaining (with `POST /v3/payments` or `POST /v3/payments/bulk`).
   *
   * **Note**:
   * * International vendor payment information is required for you to get BILL exchange rates with
   *   this endpoint.
   * * When the vendor bill currency is not `USD`, the payment `processDate` **must be** the next US
   *   business day.
   *
   * @returns Get BILL exchange rates for multiple vendors response
   *
   * @throws {@link Payments.GetExchangeRatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExchangeRates(
    request: Payments.GetExchangeRatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ExchangeRatesResponseDto, Payments.GetExchangeRatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments/exchange-rate"),
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
          schema: s.array(s.lazy(() => exchangeRateRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: exchangeRatesResponseDtoSchema },
        errorFactory: Payments.GetExchangeRatesError,
      },
      options,
    );
  }

  /**
   * Get mass payment status
   *
   * @remarks
   * Get details about an existing mass payment batch.
   *
   * In the response, you get the status of each payment in the mass payment batch. Each payment is
   * either `scheduled`, `completed`, or `failed`. In addition, you get the `count` for the total
   * number of payments in the mass payments batch.
   *
   * **Note**: From the list of `completed` payments in the response, BILL begins processing
   * payments based on the payment `processDate`.
   *
   * @returns Get mass payment status response
   *
   * @throws {@link Payments.GetMassPaymentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMassPayment(
    request: Payments.GetMassPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<MassPaymentDetailsResponseDto, Payments.GetMassPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments/mass/{paymentBatchId}"),
        auth: noneAuth,
        pathParams: [{ name: "paymentBatchId", value: request.paymentBatchId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: massPaymentDetailsResponseDtoSchema },
        errorFactory: Payments.GetMassPaymentError,
      },
      options,
    );
  }

  /**
   * Get payment details
   *
   * @remarks
   * Get details about an existing payment.
   *
   * @returns Get payment details response
   *
   * @throws {@link Payments.GetPaymentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayment(
    request: Payments.GetPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponseDto, Payments.GetPaymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments/{paymentId}"),
        auth: noneAuth,
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentResponseDtoSchema },
        errorFactory: Payments.GetPaymentError,
      },
      options,
    );
  }

  /**
   * Get list of vendor payment options
   *
   * @remarks
   * Get a list of vendor payment options available based on the funding account options available
   * in the signed-in user's BILL organization and on the payment methods accepted by a vendor.
   *
   * See Vendor payment options in the Guides section for more information, sample requests, and
   * responses.
   *
   * @returns Get list of vendor payment options response
   *
   * @throws {@link Payments.ListPaymentOptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentOptions(
    request: Payments.ListPaymentOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentOptionsResponseDto, Payments.ListPaymentOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments/options"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "vendorId", value: request.vendorId, schema: s.string() },
          { name: "amount", value: request.amount, schema: s.float64() },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentOptionsResponseDtoSchema },
        errorFactory: Payments.ListPaymentOptionsError,
      },
      options,
    );
  }

  /**
   * Get list of payments
   *
   * @remarks
   * Get a list of payment objects. By default, you get 20 results on one page of results. Set `max`
   * in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of payments response
   *
   * @throws {@link Payments.ListPaymentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPayments(
    request: Payments.ListPaymentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListPaymentResponseDto, Payments.ListPaymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/payments"),
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
        success: { kind: "json", schema: listPaymentResponseDtoSchema },
        errorFactory: Payments.ListPaymentsError,
      },
      options,
    );
  }

  /**
   * Void a payment
   *
   * @remarks
   * Void an existing payment.
   *
   * Void a bill payment that has started processing and cannot be canceled (with `POST
   * /v3/payments/{paymentId}/cancel`). You can attempt to void payments made both with BILL
   * (online) and outside BILL (offline).
   *
   * ### Void a payment made with BILL (online)
   *
   * In your /`POST /v3/payments/{paymentId}/void` request:
   * * Set `paymentId` as the BILL-generated ID of the payment. The value begins with `stp`.
   * * Set `type` as the void payment request type
   * * Set `reason` as the reason for voiding the payment
   *
   * See Can I cancel or void a Payables payment? in the BILL Help Center to learn about the BILL
   * void payment process and timing in the production environment.
   *
   * @returns Void a payment response
   *
   * @throws {@link Payments.VoidPaymentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voidPayment(
    request: Payments.VoidPaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentResponseDto, Payments.VoidPaymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/payments/{paymentId}/void"),
        auth: noneAuth,
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: voidRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: paymentResponseDtoSchema },
        errorFactory: Payments.VoidPaymentError,
      },
      options,
    );
  }
}

export namespace Payments {
  export type CancelPaymentRequest = {
    paymentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const cancelPaymentRequestSchema: Schema<CancelPaymentRequest> = s.lazySchema(() =>
    s.object<CancelPaymentRequest>({
      paymentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class CancelPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelPaymentError> = [
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

  export type CreateBulkPaymentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BulkPaymentRequestDto;
  };

  export class CreateBulkPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBulkPaymentError> = [
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

  export type CreateMassPaymentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BulkPaymentRequestDto;
  };

  export class CreateMassPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateMassPaymentError> = [
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

  export type CreatePaymentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: PaymentRequestDto;
  };

  export class CreatePaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentError> = [
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

  export type GetCheckImageDataRequest = {
    paymentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCheckImageDataRequestSchema: Schema<GetCheckImageDataRequest> = s.lazySchema(() =>
    s.object<GetCheckImageDataRequest>({
      paymentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCheckImageDataError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCheckImageDataError> = [
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

  export type GetExchangeRateRequest = {
    vendorId: string;
    amount: number;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetExchangeRateError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExchangeRateError> = [
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

  export type GetExchangeRatesRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: ExchangeRateRequestDto[];
  };

  export const getExchangeRatesRequestSchema: Schema<GetExchangeRatesRequest> = s.lazySchema(() =>
    s.object<GetExchangeRatesRequest>({
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: s.array(s.lazy(() => exchangeRateRequestDtoSchema)).check(s.minLength(1)),
    }),
  );

  export class GetExchangeRatesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExchangeRatesError> = [
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

  export type GetMassPaymentRequest = {
    paymentBatchId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetMassPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMassPaymentError> = [
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

  export type GetPaymentRequest = {
    paymentId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getPaymentRequestSchema: Schema<GetPaymentRequest> = s.lazySchema(() =>
    s.object<GetPaymentRequest>({
      paymentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPaymentError> = [
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

  export type ListPaymentOptionsRequest = {
    vendorId: string;
    amount: number;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListPaymentOptionsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentOptionsError> = [
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

  export type ListPaymentsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listPaymentsRequestSchema: Schema<ListPaymentsRequest> = s.lazySchema(() =>
    s.object<ListPaymentsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListPaymentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentsError> = [
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

  export type VoidPaymentRequest = {
    paymentId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: VoidRequestDto;
  };

  export const voidPaymentRequestSchema: Schema<VoidPaymentRequest> = s.lazySchema(() =>
    s.object<VoidPaymentRequest>({
      paymentId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: voidRequestDtoSchema,
    }),
  );

  export class VoidPaymentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<VoidPaymentError> = [
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
