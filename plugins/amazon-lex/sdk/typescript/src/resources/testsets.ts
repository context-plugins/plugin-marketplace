import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  createTestSetDiscrepancyReportRequestSchema,
  type CreateTestSetDiscrepancyReportRequest,
} from "../models/create-test-set-discrepancy-report-request.js";
import {
  createTestSetDiscrepancyReportResponseSchema,
  type CreateTestSetDiscrepancyReportResponse,
} from "../models/create-test-set-discrepancy-report-response.js";
import { deleteTestSetRequestSchema, type DeleteTestSetRequest } from "../models/delete-test-set-request.js";
import {
  describeTestSetResponseSchema,
  type DescribeTestSetResponse,
} from "../models/describe-test-set-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listTestSetRecordsRequestSchema,
  type ListTestSetRecordsRequest,
} from "../models/list-test-set-records-request.js";
import {
  listTestSetRecordsResponseSchema,
  type ListTestSetRecordsResponse,
} from "../models/list-test-set-records-response.js";
import { listTestSetsRequestSchema, type ListTestSetsRequest } from "../models/list-test-sets-request.js";
import { listTestSetsResponseSchema, type ListTestSetsResponse } from "../models/list-test-sets-response.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import {
  startTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiSchema,
  type StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi,
} from "../models/start-test-execution-request-amazon-lex-model-building-v2-testsets-api.js";
import {
  startTestExecutionResponseAmazonLexModelBuildingV2TestsetsApiSchema,
  type StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi,
} from "../models/start-test-execution-response-amazon-lex-model-building-v2-testsets-api.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { updateTestSetRequestSchema, type UpdateTestSetRequest } from "../models/update-test-set-request.js";
import {
  updateTestSetResponseSchema,
  type UpdateTestSetResponse,
} from "../models/update-test-set-response.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Testsets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Test Set Discrepancy Report
   *
   * @remarks
   * Create a report that describes the differences between the bot and the test set.
   *
   * @returns Success
   *
   * @throws {@link Testsets.CreateTestSetDiscrepancyReport2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTestSetDiscrepancyReport2(
    request: Testsets.CreateTestSetDiscrepancyReport2Request,
    options?: RequestOptions,
  ): ApiPromise<CreateTestSetDiscrepancyReportResponse, Testsets.CreateTestSetDiscrepancyReport2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testsets/{testSetId}/testsetdiscrepancy",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createTestSetDiscrepancyReportRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createTestSetDiscrepancyReportResponseSchema },
        errorFactory: Testsets.CreateTestSetDiscrepancyReport2Error,
      },
      options,
    );
  }

  /**
   * Delete Test Set
   *
   * @remarks
   * The action to delete the selected test set.
   *
   * @returns Success
   *
   * @throws {@link Testsets.DeleteTestSetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTestSet(
    request: Testsets.DeleteTestSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<string, Testsets.DeleteTestSetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteTestSetRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: Testsets.DeleteTestSetError,
      },
      options,
    );
  }

  /**
   * Describe Test Set
   *
   * @remarks
   * Gets metadata information about the test set.
   *
   * @returns Success
   *
   * @throws {@link Testsets.DescribeTestSetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeTestSet(
    request: Testsets.DescribeTestSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeTestSetResponse, Testsets.DescribeTestSetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeTestSetResponseSchema },
        errorFactory: Testsets.DescribeTestSetError,
      },
      options,
    );
  }

  /**
   * List Test Set Records
   *
   * @remarks
   * The list of test set records.
   *
   * @returns Success
   *
   * @throws {@link Testsets.ListTestSetRecordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestSetRecords(
    request: Testsets.ListTestSetRecordsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListTestSetRecordsResponse, Testsets.ListTestSetRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}/records"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listTestSetRecordsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listTestSetRecordsResponseSchema },
        errorFactory: Testsets.ListTestSetRecordsError,
      },
      options,
    );
  }

  /**
   * List Test Sets
   *
   * @remarks
   * The list of the test sets
   *
   * @returns Success
   *
   * @throws {@link Testsets.ListTestSetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestSets(
    request: Testsets.ListTestSetsRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListTestSetsResponse, Testsets.ListTestSetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listTestSetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listTestSetsResponseSchema },
        errorFactory: Testsets.ListTestSetsError,
      },
      options,
    );
  }

  /**
   * Start Test Execution
   *
   * @remarks
   * The action to start test set execution.
   *
   * @returns Success
   *
   * @throws {@link Testsets.StartTestExecution2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTestExecution2(
    request: Testsets.StartTestExecution2Request,
    options?: RequestOptions,
  ): ApiPromise<
    StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi,
    Testsets.StartTestExecution2Error
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testsets/{testSetId}/testexecutions",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(
            s.lazy(() => startTestExecutionRequestAmazonLexModelBuildingV2TestsetsApiSchema),
          ),
        },
      },
      {
        success: {
          kind: "json",
          schema: startTestExecutionResponseAmazonLexModelBuildingV2TestsetsApiSchema,
        },
        errorFactory: Testsets.StartTestExecution2Error,
      },
      options,
    );
  }

  /**
   * Update Test Set
   *
   * @remarks
   * The action to update the test set.
   *
   * @returns Success
   *
   * @throws {@link Testsets.UpdateTestSetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTestSet(
    request: Testsets.UpdateTestSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTestSetResponse, Testsets.UpdateTestSetError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsets/{testSetId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateTestSetRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateTestSetResponseSchema },
        errorFactory: Testsets.UpdateTestSetError,
      },
      options,
    );
  }
}

export namespace Testsets {
  export type CreateTestSetDiscrepancyReport2Request = {
    testSetId: string;
    body?: CreateTestSetDiscrepancyReportRequest;
  };

  export class CreateTestSetDiscrepancyReport2Error extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTestSetDiscrepancyReport2Error> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteTestSetRequestParams = {
    testSetId: string;
    body?: DeleteTestSetRequest;
  };

  export class DeleteTestSetError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteTestSetError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeTestSetRequestParams = {
    testSetId: string;
  };

  export class DescribeTestSetError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTestSetError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListTestSetRecordsRequestParams = {
    testSetId: string;
    body?: ListTestSetRecordsRequest;
  };

  export class ListTestSetRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestSetRecordsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListTestSetsRequestParams = {
    body?: ListTestSetsRequest;
  };

  export class ListTestSetsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestSetsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartTestExecution2Request = {
    testSetId: string;
    body?: StartTestExecutionRequestAmazonLexModelBuildingV2TestsetsApi;
  };

  export class StartTestExecution2Error extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTestExecution2Error> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateTestSetRequestParams = {
    testSetId: string;
    body?: UpdateTestSetRequest;
  };

  export class UpdateTestSetError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTestSetError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
