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
from ..errors.asnlookup_error import AsnlookupErrorBody, asnlookup_error_mapper
from ..errors.bible_error import BibleErrorBody, bible_error_mapper
from ..errors.callingcode_error import CallingcodeErrorBody, callingcode_error_mapper
from ..errors.dictionary_error import DictionaryErrorBody, dictionary_error_mapper
from ..errors.dogbreeds_error import DogbreedsErrorBody, dogbreeds_error_mapper
from ..errors.emoji_error import EmojiErrorBody, emoji_error_mapper
from ..errors.genderdetector_error import GenderdetectorErrorBody, genderdetector_error_mapper
from ..errors.gravatarlookup_error import GravatarlookupErrorBody, gravatarlookup_error_mapper
from ..errors.ipdemographics_error import IpdemographicsErrorBody, ipdemographics_error_mapper
from ..errors.lottery_error import LotteryErrorBody, lottery_error_mapper
from ..errors.nobelprizes_error import NobelprizesErrorBody, nobelprizes_error_mapper
from ..errors.openlicenses_error import OpenlicensesErrorBody, openlicenses_error_mapper
from ..errors.thesaurus_error import ThesaurusErrorBody, thesaurus_error_mapper
from ..errors.timezonelookup_error import TimezonelookupErrorBody, timezonelookup_error_mapper
from ..errors.unicodelookup_error import UnicodelookupErrorBody, unicodelookup_error_mapper
from ..errors.worldtime_error import WorldtimeErrorBody, worldtime_error_mapper
from ..errors.zipdemographics_error import ZipdemographicsErrorBody, zipdemographics_error_mapper
from ..models.v1_asnlookup_response import V1AsnlookupResponse
from ..models.v1_bible_response import V1BibleResponse
from ..models.v1_callingcode_response import V1CallingcodeResponse
from ..models.v1_dictionary_response import V1DictionaryResponse
from ..models.v1_dogbreeds_response import V1DogbreedsResponse
from ..models.v1_emoji_response import V1EmojiResponse
from ..models.v1_genderdetector_response import V1GenderdetectorResponse
from ..models.v1_gravatarlookup_response import V1GravatarlookupResponse
from ..models.v1_ipdemographics_response import V1IpdemographicsResponse
from ..models.v1_lottery_response import V1LotteryResponse
from ..models.v1_nobelprizes_response import V1NobelprizesResponse
from ..models.v1_openlicenses_response import V1OpenlicensesResponse
from ..models.v1_thesaurus_response import V1ThesaurusResponse
from ..models.v1_timezonelookup_response import V1TimezonelookupResponse
from ..models.v1_unicodelookup_response import V1UnicodelookupResponse
from ..models.v1_worldtime_response import V1WorldtimeResponse
from ..models.v1_zipdemographics_response import V1ZipdemographicsResponse
from ..server.server import Server


class DataLookup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataLookupWithRawResponse(client, server, auth)

    def asnlookup(self, asn: str, *, request_options: RequestOptionsOrDict | None = None) -> V1AsnlookupResponse:
        """ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns
        information on various ASNs.

        Args:
            asn: The ASN you want to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.asnlookup(asn, request_options=request_options))

    def bible(
        self,
        book: str,
        version: str,
        chapter: int,
        *,
        verse: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1BibleResponse:
        """Get a bible chapter or verse based on the book, chapter, and or verse

        Args:
            book: The name of the book in the bible (e.g., Genesis)
            version: The Bible translation version
            chapter: The chapter number in the book
            verse: The verse number in the chapter
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.bible(book, version, chapter, verse=verse, request_options=request_options)
        )

    def callingcode(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CallingcodeResponse:
        """Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the
        country's international dialing codes.

        Args:
            country: The 2 letter ISO code for the country (e.g. FR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.callingcode(country, request_options=request_options))

    def dictionary(self, word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DictionaryResponse:
        """Get the definition of a word

        Args:
            word: The word for which you want to get the definition (e.g., apple)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dictionary(word, request_options=request_options))

    def dogbreeds(self, breed: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DogbreedsResponse:
        """Get information about a specific dog breed

        Args:
            breed: The name of the dog breed to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dogbreeds(breed, request_options=request_options))

    def emoji(self, emoji: str, *, request_options: RequestOptionsOrDict | None = None) -> V1EmojiResponse:
        """Lookup the text representation of an emoji

        Args:
            emoji: The emoji for which you want to get the text representation (e.g., 🥳)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.emoji(emoji, request_options=request_options))

    def genderdetector(
        self, name: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1GenderdetectorResponse:
        """Detect the likely gender based on a given name

        Args:
            name: The name for which you want to detect the gender
            country: The country code for the name (e.g., US). Recorded and echoed back in the response, but detection
                does not yet vary by country - the same name returns the same gender whichever code you pass
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.genderdetector(name, country=country, request_options=request_options))

    def gravatarlookup(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1GravatarlookupResponse:
        """Lookup the Gravatar profile of an email address

        Args:
            email: The email address to lookup the Gravatar profile of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.gravatarlookup(email, request_options=request_options))

    def ipdemographics(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1IpdemographicsResponse:
        """Get location and demographic data for an IP address

        Args:
            ip: IPv4 or IPv6 address
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.ipdemographics(ip, request_options=request_options))

    def lottery(
        self, numbers: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1LotteryResponse:
        """Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the
        game with the numbers parameter. Optionally provide a date for historical results.

        Args:
            numbers: The lottery game to lookup: powerball, megamillions, euromillions, or lottomax
            date: Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.lottery(numbers, date=date, request_options=request_options))

    def nobelprizes(
        self,
        *,
        firstname: str | None = None,
        lastname: str | None = None,
        category: str | None = None,
        year: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1NobelprizesResponse:
        """Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various
        Nobel Prizes.

        Args:
            firstname: The first name of the Nobel Prize winner to get information about
            lastname: The last name of the Nobel Prize winner to get information about
            category: The category of the Nobel Prize to get information about
            year: The year of the Nobel Prize to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.nobelprizes(
                firstname=firstname, lastname=lastname, category=category, year=year, request_options=request_options
            ),
        )

    def openlicenses(self, name: str, *, request_options: RequestOptionsOrDict | None = None) -> V1OpenlicensesResponse:
        """Open Source Licenses is a simple tool for getting information on open source licenses. It returns information
        on various open source licenses.

        Args:
            name: The name of the open source license to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.openlicenses(name, request_options=request_options))

    def thesaurus(self, word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1ThesaurusResponse:
        """Get a list of similar words for the specified word

        Args:
            word: The word for which you want to get synonyms
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.thesaurus(word, request_options=request_options))

    def timezonelookup(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1TimezonelookupResponse:
        """Lookup timezone data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., Harare)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.timezonelookup(city, request_options=request_options))

    def unicodelookup(
        self,
        *,
        character: str | None = None,
        codepoint: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UnicodelookupResponse:
        """Get detailed information about a Unicode character

        Args:
            character: The Unicode character to lookup. Supply either character or codepoint.
            codepoint: The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.unicodelookup(
                character=character, codepoint=codepoint, request_options=request_options
            ),
        )

    def worldtime(self, city: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WorldtimeResponse:
        """Get the current time in any city

        Args:
            city: The city name for which you want to get the current time (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.worldtime(city, request_options=request_options))

    def zipdemographics(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ZipdemographicsResponse:
        """Get demographic data for a ZIP code

        Args:
            zip_: 5-digit US ZIP code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.zipdemographics(zip_, request_options=request_options))

    @property
    def with_raw_response(self) -> DataLookupWithRawResponse:
        return self._with_raw_response


class AsyncDataLookup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataLookupWithRawResponse(client, server, auth)

    async def asnlookup(
        self, asn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AsnlookupResponse:
        """ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns
        information on various ASNs.

        Args:
            asn: The ASN you want to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.asnlookup(asn, request_options=request_options))

    async def bible(
        self,
        book: str,
        version: str,
        chapter: int,
        *,
        verse: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1BibleResponse:
        """Get a bible chapter or verse based on the book, chapter, and or verse

        Args:
            book: The name of the book in the bible (e.g., Genesis)
            version: The Bible translation version
            chapter: The chapter number in the book
            verse: The verse number in the chapter
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.bible(book, version, chapter, verse=verse, request_options=request_options)
        )

    async def callingcode(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CallingcodeResponse:
        """Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the
        country's international dialing codes.

        Args:
            country: The 2 letter ISO code for the country (e.g. FR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.callingcode(country, request_options=request_options))

    async def dictionary(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DictionaryResponse:
        """Get the definition of a word

        Args:
            word: The word for which you want to get the definition (e.g., apple)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dictionary(word, request_options=request_options))

    async def dogbreeds(
        self, breed: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DogbreedsResponse:
        """Get information about a specific dog breed

        Args:
            breed: The name of the dog breed to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dogbreeds(breed, request_options=request_options))

    async def emoji(self, emoji: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1EmojiResponse:
        """Lookup the text representation of an emoji

        Args:
            emoji: The emoji for which you want to get the text representation (e.g., 🥳)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.emoji(emoji, request_options=request_options))

    async def genderdetector(
        self, name: str, *, country: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1GenderdetectorResponse:
        """Detect the likely gender based on a given name

        Args:
            name: The name for which you want to detect the gender
            country: The country code for the name (e.g., US). Recorded and echoed back in the response, but detection
                does not yet vary by country - the same name returns the same gender whichever code you pass
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.genderdetector(name, country=country, request_options=request_options)
        )

    async def gravatarlookup(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1GravatarlookupResponse:
        """Lookup the Gravatar profile of an email address

        Args:
            email: The email address to lookup the Gravatar profile of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.gravatarlookup(email, request_options=request_options))

    async def ipdemographics(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IpdemographicsResponse:
        """Get location and demographic data for an IP address

        Args:
            ip: IPv4 or IPv6 address
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.ipdemographics(ip, request_options=request_options))

    async def lottery(
        self, numbers: str, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1LotteryResponse:
        """Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the
        game with the numbers parameter. Optionally provide a date for historical results.

        Args:
            numbers: The lottery game to lookup: powerball, megamillions, euromillions, or lottomax
            date: Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.lottery(numbers, date=date, request_options=request_options))

    async def nobelprizes(
        self,
        *,
        firstname: str | None = None,
        lastname: str | None = None,
        category: str | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1NobelprizesResponse:
        """Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various
        Nobel Prizes.

        Args:
            firstname: The first name of the Nobel Prize winner to get information about
            lastname: The last name of the Nobel Prize winner to get information about
            category: The category of the Nobel Prize to get information about
            year: The year of the Nobel Prize to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.nobelprizes(
                firstname=firstname, lastname=lastname, category=category, year=year, request_options=request_options
            ),
        )

    async def openlicenses(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1OpenlicensesResponse:
        """Open Source Licenses is a simple tool for getting information on open source licenses. It returns information
        on various open source licenses.

        Args:
            name: The name of the open source license to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.openlicenses(name, request_options=request_options))

    async def thesaurus(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ThesaurusResponse:
        """Get a list of similar words for the specified word

        Args:
            word: The word for which you want to get synonyms
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.thesaurus(word, request_options=request_options))

    async def timezonelookup(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TimezonelookupResponse:
        """Lookup timezone data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., Harare)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.timezonelookup(city, request_options=request_options))

    async def unicodelookup(
        self,
        *,
        character: str | None = None,
        codepoint: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1UnicodelookupResponse:
        """Get detailed information about a Unicode character

        Args:
            character: The Unicode character to lookup. Supply either character or codepoint.
            codepoint: The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.unicodelookup(
                character=character, codepoint=codepoint, request_options=request_options
            ),
        )

    async def worldtime(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WorldtimeResponse:
        """Get the current time in any city

        Args:
            city: The city name for which you want to get the current time (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.worldtime(city, request_options=request_options))

    async def zipdemographics(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ZipdemographicsResponse:
        """Get demographic data for a ZIP code

        Args:
            zip_: 5-digit US ZIP code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.zipdemographics(zip_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataLookupWithRawResponse:
        return self._with_raw_response


class DataLookupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def asnlookup(
        self, asn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AsnlookupResponse, AsnlookupErrorBody]:
        """ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns
        information on various ASNs.

        Args:
            asn: The ASN you want to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/asnlookup"),
            query_params=[param[str]("asn", asn)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AsnlookupResponse],
            error_mapper=asnlookup_error_mapper,
            request_options=request_options,
        )

    def bible(
        self,
        book: str,
        version: str,
        chapter: int,
        *,
        verse: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BibleResponse, BibleErrorBody]:
        """Get a bible chapter or verse based on the book, chapter, and or verse

        Args:
            book: The name of the book in the bible (e.g., Genesis)
            version: The Bible translation version
            chapter: The chapter number in the book
            verse: The verse number in the chapter
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bible"),
            query_params=[
                param[str]("book", book),
                param[str]("version", version),
                param[int]("chapter", chapter),
                param[int | None]("verse", verse),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BibleResponse],
            error_mapper=bible_error_mapper,
            request_options=request_options,
        )

    def callingcode(
        self, country: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CallingcodeResponse, CallingcodeErrorBody]:
        """Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the
        country's international dialing codes.

        Args:
            country: The 2 letter ISO code for the country (e.g. FR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/callingcode"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CallingcodeResponse],
            error_mapper=callingcode_error_mapper,
            request_options=request_options,
        )

    def dictionary(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DictionaryResponse, DictionaryErrorBody]:
        """Get the definition of a word

        Args:
            word: The word for which you want to get the definition (e.g., apple)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dictionary"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DictionaryResponse],
            error_mapper=dictionary_error_mapper,
            request_options=request_options,
        )

    def dogbreeds(
        self, breed: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DogbreedsResponse, DogbreedsErrorBody]:
        """Get information about a specific dog breed

        Args:
            breed: The name of the dog breed to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dogbreeds"),
            query_params=[param[str]("breed", breed)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DogbreedsResponse],
            error_mapper=dogbreeds_error_mapper,
            request_options=request_options,
        )

    def emoji(
        self, emoji: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmojiResponse, EmojiErrorBody]:
        """Lookup the text representation of an emoji

        Args:
            emoji: The emoji for which you want to get the text representation (e.g., 🥳)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emoji"),
            query_params=[param[str]("emoji", emoji)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EmojiResponse],
            error_mapper=emoji_error_mapper,
            request_options=request_options,
        )

    def genderdetector(
        self, name: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1GenderdetectorResponse, GenderdetectorErrorBody]:
        """Detect the likely gender based on a given name

        Args:
            name: The name for which you want to detect the gender
            country: The country code for the name (e.g., US). Recorded and echoed back in the response, but detection
                does not yet vary by country - the same name returns the same gender whichever code you pass
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/genderdetector"),
            query_params=[param[str]("name", name), param[str | None]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GenderdetectorResponse],
            error_mapper=genderdetector_error_mapper,
            request_options=request_options,
        )

    def gravatarlookup(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1GravatarlookupResponse, GravatarlookupErrorBody]:
        """Lookup the Gravatar profile of an email address

        Args:
            email: The email address to lookup the Gravatar profile of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gravatarlookup"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GravatarlookupResponse],
            error_mapper=gravatarlookup_error_mapper,
            request_options=request_options,
        )

    def ipdemographics(
        self, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IpdemographicsResponse, IpdemographicsErrorBody]:
        """Get location and demographic data for an IP address

        Args:
            ip: IPv4 or IPv6 address
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ipdemographics"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IpdemographicsResponse],
            error_mapper=ipdemographics_error_mapper,
            request_options=request_options,
        )

    def lottery(
        self, numbers: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LotteryResponse, LotteryErrorBody]:
        """Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the
        game with the numbers parameter. Optionally provide a date for historical results.

        Args:
            numbers: The lottery game to lookup: powerball, megamillions, euromillions, or lottomax
            date: Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lottery"),
            query_params=[param[str]("numbers", numbers), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LotteryResponse],
            error_mapper=lottery_error_mapper,
            request_options=request_options,
        )

    def nobelprizes(
        self,
        *,
        firstname: str | None = None,
        lastname: str | None = None,
        category: str | None = None,
        year: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1NobelprizesResponse, NobelprizesErrorBody]:
        """Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various
        Nobel Prizes.

        Args:
            firstname: The first name of the Nobel Prize winner to get information about
            lastname: The last name of the Nobel Prize winner to get information about
            category: The category of the Nobel Prize to get information about
            year: The year of the Nobel Prize to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nobelprizes"),
            query_params=[
                param[str | None]("firstname", firstname),
                param[str | None]("lastname", lastname),
                param[str | None]("category", category),
                param[int | None]("year", year),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NobelprizesResponse],
            error_mapper=nobelprizes_error_mapper,
            request_options=request_options,
        )

    def openlicenses(
        self, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1OpenlicensesResponse, OpenlicensesErrorBody]:
        """Open Source Licenses is a simple tool for getting information on open source licenses. It returns information
        on various open source licenses.

        Args:
            name: The name of the open source license to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openlicenses"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1OpenlicensesResponse],
            error_mapper=openlicenses_error_mapper,
            request_options=request_options,
        )

    def thesaurus(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ThesaurusResponse, ThesaurusErrorBody]:
        """Get a list of similar words for the specified word

        Args:
            word: The word for which you want to get synonyms
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/thesaurus"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ThesaurusResponse],
            error_mapper=thesaurus_error_mapper,
            request_options=request_options,
        )

    def timezonelookup(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TimezonelookupResponse, TimezonelookupErrorBody]:
        """Lookup timezone data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., Harare)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/timezonelookup"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TimezonelookupResponse],
            error_mapper=timezonelookup_error_mapper,
            request_options=request_options,
        )

    def unicodelookup(
        self,
        *,
        character: str | None = None,
        codepoint: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UnicodelookupResponse, UnicodelookupErrorBody]:
        """Get detailed information about a Unicode character

        Args:
            character: The Unicode character to lookup. Supply either character or codepoint.
            codepoint: The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unicodelookup"),
            query_params=[param[str | None]("character", character), param[str | None]("codepoint", codepoint)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1UnicodelookupResponse],
            error_mapper=unicodelookup_error_mapper,
            request_options=request_options,
        )

    def worldtime(
        self, city: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorldtimeResponse, WorldtimeErrorBody]:
        """Get the current time in any city

        Args:
            city: The city name for which you want to get the current time (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/worldtime"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WorldtimeResponse],
            error_mapper=worldtime_error_mapper,
            request_options=request_options,
        )

    def zipdemographics(
        self, zip_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ZipdemographicsResponse, ZipdemographicsErrorBody]:
        """Get demographic data for a ZIP code

        Args:
            zip_: 5-digit US ZIP code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/zipdemographics"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ZipdemographicsResponse],
            error_mapper=zipdemographics_error_mapper,
            request_options=request_options,
        )


class AsyncDataLookupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def asnlookup(
        self, asn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AsnlookupResponse, AsnlookupErrorBody]:
        """ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It returns
        information on various ASNs.

        Args:
            asn: The ASN you want to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/asnlookup"),
            query_params=[param[str]("asn", asn)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AsnlookupResponse],
            error_mapper=asnlookup_error_mapper,
            request_options=request_options,
        )

    async def bible(
        self,
        book: str,
        version: str,
        chapter: int,
        *,
        verse: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1BibleResponse, BibleErrorBody]:
        """Get a bible chapter or verse based on the book, chapter, and or verse

        Args:
            book: The name of the book in the bible (e.g., Genesis)
            version: The Bible translation version
            chapter: The chapter number in the book
            verse: The verse number in the chapter
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bible"),
            query_params=[
                param[str]("book", book),
                param[str]("version", version),
                param[int]("chapter", chapter),
                param[int | None]("verse", verse),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BibleResponse],
            error_mapper=bible_error_mapper,
            request_options=request_options,
        )

    async def callingcode(
        self, country: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CallingcodeResponse, CallingcodeErrorBody]:
        """Country Calling Code is a simple tool for getting the country's international dialing codes. It returns the
        country's international dialing codes.

        Args:
            country: The 2 letter ISO code for the country (e.g. FR)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/callingcode"),
            query_params=[param[str]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CallingcodeResponse],
            error_mapper=callingcode_error_mapper,
            request_options=request_options,
        )

    async def dictionary(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DictionaryResponse, DictionaryErrorBody]:
        """Get the definition of a word

        Args:
            word: The word for which you want to get the definition (e.g., apple)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dictionary"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DictionaryResponse],
            error_mapper=dictionary_error_mapper,
            request_options=request_options,
        )

    async def dogbreeds(
        self, breed: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DogbreedsResponse, DogbreedsErrorBody]:
        """Get information about a specific dog breed

        Args:
            breed: The name of the dog breed to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dogbreeds"),
            query_params=[param[str]("breed", breed)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DogbreedsResponse],
            error_mapper=dogbreeds_error_mapper,
            request_options=request_options,
        )

    async def emoji(
        self, emoji: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1EmojiResponse, EmojiErrorBody]:
        """Lookup the text representation of an emoji

        Args:
            emoji: The emoji for which you want to get the text representation (e.g., 🥳)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/emoji"),
            query_params=[param[str]("emoji", emoji)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EmojiResponse],
            error_mapper=emoji_error_mapper,
            request_options=request_options,
        )

    async def genderdetector(
        self, name: str, *, country: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1GenderdetectorResponse, GenderdetectorErrorBody]:
        """Detect the likely gender based on a given name

        Args:
            name: The name for which you want to detect the gender
            country: The country code for the name (e.g., US). Recorded and echoed back in the response, but detection
                does not yet vary by country - the same name returns the same gender whichever code you pass
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/genderdetector"),
            query_params=[param[str]("name", name), param[str | None]("country", country)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GenderdetectorResponse],
            error_mapper=genderdetector_error_mapper,
            request_options=request_options,
        )

    async def gravatarlookup(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1GravatarlookupResponse, GravatarlookupErrorBody]:
        """Lookup the Gravatar profile of an email address

        Args:
            email: The email address to lookup the Gravatar profile of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gravatarlookup"),
            query_params=[param[str]("email", email)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GravatarlookupResponse],
            error_mapper=gravatarlookup_error_mapper,
            request_options=request_options,
        )

    async def ipdemographics(
        self, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IpdemographicsResponse, IpdemographicsErrorBody]:
        """Get location and demographic data for an IP address

        Args:
            ip: IPv4 or IPv6 address
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/ipdemographics"),
            query_params=[param[str]("ip", ip)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IpdemographicsResponse],
            error_mapper=ipdemographics_error_mapper,
            request_options=request_options,
        )

    async def lottery(
        self, numbers: str, *, date: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1LotteryResponse, LotteryErrorBody]:
        """Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto Max — pick the
        game with the numbers parameter. Optionally provide a date for historical results.

        Args:
            numbers: The lottery game to lookup: powerball, megamillions, euromillions, or lottomax
            date: Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lottery"),
            query_params=[param[str]("numbers", numbers), param[str | None]("date", date)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LotteryResponse],
            error_mapper=lottery_error_mapper,
            request_options=request_options,
        )

    async def nobelprizes(
        self,
        *,
        firstname: str | None = None,
        lastname: str | None = None,
        category: str | None = None,
        year: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1NobelprizesResponse, NobelprizesErrorBody]:
        """Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information on various
        Nobel Prizes.

        Args:
            firstname: The first name of the Nobel Prize winner to get information about
            lastname: The last name of the Nobel Prize winner to get information about
            category: The category of the Nobel Prize to get information about
            year: The year of the Nobel Prize to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/nobelprizes"),
            query_params=[
                param[str | None]("firstname", firstname),
                param[str | None]("lastname", lastname),
                param[str | None]("category", category),
                param[int | None]("year", year),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NobelprizesResponse],
            error_mapper=nobelprizes_error_mapper,
            request_options=request_options,
        )

    async def openlicenses(
        self, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1OpenlicensesResponse, OpenlicensesErrorBody]:
        """Open Source Licenses is a simple tool for getting information on open source licenses. It returns information
        on various open source licenses.

        Args:
            name: The name of the open source license to get information about
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/openlicenses"),
            query_params=[param[str]("name", name)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1OpenlicensesResponse],
            error_mapper=openlicenses_error_mapper,
            request_options=request_options,
        )

    async def thesaurus(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ThesaurusResponse, ThesaurusErrorBody]:
        """Get a list of similar words for the specified word

        Args:
            word: The word for which you want to get synonyms
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/thesaurus"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ThesaurusResponse],
            error_mapper=thesaurus_error_mapper,
            request_options=request_options,
        )

    async def timezonelookup(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TimezonelookupResponse, TimezonelookupErrorBody]:
        """Lookup timezone data based on the city name

        Args:
            city: The city name for which you want to get the data (e.g., Harare)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/timezonelookup"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TimezonelookupResponse],
            error_mapper=timezonelookup_error_mapper,
            request_options=request_options,
        )

    async def unicodelookup(
        self,
        *,
        character: str | None = None,
        codepoint: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UnicodelookupResponse, UnicodelookupErrorBody]:
        """Get detailed information about a Unicode character

        Args:
            character: The Unicode character to lookup. Supply either character or codepoint.
            codepoint: The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or codepoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/unicodelookup"),
            query_params=[param[str | None]("character", character), param[str | None]("codepoint", codepoint)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1UnicodelookupResponse],
            error_mapper=unicodelookup_error_mapper,
            request_options=request_options,
        )

    async def worldtime(
        self, city: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorldtimeResponse, WorldtimeErrorBody]:
        """Get the current time in any city

        Args:
            city: The city name for which you want to get the current time (e.g., New York)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/worldtime"),
            query_params=[param[str]("city", city)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WorldtimeResponse],
            error_mapper=worldtime_error_mapper,
            request_options=request_options,
        )

    async def zipdemographics(
        self, zip_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ZipdemographicsResponse, ZipdemographicsErrorBody]:
        """Get demographic data for a ZIP code

        Args:
            zip_: 5-digit US ZIP code
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/zipdemographics"),
            query_params=[param[str]("zip", zip_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ZipdemographicsResponse],
            error_mapper=zipdemographics_error_mapper,
            request_options=request_options,
        )
