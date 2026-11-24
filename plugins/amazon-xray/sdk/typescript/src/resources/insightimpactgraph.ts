import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getInsightImpactGraphResultSchema,
  type GetInsightImpactGraphResult,
} from "../models/get-insight-impact-graph-result.js";
import {
  insightImpactGraphRequestSchema,
  type InsightImpactGraphRequest,
} from "../models/insight-impact-graph-request.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Insightimpactgraph {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Insight Impact Graph
   *
   * @remarks
   * Retrieves a service graph structure filtered by the specified insight. The service graph is
   * limited to only structural information. For a complete service graph, use this API with the
   * GetServiceGraph API.
   *
   * @returns Success
   *
   * @throws {@link Insightimpactgraph.GetInsightImpactGraphError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightImpactGraph(
    request: Insightimpactgraph.GetInsightImpactGraphRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetInsightImpactGraphResult, Insightimpactgraph.GetInsightImpactGraphError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/InsightImpactGraph"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightImpactGraphRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getInsightImpactGraphResultSchema },
        errorFactory: Insightimpactgraph.GetInsightImpactGraphError,
      },
      options,
    );
  }
}

export namespace Insightimpactgraph {
  export type GetInsightImpactGraphRequest = {
    body?: InsightImpactGraphRequest;
  };

  export class GetInsightImpactGraphError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightImpactGraphError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
