from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.upload_ad_image_error import UploadAdImageErrorBody, upload_ad_image_error_mapper
from ..models.act_adimages_response import ActAdimagesResponse
from ..server.server import Server


class AdImages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdImagesWithRawResponse(client, server, auth)

    def upload_ad_image(
        self,
        ad_account_id: str,
        *,
        filename: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ActAdimagesResponse:
        """Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            filename: The image file to upload
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Image uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.upload_ad_image(ad_account_id, filename=filename, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AdImagesWithRawResponse:
        return self._with_raw_response


class AsyncAdImages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdImagesWithRawResponse(client, server, auth)

    async def upload_ad_image(
        self,
        ad_account_id: str,
        *,
        filename: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ActAdimagesResponse:
        """Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            filename: The image file to upload
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Image uploaded successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_ad_image(
                ad_account_id, filename=filename, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdImagesWithRawResponse:
        return self._with_raw_response


class AdImagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def upload_ad_image(
        self,
        ad_account_id: str,
        *,
        filename: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ActAdimagesResponse, UploadAdImageErrorBody]:
        """Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            filename: The image file to upload
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adimages"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("filename", filename) if filename is not None else None),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ActAdimagesResponse],
            error_mapper=upload_ad_image_error_mapper,
            request_options=request_options,
        )


class AsyncAdImagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def upload_ad_image(
        self,
        ad_account_id: str,
        *,
        filename: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ActAdimagesResponse, UploadAdImageErrorBody]:
        """Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            filename: The image file to upload
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adimages"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("filename", filename) if filename is not None else None),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ActAdimagesResponse],
            error_mapper=upload_ad_image_error_mapper,
            request_options=request_options,
        )
