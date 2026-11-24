from __future__ import annotations

from uuid import UUID

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error import (
    ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody,
    list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error_mapper,
)
from ..errors.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error import (
    TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody,
    trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error_mapper,
)
from ..errors.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error import (
    TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody,
    trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error_mapper,
)
from ..models.trace_storage_object_list_response import TraceStorageObjectListResponse
from ..models.trace_workspace_changes_response import TraceWorkspaceChangesResponse
from ..models.trace_workspace_files_response import TraceWorkspaceFilesResponse
from ..server.server import Server


class Storage:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = StorageWithRawResponse(client, server)

    def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceStorageObjectListResponse:
        """List trace-owned screenshots, recordings, and captured files.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
                trace_id, request_options=request_options
            ),
        )

    def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceWorkspaceChangesResponse:
        """Return filetracking snapshots, patches, and captured files for a trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
                trace_id, request_options=request_options
            ),
        )

    def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> TraceWorkspaceFilesResponse:
        """Return final captured file contents for a trace workspace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
                trace_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> StorageWithRawResponse:
        return self._with_raw_response


class AsyncStorage:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncStorageWithRawResponse(client, server)

    async def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceStorageObjectListResponse:
        """List trace-owned screenshots, recordings, and captured files.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
                trace_id, request_options=request_options
            ),
        )

    async def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceWorkspaceChangesResponse:
        """Return filetracking snapshots, patches, and captured files for a trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
                trace_id, request_options=request_options
            ),
        )

    async def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TraceWorkspaceFilesResponse:
        """Return final captured file contents for a trace workspace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
                trace_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStorageWithRawResponse:
        return self._with_raw_response


class StorageWithRawResponse(BaseRawResponse[RawClient, Server]):
    def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceStorageObjectListResponse, ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody]:
        """List trace-owned screenshots, recordings, and captured files.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/artifacts"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceStorageObjectListResponse],
            error_mapper=list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error_mapper,
            request_options=request_options,
        )

    def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        TraceWorkspaceChangesResponse, TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
    ]:
        """Return filetracking snapshots, patches, and captured files for a trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/workspace/changes"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceWorkspaceChangesResponse],
            error_mapper=trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error_mapper,
            request_options=request_options,
        )

    def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        self, trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TraceWorkspaceFilesResponse, TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody]:
        """Return final captured file contents for a trace workspace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/workspace/files"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=json_decoder[TraceWorkspaceFilesResponse],
            error_mapper=trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error_mapper,
            request_options=request_options,
        )


class AsyncStorageWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceStorageObjectListResponse, ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody]:
        """List trace-owned screenshots, recordings, and captured files.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/artifacts"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceStorageObjectListResponse],
            error_mapper=list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error_mapper,
            request_options=request_options,
        )

    async def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        TraceWorkspaceChangesResponse, TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
    ]:
        """Return filetracking snapshots, patches, and captured files for a trace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/workspace/changes"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceWorkspaceChangesResponse],
            error_mapper=trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error_mapper,
            request_options=request_options,
        )

    async def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        self, trace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TraceWorkspaceFilesResponse, TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody]:
        """Return final captured file contents for a trace workspace.

        Args:
            trace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/storage/traces/{trace_id}/workspace/files"),
            path_params=[param[UUID]("trace_id", trace_id)],
            decoder=async_json_decoder[TraceWorkspaceFilesResponse],
            error_mapper=trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error_mapper,
            request_options=request_options,
        )
