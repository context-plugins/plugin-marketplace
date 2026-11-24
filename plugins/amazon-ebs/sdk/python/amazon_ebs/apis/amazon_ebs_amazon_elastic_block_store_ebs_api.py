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
from ..errors.complete_snapshot_error import CompleteSnapshotErrorBody, complete_snapshot_error_mapper
from ..errors.list_changed_blocks_error import ListChangedBlocksErrorBody, list_changed_blocks_error_mapper
from ..errors.start_snapshot_error import StartSnapshotErrorBody, start_snapshot_error_mapper
from ..models.complete_snapshot_response import CompleteSnapshotResponse
from ..models.enums.x_amz_checksum_aggregation_method import XAmzChecksumAggregationMethodOrStr
from ..models.enums.x_amz_checksum_algorithm import XAmzChecksumAlgorithmOrStr
from ..models.list_changed_blocks_response import ListChangedBlocksResponse
from ..models.snapshots_request import SnapshotsRequest, SnapshotsRequestDict
from ..models.start_snapshot_response import StartSnapshotResponse
from ..server.server import Server


class AmazonEbsAmazonElasticBlockStoreEbsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse(client, server, auth)

    def complete_snapshot(
        self,
        snapshot_id: str,
        x_amz_changed_blocks_count: int,
        *,
        x_amz_checksum: str | None = None,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None,
        x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompleteSnapshotResponse:
        """Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing
        the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been
        completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException
        and RequestThrottledException client error responses. For more information see Error retries in the Amazon
        Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot.
            x_amz_changed_blocks_count: The number of blocks that were written to the snapshot.
            x_amz_checksum: An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To
                generate the aggregated checksum using the linear aggregation method, arrange the checksums for each
                written block in ascending order of their block index, concatenate them to form a single string, and
                then generate the checksum on the entire string using the SHA256 algorithm.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_checksum_aggregation_method: The aggregation method used to generate the checksum. Currently, the only
                supported aggregation method is LINEAR.
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
            self._with_raw_response.complete_snapshot(
                snapshot_id,
                x_amz_changed_blocks_count,
                x_amz_checksum=x_amz_checksum,
                x_amz_checksum_algorithm=x_amz_checksum_algorithm,
                x_amz_checksum_aggregation_method=x_amz_checksum_aggregation_method,
                request_options=request_options,
            ),
        )

    def list_changed_blocks(
        self,
        second_snapshot_id: str,
        *,
        first_snapshot_id: str | None = None,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListChangedBlocksResponse:
        """Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of
        the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses,
        and ThrottlingException and RequestThrottledException client error responses. For more information see Error
        retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            second_snapshot_id: The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter
                must be specified with a FirstSnapshotID parameter; otherwise, an error occurs.
            first_snapshot_id: The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter
                must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the comparison should start. The list in the response will
                start from this block index or the next valid block index in the snapshots. If you specify NextToken,
                then StartingBlockIndex is ignored.
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
            self._with_raw_response.list_changed_blocks(
                second_snapshot_id,
                first_snapshot_id=first_snapshot_id,
                page_token=page_token,
                max_results=max_results,
                starting_block_index=starting_block_index,
                request_options=request_options,
            ),
        )

    def start_snapshot(
        self,
        *,
        body: SnapshotsRequest | SnapshotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartSnapshotResponse:
        """Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes.
        After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always
        retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException
        client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConcurrentLimitExceededException; RequestThrottledException;
                ValidationException ConflictException InternalServerException ResourceNotFoundException
                ServiceQuotaExceededException ``error`` is ``ConcurrentLimitExceededException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException | ConflictException |
                InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.start_snapshot(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse:
        return self._with_raw_response


class AsyncAmazonEbsAmazonElasticBlockStoreEbsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse(client, server, auth)

    async def complete_snapshot(
        self,
        snapshot_id: str,
        x_amz_changed_blocks_count: int,
        *,
        x_amz_checksum: str | None = None,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None,
        x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompleteSnapshotResponse:
        """Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing
        the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been
        completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException
        and RequestThrottledException client error responses. For more information see Error retries in the Amazon
        Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot.
            x_amz_changed_blocks_count: The number of blocks that were written to the snapshot.
            x_amz_checksum: An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To
                generate the aggregated checksum using the linear aggregation method, arrange the checksums for each
                written block in ascending order of their block index, concatenate them to form a single string, and
                then generate the checksum on the entire string using the SHA256 algorithm.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_checksum_aggregation_method: The aggregation method used to generate the checksum. Currently, the only
                supported aggregation method is LINEAR.
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
            await self._with_raw_response.complete_snapshot(
                snapshot_id,
                x_amz_changed_blocks_count,
                x_amz_checksum=x_amz_checksum,
                x_amz_checksum_algorithm=x_amz_checksum_algorithm,
                x_amz_checksum_aggregation_method=x_amz_checksum_aggregation_method,
                request_options=request_options,
            ),
        )

    async def list_changed_blocks(
        self,
        second_snapshot_id: str,
        *,
        first_snapshot_id: str | None = None,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListChangedBlocksResponse:
        """Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of
        the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses,
        and ThrottlingException and RequestThrottledException client error responses. For more information see Error
        retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            second_snapshot_id: The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter
                must be specified with a FirstSnapshotID parameter; otherwise, an error occurs.
            first_snapshot_id: The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter
                must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the comparison should start. The list in the response will
                start from this block index or the next valid block index in the snapshots. If you specify NextToken,
                then StartingBlockIndex is ignored.
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
            await self._with_raw_response.list_changed_blocks(
                second_snapshot_id,
                first_snapshot_id=first_snapshot_id,
                page_token=page_token,
                max_results=max_results,
                starting_block_index=starting_block_index,
                request_options=request_options,
            ),
        )

    async def start_snapshot(
        self,
        *,
        body: SnapshotsRequest | SnapshotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartSnapshotResponse:
        """Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes.
        After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always
        retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException
        client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConcurrentLimitExceededException; RequestThrottledException;
                ValidationException ConflictException InternalServerException ResourceNotFoundException
                ServiceQuotaExceededException ``error`` is ``ConcurrentLimitExceededException |
                ServiceQuotaExceededException | AccessDeniedException | ResourceNotFoundException | ConflictException |
                InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.start_snapshot(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse:
        return self._with_raw_response


class AmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def complete_snapshot(
        self,
        snapshot_id: str,
        x_amz_changed_blocks_count: int,
        *,
        x_amz_checksum: str | None = None,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None,
        x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompleteSnapshotResponse, CompleteSnapshotErrorBody]:
        """Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing
        the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been
        completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException
        and RequestThrottledException client error responses. For more information see Error retries in the Amazon
        Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot.
            x_amz_changed_blocks_count: The number of blocks that were written to the snapshot.
            x_amz_checksum: An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To
                generate the aggregated checksum using the linear aggregation method, arrange the checksums for each
                written block in ascending order of their block index, concatenate them to form a single string, and
                then generate the checksum on the entire string using the SHA256 algorithm.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_checksum_aggregation_method: The aggregation method used to generate the checksum. Currently, the only
                supported aggregation method is LINEAR.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snapshots/completion/{SnapshotId}"),
            path_params=[param[str]("SnapshotId", snapshot_id)],
            headers=[
                param[int]("x-amz-ChangedBlocksCount", x_amz_changed_blocks_count),
                param[str | None]("x-amz-Checksum", x_amz_checksum),
                param[XAmzChecksumAlgorithmOrStr | None]("x-amz-Checksum-Algorithm", x_amz_checksum_algorithm),
                param[XAmzChecksumAggregationMethodOrStr | None](
                    "x-amz-Checksum-Aggregation-Method", x_amz_checksum_aggregation_method
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CompleteSnapshotResponse],
            error_mapper=complete_snapshot_error_mapper,
            request_options=request_options,
        )

    def list_changed_blocks(
        self,
        second_snapshot_id: str,
        *,
        first_snapshot_id: str | None = None,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChangedBlocksResponse, ListChangedBlocksErrorBody]:
        """Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of
        the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses,
        and ThrottlingException and RequestThrottledException client error responses. For more information see Error
        retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            second_snapshot_id: The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter
                must be specified with a FirstSnapshotID parameter; otherwise, an error occurs.
            first_snapshot_id: The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter
                must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the comparison should start. The list in the response will
                start from this block index or the next valid block index in the snapshots. If you specify NextToken,
                then StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SecondSnapshotId}/changedblocks"),
            path_params=[param[str]("SecondSnapshotId", second_snapshot_id)],
            query_params=[
                param[str | None]("firstSnapshotId", first_snapshot_id),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
                param[int | None]("startingBlockIndex", starting_block_index),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListChangedBlocksResponse],
            error_mapper=list_changed_blocks_error_mapper,
            request_options=request_options,
        )

    def start_snapshot(
        self,
        *,
        body: SnapshotsRequest | SnapshotsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartSnapshotResponse, StartSnapshotErrorBody]:
        """Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes.
        After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always
        retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException
        client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snapshots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnapshotsRequest | SnapshotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartSnapshotResponse],
            error_mapper=start_snapshot_error_mapper,
            request_options=request_options,
        )


class AsyncAmazonEbsAmazonElasticBlockStoreEbsApiWithRawResponse(
    SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]
):
    async def complete_snapshot(
        self,
        snapshot_id: str,
        x_amz_changed_blocks_count: int,
        *,
        x_amz_checksum: str | None = None,
        x_amz_checksum_algorithm: XAmzChecksumAlgorithmOrStr | None = None,
        x_amz_checksum_aggregation_method: XAmzChecksumAggregationMethodOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompleteSnapshotResponse, CompleteSnapshotErrorBody]:
        """Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing
        the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been
        completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException
        and RequestThrottledException client error responses. For more information see Error retries in the Amazon
        Elastic Compute Cloud User Guide.

        Args:
            snapshot_id: The ID of the snapshot.
            x_amz_changed_blocks_count: The number of blocks that were written to the snapshot.
            x_amz_checksum: An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To
                generate the aggregated checksum using the linear aggregation method, arrange the checksums for each
                written block in ascending order of their block index, concatenate them to form a single string, and
                then generate the checksum on the entire string using the SHA256 algorithm.
            x_amz_checksum_algorithm: The algorithm used to generate the checksum. Currently, the only supported
                algorithm is SHA256.
            x_amz_checksum_aggregation_method: The aggregation method used to generate the checksum. Currently, the only
                supported aggregation method is LINEAR.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snapshots/completion/{SnapshotId}"),
            path_params=[param[str]("SnapshotId", snapshot_id)],
            headers=[
                param[int]("x-amz-ChangedBlocksCount", x_amz_changed_blocks_count),
                param[str | None]("x-amz-Checksum", x_amz_checksum),
                param[XAmzChecksumAlgorithmOrStr | None]("x-amz-Checksum-Algorithm", x_amz_checksum_algorithm),
                param[XAmzChecksumAggregationMethodOrStr | None](
                    "x-amz-Checksum-Aggregation-Method", x_amz_checksum_aggregation_method
                ),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CompleteSnapshotResponse],
            error_mapper=complete_snapshot_error_mapper,
            request_options=request_options,
        )

    async def list_changed_blocks(
        self,
        second_snapshot_id: str,
        *,
        first_snapshot_id: str | None = None,
        page_token: str | None = None,
        max_results: int | None = None,
        starting_block_index: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListChangedBlocksResponse, ListChangedBlocksErrorBody]:
        """Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of
        the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses,
        and ThrottlingException and RequestThrottledException client error responses. For more information see Error
        retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            second_snapshot_id: The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter
                must be specified with a FirstSnapshotID parameter; otherwise, an error occurs.
            first_snapshot_id: The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter
                must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.
            page_token: The token to request the next page of results. If you specify NextToken, then StartingBlockIndex
                is ignored.
            max_results: The maximum number of blocks to be returned by the request. Even if additional blocks can be
                retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of
                blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned
                NextToken value. The value of NextToken is null when there are no more blocks to return.
            starting_block_index: The block index from which the comparison should start. The list in the response will
                start from this block index or the next valid block index in the snapshots. If you specify NextToken,
                then StartingBlockIndex is ignored.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/snapshots/{SecondSnapshotId}/changedblocks"),
            path_params=[param[str]("SecondSnapshotId", second_snapshot_id)],
            query_params=[
                param[str | None]("firstSnapshotId", first_snapshot_id),
                param[str | None]("pageToken", page_token),
                param[int | None]("maxResults", max_results),
                param[int | None]("startingBlockIndex", starting_block_index),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListChangedBlocksResponse],
            error_mapper=list_changed_blocks_error_mapper,
            request_options=request_options,
        )

    async def start_snapshot(
        self,
        *,
        body: SnapshotsRequest | SnapshotsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartSnapshotResponse, StartSnapshotErrorBody]:
        """Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes.
        After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always
        retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException
        client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/snapshots"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SnapshotsRequest | SnapshotsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartSnapshotResponse],
            error_mapper=start_snapshot_error_mapper,
            request_options=request_options,
        )
