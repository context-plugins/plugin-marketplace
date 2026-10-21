import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  languageGroupCreateRequestSchema,
  type LanguageGroupCreateRequest,
} from "../models/language-group-create-request.js";
import {
  languageGroupPropertiesSchema,
  type LanguageGroupProperties,
} from "../models/language-group-properties.js";
import {
  languageGroupResponseSchema,
  type LanguageGroupResponse,
} from "../models/language-group-response.js";
import {
  languageGroupUpdateRequestSchema,
  type LanguageGroupUpdateRequest,
} from "../models/language-group-update-request.js";
import {
  languageSampleCreateRequestSchema,
  type LanguageSampleCreateRequest,
} from "../models/language-sample-create-request.js";
import {
  listResponseLanguageGroupResponseSchema,
  type ListResponseLanguageGroupResponse,
} from "../models/list-response-language-group-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields27Schema, type Fields27 } from "../models/unions/fields27.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy315Schema, type OrderBy315 } from "../models/unions/order-by315.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to language groups. A language group is a collection of language, voice, and
 * DTMF configuration that can be linked to an agent to define the languages and voices it supports.
 * For more information, see [Console docs](https://docs.syllable.ai/Resources/LanguageGroups).
 */
export class LanguageGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Language Group
   *
   * @remarks
   * Deprecated alias for `POST /api/v1/voice_groups/`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsCreate(
    request: LanguageGroups.LanguageGroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/language_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: languageGroupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: languageGroupResponseSchema },
        errorFactory: LanguageGroups.LanguageGroupsCreateError,
      },
      options,
    );
  }

  /**
   * Create Voice Sample
   *
   * @remarks
   * Deprecated alias for `POST /api/v1/voice_groups/voices/sample`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsCreateVoiceSampleError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsCreateVoiceSample(
    request: LanguageGroups.LanguageGroupsCreateVoiceSampleRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, LanguageGroups.LanguageGroupsCreateVoiceSampleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/language_groups/voices/sample"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: languageSampleCreateRequestSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: LanguageGroups.LanguageGroupsCreateVoiceSampleError,
      },
      options,
    );
  }

  /**
   * Delete Language Group
   *
   * @remarks
   * Deprecated alias for `DELETE /api/v1/voice_groups/{voice_group_id}`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsDelete(
    request: LanguageGroups.LanguageGroupsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, LanguageGroups.LanguageGroupsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/language_groups/{language_group_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "language_group_id", value: request.languageGroupId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: LanguageGroups.LanguageGroupsDeleteError,
      },
      options,
    );
  }

  /**
   * Get Language Group
   *
   * @remarks
   * Deprecated alias for `GET /api/v1/voice_groups/{voice_group_id}`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsGetById(
    request: LanguageGroups.LanguageGroupsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/language_groups/{language_group_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "language_group_id", value: request.languageGroupId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: languageGroupResponseSchema },
        errorFactory: LanguageGroups.LanguageGroupsGetByIdError,
      },
      options,
    );
  }

  /**
   * List Language Groups
   *
   * @remarks
   * Deprecated alias for `GET /api/v1/voice_groups/`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsList(
    request: LanguageGroups.LanguageGroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseLanguageGroupResponse, LanguageGroups.LanguageGroupsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/language_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => languageGroupPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy315Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields27Schema)) },
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
        success: { kind: "json", schema: listResponseLanguageGroupResponseSchema },
        errorFactory: LanguageGroups.LanguageGroupsListError,
      },
      options,
    );
  }

  /**
   * Update Language Group
   *
   * @remarks
   * Deprecated alias for `PUT /api/v1/voice_groups/`.
   *
   * @returns Successful Response
   *
   * @throws {@link LanguageGroups.LanguageGroupsUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  languageGroupsUpdate(
    request: LanguageGroups.LanguageGroupsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<LanguageGroupResponse, LanguageGroups.LanguageGroupsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/language_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: languageGroupUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: languageGroupResponseSchema },
        errorFactory: LanguageGroups.LanguageGroupsUpdateError,
      },
      options,
    );
  }
}

export namespace LanguageGroups {
  export type LanguageGroupsCreateRequest = {
    body: LanguageGroupCreateRequest;
  };

  export class LanguageGroupsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type LanguageGroupsCreateVoiceSampleRequest = {
    body: LanguageSampleCreateRequest;
  };

  export class LanguageGroupsCreateVoiceSampleError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsCreateVoiceSampleError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type LanguageGroupsDeleteRequest = {
    languageGroupId: number;
    reason: string;
  };

  export class LanguageGroupsDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type LanguageGroupsGetByIdRequest = {
    languageGroupId: number;
  };

  export class LanguageGroupsGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type LanguageGroupsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: LanguageGroupProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy315;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields27;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class LanguageGroupsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type LanguageGroupsUpdateRequest = {
    body: LanguageGroupUpdateRequest;
  };

  export class LanguageGroupsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LanguageGroupsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
