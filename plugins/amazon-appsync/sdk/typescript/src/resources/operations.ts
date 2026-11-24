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
  associateMergedGraphqlApiResponseSchema,
  type AssociateMergedGraphqlApiResponse,
} from "../models/associate-merged-graphql-api-response.js";
import { badRequestExceptionSchema, type BadRequestException } from "../models/bad-request-exception.js";
import {
  concurrentModificationExceptionSchema,
  type ConcurrentModificationException,
} from "../models/concurrent-modification-exception.js";
import {
  disassociateMergedGraphqlApiResponseSchema,
  type DisassociateMergedGraphqlApiResponse,
} from "../models/disassociate-merged-graphql-api-response.js";
import { evaluateCodeResponseSchema, type EvaluateCodeResponse } from "../models/evaluate-code-response.js";
import {
  getGraphqlApiEnvironmentVariablesResponseSchema,
  type GetGraphqlApiEnvironmentVariablesResponse,
} from "../models/get-graphql-api-environment-variables-response.js";
import {
  getSchemaCreationStatusResponseSchema,
  type GetSchemaCreationStatusResponse,
} from "../models/get-schema-creation-status-response.js";
import {
  internalFailureExceptionSchema,
  type InternalFailureException,
} from "../models/internal-failure-exception.js";
import {
  limitExceededExceptionSchema,
  type LimitExceededException,
} from "../models/limit-exceeded-exception.js";
import { notFoundExceptionSchema, type NotFoundException } from "../models/not-found-exception.js";
import {
  putGraphqlApiEnvironmentVariablesResponseSchema,
  type PutGraphqlApiEnvironmentVariablesResponse,
} from "../models/put-graphql-api-environment-variables-response.js";
import {
  startSchemaCreationResponseSchema,
  type StartSchemaCreationResponse,
} from "../models/start-schema-creation-response.js";
import {
  startSchemaMergeResponseSchema,
  type StartSchemaMergeResponse,
} from "../models/start-schema-merge-response.js";
import { unauthorizedExceptionSchema, type UnauthorizedException } from "../models/unauthorized-exception.js";
import {
  v1ApisEnvironmentVariablesRequestSchema,
  type V1ApisEnvironmentVariablesRequest,
} from "../models/v1-apis-environment-variables-request.js";
import {
  v1ApisSchemacreationRequestSchema,
  type V1ApisSchemacreationRequest,
} from "../models/v1-apis-schemacreation-request.js";
import {
  v1DataplaneEvaluatecodeRequestSchema,
  type V1DataplaneEvaluatecodeRequest,
} from "../models/v1-dataplane-evaluatecode-request.js";
import {
  v1SourceApisMergedApiAssociationsRequestSchema,
  type V1SourceApisMergedApiAssociationsRequest,
} from "../models/v1-source-apis-merged-api-associations-request.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Associate Merged Graphql Api
   *
   * @remarks
   * Creates an association between a Merged API and source API using the source API's identifier.
   *
   * @returns Success
   *
   * @throws {@link Operations.AssociateMergedGraphqlApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associateMergedGraphqlApi(
    request: Operations.AssociateMergedGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<AssociateMergedGraphqlApiResponse, Operations.AssociateMergedGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "sourceApiIdentifier", value: request.sourceApiIdentifier, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1SourceApisMergedApiAssociationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: associateMergedGraphqlApiResponseSchema },
        errorFactory: Operations.AssociateMergedGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Disassociate Merged Graphql Api
   *
   * @remarks
   * Deletes an association between a Merged API and source API using the source API's identifier
   * and the association ID.
   *
   * @returns Success
   *
   * @throws {@link Operations.DisassociateMergedGraphqlApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disassociateMergedGraphqlApi(
    request: Operations.DisassociateMergedGraphqlApiRequest,
    options?: RequestOptions,
  ): ApiPromise<DisassociateMergedGraphqlApiResponse, Operations.DisassociateMergedGraphqlApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "sourceApiIdentifier", value: request.sourceApiIdentifier, schema: s.string() },
          { name: "associationId", value: request.associationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disassociateMergedGraphqlApiResponseSchema },
        errorFactory: Operations.DisassociateMergedGraphqlApiError,
      },
      options,
    );
  }

  /**
   * Evaluate Code
   *
   * @remarks
   * Evaluates the given code and returns the response. The code definition requirements depend on
   * the specified runtime. For APPSYNC_JS runtimes, the code defines the request and response
   * functions. The request function takes the incoming request after a GraphQL operation is parsed
   * and converts it into a request configuration for the selected data source operation. The
   * response function interprets responses from the data source and maps it to the shape of the
   * GraphQL field output type.
   *
   * @returns Success
   *
   * @throws {@link Operations.EvaluateCodeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  evaluateCode(
    request: Operations.EvaluateCodeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EvaluateCodeResponse, Operations.EvaluateCodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/dataplane-evaluatecode"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1DataplaneEvaluatecodeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: evaluateCodeResponseSchema },
        errorFactory: Operations.EvaluateCodeError,
      },
      options,
    );
  }

  /**
   * Flush Api Cache
   *
   * @remarks
   * Flushes an ApiCache object.
   *
   * @returns Success
   *
   * @throws {@link Operations.FlushApiCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  flushApiCache(
    request: Operations.FlushApiCacheRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Operations.FlushApiCacheError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/FlushCache"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Operations.FlushApiCacheError,
      },
      options,
    );
  }

  /**
   * Get Graphql Api Environment Variables
   *
   * @remarks
   * Retrieves the list of environmental variable key-value pairs associated with an API by its ID
   * value.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetGraphqlApiEnvironmentVariablesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGraphqlApiEnvironmentVariables(
    request: Operations.GetGraphqlApiEnvironmentVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetGraphqlApiEnvironmentVariablesResponse,
    Operations.GetGraphqlApiEnvironmentVariablesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/environmentVariables"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getGraphqlApiEnvironmentVariablesResponseSchema },
        errorFactory: Operations.GetGraphqlApiEnvironmentVariablesError,
      },
      options,
    );
  }

  /**
   * Get Schema Creation Status
   *
   * @remarks
   * Retrieves the current status of a schema creation operation.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetSchemaCreationStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSchemaCreationStatus(
    request: Operations.GetSchemaCreationStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<GetSchemaCreationStatusResponse, Operations.GetSchemaCreationStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/schemacreation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSchemaCreationStatusResponseSchema },
        errorFactory: Operations.GetSchemaCreationStatusError,
      },
      options,
    );
  }

  /**
   * Put Graphql Api Environment Variables
   *
   * @remarks
   * Creates a list of environmental variables in an API by its ID value. When creating an
   * environmental variable, it must follow the constraints below: Both JavaScript and VTL templates
   * support environmental variables. Environmental variables are not evaluated before function
   * invocation. Environmental variables only support string values. Any defined value in an
   * environmental variable is considered a string literal and not expanded. Variable evaluations
   * should ideally be performed in the function code. When creating an environmental variable
   * key-value pair, it must follow the additional constraints below: Keys must begin with a letter.
   * Keys must be at least two characters long. Keys can only contain letters, numbers, and the
   * underscore character (_). Values can be up to 512 characters long. You can configure up to 50
   * key-value pairs in a GraphQL API. You can create a list of environmental variables by adding it
   * to the environmentVariables payload as a list in the format {"key1":"value1","key2":"value2",
   * …}. Note that each call of the PutGraphqlApiEnvironmentVariables action will result in the
   * overwriting of the existing environmental variable list of that API. This means the existing e
   *
   * @returns Success
   *
   * @throws {@link Operations.PutGraphqlApiEnvironmentVariablesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putGraphqlApiEnvironmentVariables(
    request: Operations.PutGraphqlApiEnvironmentVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PutGraphqlApiEnvironmentVariablesResponse,
    Operations.PutGraphqlApiEnvironmentVariablesError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/environmentVariables"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisEnvironmentVariablesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: putGraphqlApiEnvironmentVariablesResponseSchema },
        errorFactory: Operations.PutGraphqlApiEnvironmentVariablesError,
      },
      options,
    );
  }

  /**
   * Start Schema Creation
   *
   * @remarks
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it
   * has completed.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartSchemaCreationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSchemaCreation(
    request: Operations.StartSchemaCreationRequest,
    options?: RequestOptions,
  ): ApiPromise<StartSchemaCreationResponse, Operations.StartSchemaCreationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/apis/{apiId}/schemacreation"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "apiId", value: request.apiId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ApisSchemacreationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startSchemaCreationResponseSchema },
        errorFactory: Operations.StartSchemaCreationError,
      },
      options,
    );
  }

  /**
   * Start Schema Merge
   *
   * @remarks
   * Initiates a merge operation. Returns a status that shows the result of the merge operation.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartSchemaMergeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonAppSyncError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSchemaMerge(
    request: Operations.StartSchemaMergeRequest,
    options?: RequestOptions,
  ): ApiPromise<StartSchemaMergeResponse, Operations.StartSchemaMergeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "associationId", value: request.associationId, schema: s.string() },
          { name: "mergedApiIdentifier", value: request.mergedApiIdentifier, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: startSchemaMergeResponseSchema },
        errorFactory: Operations.StartSchemaMergeError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type AssociateMergedGraphqlApiRequest = {
    /**
     * The identifier of the AppSync Source API. This is generated by the AppSync service. In most
     * cases, source APIs (especially in your account) only require the API ID value or ARN of the
     * source API. However, source APIs from other accounts (cross-account use cases) strictly
     * require the full resource ARN of the source API.
     */
    sourceApiIdentifier: string;
    body?: V1SourceApisMergedApiAssociationsRequest;
  };

  export class AssociateMergedGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"limitExceededException", LimitExceededException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociateMergedGraphqlApiError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      {
        on: 429,
        kind: "limitExceededException",
        decode: { kind: "json", schema: limitExceededExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type DisassociateMergedGraphqlApiRequest = {
    /**
     * The identifier of the AppSync Source API. This is generated by the AppSync service. In most
     * cases, source APIs (especially in your account) only require the API ID value or ARN of the
     * source API. However, source APIs from other accounts (cross-account use cases) strictly
     * require the full resource ARN of the source API.
     */
    sourceApiIdentifier: string;
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
  };

  export class DisassociateMergedGraphqlApiError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateMergedGraphqlApiError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type EvaluateCodeRequest = {
    body?: V1DataplaneEvaluatecodeRequest;
  };

  export class EvaluateCodeError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Undeclared;

    static readonly errors: ErrorDecoders<EvaluateCodeError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
    ];
  }

  export type FlushApiCacheRequest = {
    /** The API ID. */
    apiId: string;
  };

  export class FlushApiCacheError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<FlushApiCacheError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type GetGraphqlApiEnvironmentVariablesRequest = {
    /** The ID of the API from which the environmental variable list will be retrieved. */
    apiId: string;
  };

  export class GetGraphqlApiEnvironmentVariablesError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGraphqlApiEnvironmentVariablesError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type GetSchemaCreationStatusRequest = {
    /** The API ID. */
    apiId: string;
  };

  export class GetSchemaCreationStatusError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSchemaCreationStatusError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type PutGraphqlApiEnvironmentVariablesRequest = {
    /** The ID of the API to which the environmental variable list will be written. */
    apiId: string;
    body?: V1ApisEnvironmentVariablesRequest;
  };

  export class PutGraphqlApiEnvironmentVariablesError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutGraphqlApiEnvironmentVariablesError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type StartSchemaCreationRequest = {
    /** The API ID. */
    apiId: string;
    body?: V1ApisSchemacreationRequest;
  };

  export class StartSchemaCreationError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSchemaCreationError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }

  export type StartSchemaMergeRequest = {
    /** The ID generated by the AppSync service for the source API association. */
    associationId: string;
    /**
     * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most
     * cases, Merged APIs (especially in your account) only require the API ID value or ARN of the
     * merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require
     * the full resource ARN of the merged API.
     */
    mergedApiIdentifier: string;
  };

  export class StartSchemaMergeError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestException", BadRequestException>
      | Declared<"concurrentModificationException", ConcurrentModificationException>
      | Declared<"internalFailureException", InternalFailureException>
      | Declared<"notFoundException", NotFoundException>
      | Declared<"unauthorizedException", UnauthorizedException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSchemaMergeError> = [
      { on: 400, kind: "badRequestException", decode: { kind: "json", schema: badRequestExceptionSchema } },
      {
        on: 409,
        kind: "concurrentModificationException",
        decode: { kind: "json", schema: concurrentModificationExceptionSchema },
      },
      {
        on: 500,
        kind: "internalFailureException",
        decode: { kind: "json", schema: internalFailureExceptionSchema },
      },
      { on: 404, kind: "notFoundException", decode: { kind: "json", schema: notFoundExceptionSchema } },
      {
        on: 401,
        kind: "unauthorizedException",
        decode: { kind: "json", schema: unauthorizedExceptionSchema },
      },
    ];
  }
}
