import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { stripeSignatureSchema, type StripeSignature } from "../models/unions/stripe-signature.js";
import type { Servers } from "../servers.js";

export class Billing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Billing Success
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  billingSuccessBillingSuccessGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/success"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Billing Webhook
   *
   * @remarks
   * Stripe calls this to confirm payments. Upgrades/downgrades the key.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.BillingWebhookBillingWebhookPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  billingWebhookBillingWebhookPost(
    request: Billing.BillingWebhookBillingWebhookPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Billing.BillingWebhookBillingWebhookPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billing/webhook"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "stripe-signature",
            value: request.stripeSignature,
            schema: s.optional(s.lazy(() => stripeSignatureSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Billing.BillingWebhookBillingWebhookPostError,
      },
      options,
    );
  }

  /**
   * Checkout
   *
   * @remarks
   * Start a Stripe Checkout for a paid plan. Returns a payment URL.
   *
   * @returns Successful Response
   *
   * @throws {@link Billing.CheckoutBillingCheckoutPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkoutBillingCheckoutPost(
    request: Billing.CheckoutBillingCheckoutPostRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Billing.CheckoutBillingCheckoutPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billing/checkout"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "tier", value: request.tier, schema: s.defaulted(s.string(), "pro") },
          { name: "interval", value: request.interval, schema: s.defaulted(s.string(), "month") },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Billing.CheckoutBillingCheckoutPostError,
      },
      options,
    );
  }
}

export namespace Billing {
  export type BillingWebhookBillingWebhookPostRequest = {
    stripeSignature?: StripeSignature;
  };

  export class BillingWebhookBillingWebhookPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BillingWebhookBillingWebhookPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CheckoutBillingCheckoutPostRequest = {
    /** the key you want to upgrade */
    apiKey: string;
    /** pro ($19/mo), ultra ($59/mo), mega ($199/mo) or notary ($49/mo) @default "pro" */
    tier?: string;
    /**
     * 'month' (default) or 'annual' — annual prepay is 2 months free ($190/$590/$1,990/$490 per
     * year)
     *
     * @default "month"
     */
    interval?: string;
  };

  export class CheckoutBillingCheckoutPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CheckoutBillingCheckoutPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
