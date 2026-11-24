import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getInsightSummariesResultSchema,
  type GetInsightSummariesResult,
} from "../models/get-insight-summaries-result.js";
import {
  insightSummariesRequestSchema,
  type InsightSummariesRequest,
} from "../models/insight-summaries-request.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Insightsummaries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Insight Summaries
   *
   * @remarks
   * Retrieves the summaries of all insights in the specified group matching the provided filter
   * values.
   *
   * @returns Success
   *
   * @throws {@link Insightsummaries.GetInsightSummariesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsightSummaries(
    request: Insightsummaries.GetInsightSummariesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetInsightSummariesResult, Insightsummaries.GetInsightSummariesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/InsightSummaries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightSummariesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getInsightSummariesResultSchema },
        errorFactory: Insightsummaries.GetInsightSummariesError,
      },
      options,
    );
  }
}

export namespace Insightsummaries {
  export type GetInsightSummariesRequest = {
    body?: InsightSummariesRequest;
  };

  export class GetInsightSummariesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightSummariesError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
