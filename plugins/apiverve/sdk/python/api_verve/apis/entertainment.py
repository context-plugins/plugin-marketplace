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
from ..errors.advice_error import AdviceErrorBody, advice_error_mapper
from ..errors.bucketlist_error import BucketlistErrorBody, bucketlist_error_mapper
from ..errors.charades_error import CharadesErrorBody, charades_error_mapper
from ..errors.chessmovevalidator_error import ChessmovevalidatorErrorBody, chessmovevalidator_error_mapper
from ..errors.chucknorris_error import ChucknorrisErrorBody, chucknorris_error_mapper
from ..errors.compliments_error import ComplimentsErrorBody, compliments_error_mapper
from ..errors.dadjokes_error import DadjokesErrorBody, dadjokes_error_mapper
from ..errors.dndgenerator_error import DndgeneratorErrorBody, dndgenerator_error_mapper
from ..errors.fortuneteller_error import FortunetellerErrorBody, fortuneteller_error_mapper
from ..errors.historicalevents_error import HistoricaleventsErrorBody, historicalevents_error_mapper
from ..errors.lovecalculator_error import LovecalculatorErrorBody, lovecalculator_error_mapper
from ..errors.magic8_ball_error import Magic8BallErrorBody, magic8_ball_error_mapper
from ..errors.musicnotegenerator_error import MusicnotegeneratorErrorBody, musicnotegenerator_error_mapper
from ..errors.neverhaveiever_error import NeverhaveieverErrorBody, neverhaveiever_error_mapper
from ..errors.pictionary_error import PictionaryErrorBody, pictionary_error_mapper
from ..errors.randomfacts_error import RandomfactsErrorBody, randomfacts_error_mapper
from ..errors.randomjoke_error import RandomjokeErrorBody, randomjoke_error_mapper
from ..errors.randompun_error import RandompunErrorBody, randompun_error_mapper
from ..errors.randomquote_error import RandomquoteErrorBody, randomquote_error_mapper
from ..errors.scrabblescorer_error import ScrabblescorerErrorBody, scrabblescorer_error_mapper
from ..errors.sudoku_error import SudokuErrorBody, sudoku_error_mapper
from ..errors.trivia_error import TriviaErrorBody, trivia_error_mapper
from ..errors.truthordare_error import TruthordareErrorBody, truthordare_error_mapper
from ..errors.wordlehelper_error import WordlehelperErrorBody, wordlehelper_error_mapper
from ..models.v1_advice_response import V1AdviceResponse
from ..models.v1_bucketlist_response import V1BucketlistResponse
from ..models.v1_charades_response import V1CharadesResponse
from ..models.v1_chessmovevalidator_response import V1ChessmovevalidatorResponse
from ..models.v1_chucknorris_response import V1ChucknorrisResponse
from ..models.v1_compliments_response import V1ComplimentsResponse
from ..models.v1_dadjokes_response import V1DadjokesResponse
from ..models.v1_dndgenerator_response import V1DndgeneratorResponse
from ..models.v1_fortuneteller_response import V1FortunetellerResponse
from ..models.v1_historicalevents_response import V1HistoricaleventsResponse
from ..models.v1_lovecalculator_response import V1LovecalculatorResponse
from ..models.v1_magic8_ball_response import V1Magic8BallResponse
from ..models.v1_musicnotegenerator_response import V1MusicnotegeneratorResponse
from ..models.v1_neverhaveiever_response import V1NeverhaveieverResponse
from ..models.v1_pictionary_response import V1PictionaryResponse
from ..models.v1_randomfacts_response import V1RandomfactsResponse
from ..models.v1_randomjoke_response import V1RandomjokeResponse
from ..models.v1_randompun_response import V1RandompunResponse
from ..models.v1_randomquote_response import V1RandomquoteResponse
from ..models.v1_scrabblescorer_response import V1ScrabblescorerResponse
from ..models.v1_sudoku_response import V1SudokuResponse
from ..models.v1_trivia_response import V1TriviaResponse
from ..models.v1_truthordare_response import V1TruthordareResponse
from ..models.v1_wordlehelper_response import V1WordlehelperResponse
from ..server.server import Server


class Entertainment:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntertainmentWithRawResponse(client, server, auth)

    def advice(self, *, request_options: RequestOptionsOrDict | None = None) -> V1AdviceResponse:
        """Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of
        advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.advice(request_options=request_options))

    def bucketlist(self, *, request_options: RequestOptionsOrDict | None = None) -> V1BucketlistResponse:
        """Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.bucketlist(request_options=request_options))

    def charades(
        self, *, category: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CharadesResponse:
        """Generate random charades word from category

        Args:
            category: Category: all, movies, books, songs, actions, animals, objects
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.charades(category=category, request_options=request_options))

    def chessmovevalidator(
        self, move: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ChessmovevalidatorResponse:
        """Validate algebraic chess notation

        Args:
            move: Chess move in algebraic notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.chessmovevalidator(move, request_options=request_options))

    def chucknorris(self, *, request_options: RequestOptionsOrDict | None = None) -> V1ChucknorrisResponse:
        """Get a random Chuck Norris joke

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.chucknorris(request_options=request_options))

    def compliments(
        self, *, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1ComplimentsResponse:
        """Generate a unique compliment

        Args:
            adult: Include flirty/romantic compliments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.compliments(adult=adult, request_options=request_options))

    def dadjokes(self, *, request_options: RequestOptionsOrDict | None = None) -> V1DadjokesResponse:
        """Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dadjokes(request_options=request_options))

    def dndgenerator(
        self, *, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1DndgeneratorResponse:
        """Generate random D&D content by type

        Args:
            type_: Content type to generate
            count: Number of items to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.dndgenerator(type_=type_, count=count, request_options=request_options))

    def fortuneteller(
        self,
        *,
        category: str | None = None,
        question: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1FortunetellerResponse:
        """Generate personalized AI fortune with insights and lucky elements

        Args:
            category: Fortune category
            question: Optional question for personalized fortune (max 500 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.fortuneteller(category=category, question=question, request_options=request_options)
        )

    def historicalevents(
        self, text: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1HistoricaleventsResponse:
        """Get a list of historical events that match a specific keyword

        Args:
            text: The keyword for which you want to get the historical events (e.g., moon landing)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.historicalevents(text, request_options=request_options))

    def lovecalculator(
        self, name1: str, name2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1LovecalculatorResponse:
        """Calculate the love compatibility between two names

        Args:
            name1: The first name to calculate love compatibility
            name2: The second name to calculate love compatibility
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.lovecalculator(name1, name2, request_options=request_options))

    def magic8ball(
        self, *, question: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1Magic8BallResponse:
        """Get a random Magic 8-Ball prediction

        Args:
            question: Your question for the Magic 8-Ball (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.magic8ball(question=question, request_options=request_options))

    def musicnotegenerator(
        self,
        note: str,
        *,
        octave: int | None = None,
        duration: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MusicnotegeneratorResponse:
        """Generate audio file for musical note

        Args:
            note: Musical note (A-G with optional # or b)
            octave: Octave number
            duration: Duration in seconds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.musicnotegenerator(
                note, octave=octave, duration=duration, request_options=request_options
            ),
        )

    def neverhaveiever(
        self, *, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1NeverhaveieverResponse:
        """Generate a Never Have I Ever statement

        Args:
            adult: Include adult/relationship-focused statements
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.neverhaveiever(adult=adult, request_options=request_options))

    def pictionary(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1PictionaryResponse:
        """Generate pictionary words by difficulty level

        Args:
            difficulty: Difficulty level
            count: Number of words to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.pictionary(difficulty=difficulty, count=count, request_options=request_options)
        )

    def randomfacts(self, *, request_options: RequestOptionsOrDict | None = None) -> V1RandomfactsResponse:
        """Get a random fact

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.randomfacts(request_options=request_options))

    def randomjoke(self, *, request_options: RequestOptionsOrDict | None = None) -> V1RandomjokeResponse:
        """Get a random joke from a collection of jokes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.randomjoke(request_options=request_options))

    def randompun(self, *, request_options: RequestOptionsOrDict | None = None) -> V1RandompunResponse:
        """Get a random pun from a collection of puns

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.randompun(request_options=request_options))

    def randomquote(self, *, request_options: RequestOptionsOrDict | None = None) -> V1RandomquoteResponse:
        """Get a random quote from a collection of quotes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.randomquote(request_options=request_options))

    def scrabblescorer(
        self, word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1ScrabblescorerResponse:
        """Calculate Scrabble points for a word

        Args:
            word: The word to score
            language: Scrabble language variant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.scrabblescorer(word, language=language, request_options=request_options))

    def sudoku(
        self, *, difficulty: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1SudokuResponse:
        """Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

        Args:
            difficulty: The difficulty level of the Sudoku puzzle to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sudoku(difficulty=difficulty, request_options=request_options))

    def trivia(
        self, *, category: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1TriviaResponse:
        """Get a random trivia question

        Args:
            category: The category of the trivia question
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.trivia(category=category, request_options=request_options))

    def truthordare(
        self,
        *,
        type_: str | None = None,
        adult: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TruthordareResponse:
        """Generate a truth or dare prompt

        Args:
            type_: Prompt type: truth, dare, or random
            adult: Include adult/spicy prompts
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.truthordare(type_=type_, adult=adult, request_options=request_options))

    def wordlehelper(
        self,
        *,
        green: str | None = None,
        yellow: str | None = None,
        gray: str | None = None,
        pattern: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WordlehelperResponse:
        """Find possible Wordle solutions based on clues

        Args:
            green: Correct letters with positions (e.g., A1 means A at position 1)
            yellow: Letters in word but wrong position (e.g., R2 means R not at position 2)
            gray: Letters not in the word
            pattern: Pattern with known letters (use _ for unknown)
            limit: Maximum number of suggestions
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.wordlehelper(
                green=green, yellow=yellow, gray=gray, pattern=pattern, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EntertainmentWithRawResponse:
        return self._with_raw_response


class AsyncEntertainment:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntertainmentWithRawResponse(client, server, auth)

    async def advice(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1AdviceResponse:
        """Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of
        advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.advice(request_options=request_options))

    async def bucketlist(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1BucketlistResponse:
        """Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.bucketlist(request_options=request_options))

    async def charades(
        self, *, category: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CharadesResponse:
        """Generate random charades word from category

        Args:
            category: Category: all, movies, books, songs, actions, animals, objects
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.charades(category=category, request_options=request_options))

    async def chessmovevalidator(
        self, move: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ChessmovevalidatorResponse:
        """Validate algebraic chess notation

        Args:
            move: Chess move in algebraic notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.chessmovevalidator(move, request_options=request_options))

    async def chucknorris(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1ChucknorrisResponse:
        """Get a random Chuck Norris joke

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.chucknorris(request_options=request_options))

    async def compliments(
        self, *, adult: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ComplimentsResponse:
        """Generate a unique compliment

        Args:
            adult: Include flirty/romantic compliments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.compliments(adult=adult, request_options=request_options))

    async def dadjokes(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1DadjokesResponse:
        """Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.dadjokes(request_options=request_options))

    async def dndgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DndgeneratorResponse:
        """Generate random D&D content by type

        Args:
            type_: Content type to generate
            count: Number of items to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.dndgenerator(type_=type_, count=count, request_options=request_options)
        )

    async def fortuneteller(
        self,
        *,
        category: str | None = None,
        question: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1FortunetellerResponse:
        """Generate personalized AI fortune with insights and lucky elements

        Args:
            category: Fortune category
            question: Optional question for personalized fortune (max 500 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.fortuneteller(
                category=category, question=question, request_options=request_options
            ),
        )

    async def historicalevents(
        self, text: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1HistoricaleventsResponse:
        """Get a list of historical events that match a specific keyword

        Args:
            text: The keyword for which you want to get the historical events (e.g., moon landing)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.historicalevents(text, request_options=request_options))

    async def lovecalculator(
        self, name1: str, name2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1LovecalculatorResponse:
        """Calculate the love compatibility between two names

        Args:
            name1: The first name to calculate love compatibility
            name2: The second name to calculate love compatibility
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.lovecalculator(name1, name2, request_options=request_options))

    async def magic8ball(
        self, *, question: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1Magic8BallResponse:
        """Get a random Magic 8-Ball prediction

        Args:
            question: Your question for the Magic 8-Ball (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.magic8ball(question=question, request_options=request_options))

    async def musicnotegenerator(
        self,
        note: str,
        *,
        octave: int | None = None,
        duration: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MusicnotegeneratorResponse:
        """Generate audio file for musical note

        Args:
            note: Musical note (A-G with optional # or b)
            octave: Octave number
            duration: Duration in seconds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.musicnotegenerator(
                note, octave=octave, duration=duration, request_options=request_options
            ),
        )

    async def neverhaveiever(
        self, *, adult: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1NeverhaveieverResponse:
        """Generate a Never Have I Ever statement

        Args:
            adult: Include adult/relationship-focused statements
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.neverhaveiever(adult=adult, request_options=request_options))

    async def pictionary(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1PictionaryResponse:
        """Generate pictionary words by difficulty level

        Args:
            difficulty: Difficulty level
            count: Number of words to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.pictionary(
                difficulty=difficulty, count=count, request_options=request_options
            ),
        )

    async def randomfacts(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RandomfactsResponse:
        """Get a random fact

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.randomfacts(request_options=request_options))

    async def randomjoke(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RandomjokeResponse:
        """Get a random joke from a collection of jokes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.randomjoke(request_options=request_options))

    async def randompun(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RandompunResponse:
        """Get a random pun from a collection of puns

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.randompun(request_options=request_options))

    async def randomquote(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1RandomquoteResponse:
        """Get a random quote from a collection of quotes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.randomquote(request_options=request_options))

    async def scrabblescorer(
        self, word: str, *, language: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ScrabblescorerResponse:
        """Calculate Scrabble points for a word

        Args:
            word: The word to score
            language: Scrabble language variant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.scrabblescorer(word, language=language, request_options=request_options)
        )

    async def sudoku(
        self, *, difficulty: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SudokuResponse:
        """Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

        Args:
            difficulty: The difficulty level of the Sudoku puzzle to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sudoku(difficulty=difficulty, request_options=request_options))

    async def trivia(
        self, *, category: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1TriviaResponse:
        """Get a random trivia question

        Args:
            category: The category of the trivia question
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.trivia(category=category, request_options=request_options))

    async def truthordare(
        self,
        *,
        type_: str | None = None,
        adult: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TruthordareResponse:
        """Generate a truth or dare prompt

        Args:
            type_: Prompt type: truth, dare, or random
            adult: Include adult/spicy prompts
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.truthordare(type_=type_, adult=adult, request_options=request_options)
        )

    async def wordlehelper(
        self,
        *,
        green: str | None = None,
        yellow: str | None = None,
        gray: str | None = None,
        pattern: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WordlehelperResponse:
        """Find possible Wordle solutions based on clues

        Args:
            green: Correct letters with positions (e.g., A1 means A at position 1)
            yellow: Letters in word but wrong position (e.g., R2 means R not at position 2)
            gray: Letters not in the word
            pattern: Pattern with known letters (use _ for unknown)
            limit: Maximum number of suggestions
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.wordlehelper(
                green=green, yellow=yellow, gray=gray, pattern=pattern, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEntertainmentWithRawResponse:
        return self._with_raw_response


class EntertainmentWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def advice(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AdviceResponse, AdviceErrorBody]:
        """Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of
        advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/advice"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AdviceResponse],
            error_mapper=advice_error_mapper,
            request_options=request_options,
        )

    def bucketlist(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1BucketlistResponse, BucketlistErrorBody]:
        """Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bucketlist"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1BucketlistResponse],
            error_mapper=bucketlist_error_mapper,
            request_options=request_options,
        )

    def charades(
        self, *, category: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CharadesResponse, CharadesErrorBody]:
        """Generate random charades word from category

        Args:
            category: Category: all, movies, books, songs, actions, animals, objects
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/charades"),
            query_params=[param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CharadesResponse],
            error_mapper=charades_error_mapper,
            request_options=request_options,
        )

    def chessmovevalidator(
        self, move: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChessmovevalidatorResponse, ChessmovevalidatorErrorBody]:
        """Validate algebraic chess notation

        Args:
            move: Chess move in algebraic notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chessmovevalidator"),
            query_params=[param[str]("move", move)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ChessmovevalidatorResponse],
            error_mapper=chessmovevalidator_error_mapper,
            request_options=request_options,
        )

    def chucknorris(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChucknorrisResponse, ChucknorrisErrorBody]:
        """Get a random Chuck Norris joke

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chucknorris"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ChucknorrisResponse],
            error_mapper=chucknorris_error_mapper,
            request_options=request_options,
        )

    def compliments(
        self, *, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ComplimentsResponse, ComplimentsErrorBody]:
        """Generate a unique compliment

        Args:
            adult: Include flirty/romantic compliments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/compliments"),
            query_params=[param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ComplimentsResponse],
            error_mapper=compliments_error_mapper,
            request_options=request_options,
        )

    def dadjokes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DadjokesResponse, DadjokesErrorBody]:
        """Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dadjokes"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DadjokesResponse],
            error_mapper=dadjokes_error_mapper,
            request_options=request_options,
        )

    def dndgenerator(
        self, *, type_: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1DndgeneratorResponse, DndgeneratorErrorBody]:
        """Generate random D&D content by type

        Args:
            type_: Content type to generate
            count: Number of items to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dndgenerator"),
            query_params=[param[str | None]("type", type_), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DndgeneratorResponse],
            error_mapper=dndgenerator_error_mapper,
            request_options=request_options,
        )

    def fortuneteller(
        self,
        *,
        category: str | None = None,
        question: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FortunetellerResponse, FortunetellerErrorBody]:
        """Generate personalized AI fortune with insights and lucky elements

        Args:
            category: Fortune category
            question: Optional question for personalized fortune (max 500 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fortuneteller"),
            query_params=[param[str | None]("category", category), param[str | None]("question", question)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FortunetellerResponse],
            error_mapper=fortuneteller_error_mapper,
            request_options=request_options,
        )

    def historicalevents(
        self, text: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1HistoricaleventsResponse, HistoricaleventsErrorBody]:
        """Get a list of historical events that match a specific keyword

        Args:
            text: The keyword for which you want to get the historical events (e.g., moon landing)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/historicalevents"),
            query_params=[param[str]("text", text)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HistoricaleventsResponse],
            error_mapper=historicalevents_error_mapper,
            request_options=request_options,
        )

    def lovecalculator(
        self, name1: str, name2: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1LovecalculatorResponse, LovecalculatorErrorBody]:
        """Calculate the love compatibility between two names

        Args:
            name1: The first name to calculate love compatibility
            name2: The second name to calculate love compatibility
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lovecalculator"),
            query_params=[param[str]("name1", name1), param[str]("name2", name2)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LovecalculatorResponse],
            error_mapper=lovecalculator_error_mapper,
            request_options=request_options,
        )

    def magic8ball(
        self, *, question: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1Magic8BallResponse, Magic8BallErrorBody]:
        """Get a random Magic 8-Ball prediction

        Args:
            question: Your question for the Magic 8-Ball (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/magic8ball"),
            query_params=[param[str | None]("question", question)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1Magic8BallResponse],
            error_mapper=magic8_ball_error_mapper,
            request_options=request_options,
        )

    def musicnotegenerator(
        self,
        note: str,
        *,
        octave: int | None = None,
        duration: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MusicnotegeneratorResponse, MusicnotegeneratorErrorBody]:
        """Generate audio file for musical note

        Args:
            note: Musical note (A-G with optional # or b)
            octave: Octave number
            duration: Duration in seconds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/musicnotegenerator"),
            query_params=[
                param[str]("note", note), param[int | None]("octave", octave), param[float | None]("duration", duration)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MusicnotegeneratorResponse],
            error_mapper=musicnotegenerator_error_mapper,
            request_options=request_options,
        )

    def neverhaveiever(
        self, *, adult: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1NeverhaveieverResponse, NeverhaveieverErrorBody]:
        """Generate a Never Have I Ever statement

        Args:
            adult: Include adult/relationship-focused statements
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/neverhaveiever"),
            query_params=[param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1NeverhaveieverResponse],
            error_mapper=neverhaveiever_error_mapper,
            request_options=request_options,
        )

    def pictionary(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PictionaryResponse, PictionaryErrorBody]:
        """Generate pictionary words by difficulty level

        Args:
            difficulty: Difficulty level
            count: Number of words to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pictionary"),
            query_params=[param[str | None]("difficulty", difficulty), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1PictionaryResponse],
            error_mapper=pictionary_error_mapper,
            request_options=request_options,
        )

    def randomfacts(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomfactsResponse, RandomfactsErrorBody]:
        """Get a random fact

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomfacts"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomfactsResponse],
            error_mapper=randomfacts_error_mapper,
            request_options=request_options,
        )

    def randomjoke(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomjokeResponse, RandomjokeErrorBody]:
        """Get a random joke from a collection of jokes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomjoke"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomjokeResponse],
            error_mapper=randomjoke_error_mapper,
            request_options=request_options,
        )

    def randompun(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandompunResponse, RandompunErrorBody]:
        """Get a random pun from a collection of puns

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randompun"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandompunResponse],
            error_mapper=randompun_error_mapper,
            request_options=request_options,
        )

    def randomquote(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomquoteResponse, RandomquoteErrorBody]:
        """Get a random quote from a collection of quotes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomquote"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RandomquoteResponse],
            error_mapper=randomquote_error_mapper,
            request_options=request_options,
        )

    def scrabblescorer(
        self, word: str, *, language: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ScrabblescorerResponse, ScrabblescorerErrorBody]:
        """Calculate Scrabble points for a word

        Args:
            word: The word to score
            language: Scrabble language variant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrabblescorer"),
            query_params=[param[str]("word", word), param[str | None]("language", language)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1ScrabblescorerResponse],
            error_mapper=scrabblescorer_error_mapper,
            request_options=request_options,
        )

    def sudoku(
        self, *, difficulty: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SudokuResponse, SudokuErrorBody]:
        """Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

        Args:
            difficulty: The difficulty level of the Sudoku puzzle to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sudoku"),
            query_params=[param[str | None]("difficulty", difficulty)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SudokuResponse],
            error_mapper=sudoku_error_mapper,
            request_options=request_options,
        )

    def trivia(
        self, *, category: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1TriviaResponse, TriviaErrorBody]:
        """Get a random trivia question

        Args:
            category: The category of the trivia question
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/trivia"),
            query_params=[param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TriviaResponse],
            error_mapper=trivia_error_mapper,
            request_options=request_options,
        )

    def truthordare(
        self,
        *,
        type_: str | None = None,
        adult: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TruthordareResponse, TruthordareErrorBody]:
        """Generate a truth or dare prompt

        Args:
            type_: Prompt type: truth, dare, or random
            adult: Include adult/spicy prompts
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/truthordare"),
            query_params=[param[str | None]("type", type_), param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1TruthordareResponse],
            error_mapper=truthordare_error_mapper,
            request_options=request_options,
        )

    def wordlehelper(
        self,
        *,
        green: str | None = None,
        yellow: str | None = None,
        gray: str | None = None,
        pattern: str | None = None,
        limit: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordlehelperResponse, WordlehelperErrorBody]:
        """Find possible Wordle solutions based on clues

        Args:
            green: Correct letters with positions (e.g., A1 means A at position 1)
            yellow: Letters in word but wrong position (e.g., R2 means R not at position 2)
            gray: Letters not in the word
            pattern: Pattern with known letters (use _ for unknown)
            limit: Maximum number of suggestions
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordlehelper"),
            query_params=[
                param[str | None]("green", green),
                param[str | None]("yellow", yellow),
                param[str | None]("gray", gray),
                param[str | None]("pattern", pattern),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordlehelperResponse],
            error_mapper=wordlehelper_error_mapper,
            request_options=request_options,
        )


class AsyncEntertainmentWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def advice(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AdviceResponse, AdviceErrorBody]:
        """Advice Generator is a simple tool for generating random pieces of advice. It returns a random piece of
        advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/advice"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AdviceResponse],
            error_mapper=advice_error_mapper,
            request_options=request_options,
        )

    async def bucketlist(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1BucketlistResponse, BucketlistErrorBody]:
        """Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket list item

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/bucketlist"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1BucketlistResponse],
            error_mapper=bucketlist_error_mapper,
            request_options=request_options,
        )

    async def charades(
        self, *, category: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CharadesResponse, CharadesErrorBody]:
        """Generate random charades word from category

        Args:
            category: Category: all, movies, books, songs, actions, animals, objects
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/charades"),
            query_params=[param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CharadesResponse],
            error_mapper=charades_error_mapper,
            request_options=request_options,
        )

    async def chessmovevalidator(
        self, move: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChessmovevalidatorResponse, ChessmovevalidatorErrorBody]:
        """Validate algebraic chess notation

        Args:
            move: Chess move in algebraic notation
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chessmovevalidator"),
            query_params=[param[str]("move", move)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ChessmovevalidatorResponse],
            error_mapper=chessmovevalidator_error_mapper,
            request_options=request_options,
        )

    async def chucknorris(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ChucknorrisResponse, ChucknorrisErrorBody]:
        """Get a random Chuck Norris joke

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/chucknorris"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ChucknorrisResponse],
            error_mapper=chucknorris_error_mapper,
            request_options=request_options,
        )

    async def compliments(
        self, *, adult: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ComplimentsResponse, ComplimentsErrorBody]:
        """Generate a unique compliment

        Args:
            adult: Include flirty/romantic compliments
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/compliments"),
            query_params=[param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ComplimentsResponse],
            error_mapper=compliments_error_mapper,
            request_options=request_options,
        )

    async def dadjokes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1DadjokesResponse, DadjokesErrorBody]:
        """Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dadjokes"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DadjokesResponse],
            error_mapper=dadjokes_error_mapper,
            request_options=request_options,
        )

    async def dndgenerator(
        self,
        *,
        type_: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DndgeneratorResponse, DndgeneratorErrorBody]:
        """Generate random D&D content by type

        Args:
            type_: Content type to generate
            count: Number of items to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/dndgenerator"),
            query_params=[param[str | None]("type", type_), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DndgeneratorResponse],
            error_mapper=dndgenerator_error_mapper,
            request_options=request_options,
        )

    async def fortuneteller(
        self,
        *,
        category: str | None = None,
        question: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FortunetellerResponse, FortunetellerErrorBody]:
        """Generate personalized AI fortune with insights and lucky elements

        Args:
            category: Fortune category
            question: Optional question for personalized fortune (max 500 characters)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fortuneteller"),
            query_params=[param[str | None]("category", category), param[str | None]("question", question)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FortunetellerResponse],
            error_mapper=fortuneteller_error_mapper,
            request_options=request_options,
        )

    async def historicalevents(
        self, text: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1HistoricaleventsResponse, HistoricaleventsErrorBody]:
        """Get a list of historical events that match a specific keyword

        Args:
            text: The keyword for which you want to get the historical events (e.g., moon landing)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/historicalevents"),
            query_params=[param[str]("text", text)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HistoricaleventsResponse],
            error_mapper=historicalevents_error_mapper,
            request_options=request_options,
        )

    async def lovecalculator(
        self, name1: str, name2: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1LovecalculatorResponse, LovecalculatorErrorBody]:
        """Calculate the love compatibility between two names

        Args:
            name1: The first name to calculate love compatibility
            name2: The second name to calculate love compatibility
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lovecalculator"),
            query_params=[param[str]("name1", name1), param[str]("name2", name2)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LovecalculatorResponse],
            error_mapper=lovecalculator_error_mapper,
            request_options=request_options,
        )

    async def magic8ball(
        self, *, question: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1Magic8BallResponse, Magic8BallErrorBody]:
        """Get a random Magic 8-Ball prediction

        Args:
            question: Your question for the Magic 8-Ball (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/magic8ball"),
            query_params=[param[str | None]("question", question)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1Magic8BallResponse],
            error_mapper=magic8_ball_error_mapper,
            request_options=request_options,
        )

    async def musicnotegenerator(
        self,
        note: str,
        *,
        octave: int | None = None,
        duration: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MusicnotegeneratorResponse, MusicnotegeneratorErrorBody]:
        """Generate audio file for musical note

        Args:
            note: Musical note (A-G with optional # or b)
            octave: Octave number
            duration: Duration in seconds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/musicnotegenerator"),
            query_params=[
                param[str]("note", note), param[int | None]("octave", octave), param[float | None]("duration", duration)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MusicnotegeneratorResponse],
            error_mapper=musicnotegenerator_error_mapper,
            request_options=request_options,
        )

    async def neverhaveiever(
        self, *, adult: bool | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1NeverhaveieverResponse, NeverhaveieverErrorBody]:
        """Generate a Never Have I Ever statement

        Args:
            adult: Include adult/relationship-focused statements
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/neverhaveiever"),
            query_params=[param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1NeverhaveieverResponse],
            error_mapper=neverhaveiever_error_mapper,
            request_options=request_options,
        )

    async def pictionary(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1PictionaryResponse, PictionaryErrorBody]:
        """Generate pictionary words by difficulty level

        Args:
            difficulty: Difficulty level
            count: Number of words to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/pictionary"),
            query_params=[param[str | None]("difficulty", difficulty), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1PictionaryResponse],
            error_mapper=pictionary_error_mapper,
            request_options=request_options,
        )

    async def randomfacts(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomfactsResponse, RandomfactsErrorBody]:
        """Get a random fact

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomfacts"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomfactsResponse],
            error_mapper=randomfacts_error_mapper,
            request_options=request_options,
        )

    async def randomjoke(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomjokeResponse, RandomjokeErrorBody]:
        """Get a random joke from a collection of jokes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomjoke"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomjokeResponse],
            error_mapper=randomjoke_error_mapper,
            request_options=request_options,
        )

    async def randompun(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandompunResponse, RandompunErrorBody]:
        """Get a random pun from a collection of puns

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randompun"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandompunResponse],
            error_mapper=randompun_error_mapper,
            request_options=request_options,
        )

    async def randomquote(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1RandomquoteResponse, RandomquoteErrorBody]:
        """Get a random quote from a collection of quotes

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/randomquote"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RandomquoteResponse],
            error_mapper=randomquote_error_mapper,
            request_options=request_options,
        )

    async def scrabblescorer(
        self, word: str, *, language: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ScrabblescorerResponse, ScrabblescorerErrorBody]:
        """Calculate Scrabble points for a word

        Args:
            word: The word to score
            language: Scrabble language variant
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/scrabblescorer"),
            query_params=[param[str]("word", word), param[str | None]("language", language)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1ScrabblescorerResponse],
            error_mapper=scrabblescorer_error_mapper,
            request_options=request_options,
        )

    async def sudoku(
        self, *, difficulty: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SudokuResponse, SudokuErrorBody]:
        """Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.

        Args:
            difficulty: The difficulty level of the Sudoku puzzle to generate
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/sudoku"),
            query_params=[param[str | None]("difficulty", difficulty)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SudokuResponse],
            error_mapper=sudoku_error_mapper,
            request_options=request_options,
        )

    async def trivia(
        self, *, category: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1TriviaResponse, TriviaErrorBody]:
        """Get a random trivia question

        Args:
            category: The category of the trivia question
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/trivia"),
            query_params=[param[str | None]("category", category)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TriviaResponse],
            error_mapper=trivia_error_mapper,
            request_options=request_options,
        )

    async def truthordare(
        self,
        *,
        type_: str | None = None,
        adult: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TruthordareResponse, TruthordareErrorBody]:
        """Generate a truth or dare prompt

        Args:
            type_: Prompt type: truth, dare, or random
            adult: Include adult/spicy prompts
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/truthordare"),
            query_params=[param[str | None]("type", type_), param[bool | None]("adult", adult)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1TruthordareResponse],
            error_mapper=truthordare_error_mapper,
            request_options=request_options,
        )

    async def wordlehelper(
        self,
        *,
        green: str | None = None,
        yellow: str | None = None,
        gray: str | None = None,
        pattern: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordlehelperResponse, WordlehelperErrorBody]:
        """Find possible Wordle solutions based on clues

        Args:
            green: Correct letters with positions (e.g., A1 means A at position 1)
            yellow: Letters in word but wrong position (e.g., R2 means R not at position 2)
            gray: Letters not in the word
            pattern: Pattern with known letters (use _ for unknown)
            limit: Maximum number of suggestions
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordlehelper"),
            query_params=[
                param[str | None]("green", green),
                param[str | None]("yellow", yellow),
                param[str | None]("gray", gray),
                param[str | None]("pattern", pattern),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordlehelperResponse],
            error_mapper=wordlehelper_error_mapper,
            request_options=request_options,
        )
