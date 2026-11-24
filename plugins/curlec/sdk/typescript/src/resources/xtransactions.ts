import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { transactionsResponseSchema, type TransactionsResponse } from "../models/transactions-response.js";
import { xTransactionSchema, type XTransaction } from "../models/xtransaction.js";
import type { Servers } from "../servers.js";

/**
 * Fetch RazorpayX transaction records — credits (bank_transfer inflows) and debits (payout
 * outflows)
 */
export class XTransactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a transaction by ID
   *
   * @remarks
   * Fetch details of a specific transaction from a RazorpayX account by its ID.
   *
   * @returns Transaction details
   *
   * @throws {@link XTransactions.FetchTransactionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTransaction(
    request: XTransactions.FetchTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<XTransaction, XTransactions.FetchTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{transaction_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "transaction_id", value: request.transactionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: xTransactionSchema },
        errorFactory: XTransactions.FetchTransactionError,
      },
      options,
    );
  }

  /**
   * List transactions for a RazorpayX account
   *
   * @remarks
   * Returns all transaction records (credits and debits) for a given RazorpayX account. Use
   * account_number from Dashboard → My Account & Settings → Banking → Customer Identifier.
   *
   * @returns List of transactions
   *
   * @throws {@link XTransactions.ListTransactionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTransactions(
    request: XTransactions.ListTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse, XTransactions.ListTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "account_number", value: request.accountNumber, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsResponseSchema },
        errorFactory: XTransactions.ListTransactionsError,
      },
      options,
    );
  }
}

export namespace XTransactions {
  export type FetchTransactionRequest = {
    /** Transaction ID (txn_*) */
    transactionId: string;
  };

  export class FetchTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchTransactionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListTransactionsRequest = {
    /**
     * RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live
     * mode.
     */
    accountNumber: string;
    /** Unix timestamp filter start */
    from?: number;
    /** Unix timestamp filter end */
    to?: number;
    /** Number of transactions to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of transactions to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export const listTransactionsRequestSchema: Schema<ListTransactionsRequest> = s.lazySchema(() =>
    s.object<ListTransactionsRequest>({
      accountNumber: s.string(),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.lte(100)), 10),
      skip: s.defaulted(s.int(), 0),
    }),
  );

  export class ListTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTransactionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
