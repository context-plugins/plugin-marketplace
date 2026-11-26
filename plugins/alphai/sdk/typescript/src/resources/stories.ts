import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { storiesPageInternalSchema, type StoriesPage } from "../models/stories-page.js";
import { storyLookupInternalSchema, type StoryLookup } from "../models/story-lookup.js";
import { storyMaterialsInternalSchema, type StoryMaterials } from "../models/story-materials.js";
import { topStoriesInternalSchema, type TopStories } from "../models/top-stories.js";
import type { Servers } from "../servers.js";

/**
 * Market events covered by two or more publishers, summarised from their sources.
 */
export class Stories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Latest stories (cursor-paginated)
   *
   * @remarks
   * Stories newest-first by the time of their latest article (`last_material_at`): stories with a
   * published summary and `importance >= 7`. Keyset pagination: omit `cursor` for the newest page,
   * pass `next_cursor` back for the next (older) one; `null` means the end. Cursors are opaque; an
   * invalid one is a 400. Archive depth is tiered as on the feeds — paging back past your plan's
   * horizon (Free 30 days, Basic 90, Pro 180) returns 403 `archive_horizon`.
   *
   * A story keeps moving up this list while articles keep joining it (`last_material_at` is the
   * keyset), and its summary is rewritten as materials arrive, so re-reading a `story_id` later can
   * return a different summary — `updated_at` says when the facts last changed.
   *
   * @returns A page of stories.
   *
   * @throws {@link Stories.GetApiStoriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiStories(
    request: Stories.GetApiStoriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<StoriesPage, Stories.GetApiStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/stories/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storiesPageInternalSchema },
        errorFactory: Stories.GetApiStoriesError,
      },
      options,
    );
  }

  /**
   * Get a story by its id
   *
   * @remarks
   * One story — the summary AlphAI wrote from its articles, the key facts each with the publisher
   * it was read from and the `source_uid` of that article, the per-ticker read, the open questions
   * — wrapped in a lookup `status`, because a `story_id` taken from an article row does not always
   * name a current story:
   *
   * * `found` — `story` is filled.
   * * `merged` — this story was folded into another one; `redirect_to` is the surviving story's id.
   *   Fetch that one (a web page would 308).
   * * `not_a_story` — the id belongs to an article that only one publisher carried, so there is no
   *   story to summarise; `article` names it (`/api/news/{uid}/`). An article's `story_id` resolves
   *   here for every row, so this is the normal answer for most of the feed: most events are
   *   carried by a single outlet.
   * * An unknown id is a 404.
   *
   * `summary_state` tells you how to read the text: `published` (the summary covers every article
   * the story had when it was written), `stale` (`new_materials` articles joined since; the rewrite
   * is queued — the summaries are debounced, so a fast-moving story is rewritten minutes, not
   * seconds, after each new article), or `preparing` (no summary yet: `title` is the lead article's
   * headline and `summary` its collector summary; `key_facts`, `why_it_matters`, `ticker_takes` and
   * `uncertainties` are empty). A story older than your plan's archive horizon (by
   * `last_material_at`) is a 403 `archive_horizon`, like a deep feed cursor.
   *
   * The summary is the model's own text, checked against the articles before publishing: every
   * figure in it appears in a source, and no passage of more than a dozen words is copied from one.
   * It is AI-generated financial information for research, not investment advice. Article bodies
   * are never served; `materials` link to the publishers.
   *
   * @returns The lookup — `found`, `merged` or `not_a_story`.
   *
   * @throws {@link Stories.GetApiStoriesByStoryIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiStoriesByStoryId(
    request: Stories.GetApiStoriesByStoryIdRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLookup, Stories.GetApiStoriesByStoryIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/stories/{story_id}/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "story_id", value: request.storyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyLookupInternalSchema },
        errorFactory: Stories.GetApiStoriesByStoryIdError,
      },
      options,
    );
  }

  /**
   * A story's articles (cursor-paginated)
   *
   * @remarks
   * Every article behind a story, oldest first — the materials the summary was written from and the
   * ones that joined after it. Same visibility as the feed (`relevance_score >= 4`); each row
   * carries its `uid` (open it with `/api/news/{uid}/`), publisher, publication time, the
   * publisher's URL and its relevance score. A story's `key_facts` point into this list by
   * `source_uid`. Keyset pagination with `cursor` / `next_cursor` as on `/api/stories/`; most
   * stories fit one page. Only a current story (`status: found`) has materials: a merged or
   * not-a-story id is a 404 here — resolve it through `/api/stories/{story_id}/` first.
   *
   * @returns A page of the story's articles, oldest first.
   *
   * @throws {@link Stories.GetApiStoriesByStoryIdMaterialsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiStoriesByStoryIdMaterials(
    request: Stories.GetApiStoriesByStoryIdMaterialsRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryMaterials, Stories.GetApiStoriesByStoryIdMaterialsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/stories/{story_id}/materials/"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "story_id", value: request.storyId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyMaterialsInternalSchema },
        errorFactory: Stories.GetApiStoriesByStoryIdMaterialsError,
      },
      options,
    );
  }

  /**
   * Top stories (last 48h)
   *
   * @remarks
   * The strongest stories of the trailing 48 hours, ranked: a story's `importance` plus a coverage
   * bonus of `min(3, log2(publishers))`, minus one point per 12 hours since its key facts last
   * changed (`updated_at`). One slot per ticker and two per no-ticker macro category, so one event
   * cannot fill the list. Only stories with a published summary and `importance >= 7` qualify.
   * Fixed size of up to 50, no pagination; `ranking_version` names the formula so a change is
   * visible, `as_of` is when the list was ranked.
   *
   * Compared with `/api/news/trending/`: trending ranks single articles and collapses reprints;
   * this ranks the stories themselves (two or more publishers), each with an AlphAI-written
   * summary. A story's `story_id` is the same key an article row carries, so a trending item's
   * `story_id` opens the story here.
   *
   * @returns Ranked stories, strongest first.
   *
   * @throws {@link Stories.GetApiStoriesTopError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiStoriesTop(options?: RequestOptions): ApiPromise<TopStories, Stories.GetApiStoriesTopError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/stories/top/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: topStoriesInternalSchema },
        errorFactory: Stories.GetApiStoriesTopError,
      },
      options,
    );
  }
}

export namespace Stories {
  export type GetApiStoriesRequest = {
    /** Opaque cursor from a prior response's `next_cursor`. Omit for the newest page. */
    cursor?: string;
    /**
     * Stories per page, 1 to 50 on every tier (default 20). `limit` is accepted as an alias.
     *
     * @default 20
     */
    pageSize?: number;
  };

  export const getApiStoriesRequestSchema: Schema<GetApiStoriesRequest> = s.lazySchema(() =>
    s.object<GetApiStoriesRequest>({
      cursor: s.optional(s.string()),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
    }),
  );

  export class GetApiStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error404", undefined>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiStoriesByStoryIdRequest = {
    /** A story id — the `story_id` of any article row, or an id from `/api/stories/`. */
    storyId: string;
  };

  export const getApiStoriesByStoryIdRequestSchema: Schema<GetApiStoriesByStoryIdRequest> = s.lazySchema(() =>
    s.object<GetApiStoriesByStoryIdRequest>({
      storyId: s.string().check(s.pattern("^[a-f0-9]{16}$")),
    }),
  );

  export class GetApiStoriesByStoryIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error404", undefined>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiStoriesByStoryIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetApiStoriesByStoryIdMaterialsRequest = {
    storyId: string;
    /** Opaque cursor from a prior response's `next_cursor`. Omit for the first (oldest) page. */
    cursor?: string;
    /**
     * Articles per page, 1 to 50 on every tier (default 50). `limit` is accepted as an alias.
     *
     * @default 50
     */
    pageSize?: number;
  };

  export const getApiStoriesByStoryIdMaterialsRequestSchema: Schema<GetApiStoriesByStoryIdMaterialsRequest> =
    s.lazySchema(() =>
      s.object<GetApiStoriesByStoryIdMaterialsRequest>({
        storyId: s.string().check(s.pattern("^[a-f0-9]{16}$")),
        cursor: s.optional(s.string()),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 50),
      }),
    );

  export class GetApiStoriesByStoryIdMaterialsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiStoriesByStoryIdMaterialsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetApiStoriesTopError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiStoriesTopError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
