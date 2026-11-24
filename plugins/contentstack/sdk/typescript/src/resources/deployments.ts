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
  createDeploymentRequestSchema,
  type CreateDeploymentRequest,
} from "../models/create-deployment-request.js";
import { deploymentListSchema, type DeploymentList } from "../models/deployment-list.js";
import { deploymentSchema, type Deployment } from "../models/deployment.js";
import { errorSchema, type Error } from "../models/error.js";
import { logResponseSchema, type LogResponse } from "../models/log-response.js";
import type { Servers } from "../servers.js";

/**
 * Deployments represent individual build and publish operations to a Launch environment. Each
 * deployment has associated build logs, server logs, and status tracking.
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
   * Create a deployment
   *
   * @remarks
   * Triggers a new deployment to the specified environment. Requires a previously uploaded build
   * artifact referenced by its upload URL. The deployment process builds and publishes the
   * application to the environment's CDN infrastructure.
   *
   * @returns Deployment created and queued for processing.
   *
   * @throws {@link Deployments.CreateDeploymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDeployment(
    request: Deployments.CreateDeploymentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Deployment, Deployments.CreateDeploymentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDeploymentRequestSchema },
      },
      {
        success: { kind: "json", schema: deploymentSchema },
        errorFactory: Deployments.CreateDeploymentError,
      },
      options,
    );
  }

  /**
   * Get all deployments
   *
   * @remarks
   * Retrieves all deployments for a specific environment, showing deployment history with status,
   * creation times, and build metadata.
   *
   * @returns A list of deployments for the environment.
   *
   * @throws {@link Deployments.GetAllDeploymentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllDeployments(
    request: Deployments.GetAllDeploymentsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeploymentList, Deployments.GetAllDeploymentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/projects/{project_uid}/environments/{env_uid}/deployments"),
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
        success: { kind: "json", schema: deploymentListSchema },
        errorFactory: Deployments.GetAllDeploymentsError,
      },
      options,
    );
  }

  /**
   * Get a deployment
   *
   * @remarks
   * Retrieves the full details of a specific deployment including its status, build configuration,
   * and completion information.
   *
   * @returns The requested deployment details.
   *
   * @throws {@link Deployments.GetDeploymentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeployment(
    request: Deployments.GetDeploymentRequest,
    options?: RequestOptions,
  ): ApiPromise<Deployment, Deployments.GetDeploymentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
          { name: "deploy_uid", value: request.deployUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deploymentSchema },
        errorFactory: Deployments.GetDeploymentError,
      },
      options,
    );
  }

  /**
   * Get deployment logs
   *
   * @remarks
   * Retrieves the build and deployment logs for a specific deployment, useful for debugging failed
   * deployments and monitoring build progress.
   *
   * @returns The deployment log output.
   *
   * @throws {@link Deployments.GetDeploymentLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeploymentLogs(
    request: Deployments.GetDeploymentLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<LogResponse, Deployments.GetDeploymentLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/logs",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
          { name: "deploy_uid", value: request.deployUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logResponseSchema },
        errorFactory: Deployments.GetDeploymentLogsError,
      },
      options,
    );
  }

  /**
   * Get server logs
   *
   * @remarks
   * Retrieves server-side runtime logs for a deployed environment, useful for debugging server-side
   * rendering issues and monitoring application runtime behavior.
   *
   * @returns The server runtime logs.
   *
   * @throws {@link Deployments.GetServerLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServerLogs(
    request: Deployments.GetServerLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<LogResponse, Deployments.GetServerLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/projects/{project_uid}/environments/{env_uid}/deployments/{deploy_uid}/server-logs",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "project_uid", value: request.projectUid, schema: s.string() },
          { name: "env_uid", value: request.envUid, schema: s.string() },
          { name: "deploy_uid", value: request.deployUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logResponseSchema },
        errorFactory: Deployments.GetServerLogsError,
      },
      options,
    );
  }
}

export namespace Deployments {
  export type CreateDeploymentRequestParams = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    body: CreateDeploymentRequest;
  };

  export class CreateDeploymentError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDeploymentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllDeploymentsRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
  };

  export class GetAllDeploymentsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllDeploymentsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDeploymentRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    /** The unique identifier of the deployment. */
    deployUid: string;
  };

  export class GetDeploymentError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetDeploymentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDeploymentLogsRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    /** The unique identifier of the deployment. */
    deployUid: string;
  };

  export class GetDeploymentLogsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetDeploymentLogsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetServerLogsRequest = {
    /** The unique identifier of the Launch project. */
    projectUid: string;
    /** The unique identifier of the deployment environment. */
    envUid: string;
    /** The unique identifier of the deployment. */
    deployUid: string;
  };

  export class GetServerLogsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetServerLogsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
