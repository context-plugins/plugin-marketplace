import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1CustomFilterRequestSchema,
  type ApiV1CustomFilterRequest,
} from "../models/api-v1-custom-filter-request.js";
import {
  apiV1CustomFilterResponseSchema,
  type ApiV1CustomFilterResponse,
} from "../models/api-v1-custom-filter-response.js";
import {
  apiV1CustomFilterResponse1Schema,
  type ApiV1CustomFilterResponse1,
} from "../models/api-v1-custom-filter-response1.js";
import {
  apiV1CustomMappingRequestSchema,
  type ApiV1CustomMappingRequest,
} from "../models/api-v1-custom-mapping-request.js";
import {
  apiV1CustomMappingResponseSchema,
  type ApiV1CustomMappingResponse,
} from "../models/api-v1-custom-mapping-response.js";
import {
  apiV1CustomMappingResponse1Schema,
  type ApiV1CustomMappingResponse1,
} from "../models/api-v1-custom-mapping-response1.js";
import {
  apiV1DictionaryRequestSchema,
  type ApiV1DictionaryRequest,
} from "../models/api-v1-dictionary-request.js";
import {
  apiV1DictionaryResponseSchema,
  type ApiV1DictionaryResponse,
} from "../models/api-v1-dictionary-response.js";
import {
  apiV1DictionaryResponse1Schema,
  type ApiV1DictionaryResponse1,
} from "../models/api-v1-dictionary-response1.js";
import {
  apiV1EditsAcceptRequestInternalSchema,
  type ApiV1EditsAcceptRequest,
} from "../models/api-v1-edits-accept-request.js";
import {
  apiV1EditsAcceptResponseSchema,
  type ApiV1EditsAcceptResponse,
} from "../models/api-v1-edits-accept-response.js";
import {
  apiV1EditsRejectRequestInternalSchema,
  type ApiV1EditsRejectRequest,
} from "../models/api-v1-edits-reject-request.js";
import {
  apiV1EditsRejectResponseSchema,
  type ApiV1EditsRejectResponse,
} from "../models/api-v1-edits-reject-response.js";
import { apiV1EditsRequestSchema, type ApiV1EditsRequest } from "../models/api-v1-edits-request.js";
import {
  apiV1SpellcheckRequestSchema,
  type ApiV1SpellcheckRequest,
} from "../models/api-v1-spellcheck-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { payloadTooLarge1Schema, type PayloadTooLarge1 } from "../models/payload-too-large1.js";
import { paymentRequired1Schema, type PaymentRequired1 } from "../models/payment-required1.js";
import { rateLimited1Schema, type RateLimited1 } from "../models/rate-limited1.js";
import {
  apiV1EditsAcceptResponse11Schema,
  type ApiV1EditsAcceptResponse11,
} from "../models/unions/api-v1-edits-accept-response11.js";
import {
  apiV1EditsRejectResponse11Schema,
  type ApiV1EditsRejectResponse11,
} from "../models/unions/api-v1-edits-reject-response11.js";
import {
  apiV1EditsResponse1InternalSchema,
  type ApiV1EditsResponse1,
} from "../models/unions/api-v1-edits-response1.js";
import {
  apiV1EditsResponse11Schema,
  type ApiV1EditsResponse11,
} from "../models/unions/api-v1-edits-response11.js";
import {
  apiV1SpellcheckResponse1InternalSchema,
  type ApiV1SpellcheckResponse1,
} from "../models/unions/api-v1-spellcheck-response1.js";
import type { Servers } from "../servers.js";

/**
 * Grammar and spelling correction.
 */
export class Proofreading {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Record an accepted edit
   *
   * @remarks
   * Report that the user accepted a suggestion returned by /api/v1/edits or /api/v1/spellcheck.
   * Feedback improves the suggestions shown to that user. The body must be a non-empty JSON object;
   * include `user_id` or the feedback is not recorded.
   *
   * @returns Acknowledged.
   *
   * @throws {@link Proofreading.SaplingAcceptEditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAcceptEdit(
    request: Proofreading.SaplingAcceptEditRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1EditsAcceptResponse, Proofreading.SaplingAcceptEditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/edits/{edit_hash}/accept"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [{ name: "edit_hash", value: request.editHash, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1EditsAcceptRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1EditsAcceptResponseSchema },
        errorFactory: Proofreading.SaplingAcceptEditError,
      },
      options,
    );
  }

  /**
   * Add a custom filter
   *
   * @remarks
   * Suppress suggestions that change `inp` into `out`. Note the request keys are `inp`/`out` while
   * responses use `input`/`output`.
   *
   * @returns The created filter.
   *
   * @throws {@link Proofreading.SaplingAddCustomFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAddCustomFilter(
    request: Proofreading.SaplingAddCustomFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CustomFilterResponse1, Proofreading.SaplingAddCustomFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/custom_filter"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1CustomFilterRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1CustomFilterResponse1Schema },
        errorFactory: Proofreading.SaplingAddCustomFilterError,
      },
      options,
    );
  }

  /**
   * Add a custom mapping
   *
   * @remarks
   * Suggest `mapping` whenever `entry` appears in checked text.
   *
   * @returns The created mapping.
   *
   * @throws {@link Proofreading.SaplingAddCustomMappingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAddCustomMapping(
    request: Proofreading.SaplingAddCustomMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CustomMappingResponse1, Proofreading.SaplingAddCustomMappingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/custom_mapping"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1CustomMappingRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1CustomMappingResponse1Schema },
        errorFactory: Proofreading.SaplingAddCustomMappingError,
      },
      options,
    );
  }

  /**
   * Add a custom dictionary entry
   *
   * @remarks
   * Add a word the grammar and spelling checkers should accept.
   *
   * @returns The created entry.
   *
   * @throws {@link Proofreading.SaplingAddDictionaryEntryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingAddDictionaryEntry(
    request: Proofreading.SaplingAddDictionaryEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1DictionaryResponse1, Proofreading.SaplingAddDictionaryEntryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/dictionary"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DictionaryRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1DictionaryResponse1Schema },
        errorFactory: Proofreading.SaplingAddDictionaryEntryError,
      },
      options,
    );
  }

  /**
   * Delete a custom filter
   *
   * @remarks
   * Remove a filter by the `id` returned when listing or adding it.
   *
   * @returns Deleted. Empty body.
   *
   * @throws {@link Proofreading.SaplingDeleteCustomFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDeleteCustomFilter(
    request: Proofreading.SaplingDeleteCustomFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Proofreading.SaplingDeleteCustomFilterError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/custom_filter/{filter_id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [{ name: "filter_id", value: request.filterId, schema: s.string() }],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Proofreading.SaplingDeleteCustomFilterError,
      },
      options,
    );
  }

  /**
   * Delete a custom mapping
   *
   * @remarks
   * Remove a mapping by the `id` returned when listing or adding it.
   *
   * @returns Deleted. Empty body.
   *
   * @throws {@link Proofreading.SaplingDeleteCustomMappingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDeleteCustomMapping(
    request: Proofreading.SaplingDeleteCustomMappingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Proofreading.SaplingDeleteCustomMappingError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/custom_mapping/{mapping_id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [{ name: "mapping_id", value: request.mappingId, schema: s.string() }],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Proofreading.SaplingDeleteCustomMappingError,
      },
      options,
    );
  }

  /**
   * Delete a custom dictionary entry
   *
   * @remarks
   * Remove an entry by the `id` returned when listing or adding it.
   *
   * @returns Deleted. Empty body.
   *
   * @throws {@link Proofreading.SaplingDeleteDictionaryEntryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingDeleteDictionaryEntry(
    request: Proofreading.SaplingDeleteDictionaryEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Proofreading.SaplingDeleteDictionaryEntryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/dictionary/{entry_id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [{ name: "entry_id", value: request.entryId, schema: s.string() }],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Proofreading.SaplingDeleteDictionaryEntryError,
      },
      options,
    );
  }

  /**
   * Grammar and spelling check
   *
   * @remarks
   * Check text for grammar, spelling, and style issues. Returns a list of suggested edits, each
   * with the sentence, character span (start/end), replacement text, and an error type. Set
   * auto_apply=true to also receive applied_text: the input with all suggested edits already
   * applied (useful to return a corrected document in one call). Set include_error_categories=false
   * to skip error classification and get only the corrections and offsets back (faster and lighter
   * when you only need to apply fixes). Supports many languages via the lang parameter. If the
   * result carries a degraded object it is partial: some sentences may be missing some or all of
   * their corrections (the edits returned are still valid); call again for a complete result.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/edits-overview/ With noformat=true (the SDK response shape) the
   * body is a bare array of edit objects instead. A partial result (some corrections may be
   * missing) adds a `degraded` object; retry for a complete result.
   *
   * @throws {@link Proofreading.SaplingGrammarCheckError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingGrammarCheck(
    request: Proofreading.SaplingGrammarCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1EditsResponse1, Proofreading.SaplingGrammarCheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/edits"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1EditsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1EditsResponse1InternalSchema },
        errorFactory: Proofreading.SaplingGrammarCheckError,
      },
      options,
    );
  }

  /**
   * List custom filters
   *
   * @remarks
   * Rules that suppress a specific suggestion (input -> output) from /api/v1/edits.
   *
   * @returns Custom filters.
   *
   * @throws {@link Proofreading.SaplingListCustomFiltersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingListCustomFilters(
    request: Proofreading.SaplingListCustomFiltersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CustomFilterResponse, Proofreading.SaplingListCustomFiltersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/custom_filter"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CustomFilterResponseSchema },
        errorFactory: Proofreading.SaplingListCustomFiltersError,
      },
      options,
    );
  }

  /**
   * List custom mappings
   *
   * @remarks
   * Custom replacement rules (entry -> mapping) applied as suggestions by /api/v1/edits.
   *
   * @returns Custom mappings.
   *
   * @throws {@link Proofreading.SaplingListCustomMappingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingListCustomMappings(
    request: Proofreading.SaplingListCustomMappingsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CustomMappingResponse, Proofreading.SaplingListCustomMappingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/custom_mapping"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CustomMappingResponseSchema },
        errorFactory: Proofreading.SaplingListCustomMappingsError,
      },
      options,
    );
  }

  /**
   * List custom dictionary entries
   *
   * @remarks
   * Words the grammar and spelling checkers accept as correct for this account. Returns a bare JSON
   * array sorted by entry.
   *
   * @returns Dictionary entries.
   *
   * @throws {@link Proofreading.SaplingListDictionaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingListDictionary(
    request: Proofreading.SaplingListDictionaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1DictionaryResponse[], Proofreading.SaplingListDictionaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/dictionary"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "return_usage", value: request.returnUsage, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiV1DictionaryResponseSchema)) },
        errorFactory: Proofreading.SaplingListDictionaryError,
      },
      options,
    );
  }

  /**
   * Record a rejected edit
   *
   * @remarks
   * Report that the user rejected a suggestion returned by /api/v1/edits or /api/v1/spellcheck;
   * similar suggestions are then suppressed for that user. The body must be a non-empty JSON
   * object; include `user_id` or the feedback is not recorded.
   *
   * @returns Acknowledged.
   *
   * @throws {@link Proofreading.SaplingRejectEditError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingRejectEdit(
    request: Proofreading.SaplingRejectEditRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1EditsRejectResponse, Proofreading.SaplingRejectEditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/edits/{edit_hash}/reject"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [{ name: "edit_hash", value: request.editHash, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1EditsRejectRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: apiV1EditsRejectResponseSchema },
        errorFactory: Proofreading.SaplingRejectEditError,
      },
      options,
    );
  }

  /**
   * Spelling-only check
   *
   * @remarks
   * Check text for spelling errors only (no grammar or style suggestions). Returns edits in the
   * same format as sapling_grammar_check. Faster and cheaper than a full grammar check when only
   * misspellings matter. A result carrying a degraded object is partial; call again for a complete
   * result.
   *
   * @returns Successful response. Field-level schemas and examples:
   * https://sapling.ai/docs/api/spellcheck/ With noformat=true (the SDK response shape) the body is
   * a bare array of edit objects instead. A partial result (some corrections may be missing) adds a
   * `degraded` object; retry for a complete result.
   *
   * @throws {@link Proofreading.SaplingSpellcheckError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SaplingError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  saplingSpellcheck(
    request: Proofreading.SaplingSpellcheckRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1SpellcheckResponse1, Proofreading.SaplingSpellcheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/spellcheck"),
        auth: orAnonymous(anyAuth(this.#auth.bearerAuth, this.#auth.oauth2)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1SpellcheckRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1SpellcheckResponse1InternalSchema },
        errorFactory: Proofreading.SaplingSpellcheckError,
      },
      options,
    );
  }
}

export namespace Proofreading {
  export type SaplingAcceptEditRequest = {
    /** The edit's `id` from /edits. */
    editHash: string;
    body: ApiV1EditsAcceptRequest;
  };

  export class SaplingAcceptEditError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1EditsAcceptResponse11", ApiV1EditsAcceptResponse11>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAcceptEditError> = [
      {
        on: 400,
        kind: "apiV1EditsAcceptResponse11",
        decode: { kind: "json", schema: apiV1EditsAcceptResponse11Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAddCustomFilterRequest = {
    body: ApiV1CustomFilterRequest;
  };

  export class SaplingAddCustomFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAddCustomFilterError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAddCustomMappingRequest = {
    body: ApiV1CustomMappingRequest;
  };

  export class SaplingAddCustomMappingError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAddCustomMappingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingAddDictionaryEntryRequest = {
    body: ApiV1DictionaryRequest;
  };

  export class SaplingAddDictionaryEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingAddDictionaryEntryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDeleteCustomFilterRequest = {
    /** Custom filter id. */
    filterId: string;
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingDeleteCustomFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDeleteCustomFilterError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDeleteCustomMappingRequest = {
    /** Custom mapping id. */
    mappingId: string;
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingDeleteCustomMappingError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDeleteCustomMappingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingDeleteDictionaryEntryRequest = {
    /** Dictionary entry id. */
    entryId: string;
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingDeleteDictionaryEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingDeleteDictionaryEntryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingGrammarCheckRequest = {
    body: ApiV1EditsRequest;
  };

  export class SaplingGrammarCheckError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1EditsResponse11", ApiV1EditsResponse11>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingGrammarCheckError> = [
      { on: 400, kind: "apiV1EditsResponse11", decode: { kind: "json", schema: apiV1EditsResponse11Schema } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingListCustomFiltersRequest = {
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingListCustomFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingListCustomFiltersError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingListCustomMappingsRequest = {
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingListCustomMappingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingListCustomMappingsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingListDictionaryRequest = {
    /** @default false */
    returnUsage?: boolean;
  };

  export class SaplingListDictionaryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingListDictionaryError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingRejectEditRequest = {
    /** The edit's `id` from /edits. */
    editHash: string;
    body: ApiV1EditsRejectRequest;
  };

  export class SaplingRejectEditError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1EditsRejectResponse11", ApiV1EditsRejectResponse11>
      | Declared<"error", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error2", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingRejectEditError> = [
      {
        on: 400,
        kind: "apiV1EditsRejectResponse11",
        decode: { kind: "json", schema: apiV1EditsRejectResponse11Schema },
      },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SaplingSpellcheckRequest = {
    body: ApiV1SpellcheckRequest;
  };

  export class SaplingSpellcheckError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"paymentRequired1", PaymentRequired1>
      | Declared<"error3", Error>
      | Declared<"payloadTooLarge1", PayloadTooLarge1>
      | Declared<"rateLimited1", RateLimited1>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaplingSpellcheckError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "paymentRequired1", decode: { kind: "json", schema: paymentRequired1Schema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "payloadTooLarge1", decode: { kind: "json", schema: payloadTooLarge1Schema } },
      { on: 429, kind: "rateLimited1", decode: { kind: "json", schema: rateLimited1Schema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
