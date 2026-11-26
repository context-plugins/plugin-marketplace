import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { feedbackRequestInternalSchema, type FeedbackRequest } from "../models/feedback-request.js";
import { feedbackResponseInternalSchema, type FeedbackResponse } from "../models/feedback-response.js";
import type { Servers } from "../servers.js";

export class Feedback {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Report a Search1API problem or feature request
   *
   * @remarks
   * Report a Search1API problem, missing capability, or confusing documentation encountered during
   * a task. Only message is required. Optional request_id refers to the original problem request.
   * Do not include credentials, personal data, or private user content. Reports are stored in Agent
   * Feedback and linked to an opaque account reference. Do not report every empty result or retry
   * the same report automatically; feedback should not block the main task. Returns 201 only after
   * storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10 submissions per account per
   * minute at a Cloudflare location. Free to call.
   *
   * @returns Successful response
   *
   * @throws {@link Feedback.FeedbackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  feedback(
    request: Feedback.FeedbackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<FeedbackResponse, Feedback.FeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/feedback"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: feedbackRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: feedbackResponseInternalSchema },
        errorFactory: Feedback.FeedbackError,
      },
      options,
    );
  }
}

export namespace Feedback {
  export type FeedbackRequestParams = {
    body: FeedbackRequest;
  };

  export class FeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Declared<"apiErrorModel8", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<FeedbackError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 413, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 415, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel8", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
