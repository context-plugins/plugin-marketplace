import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1DirectoryMembers400Error1Schema,
  type ApiV1DirectoryMembers400Error1,
} from "../models/api-v1-directory-members400-error1.js";
import {
  directoryMemberCreateSchema,
  type DirectoryMemberCreate,
} from "../models/directory-member-create.js";
import {
  directoryMemberPropertiesSchema,
  type DirectoryMemberProperties,
} from "../models/directory-member-properties.js";
import {
  directoryMemberRestoreSchema,
  type DirectoryMemberRestore,
} from "../models/directory-member-restore.js";
import {
  directoryMemberTestResponseSchema,
  type DirectoryMemberTestResponse,
} from "../models/directory-member-test-response.js";
import {
  directoryMemberUpdateSchema,
  type DirectoryMemberUpdate,
} from "../models/directory-member-update.js";
import { directoryMemberSchema, type DirectoryMember } from "../models/directory-member.js";
import {
  directoryResponseFormat1Schema,
  type DirectoryResponseFormat1,
} from "../models/directory-response-format1.js";
import {
  directoryResponseFormat6Schema,
  type DirectoryResponseFormat6,
} from "../models/directory-response-format6.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseDirectoryMemberHistoryResponseSchema,
  type ListResponseDirectoryMemberHistoryResponse,
} from "../models/list-response-directory-member-history-response.js";
import {
  listResponseDirectoryMemberSchema,
  type ListResponseDirectoryMember,
} from "../models/list-response-directory-member.js";
import {
  orderByDirection1EnumSchema,
  type OrderByDirection1Enum,
} from "../models/order-by-direction1-enum.js";
import { endDatetime29Schema, type EndDatetime29 } from "../models/unions/end-datetime29.js";
import { fields23Schema, type Fields23 } from "../models/unions/fields23.js";
import { languageCode2Schema, type LanguageCode2 } from "../models/unions/language-code2.js";
import { orderByDirection22Schema, type OrderByDirection22 } from "../models/unions/order-by-direction22.js";
import { orderBy3111Schema, type OrderBy3111 } from "../models/unions/order-by3111.js";
import { page25Schema, type Page25 } from "../models/unions/page25.js";
import { startDatetime29Schema, type StartDatetime29 } from "../models/unions/start-datetime29.js";
import { status4Schema, type Status4 } from "../models/unions/status4.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to directory
 */
export class Directory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk Load Directory Members
   *
   * @remarks
   * Load Directory Members: records with an id update that member, records without create.
   *
   * Updates only touch fields the record carries: omitting extensions, contact_tags, or comments
   * leaves the stored values unchanged, while an explicit empty value clears them. The whole
   * payload is applied in one transaction. A record whose id matches no existing member in the
   * caller's organization, or an id appearing twice in the payload, fails the upload with a 400
   * naming the offending record(s); nothing is written.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberBulkLoadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberBulkLoad(
    request: Directory.DirectoryMemberBulkLoadRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberBulkLoadError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/directory_members/upload/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Directory.DirectoryMemberBulkLoadError,
      },
      options,
    );
  }

  /**
   * Create Directory Member
   *
   * @remarks
   * Create a new member in the directory
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberCreate(
    request: Directory.DirectoryMemberCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryMember, Directory.DirectoryMemberCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/directory_members/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: directoryMemberCreateSchema },
      },
      {
        success: { kind: "json", schema: directoryMemberSchema },
        errorFactory: Directory.DirectoryMemberCreateError,
      },
      options,
    );
  }

  /**
   * Delete Directory Member
   *
   * @remarks
   * Delete a DirectoryMember.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberDeleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberDelete(
    request: Directory.DirectoryMemberDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [{ name: "comment", value: request.comment, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Directory.DirectoryMemberDeleteError,
      },
      options,
    );
  }

  /**
   * Download Directory Members
   *
   * @remarks
   * Download the entire directory as a JSON file.
   *
   * @returns Directory downloaded successfully
   *
   * @throws {@link Directory.DirectoryMemberDownloadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberDownload(
    request: Directory.DirectoryMemberDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Directory.DirectoryMemberDownloadError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/directory_members/download/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Directory.DirectoryMemberDownloadError,
      },
      options,
    );
  }

  /**
   * Get Directory Member By Id
   *
   * @remarks
   * Get a DirectoryMember by ID.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberGetByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberGetById(
    request: Directory.DirectoryMemberGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryMember, Directory.DirectoryMemberGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: directoryMemberSchema },
        errorFactory: Directory.DirectoryMemberGetByIdError,
      },
      options,
    );
  }

  /**
   * Get Directory Member History
   *
   * @remarks
   * Get version history for a directory member (contact). Version 1 is always the oldest;
   * order_by_direction only controls response order.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberHistoryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberHistory(
    request: Directory.DirectoryMemberHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDirectoryMemberHistoryResponse, Directory.DirectoryMemberHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}/history"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1EnumSchema)),
          },
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDirectoryMemberHistoryResponseSchema },
        errorFactory: Directory.DirectoryMemberHistoryError,
      },
      options,
    );
  }

  /**
   * Directory Member List
   *
   * @remarks
   * List directory members.
   *
   * Filter by contact tags with `tags.<key>=<value>`. Repeat a key to match any of its values;
   * filters for different keys must all match. Unknown keys return no matches.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberList(
    request: Directory.DirectoryMemberListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDirectoryMember, Directory.DirectoryMemberListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/directory_members/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "include_deleted", value: request.includeDeleted, schema: s.defaulted(s.boolean(), false) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status4Schema)) },
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => page25Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => directoryMemberPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy3111Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection22Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields23Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime29Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime29Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDirectoryMemberSchema },
        errorFactory: Directory.DirectoryMemberListError,
      },
      options,
    );
  }

  /**
   * Restore Directory Member
   *
   * @remarks
   * Restore a soft-deleted directory member.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberRestoreError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberRestore(
    request: Directory.DirectoryMemberRestoreRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryMember, Directory.DirectoryMemberRestoreError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}/restore"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat6Schema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: directoryMemberRestoreSchema },
      },
      {
        success: { kind: "json", schema: directoryMemberSchema },
        errorFactory: Directory.DirectoryMemberRestoreError,
      },
      options,
    );
  }

  /**
   * Test Directory Member Extension
   *
   * @remarks
   * Test directory member extension at a specific timestamp and language.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberTestExtensionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberTestExtension(
    request: Directory.DirectoryMemberTestExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryMemberTestResponse, Directory.DirectoryMemberTestExtensionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}/test"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [
          { name: "timestamp", value: request.timestamp, schema: s.string() },
          {
            name: "language_code",
            value: request.languageCode,
            schema: s.optional(s.lazy(() => languageCode2Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: directoryMemberTestResponseSchema },
        errorFactory: Directory.DirectoryMemberTestExtensionError,
      },
      options,
    );
  }

  /**
   * Update Directory Member
   *
   * @remarks
   * Update a DirectoryMember.
   *
   * @returns Successful Response
   *
   * @throws {@link Directory.DirectoryMemberUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  directoryMemberUpdate(
    request: Directory.DirectoryMemberUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<DirectoryMember, Directory.DirectoryMemberUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/directory_members/{member_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "member_id", value: request.memberId, schema: s.int() }],
        query: [
          {
            name: "response_format",
            value: request.responseFormat,
            schema: s.optional(s.lazy(() => directoryResponseFormat1Schema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: directoryMemberUpdateSchema },
      },
      {
        success: { kind: "json", schema: directoryMemberSchema },
        errorFactory: Directory.DirectoryMemberUpdateError,
      },
      options,
    );
  }
}

export namespace Directory {
  export type DirectoryMemberBulkLoadRequest = {
    file: FileInput;
  };

  export class DirectoryMemberBulkLoadError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error412", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberBulkLoadError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberCreateRequest = {
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
    body: DirectoryMemberCreate;
  };

  export class DirectoryMemberCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberDeleteRequest = {
    memberId: number;
    /** Comment stored in version history for this deletion */
    comment: string;
  };

  export class DirectoryMemberDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberDownloadRequest = {
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
  };

  export class DirectoryMemberDownloadError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberDownloadError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberGetByIdRequest = {
    memberId: number;
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
  };

  export class DirectoryMemberGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberHistoryRequest = {
    memberId: number;
    /** Page number (0-based) @default 0 */
    page?: number;
    /** Items per page @default 25 */
    limit?: number;
    /** Sort by oldest first (asc) or newest first (desc). Version 1 is always the oldest. */
    orderByDirection?: OrderByDirection1Enum;
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
  };

  export class DirectoryMemberHistoryError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberHistoryError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberListRequest = {
    /**
     * If true, include soft-deleted members in the list. Default excludes them. Ignored when status
     * is explicitly supplied.
     *
     * @default false
     */
    includeDeleted?: boolean;
    /**
     * Filter contacts by deletion status: all includes active and deleted contacts; active excludes
     * deleted contacts; deleted includes only deleted contacts. When supplied, overrides
     * include_deleted. When omitted, include_deleted controls inclusion.
     */
    status?: Status4;
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
    /** Page number (0-based) */
    page?: Page25;
    /** Items per page @default 25 */
    limit?: number;
    /** Fields to search; aligns with search_field_values */
    searchFields?: DirectoryMemberProperties[];
    /** Values for search_fields in matching order */
    searchFieldValues?: string[];
    /** Field to order results by */
    orderBy?: OrderBy3111;
    /** Direction to order results */
    orderByDirection?: OrderByDirection22;
    /** Fields to include in response */
    fields?: Fields23;
    /** Start datetime for filtering results */
    startDatetime?: StartDatetime29;
    /** End datetime for filtering results */
    endDatetime?: EndDatetime29;
  };

  export class DirectoryMemberListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1DirectoryMembers400Error1", ApiV1DirectoryMembers400Error1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberListError> = [
      {
        on: 400,
        kind: "apiV1DirectoryMembers400Error1",
        decode: { kind: "json", schema: apiV1DirectoryMembers400Error1Schema },
      },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberRestoreRequest = {
    memberId: number;
    /** Directory response format for the restored member. */
    responseFormat?: DirectoryResponseFormat6;
    body: DirectoryMemberRestore;
  };

  export class DirectoryMemberRestoreError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberRestoreError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberTestExtensionRequest = {
    memberId: number;
    /** Timestamp for test in ISO 8601 format (e.g., 2025-12-04T14:29:39) */
    timestamp: string;
    /** Optional language code for test */
    languageCode?: LanguageCode2;
  };

  export class DirectoryMemberTestExtensionError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberTestExtensionError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DirectoryMemberUpdateRequest = {
    memberId: number;
    /**
     * Directory response format: normalized (default) strips \@hours and formats times; raw returns
     * stored \@hours values.
     */
    responseFormat?: DirectoryResponseFormat1;
    body: DirectoryMemberUpdate;
  };

  export class DirectoryMemberUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error412", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DirectoryMemberUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
