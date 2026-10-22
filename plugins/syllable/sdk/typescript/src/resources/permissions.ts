import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  permissionGroupResponseSchema,
  type PermissionGroupResponse,
} from "../models/permission-group-response.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to permissions. A permission is a specific capability or access level granted
 * to a user within the Syllable system. Permissions are used to control access to various features
 * and functionalities.
 */
export class Permissions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Permissions
   *
   * @remarks
   * Get all available permissions in the system.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  permissionsList(options?: RequestOptions): ApiPromise<PermissionGroupResponse[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/permissions/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => permissionGroupResponseSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
