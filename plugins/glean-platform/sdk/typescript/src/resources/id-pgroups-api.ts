import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  platformIdpGroupFilter1Schema,
  type PlatformIdpGroupFilter1,
} from "../models/platform-idp-group-filter1.js";
import {
  platformListIdpGroupsResponseSchema,
  type PlatformListIdpGroupsResponse,
} from "../models/platform-list-idp-groups-response.js";
import type { Servers } from "../servers.js";

export class IdPGroupsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List IdP groups
   *
   * @remarks
   * List the identity provider (IdP) groups that Glean loads from the directory, ordered by
   * display_name and then by idp_group_id. Use idp_group_id to name a group in other Platform APIs.
   * An IdP group is active when Glean loaded it from the directory. An IdP group is inactive when
   * only a usage limit names it, for example after the group was removed from the identity
   * provider. Inactive IdP groups are left out unless an is_active filter includes the value
   * "false". Usage limits apply only to IdP groups from the datasource instance that the usage
   * settings select, so use the provider_instance filter to list only those groups. Internal O365
   * ownership groups and SharePoint groups are left out. The caller must be able to read the
   * workspace configuration or the workspace billing.
   *
   * @returns Successful response.
   *
   * @throws {@link IdPGroupsApi.PlatformAdminIdpGroupsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminIdpGroupsList(
    request: IdPGroupsApi.PlatformAdminIdpGroupsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformListIdpGroupsResponse, IdPGroupsApi.PlatformAdminIdpGroupsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/idp-groups"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "filters",
            value: request.filters,
            schema: s.optional(s.array(s.lazy(() => platformIdpGroupFilter1Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListIdpGroupsResponseSchema },
        errorFactory: IdPGroupsApi.PlatformAdminIdpGroupsListError,
      },
      options,
    );
  }
}

export namespace IdPGroupsApi {
  export type PlatformAdminIdpGroupsListRequest = {
    /** Maximum number of IdP groups to return. Defaults to 50. Maximum is 100. @default 50 */
    pageSize?: number;
    /**
     * Opaque pagination cursor from a previous response. Send the same filters that the previous
     * request used.
     */
    cursor?: string;
    /**
     * JSON-encoded filters that choose which IdP groups are returned. The supported fields are
     * is_active, with the values "true" and "false", and provider_instance, with datasource
     * instance names such as "okta". provider_instance values match without case. The only
     * supported operator is EQUALS. Multiple values OR within a filter. Multiple filters AND
     * together. Without an is_active filter, only active IdP groups are returned. To return active
     * and inactive IdP groups, send [{"field":"is_active","values":["true","false"]}].
     */
    filters?: PlatformIdpGroupFilter1[];
  };

  export class PlatformAdminIdpGroupsListError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAdminIdpGroupsListError> = [
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
