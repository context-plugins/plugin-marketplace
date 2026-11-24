import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  aiModeMonitorResponseInternalSchema,
  type AiModeMonitorResponse,
} from "../models/ai-mode-monitor-response.js";
import {
  authenticationErrorCloroDevMonitorApiSchema,
  type AuthenticationErrorCloroDevMonitorApi,
} from "../models/authentication-error-cloro-dev-monitor-api.js";
import {
  bingAiModeMonitorRequestInternalSchema,
  type BingAiModeMonitorRequest,
} from "../models/bing-ai-mode-monitor-request.js";
import {
  bingAiModeMonitorResponseInternalSchema,
  type BingAiModeMonitorResponse,
} from "../models/bing-ai-mode-monitor-response.js";
import { canceledErrorSchema, type CanceledError } from "../models/canceled-error.js";
import {
  chatGptMonitorRequestInternalSchema,
  type ChatGptMonitorRequest,
} from "../models/chat-gpt-monitor-request.js";
import {
  chatGptMonitorResponseInternalSchema,
  type ChatGptMonitorResponse,
} from "../models/chat-gpt-monitor-response.js";
import { concurrentLimitErrorSchema, type ConcurrentLimitError } from "../models/concurrent-limit-error.js";
import {
  copilotMonitorRequestInternalSchema,
  type CopilotMonitorRequest,
} from "../models/copilot-monitor-request.js";
import {
  copilotMonitorResponseInternalSchema,
  type CopilotMonitorResponse,
} from "../models/copilot-monitor-response.js";
import { externalServiceErrorSchema, type ExternalServiceError } from "../models/external-service-error.js";
import {
  forbiddenErrorCloroDevMonitorApiSchema,
  type ForbiddenErrorCloroDevMonitorApi,
} from "../models/forbidden-error-cloro-dev-monitor-api.js";
import {
  geminiMonitorRequestInternalSchema,
  type GeminiMonitorRequest,
} from "../models/gemini-monitor-request.js";
import {
  geminiMonitorResponseInternalSchema,
  type GeminiMonitorResponse,
} from "../models/gemini-monitor-response.js";
import { googleGotoRequestInternalSchema, type GoogleGotoRequest } from "../models/google-goto-request.js";
import { googleGotoResponseInternalSchema, type GoogleGotoResponse } from "../models/google-goto-response.js";
import {
  googleMonitorResponseInternalSchema,
  type GoogleMonitorResponse,
} from "../models/google-monitor-response.js";
import {
  googleNewsMonitorResponseInternalSchema,
  type GoogleNewsMonitorResponse,
} from "../models/google-news-monitor-response.js";
import {
  googleProductRequestInternalSchema,
  type GoogleProductRequest,
} from "../models/google-product-request.js";
import {
  googleProductResponseInternalSchema,
  type GoogleProductResponse,
} from "../models/google-product-response.js";
import { grokMonitorRequestInternalSchema, type GrokMonitorRequest } from "../models/grok-monitor-request.js";
import {
  grokMonitorResponseInternalSchema,
  type GrokMonitorResponse,
} from "../models/grok-monitor-response.js";
import { internalErrorSchema, type InternalError } from "../models/internal-error.js";
import { notFoundErrorSchema, type NotFoundError } from "../models/not-found-error.js";
import {
  perplexityMonitorRequestInternalSchema,
  type PerplexityMonitorRequest,
} from "../models/perplexity-monitor-request.js";
import {
  perplexityMonitorResponseInternalSchema,
  type PerplexityMonitorResponse,
} from "../models/perplexity-monitor-response.js";
import { rateLimitErrorSchema, type RateLimitError } from "../models/rate-limit-error.js";
import {
  aiModeMonitorRequest2InternalSchema,
  type AiModeMonitorRequest2,
} from "../models/unions/ai-mode-monitor-request2.js";
import {
  googleMonitorRequest3InternalSchema,
  type GoogleMonitorRequest3,
} from "../models/unions/google-monitor-request3.js";
import {
  googleNewsMonitorRequest2InternalSchema,
  type GoogleNewsMonitorRequest2,
} from "../models/unions/google-news-monitor-request2.js";
import {
  validationErrorCloroDevMonitorApiSchema,
  type ValidationErrorCloroDevMonitorApi,
} from "../models/validation-error-cloro-dev-monitor-api.js";
import type { Servers } from "../servers.js";

export class Monitor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Google shopping card product
   *
   * @remarks
   * Return the product panel that a Google Search shopping card or a Google AI Mode product opens:
   * merchant offers, description, specifications, reviews, images and related products. Send the
   * `productResultToken` from a Google Search `result.shoppingCards` card, or from a Google AI Mode
   * `result.shoppingCards` or `result.inlineProducts` entry.
   *
   * Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token
   * expires five minutes after the scrape that issued it. If you send the request async, set a high
   * `priority`, so that the token does not expire in the queue.
   *
   * @returns The product panel for the token
   *
   * @throws {@link Monitor.GetGoogleProductError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGoogleProduct(
    request: Monitor.GetGoogleProductRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleProductResponse, Monitor.GetGoogleProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/google/product"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleProductRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: googleProductResponseInternalSchema },
        errorFactory: Monitor.GetGoogleProductError,
      },
      options,
    );
  }

  /**
   * Monitor AI Mode Responses
   *
   * @remarks
   * Extract structured data from AI Mode about your brand, products, or any topic across various
   * regions
   *
   * @returns successful AI Mode monitoring response
   *
   * @throws {@link Monitor.MonitorAiModeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorAiMode(
    request: Monitor.MonitorAiModeRequest,
    options?: RequestOptions,
  ): ApiPromise<AiModeMonitorResponse, Monitor.MonitorAiModeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/aimode"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aiModeMonitorRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: aiModeMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorAiModeError,
      },
      options,
    );
  }

  /**
   * Monitor Bing AI Mode Responses
   *
   * @remarks
   * Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a
   * prompt, in the country you select.
   *
   * @returns successful Bing AI Mode monitoring response
   *
   * @throws {@link Monitor.MonitorBingAiModeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorBingAiMode(
    request: Monitor.MonitorBingAiModeRequest,
    options?: RequestOptions,
  ): ApiPromise<BingAiModeMonitorResponse, Monitor.MonitorBingAiModeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/bing/aimode"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bingAiModeMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bingAiModeMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorBingAiModeError,
      },
      options,
    );
  }

  /**
   * Monitor ChatGPT Responses
   *
   * @remarks
   * Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand
   * entities, and ads — for any prompt across supported regions
   *
   * @returns successful ChatGPT monitoring response
   *
   * @throws {@link Monitor.MonitorChatgptError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorChatgpt(
    request: Monitor.MonitorChatgptRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatGptMonitorResponse, Monitor.MonitorChatgptError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/chatgpt"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: chatGptMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: chatGptMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorChatgptError,
      },
      options,
    );
  }

  /**
   * Monitor Copilot Responses
   *
   * @remarks
   * Extract structured data from Microsoft Copilot about your brand, products, or any topic across
   * various regions
   *
   * @returns successful Copilot monitoring response
   *
   * @throws {@link Monitor.MonitorCopilotError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorCopilot(
    request: Monitor.MonitorCopilotRequest,
    options?: RequestOptions,
  ): ApiPromise<CopilotMonitorResponse, Monitor.MonitorCopilotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/copilot"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: copilotMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: copilotMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorCopilotError,
      },
      options,
    );
  }

  /**
   * Monitor Gemini Responses
   *
   * @remarks
   * Extract structured data from Google Gemini — generated answer text and cited sources for any
   * prompt, with Markdown and HTML export formats
   *
   * @returns successful Gemini monitoring response
   *
   * @throws {@link Monitor.MonitorGeminiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorGemini(
    request: Monitor.MonitorGeminiRequest,
    options?: RequestOptions,
  ): ApiPromise<GeminiMonitorResponse, Monitor.MonitorGeminiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/gemini"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: geminiMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: geminiMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorGeminiError,
      },
      options,
    );
  }

  /**
   * Monitor Google Search Results
   *
   * @remarks
   * Extract structured data from Google Search including organic results, People Also Ask, related
   * searches, and optional AI Overview
   *
   * @returns successful Google monitoring response
   *
   * @throws {@link Monitor.MonitorGoogleError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorGoogle(
    request: Monitor.MonitorGoogleRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleMonitorResponse, Monitor.MonitorGoogleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/google"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleMonitorRequest3InternalSchema },
      },
      {
        success: { kind: "json", schema: googleMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorGoogleError,
      },
      options,
    );
  }

  /**
   * Monitor Google News Results
   *
   * @remarks
   * Extract structured news articles from Google News including titles, links, snippets, sources,
   * dates, and thumbnails
   *
   * @returns successful Google News monitoring response
   *
   * @throws {@link Monitor.MonitorGoogleNewsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorGoogleNews(
    request: Monitor.MonitorGoogleNewsRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleNewsMonitorResponse, Monitor.MonitorGoogleNewsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/google/news"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleNewsMonitorRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: googleNewsMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorGoogleNewsError,
      },
      options,
    );
  }

  /**
   * Monitor Grok Responses
   *
   * @remarks
   * Extract structured data from Grok — answer text and cited sources, including X/Twitter
   * references — for any prompt across supported regions
   *
   * @returns successful Grok monitoring response
   *
   * @throws {@link Monitor.MonitorGrokError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorGrok(
    request: Monitor.MonitorGrokRequest,
    options?: RequestOptions,
  ): ApiPromise<GrokMonitorResponse, Monitor.MonitorGrokError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/grok"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: grokMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: grokMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorGrokError,
      },
      options,
    );
  }

  /**
   * Monitor Perplexity Responses
   *
   * @remarks
   * Extract structured data from Perplexity AI about your brand, products, or any topic across
   * various regions
   *
   * @returns successful Perplexity monitoring response
   *
   * @throws {@link Monitor.MonitorPerplexityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  monitorPerplexity(
    request: Monitor.MonitorPerplexityRequest,
    options?: RequestOptions,
  ): ApiPromise<PerplexityMonitorResponse, Monitor.MonitorPerplexityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/perplexity"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: perplexityMonitorRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: perplexityMonitorResponseInternalSchema },
        errorFactory: Monitor.MonitorPerplexityError,
      },
      options,
    );
  }

  /**
   * Resolve a Google redirect link
   *
   * @remarks
   * Resolve one Google redirect link to its destination URL. Send the `redirectLink` that ships
   * beside every resolved link on a Google Search, Google News, or AI Mode response, and the
   * response gives you the URL it points to.
   *
   * Charges no credits, does not use a concurrency slot, and counts against the per-second rate
   * limit like any other call. Each request resolves one link, and Google gets at most 10 seconds
   * to answer.
   *
   * @returns The destination the redirect link points to
   *
   * @throws {@link Monitor.ResolveGoogleGotoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resolveGoogleGoto(
    request: Monitor.ResolveGoogleGotoRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleGotoResponse, Monitor.ResolveGoogleGotoError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/monitor/google/goto"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleGotoRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: googleGotoResponseInternalSchema },
        errorFactory: Monitor.ResolveGoogleGotoError,
      },
      options,
    );
  }
}

export namespace Monitor {
  export type GetGoogleProductRequest = {
    /** The token from a Google Search shopping card */
    body: GoogleProductRequest;
  };

  export class GetGoogleProductError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"notFoundError", NotFoundError>
      | Declared<"notFoundError2", NotFoundError>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Declared<"externalServiceError", ExternalServiceError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGoogleProductError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 404, kind: "notFoundError", decode: { kind: "json", schema: notFoundErrorSchema } },
      { on: 410, kind: "notFoundError2", decode: { kind: "json", schema: notFoundErrorSchema } },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
      { on: 502, kind: "externalServiceError", decode: { kind: "json", schema: externalServiceErrorSchema } },
    ];
  }

  export type MonitorAiModeRequest = {
    /** Request parameters for monitoring AI Mode responses */
    body: AiModeMonitorRequest2;
  };

  export class MonitorAiModeError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorAiModeError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorBingAiModeRequest = {
    /** Request parameters for monitoring Bing AI Mode responses */
    body: BingAiModeMonitorRequest;
  };

  export class MonitorBingAiModeError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorBingAiModeError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorChatgptRequest = {
    /** Request parameters for monitoring ChatGPT responses */
    body: ChatGptMonitorRequest;
  };

  export class MonitorChatgptError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorChatgptError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorCopilotRequest = {
    /** Request parameters for monitoring Copilot responses */
    body: CopilotMonitorRequest;
  };

  export class MonitorCopilotError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorCopilotError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorGeminiRequest = {
    /** Request parameters for monitoring Gemini responses */
    body: GeminiMonitorRequest;
  };

  export class MonitorGeminiError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorGeminiError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorGoogleRequest = {
    /** Request parameters for monitoring Google search results */
    body: GoogleMonitorRequest3;
  };

  export class MonitorGoogleError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorGoogleError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorGoogleNewsRequest = {
    /** Request parameters for monitoring Google News results */
    body: GoogleNewsMonitorRequest2;
  };

  export class MonitorGoogleNewsError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorGoogleNewsError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorGrokRequest = {
    /** Request parameters for monitoring Grok responses */
    body: GrokMonitorRequest;
  };

  export class MonitorGrokError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorGrokError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type MonitorPerplexityRequest = {
    /** Request parameters for monitoring Perplexity responses */
    body: PerplexityMonitorRequest;
  };

  export class MonitorPerplexityError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"forbiddenErrorCloroDevMonitorApi", ForbiddenErrorCloroDevMonitorApi>
      | Declared<"concurrentLimitError", ConcurrentLimitError>
      | Declared<"canceledError", CanceledError>
      | Declared<"internalError", InternalError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MonitorPerplexityError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 403,
        kind: "forbiddenErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: forbiddenErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "concurrentLimitError", decode: { kind: "json", schema: concurrentLimitErrorSchema } },
      { on: 499, kind: "canceledError", decode: { kind: "json", schema: canceledErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
    ];
  }

  export type ResolveGoogleGotoRequest = {
    /** The Google redirect link to resolve */
    body: GoogleGotoRequest;
  };

  export class ResolveGoogleGotoError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevMonitorApi", ValidationErrorCloroDevMonitorApi>
      | Declared<"authenticationErrorCloroDevMonitorApi", AuthenticationErrorCloroDevMonitorApi>
      | Declared<"rateLimitError", RateLimitError>
      | Declared<"internalError", InternalError>
      | Declared<"externalServiceError", ExternalServiceError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResolveGoogleGotoError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: validationErrorCloroDevMonitorApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevMonitorApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevMonitorApiSchema },
      },
      { on: 429, kind: "rateLimitError", decode: { kind: "json", schema: rateLimitErrorSchema } },
      { on: 500, kind: "internalError", decode: { kind: "json", schema: internalErrorSchema } },
      { on: 502, kind: "externalServiceError", decode: { kind: "json", schema: externalServiceErrorSchema } },
    ];
  }
}
