import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseUiPathPlatformManagementAuditLogsApiSchema,
  type ErrorResponseUiPathPlatformManagementAuditLogsApi,
} from "../models/error-response-ui-path-platform-management-audit-logs-api.js";
import {
  projectsClassifiersResponseSchema,
  type ProjectsClassifiersResponse,
} from "../models/projects-classifiers-response.js";
import {
  projectsExtractorsResponseSchema,
  type ProjectsExtractorsResponse,
} from "../models/projects-extractors-response.js";
import { projectsResponseInternalSchema, type ProjectsResponse } from "../models/projects-response.js";
import type { Servers } from "../servers.js";

/**
 * Discover available projects, classifiers, and extractors
 */
export class Discovery {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath List Classifiers for a Project
   *
   * @remarks
   * Retrieves all available classifier models configured within a specific Document Understanding
   * project. Classifiers identify the document type of a digitized document. Specialized
   * classifiers use machine learning models trained on specific document types; generative
   * classifiers use large language models.
   *
   * @returns A list of classifiers for the project
   *
   * @throws {@link Discovery.ListClassifiersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassifiers(
    request: Discovery.ListClassifiersRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsClassifiersResponse, Discovery.ListClassifiersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/classifiers",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsClassifiersResponseSchema },
        errorFactory: Discovery.ListClassifiersError,
      },
      options,
    );
  }

  /**
   * UiPath List Extractors for a Project
   *
   * @remarks
   * Retrieves all available extractor models configured within a specific Document Understanding
   * project. Each extractor is associated with a document type and defines the fields it can
   * extract. Use the extractor ID in extraction requests to invoke the correct model.
   *
   * @returns A list of extractors for the project
   *
   * @throws {@link Discovery.ListExtractorsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExtractors(
    request: Discovery.ListExtractorsRequest,
    options?: RequestOptions,
  ): ApiPromise<ProjectsExtractorsResponse, Discovery.ListExtractorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi(
          "/projects/{projectId}/extractors",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsExtractorsResponseSchema },
        errorFactory: Discovery.ListExtractorsError,
      },
      options,
    );
  }

  /**
   * UiPath List Document Understanding Projects
   *
   * @remarks
   * Retrieves all available Document Understanding projects accessible to the authenticated user.
   * Each project contains configuration for classifiers and extractors and provides URLs for
   * downstream discovery operations. Use project IDs to scope classification and extraction
   * requests to a specific project's models.
   *
   * @returns A list of available Document Understanding projects
   *
   * @throws {@link Discovery.ListProjectsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listProjects(
    request: Discovery.ListProjectsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProjectsResponse, Discovery.ListProjectsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathDocumentUnderstandingClassificationApi("/projects"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "api-version", value: request.apiVersion, schema: s.defaulted(s.string(), "1") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectsResponseInternalSchema },
        errorFactory: Discovery.ListProjectsError,
      },
      options,
    );
  }
}

export namespace Discovery {
  export type ListClassifiersRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
  };

  export class ListClassifiersError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassifiersError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type ListExtractorsRequest = {
    /** Unique identifier of the Document Understanding project */
    projectId: string;
    /** API version to use for this request @default "1" */
    apiVersion?: string;
  };

  export class ListExtractorsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListExtractorsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }

  export type ListProjectsRequest = {
    /** API version to use for this request @default "1" */
    apiVersion?: string;
  };

  export class ListProjectsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Declared<
          "errorResponseUiPathPlatformManagementAuditLogsApi2",
          ErrorResponseUiPathPlatformManagementAuditLogsApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListProjectsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathPlatformManagementAuditLogsApi2",
        decode: { kind: "json", schema: errorResponseUiPathPlatformManagementAuditLogsApiSchema },
      },
    ];
  }
}
