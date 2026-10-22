import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { sessionDataSchema, type SessionData } from "../models/session-data.js";
import { toolResultDataSchema, type ToolResultData } from "../models/tool-result-data.js";
import type { Servers } from "../servers.js";

export class SessionDebug {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Session Data By Session Id
   *
   * @returns Successful Response
   *
   * @throws {@link SessionDebug.GetSessionDataBySessionIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionDataBySessionId(
    request: SessionDebug.GetSessionDataBySessionIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionData, SessionDebug.GetSessionDataBySessionIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/session_debug/session_id/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionDataSchema },
        errorFactory: SessionDebug.GetSessionDataBySessionIdError,
      },
      options,
    );
  }

  /**
   * Get Session Data By Sid
   *
   * @returns Successful Response
   *
   * @throws {@link SessionDebug.GetSessionDataBySidError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionDataBySid(
    request: SessionDebug.GetSessionDataBySidRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionData, SessionDebug.GetSessionDataBySidError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v1/session_debug/sid/{channel_manager_service}/{channel_manager_sid}",
        ),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "channel_manager_service", value: request.channelManagerService, schema: s.string() },
          { name: "channel_manager_sid", value: request.channelManagerSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionDataSchema },
        errorFactory: SessionDebug.GetSessionDataBySidError,
      },
      options,
    );
  }

  /**
   * Get Session Tool Call Result By Id
   *
   * @returns Successful Response
   *
   * @throws {@link SessionDebug.GetSessionToolCallResultByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionToolCallResultById(
    request: SessionDebug.GetSessionToolCallResultByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolResultData, SessionDebug.GetSessionToolCallResultByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/session_debug/tool_result/{session_id}/{tool_call_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "session_id", value: request.sessionId, schema: s.int() },
          { name: "tool_call_id", value: request.toolCallId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: toolResultDataSchema },
        errorFactory: SessionDebug.GetSessionToolCallResultByIdError,
      },
      options,
    );
  }
}

export namespace SessionDebug {
  export type GetSessionDataBySessionIdRequest = {
    sessionId: number;
  };

  export class GetSessionDataBySessionIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionDataBySessionIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionDataBySidRequest = {
    channelManagerService: string;
    channelManagerSid: string;
  };

  export class GetSessionDataBySidError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionDataBySidError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionToolCallResultByIdRequest = {
    sessionId: number;
    toolCallId: string;
  };

  export class GetSessionToolCallResultByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionToolCallResultByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
