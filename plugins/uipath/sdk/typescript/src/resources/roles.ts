import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { oDataRoleCollectionSchema, type ODataRoleCollection } from "../models/odata-role-collection.js";
import type { Servers } from "../servers.js";

/**
 * Manage roles and their associated permissions
 */
export class Roles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath List Roles
   *
   * @remarks
   * Retrieves a list of roles defined in Orchestrator. Roles bundle sets of permissions together
   * and are assigned to users or groups to control their access to resources and operations.
   *
   * @returns A list of roles
   *
   * @throws {@link Roles.ListRolesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRoles(
    request: Roles.ListRolesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ODataRoleCollection, Roles.ListRolesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/odata/Roles"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "$filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "$top", value: request.top, schema: s.optional(s.int()) },
          { name: "$skip", value: request.skip, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oDataRoleCollectionSchema },
        errorFactory: Roles.ListRolesError,
      },
      options,
    );
  }
}

export namespace Roles {
  export type ListRolesRequest = {
    /** OData filter expression to narrow results (e.g., State eq 'Running') */
    filter?: string;
    /** Maximum number of records to return (default 100, max 1000) */
    top?: number;
    /** Number of records to skip for pagination */
    skip?: number;
  };

  export const listRolesRequestSchema: Schema<ListRolesRequest> = s.lazySchema(() =>
    s.object<ListRolesRequest>({
      filter: s.optional(s.string()),
      top: s.optional(s.int().check(s.gte(1), s.lte(1000))),
      skip: s.optional(s.int().check(s.gte(0))),
    }),
  );

  export class ListRolesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListRolesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
