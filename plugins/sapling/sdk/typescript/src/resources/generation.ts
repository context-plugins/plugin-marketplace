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
  apiV1CompleteAcceptRequestSchema,
  type ApiV1CompleteAcceptRequest,
} from "../models/api-v1-complete-accept-request.js";
import {
  apiV1CompleteAcceptResponseSchema,
  type ApiV1CompleteAcceptResponse,
} from "../models/api-v1-complete-accept-response.js";
import {
  apiV1CompleteRequestInternalSchema,
  type ApiV1CompleteRequest,
} from "../models/api-v1-complete-request.js";
import {
  apiV1FileSummarizeResponseSchema,
  type ApiV1FileSummarizeResponse,
} from "../models/api-v1-file-summarize-response.js";
import {
  apiV1FileSummarize400Error1Schema,
  type ApiV1FileSummarize400Error1,
} from "../models/api-v1-file-summarize400-error1.js";
import {
  apiV1FileSummarize413Error1Schema,
  type ApiV1FileSummarize413Error1,
} from "../models/api-v1-file-summarize413-error1.js";
import {
  apiV1FileSummarize429Error1Schema,
  type ApiV1FileSummarize429Error1,
} from "../models/api-v1-file-summarize429-error1.js";
import {
  apiV1ParaphraseRequestSchema,
  type ApiV1ParaphraseRequest,
} from "../models/api-v1-paraphrase-request.js";
import {
  apiV1ParaphraseResponseSchema,
  type ApiV1ParaphraseResponse,
} from "../models/api-v1-paraphrase-response.js";
import {
  apiV1Paraphrase429Error1Schema,
  type ApiV1Paraphrase429Error1,
} from "../models/api-v1-paraphrase429-error1.js";
import { apiV1RephraseRequestSchema, type ApiV1RephraseRequest } from "../models/api-v1-rephrase-request.js";
import {
  apiV1RephraseResponseSchema,
  type ApiV1RephraseResponse,
} from "../models/api-v1-rephrase-response.js";
import {
  apiV1Rephrase429Error1Schema,
  type ApiV1Rephrase429Error1,
} from "../models/api-v1-rephrase429-error1.js";
import {
  apiV1SentenceSplitRequestInternalSchema,
  type ApiV1SentenceSplitRequest,
} from "../models/api-v1-sentence-split-request.js";
import {
  apiV1SentenceSplitResponseSchema,
  type ApiV1SentenceSplitResponse,
} from "../models/api-v1-sentence-split-response.js";
import {
  apiV1SentenceSplit429Error1Schema,
  type ApiV1SentenceSplit429Error1,
} from "../models/api-v1-sentence-split429-error1.js";
import {
  apiV1SimplifyResponseSchema,
  type ApiV1SimplifyResponse,
} from "../models/api-v1-simplify-response.js";
import {
  apiV1SummarizeResponseSchema,
  type ApiV1SummarizeResponse,
} from "../models/api-v1-summarize-response.js";
import {
  apiV1Summarize429Error1Schema,
  type ApiV1Summarize429Error1,
} from "../models/api-v1-summarize429-error1.js";
import {
  apiV1TranslateResponseSchema,
  type ApiV1TranslateResponse,
} from "../models/api-v1-translate-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import { rateLimited1Schema, type RateLimited1 } from "../models/rate-limited1.js";
import {
  apiV1CompleteAcceptResponse11Schema,
  type ApiV1CompleteAcceptResponse11,
} from "../models/unions/api-v1-complete-accept-response11.js";
import {
  apiV1CompleteResponse1Schema,
  type ApiV1CompleteResponse1,
} from "../models/unions/api-v1-complete-response1.js";
import {
  apiV1SimplifyRequest2InternalSchema,
  type ApiV1SimplifyRequest2,
} from "../models/unions/api-v1-simplify-request2.js";
import {
  apiV1SummarizeRequest2InternalSchema,
  type ApiV1SummarizeRequest2,
} from "../models/unions/api-v1-summarize-request2.js";
import {
  apiV1TranslateRequest2InternalSchema,
  type ApiV1TranslateRequest2,
} from "../models/unions/api-v1-translate-request2.js";
import type { Servers } from "../servers.js";

/**
 * Text rewriting, summarization, translation, and completion.
 */
export class Generation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Record an accepted completion
   *
   * @remarks
   * Report that the user accepted an autocomplete suggestion. `context` must be exactly the
   * `{query, completion}` object the completion hash was computed from — extra keys fail the hash
   * check.
   *
   * @returns Recorded.
   *
   * @throws {@link Generation.SaplingAcceptCompletionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAcceptCompletion(
    request: Generation.SaplingAcceptCompletionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompleteAcceptResponse, Generation.SaplingAcceptCompletionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/complete/{completion_hash}/accept"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [{ name: "completion_hash", value: request.completionHash, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1CompleteAcceptRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1CompleteAcceptResponseSchema },
        errorFactory: Generation.SaplingAcceptCompletionError,
      },
      options,
    );
  }

  /**
   * Autocomplete a sentence
   *
   * @remarks
   * Predict how a partially written sentence continues. Send the trailing text the user has typed
   * as query (200 characters maximum) and the tool returns the predicted continuation. Requires an
   * API key with autocomplete enabled; other keys get an explicit error back.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/autocomplete/ An empty JSON array is returned when no completion is
   * available (prediction failed or was shorter than the minimum length).
   *
   * @throws {@link Generation.SaplingAutocompleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAutocomplete(
    request: Generation.SaplingAutocompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CompleteResponse1, Generation.SaplingAutocompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/complete"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1CompleteRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1CompleteResponse1Schema },
        errorFactory: Generation.SaplingAutocompleteError,
      },
      options,
    );
  }

  /**
   * Paraphrase text (deprecated)
   *
   * @remarks
   * DEPRECATED: use /api/v1/rephrase with mapping="paraphrase". Rewrites text with a chosen
   * transformation, exactly like /api/v1/rephrase but under its own rate-limit bucket. Input is
   * limited to 4000 characters.
   *
   * @returns Alternatives: {"results": [{hash, original, replacement, rephrase_type,
   * model_version}]}.
   *
   * @throws {@link Generation.SaplingParaphraseError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  saplingParaphrase(
    request: Generation.SaplingParaphraseRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ParaphraseResponse, Generation.SaplingParaphraseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/paraphrase"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1ParaphraseRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1ParaphraseResponseSchema },
        errorFactory: Generation.SaplingParaphraseError,
      },
      options,
    );
  }

  /**
   * Rephrase / paraphrase
   *
   * @remarks
   * Generate alternative phrasings of a text. mapping selects the transformation (default
   * "paraphrase"); num_results controls how many alternatives are returned (default 5).
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/rephrase/
   *
   * @throws {@link Generation.SaplingRephraseError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingRephrase(
    request: Generation.SaplingRephraseRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1RephraseResponse, Generation.SaplingRephraseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/rephrase"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1RephraseRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1RephraseResponseSchema },
        errorFactory: Generation.SaplingRephraseError,
      },
      options,
    );
  }

  /**
   * Split run-on sentences
   *
   * @remarks
   * Rewrite text, breaking run-on sentences into shorter ones. Input is limited to 400 characters.
   *
   * @returns Alternatives: {"results": [{hash, original, replacement, rephrase_type,
   * model_version}]}. Empty when no split improves the text.
   *
   * @throws {@link Generation.SaplingSentenceSplitError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSentenceSplit(
    request: Generation.SaplingSentenceSplitRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SentenceSplitResponse, Generation.SaplingSentenceSplitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/sentence_split"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SentenceSplitRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1SentenceSplitResponseSchema },
        errorFactory: Generation.SaplingSentenceSplitError,
      },
      options,
    );
  }

  /**
   * Plain-language simplification
   *
   * @remarks
   * Rewrite a text in plain language at a target reading level, keeping all of its content,
   * structure and language (nothing is summarized or dropped). Returns simplified (the rewrite)
   * plus a before/after readability block (Flesch-Kincaid grade and reading ease) when the language
   * supports it, so the improvement is verifiable. Use preserve_terms for names or defined terms
   * that must survive verbatim. Pairs with sapling_readability_statistics for scoring text first.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/simplify/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Generation.SaplingSimplifyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSimplify(
    request: Generation.SaplingSimplifyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SimplifyResponse, Generation.SaplingSimplifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/simplify"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SimplifyRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1SimplifyResponseSchema },
        errorFactory: Generation.SaplingSimplifyError,
      },
      options,
    );
  }

  /**
   * Summarize text
   *
   * @remarks
   * Summarize a longer text, webpage or email thread (HTML input is accepted and flattened).
   * Returns a prose `summary` plus a `key_points` list, sized by the optional `length` option.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/summarize/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Generation.SaplingSummarizeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSummarize(
    request: Generation.SaplingSummarizeRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SummarizeResponse, Generation.SaplingSummarizeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/summarize"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SummarizeRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1SummarizeResponseSchema },
        errorFactory: Generation.SaplingSummarizeError,
      },
      options,
    );
  }

  /**
   * Summarize an uploaded document
   *
   * @remarks
   * Upload a document (.pdf, .docx, .pptx, .odt, .txt, .md, .html or .htm, up to 30MB) and
   * summarize its text exactly like /api/v1/summarize. Options ride the optional jsonParams part.
   * Text past the first 20,000 characters is not read; the response `document` object reports
   * `truncated`. Billed like /api/v1/summarize on the characters used. Unbilled (trial and public)
   * keys also answer 429 with Retry-After when their per-minute generation budget is spent.
   *
   * @returns Same shape as a single /api/v1/summarize response, plus `document`.
   *
   * @throws {@link Generation.SaplingSummarizeFileError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSummarizeFile(
    request: Generation.SaplingSummarizeFileRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1FileSummarizeResponse, Generation.SaplingSummarizeFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/file-summarize"),
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
        success: { kind: "json", schema: apiV1FileSummarizeResponseSchema },
        errorFactory: Generation.SaplingSummarizeFileError,
      },
      options,
    );
  }

  /**
   * Translate text
   *
   * @remarks
   * Translate a text into a target language with an LLM. Returns translation, the detected source
   * language (source_lang code + source_lang_name; the detection is reported, never guessed from
   * the hint) and the normalized target (target_lang, target_lang_name). Line breaks, markup and
   * placeholders are preserved in place. target_lang and source_lang accept an ISO 639 code ("fr",
   * "zh-TW") or an English language name ("French"); region variants zh-CN/zh-TW/zh-HK,
   * pt-BR/pt-PT, en-GB/en-US, fr-CA and es-419 are supported as targets. Optional formality picks a
   * formal or informal register where the target language distinguishes them.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/translate/ A batch (`texts`) request answers {"results": [...]}
   * instead: one single-text response per input text, in input order.
   *
   * @throws {@link Generation.SaplingTranslateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingTranslate(
    request: Generation.SaplingTranslateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TranslateResponse, Generation.SaplingTranslateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/translate"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1TranslateRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1TranslateResponseSchema },
        errorFactory: Generation.SaplingTranslateError,
      },
      options,
    );
  }
}

export namespace Generation {
  export type SaplingAcceptCompletionRequest = {
    /** The `hash` returned by /api/v1/complete. */
    completionHash: string;
    body: ApiV1CompleteAcceptRequest;
  };

  export class SaplingAcceptCompletionError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CompleteAcceptResponse11", ApiV1CompleteAcceptResponse11>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAcceptCompletionError> = [
      {
        on: 400,
        kind: "apiV1CompleteAcceptResponse11",
        decode: { kind: "json", schema: apiV1CompleteAcceptResponse11Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAutocompleteRequest = {
    body: ApiV1CompleteRequest;
  };

  export class SaplingAutocompleteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAutocompleteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingParaphraseRequest = {
    body: ApiV1ParaphraseRequest;
  };

  export class SaplingParaphraseError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"apiV1Paraphrase429Error1", ApiV1Paraphrase429Error1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingParaphraseError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      {
        on: 429,
        kind: "apiV1Paraphrase429Error1",
        decode: { kind: "json", schema: apiV1Paraphrase429Error1Schema },
      },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingRephraseRequest = {
    body: ApiV1RephraseRequest;
  };

  export class SaplingRephraseError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"apiV1Rephrase429Error1", ApiV1Rephrase429Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingRephraseError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      {
        on: 429,
        kind: "apiV1Rephrase429Error1",
        decode: { kind: "json", schema: apiV1Rephrase429Error1Schema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSentenceSplitRequest = {
    body: ApiV1SentenceSplitRequest;
  };

  export class SaplingSentenceSplitError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"apiV1SentenceSplit429Error1", ApiV1SentenceSplit429Error1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSentenceSplitError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      {
        on: 429,
        kind: "apiV1SentenceSplit429Error1",
        decode: { kind: "json", schema: apiV1SentenceSplit429Error1Schema },
      },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSimplifyRequest = {
    body: ApiV1SimplifyRequest2;
  };

  export class SaplingSimplifyError extends ApiError {
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

    static readonly errors: ErrorDecoders<SaplingSimplifyError> = [
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

  export type SaplingSummarizeRequest = {
    body: ApiV1SummarizeRequest2;
  };

  export class SaplingSummarizeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"apiV1Summarize429Error1", ApiV1Summarize429Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSummarizeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      {
        on: 429,
        kind: "apiV1Summarize429Error1",
        decode: { kind: "json", schema: apiV1Summarize429Error1Schema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSummarizeFileRequest = {
    /** @default false */
    returnUsageQuery?: boolean;
    /** Sapling API key, as an alternative to the "Authorization: Bearer <key>" header. */
    key?: string;
    /** The document to upload. */
    file: FileInput;
    /**
     * Optional JSON object (send it as a file part or form field): {"length": "short" | "medium" |
     * "long", "key": "<API key>", "return_usage": true}. `length` defaults to "medium", as on
     * /api/v1/summarize.
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

  export class SaplingSummarizeFileError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1FileSummarize400Error1", ApiV1FileSummarize400Error1>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"apiV1FileSummarize413Error1", ApiV1FileSummarize413Error1>
      | Declared<"apiV1FileSummarize429Error1", ApiV1FileSummarize429Error1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSummarizeFileError> = [
      {
        on: 400,
        kind: "apiV1FileSummarize400Error1",
        decode: { kind: "json", schema: apiV1FileSummarize400Error1Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 413,
        kind: "apiV1FileSummarize413Error1",
        decode: { kind: "json", schema: apiV1FileSummarize413Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1FileSummarize429Error1",
        decode: { kind: "json", schema: apiV1FileSummarize429Error1Schema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingTranslateRequest = {
    body: ApiV1TranslateRequest2;
  };

  export class SaplingTranslateError extends ApiError {
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

    static readonly errors: ErrorDecoders<SaplingTranslateError> = [
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
}
