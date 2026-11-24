import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1AcronymgeneratorResponseSchema,
  type V1AcronymgeneratorResponse,
} from "../models/v1-acronymgenerator-response.js";
import {
  v1BabynamegeneratorResponseSchema,
  type V1BabynamegeneratorResponse,
} from "../models/v1-babynamegenerator-response.js";
import {
  v1BarcodegeneratorRequestSchema,
  type V1BarcodegeneratorRequest,
} from "../models/v1-barcodegenerator-request.js";
import {
  v1BarcodegeneratorResponseSchema,
  type V1BarcodegeneratorResponse,
} from "../models/v1-barcodegenerator-response.js";
import {
  v1BingocardgeneratorResponseSchema,
  type V1BingocardgeneratorResponse,
} from "../models/v1-bingocardgenerator-response.js";
import {
  v1BoggleboardgeneratorResponseSchema,
  type V1BoggleboardgeneratorResponse,
} from "../models/v1-boggleboardgenerator-response.js";
import {
  v1CaptchageneratorResponseSchema,
  type V1CaptchageneratorResponse,
} from "../models/v1-captchagenerator-response.js";
import {
  v1CardgeneratorResponseSchema,
  type V1CardgeneratorResponse,
} from "../models/v1-cardgenerator-response.js";
import {
  v1ChartgeneratorRequestSchema,
  type V1ChartgeneratorRequest,
} from "../models/v1-chartgenerator-request.js";
import {
  v1ChartgeneratorResponseSchema,
  type V1ChartgeneratorResponse,
} from "../models/v1-chartgenerator-response.js";
import {
  v1ColorpaletteResponseSchema,
  type V1ColorpaletteResponse,
} from "../models/v1-colorpalette-response.js";
import {
  v1CommentgeneratorResponseSchema,
  type V1CommentgeneratorResponse,
} from "../models/v1-commentgenerator-response.js";
import {
  v1CompanynamegeneratorResponseSchema,
  type V1CompanynamegeneratorResponse,
} from "../models/v1-companynamegenerator-response.js";
import {
  v1CrongeneratorResponseSchema,
  type V1CrongeneratorResponse,
} from "../models/v1-crongenerator-response.js";
import {
  v1CuidgeneratorResponseSchema,
  type V1CuidgeneratorResponse,
} from "../models/v1-cuidgenerator-response.js";
import {
  v1GuidgeneratorResponseSchema,
  type V1GuidgeneratorResponse,
} from "../models/v1-guidgenerator-response.js";
import {
  v1HashtaggeneratorRequestSchema,
  type V1HashtaggeneratorRequest,
} from "../models/v1-hashtaggenerator-request.js";
import {
  v1HashtaggeneratorResponseSchema,
  type V1HashtaggeneratorResponse,
} from "../models/v1-hashtaggenerator-response.js";
import {
  v1ImeigeneratorResponseSchema,
  type V1ImeigeneratorResponse,
} from "../models/v1-imeigenerator-response.js";
import {
  v1InitialismgeneratorRequestSchema,
  type V1InitialismgeneratorRequest,
} from "../models/v1-initialismgenerator-request.js";
import {
  v1InitialismgeneratorResponseSchema,
  type V1InitialismgeneratorResponse,
} from "../models/v1-initialismgenerator-response.js";
import {
  v1JsonschemageneratorRequestSchema,
  type V1JsonschemageneratorRequest,
} from "../models/v1-jsonschemagenerator-request.js";
import {
  v1JsonschemageneratorResponseSchema,
  type V1JsonschemageneratorResponse,
} from "../models/v1-jsonschemagenerator-response.js";
import {
  v1LoremipsumgeneratorResponseSchema,
  type V1LoremipsumgeneratorResponse,
} from "../models/v1-loremipsumgenerator-response.js";
import {
  v1PasswordgeneratorResponseSchema,
  type V1PasswordgeneratorResponse,
} from "../models/v1-passwordgenerator-response.js";
import {
  v1QrcodegeneratorRequestSchema,
  type V1QrcodegeneratorRequest,
} from "../models/v1-qrcodegenerator-request.js";
import {
  v1QrcodegeneratorResponseSchema,
  type V1QrcodegeneratorResponse,
} from "../models/v1-qrcodegenerator-response.js";
import {
  v1RandomgeneratorResponseSchema,
  type V1RandomgeneratorResponse,
} from "../models/v1-randomgenerator-response.js";
import {
  v1RandomidentitygeneratorResponseSchema,
  type V1RandomidentitygeneratorResponse,
} from "../models/v1-randomidentitygenerator-response.js";
import {
  v1RandomusergeneratorResponseSchema,
  type V1RandomusergeneratorResponse,
} from "../models/v1-randomusergenerator-response.js";
import {
  v1RandomwordsResponseSchema,
  type V1RandomwordsResponse,
} from "../models/v1-randomwords-response.js";
import {
  v1ShortcodegeneratorResponseSchema,
  type V1ShortcodegeneratorResponse,
} from "../models/v1-shortcodegenerator-response.js";
import {
  v1SitemapgeneratorRequestSchema,
  type V1SitemapgeneratorRequest,
} from "../models/v1-sitemapgenerator-request.js";
import {
  v1SitemapgeneratorResponseSchema,
  type V1SitemapgeneratorResponse,
} from "../models/v1-sitemapgenerator-response.js";
import {
  v1TotpgeneratorRequestSchema,
  type V1TotpgeneratorRequest,
} from "../models/v1-totpgenerator-request.js";
import {
  v1TotpgeneratorResponseSchema,
  type V1TotpgeneratorResponse,
} from "../models/v1-totpgenerator-response.js";
import {
  v1UlidgeneratorResponseSchema,
  type V1UlidgeneratorResponse,
} from "../models/v1-ulidgenerator-response.js";
import {
  v1UseragentgeneratorResponseSchema,
  type V1UseragentgeneratorResponse,
} from "../models/v1-useragentgenerator-response.js";
import {
  v1UsernamegeneratorResponseSchema,
  type V1UsernamegeneratorResponse,
} from "../models/v1-usernamegenerator-response.js";
import {
  v1UuidgeneratorResponseSchema,
  type V1UuidgeneratorResponse,
} from "../models/v1-uuidgenerator-response.js";
import type { Servers } from "../servers.js";

export class DataGeneration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acronym Generator
   *
   * @remarks
   * Generate an acronym from a phrase by extracting the first letter of each word
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.AcronymgeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acronymgenerator(
    request: DataGeneration.AcronymgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AcronymgeneratorResponse, DataGeneration.AcronymgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/acronymgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "text", value: request.text, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AcronymgeneratorResponseSchema },
        errorFactory: DataGeneration.AcronymgeneratorError,
      },
      options,
    );
  }

  /**
   * Baby Name Generator
   *
   * @remarks
   * Generate a baby's first and middle name, based on the provided gender
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.BabynamegeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  babynamegenerator(
    request: DataGeneration.BabynamegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BabynamegeneratorResponse, DataGeneration.BabynamegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/babynamegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "gender", value: request.gender, schema: s.string() },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "includeAvatar", value: request.includeAvatar, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BabynamegeneratorResponseSchema },
        errorFactory: DataGeneration.BabynamegeneratorError,
      },
      options,
    );
  }

  /**
   * Barcode Generator
   *
   * @remarks
   * Barcode Generator is a simple tool for generating barcodes from data. It returns a URL to the
   * generated image of the barcode.
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.BarcodegeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  barcodegenerator(
    request: DataGeneration.BarcodegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1BarcodegeneratorResponse, DataGeneration.BarcodegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/barcodegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1BarcodegeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1BarcodegeneratorResponseSchema },
        errorFactory: DataGeneration.BarcodegeneratorError,
      },
      options,
    );
  }

  /**
   * Bingo Card Generator
   *
   * @remarks
   * Generate random bingo card with HTML and image
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.BingocardgeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bingocardgenerator(
    request: DataGeneration.BingocardgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1BingocardgeneratorResponse, DataGeneration.BingocardgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/bingocardgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "freeSpace", value: request.freeSpace, schema: s.optional(s.boolean()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BingocardgeneratorResponseSchema },
        errorFactory: DataGeneration.BingocardgeneratorError,
      },
      options,
    );
  }

  /**
   * Boggle Board Generator
   *
   * @remarks
   * Generate random Boggle board with HTML and image
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.BoggleboardgeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  boggleboardgenerator(
    request: DataGeneration.BoggleboardgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1BoggleboardgeneratorResponse, DataGeneration.BoggleboardgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/boggleboardgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "size", value: request.size, schema: s.optional(s.int()) },
          { name: "image", value: request.image, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1BoggleboardgeneratorResponseSchema },
        errorFactory: DataGeneration.BoggleboardgeneratorError,
      },
      options,
    );
  }

  /**
   * Captcha Generator
   *
   * @remarks
   * Captcha Generator is a simple tool for generating captchas. It returns a random string of
   * characters that can be used as a captcha.
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CaptchageneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  captchagenerator(
    options?: RequestOptions,
  ): ApiPromise<V1CaptchageneratorResponse, DataGeneration.CaptchageneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/captchagenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CaptchageneratorResponseSchema },
        errorFactory: DataGeneration.CaptchageneratorError,
      },
      options,
    );
  }

  /**
   * Test Card Generator
   *
   * @remarks
   * Generate a list of test card numbers
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CardgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cardgenerator(
    request: DataGeneration.CardgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CardgeneratorResponse, DataGeneration.CardgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cardgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "brand", value: request.brand, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "includeAvatar", value: request.includeAvatar, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CardgeneratorResponseSchema },
        errorFactory: DataGeneration.CardgeneratorError,
      },
      options,
    );
  }

  /**
   * Chart Generator
   *
   * @remarks
   * Generate a chart with minimal configuration. Just provide type, labels, and datasets with
   * name/values. Colors are auto-assigned.
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.ChartgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chartgenerator(
    request: DataGeneration.ChartgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ChartgeneratorResponse, DataGeneration.ChartgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/chartgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ChartgeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ChartgeneratorResponseSchema },
        errorFactory: DataGeneration.ChartgeneratorError,
      },
      options,
    );
  }

  /**
   * Color Palette Generator
   *
   * @remarks
   * Generate a color palette from a single color
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.ColorpaletteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  colorpalette(
    request: DataGeneration.ColorpaletteRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ColorpaletteResponse, DataGeneration.ColorpaletteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/colorpalette"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "color", value: request.color, schema: s.string() },
          { name: "scheme", value: request.scheme, schema: s.optional(s.string()) },
          { name: "variation", value: request.variation, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "distance", value: request.distance, schema: s.optional(s.float64()) },
          { name: "addComplement", value: request.addComplement, schema: s.optional(s.boolean()) },
          { name: "webSafe", value: request.webSafe, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ColorpaletteResponseSchema },
        errorFactory: DataGeneration.ColorpaletteError,
      },
      options,
    );
  }

  /**
   * Comment Generator
   *
   * @remarks
   * Generate comments for text-based social media posts
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CommentgeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  commentgenerator(
    request: DataGeneration.CommentgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CommentgeneratorResponse, DataGeneration.CommentgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/commentgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "mode", value: request.mode, schema: s.string() },
          { name: "tone", value: request.tone, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "emojis", value: request.emojis, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CommentgeneratorResponseSchema },
        errorFactory: DataGeneration.CommentgeneratorError,
      },
      options,
    );
  }

  /**
   * Company Name Generator
   *
   * @remarks
   * Generate company names based on the specified criteria
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CompanynamegeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  companynamegenerator(
    request: DataGeneration.CompanynamegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CompanynamegeneratorResponse, DataGeneration.CompanynamegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/companynamegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CompanynamegeneratorResponseSchema },
        errorFactory: DataGeneration.CompanynamegeneratorError,
      },
      options,
    );
  }

  /**
   * Cron Expression Generator
   *
   * @remarks
   * Generate cron expressions from natural language schedule descriptions
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CrongeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  crongenerator(
    request: DataGeneration.CrongeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CrongeneratorResponse, DataGeneration.CrongeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/crongenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "schedule", value: request.schedule, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CrongeneratorResponseSchema },
        errorFactory: DataGeneration.CrongeneratorError,
      },
      options,
    );
  }

  /**
   * Cuid Generator
   *
   * @remarks
   * Generate one or more collision-resistant unique identifiers
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.CuidgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cuidgenerator(
    request: DataGeneration.CuidgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1CuidgeneratorResponse, DataGeneration.CuidgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cuidgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "count", value: request.count, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CuidgeneratorResponseSchema },
        errorFactory: DataGeneration.CuidgeneratorError,
      },
      options,
    );
  }

  /**
   * GUID Generator
   *
   * @remarks
   * Generate one or more GUIDs with formatting options
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.GuidgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  guidgenerator(
    request: DataGeneration.GuidgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1GuidgeneratorResponse, DataGeneration.GuidgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/guidgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1GuidgeneratorResponseSchema },
        errorFactory: DataGeneration.GuidgeneratorError,
      },
      options,
    );
  }

  /**
   * Hashtag Generator
   *
   * @remarks
   * Generate hashtags from text
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.HashtaggeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hashtaggenerator(
    request: DataGeneration.HashtaggeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HashtaggeneratorResponse, DataGeneration.HashtaggeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/hashtaggenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1HashtaggeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1HashtaggeneratorResponseSchema },
        errorFactory: DataGeneration.HashtaggeneratorError,
      },
      options,
    );
  }

  /**
   * IMEI Generator
   *
   * @remarks
   * Generate valid IMEI numbers
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.ImeigeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  imeigenerator(
    request: DataGeneration.ImeigeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1ImeigeneratorResponse, DataGeneration.ImeigeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/imeigenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "brand", value: request.brand, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ImeigeneratorResponseSchema },
        errorFactory: DataGeneration.ImeigeneratorError,
      },
      options,
    );
  }

  /**
   * Initialism Generator
   *
   * @remarks
   * Generate initialism from phrase
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.InitialismgeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initialismgenerator(
    request: DataGeneration.InitialismgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1InitialismgeneratorResponse, DataGeneration.InitialismgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/initialismgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1InitialismgeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1InitialismgeneratorResponseSchema },
        errorFactory: DataGeneration.InitialismgeneratorError,
      },
      options,
    );
  }

  /**
   * JSON Schema Generator
   *
   * @remarks
   * Generate a JSON schema from sample JSON data
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.JsonschemageneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jsonschemagenerator(
    request: DataGeneration.JsonschemageneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JsonschemageneratorResponse, DataGeneration.JsonschemageneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/jsonschemagenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1JsonschemageneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1JsonschemageneratorResponseSchema },
        errorFactory: DataGeneration.JsonschemageneratorError,
      },
      options,
    );
  }

  /**
   * Lorem Ipsum Generator
   *
   * @remarks
   * Generate lorem ipsum text with a specified number of sentences or words
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.LoremipsumgeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  loremipsumgenerator(
    request: DataGeneration.LoremipsumgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1LoremipsumgeneratorResponse, DataGeneration.LoremipsumgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/loremipsumgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "paragraphs", value: request.paragraphs, schema: s.optional(s.int()) },
          { name: "startwithlorem", value: request.startwithlorem, schema: s.optional(s.boolean()) },
          { name: "maxlength", value: request.maxlength, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LoremipsumgeneratorResponseSchema },
        errorFactory: DataGeneration.LoremipsumgeneratorError,
      },
      options,
    );
  }

  /**
   * Password Generator
   *
   * @remarks
   * Generate passwords with a specified length and complexity
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.PasswordgeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  passwordgenerator(
    request: DataGeneration.PasswordgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1PasswordgeneratorResponse, DataGeneration.PasswordgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/passwordgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "length", value: request.length, schema: s.optional(s.int()) },
          { name: "complexity", value: request.complexity, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "includeNumbers", value: request.includeNumbers, schema: s.optional(s.boolean()) },
          { name: "includeSymbols", value: request.includeSymbols, schema: s.optional(s.boolean()) },
          { name: "includeUppercase", value: request.includeUppercase, schema: s.optional(s.boolean()) },
          { name: "includeLowercase", value: request.includeLowercase, schema: s.optional(s.boolean()) },
          { name: "excludeSimilar", value: request.excludeSimilar, schema: s.optional(s.boolean()) },
          { name: "excludeAmbiguous", value: request.excludeAmbiguous, schema: s.optional(s.boolean()) },
          { name: "mixedCase", value: request.mixedCase, schema: s.optional(s.boolean()) },
          { name: "strict", value: request.strict, schema: s.optional(s.boolean()) },
          { name: "wordCount", value: request.wordCount, schema: s.optional(s.int()) },
          { name: "separator", value: request.separator, schema: s.optional(s.string()) },
          { name: "capitalize", value: request.capitalize, schema: s.optional(s.boolean()) },
          { name: "analyze", value: request.analyze, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PasswordgeneratorResponseSchema },
        errorFactory: DataGeneration.PasswordgeneratorError,
      },
      options,
    );
  }

  /**
   * QR Code Generator
   *
   * @remarks
   * Generate a styled QR code with custom colors, logo, and design options
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.QrcodegeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  qrcodegenerator(
    request: DataGeneration.QrcodegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1QrcodegeneratorResponse, DataGeneration.QrcodegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/qrcodegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1QrcodegeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1QrcodegeneratorResponseSchema },
        errorFactory: DataGeneration.QrcodegeneratorError,
      },
      options,
    );
  }

  /**
   * Random Data Generator
   *
   * @remarks
   * Generate random data of various types
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.RandomgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomgenerator(
    request: DataGeneration.RandomgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1RandomgeneratorResponse, DataGeneration.RandomgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "includeAvatar", value: request.includeAvatar, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomgeneratorResponseSchema },
        errorFactory: DataGeneration.RandomgeneratorError,
      },
      options,
    );
  }

  /**
   * Random Identity Generator
   *
   * @remarks
   * Generate a random identity with a name, address, and more
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.RandomidentitygeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomidentitygenerator(
    request: DataGeneration.RandomidentitygeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1RandomidentitygeneratorResponse, DataGeneration.RandomidentitygeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomidentitygenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "includeAvatar", value: request.includeAvatar, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomidentitygeneratorResponseSchema },
        errorFactory: DataGeneration.RandomidentitygeneratorError,
      },
      options,
    );
  }

  /**
   * Random User Generator
   *
   * @remarks
   * Generate random user data
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.RandomusergeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomusergenerator(
    request: DataGeneration.RandomusergeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1RandomusergeneratorResponse, DataGeneration.RandomusergeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomusergenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "includeAvatar", value: request.includeAvatar, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomusergeneratorResponseSchema },
        errorFactory: DataGeneration.RandomusergeneratorError,
      },
      options,
    );
  }

  /**
   * Random Word
   *
   * @remarks
   * Get a random word, including its definition and pronunciation
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.RandomwordsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  randomwords(options?: RequestOptions): ApiPromise<V1RandomwordsResponse, DataGeneration.RandomwordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/randomwords"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1RandomwordsResponseSchema },
        errorFactory: DataGeneration.RandomwordsError,
      },
      options,
    );
  }

  /**
   * Short Code Generator
   *
   * @remarks
   * Generate short alphanumeric codes with customizable options
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.ShortcodegeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  shortcodegenerator(
    request: DataGeneration.ShortcodegeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1ShortcodegeneratorResponse, DataGeneration.ShortcodegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/shortcodegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "length", value: request.length, schema: s.optional(s.int()) },
          { name: "charset", value: request.charset, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ShortcodegeneratorResponseSchema },
        errorFactory: DataGeneration.ShortcodegeneratorError,
      },
      options,
    );
  }

  /**
   * Sitemap Generator
   *
   * @remarks
   * Generate an XML sitemap from URLs
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.SitemapgeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sitemapgenerator(
    request: DataGeneration.SitemapgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SitemapgeneratorResponse, DataGeneration.SitemapgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/sitemapgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SitemapgeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SitemapgeneratorResponseSchema },
        errorFactory: DataGeneration.SitemapgeneratorError,
      },
      options,
    );
  }

  /**
   * TOTP Generator
   *
   * @remarks
   * Generate time-based one-time password
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.TotpgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  totpgenerator(
    request: DataGeneration.TotpgeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TotpgeneratorResponse, DataGeneration.TotpgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/totpgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TotpgeneratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TotpgeneratorResponseSchema },
        errorFactory: DataGeneration.TotpgeneratorError,
      },
      options,
    );
  }

  /**
   * ULID Generator
   *
   * @remarks
   * Generate one or more ULIDs
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.UlidgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ulidgenerator(
    request: DataGeneration.UlidgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1UlidgeneratorResponse, DataGeneration.UlidgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/ulidgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "timestamp", value: request.timestamp, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UlidgeneratorResponseSchema },
        errorFactory: DataGeneration.UlidgeneratorError,
      },
      options,
    );
  }

  /**
   * User Agent Generator
   *
   * @remarks
   * Generate a random user agent string
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.UseragentgeneratorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  useragentgenerator(
    request: DataGeneration.UseragentgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1UseragentgeneratorResponse, DataGeneration.UseragentgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/useragentgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "device", value: request.device, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UseragentgeneratorResponseSchema },
        errorFactory: DataGeneration.UseragentgeneratorError,
      },
      options,
    );
  }

  /**
   * Username Generator
   *
   * @remarks
   * Generate usernames based on the specified criteria
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.UsernamegeneratorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usernamegenerator(
    request: DataGeneration.UsernamegeneratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UsernamegeneratorResponse, DataGeneration.UsernamegeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/usernamegenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "email", value: request.email, schema: s.string() },
          { name: "count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UsernamegeneratorResponseSchema },
        errorFactory: DataGeneration.UsernamegeneratorError,
      },
      options,
    );
  }

  /**
   * UUID Generator
   *
   * @remarks
   * Generate one or more RFC 4122 version 4 UUIDs
   *
   * @returns Successful Response
   *
   * @throws {@link DataGeneration.UuidgeneratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uuidgenerator(
    request: DataGeneration.UuidgeneratorRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1UuidgeneratorResponse, DataGeneration.UuidgeneratorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/uuidgenerator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "count", value: request.count, schema: s.optional(s.int()) },
          { name: "version", value: request.version, schema: s.optional(s.int()) },
          { name: "format", value: request.format, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UuidgeneratorResponseSchema },
        errorFactory: DataGeneration.UuidgeneratorError,
      },
      options,
    );
  }
}

export namespace DataGeneration {
  export type AcronymgeneratorRequest = {
    /** The phrase to generate an acronym from (must contain at least 2 words) */
    text: string;
  };

  export class AcronymgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcronymgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BabynamegeneratorRequest = {
    /** The gender for the generated names */
    gender: string;
    /** The number of names to generate */
    count?: number;
    /** Include an AI-generated child face avatar matching gender */
    includeAvatar?: boolean;
  };

  export class BabynamegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BabynamegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BarcodegeneratorRequest = {
    body: V1BarcodegeneratorRequest;
  };

  export class BarcodegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BarcodegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BingocardgeneratorRequest = {
    /** Card size (3x3 to 10x10) */
    size?: number;
    /** Include free space in center */
    freeSpace?: boolean;
    /** Set to true to generate a downloadable bingo card image */
    image?: boolean;
  };

  export class BingocardgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BingocardgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BoggleboardgeneratorRequest = {
    /** Board size */
    size?: number;
    /** Set to true to generate a downloadable board image */
    image?: boolean;
  };

  export class BoggleboardgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BoggleboardgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class CaptchageneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CaptchageneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CardgeneratorRequest = {
    /** The brand of the card to generate */
    brand?: string;
    /** The number of test card numbers to generate */
    count?: number;
    /** Include an AI-generated face avatar for the card owner */
    includeAvatar?: boolean;
  };

  export class CardgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CardgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ChartgeneratorRequest = {
    body: V1ChartgeneratorRequest;
  };

  export class ChartgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChartgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ColorpaletteRequest = {
    /** The base color to generate the palette from (HEX format without #) */
    color: string;
    /** The color scheme type */
    scheme?: string;
    /** The color variation */
    variation?: string;
    /**
     * Caps how many colors are returned (1-16). Each scheme has its own ceiling and count cannot
     * raise it - mono yields 4, contrast 8, triade and analogic 12, tetrade 16. The colorCount
     * field reports how many were actually returned. Free tier limited to 5 colors
     */
    count?: number;
    /** Color spacing distance (0-1). Affects triade, tetrade, and analogic schemes */
    distance?: number;
    /** Add complement color to analogic scheme */
    addComplement?: boolean;
    /** Return web-safe colors only */
    webSafe?: boolean;
  };

  export class ColorpaletteError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ColorpaletteError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CommentgeneratorRequest = {
    /** The mode of comment generation */
    mode: string;
    /** The tone of the comments */
    tone?: string;
    /** The number of comments to generate (max 10) */
    count?: number;
    /** Whether to include emojis in the comments */
    emojis?: boolean;
  };

  export class CommentgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CommentgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CompanynamegeneratorRequest = {
    /** The keyword to generate company names from */
    keyword: string;
    /** The number of company names to generate */
    count?: number;
  };

  export class CompanynamegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CompanynamegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CrongeneratorRequest = {
    /** Natural language description of the schedule (max 200 characters) */
    schedule: string;
  };

  export class CrongeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CrongeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CuidgeneratorRequest = {
    /** Number of Cuids to generate */
    count?: number;
  };

  export class CuidgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CuidgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GuidgeneratorRequest = {
    /** Number of GUIDs to generate */
    count?: number;
    /** Output format */
    format?: string;
  };

  export class GuidgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GuidgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HashtaggeneratorRequest = {
    body: V1HashtaggeneratorRequest;
  };

  export class HashtaggeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HashtaggeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ImeigeneratorRequest = {
    /** Filter by manufacturer brand (e.g., Samsung, Apple, Nokia) */
    brand?: string;
    /** Number of IMEIs to generate */
    count?: number;
  };

  export class ImeigeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImeigeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type InitialismgeneratorRequest = {
    body: V1InitialismgeneratorRequest;
  };

  export class InitialismgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitialismgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JsonschemageneratorRequest = {
    body: V1JsonschemageneratorRequest;
  };

  export class JsonschemageneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JsonschemageneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LoremipsumgeneratorRequest = {
    /** The number of paragraphs to generate */
    paragraphs?: number;
    /** Start the text with 'Lorem ipsum dolor sit amet' */
    startwithlorem?: boolean;
    /** The maximum length of the generated text (0 for no limit) */
    maxlength?: number;
  };

  export class LoremipsumgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LoremipsumgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PasswordgeneratorRequest = {
    /** The number of passwords to generate */
    count?: number;
    /** The length of the password to generate */
    length?: number;
    /** The complexity of the password. Only applies when type is random */
    complexity?: string;
    /**
     * The kind of password to generate. random uses the complexity preset, pronounceable builds
     * readable syllables, passphrase joins dictionary words, and custom honours the include/exclude
     * switches below
     */
    type?: string;
    /** Include digits. Applies to custom and pronounceable, and to random at simple complexity */
    includeNumbers?: boolean;
    /** Include punctuation symbols. Applies to custom, and to random at medium complexity */
    includeSymbols?: boolean;
    /** Include uppercase letters. Applies to custom, and to random at simple complexity */
    includeUppercase?: boolean;
    /**
     * Include lowercase letters in a custom password. Set false to build from the other character
     * sets only
     */
    includeLowercase?: boolean;
    /**
     * Exclude characters that are easy to confuse when read aloud or typed (i, l, 1, L, o, 0, O)
     */
    excludeSimilar?: boolean;
    /**
     * Exclude brackets, slashes, quotes and other characters that need escaping in shells and
     * config files
     */
    excludeAmbiguous?: boolean;
    /** Randomly capitalise letters in a pronounceable password */
    mixedCase?: boolean;
    /** Guarantee at least one character from every enabled set rather than leaving it to chance */
    strict?: boolean;
    /** How many words a passphrase contains. Only applies when type is passphrase */
    wordCount?: number;
    /** The character placed between passphrase words. Only applies when type is passphrase */
    separator?: string;
    /** Capitalise each word of a passphrase. Only applies when type is passphrase */
    capitalize?: boolean;
    /** Return a strength analysis alongside each password */
    analyze?: boolean;
  };

  export class PasswordgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PasswordgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type QrcodegeneratorRequest = {
    body: V1QrcodegeneratorRequest;
  };

  export class QrcodegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<QrcodegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RandomgeneratorRequest = {
    /** The type of random data to generate */
    type?: string;
    /** The number of random data to generate (1 to 100) */
    count?: number;
    /** Include an AI-generated face avatar (only applies when type=name) */
    includeAvatar?: boolean;
  };

  export class RandomgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RandomidentitygeneratorRequest = {
    /** The number of identities to create */
    count?: number;
    /** Include an AI-generated face avatar for each identity */
    includeAvatar?: boolean;
  };

  export class RandomidentitygeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomidentitygeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RandomusergeneratorRequest = {
    /** The number of users to generate */
    count?: number;
    /** Include an AI-generated face avatar matching user's gender and age */
    includeAvatar?: boolean;
  };

  export class RandomusergeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomusergeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export class RandomwordsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RandomwordsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ShortcodegeneratorRequest = {
    /** Number of codes to generate */
    count?: number;
    /** Length of each code */
    length?: number;
    /** Character set */
    charset?: string;
  };

  export class ShortcodegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ShortcodegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SitemapgeneratorRequest = {
    body: V1SitemapgeneratorRequest;
  };

  export class SitemapgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SitemapgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TotpgeneratorRequest = {
    body: V1TotpgeneratorRequest;
  };

  export class TotpgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TotpgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UlidgeneratorRequest = {
    /** Number of ULIDs to generate */
    count?: number;
    /** Custom timestamp in milliseconds (optional, uses current time if not specified) */
    timestamp?: number;
  };

  export class UlidgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UlidgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UseragentgeneratorRequest = {
    /** The device type for the user agent string */
    device?: string;
  };

  export class UseragentgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UseragentgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UsernamegeneratorRequest = {
    /** The email address to generate usernames from */
    email: string;
    /** The number of usernames to generate */
    count?: number;
  };

  export class UsernamegeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsernamegeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UuidgeneratorRequest = {
    /** Number of UUIDs to generate */
    count?: number;
    /** UUID version (only version 4 currently supported) */
    version?: number;
    /** Output format */
    format?: string;
  };

  export class UuidgeneratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UuidgeneratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
