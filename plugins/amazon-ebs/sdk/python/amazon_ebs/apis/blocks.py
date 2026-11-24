from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_snapshot_block_error import GetSnapshotBlockErrorBody, get_snapshot_block_error_mapper
from ..errors.list_snapshot_blocks_error import ListSnapshotBlocksErrorBody, list_snapshot_blocks_error_mapper
from ..errors.put_snapshot_block_error import PutSnapshotBlockErrorBody, put_snapshot_block_error_mapper
from ..models.enums.x_amz_checksum_algorithm import XAmzChecksumAlgorithmOrStr
from ..models.get_snapshot_block_response import GetSnapshotBlockResponse
from ..models.list_snapshot_blocks_response import ListSnapshotBlocksResponse
from ..models.put_snapshot_block_response import PutSnapshotBlockResponse
from ..server.server import Server


class Blocks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BlocksWithRawResponse(client, server, auth)

    def get_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        block_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetSnapshotBlockResponse:
        """Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that
        receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error
        responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot containing the block from which to get data. If the specified snapshot
                is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For
                more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.
            block_index: The block index of the block in which to read the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            block_token: The block token of the block from which to get data. You can obtain the BlockToken by running
                the ListChangedBlocks or ListSnapshotBlocks operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.get_snapshot_block(
                snapshot_id, block_index, block_token, request_options=request_options
            ),
        )

    def list_snapshot_blocks(
        self,
        snapshot_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListSnapshotBlocksResponse:
        """Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry
        requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client
        error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot from which to get block indexes and block tokens.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the list should start. The list in the response will start
                from this block index or the next valid block index in the snapshot. If you specify NextToken, then
                StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.list_snapshot_blocks(
                snapshot_id,
                page_token=page_token,
                max_results=max_results,
                starting_block_index=starting_block_index,
                request_options=request_options,
            ),
        )

    def put_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        x_amz_data_length: int,
        x_amz_checksum: str,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr,
        *,
        x_amz_progress: int | None = None,
        body: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutSnapshotBlockResponse:
        """Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten.
        The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB
        sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and
        RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic
        Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use
                the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the
                Amazon Elastic Compute Cloud User Guide..
            block_index: The block index of the block in which to write the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            x_amz_data_length: The size of the data to write to the block, in bytes. Currently, the only supported size
                is 524288 bytes. Valid values: 524288
            x_amz_checksum: A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_progress: The progress of the write process, as a percentage.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            self._with_raw_response.put_snapshot_block(
                snapshot_id,
                block_index,
                x_amz_data_length,
                x_amz_checksum,
                x_amz_checksum_algorithm,
                x_amz_progress=x_amz_progress,
                body=body,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> BlocksWithRawResponse:
        return self._with_raw_response


class AsyncBlocks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBlocksWithRawResponse(client, server, auth)

    async def get_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        block_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetSnapshotBlockResponse:
        """Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that
        receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error
        responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot containing the block from which to get data. If the specified snapshot
                is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For
                more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.
            block_index: The block index of the block in which to read the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            block_token: The block token of the block from which to get data. You can obtain the BlockToken by running
                the ListChangedBlocks or ListSnapshotBlocks operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_snapshot_block(
                snapshot_id, block_index, block_token, request_options=request_options
            ),
        )

    async def list_snapshot_blocks(
        self,
        snapshot_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListSnapshotBlocksResponse:
        """Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry
        requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client
        error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot from which to get block indexes and block tokens.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the list should start. The list in the response will start
                from this block index or the next valid block index in the snapshot. If you specify NextToken, then
                StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.list_snapshot_blocks(
                snapshot_id,
                page_token=page_token,
                max_results=max_results,
                starting_block_index=starting_block_index,
                request_options=request_options,
            ),
        )

    async def put_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        x_amz_data_length: int,
        x_amz_checksum: str,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr,
        *,
        x_amz_progress: int | None = None,
        body: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutSnapshotBlockResponse:
        """Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten.
        The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB
        sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and
        RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic
        Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use
                the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the
                Amazon Elastic Compute Cloud User Guide..
            block_index: The block index of the block in which to write the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            x_amz_data_length: The size of the data to write to the block, in bytes. Currently, the only supported size
                is 524288 bytes. Valid values: 524288
            x_amz_checksum: A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_progress: The progress of the write process, as a percentage.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException RequestThrottledException; ValidationException
                ResourceNotFoundException ServiceQuotaExceededException ``error`` is ``RequestThrottledException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException |
                InternalServerException | RawError``."""
        return unwrap(
            await self._with_raw_response.put_snapshot_block(
                snapshot_id,
                block_index,
                x_amz_data_length,
                x_amz_checksum,
                x_amz_checksum_algorithm,
                x_amz_progress=x_amz_progress,
                body=body,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBlocksWithRawResponse:
        return self._with_raw_response


class BlocksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        block_token: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSnapshotBlockResponse, GetSnapshotBlockErrorBody]:
        """Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that
        receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error
        responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot containing the block from which to get data. If the specified snapshot
                is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For
                more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.
            block_index: The block index of the block in which to read the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            block_token: The block token of the block from which to get data. You can obtain the BlockToken by running
                the ListChangedBlocks or ListSnapshotBlocks operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            path_params=[param[str]("SnapshotId", snapshot_id), param[int]("BlockIndex", block_index)],
            query_params=[param[str]("blockToken", block_token)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSnapshotBlockResponse],
            error_mapper=get_snapshot_block_error_mapper,
            request_options=request_options,
        )

    def list_snapshot_blocks(
        self,
        snapshot_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSnapshotBlocksResponse, ListSnapshotBlocksErrorBody]:
        """Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry
        requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client
        error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot from which to get block indexes and block tokens.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the list should start. The list in the response will start
                from this block index or the next valid block index in the snapshot. If you specify NextToken, then
                StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks"),
            path_params=[param[str]("SnapshotId", snapshot_id)],
            query_params=[
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
                param[int | None]("startingBlockIndex", starting_block_index),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListSnapshotBlocksResponse],
            error_mapper=list_snapshot_blocks_error_mapper,
            request_options=request_options,
        )

    def put_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        x_amz_data_length: int,
        x_amz_checksum: str,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr,
        *,
        x_amz_progress: int | None = None,
        body: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSnapshotBlockResponse, PutSnapshotBlockErrorBody]:
        """Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten.
        The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB
        sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and
        RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic
        Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use
                the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the
                Amazon Elastic Compute Cloud User Guide..
            block_index: The block index of the block in which to write the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            x_amz_data_length: The size of the data to write to the block, in bytes. Currently, the only supported size
                is 524288 bytes. Valid values: 524288
            x_amz_checksum: A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_progress: The progress of the write process, as a percentage.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            path_params=[param[str]("SnapshotId", snapshot_id), param[int]("BlockIndex", block_index)],
            headers=[
                param[int]("x-amz-Data-Length", x_amz_data_length),
                param[str]("x-amz-Checksum", x_amz_checksum),
                param[XAmzChecksumAlgorithmOrStr]("x-amz-Checksum-Algorithm", x_amz_checksum_algorithm),
                param[int | None]("x-amz-Progress", x_amz_progress),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[str | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutSnapshotBlockResponse],
            error_mapper=put_snapshot_block_error_mapper,
            request_options=request_options,
        )


class AsyncBlocksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        block_token: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSnapshotBlockResponse, GetSnapshotBlockErrorBody]:
        """Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that
        receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error
        responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot containing the block from which to get data. If the specified snapshot
                is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For
                more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide.
            block_index: The block index of the block in which to read the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            block_token: The block token of the block from which to get data. You can obtain the BlockToken by running
                the ListChangedBlocks or ListSnapshotBlocks operations.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            path_params=[param[str]("SnapshotId", snapshot_id), param[int]("BlockIndex", block_index)],
            query_params=[param[str]("blockToken", block_token)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSnapshotBlockResponse],
            error_mapper=get_snapshot_block_error_mapper,
            request_options=request_options,
        )

    async def list_snapshot_blocks(
        self,
        snapshot_id: str,
        *,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListSnapshotBlocksResponse, ListSnapshotBlocksErrorBody]:
        """Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry
        requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client
        error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot from which to get block indexes and block tokens.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the list should start. The list in the response will start
                from this block index or the next valid block index in the snapshot. If you specify NextToken, then
                StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks"),
            path_params=[param[str]("SnapshotId", snapshot_id)],
            query_params=[
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
                param[int | None]("startingBlockIndex", starting_block_index),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListSnapshotBlocksResponse],
            error_mapper=list_snapshot_blocks_error_mapper,
            request_options=request_options,
        )

    async def put_snapshot_block(
        self,
        snapshot_id: str,
        block_index: int,
        x_amz_data_length: int,
        x_amz_checksum: str,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr,
        *,
        x_amz_progress: int | None = None,
        body: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutSnapshotBlockResponse, PutSnapshotBlockErrorBody]:
        """Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten.
        The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB
        sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and
        RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic
        Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use
                the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the
                Amazon Elastic Compute Cloud User Guide..
            block_index: The block index of the block in which to write the data. A block index is a logical index in
                units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the
                logical volume by the block size (logical offset of data/524288). The logical offset of the data must be
                512 KiB aligned.
            x_amz_data_length: The size of the data to write to the block, in bytes. Currently, the only supported size
                is 524288 bytes. Valid values: 524288
            x_amz_checksum: A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_progress: The progress of the write process, as a percentage.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            path_params=[param[str]("SnapshotId", snapshot_id), param[int]("BlockIndex", block_index)],
            headers=[
                param[int]("x-amz-Data-Length", x_amz_data_length),
                param[str]("x-amz-Checksum", x_amz_checksum),
                param[XAmzChecksumAlgorithmOrStr]("x-amz-Checksum-Algorithm", x_amz_checksum_algorithm),
                param[int | None]("x-amz-Progress", x_amz_progress),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[str | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutSnapshotBlockResponse],
            error_mapper=put_snapshot_block_error_mapper,
            request_options=request_options,
        )
