from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_market_value_error import GetMarketValueErrorBody, get_market_value_error_mapper
from ..errors.get_market_value_v2_error import GetMarketValueV2ErrorBody, get_market_value_v2_error_mapper
from ..models.enums.condition import ConditionOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.marketvalue_response import MarketvalueResponse
from ..models.v2_marketvalue_response import V2MarketvalueResponse
from ..server.server import Server


class MarketValue:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MarketValueWithRawResponse(client, server, auth)

    def get_market_value(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MarketvalueResponse:
        """Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Market value retrieved.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No data found for
                this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(self._with_raw_response.get_market_value(vin, format_=format_, request_options=request_options))

    def get_market_value_v2(
        self,
        vin: str,
        *,
        state: str | None = None,
        mileage: float | None = None,
        condition: ConditionOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2MarketvalueResponse:
        """Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers,
        with optional adjustments for US state, mileage and condition.

        Args:
            vin: The 17 character long vehicle identification number.
            state: The US state of the vehicle to get the market value for.
            mileage: The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.
            condition: The overall condition of the vehicle.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Market value retrieved.

        Raises:
            ApiError: Missing/invalid VIN, mileage or condition. Missing API key, unknown/disabled API key, or inactive
                account. No data found for this VIN. API usage limit exceeded for the current billing period. Internal
                server error. Upstream market value provider is unavailable. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_market_value_v2(
                vin, state=state, mileage=mileage, condition=condition, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MarketValueWithRawResponse:
        return self._with_raw_response


class AsyncMarketValue:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMarketValueWithRawResponse(client, server, auth)

    async def get_market_value(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MarketvalueResponse:
        """Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Market value retrieved.

        Raises:
            ApiError: Missing VIN. Missing API key, unknown/disabled API key, or inactive account. No data found for
                this VIN. API usage limit exceeded for the current billing period. Internal server error. ``error`` is
                ``Error | UsageLimitError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_market_value(vin, format_=format_, request_options=request_options)
        )

    async def get_market_value_v2(
        self,
        vin: str,
        *,
        state: str | None = None,
        mileage: float | None = None,
        condition: ConditionOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2MarketvalueResponse:
        """Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers,
        with optional adjustments for US state, mileage and condition.

        Args:
            vin: The 17 character long vehicle identification number.
            state: The US state of the vehicle to get the market value for.
            mileage: The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.
            condition: The overall condition of the vehicle.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Market value retrieved.

        Raises:
            ApiError: Missing/invalid VIN, mileage or condition. Missing API key, unknown/disabled API key, or inactive
                account. No data found for this VIN. API usage limit exceeded for the current billing period. Internal
                server error. Upstream market value provider is unavailable. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_market_value_v2(
                vin, state=state, mileage=mileage, condition=condition, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketValueWithRawResponse:
        return self._with_raw_response


class MarketValueWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_market_value(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MarketvalueResponse, GetMarketValueErrorBody]:
        """Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/marketvalue"),
            query_params=[param[str]("vin", vin), param[FormatOrStr | None]("format", format_)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[MarketvalueResponse],
            error_mapper=get_market_value_error_mapper,
            request_options=request_options,
        )

    def get_market_value_v2(
        self,
        vin: str,
        *,
        state: str | None = None,
        mileage: float | None = None,
        condition: ConditionOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2MarketvalueResponse, GetMarketValueV2ErrorBody]:
        """Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers,
        with optional adjustments for US state, mileage and condition.

        Args:
            vin: The 17 character long vehicle identification number.
            state: The US state of the vehicle to get the market value for.
            mileage: The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.
            condition: The overall condition of the vehicle.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/marketvalue"),
            query_params=[
                param[str]("vin", vin),
                param[str | None]("state", state),
                param[float | None]("mileage", mileage),
                param[ConditionOrStr | None]("condition", condition),
            ],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[V2MarketvalueResponse],
            error_mapper=get_market_value_v2_error_mapper,
            request_options=request_options,
        )


class AsyncMarketValueWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_market_value(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MarketvalueResponse, GetMarketValueErrorBody]:
        """Get the market value of a vehicle by VIN, including retail, trade-in and auction values.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/marketvalue"),
            query_params=[param[str]("vin", vin), param[FormatOrStr | None]("format", format_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[MarketvalueResponse],
            error_mapper=get_market_value_error_mapper,
            request_options=request_options,
        )

    async def get_market_value_v2(
        self,
        vin: str,
        *,
        state: str | None = None,
        mileage: float | None = None,
        condition: ConditionOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2MarketvalueResponse, GetMarketValueV2ErrorBody]:
        """Get detailed market values for a VIN, including wholesale, retail and trade-in values across condition tiers,
        with optional adjustments for US state, mileage and condition.

        Args:
            vin: The 17 character long vehicle identification number.
            state: The US state of the vehicle to get the market value for.
            mileage: The current mileage of the vehicle used to adjust the market value. Must be a valid numeric value.
            condition: The overall condition of the vehicle.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/marketvalue"),
            query_params=[
                param[str]("vin", vin),
                param[str | None]("state", state),
                param[float | None]("mileage", mileage),
                param[ConditionOrStr | None]("condition", condition),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[V2MarketvalueResponse],
            error_mapper=get_market_value_v2_error_mapper,
            request_options=request_options,
        )
