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
from ..errors.carbon_intensity_carbon_intensity_get_error import (
    CarbonIntensityCarbonIntensityGetErrorBody,
    carbon_intensity_carbon_intensity_get_error_mapper,
)
from ..server.server import Server


class CarbonIntensity:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CarbonIntensityWithRawResponse(client, server)

    def carbon_intensity_carbon_intensity_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless source).
        (Requires API key.)

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
            self._with_raw_response.carbon_intensity_carbon_intensity_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CarbonIntensityWithRawResponse:
        return self._with_raw_response


class AsyncCarbonIntensity:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCarbonIntensityWithRawResponse(client, server)

    async def carbon_intensity_carbon_intensity_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless source).
        (Requires API key.)

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
            await self._with_raw_response.carbon_intensity_carbon_intensity_get(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCarbonIntensityWithRawResponse:
        return self._with_raw_response


class CarbonIntensityWithRawResponse(BaseRawResponse[RawClient, Server]):
    def carbon_intensity_carbon_intensity_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CarbonIntensityCarbonIntensityGetErrorBody]:
        """GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless source).
        (Requires API key.)

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
            url_template=self._server.default("/carbon-intensity"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=carbon_intensity_carbon_intensity_get_error_mapper,
            request_options=request_options,
        )


class AsyncCarbonIntensityWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def carbon_intensity_carbon_intensity_get(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CarbonIntensityCarbonIntensityGetErrorBody]:
        """GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless source).
        (Requires API key.)

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
            url_template=self._server.default("/carbon-intensity"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=carbon_intensity_carbon_intensity_get_error_mapper,
            request_options=request_options,
        )
