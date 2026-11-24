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
  createRequirementRequestInternalSchema,
  type CreateRequirementRequest,
} from "../models/create-requirement-request.js";
import {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "../models/error-response-ui-path-test-manager-projects-api.js";
import {
  requirementListResponseSchema,
  type RequirementListResponse,
} from "../models/requirement-list-response.js";
import { requirementSchema, type Requirement } from "../models/requirement.js";
import type { Servers } from "../servers.js";

/**
 * Manage requirements and their traceability links to test cases
 */
export class Requirements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Requirement
   *
   * @remarks
   * Creates a new requirement within a test project. Requirements can be linked to test cases to
   * establish traceability coverage. Requires the TM.Requirements OAuth scope.
   *
   * @returns Requirement created successfully
   *
   * @throws {@link Requirements.CreateRequirementError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRequirement(
    request: Requirements.CreateRequirementRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Requirement, Requirements.CreateRequirementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/requirements",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createRequirementRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: requirementSchema },
        errorFactory: Requirements.CreateRequirementError,
      },
      options,
    );
  }

  /**
   * UiPath List Requirements in a Project
   *
   * @remarks
   * Retrieves all requirements defined within a specific test project. Requirements represent
   * business or technical specifications that test cases are mapped to for traceability. Supports
   * pagination. Requires the TM.Requirements or TM.Requirements.Read OAuth scope.
   *
   * @returns A list of requirements in the project
   *
   * @throws {@link Requirements.ListRequirementsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRequirements(
    request: Requirements.ListRequirementsRequest,
    options?: RequestOptions,
  ): ApiPromise<RequirementListResponse, Requirements.ListRequirementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/requirements",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: requirementListResponseSchema },
        errorFactory: Requirements.ListRequirementsError,
      },
      options,
    );
  }
}

export namespace Requirements {
  export type CreateRequirementRequestParams = {
    /** Unique identifier of the test project */
    projectId: string;
    body: CreateRequirementRequest;
  };

  export class CreateRequirementError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRequirementError> = [
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

  export type ListRequirementsRequest = {
    /** Unique identifier of the test project */
    projectId: string;
    /** Page number for pagination (0-based) @default 0 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listRequirementsRequestSchema: Schema<ListRequirementsRequest> = s.lazySchema(() =>
    s.object<ListRequirementsRequest>({
      projectId: s.string(),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListRequirementsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRequirementsError> = [
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
}
