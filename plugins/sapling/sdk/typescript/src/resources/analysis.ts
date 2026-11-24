import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ClassifyResponseSchema,
  type ApiV1ClassifyResponse,
} from "../models/api-v1-classify-response.js";
import { apiV1ExtractResponseSchema, type ApiV1ExtractResponse } from "../models/api-v1-extract-response.js";
import {
  apiV1FileExtractResponseSchema,
  type ApiV1FileExtractResponse,
} from "../models/api-v1-file-extract-response.js";
import {
  apiV1FileExtract400Error1Schema,
  type ApiV1FileExtract400Error1,
} from "../models/api-v1-file-extract400-error1.js";
import {
  apiV1FileExtract413Error1Schema,
  type ApiV1FileExtract413Error1,
} from "../models/api-v1-file-extract413-error1.js";
import {
  apiV1FileExtract429Error1Schema,
  type ApiV1FileExtract429Error1,
} from "../models/api-v1-file-extract429-error1.js";
import {
  apiV1InclusiveResponseSchema,
  type ApiV1InclusiveResponse,
} from "../models/api-v1-inclusive-response.js";
import { apiV1QualityResponseSchema, type ApiV1QualityResponse } from "../models/api-v1-quality-response.js";
import {
  apiV1SentimentRequestSchema,
  type ApiV1SentimentRequest,
} from "../models/api-v1-sentiment-request.js";
import { apiV1SeoRequestInternalSchema, type ApiV1SeoRequest } from "../models/api-v1-seo-request.js";
import { apiV1SeoResponseSchema, type ApiV1SeoResponse } from "../models/api-v1-seo-response.js";
import {
  apiV1StatisticsRequestSchema,
  type ApiV1StatisticsRequest,
} from "../models/api-v1-statistics-request.js";
import {
  apiV1StatisticsResponseSchema,
  type ApiV1StatisticsResponse,
} from "../models/api-v1-statistics-response.js";
import {
  apiV1StyleguideResponseSchema,
  type ApiV1StyleguideResponse,
} from "../models/api-v1-styleguide-response.js";
import {
  apiV1StyleguideRulesetsRequestSchema,
  type ApiV1StyleguideRulesetsRequest,
} from "../models/api-v1-styleguide-rulesets-request.js";
import {
  apiV1StyleguideRulesetsRequest1InternalSchema,
  type ApiV1StyleguideRulesetsRequest1,
} from "../models/api-v1-styleguide-rulesets-request1.js";
import {
  apiV1StyleguideRulesetsResponseSchema,
  type ApiV1StyleguideRulesetsResponse,
} from "../models/api-v1-styleguide-rulesets-response.js";
import {
  apiV1StyleguideRulesetsResponse1Schema,
  type ApiV1StyleguideRulesetsResponse1,
} from "../models/api-v1-styleguide-rulesets-response1.js";
import {
  apiV1StyleguideRulesetsResponse2Schema,
  type ApiV1StyleguideRulesetsResponse2,
} from "../models/api-v1-styleguide-rulesets-response2.js";
import {
  apiV1ThesaurusRequestSchema,
  type ApiV1ThesaurusRequest,
} from "../models/api-v1-thesaurus-request.js";
import {
  apiV1ThesaurusResponseSchema,
  type ApiV1ThesaurusResponse,
} from "../models/api-v1-thesaurus-response.js";
import { apiV1ToneRequestSchema, type ApiV1ToneRequest } from "../models/api-v1-tone-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import { rateLimited1Schema, type RateLimited1 } from "../models/rate-limited1.js";
import {
  apiV1ClassifyRequest2InternalSchema,
  type ApiV1ClassifyRequest2,
} from "../models/unions/api-v1-classify-request2.js";
import {
  apiV1ExtractRequest2InternalSchema,
  type ApiV1ExtractRequest2,
} from "../models/unions/api-v1-extract-request2.js";
import {
  apiV1InclusiveRequest2InternalSchema,
  type ApiV1InclusiveRequest2,
} from "../models/unions/api-v1-inclusive-request2.js";
import {
  apiV1QualityRequest2InternalSchema,
  type ApiV1QualityRequest2,
} from "../models/unions/api-v1-quality-request2.js";
import {
  apiV1SentimentResponse1Schema,
  type ApiV1SentimentResponse1,
} from "../models/unions/api-v1-sentiment-response1.js";
import {
  apiV1StyleguideRequest4InternalSchema,
  type ApiV1StyleguideRequest4,
} from "../models/unions/api-v1-styleguide-request4.js";
import { apiV1ToneResponse1Schema, type ApiV1ToneResponse1 } from "../models/unions/api-v1-tone-response1.js";
import type { Servers } from "../servers.js";

/**
 * Tone, sentiment, readability, quality, SEO, classification, extraction, style-guide compliance,
 * and inclusive language.
 */
export class Analysis {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Zero-shot text classification
   *
   * @remarks
   * Classify a text into a set of labels you supply — intent, topic, category, routing queue,
   * sentiment buckets, anything — without training data. Returns label (the best match, always one
   * of your labels), labels (single-label: just the best match; multi-label: every label whose
   * score >= threshold, possibly empty), scores (one {label, score} per input label, descending; a
   * distribution in single-label mode, independent 0-1 applicability in multi-label mode) and a
   * one-sentence rationale. Labels can be plain names or {name, description} objects — a short
   * description per label sharpens borderline decisions. Use context to say what the texts are
   * (e.g. "support tickets for a billing product"). 2-20 labels.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/classify/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Analysis.SaplingClassifyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingClassify(
    request: Analysis.SaplingClassifyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ClassifyResponse, Analysis.SaplingClassifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/classify"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ClassifyRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ClassifyResponseSchema },
        errorFactory: Analysis.SaplingClassifyError,
      },
      options,
    );
  }

  /**
   * Delete a style-guide rule set
   *
   * @remarks
   * Delete a saved rule set by name. The name may be sent as a query parameter or as `name` in a
   * JSON body.
   *
   * @returns Deleted.
   *
   * @throws {@link Analysis.SaplingDeleteStyleRulesetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDeleteStyleRuleset(
    request: Analysis.SaplingDeleteStyleRulesetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1StyleguideRulesetsResponse, Analysis.SaplingDeleteStyleRulesetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/styleguide/rulesets"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1StyleguideRulesetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1StyleguideRulesetsResponseSchema },
        errorFactory: Analysis.SaplingDeleteStyleRulesetError,
      },
      options,
    );
  }

  /**
   * Structured data extraction
   *
   * @remarks
   * Pull structured fields out of unstructured text — invoice numbers, amounts, dates, names,
   * addresses, order ids, anything the document actually states — by describing the fields you
   * want. Returns data (a {field: value} map, null where the text does not state the field), fields
   * (per-field value, the verbatim evidence span it came from, and whether it was found) and
   * missing (the fields the text did not yield). Values are returned in the type you declare
   * (string, number, integer, boolean, date as YYYY-MM-DD, or list of strings) and a value that
   * will not convert is reported missing rather than returned in the wrong type. This is
   * EXTRACTION, not summarization or inference: except for boolean fields, a value must be
   * traceable to a span of the text or it is dropped. Use context to say what the document is. 1-20
   * fields.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/extract/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Analysis.SaplingExtractError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingExtract(
    request: Analysis.SaplingExtractRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ExtractResponse, Analysis.SaplingExtractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/extract"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ExtractRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1ExtractResponseSchema },
        errorFactory: Analysis.SaplingExtractError,
      },
      options,
    );
  }

  /**
   * Extract structured fields from an uploaded document
   *
   * @remarks
   * Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and extract
   * caller-named fields from its text exactly like /api/v1/extract. Options ride the jsonParams
   * part. Text past the first 10,000 characters is not read; the response `document` object reports
   * `truncated`. Billed like /api/v1/extract on the characters used. Unbilled (trial and public)
   * keys also answer 429 with Retry-After when their per-minute generation budget is spent.
   *
   * @returns Same shape as a single /api/v1/extract response, plus `document`.
   *
   * @throws {@link Analysis.SaplingExtractFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingExtractFile(
    request: Analysis.SaplingExtractFileRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FileExtractResponse, Analysis.SaplingExtractFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/file-extract"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsageQuery, schema: s.defaulted(s.boolean(), false) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "file", value: request.file },
            { kind: "file", name: "jsonParams", value: request.jsonParams },
            {
              kind: "text",
              name: "return_usage",
              value: request.returnUsage,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV1FileExtractResponseSchema },
        errorFactory: Analysis.SaplingExtractFileError,
      },
      options,
    );
  }

  /**
   * Inclusive-language check
   *
   * @remarks
   * Find non-inclusive or biased wording in a text — gendered defaults, ableist idioms, ageist
   * framing, outdated terms for groups, classist or appearance-based language. Returns issues, each
   * with the verbatim passage, its start/end offsets in the submitted text (null when the passage
   * cannot be located), a category, a severity (low / medium / high), a brief note and a neutral
   * replacement suggestion, plus a top-level inclusive boolean. Wording is flagged, not topics:
   * text that discusses or quotes a term to critique it is not an issue. Use categories to restrict
   * the check to a subset. The text is checked as submitted (markup included), so offsets always
   * index it directly.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/inclusive/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Analysis.SaplingInclusiveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingInclusive(
    request: Analysis.SaplingInclusiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1InclusiveResponse, Analysis.SaplingInclusiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/inclusive"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1InclusiveRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1InclusiveResponseSchema },
        errorFactory: Analysis.SaplingInclusiveError,
      },
      options,
    );
  }

  /**
   * List saved style-guide rule sets
   *
   * @remarks
   * Rule sets saved for this account (or the key's team), usable by name via the `ruleset` option
   * of /api/v1/styleguide.
   *
   * @returns Saved rule sets, ordered by name.
   *
   * @throws {@link Analysis.SaplingListStyleRulesetsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingListStyleRulesets(
    request: Analysis.SaplingListStyleRulesetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1StyleguideRulesetsResponse1, Analysis.SaplingListStyleRulesetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/styleguide/rulesets"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StyleguideRulesetsResponse1Schema },
        errorFactory: Analysis.SaplingListStyleRulesetsError,
      },
      options,
    );
  }

  /**
   * Writing quality score
   *
   * @remarks
   * Score the writing quality of a text from 1 (poor) to 5 (excellent). Returns score: a
   * fluency/grammaticality score from a language model. Set sentence_scores=true to also get a
   * per-sentence breakdown (sentences with start/end offsets and their own score) to find the
   * weakest sentences. Set rubric=true for an LLM-judged rubric: overall score, per-dimension
   * scores (clarity, coherence, correctness, concision), a summary, and concrete issues each with
   * the quoted excerpt, offsets, a note, and a suggested rewrite. rubric=true is billed at a higher
   * rate than the plain score.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/quality/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Analysis.SaplingQualityError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingQuality(
    request: Analysis.SaplingQualityRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1QualityResponse, Analysis.SaplingQualityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/quality"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1QualityRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1QualityResponseSchema },
        errorFactory: Analysis.SaplingQualityError,
      },
      options,
    );
  }

  /**
   * Readability statistics
   *
   * @remarks
   * Compute readability statistics for a text: grade-level readability scores, estimated reading
   * time, and counts of characters, words, and sentences.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/statistics/
   *
   * @throws {@link Analysis.SaplingReadabilityStatisticsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingReadabilityStatistics(
    request: Analysis.SaplingReadabilityStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StatisticsResponse, Analysis.SaplingReadabilityStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/statistics"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1StatisticsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1StatisticsResponseSchema },
        errorFactory: Analysis.SaplingReadabilityStatisticsError,
      },
      options,
    );
  }

  /**
   * Create or replace a style-guide rule set
   *
   * @remarks
   * Upsert a named rule set (names match case-insensitively). An account can hold up to 100 rule
   * sets.
   *
   * @returns The saved rule set, and whether it was newly created.
   *
   * @throws {@link Analysis.SaplingSaveStyleRulesetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSaveStyleRuleset(
    request: Analysis.SaplingSaveStyleRulesetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StyleguideRulesetsResponse2, Analysis.SaplingSaveStyleRulesetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/styleguide/rulesets"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1StyleguideRulesetsRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1StyleguideRulesetsResponse2Schema },
        errorFactory: Analysis.SaplingSaveStyleRulesetError,
      },
      options,
    );
  }

  /**
   * Sentiment analysis
   *
   * @remarks
   * Classify the sentiment of a text (positive / neutral / negative). Returns overall and
   * per-sentence sentiment with confidence scores.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/sentiment/ A bare JSON array (no per-sentence results) is the
   * degraded shape served when sentence tokenization fails upstream.
   *
   * @throws {@link Analysis.SaplingSentimentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSentiment(
    request: Analysis.SaplingSentimentRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SentimentResponse1, Analysis.SaplingSentimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sentiment"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SentimentRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1SentimentResponse1Schema },
        errorFactory: Analysis.SaplingSentimentError,
      },
      options,
    );
  }

  /**
   * SEO analysis and metadata
   *
   * @remarks
   * Analyze a page or article for on-page SEO and generate metadata. Returns stats (words,
   * sentences, paragraphs, reading time, Flesch reading ease and grade), per-target-keyword
   * count/density/whether it appears in the first 100 words, top_terms (the most frequent content
   * words and phrases), and suggestions: title-tag candidates (the model aims for <=60 chars; any
   * over a 90-char hard cap are dropped), meta-description candidates (aims for 120-155 chars; hard
   * cap 220), a URL slug (null if none could be derived) and focus-keyword ideas, written in the
   * language of the text. Pass keywords to have them worked into the suggestions. Set
   * suggestions=false for the free stats-only analysis (suggestions are the billed part). lang (ISO
   * 639-1, default "en") selects the readability formulas; unsupported languages get null
   * readability.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/seo/
   *
   * @throws {@link Analysis.SaplingSeoError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSeo(
    request: Analysis.SaplingSeoRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SeoResponse, Analysis.SaplingSeoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/seo"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SeoRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1SeoResponseSchema },
        errorFactory: Analysis.SaplingSeoError,
      },
      options,
    );
  }

  /**
   * Find similar terms
   *
   * @remarks
   * Nearest-neighbor terms and synonyms for a word or short phrase (the query is truncated to 100
   * characters).
   *
   * @returns Neighbors as [similarity, term] pairs, plus synonyms.
   *
   * @throws {@link Analysis.SaplingSimilarTermsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSimilarTerms(
    request: Analysis.SaplingSimilarTermsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ThesaurusResponse, Analysis.SaplingSimilarTermsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/thesaurus"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ThesaurusRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ThesaurusResponseSchema },
        errorFactory: Analysis.SaplingSimilarTermsError,
      },
      options,
    );
  }

  /**
   * Check text against a style guide
   *
   * @remarks
   * Check a text for compliance with caller-supplied style rules (house style, brand voice,
   * editorial guidelines). Returns violations — each with the verbatim offending passage, its
   * start/end offsets in the submitted text (null when the passage cannot be located), the violated
   * rule name, a brief note and a compliant rewrite suggestion — plus a top-level compliant
   * boolean. Only the listed rules are enforced; an empty violations list means the text complies.
   * The text is checked as submitted (markup included), so offsets always index it directly.
   * Provide exactly one of rules (inline) or ruleset (the name of a rule set saved via the API).
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/styleguide/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Analysis.SaplingStyleguideError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingStyleguide(
    request: Analysis.SaplingStyleguideRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StyleguideResponse, Analysis.SaplingStyleguideError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/styleguide"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1StyleguideRequest4InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1StyleguideResponseSchema },
        errorFactory: Analysis.SaplingStyleguideError,
      },
      options,
    );
  }

  /**
   * Tone classification
   *
   * @remarks
   * Classify the emotional tone of a text (e.g. friendly, confident, sad, angry). Returns overall
   * and per-sentence tone labels with confidence scores.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/tone/ A bare JSON array (no per-sentence results) is the degraded
   * shape served when sentence tokenization fails upstream.
   *
   * @throws {@link Analysis.SaplingToneError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingTone(
    request: Analysis.SaplingToneRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ToneResponse1, Analysis.SaplingToneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tone"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ToneRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ToneResponse1Schema },
        errorFactory: Analysis.SaplingToneError,
      },
      options,
    );
  }
}

export namespace Analysis {
  export type SaplingClassifyRequest = {
    body: ApiV1ClassifyRequest2;
  };

  export class SaplingClassifyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingClassifyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDeleteStyleRulesetRequest = {
    /** Rule set name (alternatively in the body). */
    name?: string;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    body?: ApiV1StyleguideRulesetsRequest;
  };

  export class SaplingDeleteStyleRulesetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDeleteStyleRulesetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingExtractRequest = {
    body: ApiV1ExtractRequest2;
  };

  export class SaplingExtractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingExtractError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingExtractFileRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * JSON object (send it as a file part or form field): {"fields": [...], "context": "...",
     * "key": "<API key>", "return_usage": true}. `fields` (required) and `context` take the same
     * values as on /api/v1/extract.
     */
    jsonParams: FileInput;
    /**
     * When true, a successful JSON-object response additionally carries "usage": {"characters":
     * <n>} — the billable character count this request submitted (0 for unbilled requests; the 2.5x
     * adjustment for logographic languages is included, so CJK requests report more than their raw
     * length). Repeat texts inside the billing deduplication window are still counted here even
     * though they are not re-charged, so the number is an upper bound on the final charge.
     * Responses whose body is not a JSON object (e.g. bare-array response formats) cannot carry the
     * field. An existing usage field (such as account/status or completion token usage) is
     * preserved unchanged.
     *
     * @default false
     */
    returnUsage?: boolean;
  };

  export class SaplingExtractFileError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1FileExtract400Error1", ApiV1FileExtract400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1FileExtract413Error1", ApiV1FileExtract413Error1>
      | Declared<"apiV1FileExtract429Error1", ApiV1FileExtract429Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingExtractFileError> = [
      {
        on: 400,
        kind: "apiV1FileExtract400Error1",
        decode: { kind: "json", schema: apiV1FileExtract400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1FileExtract413Error1",
        decode: { kind: "json", schema: apiV1FileExtract413Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1FileExtract429Error1",
        decode: { kind: "json", schema: apiV1FileExtract429Error1Schema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingInclusiveRequest = {
    body: ApiV1InclusiveRequest2;
  };

  export class SaplingInclusiveError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingInclusiveError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingListStyleRulesetsRequest = {
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingListStyleRulesetsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingListStyleRulesetsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingQualityRequest = {
    body: ApiV1QualityRequest2;
  };

  export class SaplingQualityError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingQualityError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingReadabilityStatisticsRequest = {
    body: ApiV1StatisticsRequest;
  };

  export class SaplingReadabilityStatisticsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingReadabilityStatisticsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSaveStyleRulesetRequest = {
    body: ApiV1StyleguideRulesetsRequest1;
  };

  export class SaplingSaveStyleRulesetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSaveStyleRulesetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSentimentRequest = {
    body: ApiV1SentimentRequest;
  };

  export class SaplingSentimentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSentimentError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSeoRequest = {
    body: ApiV1SeoRequest;
  };

  export class SaplingSeoError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSeoError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSimilarTermsRequest = {
    body: ApiV1ThesaurusRequest;
  };

  export class SaplingSimilarTermsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSimilarTermsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingStyleguideRequest = {
    body: ApiV1StyleguideRequest4;
  };

  export class SaplingStyleguideError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingStyleguideError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingToneRequest = {
    body: ApiV1ToneRequest;
  };

  export class SaplingToneError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingToneError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
