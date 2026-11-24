import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { datasetListSchema, type DatasetList } from "../models/dataset-list.js";
import { workspaceDetailSchema, type WorkspaceDetail } from "../models/workspace-detail.js";
import { workspaceListSchema, type WorkspaceList } from "../models/workspace-list.js";
import type { Servers } from "../servers.js";

/**
 * The canonical tenant surface: your workspace and its datasets, private included. Members-only —
 * workspaces you don't belong to are 404s here; browse other people's published content via
 * Libraries.
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
   * Get workspace detail
   *
   * @remarks
   * Returns one of your workspaces + ALL of its datasets regardless of visibility — including
   * private datasets that never appear under `/api/libraries`. `{workspace}` accepts a slug or a
   * numeric ID. Members only: a workspace you don't belong to returns 404.
   *
   * @returns Workspace + all its datasets (private included)
   *
   * @throws {@link Workspaces.GetWorkspaceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkspace(
    request: Workspaces.GetWorkspaceRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceDetail, Workspaces.GetWorkspaceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/workspaces/{workspace}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace", value: request.workspace, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceDetailSchema },
        errorFactory: Workspaces.GetWorkspaceError,
      },
      options,
    );
  }

  /**
   * List workspace datasets
   *
   * @remarks
   * Returns every dataset in one of your workspaces — `public`, `workspace`, and `private` alike.
   * Same `{workspace}` resolution (slug or numeric ID) and members-only access rules as `GET
   * /api/workspaces/{workspace}`.
   *
   * @returns All datasets in the workspace, ordered by ID
   *
   * @throws {@link Workspaces.ListWorkspaceDatasetsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaceDatasets(
    request: Workspaces.ListWorkspaceDatasetsRequest,
    options?: RequestOptions,
  ): ApiPromise<DatasetList, Workspaces.ListWorkspaceDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/workspaces/{workspace}/datasets"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "workspace", value: request.workspace, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetListSchema },
        errorFactory: Workspaces.ListWorkspaceDatasetsError,
      },
      options,
    );
  }

  /**
   * List your workspaces
   *
   * @remarks
   * Returns every workspace the calling user is a member of, with the caller's role in each.
   * `is_current` marks the workspace the authenticating API key (or session) is scoped to. Ordered
   * current-first, then by name.
   *
   * @returns Workspaces the calling user belongs to
   *
   * @throws {@link Workspaces.ListWorkspacesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkspaces(options?: RequestOptions): ApiPromise<WorkspaceList, Workspaces.ListWorkspacesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/workspaces"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceListSchema },
        errorFactory: Workspaces.ListWorkspacesError,
      },
      options,
    );
  }
}

export namespace Workspaces {
  export type GetWorkspaceRequest = {
    /** Workspace slug (e.g. `audioscrape`) or numeric workspace ID */
    workspace: string;
  };

  export class GetWorkspaceError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkspaceError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type ListWorkspaceDatasetsRequest = {
    /** Workspace slug (e.g. `audioscrape`) or numeric workspace ID */
    workspace: string;
  };

  export class ListWorkspaceDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkspaceDatasetsError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export class ListWorkspacesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkspacesError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
