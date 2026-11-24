import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { v1AcrosticResponseSchema, type V1AcrosticResponse } from "../models/v1-acrostic-response.js";
import {
  v1AnagrampuzzleResponseSchema,
  type V1AnagrampuzzleResponse,
} from "../models/v1-anagrampuzzle-response.js";
import {
  v1CarddeckshufflerResponseSchema,
  type V1CarddeckshufflerResponse,
} from "../models/v1-carddeckshuffler-response.js";
import {
  v1CoinflipperResponseSchema,
  type V1CoinflipperResponse,
} from "../models/v1-coinflipper-response.js";
import { v1CrosswordResponseSchema, type V1CrosswordResponse } from "../models/v1-crossword-response.js";
import { v1CryptogramResponseSchema, type V1CryptogramResponse } from "../models/v1-cryptogram-response.js";
import { v1DicerollerResponseSchema, type V1DicerollerResponse } from "../models/v1-diceroller-response.js";
import {
  v1FillintheblanksResponseSchema,
  type V1FillintheblanksResponse,
} from "../models/v1-fillintheblanks-response.js";
import {
  v1FortunecookieResponseSchema,
  type V1FortunecookieResponse,
} from "../models/v1-fortunecookie-response.js";
import {
  v1GamecharacterResponseSchema,
  type V1GamecharacterResponse,
} from "../models/v1-gamecharacter-response.js";
import {
  v1HangmanwordResponseSchema,
  type V1HangmanwordResponse,
} from "../models/v1-hangmanword-response.js";
import {
  v1LotterypickerResponseSchema,
  type V1LotterypickerResponse,
} from "../models/v1-lotterypicker-response.js";
import { v1MadlibsResponseSchema, type V1MadlibsResponse } from "../models/v1-madlibs-response.js";
import { v1MazeResponseSchema, type V1MazeResponse } from "../models/v1-maze-response.js";
import {
  v1RockpaperscissorsResponseSchema,
  type V1RockpaperscissorsResponse,
} from "../models/v1-rockpaperscissors-response.js";
import {
  v1SlotmachineResponseSchema,
  type V1SlotmachineResponse,
} from "../models/v1-slotmachine-response.js";
import {
  v1SpellingbeeResponseSchema,
  type V1SpellingbeeResponse,
} from "../models/v1-spellingbee-response.js";
import {
  v1SuperheronameResponseSchema,
  type V1SuperheronameResponse,
} from "../models/v1-superheroname-response.js";
import { v1WordladderResponseSchema, type V1WordladderResponse } from "../models/v1-wordladder-response.js";
import {
  v1WordscrambleResponseSchema,
  type V1WordscrambleResponse,
} from "../models/v1-wordscramble-response.js";
import { v1WordsearchRequestSchema, type V1WordsearchRequest } from "../models/v1-wordsearch-request.js";
import { v1WordsearchResponseSchema, type V1WordsearchResponse } from "../models/v1-wordsearch-response.js";
import type { Servers } from "../servers.js";

export class Games {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acrostic Puzzle Generator
   *
   * @remarks
   * Create an acrostic puzzle
   *
   * @returns Successful Response
   *
   * @throws {@link Games.AcrosticError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acrostic(
    request: Games.AcrosticRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AcrosticResponse, Games.AcrosticError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/acrostic"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "word", value: request.word, schema: s.string() },
          { name: "theme", value: request.theme, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AcrosticResponseSchema },
        errorFactory: Games.AcrosticError,
      },
      options,
    );
  }

  /**
   * Anagram Puzzle Generator
   *
   * @remarks
   * Create anagram puzzles
   *
   * @returns Successful Response
   *
   * @throws {@link Games.AnagrampuzzleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  anagrampuzzle(
    request: Games.AnagrampuzzleRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1AnagrampuzzleResponse, Games.AnagrampuzzleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/anagrampuzzle"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "word", value: request.word, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AnagrampuzzleResponseSchema },
        errorFactory: Games.AnagrampuzzleError,
      },
      options,
    );
  }

  /**
   * Card Deck Shuffler
   *
   * @remarks
   * Shuffle one or more standard card decks with optional jokers
   *
   * @returns Successful Response
   *
   * @throws {@link Games.CarddeckshufflerError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  carddeckshuffler(
    request: Games.CarddeckshufflerRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CarddeckshufflerResponse, Games.CarddeckshufflerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/carddeckshuffler"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "decks", value: request.decks, schema: s.optional(s.int()) },
          { name: "jokers", value: request.jokers, schema: s.optional(s.boolean()) },
          { name: "method", value: request.method, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CarddeckshufflerResponseSchema },
        errorFactory: Games.CarddeckshufflerError,
      },
      options,
    );
  }

  /**
   * Coin Flipper
   *
   * @remarks
   * Flip one or more coins and get detailed results
   *
   * @returns Successful Response
   *
   * @throws {@link Games.CoinflipperError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  coinflipper(
    request: Games.CoinflipperRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CoinflipperResponse, Games.CoinflipperError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/coinflipper"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "flips", value: request.flips, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CoinflipperResponseSchema },
        errorFactory: Games.CoinflipperError,
      },
      options,
    );
  }

  /**
   * Crossword Generator
   *
   * @remarks
   * Create a crossword puzzle
   *
   * @returns Successful Response
   *
   * @throws {@link Games.CrosswordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  crossword(
    request: Games.CrosswordRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CrosswordResponse, Games.CrosswordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/crossword"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.optional(s.string()) },
          { name: "theme", value: request.theme, schema: s.optional(s.string()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
          { name: "solutionImage", value: request.solutionImage, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CrosswordResponseSchema },
        errorFactory: Games.CrosswordError,
      },
      options,
    );
  }

  /**
   * Cryptogram Generator
   *
   * @remarks
   * Create a cryptogram puzzle
   *
   * @returns Successful Response
   *
   * @throws {@link Games.CryptogramError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cryptogram(
    request: Games.CryptogramRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CryptogramResponse, Games.CryptogramError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cryptogram"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.optional(s.string()) },
          { name: "random", value: request.random, schema: s.optional(s.boolean()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
          { name: "solutionImage", value: request.solutionImage, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CryptogramResponseSchema },
        errorFactory: Games.CryptogramError,
      },
      options,
    );
  }

  /**
   * Dice Roller
   *
   * @remarks
   * Roll dice using XdY notation with optional modifier
   *
   * @returns Successful Response
   *
   * @throws {@link Games.DicerollerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  diceroller(
    request: Games.DicerollerRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1DicerollerResponse, Games.DicerollerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/diceroller"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "dice", value: request.dice, schema: s.optional(s.string()) },
          { name: "modifier", value: request.modifier, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DicerollerResponseSchema },
        errorFactory: Games.DicerollerError,
      },
      options,
    );
  }

  /**
   * Fill in the Blanks Generator
   *
   * @remarks
   * Create fill in the blank puzzles
   *
   * @returns Successful Response
   *
   * @throws {@link Games.FillintheblanksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fillintheblanks(
    request: Games.FillintheblanksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1FillintheblanksResponse, Games.FillintheblanksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/fillintheblanks"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FillintheblanksResponseSchema },
        errorFactory: Games.FillintheblanksError,
      },
      options,
    );
  }

  /**
   * Fortune Cookie Generator
   *
   * @remarks
   * Generate fortune cookie messages with lucky numbers
   *
   * @returns Successful Response
   *
   * @throws {@link Games.FortunecookieError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fortunecookie(options?: RequestOptions): ApiPromise<V1FortunecookieResponse, Games.FortunecookieError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/fortunecookie"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FortunecookieResponseSchema },
        errorFactory: Games.FortunecookieError,
      },
      options,
    );
  }

  /**
   * Game Character Generator
   *
   * @remarks
   * Generate a random RPG character
   *
   * @returns Successful Response
   *
   * @throws {@link Games.GamecharacterError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  gamecharacter(
    request: Games.GamecharacterRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1GamecharacterResponse, Games.GamecharacterError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/gamecharacter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "race", value: request.race, schema: s.optional(s.string()) },
          { name: "class", value: request.class, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GamecharacterResponseSchema },
        errorFactory: Games.GamecharacterError,
      },
      options,
    );
  }

  /**
   * Hangman Word Generator
   *
   * @remarks
   * Get random words for hangman
   *
   * @returns Successful Response
   *
   * @throws {@link Games.HangmanwordError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hangmanword(
    request: Games.HangmanwordRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1HangmanwordResponse, Games.HangmanwordError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/hangmanword"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HangmanwordResponseSchema },
        errorFactory: Games.HangmanwordError,
      },
      options,
    );
  }

  /**
   * Lottery Number Generator
   *
   * @remarks
   * Generate random lottery numbers for various games
   *
   * @returns Successful Response
   *
   * @throws {@link Games.LotterypickerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lotterypicker(
    request: Games.LotterypickerRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1LotterypickerResponse, Games.LotterypickerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/lotterypicker"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "game", value: request.game, schema: s.optional(s.string()) },
          { name: "numbers", value: request.numbers, schema: s.optional(s.int()) },
          { name: "max", value: request.max, schema: s.optional(s.int()) },
          { name: "bonus", value: request.bonus, schema: s.optional(s.int()) },
          { name: "tickets", value: request.tickets, schema: s.optional(s.int()) },
          { name: "bonusmax", value: request.bonusmax, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LotterypickerResponseSchema },
        errorFactory: Games.LotterypickerError,
      },
      options,
    );
  }

  /**
   * Mad Libs Generator
   *
   * @remarks
   * Get mad libs story templates
   *
   * @returns Successful Response
   *
   * @throws {@link Games.MadlibsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  madlibs(
    request: Games.MadlibsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1MadlibsResponse, Games.MadlibsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/madlibs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MadlibsResponseSchema },
        errorFactory: Games.MadlibsError,
      },
      options,
    );
  }

  /**
   * Maze Generator
   *
   * @remarks
   * Create a maze puzzle
   *
   * @returns Successful Response
   *
   * @throws {@link Games.MazeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  maze(
    request: Games.MazeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1MazeResponse, Games.MazeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/maze"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "width", value: request.width, schema: s.optional(s.int()) },
          { name: "height", value: request.height, schema: s.optional(s.int()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
          { name: "solutionImage", value: request.solutionImage, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MazeResponseSchema },
        errorFactory: Games.MazeError,
      },
      options,
    );
  }

  /**
   * Rock Paper Scissors
   *
   * @remarks
   * Play rounds of Rock Paper Scissors with outcome analysis
   *
   * @returns Successful Response
   *
   * @throws {@link Games.RockpaperscissorsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rockpaperscissors(
    request: Games.RockpaperscissorsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1RockpaperscissorsResponse, Games.RockpaperscissorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/rockpaperscissors"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "choice", value: request.choice, schema: s.optional(s.string()) },
          { name: "rounds", value: request.rounds, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RockpaperscissorsResponseSchema },
        errorFactory: Games.RockpaperscissorsError,
      },
      options,
    );
  }

  /**
   * Slot Machine Simulator
   *
   * @remarks
   * Simulate slot machine spins with configurable reels and bet amounts
   *
   * @returns Successful Response
   *
   * @throws {@link Games.SlotmachineError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  slotmachine(
    request: Games.SlotmachineRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SlotmachineResponse, Games.SlotmachineError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/slotmachine"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "spins", value: request.spins, schema: s.optional(s.int()) },
          { name: "reels", value: request.reels, schema: s.optional(s.int()) },
          { name: "bet", value: request.bet, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SlotmachineResponseSchema },
        errorFactory: Games.SlotmachineError,
      },
      options,
    );
  }

  /**
   * Spelling Bee Generator
   *
   * @remarks
   * Create a spelling bee puzzle
   *
   * @returns Successful Response
   *
   * @throws {@link Games.SpellingbeeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  spellingbee(
    request: Games.SpellingbeeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SpellingbeeResponse, Games.SpellingbeeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/spellingbee"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SpellingbeeResponseSchema },
        errorFactory: Games.SpellingbeeError,
      },
      options,
    );
  }

  /**
   * Superhero Name Generator
   *
   * @remarks
   * Generate a random superhero name
   *
   * @returns Successful Response
   *
   * @throws {@link Games.SuperheronameError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  superheroname(
    request: Games.SuperheronameRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SuperheronameResponse, Games.SuperheronameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/superheroname"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "style", value: request.style, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SuperheronameResponseSchema },
        errorFactory: Games.SuperheronameError,
      },
      options,
    );
  }

  /**
   * Word Ladder Generator
   *
   * @remarks
   * Create word ladder puzzles
   *
   * @returns Successful Response
   *
   * @throws {@link Games.WordladderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordladder(
    request: Games.WordladderRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1WordladderResponse, Games.WordladderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordladder"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.string()) },
          { name: "end", value: request.end, schema: s.optional(s.string()) },
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordladderResponseSchema },
        errorFactory: Games.WordladderError,
      },
      options,
    );
  }

  /**
   * Word Scramble Generator
   *
   * @remarks
   * Create scrambled word puzzles
   *
   * @returns Successful Response
   *
   * @throws {@link Games.WordscrambleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordscramble(
    request: Games.WordscrambleRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1WordscrambleResponse, Games.WordscrambleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordscramble"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordscrambleResponseSchema },
        errorFactory: Games.WordscrambleError,
      },
      options,
    );
  }

  /**
   * Word Search Generator
   *
   * @remarks
   * Create a word search puzzle with custom words
   *
   * @returns Successful Response
   *
   * @throws {@link Games.WordsearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordsearch(
    request: Games.WordsearchRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WordsearchResponse, Games.WordsearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/wordsearch"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WordsearchRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WordsearchResponseSchema },
        errorFactory: Games.WordsearchError,
      },
      options,
    );
  }
}

export namespace Games {
  export type AcrosticRequest = {
    /** The keyword to spell out (3-15 letters) */
    word: string;
    /** Theme: random, positive, nature, adventure, friendship, learning */
    theme?: string;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class AcrosticError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcrosticError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AnagrampuzzleRequest = {
    /** Specific word to create anagram for */
    word?: string;
    /** Number of puzzles */
    count?: number;
    /** Difficulty level */
    difficulty?: string;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class AnagrampuzzleError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnagrampuzzleError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CarddeckshufflerRequest = {
    /** Number of decks to shuffle */
    decks?: number;
    /** Include jokers in the deck */
    jokers?: boolean;
    /** Shuffling method */
    method?: string;
  };

  export class CarddeckshufflerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CarddeckshufflerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CoinflipperRequest = {
    /** Number of coins to flip */
    flips?: number;
  };

  export class CoinflipperError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CoinflipperError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CrosswordRequest = {
    /** Grid size: small, medium, large */
    size?: string;
    /** Theme: random, animals, food, sports, science, geography */
    theme?: string;
    /** Difficulty: easy, medium, hard */
    difficulty?: string;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
    /** Set to true to generate a downloadable solution image */
    solutionImage?: boolean;
  };

  export class CrosswordError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CrosswordError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CryptogramRequest = {
    /** Text to encode (max 500 characters) */
    text?: string;
    /** Use a random famous quote instead of text (a quote is also used when text is omitted) */
    random?: boolean;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
    /** Set to true to generate a downloadable solution image */
    solutionImage?: boolean;
  };

  export class CryptogramError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CryptogramError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DicerollerRequest = {
    /** Dice notation in XdY format (e.g., 3d6, 2d20, default: 1d6) */
    dice?: string;
    /** Modifier to add to the total (can be negative) */
    modifier?: number;
  };

  export class DicerollerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DicerollerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FillintheblanksRequest = {
    /** Puzzle category */
    category?: string;
    /** Number of puzzles */
    count?: number;
    /** Difficulty level */
    difficulty?: string;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class FillintheblanksError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FillintheblanksError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class FortunecookieError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FortunecookieError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GamecharacterRequest = {
    /**
     * Character race: Human, Elf, Dwarf, Halfling, Orc, Gnome, Tiefling, Dragonborn, Half-Elf,
     * Goblin
     */
    race?: string;
    /**
     * Character class: Warrior, Mage, Rogue, Cleric, Ranger, Paladin, Barbarian, Bard, Druid, Monk,
     * Warlock, Necromancer
     */
    class?: string;
  };

  export class GamecharacterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GamecharacterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HangmanwordRequest = {
    /** Word category */
    category?: string;
    /** Difficulty level */
    difficulty?: string;
    /** Number of words */
    count?: number;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class HangmanwordError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HangmanwordError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LotterypickerRequest = {
    /** Lottery game preset */
    game?: string;
    /** Number of main numbers to pick (for custom game) */
    numbers?: number;
    /** Maximum number for main numbers (for custom game) */
    max?: number;
    /** Number of bonus numbers (for custom game) */
    bonus?: number;
    /** Number of tickets to generate */
    tickets?: number;
    /**
     * Highest value a bonus ball can take. Only applies when game is custom; named games use their
     * own rules
     */
    bonusmax?: number;
  };

  export class LotterypickerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LotterypickerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MadlibsRequest = {
    /** Story category */
    category?: string;
    /** Number of stories */
    count?: number;
  };

  export class MadlibsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MadlibsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MazeRequest = {
    /** Maze width */
    width?: number;
    /** Maze height */
    height?: number;
    /** Difficulty level */
    difficulty?: string;
    /** Set to true to generate a downloadable maze image */
    image?: boolean;
    /** Set to true to generate a downloadable solution image */
    solutionImage?: boolean;
  };

  export class MazeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MazeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RockpaperscissorsRequest = {
    /** Your choice - omit for random */
    choice?: string;
    /** Number of rounds to play */
    rounds?: number;
  };

  export class RockpaperscissorsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RockpaperscissorsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SlotmachineRequest = {
    /** Number of spins to simulate */
    spins?: number;
    /** Number of reels */
    reels?: number;
    /** Bet amount per spin */
    bet?: number;
  };

  export class SlotmachineError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SlotmachineError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SpellingbeeRequest = {
    /** Difficulty: easy, medium, hard (affects word count) */
    difficulty?: string;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class SpellingbeeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SpellingbeeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SuperheronameRequest = {
    /** Name style */
    style?: string;
  };

  export class SuperheronameError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SuperheronameError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordladderRequest = {
    /** Starting word (3-6 letters) */
    start?: string;
    /** Ending word (same length as start) */
    end?: string;
    /** Difficulty level */
    difficulty?: string;
    /** Number of puzzles */
    count?: number;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class WordladderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordladderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordscrambleRequest = {
    /** Difficulty level (affects word length) */
    difficulty?: string;
    /** Number of puzzles */
    count?: number;
    /** Set to true to generate a downloadable puzzle image */
    image?: boolean;
  };

  export class WordscrambleError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordscrambleError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordsearchRequest = {
    body: V1WordsearchRequest;
  };

  export class WordsearchError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordsearchError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
