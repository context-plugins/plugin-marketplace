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
from ..errors.airlinelookup_error import AirlinelookupErrorBody, airlinelookup_error_mapper
from ..errors.airportcodeconverter_error import AirportcodeconverterErrorBody, airportcodeconverter_error_mapper
from ..errors.airportdistance_error import AirportdistanceErrorBody, airportdistance_error_mapper
from ..errors.airports_error import AirportsErrorBody, airports_error_mapper
from ..errors.carmodels_error import CarmodelsErrorBody, carmodels_error_mapper
from ..errors.vindecoder_error import VindecoderErrorBody, vindecoder_error_mapper
from ..models.v1_airlinelookup_response import V1AirlinelookupResponse
from ..models.v1_airportcodeconverter_response import V1AirportcodeconverterResponse
from ..models.v1_airportdistance_response import V1AirportdistanceResponse
from ..models.v1_airports_response import V1AirportsResponse
from ..models.v1_carmodels_response import V1CarmodelsResponse
from ..models.v1_vindecoder_response import V1VindecoderResponse
from ..server.server import Server


class Transportation:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransportationWithRawResponse(client, server, auth)

    def airlinelookup(
        self, iata: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1AirlinelookupResponse:
        """Get the airline information for a specific airline IATA code

        Args:
            iata: The IATA code of the airline for which you want to get the information (e.g., AA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.airlinelookup(iata, request_options=request_options))

    def airportcodeconverter(
        self, code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1AirportcodeconverterResponse:
        """Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

        Args:
            code: The airport code to convert (IATA: 3 letters, ICAO: 4 letters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.airportcodeconverter(code, request_options=request_options))

    def airportdistance(
        self, iata1: str, iata2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1AirportdistanceResponse:
        """Airport Distance is a simple tool for getting the distance between two airports. It returns the distance
        between the two airports.

        Args:
            iata1: The IATA code of the first airport (e.g. JFK)
            iata2: The IATA code of the second airport (e.g. LAX)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.airportdistance(iata1, iata2, request_options=request_options))

    def airports(self, iata: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AirportsResponse:
        """Get the airport information for a specific airport IATA code

        Args:
            iata: The IATA code of the airport for which you want to get the information (e.g., MCI)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.airports(iata, request_options=request_options))

    def carmodels(
        self,
        make: str,
        *,
        year: int | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CarmodelsResponse:
        """Get all car models for a specific make (manufacturer)

        Args:
            make: The make (manufacturer) of the car (e.g., Toyota, Honda, Ford)
            year: Filter by year (1984-present)
            model: Narrow to a model name (e.g., Camry)
            trim: Narrow to a trim level (e.g., Hybrid)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.carmodels(make, year=year, model=model, trim=trim, request_options=request_options)
        )

    def vindecoder(self, vin: str, *, request_options: RequestOptionsOrDict | None = None) -> V1VindecoderResponse:
        """Decode a Vehicle Identification Number into the vehicle it identifies

        Args:
            vin: The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the
                available characters allow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.vindecoder(vin, request_options=request_options))

    @property
    def with_raw_response(self) -> TransportationWithRawResponse:
        return self._with_raw_response


class AsyncTransportation:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransportationWithRawResponse(client, server, auth)

    async def airlinelookup(
        self, iata: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AirlinelookupResponse:
        """Get the airline information for a specific airline IATA code

        Args:
            iata: The IATA code of the airline for which you want to get the information (e.g., AA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.airlinelookup(iata, request_options=request_options))

    async def airportcodeconverter(
        self, code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AirportcodeconverterResponse:
        """Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

        Args:
            code: The airport code to convert (IATA: 3 letters, ICAO: 4 letters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.airportcodeconverter(code, request_options=request_options))

    async def airportdistance(
        self, iata1: str, iata2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AirportdistanceResponse:
        """Airport Distance is a simple tool for getting the distance between two airports. It returns the distance
        between the two airports.

        Args:
            iata1: The IATA code of the first airport (e.g. JFK)
            iata2: The IATA code of the second airport (e.g. LAX)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.airportdistance(iata1, iata2, request_options=request_options))

    async def airports(
        self, iata: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AirportsResponse:
        """Get the airport information for a specific airport IATA code

        Args:
            iata: The IATA code of the airport for which you want to get the information (e.g., MCI)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.airports(iata, request_options=request_options))

    async def carmodels(
        self,
        make: str,
        *,
        year: int | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CarmodelsResponse:
        """Get all car models for a specific make (manufacturer)

        Args:
            make: The make (manufacturer) of the car (e.g., Toyota, Honda, Ford)
            year: Filter by year (1984-present)
            model: Narrow to a model name (e.g., Camry)
            trim: Narrow to a trim level (e.g., Hybrid)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.carmodels(
                make, year=year, model=model, trim=trim, request_options=request_options
            ),
        )

    async def vindecoder(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1VindecoderResponse:
        """Decode a Vehicle Identification Number into the vehicle it identifies

        Args:
            vin: The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the
                available characters allow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.vindecoder(vin, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTransportationWithRawResponse:
        return self._with_raw_response


class TransportationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def airlinelookup(
        self, iata: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirlinelookupResponse, AirlinelookupErrorBody]:
        """Get the airline information for a specific airline IATA code

        Args:
            iata: The IATA code of the airline for which you want to get the information (e.g., AA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airlinelookup"),
            query_params=[param[str]("iata", iata)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AirlinelookupResponse],
            error_mapper=airlinelookup_error_mapper,
            request_options=request_options,
        )

    def airportcodeconverter(
        self, code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportcodeconverterResponse, AirportcodeconverterErrorBody]:
        """Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

        Args:
            code: The airport code to convert (IATA: 3 letters, ICAO: 4 letters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airportcodeconverter"),
            query_params=[param[str]("code", code)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AirportcodeconverterResponse],
            error_mapper=airportcodeconverter_error_mapper,
            request_options=request_options,
        )

    def airportdistance(
        self, iata1: str, iata2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportdistanceResponse, AirportdistanceErrorBody]:
        """Airport Distance is a simple tool for getting the distance between two airports. It returns the distance
        between the two airports.

        Args:
            iata1: The IATA code of the first airport (e.g. JFK)
            iata2: The IATA code of the second airport (e.g. LAX)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airportdistance"),
            query_params=[param[str]("iata1", iata1), param[str]("iata2", iata2)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AirportdistanceResponse],
            error_mapper=airportdistance_error_mapper,
            request_options=request_options,
        )

    def airports(
        self, iata: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportsResponse, AirportsErrorBody]:
        """Get the airport information for a specific airport IATA code

        Args:
            iata: The IATA code of the airport for which you want to get the information (e.g., MCI)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airports"),
            query_params=[param[str]("iata", iata)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AirportsResponse],
            error_mapper=airports_error_mapper,
            request_options=request_options,
        )

    def carmodels(
        self,
        make: str,
        *,
        year: int | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CarmodelsResponse, CarmodelsErrorBody]:
        """Get all car models for a specific make (manufacturer)

        Args:
            make: The make (manufacturer) of the car (e.g., Toyota, Honda, Ford)
            year: Filter by year (1984-present)
            model: Narrow to a model name (e.g., Camry)
            trim: Narrow to a trim level (e.g., Hybrid)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/carmodels"),
            query_params=[
                param[str]("make", make),
                param[int | None]("year", year),
                param[str | None]("model", model),
                param[str | None]("trim", trim),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CarmodelsResponse],
            error_mapper=carmodels_error_mapper,
            request_options=request_options,
        )

    def vindecoder(
        self, vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1VindecoderResponse, VindecoderErrorBody]:
        """Decode a Vehicle Identification Number into the vehicle it identifies

        Args:
            vin: The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the
                available characters allow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vindecoder"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1VindecoderResponse],
            error_mapper=vindecoder_error_mapper,
            request_options=request_options,
        )


class AsyncTransportationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def airlinelookup(
        self, iata: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirlinelookupResponse, AirlinelookupErrorBody]:
        """Get the airline information for a specific airline IATA code

        Args:
            iata: The IATA code of the airline for which you want to get the information (e.g., AA)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airlinelookup"),
            query_params=[param[str]("iata", iata)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AirlinelookupResponse],
            error_mapper=airlinelookup_error_mapper,
            request_options=request_options,
        )

    async def airportcodeconverter(
        self, code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportcodeconverterResponse, AirportcodeconverterErrorBody]:
        """Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.

        Args:
            code: The airport code to convert (IATA: 3 letters, ICAO: 4 letters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airportcodeconverter"),
            query_params=[param[str]("code", code)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AirportcodeconverterResponse],
            error_mapper=airportcodeconverter_error_mapper,
            request_options=request_options,
        )

    async def airportdistance(
        self, iata1: str, iata2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportdistanceResponse, AirportdistanceErrorBody]:
        """Airport Distance is a simple tool for getting the distance between two airports. It returns the distance
        between the two airports.

        Args:
            iata1: The IATA code of the first airport (e.g. JFK)
            iata2: The IATA code of the second airport (e.g. LAX)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airportdistance"),
            query_params=[param[str]("iata1", iata1), param[str]("iata2", iata2)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AirportdistanceResponse],
            error_mapper=airportdistance_error_mapper,
            request_options=request_options,
        )

    async def airports(
        self, iata: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AirportsResponse, AirportsErrorBody]:
        """Get the airport information for a specific airport IATA code

        Args:
            iata: The IATA code of the airport for which you want to get the information (e.g., MCI)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/airports"),
            query_params=[param[str]("iata", iata)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AirportsResponse],
            error_mapper=airports_error_mapper,
            request_options=request_options,
        )

    async def carmodels(
        self,
        make: str,
        *,
        year: int | None = None,
        model: str | None = None,
        trim: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CarmodelsResponse, CarmodelsErrorBody]:
        """Get all car models for a specific make (manufacturer)

        Args:
            make: The make (manufacturer) of the car (e.g., Toyota, Honda, Ford)
            year: Filter by year (1984-present)
            model: Narrow to a model name (e.g., Camry)
            trim: Narrow to a trim level (e.g., Hybrid)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/carmodels"),
            query_params=[
                param[str]("make", make),
                param[int | None]("year", year),
                param[str | None]("model", model),
                param[str | None]("trim", trim),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CarmodelsResponse],
            error_mapper=carmodels_error_mapper,
            request_options=request_options,
        )

    async def vindecoder(
        self, vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1VindecoderResponse, VindecoderErrorBody]:
        """Decode a Vehicle Identification Number into the vehicle it identifies

        Args:
            vin: The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the
                available characters allow.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/vindecoder"),
            query_params=[param[str]("vin", vin)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1VindecoderResponse],
            error_mapper=vindecoder_error_mapper,
            request_options=request_options,
        )
