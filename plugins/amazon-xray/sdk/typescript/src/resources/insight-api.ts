import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { getInsightResultSchema, type GetInsightResult } from "../models/get-insight-result.js";
import { insightRequestSchema, type InsightRequest } from "../models/insight-request.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class InsightApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Insight
   *
   * @remarks
   * Retrieves the summary information of an insight. This includes impact to clients and root cause
   * services, the top anomalous services, the category, the state of the insight, and the start and
   * end time of the insight.
   *
   * @returns Success
   *
   * @throws {@link InsightApi.GetInsightError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInsight(
    request: InsightApi.GetInsightRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetInsightResult, InsightApi.GetInsightError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Insight"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => insightRequestSchema)) },
      },
      {
        success: { kind: "json", schema: getInsightResultSchema },
        errorFactory: InsightApi.GetInsightError,
      },
      options,
    );
  }
}

export namespace InsightApi {
  export type GetInsightRequest = {
    body?: InsightRequest;
  };

  export class GetInsightError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInsightError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
