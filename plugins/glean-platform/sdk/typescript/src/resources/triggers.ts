import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  platformTriggerCreateRequestSchema,
  type PlatformTriggerCreateRequest,
} from "../models/platform-trigger-create-request.js";
import {
  platformTriggerCreateResponseSchema,
  type PlatformTriggerCreateResponse,
} from "../models/platform-trigger-create-response.js";
import {
  platformTriggerEventSearchRequestSchema,
  type PlatformTriggerEventSearchRequest,
} from "../models/platform-trigger-event-search-request.js";
import {
  platformTriggerEventSearchResponseSchema,
  type PlatformTriggerEventSearchResponse,
} from "../models/platform-trigger-event-search-response.js";
import {
  platformTriggerGetResponseSchema,
  type PlatformTriggerGetResponse,
} from "../models/platform-trigger-get-response.js";
import {
  platformTriggerListResponseSchema,
  type PlatformTriggerListResponse,
} from "../models/platform-trigger-list-response.js";
import {
  platformTriggerPresetEventSearchRequestSchema,
  type PlatformTriggerPresetEventSearchRequest,
} from "../models/platform-trigger-preset-event-search-request.js";
import {
  platformTriggerPresetGetResponseSchema,
  type PlatformTriggerPresetGetResponse,
} from "../models/platform-trigger-preset-get-response.js";
import {
  platformTriggerPresetInputValueListResponseSchema,
  type PlatformTriggerPresetInputValueListResponse,
} from "../models/platform-trigger-preset-input-value-list-response.js";
import {
  platformTriggerPresetListResponseSchema,
  type PlatformTriggerPresetListResponse,
} from "../models/platform-trigger-preset-list-response.js";
import {
  platformTriggerUpdateRequestSchema,
  type PlatformTriggerUpdateRequest,
} from "../models/platform-trigger-update-request.js";
import type { Servers } from "../servers.js";

export class Triggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search events for a trigger preset
   *
   * @remarks
   * Search recent content events an unsaved trigger built from this preset would match, to preview
   * it before creating the trigger. Read-only — no trigger is created and no webhook delivery is
   * made. Covers the last seven days.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggerPresetsEventsSearchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggerPresetsEventsSearch(
    request: Triggers.PlatformTriggerPresetsEventsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerEventSearchResponse, Triggers.PlatformTriggerPresetsEventsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/trigger-presets/{preset_id}/events/search"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => platformTriggerPresetEventSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: platformTriggerEventSearchResponseSchema },
        errorFactory: Triggers.PlatformTriggerPresetsEventsSearchError,
      },
      options,
    );
  }

  /**
   * Get trigger preset
   *
   * @remarks
   * Retrieve a single trigger preset by id.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggerPresetsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggerPresetsGet(
    request: Triggers.PlatformTriggerPresetsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerPresetGetResponse, Triggers.PlatformTriggerPresetsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/trigger-presets/{preset_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformTriggerPresetGetResponseSchema },
        errorFactory: Triggers.PlatformTriggerPresetsGetError,
      },
      options,
    );
  }

  /**
   * Search trigger preset input values
   *
   * @remarks
   * Return up to 300 selectable values for a single picklist input on a preset. Results are
   * intended for typeahead selection and are not cursor-paginated. When `is_truncated` is true,
   * refine `query` to narrow the result set.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggerPresetsInputValuesListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggerPresetsInputValuesList(
    request: Triggers.PlatformTriggerPresetsInputValuesListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PlatformTriggerPresetInputValueListResponse,
    Triggers.PlatformTriggerPresetsInputValuesListError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/trigger-presets/{preset_id}/input-values"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "preset_id", value: request.presetId, schema: s.string() }],
        query: [
          { name: "field", value: request.field, schema: s.string() },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformTriggerPresetInputValueListResponseSchema },
        errorFactory: Triggers.PlatformTriggerPresetsInputValuesListError,
      },
      options,
    );
  }

  /**
   * List trigger presets
   *
   * @remarks
   * List the trigger presets available to the caller. A preset is a curated content-trigger
   * template (e.g. a new Jira ticket) which is passed when creating a trigger.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggerPresetsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggerPresetsList(
    request: Triggers.PlatformTriggerPresetsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerPresetListResponse, Triggers.PlatformTriggerPresetsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/trigger-presets"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "datasource", value: request.datasource, schema: s.optional(s.string()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformTriggerPresetListResponseSchema },
        errorFactory: Triggers.PlatformTriggerPresetsListError,
      },
      options,
    );
  }

  /**
   * Create trigger
   *
   * @remarks
   * Create a trigger from a preset and return it with its signing secret.
   *
   * @returns Trigger created.
   *
   * @throws {@link Triggers.PlatformTriggersCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersCreate(
    request: Triggers.PlatformTriggersCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerCreateResponse, Triggers.PlatformTriggersCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/triggers"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformTriggerCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: platformTriggerCreateResponseSchema },
        errorFactory: Triggers.PlatformTriggersCreateError,
      },
      options,
    );
  }

  /**
   * Delete trigger
   *
   * @remarks
   * Delete a trigger.
   *
   * @returns Trigger deleted. No content.
   *
   * @throws {@link Triggers.PlatformTriggersDeleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersDelete(
    request: Triggers.PlatformTriggersDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Triggers.PlatformTriggersDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/triggers/{trigger_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "trigger_id", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Triggers.PlatformTriggersDeleteError,
      },
      options,
    );
  }

  /**
   * Search events for a trigger
   *
   * @remarks
   * Search recent content events an existing trigger matches. Read-only — no webhook delivery is
   * made. Covers the last seven days.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggersEventsSearchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersEventsSearch(
    request: Triggers.PlatformTriggersEventsSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerEventSearchResponse, Triggers.PlatformTriggersEventsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/triggers/{trigger_id}/events/search"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "trigger_id", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => platformTriggerEventSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: platformTriggerEventSearchResponseSchema },
        errorFactory: Triggers.PlatformTriggersEventsSearchError,
      },
      options,
    );
  }

  /**
   * Get trigger
   *
   * @remarks
   * Retrieve a trigger owned by the authenticated caller.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggersGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersGet(
    request: Triggers.PlatformTriggersGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerGetResponse, Triggers.PlatformTriggersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/triggers/{trigger_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "trigger_id", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformTriggerGetResponseSchema },
        errorFactory: Triggers.PlatformTriggersGetError,
      },
      options,
    );
  }

  /**
   * List triggers
   *
   * @remarks
   * List triggers owned by the authenticated caller.
   *
   * @returns Successful response.
   *
   * @throws {@link Triggers.PlatformTriggersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersList(
    request: Triggers.PlatformTriggersListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerListResponse, Triggers.PlatformTriggersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/triggers"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformTriggerListResponseSchema },
        errorFactory: Triggers.PlatformTriggersListError,
      },
      options,
    );
  }

  /**
   * Update trigger
   *
   * @remarks
   * Update a trigger.
   *
   * @returns Trigger updated.
   *
   * @throws {@link Triggers.PlatformTriggersUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformTriggersUpdate(
    request: Triggers.PlatformTriggersUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformTriggerGetResponse, Triggers.PlatformTriggersUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/triggers/{trigger_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "trigger_id", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformTriggerUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: platformTriggerGetResponseSchema },
        errorFactory: Triggers.PlatformTriggersUpdateError,
      },
      options,
    );
  }
}

export namespace Triggers {
  export type PlatformTriggerPresetsEventsSearchRequest = {
    /** ID of the preset to preview. */
    presetId: string;
    body?: PlatformTriggerPresetEventSearchRequest;
  };

  export class PlatformTriggerPresetsEventsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggerPresetsEventsSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggerPresetsGetRequest = {
    /** ID of the preset to retrieve. */
    presetId: string;
  };

  export class PlatformTriggerPresetsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggerPresetsGetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggerPresetsInputValuesListRequest = {
    /** ID of the preset the input belongs to. */
    presetId: string;
    /** Field identifier of the input whose values to list. */
    field: string;
    /**
     * Prefix filter over the input's option values, for typeahead. Matching is on the option value,
     * not its display name.
     */
    query?: string;
  };

  export class PlatformTriggerPresetsInputValuesListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggerPresetsInputValuesListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggerPresetsListRequest = {
    /** Restrict results to presets for a single datasource (e.g. github). */
    datasource?: string;
    /** Maximum number of presets to return. @default 50 */
    pageSize?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
  };

  export class PlatformTriggerPresetsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggerPresetsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersCreateRequest = {
    body: PlatformTriggerCreateRequest;
  };

  export class PlatformTriggersCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersDeleteRequest = {
    /** ID of the trigger to delete. */
    triggerId: string;
  };

  export class PlatformTriggersDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersEventsSearchRequest = {
    /** ID of the trigger whose events to search. */
    triggerId: string;
    body?: PlatformTriggerEventSearchRequest;
  };

  export class PlatformTriggersEventsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersEventsSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersGetRequest = {
    /** ID of the trigger to retrieve. */
    triggerId: string;
  };

  export class PlatformTriggersGetError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersGetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersListRequest = {
    /** Maximum number of triggers to return. @default 50 */
    pageSize?: number;
    /** Opaque pagination cursor from a previous response. */
    cursor?: string;
  };

  export class PlatformTriggersListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformTriggersUpdateRequest = {
    /** ID of the trigger to update. */
    triggerId: string;
    body: PlatformTriggerUpdateRequest;
  };

  export class PlatformTriggersUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformTriggersUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
