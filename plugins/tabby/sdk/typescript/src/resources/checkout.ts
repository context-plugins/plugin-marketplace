import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2CheckoutRequestInternalSchema,
  type ApiV2CheckoutRequest,
} from "../models/api-v2-checkout-request.js";
import { checkoutSessionInternalSchema, type CheckoutSession } from "../models/checkout-session.js";
import { error400CheckoutPostSchema, type Error400CheckoutPost } from "../models/error400-checkout-post.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import {
  error401KeyDoesntExistSchema,
  type Error401KeyDoesntExist,
} from "../models/error401-key-doesnt-exist.js";
import { error401MerchantNullSchema, type Error401MerchantNull } from "../models/error401-merchant-null.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import type { Servers } from "../servers.js";

/**
 * Checkout is a whole process of customer data collection and payment authorization.
 */
export class Checkout {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve an existing checkout session
   *
   * @remarks
   * Use this API to retrieve the token (only if tokens used in your integration )
   *
   * @returns Success. Checkout session object is returned.
   *
   * @throws {@link Checkout.GetCheckoutSessionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckoutSession(
    request: Checkout.GetCheckoutSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutSession, Checkout.GetCheckoutSessionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/checkout/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutSessionInternalSchema },
        errorFactory: Checkout.GetCheckoutSessionError,
      },
      options,
    );
  }

  /**
   * Create a session
   *
   * @remarks
   * Creates a Checkout session. Creates Session and Payment, returns Pre-Scoring result (status),
   * ids of Payment and Session.
   *
   * @returns Success. Checkout session object is returned.
   *
   * @throws {@link Checkout.PostCheckoutSessionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCheckoutSession(
    request: Checkout.PostCheckoutSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<CheckoutSession, Checkout.PostCheckoutSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/checkout"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2CheckoutRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: checkoutSessionInternalSchema },
        errorFactory: Checkout.PostCheckoutSessionError,
      },
      options,
    );
  }
}

export namespace Checkout {
  export type GetCheckoutSessionRequest = {
    /** ID of the session. */
    id: string;
  };

  export class GetCheckoutSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401KeyDoesntExist", Error401KeyDoesntExist>
      | Declared<"error403", Error403>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCheckoutSessionError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      {
        on: 401,
        kind: "error401KeyDoesntExist",
        decode: { kind: "json", schema: error401KeyDoesntExistSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostCheckoutSessionRequest = {
    body: ApiV2CheckoutRequest;
  };

  export class PostCheckoutSessionError extends ApiError {
    declare readonly payload:
      | Declared<"error400CheckoutPost", Error400CheckoutPost>
      | Declared<"error401MerchantNull", Error401MerchantNull>
      | Declared<"error403", Error403>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCheckoutSessionError> = [
      { on: 400, kind: "error400CheckoutPost", decode: { kind: "json", schema: error400CheckoutPostSchema } },
      { on: 401, kind: "error401MerchantNull", decode: { kind: "json", schema: error401MerchantNullSchema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
