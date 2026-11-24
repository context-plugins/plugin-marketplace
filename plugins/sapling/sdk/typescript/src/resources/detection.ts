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
  apiV1AidetectResponseSchema,
  type ApiV1AidetectResponse,
} from "../models/api-v1-aidetect-response.js";
import {
  apiV1DocxAidetectResponseSchema,
  type ApiV1DocxAidetectResponse,
} from "../models/api-v1-docx-aidetect-response.js";
import {
  apiV1DocxAidetect400Error1Schema,
  type ApiV1DocxAidetect400Error1,
} from "../models/api-v1-docx-aidetect400-error1.js";
import {
  apiV1DocxAidetect413Error1Schema,
  type ApiV1DocxAidetect413Error1,
} from "../models/api-v1-docx-aidetect413-error1.js";
import {
  apiV1FileAidetectResponseSchema,
  type ApiV1FileAidetectResponse,
} from "../models/api-v1-file-aidetect-response.js";
import {
  apiV1FileAidetect400Error1Schema,
  type ApiV1FileAidetect400Error1,
} from "../models/api-v1-file-aidetect400-error1.js";
import {
  apiV1FileAidetect413Error1Schema,
  type ApiV1FileAidetect413Error1,
} from "../models/api-v1-file-aidetect413-error1.js";
import {
  apiV1LangdetectResponseSchema,
  type ApiV1LangdetectResponse,
} from "../models/api-v1-langdetect-response.js";
import { apiV1NerResponseSchema, type ApiV1NerResponse } from "../models/api-v1-ner-response.js";
import {
  apiV1PdfAidetectResponseSchema,
  type ApiV1PdfAidetectResponse,
} from "../models/api-v1-pdf-aidetect-response.js";
import {
  apiV1PdfAidetect400Error1Schema,
  type ApiV1PdfAidetect400Error1,
} from "../models/api-v1-pdf-aidetect400-error1.js";
import {
  apiV1PdfAidetect413Error1Schema,
  type ApiV1PdfAidetect413Error1,
} from "../models/api-v1-pdf-aidetect413-error1.js";
import { apiV1PiiRequestSchema, type ApiV1PiiRequest } from "../models/api-v1-pii-request.js";
import { apiV1PiiResponseSchema, type ApiV1PiiResponse } from "../models/api-v1-pii-response.js";
import {
  apiV1ProfanityRequestSchema,
  type ApiV1ProfanityRequest,
} from "../models/api-v1-profanity-request.js";
import {
  apiV1ProfanityResponseSchema,
  type ApiV1ProfanityResponse,
} from "../models/api-v1-profanity-response.js";
import { apiV1SafetyResponseSchema, type ApiV1SafetyResponse } from "../models/api-v1-safety-response.js";
import {
  apiV1UrlAidetectRequestInternalSchema,
  type ApiV1UrlAidetectRequest,
} from "../models/api-v1-url-aidetect-request.js";
import {
  apiV1UrlAidetectResponseSchema,
  type ApiV1UrlAidetectResponse,
} from "../models/api-v1-url-aidetect-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import { rateLimited1Schema, type RateLimited1 } from "../models/rate-limited1.js";
import {
  apiV1AidetectRequest2InternalSchema,
  type ApiV1AidetectRequest2,
} from "../models/unions/api-v1-aidetect-request2.js";
import {
  apiV1LangdetectRequest2InternalSchema,
  type ApiV1LangdetectRequest2,
} from "../models/unions/api-v1-langdetect-request2.js";
import {
  apiV1NerRequest2InternalSchema,
  type ApiV1NerRequest2,
} from "../models/unions/api-v1-ner-request2.js";
import {
  apiV1SafetyRequest2InternalSchema,
  type ApiV1SafetyRequest2,
} from "../models/unions/api-v1-safety-request2.js";
import type { Servers } from "../servers.js";

/**
 * AI-content, language, PII, named-entity, and unsafe-content detection.
 */
export class Detection {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * AI-generated text detection
   *
   * @remarks
   * Score how likely a text is to be AI-generated. Returns an overall score between 0 (likely
   * human-written) and 1 (likely AI-generated), ai_fraction (the share of the text in sentences
   * scoring >= 0.5, which flags partially AI-written documents), a verdict (human, mixed or ai),
   * segments (character offsets of the AI-scored passages), low_confidence with
   * low_confidence_reasons (short_text, list_format: inputs where false positives are more likely,
   * so hedge the result), plus per-sentence scores by default. Provide at least ~50 characters of
   * text for a meaningful score; 500+ characters of prose is most reliable. English, Dutch, French,
   * German, Italian, Japanese, Portuguese and Spanish are supported: the language is detected
   * automatically (or set it with lang), text in the non-English languages is scored by a
   * multilingual model, and the response's version field names the model that scored the text.
   * Other languages are scored by the English model and are less reliable.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/detector/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Detection.SaplingAiDetectError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAiDetect(
    request: Detection.SaplingAiDetectRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AidetectResponse, Detection.SaplingAiDetectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/aidetect"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1AidetectRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1AidetectResponseSchema },
        errorFactory: Detection.SaplingAiDetectError,
      },
      options,
    );
  }

  /**
   * AI-generated text detection for a web page
   *
   * @remarks
   * Fetch a public web page (or a linked .pdf, .docx, .pptx, .odt, .txt or .md document) and score
   * how likely its main text is to be AI-generated. Use this instead of sapling_ai_detect when you
   * have a link rather than the text: Sapling fetches the page itself, drops navigation, headers,
   * footers, forms and hidden elements, and scores only the main readable text (the largest , else
   * ). Returns the same fields as sapling_ai_detect (score from 0 = likely human to 1 = likely AI,
   * ai_fraction, verdict, segments, low_confidence, per-sentence scores by default, and the scored
   * text) plus source: the final URL after redirects, the page title, its content type, the number
   * of characters scored (and billed) and whether the page was truncated. Only http(s) URLs that
   * resolve to public addresses are fetched. A page that is down, blocks automated requests, or has
   * no readable text is reported as an error, not a score. For long pages set sent_scores=false to
   * keep the result small.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/detector/
   *
   * @throws {@link Detection.SaplingAiDetectUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAiDetectUrl(
    request: Detection.SaplingAiDetectUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1UrlAidetectResponse, Detection.SaplingAiDetectUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/url-aidetect"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1UrlAidetectRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1UrlAidetectResponseSchema },
        errorFactory: Detection.SaplingAiDetectUrlError,
      },
      options,
    );
  }

  /**
   * Detect AI-generated text in a Word document
   *
   * @remarks
   * Upload a .docx; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect
   * with sentence scores. Billed like /api/v1/aidetect.
   *
   * @returns Same shape as /api/v1/aidetect with sent_scores and score_string enabled.
   *
   * @throws {@link Detection.SaplingAidetectDocxError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAidetectDocx(
    request: Detection.SaplingAidetectDocxRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DocxAidetectResponse, Detection.SaplingAidetectDocxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/docx-aidetect"),
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
        success: { kind: "json", schema: apiV1DocxAidetectResponseSchema },
        errorFactory: Detection.SaplingAidetectDocxError,
      },
      options,
    );
  }

  /**
   * Detect AI-generated text in an uploaded document
   *
   * @remarks
   * Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, chosen by file
   * extension, up to 30MB); its extracted text (first 200,000 characters) is scored like
   * /api/v1/aidetect with sentence scores. PPTX text is read in slide order without speaker notes;
   * ODT drops footnotes, comments and tracked deletions; HTML is flattened to its visible text.
   * Billed like /api/v1/aidetect.
   *
   * @returns Same shape as /api/v1/aidetect with sent_scores and score_string enabled.
   *
   * @throws {@link Detection.SaplingAidetectFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAidetectFile(
    request: Detection.SaplingAidetectFileRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FileAidetectResponse, Detection.SaplingAidetectFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/file-aidetect"),
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
        success: { kind: "json", schema: apiV1FileAidetectResponseSchema },
        errorFactory: Detection.SaplingAidetectFileError,
      },
      options,
    );
  }

  /**
   * Detect AI-generated text in a PDF
   *
   * @remarks
   * Upload a PDF; its extracted text (first 200,000 characters) is scored like /api/v1/aidetect
   * with sentence scores. Billed like /api/v1/aidetect.
   *
   * @returns Same shape as /api/v1/aidetect with sent_scores and score_string enabled.
   *
   * @throws {@link Detection.SaplingAidetectPdfError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAidetectPdf(
    request: Detection.SaplingAidetectPdfRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PdfAidetectResponse, Detection.SaplingAidetectPdfError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/pdf-aidetect"),
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
        success: { kind: "json", schema: apiV1PdfAidetectResponseSchema },
        errorFactory: Detection.SaplingAidetectPdfError,
      },
      options,
    );
  }

  /**
   * Language detection
   *
   * @remarks
   * Detect the language a text is written in. Returns an ISO 639-1 code, a confidence value,
   * reliable (the recommended threshold: true when the confidence is high and the text has enough
   * letters; short inputs like "OK" are never reliable) and script, the dominant writing system as
   * an ISO 15924 code (e.g. Latn, Cyrl, Hani, Jpan).
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/langdetect/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Detection.SaplingDetectLanguageError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDetectLanguage(
    request: Detection.SaplingDetectLanguageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1LangdetectResponse, Detection.SaplingDetectLanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/langdetect"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1LangdetectRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1LangdetectResponseSchema },
        errorFactory: Detection.SaplingDetectLanguageError,
      },
      options,
    );
  }

  /**
   * PII detection and redaction
   *
   * @remarks
   * Detect personally identifiable information (emails, phone numbers, US SSNs, credit card
   * numbers, IP addresses, IBANs, US bank routing numbers) in a text. Detection of those types is
   * deterministic (regex + checksum validation, no ML), and every entity comes with exact character
   * offsets (start/end) into the submitted text. Set redact=true to also receive redacted_text: the
   * input with each entity replaced by a placeholder like [EMAIL]. Person names, organizations, and
   * locations/street addresses are NOT detected by default: list person/organization/location in
   * types explicitly to add LLM-backed detection of them (slower, and the text is then capped at
   * 10000 characters).
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/pii/
   *
   * @throws {@link Detection.SaplingDetectPiiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDetectPii(
    request: Detection.SaplingDetectPiiRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PiiResponse, Detection.SaplingDetectPiiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/pii"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1PiiRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1PiiResponseSchema },
        errorFactory: Detection.SaplingDetectPiiError,
      },
      options,
    );
  }

  /**
   * Named-entity recognition
   *
   * @remarks
   * Find named entities in a text — people, organizations, locations, dates, times, money amounts,
   * percentages, quantities, products, events — with character spans. Returns entities (each with
   * its verbatim text, type, and start/end offsets into the exact submitted text) and types (the
   * distinct types found). Every entity is a span the text actually contains — invented mentions
   * are dropped. Offsets index the submitted text as-is (nothing is stripped or normalized), so
   * they can be applied directly to your copy of the document. Use types to restrict recognition to
   * a subset. Complements sapling_detect_pii: that tool finds checksum-validated identifiers
   * (emails, cards, IBANs...), this one finds names and real-world references.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/ner/ A batch (`texts`) request answers {"results": [...]} instead:
   * one single-text response per input text, in input order.
   *
   * @throws {@link Detection.SaplingNerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingNer(
    request: Detection.SaplingNerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1NerResponse, Detection.SaplingNerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ner"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1NerRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1NerResponseSchema },
        errorFactory: Detection.SaplingNerError,
      },
      options,
    );
  }

  /**
   * Flag profanity
   *
   * @remarks
   * Split text on whitespace and label each token 1 (profane) or 0. Not billed.
   *
   * @returns Tokens and aligned labels.
   *
   * @throws {@link Detection.SaplingProfanityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingProfanity(
    request: Detection.SaplingProfanityRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ProfanityResponse, Detection.SaplingProfanityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/profanity"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ProfanityRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ProfanityResponseSchema },
        errorFactory: Detection.SaplingProfanityError,
      },
      options,
    );
  }

  /**
   * Content safety check
   *
   * @remarks
   * Score a text for unsafe content across seven categories — toxicity, profanity, harassment,
   * hate_speech, self_harm, sexual, violence — each as a 0-1 probability. Returns scores (all
   * seven), flagged (whether any category reached the threshold, default 0.5) and
   * flagged_categories. With spans=true, also returns spans: the specific offending passages, each
   * with its text, start/end offsets into the submitted text, per-category scores and
   * flagged_categories — use it to highlight, quote, or redact just the violating passage instead
   * of rejecting the whole text.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/safety/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Detection.SaplingSafetyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSafety(
    request: Detection.SaplingSafetyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SafetyResponse, Detection.SaplingSafetyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/safety"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SafetyRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1SafetyResponseSchema },
        errorFactory: Detection.SaplingSafetyError,
      },
      options,
    );
  }
}

export namespace Detection {
  export type SaplingAiDetectRequest = {
    body: ApiV1AidetectRequest2;
  };

  export class SaplingAiDetectError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAiDetectError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAiDetectUrlRequest = {
    body: ApiV1UrlAidetectRequest;
  };

  export class SaplingAiDetectUrlError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error3", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAiDetectUrlError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAidetectDocxRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
     * alternative to the query or header credential. Send it as a file part.
     */
    jsonParams?: FileInput;
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

  export class SaplingAidetectDocxError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1DocxAidetect400Error1", ApiV1DocxAidetect400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1DocxAidetect413Error1", ApiV1DocxAidetect413Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAidetectDocxError> = [
      {
        on: 400,
        kind: "apiV1DocxAidetect400Error1",
        decode: { kind: "json", schema: apiV1DocxAidetect400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1DocxAidetect413Error1",
        decode: { kind: "json", schema: apiV1DocxAidetect413Error1Schema },
      },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAidetectFileRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional JSON object (send it as a file part or form field): {"zero_retention": true} keeps
     * no copy of the extracted text (no result cache or certificate hash, usage logged without
     * text), as on /api/v1/aidetect; {"create_report": true} also saves the result as a shareable
     * report and adds report (and report_skip_reason when none was made), as on /api/v1/aidetect.
     */
    jsonParams?: FileInput;
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

  export class SaplingAidetectFileError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1FileAidetect400Error1", ApiV1FileAidetect400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1FileAidetect413Error1", ApiV1FileAidetect413Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAidetectFileError> = [
      {
        on: 400,
        kind: "apiV1FileAidetect400Error1",
        decode: { kind: "json", schema: apiV1FileAidetect400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1FileAidetect413Error1",
        decode: { kind: "json", schema: apiV1FileAidetect413Error1Schema },
      },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAidetectPdfRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional part carrying a JSON object, e.g. {"key": "<API key>", "return_usage": true}, as an
     * alternative to the query or header credential. Send it as a file part.
     */
    jsonParams?: FileInput;
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

  export class SaplingAidetectPdfError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PdfAidetect400Error1", ApiV1PdfAidetect400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1PdfAidetect413Error1", ApiV1PdfAidetect413Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAidetectPdfError> = [
      {
        on: 400,
        kind: "apiV1PdfAidetect400Error1",
        decode: { kind: "json", schema: apiV1PdfAidetect400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1PdfAidetect413Error1",
        decode: { kind: "json", schema: apiV1PdfAidetect413Error1Schema },
      },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDetectLanguageRequest = {
    body: ApiV1LangdetectRequest2;
  };

  export class SaplingDetectLanguageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDetectLanguageError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDetectPiiRequest = {
    body: ApiV1PiiRequest;
  };

  export class SaplingDetectPiiError extends ApiError {
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

    static readonly errors: ErrorDecoders<SaplingDetectPiiError> = [
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

  export type SaplingNerRequest = {
    body: ApiV1NerRequest2;
  };

  export class SaplingNerError extends ApiError {
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

    static readonly errors: ErrorDecoders<SaplingNerError> = [
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

  export type SaplingProfanityRequest = {
    body: ApiV1ProfanityRequest;
  };

  export class SaplingProfanityError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingProfanityError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSafetyRequest = {
    body: ApiV1SafetyRequest2;
  };

  export class SaplingSafetyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSafetyError> = [
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
