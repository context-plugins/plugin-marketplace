import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  businessDiscoveryResponseSchema,
  type BusinessDiscoveryResponse,
} from "../models/business-discovery-response.js";
import { userSchema, type User } from "../models/user.js";
import type { Servers } from "../servers.js";

/**
 * Instagram Business and Creator account profiles
 */
export class Users {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Get Business Discovery
   *
   * @remarks
   * Get data about other Instagram Business or Creator accounts.
   *
   * @returns Business discovery data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBusinessDiscovery(
    request: Users.GetBusinessDiscoveryRequest,
    options?: RequestOptions,
  ): ApiPromise<BusinessDiscoveryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/business_discovery"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.string() },
          { name: "access_token", value: request.accessToken, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: businessDiscoveryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get User Profile
   *
   * @remarks
   * Get fields and edges on an Instagram Business or Creator account.
   *
   * @returns User profile data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUser(request: Users.GetUserRequest, options?: RequestOptions): ApiPromise<User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: userSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Users {
  export type GetBusinessDiscoveryRequest = {
    userId: string;
    /** Must include business_discovery.fields(). */
    fields: string;
    accessToken: string;
  };

  export type GetUserRequest = {
    /** The Instagram user ID. */
    userId: string;
    /** User access token. */
    accessToken: string;
    /** Comma-separated list of fields to return. */
    fields?: string;
  };
}
