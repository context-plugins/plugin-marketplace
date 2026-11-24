import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1AcronymexpanderResponseSchema,
  type V1AcronymexpanderResponse,
} from "../models/v1-acronymexpander-response.js";
import {
  v1AnagramdetectorResponseSchema,
  type V1AnagramdetectorResponse,
} from "../models/v1-anagramdetector-response.js";
import { v1AntonymResponseSchema, type V1AntonymResponse } from "../models/v1-antonym-response.js";
import { v1CronparserResponseSchema, type V1CronparserResponse } from "../models/v1-cronparser-response.js";
import { v1DatamaskingRequestSchema, type V1DatamaskingRequest } from "../models/v1-datamasking-request.js";
import {
  v1DatamaskingResponseSchema,
  type V1DatamaskingResponse,
} from "../models/v1-datamasking-response.js";
import { v1DidyoumeanResponseSchema, type V1DidyoumeanResponse } from "../models/v1-didyoumean-response.js";
import {
  v1EmojidecoratorRequestSchema,
  type V1EmojidecoratorRequest,
} from "../models/v1-emojidecorator-request.js";
import {
  v1EmojidecoratorResponseSchema,
  type V1EmojidecoratorResponse,
} from "../models/v1-emojidecorator-response.js";
import {
  v1GibberishdetectorRequestSchema,
  type V1GibberishdetectorRequest,
} from "../models/v1-gibberishdetector-request.js";
import {
  v1GibberishdetectorResponseSchema,
  type V1GibberishdetectorResponse,
} from "../models/v1-gibberishdetector-response.js";
import {
  v1GrammarcheckRequestSchema,
  type V1GrammarcheckRequest,
} from "../models/v1-grammarcheck-request.js";
import {
  v1GrammarcheckResponseSchema,
  type V1GrammarcheckResponse,
} from "../models/v1-grammarcheck-response.js";
import {
  v1IsbnvalidatorResponseSchema,
  type V1IsbnvalidatorResponse,
} from "../models/v1-isbnvalidator-response.js";
import {
  v1JsonschemavalidatorRequestSchema,
  type V1JsonschemavalidatorRequest,
} from "../models/v1-jsonschemavalidator-request.js";
import {
  v1JsonschemavalidatorResponseSchema,
  type V1JsonschemavalidatorResponse,
} from "../models/v1-jsonschemavalidator-response.js";
import {
  v1KeywordextractorRequestSchema,
  type V1KeywordextractorRequest,
} from "../models/v1-keywordextractor-request.js";
import {
  v1KeywordextractorResponseSchema,
  type V1KeywordextractorResponse,
} from "../models/v1-keywordextractor-response.js";
import { v1LeetspeakRequestSchema, type V1LeetspeakRequest } from "../models/v1-leetspeak-request.js";
import { v1LeetspeakResponseSchema, type V1LeetspeakResponse } from "../models/v1-leetspeak-response.js";
import { v1LemmatizerRequestSchema, type V1LemmatizerRequest } from "../models/v1-lemmatizer-request.js";
import { v1LemmatizerResponseSchema, type V1LemmatizerResponse } from "../models/v1-lemmatizer-response.js";
import {
  v1LevenshteindistanceRequestSchema,
  type V1LevenshteindistanceRequest,
} from "../models/v1-levenshteindistance-request.js";
import {
  v1LevenshteindistanceResponseSchema,
  type V1LevenshteindistanceResponse,
} from "../models/v1-levenshteindistance-response.js";
import { v1LexiconResponseSchema, type V1LexiconResponse } from "../models/v1-lexicon-response.js";
import { v1LinesorterRequestSchema, type V1LinesorterRequest } from "../models/v1-linesorter-request.js";
import { v1LinesorterResponseSchema, type V1LinesorterResponse } from "../models/v1-linesorter-response.js";
import {
  v1MarkdownlinkextractorRequestSchema,
  type V1MarkdownlinkextractorRequest,
} from "../models/v1-markdownlinkextractor-request.js";
import {
  v1MarkdownlinkextractorResponseSchema,
  type V1MarkdownlinkextractorResponse,
} from "../models/v1-markdownlinkextractor-response.js";
import {
  v1PalindromecheckerResponseSchema,
  type V1PalindromecheckerResponse,
} from "../models/v1-palindromechecker-response.js";
import {
  v1PartsofspeechRequestSchema,
  type V1PartsofspeechRequest,
} from "../models/v1-partsofspeech-request.js";
import {
  v1PartsofspeechResponseSchema,
  type V1PartsofspeechResponse,
} from "../models/v1-partsofspeech-response.js";
import { v1PhoneticResponseSchema, type V1PhoneticResponse } from "../models/v1-phonetic-response.js";
import { v1PiglatinRequestSchema, type V1PiglatinRequest } from "../models/v1-piglatin-request.js";
import { v1PiglatinResponseSchema, type V1PiglatinResponse } from "../models/v1-piglatin-response.js";
import {
  v1ProfanityfilterRequestSchema,
  type V1ProfanityfilterRequest,
} from "../models/v1-profanityfilter-request.js";
import {
  v1ProfanityfilterResponseSchema,
  type V1ProfanityfilterResponse,
} from "../models/v1-profanityfilter-response.js";
import {
  v1ReadabilityscoreRequestSchema,
  type V1ReadabilityscoreRequest,
} from "../models/v1-readabilityscore-request.js";
import {
  v1ReadabilityscoreResponseSchema,
  type V1ReadabilityscoreResponse,
} from "../models/v1-readabilityscore-response.js";
import { v1ReadingtimeRequestSchema, type V1ReadingtimeRequest } from "../models/v1-readingtime-request.js";
import {
  v1ReadingtimeResponseSchema,
  type V1ReadingtimeResponse,
} from "../models/v1-readingtime-response.js";
import { v1RegextesterRequestSchema, type V1RegextesterRequest } from "../models/v1-regextester-request.js";
import {
  v1RegextesterResponseSchema,
  type V1RegextesterResponse,
} from "../models/v1-regextester-response.js";
import {
  v1RemovepunctuationRequestSchema,
  type V1RemovepunctuationRequest,
} from "../models/v1-removepunctuation-request.js";
import {
  v1RemovepunctuationResponseSchema,
  type V1RemovepunctuationResponse,
} from "../models/v1-removepunctuation-response.js";
import { v1ReversetextRequestSchema, type V1ReversetextRequest } from "../models/v1-reversetext-request.js";
import {
  v1ReversetextResponseSchema,
  type V1ReversetextResponse,
} from "../models/v1-reversetext-response.js";
import { v1SlugifyRequestSchema, type V1SlugifyRequest } from "../models/v1-slugify-request.js";
import { v1SlugifyResponseSchema, type V1SlugifyResponse } from "../models/v1-slugify-response.js";
import {
  v1SpellcheckerRequestSchema,
  type V1SpellcheckerRequest,
} from "../models/v1-spellchecker-request.js";
import {
  v1SpellcheckerResponseSchema,
  type V1SpellcheckerResponse,
} from "../models/v1-spellchecker-response.js";
import {
  v1SyllablecounterRequestSchema,
  type V1SyllablecounterRequest,
} from "../models/v1-syllablecounter-request.js";
import {
  v1SyllablecounterResponseSchema,
  type V1SyllablecounterResponse,
} from "../models/v1-syllablecounter-response.js";
import {
  v1TaxidvalidatorResponseSchema,
  type V1TaxidvalidatorResponse,
} from "../models/v1-taxidvalidator-response.js";
import {
  v1TenseconverterRequestSchema,
  type V1TenseconverterRequest,
} from "../models/v1-tenseconverter-request.js";
import {
  v1TenseconverterResponseSchema,
  type V1TenseconverterResponse,
} from "../models/v1-tenseconverter-response.js";
import {
  v1TextlanguageRequestSchema,
  type V1TextlanguageRequest,
} from "../models/v1-textlanguage-request.js";
import {
  v1TextlanguageResponseSchema,
  type V1TextlanguageResponse,
} from "../models/v1-textlanguage-response.js";
import {
  v1TextsimilarityRequestSchema,
  type V1TextsimilarityRequest,
} from "../models/v1-textsimilarity-request.js";
import {
  v1TextsimilarityResponseSchema,
  type V1TextsimilarityResponse,
} from "../models/v1-textsimilarity-response.js";
import { v1TextstylerRequestSchema, type V1TextstylerRequest } from "../models/v1-textstyler-request.js";
import { v1TextstylerResponseSchema, type V1TextstylerResponse } from "../models/v1-textstyler-response.js";
import {
  v1TextsummarizerRequestSchema,
  type V1TextsummarizerRequest,
} from "../models/v1-textsummarizer-request.js";
import {
  v1TextsummarizerResponseSchema,
  type V1TextsummarizerResponse,
} from "../models/v1-textsummarizer-response.js";
import { v1TexttoemojiRequestSchema, type V1TexttoemojiRequest } from "../models/v1-texttoemoji-request.js";
import {
  v1TexttoemojiResponseSchema,
  type V1TexttoemojiResponse,
} from "../models/v1-texttoemoji-response.js";
import {
  v1TitlecapitalizationRequestSchema,
  type V1TitlecapitalizationRequest,
} from "../models/v1-titlecapitalization-request.js";
import {
  v1TitlecapitalizationResponseSchema,
  type V1TitlecapitalizationResponse,
} from "../models/v1-titlecapitalization-response.js";
import { v1TranslatorRequestSchema, type V1TranslatorRequest } from "../models/v1-translator-request.js";
import { v1TranslatorResponseSchema, type V1TranslatorResponse } from "../models/v1-translator-response.js";
import {
  v1VowelcounterRequestSchema,
  type V1VowelcounterRequest,
} from "../models/v1-vowelcounter-request.js";
import {
  v1VowelcounterResponseSchema,
  type V1VowelcounterResponse,
} from "../models/v1-vowelcounter-response.js";
import {
  v1WebsitereadabilityRequestSchema,
  type V1WebsitereadabilityRequest,
} from "../models/v1-websitereadability-request.js";
import {
  v1WebsitereadabilityResponseSchema,
  type V1WebsitereadabilityResponse,
} from "../models/v1-websitereadability-response.js";
import {
  v1WordoppositeResponseSchema,
  type V1WordoppositeResponse,
} from "../models/v1-wordopposite-response.js";
import {
  v1WordpronunciationResponseSchema,
  type V1WordpronunciationResponse,
} from "../models/v1-wordpronunciation-response.js";
import { v1WordrhymesResponseSchema, type V1WordrhymesResponse } from "../models/v1-wordrhymes-response.js";
import type { Servers } from "../servers.js";

export class TextProcessing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Acronym Expander
   *
   * @remarks
   * Expand an acronym to its full meaning with AI assistance
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.AcronymexpanderError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acronymexpander(
    request: TextProcessing.AcronymexpanderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AcronymexpanderResponse, TextProcessing.AcronymexpanderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/acronymexpander"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "acronym", value: request.acronym, schema: s.string() },
          { name: "context", value: request.context, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AcronymexpanderResponseSchema },
        errorFactory: TextProcessing.AcronymexpanderError,
      },
      options,
    );
  }

  /**
   * Anagram Detector
   *
   * @remarks
   * Check if two texts are anagrams with detailed analysis
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.AnagramdetectorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  anagramdetector(
    request: TextProcessing.AnagramdetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AnagramdetectorResponse, TextProcessing.AnagramdetectorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/anagramdetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text1", value: request.text1, schema: s.string() },
          { name: "text2", value: request.text2, schema: s.string() },
          { name: "ignorecase", value: request.ignorecase, schema: s.optional(s.boolean()) },
          { name: "ignorespaces", value: request.ignorespaces, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AnagramdetectorResponseSchema },
        errorFactory: TextProcessing.AnagramdetectorError,
      },
      options,
    );
  }

  /**
   * Antonym Finder
   *
   * @remarks
   * Antonym is a simple tool for getting the antonyms of a word. It returns a list of antonyms for
   * the given word.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.AntonymError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  antonym(
    request: TextProcessing.AntonymRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AntonymResponse, TextProcessing.AntonymError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/antonym"),
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
        success: { kind: "json", schema: v1AntonymResponseSchema },
        errorFactory: TextProcessing.AntonymError,
      },
      options,
    );
  }

  /**
   * Cron Expression Parser
   *
   * @remarks
   * Parse and validate cron expressions with detailed field analysis
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.CronparserError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cronparser(
    request: TextProcessing.CronparserRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CronparserResponse, TextProcessing.CronparserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cronparser"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "expression", value: request.expression, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CronparserResponseSchema },
        errorFactory: TextProcessing.CronparserError,
      },
      options,
    );
  }

  /**
   * Data Masking
   *
   * @remarks
   * Detect and mask sensitive information in text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.DatamaskingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datamasking(
    request: TextProcessing.DatamaskingRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DatamaskingResponse, TextProcessing.DatamaskingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/datamasking"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1DatamaskingRequestSchema },
      },
      {
        success: { kind: "json", schema: v1DatamaskingResponseSchema },
        errorFactory: TextProcessing.DatamaskingError,
      },
      options,
    );
  }

  /**
   * Did You Mean
   *
   * @remarks
   * Did You Mean is a simple tool for correcting spelling mistakes. It returns the corrected text.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.DidyoumeanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  didyoumean(
    request: TextProcessing.DidyoumeanRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DidyoumeanResponse, TextProcessing.DidyoumeanError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/didyoumean"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "query", value: request.query, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DidyoumeanResponseSchema },
        errorFactory: TextProcessing.DidyoumeanError,
      },
      options,
    );
  }

  /**
   * Emoji Decorator
   *
   * @remarks
   * Emoji Decorator is a simple tool for decorating text with emojis. It returns the text decorated
   * with emojis.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.EmojidecoratorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emojidecorator(
    request: TextProcessing.EmojidecoratorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1EmojidecoratorResponse, TextProcessing.EmojidecoratorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/emojidecorator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1EmojidecoratorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1EmojidecoratorResponseSchema },
        errorFactory: TextProcessing.EmojidecoratorError,
      },
      options,
    );
  }

  /**
   * Gibberish Detector
   *
   * @remarks
   * Analyze text to detect gibberish content
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.GibberishdetectorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  gibberishdetector(
    request: TextProcessing.GibberishdetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GibberishdetectorResponse, TextProcessing.GibberishdetectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/gibberishdetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1GibberishdetectorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1GibberishdetectorResponseSchema },
        errorFactory: TextProcessing.GibberishdetectorError,
      },
      options,
    );
  }

  /**
   * Grammar Check
   *
   * @remarks
   * Grammar Check is a simple tool for checking the grammar and spelling of a text. It returns the
   * corrected text.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.GrammarcheckError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  grammarcheck(
    request: TextProcessing.GrammarcheckRequest,
    options?: RequestOptions,
  ): ApiPromise<V1GrammarcheckResponse, TextProcessing.GrammarcheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/grammarcheck"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1GrammarcheckRequestSchema },
      },
      {
        success: { kind: "json", schema: v1GrammarcheckResponseSchema },
        errorFactory: TextProcessing.GrammarcheckError,
      },
      options,
    );
  }

  /**
   * ISBN Validator
   *
   * @remarks
   * Validate and parse ISBN-10 or ISBN-13 numbers
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.IsbnvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  isbnvalidator(
    request: TextProcessing.IsbnvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1IsbnvalidatorResponse, TextProcessing.IsbnvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/isbnvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "isbn", value: request.isbn, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1IsbnvalidatorResponseSchema },
        errorFactory: TextProcessing.IsbnvalidatorError,
      },
      options,
    );
  }

  /**
   * JSON Schema Validator
   *
   * @remarks
   * Validate JSON data against a JSON schema
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.JsonschemavalidatorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jsonschemavalidator(
    request: TextProcessing.JsonschemavalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1JsonschemavalidatorResponse, TextProcessing.JsonschemavalidatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/jsonschemavalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1JsonschemavalidatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1JsonschemavalidatorResponseSchema },
        errorFactory: TextProcessing.JsonschemavalidatorError,
      },
      options,
    );
  }

  /**
   * Keyword Extractor
   *
   * @remarks
   * Extract keywords from a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.KeywordextractorError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  keywordextractor(
    request: TextProcessing.KeywordextractorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1KeywordextractorResponse, TextProcessing.KeywordextractorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/keywordextractor"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1KeywordextractorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1KeywordextractorResponseSchema },
        errorFactory: TextProcessing.KeywordextractorError,
      },
      options,
    );
  }

  /**
   * Leet Speak
   *
   * @remarks
   * Leet Speak is a simple tool for encoding and decoding Leet Speak. It returns the encoded or
   * decoded Leet Speak.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.LeetspeakError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  leetspeak(
    request: TextProcessing.LeetspeakRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LeetspeakResponse, TextProcessing.LeetspeakError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/leetspeak"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LeetspeakRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LeetspeakResponseSchema },
        errorFactory: TextProcessing.LeetspeakError,
      },
      options,
    );
  }

  /**
   * Text Lemmatizer
   *
   * @remarks
   * Lemmatize text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.LemmatizerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lemmatizer(
    request: TextProcessing.LemmatizerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LemmatizerResponse, TextProcessing.LemmatizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/lemmatizer"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LemmatizerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LemmatizerResponseSchema },
        errorFactory: TextProcessing.LemmatizerError,
      },
      options,
    );
  }

  /**
   * Levenshtein Distance
   *
   * @remarks
   * Calculate Levenshtein distance between two strings
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.LevenshteindistanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  levenshteindistance(
    request: TextProcessing.LevenshteindistanceRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LevenshteindistanceResponse, TextProcessing.LevenshteindistanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/levenshteindistance"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LevenshteindistanceRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LevenshteindistanceResponseSchema },
        errorFactory: TextProcessing.LevenshteindistanceError,
      },
      options,
    );
  }

  /**
   * Word Lexicon Analyzer
   *
   * @remarks
   * Lexicon is a simple tool for analyzing words. It returns various properties of the word.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.LexiconError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lexicon(
    request: TextProcessing.LexiconRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LexiconResponse, TextProcessing.LexiconError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/lexicon"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "word", value: request.word, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LexiconResponseSchema },
        errorFactory: TextProcessing.LexiconError,
      },
      options,
    );
  }

  /**
   * Line Sorter
   *
   * @remarks
   * Sort lines of text alphabetically
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.LinesorterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linesorter(
    request: TextProcessing.LinesorterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LinesorterResponse, TextProcessing.LinesorterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/linesorter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LinesorterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LinesorterResponseSchema },
        errorFactory: TextProcessing.LinesorterError,
      },
      options,
    );
  }

  /**
   * Markdown Link Extractor
   *
   * @remarks
   * Parse markdown and extract all links with categorization
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.MarkdownlinkextractorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  markdownlinkextractor(
    request: TextProcessing.MarkdownlinkextractorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1MarkdownlinkextractorResponse, TextProcessing.MarkdownlinkextractorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/markdownlinkextractor"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1MarkdownlinkextractorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1MarkdownlinkextractorResponseSchema },
        errorFactory: TextProcessing.MarkdownlinkextractorError,
      },
      options,
    );
  }

  /**
   * Palindrome Checker
   *
   * @remarks
   * Check if text is a palindrome with customizable options
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.PalindromecheckerError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  palindromechecker(
    request: TextProcessing.PalindromecheckerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PalindromecheckerResponse, TextProcessing.PalindromecheckerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/palindromechecker"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "text", value: request.text, schema: s.string() },
          { name: "ignorecase", value: request.ignorecase, schema: s.optional(s.boolean()) },
          { name: "ignorespaces", value: request.ignorespaces, schema: s.optional(s.boolean()) },
          { name: "ignorepunctuation", value: request.ignorepunctuation, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PalindromecheckerResponseSchema },
        errorFactory: TextProcessing.PalindromecheckerError,
      },
      options,
    );
  }

  /**
   * Parts Of Speech
   *
   * @remarks
   * Extract nouns, verbs, adjectives, adverbs, etc. from text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.PartsofspeechError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partsofspeech(
    request: TextProcessing.PartsofspeechRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PartsofspeechResponse, TextProcessing.PartsofspeechError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/partsofspeech"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1PartsofspeechRequestSchema },
      },
      {
        success: { kind: "json", schema: v1PartsofspeechResponseSchema },
        errorFactory: TextProcessing.PartsofspeechError,
      },
      options,
    );
  }

  /**
   * Phonetic Encoder
   *
   * @remarks
   * Get phonetic codes for a word
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.PhoneticError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  phonetic(
    request: TextProcessing.PhoneticRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PhoneticResponse, TextProcessing.PhoneticError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/phonetic"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "word", value: request.word, schema: s.string() },
          { name: "algorithm", value: request.algorithm, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PhoneticResponseSchema },
        errorFactory: TextProcessing.PhoneticError,
      },
      options,
    );
  }

  /**
   * Pig Latin
   *
   * @remarks
   * Pig Latin is a simple tool for encoding Pig Latin. It returns the encoded Pig Latin.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.PiglatinError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  piglatin(
    request: TextProcessing.PiglatinRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PiglatinResponse, TextProcessing.PiglatinError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/piglatin"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1PiglatinRequestSchema },
      },
      {
        success: { kind: "json", schema: v1PiglatinResponseSchema },
        errorFactory: TextProcessing.PiglatinError,
      },
      options,
    );
  }

  /**
   * Profanity Filter
   *
   * @remarks
   * Filter out profanity words from a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.ProfanityfilterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profanityfilter(
    request: TextProcessing.ProfanityfilterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ProfanityfilterResponse, TextProcessing.ProfanityfilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/profanityfilter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ProfanityfilterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ProfanityfilterResponseSchema },
        errorFactory: TextProcessing.ProfanityfilterError,
      },
      options,
    );
  }

  /**
   * Text Readability Score
   *
   * @remarks
   * Calculate the readability score of text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.ReadabilityscoreError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readabilityscore(
    request: TextProcessing.ReadabilityscoreRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ReadabilityscoreResponse, TextProcessing.ReadabilityscoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/readabilityscore"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ReadabilityscoreRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ReadabilityscoreResponseSchema },
        errorFactory: TextProcessing.ReadabilityscoreError,
      },
      options,
    );
  }

  /**
   * Reading Time Calculator
   *
   * @remarks
   * Calculate estimated reading time for text content
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.ReadingtimeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readingtime(
    request: TextProcessing.ReadingtimeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ReadingtimeResponse, TextProcessing.ReadingtimeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/readingtime"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ReadingtimeRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ReadingtimeResponseSchema },
        errorFactory: TextProcessing.ReadingtimeError,
      },
      options,
    );
  }

  /**
   * Regex Tester
   *
   * @remarks
   * Test regular expressions with detailed analysis and results
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.RegextesterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regextester(
    request: TextProcessing.RegextesterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RegextesterResponse, TextProcessing.RegextesterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/regextester"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1RegextesterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1RegextesterResponseSchema },
        errorFactory: TextProcessing.RegextesterError,
      },
      options,
    );
  }

  /**
   * Remove Punctuation
   *
   * @remarks
   * Remove all punctuation marks from text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.RemovepunctuationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removepunctuation(
    request: TextProcessing.RemovepunctuationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RemovepunctuationResponse, TextProcessing.RemovepunctuationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/removepunctuation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1RemovepunctuationRequestSchema },
      },
      {
        success: { kind: "json", schema: v1RemovepunctuationResponseSchema },
        errorFactory: TextProcessing.RemovepunctuationError,
      },
      options,
    );
  }

  /**
   * Reverse Text
   *
   * @remarks
   * Reverse text character by character
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.ReversetextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reversetext(
    request: TextProcessing.ReversetextRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ReversetextResponse, TextProcessing.ReversetextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/reversetext"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ReversetextRequestSchema },
      },
      {
        success: { kind: "json", schema: v1ReversetextResponseSchema },
        errorFactory: TextProcessing.ReversetextError,
      },
      options,
    );
  }

  /**
   * Slugify
   *
   * @remarks
   * Convert text to a URL-friendly slug
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.SlugifyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  slugify(
    request: TextProcessing.SlugifyRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SlugifyResponse, TextProcessing.SlugifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/slugify"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SlugifyRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SlugifyResponseSchema },
        errorFactory: TextProcessing.SlugifyError,
      },
      options,
    );
  }

  /**
   * Spell Checker
   *
   * @remarks
   * Check the spelling of a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.SpellcheckerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  spellchecker(
    request: TextProcessing.SpellcheckerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SpellcheckerResponse, TextProcessing.SpellcheckerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/spellchecker"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SpellcheckerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SpellcheckerResponseSchema },
        errorFactory: TextProcessing.SpellcheckerError,
      },
      options,
    );
  }

  /**
   * Syllable Counter
   *
   * @remarks
   * Count syllables in words and text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.SyllablecounterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  syllablecounter(
    request: TextProcessing.SyllablecounterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SyllablecounterResponse, TextProcessing.SyllablecounterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/syllablecounter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SyllablecounterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SyllablecounterResponseSchema },
        errorFactory: TextProcessing.SyllablecounterError,
      },
      options,
    );
  }

  /**
   * Tax ID Validator
   *
   * @remarks
   * Validate US Tax IDs (SSN, EIN, ITIN)
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TaxidvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  taxidvalidator(
    request: TextProcessing.TaxidvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TaxidvalidatorResponse, TextProcessing.TaxidvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/taxidvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "taxid", value: request.taxid, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1TaxidvalidatorResponseSchema },
        errorFactory: TextProcessing.TaxidvalidatorError,
      },
      options,
    );
  }

  /**
   * Tense Converter
   *
   * @remarks
   * Convert text to past or future tense
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TenseconverterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tenseconverter(
    request: TextProcessing.TenseconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TenseconverterResponse, TextProcessing.TenseconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/tenseconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TenseconverterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TenseconverterResponseSchema },
        errorFactory: TextProcessing.TenseconverterError,
      },
      options,
    );
  }

  /**
   * Text Language
   *
   * @remarks
   * Detect the language of a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TextlanguageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  textlanguage(
    request: TextProcessing.TextlanguageRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TextlanguageResponse, TextProcessing.TextlanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/textlanguage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TextlanguageRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TextlanguageResponseSchema },
        errorFactory: TextProcessing.TextlanguageError,
      },
      options,
    );
  }

  /**
   * Text Similarity
   *
   * @remarks
   * Check the similarity between two texts
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TextsimilarityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  textsimilarity(
    request: TextProcessing.TextsimilarityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TextsimilarityResponse, TextProcessing.TextsimilarityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/textsimilarity"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TextsimilarityRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TextsimilarityResponseSchema },
        errorFactory: TextProcessing.TextsimilarityError,
      },
      options,
    );
  }

  /**
   * Text Styler
   *
   * @remarks
   * Text Styler is a simple tool for styling text in various ways. It returns the styled text.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TextstylerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  textstyler(
    request: TextProcessing.TextstylerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TextstylerResponse, TextProcessing.TextstylerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/textstyler"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TextstylerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TextstylerResponseSchema },
        errorFactory: TextProcessing.TextstylerError,
      },
      options,
    );
  }

  /**
   * Text Summarizer
   *
   * @remarks
   * Summarize a body of text. Useful for generating summaries of articles, reports, and more.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TextsummarizerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  textsummarizer(
    request: TextProcessing.TextsummarizerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TextsummarizerResponse, TextProcessing.TextsummarizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/textsummarizer"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TextsummarizerRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TextsummarizerResponseSchema },
        errorFactory: TextProcessing.TextsummarizerError,
      },
      options,
    );
  }

  /**
   * Text to Emoji
   *
   * @remarks
   * Text to Emoji is a simple tool for converting text into emojis. It returns the emojis that
   * represent the given text.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TexttoemojiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  texttoemoji(
    request: TextProcessing.TexttoemojiRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TexttoemojiResponse, TextProcessing.TexttoemojiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/texttoemoji"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TexttoemojiRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TexttoemojiResponseSchema },
        errorFactory: TextProcessing.TexttoemojiError,
      },
      options,
    );
  }

  /**
   * Title Case Converter
   *
   * @remarks
   * Convert text to title case
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TitlecapitalizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  titlecapitalization(
    request: TextProcessing.TitlecapitalizationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TitlecapitalizationResponse, TextProcessing.TitlecapitalizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/titlecapitalization"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TitlecapitalizationRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TitlecapitalizationResponseSchema },
        errorFactory: TextProcessing.TitlecapitalizationError,
      },
      options,
    );
  }

  /**
   * Translator
   *
   * @remarks
   * Translate text from one language to another
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.TranslatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  translator(
    request: TextProcessing.TranslatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1TranslatorResponse, TextProcessing.TranslatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/translator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1TranslatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1TranslatorResponseSchema },
        errorFactory: TextProcessing.TranslatorError,
      },
      options,
    );
  }

  /**
   * Vowel Counter
   *
   * @remarks
   * Count vowels and consonants in text with detailed breakdown
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.VowelcounterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vowelcounter(
    request: TextProcessing.VowelcounterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VowelcounterResponse, TextProcessing.VowelcounterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/vowelcounter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1VowelcounterRequestSchema },
      },
      {
        success: { kind: "json", schema: v1VowelcounterResponseSchema },
        errorFactory: TextProcessing.VowelcounterError,
      },
      options,
    );
  }

  /**
   * Website Readability
   *
   * @remarks
   * Analyze the readability of a web page
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.WebsitereadabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  websitereadability(
    request: TextProcessing.WebsitereadabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebsitereadabilityResponse, TextProcessing.WebsitereadabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/websitereadability"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1WebsitereadabilityRequestSchema },
      },
      {
        success: { kind: "json", schema: v1WebsitereadabilityResponseSchema },
        errorFactory: TextProcessing.WebsitereadabilityError,
      },
      options,
    );
  }

  /**
   * Word Opposites
   *
   * @remarks
   * Word Opposites is a simple tool for getting the opposites of a word. It returns a list of
   * opposites for the given word.
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.WordoppositeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordopposite(
    request: TextProcessing.WordoppositeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WordoppositeResponse, TextProcessing.WordoppositeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordopposite"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "word", value: request.word, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordoppositeResponseSchema },
        errorFactory: TextProcessing.WordoppositeError,
      },
      options,
    );
  }

  /**
   * Word Pronunciation
   *
   * @remarks
   * Get the pronunciation of a word
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.WordpronunciationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordpronunciation(
    request: TextProcessing.WordpronunciationRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WordpronunciationResponse, TextProcessing.WordpronunciationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordpronunciation"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "word", value: request.word, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordpronunciationResponseSchema },
        errorFactory: TextProcessing.WordpronunciationError,
      },
      options,
    );
  }

  /**
   * Rhyming Words
   *
   * @remarks
   * Get a list of words that rhyme with the specified word
   *
   * @returns Successful Response
   *
   * @throws {@link TextProcessing.WordrhymesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wordrhymes(
    request: TextProcessing.WordrhymesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WordrhymesResponse, TextProcessing.WordrhymesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/wordrhymes"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "word", value: request.word, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WordrhymesResponseSchema },
        errorFactory: TextProcessing.WordrhymesError,
      },
      options,
    );
  }
}

export namespace TextProcessing {
  export type AcronymexpanderRequest = {
    /** The acronym to expand (max 20 characters) */
    acronym: string;
    /** Optional context to help determine the correct meaning */
    context?: string;
  };

  export class AcronymexpanderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcronymexpanderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AnagramdetectorRequest = {
    /** The first text to compare */
    text1: string;
    /** The second text to compare */
    text2: string;
    /** Ignore case when comparing (default: true) */
    ignorecase?: boolean;
    /** Ignore spaces when comparing (default: true) */
    ignorespaces?: boolean;
  };

  export class AnagramdetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnagramdetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AntonymRequest = {
    /** The word to get the antonyms for */
    word: string;
    /** Language to return the antonyms in. Defaults to English */
    language?: string;
  };

  export class AntonymError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AntonymError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CronparserRequest = {
    /** The cron expression to parse (5-field or 6-field format) */
    expression: string;
  };

  export class CronparserError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CronparserError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DatamaskingRequest = {
    body: V1DatamaskingRequest;
  };

  export class DatamaskingError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatamaskingError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DidyoumeanRequest = {
    /** The text you want to check for spelling mistakes */
    query: string;
  };

  export class DidyoumeanError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DidyoumeanError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EmojidecoratorRequest = {
    body: V1EmojidecoratorRequest;
  };

  export class EmojidecoratorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmojidecoratorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GibberishdetectorRequest = {
    body: V1GibberishdetectorRequest;
  };

  export class GibberishdetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GibberishdetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GrammarcheckRequest = {
    body: V1GrammarcheckRequest;
  };

  export class GrammarcheckError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GrammarcheckError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type IsbnvalidatorRequest = {
    /** The ISBN number to validate (ISBN-10 or ISBN-13, with or without separators) */
    isbn: string;
  };

  export class IsbnvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<IsbnvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type JsonschemavalidatorRequest = {
    body: V1JsonschemavalidatorRequest;
  };

  export class JsonschemavalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<JsonschemavalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type KeywordextractorRequest = {
    body: V1KeywordextractorRequest;
  };

  export class KeywordextractorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<KeywordextractorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LeetspeakRequest = {
    body: V1LeetspeakRequest;
  };

  export class LeetspeakError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LeetspeakError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LemmatizerRequest = {
    body: V1LemmatizerRequest;
  };

  export class LemmatizerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LemmatizerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LevenshteindistanceRequest = {
    body: V1LevenshteindistanceRequest;
  };

  export class LevenshteindistanceError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LevenshteindistanceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LexiconRequest = {
    /** The word to analyze */
    word: string;
  };

  export class LexiconError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LexiconError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LinesorterRequest = {
    body: V1LinesorterRequest;
  };

  export class LinesorterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LinesorterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type MarkdownlinkextractorRequest = {
    body: V1MarkdownlinkextractorRequest;
  };

  export class MarkdownlinkextractorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<MarkdownlinkextractorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PalindromecheckerRequest = {
    /** The text to check for palindrome. Maximum 20000 characters */
    text: string;
    /** Ignore case when checking (default: true) */
    ignorecase?: boolean;
    /** Ignore spaces when checking (default: true) */
    ignorespaces?: boolean;
    /** Ignore punctuation when checking (default: true) */
    ignorepunctuation?: boolean;
  };

  export class PalindromecheckerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PalindromecheckerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PartsofspeechRequest = {
    body: V1PartsofspeechRequest;
  };

  export class PartsofspeechError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PartsofspeechError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PhoneticRequest = {
    /** The word to encode phonetically */
    word: string;
    /** Algorithm to use */
    algorithm?: string;
  };

  export class PhoneticError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PhoneticError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PiglatinRequest = {
    body: V1PiglatinRequest;
  };

  export class PiglatinError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PiglatinError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ProfanityfilterRequest = {
    body: V1ProfanityfilterRequest;
  };

  export class ProfanityfilterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProfanityfilterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ReadabilityscoreRequest = {
    body: V1ReadabilityscoreRequest;
  };

  export class ReadabilityscoreError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReadabilityscoreError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ReadingtimeRequest = {
    body: V1ReadingtimeRequest;
  };

  export class ReadingtimeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReadingtimeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RegextesterRequest = {
    body: V1RegextesterRequest;
  };

  export class RegextesterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegextesterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RemovepunctuationRequest = {
    body: V1RemovepunctuationRequest;
  };

  export class RemovepunctuationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemovepunctuationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ReversetextRequest = {
    body: V1ReversetextRequest;
  };

  export class ReversetextError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReversetextError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SlugifyRequest = {
    body: V1SlugifyRequest;
  };

  export class SlugifyError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SlugifyError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SpellcheckerRequest = {
    body: V1SpellcheckerRequest;
  };

  export class SpellcheckerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SpellcheckerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SyllablecounterRequest = {
    body: V1SyllablecounterRequest;
  };

  export class SyllablecounterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SyllablecounterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TaxidvalidatorRequest = {
    /** The US Tax ID to validate (SSN, EIN, or ITIN format) */
    taxid: string;
  };

  export class TaxidvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TaxidvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TenseconverterRequest = {
    body: V1TenseconverterRequest;
  };

  export class TenseconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TenseconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TextlanguageRequest = {
    body: V1TextlanguageRequest;
  };

  export class TextlanguageError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TextlanguageError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TextsimilarityRequest = {
    body: V1TextsimilarityRequest;
  };

  export class TextsimilarityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TextsimilarityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TextstylerRequest = {
    body: V1TextstylerRequest;
  };

  export class TextstylerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TextstylerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TextsummarizerRequest = {
    body: V1TextsummarizerRequest;
  };

  export class TextsummarizerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TextsummarizerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TexttoemojiRequest = {
    body: V1TexttoemojiRequest;
  };

  export class TexttoemojiError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TexttoemojiError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TitlecapitalizationRequest = {
    body: V1TitlecapitalizationRequest;
  };

  export class TitlecapitalizationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TitlecapitalizationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TranslatorRequest = {
    body: V1TranslatorRequest;
  };

  export class TranslatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TranslatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type VowelcounterRequest = {
    body: V1VowelcounterRequest;
  };

  export class VowelcounterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VowelcounterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebsitereadabilityRequest = {
    body: V1WebsitereadabilityRequest;
  };

  export class WebsitereadabilityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebsitereadabilityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordoppositeRequest = {
    /** The word to get the opposites for */
    word: string;
  };

  export class WordoppositeError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordoppositeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordpronunciationRequest = {
    /** The word to get the pronunciation of */
    word: string;
  };

  export class WordpronunciationError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordpronunciationError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WordrhymesRequest = {
    /** The word for which you want to get rhyming words */
    word: string;
    /** Limit the number of word rhymes returned */
    limit?: number;
  };

  export class WordrhymesError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WordrhymesError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
