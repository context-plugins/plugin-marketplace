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
  completeSnapshotResponseSchema,
  type CompleteSnapshotResponse,
} from "../models/complete-snapshot-response.js";
import {
  concurrentLimitExceededExceptionSchema,
  type ConcurrentLimitExceededException,
} from "../models/concurrent-limit-exceeded-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listChangedBlocksResponseSchema,
  type ListChangedBlocksResponse,
} from "../models/list-changed-blocks-response.js";
import {
  requestThrottledExceptionSchema,
  type RequestThrottledException,
} from "../models/request-throttled-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { snapshotsRequestSchema, type SnapshotsRequest } from "../models/snapshots-request.js";
import {
  startSnapshotResponseSchema,
  type StartSnapshotResponse,
} from "../models/start-snapshot-response.js";
import {
  xAmzChecksumAggregationMethodSchema,
  type XAmzChecksumAggregationMethod,
} from "../models/xamz-checksum-aggregation-method.js";
import {
  xAmzChecksumAlgorithmSchema,
  type XAmzChecksumAlgorithm,
} from "../models/xamz-checksum-algorithm.js";
import type { Servers } from "../servers.js";

export class AmazonEbsAmazonElasticBlockStoreEbsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Complete Snapshot
   *
   * @remarks
   * Seals and completes the snapshot after all of the required blocks of data have been written to
   * it. Completing the snapshot changes the status to completed. You cannot write new blocks to a
   * snapshot after it has been completed. You should always retry requests that receive server
   * (5xx) error responses, and ThrottlingException and RequestThrottledException client error
   * responses. For more information see Error retries in the Amazon Elastic Compute Cloud User
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  completeSnapshot(
    request: AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotRequest,
    options?: RequestOptions,
  ): ApiPromise<CompleteSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/snapshots/completion/{SnapshotId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "SnapshotId", value: request.snapshotId, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-amz-ChangedBlocksCount", value: request.xAmzChangedBlocksCount, schema: s.int() },
          { name: "x-amz-Checksum", value: request.xAmzChecksum, schema: s.optional(s.string()) },
          {
            name: "x-amz-Checksum-Algorithm",
            value: request.xAmzChecksumAlgorithm,
            schema: s.optional(s.lazy(() => xAmzChecksumAlgorithmSchema)),
          },
          {
            name: "x-amz-Checksum-Aggregation-Method",
            value: request.xAmzChecksumAggregationMethod,
            schema: s.optional(s.lazy(() => xAmzChecksumAggregationMethodSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: completeSnapshotResponseSchema },
        errorFactory: AmazonEbsAmazonElasticBlockStoreEbsApi.CompleteSnapshotError,
      },
      options,
    );
  }

  /**
   * List Changed Blocks
   *
   * @remarks
   * Returns information about the blocks that are different between two Amazon Elastic Block Store
   * snapshots of the same volume/snapshot lineage. You should always retry requests that receive
   * server (5xx) error responses, and ThrottlingException and RequestThrottledException client
   * error responses. For more information see Error retries in the Amazon Elastic Compute Cloud
   * User Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChangedBlocks(
    request: AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChangedBlocksResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/snapshots/{SecondSnapshotId}/changedblocks"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "SecondSnapshotId", value: request.secondSnapshotId, schema: s.string() }],
        query: [
          { name: "firstSnapshotId", value: request.firstSnapshotId, schema: s.optional(s.string()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "startingBlockIndex", value: request.startingBlockIndex, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChangedBlocksResponseSchema },
        errorFactory: AmazonEbsAmazonElasticBlockStoreEbsApi.ListChangedBlocksError,
      },
      options,
    );
  }

  /**
   * Start Snapshot
   *
   * @remarks
   * Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request
   * completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the
   * snapshot. You should always retry requests that receive server (5xx) error responses, and
   * ThrottlingException and RequestThrottledException client error responses. For more information
   * see Error retries in the Amazon Elastic Compute Cloud User Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSnapshot(
    request: AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotRequest = {},
    options?: RequestOptions,
  ): ApiPromise<StartSnapshotResponse, AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/snapshots"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => snapshotsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: startSnapshotResponseSchema },
        errorFactory: AmazonEbsAmazonElasticBlockStoreEbsApi.StartSnapshotError,
      },
      options,
    );
  }
}

export namespace AmazonEbsAmazonElasticBlockStoreEbsApi {
  export type CompleteSnapshotRequest = {
    /** The ID of the snapshot. */
    snapshotId: string;
    /** The number of blocks that were written to the snapshot. */
    xAmzChangedBlocksCount: number;
    /**
     * An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To
     * generate the aggregated checksum using the linear aggregation method, arrange the checksums
     * for each written block in ascending order of their block index, concatenate them to form a
     * single string, and then generate the checksum on the entire string using the SHA256
     * algorithm.
     */
    xAmzChecksum?: string;
    /**
     * The algorithm used to generate the checksum. Currently, the only supported algorithm is
     * SHA256.
     */
    xAmzChecksumAlgorithm?: XAmzChecksumAlgorithm;
    /**
     * The aggregation method used to generate the checksum. Currently, the only supported
     * aggregation method is LINEAR.
     */
    xAmzChecksumAggregationMethod?: XAmzChecksumAggregationMethod;
  };

  export class CompleteSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"requestThrottledException", RequestThrottledException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CompleteSnapshotError> = [
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
      {
        on: 400,
        kind: "requestThrottledException",
        decode: { kind: "json", schema: requestThrottledExceptionSchema },
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
    ];
  }

  export type ListChangedBlocksRequest = {
    /**
     * The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter must
     * be specified with a FirstSnapshotID parameter; otherwise, an error occurs.
     */
    secondSnapshotId: string;
    /**
     * The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter must be
     * specified with a SecondSnapshotId parameter; otherwise, an error occurs.
     */
    firstSnapshotId?: string;
    /**
     * The token to request the next page of results. If you specify NextToken, then
     * StartingBlockIndex is ignored.
     */
    pageToken?: string;
    /**
     * The maximum number of blocks to be returned by the request. Even if additional blocks can be
     * retrieved from the snapshot, the request can return less blocks than MaxResults or an empty
     * array of blocks. To retrieve the next set of blocks from the snapshot, make another request
     * with the returned NextToken value. The value of NextToken is null when there are no more
     * blocks to return.
     */
    maxResults?: number;
    /**
     * The block index from which the comparison should start. The list in the response will start
     * from this block index or the next valid block index in the snapshots. If you specify
     * NextToken, then StartingBlockIndex is ignored.
     */
    startingBlockIndex?: number;
  };

  export class ListChangedBlocksError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"requestThrottledException", RequestThrottledException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListChangedBlocksError> = [
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
      {
        on: 400,
        kind: "requestThrottledException",
        decode: { kind: "json", schema: requestThrottledExceptionSchema },
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
    ];
  }

  export type StartSnapshotRequest = {
    body?: SnapshotsRequest;
  };

  export class StartSnapshotError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"concurrentLimitExceededException", ConcurrentLimitExceededException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSnapshotError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 400,
        kind: "concurrentLimitExceededException",
        decode: { kind: "json", schema: concurrentLimitExceededExceptionSchema },
      },
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
    ];
  }
}
