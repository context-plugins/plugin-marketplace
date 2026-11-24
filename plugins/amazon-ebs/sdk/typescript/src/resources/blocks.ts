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
  getSnapshotBlockResponseSchema,
  type GetSnapshotBlockResponse,
} from "../models/get-snapshot-block-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listSnapshotBlocksResponseSchema,
  type ListSnapshotBlocksResponse,
} from "../models/list-snapshot-blocks-response.js";
import {
  putSnapshotBlockResponseSchema,
  type PutSnapshotBlockResponse,
} from "../models/put-snapshot-block-response.js";
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
import {
  xAmzChecksumAlgorithmSchema,
  type XAmzChecksumAlgorithm,
} from "../models/xamz-checksum-algorithm.js";
import type { Servers } from "../servers.js";

export class Blocks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Snapshot Block
   *
   * @remarks
   * Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry
   * requests that receive server (5xx) error responses, and ThrottlingException and
   * RequestThrottledException client error responses. For more information see Error retries in the
   * Amazon Elastic Compute Cloud User Guide.
   *
   * @returns Success
   *
   * @throws {@link Blocks.GetSnapshotBlockError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSnapshotBlock(
    request: Blocks.GetSnapshotBlockRequest,
    options?: RequestOptions,
  ): ApiPromise<GetSnapshotBlockResponse, Blocks.GetSnapshotBlockError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "SnapshotId", value: request.snapshotId, schema: s.string() },
          { name: "BlockIndex", value: request.blockIndex, schema: s.int() },
        ],
        query: [{ name: "blockToken", value: request.blockToken, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getSnapshotBlockResponseSchema },
        errorFactory: Blocks.GetSnapshotBlockError,
      },
      options,
    );
  }

  /**
   * List Snapshot Blocks
   *
   * @remarks
   * Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should
   * always retry requests that receive server (5xx) error responses, and ThrottlingException and
   * RequestThrottledException client error responses. For more information see Error retries in the
   * Amazon Elastic Compute Cloud User Guide.
   *
   * @returns Success
   *
   * @throws {@link Blocks.ListSnapshotBlocksError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSnapshotBlocks(
    request: Blocks.ListSnapshotBlocksRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSnapshotBlocksResponse, Blocks.ListSnapshotBlocksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/snapshots/{SnapshotId}/blocks"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "SnapshotId", value: request.snapshotId, schema: s.string() }],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "startingBlockIndex", value: request.startingBlockIndex, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSnapshotBlocksResponseSchema },
        errorFactory: Blocks.ListSnapshotBlocksError,
      },
      options,
    );
  }

  /**
   * Put Snapshot Block
   *
   * @remarks
   * Writes a block of data to a snapshot. If the specified block contains data, the existing data
   * is overwritten. The target snapshot must be in the pending state. Data written to a snapshot
   * must be aligned with 512-KiB sectors. You should always retry requests that receive server
   * (5xx) error responses, and ThrottlingException and RequestThrottledException client error
   * responses. For more information see Error retries in the Amazon Elastic Compute Cloud User
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link Blocks.PutSnapshotBlockError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonEbsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putSnapshotBlock(
    request: Blocks.PutSnapshotBlockRequest,
    options?: RequestOptions,
  ): ApiPromise<PutSnapshotBlockResponse, Blocks.PutSnapshotBlockError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "SnapshotId", value: request.snapshotId, schema: s.string() },
          { name: "BlockIndex", value: request.blockIndex, schema: s.int() },
        ],
        query: [],
        headers: [
          { name: "x-amz-Data-Length", value: request.xAmzDataLength, schema: s.int() },
          { name: "x-amz-Checksum", value: request.xAmzChecksum, schema: s.string() },
          {
            name: "x-amz-Checksum-Algorithm",
            value: request.xAmzChecksumAlgorithm,
            schema: xAmzChecksumAlgorithmSchema,
          },
          { name: "x-amz-Progress", value: request.xAmzProgress, schema: s.optional(s.int()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.string()) },
      },
      {
        success: { kind: "json", schema: putSnapshotBlockResponseSchema },
        errorFactory: Blocks.PutSnapshotBlockError,
      },
      options,
    );
  }
}

export namespace Blocks {
  export type GetSnapshotBlockRequest = {
    /**
     * The ID of the snapshot containing the block from which to get data. If the specified snapshot
     * is encrypted, you must have permission to use the KMS key that was used to encrypt the
     * snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User
     * Guide.
     */
    snapshotId: string;
    /**
     * The block index of the block in which to read the data. A block index is a logical index in
     * units of 512 KiB blocks. To identify the block index, divide the logical offset of the data
     * in the logical volume by the block size (logical offset of data/524288). The logical offset
     * of the data must be 512 KiB aligned.
     */
    blockIndex: number;
    /**
     * The block token of the block from which to get data. You can obtain the BlockToken by running
     * the ListChangedBlocks or ListSnapshotBlocks operations.
     */
    blockToken: string;
  };

  export class GetSnapshotBlockError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"requestThrottledException", RequestThrottledException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSnapshotBlockError> = [
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

  export type ListSnapshotBlocksRequest = {
    /** The ID of the snapshot from which to get block indexes and block tokens. */
    snapshotId: string;
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
     * The block index from which the list should start. The list in the response will start from
     * this block index or the next valid block index in the snapshot. If you specify NextToken,
     * then StartingBlockIndex is ignored.
     */
    startingBlockIndex?: number;
  };

  export class ListSnapshotBlocksError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"requestThrottledException", RequestThrottledException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSnapshotBlocksError> = [
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

  export type PutSnapshotBlockRequest = {
    /**
     * The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to
     * use the KMS key that was used to encrypt the snapshot. For more information, see Using
     * encryption in the Amazon Elastic Compute Cloud User Guide..
     */
    snapshotId: string;
    /**
     * The block index of the block in which to write the data. A block index is a logical index in
     * units of 512 KiB blocks. To identify the block index, divide the logical offset of the data
     * in the logical volume by the block size (logical offset of data/524288). The logical offset
     * of the data must be 512 KiB aligned.
     */
    blockIndex: number;
    /**
     * The size of the data to write to the block, in bytes. Currently, the only supported size is
     * 524288 bytes. Valid values: 524288
     */
    xAmzDataLength: number;
    /** A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported. */
    xAmzChecksum: string;
    /**
     * The algorithm used to generate the checksum. Currently, the only supported algorithm is
     * SHA256.
     */
    xAmzChecksumAlgorithm: XAmzChecksumAlgorithm;
    /** The progress of the write process, as a percentage. */
    xAmzProgress?: number;
    body?: string;
  };

  export class PutSnapshotBlockError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"requestThrottledException", RequestThrottledException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutSnapshotBlockError> = [
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
}
