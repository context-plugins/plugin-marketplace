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
from ..errors.airquality_error import AirqualityErrorBody, airquality_error_mapper
from ..errors.earthquake_error import EarthquakeErrorBody, earthquake_error_mapper
from ..errors.marineweather_error import MarineweatherErrorBody, marineweather_error_mapper
from ..errors.moonrisemoonset_error import MoonrisemoonsetErrorBody, moonrisemoonset_error_mapper
from ..errors.solarpotential_error import SolarpotentialErrorBody, solarpotential_error_mapper
from ..errors.sunrisesunset_error import SunrisesunsetErrorBody, sunrisesunset_error_mapper
from ..errors.weatherforecast_error import WeatherforecastErrorBody, weatherforecast_error_mapper
from ..errors.weatherseasons_error import WeatherseasonsErrorBody, weatherseasons_error_mapper
from ..models.v1_airquality_response import V1AirqualityResponse
from ..models.v1_earthquake_response import V1EarthquakeResponse
from ..models.v1_marineweather_response import V1MarineweatherResponse
from ..models.v1_moonrisemoonset_response import V1MoonrisemoonsetResponse
from ..models.v1_solarpotential_response import V1SolarpotentialResponse
from ..models.v1_sunrisesunset_response import V1SunrisesunsetResponse
from ..models.v1_weatherforecast_response import V1WeatherforecastResponse
from ..models.v1_weatherseasons_response import V1WeatherseasonsResponse
from ..server.server import Server


class Weather:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WeatherWithRawResponse(client, server, auth)

    def airquality(self, city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirqualityResponse:
        """Get the air quality data for a city

        Args:
            city: The city name for which you want to get the air quality data (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.airquality(city, request_options=request_options))

    def earthquake(self, *, request_options: RequestOptionsOrDict | None = None) -> V1EarthquakeResponse:
        """Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.earthquake(request_options=request_options))

    def marineweather(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MarineweatherResponse:
        """Get the marine weather data for a location using latitude and longitude coordinates

        Args:
            lat: The latitude coordinate of the location
            lon: The longitude coordinate of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.marineweather(lat, lon, request_options=request_options))

    def moonrisemoonset(
        self, lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1MoonrisemoonsetResponse:
        """Get moonrise and moonset times based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moonrise and moonset times for (MM-dd-yyyy)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.moonrisemoonset(lat, lon, date=date, request_options=request_options))

    def solarpotential(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1SolarpotentialResponse:
        """Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It
        returns the estimated annual energy production of a PV system.

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.solarpotential(lat, lon, request_options=request_options))

    def sunrisesunset(
        self, lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1SunrisesunsetResponse:
        """Get the sunrise and sunset times for a given location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sunrisesunset(lat, lon, date=date, request_options=request_options))

    def weatherforecast(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WeatherforecastResponse:
        """Get the current weather for a given location

        Args:
            city: The city for which you want to get the current weather (e.g., San Francisco)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.weatherforecast(city, request_options=request_options))

    def weatherseasons(
        self, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1WeatherseasonsResponse:
        """Get the dates of the solstice and equinox for a given year

        Args:
            year: The year to get the dates of the solstice and equinox
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.weatherseasons(year=year, request_options=request_options))

    @property
    def with_raw_response(self) -> WeatherWithRawResponse:
        return self._with_raw_response


class AsyncWeather:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWeatherWithRawResponse(client, server, auth)

    async def airquality(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AirqualityResponse:
        """Get the air quality data for a city

        Args:
            city: The city name for which you want to get the air quality data (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.airquality(city, request_options=request_options))

    async def earthquake(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1EarthquakeResponse:
        """Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.earthquake(request_options=request_options))

    async def marineweather(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MarineweatherResponse:
        """Get the marine weather data for a location using latitude and longitude coordinates

        Args:
            lat: The latitude coordinate of the location
            lon: The longitude coordinate of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.marineweather(lat, lon, request_options=request_options))

    async def moonrisemoonset(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MoonrisemoonsetResponse:
        """Get moonrise and moonset times based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moonrise and moonset times for (MM-dd-yyyy)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.moonrisemoonset(lat, lon, date=date, request_options=request_options)
        )

    async def solarpotential(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SolarpotentialResponse:
        """Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It
        returns the estimated annual energy production of a PV system.

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.solarpotential(lat, lon, request_options=request_options))

    async def sunrisesunset(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SunrisesunsetResponse:
        """Get the sunrise and sunset times for a given location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sunrisesunset(lat, lon, date=date, request_options=request_options))

    async def weatherforecast(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WeatherforecastResponse:
        """Get the current weather for a given location

        Args:
            city: The city for which you want to get the current weather (e.g., San Francisco)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.weatherforecast(city, request_options=request_options))

    async def weatherseasons(
        self, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WeatherseasonsResponse:
        """Get the dates of the solstice and equinox for a given year

        Args:
            year: The year to get the dates of the solstice and equinox
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.weatherseasons(year=year, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWeatherWithRawResponse:
        return self._with_raw_response


class WeatherWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def airquality(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirqualityResponse, AirqualityErrorBody]:
        """Get the air quality data for a city

        Args:
            city: The city name for which you want to get the air quality data (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airquality"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AirqualityResponse],
            error_mapper=airquality_error_mapper,
            request_options=request_options,
        )

    def earthquake(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1EarthquakeResponse, EarthquakeErrorBody]:
        """Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/earthquake"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EarthquakeResponse],
            error_mapper=earthquake_error_mapper,
            request_options=request_options,
        )

    def marineweather(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MarineweatherResponse, MarineweatherErrorBody]:
        """Get the marine weather data for a location using latitude and longitude coordinates

        Args:
            lat: The latitude coordinate of the location
            lon: The longitude coordinate of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/marineweather"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarineweatherResponse],
            error_mapper=marineweather_error_mapper,
            request_options=request_options,
        )

    def moonrisemoonset(
        self, lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MoonrisemoonsetResponse, MoonrisemoonsetErrorBody]:
        """Get moonrise and moonset times based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moonrise and moonset times for (MM-dd-yyyy)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonrisemoonset"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MoonrisemoonsetResponse],
            error_mapper=moonrisemoonset_error_mapper,
            request_options=request_options,
        )

    def solarpotential(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SolarpotentialResponse, SolarpotentialErrorBody]:
        """Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It
        returns the estimated annual energy production of a PV system.

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/solarpotential"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SolarpotentialResponse],
            error_mapper=solarpotential_error_mapper,
            request_options=request_options,
        )

    def sunrisesunset(
        self, lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SunrisesunsetResponse, SunrisesunsetErrorBody]:
        """Get the sunrise and sunset times for a given location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sunrisesunset"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SunrisesunsetResponse],
            error_mapper=sunrisesunset_error_mapper,
            request_options=request_options,
        )

    def weatherforecast(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WeatherforecastResponse, WeatherforecastErrorBody]:
        """Get the current weather for a given location

        Args:
            city: The city for which you want to get the current weather (e.g., San Francisco)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/weatherforecast"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WeatherforecastResponse],
            error_mapper=weatherforecast_error_mapper,
            request_options=request_options,
        )

    def weatherseasons(
        self, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WeatherseasonsResponse, WeatherseasonsErrorBody]:
        """Get the dates of the solstice and equinox for a given year

        Args:
            year: The year to get the dates of the solstice and equinox
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/weatherseasons"),
            query_params=[param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WeatherseasonsResponse],
            error_mapper=weatherseasons_error_mapper,
            request_options=request_options,
        )


class AsyncWeatherWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def airquality(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirqualityResponse, AirqualityErrorBody]:
        """Get the air quality data for a city

        Args:
            city: The city name for which you want to get the air quality data (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airquality"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AirqualityResponse],
            error_mapper=airquality_error_mapper,
            request_options=request_options,
        )

    async def earthquake(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1EarthquakeResponse, EarthquakeErrorBody]:
        """Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/earthquake"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EarthquakeResponse],
            error_mapper=earthquake_error_mapper,
            request_options=request_options,
        )

    async def marineweather(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MarineweatherResponse, MarineweatherErrorBody]:
        """Get the marine weather data for a location using latitude and longitude coordinates

        Args:
            lat: The latitude coordinate of the location
            lon: The longitude coordinate of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/marineweather"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarineweatherResponse],
            error_mapper=marineweather_error_mapper,
            request_options=request_options,
        )

    async def moonrisemoonset(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MoonrisemoonsetResponse, MoonrisemoonsetErrorBody]:
        """Get moonrise and moonset times based on the location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date to get the moonrise and moonset times for (MM-dd-yyyy)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/moonrisemoonset"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MoonrisemoonsetResponse],
            error_mapper=moonrisemoonset_error_mapper,
            request_options=request_options,
        )

    async def solarpotential(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SolarpotentialResponse, SolarpotentialErrorBody]:
        """Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It
        returns the estimated annual energy production of a PV system.

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/solarpotential"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SolarpotentialResponse],
            error_mapper=solarpotential_error_mapper,
            request_options=request_options,
        )

    async def sunrisesunset(
        self,
        lat: float,
        lon: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SunrisesunsetResponse, SunrisesunsetErrorBody]:
        """Get the sunrise and sunset times for a given location

        Args:
            lat: The latitude of the location
            lon: The longitude of the location
            date: The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sunrisesunset"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SunrisesunsetResponse],
            error_mapper=sunrisesunset_error_mapper,
            request_options=request_options,
        )

    async def weatherforecast(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WeatherforecastResponse, WeatherforecastErrorBody]:
        """Get the current weather for a given location

        Args:
            city: The city for which you want to get the current weather (e.g., San Francisco)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/weatherforecast"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WeatherforecastResponse],
            error_mapper=weatherforecast_error_mapper,
            request_options=request_options,
        )

    async def weatherseasons(
        self, *, year: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WeatherseasonsResponse, WeatherseasonsErrorBody]:
        """Get the dates of the solstice and equinox for a given year

        Args:
            year: The year to get the dates of the solstice and equinox
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/weatherseasons"),
            query_params=[param[int | None]("year", year)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WeatherseasonsResponse],
            error_mapper=weatherseasons_error_mapper,
            request_options=request_options,
        )
