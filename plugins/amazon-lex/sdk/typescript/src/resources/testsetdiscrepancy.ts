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
import {
  describeTestSetDiscrepancyReportResponseSchema,
  type DescribeTestSetDiscrepancyReportResponse,
} from "../models/describe-test-set-discrepancy-report-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Testsetdiscrepancy {
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
   * @throws {@link Testsetdiscrepancy.CreateTestSetDiscrepancyReportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTestSetDiscrepancyReport(
    request: Testsetdiscrepancy.CreateTestSetDiscrepancyReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CreateTestSetDiscrepancyReportResponse,
    Testsetdiscrepancy.CreateTestSetDiscrepancyReportError
  > {
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
        errorFactory: Testsetdiscrepancy.CreateTestSetDiscrepancyReportError,
      },
      options,
    );
  }

  /**
   * Describe Test Set Discrepancy Report
   *
   * @remarks
   * Gets metadata information about the test set discrepancy report.
   *
   * @returns Success
   *
   * @throws {@link Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeTestSetDiscrepancyReport(
    request: Testsetdiscrepancy.DescribeTestSetDiscrepancyReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    DescribeTestSetDiscrepancyReportResponse,
    Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testsetdiscrepancy/{testSetDiscrepancyReportId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          {
            name: "testSetDiscrepancyReportId",
            value: request.testSetDiscrepancyReportId,
            schema: s.string(),
          },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeTestSetDiscrepancyReportResponseSchema },
        errorFactory: Testsetdiscrepancy.DescribeTestSetDiscrepancyReportError,
      },
      options,
    );
  }
}

export namespace Testsetdiscrepancy {
  export type CreateTestSetDiscrepancyReportRequestParams = {
    testSetId: string;
    body?: CreateTestSetDiscrepancyReportRequest;
  };

  export class CreateTestSetDiscrepancyReportError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTestSetDiscrepancyReportError> = [
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

  export type DescribeTestSetDiscrepancyReportRequestParams = {
    testSetDiscrepancyReportId: string;
  };

  export class DescribeTestSetDiscrepancyReportError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTestSetDiscrepancyReportError> = [
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
}
