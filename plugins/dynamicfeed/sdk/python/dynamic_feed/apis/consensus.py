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
from ..errors.consensus_consensus_get_error import ConsensusConsensusGetErrorBody, consensus_consensus_get_error_mapper
from ..server.server import Server


class Consensus:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ConsensusWithRawResponse(client, server)

    def consensus_consensus_get(
        self,
        *,
        symbol: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """PROPRIETARY: real-time cross-exchange price consensus — the median price across several independent venues
        plus how tightly they agree (spread in basis points), the min/max, and the per-venue breakdown. Tells an AI tool
        the real price AND whether to trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)

        Args:
            symbol: exact symbol, e.g. BTC, ETH, SOL
            limit: Value sent with the request.
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
            self._with_raw_response.consensus_consensus_get(
                symbol=symbol,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ConsensusWithRawResponse:
        return self._with_raw_response


class AsyncConsensus:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncConsensusWithRawResponse(client, server)

    async def consensus_consensus_get(
        self,
        *,
        symbol: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """PROPRIETARY: real-time cross-exchange price consensus — the median price across several independent venues
        plus how tightly they agree (spread in basis points), the min/max, and the per-venue breakdown. Tells an AI tool
        the real price AND whether to trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)

        Args:
            symbol: exact symbol, e.g. BTC, ETH, SOL
            limit: Value sent with the request.
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
            await self._with_raw_response.consensus_consensus_get(
                symbol=symbol,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncConsensusWithRawResponse:
        return self._with_raw_response


class ConsensusWithRawResponse(BaseRawResponse[RawClient, Server]):
    def consensus_consensus_get(
        self,
        *,
        symbol: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ConsensusConsensusGetErrorBody]:
        """PROPRIETARY: real-time cross-exchange price consensus — the median price across several independent venues
        plus how tightly they agree (spread in basis points), the min/max, and the per-venue breakdown. Tells an AI tool
        the real price AND whether to trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)

        Args:
            symbol: exact symbol, e.g. BTC, ETH, SOL
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/consensus"),
            query_params=[param[str | None]("symbol", symbol), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=consensus_consensus_get_error_mapper,
            request_options=request_options,
        )


class AsyncConsensusWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def consensus_consensus_get(
        self,
        *,
        symbol: str | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ConsensusConsensusGetErrorBody]:
        """PROPRIETARY: real-time cross-exchange price consensus — the median price across several independent venues
        plus how tightly they agree (spread in basis points), the min/max, and the per-venue breakdown. Tells an AI tool
        the real price AND whether to trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)

        Args:
            symbol: exact symbol, e.g. BTC, ETH, SOL
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/consensus"),
            query_params=[param[str | None]("symbol", symbol), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=consensus_consensus_get_error_mapper,
            request_options=request_options,
        )
