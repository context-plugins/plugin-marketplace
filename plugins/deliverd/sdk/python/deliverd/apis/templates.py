from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.api_v1_templates_response import ApiV1TemplatesResponse
from ..server.server import Server


class Templates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TemplatesWithRawResponse(client, server, auth)

    def get_api_v1_templates(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1TemplatesResponse:
        """Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Templates

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_templates(request_options=request_options))

    @property
    def with_raw_response(self) -> TemplatesWithRawResponse:
        return self._with_raw_response


class AsyncTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTemplatesWithRawResponse(client, server, auth)

    async def get_api_v1_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1TemplatesResponse:
        """Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Templates

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_templates(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTemplatesWithRawResponse:
        return self._with_raw_response


class TemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_templates(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TemplatesResponse, RawError]:
        """Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/templates"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1TemplatesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_templates(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1TemplatesResponse, RawError]:
        """Reports the organisation offers as starting points. Copy one with POST /reports/{idOrSlug}/copy.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/templates"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1TemplatesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
