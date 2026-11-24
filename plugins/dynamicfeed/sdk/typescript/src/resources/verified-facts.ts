import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class VerifiedFacts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * V1 Answer
   *
   * @remarks
   * ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question,
   * get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact calls
   * made, the exact source readings (fact/v1), per-premise verdicts computed by the published
   * deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
   * (answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
   * SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
   * everything is advisory evidence. Keyless; GET returns usage + coverage.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postV1Answer(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/answer"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
   * V1 Facts
   *
   * @remarks
   * Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification
   * block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported
   * this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
   * independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
   * of the exposed signals, never decorative; a single-source reading is honestly verified:false.
   * Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
   * {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postV1Facts(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/facts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
   * V1 Answer
   *
   * @remarks
   * ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a question,
   * get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact calls
   * made, the exact source readings (fact/v1), per-premise verdicts computed by the published
   * deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
   * (answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
   * SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
   * everything is advisory evidence. Keyless; GET returns usage + coverage.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AnswerV1AnswerGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/answer"),
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
   * V1 Facts
   *
   * @remarks
   * Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST verification
   * block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed reported
   * this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
   * independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
   * of the exposed signals, never decorative; a single-source reading is honestly verified:false.
   * Keyless, read-only. GET /v1/facts?tool=current_weather&city=Sydney , or POST
   * {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1FactsV1FactsGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/facts"),
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
   * V1 State Of Mcp Trend
   *
   * @remarks
   * Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest
   * first. The trend IS the value (server count, remote share, keyless share drifting over time).
   *
   * @returns Successful Response
   *
   * @throws {@link VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StateOfMcpTrendV1StateOfMcpTrendGet(
    request: VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/state-of-mcp/trend"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "days", value: request.days, schema: s.defaulted(s.int(), 365) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VerifiedFacts.V1StateOfMcpTrendV1StateOfMcpTrendGetError,
      },
      options,
    );
  }

  /**
   * V1 State Of Mcp
   *
   * @remarks
   * STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the
   * official registry: how many servers exist, how many are remote, and how many are keyless. One
   * Ed25519-signed envelope you can verify against /.well-known/keys; a primary-source figure, not
   * a claim. Served from the latest daily snapshot (the crawl runs off the request path). Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1StateOfMcpV1StateOfMcpGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/state-of-mcp"),
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
}

export namespace VerifiedFacts {
  export type V1StateOfMcpTrendV1StateOfMcpTrendGetRequest = {
    /** @default 365 */
    days?: number;
  };

  export const v1StateOfMcpTrendV1StateOfMcpTrendGetRequestSchema: Schema<V1StateOfMcpTrendV1StateOfMcpTrendGetRequest> =
    s.lazySchema(() =>
      s.object<V1StateOfMcpTrendV1StateOfMcpTrendGetRequest>({
        days: s.defaulted(s.int().check(s.gte(1), s.lte(1825)), 365),
      }),
    );

  export class V1StateOfMcpTrendV1StateOfMcpTrendGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1StateOfMcpTrendV1StateOfMcpTrendGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
