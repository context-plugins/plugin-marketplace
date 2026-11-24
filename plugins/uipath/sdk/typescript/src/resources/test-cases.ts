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
  createTestCaseRequestInternalSchema,
  type CreateTestCaseRequest,
} from "../models/create-test-case-request.js";
import {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "../models/error-response-ui-path-test-manager-projects-api.js";
import { testCaseListResponseSchema, type TestCaseListResponse } from "../models/test-case-list-response.js";
import { testCaseSchema, type TestCase } from "../models/test-case.js";
import type { Servers } from "../servers.js";

/**
 * Manage test cases and their definitions
 */
export class TestCases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Test Case
   *
   * @remarks
   * Creates a new test case within a test project. The test case can be linked to automation
   * packages deployed in Orchestrator to enable automated test execution via test sets. Requires
   * the TM.TestCases OAuth scope.
   *
   * @returns Test case created successfully
   *
   * @throws {@link TestCases.CreateTestCaseError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTestCase(
    request: TestCases.CreateTestCaseRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TestCase, TestCases.CreateTestCaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testcases",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTestCaseRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: testCaseSchema },
        errorFactory: TestCases.CreateTestCaseError,
      },
      options,
    );
  }

  /**
   * UiPath Get a Test Case by ID
   *
   * @remarks
   * Retrieves a specific test case by its unique identifier within a project. Returns full test
   * case details including steps, labels, custom fields, automation linkage, and preconditions.
   *
   * @returns The requested test case
   *
   * @throws {@link TestCases.GetTestCaseError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTestCase(
    request: TestCases.GetTestCaseRequest,
    options?: RequestOptions,
  ): ApiPromise<TestCase, TestCases.GetTestCaseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testcases/{testCaseId}",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "testCaseId", value: request.testCaseId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: testCaseSchema },
        errorFactory: TestCases.GetTestCaseError,
      },
      options,
    );
  }

  /**
   * UiPath List Test Cases in a Project
   *
   * @remarks
   * Retrieves all test cases defined within a specific test project. Each test case represents a
   * single test scenario with preconditions, steps, and expected results. Supports pagination and
   * filtering. Requires the TM.TestCases or TM.TestCases.Read OAuth scope.
   *
   * @returns A list of test cases in the project
   *
   * @throws {@link TestCases.ListTestCasesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestCases(
    request: TestCases.ListTestCasesRequest,
    options?: RequestOptions,
  ): ApiPromise<TestCaseListResponse, TestCases.ListTestCasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testcases",
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
        success: { kind: "json", schema: testCaseListResponseSchema },
        errorFactory: TestCases.ListTestCasesError,
      },
      options,
    );
  }
}

export namespace TestCases {
  export type CreateTestCaseRequestParams = {
    /** Unique identifier of the test project */
    projectId: string;
    body: CreateTestCaseRequest;
  };

  export class CreateTestCaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTestCaseError> = [
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

  export type GetTestCaseRequest = {
    /** Unique identifier of the test project */
    projectId: string;
    /** Unique identifier of the test case */
    testCaseId: string;
  };

  export class GetTestCaseError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTestCaseError> = [
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

  export type ListTestCasesRequest = {
    /** Unique identifier of the test project */
    projectId: string;
    /** Page number for pagination (0-based) @default 0 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listTestCasesRequestSchema: Schema<ListTestCasesRequest> = s.lazySchema(() =>
    s.object<ListTestCasesRequest>({
      projectId: s.string(),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListTestCasesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestCasesError> = [
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
