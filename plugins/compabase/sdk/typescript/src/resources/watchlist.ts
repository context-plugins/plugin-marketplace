import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { watchlistAddResponseSchema, type WatchlistAddResponse } from "../models/watchlist-add-response.js";
import type { Servers } from "../servers.js";

export class Watchlist {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove company from watchlist
   *
   * @remarks
   * Removes a KRS company from the watchlist of the user linked to the API key. Reverses `POST
   * /watchlist/krs/{krs}`; the company can be added again at any time. Idempotent: `removed: false`
   * when the company was not on the list. Use `dry_run=true` to see the outcome (`would_remove`)
   * without writing.
   *
   * @returns Removal result.
   *
   * @throws {@link Watchlist.DeleteWatchlistKrsByKrsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWatchlistKrsByKrs(
    request: Watchlist.DeleteWatchlistKrsByKrsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Watchlist.DeleteWatchlistKrsByKrsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/watchlist/krs/{krs}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [{ name: "dry_run", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Watchlist.DeleteWatchlistKrsByKrsError,
      },
      options,
    );
  }

  /**
   * List watchlist
   *
   * @remarks
   * Lists companies on the watchlist of the **user account linked to the API key**. Requires
   * `user_id` on the key.
   *
   * @returns Watchlist page.
   *
   * @throws {@link Watchlist.GetWatchlistError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWatchlist(
    request: Watchlist.GetWatchlistRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Watchlist.GetWatchlistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/watchlist"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Watchlist.GetWatchlistError,
      },
      options,
    );
  }

  /**
   * Add company to watchlist
   *
   * @remarks
   * Adds a company to the **watchlist of the user account linked to the API key**.
   *
   * The company is identified by **KRS** (Polish court registry number). Digits only; leading zeros
   * are optional (normalized to 10 digits server-side).
   *
   * **Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist, the
   * response returns `already_following: true` and no duplicate entry is created, so the call is
   * safe to retry. `already_following` tells which branch ran.
   *
   * **Reversible:** `DELETE /watchlist/krs/{krs}` removes the entry at any time. Use `dry_run=true`
   * to check the plan limit and the outcome without writing.
   *
   * Requires an API key associated with a Compabase portal user account (`user_id` on the key).
   *
   * @returns Company added to watchlist (or already followed).
   *
   * @throws {@link Watchlist.PostWatchlistKrsByKrsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postWatchlistKrsByKrs(
    request: Watchlist.PostWatchlistKrsByKrsRequest,
    options?: RequestOptions,
  ): ApiPromise<WatchlistAddResponse, Watchlist.PostWatchlistKrsByKrsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist/krs/{krs}"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [{ name: "dry_run", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: watchlistAddResponseSchema },
        errorFactory: Watchlist.PostWatchlistKrsByKrsError,
      },
      options,
    );
  }
}

export namespace Watchlist {
  export type DeleteWatchlistKrsByKrsRequest = {
    krs: string;
    /**
     * When `true`, the request is validated (key, KRS, plan limits) and the response says what
     * would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,
     * so repeating the same request — with or without this header — never creates a duplicate
     * entry. The key is echoed back in the `Idempotency-Key` response header.
     */
    idempotencyKey?: string;
  };

  export const deleteWatchlistKrsByKrsRequestSchema: Schema<DeleteWatchlistKrsByKrsRequest> = s.lazySchema(
    () =>
      s.object<DeleteWatchlistKrsByKrsRequest>({
        krs: s.string(),
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
      }),
  );

  export class DeleteWatchlistKrsByKrsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWatchlistKrsByKrsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetWatchlistRequest = {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getWatchlistRequestSchema: Schema<GetWatchlistRequest> = s.lazySchema(() =>
    s.object<GetWatchlistRequest>({
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
      offset: s.defaulted(s.int().check(s.gte(0)), 0),
    }),
  );

  export class GetWatchlistError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWatchlistError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostWatchlistKrsByKrsRequest = {
    /**
     * KRS input is normalized by stripping non-digits and left-padding to 10 digits. After
     * normalization, KRS must contain exactly 10 digits; otherwise request fails with `400
     * INVALID_KRS`.
     */
    krs: string;
    /**
     * When `true`, the request is validated (key, KRS, plan limits) and the response says what
     * would happen (`would_add` / `would_remove`), but nothing is written and no webhook fires.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by KRS,
     * so repeating the same request — with or without this header — never creates a duplicate
     * entry. The key is echoed back in the `Idempotency-Key` response header.
     */
    idempotencyKey?: string;
  };

  export const postWatchlistKrsByKrsRequestSchema: Schema<PostWatchlistKrsByKrsRequest> = s.lazySchema(() =>
    s.object<PostWatchlistKrsByKrsRequest>({
      krs: s.string(),
      dryRun: s.defaulted(s.boolean(), false),
      idempotencyKey: s.optional(s.string().check(s.maxLength(255))),
    }),
  );

  export class PostWatchlistKrsByKrsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostWatchlistKrsByKrsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
