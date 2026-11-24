from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.chinesezodiac_error import ChinesezodiacErrorBody, chinesezodiac_error_mapper
from ..errors.horoscope_error import HoroscopeErrorBody, horoscope_error_mapper
from ..errors.moonphases_error import MoonphasesErrorBody, moonphases_error_mapper
from ..errors.moonposition_error import MoonpositionErrorBody, moonposition_error_mapper
from ..errors.planetpositions_error import PlanetpositionsErrorBody, planetpositions_error_mapper
from ..errors.sunposition_error import SunpositionErrorBody, sunposition_error_mapper
from ..models.v1_chinesezodiac_response import V1ChinesezodiacResponse
from ..models.v1_horoscope_response import V1HoroscopeResponse
from ..models.v1_moonphases_response import V1MoonphasesResponse
from ..models.v1_moonposition_response import V1MoonpositionResponse
from ..models.v1_planetpositions_request import V1PlanetpositionsRequest, V1PlanetpositionsRequestDict
from ..models.v1_planetpositions_response import V1PlanetpositionsResponse
from ..models.v1_sunposition_response import V1SunpositionResponse
from ..server.server import Server


class Astrology:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AstrologyWithRawResponse(client, server, auth)

    def chinesezodiac(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ChinesezodiacResponse:
        """Get Chinese zodiac information for a specific date

        Args:
            date: The date in YYYY-MM-DD format (years 1900-2100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.chinesezodiac(date, request_options=request_options))

    def horoscope(self, sign: str, *, request_options: RequestOptionsOrDict | None = None) -> V1HoroscopeResponse:
        """Get the horoscope of the day for a specific zodiac sign

        Args:
            sign: The zodiac sign for which you want to get the horoscope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.horoscope(sign, request_options=request_options))

    def moonphases(
        self, *, today: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1MoonphasesResponse:
        """Get the moon phase for today

        Args:
            today: Get the moon phase for today
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.moonphases(today=today, request_options=request_options))

    def moonposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MoonpositionResponse:
        """Get moon position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moon position data for (MM-dd-yyyy)
            time: The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
            timezone: IANA timezone name the date and time are given in. Defaults to the timezone of the supplied
                coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.moonposition(
                lat, lon, date=date, time=time, timezone=timezone, request_options=request_options
            ),
        )

    def planetpositions(
        self,
        body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PlanetpositionsResponse:
        """Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the
        position of planets in the solar system.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.planetpositions(body, request_options=request_options))

    def sunposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SunpositionResponse:
        """Get sun position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the sun position data for (MM-DD-YYYY)
            time: The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates.
                Defaults to 00:00 if not provided
            timezone: IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone
                of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.sunposition(
                lat, lon, date=date, time=time, timezone=timezone, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AstrologyWithRawResponse:
        return self._with_raw_response


class AsyncAstrology:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAstrologyWithRawResponse(client, server, auth)

    async def chinesezodiac(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ChinesezodiacResponse:
        """Get Chinese zodiac information for a specific date

        Args:
            date: The date in YYYY-MM-DD format (years 1900-2100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.chinesezodiac(date, request_options=request_options))

    async def horoscope(
        self, sign: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HoroscopeResponse:
        """Get the horoscope of the day for a specific zodiac sign

        Args:
            sign: The zodiac sign for which you want to get the horoscope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.horoscope(sign, request_options=request_options))

    async def moonphases(
        self, *, today: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MoonphasesResponse:
        """Get the moon phase for today

        Args:
            today: Get the moon phase for today
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.moonphases(today=today, request_options=request_options))

    async def moonposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MoonpositionResponse:
        """Get moon position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moon position data for (MM-dd-yyyy)
            time: The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
            timezone: IANA timezone name the date and time are given in. Defaults to the timezone of the supplied
                coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.moonposition(
                lat, lon, date=date, time=time, timezone=timezone, request_options=request_options
            ),
        )

    async def planetpositions(
        self,
        body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PlanetpositionsResponse:
        """Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the
        position of planets in the solar system.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.planetpositions(body, request_options=request_options))

    async def sunposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SunpositionResponse:
        """Get sun position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the sun position data for (MM-DD-YYYY)
            time: The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates.
                Defaults to 00:00 if not provided
            timezone: IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone
                of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.sunposition(
                lat, lon, date=date, time=time, timezone=timezone, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAstrologyWithRawResponse:
        return self._with_raw_response


class AstrologyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def chinesezodiac(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChinesezodiacResponse, ChinesezodiacErrorBody]:
        """Get Chinese zodiac information for a specific date

        Args:
            date: The date in YYYY-MM-DD format (years 1900-2100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chinesezodiac"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ChinesezodiacResponse],
            error_mapper=chinesezodiac_error_mapper,
            request_options=request_options,
        )

    def horoscope(
        self, sign: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HoroscopeResponse, HoroscopeErrorBody]:
        """Get the horoscope of the day for a specific zodiac sign

        Args:
            sign: The zodiac sign for which you want to get the horoscope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/horoscope"),
            query_params=[param[str]("sign", sign)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HoroscopeResponse],
            error_mapper=horoscope_error_mapper,
            request_options=request_options,
        )

    def moonphases(
        self, *, today: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MoonphasesResponse, MoonphasesErrorBody]:
        """Get the moon phase for today

        Args:
            today: Get the moon phase for today
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonphases"),
            query_params=[param[bool | None]("today", today)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MoonphasesResponse],
            error_mapper=moonphases_error_mapper,
            request_options=request_options,
        )

    def moonposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MoonpositionResponse, MoonpositionErrorBody]:
        """Get moon position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moon position data for (MM-dd-yyyy)
            time: The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
            timezone: IANA timezone name the date and time are given in. Defaults to the timezone of the supplied
                coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonposition"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("date", date),
                param[str | None]("time", time),
                param[str | None]("timezone", timezone),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MoonpositionResponse],
            error_mapper=moonposition_error_mapper,
            request_options=request_options,
        )

    def planetpositions(
        self,
        body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlanetpositionsResponse, PlanetpositionsErrorBody]:
        """Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the
        position of planets in the solar system.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/planetpositions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PlanetpositionsRequest | V1PlanetpositionsRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PlanetpositionsResponse],
            error_mapper=planetpositions_error_mapper,
            request_options=request_options,
        )

    def sunposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SunpositionResponse, SunpositionErrorBody]:
        """Get sun position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the sun position data for (MM-DD-YYYY)
            time: The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates.
                Defaults to 00:00 if not provided
            timezone: IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone
                of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sunposition"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("date", date),
                param[str | None]("time", time),
                param[str | None]("timezone", timezone),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SunpositionResponse],
            error_mapper=sunposition_error_mapper,
            request_options=request_options,
        )


class AsyncAstrologyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def chinesezodiac(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChinesezodiacResponse, ChinesezodiacErrorBody]:
        """Get Chinese zodiac information for a specific date

        Args:
            date: The date in YYYY-MM-DD format (years 1900-2100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chinesezodiac"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ChinesezodiacResponse],
            error_mapper=chinesezodiac_error_mapper,
            request_options=request_options,
        )

    async def horoscope(
        self, sign: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HoroscopeResponse, HoroscopeErrorBody]:
        """Get the horoscope of the day for a specific zodiac sign

        Args:
            sign: The zodiac sign for which you want to get the horoscope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/horoscope"),
            query_params=[param[str]("sign", sign)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HoroscopeResponse],
            error_mapper=horoscope_error_mapper,
            request_options=request_options,
        )

    async def moonphases(
        self, *, today: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MoonphasesResponse, MoonphasesErrorBody]:
        """Get the moon phase for today

        Args:
            today: Get the moon phase for today
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonphases"),
            query_params=[param[bool | None]("today", today)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MoonphasesResponse],
            error_mapper=moonphases_error_mapper,
            request_options=request_options,
        )

    async def moonposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MoonpositionResponse, MoonpositionErrorBody]:
        """Get moon position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moon position data for (MM-dd-yyyy)
            time: The time of day for the calculation (HH:mm format, 24-hour). Defaults to 00:00 if not provided
            timezone: IANA timezone name the date and time are given in. Defaults to the timezone of the supplied
                coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonposition"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("date", date),
                param[str | None]("time", time),
                param[str | None]("timezone", timezone),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MoonpositionResponse],
            error_mapper=moonposition_error_mapper,
            request_options=request_options,
        )

    async def planetpositions(
        self,
        body: V1PlanetpositionsRequest | V1PlanetpositionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlanetpositionsResponse, PlanetpositionsErrorBody]:
        """Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the
        position of planets in the solar system.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/planetpositions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PlanetpositionsRequest | V1PlanetpositionsRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PlanetpositionsResponse],
            error_mapper=planetpositions_error_mapper,
            request_options=request_options,
        )

    async def sunposition(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        time: str | None = None,
        timezone: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SunpositionResponse, SunpositionErrorBody]:
        """Get sun position data based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the sun position data for (MM-DD-YYYY)
            time: The time of day for the calculation (HH:mm format, 24-hour), read in the timezone of the coordinates.
                Defaults to 00:00 if not provided
            timezone: IANA timezone to read the date and time in, such as America/Los_Angeles. Defaults to the timezone
                of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sunposition"),
            query_params=[
                param[float]("lat", lat),
                param[float]("lon", lon),
                param[str | None]("date", date),
                param[str | None]("time", time),
                param[str | None]("timezone", timezone),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SunpositionResponse],
            error_mapper=sunposition_error_mapper,
            request_options=request_options,
        )
