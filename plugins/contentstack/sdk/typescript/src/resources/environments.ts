import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createEnvironmentRequestSchema,
  type CreateEnvironmentRequest,
} from "../models/create-environment-request.js";
import { environmentListInternalSchema, type EnvironmentList } from "../models/environment-list.js";
import { environmentList2Schema, type EnvironmentList2 } from "../models/environment-list2.js";
import { environment2Schema, type Environment2 } from "../models/environment2.js";
import {
  error2ContentstackEnvironmentsApiSchema,
  type Error2ContentstackEnvironmentsApi,
} from "../models/error2-contentstack-environments-api.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import {
  projectsEnvironmentsRevalidateCacheRequestSchema,
  type ProjectsEnvironmentsRevalidateCacheRequest,
} from "../models/projects-environments-revalidate-cache-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing deployment environments (e.g., production, staging) within a stack.
 */
export class Environments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an environment
   *
   * @remarks
   * Creates a new deployment environment for a Launch project. Each environment can have its own
   * domain, build configuration, and deployment settings.
   *
   * @returns The newly created environment.
   *
   * @throws {@link Environments.CreateEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEnvironment(
    request: Environments.CreateEnvironmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Environment2, Environments.CreateEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/projects/{project_uid}/environments"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "project_uid", value: request.projectUid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEnvironmentRequestSchema },
      },
      {
        success: { kind: "json", schema: environment2Schema },
        errorFactory: Environments.CreateEnvironmentError,
      },
      options,
    );
  }

  /**
   * Delete an environment
   *
   * @remarks
   * Permanently deletes a deployment environment and its deployment history. This action is
   * irreversible.
   *
   * @returns Environment deleted successfully.
   *
   * @throws {@link Environments.DeleteEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEnvironment(
    request: Environments.DeleteEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Environments.DeleteEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi(
          "/projects/{project_uid}/environments/{env_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Environments.DeleteEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get all environments
   *
   * @remarks
   * Retrieves all deployment environments configured for the stack, such as production, staging,
   * and development.
   *
   * @returns A list of environments in the stack.
   *
   * @throws {@link Environments.GetAllEnvironmentsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllEnvironments(
    request: Environments.GetAllEnvironmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentList, Environments.GetAllEnvironmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/environments"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "api_key", value: request.apiKey, schema: s.string() },
          { name: "authtoken", value: request.authtoken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentListInternalSchema },
        errorFactory: Environments.GetAllEnvironmentsError,
      },
      options,
    );
  }

  /**
   * Get an environment
   *
   * @remarks
   * Retrieves details for a specific deployment environment including its domain configuration,
   * framework settings, and latest deployment status.
   *
   * @returns The requested environment.
   *
   * @throws {@link Environments.GetEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEnvironment(
    request: Environments.GetEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment2, Environments.GetEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi(
          "/projects/{project_uid}/environments/{env_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environment2Schema },
        errorFactory: Environments.GetEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get all environments
   *
   * @remarks
   * Retrieves all deployment environments configured for a Launch project, including their domain
   * configurations and current deployment status.
   *
   * @returns A list of environments for the project.
   *
   * @throws {@link Environments.GetProjectsByProjectUidEnvironmentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProjectsByProjectUidEnvironments(
    request: Environments.GetProjectsByProjectUidEnvironmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentList2, Environments.GetProjectsByProjectUidEnvironmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/projects/{project_uid}/environments"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "project_uid", value: request.projectUid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentList2Schema },
        errorFactory: Environments.GetProjectsByProjectUidEnvironmentsError,
      },
      options,
    );
  }

  /**
   * Revalidate CDN cache
   *
   * @remarks
   * Triggers a CDN cache revalidation for the specified environment, forcing the CDN to fetch fresh
   * content on the next request. Subject to cache revalidation quota limits per organization.
   *
   * @returns Cache revalidation triggered successfully.
   *
   * @throws {@link Environments.RevalidateCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revalidateCache(
    request: Environments.RevalidateCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Environments.RevalidateCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi(
          "/projects/{project_uid}/environments/{env_uid}/revalidate-cache",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => projectsEnvironmentsRevalidateCacheRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Environments.RevalidateCacheError,
      },
      options,
    );
  }

  /**
   * Update an environment
   *
   * @remarks
   * Updates the configuration of a deployment environment such as domain settings or build
   * configuration.
   *
   * @returns The updated environment.
   *
   * @throws {@link Environments.UpdateEnvironmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEnvironment(
    request: Environments.UpdateEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Environment2, Environments.UpdateEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi(
          "/projects/{project_uid}/environments/{env_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEnvironmentRequestSchema },
      },
      {
        success: { kind: "json", schema: environment2Schema },
        errorFactory: Environments.UpdateEnvironmentError,
      },
      options,
    );
  }
}

export namespace Environments {
  export type CreateEnvironmentRequestParams = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    body: CreateEnvironmentRequest;
  };

  export class CreateEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"error2ContentstackEnvironmentsApi", Error2ContentstackEnvironmentsApi>
      | Declared<"error2", Error2>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEnvironmentError> = [
      {
        on: 400,
        kind: "error2ContentstackEnvironmentsApi",
        decode: { kind: "json", schema: error2ContentstackEnvironmentsApiSchema },
      },
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type DeleteEnvironmentRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
  };

  export class DeleteEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"error2ContentstackEnvironmentsApi", Error2ContentstackEnvironmentsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEnvironmentError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 404,
        kind: "error2ContentstackEnvironmentsApi",
        decode: { kind: "json", schema: error2ContentstackEnvironmentsApiSchema },
      },
    ];
  }

  export type GetAllEnvironmentsRequest = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    /** User session token for authentication. Required if not using management token. */
    authtoken?: string;
  };

  export class GetAllEnvironmentsError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllEnvironmentsError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type GetEnvironmentRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
  };

  export class GetEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"error2ContentstackEnvironmentsApi", Error2ContentstackEnvironmentsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 404,
        kind: "error2ContentstackEnvironmentsApi",
        decode: { kind: "json", schema: error2ContentstackEnvironmentsApiSchema },
      },
    ];
  }

  export type GetProjectsByProjectUidEnvironmentsRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
  };

  export class GetProjectsByProjectUidEnvironmentsError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectsByProjectUidEnvironmentsError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type RevalidateCacheRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    body?: ProjectsEnvironmentsRevalidateCacheRequest;
  };

  export class RevalidateCacheError extends ApiError {
    declare readonly payload:
      | Declared<"error2", Error2>
      | Declared<"error2ContentstackEnvironmentsApi", Error2ContentstackEnvironmentsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevalidateCacheError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      {
        on: 404,
        kind: "error2ContentstackEnvironmentsApi",
        decode: { kind: "json", schema: error2ContentstackEnvironmentsApiSchema },
      },
    ];
  }

  export type UpdateEnvironmentRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    body: CreateEnvironmentRequest;
  };

  export class UpdateEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"error2ContentstackEnvironmentsApi", Error2ContentstackEnvironmentsApi>
      | Declared<"error2", Error2>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEnvironmentError> = [
      {
        on: 400,
        kind: "error2ContentstackEnvironmentsApi",
        decode: { kind: "json", schema: error2ContentstackEnvironmentsApiSchema },
      },
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }
}
