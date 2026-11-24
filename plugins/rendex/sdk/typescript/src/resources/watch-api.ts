import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createWatchRequestInternalSchema, type CreateWatchRequest } from "../models/create-watch-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  Status2RendexRenderingWatchApi,
  status2RendexRenderingWatchApiSchema,
} from "../models/status2-rendex-rendering-watch-api.js";
import { updateWatchRequestInternalSchema, type UpdateWatchRequest } from "../models/update-watch-request.js";
import { v1WatchesResponseInternalSchema, type V1WatchesResponse } from "../models/v1-watches-response.js";
import { v1WatchesResponse1InternalSchema, type V1WatchesResponse1 } from "../models/v1-watches-response1.js";
import { v1WatchesRunResponseSchema, type V1WatchesRunResponse } from "../models/v1-watches-run-response.js";
import {
  v1WatchesRunsResponseInternalSchema,
  type V1WatchesRunsResponse,
} from "../models/v1-watches-runs-response.js";
import {
  v1WatchesTestResponseInternalSchema,
  type V1WatchesTestResponse,
} from "../models/v1-watches-test-response.js";
import type { Servers } from "../servers.js";

/**
 * Website change monitoring — create watches, read run history, receive change webhooks. Rendex
 * renders each check in real Chrome, runs a before/after visual (and/or text) diff, and alerts you
 * by email (every plan) or signed webhook (Starter+). Shares your `rdx_` key and credit pool with
 * the rendering endpoints — one credit per check.
 */
export class WatchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a watch
   *
   * @remarks
   * Start monitoring a URL for changes. Rendex renders the page in real Chrome on your schedule,
   * runs a before/after visual diff (and/or a text diff), and alerts you over a webhook and/or
   * email when it changes. An active watch captures its baseline immediately, drawing 1 credit from
   * your shared pool; a failed check is refunded. The same `rdx_` key and credit pool as the
   * rendering endpoints.
   *
   * @returns Watch created (baseline run enqueued when active)
   *
   * @throws {@link WatchApi.CreateWatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWatch(
    request: WatchApi.CreateWatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesResponse, WatchApi.CreateWatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/watches"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWatchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1WatchesResponseInternalSchema },
        errorFactory: WatchApi.CreateWatchError,
      },
      options,
    );
  }

  /**
   * Delete a watch and its run history
   *
   * @remarks
   * Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.
   *
   * @returns Deleted (run rows cascade; stored images age out via the bucket lifecycle)
   *
   * @throws {@link WatchApi.DeleteWatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWatch(
    request: WatchApi.DeleteWatchRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, WatchApi.DeleteWatchError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/watches/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: WatchApi.DeleteWatchError,
      },
      options,
    );
  }

  /**
   * Fetch one watch
   *
   * @remarks
   * Fetch a single watch by id, including its current status and configuration.
   *
   * @returns The watch
   *
   * @throws {@link WatchApi.GetWatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWatch(
    request: WatchApi.GetWatchRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesResponse, WatchApi.GetWatchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/watches/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WatchesResponseInternalSchema },
        errorFactory: WatchApi.GetWatchError,
      },
      options,
    );
  }

  /**
   * Read a watch's run history
   *
   * @remarks
   * Newest first. Each run carries short-lived signed before/after/overlay image URLs.
   *
   * @returns A page of runs, newest first
   *
   * @throws {@link WatchApi.ListWatchRunsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWatchRuns(
    request: WatchApi.ListWatchRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesRunsResponse, WatchApi.ListWatchRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/watches/{id}/runs"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WatchesRunsResponseInternalSchema },
        errorFactory: WatchApi.ListWatchRunsError,
      },
      options,
    );
  }

  /**
   * List your watches
   *
   * @remarks
   * List your watches, newest first. Filter by state and page with the cursor.
   *
   * @returns A page of watches, newest first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWatches(
    request: WatchApi.ListWatchesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1WatchesResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/watches"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(status2RendexRenderingWatchApiSchema, Status2RendexRenderingWatchApi.All),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WatchesResponse1InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Run a check now
   *
   * @remarks
   * Enqueue an immediate check (draws 1 credit). The watch must be active.
   *
   * @returns Run enqueued
   *
   * @throws {@link WatchApi.RunWatchNowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  runWatchNow(
    request: WatchApi.RunWatchNowRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesRunResponse, WatchApi.RunWatchNowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/watches/{id}/run"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WatchesRunResponseSchema },
        errorFactory: WatchApi.RunWatchNowError,
      },
      options,
    );
  }

  /**
   * Dry-run a watch config (creates nothing)
   *
   * @remarks
   * Render a proposed watch config exactly as a live check would (same self-identifying User-Agent,
   * SSRF checks, geo + compatibility-mode behaviour, and block/error detection) and return what was
   * captured — so you can validate a selector, scope, or fetch identity and confirm the page is
   * reachable BEFORE committing to a schedule. Creates nothing (no watch, baseline, diff, or
   * alerts). Draws 1 credit; refunded when the page can't be read. A blocked or errored page is a
   * 200 result with reachable:false + an actionable reason, not an API error.
   *
   * @returns Render result (reachable or not — both are valid test outcomes)
   *
   * @throws {@link WatchApi.TestWatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testWatch(
    request: WatchApi.TestWatchRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesTestResponse, WatchApi.TestWatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/watches/test"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createWatchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1WatchesTestResponseInternalSchema },
        errorFactory: WatchApi.TestWatchError,
      },
      options,
    );
  }

  /**
   * Update, pause, resume, or re-point a watch
   *
   * @remarks
   * All fields optional. Set `paused` true to pause or false to resume. `webhookUrl` and
   * `notifyEmail` accept `null` to switch a channel off.
   *
   * **renderParams is MERGED, not replaced.** A partial `renderParams` is deep-merged over the
   * watch's existing render config, so you can change one knob (e.g. `{ "renderParams": {
   * "darkMode": true } }`) without re-sending the whole object. To clear a knob, set it to its
   * default explicitly.
   *
   * **Re-baselining.** Changing `url` clears the baseline so the next run re-baselines. A
   * renderParams edit that changes WHAT is captured (a scope change — e.g. `selector`, `fullPage`,
   * `width`/`height`, or `device`) likewise invalidates the baseline and re-baselines on the next
   * run; a noise-only edit (e.g. `threshold`, `ignoreRegions`) does not.
   *
   * @returns The updated watch
   *
   * @throws {@link WatchApi.UpdateWatchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWatch(
    request: WatchApi.UpdateWatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<V1WatchesResponse, WatchApi.UpdateWatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/watches/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWatchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1WatchesResponseInternalSchema },
        errorFactory: WatchApi.UpdateWatchError,
      },
      options,
    );
  }
}

export namespace WatchApi {
  export type CreateWatchRequestParams = {
    body: CreateWatchRequest;
  };

  export class CreateWatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateWatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteWatchRequest = {
    /** Watch UUID */
    id: string;
  };

  export class DeleteWatchError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWatchError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWatchRequest = {
    /** Watch UUID */
    id: string;
  };

  export class GetWatchError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWatchError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWatchRunsRequest = {
    /** Watch UUID */
    id: string;
    cursor?: string;
    /** @default 20 */
    limit?: number;
  };

  export const listWatchRunsRequestSchema: Schema<ListWatchRunsRequest> = s.lazySchema(() =>
    s.object<ListWatchRunsRequest>({
      id: s.string(),
      cursor: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListWatchRunsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListWatchRunsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListWatchesRequest = {
    /** Filter by state @default Status2RendexRenderingWatchApi.All */
    status?: Status2RendexRenderingWatchApi;
    /** Opaque pagination cursor from a prior response's nextCursor */
    cursor?: string;
    /** @default 20 */
    limit?: number;
  };

  export const listWatchesRequestSchema: Schema<ListWatchesRequest> = s.lazySchema(() =>
    s.object<ListWatchesRequest>({
      status: s.defaulted(status2RendexRenderingWatchApiSchema, Status2RendexRenderingWatchApi.All),
      cursor: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export type RunWatchNowRequest = {
    /** Watch UUID */
    id: string;
  };

  export class RunWatchNowError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RunWatchNowError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TestWatchRequest = {
    body: CreateWatchRequest;
  };

  export class TestWatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestWatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateWatchRequestParams = {
    /** Watch UUID */
    id: string;
    body: UpdateWatchRequest;
  };

  export class UpdateWatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWatchError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
