import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateContractRequestDtoSchema,
  type PublicApiCreateContractRequestDto,
} from "../models/public-api-create-contract-request-dto.js";
import {
  publicApiCreateSkeletonContractRequestDtoSchema,
  type PublicApiCreateSkeletonContractRequestDto,
} from "../models/public-api-create-skeleton-contract-request-dto.js";
import {
  publicApiCreateSkeletonContractStatusResponseSchema,
  type PublicApiCreateSkeletonContractStatusResponse,
} from "../models/public-api-create-skeleton-contract-status-response.js";
import {
  publicApiGenerateContractRequestDtoSchema,
  type PublicApiGenerateContractRequestDto,
} from "../models/public-api-generate-contract-request-dto.js";
import {
  publicApiGenerateContractStatusResponseSchema,
  type PublicApiGenerateContractStatusResponse,
} from "../models/public-api-generate-contract-status-response.js";
import {
  publicApiGetContractResponseSchema,
  type PublicApiGetContractResponse,
} from "../models/public-api-get-contract-response.js";
import {
  publicApiListContractVersionsResponseSchema,
  type PublicApiListContractVersionsResponse,
} from "../models/public-api-list-contract-versions-response.js";
import {
  publicApiListContractsResponseSchema,
  type PublicApiListContractsResponse,
} from "../models/public-api-list-contracts-response.js";
import {
  publicApiPublishContractRequestDtoSchema,
  type PublicApiPublishContractRequestDto,
} from "../models/public-api-publish-contract-request-dto.js";
import {
  publicApiVerifyContractRequestDtoSchema,
  type PublicApiVerifyContractRequestDto,
} from "../models/public-api-verify-contract-request-dto.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Contract Endpoints
 */
export class Contracts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List contracts
   *
   * @remarks
   * This endpoint allows you to list contracts in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `datasetId`: Optionally, use this parameter to list only the contracts for a specific
   *   dataset.
   *
   * - `datasetQualifiedName`: Optionally, use this parameter instead of `datasetId` to identify the
   *   dataset by its qualified name. Do not supply both `datasetId` and `datasetQualifiedName`.
   *
   * ## Authorization
   *
   * When filtering by dataset, only users with **View dataset** permission on the specified dataset
   * can list its contracts. When no dataset filter is supplied, all contracts in the organization
   * are returned.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.GetApiV1ContractsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Contracts(
    request: Contracts.GetApiV1ContractsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListContractsResponse, Contracts.GetApiV1ContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/contracts"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "datasetId", value: request.datasetId, schema: s.optional(s.string()) },
          {
            name: "datasetQualifiedName",
            value: request.datasetQualifiedName,
            schema: s.optional(s.string()),
          },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListContractsResponseSchema },
        errorFactory: Contracts.GetApiV1ContractsError,
      },
      options,
    );
  }

  /**
   * Get skeleton contract generation status
   *
   * @remarks
   * Returns the status of a skeleton contract generation operation that was triggered via the
   * **Generate skeleton contract** endpoint.
   *
   * The `operationId` is the last path segment of the `Location` header returned by the **Generate
   * skeleton contract** response.
   *
   * The response includes the operation state, dataset information, and creation timestamp.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ContractsActionsCreateSkeletonOperationId(
    request: Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiCreateSkeletonContractStatusResponse,
    Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/contracts/actions/createSkeleton/{operationId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiCreateSkeletonContractStatusResponseSchema },
        errorFactory: Contracts.GetApiV1ContractsActionsCreateSkeletonOperationIdError,
      },
      options,
    );
  }

  /**
   * Get contract generation status
   *
   * @remarks
   * Returns the status of a contract generation operation that was triggered via the **Generate
   * contracts** endpoint.
   *
   * The `operationId` is the last path segment of the `Location` header returned by the **Generate
   * contracts** response.
   *
   * While the operation is ongoing, only the operation state is returned (`datasets` will be
   * `null`). Once the operation reaches a terminal state (completed, failed, or canceled), the full
   * per-dataset scan details are included.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.GetApiV1ContractsActionsGenerateOperationIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ContractsActionsGenerateOperationId(
    request: Contracts.GetApiV1ContractsActionsGenerateOperationIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicApiGenerateContractStatusResponse,
    Contracts.GetApiV1ContractsActionsGenerateOperationIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/contracts/actions/generate/{operationId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "operationId", value: request.operationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGenerateContractStatusResponseSchema },
        errorFactory: Contracts.GetApiV1ContractsActionsGenerateOperationIdError,
      },
      options,
    );
  }

  /**
   * Get a contract
   *
   * @remarks
   * This endpoint allows you to retrieve a specific contract, including its YAML content.
   *
   * ## Authorization
   *
   * Only users with **View dataset** permission can view contracts.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.GetApiV1ContractsContractIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ContractsContractId(
    request: Contracts.GetApiV1ContractsContractIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetContractResponse, Contracts.GetApiV1ContractsContractIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/contracts/{contractId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGetContractResponseSchema },
        errorFactory: Contracts.GetApiV1ContractsContractIdError,
      },
      options,
    );
  }

  /**
   * List contract versions
   *
   * @remarks
   * This endpoint allows you to list versions of a specific contract.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `createdBefore`: Optionally, supply a UTC datetime value (ISO 8601, e.g.
   *   `2024-01-15T10:30:00`) to only return versions created strictly before this timestamp. Use
   *   this for consistent pagination.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.GetApiV1ContractsContractIdVersionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1ContractsContractIdVersions(
    request: Contracts.GetApiV1ContractsContractIdVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiListContractVersionsResponse, Contracts.GetApiV1ContractsContractIdVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/contracts/{contractId}/versions"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListContractVersionsResponseSchema },
        errorFactory: Contracts.GetApiV1ContractsContractIdVersionsError,
      },
      options,
    );
  }

  /**
   * Create a contract
   *
   * @remarks
   * This endpoint allows you to create a new contract on a dataset. The contract is initialized
   * with a template containing the dataset identifier and an empty columns list. Use the publish
   * endpoint to replace this with your full contract YAML.
   *
   * Provide either `datasetId` or `datasetQualifiedName` in the request body to identify the target
   * dataset. Exactly one must be supplied. If both are supplied, the request is rejected with a 400
   * error.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can create contracts.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.PostApiV1ContractsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Contracts(
    request: Contracts.PostApiV1ContractsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetContractResponse, Contracts.PostApiV1ContractsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/contracts"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateContractRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiGetContractResponseSchema },
        errorFactory: Contracts.PostApiV1ContractsError,
      },
      options,
    );
  }

  /**
   * Generate skeleton contract
   *
   * @remarks
   * Triggers skeleton contract generation for a single dataset based on its schema.
   *
   * The dataset must be connected to a Soda Runner and must not already have a published contract.
   *
   * Provide either `datasetId` (UUID) or `datasetQualifiedName` (e.g.
   * `my_datasource/my_schema/my_table`). Exactly one must be supplied.
   *
   * Returns `202 Accepted` with a `Location` header pointing to the status endpoint. Use the status
   * endpoint to monitor the progress of the skeleton generation.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Accepted
   *
   * @throws {@link Contracts.PostApiV1ContractsActionsCreateSkeletonError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ContractsActionsCreateSkeleton(
    request: Contracts.PostApiV1ContractsActionsCreateSkeletonRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Contracts.PostApiV1ContractsActionsCreateSkeletonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/contracts/actions/createSkeleton"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateSkeletonContractRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Contracts.PostApiV1ContractsActionsCreateSkeletonError,
      },
      options,
    );
  }

  /**
   * Generate contracts
   *
   * @remarks
   * Triggers AI-powered contract generation for one or more datasets. The contract generation runs
   * asynchronously.
   *
   * Each dataset must be connected to a Soda Runner and must not already have a contract. If any
   * dataset is not eligible, the request is rejected with a `400` response listing the ineligible
   * datasets and reasons.
   *
   * Provide `datasetIds` (list of UUIDs) and/or `datasetQualifiedNames` (list of qualified names,
   * e.g. `my_datasource/my_schema/my_table`). Both lists are additive. At least one must be
   * non-empty.
   *
   * Returns `202 Accepted` with a `Location` header pointing to the status endpoint. Use the status
   * endpoint to monitor the progress of the contract generation.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Accepted
   *
   * @throws {@link Contracts.PostApiV1ContractsActionsGenerateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ContractsActionsGenerate(
    request: Contracts.PostApiV1ContractsActionsGenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Contracts.PostApiV1ContractsActionsGenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/contracts/actions/generate"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiGenerateContractRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Contracts.PostApiV1ContractsActionsGenerateError,
      },
      options,
    );
  }

  /**
   * Publish a contract
   *
   * @remarks
   * This endpoint allows you to publish new YAML content for an existing contract.
   *
   * The `contents` field must contain valid Soda contract YAML. If the YAML is malformed or does
   * not conform to the contract schema, the request is rejected with a 400 error.
   *
   * The `dataset` in the YAML must name the dataset that `contractId` belongs to. Contents naming a
   * different dataset are rejected with a 400 error.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can publish contracts.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Contracts.PostApiV1ContractsContractIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ContractsContractId(
    request: Contracts.PostApiV1ContractsContractIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetContractResponse, Contracts.PostApiV1ContractsContractIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/contracts/{contractId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiPublishContractRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiGetContractResponseSchema },
        errorFactory: Contracts.PostApiV1ContractsContractIdError,
      },
      options,
    );
  }

  /**
   * Verify a contract
   *
   * @remarks
   * This endpoint triggers a contract verification scan for the specified contract.
   *
   * The response, when successful, is `201` and contains headers `Location` and `X-Soda-Scan-Id`
   * which identify the triggered scan. Use the value of `X-Soda-Scan-Id` in the `scanId` parameter
   * of the **Get scan status**, **Get scan logs**, and **Cancel a scan** endpoints.
   *
   * Optionally, you can provide `checkPaths` to limit verification to specific checks within the
   * contract. Note: `checkPaths` may not be available for all organizations.
   *
   * ## Authorization
   *
   * Only users with **Manage contracts** permission can verify contracts.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Contracts`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Created
   *
   * @throws {@link Contracts.PostApiV1ContractsContractIdVerifyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1ContractsContractIdVerify(
    request: Contracts.PostApiV1ContractsContractIdVerifyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Contracts.PostApiV1ContractsContractIdVerifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/contracts/{contractId}/verify"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiVerifyContractRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Contracts.PostApiV1ContractsContractIdVerifyError,
      },
      options,
    );
  }
}

export namespace Contracts {
  export type GetApiV1ContractsRequest = {
    datasetId?: string;
    datasetQualifiedName?: string;
    page?: number;
    size?: number;
  };

  export class GetApiV1ContractsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ContractsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ContractsActionsCreateSkeletonOperationIdRequest = {
    operationId: string;
  };

  export class GetApiV1ContractsActionsCreateSkeletonOperationIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ContractsActionsCreateSkeletonOperationIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ContractsActionsGenerateOperationIdRequest = {
    operationId: string;
  };

  export class GetApiV1ContractsActionsGenerateOperationIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ContractsActionsGenerateOperationIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ContractsContractIdRequest = {
    contractId: string;
  };

  export class GetApiV1ContractsContractIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ContractsContractIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1ContractsContractIdVersionsRequest = {
    contractId: string;
    createdBefore?: Date;
    page?: number;
    size?: number;
  };

  export class GetApiV1ContractsContractIdVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ContractsContractIdVersionsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1ContractsRequest = {
    body: PublicApiCreateContractRequestDto;
  };

  export class PostApiV1ContractsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ContractsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1ContractsActionsCreateSkeletonRequest = {
    body: PublicApiCreateSkeletonContractRequestDto;
  };

  export class PostApiV1ContractsActionsCreateSkeletonError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ContractsActionsCreateSkeletonError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1ContractsActionsGenerateRequest = {
    body: PublicApiGenerateContractRequestDto;
  };

  export class PostApiV1ContractsActionsGenerateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ContractsActionsGenerateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1ContractsContractIdRequest = {
    contractId: string;
    body: PublicApiPublishContractRequestDto;
  };

  export class PostApiV1ContractsContractIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ContractsContractIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1ContractsContractIdVerifyRequest = {
    contractId: string;
    body: PublicApiVerifyContractRequestDto;
  };

  export class PostApiV1ContractsContractIdVerifyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ContractsContractIdVerifyError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
