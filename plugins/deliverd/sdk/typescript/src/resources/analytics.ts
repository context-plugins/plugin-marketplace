import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1AnalyticsResponseSchema,
  type ApiV1AnalyticsResponse,
} from "../models/api-v1-analytics-response.js";
import type { Servers } from "../servers.js";

export class Analytics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * What is being read, across every report
   *
   * @remarks
   * `GET /reports/{idOrSlug}/analytics` needs to be told which report, so "what is getting read"
   * meant walking the list and adding up. The half that cannot be reconstructed that way is
   * `inactiveReports` — a report nobody has opened does not appear in anything you would think to
   * ask about. Part of analytics, so Team and above; the per-report call returns a total view count
   * on every plan.
   *
   * @returns Readership across the organisation
   *
   * @throws {@link Analytics.GetApiV1AnalyticsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Analytics(
    request: Analytics.GetApiV1AnalyticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AnalyticsResponse, Analytics.GetApiV1AnalyticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/analytics"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "days", value: request.days, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AnalyticsResponseSchema },
        errorFactory: Analytics.GetApiV1AnalyticsError,
      },
      options,
    );
  }
}

export namespace Analytics {
  export type GetApiV1AnalyticsRequest = {
    /** The window to count over. 30 by default. */
    days?: number;
    /** How many reports in each list. 10 by default. */
    limit?: number;
  };

  export const getApiV1AnalyticsRequestSchema: Schema<GetApiV1AnalyticsRequest> = s.lazySchema(() =>
    s.object<GetApiV1AnalyticsRequest>({
      days: s.optional(s.int().check(s.gte(1), s.lte(365))),
      limit: s.optional(s.int().check(s.gte(1), s.lte(50))),
    }),
  );

  export class GetApiV1AnalyticsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1AnalyticsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
