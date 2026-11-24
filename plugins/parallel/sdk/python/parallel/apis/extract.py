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
from ..errors.extract_v1_extract_post_error import ExtractV1ExtractPostErrorBody, extract_v1_extract_post_error_mapper
from ..models.v1_extract_request import V1ExtractRequest, V1ExtractRequestDict
from ..models.v1_extract_response import V1ExtractResponse
from ..server.server import Server


class Extract:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExtractWithRawResponse(client, server, auth)

    def extract_v1_extract_post(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ExtractResponse:
        """Extracts relevant content from specific web URLs.

        The legacy Extract API reference (``/v1beta/extract`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.extract_v1_extract_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ExtractWithRawResponse:
        return self._with_raw_response


class AsyncExtract:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExtractWithRawResponse(client, server, auth)

    async def extract_v1_extract_post(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ExtractResponse:
        """Extracts relevant content from specific web URLs.

        The legacy Extract API reference (``/v1beta/extract`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Request validation error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.extract_v1_extract_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncExtractWithRawResponse:
        return self._with_raw_response


class ExtractWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def extract_v1_extract_post(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExtractResponse, ExtractV1ExtractPostErrorBody]:
        """Extracts relevant content from specific web URLs.

        The legacy Extract API reference (``/v1beta/extract`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ExtractRequest | V1ExtractRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[V1ExtractResponse],
            error_mapper=extract_v1_extract_post_error_mapper,
            request_options=request_options,
        )


class AsyncExtractWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def extract_v1_extract_post(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExtractResponse, ExtractV1ExtractPostErrorBody]:
        """Extracts relevant content from specific web URLs.

        The legacy Extract API reference (``/v1beta/extract`` endpoint) is available here, and migration guide is here.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ExtractRequest | V1ExtractRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[V1ExtractResponse],
            error_mapper=extract_v1_extract_post_error_mapper,
            request_options=request_options,
        )
