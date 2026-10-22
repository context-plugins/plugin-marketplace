import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  workspaceCreateRequestDtoSchema,
  type WorkspaceCreateRequestDto,
} from "../models/workspace-create-request-dto.js";
import {
  workspacePatchRequestDtoSchema,
  type WorkspacePatchRequestDto,
} from "../models/workspace-patch-request-dto.js";
import { workspaceSchemaSchema, type WorkspaceSchema } from "../models/workspace-schema.js";
import {
  workspacesListResponseDtoSchema,
  type WorkspacesListResponseDto,
} from "../models/workspaces-list-response-dto.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Workspaces
 */
export class Workspaces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Workspace in the specified Organization
   *
   * @remarks
   * Create a new Workspace in the specified Organization.
   *
   * @returns The Workspace has been successfully created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1WorkspacesCreateWorkspace(
    request: Workspaces.V1WorkspacesCreateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSchema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/workspaces"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceCreateRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: workspaceSchemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a Workspace
   *
   * @remarks
   * Delete the specified Workspace in the specified Organization.
   *
   * @returns The Workspace deletion has been accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1WorkspacesDeleteWorkspace(
    request: Workspaces.V1WorkspacesDeleteWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/workspaces/{workspaceId}"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "workspaceId", value: request.workspaceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a Workspace
   *
   * @remarks
   * Get the specified Workspace.
   *
   * @returns The Workspace details have been retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1WorkspacesGetWorkspace(
    request: Workspaces.V1WorkspacesGetWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceSchema, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/workspaces/{workspaceId}"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "workspaceId", value: request.workspaceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceSchemaSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all Workspaces for the specified Organization
   *
   * @remarks
   * Get a list of all Workspaces for the specified Organization.
   *
   * @returns List of Workspaces has been successfully retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1WorkspacesListWorkspaces(
    request: Workspaces.V1WorkspacesListWorkspacesRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesListResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/workspaces"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesListResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Workspace
   *
   * @remarks
   * Update the specified Workspace.
   *
   * @returns The Workspace has been successfully updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1WorkspacesUpdateWorkspace(
    request: Workspaces.V1WorkspacesUpdateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/workspaces/{workspaceId}"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "workspaceId", value: request.workspaceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspacePatchRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Workspaces {
  export type V1WorkspacesCreateWorkspaceRequest = {
    /** The <code>id</code> of the Organization where you want to create the Workspace. */
    organizationId: string;
    body: WorkspaceCreateRequestDto;
  };

  export type V1WorkspacesDeleteWorkspaceRequest = {
    /** The <code>id</code> of the Organization that contains the Workspace. */
    organizationId: string;
    /** The <code>id</code> of the Workspace to delete. */
    workspaceId: string;
  };

  export type V1WorkspacesGetWorkspaceRequest = {
    /** The <code>id</code> of the Organization that contains the Workspace. */
    organizationId: string;
    /** The <code>id</code> of the Workspace to get. */
    workspaceId: string;
  };

  export type V1WorkspacesListWorkspacesRequest = {
    /** The <code>id</code> of the Organization that contains the Workspaces. */
    organizationId: string;
  };

  export type V1WorkspacesUpdateWorkspaceRequest = {
    /** The <code>id</code> of the Organization that contains the Workspace. */
    organizationId: string;
    /** The <code>id</code> of the Workspace to update. */
    workspaceId: string;
    body: WorkspacePatchRequestDto;
  };
}
