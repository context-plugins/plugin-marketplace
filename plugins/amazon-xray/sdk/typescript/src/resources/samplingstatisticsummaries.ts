import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  getSamplingStatisticSummariesResultSchema,
  type GetSamplingStatisticSummariesResult,
} from "../models/get-sampling-statistic-summaries-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  samplingStatisticSummariesRequestSchema,
  type SamplingStatisticSummariesRequest,
} from "../models/sampling-statistic-summaries-request.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class Samplingstatisticsummaries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Sampling Statistic Summaries
   *
   * @remarks
   * Retrieves information about recent sampling results for all sampling rules.
   *
   * @returns Success
   *
   * @throws {@link Samplingstatisticsummaries.GetSamplingStatisticSummariesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSamplingStatisticSummaries(
    request: Samplingstatisticsummaries.GetSamplingStatisticSummariesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    GetSamplingStatisticSummariesResult,
    Samplingstatisticsummaries.GetSamplingStatisticSummariesError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/SamplingStatisticSummaries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => samplingStatisticSummariesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getSamplingStatisticSummariesResultSchema },
        errorFactory: Samplingstatisticsummaries.GetSamplingStatisticSummariesError,
      },
      options,
    );
  }
}

export namespace Samplingstatisticsummaries {
  export type GetSamplingStatisticSummariesRequest = {
    body?: SamplingStatisticSummariesRequest;
  };

  export class GetSamplingStatisticSummariesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSamplingStatisticSummariesError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
