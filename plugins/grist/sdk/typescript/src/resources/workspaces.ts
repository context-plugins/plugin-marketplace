import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { orgIdSchema, type OrgId } from "../models/unions/org-id.js";
import {
  workspacesAccessResponseSchema,
  type WorkspacesAccessResponse,
} from "../models/unions/workspaces-access-response.js";
import {
  workspacesRemoveResponseSchema,
  type WorkspacesRemoveResponse,
} from "../models/unions/workspaces-remove-response.js";
import { workspacesResponseSchema, type WorkspacesResponse } from "../models/unions/workspaces-response.js";
import {
  workspacesUnremoveResponseSchema,
  type WorkspacesUnremoveResponse,
} from "../models/unions/workspaces-unremove-response.js";
import { workspaceAccessReadSchema, type WorkspaceAccessRead } from "../models/workspace-access-read.js";
import { workspaceParametersSchema, type WorkspaceParameters } from "../models/workspace-parameters.js";
import {
  workspaceWithDocsAndDomainSchema,
  type WorkspaceWithDocsAndDomain,
} from "../models/workspace-with-docs-and-domain.js";
import {
  workspaceWithDocsAndOrgSchema,
  type WorkspaceWithDocsAndOrg,
} from "../models/workspace-with-docs-and-org.js";
import {
  workspacesAccessRequestSchema,
  type WorkspacesAccessRequest,
} from "../models/workspaces-access-request.js";
import type { Servers } from "../servers.js";

/**
 * Sites can be organized into groups of documents called workspaces.
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
   * Create an empty workspace
   *
   * @returns The workspace id
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWorkspace(
    request: Workspaces.CreateWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<number, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orgs/{orgId}/workspaces"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceParametersSchema },
      },
      {
        success: { kind: "json", schema: s.int() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a workspace
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWorkspace(
    request: Workspaces.DeleteWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Describe a workspace
   *
   * @returns A workspace
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeWorkspace(
    request: Workspaces.DescribeWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceWithDocsAndOrg, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceWithDocsAndOrgSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List users with access to workspace
   *
   * @returns Users with access to workspace
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaceAccess(
    request: Workspaces.ListWorkspaceAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceAccessRead, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceAccessReadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List workspaces and documents within an org
   *
   * @returns An org's workspaces and documents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaces(
    request: Workspaces.ListWorkspacesRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceWithDocsAndDomain[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgs/{orgId}/workspaces"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workspaceWithDocsAndDomainSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify a workspace
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyWorkspace(
    request: Workspaces.ModifyWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspaceParametersSchema },
      },
      {
        success: { kind: "json", schema: workspacesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change who has access to workspace
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyWorkspaceAccess(
    request: Workspaces.ModifyWorkspaceAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesAccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: workspacesAccessRequestSchema },
      },
      {
        success: { kind: "json", schema: workspacesAccessResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Move workspace to trash
   *
   * @remarks
   * Soft-delete the workspace by moving it to trash. The workspace can be restored using the
   * unremove endpoint. If the `permanent` query parameter is set to true, the workspace is
   * permanently deleted instead.
   *
   * @returns Workspace moved to trash (or permanently deleted)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeWorkspace(
    request: Workspaces.RemoveWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesRemoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/remove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [{ name: "permanent", value: request.permanent, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesRemoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore workspace from trash
   *
   * @remarks
   * Recover a workspace that was previously soft-deleted. Only works if the workspace is still in
   * the trash.
   *
   * @returns Workspace restored successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unremoveWorkspace(
    request: Workspaces.UnremoveWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacesUnremoveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/workspaces/{workspaceId}/unremove"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "workspaceId", value: request.workspaceId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacesUnremoveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Workspaces {
  export type CreateWorkspaceRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
    /** settings for the workspace */
    body: WorkspaceParameters;
  };

  export type DeleteWorkspaceRequest = {
    /** An integer id */
    workspaceId: number;
  };

  export type DescribeWorkspaceRequest = {
    /** An integer id */
    workspaceId: number;
  };

  export type ListWorkspaceAccessRequest = {
    /** An integer id */
    workspaceId: number;
  };

  export type ListWorkspacesRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
  };

  export type ModifyWorkspaceRequest = {
    /** An integer id */
    workspaceId: number;
    /** the changes to make */
    body: WorkspaceParameters;
  };

  export type ModifyWorkspaceAccessRequest = {
    /** An integer id */
    workspaceId: number;
    /** the changes to make */
    body: WorkspacesAccessRequest;
  };

  export type RemoveWorkspaceRequest = {
    /** An integer id */
    workspaceId: number;
    /** If true, permanently delete instead of moving to trash */
    permanent?: boolean;
  };

  export type UnremoveWorkspaceRequest = {
    /** An integer id */
    workspaceId: number;
  };
}
