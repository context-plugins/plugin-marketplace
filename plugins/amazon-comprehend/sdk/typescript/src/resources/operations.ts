import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonComprehendOperationsApiSchema,
  type XAmzTargetAmazonComprehendOperationsApi,
} from "../models/xamz-target-amazon-comprehend-operations-api.js";
import {
  xAmzTarget1AmazonComprehendOperationsApiSchema,
  type XAmzTarget1AmazonComprehendOperationsApi,
} from "../models/xamz-target1-amazon-comprehend-operations-api.js";
import {
  xAmzTarget2AmazonComprehendOperationsApiSchema,
  type XAmzTarget2AmazonComprehendOperationsApi,
} from "../models/xamz-target2-amazon-comprehend-operations-api.js";
import {
  xAmzTarget3AmazonComprehendOperationsApiSchema,
  type XAmzTarget3AmazonComprehendOperationsApi,
} from "../models/xamz-target3-amazon-comprehend-operations-api.js";
import {
  xAmzTarget4AmazonComprehendOperationsApiSchema,
  type XAmzTarget4AmazonComprehendOperationsApi,
} from "../models/xamz-target4-amazon-comprehend-operations-api.js";
import {
  xAmzTarget5AmazonComprehendOperationsApiSchema,
  type XAmzTarget5AmazonComprehendOperationsApi,
} from "../models/xamz-target5-amazon-comprehend-operations-api.js";
import {
  xAmzTarget6AmazonComprehendOperationsApiSchema,
  type XAmzTarget6AmazonComprehendOperationsApi,
} from "../models/xamz-target6-amazon-comprehend-operations-api.js";
import {
  xAmzTarget7AmazonComprehendOperationsApiSchema,
  type XAmzTarget7AmazonComprehendOperationsApi,
} from "../models/xamz-target7-amazon-comprehend-operations-api.js";
import {
  xAmzTarget8AmazonComprehendOperationsApiSchema,
  type XAmzTarget8AmazonComprehendOperationsApi,
} from "../models/xamz-target8-amazon-comprehend-operations-api.js";
import {
  xAmzTarget9AmazonComprehendOperationsApiSchema,
  type XAmzTarget9AmazonComprehendOperationsApi,
} from "../models/xamz-target9-amazon-comprehend-operations-api.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Classify Document
   *
   * @remarks
   * Creates a classification request to analyze a single document in real-time. ClassifyDocument
   * supports the following model types: Custom classifier - a custom model that you have created
   * and trained. For input, you can provide plain text, a single-page document (PDF, Word, or
   * image), or Amazon Textract API output. For more information, see Custom classification in the
   * Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a
   * pre-trained model for classifying input prompts for generative AI applications. For input, you
   * provide English plain text input. For prompt safety classification, the response includes only
   * the Classes field. For more information about prompt safety classifiers, see Prompt safety
   * classification in the Amazon Comprehend Developer Guide. If the system detects errors while
   * processing a page in the input document, the API response includes an Errors field that
   * describes the errors. If the system detects a document-level error in your input document, the
   * API returns an InvalidRequestException error response. For details about this exception, see
   * Errors in semi-structured documents in the Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.ClassifyDocument2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  classifyDocument2(
    request: Operations.ClassifyDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ClassifyDocument2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ClassifyDocument"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ClassifyDocument2Error,
      },
      options,
    );
  }

  /**
   * Contains Pii Entities
   *
   * @remarks
   * Analyzes input text for the presence of personally identifiable information (PII) and returns
   * the labels of identified PII entity types such as name, address, bank account number, or phone
   * number.
   *
   * @returns Success
   *
   * @throws {@link Operations.ContainsPiiEntities2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  containsPiiEntities2(
    request: Operations.ContainsPiiEntities2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ContainsPiiEntities2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ContainsPiiEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ContainsPiiEntities2Error,
      },
      options,
    );
  }

  /**
   * Detect Dominant Language
   *
   * @remarks
   * Determines the dominant language of the input text. For a list of languages that Amazon
   * Comprehend can detect, see Amazon Comprehend Supported Languages.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectDominantLanguage2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectDominantLanguage2(
    request: Operations.DetectDominantLanguage2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectDominantLanguage2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectDominantLanguage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectDominantLanguage2Error,
      },
      options,
    );
  }

  /**
   * Detect Entities
   *
   * @remarks
   * Detects named entities in input text when you use the pre-trained model. Detects custom
   * entities if you have a custom entity recognition model. When detecting named entities using the
   * pre-trained model, use plain text as the input. For more information about named entities, see
   * Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you
   * can input plain text or you can upload a single-page input document (text, PDF, Word, or
   * image). If the system detects errors while processing a page in the input document, the API
   * response includes an entry in Errors for each error. If the system detects a document-level
   * error in your input document, the API returns an InvalidRequestException error response. For
   * details about this exception, see Errors in semi-structured documents in the Comprehend
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectEntities2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectEntities2(
    request: Operations.DetectEntities2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectEntities2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectEntities2Error,
      },
      options,
    );
  }

  /**
   * Detect Key Phrases
   *
   * @remarks
   * Detects the key noun phrases found in the text.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectKeyPhrases2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectKeyPhrases2(
    request: Operations.DetectKeyPhrases2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectKeyPhrases2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectKeyPhrases"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectKeyPhrases2Error,
      },
      options,
    );
  }

  /**
   * Detect Pii Entities
   *
   * @remarks
   * Inspects the input text for entities that contain personally identifiable information (PII) and
   * returns information about them.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectPiiEntities2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectPiiEntities2(
    request: Operations.DetectPiiEntities2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectPiiEntities2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectPiiEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectPiiEntities2Error,
      },
      options,
    );
  }

  /**
   * Detect Sentiment
   *
   * @remarks
   * Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED,
   * or NEGATIVE).
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectSentiment2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectSentiment2(
    request: Operations.DetectSentiment2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectSentiment2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectSentiment2Error,
      },
      options,
    );
  }

  /**
   * Detect Syntax
   *
   * @remarks
   * Inspects text for syntax and the part of speech of words in the document. For more information,
   * see Syntax in the Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectSyntax2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectSyntax2(
    request: Operations.DetectSyntax2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectSyntax2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectSyntax"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget7AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectSyntax2Error,
      },
      options,
    );
  }

  /**
   * Detect Targeted Sentiment
   *
   * @remarks
   * Inspects the input text and returns a sentiment analysis for each entity identified in the
   * text. For more information about targeted sentiment, see Targeted sentiment in the Amazon
   * Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectTargetedSentiment2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectTargetedSentiment2(
    request: Operations.DetectTargetedSentiment2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectTargetedSentiment2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectTargetedSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget8AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectTargetedSentiment2Error,
      },
      options,
    );
  }

  /**
   * Detect Toxic Content
   *
   * @remarks
   * Performs toxicity analysis on the list of text strings that you provide as input. The API
   * response contains a results list that matches the size of the input list. For more information
   * about toxicity detection, see Toxicity detection in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Operations.DetectToxicContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectToxicContent(
    request: Operations.DetectToxicContentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DetectToxicContentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectToxicContent"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget9AmazonComprehendOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DetectToxicContentError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type ClassifyDocument2Request = {
    xAmzTarget: XAmzTargetAmazonComprehendOperationsApi;
  };

  export class ClassifyDocument2Error extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClassifyDocument2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ContainsPiiEntities2Request = {
    xAmzTarget: XAmzTarget1AmazonComprehendOperationsApi;
  };

  export class ContainsPiiEntities2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainsPiiEntities2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectDominantLanguage2Request = {
    xAmzTarget: XAmzTarget2AmazonComprehendOperationsApi;
  };

  export class DetectDominantLanguage2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectDominantLanguage2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectEntities2Request = {
    xAmzTarget: XAmzTarget3AmazonComprehendOperationsApi;
  };

  export class DetectEntities2Error extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DetectEntities2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DetectKeyPhrases2Request = {
    xAmzTarget: XAmzTarget4AmazonComprehendOperationsApi;
  };

  export class DetectKeyPhrases2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectKeyPhrases2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectPiiEntities2Request = {
    xAmzTarget: XAmzTarget5AmazonComprehendOperationsApi;
  };

  export class DetectPiiEntities2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectPiiEntities2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectSentiment2Request = {
    xAmzTarget: XAmzTarget6AmazonComprehendOperationsApi;
  };

  export class DetectSentiment2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectSentiment2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectSyntax2Request = {
    xAmzTarget: XAmzTarget7AmazonComprehendOperationsApi;
  };

  export class DetectSyntax2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectSyntax2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectTargetedSentiment2Request = {
    xAmzTarget: XAmzTarget8AmazonComprehendOperationsApi;
  };

  export class DetectTargetedSentiment2Error extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectTargetedSentiment2Error> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectToxicContentRequestParams = {
    xAmzTarget: XAmzTarget9AmazonComprehendOperationsApi;
  };

  export class DetectToxicContentError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectToxicContentError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
