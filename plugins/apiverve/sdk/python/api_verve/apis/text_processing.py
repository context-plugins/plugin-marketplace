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
from ..errors.acronymexpander_error import AcronymexpanderErrorBody, acronymexpander_error_mapper
from ..errors.anagramdetector_error import AnagramdetectorErrorBody, anagramdetector_error_mapper
from ..errors.antonym_error import AntonymErrorBody, antonym_error_mapper
from ..errors.cronparser_error import CronparserErrorBody, cronparser_error_mapper
from ..errors.datamasking_error import DatamaskingErrorBody, datamasking_error_mapper
from ..errors.didyoumean_error import DidyoumeanErrorBody, didyoumean_error_mapper
from ..errors.emojidecorator_error import EmojidecoratorErrorBody, emojidecorator_error_mapper
from ..errors.gibberishdetector_error import GibberishdetectorErrorBody, gibberishdetector_error_mapper
from ..errors.grammarcheck_error import GrammarcheckErrorBody, grammarcheck_error_mapper
from ..errors.isbnvalidator_error import IsbnvalidatorErrorBody, isbnvalidator_error_mapper
from ..errors.jsonschemavalidator_error import JsonschemavalidatorErrorBody, jsonschemavalidator_error_mapper
from ..errors.keywordextractor_error import KeywordextractorErrorBody, keywordextractor_error_mapper
from ..errors.leetspeak_error import LeetspeakErrorBody, leetspeak_error_mapper
from ..errors.lemmatizer_error import LemmatizerErrorBody, lemmatizer_error_mapper
from ..errors.levenshteindistance_error import LevenshteindistanceErrorBody, levenshteindistance_error_mapper
from ..errors.lexicon_error import LexiconErrorBody, lexicon_error_mapper
from ..errors.linesorter_error import LinesorterErrorBody, linesorter_error_mapper
from ..errors.markdownlinkextractor_error import MarkdownlinkextractorErrorBody, markdownlinkextractor_error_mapper
from ..errors.palindromechecker_error import PalindromecheckerErrorBody, palindromechecker_error_mapper
from ..errors.partsofspeech_error import PartsofspeechErrorBody, partsofspeech_error_mapper
from ..errors.phonetic_error import PhoneticErrorBody, phonetic_error_mapper
from ..errors.piglatin_error import PiglatinErrorBody, piglatin_error_mapper
from ..errors.profanityfilter_error import ProfanityfilterErrorBody, profanityfilter_error_mapper
from ..errors.readabilityscore_error import ReadabilityscoreErrorBody, readabilityscore_error_mapper
from ..errors.readingtime_error import ReadingtimeErrorBody, readingtime_error_mapper
from ..errors.regextester_error import RegextesterErrorBody, regextester_error_mapper
from ..errors.removepunctuation_error import RemovepunctuationErrorBody, removepunctuation_error_mapper
from ..errors.reversetext_error import ReversetextErrorBody, reversetext_error_mapper
from ..errors.slugify_error import SlugifyErrorBody, slugify_error_mapper
from ..errors.spellchecker_error import SpellcheckerErrorBody, spellchecker_error_mapper
from ..errors.syllablecounter_error import SyllablecounterErrorBody, syllablecounter_error_mapper
from ..errors.taxidvalidator_error import TaxidvalidatorErrorBody, taxidvalidator_error_mapper
from ..errors.tenseconverter_error import TenseconverterErrorBody, tenseconverter_error_mapper
from ..errors.textlanguage_error import TextlanguageErrorBody, textlanguage_error_mapper
from ..errors.textsimilarity_error import TextsimilarityErrorBody, textsimilarity_error_mapper
from ..errors.textstyler_error import TextstylerErrorBody, textstyler_error_mapper
from ..errors.textsummarizer_error import TextsummarizerErrorBody, textsummarizer_error_mapper
from ..errors.texttoemoji_error import TexttoemojiErrorBody, texttoemoji_error_mapper
from ..errors.titlecapitalization_error import TitlecapitalizationErrorBody, titlecapitalization_error_mapper
from ..errors.translator_error import TranslatorErrorBody, translator_error_mapper
from ..errors.vowelcounter_error import VowelcounterErrorBody, vowelcounter_error_mapper
from ..errors.websitereadability_error import WebsitereadabilityErrorBody, websitereadability_error_mapper
from ..errors.wordopposite_error import WordoppositeErrorBody, wordopposite_error_mapper
from ..errors.wordpronunciation_error import WordpronunciationErrorBody, wordpronunciation_error_mapper
from ..errors.wordrhymes_error import WordrhymesErrorBody, wordrhymes_error_mapper
from ..models.v1_acronymexpander_response import V1AcronymexpanderResponse
from ..models.v1_anagramdetector_response import V1AnagramdetectorResponse
from ..models.v1_antonym_response import V1AntonymResponse
from ..models.v1_cronparser_response import V1CronparserResponse
from ..models.v1_datamasking_request import V1DatamaskingRequest, V1DatamaskingRequestDict
from ..models.v1_datamasking_response import V1DatamaskingResponse
from ..models.v1_didyoumean_response import V1DidyoumeanResponse
from ..models.v1_emojidecorator_request import V1EmojidecoratorRequest, V1EmojidecoratorRequestDict
from ..models.v1_emojidecorator_response import V1EmojidecoratorResponse
from ..models.v1_gibberishdetector_request import V1GibberishdetectorRequest, V1GibberishdetectorRequestDict
from ..models.v1_gibberishdetector_response import V1GibberishdetectorResponse
from ..models.v1_grammarcheck_request import V1GrammarcheckRequest, V1GrammarcheckRequestDict
from ..models.v1_grammarcheck_response import V1GrammarcheckResponse
from ..models.v1_isbnvalidator_response import V1IsbnvalidatorResponse
from ..models.v1_jsonschemavalidator_request import V1JsonschemavalidatorRequest, V1JsonschemavalidatorRequestDict
from ..models.v1_jsonschemavalidator_response import V1JsonschemavalidatorResponse
from ..models.v1_keywordextractor_request import V1KeywordextractorRequest, V1KeywordextractorRequestDict
from ..models.v1_keywordextractor_response import V1KeywordextractorResponse
from ..models.v1_leetspeak_request import V1LeetspeakRequest, V1LeetspeakRequestDict
from ..models.v1_leetspeak_response import V1LeetspeakResponse
from ..models.v1_lemmatizer_request import V1LemmatizerRequest, V1LemmatizerRequestDict
from ..models.v1_lemmatizer_response import V1LemmatizerResponse
from ..models.v1_levenshteindistance_request import V1LevenshteindistanceRequest, V1LevenshteindistanceRequestDict
from ..models.v1_levenshteindistance_response import V1LevenshteindistanceResponse
from ..models.v1_lexicon_response import V1LexiconResponse
from ..models.v1_linesorter_request import V1LinesorterRequest, V1LinesorterRequestDict
from ..models.v1_linesorter_response import V1LinesorterResponse
from ..models.v1_markdownlinkextractor_request import V1MarkdownlinkextractorRequest, V1MarkdownlinkextractorRequestDict
from ..models.v1_markdownlinkextractor_response import V1MarkdownlinkextractorResponse
from ..models.v1_palindromechecker_response import V1PalindromecheckerResponse
from ..models.v1_partsofspeech_request import V1PartsofspeechRequest, V1PartsofspeechRequestDict
from ..models.v1_partsofspeech_response import V1PartsofspeechResponse
from ..models.v1_phonetic_response import V1PhoneticResponse
from ..models.v1_piglatin_request import V1PiglatinRequest, V1PiglatinRequestDict
from ..models.v1_piglatin_response import V1PiglatinResponse
from ..models.v1_profanityfilter_request import V1ProfanityfilterRequest, V1ProfanityfilterRequestDict
from ..models.v1_profanityfilter_response import V1ProfanityfilterResponse
from ..models.v1_readabilityscore_request import V1ReadabilityscoreRequest, V1ReadabilityscoreRequestDict
from ..models.v1_readabilityscore_response import V1ReadabilityscoreResponse
from ..models.v1_readingtime_request import V1ReadingtimeRequest, V1ReadingtimeRequestDict
from ..models.v1_readingtime_response import V1ReadingtimeResponse
from ..models.v1_regextester_request import V1RegextesterRequest, V1RegextesterRequestDict
from ..models.v1_regextester_response import V1RegextesterResponse
from ..models.v1_removepunctuation_request import V1RemovepunctuationRequest, V1RemovepunctuationRequestDict
from ..models.v1_removepunctuation_response import V1RemovepunctuationResponse
from ..models.v1_reversetext_request import V1ReversetextRequest, V1ReversetextRequestDict
from ..models.v1_reversetext_response import V1ReversetextResponse
from ..models.v1_slugify_request import V1SlugifyRequest, V1SlugifyRequestDict
from ..models.v1_slugify_response import V1SlugifyResponse
from ..models.v1_spellchecker_request import V1SpellcheckerRequest, V1SpellcheckerRequestDict
from ..models.v1_spellchecker_response import V1SpellcheckerResponse
from ..models.v1_syllablecounter_request import V1SyllablecounterRequest, V1SyllablecounterRequestDict
from ..models.v1_syllablecounter_response import V1SyllablecounterResponse
from ..models.v1_taxidvalidator_response import V1TaxidvalidatorResponse
from ..models.v1_tenseconverter_request import V1TenseconverterRequest, V1TenseconverterRequestDict
from ..models.v1_tenseconverter_response import V1TenseconverterResponse
from ..models.v1_textlanguage_request import V1TextlanguageRequest, V1TextlanguageRequestDict
from ..models.v1_textlanguage_response import V1TextlanguageResponse
from ..models.v1_textsimilarity_request import V1TextsimilarityRequest, V1TextsimilarityRequestDict
from ..models.v1_textsimilarity_response import V1TextsimilarityResponse
from ..models.v1_textstyler_request import V1TextstylerRequest, V1TextstylerRequestDict
from ..models.v1_textstyler_response import V1TextstylerResponse
from ..models.v1_textsummarizer_request import V1TextsummarizerRequest, V1TextsummarizerRequestDict
from ..models.v1_textsummarizer_response import V1TextsummarizerResponse
from ..models.v1_texttoemoji_request import V1TexttoemojiRequest, V1TexttoemojiRequestDict
from ..models.v1_texttoemoji_response import V1TexttoemojiResponse
from ..models.v1_titlecapitalization_request import V1TitlecapitalizationRequest, V1TitlecapitalizationRequestDict
from ..models.v1_titlecapitalization_response import V1TitlecapitalizationResponse
from ..models.v1_translator_request import V1TranslatorRequest, V1TranslatorRequestDict
from ..models.v1_translator_response import V1TranslatorResponse
from ..models.v1_vowelcounter_request import V1VowelcounterRequest, V1VowelcounterRequestDict
from ..models.v1_vowelcounter_response import V1VowelcounterResponse
from ..models.v1_websitereadability_request import V1WebsitereadabilityRequest, V1WebsitereadabilityRequestDict
from ..models.v1_websitereadability_response import V1WebsitereadabilityResponse
from ..models.v1_wordopposite_response import V1WordoppositeResponse
from ..models.v1_wordpronunciation_response import V1WordpronunciationResponse
from ..models.v1_wordrhymes_response import V1WordrhymesResponse
from ..server.server import Server


class TextProcessing:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TextProcessingWithRawResponse(client, server, auth)

    def acronymexpander(
        self, acronym: str, *, context: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1AcronymexpanderResponse:
        """Expand an acronym to its full meaning with AI assistance

        Args:
            acronym: The acronym to expand (max 20 characters)
            context: Optional context to help determine the correct meaning
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.acronymexpander(acronym, context=context, request_options=request_options)
        )

    def anagramdetector(
        self,
        text1: str,
        text2: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1AnagramdetectorResponse:
        """Check if two texts are anagrams with detailed analysis

        Args:
            text1: The first text to compare
            text2: The second text to compare
            ignorecase: Ignore case when comparing (default: true)
            ignorespaces: Ignore spaces when comparing (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.anagramdetector(
                text1, text2, ignorecase=ignorecase, ignorespaces=ignorespaces, request_options=request_options
            ),
        )

    def antonym(
        self, word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1AntonymResponse:
        """Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given
        word.

        Args:
            word: The word to get the antonyms for
            language: Language to return the antonyms in. Defaults to English
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.antonym(word, language=language, request_options=request_options))

    def cronparser(
        self, expression: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CronparserResponse:
        """Parse and validate cron expressions with detailed field analysis

        Args:
            expression: The cron expression to parse (5-field or 6-field format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cronparser(expression, request_options=request_options))

    def datamasking(
        self,
        body: V1DatamaskingRequest | V1DatamaskingRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DatamaskingResponse:
        """Detect and mask sensitive information in text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.datamasking(body, request_options=request_options))

    def didyoumean(self, query: str, *, request_options: RequestOptionsOrDict | None = None) -> V1DidyoumeanResponse:
        """Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

        Args:
            query: The text you want to check for spelling mistakes
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.didyoumean(query, request_options=request_options))

    def emojidecorator(
        self,
        body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1EmojidecoratorResponse:
        """Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.emojidecorator(body, request_options=request_options))

    def gibberishdetector(
        self,
        body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GibberishdetectorResponse:
        """Analyze text to detect gibberish content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.gibberishdetector(body, request_options=request_options))

    def grammarcheck(
        self,
        body: V1GrammarcheckRequest | V1GrammarcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1GrammarcheckResponse:
        """Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected
        text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.grammarcheck(body, request_options=request_options))

    def isbnvalidator(
        self, isbn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1IsbnvalidatorResponse:
        """Validate and parse ISBN-10 or ISBN-13 numbers

        Args:
            isbn: The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.isbnvalidator(isbn, request_options=request_options))

    def jsonschemavalidator(
        self,
        body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1JsonschemavalidatorResponse:
        """Validate JSON data against a JSON schema

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.jsonschemavalidator(body, request_options=request_options))

    def keywordextractor(
        self,
        body: V1KeywordextractorRequest | V1KeywordextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1KeywordextractorResponse:
        """Extract keywords from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.keywordextractor(body, request_options=request_options))

    def leetspeak(
        self, body: V1LeetspeakRequest | V1LeetspeakRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1LeetspeakResponse:
        """Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet
        Speak.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.leetspeak(body, request_options=request_options))

    def lemmatizer(
        self,
        body: V1LemmatizerRequest | V1LemmatizerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LemmatizerResponse:
        """Lemmatize text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.lemmatizer(body, request_options=request_options))

    def levenshteindistance(
        self,
        body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LevenshteindistanceResponse:
        """Calculate Levenshtein distance between two strings

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.levenshteindistance(body, request_options=request_options))

    def lexicon(self, word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1LexiconResponse:
        """Lexicon is a simple tool for analyzing words. It returns various properties of the word.

        Args:
            word: The word to analyze
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.lexicon(word, request_options=request_options))

    def linesorter(
        self,
        body: V1LinesorterRequest | V1LinesorterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LinesorterResponse:
        """Sort lines of text alphabetically

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.linesorter(body, request_options=request_options))

    def markdownlinkextractor(
        self,
        body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MarkdownlinkextractorResponse:
        """Parse markdown and extract all links with categorization

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.markdownlinkextractor(body, request_options=request_options))

    def palindromechecker(
        self,
        text: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        ignorepunctuation: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PalindromecheckerResponse:
        """Check if text is a palindrome with customizable options

        Args:
            text: The text to check for palindrome. Maximum 20000 characters
            ignorecase: Ignore case when checking (default: true)
            ignorespaces: Ignore spaces when checking (default: true)
            ignorepunctuation: Ignore punctuation when checking (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.palindromechecker(
                text,
                ignorecase=ignorecase,
                ignorespaces=ignorespaces,
                ignorepunctuation=ignorepunctuation,
                request_options=request_options,
            ),
        )

    def partsofspeech(
        self,
        body: V1PartsofspeechRequest | V1PartsofspeechRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PartsofspeechResponse:
        """Extract nouns, verbs, adjectives, adverbs, etc. from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.partsofspeech(body, request_options=request_options))

    def phonetic(
        self, word: str, *, algorithm: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1PhoneticResponse:
        """Get phonetic codes for a word

        Args:
            word: The word to encode phonetically
            algorithm: Algorithm to use
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.phonetic(word, algorithm=algorithm, request_options=request_options))

    def piglatin(
        self, body: V1PiglatinRequest | V1PiglatinRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1PiglatinResponse:
        """Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.piglatin(body, request_options=request_options))

    def profanityfilter(
        self,
        body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ProfanityfilterResponse:
        """Filter out profanity words from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.profanityfilter(body, request_options=request_options))

    def readabilityscore(
        self,
        body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ReadabilityscoreResponse:
        """Calculate the readability score of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.readabilityscore(body, request_options=request_options))

    def readingtime(
        self,
        body: V1ReadingtimeRequest | V1ReadingtimeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ReadingtimeResponse:
        """Calculate estimated reading time for text content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.readingtime(body, request_options=request_options))

    def regextester(
        self,
        body: V1RegextesterRequest | V1RegextesterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RegextesterResponse:
        """Test regular expressions with detailed analysis and results

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.regextester(body, request_options=request_options))

    def removepunctuation(
        self,
        body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RemovepunctuationResponse:
        """Remove all punctuation marks from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.removepunctuation(body, request_options=request_options))

    def reversetext(
        self,
        body: V1ReversetextRequest | V1ReversetextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ReversetextResponse:
        """Reverse text character by character

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reversetext(body, request_options=request_options))

    def slugify(
        self, body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1SlugifyResponse:
        """Convert text to a URL-friendly slug

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.slugify(body, request_options=request_options))

    def spellchecker(
        self,
        body: V1SpellcheckerRequest | V1SpellcheckerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SpellcheckerResponse:
        """Check the spelling of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.spellchecker(body, request_options=request_options))

    def syllablecounter(
        self,
        body: V1SyllablecounterRequest | V1SyllablecounterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SyllablecounterResponse:
        """Count syllables in words and text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.syllablecounter(body, request_options=request_options))

    def taxidvalidator(
        self, taxid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1TaxidvalidatorResponse:
        """Validate US Tax IDs (SSN, EIN, ITIN)

        Args:
            taxid: The US Tax ID to validate (SSN, EIN, or ITIN format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.taxidvalidator(taxid, request_options=request_options))

    def tenseconverter(
        self,
        body: V1TenseconverterRequest | V1TenseconverterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TenseconverterResponse:
        """Convert text to past or future tense

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.tenseconverter(body, request_options=request_options))

    def textlanguage(
        self,
        body: V1TextlanguageRequest | V1TextlanguageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TextlanguageResponse:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.textlanguage(body, request_options=request_options))

    def textsimilarity(
        self,
        body: V1TextsimilarityRequest | V1TextsimilarityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TextsimilarityResponse:
        """Check the similarity between two texts

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.textsimilarity(body, request_options=request_options))

    def textstyler(
        self,
        body: V1TextstylerRequest | V1TextstylerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TextstylerResponse:
        """Text Styler is a simple tool for styling text in various ways. It returns the styled text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.textstyler(body, request_options=request_options))

    def textsummarizer(
        self,
        body: V1TextsummarizerRequest | V1TextsummarizerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TextsummarizerResponse:
        """Summarize a body of text. Useful for generating summaries of articles, reports, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.textsummarizer(body, request_options=request_options))

    def texttoemoji(
        self,
        body: V1TexttoemojiRequest | V1TexttoemojiRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TexttoemojiResponse:
        """Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the
        given text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.texttoemoji(body, request_options=request_options))

    def titlecapitalization(
        self,
        body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TitlecapitalizationResponse:
        """Convert text to title case

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.titlecapitalization(body, request_options=request_options))

    def translator(
        self,
        body: V1TranslatorRequest | V1TranslatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TranslatorResponse:
        """Translate text from one language to another

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.translator(body, request_options=request_options))

    def vowelcounter(
        self,
        body: V1VowelcounterRequest | V1VowelcounterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1VowelcounterResponse:
        """Count vowels and consonants in text with detailed breakdown

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.vowelcounter(body, request_options=request_options))

    def websitereadability(
        self,
        body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WebsitereadabilityResponse:
        """Analyze the readability of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.websitereadability(body, request_options=request_options))

    def wordopposite(self, word: str, *, request_options: RequestOptionsOrDict | None = None) -> V1WordoppositeResponse:
        """Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the
        given word.

        Args:
            word: The word to get the opposites for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.wordopposite(word, request_options=request_options))

    def wordpronunciation(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WordpronunciationResponse:
        """Get the pronunciation of a word

        Args:
            word: The word to get the pronunciation of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.wordpronunciation(word, request_options=request_options))

    def wordrhymes(
        self, word: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1WordrhymesResponse:
        """Get a list of words that rhyme with the specified word

        Args:
            word: The word for which you want to get rhyming words
            limit: Limit the number of word rhymes returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.wordrhymes(word, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> TextProcessingWithRawResponse:
        return self._with_raw_response


class AsyncTextProcessing:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTextProcessingWithRawResponse(client, server, auth)

    async def acronymexpander(
        self, acronym: str, *, context: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AcronymexpanderResponse:
        """Expand an acronym to its full meaning with AI assistance

        Args:
            acronym: The acronym to expand (max 20 characters)
            context: Optional context to help determine the correct meaning
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.acronymexpander(acronym, context=context, request_options=request_options)
        )

    async def anagramdetector(
        self,
        text1: str,
        text2: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1AnagramdetectorResponse:
        """Check if two texts are anagrams with detailed analysis

        Args:
            text1: The first text to compare
            text2: The second text to compare
            ignorecase: Ignore case when comparing (default: true)
            ignorespaces: Ignore spaces when comparing (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.anagramdetector(
                text1, text2, ignorecase=ignorecase, ignorespaces=ignorespaces, request_options=request_options
            ),
        )

    async def antonym(
        self, word: str, *, language: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1AntonymResponse:
        """Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given
        word.

        Args:
            word: The word to get the antonyms for
            language: Language to return the antonyms in. Defaults to English
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.antonym(word, language=language, request_options=request_options))

    async def cronparser(
        self, expression: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CronparserResponse:
        """Parse and validate cron expressions with detailed field analysis

        Args:
            expression: The cron expression to parse (5-field or 6-field format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.cronparser(expression, request_options=request_options))

    async def datamasking(
        self,
        body: V1DatamaskingRequest | V1DatamaskingRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DatamaskingResponse:
        """Detect and mask sensitive information in text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.datamasking(body, request_options=request_options))

    async def didyoumean(
        self, query: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1DidyoumeanResponse:
        """Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

        Args:
            query: The text you want to check for spelling mistakes
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.didyoumean(query, request_options=request_options))

    async def emojidecorator(
        self,
        body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1EmojidecoratorResponse:
        """Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.emojidecorator(body, request_options=request_options))

    async def gibberishdetector(
        self,
        body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GibberishdetectorResponse:
        """Analyze text to detect gibberish content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.gibberishdetector(body, request_options=request_options))

    async def grammarcheck(
        self,
        body: V1GrammarcheckRequest | V1GrammarcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GrammarcheckResponse:
        """Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected
        text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.grammarcheck(body, request_options=request_options))

    async def isbnvalidator(
        self, isbn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1IsbnvalidatorResponse:
        """Validate and parse ISBN-10 or ISBN-13 numbers

        Args:
            isbn: The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.isbnvalidator(isbn, request_options=request_options))

    async def jsonschemavalidator(
        self,
        body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1JsonschemavalidatorResponse:
        """Validate JSON data against a JSON schema

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.jsonschemavalidator(body, request_options=request_options))

    async def keywordextractor(
        self,
        body: V1KeywordextractorRequest | V1KeywordextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1KeywordextractorResponse:
        """Extract keywords from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.keywordextractor(body, request_options=request_options))

    async def leetspeak(
        self,
        body: V1LeetspeakRequest | V1LeetspeakRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LeetspeakResponse:
        """Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet
        Speak.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.leetspeak(body, request_options=request_options))

    async def lemmatizer(
        self,
        body: V1LemmatizerRequest | V1LemmatizerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LemmatizerResponse:
        """Lemmatize text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.lemmatizer(body, request_options=request_options))

    async def levenshteindistance(
        self,
        body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LevenshteindistanceResponse:
        """Calculate Levenshtein distance between two strings

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.levenshteindistance(body, request_options=request_options))

    async def lexicon(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1LexiconResponse:
        """Lexicon is a simple tool for analyzing words. It returns various properties of the word.

        Args:
            word: The word to analyze
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.lexicon(word, request_options=request_options))

    async def linesorter(
        self,
        body: V1LinesorterRequest | V1LinesorterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LinesorterResponse:
        """Sort lines of text alphabetically

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.linesorter(body, request_options=request_options))

    async def markdownlinkextractor(
        self,
        body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MarkdownlinkextractorResponse:
        """Parse markdown and extract all links with categorization

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.markdownlinkextractor(body, request_options=request_options))

    async def palindromechecker(
        self,
        text: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        ignorepunctuation: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PalindromecheckerResponse:
        """Check if text is a palindrome with customizable options

        Args:
            text: The text to check for palindrome. Maximum 20000 characters
            ignorecase: Ignore case when checking (default: true)
            ignorespaces: Ignore spaces when checking (default: true)
            ignorepunctuation: Ignore punctuation when checking (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.palindromechecker(
                text,
                ignorecase=ignorecase,
                ignorespaces=ignorespaces,
                ignorepunctuation=ignorepunctuation,
                request_options=request_options,
            ),
        )

    async def partsofspeech(
        self,
        body: V1PartsofspeechRequest | V1PartsofspeechRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PartsofspeechResponse:
        """Extract nouns, verbs, adjectives, adverbs, etc. from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.partsofspeech(body, request_options=request_options))

    async def phonetic(
        self, word: str, *, algorithm: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1PhoneticResponse:
        """Get phonetic codes for a word

        Args:
            word: The word to encode phonetically
            algorithm: Algorithm to use
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.phonetic(word, algorithm=algorithm, request_options=request_options)
        )

    async def piglatin(
        self,
        body: V1PiglatinRequest | V1PiglatinRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PiglatinResponse:
        """Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.piglatin(body, request_options=request_options))

    async def profanityfilter(
        self,
        body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ProfanityfilterResponse:
        """Filter out profanity words from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.profanityfilter(body, request_options=request_options))

    async def readabilityscore(
        self,
        body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ReadabilityscoreResponse:
        """Calculate the readability score of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.readabilityscore(body, request_options=request_options))

    async def readingtime(
        self,
        body: V1ReadingtimeRequest | V1ReadingtimeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ReadingtimeResponse:
        """Calculate estimated reading time for text content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.readingtime(body, request_options=request_options))

    async def regextester(
        self,
        body: V1RegextesterRequest | V1RegextesterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RegextesterResponse:
        """Test regular expressions with detailed analysis and results

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.regextester(body, request_options=request_options))

    async def removepunctuation(
        self,
        body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RemovepunctuationResponse:
        """Remove all punctuation marks from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.removepunctuation(body, request_options=request_options))

    async def reversetext(
        self,
        body: V1ReversetextRequest | V1ReversetextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ReversetextResponse:
        """Reverse text character by character

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reversetext(body, request_options=request_options))

    async def slugify(
        self, body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SlugifyResponse:
        """Convert text to a URL-friendly slug

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.slugify(body, request_options=request_options))

    async def spellchecker(
        self,
        body: V1SpellcheckerRequest | V1SpellcheckerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SpellcheckerResponse:
        """Check the spelling of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.spellchecker(body, request_options=request_options))

    async def syllablecounter(
        self,
        body: V1SyllablecounterRequest | V1SyllablecounterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SyllablecounterResponse:
        """Count syllables in words and text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.syllablecounter(body, request_options=request_options))

    async def taxidvalidator(
        self, taxid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TaxidvalidatorResponse:
        """Validate US Tax IDs (SSN, EIN, ITIN)

        Args:
            taxid: The US Tax ID to validate (SSN, EIN, or ITIN format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.taxidvalidator(taxid, request_options=request_options))

    async def tenseconverter(
        self,
        body: V1TenseconverterRequest | V1TenseconverterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TenseconverterResponse:
        """Convert text to past or future tense

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.tenseconverter(body, request_options=request_options))

    async def textlanguage(
        self,
        body: V1TextlanguageRequest | V1TextlanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TextlanguageResponse:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.textlanguage(body, request_options=request_options))

    async def textsimilarity(
        self,
        body: V1TextsimilarityRequest | V1TextsimilarityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TextsimilarityResponse:
        """Check the similarity between two texts

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.textsimilarity(body, request_options=request_options))

    async def textstyler(
        self,
        body: V1TextstylerRequest | V1TextstylerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TextstylerResponse:
        """Text Styler is a simple tool for styling text in various ways. It returns the styled text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.textstyler(body, request_options=request_options))

    async def textsummarizer(
        self,
        body: V1TextsummarizerRequest | V1TextsummarizerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TextsummarizerResponse:
        """Summarize a body of text. Useful for generating summaries of articles, reports, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.textsummarizer(body, request_options=request_options))

    async def texttoemoji(
        self,
        body: V1TexttoemojiRequest | V1TexttoemojiRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TexttoemojiResponse:
        """Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the
        given text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.texttoemoji(body, request_options=request_options))

    async def titlecapitalization(
        self,
        body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TitlecapitalizationResponse:
        """Convert text to title case

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.titlecapitalization(body, request_options=request_options))

    async def translator(
        self,
        body: V1TranslatorRequest | V1TranslatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TranslatorResponse:
        """Translate text from one language to another

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.translator(body, request_options=request_options))

    async def vowelcounter(
        self,
        body: V1VowelcounterRequest | V1VowelcounterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1VowelcounterResponse:
        """Count vowels and consonants in text with detailed breakdown

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.vowelcounter(body, request_options=request_options))

    async def websitereadability(
        self,
        body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WebsitereadabilityResponse:
        """Analyze the readability of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.websitereadability(body, request_options=request_options))

    async def wordopposite(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WordoppositeResponse:
        """Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the
        given word.

        Args:
            word: The word to get the opposites for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.wordopposite(word, request_options=request_options))

    async def wordpronunciation(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WordpronunciationResponse:
        """Get the pronunciation of a word

        Args:
            word: The word to get the pronunciation of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.wordpronunciation(word, request_options=request_options))

    async def wordrhymes(
        self, word: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WordrhymesResponse:
        """Get a list of words that rhyme with the specified word

        Args:
            word: The word for which you want to get rhyming words
            limit: Limit the number of word rhymes returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.wordrhymes(word, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTextProcessingWithRawResponse:
        return self._with_raw_response


class TextProcessingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def acronymexpander(
        self, acronym: str, *, context: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AcronymexpanderResponse, AcronymexpanderErrorBody]:
        """Expand an acronym to its full meaning with AI assistance

        Args:
            acronym: The acronym to expand (max 20 characters)
            context: Optional context to help determine the correct meaning
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acronymexpander"),
            query_params=[param[str]("acronym", acronym), param[str | None]("context", context)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AcronymexpanderResponse],
            error_mapper=acronymexpander_error_mapper,
            request_options=request_options,
        )

    def anagramdetector(
        self,
        text1: str,
        text2: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AnagramdetectorResponse, AnagramdetectorErrorBody]:
        """Check if two texts are anagrams with detailed analysis

        Args:
            text1: The first text to compare
            text2: The second text to compare
            ignorecase: Ignore case when comparing (default: true)
            ignorespaces: Ignore spaces when comparing (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anagramdetector"),
            query_params=[
                param[str]("text1", text1),
                param[str]("text2", text2),
                param[bool | None]("ignorecase", ignorecase),
                param[bool | None]("ignorespaces", ignorespaces),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AnagramdetectorResponse],
            error_mapper=anagramdetector_error_mapper,
            request_options=request_options,
        )

    def antonym(
        self, word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AntonymResponse, AntonymErrorBody]:
        """Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given
        word.

        Args:
            word: The word to get the antonyms for
            language: Language to return the antonyms in. Defaults to English
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/antonym"),
            query_params=[param[str]("word", word), param[str | None]("language", language)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AntonymResponse],
            error_mapper=antonym_error_mapper,
            request_options=request_options,
        )

    def cronparser(
        self, expression: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CronparserResponse, CronparserErrorBody]:
        """Parse and validate cron expressions with detailed field analysis

        Args:
            expression: The cron expression to parse (5-field or 6-field format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cronparser"),
            query_params=[param[str]("expression", expression)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CronparserResponse],
            error_mapper=cronparser_error_mapper,
            request_options=request_options,
        )

    def datamasking(
        self,
        body: V1DatamaskingRequest | V1DatamaskingRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DatamaskingResponse, DatamaskingErrorBody]:
        """Detect and mask sensitive information in text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/datamasking"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DatamaskingRequest | V1DatamaskingRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DatamaskingResponse],
            error_mapper=datamasking_error_mapper,
            request_options=request_options,
        )

    def didyoumean(
        self, query: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DidyoumeanResponse, DidyoumeanErrorBody]:
        """Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

        Args:
            query: The text you want to check for spelling mistakes
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/didyoumean"),
            query_params=[param[str]("query", query)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DidyoumeanResponse],
            error_mapper=didyoumean_error_mapper,
            request_options=request_options,
        )

    def emojidecorator(
        self,
        body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EmojidecoratorResponse, EmojidecoratorErrorBody]:
        """Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/emojidecorator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1EmojidecoratorRequest | V1EmojidecoratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1EmojidecoratorResponse],
            error_mapper=emojidecorator_error_mapper,
            request_options=request_options,
        )

    def gibberishdetector(
        self,
        body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GibberishdetectorResponse, GibberishdetectorErrorBody]:
        """Analyze text to detect gibberish content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/gibberishdetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1GibberishdetectorRequest | V1GibberishdetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GibberishdetectorResponse],
            error_mapper=gibberishdetector_error_mapper,
            request_options=request_options,
        )

    def grammarcheck(
        self,
        body: V1GrammarcheckRequest | V1GrammarcheckRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrammarcheckResponse, GrammarcheckErrorBody]:
        """Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected
        text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/grammarcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1GrammarcheckRequest | V1GrammarcheckRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GrammarcheckResponse],
            error_mapper=grammarcheck_error_mapper,
            request_options=request_options,
        )

    def isbnvalidator(
        self, isbn: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1IsbnvalidatorResponse, IsbnvalidatorErrorBody]:
        """Validate and parse ISBN-10 or ISBN-13 numbers

        Args:
            isbn: The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/isbnvalidator"),
            query_params=[param[str]("isbn", isbn)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1IsbnvalidatorResponse],
            error_mapper=isbnvalidator_error_mapper,
            request_options=request_options,
        )

    def jsonschemavalidator(
        self,
        body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsonschemavalidatorResponse, JsonschemavalidatorErrorBody]:
        """Validate JSON data against a JSON schema

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsonschemavalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1JsonschemavalidatorResponse],
            error_mapper=jsonschemavalidator_error_mapper,
            request_options=request_options,
        )

    def keywordextractor(
        self,
        body: V1KeywordextractorRequest | V1KeywordextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1KeywordextractorResponse, KeywordextractorErrorBody]:
        """Extract keywords from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/keywordextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1KeywordextractorRequest | V1KeywordextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1KeywordextractorResponse],
            error_mapper=keywordextractor_error_mapper,
            request_options=request_options,
        )

    def leetspeak(
        self, body: V1LeetspeakRequest | V1LeetspeakRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LeetspeakResponse, LeetspeakErrorBody]:
        """Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet
        Speak.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/leetspeak"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LeetspeakRequest | V1LeetspeakRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LeetspeakResponse],
            error_mapper=leetspeak_error_mapper,
            request_options=request_options,
        )

    def lemmatizer(
        self,
        body: V1LemmatizerRequest | V1LemmatizerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LemmatizerResponse, LemmatizerErrorBody]:
        """Lemmatize text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/lemmatizer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LemmatizerRequest | V1LemmatizerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LemmatizerResponse],
            error_mapper=lemmatizer_error_mapper,
            request_options=request_options,
        )

    def levenshteindistance(
        self,
        body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LevenshteindistanceResponse, LevenshteindistanceErrorBody]:
        """Calculate Levenshtein distance between two strings

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/levenshteindistance"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LevenshteindistanceResponse],
            error_mapper=levenshteindistance_error_mapper,
            request_options=request_options,
        )

    def lexicon(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LexiconResponse, LexiconErrorBody]:
        """Lexicon is a simple tool for analyzing words. It returns various properties of the word.

        Args:
            word: The word to analyze
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lexicon"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LexiconResponse],
            error_mapper=lexicon_error_mapper,
            request_options=request_options,
        )

    def linesorter(
        self,
        body: V1LinesorterRequest | V1LinesorterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LinesorterResponse, LinesorterErrorBody]:
        """Sort lines of text alphabetically

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/linesorter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LinesorterRequest | V1LinesorterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LinesorterResponse],
            error_mapper=linesorter_error_mapper,
            request_options=request_options,
        )

    def markdownlinkextractor(
        self,
        body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdownlinkextractorResponse, MarkdownlinkextractorErrorBody]:
        """Parse markdown and extract all links with categorization

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdownlinkextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MarkdownlinkextractorResponse],
            error_mapper=markdownlinkextractor_error_mapper,
            request_options=request_options,
        )

    def palindromechecker(
        self,
        text: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        ignorepunctuation: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PalindromecheckerResponse, PalindromecheckerErrorBody]:
        """Check if text is a palindrome with customizable options

        Args:
            text: The text to check for palindrome. Maximum 20000 characters
            ignorecase: Ignore case when checking (default: true)
            ignorespaces: Ignore spaces when checking (default: true)
            ignorepunctuation: Ignore punctuation when checking (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/palindromechecker"),
            query_params=[
                param[str]("text", text),
                param[bool | None]("ignorecase", ignorecase),
                param[bool | None]("ignorespaces", ignorespaces),
                param[bool | None]("ignorepunctuation", ignorepunctuation),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PalindromecheckerResponse],
            error_mapper=palindromechecker_error_mapper,
            request_options=request_options,
        )

    def partsofspeech(
        self,
        body: V1PartsofspeechRequest | V1PartsofspeechRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PartsofspeechResponse, PartsofspeechErrorBody]:
        """Extract nouns, verbs, adjectives, adverbs, etc. from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/partsofspeech"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PartsofspeechRequest | V1PartsofspeechRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PartsofspeechResponse],
            error_mapper=partsofspeech_error_mapper,
            request_options=request_options,
        )

    def phonetic(
        self, word: str, *, algorithm: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PhoneticResponse, PhoneticErrorBody]:
        """Get phonetic codes for a word

        Args:
            word: The word to encode phonetically
            algorithm: Algorithm to use
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/phonetic"),
            query_params=[param[str]("word", word), param[str | None]("algorithm", algorithm)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PhoneticResponse],
            error_mapper=phonetic_error_mapper,
            request_options=request_options,
        )

    def piglatin(
        self, body: V1PiglatinRequest | V1PiglatinRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1PiglatinResponse, PiglatinErrorBody]:
        """Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/piglatin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PiglatinRequest | V1PiglatinRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PiglatinResponse],
            error_mapper=piglatin_error_mapper,
            request_options=request_options,
        )

    def profanityfilter(
        self,
        body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ProfanityfilterResponse, ProfanityfilterErrorBody]:
        """Filter out profanity words from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/profanityfilter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ProfanityfilterRequest | V1ProfanityfilterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ProfanityfilterResponse],
            error_mapper=profanityfilter_error_mapper,
            request_options=request_options,
        )

    def readabilityscore(
        self,
        body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReadabilityscoreResponse, ReadabilityscoreErrorBody]:
        """Calculate the readability score of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/readabilityscore"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ReadabilityscoreResponse],
            error_mapper=readabilityscore_error_mapper,
            request_options=request_options,
        )

    def readingtime(
        self,
        body: V1ReadingtimeRequest | V1ReadingtimeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReadingtimeResponse, ReadingtimeErrorBody]:
        """Calculate estimated reading time for text content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/readingtime"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReadingtimeRequest | V1ReadingtimeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ReadingtimeResponse],
            error_mapper=readingtime_error_mapper,
            request_options=request_options,
        )

    def regextester(
        self,
        body: V1RegextesterRequest | V1RegextesterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RegextesterResponse, RegextesterErrorBody]:
        """Test regular expressions with detailed analysis and results

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/regextester"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RegextesterRequest | V1RegextesterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RegextesterResponse],
            error_mapper=regextester_error_mapper,
            request_options=request_options,
        )

    def removepunctuation(
        self,
        body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RemovepunctuationResponse, RemovepunctuationErrorBody]:
        """Remove all punctuation marks from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/removepunctuation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RemovepunctuationRequest | V1RemovepunctuationRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RemovepunctuationResponse],
            error_mapper=removepunctuation_error_mapper,
            request_options=request_options,
        )

    def reversetext(
        self,
        body: V1ReversetextRequest | V1ReversetextRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReversetextResponse, ReversetextErrorBody]:
        """Reverse text character by character

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/reversetext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReversetextRequest | V1ReversetextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ReversetextResponse],
            error_mapper=reversetext_error_mapper,
            request_options=request_options,
        )

    def slugify(
        self, body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SlugifyResponse, SlugifyErrorBody]:
        """Convert text to a URL-friendly slug

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/slugify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SlugifyRequest | V1SlugifyRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SlugifyResponse],
            error_mapper=slugify_error_mapper,
            request_options=request_options,
        )

    def spellchecker(
        self,
        body: V1SpellcheckerRequest | V1SpellcheckerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpellcheckerResponse, SpellcheckerErrorBody]:
        """Check the spelling of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/spellchecker"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SpellcheckerRequest | V1SpellcheckerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SpellcheckerResponse],
            error_mapper=spellchecker_error_mapper,
            request_options=request_options,
        )

    def syllablecounter(
        self,
        body: V1SyllablecounterRequest | V1SyllablecounterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SyllablecounterResponse, SyllablecounterErrorBody]:
        """Count syllables in words and text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/syllablecounter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SyllablecounterRequest | V1SyllablecounterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SyllablecounterResponse],
            error_mapper=syllablecounter_error_mapper,
            request_options=request_options,
        )

    def taxidvalidator(
        self, taxid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TaxidvalidatorResponse, TaxidvalidatorErrorBody]:
        """Validate US Tax IDs (SSN, EIN, ITIN)

        Args:
            taxid: The US Tax ID to validate (SSN, EIN, or ITIN format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/taxidvalidator"),
            query_params=[param[str]("taxid", taxid)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TaxidvalidatorResponse],
            error_mapper=taxidvalidator_error_mapper,
            request_options=request_options,
        )

    def tenseconverter(
        self,
        body: V1TenseconverterRequest | V1TenseconverterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TenseconverterResponse, TenseconverterErrorBody]:
        """Convert text to past or future tense

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tenseconverter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TenseconverterRequest | V1TenseconverterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TenseconverterResponse],
            error_mapper=tenseconverter_error_mapper,
            request_options=request_options,
        )

    def textlanguage(
        self,
        body: V1TextlanguageRequest | V1TextlanguageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextlanguageResponse, TextlanguageErrorBody]:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textlanguage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextlanguageRequest | V1TextlanguageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TextlanguageResponse],
            error_mapper=textlanguage_error_mapper,
            request_options=request_options,
        )

    def textsimilarity(
        self,
        body: V1TextsimilarityRequest | V1TextsimilarityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextsimilarityResponse, TextsimilarityErrorBody]:
        """Check the similarity between two texts

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textsimilarity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextsimilarityRequest | V1TextsimilarityRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TextsimilarityResponse],
            error_mapper=textsimilarity_error_mapper,
            request_options=request_options,
        )

    def textstyler(
        self,
        body: V1TextstylerRequest | V1TextstylerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextstylerResponse, TextstylerErrorBody]:
        """Text Styler is a simple tool for styling text in various ways. It returns the styled text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textstyler"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextstylerRequest | V1TextstylerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TextstylerResponse],
            error_mapper=textstyler_error_mapper,
            request_options=request_options,
        )

    def textsummarizer(
        self,
        body: V1TextsummarizerRequest | V1TextsummarizerRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextsummarizerResponse, TextsummarizerErrorBody]:
        """Summarize a body of text. Useful for generating summaries of articles, reports, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textsummarizer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextsummarizerRequest | V1TextsummarizerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TextsummarizerResponse],
            error_mapper=textsummarizer_error_mapper,
            request_options=request_options,
        )

    def texttoemoji(
        self,
        body: V1TexttoemojiRequest | V1TexttoemojiRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TexttoemojiResponse, TexttoemojiErrorBody]:
        """Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the
        given text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/texttoemoji"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TexttoemojiRequest | V1TexttoemojiRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TexttoemojiResponse],
            error_mapper=texttoemoji_error_mapper,
            request_options=request_options,
        )

    def titlecapitalization(
        self,
        body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TitlecapitalizationResponse, TitlecapitalizationErrorBody]:
        """Convert text to title case

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/titlecapitalization"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TitlecapitalizationResponse],
            error_mapper=titlecapitalization_error_mapper,
            request_options=request_options,
        )

    def translator(
        self,
        body: V1TranslatorRequest | V1TranslatorRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TranslatorResponse, TranslatorErrorBody]:
        """Translate text from one language to another

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/translator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TranslatorRequest | V1TranslatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TranslatorResponse],
            error_mapper=translator_error_mapper,
            request_options=request_options,
        )

    def vowelcounter(
        self,
        body: V1VowelcounterRequest | V1VowelcounterRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VowelcounterResponse, VowelcounterErrorBody]:
        """Count vowels and consonants in text with detailed breakdown

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vowelcounter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VowelcounterRequest | V1VowelcounterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1VowelcounterResponse],
            error_mapper=vowelcounter_error_mapper,
            request_options=request_options,
        )

    def websitereadability(
        self,
        body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitereadabilityResponse, WebsitereadabilityErrorBody]:
        """Analyze the readability of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitereadability"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WebsitereadabilityResponse],
            error_mapper=websitereadability_error_mapper,
            request_options=request_options,
        )

    def wordopposite(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordoppositeResponse, WordoppositeErrorBody]:
        """Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the
        given word.

        Args:
            word: The word to get the opposites for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordopposite"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordoppositeResponse],
            error_mapper=wordopposite_error_mapper,
            request_options=request_options,
        )

    def wordpronunciation(
        self, word: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordpronunciationResponse, WordpronunciationErrorBody]:
        """Get the pronunciation of a word

        Args:
            word: The word to get the pronunciation of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordpronunciation"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordpronunciationResponse],
            error_mapper=wordpronunciation_error_mapper,
            request_options=request_options,
        )

    def wordrhymes(
        self, word: str, *, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordrhymesResponse, WordrhymesErrorBody]:
        """Get a list of words that rhyme with the specified word

        Args:
            word: The word for which you want to get rhyming words
            limit: Limit the number of word rhymes returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordrhymes"),
            query_params=[param[str]("word", word), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordrhymesResponse],
            error_mapper=wordrhymes_error_mapper,
            request_options=request_options,
        )


class AsyncTextProcessingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def acronymexpander(
        self, acronym: str, *, context: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AcronymexpanderResponse, AcronymexpanderErrorBody]:
        """Expand an acronym to its full meaning with AI assistance

        Args:
            acronym: The acronym to expand (max 20 characters)
            context: Optional context to help determine the correct meaning
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acronymexpander"),
            query_params=[param[str]("acronym", acronym), param[str | None]("context", context)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AcronymexpanderResponse],
            error_mapper=acronymexpander_error_mapper,
            request_options=request_options,
        )

    async def anagramdetector(
        self,
        text1: str,
        text2: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AnagramdetectorResponse, AnagramdetectorErrorBody]:
        """Check if two texts are anagrams with detailed analysis

        Args:
            text1: The first text to compare
            text2: The second text to compare
            ignorecase: Ignore case when comparing (default: true)
            ignorespaces: Ignore spaces when comparing (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anagramdetector"),
            query_params=[
                param[str]("text1", text1),
                param[str]("text2", text2),
                param[bool | None]("ignorecase", ignorecase),
                param[bool | None]("ignorespaces", ignorespaces),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AnagramdetectorResponse],
            error_mapper=anagramdetector_error_mapper,
            request_options=request_options,
        )

    async def antonym(
        self, word: str, *, language: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AntonymResponse, AntonymErrorBody]:
        """Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for the given
        word.

        Args:
            word: The word to get the antonyms for
            language: Language to return the antonyms in. Defaults to English
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/antonym"),
            query_params=[param[str]("word", word), param[str | None]("language", language)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AntonymResponse],
            error_mapper=antonym_error_mapper,
            request_options=request_options,
        )

    async def cronparser(
        self, expression: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CronparserResponse, CronparserErrorBody]:
        """Parse and validate cron expressions with detailed field analysis

        Args:
            expression: The cron expression to parse (5-field or 6-field format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cronparser"),
            query_params=[param[str]("expression", expression)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CronparserResponse],
            error_mapper=cronparser_error_mapper,
            request_options=request_options,
        )

    async def datamasking(
        self,
        body: V1DatamaskingRequest | V1DatamaskingRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DatamaskingResponse, DatamaskingErrorBody]:
        """Detect and mask sensitive information in text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/datamasking"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DatamaskingRequest | V1DatamaskingRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DatamaskingResponse],
            error_mapper=datamasking_error_mapper,
            request_options=request_options,
        )

    async def didyoumean(
        self, query: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DidyoumeanResponse, DidyoumeanErrorBody]:
        """Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.

        Args:
            query: The text you want to check for spelling mistakes
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/didyoumean"),
            query_params=[param[str]("query", query)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DidyoumeanResponse],
            error_mapper=didyoumean_error_mapper,
            request_options=request_options,
        )

    async def emojidecorator(
        self,
        body: V1EmojidecoratorRequest | V1EmojidecoratorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1EmojidecoratorResponse, EmojidecoratorErrorBody]:
        """Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated with emojis.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/emojidecorator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1EmojidecoratorRequest | V1EmojidecoratorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1EmojidecoratorResponse],
            error_mapper=emojidecorator_error_mapper,
            request_options=request_options,
        )

    async def gibberishdetector(
        self,
        body: V1GibberishdetectorRequest | V1GibberishdetectorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GibberishdetectorResponse, GibberishdetectorErrorBody]:
        """Analyze text to detect gibberish content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/gibberishdetector"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1GibberishdetectorRequest | V1GibberishdetectorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GibberishdetectorResponse],
            error_mapper=gibberishdetector_error_mapper,
            request_options=request_options,
        )

    async def grammarcheck(
        self,
        body: V1GrammarcheckRequest | V1GrammarcheckRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GrammarcheckResponse, GrammarcheckErrorBody]:
        """Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the corrected
        text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/grammarcheck"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1GrammarcheckRequest | V1GrammarcheckRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GrammarcheckResponse],
            error_mapper=grammarcheck_error_mapper,
            request_options=request_options,
        )

    async def isbnvalidator(
        self, isbn: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1IsbnvalidatorResponse, IsbnvalidatorErrorBody]:
        """Validate and parse ISBN-10 or ISBN-13 numbers

        Args:
            isbn: The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/isbnvalidator"),
            query_params=[param[str]("isbn", isbn)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1IsbnvalidatorResponse],
            error_mapper=isbnvalidator_error_mapper,
            request_options=request_options,
        )

    async def jsonschemavalidator(
        self,
        body: V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1JsonschemavalidatorResponse, JsonschemavalidatorErrorBody]:
        """Validate JSON data against a JSON schema

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/jsonschemavalidator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1JsonschemavalidatorRequest | V1JsonschemavalidatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1JsonschemavalidatorResponse],
            error_mapper=jsonschemavalidator_error_mapper,
            request_options=request_options,
        )

    async def keywordextractor(
        self,
        body: V1KeywordextractorRequest | V1KeywordextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1KeywordextractorResponse, KeywordextractorErrorBody]:
        """Extract keywords from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/keywordextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1KeywordextractorRequest | V1KeywordextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1KeywordextractorResponse],
            error_mapper=keywordextractor_error_mapper,
            request_options=request_options,
        )

    async def leetspeak(
        self,
        body: V1LeetspeakRequest | V1LeetspeakRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LeetspeakResponse, LeetspeakErrorBody]:
        """Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or decoded Leet
        Speak.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/leetspeak"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LeetspeakRequest | V1LeetspeakRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LeetspeakResponse],
            error_mapper=leetspeak_error_mapper,
            request_options=request_options,
        )

    async def lemmatizer(
        self,
        body: V1LemmatizerRequest | V1LemmatizerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LemmatizerResponse, LemmatizerErrorBody]:
        """Lemmatize text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/lemmatizer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LemmatizerRequest | V1LemmatizerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LemmatizerResponse],
            error_mapper=lemmatizer_error_mapper,
            request_options=request_options,
        )

    async def levenshteindistance(
        self,
        body: V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LevenshteindistanceResponse, LevenshteindistanceErrorBody]:
        """Calculate Levenshtein distance between two strings

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/levenshteindistance"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LevenshteindistanceRequest | V1LevenshteindistanceRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LevenshteindistanceResponse],
            error_mapper=levenshteindistance_error_mapper,
            request_options=request_options,
        )

    async def lexicon(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1LexiconResponse, LexiconErrorBody]:
        """Lexicon is a simple tool for analyzing words. It returns various properties of the word.

        Args:
            word: The word to analyze
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lexicon"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LexiconResponse],
            error_mapper=lexicon_error_mapper,
            request_options=request_options,
        )

    async def linesorter(
        self,
        body: V1LinesorterRequest | V1LinesorterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LinesorterResponse, LinesorterErrorBody]:
        """Sort lines of text alphabetically

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/linesorter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1LinesorterRequest | V1LinesorterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LinesorterResponse],
            error_mapper=linesorter_error_mapper,
            request_options=request_options,
        )

    async def markdownlinkextractor(
        self,
        body: V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MarkdownlinkextractorResponse, MarkdownlinkextractorErrorBody]:
        """Parse markdown and extract all links with categorization

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/markdownlinkextractor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1MarkdownlinkextractorRequest | V1MarkdownlinkextractorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MarkdownlinkextractorResponse],
            error_mapper=markdownlinkextractor_error_mapper,
            request_options=request_options,
        )

    async def palindromechecker(
        self,
        text: str,
        *,
        ignorecase: bool | None = None,
        ignorespaces: bool | None = None,
        ignorepunctuation: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PalindromecheckerResponse, PalindromecheckerErrorBody]:
        """Check if text is a palindrome with customizable options

        Args:
            text: The text to check for palindrome. Maximum 20000 characters
            ignorecase: Ignore case when checking (default: true)
            ignorespaces: Ignore spaces when checking (default: true)
            ignorepunctuation: Ignore punctuation when checking (default: true)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/palindromechecker"),
            query_params=[
                param[str]("text", text),
                param[bool | None]("ignorecase", ignorecase),
                param[bool | None]("ignorespaces", ignorespaces),
                param[bool | None]("ignorepunctuation", ignorepunctuation),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PalindromecheckerResponse],
            error_mapper=palindromechecker_error_mapper,
            request_options=request_options,
        )

    async def partsofspeech(
        self,
        body: V1PartsofspeechRequest | V1PartsofspeechRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PartsofspeechResponse, PartsofspeechErrorBody]:
        """Extract nouns, verbs, adjectives, adverbs, etc. from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/partsofspeech"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PartsofspeechRequest | V1PartsofspeechRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PartsofspeechResponse],
            error_mapper=partsofspeech_error_mapper,
            request_options=request_options,
        )

    async def phonetic(
        self, word: str, *, algorithm: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1PhoneticResponse, PhoneticErrorBody]:
        """Get phonetic codes for a word

        Args:
            word: The word to encode phonetically
            algorithm: Algorithm to use
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/phonetic"),
            query_params=[param[str]("word", word), param[str | None]("algorithm", algorithm)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PhoneticResponse],
            error_mapper=phonetic_error_mapper,
            request_options=request_options,
        )

    async def piglatin(
        self,
        body: V1PiglatinRequest | V1PiglatinRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PiglatinResponse, PiglatinErrorBody]:
        """Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/piglatin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1PiglatinRequest | V1PiglatinRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PiglatinResponse],
            error_mapper=piglatin_error_mapper,
            request_options=request_options,
        )

    async def profanityfilter(
        self,
        body: V1ProfanityfilterRequest | V1ProfanityfilterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ProfanityfilterResponse, ProfanityfilterErrorBody]:
        """Filter out profanity words from a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/profanityfilter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ProfanityfilterRequest | V1ProfanityfilterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ProfanityfilterResponse],
            error_mapper=profanityfilter_error_mapper,
            request_options=request_options,
        )

    async def readabilityscore(
        self,
        body: V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReadabilityscoreResponse, ReadabilityscoreErrorBody]:
        """Calculate the readability score of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/readabilityscore"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReadabilityscoreRequest | V1ReadabilityscoreRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ReadabilityscoreResponse],
            error_mapper=readabilityscore_error_mapper,
            request_options=request_options,
        )

    async def readingtime(
        self,
        body: V1ReadingtimeRequest | V1ReadingtimeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReadingtimeResponse, ReadingtimeErrorBody]:
        """Calculate estimated reading time for text content

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/readingtime"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReadingtimeRequest | V1ReadingtimeRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ReadingtimeResponse],
            error_mapper=readingtime_error_mapper,
            request_options=request_options,
        )

    async def regextester(
        self,
        body: V1RegextesterRequest | V1RegextesterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RegextesterResponse, RegextesterErrorBody]:
        """Test regular expressions with detailed analysis and results

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/regextester"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RegextesterRequest | V1RegextesterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RegextesterResponse],
            error_mapper=regextester_error_mapper,
            request_options=request_options,
        )

    async def removepunctuation(
        self,
        body: V1RemovepunctuationRequest | V1RemovepunctuationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RemovepunctuationResponse, RemovepunctuationErrorBody]:
        """Remove all punctuation marks from text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/removepunctuation"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RemovepunctuationRequest | V1RemovepunctuationRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RemovepunctuationResponse],
            error_mapper=removepunctuation_error_mapper,
            request_options=request_options,
        )

    async def reversetext(
        self,
        body: V1ReversetextRequest | V1ReversetextRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ReversetextResponse, ReversetextErrorBody]:
        """Reverse text character by character

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/reversetext"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ReversetextRequest | V1ReversetextRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ReversetextResponse],
            error_mapper=reversetext_error_mapper,
            request_options=request_options,
        )

    async def slugify(
        self, body: V1SlugifyRequest | V1SlugifyRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SlugifyResponse, SlugifyErrorBody]:
        """Convert text to a URL-friendly slug

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/slugify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SlugifyRequest | V1SlugifyRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SlugifyResponse],
            error_mapper=slugify_error_mapper,
            request_options=request_options,
        )

    async def spellchecker(
        self,
        body: V1SpellcheckerRequest | V1SpellcheckerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpellcheckerResponse, SpellcheckerErrorBody]:
        """Check the spelling of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/spellchecker"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SpellcheckerRequest | V1SpellcheckerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SpellcheckerResponse],
            error_mapper=spellchecker_error_mapper,
            request_options=request_options,
        )

    async def syllablecounter(
        self,
        body: V1SyllablecounterRequest | V1SyllablecounterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SyllablecounterResponse, SyllablecounterErrorBody]:
        """Count syllables in words and text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/syllablecounter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SyllablecounterRequest | V1SyllablecounterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SyllablecounterResponse],
            error_mapper=syllablecounter_error_mapper,
            request_options=request_options,
        )

    async def taxidvalidator(
        self, taxid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TaxidvalidatorResponse, TaxidvalidatorErrorBody]:
        """Validate US Tax IDs (SSN, EIN, ITIN)

        Args:
            taxid: The US Tax ID to validate (SSN, EIN, or ITIN format)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/taxidvalidator"),
            query_params=[param[str]("taxid", taxid)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TaxidvalidatorResponse],
            error_mapper=taxidvalidator_error_mapper,
            request_options=request_options,
        )

    async def tenseconverter(
        self,
        body: V1TenseconverterRequest | V1TenseconverterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TenseconverterResponse, TenseconverterErrorBody]:
        """Convert text to past or future tense

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/tenseconverter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TenseconverterRequest | V1TenseconverterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TenseconverterResponse],
            error_mapper=tenseconverter_error_mapper,
            request_options=request_options,
        )

    async def textlanguage(
        self,
        body: V1TextlanguageRequest | V1TextlanguageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextlanguageResponse, TextlanguageErrorBody]:
        """Detect the language of a body of text

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textlanguage"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextlanguageRequest | V1TextlanguageRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TextlanguageResponse],
            error_mapper=textlanguage_error_mapper,
            request_options=request_options,
        )

    async def textsimilarity(
        self,
        body: V1TextsimilarityRequest | V1TextsimilarityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextsimilarityResponse, TextsimilarityErrorBody]:
        """Check the similarity between two texts

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textsimilarity"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextsimilarityRequest | V1TextsimilarityRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TextsimilarityResponse],
            error_mapper=textsimilarity_error_mapper,
            request_options=request_options,
        )

    async def textstyler(
        self,
        body: V1TextstylerRequest | V1TextstylerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextstylerResponse, TextstylerErrorBody]:
        """Text Styler is a simple tool for styling text in various ways. It returns the styled text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textstyler"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextstylerRequest | V1TextstylerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TextstylerResponse],
            error_mapper=textstyler_error_mapper,
            request_options=request_options,
        )

    async def textsummarizer(
        self,
        body: V1TextsummarizerRequest | V1TextsummarizerRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TextsummarizerResponse, TextsummarizerErrorBody]:
        """Summarize a body of text. Useful for generating summaries of articles, reports, and more.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/textsummarizer"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TextsummarizerRequest | V1TextsummarizerRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TextsummarizerResponse],
            error_mapper=textsummarizer_error_mapper,
            request_options=request_options,
        )

    async def texttoemoji(
        self,
        body: V1TexttoemojiRequest | V1TexttoemojiRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TexttoemojiResponse, TexttoemojiErrorBody]:
        """Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that represent the
        given text.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/texttoemoji"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TexttoemojiRequest | V1TexttoemojiRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TexttoemojiResponse],
            error_mapper=texttoemoji_error_mapper,
            request_options=request_options,
        )

    async def titlecapitalization(
        self,
        body: V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TitlecapitalizationResponse, TitlecapitalizationErrorBody]:
        """Convert text to title case

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/titlecapitalization"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TitlecapitalizationRequest | V1TitlecapitalizationRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TitlecapitalizationResponse],
            error_mapper=titlecapitalization_error_mapper,
            request_options=request_options,
        )

    async def translator(
        self,
        body: V1TranslatorRequest | V1TranslatorRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TranslatorResponse, TranslatorErrorBody]:
        """Translate text from one language to another

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/translator"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TranslatorRequest | V1TranslatorRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TranslatorResponse],
            error_mapper=translator_error_mapper,
            request_options=request_options,
        )

    async def vowelcounter(
        self,
        body: V1VowelcounterRequest | V1VowelcounterRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1VowelcounterResponse, VowelcounterErrorBody]:
        """Count vowels and consonants in text with detailed breakdown

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/vowelcounter"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1VowelcounterRequest | V1VowelcounterRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1VowelcounterResponse],
            error_mapper=vowelcounter_error_mapper,
            request_options=request_options,
        )

    async def websitereadability(
        self,
        body: V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WebsitereadabilityResponse, WebsitereadabilityErrorBody]:
        """Analyze the readability of a web page

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/websitereadability"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebsitereadabilityRequest | V1WebsitereadabilityRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WebsitereadabilityResponse],
            error_mapper=websitereadability_error_mapper,
            request_options=request_options,
        )

    async def wordopposite(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordoppositeResponse, WordoppositeErrorBody]:
        """Word Opposites is a simple tool for getting the opposites of a word. It returns a list of opposites for the
        given word.

        Args:
            word: The word to get the opposites for
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordopposite"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordoppositeResponse],
            error_mapper=wordopposite_error_mapper,
            request_options=request_options,
        )

    async def wordpronunciation(
        self, word: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordpronunciationResponse, WordpronunciationErrorBody]:
        """Get the pronunciation of a word

        Args:
            word: The word to get the pronunciation of
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordpronunciation"),
            query_params=[param[str]("word", word)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordpronunciationResponse],
            error_mapper=wordpronunciation_error_mapper,
            request_options=request_options,
        )

    async def wordrhymes(
        self, word: str, *, limit: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WordrhymesResponse, WordrhymesErrorBody]:
        """Get a list of words that rhyme with the specified word

        Args:
            word: The word for which you want to get rhyming words
            limit: Limit the number of word rhymes returned
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordrhymes"),
            query_params=[param[str]("word", word), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordrhymesResponse],
            error_mapper=wordrhymes_error_mapper,
            request_options=request_options,
        )
