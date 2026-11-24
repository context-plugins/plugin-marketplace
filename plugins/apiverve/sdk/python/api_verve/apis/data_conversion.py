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
from ..errors.ascii85_encoder_error import Ascii85EncoderErrorBody, ascii85_encoder_error_mapper
from ..errors.base64_error import Base64ErrorBody, base64_error_mapper
from ..errors.colorconverter_error import ColorconverterErrorBody, colorconverter_error_mapper
from ..errors.csvtojson_error import CsvtojsonErrorBody, csvtojson_error_mapper
from ..errors.filesizeformatter_error import FilesizeformatterErrorBody, filesizeformatter_error_mapper
from ..errors.htmlentities_error import HtmlentitiesErrorBody, htmlentities_error_mapper
from ..errors.htmltoimage_error import HtmltoimageErrorBody, htmltoimage_error_mapper
from ..errors.jsontocsv_error import JsontocsvErrorBody, jsontocsv_error_mapper
from ..errors.jsontojsonp_error import JsontojsonpErrorBody, jsontojsonp_error_mapper
from ..errors.jwtdecoder_error import JwtdecoderErrorBody, jwtdecoder_error_mapper
from ..errors.markdowntable_error import MarkdowntableErrorBody, markdowntable_error_mapper
from ..errors.markdowntohtml_error import MarkdowntohtmlErrorBody, markdowntohtml_error_mapper
from ..errors.markdowntoimage_error import MarkdowntoimageErrorBody, markdowntoimage_error_mapper
from ..errors.markdowntopdf_error import MarkdowntopdfErrorBody, markdowntopdf_error_mapper
from ..errors.math_error import MathErrorBody, math_error_mapper
from ..errors.meetingtimeconverter_error import MeetingtimeconverterErrorBody, meetingtimeconverter_error_mapper
from ..errors.numberbaseconverter_error import NumberbaseconverterErrorBody, numberbaseconverter_error_mapper
from ..errors.numbertowords_error import NumbertowordsErrorBody, numbertowords_error_mapper
from ..errors.placeholdertext_error import PlaceholdertextErrorBody, placeholdertext_error_mapper
from ..errors.punycode_error import PunycodeErrorBody, punycode_error_mapper
from ..errors.querystringbuilder_error import QuerystringbuilderErrorBody, querystringbuilder_error_mapper
from ..errors.relativetimeformatter_error import RelativetimeformatterErrorBody, relativetimeformatter_error_mapper
from ..errors.romanconverter_error import RomanconverterErrorBody, romanconverter_error_mapper
from ..errors.texttocolor_error import TexttocolorErrorBody, texttocolor_error_mapper
from ..errors.unicodeescape_error import UnicodeescapeErrorBody, unicodeescape_error_mapper
from ..errors.unitconverter_error import UnitconverterErrorBody, unitconverter_error_mapper
from ..errors.unixtimestamp_error import UnixtimestampErrorBody, unixtimestamp_error_mapper
from ..errors.urlencode_error import UrlencodeErrorBody, urlencode_error_mapper
from ..errors.urltomarkdown_error import UrltomarkdownErrorBody, urltomarkdown_error_mapper
from ..errors.variablenameconverter_error import VariablenameconverterErrorBody, variablenameconverter_error_mapper
from ..errors.websitetotext_error import WebsitetotextErrorBody, websitetotext_error_mapper
from ..errors.wordstonumbers_error import WordstonumbersErrorBody, wordstonumbers_error_mapper
from ..errors.xmltojson_error import XmltojsonErrorBody, xmltojson_error_mapper
from ..models.v1_ascii85_encoder_response import V1Ascii85EncoderResponse
from ..models.v1_base64_response import V1Base64Response
from ..models.v1_colorconverter_response import V1ColorconverterResponse
from ..models.v1_csvtojson_request import V1CsvtojsonRequest, V1CsvtojsonRequestDict
from ..models.v1_csvtojson_response import V1CsvtojsonResponse
from ..models.v1_filesizeformatter_response import V1FilesizeformatterResponse
from ..models.v1_htmlentities_request import V1HtmlentitiesRequest, V1HtmlentitiesRequestDict
from ..models.v1_htmlentities_response import V1HtmlentitiesResponse
from ..models.v1_htmltoimage_request import V1HtmltoimageRequest, V1HtmltoimageRequestDict
from ..models.v1_htmltoimage_response import V1HtmltoimageResponse
from ..models.v1_jsontocsv_request import V1JsontocsvRequest, V1JsontocsvRequestDict
from ..models.v1_jsontocsv_response import V1JsontocsvResponse
from ..models.v1_jsontojsonp_request import V1JsontojsonpRequest, V1JsontojsonpRequestDict
from ..models.v1_jsontojsonp_response import V1JsontojsonpResponse
from ..models.v1_jwtdecoder_request import V1JwtdecoderRequest, V1JwtdecoderRequestDict
from ..models.v1_jwtdecoder_response import V1JwtdecoderResponse
from ..models.v1_markdowntable_request import V1MarkdowntableRequest, V1MarkdowntableRequestDict
from ..models.v1_markdowntable_response import V1MarkdowntableResponse
from ..models.v1_markdowntohtml_request import V1MarkdowntohtmlRequest, V1MarkdowntohtmlRequestDict
from ..models.v1_markdowntohtml_response import V1MarkdowntohtmlResponse
from ..models.v1_markdowntoimage_request import V1MarkdowntoimageRequest, V1MarkdowntoimageRequestDict
from ..models.v1_markdowntoimage_response import V1MarkdowntoimageResponse
from ..models.v1_markdowntopdf_request import V1MarkdowntopdfRequest, V1MarkdowntopdfRequestDict
from ..models.v1_markdowntopdf_response import V1MarkdowntopdfResponse
from ..models.v1_math_request import V1MathRequest, V1MathRequestDict
from ..models.v1_math_response import V1MathResponse
from ..models.v1_meetingtimeconverter_response import V1MeetingtimeconverterResponse
from ..models.v1_numberbaseconverter_response import V1NumberbaseconverterResponse
from ..models.v1_numbertowords_response import V1NumbertowordsResponse
from ..models.v1_placeholdertext_response import V1PlaceholdertextResponse
from ..models.v1_punycode_response import V1PunycodeResponse
from ..models.v1_querystringbuilder_request import V1QuerystringbuilderRequest, V1QuerystringbuilderRequestDict
from ..models.v1_querystringbuilder_response import V1QuerystringbuilderResponse
from ..models.v1_relativetimeformatter_response import V1RelativetimeformatterResponse
from ..models.v1_romanconverter_response import V1RomanconverterResponse
from ..models.v1_texttocolor_response import V1TexttocolorResponse
from ..models.v1_unicodeescape_request import V1UnicodeescapeRequest, V1UnicodeescapeRequestDict
from ..models.v1_unicodeescape_response import V1UnicodeescapeResponse
from ..models.v1_unitconverter_response import V1UnitconverterResponse
from ..models.v1_unixtimestamp_response import V1UnixtimestampResponse
from ..models.v1_urlencode_request import V1UrlencodeRequest, V1UrlencodeRequestDict
from ..models.v1_urlencode_response import V1UrlencodeResponse
from ..models.v1_urltomarkdown_request import V1UrltomarkdownRequest, V1UrltomarkdownRequestDict
from ..models.v1_urltomarkdown_response import V1UrltomarkdownResponse
from ..models.v1_variablenameconverter_request import V1VariablenameconverterRequest, V1VariablenameconverterRequestDict
from ..models.v1_variablenameconverter_response import V1VariablenameconverterResponse
from ..models.v1_websitetotext_request import V1WebsitetotextRequest, V1WebsitetotextRequestDict
from ..models.v1_websitetotext_response import V1WebsitetotextResponse
from ..models.v1_wordstonumbers_response import V1WordstonumbersResponse
from ..models.v1_xmltojson_request import V1XmltojsonRequest, V1XmltojsonRequestDict
from ..models.v1_xmltojson_response import V1XmltojsonResponse
from ..server.server import Server


class DataConversion:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataConversionWithRawResponse(client, server, auth)

    def ascii85encoder(
        self,
        text: str,
        *,
        action: str | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1Ascii85EncoderResponse:
        """Encode text using ASCII85 (Base85) encoding

        Args:
            text: Text to encode
            action: Action to perform
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.ascii85encoder(
                text, action=action, format_=format_, request_options=request_options
            ),
        )

    def base64(
        self, text: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1Base64Response:
        """Encode text to Base64 format

        Args:
            text: The text to encode
            action: The action to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.base64(text, action=action, request_options=request_options))

    def colorconverter(
        self, hex_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ColorconverterResponse:
        """Convert a color to a different format

        Args:
            hex_: The color in hexadecimal format (e.g., FF0000). Make sure you ommit the #
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.colorconverter(hex_, request_options=request_options))

    def csvtojson(
        self, body: V1CsvtojsonRequest | V1CsvtojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CsvtojsonResponse:
        """Convert CSV data to JSON format with custom delimiter support

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.csvtojson(body, request_options=request_options))

    def filesizeformatter(
        self,
        bytes_: int,
        *,
        unit: str | None = None,
        precision: int | None = None,
        standard: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1FilesizeformatterResponse:
        """Convert bytes to human-readable file size

        Args:
            bytes_: Number of bytes to format
            unit: Specific target unit (optional, auto-selects best unit if not specified)
            precision: Decimal places (0-10)
            standard: Standard to use: binary (1024) or decimal (1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.filesizeformatter(
                bytes_, unit=unit, precision=precision, standard=standard, request_options=request_options
            ),
        )

    def htmlentities(
        self,
        body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HtmlentitiesResponse:
        """Encode HTML special characters to entities for XSS prevention

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.htmlentities(body, request_options=request_options))

    def htmltoimage(
        self,
        body: V1HtmltoimageRequest | V1HtmltoimageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HtmltoimageResponse:
        """Convert HTML code to image with customizable dimensions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.htmltoimage(body, request_options=request_options))

    def jsontocsv(
        self, body: V1JsontocsvRequest | V1JsontocsvRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1JsontocsvResponse:
        """Convert JSON array data to CSV format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jsontocsv(body, request_options=request_options))

    def jsontojsonp(
        self,
        body: V1JsontojsonpRequest | V1JsontojsonpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JsontojsonpResponse:
        """JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP
        data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jsontojsonp(body, request_options=request_options))

    def jwtdecoder(
        self,
        body: V1JwtdecoderRequest | V1JwtdecoderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JwtdecoderResponse:
        """Decode JWT token without verification

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jwtdecoder(body, request_options=request_options))

    def markdowntable(
        self,
        body: V1MarkdowntableRequest | V1MarkdowntableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MarkdowntableResponse:
        """Convert data to a formatted markdown table

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.markdowntable(body, request_options=request_options))

    def markdowntohtml(
        self,
        body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MarkdowntohtmlResponse:
        """Convert markdown text to HTML

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.markdowntohtml(body, request_options=request_options))

    def markdowntoimage(
        self,
        body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MarkdowntoimageResponse:
        """Convert markdown text to image file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.markdowntoimage(body, request_options=request_options))

    def markdowntopdf(
        self,
        body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MarkdowntopdfResponse:
        """Convert markdown text to PDF document

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.markdowntopdf(body, request_options=request_options))

    def math(
        self, body: V1MathRequest | V1MathRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1MathResponse:
        """Perform basic math operations: add, subtract, multiply, divide, power, modulo

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.math(body, request_options=request_options))

    def meetingtimeconverter(
        self,
        time: str,
        from_timezone: str,
        to_timezone: str,
        *,
        date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MeetingtimeconverterResponse:
        """Convert meeting time between timezones

        Args:
            time: Time in HH:MM format (24-hour)
            from_timezone: Source IANA timezone identifier
            to_timezone: Target IANA timezone identifier
            date: Optional date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.meetingtimeconverter(
                time, from_timezone, to_timezone, date=date, request_options=request_options
            ),
        )

    def numberbaseconverter(
        self,
        value: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1NumberbaseconverterResponse:
        """Convert a number from one base to another

        Args:
            value: The number to convert
            from_: Source base (default: 10)
            to: Target base (returns all common bases if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.numberbaseconverter(value, from_=from_, to=to, request_options=request_options)
        )

    def numbertowords(
        self, number: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1NumbertowordsResponse:
        """Convert a number to words, including each word and the orginal equivalent

        Args:
            number: The number to convert to words
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.numbertowords(number, request_options=request_options))

    def placeholdertext(
        self,
        *,
        style: str | None = None,
        paragraphs: int | None = None,
        sentences: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PlaceholdertextResponse:
        """Generate placeholder text in various styles

        Args:
            style: The style of placeholder text
            paragraphs: Number of paragraphs to generate
            sentences: Number of sentences per paragraph
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.placeholdertext(
                style=style, paragraphs=paragraphs, sentences=sentences, request_options=request_options
            ),
        )

    def punycode(
        self, text: str, *, mode: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1PunycodeResponse:
        """Encode Unicode text to Punycode (ASCII-compatible encoding)

        Args:
            text: Unicode text or domain to encode (max 1000 characters)
            mode: Conversion mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.punycode(text, mode=mode, request_options=request_options))

    def querystringbuilder(
        self,
        body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1QuerystringbuilderResponse:
        """Build URL query string from JSON parameters

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.querystringbuilder(body, request_options=request_options))

    def relativetimeformatter(
        self,
        timestamp: str,
        *,
        reference: str | None = None,
        style: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RelativetimeformatterResponse:
        """Convert Unix timestamp to relative time format

        Args:
            timestamp: Unix timestamp in seconds or milliseconds
            reference: Reference time to compare against (default: current time)
            style: Output style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.relativetimeformatter(
                timestamp, reference=reference, style=style, request_options=request_options
            ),
        )

    def romanconverter(
        self, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1RomanconverterResponse:
        """Convert a number to Roman numerals

        Args:
            number: The number to convert to Roman numerals
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.romanconverter(number, request_options=request_options))

    def texttocolor(self, color: str, *, request_options: RequestOptionsOrDict | None = None) -> V1TexttocolorResponse:
        """Generate a color from text

        Args:
            color: The text to convert the color from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.texttocolor(color, request_options=request_options))

    def unicodeescape(
        self,
        body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UnicodeescapeResponse:
        r"""Convert characters to Unicode escape sequences (\uXXXX format)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.unicodeescape(body, request_options=request_options))

    def unitconverter(
        self, value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1UnitconverterResponse:
        """Convert units from one to another

        Args:
            value: The value to convert
            from_: The unit to convert from
            to: The unit to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.unitconverter(value, from_, to, request_options=request_options))

    def unixtimestamp(
        self, timestamp: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1UnixtimestampResponse:
        """Convert Unix timestamp to human-readable date

        Args:
            timestamp: Unix timestamp to convert
            format_: Timestamp format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.unixtimestamp(timestamp, format_=format_, request_options=request_options)
        )

    def urlencode(
        self, body: V1UrlencodeRequest | V1UrlencodeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1UrlencodeResponse:
        """Encode text to URL-safe format (percent-encoding)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.urlencode(body, request_options=request_options))

    def urltomarkdown(
        self,
        body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UrltomarkdownResponse:
        """Convert a webpage URL to Markdown format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.urltomarkdown(body, request_options=request_options))

    def variablenameconverter(
        self,
        body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1VariablenameconverterResponse:
        """Convert variable names between naming conventions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.variablenameconverter(body, request_options=request_options))

    def websitetotext(
        self,
        body: V1WebsitetotextRequest | V1WebsitetotextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebsitetotextResponse:
        """Convert a given webiste content to simple text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.websitetotext(body, request_options=request_options))

    def wordstonumbers(
        self, words: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WordstonumbersResponse:
        """Convert words to numbers, including each word and the orginal equivalent

        Args:
            words: The words to convert to numbers
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.wordstonumbers(words, request_options=request_options))

    def xmltojson(
        self, body: V1XmltojsonRequest | V1XmltojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1XmltojsonResponse:
        """Convert XML to JSON

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.xmltojson(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DataConversionWithRawResponse:
        return self._with_raw_response


class AsyncDataConversion:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataConversionWithRawResponse(client, server, auth)

    async def ascii85encoder(
        self,
        text: str,
        *,
        action: str | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1Ascii85EncoderResponse:
        """Encode text using ASCII85 (Base85) encoding

        Args:
            text: Text to encode
            action: Action to perform
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.ascii85encoder(
                text, action=action, format_=format_, request_options=request_options
            ),
        )

    async def base64(
        self, text: str, *, action: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1Base64Response:
        """Encode text to Base64 format

        Args:
            text: The text to encode
            action: The action to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.base64(text, action=action, request_options=request_options))

    async def colorconverter(
        self, hex_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ColorconverterResponse:
        """Convert a color to a different format

        Args:
            hex_: The color in hexadecimal format (e.g., FF0000). Make sure you ommit the #
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.colorconverter(hex_, request_options=request_options))

    async def csvtojson(
        self,
        body: V1CsvtojsonRequest | V1CsvtojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CsvtojsonResponse:
        """Convert CSV data to JSON format with custom delimiter support

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.csvtojson(body, request_options=request_options))

    async def filesizeformatter(
        self,
        bytes_: int,
        *,
        unit: str | None = None,
        precision: int | None = None,
        standard: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1FilesizeformatterResponse:
        """Convert bytes to human-readable file size

        Args:
            bytes_: Number of bytes to format
            unit: Specific target unit (optional, auto-selects best unit if not specified)
            precision: Decimal places (0-10)
            standard: Standard to use: binary (1024) or decimal (1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.filesizeformatter(
                bytes_, unit=unit, precision=precision, standard=standard, request_options=request_options
            ),
        )

    async def htmlentities(
        self,
        body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HtmlentitiesResponse:
        """Encode HTML special characters to entities for XSS prevention

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.htmlentities(body, request_options=request_options))

    async def htmltoimage(
        self,
        body: V1HtmltoimageRequest | V1HtmltoimageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HtmltoimageResponse:
        """Convert HTML code to image with customizable dimensions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.htmltoimage(body, request_options=request_options))

    async def jsontocsv(
        self,
        body: V1JsontocsvRequest | V1JsontocsvRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JsontocsvResponse:
        """Convert JSON array data to CSV format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jsontocsv(body, request_options=request_options))

    async def jsontojsonp(
        self,
        body: V1JsontojsonpRequest | V1JsontojsonpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JsontojsonpResponse:
        """JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP
        data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jsontojsonp(body, request_options=request_options))

    async def jwtdecoder(
        self,
        body: V1JwtdecoderRequest | V1JwtdecoderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JwtdecoderResponse:
        """Decode JWT token without verification

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jwtdecoder(body, request_options=request_options))

    async def markdowntable(
        self,
        body: V1MarkdowntableRequest | V1MarkdowntableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MarkdowntableResponse:
        """Convert data to a formatted markdown table

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.markdowntable(body, request_options=request_options))

    async def markdowntohtml(
        self,
        body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MarkdowntohtmlResponse:
        """Convert markdown text to HTML

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.markdowntohtml(body, request_options=request_options))

    async def markdowntoimage(
        self,
        body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MarkdowntoimageResponse:
        """Convert markdown text to image file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.markdowntoimage(body, request_options=request_options))

    async def markdowntopdf(
        self,
        body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MarkdowntopdfResponse:
        """Convert markdown text to PDF document

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.markdowntopdf(body, request_options=request_options))

    async def math(
        self, body: V1MathRequest | V1MathRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1MathResponse:
        """Perform basic math operations: add, subtract, multiply, divide, power, modulo

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.math(body, request_options=request_options))

    async def meetingtimeconverter(
        self,
        time: str,
        from_timezone: str,
        to_timezone: str,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MeetingtimeconverterResponse:
        """Convert meeting time between timezones

        Args:
            time: Time in HH:MM format (24-hour)
            from_timezone: Source IANA timezone identifier
            to_timezone: Target IANA timezone identifier
            date: Optional date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.meetingtimeconverter(
                time, from_timezone, to_timezone, date=date, request_options=request_options
            ),
        )

    async def numberbaseconverter(
        self,
        value: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1NumberbaseconverterResponse:
        """Convert a number from one base to another

        Args:
            value: The number to convert
            from_: Source base (default: 10)
            to: Target base (returns all common bases if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.numberbaseconverter(
                value, from_=from_, to=to, request_options=request_options
            ),
        )

    async def numbertowords(
        self, number: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NumbertowordsResponse:
        """Convert a number to words, including each word and the orginal equivalent

        Args:
            number: The number to convert to words
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.numbertowords(number, request_options=request_options))

    async def placeholdertext(
        self,
        *,
        style: str | None = None,
        paragraphs: int | None = None,
        sentences: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PlaceholdertextResponse:
        """Generate placeholder text in various styles

        Args:
            style: The style of placeholder text
            paragraphs: Number of paragraphs to generate
            sentences: Number of sentences per paragraph
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.placeholdertext(
                style=style, paragraphs=paragraphs, sentences=sentences, request_options=request_options
            ),
        )

    async def punycode(
        self, text: str, *, mode: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PunycodeResponse:
        """Encode Unicode text to Punycode (ASCII-compatible encoding)

        Args:
            text: Unicode text or domain to encode (max 1000 characters)
            mode: Conversion mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.punycode(text, mode=mode, request_options=request_options))

    async def querystringbuilder(
        self,
        body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1QuerystringbuilderResponse:
        """Build URL query string from JSON parameters

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.querystringbuilder(body, request_options=request_options))

    async def relativetimeformatter(
        self,
        timestamp: str,
        *,
        reference: str | None = None,
        style: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RelativetimeformatterResponse:
        """Convert Unix timestamp to relative time format

        Args:
            timestamp: Unix timestamp in seconds or milliseconds
            reference: Reference time to compare against (default: current time)
            style: Output style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.relativetimeformatter(
                timestamp, reference=reference, style=style, request_options=request_options
            ),
        )

    async def romanconverter(
        self, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1RomanconverterResponse:
        """Convert a number to Roman numerals

        Args:
            number: The number to convert to Roman numerals
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.romanconverter(number, request_options=request_options))

    async def texttocolor(
        self, color: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TexttocolorResponse:
        """Generate a color from text

        Args:
            color: The text to convert the color from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.texttocolor(color, request_options=request_options))

    async def unicodeescape(
        self,
        body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UnicodeescapeResponse:
        r"""Convert characters to Unicode escape sequences (\uXXXX format)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.unicodeescape(body, request_options=request_options))

    async def unitconverter(
        self, value: float, from_: str, to: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UnitconverterResponse:
        """Convert units from one to another

        Args:
            value: The value to convert
            from_: The unit to convert from
            to: The unit to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.unitconverter(value, from_, to, request_options=request_options))

    async def unixtimestamp(
        self, timestamp: str, *, format_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UnixtimestampResponse:
        """Convert Unix timestamp to human-readable date

        Args:
            timestamp: Unix timestamp to convert
            format_: Timestamp format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.unixtimestamp(timestamp, format_=format_, request_options=request_options)
        )

    async def urlencode(
        self,
        body: V1UrlencodeRequest | V1UrlencodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UrlencodeResponse:
        """Encode text to URL-safe format (percent-encoding)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.urlencode(body, request_options=request_options))

    async def urltomarkdown(
        self,
        body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UrltomarkdownResponse:
        """Convert a webpage URL to Markdown format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.urltomarkdown(body, request_options=request_options))

    async def variablenameconverter(
        self,
        body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1VariablenameconverterResponse:
        """Convert variable names between naming conventions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.variablenameconverter(body, request_options=request_options))

    async def websitetotext(
        self,
        body: V1WebsitetotextRequest | V1WebsitetotextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebsitetotextResponse:
        """Convert a given webiste content to simple text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.websitetotext(body, request_options=request_options))

    async def wordstonumbers(
        self, words: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WordstonumbersResponse:
        """Convert words to numbers, including each word and the orginal equivalent

        Args:
            words: The words to convert to numbers
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.wordstonumbers(words, request_options=request_options))

    async def xmltojson(
        self,
        body: V1XmltojsonRequest | V1XmltojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1XmltojsonResponse:
        """Convert XML to JSON

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.xmltojson(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataConversionWithRawResponse:
        return self._with_raw_response


class DataConversionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ascii85encoder(
        self,
        text: str,
        *,
        action: str | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1Ascii85EncoderResponse, Ascii85EncoderErrorBody]:
        """Encode text using ASCII85 (Base85) encoding

        Args:
            text: Text to encode
            action: Action to perform
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ascii85encoder"),
            query_params=[
                param[str]("text", text), param[str | None]("action", action), param[str | None]("format", format_)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1Ascii85EncoderResponse],
            error_mapper=ascii85_encoder_error_mapper,
            request_options=request_options,
        )

    def base64(
        self, text: str, *, action: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1Base64Response, Base64ErrorBody]:
        """Encode text to Base64 format

        Args:
            text: The text to encode
            action: The action to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/base64"),
            query_params=[param[str]("text", text), param[str | None]("action", action)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1Base64Response],
            error_mapper=base64_error_mapper,
            request_options=request_options,
        )

    def colorconverter(
        self, hex_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorconverterResponse, ColorconverterErrorBody]:
        """Convert a color to a different format

        Args:
            hex_: The color in hexadecimal format (e.g., FF0000). Make sure you ommit the #
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorconverter"),
            query_params=[param[str]("hex", hex_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ColorconverterResponse],
            error_mapper=colorconverter_error_mapper,
            request_options=request_options,
        )

    def csvtojson(
        self, body: V1CsvtojsonRequest | V1CsvtojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CsvtojsonResponse, CsvtojsonErrorBody]:
        """Convert CSV data to JSON format with custom delimiter support

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/csvtojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CsvtojsonRequest | V1CsvtojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CsvtojsonResponse],
            error_mapper=csvtojson_error_mapper,
            request_options=request_options,
        )

    def filesizeformatter(
        self,
        bytes_: int,
        *,
        unit: str | None = None,
        precision: int | None = None,
        standard: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FilesizeformatterResponse, FilesizeformatterErrorBody]:
        """Convert bytes to human-readable file size

        Args:
            bytes_: Number of bytes to format
            unit: Specific target unit (optional, auto-selects best unit if not specified)
            precision: Decimal places (0-10)
            standard: Standard to use: binary (1024) or decimal (1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/filesizeformatter"),
            query_params=[
                param[int]("bytes", bytes_),
                param[str | None]("unit", unit),
                param[int | None]("precision", precision),
                param[str | None]("standard", standard),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FilesizeformatterResponse],
            error_mapper=filesizeformatter_error_mapper,
            request_options=request_options,
        )

    def htmlentities(
        self,
        body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmlentitiesResponse, HtmlentitiesErrorBody]:
        """Encode HTML special characters to entities for XSS prevention

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmlentities"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmlentitiesRequest | V1HtmlentitiesRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HtmlentitiesResponse],
            error_mapper=htmlentities_error_mapper,
            request_options=request_options,
        )

    def htmltoimage(
        self,
        body: V1HtmltoimageRequest | V1HtmltoimageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmltoimageResponse, HtmltoimageErrorBody]:
        """Convert HTML code to image with customizable dimensions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltoimage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltoimageRequest | V1HtmltoimageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HtmltoimageResponse],
            error_mapper=htmltoimage_error_mapper,
            request_options=request_options,
        )

    def jsontocsv(
        self, body: V1JsontocsvRequest | V1JsontocsvRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1JsontocsvResponse, JsontocsvErrorBody]:
        """Convert JSON array data to CSV format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsontocsv"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsontocsvRequest | V1JsontocsvRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JsontocsvResponse],
            error_mapper=jsontocsv_error_mapper,
            request_options=request_options,
        )

    def jsontojsonp(
        self,
        body: V1JsontojsonpRequest | V1JsontojsonpRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsontojsonpResponse, JsontojsonpErrorBody]:
        """JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP
        data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsontojsonp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsontojsonpRequest | V1JsontojsonpRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JsontojsonpResponse],
            error_mapper=jsontojsonp_error_mapper,
            request_options=request_options,
        )

    def jwtdecoder(
        self,
        body: V1JwtdecoderRequest | V1JwtdecoderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JwtdecoderResponse, JwtdecoderErrorBody]:
        """Decode JWT token without verification

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jwtdecoder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JwtdecoderRequest | V1JwtdecoderRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JwtdecoderResponse],
            error_mapper=jwtdecoder_error_mapper,
            request_options=request_options,
        )

    def markdowntable(
        self,
        body: V1MarkdowntableRequest | V1MarkdowntableRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntableResponse, MarkdowntableErrorBody]:
        """Convert data to a formatted markdown table

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntableRequest | V1MarkdowntableRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarkdowntableResponse],
            error_mapper=markdowntable_error_mapper,
            request_options=request_options,
        )

    def markdowntohtml(
        self,
        body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntohtmlResponse, MarkdowntohtmlErrorBody]:
        """Convert markdown text to HTML

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntohtml"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarkdowntohtmlResponse],
            error_mapper=markdowntohtml_error_mapper,
            request_options=request_options,
        )

    def markdowntoimage(
        self,
        body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntoimageResponse, MarkdowntoimageErrorBody]:
        """Convert markdown text to image file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntoimage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarkdowntoimageResponse],
            error_mapper=markdowntoimage_error_mapper,
            request_options=request_options,
        )

    def markdowntopdf(
        self,
        body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntopdfResponse, MarkdowntopdfErrorBody]:
        """Convert markdown text to PDF document

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarkdowntopdfResponse],
            error_mapper=markdowntopdf_error_mapper,
            request_options=request_options,
        )

    def math(
        self, body: V1MathRequest | V1MathRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MathResponse, MathErrorBody]:
        """Perform basic math operations: add, subtract, multiply, divide, power, modulo

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/math"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MathRequest | V1MathRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MathResponse],
            error_mapper=math_error_mapper,
            request_options=request_options,
        )

    def meetingtimeconverter(
        self,
        time: str,
        from_timezone: str,
        to_timezone: str,
        *,
        date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MeetingtimeconverterResponse, MeetingtimeconverterErrorBody]:
        """Convert meeting time between timezones

        Args:
            time: Time in HH:MM format (24-hour)
            from_timezone: Source IANA timezone identifier
            to_timezone: Target IANA timezone identifier
            date: Optional date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/meetingtimeconverter"),
            query_params=[
                param[str]("time", time),
                param[str]("fromTimezone", from_timezone),
                param[str]("toTimezone", to_timezone),
                param[str | None]("date", date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MeetingtimeconverterResponse],
            error_mapper=meetingtimeconverter_error_mapper,
            request_options=request_options,
        )

    def numberbaseconverter(
        self,
        value: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1NumberbaseconverterResponse, NumberbaseconverterErrorBody]:
        """Convert a number from one base to another

        Args:
            value: The number to convert
            from_: Source base (default: 10)
            to: Target base (returns all common bases if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/numberbaseconverter"),
            query_params=[param[str]("value", value), param[int | None]("from", from_), param[int | None]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NumberbaseconverterResponse],
            error_mapper=numberbaseconverter_error_mapper,
            request_options=request_options,
        )

    def numbertowords(
        self, number: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NumbertowordsResponse, NumbertowordsErrorBody]:
        """Convert a number to words, including each word and the orginal equivalent

        Args:
            number: The number to convert to words
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/numbertowords"),
            query_params=[param[float]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NumbertowordsResponse],
            error_mapper=numbertowords_error_mapper,
            request_options=request_options,
        )

    def placeholdertext(
        self,
        *,
        style: str | None = None,
        paragraphs: int | None = None,
        sentences: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlaceholdertextResponse, PlaceholdertextErrorBody]:
        """Generate placeholder text in various styles

        Args:
            style: The style of placeholder text
            paragraphs: Number of paragraphs to generate
            sentences: Number of sentences per paragraph
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/placeholdertext"),
            query_params=[
                param[str | None]("style", style),
                param[int | None]("paragraphs", paragraphs),
                param[int | None]("sentences", sentences),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PlaceholdertextResponse],
            error_mapper=placeholdertext_error_mapper,
            request_options=request_options,
        )

    def punycode(
        self, text: str, *, mode: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PunycodeResponse, PunycodeErrorBody]:
        """Encode Unicode text to Punycode (ASCII-compatible encoding)

        Args:
            text: Unicode text or domain to encode (max 1000 characters)
            mode: Conversion mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/punycode"),
            query_params=[param[str]("text", text), param[str | None]("mode", mode)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PunycodeResponse],
            error_mapper=punycode_error_mapper,
            request_options=request_options,
        )

    def querystringbuilder(
        self,
        body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1QuerystringbuilderResponse, QuerystringbuilderErrorBody]:
        """Build URL query string from JSON parameters

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/querystringbuilder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1QuerystringbuilderResponse],
            error_mapper=querystringbuilder_error_mapper,
            request_options=request_options,
        )

    def relativetimeformatter(
        self,
        timestamp: str,
        *,
        reference: str | None = None,
        style: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RelativetimeformatterResponse, RelativetimeformatterErrorBody]:
        """Convert Unix timestamp to relative time format

        Args:
            timestamp: Unix timestamp in seconds or milliseconds
            reference: Reference time to compare against (default: current time)
            style: Output style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/relativetimeformatter"),
            query_params=[
                param[str]("timestamp", timestamp),
                param[str | None]("reference", reference),
                param[str | None]("style", style),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RelativetimeformatterResponse],
            error_mapper=relativetimeformatter_error_mapper,
            request_options=request_options,
        )

    def romanconverter(
        self, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RomanconverterResponse, RomanconverterErrorBody]:
        """Convert a number to Roman numerals

        Args:
            number: The number to convert to Roman numerals
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/romanconverter"),
            query_params=[param[int]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RomanconverterResponse],
            error_mapper=romanconverter_error_mapper,
            request_options=request_options,
        )

    def texttocolor(
        self, color: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TexttocolorResponse, TexttocolorErrorBody]:
        """Generate a color from text

        Args:
            color: The text to convert the color from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/texttocolor"),
            query_params=[param[str]("color", color)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TexttocolorResponse],
            error_mapper=texttocolor_error_mapper,
            request_options=request_options,
        )

    def unicodeescape(
        self,
        body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UnicodeescapeResponse, UnicodeescapeErrorBody]:
        r"""Convert characters to Unicode escape sequences (\uXXXX format)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/unicodeescape"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UnicodeescapeRequest | V1UnicodeescapeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UnicodeescapeResponse],
            error_mapper=unicodeescape_error_mapper,
            request_options=request_options,
        )

    def unitconverter(
        self, value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnitconverterResponse, UnitconverterErrorBody]:
        """Convert units from one to another

        Args:
            value: The value to convert
            from_: The unit to convert from
            to: The unit to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unitconverter"),
            query_params=[param[float]("value", value), param[str]("from", from_), param[str]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UnitconverterResponse],
            error_mapper=unitconverter_error_mapper,
            request_options=request_options,
        )

    def unixtimestamp(
        self, timestamp: str, *, format_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnixtimestampResponse, UnixtimestampErrorBody]:
        """Convert Unix timestamp to human-readable date

        Args:
            timestamp: Unix timestamp to convert
            format_: Timestamp format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unixtimestamp"),
            query_params=[param[str]("timestamp", timestamp), param[str | None]("format", format_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UnixtimestampResponse],
            error_mapper=unixtimestamp_error_mapper,
            request_options=request_options,
        )

    def urlencode(
        self, body: V1UrlencodeRequest | V1UrlencodeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UrlencodeResponse, UrlencodeErrorBody]:
        """Encode text to URL-safe format (percent-encoding)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlencode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrlencodeRequest | V1UrlencodeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UrlencodeResponse],
            error_mapper=urlencode_error_mapper,
            request_options=request_options,
        )

    def urltomarkdown(
        self,
        body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrltomarkdownResponse, UrltomarkdownErrorBody]:
        """Convert a webpage URL to Markdown format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urltomarkdown"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrltomarkdownRequest | V1UrltomarkdownRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UrltomarkdownResponse],
            error_mapper=urltomarkdown_error_mapper,
            request_options=request_options,
        )

    def variablenameconverter(
        self,
        body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VariablenameconverterResponse, VariablenameconverterErrorBody]:
        """Convert variable names between naming conventions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/variablenameconverter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VariablenameconverterRequest | V1VariablenameconverterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1VariablenameconverterResponse],
            error_mapper=variablenameconverter_error_mapper,
            request_options=request_options,
        )

    def websitetotext(
        self,
        body: V1WebsitetotextRequest | V1WebsitetotextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitetotextResponse, WebsitetotextErrorBody]:
        """Convert a given webiste content to simple text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitetotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitetotextRequest | V1WebsitetotextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebsitetotextResponse],
            error_mapper=websitetotext_error_mapper,
            request_options=request_options,
        )

    def wordstonumbers(
        self, words: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordstonumbersResponse, WordstonumbersErrorBody]:
        """Convert words to numbers, including each word and the orginal equivalent

        Args:
            words: The words to convert to numbers
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordstonumbers"),
            query_params=[param[str]("words", words)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordstonumbersResponse],
            error_mapper=wordstonumbers_error_mapper,
            request_options=request_options,
        )

    def xmltojson(
        self, body: V1XmltojsonRequest | V1XmltojsonRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1XmltojsonResponse, XmltojsonErrorBody]:
        """Convert XML to JSON

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/xmltojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1XmltojsonRequest | V1XmltojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1XmltojsonResponse],
            error_mapper=xmltojson_error_mapper,
            request_options=request_options,
        )


class AsyncDataConversionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ascii85encoder(
        self,
        text: str,
        *,
        action: str | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1Ascii85EncoderResponse, Ascii85EncoderErrorBody]:
        """Encode text using ASCII85 (Base85) encoding

        Args:
            text: Text to encode
            action: Action to perform
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ascii85encoder"),
            query_params=[
                param[str]("text", text), param[str | None]("action", action), param[str | None]("format", format_)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1Ascii85EncoderResponse],
            error_mapper=ascii85_encoder_error_mapper,
            request_options=request_options,
        )

    async def base64(
        self, text: str, *, action: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1Base64Response, Base64ErrorBody]:
        """Encode text to Base64 format

        Args:
            text: The text to encode
            action: The action to perform
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/base64"),
            query_params=[param[str]("text", text), param[str | None]("action", action)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1Base64Response],
            error_mapper=base64_error_mapper,
            request_options=request_options,
        )

    async def colorconverter(
        self, hex_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ColorconverterResponse, ColorconverterErrorBody]:
        """Convert a color to a different format

        Args:
            hex_: The color in hexadecimal format (e.g., FF0000). Make sure you ommit the #
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorconverter"),
            query_params=[param[str]("hex", hex_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ColorconverterResponse],
            error_mapper=colorconverter_error_mapper,
            request_options=request_options,
        )

    async def csvtojson(
        self,
        body: V1CsvtojsonRequest | V1CsvtojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CsvtojsonResponse, CsvtojsonErrorBody]:
        """Convert CSV data to JSON format with custom delimiter support

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/csvtojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CsvtojsonRequest | V1CsvtojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CsvtojsonResponse],
            error_mapper=csvtojson_error_mapper,
            request_options=request_options,
        )

    async def filesizeformatter(
        self,
        bytes_: int,
        *,
        unit: str | None = None,
        precision: int | None = None,
        standard: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FilesizeformatterResponse, FilesizeformatterErrorBody]:
        """Convert bytes to human-readable file size

        Args:
            bytes_: Number of bytes to format
            unit: Specific target unit (optional, auto-selects best unit if not specified)
            precision: Decimal places (0-10)
            standard: Standard to use: binary (1024) or decimal (1000)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/filesizeformatter"),
            query_params=[
                param[int]("bytes", bytes_),
                param[str | None]("unit", unit),
                param[int | None]("precision", precision),
                param[str | None]("standard", standard),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FilesizeformatterResponse],
            error_mapper=filesizeformatter_error_mapper,
            request_options=request_options,
        )

    async def htmlentities(
        self,
        body: V1HtmlentitiesRequest | V1HtmlentitiesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmlentitiesResponse, HtmlentitiesErrorBody]:
        """Encode HTML special characters to entities for XSS prevention

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmlentities"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmlentitiesRequest | V1HtmlentitiesRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HtmlentitiesResponse],
            error_mapper=htmlentities_error_mapper,
            request_options=request_options,
        )

    async def htmltoimage(
        self,
        body: V1HtmltoimageRequest | V1HtmltoimageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HtmltoimageResponse, HtmltoimageErrorBody]:
        """Convert HTML code to image with customizable dimensions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/htmltoimage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HtmltoimageRequest | V1HtmltoimageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HtmltoimageResponse],
            error_mapper=htmltoimage_error_mapper,
            request_options=request_options,
        )

    async def jsontocsv(
        self,
        body: V1JsontocsvRequest | V1JsontocsvRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsontocsvResponse, JsontocsvErrorBody]:
        """Convert JSON array data to CSV format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsontocsv"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsontocsvRequest | V1JsontocsvRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JsontocsvResponse],
            error_mapper=jsontocsv_error_mapper,
            request_options=request_options,
        )

    async def jsontojsonp(
        self,
        body: V1JsontojsonpRequest | V1JsontojsonpRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsontojsonpResponse, JsontojsonpErrorBody]:
        """JSON to JSONP is a simple tool for converting JSON data into JSONP format. It returns the converted JSONP
        data.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsontojsonp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsontojsonpRequest | V1JsontojsonpRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JsontojsonpResponse],
            error_mapper=jsontojsonp_error_mapper,
            request_options=request_options,
        )

    async def jwtdecoder(
        self,
        body: V1JwtdecoderRequest | V1JwtdecoderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JwtdecoderResponse, JwtdecoderErrorBody]:
        """Decode JWT token without verification

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jwtdecoder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JwtdecoderRequest | V1JwtdecoderRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JwtdecoderResponse],
            error_mapper=jwtdecoder_error_mapper,
            request_options=request_options,
        )

    async def markdowntable(
        self,
        body: V1MarkdowntableRequest | V1MarkdowntableRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntableResponse, MarkdowntableErrorBody]:
        """Convert data to a formatted markdown table

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntable"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntableRequest | V1MarkdowntableRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarkdowntableResponse],
            error_mapper=markdowntable_error_mapper,
            request_options=request_options,
        )

    async def markdowntohtml(
        self,
        body: V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntohtmlResponse, MarkdowntohtmlErrorBody]:
        """Convert markdown text to HTML

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntohtml"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntohtmlRequest | V1MarkdowntohtmlRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarkdowntohtmlResponse],
            error_mapper=markdowntohtml_error_mapper,
            request_options=request_options,
        )

    async def markdowntoimage(
        self,
        body: V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntoimageResponse, MarkdowntoimageErrorBody]:
        """Convert markdown text to image file

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntoimage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntoimageRequest | V1MarkdowntoimageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarkdowntoimageResponse],
            error_mapper=markdowntoimage_error_mapper,
            request_options=request_options,
        )

    async def markdowntopdf(
        self,
        body: V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdowntopdfResponse, MarkdowntopdfErrorBody]:
        """Convert markdown text to PDF document

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdowntopdf"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdowntopdfRequest | V1MarkdowntopdfRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarkdowntopdfResponse],
            error_mapper=markdowntopdf_error_mapper,
            request_options=request_options,
        )

    async def math(
        self, body: V1MathRequest | V1MathRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MathResponse, MathErrorBody]:
        """Perform basic math operations: add, subtract, multiply, divide, power, modulo

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/math"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MathRequest | V1MathRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MathResponse],
            error_mapper=math_error_mapper,
            request_options=request_options,
        )

    async def meetingtimeconverter(
        self,
        time: str,
        from_timezone: str,
        to_timezone: str,
        *,
        date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MeetingtimeconverterResponse, MeetingtimeconverterErrorBody]:
        """Convert meeting time between timezones

        Args:
            time: Time in HH:MM format (24-hour)
            from_timezone: Source IANA timezone identifier
            to_timezone: Target IANA timezone identifier
            date: Optional date in YYYY-MM-DD format (defaults to today)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/meetingtimeconverter"),
            query_params=[
                param[str]("time", time),
                param[str]("fromTimezone", from_timezone),
                param[str]("toTimezone", to_timezone),
                param[str | None]("date", date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MeetingtimeconverterResponse],
            error_mapper=meetingtimeconverter_error_mapper,
            request_options=request_options,
        )

    async def numberbaseconverter(
        self,
        value: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1NumberbaseconverterResponse, NumberbaseconverterErrorBody]:
        """Convert a number from one base to another

        Args:
            value: The number to convert
            from_: Source base (default: 10)
            to: Target base (returns all common bases if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/numberbaseconverter"),
            query_params=[param[str]("value", value), param[int | None]("from", from_), param[int | None]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NumberbaseconverterResponse],
            error_mapper=numberbaseconverter_error_mapper,
            request_options=request_options,
        )

    async def numbertowords(
        self, number: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NumbertowordsResponse, NumbertowordsErrorBody]:
        """Convert a number to words, including each word and the orginal equivalent

        Args:
            number: The number to convert to words
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/numbertowords"),
            query_params=[param[float]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NumbertowordsResponse],
            error_mapper=numbertowords_error_mapper,
            request_options=request_options,
        )

    async def placeholdertext(
        self,
        *,
        style: str | None = None,
        paragraphs: int | None = None,
        sentences: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PlaceholdertextResponse, PlaceholdertextErrorBody]:
        """Generate placeholder text in various styles

        Args:
            style: The style of placeholder text
            paragraphs: Number of paragraphs to generate
            sentences: Number of sentences per paragraph
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/placeholdertext"),
            query_params=[
                param[str | None]("style", style),
                param[int | None]("paragraphs", paragraphs),
                param[int | None]("sentences", sentences),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PlaceholdertextResponse],
            error_mapper=placeholdertext_error_mapper,
            request_options=request_options,
        )

    async def punycode(
        self, text: str, *, mode: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PunycodeResponse, PunycodeErrorBody]:
        """Encode Unicode text to Punycode (ASCII-compatible encoding)

        Args:
            text: Unicode text or domain to encode (max 1000 characters)
            mode: Conversion mode
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/punycode"),
            query_params=[param[str]("text", text), param[str | None]("mode", mode)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PunycodeResponse],
            error_mapper=punycode_error_mapper,
            request_options=request_options,
        )

    async def querystringbuilder(
        self,
        body: V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1QuerystringbuilderResponse, QuerystringbuilderErrorBody]:
        """Build URL query string from JSON parameters

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/querystringbuilder"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QuerystringbuilderRequest | V1QuerystringbuilderRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1QuerystringbuilderResponse],
            error_mapper=querystringbuilder_error_mapper,
            request_options=request_options,
        )

    async def relativetimeformatter(
        self,
        timestamp: str,
        *,
        reference: str | None = None,
        style: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RelativetimeformatterResponse, RelativetimeformatterErrorBody]:
        """Convert Unix timestamp to relative time format

        Args:
            timestamp: Unix timestamp in seconds or milliseconds
            reference: Reference time to compare against (default: current time)
            style: Output style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/relativetimeformatter"),
            query_params=[
                param[str]("timestamp", timestamp),
                param[str | None]("reference", reference),
                param[str | None]("style", style),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RelativetimeformatterResponse],
            error_mapper=relativetimeformatter_error_mapper,
            request_options=request_options,
        )

    async def romanconverter(
        self, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RomanconverterResponse, RomanconverterErrorBody]:
        """Convert a number to Roman numerals

        Args:
            number: The number to convert to Roman numerals
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/romanconverter"),
            query_params=[param[int]("number", number)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RomanconverterResponse],
            error_mapper=romanconverter_error_mapper,
            request_options=request_options,
        )

    async def texttocolor(
        self, color: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TexttocolorResponse, TexttocolorErrorBody]:
        """Generate a color from text

        Args:
            color: The text to convert the color from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/texttocolor"),
            query_params=[param[str]("color", color)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TexttocolorResponse],
            error_mapper=texttocolor_error_mapper,
            request_options=request_options,
        )

    async def unicodeescape(
        self,
        body: V1UnicodeescapeRequest | V1UnicodeescapeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UnicodeescapeResponse, UnicodeescapeErrorBody]:
        r"""Convert characters to Unicode escape sequences (\uXXXX format)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/unicodeescape"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UnicodeescapeRequest | V1UnicodeescapeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UnicodeescapeResponse],
            error_mapper=unicodeescape_error_mapper,
            request_options=request_options,
        )

    async def unitconverter(
        self, value: float, from_: str, to: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnitconverterResponse, UnitconverterErrorBody]:
        """Convert units from one to another

        Args:
            value: The value to convert
            from_: The unit to convert from
            to: The unit to convert to
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unitconverter"),
            query_params=[param[float]("value", value), param[str]("from", from_), param[str]("to", to)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UnitconverterResponse],
            error_mapper=unitconverter_error_mapper,
            request_options=request_options,
        )

    async def unixtimestamp(
        self, timestamp: str, *, format_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UnixtimestampResponse, UnixtimestampErrorBody]:
        """Convert Unix timestamp to human-readable date

        Args:
            timestamp: Unix timestamp to convert
            format_: Timestamp format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unixtimestamp"),
            query_params=[param[str]("timestamp", timestamp), param[str | None]("format", format_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UnixtimestampResponse],
            error_mapper=unixtimestamp_error_mapper,
            request_options=request_options,
        )

    async def urlencode(
        self,
        body: V1UrlencodeRequest | V1UrlencodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrlencodeResponse, UrlencodeErrorBody]:
        """Encode text to URL-safe format (percent-encoding)

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlencode"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrlencodeRequest | V1UrlencodeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UrlencodeResponse],
            error_mapper=urlencode_error_mapper,
            request_options=request_options,
        )

    async def urltomarkdown(
        self,
        body: V1UrltomarkdownRequest | V1UrltomarkdownRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UrltomarkdownResponse, UrltomarkdownErrorBody]:
        """Convert a webpage URL to Markdown format

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urltomarkdown"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UrltomarkdownRequest | V1UrltomarkdownRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UrltomarkdownResponse],
            error_mapper=urltomarkdown_error_mapper,
            request_options=request_options,
        )

    async def variablenameconverter(
        self,
        body: V1VariablenameconverterRequest | V1VariablenameconverterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VariablenameconverterResponse, VariablenameconverterErrorBody]:
        """Convert variable names between naming conventions

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/variablenameconverter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VariablenameconverterRequest | V1VariablenameconverterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1VariablenameconverterResponse],
            error_mapper=variablenameconverter_error_mapper,
            request_options=request_options,
        )

    async def websitetotext(
        self,
        body: V1WebsitetotextRequest | V1WebsitetotextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitetotextResponse, WebsitetotextErrorBody]:
        """Convert a given webiste content to simple text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitetotext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitetotextRequest | V1WebsitetotextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebsitetotextResponse],
            error_mapper=websitetotext_error_mapper,
            request_options=request_options,
        )

    async def wordstonumbers(
        self, words: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordstonumbersResponse, WordstonumbersErrorBody]:
        """Convert words to numbers, including each word and the orginal equivalent

        Args:
            words: The words to convert to numbers
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordstonumbers"),
            query_params=[param[str]("words", words)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordstonumbersResponse],
            error_mapper=wordstonumbers_error_mapper,
            request_options=request_options,
        )

    async def xmltojson(
        self,
        body: V1XmltojsonRequest | V1XmltojsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1XmltojsonResponse, XmltojsonErrorBody]:
        """Convert XML to JSON

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/xmltojson"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1XmltojsonRequest | V1XmltojsonRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1XmltojsonResponse],
            error_mapper=xmltojson_error_mapper,
            request_options=request_options,
        )
