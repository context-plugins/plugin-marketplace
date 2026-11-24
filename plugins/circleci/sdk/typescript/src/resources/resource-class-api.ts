import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  resourceClassCreationSchema,
  type ResourceClassCreation,
} from "../models/resource-class-creation.js";
import { resourceClassSchema, type ResourceClass } from "../models/resource-class.js";
import {
  runnerResourceClassRequestInternalSchema,
  type RunnerResourceClassRequest,
} from "../models/runner-resource-class-request.js";
import {
  runnerResourceClassResponseSchema,
  type RunnerResourceClassResponse,
} from "../models/runner-resource-class-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing runner resource classes, which define the compute resources available for
 * self-hosted runner jobs.
 */
export class ResourceClassApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a resource class
   *
   * @remarks
   * Creates a new resource class for the specified namespace. Returns a resource class token that
   * is only displayed once and cannot be retrieved again. This token is used by runner agents to
   * authenticate.
   *
   * @returns Resource class created successfully
   *
   * @throws {@link ResourceClassApi.CreateResourceClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResourceClass(
    request: ResourceClassApi.CreateResourceClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceClassCreation, ResourceClassApi.CreateResourceClassError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/runner/resource-class"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runnerResourceClassRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: resourceClassCreationSchema },
        errorFactory: ResourceClassApi.CreateResourceClassError,
      },
      options,
    );
  }

  /**
   * Delete a resource class
   *
   * @remarks
   * Deletes a resource class. This will prevent any runners using this resource class from picking
   * up new tasks.
   *
   * @returns Resource class deleted successfully
   *
   * @throws {@link ResourceClassApi.DeleteResourceClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourceClass(
    request: ResourceClassApi.DeleteResourceClassRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResourceClassApi.DeleteResourceClassError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/runner/resource-class/{resource-class}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "resource-class", value: request.resourceClass, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResourceClassApi.DeleteResourceClassError,
      },
      options,
    );
  }

  /**
   * Get a resource class
   *
   * @remarks
   * Returns details about a specific resource class.
   *
   * @returns Successfully retrieved resource class
   *
   * @throws {@link ResourceClassApi.GetResourceClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResourceClass(
    request: ResourceClassApi.GetResourceClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceClass, ResourceClassApi.GetResourceClassError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runner/resource-class/{resource-class}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "resource-class", value: request.resourceClass, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resourceClassSchema },
        errorFactory: ResourceClassApi.GetResourceClassError,
      },
      options,
    );
  }

  /**
   * List resource classes
   *
   * @remarks
   * Returns a list of runner resource classes for the specified namespace. Resource classes define
   * the compute resources available for self-hosted runner jobs.
   *
   * @returns Successfully retrieved resource classes
   *
   * @throws {@link ResourceClassApi.ListResourceClassesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listResourceClasses(
    request: ResourceClassApi.ListResourceClassesRequest,
    options?: RequestOptions,
  ): ApiPromise<RunnerResourceClassResponse, ResourceClassApi.ListResourceClassesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runner/resource-class"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "namespace", value: request.namespace, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runnerResourceClassResponseSchema },
        errorFactory: ResourceClassApi.ListResourceClassesError,
      },
      options,
    );
  }
}

export namespace ResourceClassApi {
  export type CreateResourceClassRequest = {
    body: RunnerResourceClassRequest;
  };

  export class CreateResourceClassError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateResourceClassError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteResourceClassRequest = {
    /** The resource class in namespace/name format */
    resourceClass: string;
  };

  export class DeleteResourceClassError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourceClassError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetResourceClassRequest = {
    /** The resource class in namespace/name format */
    resourceClass: string;
  };

  export class GetResourceClassError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResourceClassError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListResourceClassesRequest = {
    /** The namespace to list resource classes for */
    namespace: string;
  };

  export class ListResourceClassesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListResourceClassesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
