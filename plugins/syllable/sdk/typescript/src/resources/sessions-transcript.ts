import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  sessionTranscriptionResponseSchema,
  type SessionTranscriptionResponse,
} from "../models/session-transcription-response.js";
import type { Servers } from "../servers.js";

export class SessionsTranscript {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Session Transcript By Id
   *
   * @remarks
   * Return a session's transcript, and whether it is complete.
   *
   * Transcript records reach the logs database through an asynchronous pipeline, so a read taken
   * immediately after a session ends can return a short record. `transcript_complete` is true only
   * when everything the session reported writing is present, across both the spoken transcript and
   * the tool activity in `actions`. A caller that needs the whole record should re-request with
   * exponential backoff until it is true, or until its own time limit passes, keeping the last
   * response either way.
   *
   * A time limit is required rather than optional. `transcript_complete` never turns true for a
   * session still in progress, for a session on a channel that reports no expected count (only
   * voice reports one today), or for a session that ended before the field was introduced - so a
   * caller polling without a limit would never stop.
   *
   * @returns Successful Response
   *
   * @throws {@link SessionsTranscript.SessionTranscriptGetByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionTranscriptGetById(
    request: SessionsTranscript.SessionTranscriptGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionTranscriptionResponse, SessionsTranscript.SessionTranscriptGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/transcript/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionTranscriptionResponseSchema },
        errorFactory: SessionsTranscript.SessionTranscriptGetByIdError,
      },
      options,
    );
  }
}

export namespace SessionsTranscript {
  export type SessionTranscriptGetByIdRequest = {
    sessionId: string;
  };

  export class SessionTranscriptGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SessionTranscriptGetByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
