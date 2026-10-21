import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  sessionSummaryResponseSchema,
  type SessionSummaryResponse,
} from "../models/session-summary-response.js";
import type { Servers } from "../servers.js";

export class SessionsFullSummary {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Full Session Summary By Id
   *
   * @returns Successful Response
   *
   * @throws {@link SessionsFullSummary.SessionFullSummaryGetByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionFullSummaryGetById(
    request: SessionsFullSummary.SessionFullSummaryGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionSummaryResponse, SessionsFullSummary.SessionFullSummaryGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/full-summary/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionSummaryResponseSchema },
        errorFactory: SessionsFullSummary.SessionFullSummaryGetByIdError,
      },
      options,
    );
  }
}

export namespace SessionsFullSummary {
  export type SessionFullSummaryGetByIdRequest = {
    sessionId: string;
  };

  export class SessionFullSummaryGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionFullSummaryGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
