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
from ..errors.upload_page_video_error import UploadPageVideoErrorBody, upload_page_video_error_mapper
from ..models.create_response import CreateResponse
from ..models.videos_request import VideosRequest, VideosRequestDict
from ..server.server import Server


class Videos:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VideosWithRawResponse(client, server, auth)

    def upload_page_video(
        self,
        page_id: str,
        body: VideosRequest | VideosRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Video uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.upload_page_video(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> VideosWithRawResponse:
        return self._with_raw_response


class AsyncVideos:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVideosWithRawResponse(client, server, auth)

    async def upload_page_video(
        self,
        page_id: str,
        body: VideosRequest | VideosRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Video uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.upload_page_video(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncVideosWithRawResponse:
        return self._with_raw_response


class VideosWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def upload_page_video(
        self,
        page_id: str,
        body: VideosRequest | VideosRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, UploadPageVideoErrorBody]:
        """Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/videos"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VideosRequest | VideosRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=upload_page_video_error_mapper,
            request_options=request_options,
        )


class AsyncVideosWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def upload_page_video(
        self,
        page_id: str,
        body: VideosRequest | VideosRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, UploadPageVideoErrorBody]:
        """Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/videos"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VideosRequest | VideosRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=upload_page_video_error_mapper,
            request_options=request_options,
        )
