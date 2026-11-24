import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1CommentsResolveRequestInternalSchema,
  type ApiV1CommentsResolveRequest,
} from "../models/api-v1-comments-resolve-request.js";
import {
  apiV1CommentsResponseSchema,
  type ApiV1CommentsResponse,
} from "../models/api-v1-comments-response.js";
import type { Servers } from "../servers.js";

export class Comments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Every open comment thread in the organisation
   *
   * @remarks
   * "Is anything waiting on me?", without naming a report first. `GET /reports/{idOrSlug}/comments`
   * answers it one report at a time, which means walking every report to find the two with feedback
   * on them.
   *
   * Newest activity first, with the quoted passage and who wrote it — fetch the thread itself from
   * the report's own endpoint once you know where to look. Threads on archived reports are left
   * out: the URL does not serve, so nothing can be done about them until it is unarchived.
   *
   * @returns Open threads, newest activity first
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Comments(
    request: Comments.GetApiV1CommentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CommentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/comments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CommentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Resolve or reopen a comment thread
   *
   * @remarks
   * Marks a thread resolved, or reopens it with `reopen`. The note is for the reader who raised it,
   * so say what changed rather than that it was handled — resolving without a new version is
   * allowed and is worth explaining when you do it.
   *
   * @returns Thread status after the change
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1CommentsByThreadIdResolve(
    request: Comments.PostApiV1CommentsByThreadIdResolveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/comments/{threadId}/resolve"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "threadId", value: request.threadId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1CommentsResolveRequestInternalSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Comments {
  export type GetApiV1CommentsRequest = {
    /** Rows per page. Above the maximum you get the maximum, not an error. */
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
  };

  export const getApiV1CommentsRequestSchema: Schema<GetApiV1CommentsRequest> = s.lazySchema(() =>
    s.object<GetApiV1CommentsRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
      cursor: s.optional(s.string()),
    }),
  );

  export type PostApiV1CommentsByThreadIdResolveRequest = {
    threadId: string;
    body?: ApiV1CommentsResolveRequest;
  };
}
