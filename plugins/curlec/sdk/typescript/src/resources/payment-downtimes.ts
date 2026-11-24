import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { paymentDowntimeSchema, type PaymentDowntime } from "../models/payment-downtime.js";
import {
  paymentsDowntimesResponseSchema,
  type PaymentsDowntimesResponse,
} from "../models/payments-downtimes-response.js";
import type { Servers } from "../servers.js";

/**
 * Scheduled and live downtime information for card, netbanking, and UPI. Poll or subscribe to
 * payment.downtime webhooks to detect degraded methods and adjust your checkout UI.
 */
export class PaymentDowntimes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch payment downtime by ID
   *
   * @remarks
   * Retrieve details of a specific payment downtime event.
   *
   * @returns Downtime details.
   *
   * @throws {@link PaymentDowntimes.FetchPaymentDowntimeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPaymentDowntime(
    request: PaymentDowntimes.FetchPaymentDowntimeRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentDowntime, PaymentDowntimes.FetchPaymentDowntimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/downtimes/{id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentDowntimeSchema },
        errorFactory: PaymentDowntimes.FetchPaymentDowntimeError,
      },
      options,
    );
  }

  /**
   * Fetch all payment downtimes
   *
   * @remarks
   * Retrieve current and upcoming payment method downtimes for cards, netbanking, and UPI. Use to
   * surface degraded methods in checkout UI.
   *
   * @returns Collection of active and scheduled downtimes.
   *
   * @throws {@link PaymentDowntimes.FetchPaymentDowntimesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPaymentDowntimes(
    options?: RequestOptions,
  ): ApiPromise<PaymentsDowntimesResponse, PaymentDowntimes.FetchPaymentDowntimesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payments/downtimes"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentsDowntimesResponseSchema },
        errorFactory: PaymentDowntimes.FetchPaymentDowntimesError,
      },
      options,
    );
  }
}

export namespace PaymentDowntimes {
  export type FetchPaymentDowntimeRequest = {
    /** Downtime identifier. */
    id: string;
  };

  export class FetchPaymentDowntimeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentDowntimeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class FetchPaymentDowntimesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchPaymentDowntimesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
