from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_project_upload_url_error import GetProjectUploadUrlErrorBody, get_project_upload_url_error_mapper
from ..models.upload_url_response import UploadUrlResponse
from ..server.server import Server


class FileUploads:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FileUploadsWithRawResponse(client, server, auth)

    def get_project_upload_url(self, *, request_options: RequestOptionsOrDict | None = None) -> UploadUrlResponse:
        """Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to
        upload your build package before triggering a deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A pre-signed upload URL for project files.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_project_upload_url(request_options=request_options))

    @property
    def with_raw_response(self) -> FileUploadsWithRawResponse:
        return self._with_raw_response


class AsyncFileUploads:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFileUploadsWithRawResponse(client, server, auth)

    async def get_project_upload_url(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UploadUrlResponse:
        """Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to
        upload your build package before triggering a deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A pre-signed upload URL for project files.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_project_upload_url(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFileUploadsWithRawResponse:
        return self._with_raw_response


class FileUploadsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_project_upload_url(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UploadUrlResponse, GetProjectUploadUrlErrorBody]:
        """Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to
        upload your build package before triggering a deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/upload-url"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[UploadUrlResponse],
            error_mapper=get_project_upload_url_error_mapper,
            request_options=request_options,
        )


class AsyncFileUploadsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_project_upload_url(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UploadUrlResponse, GetProjectUploadUrlErrorBody]:
        """Generates a pre-signed URL valid for 10 minutes for uploading a project build artifact file. Use this URL to
        upload your build package before triggering a deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/projects/upload-url"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[UploadUrlResponse],
            error_mapper=get_project_upload_url_error_mapper,
            request_options=request_options,
        )
