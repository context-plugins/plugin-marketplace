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
from ..errors.citieslookup_error import CitieslookupErrorBody, citieslookup_error_mapper
from ..errors.coordinatesaresea_error import CoordinatesareseaErrorBody, coordinatesaresea_error_mapper
from ..errors.countryborders_error import CountrybordersErrorBody, countryborders_error_mapper
from ..errors.countryboundaries_error import CountryboundariesErrorBody, countryboundaries_error_mapper
from ..errors.countryflags_error import CountryflagsErrorBody, countryflags_error_mapper
from ..errors.countrylanguages_error import CountrylanguagesErrorBody, countrylanguages_error_mapper
from ..errors.countrylookup_error import CountrylookupErrorBody, countrylookup_error_mapper
from ..errors.countydata_error import CountydataErrorBody, countydata_error_mapper
from ..errors.distancecalculator_error import DistancecalculatorErrorBody, distancecalculator_error_mapper
from ..errors.hardinesszone_error import HardinesszoneErrorBody, hardinesszone_error_mapper
from ..errors.reversegeocode_error import ReversegeocodeErrorBody, reversegeocode_error_mapper
from ..errors.stateboundaries_error import StateboundariesErrorBody, stateboundaries_error_mapper
from ..errors.zipcodes_error import ZipcodesErrorBody, zipcodes_error_mapper
from ..models.v1_citieslookup_response import V1CitieslookupResponse
from ..models.v1_coordinatesaresea_response import V1CoordinatesareseaResponse
from ..models.v1_countryborders_response import V1CountrybordersResponse
from ..models.v1_countryboundaries_response import V1CountryboundariesResponse
from ..models.v1_countryflags_response import V1CountryflagsResponse
from ..models.v1_countrylanguages_response import V1CountrylanguagesResponse
from ..models.v1_countrylookup_response import V1CountrylookupResponse
from ..models.v1_countydata_response import V1CountydataResponse
from ..models.v1_distancecalculator_response import V1DistancecalculatorResponse
from ..models.v1_hardinesszone_response import V1HardinesszoneResponse
from ..models.v1_reversegeocode_response import V1ReversegeocodeResponse
from ..models.v1_stateboundaries_response import V1StateboundariesResponse
from ..models.v1_zipcodes_response import V1ZipcodesResponse
from ..server.server import Server


class Geography:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GeographyWithRawResponse(client, server, auth)

    def citieslookup(
        self, city: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CitieslookupResponse:
        """Lookup city data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., New York)
            limit: Limit number of cities that match your search criteria
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.citieslookup(city, limit=limit, request_options=request_options))

    def coordinatesaresea(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CoordinatesareseaResponse:
        """Check if the coordinates are in the sea

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.coordinatesaresea(lat, lon, request_options=request_options))

    def countryborders(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountrybordersResponse:
        """Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It
        returns the list of neighboring countries for the specified country.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.countryborders(country, request_options=request_options))

    def countryboundaries(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountryboundariesResponse:
        """Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the
        shape of the specified country's border.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.countryboundaries(country, request_options=request_options))

    def countryflags(
        self, country: str, format_: str, shape: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountryflagsResponse:
        """Country Flag is a simple tool for getting the country's national flags. It returns the country's national
        flags.

        Args:
            country: The 2 letter ISO Country Code (e.g. ZW)
            format_: The format of the flag image
            shape: The shape of the flag image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.countryflags(country, format_, shape, request_options=request_options))

    def countrylanguages(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountrylanguagesResponse:
        """Country Languages is a simple tool for getting the list of official and commonly spoken languages in a
        specific country.

        Args:
            country: The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.countrylanguages(country, request_options=request_options))

    def countrylookup(
        self, country: str, *, majorcities: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountrylookupResponse:
        """Lookup country data based on the country ISO Code

        Args:
            country: The Country name or ISO code of the country for which you want to get the data (e.g., USA)
            majorcities: Specify if you would like to return all major cities of the country found
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.countrylookup(country, majorcities=majorcities, request_options=request_options)
        )

    def countydata(
        self, state: str, county: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CountydataResponse:
        """Get data about a US county

        Args:
            state: The two letter name of the US state the county is in (e.g., MO)
            county: The name of the US county to get data about (e.g. Jackson)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.countydata(state, county, request_options=request_options))

    def distancecalculator(
        self, lat1: float, lon1: float, lat2: float, lon2: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1DistancecalculatorResponse:
        """Calculate the distance between two coordinates

        Args:
            lat1: The latitude of the first location
            lon1: The longitude of the first location
            lat2: The latitude of the second location
            lon2: The longitude of the second location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.distancecalculator(lat1, lon1, lat2, lon2, request_options=request_options)
        )

    def hardinesszone(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HardinesszoneResponse:
        """Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

        Args:
            zip_: The zip code to get the USDA Plant Hardiness Zone for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.hardinesszone(zip_, request_options=request_options))

    def reversegeocode(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ReversegeocodeResponse:
        """Get the location of a set of coordinates, Only supports USA and Canada Coordinates

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reversegeocode(lat, lon, request_options=request_options))

    def stateboundaries(
        self, state: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1StateboundariesResponse:
        """State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the
        shape of the specified state's border.

        Args:
            state: The 2 Letter State Code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.stateboundaries(state, request_options=request_options))

    def zipcodes(self, zip_: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ZipcodesResponse:
        """Lookup the zip code information

        Args:
            zip_: The zip code for which you want to get the data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.zipcodes(zip_, request_options=request_options))

    @property
    def with_raw_response(self) -> GeographyWithRawResponse:
        return self._with_raw_response


class AsyncGeography:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGeographyWithRawResponse(client, server, auth)

    async def citieslookup(
        self, city: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CitieslookupResponse:
        """Lookup city data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., New York)
            limit: Limit number of cities that match your search criteria
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.citieslookup(city, limit=limit, request_options=request_options))

    async def coordinatesaresea(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CoordinatesareseaResponse:
        """Check if the coordinates are in the sea

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.coordinatesaresea(lat, lon, request_options=request_options))

    async def countryborders(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountrybordersResponse:
        """Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It
        returns the list of neighboring countries for the specified country.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.countryborders(country, request_options=request_options))

    async def countryboundaries(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountryboundariesResponse:
        """Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the
        shape of the specified country's border.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.countryboundaries(country, request_options=request_options))

    async def countryflags(
        self, country: str, format_: str, shape: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountryflagsResponse:
        """Country Flag is a simple tool for getting the country's national flags. It returns the country's national
        flags.

        Args:
            country: The 2 letter ISO Country Code (e.g. ZW)
            format_: The format of the flag image
            shape: The shape of the flag image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.countryflags(country, format_, shape, request_options=request_options)
        )

    async def countrylanguages(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountrylanguagesResponse:
        """Country Languages is a simple tool for getting the list of official and commonly spoken languages in a
        specific country.

        Args:
            country: The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.countrylanguages(country, request_options=request_options))

    async def countrylookup(
        self, country: str, *, majorcities: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountrylookupResponse:
        """Lookup country data based on the country ISO Code

        Args:
            country: The Country name or ISO code of the country for which you want to get the data (e.g., USA)
            majorcities: Specify if you would like to return all major cities of the country found
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.countrylookup(
                country, majorcities=majorcities, request_options=request_options
            ),
        )

    async def countydata(
        self, state: str, county: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CountydataResponse:
        """Get data about a US county

        Args:
            state: The two letter name of the US state the county is in (e.g., MO)
            county: The name of the US county to get data about (e.g. Jackson)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.countydata(state, county, request_options=request_options))

    async def distancecalculator(
        self,
        lat1: float,
        lon1: float,
        lat2: float,
        lon2: float,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DistancecalculatorResponse:
        """Calculate the distance between two coordinates

        Args:
            lat1: The latitude of the first location
            lon1: The longitude of the first location
            lat2: The latitude of the second location
            lon2: The longitude of the second location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.distancecalculator(lat1, lon1, lat2, lon2, request_options=request_options)
        )

    async def hardinesszone(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HardinesszoneResponse:
        """Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

        Args:
            zip_: The zip code to get the USDA Plant Hardiness Zone for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.hardinesszone(zip_, request_options=request_options))

    async def reversegeocode(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ReversegeocodeResponse:
        """Get the location of a set of coordinates, Only supports USA and Canada Coordinates

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reversegeocode(lat, lon, request_options=request_options))

    async def stateboundaries(
        self, state: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1StateboundariesResponse:
        """State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the
        shape of the specified state's border.

        Args:
            state: The 2 Letter State Code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.stateboundaries(state, request_options=request_options))

    async def zipcodes(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ZipcodesResponse:
        """Lookup the zip code information

        Args:
            zip_: The zip code for which you want to get the data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.zipcodes(zip_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGeographyWithRawResponse:
        return self._with_raw_response


class GeographyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def citieslookup(
        self, city: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CitieslookupResponse, CitieslookupErrorBody]:
        """Lookup city data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., New York)
            limit: Limit number of cities that match your search criteria
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/citieslookup"),
            query_params=[param[str]("city", city), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CitieslookupResponse],
            error_mapper=citieslookup_error_mapper,
            request_options=request_options,
        )

    def coordinatesaresea(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CoordinatesareseaResponse, CoordinatesareseaErrorBody]:
        """Check if the coordinates are in the sea

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/coordinatesaresea"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CoordinatesareseaResponse],
            error_mapper=coordinatesaresea_error_mapper,
            request_options=request_options,
        )

    def countryborders(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrybordersResponse, CountrybordersErrorBody]:
        """Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It
        returns the list of neighboring countries for the specified country.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryborders"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountrybordersResponse],
            error_mapper=countryborders_error_mapper,
            request_options=request_options,
        )

    def countryboundaries(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountryboundariesResponse, CountryboundariesErrorBody]:
        """Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the
        shape of the specified country's border.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryboundaries"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountryboundariesResponse],
            error_mapper=countryboundaries_error_mapper,
            request_options=request_options,
        )

    def countryflags(
        self, country: str, format_: str, shape: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountryflagsResponse, CountryflagsErrorBody]:
        """Country Flag is a simple tool for getting the country's national flags. It returns the country's national
        flags.

        Args:
            country: The 2 letter ISO Country Code (e.g. ZW)
            format_: The format of the flag image
            shape: The shape of the flag image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryflags"),
            query_params=[param[str]("country", country), param[str]("format", format_), param[str]("shape", shape)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountryflagsResponse],
            error_mapper=countryflags_error_mapper,
            request_options=request_options,
        )

    def countrylanguages(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrylanguagesResponse, CountrylanguagesErrorBody]:
        """Country Languages is a simple tool for getting the list of official and commonly spoken languages in a
        specific country.

        Args:
            country: The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countrylanguages"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountrylanguagesResponse],
            error_mapper=countrylanguages_error_mapper,
            request_options=request_options,
        )

    def countrylookup(
        self, country: str, *, majorcities: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrylookupResponse, CountrylookupErrorBody]:
        """Lookup country data based on the country ISO Code

        Args:
            country: The Country name or ISO code of the country for which you want to get the data (e.g., USA)
            majorcities: Specify if you would like to return all major cities of the country found
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countrylookup"),
            query_params=[param[str]("country", country), param[bool | None]("majorcities", majorcities)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountrylookupResponse],
            error_mapper=countrylookup_error_mapper,
            request_options=request_options,
        )

    def countydata(
        self, state: str, county: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountydataResponse, CountydataErrorBody]:
        """Get data about a US county

        Args:
            state: The two letter name of the US state the county is in (e.g., MO)
            county: The name of the US county to get data about (e.g. Jackson)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countydata"),
            query_params=[param[str]("state", state), param[str]("county", county)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CountydataResponse],
            error_mapper=countydata_error_mapper,
            request_options=request_options,
        )

    def distancecalculator(
        self, lat1: float, lon1: float, lat2: float, lon2: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DistancecalculatorResponse, DistancecalculatorErrorBody]:
        """Calculate the distance between two coordinates

        Args:
            lat1: The latitude of the first location
            lon1: The longitude of the first location
            lat2: The latitude of the second location
            lon2: The longitude of the second location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/distancecalculator"),
            query_params=[
                param[float]("lat1", lat1),
                param[float]("lon1", lon1),
                param[float]("lat2", lat2),
                param[float]("lon2", lon2),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DistancecalculatorResponse],
            error_mapper=distancecalculator_error_mapper,
            request_options=request_options,
        )

    def hardinesszone(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HardinesszoneResponse, HardinesszoneErrorBody]:
        """Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

        Args:
            zip_: The zip code to get the USDA Plant Hardiness Zone for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hardinesszone"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HardinesszoneResponse],
            error_mapper=hardinesszone_error_mapper,
            request_options=request_options,
        )

    def reversegeocode(
        self, lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ReversegeocodeResponse, ReversegeocodeErrorBody]:
        """Get the location of a set of coordinates, Only supports USA and Canada Coordinates

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reversegeocode"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ReversegeocodeResponse],
            error_mapper=reversegeocode_error_mapper,
            request_options=request_options,
        )

    def stateboundaries(
        self, state: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1StateboundariesResponse, StateboundariesErrorBody]:
        """State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the
        shape of the specified state's border.

        Args:
            state: The 2 Letter State Code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stateboundaries"),
            query_params=[param[str]("state", state)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1StateboundariesResponse],
            error_mapper=stateboundaries_error_mapper,
            request_options=request_options,
        )

    def zipcodes(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ZipcodesResponse, ZipcodesErrorBody]:
        """Lookup the zip code information

        Args:
            zip_: The zip code for which you want to get the data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/zipcodes"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ZipcodesResponse],
            error_mapper=zipcodes_error_mapper,
            request_options=request_options,
        )


class AsyncGeographyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def citieslookup(
        self, city: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CitieslookupResponse, CitieslookupErrorBody]:
        """Lookup city data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., New York)
            limit: Limit number of cities that match your search criteria
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/citieslookup"),
            query_params=[param[str]("city", city), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CitieslookupResponse],
            error_mapper=citieslookup_error_mapper,
            request_options=request_options,
        )

    async def coordinatesaresea(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CoordinatesareseaResponse, CoordinatesareseaErrorBody]:
        """Check if the coordinates are in the sea

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/coordinatesaresea"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CoordinatesareseaResponse],
            error_mapper=coordinatesaresea_error_mapper,
            request_options=request_options,
        )

    async def countryborders(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrybordersResponse, CountrybordersErrorBody]:
        """Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It
        returns the list of neighboring countries for the specified country.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryborders"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountrybordersResponse],
            error_mapper=countryborders_error_mapper,
            request_options=request_options,
        )

    async def countryboundaries(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountryboundariesResponse, CountryboundariesErrorBody]:
        """Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the
        shape of the specified country's border.

        Args:
            country: The Country 2 Letter ISO code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryboundaries"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountryboundariesResponse],
            error_mapper=countryboundaries_error_mapper,
            request_options=request_options,
        )

    async def countryflags(
        self, country: str, format_: str, shape: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountryflagsResponse, CountryflagsErrorBody]:
        """Country Flag is a simple tool for getting the country's national flags. It returns the country's national
        flags.

        Args:
            country: The 2 letter ISO Country Code (e.g. ZW)
            format_: The format of the flag image
            shape: The shape of the flag image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countryflags"),
            query_params=[param[str]("country", country), param[str]("format", format_), param[str]("shape", shape)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountryflagsResponse],
            error_mapper=countryflags_error_mapper,
            request_options=request_options,
        )

    async def countrylanguages(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrylanguagesResponse, CountrylanguagesErrorBody]:
        """Country Languages is a simple tool for getting the list of official and commonly spoken languages in a
        specific country.

        Args:
            country: The Country 2 letter ISO code for which you want to get languages for data (e.g., ZW)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countrylanguages"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountrylanguagesResponse],
            error_mapper=countrylanguages_error_mapper,
            request_options=request_options,
        )

    async def countrylookup(
        self, country: str, *, majorcities: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountrylookupResponse, CountrylookupErrorBody]:
        """Lookup country data based on the country ISO Code

        Args:
            country: The Country name or ISO code of the country for which you want to get the data (e.g., USA)
            majorcities: Specify if you would like to return all major cities of the country found
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countrylookup"),
            query_params=[param[str]("country", country), param[bool | None]("majorcities", majorcities)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountrylookupResponse],
            error_mapper=countrylookup_error_mapper,
            request_options=request_options,
        )

    async def countydata(
        self, state: str, county: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CountydataResponse, CountydataErrorBody]:
        """Get data about a US county

        Args:
            state: The two letter name of the US state the county is in (e.g., MO)
            county: The name of the US county to get data about (e.g. Jackson)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/countydata"),
            query_params=[param[str]("state", state), param[str]("county", county)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CountydataResponse],
            error_mapper=countydata_error_mapper,
            request_options=request_options,
        )

    async def distancecalculator(
        self,
        lat1: float,
        lon1: float,
        lat2: float,
        lon2: float,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DistancecalculatorResponse, DistancecalculatorErrorBody]:
        """Calculate the distance between two coordinates

        Args:
            lat1: The latitude of the first location
            lon1: The longitude of the first location
            lat2: The latitude of the second location
            lon2: The longitude of the second location
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/distancecalculator"),
            query_params=[
                param[float]("lat1", lat1),
                param[float]("lon1", lon1),
                param[float]("lat2", lat2),
                param[float]("lon2", lon2),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DistancecalculatorResponse],
            error_mapper=distancecalculator_error_mapper,
            request_options=request_options,
        )

    async def hardinesszone(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HardinesszoneResponse, HardinesszoneErrorBody]:
        """Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code

        Args:
            zip_: The zip code to get the USDA Plant Hardiness Zone for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hardinesszone"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HardinesszoneResponse],
            error_mapper=hardinesszone_error_mapper,
            request_options=request_options,
        )

    async def reversegeocode(
        self, lat: float, lon: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ReversegeocodeResponse, ReversegeocodeErrorBody]:
        """Get the location of a set of coordinates, Only supports USA and Canada Coordinates

        Args:
            lat: The latitude of the coordinates
            lon: The longitude of the coordinates
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/reversegeocode"),
            query_params=[param[float]("lat", lat), param[float]("lon", lon)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ReversegeocodeResponse],
            error_mapper=reversegeocode_error_mapper,
            request_options=request_options,
        )

    async def stateboundaries(
        self, state: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1StateboundariesResponse, StateboundariesErrorBody]:
        """State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the
        shape of the specified state's border.

        Args:
            state: The 2 Letter State Code (e.g., CA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stateboundaries"),
            query_params=[param[str]("state", state)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1StateboundariesResponse],
            error_mapper=stateboundaries_error_mapper,
            request_options=request_options,
        )

    async def zipcodes(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ZipcodesResponse, ZipcodesErrorBody]:
        """Lookup the zip code information

        Args:
            zip_: The zip code for which you want to get the data
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/zipcodes"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ZipcodesResponse],
            error_mapper=zipcodes_error_mapper,
            request_options=request_options,
        )
