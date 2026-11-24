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
from ..errors.get_api_v2_me_error import GetApiV2MeErrorBody, get_api_v2_me_error_mapper
from ..errors.me_error import MeErrorBody, me_error_mapper
from ..models.health import Health
from ..models.success_envelope import SuccessEnvelope
from ..server.server import Server


class System:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SystemWithRawResponse(client, server, auth)

    def get_api_v2_health(self, *, request_options: RequestOptionsOrDict | None = None) -> Health:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v2_health(request_options=request_options))

    def get_api_v2_me(self, *, request_options: RequestOptionsOrDict | None = None) -> SuccessEnvelope:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(self._with_raw_response.get_api_v2_me(request_options=request_options))

    def health_check(self, *, request_options: RequestOptionsOrDict | None = None) -> Health:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.health_check(request_options=request_options))

    def me(self, *, request_options: RequestOptionsOrDict | None = None) -> SuccessEnvelope:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(self._with_raw_response.me(request_options=request_options))

    @property
    def with_raw_response(self) -> SystemWithRawResponse:
        return self._with_raw_response


class AsyncSystem:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSystemWithRawResponse(client, server, auth)

    async def get_api_v2_health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Health:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v2_health(request_options=request_options))

    async def get_api_v2_me(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SuccessEnvelope:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(await self._with_raw_response.get_api_v2_me(request_options=request_options))

    async def health_check(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Health:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.health_check(request_options=request_options))

    async def me(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SuccessEnvelope:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Error ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(await self._with_raw_response.me(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSystemWithRawResponse:
        return self._with_raw_response


class SystemWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v2_health(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, RawError]:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/health"),
            decoder=json_decoder[Health],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v2_me(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessEnvelope, GetApiV2MeErrorBody]:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=get_api_v2_me_error_mapper,
            request_options=request_options,
        )

    def health_check(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Health, RawError]:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/health"),
            decoder=json_decoder[Health],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def me(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuccessEnvelope, MeErrorBody]:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessEnvelope],
            error_mapper=me_error_mapper,
            request_options=request_options,
        )


class AsyncSystemWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v2_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, RawError]:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/health"),
            decoder=async_json_decoder[Health],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v2_me(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessEnvelope, GetApiV2MeErrorBody]:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=get_api_v2_me_error_mapper,
            request_options=request_options,
        )

    async def health_check(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, RawError]:
        """Public liveness probe for uptime monitoring. Returns 200 whenever the API is serving. No authentication
        required and no credits used.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/health"),
            decoder=async_json_decoder[Health],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def me(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessEnvelope, MeErrorBody]:
        """Validates the API key and returns the account's remaining credit balance. Free - never billed. Useful for
        programmatic balance checks and as a credential test in integrations.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessEnvelope],
            error_mapper=me_error_mapper,
            request_options=request_options,
        )
