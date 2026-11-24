import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorResponseUiPathTestManagerProjectsApiSchema,
  type ErrorResponseUiPathTestManagerProjectsApi,
} from "../models/error-response-ui-path-test-manager-projects-api.js";
import {
  testExecutionListResponseSchema,
  type TestExecutionListResponse,
} from "../models/test-execution-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve test execution results and logs
 */
export class TestExecutions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath List Test Executions in a Project
   *
   * @remarks
   * Retrieves test execution results within a specific test project. Test executions represent runs
   * of test sets and contain the aggregate pass/fail status across all included test cases.
   * References to individual test case log objects are included for drill-down.
   *
   * @returns A list of test executions in the project
   *
   * @throws {@link TestExecutions.ListTestExecutionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestExecutions(
    request: TestExecutions.ListTestExecutionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TestExecutionListResponse, TestExecutions.ListTestExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathTestManagerProjectsApi(
          "/api/v2/projects/{projectId}/testexecutions",
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
        success: { kind: "json", schema: testExecutionListResponseSchema },
        errorFactory: TestExecutions.ListTestExecutionsError,
      },
      options,
    );
  }
}

export namespace TestExecutions {
  export type ListTestExecutionsRequest = {
    /** Unique identifier of the test project */
    projectId: string;
    /** Page number for pagination (0-based) @default 0 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listTestExecutionsRequestSchema: Schema<ListTestExecutionsRequest> = s.lazySchema(() =>
    s.object<ListTestExecutionsRequest>({
      projectId: s.string(),
      page: s.defaulted(s.int().check(s.gte(0)), 0),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListTestExecutionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseUiPathTestManagerProjectsApi", ErrorResponseUiPathTestManagerProjectsApi>
      | Declared<"errorResponseUiPathTestManagerProjectsApi2", ErrorResponseUiPathTestManagerProjectsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestExecutionsError> = [
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
