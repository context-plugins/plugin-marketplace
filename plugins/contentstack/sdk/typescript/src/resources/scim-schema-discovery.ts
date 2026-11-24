import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { scimListResponseSchema, type ScimListResponse } from "../models/scim-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Schema discovery endpoints implement the SCIM 2.0 service provider configuration, returning
 * supported schemas and resource types for IdP compatibility validation.
 */
export class ScimSchemaDiscovery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get SCIM resource types
   *
   * @remarks
   * Returns the SCIM resource types supported by the Contentstack SCIM API including Users and
   * Groups, enabling IdP clients to discover available endpoints and their schemas.
   *
   * @returns A list of SCIM resource types.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimResourceTypes(options?: RequestOptions): ApiPromise<ScimListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi("/scim/v2.0/ResourceTypes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get SCIM schemas
   *
   * @remarks
   * Returns the SCIM schemas supported by the Contentstack SCIM API, enabling IdP clients to
   * understand the available attributes for User and Group resources.
   *
   * @returns A list of SCIM schemas supported by the API.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScimSchemas(options?: RequestOptions): ApiPromise<ScimListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackScimScimGroupsApi("/scim/v2.0/Schemas"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: scimListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
