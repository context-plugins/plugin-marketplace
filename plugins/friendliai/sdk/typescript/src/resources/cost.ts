import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { costResponseSchema, type CostResponse } from "../models/cost-response.js";
import { bucketWidthSchema, type BucketWidth } from "../models/unions/bucket-width.js";
import { groupBySchema, type GroupBy } from "../models/unions/group-by.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class Cost {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cost
   *
   * @remarks
   * Get cost details for the team.
   *
   * @returns Team cost response
   *
   * @throws {@link Cost.GetCostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getCost(
    request: Cost.GetCostRequest,
    options?: RequestOptions,
  ): ApiPromise<CostResponse, Cost.GetCostError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/team/cost"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "start_time", value: request.startTime, schema: s.dateTime() },
          { name: "end_time", value: request.endTime, schema: s.dateTime() },
          {
            name: "bucket_width",
            value: request.bucketWidth,
            schema: s.optional(s.lazy(() => bucketWidthSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 7) },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "group_by", value: request.groupBy, schema: s.optional(s.lazy(() => groupBySchema)) },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: costResponseSchema },
        errorFactory: Cost.GetCostError,
      },
      options,
    );
  }
}

export namespace Cost {
  export type GetCostRequest = {
    /**
     * RFC 3339 timestamp in UTC. The time portion must be zeroed out (e.g., 2026-01-01T00:00:00Z).
     * Must be no earlier than one year ago.
     */
    startTime: Date;
    /**
     * RFC 3339 timestamp in UTC. The time portion must be zeroed out (e.g., 2026-01-02T00:00:00Z).
     * Must not be later than midnight UTC of the next day.
     */
    endTime: Date;
    /** Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. */
    bucketWidth?: BucketWidth;
    /**
     * A limit on the number of buckets to be returned. Limit can range between 1 and 35, and the
     * default is 7.
     *
     * @default 7
     */
    limit?: number;
    /**
     * A cursor for use in pagination. Corresponding to the `next_page` field from the previous
     * response.
     */
    page?: Page;
    /** Group the costs by the specified fields. Currently only `line_item` is supported. */
    groupBy?: GroupBy;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetCostError extends ApiError {
    declare readonly payload:
      | Declared<"error429", undefined>
      | Declared<"error403", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCostError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
