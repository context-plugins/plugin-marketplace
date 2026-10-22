import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { ldApiVersionSchema, type LdApiVersion } from "../models/ld-api-version.js";
import {
  postReleasePolicyRequestSchema,
  type PostReleasePolicyRequest,
} from "../models/post-release-policy-request.js";
import {
  putReleasePolicyRequestSchema,
  type PutReleasePolicyRequest,
} from "../models/put-release-policy-request.js";
import {
  releasePoliciesResponseSchema,
  type ReleasePoliciesResponse,
} from "../models/release-policies-response.js";
import { releasePolicySchema, type ReleasePolicy } from "../models/release-policy.js";
import type { Servers } from "../servers.js";

/**
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * Release policies let you specify your preferred rollout method for a given set of environments.
 */
export class ReleasePoliciesBeta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a release policy
   *
   * @remarks
   * Delete an existing release policy for the specified project.
   *
   * @returns Release policy deleted successfully
   *
   * @throws {@link ReleasePoliciesBeta.DeleteReleasePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteReleasePolicy(
    request: ReleasePoliciesBeta.DeleteReleasePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ReleasePoliciesBeta.DeleteReleasePolicyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies/{policyKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "policyKey", value: request.policyKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ReleasePoliciesBeta.DeleteReleasePolicyError,
      },
      options,
    );
  }

  /**
   * List release policies
   *
   * @remarks
   * Get a list of release policies for the specified project with optional filtering.
   *
   * @returns List of release policies
   *
   * @throws {@link ReleasePoliciesBeta.GetReleasePoliciesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getReleasePolicies(
    request: ReleasePoliciesBeta.GetReleasePoliciesRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePoliciesResponse, ReleasePoliciesBeta.GetReleasePoliciesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "excludeDefault", value: request.excludeDefault, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releasePoliciesResponseSchema },
        errorFactory: ReleasePoliciesBeta.GetReleasePoliciesError,
      },
      options,
    );
  }

  /**
   * Get a release policy by key
   *
   * @remarks
   * Retrieve a single release policy by its key for the specified project.
   *
   * @returns Release policy found
   *
   * @throws {@link ReleasePoliciesBeta.GetReleasePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getReleasePolicy(
    request: ReleasePoliciesBeta.GetReleasePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.GetReleasePolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies/{policyKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "policyKey", value: request.policyKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: releasePolicySchema },
        errorFactory: ReleasePoliciesBeta.GetReleasePolicyError,
      },
      options,
    );
  }

  /**
   * Update the order of existing release policies
   *
   * @remarks
   * Update the order of existing release policies for the specified project.
   *
   * @returns Release policies updated successfully
   *
   * @throws {@link ReleasePoliciesBeta.PostReleasePoliciesOrderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postReleasePoliciesOrder(
    request: ReleasePoliciesBeta.PostReleasePoliciesOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<ReleasePolicy[], ReleasePoliciesBeta.PostReleasePoliciesOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies/order"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => releasePolicySchema)) },
        errorFactory: ReleasePoliciesBeta.PostReleasePoliciesOrderError,
      },
      options,
    );
  }

  /**
   * Create a release policy
   *
   * @remarks
   * Create a new release policy for the specified project.
   *
   * @returns Release policy created successfully
   *
   * @throws {@link ReleasePoliciesBeta.PostReleasePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postReleasePolicy(
    request: ReleasePoliciesBeta.PostReleasePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.PostReleasePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: postReleasePolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: releasePolicySchema },
        errorFactory: ReleasePoliciesBeta.PostReleasePolicyError,
      },
      options,
    );
  }

  /**
   * Update a release policy
   *
   * @remarks
   * Update an existing release policy for the specified project.
   *
   * @returns Release policy updated successfully
   *
   * @throws {@link ReleasePoliciesBeta.PutReleasePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putReleasePolicy(
    request: ReleasePoliciesBeta.PutReleasePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ReleasePolicy, ReleasePoliciesBeta.PutReleasePolicyError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/release-policies/{policyKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "policyKey", value: request.policyKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: putReleasePolicyRequestSchema },
      },
      {
        success: { kind: "json", schema: releasePolicySchema },
        errorFactory: ReleasePoliciesBeta.PutReleasePolicyError,
      },
      options,
    );
  }
}

export namespace ReleasePoliciesBeta {
  export type DeleteReleasePolicyRequest = {
    /** The project key */
    projectKey: string;
    /** The human-readable key of the release policy */
    policyKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class DeleteReleasePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteReleasePolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetReleasePoliciesRequest = {
    /** The project key */
    projectKey: string;
    /**
     * When true, exclude the default release policy from the response. When false or omitted,
     * include the default policy if an environment filter is present.
     *
     * @default false
     */
    excludeDefault?: boolean;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetReleasePoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReleasePoliciesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetReleasePolicyRequest = {
    /** The project key */
    projectKey: string;
    /** The release policy key */
    policyKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetReleasePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReleasePolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostReleasePoliciesOrderRequest = {
    /** The project key */
    projectKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /**
     * Array of release policy keys in the desired rank order (scoped policies only). These keys
     * must include _all_ of the scoped release policies for the project.
     */
    body: string[];
  };

  export class PostReleasePoliciesOrderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostReleasePoliciesOrderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostReleasePolicyRequestParams = {
    /** The project key */
    projectKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** Release policy to create */
    body: PostReleasePolicyRequest;
  };

  export class PostReleasePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostReleasePolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PutReleasePolicyRequestParams = {
    /** The project key */
    projectKey: string;
    /** The human-readable key of the release policy */
    policyKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** Release policy data to update */
    body: PutReleasePolicyRequest;
  };

  export class PutReleasePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutReleasePolicyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
