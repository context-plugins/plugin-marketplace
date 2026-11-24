import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { formInsightsSchema, type FormInsights } from "../models/form-insights.js";
import { opSchema, type Op } from "../models/op.js";
import { rangeSchema, type Range } from "../models/range.js";
import type { Servers } from "../servers.js";

export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a form's insights
   *
   * @remarks
   * The numbers the dashboard's Insights page shows, from the same core: totals, median completion
   * time, seven-day change, the daily timeline, source and surface breakdowns, the drop-off funnel,
   * open drafts, and every question's distribution. Filters use the same grammar as the responses
   * list, so the numbers and the rows always describe the same set. Accepted responses only. Every
   * question's distribution quotes respondent answers verbatim as labels, so this is a response
   * read wearing an analytics shape: it needs forms:read AND responses:read, the second asserted
   * after authentication and named in its own 403.
   *
   * @returns The form's insights for the requested window and filters.
   *
   * @throws {@link Insights.GetFormInsightsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormInsights(
    request: Insights.GetFormInsightsRequest,
    options?: RequestOptions,
  ): ApiPromise<FormInsights, Insights.GetFormInsightsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/insights"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "form", value: request.form, schema: s.string() }],
        query: [
          { name: "range", value: request.range, schema: s.optional(s.lazy(() => rangeSchema)) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "respondent", value: request.respondent, schema: s.optional(s.string()) },
          { name: "where", value: request.where, schema: s.optional(s.array(s.string())) },
          { name: "by", value: request.by, schema: s.optional(s.string()) },
          { name: "op", value: request.op, schema: s.optional(s.lazy(() => opSchema)) },
          { name: "eq", value: request.eq, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formInsightsSchema },
        errorFactory: Insights.GetFormInsightsError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type GetFormInsightsRequest = {
    /** A form id or slug. */
    form: string;
    /** Date window: 7d, 30d, 90d, or all (default). */
    range?: Range;
    /** Free-text search across answers and source. */
    q?: string;
    /** Match the submission source (host + path). */
    source?: string;
    /** Exact identify() external id. */
    respondent?: string;
    /**
     * Field filter as `fieldId:op:value`, repeatable, max 20. op is one of eq, neq, contains, gt,
     * lt, answered, not_answered.
     */
    where?: string[];
    /** Compare the cohort that answered this field against the baseline. */
    by?: string;
    /** How `by` matches. Default eq. */
    op?: Op;
    /** The value `by` must equal when op is eq. */
    eq?: string;
  };

  export class GetFormInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormInsightsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
