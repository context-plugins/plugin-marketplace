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
from ..errors.reality_check_ep_reality_check_get_error import (
    RealityCheckEpRealityCheckGetErrorBody,
    reality_check_ep_reality_check_get_error_mapper,
)
from ..server.server import Server


class RealityCheck:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RealityCheckWithRawResponse(client, server)

    def reality_check_ep_reality_check_get(
        self,
        *,
        claim: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
        outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours, software
        versions, service status. (Key on REST; same tool keyless over MCP.)

        Args:
            claim: a statement to verify, e.g. "BTC is $90,000" or "the market is open"
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
            self._with_raw_response.reality_check_ep_reality_check_get(
                claim=claim,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RealityCheckWithRawResponse:
        return self._with_raw_response


class AsyncRealityCheck:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRealityCheckWithRawResponse(client, server)

    async def reality_check_ep_reality_check_get(
        self,
        *,
        claim: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
        outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours, software
        versions, service status. (Key on REST; same tool keyless over MCP.)

        Args:
            claim: a statement to verify, e.g. "BTC is $90,000" or "the market is open"
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
            await self._with_raw_response.reality_check_ep_reality_check_get(
                claim=claim,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRealityCheckWithRawResponse:
        return self._with_raw_response


class RealityCheckWithRawResponse(BaseRawResponse[RawClient, Server]):
    def reality_check_ep_reality_check_get(
        self,
        *,
        claim: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RealityCheckEpRealityCheckGetErrorBody]:
        """Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
        outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours, software
        versions, service status. (Key on REST; same tool keyless over MCP.)

        Args:
            claim: a statement to verify, e.g. "BTC is $90,000" or "the market is open"
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reality-check"),
            query_params=[param[str | None]("claim", claim)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=reality_check_ep_reality_check_get_error_mapper,
            request_options=request_options,
        )


class AsyncRealityCheckWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def reality_check_ep_reality_check_get(
        self,
        *,
        claim: str | None = "",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RealityCheckEpRealityCheckGetErrorBody]:
        """Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
        outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours, software
        versions, service status. (Key on REST; same tool keyless over MCP.)

        Args:
            claim: a statement to verify, e.g. "BTC is $90,000" or "the market is open"
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reality-check"),
            query_params=[param[str | None]("claim", claim)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=reality_check_ep_reality_check_get_error_mapper,
            request_options=request_options,
        )
