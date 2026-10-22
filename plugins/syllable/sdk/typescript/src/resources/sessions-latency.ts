import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  inspectLatencyResponseSchema,
  type InspectLatencyResponse,
} from "../models/inspect-latency-response.js";
import type { Servers } from "../servers.js";

export class SessionsLatency {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Inspect Latency For Session
   *
   * @returns Successful Response
   *
   * @throws {@link SessionsLatency.SessionLatencyGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionLatencyGetById(
    request: SessionsLatency.SessionLatencyGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<InspectLatencyResponse, SessionsLatency.SessionLatencyGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/latency/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inspectLatencyResponseSchema },
        errorFactory: SessionsLatency.SessionLatencyGetByIdError,
      },
      options,
    );
  }
}

export namespace SessionsLatency {
  export type SessionLatencyGetByIdRequest = {
    sessionId: string;
  };

  export class SessionLatencyGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionLatencyGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
