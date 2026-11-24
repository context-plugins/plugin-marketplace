import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsSegmentsRequestSchema,
  type PublicationsSegmentsRequest,
} from "../models/publications-segments-request.js";
import { RequestDirection, requestDirectionSchema } from "../models/request-direction.js";
import {
  segmentDeleteResponseSchema,
  type SegmentDeleteResponse,
} from "../models/segment-delete-response.js";
import {
  segmentMembersExpandItemsSchema,
  type SegmentMembersExpandItems,
} from "../models/segment-members-expand-items.js";
import {
  segmentMembersResponseInternalSchema,
  type SegmentMembersResponse,
} from "../models/segment-members-response.js";
import { SegmentOrderBy, segmentOrderBySchema } from "../models/segment-order-by.js";
import {
  segmentRecalculateResponseSchema,
  type SegmentRecalculateResponse,
} from "../models/segment-recalculate-response.js";
import { SegmentRequestStatus, segmentRequestStatusSchema } from "../models/segment-request-status.js";
import { segmentShowResponseSchema, type SegmentShowResponse } from "../models/segment-show-response.js";
import { SegmentType, segmentTypeSchema } from "../models/segment-type.js";
import { segmentsExpandItemsSchema, type SegmentsExpandItems } from "../models/segments-expand-items.js";
import { segmentsGetResponseSchema, type SegmentsGetResponse } from "../models/segments-get-response.js";
import { segmentsListResponseSchema, type SegmentsListResponse } from "../models/segments-list-response.js";
import type { Servers } from "../servers.js";

export class Segments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create segment
   *
   * @remarks
   * Create a new segment.
   *
   * **Manual segments** — Use `subscriptions` or `emails` input to create a segment from an
   * explicit list of subscription IDs or email addresses. The segment is processed synchronously
   * and returns with `status: completed`. Net new email addresses will be ignored; create
   * subscriptions using the `Create Subscription` endpoint.
   *
   * **Dynamic segments** — Use `custom_fields` input to create a segment that filters subscribers
   * by custom field values. The segment is processed asynchronously and returns with `status:
   * pending`. Results will be available in the `List Segment Subscribers` endpoint after processing
   * is complete.
   *
   * @returns Created
   *
   * @throws {@link Segments.Create9Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create9(
    request: Segments.Create9Request,
    options?: RequestOptions,
  ): ApiPromise<SegmentShowResponse, Segments.Create9Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsSegmentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: segmentShowResponseSchema },
        errorFactory: Segments.Create9Error,
      },
      options,
    );
  }

  /**
   * Delete segment OAuth Scope: segments:write
   *
   * @remarks
   * Delete a segment. Deleting the segment does not effect the subscriptions in the segment.
   *
   * @returns No Content
   *
   * @throws {@link Segments.Delete4Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete4(
    request: Segments.Delete4Request,
    options?: RequestOptions,
  ): ApiPromise<SegmentDeleteResponse, Segments.Delete4Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments/{segmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "segmentId", value: request.segmentId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentDeleteResponseSchema },
        errorFactory: Segments.Delete4Error,
      },
      options,
    );
  }

  /**
   * List segment subscriber IDs OAuth Scope: segments:read
   *
   * @remarks
   * List subscriber IDs for a segment. Returns a lightweight array of subscription IDs only,
   * without additional subscriber details. **Use this endpoint when you only need subscriber IDs**
   * (e.g., for counting, ID-based lookups, or integrations with external systems). If you need full
   * subscriber details (email, status, custom fields, etc.), use `/segments/{segmentId}/members`
   * instead.
   *
   * @returns OK
   *
   * @throws {@link Segments.ExpandResultsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  expandResults(
    request: Segments.ExpandResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<SegmentsGetResponse, Segments.ExpandResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments/{segmentId}/results"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "segmentId", value: request.segmentId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentsGetResponseSchema },
        errorFactory: Segments.ExpandResultsError,
      },
      options,
    );
  }

  /**
   * List segments OAuth Scope: segments:read
   *
   * @remarks
   * Retrieve information about all segments belonging to a specific publication
   *
   * @returns OK
   *
   * @throws {@link Segments.Index19Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index19(
    request: Segments.Index19Request,
    options?: RequestOptions,
  ): ApiPromise<SegmentsListResponse, Segments.Index19Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(segmentTypeSchema, SegmentType.All) },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(segmentRequestStatusSchema, SegmentRequestStatus.All),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(segmentOrderBySchema, SegmentOrderBy.Created),
          },
          {
            name: "direction",
            value: request.direction,
            schema: s.defaulted(requestDirectionSchema, RequestDirection.Asc),
          },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => segmentsExpandItemsSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentsListResponseSchema },
        errorFactory: Segments.Index19Error,
      },
      options,
    );
  }

  /**
   * List segment subscribers OAuth Scope: segments:read
   *
   * @remarks
   * List all members in a segment with full subscription data. Each member is returned as a
   * subscription object containing complete subscriber information and their subscription details.
   * Supports optional expansions for stats, custom fields, tags, referrals, and premium tiers.
   * **Use this endpoint when you need detailed subscriber information.** If you only need
   * subscriber IDs, use `/segments/{segmentId}/results` for a lighter-weight response.
   *
   * @returns OK
   *
   * @throws {@link Segments.ListMembersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMembers(
    request: Segments.ListMembersRequest,
    options?: RequestOptions,
  ): ApiPromise<SegmentMembersResponse, Segments.ListMembersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments/{segmentId}/members"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "segmentId", value: request.segmentId, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => segmentMembersExpandItemsSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentMembersResponseInternalSchema },
        errorFactory: Segments.ListMembersError,
      },
      options,
    );
  }

  /**
   * Recalculate segment OAuth Scope: segments:write
   *
   * @remarks
   * Recalculates a specific segment belonging to a publication
   *
   * @returns OK
   *
   * @throws {@link Segments.RecalculateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recalculate(
    request: Segments.RecalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<SegmentRecalculateResponse, Segments.RecalculateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments/{segmentId}/recalculate"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "segmentId", value: request.segmentId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentRecalculateResponseSchema },
        errorFactory: Segments.RecalculateError,
      },
      options,
    );
  }

  /**
   * Get segment OAuth Scope: segments:read
   *
   * @remarks
   * Retrieve information about a specific segment belonging to a publication
   *
   * @returns OK
   *
   * @throws {@link Segments.Show15Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show15(
    request: Segments.Show15Request,
    options?: RequestOptions,
  ): ApiPromise<SegmentShowResponse, Segments.Show15Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/segments/{segmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "segmentId", value: request.segmentId, schema: s.string() },
        ],
        query: [
          {
            name: "expand[]",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => segmentsExpandItemsSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: segmentShowResponseSchema },
        errorFactory: Segments.Show15Error,
      },
      options,
    );
  }
}

export namespace Segments {
  export type Create9Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSegmentsRequest;
  };

  export class Create9Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create9Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Delete4Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the segment object */
    segmentId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Delete4Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Delete4Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExpandResultsRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the segment object */
    segmentId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /** Bearer authentication */
    authorization: string;
  };

  export class ExpandResultsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExpandResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index19Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Optionally filter the results by the segment's type. @default SegmentType.All */
    type?: SegmentType;
    /** Optionally filter the results by the segment's status. @default SegmentRequestStatus.All */
    status?: SegmentRequestStatus;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * The field that the results are sorted by. Defaults to created<br> `created` - The time in
     * which the segment was first created.<br> `last_calculated` - The time that the segment last
     * completed calculation. Measured in seconds since the Unix epoch.
     *
     * @default SegmentOrderBy.Created
     */
    orderBy?: SegmentOrderBy;
    /**
     * The direction that the results are sorted in. Defaults to asc<br> `asc` - Ascending, sorts
     * from smallest to largest.<br> `desc` - Descending, sorts from largest to smallest.
     *
     * @default RequestDirection.Asc
     */
    direction?: RequestDirection;
    /**
     * Optionally expand the response to include additional data. <br> `stats` - Requests the most
     * recently calculated statistics for a segment. <br> Segment stats are recalculated once daily
     * around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the
     * dashboard. Manual and static segments only calculate once upon upload or creation.
     */
    expand?: SegmentsExpandItems[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Index19Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index19Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListMembersRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the segment object */
    segmentId: string;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
     */
    page?: number;
    /**
     * Optionally expand the response to include additional data. <br> `stats` - Returns statistics
     * about the subscription(s). <br> `custom_fields` - Returns custom field values set on the
     * subscription. <br> `referrals` - Returns referrals made by the subscription. <br> `tags` -
     * Returns tags associated with the subscription. <br> `subscription_premium_tiers` - Returns
     * premium tier(s) the subscription is subscribed to.
     */
    expand?: SegmentMembersExpandItems[];
    /** Bearer authentication */
    authorization: string;
  };

  export class ListMembersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMembersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RecalculateRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the segment object */
    segmentId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class RecalculateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecalculateError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show15Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the segment object */
    segmentId: string;
    /**
     * Optionally expand the response to include additional data. <br> `stats` - Requests the most
     * recently calculated statistics for a segment. <br> Segment stats are recalculated once daily
     * around 7 a.m. UTC for dynamic segments, but can be manually recalculated at any time in the
     * dashboard. Manual and static segments only calculate once upon upload or creation.
     */
    expand?: SegmentsExpandItems[];
    /** Bearer authentication */
    authorization: string;
  };

  export class Show15Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show15Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
