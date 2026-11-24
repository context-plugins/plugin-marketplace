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
    param,
    raw_error_response,
    unwrap,
)
from ..models.company_profile import CompanyProfile
from ..server.server import Server


class Profile:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProfileWithRawResponse(client, server, auth)

    def get_company_profile(
        self, symbol: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[CompanyProfile]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company profile

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_company_profile(symbol, request_options=request_options))

    @property
    def with_raw_response(self) -> ProfileWithRawResponse:
        return self._with_raw_response


class AsyncProfile:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProfileWithRawResponse(client, server, auth)

    async def get_company_profile(
        self, symbol: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CompanyProfile]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company profile

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_company_profile(symbol, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProfileWithRawResponse:
        return self._with_raw_response


class ProfileWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_profile(
        self, symbol: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CompanyProfile], RawError]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profile/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[list[CompanyProfile]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProfileWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_profile(
        self, symbol: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CompanyProfile], RawError]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/profile/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[list[CompanyProfile]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
