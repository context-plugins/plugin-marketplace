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
from ..errors.global_macro_macro_get_error import GlobalMacroMacroGetErrorBody, global_macro_macro_get_error_mapper
from ..server.server import Server


class Macro:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MacroWithRawResponse(client, server)

    def global_macro_macro_get(
        self,
        *,
        country: str | None = "",
        indicator: str | None = "all",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only macro.
        (Requires API key.)

        Args:
            country: ISO code (US, GB, DE, IN, BR, JP, CN) or country name
            indicator: gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports |
                current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
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
            self._with_raw_response.global_macro_macro_get(
                country=country,
                indicator=indicator,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MacroWithRawResponse:
        return self._with_raw_response


class AsyncMacro:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMacroWithRawResponse(client, server)

    async def global_macro_macro_get(
        self,
        *,
        country: str | None = "",
        indicator: str | None = "all",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only macro.
        (Requires API key.)

        Args:
            country: ISO code (US, GB, DE, IN, BR, JP, CN) or country name
            indicator: gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports |
                current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
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
            await self._with_raw_response.global_macro_macro_get(
                country=country,
                indicator=indicator,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMacroWithRawResponse:
        return self._with_raw_response


class MacroWithRawResponse(BaseRawResponse[RawClient, Server]):
    def global_macro_macro_get(
        self,
        *,
        country: str | None = "",
        indicator: str | None = "all",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GlobalMacroMacroGetErrorBody]:
        """Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only macro.
        (Requires API key.)

        Args:
            country: ISO code (US, GB, DE, IN, BR, JP, CN) or country name
            indicator: gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports |
                current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/macro"),
            query_params=[param[str | None]("country", country), param[str | None]("indicator", indicator)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=global_macro_macro_get_error_mapper,
            request_options=request_options,
        )


class AsyncMacroWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def global_macro_macro_get(
        self,
        *,
        country: str | None = "",
        indicator: str | None = "all",
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GlobalMacroMacroGetErrorBody]:
        """Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the China-only macro.
        (Requires API key.)

        Args:
            country: ISO code (US, GB, DE, IN, BR, JP, CN) or country name
            indicator: gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports |
                current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/macro"),
            query_params=[param[str | None]("country", country), param[str | None]("indicator", indicator)],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=global_macro_macro_get_error_mapper,
            request_options=request_options,
        )
