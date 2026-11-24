import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deployedPackageInputSchema, type DeployedPackageInput } from "../models/deployed-package-input.js";
import {
  deployedPackageQueryResultSchema,
  type DeployedPackageQueryResult,
} from "../models/deployed-package-query-result.js";
import { deployedPackageSchema, type DeployedPackage } from "../models/deployed-package.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { queryRequestSchema, type QueryRequest } from "../models/query-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage deployed packages and the deployment of integration components to environments.
 */
export class Deployments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Deploy a package
   *
   * @remarks
   * Deploys a packaged component to an environment. Creates a new deployed package record
   * associating the package with the target environment.
   *
   * @returns The deployed package record.
   *
   * @throws {@link Deployments.CreateDeployedPackageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDeployedPackage(
    request: Deployments.CreateDeployedPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<DeployedPackage, Deployments.CreateDeployedPackageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/DeployedPackage"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deployedPackageInputSchema },
      },
      {
        success: { kind: "json", schema: deployedPackageSchema },
        errorFactory: Deployments.CreateDeployedPackageError,
      },
      options,
    );
  }

  /**
   * Boomi Undeploy a package
   *
   * @remarks
   * Removes a deployed package from its environment, undeploying the component.
   *
   * @returns Undeployment successful.
   *
   * @throws {@link Deployments.DeleteDeployedPackageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDeployedPackage(
    request: Deployments.DeleteDeployedPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Deployments.DeleteDeployedPackageError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/DeployedPackage/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Deployments.DeleteDeployedPackageError,
      },
      options,
    );
  }

  /**
   * Boomi Get a deployed package
   *
   * @remarks
   * Retrieves the details of a specific deployed package by its ID.
   *
   * @returns The deployed package object.
   *
   * @throws {@link Deployments.GetDeployedPackageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeployedPackage(
    request: Deployments.GetDeployedPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<DeployedPackage, Deployments.GetDeployedPackageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/DeployedPackage/{id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deployedPackageSchema },
        errorFactory: Deployments.GetDeployedPackageError,
      },
      options,
    );
  }

  /**
   * Boomi Query deployed packages
   *
   * @remarks
   * Returns a list of deployed packages matching the specified filter criteria. Useful for auditing
   * current deployments across environments.
   *
   * @returns Query results containing matching deployed package objects.
   *
   * @throws {@link Deployments.QueryDeployedPackagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryDeployedPackages(
    request: Deployments.QueryDeployedPackagesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeployedPackageQueryResult, Deployments.QueryDeployedPackagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/DeployedPackage/query"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryRequestSchema },
      },
      {
        success: { kind: "json", schema: deployedPackageQueryResultSchema },
        errorFactory: Deployments.QueryDeployedPackagesError,
      },
      options,
    );
  }
}

export namespace Deployments {
  export type CreateDeployedPackageRequest = {
    body: DeployedPackageInput;
  };

  export class CreateDeployedPackageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDeployedPackageError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteDeployedPackageRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class DeleteDeployedPackageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDeployedPackageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetDeployedPackageRequest = {
    /** Unique identifier of the platform object. */
    id: string;
  };

  export class GetDeployedPackageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeployedPackageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type QueryDeployedPackagesRequest = {
    body: QueryRequest;
  };

  export class QueryDeployedPackagesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueryDeployedPackagesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
