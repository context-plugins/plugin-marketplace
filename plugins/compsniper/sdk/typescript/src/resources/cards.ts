import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { cardBatchAcceptedSchema, type CardBatchAccepted } from "../models/card-batch-accepted.js";
import { cardBatchJobInternalSchema, type CardBatchJob } from "../models/card-batch-job.js";
import {
  cardBatchRequestInternalSchema,
  cardBatchRequestSchema,
  type CardBatchRequest,
} from "../models/card-batch-request.js";
import { xCreditSourceSchema, type XCreditSource } from "../models/xcredit-source.js";
import type { Servers } from "../servers.js";

export class Cards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a queued or running card batch
   *
   * @returns Cancellation requested or existing terminal status returned.
   *
   * @throws {@link Cards.CancelCardBatchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelCardBatch(
    request: Cards.CancelCardBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Cards.CancelCardBatchError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/cards/batch/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Cards.CancelCardBatchError,
      },
      options,
    );
  }

  /**
   * Get card batch progress and results
   *
   * @returns Current progress, including completed per-card results.
   *
   * @throws {@link Cards.GetCardBatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCardBatch(
    request: Cards.GetCardBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<CardBatchJob, Cards.GetCardBatchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cards/batch/{jobId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "jobId", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardBatchJobInternalSchema },
        errorFactory: Cards.GetCardBatchError,
      },
      options,
    );
  }

  /**
   * Submit a sports or trading-card comps batch
   *
   * @remarks
   * Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and
   * sequentially. Each successfully processed card consumes one normal monthly request.
   *
   * @returns Batch accepted.
   *
   * @throws {@link Cards.SubmitCardBatchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompSniperError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitCardBatch(
    request: Cards.SubmitCardBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<CardBatchAccepted, Cards.SubmitCardBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/cards/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Credit-Source",
            value: request.xCreditSource,
            schema: s.optional(s.lazy(() => xCreditSourceSchema)),
          },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: cardBatchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: cardBatchAcceptedSchema },
        errorFactory: Cards.SubmitCardBatchError,
      },
      options,
    );
  }
}

export namespace Cards {
  export type CancelCardBatchRequest = {
    jobId: string;
  };

  export class CancelCardBatchError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<CancelCardBatchError> = [
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type GetCardBatchRequest = {
    jobId: string;
  };

  export class GetCardBatchError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<GetCardBatchError> = [
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type SubmitCardBatchRequest = {
    /**
     * Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to
     * credits to spend a purchased credit directly. Failed searches are not charged.
     */
    xCreditSource?: XCreditSource;
    /** Safely retry a submission without creating a duplicate job. */
    idempotencyKey?: string;
    body: CardBatchRequest;
  };

  export const submitCardBatchRequestSchema: Schema<SubmitCardBatchRequest> = s.lazySchema(() =>
    s.object<SubmitCardBatchRequest>({
      xCreditSource: s.optional(s.lazy(() => xCreditSourceSchema)),
      idempotencyKey: s.optional(s.string().check(s.maxLength(200))),
      body: cardBatchRequestSchema,
    }),
  );

  export class SubmitCardBatchError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitCardBatchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 409, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
