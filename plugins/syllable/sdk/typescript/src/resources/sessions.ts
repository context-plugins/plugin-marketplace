import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1Sessions400Error1Schema,
  type ApiV1Sessions400Error1,
} from "../models/api-v1-sessions400-error1.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { listResponseSessionSchema, type ListResponseSession } from "../models/list-response-session.js";
import { sessionPropertiesSchema, type SessionProperties } from "../models/session-properties.js";
import {
  sessionRecordingResponseSchema,
  type SessionRecordingResponse,
} from "../models/session-recording-response.js";
import { sessionSchema, type Session } from "../models/session.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields19Schema, type Fields19 } from "../models/unions/fields19.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy37Schema, type OrderBy37 } from "../models/unions/order-by37.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to sessions. A session is a building block of a conversation. For more
 * information, see [Console docs](https://docs.syllable.ai/workspaces/Sessions).
 */
export class Sessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Generate Recording Urls
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.GenerateSessionRecordingUrlsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateSessionRecordingUrls(
    request: Sessions.GenerateSessionRecordingUrlsRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionRecordingResponse, Sessions.GenerateSessionRecordingUrlsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sessions/recording/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionRecordingResponseSchema },
        errorFactory: Sessions.GenerateSessionRecordingUrlsError,
      },
      options,
    );
  }

  /**
   * Get A Single Session By Id
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.SessionGetByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionGetById(
    request: Sessions.SessionGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Session, Sessions.SessionGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionSchema },
        errorFactory: Sessions.SessionGetByIdError,
      },
      options,
    );
  }

  /**
   * Stream Recording
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.SessionRecordingStreamError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionRecordingStream(
    request: Sessions.SessionRecordingStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Sessions.SessionRecordingStreamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/recording/stream"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [{ name: "token", value: request.token, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Sessions.SessionRecordingStreamError,
      },
      options,
    );
  }

  /**
   * Sessions List
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.SessionsListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionsList(
    request: Sessions.SessionsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseSession, Sessions.SessionsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/sessions/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => sessionPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy37Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields19Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseSessionSchema },
        errorFactory: Sessions.SessionsListError,
      },
      options,
    );
  }
}

export namespace Sessions {
  export type GenerateSessionRecordingUrlsRequest = {
    sessionId: string;
  };

  export class GenerateSessionRecordingUrlsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GenerateSessionRecordingUrlsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SessionGetByIdRequest = {
    sessionId: string;
  };

  export class SessionGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SessionRecordingStreamRequest = {
    token: string;
  };

  export class SessionRecordingStreamError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionRecordingStreamError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SessionsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: SessionProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy37;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields19;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class SessionsListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Sessions400Error1", ApiV1Sessions400Error1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SessionsListError> = [
      {
        on: 400,
        kind: "apiV1Sessions400Error1",
        decode: { kind: "json", schema: apiV1Sessions400Error1Schema },
      },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
