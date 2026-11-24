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
from ..errors.colorsimilarity_error import ColorsimilarityErrorBody, colorsimilarity_error_mapper
from ..errors.daylightduration_error import DaylightdurationErrorBody, daylightduration_error_mapper
from ..errors.fibonaccigenerator_error import FibonaccigeneratorErrorBody, fibonaccigenerator_error_mapper
from ..errors.permutationcombination_error import PermutationcombinationErrorBody, permutationcombination_error_mapper
from ..errors.romannumeralmath_error import RomannumeralmathErrorBody, romannumeralmath_error_mapper
from ..errors.tipcalculator_error import TipcalculatorErrorBody, tipcalculator_error_mapper
from ..errors.truthtable_error import TruthtableErrorBody, truthtable_error_mapper
from ..errors.utmconverter_error import UtmconverterErrorBody, utmconverter_error_mapper
from ..models.v1_colorsimilarity_response import V1ColorsimilarityResponse
from ..models.v1_daylightduration_response import V1DaylightdurationResponse
from ..models.v1_fibonaccigenerator_response import V1FibonaccigeneratorResponse
from ..models.v1_permutationcombination_response import V1PermutationcombinationResponse
from ..models.v1_romannumeralmath_response import V1RomannumeralmathResponse
from ..models.v1_tipcalculator_response import V1TipcalculatorResponse
from ..models.v1_truthtable_response import V1TruthtableResponse
from ..models.v1_utmconverter_response import V1UtmconverterResponse
from ..server.server import Server


class MathCalculations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MathCalculationsWithRawResponse(client, server, auth)

    def colorsimilarity(
        self, color1: str, color2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ColorsimilarityResponse:
        """Calculate similarity between two hex colors

        Args:
            color1: First hex color value (with or without # prefix)
            color2: Second hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.colorsimilarity(color1, color2, request_options=request_options))

    def daylightduration(
        self,
        latitude: float,
        longitude: float,
        *,
        date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DaylightdurationResponse:
        """Calculate sunrise, sunset, and daylight hours for a location

        Args:
            latitude: Latitude of the location
            longitude: Longitude of the location
            date: Date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.daylightduration(latitude, longitude, date=date, request_options=request_options)
        )

    def fibonaccigenerator(
        self, count: int, *, startfrom: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1FibonaccigeneratorResponse:
        """Generate a specific number of Fibonacci numbers

        Args:
            count: Number of Fibonacci numbers to generate
            startfrom: Start from this position in the sequence
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.fibonaccigenerator(count, startfrom=startfrom, request_options=request_options)
        )

    def permutationcombination(
        self, n: int, r: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PermutationcombinationResponse:
        """Calculate P(n,r) and C(n,r) values

        Args:
            n: Total number of items
            r: Number of items to choose (must be <= n)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.permutationcombination(n, r, request_options=request_options))

    def romannumeralmath(
        self,
        roman1: str,
        roman2: str,
        *,
        operation: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RomannumeralmathResponse:
        """Perform arithmetic operations with Roman numerals

        Args:
            roman1: The first Roman numeral
            roman2: The second Roman numeral
            operation: Operation to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.romannumeralmath(
                roman1, roman2, operation=operation, request_options=request_options
            ),
        )

    def tipcalculator(
        self,
        amount: float,
        *,
        percentage: float | None = None,
        people: int | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TipcalculatorResponse:
        """Calculate tip amount and split bill among people

        Args:
            amount: The bill amount before tip
            percentage: Tip percentage
            people: Number of people to split the bill
            currency: Currency code for display
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.tipcalculator(
                amount, percentage=percentage, people=people, currency=currency, request_options=request_options
            ),
        )

    def truthtable(
        self, expression: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1TruthtableResponse:
        """Generate a truth table for a boolean expression

        Args:
            expression: Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.truthtable(expression, request_options=request_options))

    def utmconverter(
        self,
        latitude: float,
        longitude: float,
        *,
        direction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UtmconverterResponse:
        """Convert latitude/longitude coordinates to UTM format

        Args:
            latitude: Latitude (-90 to 90)
            longitude: Longitude (-180 to 180)
            direction: Conversion direction
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.utmconverter(
                latitude, longitude, direction=direction, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MathCalculationsWithRawResponse:
        return self._with_raw_response


class AsyncMathCalculations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMathCalculationsWithRawResponse(client, server, auth)

    async def colorsimilarity(
        self, color1: str, color2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ColorsimilarityResponse:
        """Calculate similarity between two hex colors

        Args:
            color1: First hex color value (with or without # prefix)
            color2: Second hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.colorsimilarity(color1, color2, request_options=request_options))

    async def daylightduration(
        self,
        latitude: float,
        longitude: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DaylightdurationResponse:
        """Calculate sunrise, sunset, and daylight hours for a location

        Args:
            latitude: Latitude of the location
            longitude: Longitude of the location
            date: Date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.daylightduration(
                latitude, longitude, date=date, request_options=request_options
            ),
        )

    async def fibonaccigenerator(
        self, count: int, *, startfrom: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1FibonaccigeneratorResponse:
        """Generate a specific number of Fibonacci numbers

        Args:
            count: Number of Fibonacci numbers to generate
            startfrom: Start from this position in the sequence
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.fibonaccigenerator(
                count, startfrom=startfrom, request_options=request_options
            ),
        )

    async def permutationcombination(
        self, n: int, r: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PermutationcombinationResponse:
        """Calculate P(n,r) and C(n,r) values

        Args:
            n: Total number of items
            r: Number of items to choose (must be <= n)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.permutationcombination(n, r, request_options=request_options))

    async def romannumeralmath(
        self,
        roman1: str,
        roman2: str,
        *,
        operation: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RomannumeralmathResponse:
        """Perform arithmetic operations with Roman numerals

        Args:
            roman1: The first Roman numeral
            roman2: The second Roman numeral
            operation: Operation to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.romannumeralmath(
                roman1, roman2, operation=operation, request_options=request_options
            ),
        )

    async def tipcalculator(
        self,
        amount: float,
        *,
        percentage: float | None = None,
        people: int | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TipcalculatorResponse:
        """Calculate tip amount and split bill among people

        Args:
            amount: The bill amount before tip
            percentage: Tip percentage
            people: Number of people to split the bill
            currency: Currency code for display
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.tipcalculator(
                amount, percentage=percentage, people=people, currency=currency, request_options=request_options
            ),
        )

    async def truthtable(
        self, expression: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TruthtableResponse:
        """Generate a truth table for a boolean expression

        Args:
            expression: Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.truthtable(expression, request_options=request_options))

    async def utmconverter(
        self,
        latitude: float,
        longitude: float,
        *,
        direction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UtmconverterResponse:
        """Convert latitude/longitude coordinates to UTM format

        Args:
            latitude: Latitude (-90 to 90)
            longitude: Longitude (-180 to 180)
            direction: Conversion direction
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.utmconverter(
                latitude, longitude, direction=direction, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMathCalculationsWithRawResponse:
        return self._with_raw_response


class MathCalculationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def colorsimilarity(
        self, color1: str, color2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorsimilarityResponse, ColorsimilarityErrorBody]:
        """Calculate similarity between two hex colors

        Args:
            color1: First hex color value (with or without # prefix)
            color2: Second hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorsimilarity"),
            query_params=[param[str]("color1", color1), param[str]("color2", color2)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ColorsimilarityResponse],
            error_mapper=colorsimilarity_error_mapper,
            request_options=request_options,
        )

    def daylightduration(
        self,
        latitude: float,
        longitude: float,
        *,
        date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DaylightdurationResponse, DaylightdurationErrorBody]:
        """Calculate sunrise, sunset, and daylight hours for a location

        Args:
            latitude: Latitude of the location
            longitude: Longitude of the location
            date: Date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/daylightduration"),
            query_params=[
                param[float]("latitude", latitude),
                param[float]("longitude", longitude),
                param[str | None]("date", date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DaylightdurationResponse],
            error_mapper=daylightduration_error_mapper,
            request_options=request_options,
        )

    def fibonaccigenerator(
        self, count: int, *, startfrom: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1FibonaccigeneratorResponse, FibonaccigeneratorErrorBody]:
        """Generate a specific number of Fibonacci numbers

        Args:
            count: Number of Fibonacci numbers to generate
            startfrom: Start from this position in the sequence
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fibonaccigenerator"),
            query_params=[param[int]("count", count), param[int | None]("startfrom", startfrom)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FibonaccigeneratorResponse],
            error_mapper=fibonaccigenerator_error_mapper,
            request_options=request_options,
        )

    def permutationcombination(
        self, n: int, r: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PermutationcombinationResponse, PermutationcombinationErrorBody]:
        """Calculate P(n,r) and C(n,r) values

        Args:
            n: Total number of items
            r: Number of items to choose (must be <= n)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/permutationcombination"),
            query_params=[param[int]("n", n), param[int]("r", r)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PermutationcombinationResponse],
            error_mapper=permutationcombination_error_mapper,
            request_options=request_options,
        )

    def romannumeralmath(
        self,
        roman1: str,
        roman2: str,
        *,
        operation: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RomannumeralmathResponse, RomannumeralmathErrorBody]:
        """Perform arithmetic operations with Roman numerals

        Args:
            roman1: The first Roman numeral
            roman2: The second Roman numeral
            operation: Operation to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/romannumeralmath"),
            query_params=[
                param[str]("roman1", roman1), param[str]("roman2", roman2), param[str | None]("operation", operation)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RomannumeralmathResponse],
            error_mapper=romannumeralmath_error_mapper,
            request_options=request_options,
        )

    def tipcalculator(
        self,
        amount: float,
        *,
        percentage: float | None = None,
        people: int | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TipcalculatorResponse, TipcalculatorErrorBody]:
        """Calculate tip amount and split bill among people

        Args:
            amount: The bill amount before tip
            percentage: Tip percentage
            people: Number of people to split the bill
            currency: Currency code for display
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tipcalculator"),
            query_params=[
                param[float]("amount", amount),
                param[float | None]("percentage", percentage),
                param[int | None]("people", people),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TipcalculatorResponse],
            error_mapper=tipcalculator_error_mapper,
            request_options=request_options,
        )

    def truthtable(
        self, expression: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TruthtableResponse, TruthtableErrorBody]:
        """Generate a truth table for a boolean expression

        Args:
            expression: Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/truthtable"),
            query_params=[param[str]("expression", expression)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TruthtableResponse],
            error_mapper=truthtable_error_mapper,
            request_options=request_options,
        )

    def utmconverter(
        self,
        latitude: float,
        longitude: float,
        *,
        direction: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UtmconverterResponse, UtmconverterErrorBody]:
        """Convert latitude/longitude coordinates to UTM format

        Args:
            latitude: Latitude (-90 to 90)
            longitude: Longitude (-180 to 180)
            direction: Conversion direction
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/utmconverter"),
            query_params=[
                param[float]("latitude", latitude),
                param[float]("longitude", longitude),
                param[str | None]("direction", direction),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UtmconverterResponse],
            error_mapper=utmconverter_error_mapper,
            request_options=request_options,
        )


class AsyncMathCalculationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def colorsimilarity(
        self, color1: str, color2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorsimilarityResponse, ColorsimilarityErrorBody]:
        """Calculate similarity between two hex colors

        Args:
            color1: First hex color value (with or without # prefix)
            color2: Second hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorsimilarity"),
            query_params=[param[str]("color1", color1), param[str]("color2", color2)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ColorsimilarityResponse],
            error_mapper=colorsimilarity_error_mapper,
            request_options=request_options,
        )

    async def daylightduration(
        self,
        latitude: float,
        longitude: float,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DaylightdurationResponse, DaylightdurationErrorBody]:
        """Calculate sunrise, sunset, and daylight hours for a location

        Args:
            latitude: Latitude of the location
            longitude: Longitude of the location
            date: Date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/daylightduration"),
            query_params=[
                param[float]("latitude", latitude),
                param[float]("longitude", longitude),
                param[str | None]("date", date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DaylightdurationResponse],
            error_mapper=daylightduration_error_mapper,
            request_options=request_options,
        )

    async def fibonaccigenerator(
        self, count: int, *, startfrom: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1FibonaccigeneratorResponse, FibonaccigeneratorErrorBody]:
        """Generate a specific number of Fibonacci numbers

        Args:
            count: Number of Fibonacci numbers to generate
            startfrom: Start from this position in the sequence
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fibonaccigenerator"),
            query_params=[param[int]("count", count), param[int | None]("startfrom", startfrom)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FibonaccigeneratorResponse],
            error_mapper=fibonaccigenerator_error_mapper,
            request_options=request_options,
        )

    async def permutationcombination(
        self, n: int, r: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PermutationcombinationResponse, PermutationcombinationErrorBody]:
        """Calculate P(n,r) and C(n,r) values

        Args:
            n: Total number of items
            r: Number of items to choose (must be <= n)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/permutationcombination"),
            query_params=[param[int]("n", n), param[int]("r", r)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PermutationcombinationResponse],
            error_mapper=permutationcombination_error_mapper,
            request_options=request_options,
        )

    async def romannumeralmath(
        self,
        roman1: str,
        roman2: str,
        *,
        operation: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RomannumeralmathResponse, RomannumeralmathErrorBody]:
        """Perform arithmetic operations with Roman numerals

        Args:
            roman1: The first Roman numeral
            roman2: The second Roman numeral
            operation: Operation to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/romannumeralmath"),
            query_params=[
                param[str]("roman1", roman1), param[str]("roman2", roman2), param[str | None]("operation", operation)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RomannumeralmathResponse],
            error_mapper=romannumeralmath_error_mapper,
            request_options=request_options,
        )

    async def tipcalculator(
        self,
        amount: float,
        *,
        percentage: float | None = None,
        people: int | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TipcalculatorResponse, TipcalculatorErrorBody]:
        """Calculate tip amount and split bill among people

        Args:
            amount: The bill amount before tip
            percentage: Tip percentage
            people: Number of people to split the bill
            currency: Currency code for display
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/tipcalculator"),
            query_params=[
                param[float]("amount", amount),
                param[float | None]("percentage", percentage),
                param[int | None]("people", people),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TipcalculatorResponse],
            error_mapper=tipcalculator_error_mapper,
            request_options=request_options,
        )

    async def truthtable(
        self, expression: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TruthtableResponse, TruthtableErrorBody]:
        """Generate a truth table for a boolean expression

        Args:
            expression: Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/truthtable"),
            query_params=[param[str]("expression", expression)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TruthtableResponse],
            error_mapper=truthtable_error_mapper,
            request_options=request_options,
        )

    async def utmconverter(
        self,
        latitude: float,
        longitude: float,
        *,
        direction: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UtmconverterResponse, UtmconverterErrorBody]:
        """Convert latitude/longitude coordinates to UTM format

        Args:
            latitude: Latitude (-90 to 90)
            longitude: Longitude (-180 to 180)
            direction: Conversion direction
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/utmconverter"),
            query_params=[
                param[float]("latitude", latitude),
                param[float]("longitude", longitude),
                param[str | None]("direction", direction),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UtmconverterResponse],
            error_mapper=utmconverter_error_mapper,
            request_options=request_options,
        )
