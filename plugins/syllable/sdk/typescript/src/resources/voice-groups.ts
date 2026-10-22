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
  listResponseVoiceGroupResponseSchema,
  type ListResponseVoiceGroupResponse,
} from "../models/list-response-voice-group-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields27Schema, type Fields27 } from "../models/unions/fields27.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy315Schema, type OrderBy315 } from "../models/unions/order-by315.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import {
  voiceGroupCreateRequestSchema,
  type VoiceGroupCreateRequest,
} from "../models/voice-group-create-request.js";
import { voiceGroupPropertiesSchema, type VoiceGroupProperties } from "../models/voice-group-properties.js";
import { voiceGroupResponseSchema, type VoiceGroupResponse } from "../models/voice-group-response.js";
import {
  voiceGroupUpdateRequestSchema,
  type VoiceGroupUpdateRequest,
} from "../models/voice-group-update-request.js";
import {
  voiceSampleCreateRequestSchema,
  type VoiceSampleCreateRequest,
} from "../models/voice-sample-create-request.js";
import type { Servers } from "../servers.js";

export class VoiceGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Voice Group
   *
   * @remarks
   * Create a new voice group.
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsCreate(
    request: VoiceGroups.VoiceGroupsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: voiceGroupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: voiceGroupResponseSchema },
        errorFactory: VoiceGroups.VoiceGroupsCreateError,
      },
      options,
    );
  }

  /**
   * Create Voice Sample
   *
   * @remarks
   * Generate voice sample.
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsCreateVoiceSampleError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsCreateVoiceSample(
    request: VoiceGroups.VoiceGroupsCreateVoiceSampleRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, VoiceGroups.VoiceGroupsCreateVoiceSampleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/voices/sample"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: voiceSampleCreateRequestSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: VoiceGroups.VoiceGroupsCreateVoiceSampleError,
      },
      options,
    );
  }

  /**
   * Delete Voice Group
   *
   * @remarks
   * Delete a voice group.
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsDelete(
    request: VoiceGroups.VoiceGroupsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, VoiceGroups.VoiceGroupsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/{voice_group_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "voice_group_id", value: request.voiceGroupId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: VoiceGroups.VoiceGroupsDeleteError,
      },
      options,
    );
  }

  /**
   * Get Voice Group
   *
   * @remarks
   * Fetch a given voice group.
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsGetById(
    request: VoiceGroups.VoiceGroupsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/{voice_group_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "voice_group_id", value: request.voiceGroupId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: voiceGroupResponseSchema },
        errorFactory: VoiceGroups.VoiceGroupsGetByIdError,
      },
      options,
    );
  }

  /**
   * List Voice Groups
   *
   * @remarks
   * Fetch voice groups.
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsList(
    request: VoiceGroups.VoiceGroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseVoiceGroupResponse, VoiceGroups.VoiceGroupsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => voiceGroupPropertiesSchema))),
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
        success: { kind: "json", schema: listResponseVoiceGroupResponseSchema },
        errorFactory: VoiceGroups.VoiceGroupsListError,
      },
      options,
    );
  }

  /**
   * Update Voice Group
   *
   * @remarks
   * Update an existing voice group
   *
   * @returns Successful Response
   *
   * @throws {@link VoiceGroups.VoiceGroupsUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  voiceGroupsUpdate(
    request: VoiceGroups.VoiceGroupsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<VoiceGroupResponse, VoiceGroups.VoiceGroupsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/voice_groups/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: voiceGroupUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: voiceGroupResponseSchema },
        errorFactory: VoiceGroups.VoiceGroupsUpdateError,
      },
      options,
    );
  }
}

export namespace VoiceGroups {
  export type VoiceGroupsCreateRequest = {
    body: VoiceGroupCreateRequest;
  };

  export class VoiceGroupsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoiceGroupsCreateVoiceSampleRequest = {
    body: VoiceSampleCreateRequest;
  };

  export class VoiceGroupsCreateVoiceSampleError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsCreateVoiceSampleError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoiceGroupsDeleteRequest = {
    voiceGroupId: number;
    reason: string;
  };

  export class VoiceGroupsDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoiceGroupsGetByIdRequest = {
    voiceGroupId: number;
  };

  export class VoiceGroupsGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoiceGroupsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: VoiceGroupProperties[];
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

  export class VoiceGroupsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VoiceGroupsUpdateRequest = {
    body: VoiceGroupUpdateRequest;
  };

  export class VoiceGroupsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VoiceGroupsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
