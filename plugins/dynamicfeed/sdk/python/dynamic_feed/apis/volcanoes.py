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
from ..errors.volcanoes_ep_volcanoes_get_error import (
    VolcanoesEpVolcanoesGetErrorBody,
    volcanoes_ep_volcanoes_get_error_mapper,
)
from ..server.server import Server


class Volcanoes:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VolcanoesWithRawResponse(client, server)

    def volcanoes_ep_volcanoes_get(
        self,
        *,
        status: str | None = "elevated",
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only volcanoes at
        YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each carries the ground alert
        level, aviation colour code and the official notice URL. SCOPE: US volcanoes only — the global Smithsonian GVP
        dataset is licensed non-commercial. (Requires API key.)

        Args:
            status: 'elevated' (default — only active alerts) or 'all'
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
            self._with_raw_response.volcanoes_ep_volcanoes_get(
                status=status,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> VolcanoesWithRawResponse:
        return self._with_raw_response


class AsyncVolcanoes:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVolcanoesWithRawResponse(client, server)

    async def volcanoes_ep_volcanoes_get(
        self,
        *,
        status: str | None = "elevated",
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only volcanoes at
        YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each carries the ground alert
        level, aviation colour code and the official notice URL. SCOPE: US volcanoes only — the global Smithsonian GVP
        dataset is licensed non-commercial. (Requires API key.)

        Args:
            status: 'elevated' (default — only active alerts) or 'all'
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
            await self._with_raw_response.volcanoes_ep_volcanoes_get(
                status=status,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVolcanoesWithRawResponse:
        return self._with_raw_response


class VolcanoesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def volcanoes_ep_volcanoes_get(
        self,
        *,
        status: str | None = "elevated",
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, VolcanoesEpVolcanoesGetErrorBody]:
        """Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only volcanoes at
        YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each carries the ground alert
        level, aviation colour code and the official notice URL. SCOPE: US volcanoes only — the global Smithsonian GVP
        dataset is licensed non-commercial. (Requires API key.)

        Args:
            status: 'elevated' (default — only active alerts) or 'all'
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
            url_template=self._server.default("/volcanoes"),
            query_params=[param[str | None]("status", status), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=volcanoes_ep_volcanoes_get_error_mapper,
            request_options=request_options,
        )


class AsyncVolcanoesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def volcanoes_ep_volcanoes_get(
        self,
        *,
        status: str | None = "elevated",
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, VolcanoesEpVolcanoesGetErrorBody]:
        """Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only volcanoes at
        YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each carries the ground alert
        level, aviation colour code and the official notice URL. SCOPE: US volcanoes only — the global Smithsonian GVP
        dataset is licensed non-commercial. (Requires API key.)

        Args:
            status: 'elevated' (default — only active alerts) or 'all'
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
            url_template=self._server.default("/volcanoes"),
            query_params=[param[str | None]("status", status), param[int | None]("limit", limit)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=volcanoes_ep_volcanoes_get_error_mapper,
            request_options=request_options,
        )
