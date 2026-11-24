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
from ..errors.global_disasters_ep_global_disasters_get_error import (
    GlobalDisastersEpGlobalDisastersGetErrorBody,
    global_disasters_ep_global_disasters_get_error_mapper,
)
from ..server.server import Server


class GlobalDisasters:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = GlobalDisastersWithRawResponse(client, server)

    def global_disasters_ep_global_disasters_get(
        self,
        *,
        alert_level: str | None = "Orange;Red",
        event_type: str | None = None,
        country: str | None = None,
        days: int | None = 7,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods, droughts, volcanoes
        — with a Green/Orange/Red humanitarian-impact level + affected countries. The 'how bad, where, who's affected'
        severity layer. (Requires API key.)

        Args:
            alert_level: Green;Orange;Red (semicolon-separated)
            event_type: EQ | TC | FL | DR | VO | WF
            country: country name or ISO3 (e.g. PHL)
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
            self._with_raw_response.global_disasters_ep_global_disasters_get(
                alert_level=alert_level,
                event_type=event_type,
                country=country,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> GlobalDisastersWithRawResponse:
        return self._with_raw_response


class AsyncGlobalDisasters:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncGlobalDisastersWithRawResponse(client, server)

    async def global_disasters_ep_global_disasters_get(
        self,
        *,
        alert_level: str | None = "Orange;Red",
        event_type: str | None = None,
        country: str | None = None,
        days: int | None = 7,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods, droughts, volcanoes
        — with a Green/Orange/Red humanitarian-impact level + affected countries. The 'how bad, where, who's affected'
        severity layer. (Requires API key.)

        Args:
            alert_level: Green;Orange;Red (semicolon-separated)
            event_type: EQ | TC | FL | DR | VO | WF
            country: country name or ISO3 (e.g. PHL)
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
            await self._with_raw_response.global_disasters_ep_global_disasters_get(
                alert_level=alert_level,
                event_type=event_type,
                country=country,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGlobalDisastersWithRawResponse:
        return self._with_raw_response


class GlobalDisastersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def global_disasters_ep_global_disasters_get(
        self,
        *,
        alert_level: str | None = "Orange;Red",
        event_type: str | None = None,
        country: str | None = None,
        days: int | None = 7,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GlobalDisastersEpGlobalDisastersGetErrorBody]:
        """Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods, droughts, volcanoes
        — with a Green/Orange/Red humanitarian-impact level + affected countries. The 'how bad, where, who's affected'
        severity layer. (Requires API key.)

        Args:
            alert_level: Green;Orange;Red (semicolon-separated)
            event_type: EQ | TC | FL | DR | VO | WF
            country: country name or ISO3 (e.g. PHL)
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
            url_template=self._server.default("/global-disasters"),
            query_params=[
                param[str | None]("alert_level", alert_level),
                param[str | None]("event_type", event_type),
                param[str | None]("country", country),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=global_disasters_ep_global_disasters_get_error_mapper,
            request_options=request_options,
        )


class AsyncGlobalDisastersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def global_disasters_ep_global_disasters_get(
        self,
        *,
        alert_level: str | None = "Orange;Red",
        event_type: str | None = None,
        country: str | None = None,
        days: int | None = 7,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GlobalDisastersEpGlobalDisastersGetErrorBody]:
        """Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods, droughts, volcanoes
        — with a Green/Orange/Red humanitarian-impact level + affected countries. The 'how bad, where, who's affected'
        severity layer. (Requires API key.)

        Args:
            alert_level: Green;Orange;Red (semicolon-separated)
            event_type: EQ | TC | FL | DR | VO | WF
            country: country name or ISO3 (e.g. PHL)
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
            url_template=self._server.default("/global-disasters"),
            query_params=[
                param[str | None]("alert_level", alert_level),
                param[str | None]("event_type", event_type),
                param[str | None]("country", country),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=global_disasters_ep_global_disasters_get_error_mapper,
            request_options=request_options,
        )
