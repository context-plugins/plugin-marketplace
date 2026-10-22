import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { cryptogramCreateSchema, type CryptogramCreate } from "../models/cryptogram-create.js";
import { cryptogramSchema, type Cryptogram } from "../models/cryptogram.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { networkTokenCreateSchema, type NetworkTokenCreate } from "../models/network-token-create.js";
import { networkTokenSchema, type NetworkToken } from "../models/network-token.js";
import { networkTokensSchema, type NetworkTokens } from "../models/network-tokens.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage network tokens for stored payment methods.
 */
export class PaymentMethodsNetworkTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Provision network token
   *
   * @remarks
   * Provision a network token for a payment method.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentMethodNetworkToken(
    request: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworkToken, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods/{payment_method_id}/network-tokens"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: networkTokenCreateSchema },
      },
      {
        success: { kind: "json", schema: networkTokenSchema },
        errorFactory: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenError,
      },
      options,
    );
  }

  /**
   * Provision network token cryptogram
   *
   * @remarks
   * Provision a cryptogram for a network token.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentMethodNetworkTokenCryptogram(
    request: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramRequest,
    options?: RequestOptions,
  ): ApiPromise<Cryptogram, PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/payment-methods/{payment_method_id}/network-tokens/{network_token_id}/cryptogram",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
          { name: "network_token_id", value: request.networkTokenId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: cryptogramCreateSchema },
      },
      {
        success: { kind: "json", schema: cryptogramSchema },
        errorFactory: PaymentMethodsNetworkTokens.CreatePaymentMethodNetworkTokenCryptogramError,
      },
      options,
    );
  }

  /**
   * Delete network token
   *
   * @remarks
   * Delete a network token for a payment method.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePaymentMethodNetworkToken(
    request: PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/payment-methods/{payment_method_id}/network-tokens/{network_token_id}",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
          { name: "network_token_id", value: request.networkTokenId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PaymentMethodsNetworkTokens.DeletePaymentMethodNetworkTokenError,
      },
      options,
    );
  }

  /**
   * List network tokens
   *
   * @remarks
   * List all network tokens stored for a payment method.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPaymentMethodNetworkTokens(
    request: PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworkTokens, PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment-methods/{payment_method_id}/network-tokens"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "payment_method_id", value: request.paymentMethodId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkTokensSchema },
        errorFactory: PaymentMethodsNetworkTokens.ListPaymentMethodNetworkTokensError,
      },
      options,
    );
  }

  /**
   * Resume network token
   *
   * @remarks
   * Resume a suspended network token for a payment method.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resumePaymentMethodNetworkToken(
    request: PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworkToken, PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/payment-methods/{payment_method_id}/network-tokens/{network_token_id}/resume",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
          { name: "network_token_id", value: request.networkTokenId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkTokenSchema },
        errorFactory: PaymentMethodsNetworkTokens.ResumePaymentMethodNetworkTokenError,
      },
      options,
    );
  }

  /**
   * Suspend network token
   *
   * @remarks
   * Suspend a network token for a payment method.
   *
   * @returns Successful Response
   *
   * @throws {@link PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  suspendPaymentMethodNetworkToken(
    request: PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworkToken, PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/payment-methods/{payment_method_id}/network-tokens/{network_token_id}/suspend",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "payment_method_id", value: request.paymentMethodId, schema: s.string() },
          { name: "network_token_id", value: request.networkTokenId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkTokenSchema },
        errorFactory: PaymentMethodsNetworkTokens.SuspendPaymentMethodNetworkTokenError,
      },
      options,
    );
  }
}

export namespace PaymentMethodsNetworkTokens {
  export type CreatePaymentMethodNetworkTokenRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: NetworkTokenCreate;
  };

  export class CreatePaymentMethodNetworkTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentMethodNetworkTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreatePaymentMethodNetworkTokenCryptogramRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the network token */
    networkTokenId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: CryptogramCreate;
  };

  export class CreatePaymentMethodNetworkTokenCryptogramError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePaymentMethodNetworkTokenCryptogramError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeletePaymentMethodNetworkTokenRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the network token */
    networkTokenId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class DeletePaymentMethodNetworkTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePaymentMethodNetworkTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListPaymentMethodNetworkTokensRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListPaymentMethodNetworkTokensError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPaymentMethodNetworkTokensError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ResumePaymentMethodNetworkTokenRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the network token */
    networkTokenId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ResumePaymentMethodNetworkTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResumePaymentMethodNetworkTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SuspendPaymentMethodNetworkTokenRequest = {
    /** The ID of the payment method */
    paymentMethodId: string;
    /** The ID of the network token */
    networkTokenId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class SuspendPaymentMethodNetworkTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SuspendPaymentMethodNetworkTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
