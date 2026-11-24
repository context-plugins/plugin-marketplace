import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  suggestChangeDiscardRequestSchema,
  type SuggestChangeDiscardRequest,
} from "../models/suggest-change-discard-request.js";
import {
  suggestChangeDiscardResponseSchema,
  type SuggestChangeDiscardResponse,
} from "../models/suggest-change-discard-response.js";
import {
  suggestChangeDiscard400Error1Schema,
  type SuggestChangeDiscard400Error1,
} from "../models/suggest-change-discard400-error1.js";
import {
  suggestChangeMergeRequestSchema,
  type SuggestChangeMergeRequest,
} from "../models/suggest-change-merge-request.js";
import {
  suggestChangeMergeResponseSchema,
  type SuggestChangeMergeResponse,
} from "../models/suggest-change-merge-response.js";
import {
  suggestChangeMerge400Error1Schema,
  type SuggestChangeMerge400Error1,
} from "../models/suggest-change-merge400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Reader-submitted suggested changes — merge or discard
 */
export class Suggestions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Discard suggestion document
   *
   * @remarks
   * Discard and delete a suggestion document without merging it into the base document. The
   * suggestion document must have a docId starting with 'SUGGEST-'.
   *
   * @returns Suggestion successfully discarded
   *
   * @throws {@link Suggestions.DiscardSuggestionDocumentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  discardSuggestionDocument(
    request: Suggestions.DiscardSuggestionDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SuggestChangeDiscardResponse, Suggestions.DiscardSuggestionDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/suggest-change/discard"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: suggestChangeDiscardRequestSchema },
      },
      {
        success: { kind: "json", schema: suggestChangeDiscardResponseSchema },
        errorFactory: Suggestions.DiscardSuggestionDocumentError,
      },
      options,
    );
  }

  /**
   * Merge suggestion into main document
   *
   * @remarks
   * Merge a suggestion document into the base document. The suggestion document must have a docId
   * starting with 'SUGGEST-'.
   *
   * @returns Suggestion successfully merged
   *
   * @throws {@link Suggestions.MergeSuggestionIntoMainDocumentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mergeSuggestionIntoMainDocument(
    request: Suggestions.MergeSuggestionIntoMainDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SuggestChangeMergeResponse, Suggestions.MergeSuggestionIntoMainDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/suggest-change/merge"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: suggestChangeMergeRequestSchema },
      },
      {
        success: { kind: "json", schema: suggestChangeMergeResponseSchema },
        errorFactory: Suggestions.MergeSuggestionIntoMainDocumentError,
      },
      options,
    );
  }
}

export namespace Suggestions {
  export type DiscardSuggestionDocumentRequest = {
    body: SuggestChangeDiscardRequest;
  };

  export class DiscardSuggestionDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"suggestChangeDiscard400Error1", SuggestChangeDiscard400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DiscardSuggestionDocumentError> = [
      {
        on: 400,
        kind: "suggestChangeDiscard400Error1",
        decode: { kind: "json", schema: suggestChangeDiscard400Error1Schema },
      },
    ];
  }

  export type MergeSuggestionIntoMainDocumentRequest = {
    body: SuggestChangeMergeRequest;
  };

  export class MergeSuggestionIntoMainDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"suggestChangeMerge400Error1", SuggestChangeMerge400Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<MergeSuggestionIntoMainDocumentError> = [
      {
        on: 400,
        kind: "suggestChangeMerge400Error1",
        decode: { kind: "json", schema: suggestChangeMerge400Error1Schema },
      },
    ];
  }
}
