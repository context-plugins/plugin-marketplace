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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_workspace_workspaces_post_error import (
    CreateWorkspaceWorkspacesPostErrorBody,
    create_workspace_workspaces_post_error_mapper,
)
from ..errors.delete_workspace_file_workspaces_workspace_id_files_delete_error import (
    DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody,
    delete_workspace_file_workspaces_workspace_id_files_delete_error_mapper,
)
from ..errors.delete_workspace_workspaces_workspace_id_delete_error import (
    DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody,
    delete_workspace_workspaces_workspace_id_delete_error_mapper,
)
from ..errors.get_workspace_size_workspaces_workspace_id_size_get_error import (
    GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody,
    get_workspace_size_workspaces_workspace_id_size_get_error_mapper,
)
from ..errors.get_workspace_workspaces_workspace_id_get_error import (
    GetWorkspaceWorkspacesWorkspaceIdGetErrorBody,
    get_workspace_workspaces_workspace_id_get_error_mapper,
)
from ..errors.list_workspace_files_workspaces_workspace_id_files_get_error import (
    ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody,
    list_workspace_files_workspaces_workspace_id_files_get_error_mapper,
)
from ..errors.update_workspace_workspaces_workspace_id_patch_error import (
    UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody,
    update_workspace_workspaces_workspace_id_patch_error_mapper,
)
from ..errors.upload_workspace_files_workspaces_workspace_id_files_upload_post_error import (
    UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody,
    upload_workspace_files_workspaces_workspace_id_files_upload_post_error_mapper,
)
from ..models.enums.contentdisposition import ContentdispositionOrStr
from ..models.workspace_create_request import WorkspaceCreateRequest, WorkspaceCreateRequestDict
from ..models.workspace_file_list_response import WorkspaceFileListResponse
from ..models.workspace_file_upload_request import WorkspaceFileUploadRequest, WorkspaceFileUploadRequestDict
from ..models.workspace_file_upload_response import WorkspaceFileUploadResponse
from ..models.workspace_info import WorkspaceInfo
from ..models.workspace_size_info import WorkspaceSizeInfo
from ..models.workspace_update_request import WorkspaceUpdateRequest, WorkspaceUpdateRequestDict
from ..server.server import Server


class Workspaces:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WorkspacesWithRawResponse(client, server, auth)

    def create_workspace_workspaces_post(
        self,
        body: WorkspaceCreateRequest | WorkspaceCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WorkspaceInfo:
        """Mint an empty workspace. Lets callers upload input files BEFORE the first run exists; pass the id as
        workspaceId on POST /runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_workspace_workspaces_post(body, request_options=request_options))

    def delete_workspace_file_workspaces_workspace_id_files_delete(
        self, workspace_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete one exact path from a workspace and remove matching upload metadata.

        Args:
            workspace_id: Value sent with the request.
            path: Relative file path to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Invalid request (bad session/workspace pairing or
                file path). Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspace_file_workspaces_workspace_id_files_delete(
                workspace_id, path, request_options=request_options
            ),
        )

    def delete_workspace_workspaces_workspace_id_delete(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Archive a workspace. Idempotent for missing, archived, and foreign ids.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.delete_workspace_workspaces_workspace_id_delete(
                workspace_id, request_options=request_options
            ),
        )

    def get_workspace_size_workspaces_workspace_id_size_get(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceSizeInfo:
        """Return current storage usage and the plan-specific workspace quota.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspace_size_workspaces_workspace_id_size_get(
                workspace_id, request_options=request_options
            ),
        )

    def get_workspace_workspaces_workspace_id_get(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> WorkspaceInfo:
        """Send a ``GET`` request.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_workspace_workspaces_workspace_id_get(
                workspace_id, request_options=request_options
            ),
        )

    def list_workspace_files_workspaces_workspace_id_files_get(
        self,
        workspace_id: UUID,
        *,
        prefix: str | None = "",
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        content_disposition: ContentdispositionOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WorkspaceFileListResponse:
        """List files the agent has produced for this workspace, paginated.

        Args:
            workspace_id: Value sent with the request.
            prefix: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            content_disposition: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Malformed pagination cursor. Validation Error ``error`` is ``HttpValidationError |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_workspace_files_workspaces_workspace_id_files_get(
                workspace_id,
                prefix=prefix,
                limit=limit,
                cursor=cursor,
                include_urls=include_urls,
                content_disposition=content_disposition,
                request_options=request_options,
            ),
        )

    def update_workspace_workspaces_workspace_id_patch(
        self,
        workspace_id: UUID,
        body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WorkspaceInfo:
        """Rename a workspace. Explicit null clears the name; omission is a no-op.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            self._with_raw_response.update_workspace_workspaces_workspace_id_patch(
                workspace_id, body, request_options=request_options
            ),
        )

    def upload_workspace_files_workspaces_workspace_id_files_upload_post(
        self,
        workspace_id: UUID,
        body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WorkspaceFileUploadResponse:
        """Presigned PUT URLs for input files, placed under ``uploads/`` in the workspace. The agent pulls them in at
        the start of every run. URLs are pinned to the declared Content-Type and exact Content-Length.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Invalid request (bad session/workspace pairing or file path). One or more files would
                replace existing workspace files. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.upload_workspace_files_workspaces_workspace_id_files_upload_post(
                workspace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WorkspacesWithRawResponse:
        return self._with_raw_response


class AsyncWorkspaces:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWorkspacesWithRawResponse(client, server, auth)

    async def create_workspace_workspaces_post(
        self,
        body: WorkspaceCreateRequest | WorkspaceCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WorkspaceInfo:
        """Mint an empty workspace. Lets callers upload input files BEFORE the first run exists; pass the id as
        workspaceId on POST /runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_workspace_workspaces_post(body, request_options=request_options)
        )

    async def delete_workspace_file_workspaces_workspace_id_files_delete(
        self, workspace_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete one exact path from a workspace and remove matching upload metadata.

        Args:
            workspace_id: Value sent with the request.
            path: Relative file path to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Invalid request (bad session/workspace pairing or
                file path). Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspace_file_workspaces_workspace_id_files_delete(
                workspace_id, path, request_options=request_options
            ),
        )

    async def delete_workspace_workspaces_workspace_id_delete(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Archive a workspace. Idempotent for missing, archived, and foreign ids.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_workspace_workspaces_workspace_id_delete(
                workspace_id, request_options=request_options
            ),
        )

    async def get_workspace_size_workspaces_workspace_id_size_get(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceSizeInfo:
        """Return current storage usage and the plan-specific workspace quota.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspace_size_workspaces_workspace_id_size_get(
                workspace_id, request_options=request_options
            ),
        )

    async def get_workspace_workspaces_workspace_id_get(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WorkspaceInfo:
        """Send a ``GET`` request.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_workspace_workspaces_workspace_id_get(
                workspace_id, request_options=request_options
            ),
        )

    async def list_workspace_files_workspaces_workspace_id_files_get(
        self,
        workspace_id: UUID,
        *,
        prefix: str | None = "",
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        content_disposition: ContentdispositionOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WorkspaceFileListResponse:
        """List files the agent has produced for this workspace, paginated.

        Args:
            workspace_id: Value sent with the request.
            prefix: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            content_disposition: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Malformed pagination cursor. Validation Error ``error`` is ``HttpValidationError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_workspace_files_workspaces_workspace_id_files_get(
                workspace_id,
                prefix=prefix,
                limit=limit,
                cursor=cursor,
                include_urls=include_urls,
                content_disposition=content_disposition,
                request_options=request_options,
            ),
        )

    async def update_workspace_workspaces_workspace_id_patch(
        self,
        workspace_id: UUID,
        body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WorkspaceInfo:
        """Rename a workspace. Explicit null clears the name; omission is a no-op.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Run, session, workspace, or profile not found. Validation Error ``error`` is ``HttpValidationError
                | RawError``."""
        return unwrap(
            await self._with_raw_response.update_workspace_workspaces_workspace_id_patch(
                workspace_id, body, request_options=request_options
            ),
        )

    async def upload_workspace_files_workspaces_workspace_id_files_upload_post(
        self,
        workspace_id: UUID,
        body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WorkspaceFileUploadResponse:
        """Presigned PUT URLs for input files, placed under ``uploads/`` in the workspace. The agent pulls them in at
        the start of every run. URLs are pinned to the declared Content-Type and exact Content-Length.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Zero Data Retention is enabled on the project (V4 unsupported). Run, session, workspace, or
                profile not found. Invalid request (bad session/workspace pairing or file path). One or more files would
                replace existing workspace files. Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_workspace_files_workspaces_workspace_id_files_upload_post(
                workspace_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWorkspacesWithRawResponse:
        return self._with_raw_response


class WorkspacesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_workspace_workspaces_post(
        self,
        body: WorkspaceCreateRequest | WorkspaceCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceInfo, CreateWorkspaceWorkspacesPostErrorBody]:
        """Mint an empty workspace. Lets callers upload input files BEFORE the first run exists; pass the id as
        workspaceId on POST /runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceCreateRequest | WorkspaceCreateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceInfo],
            error_mapper=create_workspace_workspaces_post_error_mapper,
            request_options=request_options,
        )

    def delete_workspace_file_workspaces_workspace_id_files_delete(
        self, workspace_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody]:
        """Delete one exact path from a workspace and remove matching upload metadata.

        Args:
            workspace_id: Value sent with the request.
            path: Relative file path to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace_id}/files"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            query_params=[param[str]("path", path)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=delete_workspace_file_workspaces_workspace_id_files_delete_error_mapper,
            request_options=request_options,
        )

    def delete_workspace_workspaces_workspace_id_delete(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody]:
        """Archive a workspace. Idempotent for missing, archived, and foreign ids.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=empty_response,
            error_mapper=delete_workspace_workspaces_workspace_id_delete_error_mapper,
            request_options=request_options,
        )

    def get_workspace_size_workspaces_workspace_id_size_get(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceSizeInfo, GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody]:
        """Return current storage usage and the plan-specific workspace quota.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}/size"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceSizeInfo],
            error_mapper=get_workspace_size_workspaces_workspace_id_size_get_error_mapper,
            request_options=request_options,
        )

    def get_workspace_workspaces_workspace_id_get(
        self, workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceInfo, GetWorkspaceWorkspacesWorkspaceIdGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceInfo],
            error_mapper=get_workspace_workspaces_workspace_id_get_error_mapper,
            request_options=request_options,
        )

    def list_workspace_files_workspaces_workspace_id_files_get(
        self,
        workspace_id: UUID,
        *,
        prefix: str | None = "",
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        content_disposition: ContentdispositionOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceFileListResponse, ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody]:
        """List files the agent has produced for this workspace, paginated.

        Args:
            workspace_id: Value sent with the request.
            prefix: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            content_disposition: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}/files"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            query_params=[
                param[str | None]("prefix", prefix),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("includeUrls", include_urls),
                param[ContentdispositionOrStr | None]("contentDisposition", content_disposition),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceFileListResponse],
            error_mapper=list_workspace_files_workspaces_workspace_id_files_get_error_mapper,
            request_options=request_options,
        )

    def update_workspace_workspaces_workspace_id_patch(
        self,
        workspace_id: UUID,
        body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceInfo, UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody]:
        """Rename a workspace. Explicit null clears the name; omission is a no-op.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceUpdateRequest | WorkspaceUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceInfo],
            error_mapper=update_workspace_workspaces_workspace_id_patch_error_mapper,
            request_options=request_options,
        )

    def upload_workspace_files_workspaces_workspace_id_files_upload_post(
        self,
        workspace_id: UUID,
        body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceFileUploadResponse, UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody]:
        """Presigned PUT URLs for input files, placed under ``uploads/`` in the workspace. The agent pulls them in at
        the start of every run. URLs are pinned to the declared Content-Type and exact Content-Length.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace_id}/files/upload"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=json_decoder[WorkspaceFileUploadResponse],
            error_mapper=upload_workspace_files_workspaces_workspace_id_files_upload_post_error_mapper,
            request_options=request_options,
        )


class AsyncWorkspacesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_workspace_workspaces_post(
        self,
        body: WorkspaceCreateRequest | WorkspaceCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceInfo, CreateWorkspaceWorkspacesPostErrorBody]:
        """Mint an empty workspace. Lets callers upload input files BEFORE the first run exists; pass the id as
        workspaceId on POST /runs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceCreateRequest | WorkspaceCreateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceInfo],
            error_mapper=create_workspace_workspaces_post_error_mapper,
            request_options=request_options,
        )

    async def delete_workspace_file_workspaces_workspace_id_files_delete(
        self, workspace_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody]:
        """Delete one exact path from a workspace and remove matching upload metadata.

        Args:
            workspace_id: Value sent with the request.
            path: Relative file path to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace_id}/files"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            query_params=[param[str]("path", path)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=delete_workspace_file_workspaces_workspace_id_files_delete_error_mapper,
            request_options=request_options,
        )

    async def delete_workspace_workspaces_workspace_id_delete(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody]:
        """Archive a workspace. Idempotent for missing, archived, and foreign ids.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_header,
            decoder=async_empty_response,
            error_mapper=delete_workspace_workspaces_workspace_id_delete_error_mapper,
            request_options=request_options,
        )

    async def get_workspace_size_workspaces_workspace_id_size_get(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceSizeInfo, GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody]:
        """Return current storage usage and the plan-specific workspace quota.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}/size"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceSizeInfo],
            error_mapper=get_workspace_size_workspaces_workspace_id_size_get_error_mapper,
            request_options=request_options,
        )

    async def get_workspace_workspaces_workspace_id_get(
        self, workspace_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WorkspaceInfo, GetWorkspaceWorkspacesWorkspaceIdGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            workspace_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceInfo],
            error_mapper=get_workspace_workspaces_workspace_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_workspace_files_workspaces_workspace_id_files_get(
        self,
        workspace_id: UUID,
        *,
        prefix: str | None = "",
        limit: int | None = 50,
        cursor: str | None = None,
        include_urls: bool | None = False,
        content_disposition: ContentdispositionOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceFileListResponse, ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody]:
        """List files the agent has produced for this workspace, paginated.

        Args:
            workspace_id: Value sent with the request.
            prefix: Value sent with the request.
            limit: Value sent with the request.
            cursor: Value sent with the request.
            include_urls: Value sent with the request.
            content_disposition: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/workspaces/{workspace_id}/files"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            query_params=[
                param[str | None]("prefix", prefix),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("includeUrls", include_urls),
                param[ContentdispositionOrStr | None]("contentDisposition", content_disposition),
            ],
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceFileListResponse],
            error_mapper=list_workspace_files_workspaces_workspace_id_files_get_error_mapper,
            request_options=request_options,
        )

    async def update_workspace_workspaces_workspace_id_patch(
        self,
        workspace_id: UUID,
        body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceInfo, UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody]:
        """Rename a workspace. Explicit null clears the name; omission is a no-op.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/workspaces/{workspace_id}"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceUpdateRequest | WorkspaceUpdateRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceInfo],
            error_mapper=update_workspace_workspaces_workspace_id_patch_error_mapper,
            request_options=request_options,
        )

    async def upload_workspace_files_workspaces_workspace_id_files_upload_post(
        self,
        workspace_id: UUID,
        body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WorkspaceFileUploadResponse, UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody]:
        """Presigned PUT URLs for input files, placed under ``uploads/`` in the workspace. The agent pulls them in at
        the start of every run. URLs are pinned to the declared Content-Type and exact Content-Length.

        Args:
            workspace_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/workspaces/{workspace_id}/files/upload"),
            path_params=[param[UUID]("workspace_id", workspace_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict](body),
            auth_scheme=self._auth.api_key_header,
            decoder=async_json_decoder[WorkspaceFileUploadResponse],
            error_mapper=upload_workspace_files_workspaces_workspace_id_files_upload_post_error_mapper,
            request_options=request_options,
        )
