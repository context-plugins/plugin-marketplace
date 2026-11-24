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
from ..errors.drought_drought_get_error import DroughtDroughtGetErrorBody, drought_drought_get_error_mapper
from ..server.server import Server


class Drought:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DroughtWithRawResponse(client, server)

    def drought_drought_get(
        self,
        *,
        area: str | None = "total",
        weeks: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless). National or by
        state; a commodity-market mover and a hazard signal. (Requires API key.)

        Args:
            area: 'total' (US national) or a state FIPS code
            weeks: Value sent with the request.
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
            self._with_raw_response.drought_drought_get(
                area=area,
                weeks=weeks,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> DroughtWithRawResponse:
        return self._with_raw_response


class AsyncDrought:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDroughtWithRawResponse(client, server)

    async def drought_drought_get(
        self,
        *,
        area: str | None = "total",
        weeks: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless). National or by
        state; a commodity-market mover and a hazard signal. (Requires API key.)

        Args:
            area: 'total' (US national) or a state FIPS code
            weeks: Value sent with the request.
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
            await self._with_raw_response.drought_drought_get(
                area=area,
                weeks=weeks,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDroughtWithRawResponse:
        return self._with_raw_response


class DroughtWithRawResponse(BaseRawResponse[RawClient, Server]):
    def drought_drought_get(
        self,
        *,
        area: str | None = "total",
        weeks: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DroughtDroughtGetErrorBody]:
        """US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless). National or by
        state; a commodity-market mover and a hazard signal. (Requires API key.)

        Args:
            area: 'total' (US national) or a state FIPS code
            weeks: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/drought"),
            query_params=[param[str | None]("area", area), param[int | None]("weeks", weeks)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=drought_drought_get_error_mapper,
            request_options=request_options,
        )


class AsyncDroughtWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def drought_drought_get(
        self,
        *,
        area: str | None = "total",
        weeks: int | None = 6,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DroughtDroughtGetErrorBody]:
        """US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless). National or by
        state; a commodity-market mover and a hazard signal. (Requires API key.)

        Args:
            area: 'total' (US national) or a state FIPS code
            weeks: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/drought"),
            query_params=[param[str | None]("area", area), param[int | None]("weeks", weeks)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=drought_drought_get_error_mapper,
            request_options=request_options,
        )
