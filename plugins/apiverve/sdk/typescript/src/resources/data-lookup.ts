import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { v1AsnlookupResponseSchema, type V1AsnlookupResponse } from "../models/v1-asnlookup-response.js";
import { v1BibleResponseSchema, type V1BibleResponse } from "../models/v1-bible-response.js";
import {
  v1CallingcodeResponseSchema,
  type V1CallingcodeResponse,
} from "../models/v1-callingcode-response.js";
import { v1DictionaryResponseSchema, type V1DictionaryResponse } from "../models/v1-dictionary-response.js";
import { v1DogbreedsResponseSchema, type V1DogbreedsResponse } from "../models/v1-dogbreeds-response.js";
import { v1EmojiResponseSchema, type V1EmojiResponse } from "../models/v1-emoji-response.js";
import {
  v1GenderdetectorResponseSchema,
  type V1GenderdetectorResponse,
} from "../models/v1-genderdetector-response.js";
import {
  v1GravatarlookupResponseSchema,
  type V1GravatarlookupResponse,
} from "../models/v1-gravatarlookup-response.js";
import {
  v1IpdemographicsResponseSchema,
  type V1IpdemographicsResponse,
} from "../models/v1-ipdemographics-response.js";
import { v1LotteryResponseSchema, type V1LotteryResponse } from "../models/v1-lottery-response.js";
import {
  v1NobelprizesResponseSchema,
  type V1NobelprizesResponse,
} from "../models/v1-nobelprizes-response.js";
import {
  v1OpenlicensesResponseSchema,
  type V1OpenlicensesResponse,
} from "../models/v1-openlicenses-response.js";
import { v1ThesaurusResponseSchema, type V1ThesaurusResponse } from "../models/v1-thesaurus-response.js";
import {
  v1TimezonelookupResponseSchema,
  type V1TimezonelookupResponse,
} from "../models/v1-timezonelookup-response.js";
import {
  v1UnicodelookupResponseSchema,
  type V1UnicodelookupResponse,
} from "../models/v1-unicodelookup-response.js";
import { v1WorldtimeResponseSchema, type V1WorldtimeResponse } from "../models/v1-worldtime-response.js";
import {
  v1ZipdemographicsResponseSchema,
  type V1ZipdemographicsResponse,
} from "../models/v1-zipdemographics-response.js";
import type { Servers } from "../servers.js";

export class DataLookup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ASN Lookup
   *
   * @remarks
   * ASN Lookup is a simple tool for getting information on Autonomous System Numbers (ASNs). It
   * returns information on various ASNs.
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.AsnlookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  asnlookup(
    request: DataLookup.AsnlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AsnlookupResponse, DataLookup.AsnlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/asnlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "asn", value: request.asn, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AsnlookupResponseSchema },
        errorFactory: DataLookup.AsnlookupError,
      },
      options,
    );
  }

  /**
   * Bible
   *
   * @remarks
   * Get a bible chapter or verse based on the book, chapter, and or verse
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.BibleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bible(
    request: DataLookup.BibleRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BibleResponse, DataLookup.BibleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bible"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "book", value: request.book, schema: s.string() },
          { name: "version", value: request.version, schema: s.string() },
          { name: "chapter", value: request.chapter, schema: s.int() },
          { name: "verse", value: request.verse, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BibleResponseSchema },
        errorFactory: DataLookup.BibleError,
      },
      options,
    );
  }

  /**
   * Country Calling Code
   *
   * @remarks
   * Country Calling Code is a simple tool for getting the country's international dialing codes. It
   * returns the country's international dialing codes.
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.CallingcodeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callingcode(
    request: DataLookup.CallingcodeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CallingcodeResponse, DataLookup.CallingcodeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/callingcode"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "country", value: request.country, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CallingcodeResponseSchema },
        errorFactory: DataLookup.CallingcodeError,
      },
      options,
    );
  }

  /**
   * Dictionary
   *
   * @remarks
   * Get the definition of a word
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.DictionaryError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dictionary(
    request: DataLookup.DictionaryRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DictionaryResponse, DataLookup.DictionaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dictionary"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "word", value: request.word, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DictionaryResponseSchema },
        errorFactory: DataLookup.DictionaryError,
      },
      options,
    );
  }

  /**
   * Dog Breeds
   *
   * @remarks
   * Get information about a specific dog breed
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.DogbreedsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dogbreeds(
    request: DataLookup.DogbreedsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DogbreedsResponse, DataLookup.DogbreedsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/dogbreeds"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "breed", value: request.breed, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DogbreedsResponseSchema },
        errorFactory: DataLookup.DogbreedsError,
      },
      options,
    );
  }

  /**
   * Emoji Lookup
   *
   * @remarks
   * Lookup the text representation of an emoji
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.EmojiError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emoji(
    request: DataLookup.EmojiRequest,
    options?: RequestOptions,
  ): ApiPromise<V1EmojiResponse, DataLookup.EmojiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/emoji"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "emoji", value: request.emoji, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EmojiResponseSchema },
        errorFactory: DataLookup.EmojiError,
      },
      options,
    );
  }

  /**
   * Gender Detector
   *
   * @remarks
   * Detect the likely gender based on a given name
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.GenderdetectorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  genderdetector(
    request: DataLookup.GenderdetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GenderdetectorResponse, DataLookup.GenderdetectorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/genderdetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GenderdetectorResponseSchema },
        errorFactory: DataLookup.GenderdetectorError,
      },
      options,
    );
  }

  /**
   * Gravatar Lookup
   *
   * @remarks
   * Lookup the Gravatar profile of an email address
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.GravatarlookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  gravatarlookup(
    request: DataLookup.GravatarlookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GravatarlookupResponse, DataLookup.GravatarlookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/gravatarlookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "email", value: request.email, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GravatarlookupResponseSchema },
        errorFactory: DataLookup.GravatarlookupError,
      },
      options,
    );
  }

  /**
   * IP Demographics
   *
   * @remarks
   * Get location and demographic data for an IP address
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.IpdemographicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ipdemographics(
    request: DataLookup.IpdemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IpdemographicsResponse, DataLookup.IpdemographicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ipdemographics"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IpdemographicsResponseSchema },
        errorFactory: DataLookup.IpdemographicsError,
      },
      options,
    );
  }

  /**
   * Lottery Numbers
   *
   * @remarks
   * Lookup the latest winning lottery numbers for Powerball, Mega Millions, EuroMillions, or Lotto
   * Max — pick the game with the numbers parameter. Optionally provide a date for historical
   * results.
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.LotteryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lottery(
    request: DataLookup.LotteryRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LotteryResponse, DataLookup.LotteryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/lottery"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "numbers", value: request.numbers, schema: s.string() },
          { name: "date", value: request.date, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LotteryResponseSchema },
        errorFactory: DataLookup.LotteryError,
      },
      options,
    );
  }

  /**
   * Nobel Prizes
   *
   * @remarks
   * Nobel Prizes is a simple tool for getting information on Nobel Prizes. It returns information
   * on various Nobel Prizes.
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.NobelprizesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nobelprizes(
    request: DataLookup.NobelprizesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1NobelprizesResponse, DataLookup.NobelprizesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/nobelprizes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "firstname", value: request.firstname, schema: s.optional(s.string()) },
          { name: "lastname", value: request.lastname, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "year", value: request.year, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1NobelprizesResponseSchema },
        errorFactory: DataLookup.NobelprizesError,
      },
      options,
    );
  }

  /**
   * Open Source Licenses
   *
   * @remarks
   * Open Source Licenses is a simple tool for getting information on open source licenses. It
   * returns information on various open source licenses.
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.OpenlicensesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  openlicenses(
    request: DataLookup.OpenlicensesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OpenlicensesResponse, DataLookup.OpenlicensesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/openlicenses"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OpenlicensesResponseSchema },
        errorFactory: DataLookup.OpenlicensesError,
      },
      options,
    );
  }

  /**
   * Thesaurus
   *
   * @remarks
   * Get a list of similar words for the specified word
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.ThesaurusError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  thesaurus(
    request: DataLookup.ThesaurusRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ThesaurusResponse, DataLookup.ThesaurusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/thesaurus"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "word", value: request.word, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ThesaurusResponseSchema },
        errorFactory: DataLookup.ThesaurusError,
      },
      options,
    );
  }

  /**
   * Timezone Lookup
   *
   * @remarks
   * Lookup timezone data based on the city name
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.TimezonelookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  timezonelookup(
    request: DataLookup.TimezonelookupRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TimezonelookupResponse, DataLookup.TimezonelookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/timezonelookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "city", value: request.city, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TimezonelookupResponseSchema },
        errorFactory: DataLookup.TimezonelookupError,
      },
      options,
    );
  }

  /**
   * Unicode Character Lookup
   *
   * @remarks
   * Get detailed information about a Unicode character
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.UnicodelookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unicodelookup(
    request: DataLookup.UnicodelookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1UnicodelookupResponse, DataLookup.UnicodelookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/unicodelookup"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "character", value: request.character, schema: s.optional(s.string()) },
          { name: "codepoint", value: request.codepoint, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UnicodelookupResponseSchema },
        errorFactory: DataLookup.UnicodelookupError,
      },
      options,
    );
  }

  /**
   * World Time
   *
   * @remarks
   * Get the current time in any city
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.WorldtimeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  worldtime(
    request: DataLookup.WorldtimeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WorldtimeResponse, DataLookup.WorldtimeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/worldtime"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "city", value: request.city, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WorldtimeResponseSchema },
        errorFactory: DataLookup.WorldtimeError,
      },
      options,
    );
  }

  /**
   * ZIP Demographics
   *
   * @remarks
   * Get demographic data for a ZIP code
   *
   * @returns Successful Response
   *
   * @throws {@link DataLookup.ZipdemographicsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  zipdemographics(
    request: DataLookup.ZipdemographicsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ZipdemographicsResponse, DataLookup.ZipdemographicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/zipdemographics"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "zip", value: request.zip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ZipdemographicsResponseSchema },
        errorFactory: DataLookup.ZipdemographicsError,
      },
      options,
    );
  }
}

export namespace DataLookup {
  export type AsnlookupRequest = {
    /** The ASN you want to get information about */
    asn: string;
  };

  export class AsnlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AsnlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BibleRequest = {
    /** The name of the book in the bible (e.g., Genesis) */
    book: string;
    /** The Bible translation version */
    version: string;
    /** The chapter number in the book */
    chapter: number;
    /** The verse number in the chapter */
    verse?: number;
  };

  export class BibleError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BibleError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CallingcodeRequest = {
    /** The 2 letter ISO code for the country (e.g. FR) */
    country: string;
  };

  export class CallingcodeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CallingcodeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DictionaryRequest = {
    /** The word for which you want to get the definition (e.g., apple) */
    word: string;
  };

  export class DictionaryError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DictionaryError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DogbreedsRequest = {
    /** The name of the dog breed to get information about */
    breed: string;
  };

  export class DogbreedsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DogbreedsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EmojiRequest = {
    /** The emoji for which you want to get the text representation (e.g., 🥳) */
    emoji: string;
  };

  export class EmojiError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmojiError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GenderdetectorRequest = {
    /** The name for which you want to detect the gender */
    name: string;
    /**
     * The country code for the name (e.g., US). Recorded and echoed back in the response, but
     * detection does not yet vary by country - the same name returns the same gender whichever code
     * you pass
     */
    country?: string;
  };

  export class GenderdetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenderdetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GravatarlookupRequest = {
    /** The email address to lookup the Gravatar profile of */
    email: string;
  };

  export class GravatarlookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GravatarlookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IpdemographicsRequest = {
    /** IPv4 or IPv6 address */
    ip: string;
  };

  export class IpdemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IpdemographicsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LotteryRequest = {
    /** The lottery game to lookup: powerball, megamillions, euromillions, or lottomax */
    numbers: string;
    /** Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date. */
    date?: string;
  };

  export class LotteryError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LotteryError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NobelprizesRequest = {
    /** The first name of the Nobel Prize winner to get information about */
    firstname?: string;
    /** The last name of the Nobel Prize winner to get information about */
    lastname?: string;
    /** The category of the Nobel Prize to get information about */
    category?: string;
    /** The year of the Nobel Prize to get information about */
    year?: number;
  };

  export class NobelprizesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NobelprizesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type OpenlicensesRequest = {
    /** The name of the open source license to get information about */
    name: string;
  };

  export class OpenlicensesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<OpenlicensesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ThesaurusRequest = {
    /** The word for which you want to get synonyms */
    word: string;
  };

  export class ThesaurusError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ThesaurusError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TimezonelookupRequest = {
    /** The city name for which you want to get the data (e.g., Harare) */
    city: string;
  };

  export class TimezonelookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TimezonelookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnicodelookupRequest = {
    /** The Unicode character to lookup. Supply either character or codepoint. */
    character?: string;
    /**
     * The Unicode codepoint in hex (e.g., '1F44B' or 'U+1F44B'). Supply either character or
     * codepoint.
     */
    codepoint?: string;
  };

  export class UnicodelookupError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnicodelookupError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WorldtimeRequest = {
    /** The city name for which you want to get the current time (e.g., New York) */
    city: string;
  };

  export class WorldtimeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WorldtimeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ZipdemographicsRequest = {
    /** 5-digit US ZIP code */
    zip: string;
  };

  export class ZipdemographicsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ZipdemographicsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
