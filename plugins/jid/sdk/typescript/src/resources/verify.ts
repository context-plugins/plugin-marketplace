import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "../models/activity.js";
import { errorSchema, type Error } from "../models/error.js";
import { receiptSchema, type Receipt } from "../models/receipt.js";
import { verifyResponseSchema, type VerifyResponse } from "../models/verify-response.js";
import type { Servers } from "../servers.js";

/**
 * Decisions, files and receipts
 */
export class Verify {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * The full file: verify plus location, owner statements, possible matches and the…
   *
   * @returns File
   *
   * @throws {@link Verify.GetBusinessFileError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getBusinessFile(
    request: Verify.GetBusinessFileRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Verify.GetBusinessFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/entities/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Verify.GetBusinessFileError,
      },
      options,
    );
  }

  /**
   * Retrieve a signed verification receipt
   *
   * @remarks
   * Free; not a check. Readable by anyone holding the receipt id, so it can be shown to an auditor
   * or counterparty. Verify `signature.sig` over the canonical statement with the key at
   * /.well-known/jid-keys.json.
   *
   * @returns Receipt
   *
   * @throws {@link Verify.GetReceiptError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getReceipt(
    request: Verify.GetReceiptRequest,
    options?: RequestOptions,
  ): ApiPromise<Receipt, Verify.GetReceiptError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/receipts/{receipt_id}"),
        auth: noneAuth,
        pathParams: [{ name: "receipt_id", value: request.receiptId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: receiptSchema },
        errorFactory: Verify.GetReceiptError,
      },
      options,
    );
  }

  /**
   * The published decision rules: activities, requirements, legal basis
   *
   * @returns Rules
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listActivities(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/activities"),
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
   * Verify a business before acting; with an activity, get a decision and a signed…
   *
   * @remarks
   * One check. Without activity, jurisdiction or amount: status, flags and every current fact with
   * its receipts (unchanged since 1.0). With any of them: also `decision` (proceed | review | stop
   * | insufficient_data) with reasons, and `receipt` (stored 13 months, Ed25519-signed). Act only
   * on proceed; requirements Jid cannot check are unknown and lead to review.
   *
   * @returns The file, and the decision when requested
   *
   * @throws {@link Verify.VerifyBusinessError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  verifyBusiness(
    request: Verify.VerifyBusinessRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyResponse, Verify.VerifyBusinessError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/entities/{id}/verify"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "activity", value: request.activity, schema: s.optional(s.lazy(() => activitySchema)) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.float64()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyResponseSchema },
        errorFactory: Verify.VerifyBusinessError,
      },
      options,
    );
  }
}

export namespace Verify {
  export type GetBusinessFileRequest = {
    /** Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). */
    id: string;
  };

  export class GetBusinessFileError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBusinessFileError> = [
      { on: 402, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetReceiptRequest = {
    receiptId: string;
  };

  export const getReceiptRequestSchema: Schema<GetReceiptRequest> = s.lazySchema(() =>
    s.object<GetReceiptRequest>({
      receiptId: s.string().check(s.pattern("^rcpt_[A-Za-z0-9]{22}$")),
    }),
  );

  export class GetReceiptError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReceiptError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VerifyBusinessRequest = {
    /** Jid file id, as returned by search (e.g. gland-pharma-limited-j9nehi). */
    id: string;
    /**
     * What the business is about to do for you. Default general_commerce when jurisdiction or
     * amount is given. Rules: https://jid.com/decision-rules
     */
    activity?: Activity;
    /** US state as US-XX (e.g. US-CO) or ISO 3166-1 alpha-2 country code. */
    jurisdiction?: string;
    /** Transaction amount. Context only: recorded on the receipt, never changes the rules. */
    amount?: number;
    /** ISO 4217 code for amount. Default USD. */
    currency?: string;
  };

  export const verifyBusinessRequestSchema: Schema<VerifyBusinessRequest> = s.lazySchema(() =>
    s.object<VerifyBusinessRequest>({
      id: s.string(),
      activity: s.optional(s.lazy(() => activitySchema)),
      jurisdiction: s.optional(s.string().check(s.pattern("^(US-[A-Z]{2}|[A-Z]{2})$"))),
      amount: s.optional(s.float64().check(s.gte(0))),
      currency: s.optional(s.string().check(s.pattern("^[A-Z]{3}$"))),
    }),
  );

  export class VerifyBusinessError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyBusinessError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
