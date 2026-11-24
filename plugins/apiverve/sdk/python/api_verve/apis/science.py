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
from ..errors.julianday_error import JuliandayErrorBody, julianday_error_mapper
from ..errors.meteorites_error import MeteoritesErrorBody, meteorites_error_mapper
from ..errors.periodictable_error import PeriodictableErrorBody, periodictable_error_mapper
from ..errors.starslookup_error import StarslookupErrorBody, starslookup_error_mapper
from ..models.v1_julianday_response import V1JuliandayResponse
from ..models.v1_meteorites_response import V1MeteoritesResponse
from ..models.v1_periodictable_response import V1PeriodictableResponse
from ..models.v1_starslookup_response import V1StarslookupResponse
from ..server.server import Server


class Science:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScienceWithRawResponse(client, server, auth)

    def julianday(self, date: str, *, request_options: RequestOptionsOrDict | None = None) -> V1JuliandayResponse:
        """Convert a Gregorian date to Julian Day Number

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.julianday(date, request_options=request_options))

    def meteorites(
        self,
        name: str,
        *,
        mass: float | None = None,
        year: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MeteoritesResponse:
        """Get a list of meteorites that have fallen to Earth

        Args:
            name: The name of the meteorite you want to search for
            mass: Minimum mass of the meteorite in grams
            year: The year the meteorite fell to Earth
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.meteorites(name, mass=mass, year=year, request_options=request_options))

    def periodictable(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PeriodictableResponse:
        """Get information about a chemical element

        Args:
            name: The name of the chemical element to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.periodictable(name, request_options=request_options))

    def starslookup(self, name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1StarslookupResponse:
        """Lookup star data based on the star name

        Args:
            name: The name of the star for which you want to get the data (e.g., Sirius)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.starslookup(name, request_options=request_options))

    @property
    def with_raw_response(self) -> ScienceWithRawResponse:
        return self._with_raw_response


class AsyncScience:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScienceWithRawResponse(client, server, auth)

    async def julianday(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1JuliandayResponse:
        """Convert a Gregorian date to Julian Day Number

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.julianday(date, request_options=request_options))

    async def meteorites(
        self,
        name: str,
        *,
        mass: float | None = None,
        year: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MeteoritesResponse:
        """Get a list of meteorites that have fallen to Earth

        Args:
            name: The name of the meteorite you want to search for
            mass: Minimum mass of the meteorite in grams
            year: The year the meteorite fell to Earth
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.meteorites(name, mass=mass, year=year, request_options=request_options)
        )

    async def periodictable(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PeriodictableResponse:
        """Get information about a chemical element

        Args:
            name: The name of the chemical element to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.periodictable(name, request_options=request_options))

    async def starslookup(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1StarslookupResponse:
        """Lookup star data based on the star name

        Args:
            name: The name of the star for which you want to get the data (e.g., Sirius)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.starslookup(name, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScienceWithRawResponse:
        return self._with_raw_response


class ScienceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def julianday(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1JuliandayResponse, JuliandayErrorBody]:
        """Convert a Gregorian date to Julian Day Number

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/julianday"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JuliandayResponse],
            error_mapper=julianday_error_mapper,
            request_options=request_options,
        )

    def meteorites(
        self,
        name: str,
        *,
        mass: float | None = None,
        year: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MeteoritesResponse, MeteoritesErrorBody]:
        """Get a list of meteorites that have fallen to Earth

        Args:
            name: The name of the meteorite you want to search for
            mass: Minimum mass of the meteorite in grams
            year: The year the meteorite fell to Earth
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/meteorites"),
            query_params=[
                param[str]("name", name), param[float | None]("mass", mass), param[float | None]("year", year)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MeteoritesResponse],
            error_mapper=meteorites_error_mapper,
            request_options=request_options,
        )

    def periodictable(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PeriodictableResponse, PeriodictableErrorBody]:
        """Get information about a chemical element

        Args:
            name: The name of the chemical element to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/periodictable"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PeriodictableResponse],
            error_mapper=periodictable_error_mapper,
            request_options=request_options,
        )

    def starslookup(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1StarslookupResponse, StarslookupErrorBody]:
        """Lookup star data based on the star name

        Args:
            name: The name of the star for which you want to get the data (e.g., Sirius)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/starslookup"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1StarslookupResponse],
            error_mapper=starslookup_error_mapper,
            request_options=request_options,
        )


class AsyncScienceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def julianday(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1JuliandayResponse, JuliandayErrorBody]:
        """Convert a Gregorian date to Julian Day Number

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/julianday"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JuliandayResponse],
            error_mapper=julianday_error_mapper,
            request_options=request_options,
        )

    async def meteorites(
        self,
        name: str,
        *,
        mass: float | None = None,
        year: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MeteoritesResponse, MeteoritesErrorBody]:
        """Get a list of meteorites that have fallen to Earth

        Args:
            name: The name of the meteorite you want to search for
            mass: Minimum mass of the meteorite in grams
            year: The year the meteorite fell to Earth
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/meteorites"),
            query_params=[
                param[str]("name", name), param[float | None]("mass", mass), param[float | None]("year", year)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MeteoritesResponse],
            error_mapper=meteorites_error_mapper,
            request_options=request_options,
        )

    async def periodictable(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PeriodictableResponse, PeriodictableErrorBody]:
        """Get information about a chemical element

        Args:
            name: The name of the chemical element to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/periodictable"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PeriodictableResponse],
            error_mapper=periodictable_error_mapper,
            request_options=request_options,
        )

    async def starslookup(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1StarslookupResponse, StarslookupErrorBody]:
        """Lookup star data based on the star name

        Args:
            name: The name of the star for which you want to get the data (e.g., Sirius)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/starslookup"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1StarslookupResponse],
            error_mapper=starslookup_error_mapper,
            request_options=request_options,
        )
