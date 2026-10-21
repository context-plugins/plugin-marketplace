import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { activitySchema, type Activity } from "../models/activity.js";
import { feedbackSchema, type Feedback } from "../models/feedback.js";
import type { Servers } from "../servers.js";

export class ActivityApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Report document activity
   *
   * @remarks
   * Report user activity that occurs on indexed documents such as viewing or editing. This signal
   * improves search quality.
   *
   * @returns OK
   *
   * @throws {@link ActivityApi.ActivityError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activity(
    request: ActivityApi.ActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ActivityApi.ActivityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/activity"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: activitySchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ActivityApi.ActivityError,
      },
      options,
    );
  }

  /**
   * Report client activity
   *
   * @remarks
   * Report events that happen to results within a Glean client UI, such as search result views and
   * clicks. This signal improves search quality.
   *
   * @returns OK
   *
   * @throws {@link ActivityApi.FeedbackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  feedback(
    request: ActivityApi.FeedbackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ActivityApi.FeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/feedback"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "feedback", value: request.feedback, schema: s.optional(s.string()) }],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => feedbackSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: ActivityApi.FeedbackError,
      },
      options,
    );
  }
}

export namespace ActivityApi {
  export type ActivityRequest = {
    body: Activity;
  };

  export class ActivityError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivityError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type FeedbackRequest = {
    /** A URL encoded versions of Feedback. This is useful for requests. */
    feedback?: string;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body?: Feedback;
  };

  export class FeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeedbackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
