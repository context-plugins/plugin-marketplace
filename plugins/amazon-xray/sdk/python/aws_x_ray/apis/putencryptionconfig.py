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
from ..errors.put_encryption_config_error import PutEncryptionConfigErrorBody, put_encryption_config_error_mapper
from ..models.put_encryption_config_request import PutEncryptionConfigRequest, PutEncryptionConfigRequestDict
from ..models.put_encryption_config_result import PutEncryptionConfigResult
from ..server.server import Server


class Putencryptionconfig:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PutencryptionconfigWithRawResponse(client, server, auth)

    def put_encryption_config(
        self,
        *,
        body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutEncryptionConfigResult:
        """Updates the encryption configuration for X-Ray data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.put_encryption_config(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PutencryptionconfigWithRawResponse:
        return self._with_raw_response


class AsyncPutencryptionconfig:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPutencryptionconfigWithRawResponse(client, server, auth)

    async def put_encryption_config(
        self,
        *,
        body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutEncryptionConfigResult:
        """Updates the encryption configuration for X-Ray data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.put_encryption_config(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPutencryptionconfigWithRawResponse:
        return self._with_raw_response


class PutencryptionconfigWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def put_encryption_config(
        self,
        *,
        body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutEncryptionConfigResult, PutEncryptionConfigErrorBody]:
        """Updates the encryption configuration for X-Ray data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PutEncryptionConfig"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutEncryptionConfigResult],
            error_mapper=put_encryption_config_error_mapper,
            request_options=request_options,
        )


class AsyncPutencryptionconfigWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def put_encryption_config(
        self,
        *,
        body: PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutEncryptionConfigResult, PutEncryptionConfigErrorBody]:
        """Updates the encryption configuration for X-Ray data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PutEncryptionConfig"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutEncryptionConfigRequest | PutEncryptionConfigRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutEncryptionConfigResult],
            error_mapper=put_encryption_config_error_mapper,
            request_options=request_options,
        )
