from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.duedatecalculator_error import DuedatecalculatorErrorBody, duedatecalculator_error_mapper
from ..errors.menstrualcycle_error import MenstrualcycleErrorBody, menstrualcycle_error_mapper
from ..errors.ovulationcalculator_error import OvulationcalculatorErrorBody, ovulationcalculator_error_mapper
from ..models.v1_duedatecalculator_response import V1DuedatecalculatorResponse
from ..models.v1_menstrualcycle_response import V1MenstrualcycleResponse
from ..models.v1_ovulationcalculator_response import V1OvulationcalculatorResponse
from ..server.server import Server


class Lifestyle:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LifestyleWithRawResponse(client, server, auth)

    def duedatecalculator(
        self, last_period: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DuedatecalculatorResponse:
        """Calculate pregnancy due date from first day of last menstrual period

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.duedatecalculator(last_period, request_options=request_options))

    def menstrualcycle(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        period_length: int | None = None,
        cycles: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MenstrualcycleResponse:
        """Calculate future menstrual cycles and phases

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average cycle length in days
            period_length: Average period duration in days
            cycles: Number of future cycles to calculate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.menstrualcycle(
                last_period,
                cycle_length=cycle_length,
                period_length=period_length,
                cycles=cycles,
                request_options=request_options,
            ),
        )

    def ovulationcalculator(
        self, last_period: str, *, cycle_length: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1OvulationcalculatorResponse:
        """Calculate ovulation date and fertile window

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average menstrual cycle length in days
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.ovulationcalculator(
                last_period, cycle_length=cycle_length, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> LifestyleWithRawResponse:
        return self._with_raw_response


class AsyncLifestyle:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLifestyleWithRawResponse(client, server, auth)

    async def duedatecalculator(
        self, last_period: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DuedatecalculatorResponse:
        """Calculate pregnancy due date from first day of last menstrual period

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.duedatecalculator(last_period, request_options=request_options))

    async def menstrualcycle(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        period_length: int | None = None,
        cycles: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MenstrualcycleResponse:
        """Calculate future menstrual cycles and phases

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average cycle length in days
            period_length: Average period duration in days
            cycles: Number of future cycles to calculate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.menstrualcycle(
                last_period,
                cycle_length=cycle_length,
                period_length=period_length,
                cycles=cycles,
                request_options=request_options,
            ),
        )

    async def ovulationcalculator(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1OvulationcalculatorResponse:
        """Calculate ovulation date and fertile window

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average menstrual cycle length in days
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.ovulationcalculator(
                last_period, cycle_length=cycle_length, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLifestyleWithRawResponse:
        return self._with_raw_response


class LifestyleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def duedatecalculator(
        self, last_period: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DuedatecalculatorResponse, DuedatecalculatorErrorBody]:
        """Calculate pregnancy due date from first day of last menstrual period

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/duedatecalculator"),
            query_params=[param[str]("last_period", last_period)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DuedatecalculatorResponse],
            error_mapper=duedatecalculator_error_mapper,
            request_options=request_options,
        )

    def menstrualcycle(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        period_length: int | None = None,
        cycles: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MenstrualcycleResponse, MenstrualcycleErrorBody]:
        """Calculate future menstrual cycles and phases

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average cycle length in days
            period_length: Average period duration in days
            cycles: Number of future cycles to calculate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/menstrualcycle"),
            query_params=[
                param[str]("last_period", last_period),
                param[int | None]("cycle_length", cycle_length),
                param[int | None]("period_length", period_length),
                param[int | None]("cycles", cycles),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MenstrualcycleResponse],
            error_mapper=menstrualcycle_error_mapper,
            request_options=request_options,
        )

    def ovulationcalculator(
        self, last_period: str, *, cycle_length: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1OvulationcalculatorResponse, OvulationcalculatorErrorBody]:
        """Calculate ovulation date and fertile window

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average menstrual cycle length in days
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ovulationcalculator"),
            query_params=[param[str]("last_period", last_period), param[int | None]("cycle_length", cycle_length)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1OvulationcalculatorResponse],
            error_mapper=ovulationcalculator_error_mapper,
            request_options=request_options,
        )


class AsyncLifestyleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def duedatecalculator(
        self, last_period: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DuedatecalculatorResponse, DuedatecalculatorErrorBody]:
        """Calculate pregnancy due date from first day of last menstrual period

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/duedatecalculator"),
            query_params=[param[str]("last_period", last_period)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DuedatecalculatorResponse],
            error_mapper=duedatecalculator_error_mapper,
            request_options=request_options,
        )

    async def menstrualcycle(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        period_length: int | None = None,
        cycles: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MenstrualcycleResponse, MenstrualcycleErrorBody]:
        """Calculate future menstrual cycles and phases

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average cycle length in days
            period_length: Average period duration in days
            cycles: Number of future cycles to calculate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/menstrualcycle"),
            query_params=[
                param[str]("last_period", last_period),
                param[int | None]("cycle_length", cycle_length),
                param[int | None]("period_length", period_length),
                param[int | None]("cycles", cycles),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MenstrualcycleResponse],
            error_mapper=menstrualcycle_error_mapper,
            request_options=request_options,
        )

    async def ovulationcalculator(
        self,
        last_period: str,
        *,
        cycle_length: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1OvulationcalculatorResponse, OvulationcalculatorErrorBody]:
        """Calculate ovulation date and fertile window

        Args:
            last_period: First day of last menstrual period (YYYY-MM-DD)
            cycle_length: Average menstrual cycle length in days
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ovulationcalculator"),
            query_params=[param[str]("last_period", last_period), param[int | None]("cycle_length", cycle_length)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1OvulationcalculatorResponse],
            error_mapper=ovulationcalculator_error_mapper,
            request_options=request_options,
        )
