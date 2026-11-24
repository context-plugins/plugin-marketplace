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
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_workspace_export_error import CreateWorkspaceExportErrorBody, create_workspace_export_error_mapper
from ..errors.get_workspace_export_error import GetWorkspaceExportErrorBody, get_workspace_export_error_mapper
from ..models.create_export_job_response import CreateExportJobResponse
from ..models.export_job_status import ExportJobStatus
from ..server.server import Server


class DataExport:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataExportWithRawResponse(client, server, auth)

    def create_workspace_export(
        self, workspace: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreateExportJobResponse:
        """Creates an asynchronous job to package the workspace's audio files, transcripts, items, and metadata into a
        single downloadable archive. Only workspace ``owner`` or ``admin`` members may call this endpoint.

        At most one job per workspace can be in ``queued`` or ``running`` status at any time; further requests return
        ``429`` until the active job finishes. Poll ``GET /api/workspaces/{workspace}/export/{job_id}`` for status.

        Args:
            workspace: Workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Export job created and queued for processing

        Raises:
            ApiError: Missing or invalid session / key Caller is not an owner or admin of the workspace Workspace not
                found Another export for this workspace is already queued or running ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(self._with_raw_response.create_workspace_export(workspace, request_options=request_options))

    def get_workspace_export(
        self, workspace: int, job_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExportJobStatus:
        """Returns the current lifecycle state of an export job. When ``status`` is ``completed``, ``download_url`` is a
        signed URL valid for 15 minutes (until ``download_expires_at``); each call signs a fresh one. A finished export
        stays downloadable for 7 days, after which ``status`` reads ``expired``.

        Caller must be a member of the workspace (any role).

        Args:
            workspace: Workspace ID
            job_id: Export job ID returned by POST /api/workspaces/{workspace}/export
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current status of the export job

        Raises:
            ApiError: Missing or invalid session / key Caller is not a member of the workspace Workspace or job not
                found ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_workspace_export(workspace, job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> DataExportWithRawResponse:
        return self._with_raw_response


class AsyncDataExport:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataExportWithRawResponse(client, server, auth)

    async def create_workspace_export(
        self, workspace: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreateExportJobResponse:
        """Creates an asynchronous job to package the workspace's audio files, transcripts, items, and metadata into a
        single downloadable archive. Only workspace ``owner`` or ``admin`` members may call this endpoint.

        At most one job per workspace can be in ``queued`` or ``running`` status at any time; further requests return
        ``429`` until the active job finishes. Poll ``GET /api/workspaces/{workspace}/export/{job_id}`` for status.

        Args:
            workspace: Workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Export job created and queued for processing

        Raises:
            ApiError: Missing or invalid session / key Caller is not an owner or admin of the workspace Workspace not
                found Another export for this workspace is already queued or running ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(await self._with_raw_response.create_workspace_export(workspace, request_options=request_options))

    async def get_workspace_export(
        self, workspace: int, job_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExportJobStatus:
        """Returns the current lifecycle state of an export job. When ``status`` is ``completed``, ``download_url`` is a
        signed URL valid for 15 minutes (until ``download_expires_at``); each call signs a fresh one. A finished export
        stays downloadable for 7 days, after which ``status`` reads ``expired``.

        Caller must be a member of the workspace (any role).

        Args:
            workspace: Workspace ID
            job_id: Export job ID returned by POST /api/workspaces/{workspace}/export
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current status of the export job

        Raises:
            ApiError: Missing or invalid session / key Caller is not a member of the workspace Workspace or job not
                found ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspace_export(workspace, job_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDataExportWithRawResponse:
        return self._with_raw_response


class DataExportWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_workspace_export(
        self, workspace: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateExportJobResponse, CreateWorkspaceExportErrorBody]:
        """Creates an asynchronous job to package the workspace's audio files, transcripts, items, and metadata into a
        single downloadable archive. Only workspace ``owner`` or ``admin`` members may call this endpoint.

        At most one job per workspace can be in ``queued`` or ``running`` status at any time; further requests return
        ``429`` until the active job finishes. Poll ``GET /api/workspaces/{workspace}/export/{job_id}`` for status.

        Args:
            workspace: Workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/workspaces/{workspace}/export"),
            path_params=[param[int]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateExportJobResponse],
            error_mapper=create_workspace_export_error_mapper,
            request_options=request_options,
        )

    def get_workspace_export(
        self, workspace: int, job_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExportJobStatus, GetWorkspaceExportErrorBody]:
        """Returns the current lifecycle state of an export job. When ``status`` is ``completed``, ``download_url`` is a
        signed URL valid for 15 minutes (until ``download_expires_at``); each call signs a fresh one. A finished export
        stays downloadable for 7 days, after which ``status`` reads ``expired``.

        Caller must be a member of the workspace (any role).

        Args:
            workspace: Workspace ID
            job_id: Export job ID returned by POST /api/workspaces/{workspace}/export
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}/export/{job_id}"),
            path_params=[param[int]("workspace", workspace), param[int]("job_id", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ExportJobStatus],
            error_mapper=get_workspace_export_error_mapper,
            request_options=request_options,
        )


class AsyncDataExportWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_workspace_export(
        self, workspace: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreateExportJobResponse, CreateWorkspaceExportErrorBody]:
        """Creates an asynchronous job to package the workspace's audio files, transcripts, items, and metadata into a
        single downloadable archive. Only workspace ``owner`` or ``admin`` members may call this endpoint.

        At most one job per workspace can be in ``queued`` or ``running`` status at any time; further requests return
        ``429`` until the active job finishes. Poll ``GET /api/workspaces/{workspace}/export/{job_id}`` for status.

        Args:
            workspace: Workspace ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/workspaces/{workspace}/export"),
            path_params=[param[int]("workspace", workspace)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateExportJobResponse],
            error_mapper=create_workspace_export_error_mapper,
            request_options=request_options,
        )

    async def get_workspace_export(
        self, workspace: int, job_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExportJobStatus, GetWorkspaceExportErrorBody]:
        """Returns the current lifecycle state of an export job. When ``status`` is ``completed``, ``download_url`` is a
        signed URL valid for 15 minutes (until ``download_expires_at``); each call signs a fresh one. A finished export
        stays downloadable for 7 days, after which ``status`` reads ``expired``.

        Caller must be a member of the workspace (any role).

        Args:
            workspace: Workspace ID
            job_id: Export job ID returned by POST /api/workspaces/{workspace}/export
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/workspaces/{workspace}/export/{job_id}"),
            path_params=[param[int]("workspace", workspace), param[int]("job_id", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ExportJobStatus],
            error_mapper=get_workspace_export_error_mapper,
            request_options=request_options,
        )
