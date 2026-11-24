import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1RiskIndicatorsReadingsRequestInternalSchema,
  type ApiV1RiskIndicatorsReadingsRequest,
} from "../models/api-v1-risk-indicators-readings-request.js";
import type { Servers } from "../servers.js";

export class RiskIndicators {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The AI risk scorecard for a whole month
   *
   * @remarks
   * Each indicator the appetite turns on: its figure for the month against the limits it was judged
   * by (`green`, `amber`, `red` or `not_measurable`), the two months before, the trend, where a
   * measured indicator stands this month so far, whether a submitted figure is still owed, and the
   * corrective action the month opened. Lower is better for every indicator. Deliverd never stops
   * an agent on a figure.
   *
   * @returns { access, period, periodLabel, appetite, baseline, summary, indicators }
   *
   * @throws {@link RiskIndicators.GetApiV1RiskIndicatorsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1RiskIndicators(
    request: RiskIndicators.GetApiV1RiskIndicatorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, RiskIndicators.GetApiV1RiskIndicatorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/risk-indicators"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "period", value: request.period, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: RiskIndicators.GetApiV1RiskIndicatorsError,
      },
      options,
    );
  }

  /**
   * Give a submitted indicator's figure for a month
   *
   * @remarks
   * For an indicator whose figure comes from outside Deliverd: access reviews, output sampling,
   * downtime, training. Give `value`, or `numerator` and `denominator` for a ratio, and `evidence`
   * saying where it comes from. Judged against the limits in force when it is saved. A key gives a
   * month's first figure; correcting one is a person's, in the app, with a reason. 409 when a
   * figure already stands.
   *
   * @returns The reading
   *
   * @throws {@link RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1RiskIndicatorsByKeyReadings(
    request: RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/risk-indicators/{key}/readings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "key", value: request.key, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1RiskIndicatorsReadingsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: RiskIndicators.PostApiV1RiskIndicatorsByKeyReadingsError,
      },
      options,
    );
  }
}

export namespace RiskIndicators {
  export type GetApiV1RiskIndicatorsRequest = {
    period?: string;
  };

  export const getApiV1RiskIndicatorsRequestSchema: Schema<GetApiV1RiskIndicatorsRequest> = s.lazySchema(() =>
    s.object<GetApiV1RiskIndicatorsRequest>({
      period: s.optional(s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$"))),
    }),
  );

  export class GetApiV1RiskIndicatorsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1RiskIndicatorsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1RiskIndicatorsByKeyReadingsRequest = {
    key: string;
    body?: ApiV1RiskIndicatorsReadingsRequest;
  };

  export class PostApiV1RiskIndicatorsByKeyReadingsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1RiskIndicatorsByKeyReadingsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
