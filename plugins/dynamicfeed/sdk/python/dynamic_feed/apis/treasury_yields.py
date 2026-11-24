from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.treasury_yields_treasury_yields_get_error import (
    TreasuryYieldsTreasuryYieldsGetErrorBody,
    treasury_yields_treasury_yields_get_error_mapper,
)
from ..server.server import Server


class TreasuryYields:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TreasuryYieldsWithRawResponse(client, server)

    def treasury_yields_treasury_yields_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless source, US public
        domain. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.treasury_yields_treasury_yields_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> TreasuryYieldsWithRawResponse:
        return self._with_raw_response


class AsyncTreasuryYields:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTreasuryYieldsWithRawResponse(client, server)

    async def treasury_yields_treasury_yields_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless source, US public
        domain. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.treasury_yields_treasury_yields_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTreasuryYieldsWithRawResponse:
        return self._with_raw_response


class TreasuryYieldsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def treasury_yields_treasury_yields_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TreasuryYieldsTreasuryYieldsGetErrorBody]:
        """US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless source, US public
        domain. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/treasury-yields"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=treasury_yields_treasury_yields_get_error_mapper,
            request_options=request_options,
        )


class AsyncTreasuryYieldsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def treasury_yields_treasury_yields_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, TreasuryYieldsTreasuryYieldsGetErrorBody]:
        """US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless source, US public
        domain. (Requires API key.)

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/treasury-yields"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=treasury_yields_treasury_yields_get_error_mapper,
            request_options=request_options,
        )
