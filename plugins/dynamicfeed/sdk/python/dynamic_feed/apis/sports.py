from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.sports_sports_get_error import SportsSportsGetErrorBody, sports_sports_get_error_mapper
from ..server.server import Server


class Sports:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SportsWithRawResponse(client, server)

    def sports_sports_get(
        self,
        *,
        topic: str | None = "2026 FIFA World Cup",
        days: int | None = 30,
        lang: str | None = "en",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA World Cup.
        Attention = daily Wikipedia article views by language edition, with 7-day momentum & peak; plus hosts, start/end
        dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) — this is the neutral
        global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)

        Args:
            topic: event/team/competition, e.g. '2026 FIFA World Cup'
            days: attention window in days
            lang: primary Wikipedia language edition (en, es, pt, fr, ...)
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
            self._with_raw_response.sports_sports_get(
                topic=topic,
                days=days,
                lang=lang,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    def worldcup_route_worldcup_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the homepage
        World Cup section and any agent. See also the keyless ``world_cup`` MCP tool.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.worldcup_route_worldcup_get(request_options=request_options))

    @property
    def with_raw_response(self) -> SportsWithRawResponse:
        return self._with_raw_response


class AsyncSports:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSportsWithRawResponse(client, server)

    async def sports_sports_get(
        self,
        *,
        topic: str | None = "2026 FIFA World Cup",
        days: int | None = 30,
        lang: str | None = "en",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA World Cup.
        Attention = daily Wikipedia article views by language edition, with 7-day momentum & peak; plus hosts, start/end
        dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) — this is the neutral
        global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)

        Args:
            topic: event/team/competition, e.g. '2026 FIFA World Cup'
            days: attention window in days
            lang: primary Wikipedia language edition (en, es, pt, fr, ...)
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
            await self._with_raw_response.sports_sports_get(
                topic=topic,
                days=days,
                lang=lang,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    async def worldcup_route_worldcup_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the homepage
        World Cup section and any agent. See also the keyless ``world_cup`` MCP tool.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.worldcup_route_worldcup_get(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSportsWithRawResponse:
        return self._with_raw_response


class SportsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def sports_sports_get(
        self,
        *,
        topic: str | None = "2026 FIFA World Cup",
        days: int | None = 30,
        lang: str | None = "en",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SportsSportsGetErrorBody]:
        """Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA World Cup.
        Attention = daily Wikipedia article views by language edition, with 7-day momentum & peak; plus hosts, start/end
        dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) — this is the neutral
        global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)

        Args:
            topic: event/team/competition, e.g. '2026 FIFA World Cup'
            days: attention window in days
            lang: primary Wikipedia language edition (en, es, pt, fr, ...)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sports"),
            query_params=[
                param[str | None]("topic", topic), param[int | None]("days", days), param[str | None]("lang", lang)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=sports_sports_get_error_mapper,
            request_options=request_options,
        )

    def worldcup_route_worldcup_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the homepage
        World Cup section and any agent. See also the keyless ``world_cup`` MCP tool.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/worldcup"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSportsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def sports_sports_get(
        self,
        *,
        topic: str | None = "2026 FIFA World Cup",
        days: int | None = 30,
        lang: str | None = "en",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SportsSportsGetErrorBody]:
        """Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA World Cup.
        Attention = daily Wikipedia article views by language edition, with 7-day momentum & peak; plus hosts, start/end
        dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) — this is the neutral
        global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)

        Args:
            topic: event/team/competition, e.g. '2026 FIFA World Cup'
            days: attention window in days
            lang: primary Wikipedia language edition (en, es, pt, fr, ...)
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sports"),
            query_params=[
                param[str | None]("topic", topic), param[int | None]("days", days), param[str | None]("lang", lang)
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=sports_sports_get_error_mapper,
            request_options=request_options,
        )

    async def worldcup_route_worldcup_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the homepage
        World Cup section and any agent. See also the keyless ``world_cup`` MCP tool.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/worldcup"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
