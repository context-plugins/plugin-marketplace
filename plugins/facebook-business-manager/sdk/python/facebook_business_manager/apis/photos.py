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
from ..errors.upload_page_photo_error import UploadPagePhotoErrorBody, upload_page_photo_error_mapper
from ..models.create_response import CreateResponse
from ..models.photos_request import PhotosRequest, PhotosRequestDict
from ..server.server import Server


class Photos:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PhotosWithRawResponse(client, server, auth)

    def upload_page_photo(
        self,
        page_id: str,
        body: PhotosRequest | PhotosRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in
        posts.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Photo uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.upload_page_photo(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PhotosWithRawResponse:
        return self._with_raw_response


class AsyncPhotos:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPhotosWithRawResponse(client, server, auth)

    async def upload_page_photo(
        self,
        page_id: str,
        body: PhotosRequest | PhotosRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in
        posts.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Photo uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token or
                insufficient permissions ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.upload_page_photo(page_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPhotosWithRawResponse:
        return self._with_raw_response


class PhotosWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def upload_page_photo(
        self,
        page_id: str,
        body: PhotosRequest | PhotosRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, UploadPagePhotoErrorBody]:
        """Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in
        posts.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/photos"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PhotosRequest | PhotosRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=upload_page_photo_error_mapper,
            request_options=request_options,
        )


class AsyncPhotosWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def upload_page_photo(
        self,
        page_id: str,
        body: PhotosRequest | PhotosRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, UploadPagePhotoErrorBody]:
        """Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in
        posts.

        Args:
            page_id: The ID of the Facebook Page
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{page_id}/photos"),
            path_params=[param[str]("page_id", page_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PhotosRequest | PhotosRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=upload_page_photo_error_mapper,
            request_options=request_options,
        )
