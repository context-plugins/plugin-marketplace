import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  notFoundHttpException1Schema,
  type NotFoundHttpException1,
} from "../models/not-found-http-exception1.js";
import {
  scopeGivebutterApiDocumentationTransactionsApiSchema,
  type ScopeGivebutterApiDocumentationTransactionsApi,
} from "../models/scope-givebutter-api-documentation-transactions-api.js";
import {
  sortByDescGivebutterApiDocumentationTransactionsApiSchema,
  type SortByDescGivebutterApiDocumentationTransactionsApi,
} from "../models/sort-by-desc-givebutter-api-documentation-transactions-api.js";
import {
  sortByGivebutterApiDocumentationTransactionsApiSchema,
  type SortByGivebutterApiDocumentationTransactionsApi,
} from "../models/sort-by-givebutter-api-documentation-transactions-api.js";
import {
  storeTransactionRequestInternalSchema,
  type StoreTransactionRequest,
} from "../models/store-transaction-request.js";
import {
  transactionResource2InternalSchema,
  type TransactionResource2,
} from "../models/unions/transaction-resource2.js";
import {
  updateTransactionRequestInternalSchema,
  type UpdateTransactionRequest,
} from "../models/update-transaction-request.js";
import {
  v1TransactionsResponseInternalSchema,
  type V1TransactionsResponse,
} from "../models/v1-transactions-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class Transactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all transactions
   *
   * @returns Paginated set of `TransactionResource`
   *
   * @throws {@link Transactions.TransactionsIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsIndex(
    request: Transactions.TransactionsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TransactionsResponse, Transactions.TransactionsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transactions"),
        auth: this.#auth.http,
        pathParams: [],
        query: [
          {
            name: "transactedAfter",
            value: request.transactedAfter,
            schema: s.optionalNullable(s.dateTime()),
          },
          {
            name: "transactedBefore",
            value: request.transactedBefore,
            schema: s.optionalNullable(s.dateTime()),
          },
          { name: "createdAfter", value: request.createdAfter, schema: s.optionalNullable(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optionalNullable(s.dateTime()) },
          { name: "updatedAfter", value: request.updatedAfter, schema: s.optionalNullable(s.dateTime()) },
          { name: "updatedBefore", value: request.updatedBefore, schema: s.optionalNullable(s.dateTime()) },
          {
            name: "checkDepositedAfter",
            value: request.checkDepositedAfter,
            schema: s.optionalNullable(s.dateTime()),
          },
          {
            name: "checkDepositedBefore",
            value: request.checkDepositedBefore,
            schema: s.optionalNullable(s.dateTime()),
          },
          { name: "contacts", value: request.contacts, schema: s.optionalNullable(s.string()) },
          { name: "method", value: request.method, schema: s.optionalNullable(s.string()) },
          {
            name: "scope",
            value: request.scope,
            schema: s.optionalNullable(s.lazy(() => scopeGivebutterApiDocumentationTransactionsApiSchema)),
          },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optionalNullable(s.lazy(() => sortByGivebutterApiDocumentationTransactionsApiSchema)),
          },
          {
            name: "sortByDesc",
            value: request.sortByDesc,
            schema: s.optionalNullable(
              s.lazy(() => sortByDescGivebutterApiDocumentationTransactionsApiSchema),
            ),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TransactionsResponseInternalSchema },
        errorFactory: Transactions.TransactionsIndexError,
      },
      options,
    );
  }

  /**
   * Get a transaction
   *
   * @returns `TransactionResource`
   *
   * @throws {@link Transactions.TransactionsShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsShow(
    request: Transactions.TransactionsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionResource2, Transactions.TransactionsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/transactions/{transaction}"),
        auth: this.#auth.http,
        pathParams: [{ name: "transaction", value: request.transaction, schema: s.nullable(s.string()) }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionResource2InternalSchema },
        errorFactory: Transactions.TransactionsShowError,
      },
      options,
    );
  }

  /**
   * Create a transaction
   *
   * @returns `TransactionResource`
   *
   * @throws {@link Transactions.TransactionsStoreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsStore(
    request: Transactions.TransactionsStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionResource2, Transactions.TransactionsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/transactions"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: storeTransactionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: transactionResource2InternalSchema },
        errorFactory: Transactions.TransactionsStoreError,
      },
      options,
    );
  }

  /**
   * Update a transaction
   *
   * @returns `TransactionResource`
   *
   * @throws {@link Transactions.TransactionsUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsUpdate(
    request: Transactions.TransactionsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionResource2, Transactions.TransactionsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/transactions/{transaction}"),
        auth: this.#auth.http,
        pathParams: [{ name: "transaction", value: request.transaction, schema: s.nullable(s.string()) }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateTransactionRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionResource2InternalSchema },
        errorFactory: Transactions.TransactionsUpdateError,
      },
      options,
    );
  }
}

export namespace Transactions {
  export type TransactionsIndexRequest = {
    transactedAfter?: Date | null;
    transactedBefore?: Date | null;
    createdAfter?: Date | null;
    createdBefore?: Date | null;
    updatedAfter?: Date | null;
    updatedBefore?: Date | null;
    checkDepositedAfter?: Date | null;
    checkDepositedBefore?: Date | null;
    contacts?: string | null;
    method?: string | null;
    scope?: ScopeGivebutterApiDocumentationTransactionsApi | null;
    sortBy?: SortByGivebutterApiDocumentationTransactionsApi | null;
    sortByDesc?: SortByDescGivebutterApiDocumentationTransactionsApi | null;
  };

  export class TransactionsIndexError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<TransactionsIndexError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type TransactionsShowRequest = {
    /** The transaction tid */
    transaction: string | null;
  };

  export class TransactionsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransactionsShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type TransactionsStoreRequest = {
    body: StoreTransactionRequest;
  };

  export class TransactionsStoreError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"notFoundHttpException1", NotFoundHttpException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransactionsStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "notFoundHttpException1",
        decode: { kind: "json", schema: notFoundHttpException1Schema },
      },
    ];
  }

  export type TransactionsUpdateRequest = {
    /** The transaction tid */
    transaction: string | null;
    body?: UpdateTransactionRequest;
  };

  export class TransactionsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TransactionsUpdateError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }
}
