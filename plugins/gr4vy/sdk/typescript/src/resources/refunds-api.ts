import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
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
import { refundSchema, type Refund } from "../models/refund.js";
import { refundsSchema, type Refunds } from "../models/refunds.js";
import {
  transactionRefundCreateSchema,
  type TransactionRefundCreate,
} from "../models/transaction-refund-create.js";
import { body1Schema, type Body1 } from "../models/unions/body1.js";
import { idempotencyKey2Schema, type IdempotencyKey2 } from "../models/unions/idempotency-key2.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage transaction refunds.
 */
export class RefundsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create batch transaction refund
   *
   * @remarks
   * Create a refund for all instruments on a transaction.
   *
   * @returns Successful Response
   *
   * @throws {@link RefundsApi.CreateFullTransactionRefundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFullTransactionRefund(
    request: RefundsApi.CreateFullTransactionRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<Refunds, RefundsApi.CreateFullTransactionRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/refunds/all"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => body1Schema)) },
      },
      {
        success: { kind: "json", schema: refundsSchema },
        errorFactory: RefundsApi.CreateFullTransactionRefundError,
      },
      options,
    );
  }

  /**
   * Create transaction refund
   *
   * @remarks
   * Create a refund for a transaction.
   *
   * @returns Successful Response
   *
   * @throws {@link RefundsApi.CreateTransactionRefundError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransactionRefund(
    request: RefundsApi.CreateTransactionRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<Refund, RefundsApi.CreateTransactionRefundError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/refunds"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey2Schema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: transactionRefundCreateSchema },
      },
      {
        success: { kind: "json", schema: refundSchema },
        errorFactory: RefundsApi.CreateTransactionRefundError,
      },
      options,
    );
  }

  /**
   * Get refund
   *
   * @remarks
   * Fetch a refund.
   *
   * @returns Successful Response
   *
   * @throws {@link RefundsApi.GetRefundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRefund(
    request: RefundsApi.GetRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<Refund, RefundsApi.GetRefundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/refunds/{refund_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "refund_id", value: request.refundId, schema: s.string() }],
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
        success: { kind: "json", schema: refundSchema },
        errorFactory: RefundsApi.GetRefundError,
      },
      options,
    );
  }

  /**
   * Get transaction refund
   *
   * @remarks
   * Fetch refund for a transaction.
   *
   * @returns Successful Response
   *
   * @throws {@link RefundsApi.GetTransactionRefundError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransactionRefund(
    request: RefundsApi.GetTransactionRefundRequest,
    options?: RequestOptions,
  ): ApiPromise<Refund, RefundsApi.GetTransactionRefundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/refunds/{refund_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "transaction_id", value: request.transactionId, schema: s.string() },
          { name: "refund_id", value: request.refundId, schema: s.string() },
        ],
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
        success: { kind: "json", schema: refundSchema },
        errorFactory: RefundsApi.GetTransactionRefundError,
      },
      options,
    );
  }

  /**
   * List transaction refunds
   *
   * @remarks
   * List refunds for a transaction.
   *
   * @returns Successful Response
   *
   * @throws {@link RefundsApi.ListTransactionRefundsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactionRefunds(
    request: RefundsApi.ListTransactionRefundsRequest,
    options?: RequestOptions,
  ): ApiPromise<Refunds, RefundsApi.ListTransactionRefundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}/refunds"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
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
        success: { kind: "json", schema: refundsSchema },
        errorFactory: RefundsApi.ListTransactionRefundsError,
      },
      options,
    );
  }
}

export namespace RefundsApi {
  export type CreateFullTransactionRefundRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
    body?: Body1;
  };

  export class CreateFullTransactionRefundError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateFullTransactionRefundError> = [
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

  export type CreateTransactionRefundRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    /**
     * A unique key that identifies this request. Providing this header will make this an idempotent
     * request. We recommend using V4 UUIDs, or another random string with enough entropy to avoid
     * collisions.
     */
    idempotencyKey?: IdempotencyKey2;
    body: TransactionRefundCreate;
  };

  export class CreateTransactionRefundError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateTransactionRefundError> = [
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

  export type GetRefundRequest = {
    /** The ID of the refund */
    refundId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetRefundError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetRefundError> = [
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

  export type GetTransactionRefundRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the refund */
    refundId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetTransactionRefundError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTransactionRefundError> = [
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

  export type ListTransactionRefundsRequest = {
    /** The ID of the transaction */
    transactionId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListTransactionRefundsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListTransactionRefundsError> = [
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
