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
from ..errors.acronymgenerator_error import AcronymgeneratorErrorBody, acronymgenerator_error_mapper
from ..errors.babynamegenerator_error import BabynamegeneratorErrorBody, babynamegenerator_error_mapper
from ..errors.barcodegenerator_error import BarcodegeneratorErrorBody, barcodegenerator_error_mapper
from ..errors.bingocardgenerator_error import BingocardgeneratorErrorBody, bingocardgenerator_error_mapper
from ..errors.boggleboardgenerator_error import BoggleboardgeneratorErrorBody, boggleboardgenerator_error_mapper
from ..errors.captchagenerator_error import CaptchageneratorErrorBody, captchagenerator_error_mapper
from ..errors.cardgenerator_error import CardgeneratorErrorBody, cardgenerator_error_mapper
from ..errors.chartgenerator_error import ChartgeneratorErrorBody, chartgenerator_error_mapper
from ..errors.colorpalette_error import ColorpaletteErrorBody, colorpalette_error_mapper
from ..errors.commentgenerator_error import CommentgeneratorErrorBody, commentgenerator_error_mapper
from ..errors.companynamegenerator_error import CompanynamegeneratorErrorBody, companynamegenerator_error_mapper
from ..errors.crongenerator_error import CrongeneratorErrorBody, crongenerator_error_mapper
from ..errors.cuidgenerator_error import CuidgeneratorErrorBody, cuidgenerator_error_mapper
from ..errors.guidgenerator_error import GuidgeneratorErrorBody, guidgenerator_error_mapper
from ..errors.hashtaggenerator_error import HashtaggeneratorErrorBody, hashtaggenerator_error_mapper
from ..errors.imeigenerator_error import ImeigeneratorErrorBody, imeigenerator_error_mapper
from ..errors.initialismgenerator_error import InitialismgeneratorErrorBody, initialismgenerator_error_mapper
from ..errors.jsonschemagenerator_error import JsonschemageneratorErrorBody, jsonschemagenerator_error_mapper
from ..errors.loremipsumgenerator_error import LoremipsumgeneratorErrorBody, loremipsumgenerator_error_mapper
from ..errors.passwordgenerator_error import PasswordgeneratorErrorBody, passwordgenerator_error_mapper
from ..errors.qrcodegenerator_error import QrcodegeneratorErrorBody, qrcodegenerator_error_mapper
from ..errors.randomgenerator_error import RandomgeneratorErrorBody, randomgenerator_error_mapper
from ..errors.randomidentitygenerator_error import (
    RandomidentitygeneratorErrorBody,
    randomidentitygenerator_error_mapper,
)
from ..errors.randomusergenerator_error import RandomusergeneratorErrorBody, randomusergenerator_error_mapper
from ..errors.randomwords_error import RandomwordsErrorBody, randomwords_error_mapper
from ..errors.shortcodegenerator_error import ShortcodegeneratorErrorBody, shortcodegenerator_error_mapper
from ..errors.sitemapgenerator_error import SitemapgeneratorErrorBody, sitemapgenerator_error_mapper
from ..errors.totpgenerator_error import TotpgeneratorErrorBody, totpgenerator_error_mapper
from ..errors.ulidgenerator_error import UlidgeneratorErrorBody, ulidgenerator_error_mapper
from ..errors.useragentgenerator_error import UseragentgeneratorErrorBody, useragentgenerator_error_mapper
from ..errors.usernamegenerator_error import UsernamegeneratorErrorBody, usernamegenerator_error_mapper
from ..errors.uuidgenerator_error import UuidgeneratorErrorBody, uuidgenerator_error_mapper
from ..models.v1_acronymgenerator_response import V1AcronymgeneratorResponse
from ..models.v1_babynamegenerator_response import V1BabynamegeneratorResponse
from ..models.v1_barcodegenerator_request import V1BarcodegeneratorRequest, V1BarcodegeneratorRequestDict
from ..models.v1_barcodegenerator_response import V1BarcodegeneratorResponse
from ..models.v1_bingocardgenerator_response import V1BingocardgeneratorResponse
from ..models.v1_boggleboardgenerator_response import V1BoggleboardgeneratorResponse
from ..models.v1_captchagenerator_response import V1CaptchageneratorResponse
from ..models.v1_cardgenerator_response import V1CardgeneratorResponse
from ..models.v1_chartgenerator_request import V1ChartgeneratorRequest, V1ChartgeneratorRequestDict
from ..models.v1_chartgenerator_response import V1ChartgeneratorResponse
from ..models.v1_colorpalette_response import V1ColorpaletteResponse
from ..models.v1_commentgenerator_response import V1CommentgeneratorResponse
from ..models.v1_companynamegenerator_response import V1CompanynamegeneratorResponse
from ..models.v1_crongenerator_response import V1CrongeneratorResponse
from ..models.v1_cuidgenerator_response import V1CuidgeneratorResponse
from ..models.v1_guidgenerator_response import V1GuidgeneratorResponse
from ..models.v1_hashtaggenerator_request import V1HashtaggeneratorRequest, V1HashtaggeneratorRequestDict
from ..models.v1_hashtaggenerator_response import V1HashtaggeneratorResponse
from ..models.v1_imeigenerator_response import V1ImeigeneratorResponse
from ..models.v1_initialismgenerator_request import V1InitialismgeneratorRequest, V1InitialismgeneratorRequestDict
from ..models.v1_initialismgenerator_response import V1InitialismgeneratorResponse
from ..models.v1_jsonschemagenerator_request import V1JsonschemageneratorRequest, V1JsonschemageneratorRequestDict
from ..models.v1_jsonschemagenerator_response import V1JsonschemageneratorResponse
from ..models.v1_loremipsumgenerator_response import V1LoremipsumgeneratorResponse
from ..models.v1_passwordgenerator_response import V1PasswordgeneratorResponse
from ..models.v1_qrcodegenerator_request import V1QrcodegeneratorRequest, V1QrcodegeneratorRequestDict
from ..models.v1_qrcodegenerator_response import V1QrcodegeneratorResponse
from ..models.v1_randomgenerator_response import V1RandomgeneratorResponse
from ..models.v1_randomidentitygenerator_response import V1RandomidentitygeneratorResponse
from ..models.v1_randomusergenerator_response import V1RandomusergeneratorResponse
from ..models.v1_randomwords_response import V1RandomwordsResponse
from ..models.v1_shortcodegenerator_response import V1ShortcodegeneratorResponse
from ..models.v1_sitemapgenerator_request import V1SitemapgeneratorRequest, V1SitemapgeneratorRequestDict
from ..models.v1_sitemapgenerator_response import V1SitemapgeneratorResponse
from ..models.v1_totpgenerator_request import V1TotpgeneratorRequest, V1TotpgeneratorRequestDict
from ..models.v1_totpgenerator_response import V1TotpgeneratorResponse
from ..models.v1_ulidgenerator_response import V1UlidgeneratorResponse
from ..models.v1_useragentgenerator_response import V1UseragentgeneratorResponse
from ..models.v1_usernamegenerator_response import V1UsernamegeneratorResponse
from ..models.v1_uuidgenerator_response import V1UuidgeneratorResponse
from ..server.server import Server


class DataGeneration:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataGenerationWithRawResponse(client, server, auth)

    def acronymgenerator(
        self, text: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1AcronymgeneratorResponse:
        """Generate an acronym from a phrase by extracting the first letter of each word

        Args:
            text: The phrase to generate an acronym from (must contain at least 2 words)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.acronymgenerator(text, request_options=request_options))

    def babynamegenerator(
        self,
        gender: str,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BabynamegeneratorResponse:
        """Generate a baby's first and middle name, based on the provided gender

        Args:
            gender: The gender for the generated names
            count: The number of names to generate
            include_avatar: Include an AI-generated child face avatar matching gender
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.babynamegenerator(
                gender, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    def barcodegenerator(
        self,
        body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BarcodegeneratorResponse:
        """Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image
        of the barcode.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.barcodegenerator(body, request_options=request_options))

    def bingocardgenerator(
        self,
        *,
        size: int | None = None,
        free_space: bool | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BingocardgeneratorResponse:
        """Generate random bingo card with HTML and image

        Args:
            size: Card size (3x3 to 10x10)
            free_space: Include free space in center
            image: Set to true to generate a downloadable bingo card image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bingocardgenerator(
                size=size, free_space=free_space, image=image, request_options=request_options
            ),
        )

    def boggleboardgenerator(
        self, *, size: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1BoggleboardgeneratorResponse:
        """Generate random Boggle board with HTML and image

        Args:
            size: Board size
            image: Set to true to generate a downloadable board image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.boggleboardgenerator(size=size, image=image, request_options=request_options)
        )

    def captchagenerator(self, *, request_options: RequestOptionsOrDict | None = None) -> V1CaptchageneratorResponse:
        """Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can
        be used as a captcha.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.captchagenerator(request_options=request_options))

    def cardgenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CardgeneratorResponse:
        """Generate a list of test card numbers

        Args:
            brand: The brand of the card to generate
            count: The number of test card numbers to generate
            include_avatar: Include an AI-generated face avatar for the card owner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.cardgenerator(
                brand=brand, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    def chartgenerator(
        self,
        body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ChartgeneratorResponse:
        """Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors
        are auto-assigned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.chartgenerator(body, request_options=request_options))

    def colorpalette(
        self,
        color: str,
        *,
        scheme: str | None = None,
        variation: str | None = None,
        count: int | None = None,
        distance: float | None = None,
        add_complement: bool | None = None,
        web_safe: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ColorpaletteResponse:
        """Generate a color palette from a single color

        Args:
            color: The base color to generate the palette from (HEX format without #)
            scheme: The color scheme type
            variation: The color variation
            count: Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it -
                mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many
                were actually returned. Free tier limited to 5 colors
            distance: Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes
            add_complement: Add complement color to analogic scheme
            web_safe: Return web-safe colors only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.colorpalette(
                color,
                scheme=scheme,
                variation=variation,
                count=count,
                distance=distance,
                add_complement=add_complement,
                web_safe=web_safe,
                request_options=request_options,
            ),
        )

    def commentgenerator(
        self,
        mode: str,
        *,
        tone: str | None = None,
        count: int | None = None,
        emojis: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CommentgeneratorResponse:
        """Generate comments for text-based social media posts

        Args:
            mode: The mode of comment generation
            tone: The tone of the comments
            count: The number of comments to generate (max 10)
            emojis: Whether to include emojis in the comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.commentgenerator(
                mode, tone=tone, count=count, emojis=emojis, request_options=request_options
            ),
        )

    def companynamegenerator(
        self, keyword: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CompanynamegeneratorResponse:
        """Generate company names based on the specified criteria

        Args:
            keyword: The keyword to generate company names from
            count: The number of company names to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.companynamegenerator(keyword, count=count, request_options=request_options)
        )

    def crongenerator(
        self, schedule: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CrongeneratorResponse:
        """Generate cron expressions from natural language schedule descriptions

        Args:
            schedule: Natural language description of the schedule (max 200 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.crongenerator(schedule, request_options=request_options))

    def cuidgenerator(
        self, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CuidgeneratorResponse:
        """Generate one or more collision-resistant unique identifiers

        Args:
            count: Number of Cuids to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cuidgenerator(count=count, request_options=request_options))

    def guidgenerator(
        self,
        *,
        count: int | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GuidgeneratorResponse:
        """Generate one or more GUIDs with formatting options

        Args:
            count: Number of GUIDs to generate
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.guidgenerator(count=count, format_=format_, request_options=request_options)
        )

    def hashtaggenerator(
        self,
        body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HashtaggeneratorResponse:
        """Generate hashtags from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.hashtaggenerator(body, request_options=request_options))

    def imeigenerator(
        self, *, brand: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1ImeigeneratorResponse:
        """Generate valid IMEI numbers

        Args:
            brand: Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)
            count: Number of IMEIs to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.imeigenerator(brand=brand, count=count, request_options=request_options))

    def initialismgenerator(
        self,
        body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1InitialismgeneratorResponse:
        """Generate initialism from phrase

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.initialismgenerator(body, request_options=request_options))

    def jsonschemagenerator(
        self,
        body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JsonschemageneratorResponse:
        """Generate a JSON schema from sample JSON data

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jsonschemagenerator(body, request_options=request_options))

    def loremipsumgenerator(
        self,
        *,
        paragraphs: int | None = None,
        startwithlorem: bool | None = None,
        maxlength: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LoremipsumgeneratorResponse:
        """Generate lorem ipsum text with a specified number of sentences or words

        Args:
            paragraphs: The number of paragraphs to generate
            startwithlorem: Start the text with 'Lorem ipsum dolor sit amet'
            maxlength: The maximum length of the generated text (0 for no limit)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.loremipsumgenerator(
                paragraphs=paragraphs,
                startwithlorem=startwithlorem,
                maxlength=maxlength,
                request_options=request_options,
            ),
        )

    def passwordgenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        complexity: str | None = None,
        type_: str | None = None,
        include_numbers: bool | None = None,
        include_symbols: bool | None = None,
        include_uppercase: bool | None = None,
        include_lowercase: bool | None = None,
        exclude_similar: bool | None = None,
        exclude_ambiguous: bool | None = None,
        mixed_case: bool | None = None,
        strict: bool | None = None,
        word_count: int | None = None,
        separator: str | None = None,
        capitalize: bool | None = None,
        analyze: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PasswordgeneratorResponse:
        """Generate passwords with a specified length and complexity

        Args:
            count: The number of passwords to generate
            length: The length of the password to generate
            complexity: The complexity of the password. Only applies when type is random
            type_: The kind of password to generate. random uses the complexity preset, pronounceable builds readable
                syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below
            include_numbers: Include digits. Applies to custom and pronounceable, and to random at simple complexity
            include_symbols: Include punctuation symbols. Applies to custom, and to random at medium complexity
            include_uppercase: Include uppercase letters. Applies to custom, and to random at simple complexity
            include_lowercase: Include lowercase letters in a custom password. Set false to build from the other
                character sets only
            exclude_similar: Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
            exclude_ambiguous: Exclude brackets, slashes, quotes and other characters that need escaping in shells and
                config files
            mixed_case: Randomly capitalise letters in a pronounceable password
            strict: Guarantee at least one character from every enabled set rather than leaving it to chance
            word_count: How many words a passphrase contains. Only applies when type is passphrase
            separator: The character placed between passphrase words. Only applies when type is passphrase
            capitalize: Capitalise each word of a passphrase. Only applies when type is passphrase
            analyze: Return a strength analysis alongside each password
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.passwordgenerator(
                count=count,
                length=length,
                complexity=complexity,
                type_=type_,
                include_numbers=include_numbers,
                include_symbols=include_symbols,
                include_uppercase=include_uppercase,
                include_lowercase=include_lowercase,
                exclude_similar=exclude_similar,
                exclude_ambiguous=exclude_ambiguous,
                mixed_case=mixed_case,
                strict=strict,
                word_count=word_count,
                separator=separator,
                capitalize=capitalize,
                analyze=analyze,
                request_options=request_options,
            ),
        )

    def qrcodegenerator(
        self,
        body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1QrcodegeneratorResponse:
        """Generate a styled QR code with custom colors, logo, and design options

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.qrcodegenerator(body, request_options=request_options))

    def randomgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RandomgeneratorResponse:
        """Generate random data of various types

        Args:
            type_: The type of random data to generate
            count: The number of random data to generate (1 to 100)
            include_avatar: Include an AI-generated face avatar (only applies when type=name)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.randomgenerator(
                type_=type_, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    def randomidentitygenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RandomidentitygeneratorResponse:
        """Generate a random identity with a name, address, and more

        Args:
            count: The number of identities to create
            include_avatar: Include an AI-generated face avatar for each identity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.randomidentitygenerator(
                count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    def randomusergenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RandomusergeneratorResponse:
        """Generate random user data

        Args:
            count: The number of users to generate
            include_avatar: Include an AI-generated face avatar matching user's gender and age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.randomusergenerator(
                count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    def randomwords(self, *, request_options: RequestOptionsOrDict | None = None) -> V1RandomwordsResponse:
        """Get a random word, including its definition and pronunciation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.randomwords(request_options=request_options))

    def shortcodegenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        charset: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ShortcodegeneratorResponse:
        """Generate short alphanumeric codes with customizable options

        Args:
            count: Number of codes to generate
            length: Length of each code
            charset: Character set
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.shortcodegenerator(
                count=count, length=length, charset=charset, request_options=request_options
            ),
        )

    def sitemapgenerator(
        self,
        body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SitemapgeneratorResponse:
        """Generate an XML sitemap from URLs

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sitemapgenerator(body, request_options=request_options))

    def totpgenerator(
        self,
        body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TotpgeneratorResponse:
        """Generate time-based one-time password

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.totpgenerator(body, request_options=request_options))

    def ulidgenerator(
        self,
        *,
        count: int | None = None,
        timestamp: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UlidgeneratorResponse:
        """Generate one or more ULIDs

        Args:
            count: Number of ULIDs to generate
            timestamp: Custom timestamp in milliseconds (optional, uses current time if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.ulidgenerator(count=count, timestamp=timestamp, request_options=request_options)
        )

    def useragentgenerator(
        self, *, device: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1UseragentgeneratorResponse:
        """Generate a random user agent string

        Args:
            device: The device type for the user agent string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.useragentgenerator(device=device, request_options=request_options))

    def usernamegenerator(
        self, email: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1UsernamegeneratorResponse:
        """Generate usernames based on the specified criteria

        Args:
            email: The email address to generate usernames from
            count: The number of usernames to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.usernamegenerator(email, count=count, request_options=request_options))

    def uuidgenerator(
        self,
        *,
        count: int | None = None,
        version: int | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UuidgeneratorResponse:
        """Generate one or more RFC 4122 version 4 UUIDs

        Args:
            count: Number of UUIDs to generate
            version: UUID version (only version 4 currently supported)
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.uuidgenerator(
                count=count, version=version, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DataGenerationWithRawResponse:
        return self._with_raw_response


class AsyncDataGeneration:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataGenerationWithRawResponse(client, server, auth)

    async def acronymgenerator(
        self, text: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AcronymgeneratorResponse:
        """Generate an acronym from a phrase by extracting the first letter of each word

        Args:
            text: The phrase to generate an acronym from (must contain at least 2 words)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.acronymgenerator(text, request_options=request_options))

    async def babynamegenerator(
        self,
        gender: str,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BabynamegeneratorResponse:
        """Generate a baby's first and middle name, based on the provided gender

        Args:
            gender: The gender for the generated names
            count: The number of names to generate
            include_avatar: Include an AI-generated child face avatar matching gender
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.babynamegenerator(
                gender, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    async def barcodegenerator(
        self,
        body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BarcodegeneratorResponse:
        """Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image
        of the barcode.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.barcodegenerator(body, request_options=request_options))

    async def bingocardgenerator(
        self,
        *,
        size: int | None = None,
        free_space: bool | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BingocardgeneratorResponse:
        """Generate random bingo card with HTML and image

        Args:
            size: Card size (3x3 to 10x10)
            free_space: Include free space in center
            image: Set to true to generate a downloadable bingo card image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bingocardgenerator(
                size=size, free_space=free_space, image=image, request_options=request_options
            ),
        )

    async def boggleboardgenerator(
        self,
        *,
        size: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BoggleboardgeneratorResponse:
        """Generate random Boggle board with HTML and image

        Args:
            size: Board size
            image: Set to true to generate a downloadable board image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.boggleboardgenerator(size=size, image=image, request_options=request_options)
        )

    async def captchagenerator(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CaptchageneratorResponse:
        """Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can
        be used as a captcha.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.captchagenerator(request_options=request_options))

    async def cardgenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CardgeneratorResponse:
        """Generate a list of test card numbers

        Args:
            brand: The brand of the card to generate
            count: The number of test card numbers to generate
            include_avatar: Include an AI-generated face avatar for the card owner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cardgenerator(
                brand=brand, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    async def chartgenerator(
        self,
        body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ChartgeneratorResponse:
        """Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors
        are auto-assigned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.chartgenerator(body, request_options=request_options))

    async def colorpalette(
        self,
        color: str,
        *,
        scheme: str | None = None,
        variation: str | None = None,
        count: int | None = None,
        distance: float | None = None,
        add_complement: bool | None = None,
        web_safe: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ColorpaletteResponse:
        """Generate a color palette from a single color

        Args:
            color: The base color to generate the palette from (HEX format without #)
            scheme: The color scheme type
            variation: The color variation
            count: Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it -
                mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many
                were actually returned. Free tier limited to 5 colors
            distance: Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes
            add_complement: Add complement color to analogic scheme
            web_safe: Return web-safe colors only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.colorpalette(
                color,
                scheme=scheme,
                variation=variation,
                count=count,
                distance=distance,
                add_complement=add_complement,
                web_safe=web_safe,
                request_options=request_options,
            ),
        )

    async def commentgenerator(
        self,
        mode: str,
        *,
        tone: str | None = None,
        count: int | None = None,
        emojis: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CommentgeneratorResponse:
        """Generate comments for text-based social media posts

        Args:
            mode: The mode of comment generation
            tone: The tone of the comments
            count: The number of comments to generate (max 10)
            emojis: Whether to include emojis in the comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.commentgenerator(
                mode, tone=tone, count=count, emojis=emojis, request_options=request_options
            ),
        )

    async def companynamegenerator(
        self, keyword: str, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CompanynamegeneratorResponse:
        """Generate company names based on the specified criteria

        Args:
            keyword: The keyword to generate company names from
            count: The number of company names to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.companynamegenerator(keyword, count=count, request_options=request_options)
        )

    async def crongenerator(
        self, schedule: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CrongeneratorResponse:
        """Generate cron expressions from natural language schedule descriptions

        Args:
            schedule: Natural language description of the schedule (max 200 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.crongenerator(schedule, request_options=request_options))

    async def cuidgenerator(
        self, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CuidgeneratorResponse:
        """Generate one or more collision-resistant unique identifiers

        Args:
            count: Number of Cuids to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cuidgenerator(count=count, request_options=request_options))

    async def guidgenerator(
        self,
        *,
        count: int | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GuidgeneratorResponse:
        """Generate one or more GUIDs with formatting options

        Args:
            count: Number of GUIDs to generate
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.guidgenerator(count=count, format_=format_, request_options=request_options)
        )

    async def hashtaggenerator(
        self,
        body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HashtaggeneratorResponse:
        """Generate hashtags from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.hashtaggenerator(body, request_options=request_options))

    async def imeigenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ImeigeneratorResponse:
        """Generate valid IMEI numbers

        Args:
            brand: Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)
            count: Number of IMEIs to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.imeigenerator(brand=brand, count=count, request_options=request_options)
        )

    async def initialismgenerator(
        self,
        body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1InitialismgeneratorResponse:
        """Generate initialism from phrase

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.initialismgenerator(body, request_options=request_options))

    async def jsonschemagenerator(
        self,
        body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JsonschemageneratorResponse:
        """Generate a JSON schema from sample JSON data

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jsonschemagenerator(body, request_options=request_options))

    async def loremipsumgenerator(
        self,
        *,
        paragraphs: int | None = None,
        startwithlorem: bool | None = None,
        maxlength: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LoremipsumgeneratorResponse:
        """Generate lorem ipsum text with a specified number of sentences or words

        Args:
            paragraphs: The number of paragraphs to generate
            startwithlorem: Start the text with 'Lorem ipsum dolor sit amet'
            maxlength: The maximum length of the generated text (0 for no limit)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.loremipsumgenerator(
                paragraphs=paragraphs,
                startwithlorem=startwithlorem,
                maxlength=maxlength,
                request_options=request_options,
            ),
        )

    async def passwordgenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        complexity: str | None = None,
        type_: str | None = None,
        include_numbers: bool | None = None,
        include_symbols: bool | None = None,
        include_uppercase: bool | None = None,
        include_lowercase: bool | None = None,
        exclude_similar: bool | None = None,
        exclude_ambiguous: bool | None = None,
        mixed_case: bool | None = None,
        strict: bool | None = None,
        word_count: int | None = None,
        separator: str | None = None,
        capitalize: bool | None = None,
        analyze: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PasswordgeneratorResponse:
        """Generate passwords with a specified length and complexity

        Args:
            count: The number of passwords to generate
            length: The length of the password to generate
            complexity: The complexity of the password. Only applies when type is random
            type_: The kind of password to generate. random uses the complexity preset, pronounceable builds readable
                syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below
            include_numbers: Include digits. Applies to custom and pronounceable, and to random at simple complexity
            include_symbols: Include punctuation symbols. Applies to custom, and to random at medium complexity
            include_uppercase: Include uppercase letters. Applies to custom, and to random at simple complexity
            include_lowercase: Include lowercase letters in a custom password. Set false to build from the other
                character sets only
            exclude_similar: Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
            exclude_ambiguous: Exclude brackets, slashes, quotes and other characters that need escaping in shells and
                config files
            mixed_case: Randomly capitalise letters in a pronounceable password
            strict: Guarantee at least one character from every enabled set rather than leaving it to chance
            word_count: How many words a passphrase contains. Only applies when type is passphrase
            separator: The character placed between passphrase words. Only applies when type is passphrase
            capitalize: Capitalise each word of a passphrase. Only applies when type is passphrase
            analyze: Return a strength analysis alongside each password
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.passwordgenerator(
                count=count,
                length=length,
                complexity=complexity,
                type_=type_,
                include_numbers=include_numbers,
                include_symbols=include_symbols,
                include_uppercase=include_uppercase,
                include_lowercase=include_lowercase,
                exclude_similar=exclude_similar,
                exclude_ambiguous=exclude_ambiguous,
                mixed_case=mixed_case,
                strict=strict,
                word_count=word_count,
                separator=separator,
                capitalize=capitalize,
                analyze=analyze,
                request_options=request_options,
            ),
        )

    async def qrcodegenerator(
        self,
        body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1QrcodegeneratorResponse:
        """Generate a styled QR code with custom colors, logo, and design options

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.qrcodegenerator(body, request_options=request_options))

    async def randomgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RandomgeneratorResponse:
        """Generate random data of various types

        Args:
            type_: The type of random data to generate
            count: The number of random data to generate (1 to 100)
            include_avatar: Include an AI-generated face avatar (only applies when type=name)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.randomgenerator(
                type_=type_, count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    async def randomidentitygenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RandomidentitygeneratorResponse:
        """Generate a random identity with a name, address, and more

        Args:
            count: The number of identities to create
            include_avatar: Include an AI-generated face avatar for each identity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.randomidentitygenerator(
                count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    async def randomusergenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RandomusergeneratorResponse:
        """Generate random user data

        Args:
            count: The number of users to generate
            include_avatar: Include an AI-generated face avatar matching user's gender and age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.randomusergenerator(
                count=count, include_avatar=include_avatar, request_options=request_options
            ),
        )

    async def randomwords(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RandomwordsResponse:
        """Get a random word, including its definition and pronunciation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.randomwords(request_options=request_options))

    async def shortcodegenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        charset: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ShortcodegeneratorResponse:
        """Generate short alphanumeric codes with customizable options

        Args:
            count: Number of codes to generate
            length: Length of each code
            charset: Character set
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.shortcodegenerator(
                count=count, length=length, charset=charset, request_options=request_options
            ),
        )

    async def sitemapgenerator(
        self,
        body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SitemapgeneratorResponse:
        """Generate an XML sitemap from URLs

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sitemapgenerator(body, request_options=request_options))

    async def totpgenerator(
        self,
        body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TotpgeneratorResponse:
        """Generate time-based one-time password

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.totpgenerator(body, request_options=request_options))

    async def ulidgenerator(
        self,
        *,
        count: int | None = None,
        timestamp: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UlidgeneratorResponse:
        """Generate one or more ULIDs

        Args:
            count: Number of ULIDs to generate
            timestamp: Custom timestamp in milliseconds (optional, uses current time if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.ulidgenerator(
                count=count, timestamp=timestamp, request_options=request_options
            ),
        )

    async def useragentgenerator(
        self, *, device: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UseragentgeneratorResponse:
        """Generate a random user agent string

        Args:
            device: The device type for the user agent string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.useragentgenerator(device=device, request_options=request_options))

    async def usernamegenerator(
        self, email: str, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1UsernamegeneratorResponse:
        """Generate usernames based on the specified criteria

        Args:
            email: The email address to generate usernames from
            count: The number of usernames to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.usernamegenerator(email, count=count, request_options=request_options)
        )

    async def uuidgenerator(
        self,
        *,
        count: int | None = None,
        version: int | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UuidgeneratorResponse:
        """Generate one or more RFC 4122 version 4 UUIDs

        Args:
            count: Number of UUIDs to generate
            version: UUID version (only version 4 currently supported)
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.uuidgenerator(
                count=count, version=version, format_=format_, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDataGenerationWithRawResponse:
        return self._with_raw_response


class DataGenerationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def acronymgenerator(
        self, text: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AcronymgeneratorResponse, AcronymgeneratorErrorBody]:
        """Generate an acronym from a phrase by extracting the first letter of each word

        Args:
            text: The phrase to generate an acronym from (must contain at least 2 words)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acronymgenerator"),
            query_params=[param[str]("text", text)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AcronymgeneratorResponse],
            error_mapper=acronymgenerator_error_mapper,
            request_options=request_options,
        )

    def babynamegenerator(
        self,
        gender: str,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BabynamegeneratorResponse, BabynamegeneratorErrorBody]:
        """Generate a baby's first and middle name, based on the provided gender

        Args:
            gender: The gender for the generated names
            count: The number of names to generate
            include_avatar: Include an AI-generated child face avatar matching gender
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/babynamegenerator"),
            query_params=[
                param[str]("gender", gender),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BabynamegeneratorResponse],
            error_mapper=babynamegenerator_error_mapper,
            request_options=request_options,
        )

    def barcodegenerator(
        self,
        body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BarcodegeneratorResponse, BarcodegeneratorErrorBody]:
        """Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image
        of the barcode.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/barcodegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BarcodegeneratorResponse],
            error_mapper=barcodegenerator_error_mapper,
            request_options=request_options,
        )

    def bingocardgenerator(
        self,
        *,
        size: int | None = None,
        free_space: bool | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BingocardgeneratorResponse, BingocardgeneratorErrorBody]:
        """Generate random bingo card with HTML and image

        Args:
            size: Card size (3x3 to 10x10)
            free_space: Include free space in center
            image: Set to true to generate a downloadable bingo card image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bingocardgenerator"),
            query_params=[
                param[int | None]("size", size),
                param[bool | None]("freeSpace", free_space),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BingocardgeneratorResponse],
            error_mapper=bingocardgenerator_error_mapper,
            request_options=request_options,
        )

    def boggleboardgenerator(
        self, *, size: int | None = None, image: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BoggleboardgeneratorResponse, BoggleboardgeneratorErrorBody]:
        """Generate random Boggle board with HTML and image

        Args:
            size: Board size
            image: Set to true to generate a downloadable board image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/boggleboardgenerator"),
            query_params=[param[int | None]("size", size), param[bool | None]("image", image)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BoggleboardgeneratorResponse],
            error_mapper=boggleboardgenerator_error_mapper,
            request_options=request_options,
        )

    def captchagenerator(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CaptchageneratorResponse, CaptchageneratorErrorBody]:
        """Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can
        be used as a captcha.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/captchagenerator"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CaptchageneratorResponse],
            error_mapper=captchagenerator_error_mapper,
            request_options=request_options,
        )

    def cardgenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CardgeneratorResponse, CardgeneratorErrorBody]:
        """Generate a list of test card numbers

        Args:
            brand: The brand of the card to generate
            count: The number of test card numbers to generate
            include_avatar: Include an AI-generated face avatar for the card owner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cardgenerator"),
            query_params=[
                param[str | None]("brand", brand),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CardgeneratorResponse],
            error_mapper=cardgenerator_error_mapper,
            request_options=request_options,
        )

    def chartgenerator(
        self,
        body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ChartgeneratorResponse, ChartgeneratorErrorBody]:
        """Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors
        are auto-assigned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/chartgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ChartgeneratorRequest | V1ChartgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ChartgeneratorResponse],
            error_mapper=chartgenerator_error_mapper,
            request_options=request_options,
        )

    def colorpalette(
        self,
        color: str,
        *,
        scheme: str | None = None,
        variation: str | None = None,
        count: int | None = None,
        distance: float | None = None,
        add_complement: bool | None = None,
        web_safe: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ColorpaletteResponse, ColorpaletteErrorBody]:
        """Generate a color palette from a single color

        Args:
            color: The base color to generate the palette from (HEX format without #)
            scheme: The color scheme type
            variation: The color variation
            count: Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it -
                mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many
                were actually returned. Free tier limited to 5 colors
            distance: Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes
            add_complement: Add complement color to analogic scheme
            web_safe: Return web-safe colors only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorpalette"),
            query_params=[
                param[str]("color", color),
                param[str | None]("scheme", scheme),
                param[str | None]("variation", variation),
                param[int | None]("count", count),
                param[float | None]("distance", distance),
                param[bool | None]("addComplement", add_complement),
                param[bool | None]("webSafe", web_safe),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ColorpaletteResponse],
            error_mapper=colorpalette_error_mapper,
            request_options=request_options,
        )

    def commentgenerator(
        self,
        mode: str,
        *,
        tone: str | None = None,
        count: int | None = None,
        emojis: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CommentgeneratorResponse, CommentgeneratorErrorBody]:
        """Generate comments for text-based social media posts

        Args:
            mode: The mode of comment generation
            tone: The tone of the comments
            count: The number of comments to generate (max 10)
            emojis: Whether to include emojis in the comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/commentgenerator"),
            query_params=[
                param[str]("mode", mode),
                param[str | None]("tone", tone),
                param[int | None]("count", count),
                param[bool | None]("emojis", emojis),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CommentgeneratorResponse],
            error_mapper=commentgenerator_error_mapper,
            request_options=request_options,
        )

    def companynamegenerator(
        self, keyword: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CompanynamegeneratorResponse, CompanynamegeneratorErrorBody]:
        """Generate company names based on the specified criteria

        Args:
            keyword: The keyword to generate company names from
            count: The number of company names to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companynamegenerator"),
            query_params=[param[str]("keyword", keyword), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CompanynamegeneratorResponse],
            error_mapper=companynamegenerator_error_mapper,
            request_options=request_options,
        )

    def crongenerator(
        self, schedule: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CrongeneratorResponse, CrongeneratorErrorBody]:
        """Generate cron expressions from natural language schedule descriptions

        Args:
            schedule: Natural language description of the schedule (max 200 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/crongenerator"),
            query_params=[param[str]("schedule", schedule)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CrongeneratorResponse],
            error_mapper=crongenerator_error_mapper,
            request_options=request_options,
        )

    def cuidgenerator(
        self, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CuidgeneratorResponse, CuidgeneratorErrorBody]:
        """Generate one or more collision-resistant unique identifiers

        Args:
            count: Number of Cuids to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cuidgenerator"),
            query_params=[param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CuidgeneratorResponse],
            error_mapper=cuidgenerator_error_mapper,
            request_options=request_options,
        )

    def guidgenerator(
        self,
        *,
        count: int | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GuidgeneratorResponse, GuidgeneratorErrorBody]:
        """Generate one or more GUIDs with formatting options

        Args:
            count: Number of GUIDs to generate
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/guidgenerator"),
            query_params=[param[int | None]("count", count), param[str | None]("format", format_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GuidgeneratorResponse],
            error_mapper=guidgenerator_error_mapper,
            request_options=request_options,
        )

    def hashtaggenerator(
        self,
        body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HashtaggeneratorResponse, HashtaggeneratorErrorBody]:
        """Generate hashtags from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/hashtaggenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HashtaggeneratorResponse],
            error_mapper=hashtaggenerator_error_mapper,
            request_options=request_options,
        )

    def imeigenerator(
        self, *, brand: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ImeigeneratorResponse, ImeigeneratorErrorBody]:
        """Generate valid IMEI numbers

        Args:
            brand: Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)
            count: Number of IMEIs to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/imeigenerator"),
            query_params=[param[str | None]("brand", brand), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ImeigeneratorResponse],
            error_mapper=imeigenerator_error_mapper,
            request_options=request_options,
        )

    def initialismgenerator(
        self,
        body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InitialismgeneratorResponse, InitialismgeneratorErrorBody]:
        """Generate initialism from phrase

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/initialismgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1InitialismgeneratorResponse],
            error_mapper=initialismgenerator_error_mapper,
            request_options=request_options,
        )

    def jsonschemagenerator(
        self,
        body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsonschemageneratorResponse, JsonschemageneratorErrorBody]:
        """Generate a JSON schema from sample JSON data

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsonschemagenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JsonschemageneratorResponse],
            error_mapper=jsonschemagenerator_error_mapper,
            request_options=request_options,
        )

    def loremipsumgenerator(
        self,
        *,
        paragraphs: int | None = None,
        startwithlorem: bool | None = None,
        maxlength: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LoremipsumgeneratorResponse, LoremipsumgeneratorErrorBody]:
        """Generate lorem ipsum text with a specified number of sentences or words

        Args:
            paragraphs: The number of paragraphs to generate
            startwithlorem: Start the text with 'Lorem ipsum dolor sit amet'
            maxlength: The maximum length of the generated text (0 for no limit)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/loremipsumgenerator"),
            query_params=[
                param[int | None]("paragraphs", paragraphs),
                param[bool | None]("startwithlorem", startwithlorem),
                param[int | None]("maxlength", maxlength),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LoremipsumgeneratorResponse],
            error_mapper=loremipsumgenerator_error_mapper,
            request_options=request_options,
        )

    def passwordgenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        complexity: str | None = None,
        type_: str | None = None,
        include_numbers: bool | None = None,
        include_symbols: bool | None = None,
        include_uppercase: bool | None = None,
        include_lowercase: bool | None = None,
        exclude_similar: bool | None = None,
        exclude_ambiguous: bool | None = None,
        mixed_case: bool | None = None,
        strict: bool | None = None,
        word_count: int | None = None,
        separator: str | None = None,
        capitalize: bool | None = None,
        analyze: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PasswordgeneratorResponse, PasswordgeneratorErrorBody]:
        """Generate passwords with a specified length and complexity

        Args:
            count: The number of passwords to generate
            length: The length of the password to generate
            complexity: The complexity of the password. Only applies when type is random
            type_: The kind of password to generate. random uses the complexity preset, pronounceable builds readable
                syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below
            include_numbers: Include digits. Applies to custom and pronounceable, and to random at simple complexity
            include_symbols: Include punctuation symbols. Applies to custom, and to random at medium complexity
            include_uppercase: Include uppercase letters. Applies to custom, and to random at simple complexity
            include_lowercase: Include lowercase letters in a custom password. Set false to build from the other
                character sets only
            exclude_similar: Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
            exclude_ambiguous: Exclude brackets, slashes, quotes and other characters that need escaping in shells and
                config files
            mixed_case: Randomly capitalise letters in a pronounceable password
            strict: Guarantee at least one character from every enabled set rather than leaving it to chance
            word_count: How many words a passphrase contains. Only applies when type is passphrase
            separator: The character placed between passphrase words. Only applies when type is passphrase
            capitalize: Capitalise each word of a passphrase. Only applies when type is passphrase
            analyze: Return a strength analysis alongside each password
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/passwordgenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("length", length),
                param[str | None]("complexity", complexity),
                param[str | None]("type", type_),
                param[bool | None]("includeNumbers", include_numbers),
                param[bool | None]("includeSymbols", include_symbols),
                param[bool | None]("includeUppercase", include_uppercase),
                param[bool | None]("includeLowercase", include_lowercase),
                param[bool | None]("excludeSimilar", exclude_similar),
                param[bool | None]("excludeAmbiguous", exclude_ambiguous),
                param[bool | None]("mixedCase", mixed_case),
                param[bool | None]("strict", strict),
                param[int | None]("wordCount", word_count),
                param[str | None]("separator", separator),
                param[bool | None]("capitalize", capitalize),
                param[bool | None]("analyze", analyze),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PasswordgeneratorResponse],
            error_mapper=passwordgenerator_error_mapper,
            request_options=request_options,
        )

    def qrcodegenerator(
        self,
        body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1QrcodegeneratorResponse, QrcodegeneratorErrorBody]:
        """Generate a styled QR code with custom colors, logo, and design options

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qrcodegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1QrcodegeneratorResponse],
            error_mapper=qrcodegenerator_error_mapper,
            request_options=request_options,
        )

    def randomgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomgeneratorResponse, RandomgeneratorErrorBody]:
        """Generate random data of various types

        Args:
            type_: The type of random data to generate
            count: The number of random data to generate (1 to 100)
            include_avatar: Include an AI-generated face avatar (only applies when type=name)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomgenerator"),
            query_params=[
                param[str | None]("type", type_),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomgeneratorResponse],
            error_mapper=randomgenerator_error_mapper,
            request_options=request_options,
        )

    def randomidentitygenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomidentitygeneratorResponse, RandomidentitygeneratorErrorBody]:
        """Generate a random identity with a name, address, and more

        Args:
            count: The number of identities to create
            include_avatar: Include an AI-generated face avatar for each identity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomidentitygenerator"),
            query_params=[param[int | None]("count", count), param[bool | None]("includeAvatar", include_avatar)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomidentitygeneratorResponse],
            error_mapper=randomidentitygenerator_error_mapper,
            request_options=request_options,
        )

    def randomusergenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomusergeneratorResponse, RandomusergeneratorErrorBody]:
        """Generate random user data

        Args:
            count: The number of users to generate
            include_avatar: Include an AI-generated face avatar matching user's gender and age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomusergenerator"),
            query_params=[param[int | None]("count", count), param[bool | None]("includeAvatar", include_avatar)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomusergeneratorResponse],
            error_mapper=randomusergenerator_error_mapper,
            request_options=request_options,
        )

    def randomwords(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomwordsResponse, RandomwordsErrorBody]:
        """Get a random word, including its definition and pronunciation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomwords"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomwordsResponse],
            error_mapper=randomwords_error_mapper,
            request_options=request_options,
        )

    def shortcodegenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        charset: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ShortcodegeneratorResponse, ShortcodegeneratorErrorBody]:
        """Generate short alphanumeric codes with customizable options

        Args:
            count: Number of codes to generate
            length: Length of each code
            charset: Character set
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shortcodegenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("length", length),
                param[str | None]("charset", charset),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ShortcodegeneratorResponse],
            error_mapper=shortcodegenerator_error_mapper,
            request_options=request_options,
        )

    def sitemapgenerator(
        self,
        body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SitemapgeneratorResponse, SitemapgeneratorErrorBody]:
        """Generate an XML sitemap from URLs

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sitemapgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SitemapgeneratorResponse],
            error_mapper=sitemapgenerator_error_mapper,
            request_options=request_options,
        )

    def totpgenerator(
        self,
        body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TotpgeneratorResponse, TotpgeneratorErrorBody]:
        """Generate time-based one-time password

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/totpgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TotpgeneratorRequest | V1TotpgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TotpgeneratorResponse],
            error_mapper=totpgenerator_error_mapper,
            request_options=request_options,
        )

    def ulidgenerator(
        self,
        *,
        count: int | None = None,
        timestamp: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UlidgeneratorResponse, UlidgeneratorErrorBody]:
        """Generate one or more ULIDs

        Args:
            count: Number of ULIDs to generate
            timestamp: Custom timestamp in milliseconds (optional, uses current time if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ulidgenerator"),
            query_params=[param[int | None]("count", count), param[int | None]("timestamp", timestamp)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UlidgeneratorResponse],
            error_mapper=ulidgenerator_error_mapper,
            request_options=request_options,
        )

    def useragentgenerator(
        self, *, device: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UseragentgeneratorResponse, UseragentgeneratorErrorBody]:
        """Generate a random user agent string

        Args:
            device: The device type for the user agent string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/useragentgenerator"),
            query_params=[param[str | None]("device", device)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UseragentgeneratorResponse],
            error_mapper=useragentgenerator_error_mapper,
            request_options=request_options,
        )

    def usernamegenerator(
        self, email: str, *, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsernamegeneratorResponse, UsernamegeneratorErrorBody]:
        """Generate usernames based on the specified criteria

        Args:
            email: The email address to generate usernames from
            count: The number of usernames to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usernamegenerator"),
            query_params=[param[str]("email", email), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UsernamegeneratorResponse],
            error_mapper=usernamegenerator_error_mapper,
            request_options=request_options,
        )

    def uuidgenerator(
        self,
        *,
        count: int | None = None,
        version: int | None = None,
        format_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UuidgeneratorResponse, UuidgeneratorErrorBody]:
        """Generate one or more RFC 4122 version 4 UUIDs

        Args:
            count: Number of UUIDs to generate
            version: UUID version (only version 4 currently supported)
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/uuidgenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("version", version),
                param[str | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UuidgeneratorResponse],
            error_mapper=uuidgenerator_error_mapper,
            request_options=request_options,
        )


class AsyncDataGenerationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def acronymgenerator(
        self, text: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AcronymgeneratorResponse, AcronymgeneratorErrorBody]:
        """Generate an acronym from a phrase by extracting the first letter of each word

        Args:
            text: The phrase to generate an acronym from (must contain at least 2 words)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acronymgenerator"),
            query_params=[param[str]("text", text)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AcronymgeneratorResponse],
            error_mapper=acronymgenerator_error_mapper,
            request_options=request_options,
        )

    async def babynamegenerator(
        self,
        gender: str,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BabynamegeneratorResponse, BabynamegeneratorErrorBody]:
        """Generate a baby's first and middle name, based on the provided gender

        Args:
            gender: The gender for the generated names
            count: The number of names to generate
            include_avatar: Include an AI-generated child face avatar matching gender
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/babynamegenerator"),
            query_params=[
                param[str]("gender", gender),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BabynamegeneratorResponse],
            error_mapper=babynamegenerator_error_mapper,
            request_options=request_options,
        )

    async def barcodegenerator(
        self,
        body: V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BarcodegeneratorResponse, BarcodegeneratorErrorBody]:
        """Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the generated image
        of the barcode.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/barcodegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1BarcodegeneratorRequest | V1BarcodegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BarcodegeneratorResponse],
            error_mapper=barcodegenerator_error_mapper,
            request_options=request_options,
        )

    async def bingocardgenerator(
        self,
        *,
        size: int | None = None,
        free_space: bool | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BingocardgeneratorResponse, BingocardgeneratorErrorBody]:
        """Generate random bingo card with HTML and image

        Args:
            size: Card size (3x3 to 10x10)
            free_space: Include free space in center
            image: Set to true to generate a downloadable bingo card image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bingocardgenerator"),
            query_params=[
                param[int | None]("size", size),
                param[bool | None]("freeSpace", free_space),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BingocardgeneratorResponse],
            error_mapper=bingocardgenerator_error_mapper,
            request_options=request_options,
        )

    async def boggleboardgenerator(
        self,
        *,
        size: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BoggleboardgeneratorResponse, BoggleboardgeneratorErrorBody]:
        """Generate random Boggle board with HTML and image

        Args:
            size: Board size
            image: Set to true to generate a downloadable board image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/boggleboardgenerator"),
            query_params=[param[int | None]("size", size), param[bool | None]("image", image)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BoggleboardgeneratorResponse],
            error_mapper=boggleboardgenerator_error_mapper,
            request_options=request_options,
        )

    async def captchagenerator(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CaptchageneratorResponse, CaptchageneratorErrorBody]:
        """Captcha Generator is a simple tool for generating captchas. It returns a random string of characters that can
        be used as a captcha.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/captchagenerator"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CaptchageneratorResponse],
            error_mapper=captchagenerator_error_mapper,
            request_options=request_options,
        )

    async def cardgenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CardgeneratorResponse, CardgeneratorErrorBody]:
        """Generate a list of test card numbers

        Args:
            brand: The brand of the card to generate
            count: The number of test card numbers to generate
            include_avatar: Include an AI-generated face avatar for the card owner
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cardgenerator"),
            query_params=[
                param[str | None]("brand", brand),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CardgeneratorResponse],
            error_mapper=cardgenerator_error_mapper,
            request_options=request_options,
        )

    async def chartgenerator(
        self,
        body: V1ChartgeneratorRequest | V1ChartgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ChartgeneratorResponse, ChartgeneratorErrorBody]:
        """Generate a chart with minimal configuration. Just provide type, labels, and datasets with name/values. Colors
        are auto-assigned.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/chartgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ChartgeneratorRequest | V1ChartgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ChartgeneratorResponse],
            error_mapper=chartgenerator_error_mapper,
            request_options=request_options,
        )

    async def colorpalette(
        self,
        color: str,
        *,
        scheme: str | None = None,
        variation: str | None = None,
        count: int | None = None,
        distance: float | None = None,
        add_complement: bool | None = None,
        web_safe: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ColorpaletteResponse, ColorpaletteErrorBody]:
        """Generate a color palette from a single color

        Args:
            color: The base color to generate the palette from (HEX format without #)
            scheme: The color scheme type
            variation: The color variation
            count: Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot raise it -
                mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount field reports how many
                were actually returned. Free tier limited to 5 colors
            distance: Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes
            add_complement: Add complement color to analogic scheme
            web_safe: Return web-safe colors only
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/colorpalette"),
            query_params=[
                param[str]("color", color),
                param[str | None]("scheme", scheme),
                param[str | None]("variation", variation),
                param[int | None]("count", count),
                param[float | None]("distance", distance),
                param[bool | None]("addComplement", add_complement),
                param[bool | None]("webSafe", web_safe),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ColorpaletteResponse],
            error_mapper=colorpalette_error_mapper,
            request_options=request_options,
        )

    async def commentgenerator(
        self,
        mode: str,
        *,
        tone: str | None = None,
        count: int | None = None,
        emojis: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CommentgeneratorResponse, CommentgeneratorErrorBody]:
        """Generate comments for text-based social media posts

        Args:
            mode: The mode of comment generation
            tone: The tone of the comments
            count: The number of comments to generate (max 10)
            emojis: Whether to include emojis in the comments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/commentgenerator"),
            query_params=[
                param[str]("mode", mode),
                param[str | None]("tone", tone),
                param[int | None]("count", count),
                param[bool | None]("emojis", emojis),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CommentgeneratorResponse],
            error_mapper=commentgenerator_error_mapper,
            request_options=request_options,
        )

    async def companynamegenerator(
        self, keyword: str, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CompanynamegeneratorResponse, CompanynamegeneratorErrorBody]:
        """Generate company names based on the specified criteria

        Args:
            keyword: The keyword to generate company names from
            count: The number of company names to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/companynamegenerator"),
            query_params=[param[str]("keyword", keyword), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CompanynamegeneratorResponse],
            error_mapper=companynamegenerator_error_mapper,
            request_options=request_options,
        )

    async def crongenerator(
        self, schedule: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CrongeneratorResponse, CrongeneratorErrorBody]:
        """Generate cron expressions from natural language schedule descriptions

        Args:
            schedule: Natural language description of the schedule (max 200 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/crongenerator"),
            query_params=[param[str]("schedule", schedule)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CrongeneratorResponse],
            error_mapper=crongenerator_error_mapper,
            request_options=request_options,
        )

    async def cuidgenerator(
        self, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CuidgeneratorResponse, CuidgeneratorErrorBody]:
        """Generate one or more collision-resistant unique identifiers

        Args:
            count: Number of Cuids to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cuidgenerator"),
            query_params=[param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CuidgeneratorResponse],
            error_mapper=cuidgenerator_error_mapper,
            request_options=request_options,
        )

    async def guidgenerator(
        self,
        *,
        count: int | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GuidgeneratorResponse, GuidgeneratorErrorBody]:
        """Generate one or more GUIDs with formatting options

        Args:
            count: Number of GUIDs to generate
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/guidgenerator"),
            query_params=[param[int | None]("count", count), param[str | None]("format", format_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GuidgeneratorResponse],
            error_mapper=guidgenerator_error_mapper,
            request_options=request_options,
        )

    async def hashtaggenerator(
        self,
        body: V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HashtaggeneratorResponse, HashtaggeneratorErrorBody]:
        """Generate hashtags from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/hashtaggenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1HashtaggeneratorRequest | V1HashtaggeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HashtaggeneratorResponse],
            error_mapper=hashtaggenerator_error_mapper,
            request_options=request_options,
        )

    async def imeigenerator(
        self,
        *,
        brand: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ImeigeneratorResponse, ImeigeneratorErrorBody]:
        """Generate valid IMEI numbers

        Args:
            brand: Filter by manufacturer brand (e.g., Samsung, Apple, Nokia)
            count: Number of IMEIs to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/imeigenerator"),
            query_params=[param[str | None]("brand", brand), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ImeigeneratorResponse],
            error_mapper=imeigenerator_error_mapper,
            request_options=request_options,
        )

    async def initialismgenerator(
        self,
        body: V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1InitialismgeneratorResponse, InitialismgeneratorErrorBody]:
        """Generate initialism from phrase

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/initialismgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1InitialismgeneratorRequest | V1InitialismgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1InitialismgeneratorResponse],
            error_mapper=initialismgenerator_error_mapper,
            request_options=request_options,
        )

    async def jsonschemagenerator(
        self,
        body: V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsonschemageneratorResponse, JsonschemageneratorErrorBody]:
        """Generate a JSON schema from sample JSON data

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsonschemagenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsonschemageneratorRequest | V1JsonschemageneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JsonschemageneratorResponse],
            error_mapper=jsonschemagenerator_error_mapper,
            request_options=request_options,
        )

    async def loremipsumgenerator(
        self,
        *,
        paragraphs: int | None = None,
        startwithlorem: bool | None = None,
        maxlength: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LoremipsumgeneratorResponse, LoremipsumgeneratorErrorBody]:
        """Generate lorem ipsum text with a specified number of sentences or words

        Args:
            paragraphs: The number of paragraphs to generate
            startwithlorem: Start the text with 'Lorem ipsum dolor sit amet'
            maxlength: The maximum length of the generated text (0 for no limit)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/loremipsumgenerator"),
            query_params=[
                param[int | None]("paragraphs", paragraphs),
                param[bool | None]("startwithlorem", startwithlorem),
                param[int | None]("maxlength", maxlength),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LoremipsumgeneratorResponse],
            error_mapper=loremipsumgenerator_error_mapper,
            request_options=request_options,
        )

    async def passwordgenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        complexity: str | None = None,
        type_: str | None = None,
        include_numbers: bool | None = None,
        include_symbols: bool | None = None,
        include_uppercase: bool | None = None,
        include_lowercase: bool | None = None,
        exclude_similar: bool | None = None,
        exclude_ambiguous: bool | None = None,
        mixed_case: bool | None = None,
        strict: bool | None = None,
        word_count: int | None = None,
        separator: str | None = None,
        capitalize: bool | None = None,
        analyze: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PasswordgeneratorResponse, PasswordgeneratorErrorBody]:
        """Generate passwords with a specified length and complexity

        Args:
            count: The number of passwords to generate
            length: The length of the password to generate
            complexity: The complexity of the password. Only applies when type is random
            type_: The kind of password to generate. random uses the complexity preset, pronounceable builds readable
                syllables, passphrase joins dictionary words, and custom honours the include/exclude switches below
            include_numbers: Include digits. Applies to custom and pronounceable, and to random at simple complexity
            include_symbols: Include punctuation symbols. Applies to custom, and to random at medium complexity
            include_uppercase: Include uppercase letters. Applies to custom, and to random at simple complexity
            include_lowercase: Include lowercase letters in a custom password. Set false to build from the other
                character sets only
            exclude_similar: Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
            exclude_ambiguous: Exclude brackets, slashes, quotes and other characters that need escaping in shells and
                config files
            mixed_case: Randomly capitalise letters in a pronounceable password
            strict: Guarantee at least one character from every enabled set rather than leaving it to chance
            word_count: How many words a passphrase contains. Only applies when type is passphrase
            separator: The character placed between passphrase words. Only applies when type is passphrase
            capitalize: Capitalise each word of a passphrase. Only applies when type is passphrase
            analyze: Return a strength analysis alongside each password
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/passwordgenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("length", length),
                param[str | None]("complexity", complexity),
                param[str | None]("type", type_),
                param[bool | None]("includeNumbers", include_numbers),
                param[bool | None]("includeSymbols", include_symbols),
                param[bool | None]("includeUppercase", include_uppercase),
                param[bool | None]("includeLowercase", include_lowercase),
                param[bool | None]("excludeSimilar", exclude_similar),
                param[bool | None]("excludeAmbiguous", exclude_ambiguous),
                param[bool | None]("mixedCase", mixed_case),
                param[bool | None]("strict", strict),
                param[int | None]("wordCount", word_count),
                param[str | None]("separator", separator),
                param[bool | None]("capitalize", capitalize),
                param[bool | None]("analyze", analyze),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PasswordgeneratorResponse],
            error_mapper=passwordgenerator_error_mapper,
            request_options=request_options,
        )

    async def qrcodegenerator(
        self,
        body: V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1QrcodegeneratorResponse, QrcodegeneratorErrorBody]:
        """Generate a styled QR code with custom colors, logo, and design options

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/qrcodegenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1QrcodegeneratorRequest | V1QrcodegeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1QrcodegeneratorResponse],
            error_mapper=qrcodegenerator_error_mapper,
            request_options=request_options,
        )

    async def randomgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomgeneratorResponse, RandomgeneratorErrorBody]:
        """Generate random data of various types

        Args:
            type_: The type of random data to generate
            count: The number of random data to generate (1 to 100)
            include_avatar: Include an AI-generated face avatar (only applies when type=name)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomgenerator"),
            query_params=[
                param[str | None]("type", type_),
                param[int | None]("count", count),
                param[bool | None]("includeAvatar", include_avatar),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomgeneratorResponse],
            error_mapper=randomgenerator_error_mapper,
            request_options=request_options,
        )

    async def randomidentitygenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomidentitygeneratorResponse, RandomidentitygeneratorErrorBody]:
        """Generate a random identity with a name, address, and more

        Args:
            count: The number of identities to create
            include_avatar: Include an AI-generated face avatar for each identity
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomidentitygenerator"),
            query_params=[param[int | None]("count", count), param[bool | None]("includeAvatar", include_avatar)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomidentitygeneratorResponse],
            error_mapper=randomidentitygenerator_error_mapper,
            request_options=request_options,
        )

    async def randomusergenerator(
        self,
        *,
        count: int | None = None,
        include_avatar: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RandomusergeneratorResponse, RandomusergeneratorErrorBody]:
        """Generate random user data

        Args:
            count: The number of users to generate
            include_avatar: Include an AI-generated face avatar matching user's gender and age
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomusergenerator"),
            query_params=[param[int | None]("count", count), param[bool | None]("includeAvatar", include_avatar)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomusergeneratorResponse],
            error_mapper=randomusergenerator_error_mapper,
            request_options=request_options,
        )

    async def randomwords(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomwordsResponse, RandomwordsErrorBody]:
        """Get a random word, including its definition and pronunciation

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomwords"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomwordsResponse],
            error_mapper=randomwords_error_mapper,
            request_options=request_options,
        )

    async def shortcodegenerator(
        self,
        *,
        count: int | None = None,
        length: int | None = None,
        charset: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ShortcodegeneratorResponse, ShortcodegeneratorErrorBody]:
        """Generate short alphanumeric codes with customizable options

        Args:
            count: Number of codes to generate
            length: Length of each code
            charset: Character set
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/shortcodegenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("length", length),
                param[str | None]("charset", charset),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ShortcodegeneratorResponse],
            error_mapper=shortcodegenerator_error_mapper,
            request_options=request_options,
        )

    async def sitemapgenerator(
        self,
        body: V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SitemapgeneratorResponse, SitemapgeneratorErrorBody]:
        """Generate an XML sitemap from URLs

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/sitemapgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SitemapgeneratorRequest | V1SitemapgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SitemapgeneratorResponse],
            error_mapper=sitemapgenerator_error_mapper,
            request_options=request_options,
        )

    async def totpgenerator(
        self,
        body: V1TotpgeneratorRequest | V1TotpgeneratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TotpgeneratorResponse, TotpgeneratorErrorBody]:
        """Generate time-based one-time password

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/totpgenerator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TotpgeneratorRequest | V1TotpgeneratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TotpgeneratorResponse],
            error_mapper=totpgenerator_error_mapper,
            request_options=request_options,
        )

    async def ulidgenerator(
        self,
        *,
        count: int | None = None,
        timestamp: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UlidgeneratorResponse, UlidgeneratorErrorBody]:
        """Generate one or more ULIDs

        Args:
            count: Number of ULIDs to generate
            timestamp: Custom timestamp in milliseconds (optional, uses current time if not specified)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ulidgenerator"),
            query_params=[param[int | None]("count", count), param[int | None]("timestamp", timestamp)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UlidgeneratorResponse],
            error_mapper=ulidgenerator_error_mapper,
            request_options=request_options,
        )

    async def useragentgenerator(
        self, *, device: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UseragentgeneratorResponse, UseragentgeneratorErrorBody]:
        """Generate a random user agent string

        Args:
            device: The device type for the user agent string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/useragentgenerator"),
            query_params=[param[str | None]("device", device)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UseragentgeneratorResponse],
            error_mapper=useragentgenerator_error_mapper,
            request_options=request_options,
        )

    async def usernamegenerator(
        self, email: str, *, count: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1UsernamegeneratorResponse, UsernamegeneratorErrorBody]:
        """Generate usernames based on the specified criteria

        Args:
            email: The email address to generate usernames from
            count: The number of usernames to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usernamegenerator"),
            query_params=[param[str]("email", email), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UsernamegeneratorResponse],
            error_mapper=usernamegenerator_error_mapper,
            request_options=request_options,
        )

    async def uuidgenerator(
        self,
        *,
        count: int | None = None,
        version: int | None = None,
        format_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UuidgeneratorResponse, UuidgeneratorErrorBody]:
        """Generate one or more RFC 4122 version 4 UUIDs

        Args:
            count: Number of UUIDs to generate
            version: UUID version (only version 4 currently supported)
            format_: Output format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/uuidgenerator"),
            query_params=[
                param[int | None]("count", count),
                param[int | None]("version", version),
                param[str | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UuidgeneratorResponse],
            error_mapper=uuidgenerator_error_mapper,
            request_options=request_options,
        )
