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
from ..errors.agecalculator_error import AgecalculatorErrorBody, agecalculator_error_mapper
from ..errors.datecalculator_error import DatecalculatorErrorBody, datecalculator_error_mapper
from ..errors.liturgicalcalendar_error import LiturgicalcalendarErrorBody, liturgicalcalendar_error_mapper
from ..errors.workingdays_error import WorkingdaysErrorBody, workingdays_error_mapper
from ..errors.worldholidays_error import WorldholidaysErrorBody, worldholidays_error_mapper
from ..models.v1_agecalculator_response import V1AgecalculatorResponse
from ..models.v1_datecalculator_response import V1DatecalculatorResponse
from ..models.v1_liturgicalcalendar_response import V1LiturgicalcalendarResponse
from ..models.v1_workingdays_response import V1WorkingdaysResponse
from ..models.v1_worldholidays_response import V1WorldholidaysResponse
from ..server.server import Server


class Calendar:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CalendarWithRawResponse(client, server, auth)

    def agecalculator(
        self, dob: str, *, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1AgecalculatorResponse:
        """Calculate age based on the date of birth provided

        Args:
            dob: The date of birth to calculate the age from (format: YYYY-MM-DD)
            timezone: IANA timezone used to interpret the date of birth and to determine "today" when computing the age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.agecalculator(dob, timezone=timezone, request_options=request_options))

    def datecalculator(
        self, start: str, end: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DatecalculatorResponse:
        """Calculate date differences based on the dates provided

        Args:
            start: The start date for calculating the difference (format: YYYY-MM-DD)
            end: The end date for calculating the difference (format: YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.datecalculator(start, end, request_options=request_options))

    def liturgicalcalendar(
        self, *, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1LiturgicalcalendarResponse:
        """Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date
        (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one,
        such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

        Args:
            month: The month to get Liturgical Calendar data for (default: current month)
            year: The year to get Liturgical Calendar data for (default: current year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.liturgicalcalendar(month=month, year=year, request_options=request_options)
        )

    def workingdays(
        self,
        country: str,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WorkingdaysResponse:
        """Working Days is a simple tool for getting the number of working days in a month. It returns the number of
        working days in the given month.

        Args:
            country: The 2-letter country code you want to get the number of working days for
            month: The month you want to get the number of working days for
            year: The year you want to get the number of working days for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.workingdays(country, month=month, year=year, request_options=request_options)
        )

    def worldholidays(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1WorldholidaysResponse:
        """Get the holidays of a country for a given year

        Args:
            country: The 2-letter country code for which you want to get the holidays
            year: The year for which you want to get the holidays
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.worldholidays(country, year=year, request_options=request_options))

    @property
    def with_raw_response(self) -> CalendarWithRawResponse:
        return self._with_raw_response


class AsyncCalendar:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCalendarWithRawResponse(client, server, auth)

    async def agecalculator(
        self, dob: str, *, timezone: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AgecalculatorResponse:
        """Calculate age based on the date of birth provided

        Args:
            dob: The date of birth to calculate the age from (format: YYYY-MM-DD)
            timezone: IANA timezone used to interpret the date of birth and to determine "today" when computing the age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.agecalculator(dob, timezone=timezone, request_options=request_options)
        )

    async def datecalculator(
        self, start: str, end: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DatecalculatorResponse:
        """Calculate date differences based on the dates provided

        Args:
            start: The start date for calculating the difference (format: YYYY-MM-DD)
            end: The end date for calculating the difference (format: YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.datecalculator(start, end, request_options=request_options))

    async def liturgicalcalendar(
        self,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LiturgicalcalendarResponse:
        """Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date
        (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one,
        such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

        Args:
            month: The month to get Liturgical Calendar data for (default: current month)
            year: The year to get Liturgical Calendar data for (default: current year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.liturgicalcalendar(month=month, year=year, request_options=request_options)
        )

    async def workingdays(
        self,
        country: str,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WorkingdaysResponse:
        """Working Days is a simple tool for getting the number of working days in a month. It returns the number of
        working days in the given month.

        Args:
            country: The 2-letter country code you want to get the number of working days for
            month: The month you want to get the number of working days for
            year: The year you want to get the number of working days for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.workingdays(country, month=month, year=year, request_options=request_options)
        )

    async def worldholidays(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WorldholidaysResponse:
        """Get the holidays of a country for a given year

        Args:
            country: The 2-letter country code for which you want to get the holidays
            year: The year for which you want to get the holidays
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.worldholidays(country, year=year, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCalendarWithRawResponse:
        return self._with_raw_response


class CalendarWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def agecalculator(
        self, dob: str, *, timezone: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AgecalculatorResponse, AgecalculatorErrorBody]:
        """Calculate age based on the date of birth provided

        Args:
            dob: The date of birth to calculate the age from (format: YYYY-MM-DD)
            timezone: IANA timezone used to interpret the date of birth and to determine "today" when computing the age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agecalculator"),
            query_params=[param[str]("dob", dob), param[str | None]("timezone", timezone)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AgecalculatorResponse],
            error_mapper=agecalculator_error_mapper,
            request_options=request_options,
        )

    def datecalculator(
        self, start: str, end: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DatecalculatorResponse, DatecalculatorErrorBody]:
        """Calculate date differences based on the dates provided

        Args:
            start: The start date for calculating the difference (format: YYYY-MM-DD)
            end: The end date for calculating the difference (format: YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/datecalculator"),
            query_params=[param[str]("start", start), param[str]("end", end)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DatecalculatorResponse],
            error_mapper=datecalculator_error_mapper,
            request_options=request_options,
        )

    def liturgicalcalendar(
        self, *, month: int | None = None, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LiturgicalcalendarResponse, LiturgicalcalendarErrorBody]:
        """Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date
        (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one,
        such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

        Args:
            month: The month to get Liturgical Calendar data for (default: current month)
            year: The year to get Liturgical Calendar data for (default: current year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/liturgicalcalendar"),
            query_params=[param[int | None]("month", month), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LiturgicalcalendarResponse],
            error_mapper=liturgicalcalendar_error_mapper,
            request_options=request_options,
        )

    def workingdays(
        self,
        country: str,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WorkingdaysResponse, WorkingdaysErrorBody]:
        """Working Days is a simple tool for getting the number of working days in a month. It returns the number of
        working days in the given month.

        Args:
            country: The 2-letter country code you want to get the number of working days for
            month: The month you want to get the number of working days for
            year: The year you want to get the number of working days for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/workingdays"),
            query_params=[
                param[str]("country", country), param[int | None]("month", month), param[int | None]("year", year)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WorkingdaysResponse],
            error_mapper=workingdays_error_mapper,
            request_options=request_options,
        )

    def worldholidays(
        self, country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorldholidaysResponse, WorldholidaysErrorBody]:
        """Get the holidays of a country for a given year

        Args:
            country: The 2-letter country code for which you want to get the holidays
            year: The year for which you want to get the holidays
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/worldholidays"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WorldholidaysResponse],
            error_mapper=worldholidays_error_mapper,
            request_options=request_options,
        )


class AsyncCalendarWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def agecalculator(
        self, dob: str, *, timezone: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AgecalculatorResponse, AgecalculatorErrorBody]:
        """Calculate age based on the date of birth provided

        Args:
            dob: The date of birth to calculate the age from (format: YYYY-MM-DD)
            timezone: IANA timezone used to interpret the date of birth and to determine "today" when computing the age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agecalculator"),
            query_params=[param[str]("dob", dob), param[str | None]("timezone", timezone)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AgecalculatorResponse],
            error_mapper=agecalculator_error_mapper,
            request_options=request_options,
        )

    async def datecalculator(
        self, start: str, end: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DatecalculatorResponse, DatecalculatorErrorBody]:
        """Calculate date differences based on the dates provided

        Args:
            start: The start date for calculating the difference (format: YYYY-MM-DD)
            end: The end date for calculating the difference (format: YYYY-MM-DD)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/datecalculator"),
            query_params=[param[str]("start", start), param[str]("end", end)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DatecalculatorResponse],
            error_mapper=datecalculator_error_mapper,
            request_options=request_options,
        )

    async def liturgicalcalendar(
        self,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LiturgicalcalendarResponse, LiturgicalcalendarErrorBody]:
        """Returns the Catholic liturgical calendar for one month. The response data is an object keyed by ISO date
        (YYYY-MM-DD), and each date holds an array of the celebrations falling on it — a date can carry more than one,
        such as a weekday plus an optional memorial. The fields below describe one celebration in those arrays.

        Args:
            month: The month to get Liturgical Calendar data for (default: current month)
            year: The year to get Liturgical Calendar data for (default: current year)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/liturgicalcalendar"),
            query_params=[param[int | None]("month", month), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LiturgicalcalendarResponse],
            error_mapper=liturgicalcalendar_error_mapper,
            request_options=request_options,
        )

    async def workingdays(
        self,
        country: str,
        *,
        month: int | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WorkingdaysResponse, WorkingdaysErrorBody]:
        """Working Days is a simple tool for getting the number of working days in a month. It returns the number of
        working days in the given month.

        Args:
            country: The 2-letter country code you want to get the number of working days for
            month: The month you want to get the number of working days for
            year: The year you want to get the number of working days for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/workingdays"),
            query_params=[
                param[str]("country", country), param[int | None]("month", month), param[int | None]("year", year)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WorkingdaysResponse],
            error_mapper=workingdays_error_mapper,
            request_options=request_options,
        )

    async def worldholidays(
        self, country: str, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorldholidaysResponse, WorldholidaysErrorBody]:
        """Get the holidays of a country for a given year

        Args:
            country: The 2-letter country code for which you want to get the holidays
            year: The year for which you want to get the holidays
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/worldholidays"),
            query_params=[param[str]("country", country), param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WorldholidaysResponse],
            error_mapper=worldholidays_error_mapper,
            request_options=request_options,
        )
