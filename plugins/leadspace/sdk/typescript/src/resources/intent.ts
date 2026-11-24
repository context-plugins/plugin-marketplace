import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { intentAcceptedSchema, type IntentAccepted } from "../models/intent-accepted.js";
import { intentRequestSchema, type IntentRequest } from "../models/intent-request.js";
import type { Servers } from "../servers.js";

/**
 * Buyer-intent scoring and refresh
 */
export class Intent {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit companies for intent scoring
   *
   * @remarks
   * Submits a bulk of companies for intent refresh. Company name is required. Returns a polling
   * URI.
   *
   * @returns The bulk job has successfully been accepted
   *
   * @throws {@link Intent.ScoreCompanyIntentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LeadspaceError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scoreCompanyIntent(
    request: Intent.ScoreCompanyIntentRequest,
    options?: RequestOptions,
  ): ApiPromise<IntentAccepted, Intent.ScoreCompanyIntentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/intent/score/"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: intentRequestSchema },
      },
      {
        success: { kind: "json", schema: intentAcceptedSchema },
        errorFactory: Intent.ScoreCompanyIntentError,
      },
      options,
    );
  }
}

export namespace Intent {
  export type ScoreCompanyIntentRequest = {
    body: IntentRequest;
  };

  export class ScoreCompanyIntentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error401", undefined>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScoreCompanyIntentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 427, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
