import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1SessionLabels400Error1Schema,
  type ApiV1SessionLabels400Error1,
} from "../models/api-v1-session-labels400-error1.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseSessionLabelSchema,
  type ListResponseSessionLabel,
} from "../models/list-response-session-label.js";
import { sessionLabelCreateSchema, type SessionLabelCreate } from "../models/session-label-create.js";
import {
  sessionLabelPropertiesSchema,
  type SessionLabelProperties,
} from "../models/session-label-properties.js";
import { sessionLabelSchema, type SessionLabel } from "../models/session-label.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields18Schema, type Fields18 } from "../models/unions/fields18.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy36Schema, type OrderBy36 } from "../models/unions/order-by36.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to labeling sessions with evaluations of quality and descriptions of issues
 * the user encountered or other details. For more information, see [Console
 * docs](https://docs.syllable.ai/workspaces/Sessions).
 */
export class SessionLabels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Label
   *
   * @remarks
   * Create a new label
   *
   * @returns Successful Response
   *
   * @throws {@link SessionLabels.SessionLabelCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionLabelCreate(
    request: SessionLabels.SessionLabelCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionLabel, SessionLabels.SessionLabelCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/session_labels/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionLabelCreateSchema },
      },
      {
        success: { kind: "json", schema: sessionLabelSchema },
        errorFactory: SessionLabels.SessionLabelCreateError,
      },
      options,
    );
  }

  /**
   * Get Label By Id
   *
   * @returns Successful Response
   *
   * @throws {@link SessionLabels.SessionLabelGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionLabelGetById(
    request: SessionLabels.SessionLabelGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionLabel, SessionLabels.SessionLabelGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/session_labels/{session_label_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_label_id", value: request.sessionLabelId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionLabelSchema },
        errorFactory: SessionLabels.SessionLabelGetByIdError,
      },
      options,
    );
  }

  /**
   * Session Labels List
   *
   * @returns Successful Response
   *
   * @throws {@link SessionLabels.SessionLabelsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionLabelsList(
    request: SessionLabels.SessionLabelsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseSessionLabel, SessionLabels.SessionLabelsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/session_labels/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => sessionLabelPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy36Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields18Schema)) },
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
        success: { kind: "json", schema: listResponseSessionLabelSchema },
        errorFactory: SessionLabels.SessionLabelsListError,
      },
      options,
    );
  }
}

export namespace SessionLabels {
  export type SessionLabelCreateRequest = {
    body: SessionLabelCreate;
  };

  export class SessionLabelCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionLabelCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SessionLabelGetByIdRequest = {
    sessionLabelId: number;
  };

  export class SessionLabelGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SessionLabelGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SessionLabelsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: SessionLabelProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy36;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields18;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class SessionLabelsListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1SessionLabels400Error1", ApiV1SessionLabels400Error1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SessionLabelsListError> = [
      {
        on: 400,
        kind: "apiV1SessionLabels400Error1",
        decode: { kind: "json", schema: apiV1SessionLabels400Error1Schema },
      },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
