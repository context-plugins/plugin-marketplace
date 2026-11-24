import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import type { Servers } from "../servers.js";

/**
 * Plain-English questions answered with SQL the service writes itself.
 */
export class Analyze {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Analyze
   *
   * @remarks
   * Ask a question about the corpus in plain English; the service writes and runs its own SQL and
   * streams the answer back as Server-Sent Events. Metered separately from the REST endpoints:
   * three free questions per visitor per day, then a paid key.
   *
   * @returns Successful Response
   *
   * @throws {@link Analyze.AskQuestionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  askQuestion(options?: RequestOptions): ApiPromise<Record<string, unknown>, Analyze.AskQuestionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/analyze"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Analyze.AskQuestionError,
      },
      options,
    );
  }
}

export namespace Analyze {
  export class AskQuestionError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskQuestionError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
