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
from ..errors.acrostic_error import AcrosticErrorBody, acrostic_error_mapper
from ..errors.anagrampuzzle_error import AnagrampuzzleErrorBody, anagrampuzzle_error_mapper
from ..errors.carddeckshuffler_error import CarddeckshufflerErrorBody, carddeckshuffler_error_mapper
from ..errors.coinflipper_error import CoinflipperErrorBody, coinflipper_error_mapper
from ..errors.crossword_error import CrosswordErrorBody, crossword_error_mapper
from ..errors.cryptogram_error import CryptogramErrorBody, cryptogram_error_mapper
from ..errors.diceroller_error import DicerollerErrorBody, diceroller_error_mapper
from ..errors.fillintheblanks_error import FillintheblanksErrorBody, fillintheblanks_error_mapper
from ..errors.fortunecookie_error import FortunecookieErrorBody, fortunecookie_error_mapper
from ..errors.gamecharacter_error import GamecharacterErrorBody, gamecharacter_error_mapper
from ..errors.hangmanword_error import HangmanwordErrorBody, hangmanword_error_mapper
from ..errors.lotterypicker_error import LotterypickerErrorBody, lotterypicker_error_mapper
from ..errors.madlibs_error import MadlibsErrorBody, madlibs_error_mapper
from ..errors.maze_error import MazeErrorBody, maze_error_mapper
from ..errors.rockpaperscissors_error import RockpaperscissorsErrorBody, rockpaperscissors_error_mapper
from ..errors.slotmachine_error import SlotmachineErrorBody, slotmachine_error_mapper
from ..errors.spellingbee_error import SpellingbeeErrorBody, spellingbee_error_mapper
from ..errors.superheroname_error import SuperheronameErrorBody, superheroname_error_mapper
from ..errors.wordladder_error import WordladderErrorBody, wordladder_error_mapper
from ..errors.wordscramble_error import WordscrambleErrorBody, wordscramble_error_mapper
from ..errors.wordsearch_error import WordsearchErrorBody, wordsearch_error_mapper
from ..models.v1_acrostic_response import V1AcrosticResponse
from ..models.v1_anagrampuzzle_response import V1AnagrampuzzleResponse
from ..models.v1_carddeckshuffler_response import V1CarddeckshufflerResponse
from ..models.v1_coinflipper_response import V1CoinflipperResponse
from ..models.v1_crossword_response import V1CrosswordResponse
from ..models.v1_cryptogram_response import V1CryptogramResponse
from ..models.v1_diceroller_response import V1DicerollerResponse
from ..models.v1_fillintheblanks_response import V1FillintheblanksResponse
from ..models.v1_fortunecookie_response import V1FortunecookieResponse
from ..models.v1_gamecharacter_response import V1GamecharacterResponse
from ..models.v1_hangmanword_response import V1HangmanwordResponse
from ..models.v1_lotterypicker_response import V1LotterypickerResponse
from ..models.v1_madlibs_response import V1MadlibsResponse
from ..models.v1_maze_response import V1MazeResponse
from ..models.v1_rockpaperscissors_response import V1RockpaperscissorsResponse
from ..models.v1_slotmachine_response import V1SlotmachineResponse
from ..models.v1_spellingbee_response import V1SpellingbeeResponse
from ..models.v1_superheroname_response import V1SuperheronameResponse
from ..models.v1_wordladder_response import V1WordladderResponse
from ..models.v1_wordscramble_response import V1WordscrambleResponse
from ..models.v1_wordsearch_request import V1WordsearchRequest, V1WordsearchRequestDict
from ..models.v1_wordsearch_response import V1WordsearchResponse
from ..server.server import Server


class Games:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GamesWithRawResponse(client, server, auth)

    def acrostic(
        self,
        word: str,
        *,
        theme: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1AcrosticResponse:
        """Create an acrostic puzzle

        Args:
            word: The keyword to spell out (3-15 letters)
            theme: Theme: random, positive, nature, adventure, friendship, learning
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.acrostic(word, theme=theme, image=image, request_options=request_options))

    def anagrampuzzle(
        self,
        *,
        word: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1AnagrampuzzleResponse:
        """Create anagram puzzles

        Args:
            word: Specific word to create anagram for
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.anagrampuzzle(
                word=word, count=count, difficulty=difficulty, image=image, request_options=request_options
            ),
        )

    def carddeckshuffler(
        self,
        *,
        decks: int | None = None,
        jokers: bool | None = None,
        method: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CarddeckshufflerResponse:
        """Shuffle one or more standard card decks with optional jokers

        Args:
            decks: Number of decks to shuffle
            jokers: Include jokers in the deck
            method: Shuffling method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.carddeckshuffler(
                decks=decks, jokers=jokers, method=method, request_options=request_options
            ),
        )

    def coinflipper(
        self, *, flips: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CoinflipperResponse:
        """Flip one or more coins and get detailed results

        Args:
            flips: Number of coins to flip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.coinflipper(flips=flips, request_options=request_options))

    def crossword(
        self,
        *,
        size: str | None = None,
        theme: str | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CrosswordResponse:
        """Create a crossword puzzle

        Args:
            size: Grid size: small, medium, large
            theme: Theme: random, animals, food, sports, science, geography
            difficulty: Difficulty: easy, medium, hard
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.crossword(
                size=size,
                theme=theme,
                difficulty=difficulty,
                image=image,
                solution_image=solution_image,
                request_options=request_options,
            ),
        )

    def cryptogram(
        self,
        *,
        text: str | None = None,
        random: bool | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CryptogramResponse:
        """Create a cryptogram puzzle

        Args:
            text: Text to encode (max 500 characters)
            random: Use a random famous quote instead of text (a quote is also used when text is omitted)
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.cryptogram(
                text=text, random=random, image=image, solution_image=solution_image, request_options=request_options
            ),
        )

    def diceroller(
        self,
        *,
        dice: str | None = None,
        modifier: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1DicerollerResponse:
        """Roll dice using XdY notation with optional modifier

        Args:
            dice: Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)
            modifier: Modifier to add to the total (can be negative)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.diceroller(dice=dice, modifier=modifier, request_options=request_options))

    def fillintheblanks(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1FillintheblanksResponse:
        """Create fill in the blank puzzles

        Args:
            category: Puzzle category
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.fillintheblanks(
                category=category, count=count, difficulty=difficulty, image=image, request_options=request_options
            ),
        )

    def fortunecookie(self, *, request_options: RequestOptionsOrDict | None = None) -> V1FortunecookieResponse:
        """Generate fortune cookie messages with lucky numbers

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.fortunecookie(request_options=request_options))

    def gamecharacter(
        self, *, race: str | None = None, class_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1GamecharacterResponse:
        """Generate a random RPG character

        Args:
            race: Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin
            class_: Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk,
                Warlock, Necromancer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.gamecharacter(race=race, class_=class_, request_options=request_options))

    def hangmanword(
        self,
        *,
        category: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1HangmanwordResponse:
        """Get random words for hangman

        Args:
            category: Word category
            difficulty: Difficulty level
            count: Number of words
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.hangmanword(
                category=category, difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    def lotterypicker(
        self,
        *,
        game: str | None = None,
        numbers: int | None = None,
        max_: int | None = None,
        bonus: int | None = None,
        tickets: int | None = None,
        bonusmax: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1LotterypickerResponse:
        """Generate random lottery numbers for various games

        Args:
            game: Lottery game preset
            numbers: Number of main numbers to pick (for custom game)
            max_: Maximum number for main numbers (for custom game)
            bonus: Number of bonus numbers (for custom game)
            tickets: Number of tickets to generate
            bonusmax: Highest value a bonus ball can take. Only applies when game is custom; named games use their own
                rules
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.lotterypicker(
                game=game,
                numbers=numbers,
                max_=max_,
                bonus=bonus,
                tickets=tickets,
                bonusmax=bonusmax,
                request_options=request_options,
            ),
        )

    def madlibs(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MadlibsResponse:
        """Get mad libs story templates

        Args:
            category: Story category
            count: Number of stories
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.madlibs(category=category, count=count, request_options=request_options))

    def maze(
        self,
        *,
        width: int | None = None,
        height: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1MazeResponse:
        """Create a maze puzzle

        Args:
            width: Maze width
            height: Maze height
            difficulty: Difficulty level
            image: Set to true to generate a downloadable maze image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.maze(
                width=width,
                height=height,
                difficulty=difficulty,
                image=image,
                solution_image=solution_image,
                request_options=request_options,
            ),
        )

    def rockpaperscissors(
        self,
        *,
        choice: str | None = None,
        rounds: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RockpaperscissorsResponse:
        """Play rounds of Rock Paper Scissors with outcome analysis

        Args:
            choice: Your choice - omit for random
            rounds: Number of rounds to play
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.rockpaperscissors(choice=choice, rounds=rounds, request_options=request_options)
        )

    def slotmachine(
        self,
        *,
        spins: int | None = None,
        reels: int | None = None,
        bet: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SlotmachineResponse:
        """Simulate slot machine spins with configurable reels and bet amounts

        Args:
            spins: Number of spins to simulate
            reels: Number of reels
            bet: Bet amount per spin
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.slotmachine(spins=spins, reels=reels, bet=bet, request_options=request_options)
        )

    def spellingbee(
        self,
        *,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SpellingbeeResponse:
        """Create a spelling bee puzzle

        Args:
            difficulty: Difficulty: easy, medium, hard (affects word count)
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.spellingbee(difficulty=difficulty, image=image, request_options=request_options)
        )

    def superheroname(
        self, *, style: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1SuperheronameResponse:
        """Generate a random superhero name

        Args:
            style: Name style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.superheroname(style=style, request_options=request_options))

    def wordladder(
        self,
        *,
        start: str | None = None,
        end: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WordladderResponse:
        """Create word ladder puzzles

        Args:
            start: Starting word (3-6 letters)
            end: Ending word (same length as start)
            difficulty: Difficulty level
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.wordladder(
                start=start, end=end, difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    def wordscramble(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WordscrambleResponse:
        """Create scrambled word puzzles

        Args:
            difficulty: Difficulty level (affects word length)
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.wordscramble(
                difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    def wordsearch(
        self,
        body: V1WordsearchRequest | V1WordsearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1WordsearchResponse:
        """Create a word search puzzle with custom words

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.wordsearch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> GamesWithRawResponse:
        return self._with_raw_response


class AsyncGames:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGamesWithRawResponse(client, server, auth)

    async def acrostic(
        self,
        word: str,
        *,
        theme: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1AcrosticResponse:
        """Create an acrostic puzzle

        Args:
            word: The keyword to spell out (3-15 letters)
            theme: Theme: random, positive, nature, adventure, friendship, learning
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.acrostic(word, theme=theme, image=image, request_options=request_options)
        )

    async def anagrampuzzle(
        self,
        *,
        word: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1AnagrampuzzleResponse:
        """Create anagram puzzles

        Args:
            word: Specific word to create anagram for
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.anagrampuzzle(
                word=word, count=count, difficulty=difficulty, image=image, request_options=request_options
            ),
        )

    async def carddeckshuffler(
        self,
        *,
        decks: int | None = None,
        jokers: bool | None = None,
        method: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CarddeckshufflerResponse:
        """Shuffle one or more standard card decks with optional jokers

        Args:
            decks: Number of decks to shuffle
            jokers: Include jokers in the deck
            method: Shuffling method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.carddeckshuffler(
                decks=decks, jokers=jokers, method=method, request_options=request_options
            ),
        )

    async def coinflipper(
        self, *, flips: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CoinflipperResponse:
        """Flip one or more coins and get detailed results

        Args:
            flips: Number of coins to flip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.coinflipper(flips=flips, request_options=request_options))

    async def crossword(
        self,
        *,
        size: str | None = None,
        theme: str | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CrosswordResponse:
        """Create a crossword puzzle

        Args:
            size: Grid size: small, medium, large
            theme: Theme: random, animals, food, sports, science, geography
            difficulty: Difficulty: easy, medium, hard
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.crossword(
                size=size,
                theme=theme,
                difficulty=difficulty,
                image=image,
                solution_image=solution_image,
                request_options=request_options,
            ),
        )

    async def cryptogram(
        self,
        *,
        text: str | None = None,
        random: bool | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1CryptogramResponse:
        """Create a cryptogram puzzle

        Args:
            text: Text to encode (max 500 characters)
            random: Use a random famous quote instead of text (a quote is also used when text is omitted)
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cryptogram(
                text=text, random=random, image=image, solution_image=solution_image, request_options=request_options
            ),
        )

    async def diceroller(
        self,
        *,
        dice: str | None = None,
        modifier: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1DicerollerResponse:
        """Roll dice using XdY notation with optional modifier

        Args:
            dice: Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)
            modifier: Modifier to add to the total (can be negative)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.diceroller(dice=dice, modifier=modifier, request_options=request_options)
        )

    async def fillintheblanks(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1FillintheblanksResponse:
        """Create fill in the blank puzzles

        Args:
            category: Puzzle category
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.fillintheblanks(
                category=category, count=count, difficulty=difficulty, image=image, request_options=request_options
            ),
        )

    async def fortunecookie(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1FortunecookieResponse:
        """Generate fortune cookie messages with lucky numbers

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.fortunecookie(request_options=request_options))

    async def gamecharacter(
        self,
        *,
        race: str | None = None,
        class_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1GamecharacterResponse:
        """Generate a random RPG character

        Args:
            race: Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin
            class_: Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk,
                Warlock, Necromancer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.gamecharacter(race=race, class_=class_, request_options=request_options)
        )

    async def hangmanword(
        self,
        *,
        category: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1HangmanwordResponse:
        """Get random words for hangman

        Args:
            category: Word category
            difficulty: Difficulty level
            count: Number of words
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.hangmanword(
                category=category, difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    async def lotterypicker(
        self,
        *,
        game: str | None = None,
        numbers: int | None = None,
        max_: int | None = None,
        bonus: int | None = None,
        tickets: int | None = None,
        bonusmax: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1LotterypickerResponse:
        """Generate random lottery numbers for various games

        Args:
            game: Lottery game preset
            numbers: Number of main numbers to pick (for custom game)
            max_: Maximum number for main numbers (for custom game)
            bonus: Number of bonus numbers (for custom game)
            tickets: Number of tickets to generate
            bonusmax: Highest value a bonus ball can take. Only applies when game is custom; named games use their own
                rules
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.lotterypicker(
                game=game,
                numbers=numbers,
                max_=max_,
                bonus=bonus,
                tickets=tickets,
                bonusmax=bonusmax,
                request_options=request_options,
            ),
        )

    async def madlibs(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MadlibsResponse:
        """Get mad libs story templates

        Args:
            category: Story category
            count: Number of stories
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.madlibs(category=category, count=count, request_options=request_options)
        )

    async def maze(
        self,
        *,
        width: int | None = None,
        height: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1MazeResponse:
        """Create a maze puzzle

        Args:
            width: Maze width
            height: Maze height
            difficulty: Difficulty level
            image: Set to true to generate a downloadable maze image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.maze(
                width=width,
                height=height,
                difficulty=difficulty,
                image=image,
                solution_image=solution_image,
                request_options=request_options,
            ),
        )

    async def rockpaperscissors(
        self,
        *,
        choice: str | None = None,
        rounds: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RockpaperscissorsResponse:
        """Play rounds of Rock Paper Scissors with outcome analysis

        Args:
            choice: Your choice - omit for random
            rounds: Number of rounds to play
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.rockpaperscissors(
                choice=choice, rounds=rounds, request_options=request_options
            ),
        )

    async def slotmachine(
        self,
        *,
        spins: int | None = None,
        reels: int | None = None,
        bet: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SlotmachineResponse:
        """Simulate slot machine spins with configurable reels and bet amounts

        Args:
            spins: Number of spins to simulate
            reels: Number of reels
            bet: Bet amount per spin
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.slotmachine(
                spins=spins, reels=reels, bet=bet, request_options=request_options
            ),
        )

    async def spellingbee(
        self,
        *,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1SpellingbeeResponse:
        """Create a spelling bee puzzle

        Args:
            difficulty: Difficulty: easy, medium, hard (affects word count)
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.spellingbee(
                difficulty=difficulty, image=image, request_options=request_options
            ),
        )

    async def superheroname(
        self, *, style: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1SuperheronameResponse:
        """Generate a random superhero name

        Args:
            style: Name style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.superheroname(style=style, request_options=request_options))

    async def wordladder(
        self,
        *,
        start: str | None = None,
        end: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WordladderResponse:
        """Create word ladder puzzles

        Args:
            start: Starting word (3-6 letters)
            end: Ending word (same length as start)
            difficulty: Difficulty level
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.wordladder(
                start=start, end=end, difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    async def wordscramble(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WordscrambleResponse:
        """Create scrambled word puzzles

        Args:
            difficulty: Difficulty level (affects word length)
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.wordscramble(
                difficulty=difficulty, count=count, image=image, request_options=request_options
            ),
        )

    async def wordsearch(
        self,
        body: V1WordsearchRequest | V1WordsearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1WordsearchResponse:
        """Create a word search puzzle with custom words

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Your request was not authorized, or your API Key was invalid Requested resource was not found A
                server error has occurred, try again later ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.wordsearch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGamesWithRawResponse:
        return self._with_raw_response


class GamesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def acrostic(
        self,
        word: str,
        *,
        theme: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AcrosticResponse, AcrosticErrorBody]:
        """Create an acrostic puzzle

        Args:
            word: The keyword to spell out (3-15 letters)
            theme: Theme: random, positive, nature, adventure, friendship, learning
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acrostic"),
            query_params=[
                param[str]("word", word), param[str | None]("theme", theme), param[bool | None]("image", image)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AcrosticResponse],
            error_mapper=acrostic_error_mapper,
            request_options=request_options,
        )

    def anagrampuzzle(
        self,
        *,
        word: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AnagrampuzzleResponse, AnagrampuzzleErrorBody]:
        """Create anagram puzzles

        Args:
            word: Specific word to create anagram for
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anagrampuzzle"),
            query_params=[
                param[str | None]("word", word),
                param[int | None]("count", count),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1AnagrampuzzleResponse],
            error_mapper=anagrampuzzle_error_mapper,
            request_options=request_options,
        )

    def carddeckshuffler(
        self,
        *,
        decks: int | None = None,
        jokers: bool | None = None,
        method: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CarddeckshufflerResponse, CarddeckshufflerErrorBody]:
        """Shuffle one or more standard card decks with optional jokers

        Args:
            decks: Number of decks to shuffle
            jokers: Include jokers in the deck
            method: Shuffling method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/carddeckshuffler"),
            query_params=[
                param[int | None]("decks", decks),
                param[bool | None]("jokers", jokers),
                param[str | None]("method", method),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CarddeckshufflerResponse],
            error_mapper=carddeckshuffler_error_mapper,
            request_options=request_options,
        )

    def coinflipper(
        self, *, flips: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CoinflipperResponse, CoinflipperErrorBody]:
        """Flip one or more coins and get detailed results

        Args:
            flips: Number of coins to flip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/coinflipper"),
            query_params=[param[int | None]("flips", flips)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CoinflipperResponse],
            error_mapper=coinflipper_error_mapper,
            request_options=request_options,
        )

    def crossword(
        self,
        *,
        size: str | None = None,
        theme: str | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CrosswordResponse, CrosswordErrorBody]:
        """Create a crossword puzzle

        Args:
            size: Grid size: small, medium, large
            theme: Theme: random, animals, food, sports, science, geography
            difficulty: Difficulty: easy, medium, hard
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/crossword"),
            query_params=[
                param[str | None]("size", size),
                param[str | None]("theme", theme),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CrosswordResponse],
            error_mapper=crossword_error_mapper,
            request_options=request_options,
        )

    def cryptogram(
        self,
        *,
        text: str | None = None,
        random: bool | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CryptogramResponse, CryptogramErrorBody]:
        """Create a cryptogram puzzle

        Args:
            text: Text to encode (max 500 characters)
            random: Use a random famous quote instead of text (a quote is also used when text is omitted)
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cryptogram"),
            query_params=[
                param[str | None]("text", text),
                param[bool | None]("random", random),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1CryptogramResponse],
            error_mapper=cryptogram_error_mapper,
            request_options=request_options,
        )

    def diceroller(
        self,
        *,
        dice: str | None = None,
        modifier: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DicerollerResponse, DicerollerErrorBody]:
        """Roll dice using XdY notation with optional modifier

        Args:
            dice: Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)
            modifier: Modifier to add to the total (can be negative)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/diceroller"),
            query_params=[param[str | None]("dice", dice), param[int | None]("modifier", modifier)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1DicerollerResponse],
            error_mapper=diceroller_error_mapper,
            request_options=request_options,
        )

    def fillintheblanks(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FillintheblanksResponse, FillintheblanksErrorBody]:
        """Create fill in the blank puzzles

        Args:
            category: Puzzle category
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fillintheblanks"),
            query_params=[
                param[str | None]("category", category),
                param[int | None]("count", count),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FillintheblanksResponse],
            error_mapper=fillintheblanks_error_mapper,
            request_options=request_options,
        )

    def fortunecookie(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1FortunecookieResponse, FortunecookieErrorBody]:
        """Generate fortune cookie messages with lucky numbers

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fortunecookie"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1FortunecookieResponse],
            error_mapper=fortunecookie_error_mapper,
            request_options=request_options,
        )

    def gamecharacter(
        self, *, race: str | None = None, class_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1GamecharacterResponse, GamecharacterErrorBody]:
        """Generate a random RPG character

        Args:
            race: Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin
            class_: Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk,
                Warlock, Necromancer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gamecharacter"),
            query_params=[param[str | None]("race", race), param[str | None]("class", class_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1GamecharacterResponse],
            error_mapper=gamecharacter_error_mapper,
            request_options=request_options,
        )

    def hangmanword(
        self,
        *,
        category: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HangmanwordResponse, HangmanwordErrorBody]:
        """Get random words for hangman

        Args:
            category: Word category
            difficulty: Difficulty level
            count: Number of words
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hangmanword"),
            query_params=[
                param[str | None]("category", category),
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1HangmanwordResponse],
            error_mapper=hangmanword_error_mapper,
            request_options=request_options,
        )

    def lotterypicker(
        self,
        *,
        game: str | None = None,
        numbers: int | None = None,
        max_: int | None = None,
        bonus: int | None = None,
        tickets: int | None = None,
        bonusmax: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LotterypickerResponse, LotterypickerErrorBody]:
        """Generate random lottery numbers for various games

        Args:
            game: Lottery game preset
            numbers: Number of main numbers to pick (for custom game)
            max_: Maximum number for main numbers (for custom game)
            bonus: Number of bonus numbers (for custom game)
            tickets: Number of tickets to generate
            bonusmax: Highest value a bonus ball can take. Only applies when game is custom; named games use their own
                rules
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lotterypicker"),
            query_params=[
                param[str | None]("game", game),
                param[int | None]("numbers", numbers),
                param[int | None]("max", max_),
                param[int | None]("bonus", bonus),
                param[int | None]("tickets", tickets),
                param[int | None]("bonusmax", bonusmax),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1LotterypickerResponse],
            error_mapper=lotterypicker_error_mapper,
            request_options=request_options,
        )

    def madlibs(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MadlibsResponse, MadlibsErrorBody]:
        """Get mad libs story templates

        Args:
            category: Story category
            count: Number of stories
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/madlibs"),
            query_params=[param[str | None]("category", category), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MadlibsResponse],
            error_mapper=madlibs_error_mapper,
            request_options=request_options,
        )

    def maze(
        self,
        *,
        width: int | None = None,
        height: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MazeResponse, MazeErrorBody]:
        """Create a maze puzzle

        Args:
            width: Maze width
            height: Maze height
            difficulty: Difficulty level
            image: Set to true to generate a downloadable maze image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/maze"),
            query_params=[
                param[int | None]("width", width),
                param[int | None]("height", height),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1MazeResponse],
            error_mapper=maze_error_mapper,
            request_options=request_options,
        )

    def rockpaperscissors(
        self,
        *,
        choice: str | None = None,
        rounds: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RockpaperscissorsResponse, RockpaperscissorsErrorBody]:
        """Play rounds of Rock Paper Scissors with outcome analysis

        Args:
            choice: Your choice - omit for random
            rounds: Number of rounds to play
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/rockpaperscissors"),
            query_params=[param[str | None]("choice", choice), param[int | None]("rounds", rounds)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1RockpaperscissorsResponse],
            error_mapper=rockpaperscissors_error_mapper,
            request_options=request_options,
        )

    def slotmachine(
        self,
        *,
        spins: int | None = None,
        reels: int | None = None,
        bet: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SlotmachineResponse, SlotmachineErrorBody]:
        """Simulate slot machine spins with configurable reels and bet amounts

        Args:
            spins: Number of spins to simulate
            reels: Number of reels
            bet: Bet amount per spin
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/slotmachine"),
            query_params=[
                param[int | None]("spins", spins), param[int | None]("reels", reels), param[float | None]("bet", bet)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SlotmachineResponse],
            error_mapper=slotmachine_error_mapper,
            request_options=request_options,
        )

    def spellingbee(
        self,
        *,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpellingbeeResponse, SpellingbeeErrorBody]:
        """Create a spelling bee puzzle

        Args:
            difficulty: Difficulty: easy, medium, hard (affects word count)
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/spellingbee"),
            query_params=[param[str | None]("difficulty", difficulty), param[bool | None]("image", image)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SpellingbeeResponse],
            error_mapper=spellingbee_error_mapper,
            request_options=request_options,
        )

    def superheroname(
        self, *, style: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1SuperheronameResponse, SuperheronameErrorBody]:
        """Generate a random superhero name

        Args:
            style: Name style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/superheroname"),
            query_params=[param[str | None]("style", style)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1SuperheronameResponse],
            error_mapper=superheroname_error_mapper,
            request_options=request_options,
        )

    def wordladder(
        self,
        *,
        start: str | None = None,
        end: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordladderResponse, WordladderErrorBody]:
        """Create word ladder puzzles

        Args:
            start: Starting word (3-6 letters)
            end: Ending word (same length as start)
            difficulty: Difficulty level
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordladder"),
            query_params=[
                param[str | None]("start", start),
                param[str | None]("end", end),
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordladderResponse],
            error_mapper=wordladder_error_mapper,
            request_options=request_options,
        )

    def wordscramble(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordscrambleResponse, WordscrambleErrorBody]:
        """Create scrambled word puzzles

        Args:
            difficulty: Difficulty level (affects word length)
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordscramble"),
            query_params=[
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordscrambleResponse],
            error_mapper=wordscramble_error_mapper,
            request_options=request_options,
        )

    def wordsearch(
        self,
        body: V1WordsearchRequest | V1WordsearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordsearchResponse, WordsearchErrorBody]:
        """Create a word search puzzle with custom words

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/wordsearch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WordsearchRequest | V1WordsearchRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[V1WordsearchResponse],
            error_mapper=wordsearch_error_mapper,
            request_options=request_options,
        )


class AsyncGamesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def acrostic(
        self,
        word: str,
        *,
        theme: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AcrosticResponse, AcrosticErrorBody]:
        """Create an acrostic puzzle

        Args:
            word: The keyword to spell out (3-15 letters)
            theme: Theme: random, positive, nature, adventure, friendship, learning
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/acrostic"),
            query_params=[
                param[str]("word", word), param[str | None]("theme", theme), param[bool | None]("image", image)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AcrosticResponse],
            error_mapper=acrostic_error_mapper,
            request_options=request_options,
        )

    async def anagrampuzzle(
        self,
        *,
        word: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AnagrampuzzleResponse, AnagrampuzzleErrorBody]:
        """Create anagram puzzles

        Args:
            word: Specific word to create anagram for
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anagrampuzzle"),
            query_params=[
                param[str | None]("word", word),
                param[int | None]("count", count),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1AnagrampuzzleResponse],
            error_mapper=anagrampuzzle_error_mapper,
            request_options=request_options,
        )

    async def carddeckshuffler(
        self,
        *,
        decks: int | None = None,
        jokers: bool | None = None,
        method: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CarddeckshufflerResponse, CarddeckshufflerErrorBody]:
        """Shuffle one or more standard card decks with optional jokers

        Args:
            decks: Number of decks to shuffle
            jokers: Include jokers in the deck
            method: Shuffling method
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/carddeckshuffler"),
            query_params=[
                param[int | None]("decks", decks),
                param[bool | None]("jokers", jokers),
                param[str | None]("method", method),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CarddeckshufflerResponse],
            error_mapper=carddeckshuffler_error_mapper,
            request_options=request_options,
        )

    async def coinflipper(
        self, *, flips: int | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CoinflipperResponse, CoinflipperErrorBody]:
        """Flip one or more coins and get detailed results

        Args:
            flips: Number of coins to flip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/coinflipper"),
            query_params=[param[int | None]("flips", flips)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CoinflipperResponse],
            error_mapper=coinflipper_error_mapper,
            request_options=request_options,
        )

    async def crossword(
        self,
        *,
        size: str | None = None,
        theme: str | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CrosswordResponse, CrosswordErrorBody]:
        """Create a crossword puzzle

        Args:
            size: Grid size: small, medium, large
            theme: Theme: random, animals, food, sports, science, geography
            difficulty: Difficulty: easy, medium, hard
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/crossword"),
            query_params=[
                param[str | None]("size", size),
                param[str | None]("theme", theme),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CrosswordResponse],
            error_mapper=crossword_error_mapper,
            request_options=request_options,
        )

    async def cryptogram(
        self,
        *,
        text: str | None = None,
        random: bool | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CryptogramResponse, CryptogramErrorBody]:
        """Create a cryptogram puzzle

        Args:
            text: Text to encode (max 500 characters)
            random: Use a random famous quote instead of text (a quote is also used when text is omitted)
            image: Set to true to generate a downloadable puzzle image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/cryptogram"),
            query_params=[
                param[str | None]("text", text),
                param[bool | None]("random", random),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1CryptogramResponse],
            error_mapper=cryptogram_error_mapper,
            request_options=request_options,
        )

    async def diceroller(
        self,
        *,
        dice: str | None = None,
        modifier: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1DicerollerResponse, DicerollerErrorBody]:
        """Roll dice using XdY notation with optional modifier

        Args:
            dice: Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6)
            modifier: Modifier to add to the total (can be negative)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/diceroller"),
            query_params=[param[str | None]("dice", dice), param[int | None]("modifier", modifier)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1DicerollerResponse],
            error_mapper=diceroller_error_mapper,
            request_options=request_options,
        )

    async def fillintheblanks(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1FillintheblanksResponse, FillintheblanksErrorBody]:
        """Create fill in the blank puzzles

        Args:
            category: Puzzle category
            count: Number of puzzles
            difficulty: Difficulty level
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fillintheblanks"),
            query_params=[
                param[str | None]("category", category),
                param[int | None]("count", count),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FillintheblanksResponse],
            error_mapper=fillintheblanks_error_mapper,
            request_options=request_options,
        )

    async def fortunecookie(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1FortunecookieResponse, FortunecookieErrorBody]:
        """Generate fortune cookie messages with lucky numbers

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/fortunecookie"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1FortunecookieResponse],
            error_mapper=fortunecookie_error_mapper,
            request_options=request_options,
        )

    async def gamecharacter(
        self,
        *,
        race: str | None = None,
        class_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1GamecharacterResponse, GamecharacterErrorBody]:
        """Generate a random RPG character

        Args:
            race: Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf, Goblin
            class_: Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk,
                Warlock, Necromancer
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/gamecharacter"),
            query_params=[param[str | None]("race", race), param[str | None]("class", class_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1GamecharacterResponse],
            error_mapper=gamecharacter_error_mapper,
            request_options=request_options,
        )

    async def hangmanword(
        self,
        *,
        category: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1HangmanwordResponse, HangmanwordErrorBody]:
        """Get random words for hangman

        Args:
            category: Word category
            difficulty: Difficulty level
            count: Number of words
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/hangmanword"),
            query_params=[
                param[str | None]("category", category),
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1HangmanwordResponse],
            error_mapper=hangmanword_error_mapper,
            request_options=request_options,
        )

    async def lotterypicker(
        self,
        *,
        game: str | None = None,
        numbers: int | None = None,
        max_: int | None = None,
        bonus: int | None = None,
        tickets: int | None = None,
        bonusmax: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1LotterypickerResponse, LotterypickerErrorBody]:
        """Generate random lottery numbers for various games

        Args:
            game: Lottery game preset
            numbers: Number of main numbers to pick (for custom game)
            max_: Maximum number for main numbers (for custom game)
            bonus: Number of bonus numbers (for custom game)
            tickets: Number of tickets to generate
            bonusmax: Highest value a bonus ball can take. Only applies when game is custom; named games use their own
                rules
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/lotterypicker"),
            query_params=[
                param[str | None]("game", game),
                param[int | None]("numbers", numbers),
                param[int | None]("max", max_),
                param[int | None]("bonus", bonus),
                param[int | None]("tickets", tickets),
                param[int | None]("bonusmax", bonusmax),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1LotterypickerResponse],
            error_mapper=lotterypicker_error_mapper,
            request_options=request_options,
        )

    async def madlibs(
        self,
        *,
        category: str | None = None,
        count: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MadlibsResponse, MadlibsErrorBody]:
        """Get mad libs story templates

        Args:
            category: Story category
            count: Number of stories
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/madlibs"),
            query_params=[param[str | None]("category", category), param[int | None]("count", count)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MadlibsResponse],
            error_mapper=madlibs_error_mapper,
            request_options=request_options,
        )

    async def maze(
        self,
        *,
        width: int | None = None,
        height: int | None = None,
        difficulty: str | None = None,
        image: bool | None = None,
        solution_image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1MazeResponse, MazeErrorBody]:
        """Create a maze puzzle

        Args:
            width: Maze width
            height: Maze height
            difficulty: Difficulty level
            image: Set to true to generate a downloadable maze image
            solution_image: Set to true to generate a downloadable solution image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/maze"),
            query_params=[
                param[int | None]("width", width),
                param[int | None]("height", height),
                param[str | None]("difficulty", difficulty),
                param[bool | None]("image", image),
                param[bool | None]("solutionImage", solution_image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1MazeResponse],
            error_mapper=maze_error_mapper,
            request_options=request_options,
        )

    async def rockpaperscissors(
        self,
        *,
        choice: str | None = None,
        rounds: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RockpaperscissorsResponse, RockpaperscissorsErrorBody]:
        """Play rounds of Rock Paper Scissors with outcome analysis

        Args:
            choice: Your choice - omit for random
            rounds: Number of rounds to play
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/rockpaperscissors"),
            query_params=[param[str | None]("choice", choice), param[int | None]("rounds", rounds)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1RockpaperscissorsResponse],
            error_mapper=rockpaperscissors_error_mapper,
            request_options=request_options,
        )

    async def slotmachine(
        self,
        *,
        spins: int | None = None,
        reels: int | None = None,
        bet: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SlotmachineResponse, SlotmachineErrorBody]:
        """Simulate slot machine spins with configurable reels and bet amounts

        Args:
            spins: Number of spins to simulate
            reels: Number of reels
            bet: Bet amount per spin
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/slotmachine"),
            query_params=[
                param[int | None]("spins", spins), param[int | None]("reels", reels), param[float | None]("bet", bet)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SlotmachineResponse],
            error_mapper=slotmachine_error_mapper,
            request_options=request_options,
        )

    async def spellingbee(
        self,
        *,
        difficulty: str | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SpellingbeeResponse, SpellingbeeErrorBody]:
        """Create a spelling bee puzzle

        Args:
            difficulty: Difficulty: easy, medium, hard (affects word count)
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/spellingbee"),
            query_params=[param[str | None]("difficulty", difficulty), param[bool | None]("image", image)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SpellingbeeResponse],
            error_mapper=spellingbee_error_mapper,
            request_options=request_options,
        )

    async def superheroname(
        self, *, style: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1SuperheronameResponse, SuperheronameErrorBody]:
        """Generate a random superhero name

        Args:
            style: Name style
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/superheroname"),
            query_params=[param[str | None]("style", style)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1SuperheronameResponse],
            error_mapper=superheroname_error_mapper,
            request_options=request_options,
        )

    async def wordladder(
        self,
        *,
        start: str | None = None,
        end: str | None = None,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordladderResponse, WordladderErrorBody]:
        """Create word ladder puzzles

        Args:
            start: Starting word (3-6 letters)
            end: Ending word (same length as start)
            difficulty: Difficulty level
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordladder"),
            query_params=[
                param[str | None]("start", start),
                param[str | None]("end", end),
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordladderResponse],
            error_mapper=wordladder_error_mapper,
            request_options=request_options,
        )

    async def wordscramble(
        self,
        *,
        difficulty: str | None = None,
        count: int | None = None,
        image: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordscrambleResponse, WordscrambleErrorBody]:
        """Create scrambled word puzzles

        Args:
            difficulty: Difficulty level (affects word length)
            count: Number of puzzles
            image: Set to true to generate a downloadable puzzle image
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/wordscramble"),
            query_params=[
                param[str | None]("difficulty", difficulty),
                param[int | None]("count", count),
                param[bool | None]("image", image),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordscrambleResponse],
            error_mapper=wordscramble_error_mapper,
            request_options=request_options,
        )

    async def wordsearch(
        self,
        body: V1WordsearchRequest | V1WordsearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1WordsearchResponse, WordsearchErrorBody]:
        """Create a word search puzzle with custom words

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/wordsearch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WordsearchRequest | V1WordsearchRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[V1WordsearchResponse],
            error_mapper=wordsearch_error_mapper,
            request_options=request_options,
        )
