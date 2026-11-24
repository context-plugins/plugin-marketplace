import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { debugStateSchema, type DebugState } from "../models/debug-state.js";
import {
  endpointsSearchResponseSchema,
  type EndpointsSearchResponse,
} from "../models/endpoints-search-response.js";
import { errorsInternalSchema, type Errors } from "../models/errors.js";
import { fallbackModeSchema, type FallbackMode } from "../models/fallback-mode.js";
import { orderSchema, type Order } from "../models/order.js";
import { statusSchema, type Status } from "../models/status.js";
import type { Servers } from "../servers.js";

/**
 * Everything about your endpoints
 */
export class Endpoints {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List and Search Endpoints
   *
   * @remarks
   * Use this API to get a list of all endpoints, or search for those matching a query parameter.
   *
   * Note:
   * - To return a list of all endpoints do not include any additional parameter.
   * - Only one of the optional parameters is allowed to be specified per request.
   * - Results are returned in pages using cursor based pagination and ordered by the `lastSeen`
   *   property.
   *
   * @returns OK
   *
   * @throws {@link Endpoints.SearchEndpointsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DopeSecurityError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchEndpoints(
    request: Endpoints.SearchEndpointsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EndpointsSearchResponse, Endpoints.SearchEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/endpoints/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "emailId", value: request.emailId, schema: s.optional(s.string()) },
          { name: "deviceName", value: request.deviceName, schema: s.optional(s.string()) },
          { name: "userId", value: request.userId, schema: s.optional(s.string()) },
          { name: "osVersion", value: request.osVersion, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.array(s.lazy(() => statusSchema))),
            style: "csv",
          },
          {
            name: "debugState",
            value: request.debugState,
            schema: s.optional(s.array(s.lazy(() => debugStateSchema))),
            style: "csv",
          },
          {
            name: "fallbackMode",
            value: request.fallbackMode,
            schema: s.optional(s.lazy(() => fallbackModeSchema)),
          },
          { name: "locationId", value: request.locationId, schema: s.optional(s.string()) },
          { name: "agentVersion", value: request.agentVersion, schema: s.optional(s.string()) },
          { name: "first", value: request.first, schema: s.defaulted(s.int(), 50) },
          { name: "after", value: request.after, schema: s.optional(s.string()) },
          { name: "order", value: request.order, schema: s.optional(s.lazy(() => orderSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: endpointsSearchResponseSchema },
        errorFactory: Endpoints.SearchEndpointsError,
      },
      options,
    );
  }
}

export namespace Endpoints {
  export type SearchEndpointsRequest = {
    /**
     * Broad search query across endpoints by device, user and email identities that contain this
     * string (case-insensitive)
     */
    id?: string;
    /** Search by email ids that contain this string (case-insensitive) */
    emailId?: string;
    /** Search by device names that contain this string (case-insensitive) */
    deviceName?: string;
    /**
     * Search by user ids that contain this string (case-insensitive). `userId` for OIDC users is
     * usually their email address.
     */
    userId?: string;
    /** Filter by this exact device OS version string */
    osVersion?: string;
    /** Filter by this exact set of status' */
    status?: Status[];
    /**
     * Filter by this exact set of debug states. 0 means not in debug 1 means debug request sent to
     * endpoint 2 means debug request acknowledged by endpoint
     */
    debugState?: DebugState[];
    /** Filter by the fallback mode */
    fallbackMode?: FallbackMode;
    /**
     * Filter by this exact location id - with an underscore separating the case sensitive city and
     * country values e.g. "City_Country"
     */
    locationId?: string;
    /** Filter by this exact agent version */
    agentVersion?: string;
    /**
     * An optional pagination param that states the number of records requested from the **start**
     * of the `cursor`. The default value is **50**.
     *
     * @default 50
     */
    first?: number;
    /**
     * An optional pagination cursor. Pass the `endCursor` from the previous response's `pageInfo`
     * to fetch the next page. Check `hasNextPage` in the previous response's `pageInfo` to
     * determine whether more records are available.
     */
    after?: string;
    /**
     * The direction of the sort by the `lastSeen` property. The default is to sort by descending
     */
    order?: Order;
  };

  export class SearchEndpointsError extends ApiError {
    declare readonly payload:
      | Declared<"errors", Errors>
      | Declared<"errors2", Errors>
      | Declared<"errors3", Errors>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchEndpointsError> = [
      { on: 400, kind: "errors", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 403, kind: "errors2", decode: { kind: "json", schema: errorsInternalSchema } },
      { on: 500, kind: "errors3", decode: { kind: "json", schema: errorsInternalSchema } },
    ];
  }
}
