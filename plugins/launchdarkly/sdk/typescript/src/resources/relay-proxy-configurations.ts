import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { patchFailedErrorRepSchema, type PatchFailedErrorRep } from "../models/patch-failed-error-rep.js";
import { patchWithCommentSchema, type PatchWithComment } from "../models/patch-with-comment.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import {
  relayAutoConfigCollectionRepSchema,
  type RelayAutoConfigCollectionRep,
} from "../models/relay-auto-config-collection-rep.js";
import { relayAutoConfigPostSchema, type RelayAutoConfigPost } from "../models/relay-auto-config-post.js";
import { relayAutoConfigRepSchema, type RelayAutoConfigRep } from "../models/relay-auto-config-rep.js";
import {
  statusConflictErrorRepSchema,
  type StatusConflictErrorRep,
} from "../models/status-conflict-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import type { Servers } from "../servers.js";

/**
 *
 * > ### Relay Proxy automatic configuration is an Enterprise feature > > Relay Proxy automatic
 * configuration is available to customers on an Enterprise plan. To learn more, [read about our
 * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
 * Sales](https://launchdarkly.com/contact-sales/).
 *
 * The Relay Proxy automatic configuration API provides access to all resources related to relay
 * tokens. To learn more, read [Automatic
 * configuration](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration).
 *
 * Several of the endpoints in the Relay Proxy automatic configuration API require a configuration
 * ID. The Relay Proxy configuration ID is returned as part of the [Create a new Relay Proxy
 * config](https://launchdarkly.com/docs/api/relay-proxy-configurations/post-relay-auto-config) and
 * [List Relay Proxy
 * configs](https://launchdarkly.com/docs/api/relay-proxy-configurations/get-relay-proxy-configs)
 * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
 */
export class RelayProxyConfigurations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Relay Proxy config by ID
   *
   * @remarks
   * Delete a Relay Proxy config.
   *
   * @returns Action succeeded
   *
   * @throws {@link RelayProxyConfigurations.DeleteRelayAutoConfigError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteRelayAutoConfig(
    request: RelayProxyConfigurations.DeleteRelayAutoConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RelayProxyConfigurations.DeleteRelayAutoConfigError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RelayProxyConfigurations.DeleteRelayAutoConfigError,
      },
      options,
    );
  }

  /**
   * Get Relay Proxy config
   *
   * @remarks
   * Get a single Relay Proxy auto config by ID.
   *
   * @returns Relay auto config response
   *
   * @throws {@link RelayProxyConfigurations.GetRelayProxyConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRelayProxyConfig(
    request: RelayProxyConfigurations.GetRelayProxyConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.GetRelayProxyConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: relayAutoConfigRepSchema },
        errorFactory: RelayProxyConfigurations.GetRelayProxyConfigError,
      },
      options,
    );
  }

  /**
   * List Relay Proxy configs
   *
   * @remarks
   * Get a list of Relay Proxy configurations in the account.
   *
   * @returns Relay auto configs collection response
   *
   * @throws {@link RelayProxyConfigurations.GetRelayProxyConfigsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRelayProxyConfigs(
    options?: RequestOptions,
  ): ApiPromise<RelayAutoConfigCollectionRep, RelayProxyConfigurations.GetRelayProxyConfigsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: relayAutoConfigCollectionRepSchema },
        errorFactory: RelayProxyConfigurations.GetRelayProxyConfigsError,
      },
      options,
    );
  }

  /**
   * Update a Relay Proxy config
   *
   * @remarks
   * Update a Relay Proxy configuration. Updating a configuration uses a [JSON
   * patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge
   * patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To
   * learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @returns Relay auto config response
   *
   * @throws {@link RelayProxyConfigurations.PatchRelayAutoConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchRelayAutoConfig(
    request: RelayProxyConfigurations.PatchRelayAutoConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.PatchRelayAutoConfigError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patchWithCommentSchema },
      },
      {
        success: { kind: "json", schema: relayAutoConfigRepSchema },
        errorFactory: RelayProxyConfigurations.PatchRelayAutoConfigError,
      },
      options,
    );
  }

  /**
   * Create a new Relay Proxy config
   *
   * @remarks
   * Create a Relay Proxy config.
   *
   * @returns Relay auto config response
   *
   * @throws {@link RelayProxyConfigurations.PostRelayAutoConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postRelayAutoConfig(
    request: RelayProxyConfigurations.PostRelayAutoConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.PostRelayAutoConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: relayAutoConfigPostSchema },
      },
      {
        success: { kind: "json", schema: relayAutoConfigRepSchema },
        errorFactory: RelayProxyConfigurations.PostRelayAutoConfigError,
      },
      options,
    );
  }

  /**
   * Reset Relay Proxy configuration key
   *
   * @remarks
   * Reset a Relay Proxy configuration's secret key with an optional expiry time for the old key.
   *
   * @returns Relay auto config response
   *
   * @throws {@link RelayProxyConfigurations.ResetRelayAutoConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  resetRelayAutoConfig(
    request: RelayProxyConfigurations.ResetRelayAutoConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<RelayAutoConfigRep, RelayProxyConfigurations.ResetRelayAutoConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/account/relay-auto-configs/{id}/reset"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "expiry", value: request.expiry, schema: s.optional(s.int()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: relayAutoConfigRepSchema },
        errorFactory: RelayProxyConfigurations.ResetRelayAutoConfigError,
      },
      options,
    );
  }
}

export namespace RelayProxyConfigurations {
  export type DeleteRelayAutoConfigRequest = {
    /** The relay auto config id */
    id: string;
  };

  export class DeleteRelayAutoConfigError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRelayAutoConfigError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetRelayProxyConfigRequest = {
    /** The relay auto config id */
    id: string;
  };

  export class GetRelayProxyConfigError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRelayProxyConfigError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export class GetRelayProxyConfigsError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRelayProxyConfigsError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PatchRelayAutoConfigRequest = {
    /** The relay auto config id */
    id: string;
    body: PatchWithComment;
  };

  export class PatchRelayAutoConfigError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"statusConflictErrorRep", StatusConflictErrorRep>
      | Declared<"patchFailedErrorRep", PatchFailedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchRelayAutoConfigError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      {
        on: 409,
        kind: "statusConflictErrorRep",
        decode: { kind: "json", schema: statusConflictErrorRepSchema },
      },
      { on: 422, kind: "patchFailedErrorRep", decode: { kind: "json", schema: patchFailedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PostRelayAutoConfigRequest = {
    body: RelayAutoConfigPost;
  };

  export class PostRelayAutoConfigError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostRelayAutoConfigError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type ResetRelayAutoConfigRequest = {
    /** The Relay Proxy configuration ID */
    id: string;
    /**
     * An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time
     * in milliseconds. By default, the Relay Proxy configuration will expire immediately.
     */
    expiry?: number;
  };

  export class ResetRelayAutoConfigError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetRelayAutoConfigError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
