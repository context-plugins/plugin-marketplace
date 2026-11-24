from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.build_status_v2_builds_build_id_status_get_error import (
    BuildStatusV2BuildsBuildIdStatusGetErrorBody,
    build_status_v2_builds_build_id_status_get_error_mapper,
)
from ..errors.cancel_build_v2_builds_build_id_cancel_post_error import (
    CancelBuildV2BuildsBuildIdCancelPostErrorBody,
    cancel_build_v2_builds_build_id_cancel_post_error_mapper,
)
from ..errors.download_build_source_v2_builds_build_id_source_download_get_error import (
    DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody,
    download_build_source_v2_builds_build_id_source_download_get_error_mapper,
)
from ..errors.download_build_workspace_v2_builds_build_id_workspace_download_get_error import (
    DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody,
    download_build_workspace_v2_builds_build_id_workspace_download_get_error_mapper,
)
from ..errors.list_build_source_v2_builds_build_id_source_get_error import (
    ListBuildSourceV2BuildsBuildIdSourceGetErrorBody,
    list_build_source_v2_builds_build_id_source_get_error_mapper,
)
from ..errors.list_build_workspace_v2_builds_build_id_workspace_get_error import (
    ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody,
    list_build_workspace_v2_builds_build_id_workspace_get_error_mapper,
)
from ..errors.list_builds_v2_builds_get_error import (
    ListBuildsV2BuildsGetErrorBody,
    list_builds_v2_builds_get_error_mapper,
)
from ..errors.lookup_builds_v2_builds_lookup_post_error import (
    LookupBuildsV2BuildsLookupPostErrorBody,
    lookup_builds_v2_builds_lookup_post_error_mapper,
)
from ..errors.preview_build_source_v2_builds_build_id_source_preview_get_error import (
    PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody,
    preview_build_source_v2_builds_build_id_source_preview_get_error_mapper,
)
from ..errors.preview_build_workspace_v2_builds_build_id_workspace_preview_get_error import (
    PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody,
    preview_build_workspace_v2_builds_build_id_workspace_preview_get_error_mapper,
)
from ..errors.register_build_source_v2_builds_register_post_error import (
    RegisterBuildSourceV2BuildsRegisterPostErrorBody,
    register_build_source_v2_builds_register_post_error_mapper,
)
from ..errors.reindex_build_source_v2_builds_build_id_source_reindex_post_error import (
    ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody,
    reindex_build_source_v2_builds_build_id_source_reindex_post_error_mapper,
)
from ..errors.set_latest_build_v2_builds_build_id_set_latest_post_error import (
    SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody,
    set_latest_build_v2_builds_build_id_set_latest_post_error_mapper,
)
from ..errors.trigger_build_v2_builds_trigger_direct_post_error import (
    TriggerBuildV2BuildsTriggerDirectPostErrorBody,
    trigger_build_v2_builds_trigger_direct_post_error_mapper,
)
from ..errors.trigger_build_v2_builds_trigger_post_error import (
    TriggerBuildV2BuildsTriggerPostErrorBody,
    trigger_build_v2_builds_trigger_post_error_mapper,
)
from ..errors.upload_url_v2_builds_upload_url_post_error import (
    UploadUrlV2BuildsUploadUrlPostErrorBody,
    upload_url_v2_builds_upload_url_post_error_mapper,
)
from ..models.build_list_response import BuildListResponse
from ..models.build_lookup_request import BuildLookupRequest, BuildLookupRequestDict
from ..models.build_lookup_response import BuildLookupResponse
from ..models.build_register_request import BuildRegisterRequest, BuildRegisterRequestDict
from ..models.build_register_response import BuildRegisterResponse
from ..models.build_response import BuildResponse
from ..models.build_source_download_response import BuildSourceDownloadResponse
from ..models.build_source_list_response import BuildSourceListResponse
from ..models.build_source_preview_response import BuildSourcePreviewResponse
from ..models.build_trigger_request import BuildTriggerRequest, BuildTriggerRequestDict
from ..models.build_upload_url_response import BuildUploadUrlResponse
from ..models.build_workspace_list_response import BuildWorkspaceListResponse
from ..server.server import Server


class Builds:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = BuildsWithRawResponse(client, server)

    def build_status_v2_builds_build_id_status_get(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Get a build's current status and details.

        Args:
            build_id: Value sent with the request.
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
            self._with_raw_response.build_status_v2_builds_build_id_status_get(
                build_id, request_options=request_options
            ),
        )

    def cancel_build_v2_builds_build_id_cancel_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Cancel an in-progress build.

        Args:
            build_id: Value sent with the request.
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
            self._with_raw_response.cancel_build_v2_builds_build_id_cancel_post(
                build_id, request_options=request_options
            ),
        )

    def download_build_source_v2_builds_build_id_source_download_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildSourceDownloadResponse:
        """Create a short-lived presigned download URL for a file in a build's source tree.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            self._with_raw_response.download_build_source_v2_builds_build_id_source_download_get(
                build_id, path, request_options=request_options
            ),
        )

    def download_build_workspace_v2_builds_build_id_workspace_download_get(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Stream a build's captured workspace as a zip archive.

        Args:
            build_id: Value sent with the request.
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
            self._with_raw_response.download_build_workspace_v2_builds_build_id_workspace_download_get(
                build_id, request_options=request_options
            ),
        )

    def list_build_source_v2_builds_build_id_source_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildSourceListResponse:
        """List files and directories at a path in a build's expanded source tree.

        Readers outside the owning team see only the latest build of a public environment whose owner published its
        source.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
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
            self._with_raw_response.list_build_source_v2_builds_build_id_source_get(
                build_id, path=path, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    def list_build_workspace_v2_builds_build_id_workspace_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildWorkspaceListResponse:
        """List files and directories at a path in a build's captured workspace.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
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
            self._with_raw_response.list_build_workspace_v2_builds_build_id_workspace_get(
                build_id, path=path, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    def list_builds_v2_builds_get(
        self, registry_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> BuildListResponse:
        """List builds for an environment registry, newest first.

        Args:
            registry_id: Filter builds to this registry
            limit: Value sent with the request.
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
            self._with_raw_response.list_builds_v2_builds_get(registry_id, limit=limit, request_options=request_options)
        )

    def lookup_builds_v2_builds_lookup_post(
        self, body: BuildLookupRequest | BuildLookupRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildLookupResponse:
        """Find the team's builds whose source has one of the given content digests.

        Args:
            body: The request body.
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
            self._with_raw_response.lookup_builds_v2_builds_lookup_post(body, request_options=request_options)
        )

    def preview_build_source_v2_builds_build_id_source_preview_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildSourcePreviewResponse:
        """Return the text content of a file in a build's source tree (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            self._with_raw_response.preview_build_source_v2_builds_build_id_source_preview_get(
                build_id, path, request_options=request_options
            ),
        )

    def preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildSourcePreviewResponse:
        """Return the text content of a captured workspace file (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            self._with_raw_response.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
                build_id, path, request_options=request_options
            ),
        )

    def register_build_source_v2_builds_register_post(
        self,
        body: BuildRegisterRequest | BuildRegisterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildRegisterResponse:
        """Record an uploaded build context as an unbuilt build of an environment.

        Args:
            body: The request body.
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
            self._with_raw_response.register_build_source_v2_builds_register_post(body, request_options=request_options)
        )

    def reindex_build_source_v2_builds_build_id_source_reindex_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Request a new source index after an indexing failure. Requires build edit access.

        Args:
            build_id: Value sent with the request.
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
            self._with_raw_response.reindex_build_source_v2_builds_build_id_source_reindex_post(
                build_id, request_options=request_options
            ),
        )

    def set_latest_build_v2_builds_build_id_set_latest_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Pin a successful build as its registry's latest build.

        Args:
            build_id: Value sent with the request.
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
            self._with_raw_response.set_latest_build_v2_builds_build_id_set_latest_post(
                build_id, request_options=request_options
            ),
        )

    def trigger_build_v2_builds_trigger_direct_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildResponse:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
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
            self._with_raw_response.trigger_build_v2_builds_trigger_direct_post(body, request_options=request_options)
        )

    def trigger_build_v2_builds_trigger_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BuildResponse:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
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
            self._with_raw_response.trigger_build_v2_builds_trigger_post(body, request_options=request_options)
        )

    def upload_url_v2_builds_upload_url_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> BuildUploadUrlResponse:
        """Create a presigned S3 URL for uploading a build context, with a new build id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.upload_url_v2_builds_upload_url_post(request_options=request_options))

    @property
    def with_raw_response(self) -> BuildsWithRawResponse:
        return self._with_raw_response


class AsyncBuilds:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncBuildsWithRawResponse(client, server)

    async def build_status_v2_builds_build_id_status_get(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Get a build's current status and details.

        Args:
            build_id: Value sent with the request.
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
            await self._with_raw_response.build_status_v2_builds_build_id_status_get(
                build_id, request_options=request_options
            ),
        )

    async def cancel_build_v2_builds_build_id_cancel_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Cancel an in-progress build.

        Args:
            build_id: Value sent with the request.
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
            await self._with_raw_response.cancel_build_v2_builds_build_id_cancel_post(
                build_id, request_options=request_options
            ),
        )

    async def download_build_source_v2_builds_build_id_source_download_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildSourceDownloadResponse:
        """Create a short-lived presigned download URL for a file in a build's source tree.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            await self._with_raw_response.download_build_source_v2_builds_build_id_source_download_get(
                build_id, path, request_options=request_options
            ),
        )

    async def download_build_workspace_v2_builds_build_id_workspace_download_get(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Stream a build's captured workspace as a zip archive.

        Args:
            build_id: Value sent with the request.
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
            await self._with_raw_response.download_build_workspace_v2_builds_build_id_workspace_download_get(
                build_id, request_options=request_options
            ),
        )

    async def list_build_source_v2_builds_build_id_source_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildSourceListResponse:
        """List files and directories at a path in a build's expanded source tree.

        Readers outside the owning team see only the latest build of a public environment whose owner published its
        source.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
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
            await self._with_raw_response.list_build_source_v2_builds_build_id_source_get(
                build_id, path=path, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def list_build_workspace_v2_builds_build_id_workspace_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildWorkspaceListResponse:
        """List files and directories at a path in a build's captured workspace.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
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
            await self._with_raw_response.list_build_workspace_v2_builds_build_id_workspace_get(
                build_id, path=path, cursor=cursor, limit=limit, request_options=request_options
            ),
        )

    async def list_builds_v2_builds_get(
        self, registry_id: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildListResponse:
        """List builds for an environment registry, newest first.

        Args:
            registry_id: Filter builds to this registry
            limit: Value sent with the request.
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
            await self._with_raw_response.list_builds_v2_builds_get(
                registry_id, limit=limit, request_options=request_options
            ),
        )

    async def lookup_builds_v2_builds_lookup_post(
        self,
        body: BuildLookupRequest | BuildLookupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildLookupResponse:
        """Find the team's builds whose source has one of the given content digests.

        Args:
            body: The request body.
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
            await self._with_raw_response.lookup_builds_v2_builds_lookup_post(body, request_options=request_options)
        )

    async def preview_build_source_v2_builds_build_id_source_preview_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildSourcePreviewResponse:
        """Return the text content of a file in a build's source tree (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            await self._with_raw_response.preview_build_source_v2_builds_build_id_source_preview_get(
                build_id, path, request_options=request_options
            ),
        )

    async def preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildSourcePreviewResponse:
        """Return the text content of a captured workspace file (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
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
            await self._with_raw_response.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
                build_id, path, request_options=request_options
            ),
        )

    async def register_build_source_v2_builds_register_post(
        self,
        body: BuildRegisterRequest | BuildRegisterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildRegisterResponse:
        """Record an uploaded build context as an unbuilt build of an environment.

        Args:
            body: The request body.
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
            await self._with_raw_response.register_build_source_v2_builds_register_post(
                body, request_options=request_options
            ),
        )

    async def reindex_build_source_v2_builds_build_id_source_reindex_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Request a new source index after an indexing failure. Requires build edit access.

        Args:
            build_id: Value sent with the request.
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
            await self._with_raw_response.reindex_build_source_v2_builds_build_id_source_reindex_post(
                build_id, request_options=request_options
            ),
        )

    async def set_latest_build_v2_builds_build_id_set_latest_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildResponse:
        """Pin a successful build as its registry's latest build.

        Args:
            build_id: Value sent with the request.
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
            await self._with_raw_response.set_latest_build_v2_builds_build_id_set_latest_post(
                build_id, request_options=request_options
            ),
        )

    async def trigger_build_v2_builds_trigger_direct_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildResponse:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
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
            await self._with_raw_response.trigger_build_v2_builds_trigger_direct_post(
                body, request_options=request_options
            ),
        )

    async def trigger_build_v2_builds_trigger_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BuildResponse:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
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
            await self._with_raw_response.trigger_build_v2_builds_trigger_post(body, request_options=request_options)
        )

    async def upload_url_v2_builds_upload_url_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BuildUploadUrlResponse:
        """Create a presigned S3 URL for uploading a build context, with a new build id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.upload_url_v2_builds_upload_url_post(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBuildsWithRawResponse:
        return self._with_raw_response


class BuildsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def build_status_v2_builds_build_id_status_get(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, BuildStatusV2BuildsBuildIdStatusGetErrorBody]:
        """Get a build's current status and details.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/status"),
            path_params=[param[UUID]("build_id", build_id)],
            decoder=json_decoder[BuildResponse],
            error_mapper=build_status_v2_builds_build_id_status_get_error_mapper,
            request_options=request_options,
        )

    def cancel_build_v2_builds_build_id_cancel_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, CancelBuildV2BuildsBuildIdCancelPostErrorBody]:
        """Cancel an in-progress build.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/cancel"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[BuildResponse],
            error_mapper=cancel_build_v2_builds_build_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    def download_build_source_v2_builds_build_id_source_download_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourceDownloadResponse, DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody]:
        """Create a short-lived presigned download URL for a file in a build's source tree.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source/download"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=json_decoder[BuildSourceDownloadResponse],
            error_mapper=download_build_source_v2_builds_build_id_source_download_get_error_mapper,
            request_options=request_options,
        )

    def download_build_workspace_v2_builds_build_id_workspace_download_get(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody]:
        """Stream a build's captured workspace as a zip archive.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace/download"),
            path_params=[param[UUID]("build_id", build_id)],
            decoder=json_decoder[Any],
            error_mapper=download_build_workspace_v2_builds_build_id_workspace_download_get_error_mapper,
            request_options=request_options,
        )

    def list_build_source_v2_builds_build_id_source_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSourceListResponse, ListBuildSourceV2BuildsBuildIdSourceGetErrorBody]:
        """List files and directories at a path in a build's expanded source tree.

        Readers outside the owning team see only the latest build of a public environment whose owner published its
        source.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[
                param[str | None]("path", path), param[str | None]("cursor", cursor), param[int | None]("limit", limit)
            ],
            decoder=json_decoder[BuildSourceListResponse],
            error_mapper=list_build_source_v2_builds_build_id_source_get_error_mapper,
            request_options=request_options,
        )

    def list_build_workspace_v2_builds_build_id_workspace_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildWorkspaceListResponse, ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody]:
        """List files and directories at a path in a build's captured workspace.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[
                param[str | None]("path", path), param[str | None]("cursor", cursor), param[int | None]("limit", limit)
            ],
            decoder=json_decoder[BuildWorkspaceListResponse],
            error_mapper=list_build_workspace_v2_builds_build_id_workspace_get_error_mapper,
            request_options=request_options,
        )

    def list_builds_v2_builds_get(
        self, registry_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildListResponse, ListBuildsV2BuildsGetErrorBody]:
        """List builds for an environment registry, newest first.

        Args:
            registry_id: Filter builds to this registry
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds"),
            query_params=[param[UUID]("registry_id", registry_id), param[int | None]("limit", limit)],
            decoder=json_decoder[BuildListResponse],
            error_mapper=list_builds_v2_builds_get_error_mapper,
            request_options=request_options,
        )

    def lookup_builds_v2_builds_lookup_post(
        self, body: BuildLookupRequest | BuildLookupRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildLookupResponse, LookupBuildsV2BuildsLookupPostErrorBody]:
        """Find the team's builds whose source has one of the given content digests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildLookupRequest | BuildLookupRequestDict](body),
            decoder=json_decoder[BuildLookupResponse],
            error_mapper=lookup_builds_v2_builds_lookup_post_error_mapper,
            request_options=request_options,
        )

    def preview_build_source_v2_builds_build_id_source_preview_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody]:
        """Return the text content of a file in a build's source tree (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source/preview"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=json_decoder[BuildSourcePreviewResponse],
            error_mapper=preview_build_source_v2_builds_build_id_source_preview_get_error_mapper,
            request_options=request_options,
        )

    def preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        self, build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody]:
        """Return the text content of a captured workspace file (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace/preview"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=json_decoder[BuildSourcePreviewResponse],
            error_mapper=preview_build_workspace_v2_builds_build_id_workspace_preview_get_error_mapper,
            request_options=request_options,
        )

    def register_build_source_v2_builds_register_post(
        self,
        body: BuildRegisterRequest | BuildRegisterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildRegisterResponse, RegisterBuildSourceV2BuildsRegisterPostErrorBody]:
        """Record an uploaded build context as an unbuilt build of an environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/register"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildRegisterRequest | BuildRegisterRequestDict](body),
            decoder=json_decoder[BuildRegisterResponse],
            error_mapper=register_build_source_v2_builds_register_post_error_mapper,
            request_options=request_options,
        )

    def reindex_build_source_v2_builds_build_id_source_reindex_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody]:
        """Request a new source index after an indexing failure. Requires build edit access.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/source/reindex"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=reindex_build_source_v2_builds_build_id_source_reindex_post_error_mapper,
            request_options=request_options,
        )

    def set_latest_build_v2_builds_build_id_set_latest_post(
        self, build_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody]:
        """Pin a successful build as its registry's latest build.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/set-latest"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[BuildResponse],
            error_mapper=set_latest_build_v2_builds_build_id_set_latest_post_error_mapper,
            request_options=request_options,
        )

    def trigger_build_v2_builds_trigger_direct_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerDirectPostErrorBody]:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/trigger-direct"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildTriggerRequest | BuildTriggerRequestDict](body),
            decoder=json_decoder[BuildResponse],
            error_mapper=trigger_build_v2_builds_trigger_direct_post_error_mapper,
            request_options=request_options,
        )

    def trigger_build_v2_builds_trigger_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerPostErrorBody]:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/trigger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildTriggerRequest | BuildTriggerRequestDict](body),
            decoder=json_decoder[BuildResponse],
            error_mapper=trigger_build_v2_builds_trigger_post_error_mapper,
            request_options=request_options,
        )

    def upload_url_v2_builds_upload_url_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BuildUploadUrlResponse, UploadUrlV2BuildsUploadUrlPostErrorBody]:
        """Create a presigned S3 URL for uploading a build context, with a new build id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/upload-url"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[BuildUploadUrlResponse],
            error_mapper=upload_url_v2_builds_upload_url_post_error_mapper,
            request_options=request_options,
        )


class AsyncBuildsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def build_status_v2_builds_build_id_status_get(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, BuildStatusV2BuildsBuildIdStatusGetErrorBody]:
        """Get a build's current status and details.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/status"),
            path_params=[param[UUID]("build_id", build_id)],
            decoder=async_json_decoder[BuildResponse],
            error_mapper=build_status_v2_builds_build_id_status_get_error_mapper,
            request_options=request_options,
        )

    async def cancel_build_v2_builds_build_id_cancel_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, CancelBuildV2BuildsBuildIdCancelPostErrorBody]:
        """Cancel an in-progress build.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/cancel"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[BuildResponse],
            error_mapper=cancel_build_v2_builds_build_id_cancel_post_error_mapper,
            request_options=request_options,
        )

    async def download_build_source_v2_builds_build_id_source_download_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourceDownloadResponse, DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody]:
        """Create a short-lived presigned download URL for a file in a build's source tree.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source/download"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=async_json_decoder[BuildSourceDownloadResponse],
            error_mapper=download_build_source_v2_builds_build_id_source_download_get_error_mapper,
            request_options=request_options,
        )

    async def download_build_workspace_v2_builds_build_id_workspace_download_get(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody]:
        """Stream a build's captured workspace as a zip archive.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace/download"),
            path_params=[param[UUID]("build_id", build_id)],
            decoder=async_json_decoder[Any],
            error_mapper=download_build_workspace_v2_builds_build_id_workspace_download_get_error_mapper,
            request_options=request_options,
        )

    async def list_build_source_v2_builds_build_id_source_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildSourceListResponse, ListBuildSourceV2BuildsBuildIdSourceGetErrorBody]:
        """List files and directories at a path in a build's expanded source tree.

        Readers outside the owning team see only the latest build of a public environment whose owner published its
        source.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[
                param[str | None]("path", path), param[str | None]("cursor", cursor), param[int | None]("limit", limit)
            ],
            decoder=async_json_decoder[BuildSourceListResponse],
            error_mapper=list_build_source_v2_builds_build_id_source_get_error_mapper,
            request_options=request_options,
        )

    async def list_build_workspace_v2_builds_build_id_workspace_get(
        self,
        build_id: UUID,
        *,
        path: str | None = "",
        cursor: str | None = None,
        limit: int | None = 100,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildWorkspaceListResponse, ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody]:
        """List files and directories at a path in a build's captured workspace.

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            cursor: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[
                param[str | None]("path", path), param[str | None]("cursor", cursor), param[int | None]("limit", limit)
            ],
            decoder=async_json_decoder[BuildWorkspaceListResponse],
            error_mapper=list_build_workspace_v2_builds_build_id_workspace_get_error_mapper,
            request_options=request_options,
        )

    async def list_builds_v2_builds_get(
        self, registry_id: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildListResponse, ListBuildsV2BuildsGetErrorBody]:
        """List builds for an environment registry, newest first.

        Args:
            registry_id: Filter builds to this registry
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds"),
            query_params=[param[UUID]("registry_id", registry_id), param[int | None]("limit", limit)],
            decoder=async_json_decoder[BuildListResponse],
            error_mapper=list_builds_v2_builds_get_error_mapper,
            request_options=request_options,
        )

    async def lookup_builds_v2_builds_lookup_post(
        self,
        body: BuildLookupRequest | BuildLookupRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildLookupResponse, LookupBuildsV2BuildsLookupPostErrorBody]:
        """Find the team's builds whose source has one of the given content digests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildLookupRequest | BuildLookupRequestDict](body),
            decoder=async_json_decoder[BuildLookupResponse],
            error_mapper=lookup_builds_v2_builds_lookup_post_error_mapper,
            request_options=request_options,
        )

    async def preview_build_source_v2_builds_build_id_source_preview_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody]:
        """Return the text content of a file in a build's source tree (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/source/preview"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=async_json_decoder[BuildSourcePreviewResponse],
            error_mapper=preview_build_source_v2_builds_build_id_source_preview_get_error_mapper,
            request_options=request_options,
        )

    async def preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        self, build_id: UUID, path: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody]:
        """Return the text content of a captured workspace file (1 MiB cap, text only).

        Args:
            build_id: Value sent with the request.
            path: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/builds/{build_id}/workspace/preview"),
            path_params=[param[UUID]("build_id", build_id)],
            query_params=[param[str]("path", path)],
            decoder=async_json_decoder[BuildSourcePreviewResponse],
            error_mapper=preview_build_workspace_v2_builds_build_id_workspace_preview_get_error_mapper,
            request_options=request_options,
        )

    async def register_build_source_v2_builds_register_post(
        self,
        body: BuildRegisterRequest | BuildRegisterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildRegisterResponse, RegisterBuildSourceV2BuildsRegisterPostErrorBody]:
        """Record an uploaded build context as an unbuilt build of an environment.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/register"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildRegisterRequest | BuildRegisterRequestDict](body),
            decoder=async_json_decoder[BuildRegisterResponse],
            error_mapper=register_build_source_v2_builds_register_post_error_mapper,
            request_options=request_options,
        )

    async def reindex_build_source_v2_builds_build_id_source_reindex_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody]:
        """Request a new source index after an indexing failure. Requires build edit access.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/source/reindex"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=reindex_build_source_v2_builds_build_id_source_reindex_post_error_mapper,
            request_options=request_options,
        )

    async def set_latest_build_v2_builds_build_id_set_latest_post(
        self, build_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildResponse, SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody]:
        """Pin a successful build as its registry's latest build.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/{build_id}/set-latest"),
            path_params=[param[UUID]("build_id", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[BuildResponse],
            error_mapper=set_latest_build_v2_builds_build_id_set_latest_post_error_mapper,
            request_options=request_options,
        )

    async def trigger_build_v2_builds_trigger_direct_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerDirectPostErrorBody]:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/trigger-direct"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildTriggerRequest | BuildTriggerRequestDict](body),
            decoder=async_json_decoder[BuildResponse],
            error_mapper=trigger_build_v2_builds_trigger_direct_post_error_mapper,
            request_options=request_options,
        )

    async def trigger_build_v2_builds_trigger_post(
        self,
        body: BuildTriggerRequest | BuildTriggerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerPostErrorBody]:
        """Trigger an environment build from a previously uploaded build context.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/trigger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuildTriggerRequest | BuildTriggerRequestDict](body),
            decoder=async_json_decoder[BuildResponse],
            error_mapper=trigger_build_v2_builds_trigger_post_error_mapper,
            request_options=request_options,
        )

    async def upload_url_v2_builds_upload_url_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BuildUploadUrlResponse, UploadUrlV2BuildsUploadUrlPostErrorBody]:
        """Create a presigned S3 URL for uploading a build context, with a new build id.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/builds/upload-url"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[BuildUploadUrlResponse],
            error_mapper=upload_url_v2_builds_upload_url_post_error_mapper,
            request_options=request_options,
        )
