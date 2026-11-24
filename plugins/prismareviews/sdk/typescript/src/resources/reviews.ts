import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { hasReplySchema, type HasReply } from "../models/has-reply.js";
import { platformIdSchema, type PlatformId } from "../models/platform-id.js";
import { reviewListInternalSchema, type ReviewList } from "../models/review-list.js";
import { reviewInternalSchema, type Review } from "../models/review.js";
import { sinceSchema, type Since } from "../models/unions/since.js";
import type { Servers } from "../servers.js";

/**
 * Reviews from every connected location, in one JSON shape.
 */
export class Reviews {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a review
   *
   * @remarks
   * One review by ID.
   *
   * @returns The review.
   *
   * @throws {@link Reviews.GetReviewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReview(
    request: Reviews.GetReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<Review, Reviews.GetReviewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/reviews/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reviewInternalSchema },
        errorFactory: Reviews.GetReviewError,
      },
      options,
    );
  }

  /**
   * List reviews
   *
   * @remarks
   * Reviews of your workspace in the mode of your key, newest first (by `created_at`, then `id`),
   * in the same shape on every platform. Cursor paginated: pass `next_cursor` as `cursor`, with the
   * same filters, until it is `null`.
   *
   * @returns A page of reviews.
   *
   * @throws {@link Reviews.ListReviewsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listReviews(
    request: Reviews.ListReviewsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ReviewList, Reviews.ListReviewsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/reviews"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformIdSchema)) },
          { name: "since", value: request.since, schema: s.optional(s.lazy(() => sinceSchema)) },
          { name: "has_reply", value: request.hasReply, schema: s.optional(s.lazy(() => hasReplySchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reviewListInternalSchema },
        errorFactory: Reviews.ListReviewsError,
      },
      options,
    );
  }
}

export namespace Reviews {
  export type GetReviewRequest = {
    /** Review ID (`rev_…`). */
    id: string;
  };

  export class GetReviewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReviewError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListReviewsRequest = {
    /** Only reviews of this location. */
    locationId?: string;
    /** Only reviews from this platform. */
    platform?: PlatformId;
    /**
     * Only reviews written at or after this time (by `created_at`): a date (`2026-10-01`, midnight
     * UTC) or an ISO 8601 timestamp with a time zone offset (`2026-10-01T00:00:00Z`,
     * `2026-10-01T02:00:00+02:00`).
     */
    since?: Since;
    /** `true`: reviews with a reply in any status. `false`: reviews without one. */
    hasReply?: HasReply;
    /** Page size. @default 50 */
    limit?: number;
    /** The `next_cursor` of the previous page. */
    cursor?: string;
  };

  export const listReviewsRequestSchema: Schema<ListReviewsRequest> = s.lazySchema(() =>
    s.object<ListReviewsRequest>({
      locationId: s.optional(s.string()),
      platform: s.optional(s.lazy(() => platformIdSchema)),
      since: s.optional(s.lazy(() => sinceSchema)),
      hasReply: s.optional(s.lazy(() => hasReplySchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
      cursor: s.optional(s.string()),
    }),
  );

  export class ListReviewsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListReviewsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
