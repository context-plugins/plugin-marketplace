import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1ArticleideasResponseSchema,
  type V1ArticleideasResponse,
} from "../models/v1-articleideas-response.js";
import {
  v1CodedetectorRequestSchema,
  type V1CodedetectorRequest,
} from "../models/v1-codedetector-request.js";
import {
  v1CodedetectorResponseSchema,
  type V1CodedetectorResponse,
} from "../models/v1-codedetector-response.js";
import {
  v1ImagecaptionResponseSchema,
  type V1ImagecaptionResponse,
} from "../models/v1-imagecaption-response.js";
import {
  v1ImagetotextResponseSchema,
  type V1ImagetotextResponse,
} from "../models/v1-imagetotext-response.js";
import {
  v1LanguagedetectorRequestSchema,
  type V1LanguagedetectorRequest,
} from "../models/v1-languagedetector-request.js";
import {
  v1LanguagedetectorResponseSchema,
  type V1LanguagedetectorResponse,
} from "../models/v1-languagedetector-response.js";
import {
  v1SentimentanalysisRequestSchema,
  type V1SentimentanalysisRequest,
} from "../models/v1-sentimentanalysis-request.js";
import {
  v1SentimentanalysisResponseSchema,
  type V1SentimentanalysisResponse,
} from "../models/v1-sentimentanalysis-response.js";
import type { Servers } from "../servers.js";

export class AiComputerVision {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Article Ideas Generator
   *
   * @remarks
   * Generate article ideas based on a topic using Artificial Intelligence
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.ArticleideasError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  articleideas(
    request: AiComputerVision.ArticleideasRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ArticleideasResponse, AiComputerVision.ArticleideasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/articleideas"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "topic", value: request.topic, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ArticleideasResponseSchema },
        errorFactory: AiComputerVision.ArticleideasError,
      },
      options,
    );
  }

  /**
   * Code Detector
   *
   * @remarks
   * Code Detector is a simple tool for detecting the language of code in text. It returns details
   * such as extension, language, family, and more.
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.CodedetectorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  codedetector(
    request: AiComputerVision.CodedetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CodedetectorResponse, AiComputerVision.CodedetectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/codedetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1CodedetectorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1CodedetectorResponseSchema },
        errorFactory: AiComputerVision.CodedetectorError,
      },
      options,
    );
  }

  /**
   * Image Caption
   *
   * @remarks
   * Image Caption is an AI-powered tool that generates descriptive captions for images. Simply
   * upload an image and receive a natural language description of its contents.
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.ImagecaptionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  imagecaption(
    request: AiComputerVision.ImagecaptionRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ImagecaptionResponse, AiComputerVision.ImagecaptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/imagecaption"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1ImagecaptionResponseSchema },
        errorFactory: AiComputerVision.ImagecaptionError,
      },
      options,
    );
  }

  /**
   * Image to Text
   *
   * @remarks
   * Extract text from an uploaded image using OCR
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.ImagetotextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  imagetotext(
    request: AiComputerVision.ImagetotextRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ImagetotextResponse, AiComputerVision.ImagetotextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/imagetotext"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1ImagetotextResponseSchema },
        errorFactory: AiComputerVision.ImagetotextError,
      },
      options,
    );
  }

  /**
   * Language Detector
   *
   * @remarks
   * Detect the language of a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.LanguagedetectorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  languagedetector(
    request: AiComputerVision.LanguagedetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LanguagedetectorResponse, AiComputerVision.LanguagedetectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/languagedetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1LanguagedetectorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1LanguagedetectorResponseSchema },
        errorFactory: AiComputerVision.LanguagedetectorError,
      },
      options,
    );
  }

  /**
   * Sentiment Analysis
   *
   * @remarks
   * Analyze the sentiment of a body of text
   *
   * @returns Successful Response
   *
   * @throws {@link AiComputerVision.SentimentanalysisError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sentimentanalysis(
    request: AiComputerVision.SentimentanalysisRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SentimentanalysisResponse, AiComputerVision.SentimentanalysisError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/sentimentanalysis"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SentimentanalysisRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SentimentanalysisResponseSchema },
        errorFactory: AiComputerVision.SentimentanalysisError,
      },
      options,
    );
  }
}

export namespace AiComputerVision {
  export type ArticleideasRequest = {
    /** The topic for which you want to generate article ideas (up to 50 characters) */
    topic: string;
  };

  export class ArticleideasError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArticleideasError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CodedetectorRequest = {
    body: V1CodedetectorRequest;
  };

  export class CodedetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CodedetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ImagecaptionRequest = {
    /** File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) */
    image: FileInput;
  };

  export class ImagecaptionError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImagecaptionError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ImagetotextRequest = {
    /** File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB) */
    image: FileInput;
  };

  export class ImagetotextError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImagetotextError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type LanguagedetectorRequest = {
    body: V1LanguagedetectorRequest;
  };

  export class LanguagedetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<LanguagedetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SentimentanalysisRequest = {
    body: V1SentimentanalysisRequest;
  };

  export class SentimentanalysisError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SentimentanalysisError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
