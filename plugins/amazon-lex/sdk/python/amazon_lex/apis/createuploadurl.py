from __future__ import annotations

from typing import Any
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
from ..errors.create_upload_url_error import CreateUploadUrlErrorBody, create_upload_url_error_mapper
from ..models.create_upload_url_response import CreateUploadUrlResponse
from ..server.server import Server


class Createuploadurl:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CreateuploadurlWithRawResponse(client, server, auth)

    def create_upload_url(
        self, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CreateUploadUrlResponse:
        """Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | ResourceNotFoundException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.create_upload_url(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CreateuploadurlWithRawResponse:
        return self._with_raw_response


class AsyncCreateuploadurl:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCreateuploadurlWithRawResponse(client, server, auth)

    async def create_upload_url(
        self, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreateUploadUrlResponse:
        """Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | ResourceNotFoundException | ConflictException |
                ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.create_upload_url(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCreateuploadurlWithRawResponse:
        return self._with_raw_response


class CreateuploadurlWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_upload_url(
        self, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateUploadUrlResponse, CreateUploadUrlErrorBody]:
        """Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/createuploadurl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateUploadUrlResponse],
            error_mapper=create_upload_url_error_mapper,
            request_options=request_options,
        )


class AsyncCreateuploadurlWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_upload_url(
        self, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreateUploadUrlResponse, CreateUploadUrlErrorBody]:
        """Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_amazon_lex_model_building_v2_bots_api("/createuploadurl"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateUploadUrlResponse],
            error_mapper=create_upload_url_error_mapper,
            request_options=request_options,
        )
