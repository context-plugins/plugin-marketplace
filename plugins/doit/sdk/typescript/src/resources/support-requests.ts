import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentExtApiSchema, type CommentExtApi } from "../models/comment-ext-api.js";
import {
  commentsResponseExtApiSchema,
  type CommentsResponseExtApi,
} from "../models/comments-response-ext-api.js";
import { createCommentRequestSchema, type CreateCommentRequest } from "../models/create-comment-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  supportV1TicketsRequestInternalSchema,
  type SupportV1TicketsRequest,
} from "../models/support-v1-tickets-request.js";
import {
  supportV1TicketsResponseSchema,
  type SupportV1TicketsResponse,
} from "../models/support-v1-tickets-response.js";
import { tagsGetResponseSchema, type TagsGetResponse } from "../models/tags-get-response.js";
import { tagsRequestInternalSchema, type TagsRequest } from "../models/tags-request.js";
import { tagsResponseSchema, type TagsResponse } from "../models/tags-response.js";
import {
  ticketCreateFormExtApiInternalSchema,
  type TicketCreateFormExtApi,
} from "../models/ticket-create-form-ext-api.js";
import { ticketDetailExtApiSchema, type TicketDetailExtApi } from "../models/ticket-detail-ext-api.js";
import { ticketResponseExtApiSchema, type TicketResponseExtApi } from "../models/ticket-response-ext-api.js";
import { ticketsListSchema, type TicketsList } from "../models/tickets-list.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage support tickets with DoiT.
 */
export class SupportRequests {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add tags to a support request
   *
   * @remarks
   * Adds one or more tags to an existing support request. The operation is surgical — only the tags
   * listed in the request are added; existing tags on the ticket are preserved. Re-adding a tag
   * that is already present is a successful no-op.
   *
   * All submitted tags are normalized (trim + lowercase) before storage. For customers, the system
   * additionally applies a `customer_tag/` namespace prefix to prevent collisions with internal
   * DoiT process tags. The response echoes the actual stored strings so callers can verify the
   * transform.
   *
   * @returns OK - Tags added (or already present).
   *
   * @throws {@link SupportRequests.AddTicketTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTicketTags(
    request: SupportRequests.AddTicketTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsResponse, SupportRequests.AddTicketTagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}/tags"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tagsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tagsResponseSchema },
        errorFactory: SupportRequests.AddTicketTagsError,
      },
      options,
    );
  }

  /**
   * Create a request
   *
   * @remarks
   * Creates a new support request
   *
   * @returns Created - New support request created.
   *
   * @throws {@link SupportRequests.CreateTicketError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTicket(
    request: SupportRequests.CreateTicketRequest,
    options?: RequestOptions,
  ): ApiPromise<TicketResponseExtApi, SupportRequests.CreateTicketError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/support/v1/tickets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ticketCreateFormExtApiInternalSchema },
      },
      {
        success: { kind: "json", schema: ticketResponseExtApiSchema },
        errorFactory: SupportRequests.CreateTicketError,
      },
      options,
    );
  }

  /**
   * Add a comment
   *
   * @remarks
   * Adds a comment to an existing support request. For customers and service-account callers,
   * comments are always public, even when `private` is `true`. Callers authenticated with DoiT
   * employee privileges can create private internal notes by setting `private` to `true`. The
   * response always includes `public`, reflecting the effective visibility after these rules are
   * applied, not merely the requested privacy. Existing authentication and ticket authorization are
   * unchanged.
   *
   * @returns Created - Comment added to the support request.
   *
   * @throws {@link SupportRequests.CreateTicketCommentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTicketComment(
    request: SupportRequests.CreateTicketCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentExtApi, SupportRequests.CreateTicketCommentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}/comments"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCommentRequestSchema },
      },
      {
        success: { kind: "json", schema: commentExtApiSchema },
        errorFactory: SupportRequests.CreateTicketCommentError,
      },
      options,
    );
  }

  /**
   * Get a request
   *
   * @remarks
   * Returns the details of a single support request by its ID.
   *
   * @returns OK - Support request details returned.
   *
   * @throws {@link SupportRequests.GetTicketError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTicket(
    request: SupportRequests.GetTicketRequest,
    options?: RequestOptions,
  ): ApiPromise<TicketDetailExtApi, SupportRequests.GetTicketError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ticketDetailExtApiSchema },
        errorFactory: SupportRequests.GetTicketError,
      },
      options,
    );
  }

  /**
   * List request comments
   *
   * @remarks
   * Returns all permitted comments on a support request. Customers and service-account callers
   * receive only public comments; private comment bodies and attachments are excluded. Callers
   * authenticated with DoiT employee privileges receive both public and private comments, subject
   * to existing ticket authorization. Each comment includes `public`, sourced from Zendesk: `true`
   * means public and `false` means private (internal). Missing visibility in legacy responses or
   * snapshots means unknown, not private. All comments are returned in a single response (no
   * pagination).
   *
   * @returns OK - List of comments returned.
   *
   * @throws {@link SupportRequests.ListTicketCommentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTicketComments(
    request: SupportRequests.ListTicketCommentsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommentsResponseExtApi, SupportRequests.ListTicketCommentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}/comments"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commentsResponseExtApiSchema },
        errorFactory: SupportRequests.ListTicketCommentsError,
      },
      options,
    );
  }

  /**
   * List tags on a support request
   *
   * @remarks
   * Returns the tags currently set on a support request.
   *
   * DoiT employee (doer) callers receive the full tag set verbatim, including internal namespaces
   * (e.g. `tier/*`, `synapse_*`). Customer callers receive only tags under the `customer_tag/`
   * namespace, with that prefix stripped (e.g. a tag added as `billing` reads back as `billing`).
   * Always present; empty array when the caller has no visible tags.
   *
   * @returns OK
   *
   * @throws {@link SupportRequests.ListTicketTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTicketTags(
    request: SupportRequests.ListTicketTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsGetResponse, SupportRequests.ListTicketTagsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}/tags"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tagsGetResponseSchema },
        errorFactory: SupportRequests.ListTicketTagsError,
      },
      options,
    );
  }

  /**
   * List requests
   *
   * @remarks
   * Returns a list of all historical requests that your account has access to. Tickets are returned
   * in reverse chronological order by default.
   *
   * @returns OK - List of historical requests returned.
   *
   * @throws {@link SupportRequests.ListTicketsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTickets(
    request: SupportRequests.ListTicketsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TicketsList, SupportRequests.ListTicketsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/support/v1/tickets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 100) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "minCreationTime", value: request.minCreationTime, schema: s.optional(s.string()) },
          { name: "maxCreationTime", value: request.maxCreationTime, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ticketsListSchema },
        errorFactory: SupportRequests.ListTicketsError,
      },
      options,
    );
  }

  /**
   * Remove tags from a support request
   *
   * @remarks
   * Removes one or more tags from an existing support request. The operation is surgical — only the
   * tags listed in the request are removed; tags not listed are preserved. Removing a tag that is
   * not present is a successful no-op.
   *
   * For customers, the system applies the same `customer_tag/` namespace mapping as on add, so a
   * customer who added `my_tag` (stored as `customer_tag/my_tag`) can remove it by sending
   * `my_tag`.
   *
   * @returns OK - Tags removed (or already absent).
   *
   * @throws {@link SupportRequests.RemoveTicketTagsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeTicketTags(
    request: SupportRequests.RemoveTicketTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<TagsResponse, SupportRequests.RemoveTicketTagsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}/tags"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: tagsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: tagsResponseSchema },
        errorFactory: SupportRequests.RemoveTicketTagsError,
      },
      options,
    );
  }

  /**
   * Update a request
   *
   * @remarks
   * Partially updates a support request. Supports setting the request `status` and/or `assignee`.
   * DoiT employees may set any of `open`, `pending`, `hold`, or `solved` and may set the
   * `assignee`; customers may set only `solved` (parity with the console "mark as resolved" action)
   * and may not set an assignee. `closed` is not settable via the API (Zendesk auto-closes from
   * `solved`). The `assignee` is a DoiT-employee email, resolved server-side to a Zendesk agent; an
   * email that does not resolve to an active agent returns `400`. At least one mutable field must
   * be present. The response echoes the fields that were applied.
   *
   * @returns OK - Request updated. Echoes the fields that were applied.
   *
   * @throws {@link SupportRequests.UpdateTicketError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTicket(
    request: SupportRequests.UpdateTicketRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportV1TicketsResponse, SupportRequests.UpdateTicketError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/support/v1/tickets/{ticketId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "ticketId", value: request.ticketId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: supportV1TicketsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: supportV1TicketsResponseSchema },
        errorFactory: SupportRequests.UpdateTicketError,
      },
      options,
    );
  }
}

export namespace SupportRequests {
  export type AddTicketTagsRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
    body: TagsRequest;
  };

  export class AddTicketTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTicketTagsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateTicketRequest = {
    body: TicketCreateFormExtApi;
  };

  export class CreateTicketError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTicketError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateTicketCommentRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
    body: CreateCommentRequest;
  };

  export class CreateTicketCommentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTicketCommentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetTicketRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
  };

  export class GetTicketError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTicketError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListTicketCommentsRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
  };

  export class ListTicketCommentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTicketCommentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListTicketTagsRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
  };

  export class ListTicketTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTicketTagsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListTicketsRequest = {
    /**
     * The maximum number of results to return in a single page. Leverage the page tokens to iterate
     * through the entire collection.
     *
     * @default 100
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results of the request. The syntax is `key:[<value>]`. e.g:
     * "severity:normal". Multiple filters can be connected using a pipe |. Note that using
     * different keys in the same filter results in “AND,” while using the same key multiple times
     * in the same filter results in “OR”.
     */
    filter?: string;
    /**
     * Min value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
     * tickets created after or at this timestamp are returned.
     */
    minCreationTime?: string;
    /**
     * Max value for tickets creation time, in milliseconds since the POSIX epoch. If set, only
     * tickets created before or at this timestamp are returned.
     */
    maxCreationTime?: string;
  };

  export const listTicketsRequestSchema: Schema<ListTicketsRequest> = s.lazySchema(() =>
    s.object<ListTicketsRequest>({
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
      pageToken: s.optional(s.string()),
      filter: s.optional(s.string()),
      minCreationTime: s.optional(s.string()),
      maxCreationTime: s.optional(s.string()),
    }),
  );

  export class ListTicketsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTicketsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveTicketTagsRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
    body: TagsRequest;
  };

  export class RemoveTicketTagsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveTicketTagsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateTicketRequest = {
    /** The unique identifier of the support request. */
    ticketId: number;
    body: SupportV1TicketsRequest;
  };

  export class UpdateTicketError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTicketError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
