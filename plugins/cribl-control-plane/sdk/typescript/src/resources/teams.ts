import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  countedTeamAccessControlListSchema,
  type CountedTeamAccessControlList,
} from "../models/counted-team-access-control-list.js";
import { errorSchema, type Error } from "../models/error.js";
import { productsCoreSchema, type ProductsCore } from "../models/products-core.js";
import { rbacResourceSchema, type RbacResource } from "../models/rbac-resource.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Teams
 */
export class Teams {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the team access control list for a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Get the Team access control list (ACL) for the specified Worker Group, Outpost Group, or Edge
   * Fleet.<br/><br/>This endpoint lists Teams with explicit access assignments on the Group or
   * Fleet. The response does not include access granted to individual Team Members through direct
   * user assignments or inherited based on Team Permissions and Roles at the Organization/Global,
   * Workspace, or product level.<br/><br/>To list the user ACL for a Group or Fleet, use <code>GET
   * /products/{product}/groups/{id}/acl</code>.
   *
   * @returns The requested TeamAccessControlList object in a single-item list.
   *
   * @throws {@link Teams.GetProductsGroupsAclTeamsByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsGroupsAclTeamsByProductAndId(
    request: Teams.GetProductsGroupsAclTeamsByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedTeamAccessControlList, Teams.GetProductsGroupsAclTeamsByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}/acl/teams"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "type", value: request.type, schema: s.optional(s.lazy(() => rbacResourceSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedTeamAccessControlListSchema },
        errorFactory: Teams.GetProductsGroupsAclTeamsByProductAndIdError,
      },
      options,
    );
  }
}

export namespace Teams {
  export type GetProductsGroupsAclTeamsByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. */
    product: ProductsCore;
    /**
     * The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the Team ACL
     * for.
     */
    id: string;
    /** Filter for limiting the response to ACL entries for the specified RBAC resource type. */
    type?: RbacResource;
  };

  export class GetProductsGroupsAclTeamsByProductAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsGroupsAclTeamsByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
