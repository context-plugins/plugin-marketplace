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
from ..errors.get_encryption_config_error import GetEncryptionConfigErrorBody, get_encryption_config_error_mapper
from ..models.get_encryption_config_result import GetEncryptionConfigResult
from ..server.server import Server


class EncryptionconfigApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EncryptionconfigApiWithRawResponse(client, server, auth)

    def get_encryption_config(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetEncryptionConfigResult:
        """Retrieves the current encryption configuration for X-Ray data.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_encryption_config(request_options=request_options))

    @property
    def with_raw_response(self) -> EncryptionconfigApiWithRawResponse:
        return self._with_raw_response


class AsyncEncryptionconfigApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEncryptionconfigApiWithRawResponse(client, server, auth)

    async def get_encryption_config(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetEncryptionConfigResult:
        """Retrieves the current encryption configuration for X-Ray data.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_encryption_config(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEncryptionconfigApiWithRawResponse:
        return self._with_raw_response


class EncryptionconfigApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_encryption_config(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetEncryptionConfigResult, GetEncryptionConfigErrorBody]:
        """Retrieves the current encryption configuration for X-Ray data.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/EncryptionConfig"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetEncryptionConfigResult],
            error_mapper=get_encryption_config_error_mapper,
            request_options=request_options,
        )


class AsyncEncryptionconfigApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_encryption_config(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetEncryptionConfigResult, GetEncryptionConfigErrorBody]:
        """Retrieves the current encryption configuration for X-Ray data.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/EncryptionConfig"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetEncryptionConfigResult],
            error_mapper=get_encryption_config_error_mapper,
            request_options=request_options,
        )
