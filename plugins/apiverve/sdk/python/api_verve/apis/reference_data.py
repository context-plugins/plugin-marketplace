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
from ..errors.birthstones_error import BirthstonesErrorBody, birthstones_error_mapper
from ..errors.caaparser_error import CaaparserErrorBody, caaparser_error_mapper
from ..errors.colorbrightness_error import ColorbrightnessErrorBody, colorbrightness_error_mapper
from ..errors.colornamefinder_error import ColornamefinderErrorBody, colornamefinder_error_mapper
from ..errors.httpstatuslookup_error import HttpstatuslookupErrorBody, httpstatuslookup_error_mapper
from ..errors.mayancalendar_error import MayancalendarErrorBody, mayancalendar_error_mapper
from ..errors.mimetypelookup_error import MimetypelookupErrorBody, mimetypelookup_error_mapper
from ..errors.portnumberlookup_error import PortnumberlookupErrorBody, portnumberlookup_error_mapper
from ..errors.ringsizeconverter_error import RingsizeconverterErrorBody, ringsizeconverter_error_mapper
from ..errors.shoesizeconverter_error import ShoesizeconverterErrorBody, shoesizeconverter_error_mapper
from ..errors.srvparser_error import SrvparserErrorBody, srvparser_error_mapper
from ..models.v1_birthstones_response import V1BirthstonesResponse
from ..models.v1_caaparser_request import V1CaaparserRequest, V1CaaparserRequestDict
from ..models.v1_caaparser_response import V1CaaparserResponse
from ..models.v1_colorbrightness_response import V1ColorbrightnessResponse
from ..models.v1_colornamefinder_response import V1ColornamefinderResponse
from ..models.v1_httpstatuslookup_response import V1HttpstatuslookupResponse
from ..models.v1_mayancalendar_response import V1MayancalendarResponse
from ..models.v1_mimetypelookup_response import V1MimetypelookupResponse
from ..models.v1_portnumberlookup_response import V1PortnumberlookupResponse
from ..models.v1_ringsizeconverter_response import V1RingsizeconverterResponse
from ..models.v1_shoesizeconverter_response import V1ShoesizeconverterResponse
from ..models.v1_srvparser_request import V1SrvparserRequest, V1SrvparserRequestDict
from ..models.v1_srvparser_response import V1SrvparserResponse
from ..server.server import Server


class ReferenceData:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReferenceDataWithRawResponse(client, server, auth)

    def birthstones(self, month: str, *, request_options: RequestOptionsOrDict | None = None) -> V1BirthstonesResponse:
        """Get birthstone information for a specific month

        Args:
            month: The month number (1-12) or name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.birthstones(month, request_options=request_options))

    def caaparser(
        self, body: V1CaaparserRequest | V1CaaparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CaaparserResponse:
        """Parse a DNS CAA record and extract authorization details

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.caaparser(body, request_options=request_options))

    def colorbrightness(
        self, hex_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ColorbrightnessResponse:
        """Calculate brightness, luminance, and contrast ratios for a color

        Args:
            hex_: Hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.colorbrightness(hex_, request_options=request_options))

    def colornamefinder(
        self, hex_: str, *, closest: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1ColornamefinderResponse:
        """Find the closest named color for a hex color value

        Args:
            hex_: Hex color value (with or without # prefix)
            closest: Number of closest color matches to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.colornamefinder(hex_, closest=closest, request_options=request_options))

    def httpstatuslookup(
        self, code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HttpstatuslookupResponse:
        """Get information about an HTTP status code

        Args:
            code: HTTP status code to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.httpstatuslookup(code, request_options=request_options))

    def mayancalendar(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MayancalendarResponse:
        """Convert a Gregorian date to Mayan calendar formats

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.mayancalendar(date, request_options=request_options))

    def mimetypelookup(
        self, extension: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MimetypelookupResponse:
        """Look up MIME type by file extension

        Args:
            extension: File extension to lookup (without the leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.mimetypelookup(extension, request_options=request_options))

    def portnumberlookup(
        self, port: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PortnumberlookupResponse:
        """Look up service information by port number

        Args:
            port: Port number to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.portnumberlookup(port, request_options=request_options))

    def ringsizeconverter(
        self, size: str, from_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RingsizeconverterResponse:
        """Convert ring size between international standards

        Args:
            size: The ring size to convert
            from_: Source region
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.ringsizeconverter(size, from_, request_options=request_options))

    def shoesizeconverter(
        self, size: str, from_: str, *, gender: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1ShoesizeconverterResponse:
        """Convert shoe size between international standards

        Args:
            size: The shoe size to convert
            from_: Source region
            gender: Gender sizing
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.shoesizeconverter(size, from_, gender=gender, request_options=request_options)
        )

    def srvparser(
        self, body: V1SrvparserRequest | V1SrvparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1SrvparserResponse:
        """Parse a DNS SRV record and extract service information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.srvparser(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ReferenceDataWithRawResponse:
        return self._with_raw_response


class AsyncReferenceData:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReferenceDataWithRawResponse(client, server, auth)

    async def birthstones(
        self, month: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1BirthstonesResponse:
        """Get birthstone information for a specific month

        Args:
            month: The month number (1-12) or name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.birthstones(month, request_options=request_options))

    async def caaparser(
        self,
        body: V1CaaparserRequest | V1CaaparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CaaparserResponse:
        """Parse a DNS CAA record and extract authorization details

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.caaparser(body, request_options=request_options))

    async def colorbrightness(
        self, hex_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ColorbrightnessResponse:
        """Calculate brightness, luminance, and contrast ratios for a color

        Args:
            hex_: Hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.colorbrightness(hex_, request_options=request_options))

    async def colornamefinder(
        self, hex_: str, *, closest: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ColornamefinderResponse:
        """Find the closest named color for a hex color value

        Args:
            hex_: Hex color value (with or without # prefix)
            closest: Number of closest color matches to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.colornamefinder(hex_, closest=closest, request_options=request_options)
        )

    async def httpstatuslookup(
        self, code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HttpstatuslookupResponse:
        """Get information about an HTTP status code

        Args:
            code: HTTP status code to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.httpstatuslookup(code, request_options=request_options))

    async def mayancalendar(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MayancalendarResponse:
        """Convert a Gregorian date to Mayan calendar formats

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.mayancalendar(date, request_options=request_options))

    async def mimetypelookup(
        self, extension: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MimetypelookupResponse:
        """Look up MIME type by file extension

        Args:
            extension: File extension to lookup (without the leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.mimetypelookup(extension, request_options=request_options))

    async def portnumberlookup(
        self, port: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PortnumberlookupResponse:
        """Look up service information by port number

        Args:
            port: Port number to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.portnumberlookup(port, request_options=request_options))

    async def ringsizeconverter(
        self, size: str, from_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1RingsizeconverterResponse:
        """Convert ring size between international standards

        Args:
            size: The ring size to convert
            from_: Source region
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.ringsizeconverter(size, from_, request_options=request_options))

    async def shoesizeconverter(
        self,
        size: str,
        from_: str,
        *,
        gender: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ShoesizeconverterResponse:
        """Convert shoe size between international standards

        Args:
            size: The shoe size to convert
            from_: Source region
            gender: Gender sizing
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.shoesizeconverter(size, from_, gender=gender, request_options=request_options)
        )

    async def srvparser(
        self,
        body: V1SrvparserRequest | V1SrvparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SrvparserResponse:
        """Parse a DNS SRV record and extract service information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.srvparser(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncReferenceDataWithRawResponse:
        return self._with_raw_response


class ReferenceDataWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def birthstones(
        self, month: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BirthstonesResponse, BirthstonesErrorBody]:
        """Get birthstone information for a specific month

        Args:
            month: The month number (1-12) or name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/birthstones"),
            query_params=[param[str]("month", month)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BirthstonesResponse],
            error_mapper=birthstones_error_mapper,
            request_options=request_options,
        )

    def caaparser(
        self, body: V1CaaparserRequest | V1CaaparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CaaparserResponse, CaaparserErrorBody]:
        """Parse a DNS CAA record and extract authorization details

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/caaparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CaaparserRequest | V1CaaparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CaaparserResponse],
            error_mapper=caaparser_error_mapper,
            request_options=request_options,
        )

    def colorbrightness(
        self, hex_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorbrightnessResponse, ColorbrightnessErrorBody]:
        """Calculate brightness, luminance, and contrast ratios for a color

        Args:
            hex_: Hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorbrightness"),
            query_params=[param[str]("hex", hex_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ColorbrightnessResponse],
            error_mapper=colorbrightness_error_mapper,
            request_options=request_options,
        )

    def colornamefinder(
        self, hex_: str, *, closest: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColornamefinderResponse, ColornamefinderErrorBody]:
        """Find the closest named color for a hex color value

        Args:
            hex_: Hex color value (with or without # prefix)
            closest: Number of closest color matches to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colornamefinder"),
            query_params=[param[str]("hex", hex_), param[int | None]("closest", closest)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ColornamefinderResponse],
            error_mapper=colornamefinder_error_mapper,
            request_options=request_options,
        )

    def httpstatuslookup(
        self, code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HttpstatuslookupResponse, HttpstatuslookupErrorBody]:
        """Get information about an HTTP status code

        Args:
            code: HTTP status code to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/httpstatuslookup"),
            query_params=[param[int]("code", code)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HttpstatuslookupResponse],
            error_mapper=httpstatuslookup_error_mapper,
            request_options=request_options,
        )

    def mayancalendar(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MayancalendarResponse, MayancalendarErrorBody]:
        """Convert a Gregorian date to Mayan calendar formats

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mayancalendar"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MayancalendarResponse],
            error_mapper=mayancalendar_error_mapper,
            request_options=request_options,
        )

    def mimetypelookup(
        self, extension: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MimetypelookupResponse, MimetypelookupErrorBody]:
        """Look up MIME type by file extension

        Args:
            extension: File extension to lookup (without the leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mimetypelookup"),
            query_params=[param[str]("extension", extension)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MimetypelookupResponse],
            error_mapper=mimetypelookup_error_mapper,
            request_options=request_options,
        )

    def portnumberlookup(
        self, port: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PortnumberlookupResponse, PortnumberlookupErrorBody]:
        """Look up service information by port number

        Args:
            port: Port number to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/portnumberlookup"),
            query_params=[param[int]("port", port)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PortnumberlookupResponse],
            error_mapper=portnumberlookup_error_mapper,
            request_options=request_options,
        )

    def ringsizeconverter(
        self, size: str, from_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RingsizeconverterResponse, RingsizeconverterErrorBody]:
        """Convert ring size between international standards

        Args:
            size: The ring size to convert
            from_: Source region
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ringsizeconverter"),
            query_params=[param[str]("size", size), param[str]("from", from_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RingsizeconverterResponse],
            error_mapper=ringsizeconverter_error_mapper,
            request_options=request_options,
        )

    def shoesizeconverter(
        self, size: str, from_: str, *, gender: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ShoesizeconverterResponse, ShoesizeconverterErrorBody]:
        """Convert shoe size between international standards

        Args:
            size: The shoe size to convert
            from_: Source region
            gender: Gender sizing
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shoesizeconverter"),
            query_params=[param[str]("size", size), param[str]("from", from_), param[str | None]("gender", gender)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ShoesizeconverterResponse],
            error_mapper=shoesizeconverter_error_mapper,
            request_options=request_options,
        )

    def srvparser(
        self, body: V1SrvparserRequest | V1SrvparserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SrvparserResponse, SrvparserErrorBody]:
        """Parse a DNS SRV record and extract service information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/srvparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SrvparserRequest | V1SrvparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SrvparserResponse],
            error_mapper=srvparser_error_mapper,
            request_options=request_options,
        )


class AsyncReferenceDataWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def birthstones(
        self, month: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BirthstonesResponse, BirthstonesErrorBody]:
        """Get birthstone information for a specific month

        Args:
            month: The month number (1-12) or name
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/birthstones"),
            query_params=[param[str]("month", month)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BirthstonesResponse],
            error_mapper=birthstones_error_mapper,
            request_options=request_options,
        )

    async def caaparser(
        self,
        body: V1CaaparserRequest | V1CaaparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CaaparserResponse, CaaparserErrorBody]:
        """Parse a DNS CAA record and extract authorization details

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/caaparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CaaparserRequest | V1CaaparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CaaparserResponse],
            error_mapper=caaparser_error_mapper,
            request_options=request_options,
        )

    async def colorbrightness(
        self, hex_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorbrightnessResponse, ColorbrightnessErrorBody]:
        """Calculate brightness, luminance, and contrast ratios for a color

        Args:
            hex_: Hex color value (with or without # prefix)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorbrightness"),
            query_params=[param[str]("hex", hex_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ColorbrightnessResponse],
            error_mapper=colorbrightness_error_mapper,
            request_options=request_options,
        )

    async def colornamefinder(
        self, hex_: str, *, closest: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColornamefinderResponse, ColornamefinderErrorBody]:
        """Find the closest named color for a hex color value

        Args:
            hex_: Hex color value (with or without # prefix)
            closest: Number of closest color matches to return
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colornamefinder"),
            query_params=[param[str]("hex", hex_), param[int | None]("closest", closest)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ColornamefinderResponse],
            error_mapper=colornamefinder_error_mapper,
            request_options=request_options,
        )

    async def httpstatuslookup(
        self, code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HttpstatuslookupResponse, HttpstatuslookupErrorBody]:
        """Get information about an HTTP status code

        Args:
            code: HTTP status code to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/httpstatuslookup"),
            query_params=[param[int]("code", code)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HttpstatuslookupResponse],
            error_mapper=httpstatuslookup_error_mapper,
            request_options=request_options,
        )

    async def mayancalendar(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MayancalendarResponse, MayancalendarErrorBody]:
        """Convert a Gregorian date to Mayan calendar formats

        Args:
            date: The Gregorian date in YYYY-MM-DD format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mayancalendar"),
            query_params=[param[str]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MayancalendarResponse],
            error_mapper=mayancalendar_error_mapper,
            request_options=request_options,
        )

    async def mimetypelookup(
        self, extension: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MimetypelookupResponse, MimetypelookupErrorBody]:
        """Look up MIME type by file extension

        Args:
            extension: File extension to lookup (without the leading dot)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/mimetypelookup"),
            query_params=[param[str]("extension", extension)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MimetypelookupResponse],
            error_mapper=mimetypelookup_error_mapper,
            request_options=request_options,
        )

    async def portnumberlookup(
        self, port: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PortnumberlookupResponse, PortnumberlookupErrorBody]:
        """Look up service information by port number

        Args:
            port: Port number to lookup
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/portnumberlookup"),
            query_params=[param[int]("port", port)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PortnumberlookupResponse],
            error_mapper=portnumberlookup_error_mapper,
            request_options=request_options,
        )

    async def ringsizeconverter(
        self, size: str, from_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RingsizeconverterResponse, RingsizeconverterErrorBody]:
        """Convert ring size between international standards

        Args:
            size: The ring size to convert
            from_: Source region
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ringsizeconverter"),
            query_params=[param[str]("size", size), param[str]("from", from_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RingsizeconverterResponse],
            error_mapper=ringsizeconverter_error_mapper,
            request_options=request_options,
        )

    async def shoesizeconverter(
        self,
        size: str,
        from_: str,
        *,
        gender: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ShoesizeconverterResponse, ShoesizeconverterErrorBody]:
        """Convert shoe size between international standards

        Args:
            size: The shoe size to convert
            from_: Source region
            gender: Gender sizing
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shoesizeconverter"),
            query_params=[param[str]("size", size), param[str]("from", from_), param[str | None]("gender", gender)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ShoesizeconverterResponse],
            error_mapper=shoesizeconverter_error_mapper,
            request_options=request_options,
        )

    async def srvparser(
        self,
        body: V1SrvparserRequest | V1SrvparserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SrvparserResponse, SrvparserErrorBody]:
        """Parse a DNS SRV record and extract service information

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/srvparser"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SrvparserRequest | V1SrvparserRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SrvparserResponse],
            error_mapper=srvparser_error_mapper,
            request_options=request_options,
        )
