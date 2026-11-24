import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "../models/dispute.js";
import {
  disputesContestRequestSchema,
  type DisputesContestRequest,
} from "../models/disputes-contest-request.js";
import { disputesResponseSchema, type DisputesResponse } from "../models/disputes-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { expandSchema, type Expand } from "../models/expand.js";
import type { Servers } from "../servers.js";

/**
 * Disputes (chargebacks) are raised by customers via their bank. You can accept (lose) or contest
 * (challenge with evidence) each dispute. Monitor respond_by timestamp — missing the deadline
 * forfeits the dispute.
 */
export class Disputes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept a dispute
   *
   * @remarks
   * Accept a dispute, acknowledging it as lost. This is irreversible — the dispute status changes
   * to 'lost' and the disputed amount is deducted from your balance. Only accept if you do not wish
   * to contest.
   *
   * @returns Dispute accepted. Status changes to 'lost'.
   *
   * @throws {@link Disputes.AcceptDisputeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptDispute(
    request: Disputes.AcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<Dispute, Disputes.AcceptDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/disputes/{id}/accept"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputeSchema },
        errorFactory: Disputes.AcceptDisputeError,
      },
      options,
    );
  }

  /**
   * Contest a dispute
   *
   * @remarks
   * Submit evidence to challenge a dispute. Use action=draft to save without submitting, or
   * action=submit to send for bank review (triggers payment.dispute.under_review webhook). At least
   * one evidence document is required when submitting. You can contest partial amounts by
   * specifying amount.
   *
   * @returns Dispute contested. Status changes to 'under_review' on submit.
   *
   * @throws {@link Disputes.ContestDisputeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contestDispute(
    request: Disputes.ContestDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<Dispute, Disputes.ContestDisputeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/disputes/{id}/contest"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: disputesContestRequestSchema },
      },
      {
        success: { kind: "json", schema: disputeSchema },
        errorFactory: Disputes.ContestDisputeError,
      },
      options,
    );
  }

  /**
   * Fetch all disputes
   *
   * @remarks
   * Retrieve a list of all payment disputes. Use expand[]=payment or
   * expand[]=transaction.settlement for additional context.
   *
   * @returns Collection of disputes.
   *
   * @throws {@link Disputes.FetchAllDisputesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllDisputes(
    request: Disputes.FetchAllDisputesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DisputesResponse, Disputes.FetchAllDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/disputes"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
          { name: "expand[]", value: request.expand, schema: s.optional(s.lazy(() => expandSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputesResponseSchema },
        errorFactory: Disputes.FetchAllDisputesError,
      },
      options,
    );
  }

  /**
   * Fetch dispute by ID
   *
   * @remarks
   * Retrieve full details of a specific dispute including submitted evidence.
   *
   * @returns Dispute details.
   *
   * @throws {@link Disputes.FetchDisputeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDispute(
    request: Disputes.FetchDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<Dispute, Disputes.FetchDisputeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/disputes/{id}"),
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
        success: { kind: "json", schema: disputeSchema },
        errorFactory: Disputes.FetchDisputeError,
      },
      options,
    );
  }
}

export namespace Disputes {
  export type AcceptDisputeRequest = {
    /** Dispute ID (disp_*). */
    id: string;
  };

  export class AcceptDisputeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcceptDisputeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ContestDisputeRequest = {
    /** Dispute ID (disp_*). */
    id: string;
    body: DisputesContestRequest;
  };

  export class ContestDisputeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContestDisputeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllDisputesRequest = {
    /** Number of records to return per call. Maximum 100. Default 10. @default 10 */
    count?: number;
    /** Number of records to skip. Use with count for pagination. Default 0. @default 0 */
    skip?: number;
    /** Expand sub-entities. Supported: payment, transaction.settlement. */
    expand?: Expand;
  };

  export const fetchAllDisputesRequestSchema: Schema<FetchAllDisputesRequest> = s.lazySchema(() =>
    s.object<FetchAllDisputesRequest>({
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      skip: s.defaulted(s.int().check(s.gte(0)), 0),
      expand: s.optional(s.lazy(() => expandSchema)),
    }),
  );

  export class FetchAllDisputesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllDisputesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchDisputeRequest = {
    /** Dispute ID (disp_*). */
    id: string;
  };

  export class FetchDisputeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchDisputeError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
