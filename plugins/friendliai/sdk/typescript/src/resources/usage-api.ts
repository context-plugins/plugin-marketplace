import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { bucketWidth1Schema, type BucketWidth1 } from "../models/unions/bucket-width1.js";
import { capacityTypesSchema, type CapacityTypes } from "../models/unions/capacity-types.js";
import { gpuTypesSchema, type GpuTypes } from "../models/unions/gpu-types.js";
import { groupBy1Schema, type GroupBy1 } from "../models/unions/group-by1.js";
import { limit2Schema, type Limit2 } from "../models/unions/limit2.js";
import { modelsSchema, type Models } from "../models/unions/models.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { productTypesSchema, type ProductTypes } from "../models/unions/product-types.js";
import { userIdsSchema, type UserIds } from "../models/unions/user-ids.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import { usageResponseSchema, type UsageResponse } from "../models/usage-response.js";
import type { Servers } from "../servers.js";

export class UsageApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get usage details for the team.
   *
   * @returns Team usage response
   *
   * @throws {@link UsageApi.GetUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getUsage(
    request: UsageApi.GetUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageResponse, UsageApi.GetUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/team/usage"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "start_time", value: request.startTime, schema: s.dateTime() },
          { name: "end_time", value: request.endTime, schema: s.dateTime() },
          {
            name: "bucket_width",
            value: request.bucketWidth,
            schema: s.optional(s.lazy(() => bucketWidth1Schema)),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limit2Schema)) },
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "group_by", value: request.groupBy, schema: s.optional(s.lazy(() => groupBy1Schema)) },
          { name: "models", value: request.models, schema: s.optional(s.lazy(() => modelsSchema)) },
          { name: "user_ids", value: request.userIds, schema: s.optional(s.lazy(() => userIdsSchema)) },
          {
            name: "product_types",
            value: request.productTypes,
            schema: s.optional(s.lazy(() => productTypesSchema)),
          },
          { name: "gpu_types", value: request.gpuTypes, schema: s.optional(s.lazy(() => gpuTypesSchema)) },
          {
            name: "capacity_types",
            value: request.capacityTypes,
            schema: s.optional(s.lazy(() => capacityTypesSchema)),
          },
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
        success: { kind: "json", schema: usageResponseSchema },
        errorFactory: UsageApi.GetUsageError,
      },
      options,
    );
  }
}

export namespace UsageApi {
  export type GetUsageRequest = {
    /**
     * RFC 3339 timestamp in UTC. Must be within the past 365 days and align with the selected
     * `bucket_width` (e.g., 11:05:00Z for 5m, 11:00:00Z for 1h).
     */
    startTime: Date;
    /**
     * RFC 3339 timestamp in UTC. Must be later than `start_time` and align with the selected
     * `bucket_width` (e.g., 11:10:00Z for 5m, 12:00:00Z for 1h).
     */
    endTime: Date;
    /**
     * Width of each time bucket. Must be selected based on the query duration (end_time -
     * start_time) and must not exceed the query duration.
     */
    bucketWidth?: BucketWidth1;
    /**
     * Specifies the number of buckets to return.
     *
     *  - `bucket_width=1d`: default 7, max 31
     * - `bucket_width=12h`: default 2, max 14
     * - `bucket_width=6h`: default 4, max 28
     * - `bucket_width=1h`: default 24, max 168
     * - `bucket_width=45m`: default 2, max 32
     * - `bucket_width=30m`: default 2, max 48
     * - `bucket_width=15m`: default 4, max 96
     * - `bucket_width=5m`: default 12, max 288
     */
    limit?: Limit2;
    /**
     * A cursor for use in pagination. Corresponding to the `next_page` field from the previous
     * response.
     */
    page?: Page;
    /**
     * Group the usage by the specified fields. Support fields include `model`, `product_type`,
     * `user_id` and any combination of them.
     */
    groupBy?: GroupBy1;
    /**
     * Return only usage for the listed Model APIs and Dedicated Endpoints. Values are model IDs,
     * endpoint IDs, or a mix.
     */
    models?: Models;
    /** Return only usage for these users. */
    userIds?: UserIds;
    /**
     * Return only usage for the specified product types. Supported fields include `model_apis`,
     * `dedicated_endpoints` and any combination of them.
     */
    productTypes?: ProductTypes;
    /**
     * Return only usage for the specified GPU types. When this filter is given, `gpu_usage` and
     * `reserved_gpu_usage` will be provided if present; request, token, and audio usage fields are
     * omitted. Combining `gpu_types` with `product_types=model_apis` is rejected with HTTP 400.
     */
    gpuTypes?: GpuTypes;
    /**
     * Return only usage for the specified capacity types. Supported fields include `reservation`
     * only. When this filter is given, only `reserved_gpu_usage` will be provided; `gpu_usage`,
     * request, token, and audio usage fields are omitted. Combining `capacity_types` with
     * `product_types=model_apis` is rejected with HTTP 400.
     */
    capacityTypes?: CapacityTypes;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetUsageError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Declared<"error403", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetUsageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
