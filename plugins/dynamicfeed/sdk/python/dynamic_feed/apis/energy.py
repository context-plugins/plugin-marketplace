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
from ..errors.energy_grid_energy_get_error import EnergyGridEnergyGetErrorBody, energy_grid_energy_get_error_mapper
from ..server.server import Server


class Energy:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EnergyWithRawResponse(client, server)

    def energy_grid_energy_get(
        self,
        *,
        region: str | None = "US48",
        metric: str | None = "demand",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix by
        region/operator. Hourly. (Requires API key.)

        Args:
            region: US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
            metric: demand | generation | mix
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
            self._with_raw_response.energy_grid_energy_get(
                region=region,
                metric=metric,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EnergyWithRawResponse:
        return self._with_raw_response


class AsyncEnergy:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEnergyWithRawResponse(client, server)

    async def energy_grid_energy_get(
        self,
        *,
        region: str | None = "US48",
        metric: str | None = "demand",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix by
        region/operator. Hourly. (Requires API key.)

        Args:
            region: US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
            metric: demand | generation | mix
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
            await self._with_raw_response.energy_grid_energy_get(
                region=region,
                metric=metric,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnergyWithRawResponse:
        return self._with_raw_response


class EnergyWithRawResponse(BaseRawResponse[RawClient, Server]):
    def energy_grid_energy_get(
        self,
        *,
        region: str | None = "US48",
        metric: str | None = "demand",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EnergyGridEnergyGetErrorBody]:
        """Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix by
        region/operator. Hourly. (Requires API key.)

        Args:
            region: US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
            metric: demand | generation | mix
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/energy"),
            query_params=[param[str | None]("region", region), param[str | None]("metric", metric)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=energy_grid_energy_get_error_mapper,
            request_options=request_options,
        )


class AsyncEnergyWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def energy_grid_energy_get(
        self,
        *,
        region: str | None = "US48",
        metric: str | None = "demand",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, EnergyGridEnergyGetErrorBody]:
        """Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix by
        region/operator. Hourly. (Requires API key.)

        Args:
            region: US48 (national) or a grid operator: CAISO, PJM, MISO, ERCOT, ISONE, NYISO, SPP, BPA
            metric: demand | generation | mix
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/energy"),
            query_params=[param[str | None]("region", region), param[str | None]("metric", metric)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=energy_grid_energy_get_error_mapper,
            request_options=request_options,
        )
