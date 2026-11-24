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
  createTestSetRequestInternalSchema,
  type CreateTestSetRequest,
} from "../models/create-test-set-request.js";
import {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "../models/error-response-ui-path-test-manager-projects-api.js";
import { testSetListResponseSchema, type TestSetListResponse } from "../models/test-set-list-response.js";
import { testSetSchema, type TestSet } from "../models/test-set.js";
import type { Servers } from "../servers.js";

/**
 * Manage test sets that group test cases for execution
 */
export class TestSets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create a Test Set
   *
   * @remarks
   * Creates a new test set within a project. The test set can include test cases and be configured
   * to execute against specific Orchestrator environments. Requires the TM.TestSets OAuth scope.
   *
   * @returns Test set created successfully
   *
   * @throws {@link TestSets.CreateTestSetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTestSet(
    request: TestSets.CreateTestSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TestSet, TestSets.CreateTestSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testsets",
        ),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTestSetRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: testSetSchema },
        errorFactory: TestSets.CreateTestSetError,
      },
      options,
    );
  }

  /**
   * UiPath List Test Sets in a Project
   *
   * @remarks
   * Retrieves all test sets within a specific test project. Test sets group test cases for
   * coordinated execution runs and can be linked to Orchestrator processes to trigger automated
   * execution.
   *
   * @returns A list of test sets in the project
   *
   * @throws {@link TestSets.ListTestSetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestSets(
    request: TestSets.ListTestSetsRequest,
    options?: RequestOptions,
  ): ApiPromise<TestSetListResponse, TestSets.ListTestSetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testsets",
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
        success: { kind: "json", schema: testSetListResponseSchema },
        errorFactory: TestSets.ListTestSetsError,
      },
      options,
    );
  }
}

export namespace TestSets {
  export type CreateTestSetRequestParams = {
    /** Unique identifier of the test project */
    projectId: string;
    body: CreateTestSetRequest;
  };

  export class CreateTestSetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTestSetError> = [
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

  export type ListTestSetsRequest = {
    /** Unique identifier of the test project */
    projectId: string;
    /** Page number for pagination (0-based) @default 0 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listTestSetsRequestSchema: Schema<ListTestSetsRequest> = s.lazySchema(() =>
    s.object<ListTestSetsRequest>({
      projectId: s.string(),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListTestSetsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestSetsError> = [
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
