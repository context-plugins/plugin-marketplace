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
from ..errors.natural_events_natural_events_get_error import (
    NaturalEventsNaturalEventsGetErrorBody,
    natural_events_natural_events_get_error_mapper,
)
from ..server.server import Server


class NaturalEvents:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NaturalEventsWithRawResponse(client, server)

    def natural_events_natural_events_get(
        self,
        *,
        category: str | None = None,
        days: int | None = 30,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods, sea/lake ice.
        "What natural events are happening on Earth right now?". (Requires API key.)

        Args:
            category: wildfires | severeStorms | volcanoes | floods | seaLakeIce
            days: look-back window in days
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
            self._with_raw_response.natural_events_natural_events_get(
                category=category,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NaturalEventsWithRawResponse:
        return self._with_raw_response


class AsyncNaturalEvents:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNaturalEventsWithRawResponse(client, server)

    async def natural_events_natural_events_get(
        self,
        *,
        category: str | None = None,
        days: int | None = 30,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods, sea/lake ice.
        "What natural events are happening on Earth right now?". (Requires API key.)

        Args:
            category: wildfires | severeStorms | volcanoes | floods | seaLakeIce
            days: look-back window in days
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
            await self._with_raw_response.natural_events_natural_events_get(
                category=category,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNaturalEventsWithRawResponse:
        return self._with_raw_response


class NaturalEventsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def natural_events_natural_events_get(
        self,
        *,
        category: str | None = None,
        days: int | None = 30,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, NaturalEventsNaturalEventsGetErrorBody]:
        """Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods, sea/lake ice.
        "What natural events are happening on Earth right now?". (Requires API key.)

        Args:
            category: wildfires | severeStorms | volcanoes | floods | seaLakeIce
            days: look-back window in days
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
            url_template=self._server.default("/natural-events"),
            query_params=[
                param[str | None]("category", category),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=natural_events_natural_events_get_error_mapper,
            request_options=request_options,
        )


class AsyncNaturalEventsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def natural_events_natural_events_get(
        self,
        *,
        category: str | None = None,
        days: int | None = 30,
        limit: int | None = 30,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, NaturalEventsNaturalEventsGetErrorBody]:
        """Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods, sea/lake ice.
        "What natural events are happening on Earth right now?". (Requires API key.)

        Args:
            category: wildfires | severeStorms | volcanoes | floods | seaLakeIce
            days: look-back window in days
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
            url_template=self._server.default("/natural-events"),
            query_params=[
                param[str | None]("category", category),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=natural_events_natural_events_get_error_mapper,
            request_options=request_options,
        )
