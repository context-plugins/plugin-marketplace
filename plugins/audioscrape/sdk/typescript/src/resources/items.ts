import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { episodeDetailInternalSchema, type EpisodeDetail } from "../models/episode-detail.js";
import { itemListSchema, type ItemList } from "../models/item-list.js";
import { transcriptInternalSchema, type Transcript } from "../models/transcript.js";
import { uploadFromUrlSchema, type UploadFromUrl } from "../models/upload-from-url.js";
import { uploadResponseSchema, type UploadResponse } from "../models/upload-response.js";
import type { Servers } from "../servers.js";

/**
 * Universal audio items — podcast episodes, uploads, conference talks, anything with a transcript.
 * The `source_type` field distinguishes formats.
 */
export class Items {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get audio item
   *
   * @remarks
   * Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript,
   * entities) are opt-in via `?include=`. Equivalent to `GET /api/episodes/{id}` for podcast
   * episodes, but works uniformly across all content types.
   *
   * @returns Item + parent podcast (when applicable), plus requested optional fields
   *
   * @throws {@link Items.GetItemError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItem(
    request: Items.GetItemRequest,
    options?: RequestOptions,
  ): ApiPromise<EpisodeDetail, Items.GetItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/items/{item_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "item_id", value: request.itemId, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: episodeDetailInternalSchema },
        errorFactory: Items.GetItemError,
      },
      options,
    );
  }

  /**
   * Get item transcript
   *
   * @remarks
   * Returns the transcript on its own — segments + speaker list — for any item, regardless of
   * source type.
   *
   * @returns Transcript segments + speaker list
   *
   * @throws {@link Items.GetItemTranscriptError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getItemTranscript(
    request: Items.GetItemTranscriptRequest,
    options?: RequestOptions,
  ): ApiPromise<Transcript, Items.GetItemTranscriptError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/items/{item_id}/transcript"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "item_id", value: request.itemId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transcriptInternalSchema },
        errorFactory: Items.GetItemTranscriptError,
      },
      options,
    );
  }

  /**
   * List audio items
   *
   * @remarks
   * Universal listing across content types — podcast episodes, uploads, and future formats. Filter
   * by `source_type`, `dataset_id`, or `library` (slug). Results are newest-first. Use this in
   * place of `/api/episodes` when your integration needs to work with multiple content types.
   *
   * @returns Items ordered by publish date descending
   *
   * @throws {@link Items.ListItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listItems(
    request: Items.ListItemsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ItemList, Items.ListItemsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/items"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "source_type", value: request.sourceType, schema: s.optional(s.string()) },
          { name: "dataset_id", value: request.datasetId, schema: s.optional(s.int()) },
          { name: "library", value: request.library, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: itemListSchema },
        errorFactory: Items.ListItemsError,
      },
      options,
    );
  }

  /**
   * Upload audio into a dataset
   *
   * @remarks
   * Two intake modes: • `Content-Type: multipart/form-data` — form fields `audio` (file), optional
   * `title`, `description` • `Content-Type: application/json` — `{ "audio_url": "https://...",
   * "title": "...", "description": "..." }`
   *
   * JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own
   * server). Multipart is the natural fit for client-side files (browser uploads, scripts streaming
   * local files). Both modes converge on the same storage + transcription pipeline; the resulting
   * item is identical. Transcription minutes consumed count against your plan's monthly quota (see
   * `/api/me/usage`). After upload, fetch full metadata at `GET /api/items/{item_id}` once
   * transcription completes.
   *
   * ## Constraints
   *
   * • **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset
   * config (**1 GB** for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg
   * — since only the extracted audio is kept). Paid plans honour the dataset's `max_file_size_mb`
   * (default 500 MB). Exceeding the cap returns `413 Payload Too Large`; JSON-mode `audio_url` is
   * fetched under the same cap. (The MCP connector's `transcribe_audio` link path and the web
   * paste-a-link import fetch in the pipeline without a byte cap.) • **URL-fetch safety (JSON
   * mode):** `audio_url` must use `https://`. URLs that resolve to private, link-local, loopback,
   * or otherwise internal IP ranges are rejected (SSRF guard) with `422 Unprocessable Entity`. •
   * **Dataset configuration:** The target dataset must have `content_type = 'uploads'`. Datasets
   * backed by RSS feeds or other source types return `409 Conflict`.
   *
   * @returns Upload accepted; item created and queued for transcription
   *
   * @throws {@link Items.UploadItemExternalError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadItemExternal(
    request: Items.UploadItemExternalRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadResponse, Items.UploadItemExternalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/datasets/{id}/items"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: uploadFromUrlSchema },
      },
      {
        success: { kind: "json", schema: uploadResponseSchema },
        errorFactory: Items.UploadItemExternalError,
      },
      options,
    );
  }
}

export namespace Items {
  export type GetItemRequest = {
    /** Numeric item ID (works for any source_type) */
    itemId: string;
    /** Comma-separated optional fields: `transcript`, `entities`. */
    include?: string;
  };

  export class GetItemError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type GetItemTranscriptRequest = {
    /** Numeric item ID */
    itemId: string;
  };

  export class GetItemTranscriptError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetItemTranscriptError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type ListItemsRequest = {
    /** Filter by source type (`podcast_episode`, `upload`, `youtube`, ...). Omit for all types. */
    sourceType?: string;
    /** Restrict to items in a specific dataset */
    datasetId?: number;
    /** Restrict to items in a specific library (by slug) */
    library?: string;
    /** Max results (default 20, max 100) */
    limit?: number;
    /** Result offset for pagination */
    offset?: number;
  };

  export class ListItemsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListItemsError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type UploadItemExternalRequest = {
    /** Numeric dataset ID. Caller must be a member of the dataset's parent library. */
    id: number;
    /**
     * **This endpoint accepts TWO content types — pick one based on where the audio lives:**
     *
     * 1. **`application/json`** (documented schema below) — body shape `{ "audio_url":
     *    "https://...", "title": "...", "description": "..." }`. Use this when the audio is already
     *    hosted at a public HTTPS URL.
     *
     * 2. **`multipart/form-data`** (NOT shown in the schema above — utoipa can only render one
     *    content type per operation, but the server accepts both). Send a multipart body with these
     *    parts: `audio` (the audio file, required), `title` (text, optional), `description` (text,
     *    optional). Use this for direct file uploads from a browser or local script.
     *
     * Both content types hit the same handler, write to the same storage, and produce the same
     * `item_id`.
     */
    body: UploadFromUrl;
  };

  export class UploadItemExternalError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Declared<"apiErrorBody6", ApiErrorBody>
      | Declared<"apiErrorBody7", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadItemExternalError> = [
      { on: 400, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 401, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 409, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 413, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 415, kind: "apiErrorBody6", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 422, kind: "apiErrorBody7", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
