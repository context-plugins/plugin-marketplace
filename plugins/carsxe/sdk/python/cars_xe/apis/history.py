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
from ..errors.get_vehicle_history_error import GetVehicleHistoryErrorBody, get_vehicle_history_error_mapper
from ..models.enums.format import Format, FormatOrStr
from ..models.history_response import HistoryResponse
from ..server.server import Server


class History:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HistoryWithRawResponse(client, server, auth)

    def get_vehicle_history(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> HistoryResponse:
        """Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            History report retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. This API
                key has been blocked for the History API. No history data found for this VIN. API usage limit exceeded
                for the current billing period. Internal server error. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_history(vin, format_=format_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> HistoryWithRawResponse:
        return self._with_raw_response


class AsyncHistory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHistoryWithRawResponse(client, server, auth)

    async def get_vehicle_history(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> HistoryResponse:
        """Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            History report retrieved.

        Raises:
            ApiError: Missing or invalid VIN. Missing API key, unknown/disabled API key, or inactive account. This API
                key has been blocked for the History API. No history data found for this VIN. API usage limit exceeded
                for the current billing period. Internal server error. ``error`` is ``Error | UsageLimitError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_history(vin, format_=format_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncHistoryWithRawResponse:
        return self._with_raw_response


class HistoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_history(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoryResponse, GetVehicleHistoryErrorBody]:
        """Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/history"),
            query_params=[param[str]("vin", vin), param[FormatOrStr | None]("format", format_)],
            auth_scheme=AnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=json_decoder[HistoryResponse],
            error_mapper=get_vehicle_history_error_mapper,
            request_options=request_options,
        )


class AsyncHistoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_history(
        self,
        vin: str,
        *,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoryResponse, GetVehicleHistoryErrorBody]:
        """Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance records.

        Args:
            vin: The 17 character long vehicle identification number.
            format_: The format of the response. One of ``json`` or ``xml``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/history"),
            query_params=[param[str]("vin", vin), param[FormatOrStr | None]("format", format_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_query, self._auth.x402_payment),
            decoder=async_json_decoder[HistoryResponse],
            error_mapper=get_vehicle_history_error_mapper,
            request_options=request_options,
        )
