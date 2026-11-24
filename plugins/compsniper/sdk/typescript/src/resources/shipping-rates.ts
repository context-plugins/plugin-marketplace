import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  shippingRateRequestInternalSchema,
  shippingRateRequestSchema,
  type ShippingRateRequest,
} from "../models/shipping-rate-request.js";
import {
  shippingRateResponseInternalSchema,
  type ShippingRateResponse,
} from "../models/shipping-rate-response.js";
import {
  shippingRateUsageResponseInternalSchema,
  type ShippingRateUsageResponse,
} from "../models/shipping-rate-usage-response.js";
import type { Servers } from "../servers.js";

export class ShippingRates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Shipping Rates usage
   *
   * @remarks
   * Returns the authenticated account's separate Shipping Rates plan, quota, usage, rate limit, and
   * billing period.
   *
   * @returns Current independent Shipping Rates entitlement and usage.
   *
   * @throws {@link ShippingRates.GetShippingRateUsageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShippingRateUsage(
    options?: RequestOptions,
  ): ApiPromise<ShippingRateUsageResponse, ShippingRates.GetShippingRateUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/shipping/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shippingRateUsageResponseInternalSchema },
        errorFactory: ShippingRates.GetShippingRateUsageError,
      },
      options,
    );
  }

  /**
   * Get eBay shipping-rate estimates
   *
   * @remarks
   * Returns quote-only shipping estimates for a US origin ZIP, US destination ZIP, package weight,
   * and dimensions. Applicable services are returned in rates. Carrier-packaging and
   * content-restricted services are returned in conditionalRates unless the caller explicitly
   * confirms the requirement. Preserves retail and eBay discounted prices when available. Requires
   * a separate Shipping Rates subscription and consumes one shipping request only when usable
   * applicable rates are returned.
   *
   * @returns Usable shipping-rate estimates. One separate shipping request is consumed unless this
   * is an idempotent replay.
   *
   * @throws {@link ShippingRates.GetShippingRatesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShippingRates(
    request: ShippingRates.GetShippingRatesRequest,
    options?: RequestOptions,
  ): ApiPromise<ShippingRateResponse, ShippingRates.GetShippingRatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/shipping/rates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: shippingRateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: shippingRateResponseInternalSchema },
        errorFactory: ShippingRates.GetShippingRatesError,
      },
      options,
    );
  }
}

export namespace ShippingRates {
  export class GetShippingRateUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetShippingRateUsageError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type GetShippingRatesRequest = {
    /**
     * Replays a completed identical quote without consuming another shipping request. Use a new key
     * for a different request body.
     */
    idempotencyKey?: string;
    body: ShippingRateRequest;
  };

  export const getShippingRatesRequestSchema: Schema<GetShippingRatesRequest> = s.lazySchema(() =>
    s.object<GetShippingRatesRequest>({
      idempotencyKey: s.optional(s.string().check(s.minLength(1), s.maxLength(128), s.pattern("^[!-~]+$"))),
      body: shippingRateRequestSchema,
    }),
  );

  export class GetShippingRatesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Declared<"apiErrorModel8", ApiErrorModel>
      | Declared<"apiErrorModel9", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetShippingRatesError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 409, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 413, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel8", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel9", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
