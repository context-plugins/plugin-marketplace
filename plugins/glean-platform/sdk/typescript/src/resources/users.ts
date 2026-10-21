import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  platformListUsersResponseSchema,
  type PlatformListUsersResponse,
} from "../models/platform-list-users-response.js";
import { platformUserFilter1Schema, type PlatformUserFilter1 } from "../models/platform-user-filter1.js";
import { platformUserIncludeSchema, type PlatformUserInclude } from "../models/platform-user-include.js";
import type { Servers } from "../servers.js";

export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List users
   *
   * @remarks
   * List the users in the Glean directory, ordered by display_name and then by user_id. The list
   * includes the same people as the Glean People directory. Filter by name, email, manager_id, or
   * department_id to find specific users. Use the returned user_id values with other Platform APIs,
   * for example as usage limit targets.
   *
   * @returns Successful response.
   *
   * @throws {@link Users.PlatformUsersListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformUsersList(
    request: Users.PlatformUsersListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformListUsersResponse, Users.PlatformUsersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/users"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "filters",
            value: request.filters,
            schema: s.optional(s.array(s.lazy(() => platformUserFilter1Schema))),
          },
          {
            name: "include",
            value: request.include,
            schema: s.optional(s.array(s.lazy(() => platformUserIncludeSchema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListUsersResponseSchema },
        errorFactory: Users.PlatformUsersListError,
      },
      options,
    );
  }
}

export namespace Users {
  export type PlatformUsersListRequest = {
    /** Maximum number of users to return. Defaults to 50. Maximum is 100. @default 50 */
    pageSize?: number;
    /**
     * Opaque pagination cursor from a previous response. Send the same filters that the previous
     * request used.
     */
    cursor?: string;
    /**
     * JSON-encoded filters that choose which users are returned. The supported fields are name,
     * email, manager_id, and department_id, each with the operator EQUALS. Multiple values OR
     * within a filter. Multiple filters AND together. Each field may appear in only one filter. A
     * value that matches no user, such as an unknown email or department_id, returns no users
     * rather than an error.
     */
    filters?: PlatformUserFilter1[];
    /**
     * Optional fields to add to each user. Each value only adds fields; it does not change which
     * users are returned.
     */
    include?: PlatformUserInclude[];
  };

  export class PlatformUsersListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformUsersListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
