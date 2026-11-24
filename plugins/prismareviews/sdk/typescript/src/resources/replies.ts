import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { replyDeletionSchema, type ReplyDeletion } from "../models/reply-deletion.js";
import { reviewInternalSchema, type Review } from "../models/review.js";
import {
  v1ReviewsReplyRequestInternalSchema,
  type V1ReviewsReplyRequest,
} from "../models/v1-reviews-reply-request.js";
import type { Servers } from "../servers.js";

/**
 * Publish and delete replies through each platform's official API.
 */
export class Replies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a reply
   *
   * @remarks
   * Queues the removal of the review's reply from the platform. When the job is done, `reply`
   * becomes `null`. Only on platforms whose API can delete replies (Google Business Profile, App
   * Store, Trustpilot).
   *
   * @returns Deletion queued.
   *
   * @throws {@link Replies.DeleteReplyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteReply(
    request: Replies.DeleteReplyRequest,
    options?: RequestOptions,
  ): ApiPromise<ReplyDeletion, Replies.DeleteReplyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/reviews/{id}/reply"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: replyDeletionSchema },
        errorFactory: Replies.DeleteReplyError,
      },
      options,
    );
  }

  /**
   * Create or replace a reply
   *
   * @remarks
   * Stores the reply and queues it for publishing through the platform's official API: `202` with
   * the review and `reply.status: "queued"`. A background job publishes it (`reply.published`
   * webhook), marks it `failed` (`reply.failed` webhook), or, when the platform never answered and
   * the reply can't be read back, marks it `unknown` without retrying (`reply.unknown` webhook).
   * Posting again replaces the stored reply. With a test key the reply goes through the same steps
   * but never reaches the platform. Read-only platforms return `422 reply_not_supported` with the
   * review's `url`, where it can be answered.
   *
   * @returns Reply queued. The body is the review with its new `reply`.
   *
   * @throws {@link Replies.ReplyToReviewError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  replyToReview(
    request: Replies.ReplyToReviewRequest,
    options?: RequestOptions,
  ): ApiPromise<Review, Replies.ReplyToReviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/reviews/{id}/reply"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: v1ReviewsReplyRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: reviewInternalSchema },
        errorFactory: Replies.ReplyToReviewError,
      },
      options,
    );
  }
}

export namespace Replies {
  export type DeleteReplyRequest = {
    /** Review ID (`rev_…`). */
    id: string;
  };

  export class DeleteReplyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReplyError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ReplyToReviewRequest = {
    /** Review ID (`rev_…`). */
    id: string;
    /**
     * A unique value per reply (a UUID works). The same key with the same request returns the
     * stored response instead of replying twice; with a different request it returns `409
     * idempotency_conflict`. Scoped to the workspace; only successful responses are stored.
     */
    idempotencyKey?: string;
    body: V1ReviewsReplyRequest;
  };

  export class ReplyToReviewError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Declared<"error8", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReplyToReviewError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error8", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
