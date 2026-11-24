import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1AdviceResponseSchema, type V1AdviceResponse } from "../models/v1-advice-response.js";
import { v1BucketlistResponseSchema, type V1BucketlistResponse } from "../models/v1-bucketlist-response.js";
import { v1CharadesResponseSchema, type V1CharadesResponse } from "../models/v1-charades-response.js";
import {
  v1ChessmovevalidatorResponseSchema,
  type V1ChessmovevalidatorResponse,
} from "../models/v1-chessmovevalidator-response.js";
import {
  v1ChucknorrisResponseSchema,
  type V1ChucknorrisResponse,
} from "../models/v1-chucknorris-response.js";
import {
  v1ComplimentsResponseSchema,
  type V1ComplimentsResponse,
} from "../models/v1-compliments-response.js";
import { v1DadjokesResponseSchema, type V1DadjokesResponse } from "../models/v1-dadjokes-response.js";
import {
  v1DndgeneratorResponseSchema,
  type V1DndgeneratorResponse,
} from "../models/v1-dndgenerator-response.js";
import {
  v1FortunetellerResponseSchema,
  type V1FortunetellerResponse,
} from "../models/v1-fortuneteller-response.js";
import {
  v1HistoricaleventsResponseSchema,
  type V1HistoricaleventsResponse,
} from "../models/v1-historicalevents-response.js";
import {
  v1LovecalculatorResponseSchema,
  type V1LovecalculatorResponse,
} from "../models/v1-lovecalculator-response.js";
import { v1Magic8BallResponseSchema, type V1Magic8BallResponse } from "../models/v1-magic8-ball-response.js";
import {
  v1MusicnotegeneratorResponseSchema,
  type V1MusicnotegeneratorResponse,
} from "../models/v1-musicnotegenerator-response.js";
import {
  v1NeverhaveieverResponseSchema,
  type V1NeverhaveieverResponse,
} from "../models/v1-neverhaveiever-response.js";
import { v1PictionaryResponseSchema, type V1PictionaryResponse } from "../models/v1-pictionary-response.js";
import {
  v1RandomfactsResponseSchema,
  type V1RandomfactsResponse,
} from "../models/v1-randomfacts-response.js";
import { v1RandomjokeResponseSchema, type V1RandomjokeResponse } from "../models/v1-randomjoke-response.js";
import { v1RandompunResponseSchema, type V1RandompunResponse } from "../models/v1-randompun-response.js";
import {
  v1RandomquoteResponseSchema,
  type V1RandomquoteResponse,
} from "../models/v1-randomquote-response.js";
import {
  v1ScrabblescorerResponseSchema,
  type V1ScrabblescorerResponse,
} from "../models/v1-scrabblescorer-response.js";
import { v1SudokuResponseSchema, type V1SudokuResponse } from "../models/v1-sudoku-response.js";
import { v1TriviaResponseSchema, type V1TriviaResponse } from "../models/v1-trivia-response.js";
import {
  v1TruthordareResponseSchema,
  type V1TruthordareResponse,
} from "../models/v1-truthordare-response.js";
import {
  v1WordlehelperResponseSchema,
  type V1WordlehelperResponse,
} from "../models/v1-wordlehelper-response.js";
import type { Servers } from "../servers.js";

export class Entertainment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Advice Generator
   *
   * @remarks
   * Advice Generator is a simple tool for generating random pieces of advice. It returns a random
   * piece of advice.
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.AdviceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  advice(options?: RequestOptions): ApiPromise<V1AdviceResponse, Entertainment.AdviceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/advice"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AdviceResponseSchema },
        errorFactory: Entertainment.AdviceError,
      },
      options,
    );
  }

  /**
   * Bucket List
   *
   * @remarks
   * Bucket List is a simple tool for getting a random bucket list item. It returns a random bucket
   * list item
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.BucketlistError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bucketlist(options?: RequestOptions): ApiPromise<V1BucketlistResponse, Entertainment.BucketlistError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bucketlist"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BucketlistResponseSchema },
        errorFactory: Entertainment.BucketlistError,
      },
      options,
    );
  }

  /**
   * Charades Generator
   *
   * @remarks
   * Generate random charades word from category
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.CharadesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  charades(
    request: Entertainment.CharadesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CharadesResponse, Entertainment.CharadesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/charades"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "category", value: request.category, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CharadesResponseSchema },
        errorFactory: Entertainment.CharadesError,
      },
      options,
    );
  }

  /**
   * Chess Move Validator
   *
   * @remarks
   * Validate algebraic chess notation
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.ChessmovevalidatorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chessmovevalidator(
    request: Entertainment.ChessmovevalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ChessmovevalidatorResponse, Entertainment.ChessmovevalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/chessmovevalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "move", value: request.move, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ChessmovevalidatorResponseSchema },
        errorFactory: Entertainment.ChessmovevalidatorError,
      },
      options,
    );
  }

  /**
   * Chuck Norris Jokes
   *
   * @remarks
   * Get a random Chuck Norris joke
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.ChucknorrisError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chucknorris(options?: RequestOptions): ApiPromise<V1ChucknorrisResponse, Entertainment.ChucknorrisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/chucknorris"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ChucknorrisResponseSchema },
        errorFactory: Entertainment.ChucknorrisError,
      },
      options,
    );
  }

  /**
   * Compliment Generator
   *
   * @remarks
   * Generate a unique compliment
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.ComplimentsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  compliments(
    request: Entertainment.ComplimentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1ComplimentsResponse, Entertainment.ComplimentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/compliments"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "adult", value: request.adult, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ComplimentsResponseSchema },
        errorFactory: Entertainment.ComplimentsError,
      },
      options,
    );
  }

  /**
   * Dad Jokes
   *
   * @remarks
   * Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.DadjokesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dadjokes(options?: RequestOptions): ApiPromise<V1DadjokesResponse, Entertainment.DadjokesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dadjokes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DadjokesResponseSchema },
        errorFactory: Entertainment.DadjokesError,
      },
      options,
    );
  }

  /**
   * D&D Generator
   *
   * @remarks
   * Generate random D&D content by type
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.DndgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dndgenerator(
    request: Entertainment.DndgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1DndgeneratorResponse, Entertainment.DndgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dndgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DndgeneratorResponseSchema },
        errorFactory: Entertainment.DndgeneratorError,
      },
      options,
    );
  }

  /**
   * Fortune Teller
   *
   * @remarks
   * Generate personalized AI fortune with insights and lucky elements
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.FortunetellerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fortuneteller(
    request: Entertainment.FortunetellerRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1FortunetellerResponse, Entertainment.FortunetellerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/fortuneteller"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "question", value: request.question, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1FortunetellerResponseSchema },
        errorFactory: Entertainment.FortunetellerError,
      },
      options,
    );
  }

  /**
   * Historical Events
   *
   * @remarks
   * Get a list of historical events that match a specific keyword
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.HistoricaleventsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  historicalevents(
    request: Entertainment.HistoricaleventsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HistoricaleventsResponse, Entertainment.HistoricaleventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/historicalevents"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "text", value: request.text, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1HistoricaleventsResponseSchema },
        errorFactory: Entertainment.HistoricaleventsError,
      },
      options,
    );
  }

  /**
   * Love Calculator
   *
   * @remarks
   * Calculate the love compatibility between two names
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.LovecalculatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lovecalculator(
    request: Entertainment.LovecalculatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LovecalculatorResponse, Entertainment.LovecalculatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/lovecalculator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "name1", value: request.name1, schema: s.string() },
          { name: "name2", value: request.name2, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LovecalculatorResponseSchema },
        errorFactory: Entertainment.LovecalculatorError,
      },
      options,
    );
  }

  /**
   * Magic 8-Ball
   *
   * @remarks
   * Get a random Magic 8-Ball prediction
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.Magic8BallError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  magic8Ball(
    request: Entertainment.Magic8BallRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1Magic8BallResponse, Entertainment.Magic8BallError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/magic8ball"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "question", value: request.question, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1Magic8BallResponseSchema },
        errorFactory: Entertainment.Magic8BallError,
      },
      options,
    );
  }

  /**
   * Music Note Generator
   *
   * @remarks
   * Generate audio file for musical note
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.MusicnotegeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  musicnotegenerator(
    request: Entertainment.MusicnotegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MusicnotegeneratorResponse, Entertainment.MusicnotegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/musicnotegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "note", value: request.note, schema: s.string() },
          { name: "octave", value: request.octave, schema: s.optional(s.int()) },
          { name: "duration", value: request.duration, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1MusicnotegeneratorResponseSchema },
        errorFactory: Entertainment.MusicnotegeneratorError,
      },
      options,
    );
  }

  /**
   * Never Have I Ever
   *
   * @remarks
   * Generate a Never Have I Ever statement
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.NeverhaveieverError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  neverhaveiever(
    request: Entertainment.NeverhaveieverRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1NeverhaveieverResponse, Entertainment.NeverhaveieverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/neverhaveiever"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "adult", value: request.adult, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NeverhaveieverResponseSchema },
        errorFactory: Entertainment.NeverhaveieverError,
      },
      options,
    );
  }

  /**
   * Pictionary Generator
   *
   * @remarks
   * Generate pictionary words by difficulty level
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.PictionaryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pictionary(
    request: Entertainment.PictionaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PictionaryResponse, Entertainment.PictionaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/pictionary"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PictionaryResponseSchema },
        errorFactory: Entertainment.PictionaryError,
      },
      options,
    );
  }

  /**
   * Random Facts
   *
   * @remarks
   * Get a random fact
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.RandomfactsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomfacts(options?: RequestOptions): ApiPromise<V1RandomfactsResponse, Entertainment.RandomfactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomfacts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomfactsResponseSchema },
        errorFactory: Entertainment.RandomfactsError,
      },
      options,
    );
  }

  /**
   * Random Joke
   *
   * @remarks
   * Get a random joke from a collection of jokes
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.RandomjokeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomjoke(options?: RequestOptions): ApiPromise<V1RandomjokeResponse, Entertainment.RandomjokeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomjoke"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomjokeResponseSchema },
        errorFactory: Entertainment.RandomjokeError,
      },
      options,
    );
  }

  /**
   * Random Pun
   *
   * @remarks
   * Get a random pun from a collection of puns
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.RandompunError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randompun(options?: RequestOptions): ApiPromise<V1RandompunResponse, Entertainment.RandompunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randompun"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandompunResponseSchema },
        errorFactory: Entertainment.RandompunError,
      },
      options,
    );
  }

  /**
   * Random Quote
   *
   * @remarks
   * Get a random quote from a collection of quotes
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.RandomquoteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomquote(options?: RequestOptions): ApiPromise<V1RandomquoteResponse, Entertainment.RandomquoteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomquote"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomquoteResponseSchema },
        errorFactory: Entertainment.RandomquoteError,
      },
      options,
    );
  }

  /**
   * Scrabble Word Scorer
   *
   * @remarks
   * Calculate Scrabble points for a word
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.ScrabblescorerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scrabblescorer(
    request: Entertainment.ScrabblescorerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ScrabblescorerResponse, Entertainment.ScrabblescorerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/scrabblescorer"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "word", value: request.word, schema: s.string() },
          { name: "language", value: request.language, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ScrabblescorerResponseSchema },
        errorFactory: Entertainment.ScrabblescorerError,
      },
      options,
    );
  }

  /**
   * Sudoku Generator
   *
   * @remarks
   * Sudoku is a simple tool for generating Sudoku puzzles. It returns a Sudoku puzzle.
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.SudokuError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sudoku(
    request: Entertainment.SudokuRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SudokuResponse, Entertainment.SudokuError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/sudoku"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "difficulty", value: request.difficulty, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SudokuResponseSchema },
        errorFactory: Entertainment.SudokuError,
      },
      options,
    );
  }

  /**
   * Trivia Generator
   *
   * @remarks
   * Get a random trivia question
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.TriviaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  trivia(
    request: Entertainment.TriviaRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TriviaResponse, Entertainment.TriviaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/trivia"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "category", value: request.category, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TriviaResponseSchema },
        errorFactory: Entertainment.TriviaError,
      },
      options,
    );
  }

  /**
   * Truth or Dare
   *
   * @remarks
   * Generate a truth or dare prompt
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.TruthordareError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  truthordare(
    request: Entertainment.TruthordareRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1TruthordareResponse, Entertainment.TruthordareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/truthordare"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "adult", value: request.adult, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TruthordareResponseSchema },
        errorFactory: Entertainment.TruthordareError,
      },
      options,
    );
  }

  /**
   * Wordle Helper
   *
   * @remarks
   * Find possible Wordle solutions based on clues
   *
   * @returns Successful Response
   *
   * @throws {@link Entertainment.WordlehelperError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordlehelper(
    request: Entertainment.WordlehelperRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1WordlehelperResponse, Entertainment.WordlehelperError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordlehelper"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "green", value: request.green, schema: s.optional(s.string()) },
          { name: "yellow", value: request.yellow, schema: s.optional(s.string()) },
          { name: "gray", value: request.gray, schema: s.optional(s.string()) },
          { name: "pattern", value: request.pattern, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordlehelperResponseSchema },
        errorFactory: Entertainment.WordlehelperError,
      },
      options,
    );
  }
}

export namespace Entertainment {
  export class AdviceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdviceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class BucketlistError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BucketlistError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CharadesRequest = {
    /** Category: all, movies, books, songs, actions, animals, objects */
    category?: string;
  };

  export class CharadesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CharadesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ChessmovevalidatorRequest = {
    /** Chess move in algebraic notation */
    move: string;
  };

  export class ChessmovevalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChessmovevalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class ChucknorrisError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChucknorrisError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ComplimentsRequest = {
    /** Include flirty/romantic compliments */
    adult?: boolean;
  };

  export class ComplimentsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ComplimentsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class DadjokesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DadjokesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DndgeneratorRequest = {
    /** Content type to generate */
    type?: string;
    /** Number of items to generate */
    count?: number;
  };

  export class DndgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DndgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type FortunetellerRequest = {
    /** Fortune category */
    category?: string;
    /** Optional question for personalized fortune (max 500 characters) */
    question?: string;
  };

  export class FortunetellerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FortunetellerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HistoricaleventsRequest = {
    /** The keyword for which you want to get the historical events (e.g., moon landing) */
    text: string;
  };

  export class HistoricaleventsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HistoricaleventsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LovecalculatorRequest = {
    /** The first name to calculate love compatibility */
    name1: string;
    /** The second name to calculate love compatibility */
    name2: string;
  };

  export class LovecalculatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LovecalculatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type Magic8BallRequest = {
    /** Your question for the Magic 8-Ball (optional) */
    question?: string;
  };

  export class Magic8BallError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<Magic8BallError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MusicnotegeneratorRequest = {
    /** Musical note (A-G with optional # or b) */
    note: string;
    /** Octave number */
    octave?: number;
    /** Duration in seconds */
    duration?: number;
  };

  export class MusicnotegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MusicnotegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NeverhaveieverRequest = {
    /** Include adult/relationship-focused statements */
    adult?: boolean;
  };

  export class NeverhaveieverError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NeverhaveieverError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PictionaryRequest = {
    /** Difficulty level */
    difficulty?: string;
    /** Number of words to generate */
    count?: number;
  };

  export class PictionaryError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PictionaryError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class RandomfactsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomfactsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class RandomjokeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomjokeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class RandompunError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandompunError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class RandomquoteError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomquoteError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ScrabblescorerRequest = {
    /** The word to score */
    word: string;
    /** Scrabble language variant */
    language?: string;
  };

  export class ScrabblescorerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScrabblescorerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SudokuRequest = {
    /** The difficulty level of the Sudoku puzzle to generate */
    difficulty?: string;
  };

  export class SudokuError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SudokuError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TriviaRequest = {
    /** The category of the trivia question */
    category?: string;
  };

  export class TriviaError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriviaError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TruthordareRequest = {
    /** Prompt type: truth, dare, or random */
    type?: string;
    /** Include adult/spicy prompts */
    adult?: boolean;
  };

  export class TruthordareError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TruthordareError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordlehelperRequest = {
    /** Correct letters with positions (e.g., A1 means A at position 1) */
    green?: string;
    /** Letters in word but wrong position (e.g., R2 means R not at position 2) */
    yellow?: string;
    /** Letters not in the word */
    gray?: string;
    /** Pattern with known letters (use _ for unknown) */
    pattern?: string;
    /** Maximum number of suggestions */
    limit?: number;
  };

  export class WordlehelperError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordlehelperError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
