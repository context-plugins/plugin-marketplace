import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createProjectRequestInternalSchema,
  type CreateProjectRequest,
} from "../models/create-project-request.js";
import {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "../models/error-response-ui-path-test-manager-projects-api.js";
import { projectListResponseSchema, type ProjectListResponse } from "../models/project-list-response.js";
import {
  projectUiPathTestManagerProjectsApiSchema,
  type ProjectUiPathTestManagerProjectsApi,
} from "../models/project-ui-path-test-manager-projects-api.js";
import type { Servers } from "../servers.js";

/**
 * Manage test projects within Test Manager
 */
export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Test Project
   *
   * @remarks
   * Creates a new test project in Test Manager. The project becomes the container for all test
   * cases, requirements, and test sets associated with the testing effort. Requires the TM.Projects
   * OAuth scope.
   *
   * @returns Test project created successfully
   *
   * @throws {@link Projects.CreateProjectError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createProject(
    request: Projects.CreateProjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProjectUiPathTestManagerProjectsApi, Projects.CreateProjectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi("/api/v2/projects"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createProjectRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: projectUiPathTestManagerProjectsApiSchema },
        errorFactory: Projects.CreateProjectError,
      },
      options,
    );
  }

  /**
   * UiPath Get a Test Project by ID
   *
   * @remarks
   * Retrieves a specific test project by its unique identifier. Returns project details including
   * name, description, creation date, and summary statistics for test cases and requirements.
   *
   * @returns The requested test project
   *
   * @throws {@link Projects.GetProjectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProject(
    request: Projects.GetProjectRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectUiPathTestManagerProjectsApi, Projects.GetProjectError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi("/api/v2/projects/{projectId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectUiPathTestManagerProjectsApiSchema },
        errorFactory: Projects.GetProjectError,
      },
      options,
    );
  }

  /**
   * UiPath List Test Projects
   *
   * @remarks
   * Retrieves all test projects accessible to the authenticated user. Projects are the top-level
   * containers for test cases, requirements, test sets, and execution results. Requires the
   * TM.Projects or TM.Projects.Read OAuth scope.
   *
   * @returns A list of test projects
   *
   * @throws {@link Projects.ListProjects2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects2(
    request: Projects.ListProjects2Request = {},
    options?: RequestOptions,
  ): ApiPromise<ProjectListResponse, Projects.ListProjects2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi("/api/v2/projects"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectListResponseSchema },
        errorFactory: Projects.ListProjects2Error,
      },
      options,
    );
  }
}

export namespace Projects {
  export type CreateProjectRequestParams = {
    body: CreateProjectRequest;
  };

  export class CreateProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProjectError> = [
      {
        on: 400,
        kind: "errorResponseUiPathTestManagerProjectsApi",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathTestManagerProjectsApi2",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
    ];
  }

  export type GetProjectRequest = {
    /** Unique identifier of the test project */
    projectId: string;
  };

  export class GetProjectError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProjectError> = [
      {
        on: 401,
        kind: "errorResponseUiPathTestManagerProjectsApi",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathTestManagerProjectsApi2",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
    ];
  }

  export type ListProjects2Request = {
    /** Page number for pagination (0-based) @default 0 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listProjects2RequestSchema: Schema<ListProjects2Request> = s.lazySchema(() =>
    s.object<ListProjects2Request>({
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListProjects2Error extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProjects2Error> = [
      {
        on: 401,
        kind: "errorResponseUiPathTestManagerProjectsApi",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathTestManagerProjectsApi2",
        decode: { kind: "json", schema: errorResponseUiPathTestManagerProjectsApiSchema },
      },
    ];
  }
}
