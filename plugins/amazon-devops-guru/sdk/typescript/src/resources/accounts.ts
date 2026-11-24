import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import {
  accountsOverviewRequestSchema,
  type AccountsOverviewRequest,
} from "../models/accounts-overview-request.js";
import {
  describeAccountHealthResponseSchema,
  type DescribeAccountHealthResponse,
} from "../models/describe-account-health-response.js";
import {
  describeAccountOverviewResponseSchema,
  type DescribeAccountOverviewResponse,
} from "../models/describe-account-overview-response.js";
import {
  describeResourceCollectionHealthResponseSchema,
  type DescribeResourceCollectionHealthResponse,
} from "../models/describe-resource-collection-health-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceCollectionTypeSchema,
  type ResourceCollectionType,
} from "../models/resource-collection-type.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Account Health
   *
   * @remarks
   * Returns the number of open reactive insights, the number of open proactive insights, and the
   * number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
   * health of operations in your Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link Accounts.DescribeAccountHealthError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAccountHealth(
    options?: RequestOptions,
  ): ApiPromise<DescribeAccountHealthResponse, Accounts.DescribeAccountHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/health"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeAccountHealthResponseSchema },
        errorFactory: Accounts.DescribeAccountHealthError,
      },
      options,
    );
  }

  /**
   * Describe Account Overview
   *
   * @remarks
   * For the time range passed in, returns the number of open reactive insight that were created,
   * the number of open proactive insights that were created, and the Mean Time to Recover (MTTR)
   * for all closed reactive insights.
   *
   * @returns Success
   *
   * @throws {@link Accounts.DescribeAccountOverviewError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAccountOverview(
    request: Accounts.DescribeAccountOverviewRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DescribeAccountOverviewResponse, Accounts.DescribeAccountOverviewError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/accounts/overview"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountsOverviewRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: describeAccountOverviewResponseSchema },
        errorFactory: Accounts.DescribeAccountOverviewError,
      },
      options,
    );
  }

  /**
   * Describe Resource Collection Health
   *
   * @remarks
   * Returns the number of open proactive insights, open reactive insights, and the Mean Time to
   * Recover (MTTR) for all closed insights in resource collections in your account. You specify the
   * type of Amazon Web Services resources collection. The two types of Amazon Web Services resource
   * collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services
   * resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to
   * analyze the Amazon Web Services resources that are defined in the stacks or that are tagged
   * using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   *
   * @returns Success
   *
   * @throws {@link Accounts.DescribeResourceCollectionHealthError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeResourceCollectionHealth(
    request: Accounts.DescribeResourceCollectionHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<DescribeResourceCollectionHealthResponse, Accounts.DescribeResourceCollectionHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/health/resource-collection/{ResourceCollectionType}"),
        auth: this.#auth.sigv4,
        pathParams: [
          {
            name: "ResourceCollectionType",
            value: request.resourceCollectionType,
            schema: resourceCollectionTypeSchema,
          },
        ],
        query: [{ name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeResourceCollectionHealthResponseSchema },
        errorFactory: Accounts.DescribeResourceCollectionHealthError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export class DescribeAccountHealthError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAccountHealthError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeAccountOverviewRequest = {
    body?: AccountsOverviewRequest;
  };

  export class DescribeAccountOverviewError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAccountOverviewError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeResourceCollectionHealthRequest = {
    /**
     * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web
     * Services resources are defined. The two types of Amazon Web Services resource collections
     * supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources
     * that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the
     * Amazon Web Services resources that are defined in the stacks or that are tagged using the
     * same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollectionType: ResourceCollectionType;
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this
     * value is null, it retrieves the first page.
     */
    nextToken?: string;
  };

  export class DescribeResourceCollectionHealthError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeResourceCollectionHealthError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
