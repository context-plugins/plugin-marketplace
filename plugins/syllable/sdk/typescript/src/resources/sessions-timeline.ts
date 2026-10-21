import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  sessionTimelineResponseSchema,
  type SessionTimelineResponse,
} from "../models/session-timeline-response.js";
import type { Servers } from "../servers.js";

export class SessionsTimeline {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Session Timeline By Id
   *
   * @remarks
   * Consolidated, time-ordered timeline of a session's events.
   *
   * @returns Successful Response
   *
   * @throws {@link SessionsTimeline.SessionTimelineGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionTimelineGetById(
    request: SessionsTimeline.SessionTimelineGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionTimelineResponse, SessionsTimeline.SessionTimelineGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/timeline/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionTimelineResponseSchema },
        errorFactory: SessionsTimeline.SessionTimelineGetByIdError,
      },
      options,
    );
  }
}

export namespace SessionsTimeline {
  export type SessionTimelineGetByIdRequest = {
    sessionId: string;
  };

  export class SessionTimelineGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SessionTimelineGetByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
