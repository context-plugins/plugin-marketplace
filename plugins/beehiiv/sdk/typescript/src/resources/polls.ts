import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { PollOrderBy, pollOrderBySchema } from "../models/poll-order-by.js";
import {
  pollResponsesExpandItemsSchema,
  type PollResponsesExpandItems,
} from "../models/poll-responses-expand-items.js";
import {
  pollResponsesListResponseSchema,
  type PollResponsesListResponse,
} from "../models/poll-responses-list-response.js";
import { PollResponsesOrderBy, pollResponsesOrderBySchema } from "../models/poll-responses-order-by.js";
import { pollShowResponseSchema, type PollShowResponse } from "../models/poll-show-response.js";
import { pollsExpandItemsSchema, type PollsExpandItems } from "../models/polls-expand-items.js";
import { pollsListResponseSchema, type PollsListResponse } from "../models/polls-list-response.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import type { Servers } from "../servers.js";

export class Polls {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List polls OAuth Scope: polls:read
   *
   * @remarks
   * Retrieve all polls belonging to a specific publication. Poll choices are always included. Use
   * `expand[]=stats` to include aggregate vote counts per choice.
   *
   * @returns OK
   *
   * @throws {@link Polls.Index15Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index15(
    request: Polls.Index15Request,
    options?: RequestOptions,
  ): ApiPromise<PollsListResponse, Polls.Index15Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/polls"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(pollOrderBySchema, PollOrderBy.Created),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => pollsExpandItemsSchema))),
          },
          { name: "post_id", value: request.postId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pollsListResponseSchema },
        errorFactory: Polls.Index15Error,
      },
      options,
    );
  }

  /**
   * List poll responses OAuth Scope: polls:read
   *
   * @remarks
   * Retrieve all individual subscriber responses for a specific poll with cursor-based pagination.
   * Use this endpoint for large datasets instead of the `expand[]=poll_responses` parameter on the
   * poll show endpoint.
   *
   * @returns OK
   *
   * @throws {@link Polls.ListResponsesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listResponses(
    request: Polls.ListResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<PollResponsesListResponse, Polls.ListResponsesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/polls/{pollId}/responses"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "pollId", value: request.pollId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(pollResponsesOrderBySchema, PollResponsesOrderBy.Created),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => pollResponsesExpandItemsSchema))),
          },
          { name: "post_id", value: request.postId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pollResponsesListResponseSchema },
        errorFactory: Polls.ListResponsesError,
      },
      options,
    );
  }

  /**
   * Get poll OAuth Scope: polls:read
   *
   * @remarks
   * Retrieve detailed information about a specific poll belonging to a publication. Use
   * `expand[]=stats` for aggregate vote counts, or `expand[]=poll_responses` for individual
   * subscriber responses.
   *
   * @returns OK
   *
   * @throws {@link Polls.Show11Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show11(
    request: Polls.Show11Request,
    options?: RequestOptions,
  ): ApiPromise<PollShowResponse, Polls.Show11Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/polls/{pollId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "pollId", value: request.pollId, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => pollsExpandItemsSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pollShowResponseSchema },
        errorFactory: Polls.Show11Error,
      },
      options,
    );
  }
}

export namespace Polls {
  export type Index15Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results. When provided, pagination will use cursor-based method which is more
     * efficient and consistent than offset-based pagination.
     */
    cursor?: string;
    /**
     * **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please
     * migrate to cursor-based pagination using the `cursor` parameter. If not specified, results
     * 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created.<br> `created` - The time the
     * poll was created.<br> `name` - The name of the poll.
     *
     * @default PollOrderBy.Created
     */
    orderBy?: PollOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * Optionally expand the response to include additional data.<br> `stats` - Returns aggregate
     * vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most
     * recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all
     * responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls.
     */
    expand?: PollsExpandItems[];
    /**
     * Filter to only return polls that were embedded in the specified post. Accepts a prefixed post
     * ID (e.g. `post_abc123`).
     */
    postId?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index15Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index15Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListResponsesRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the poll object */
    pollId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next
     * page of results.
     */
    cursor?: string;
    /** **Offset-based pagination (deprecated)**: Page number for offset-based pagination. */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created.
     *
     * @default PollResponsesOrderBy.Created
     */
    orderBy?: PollResponsesOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc.<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * Optionally expand the response to include additional data.<br> `post` - Returns the post
     * title and publication date for the post where each response was collected.
     */
    expand?: PollResponsesExpandItems[];
    /**
     * Filter to only return responses collected via the specified post. Accepts a prefixed post ID
     * (e.g. `post_abc123`).
     */
    postId?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class ListResponsesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListResponsesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show11Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the poll object */
    pollId: string;
    /**
     * Optionally expand the response to include additional data.<br> `stats` - Returns aggregate
     * vote counts per choice and total completions.<br> `poll_responses` - Returns up to 10 most
     * recent subscriber responses. Use /polls/{pollId}/responses for paginated access to all
     * responses.<br> `trivia_answer` - Returns the correct answer for trivia-type polls.
     */
    expand?: PollsExpandItems[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Show11Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show11Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
