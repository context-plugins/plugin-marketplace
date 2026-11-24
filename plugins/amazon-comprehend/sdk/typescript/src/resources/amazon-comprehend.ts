import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget10Schema, type XAmzTarget10 } from "../models/xamz-target10.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import { xAmzTarget26Schema, type XAmzTarget26 } from "../models/xamz-target26.js";
import { xAmzTarget27Schema, type XAmzTarget27 } from "../models/xamz-target27.js";
import { xAmzTarget28Schema, type XAmzTarget28 } from "../models/xamz-target28.js";
import { xAmzTarget29Schema, type XAmzTarget29 } from "../models/xamz-target29.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget30Schema, type XAmzTarget30 } from "../models/xamz-target30.js";
import { xAmzTarget31Schema, type XAmzTarget31 } from "../models/xamz-target31.js";
import { xAmzTarget32Schema, type XAmzTarget32 } from "../models/xamz-target32.js";
import { xAmzTarget33Schema, type XAmzTarget33 } from "../models/xamz-target33.js";
import { xAmzTarget34Schema, type XAmzTarget34 } from "../models/xamz-target34.js";
import { xAmzTarget35Schema, type XAmzTarget35 } from "../models/xamz-target35.js";
import { xAmzTarget36Schema, type XAmzTarget36 } from "../models/xamz-target36.js";
import { xAmzTarget37Schema, type XAmzTarget37 } from "../models/xamz-target37.js";
import { xAmzTarget38Schema, type XAmzTarget38 } from "../models/xamz-target38.js";
import { xAmzTarget39Schema, type XAmzTarget39 } from "../models/xamz-target39.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget40Schema, type XAmzTarget40 } from "../models/xamz-target40.js";
import { xAmzTarget41Schema, type XAmzTarget41 } from "../models/xamz-target41.js";
import { xAmzTarget42Schema, type XAmzTarget42 } from "../models/xamz-target42.js";
import { xAmzTarget43Schema, type XAmzTarget43 } from "../models/xamz-target43.js";
import { xAmzTarget44Schema, type XAmzTarget44 } from "../models/xamz-target44.js";
import { xAmzTarget45Schema, type XAmzTarget45 } from "../models/xamz-target45.js";
import { xAmzTarget46Schema, type XAmzTarget46 } from "../models/xamz-target46.js";
import { xAmzTarget47Schema, type XAmzTarget47 } from "../models/xamz-target47.js";
import { xAmzTarget48Schema, type XAmzTarget48 } from "../models/xamz-target48.js";
import { xAmzTarget49Schema, type XAmzTarget49 } from "../models/xamz-target49.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget50Schema, type XAmzTarget50 } from "../models/xamz-target50.js";
import { xAmzTarget51Schema, type XAmzTarget51 } from "../models/xamz-target51.js";
import { xAmzTarget52Schema, type XAmzTarget52 } from "../models/xamz-target52.js";
import { xAmzTarget53Schema, type XAmzTarget53 } from "../models/xamz-target53.js";
import { xAmzTarget54Schema, type XAmzTarget54 } from "../models/xamz-target54.js";
import { xAmzTarget55Schema, type XAmzTarget55 } from "../models/xamz-target55.js";
import { xAmzTarget56Schema, type XAmzTarget56 } from "../models/xamz-target56.js";
import { xAmzTarget57Schema, type XAmzTarget57 } from "../models/xamz-target57.js";
import { xAmzTarget58Schema, type XAmzTarget58 } from "../models/xamz-target58.js";
import { xAmzTarget59Schema, type XAmzTarget59 } from "../models/xamz-target59.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget60Schema, type XAmzTarget60 } from "../models/xamz-target60.js";
import { xAmzTarget61Schema, type XAmzTarget61 } from "../models/xamz-target61.js";
import { xAmzTarget62Schema, type XAmzTarget62 } from "../models/xamz-target62.js";
import { xAmzTarget63Schema, type XAmzTarget63 } from "../models/xamz-target63.js";
import { xAmzTarget64Schema, type XAmzTarget64 } from "../models/xamz-target64.js";
import { xAmzTarget65Schema, type XAmzTarget65 } from "../models/xamz-target65.js";
import { xAmzTarget66Schema, type XAmzTarget66 } from "../models/xamz-target66.js";
import { xAmzTarget67Schema, type XAmzTarget67 } from "../models/xamz-target67.js";
import { xAmzTarget68Schema, type XAmzTarget68 } from "../models/xamz-target68.js";
import { xAmzTarget69Schema, type XAmzTarget69 } from "../models/xamz-target69.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget70Schema, type XAmzTarget70 } from "../models/xamz-target70.js";
import { xAmzTarget71Schema, type XAmzTarget71 } from "../models/xamz-target71.js";
import { xAmzTarget72Schema, type XAmzTarget72 } from "../models/xamz-target72.js";
import { xAmzTarget73Schema, type XAmzTarget73 } from "../models/xamz-target73.js";
import { xAmzTarget74Schema, type XAmzTarget74 } from "../models/xamz-target74.js";
import { xAmzTarget75Schema, type XAmzTarget75 } from "../models/xamz-target75.js";
import { xAmzTarget76Schema, type XAmzTarget76 } from "../models/xamz-target76.js";
import { xAmzTarget77Schema, type XAmzTarget77 } from "../models/xamz-target77.js";
import { xAmzTarget78Schema, type XAmzTarget78 } from "../models/xamz-target78.js";
import { xAmzTarget79Schema, type XAmzTarget79 } from "../models/xamz-target79.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget80Schema, type XAmzTarget80 } from "../models/xamz-target80.js";
import { xAmzTarget81Schema, type XAmzTarget81 } from "../models/xamz-target81.js";
import { xAmzTarget82Schema, type XAmzTarget82 } from "../models/xamz-target82.js";
import { xAmzTarget83Schema, type XAmzTarget83 } from "../models/xamz-target83.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AmazonComprehend {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch Detect Dominant Language
   *
   * @remarks
   * Determines the dominant language of the input text for a batch of documents. For a list of
   * languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectDominantLanguageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectDominantLanguage(
    request: AmazonComprehend.BatchDetectDominantLanguageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectDominantLanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectDominantLanguage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectDominantLanguageError,
      },
      options,
    );
  }

  /**
   * Batch Detect Entities
   *
   * @remarks
   * Inspects the text of a batch of documents for named entities and returns information about
   * them. For more information about named entities, see Entities in the Comprehend Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectEntitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectEntities(
    request: AmazonComprehend.BatchDetectEntitiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectEntitiesError,
      },
      options,
    );
  }

  /**
   * Batch Detect Key Phrases
   *
   * @remarks
   * Detects the key noun phrases found in a batch of documents.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectKeyPhrasesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectKeyPhrases(
    request: AmazonComprehend.BatchDetectKeyPhrasesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectKeyPhrasesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectKeyPhrases"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectKeyPhrasesError,
      },
      options,
    );
  }

  /**
   * Batch Detect Sentiment
   *
   * @remarks
   * Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE,
   * NEUTRAL, MIXED, or NEGATIVE, in each one.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectSentimentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectSentiment(
    request: AmazonComprehend.BatchDetectSentimentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectSentimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectSentimentError,
      },
      options,
    );
  }

  /**
   * Batch Detect Syntax
   *
   * @remarks
   * Inspects the text of a batch of documents for the syntax and part of speech of the words in the
   * document and returns information about them. For more information, see Syntax in the Comprehend
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectSyntaxError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectSyntax(
    request: AmazonComprehend.BatchDetectSyntaxRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectSyntaxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectSyntax"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectSyntaxError,
      },
      options,
    );
  }

  /**
   * Batch Detect Targeted Sentiment
   *
   * @remarks
   * Inspects a batch of documents and returns a sentiment analysis for each entity identified in
   * the documents. For more information about targeted sentiment, see Targeted sentiment in the
   * Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.BatchDetectTargetedSentimentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  batchDetectTargetedSentiment(
    request: AmazonComprehend.BatchDetectTargetedSentimentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.BatchDetectTargetedSentimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#BatchDetectTargetedSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.BatchDetectTargetedSentimentError,
      },
      options,
    );
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
   * @throws {@link AmazonComprehend.ClassifyDocumentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  classifyDocument(
    request: AmazonComprehend.ClassifyDocumentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ClassifyDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ClassifyDocument"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ClassifyDocumentError,
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
   * @throws {@link AmazonComprehend.ContainsPiiEntitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  containsPiiEntities(
    request: AmazonComprehend.ContainsPiiEntitiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ContainsPiiEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ContainsPiiEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ContainsPiiEntitiesError,
      },
      options,
    );
  }

  /**
   * Create Dataset
   *
   * @remarks
   * Creates a dataset to upload training or test data for a model associated with a flywheel. For
   * more information about datasets, see Flywheel overview in the Amazon Comprehend Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.CreateDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDataset(
    request: AmazonComprehend.CreateDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.CreateDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDataset"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.CreateDatasetError,
      },
      options,
    );
  }

  /**
   * Create Document Classifier
   *
   * @remarks
   * Creates a new document classifier that you can use to categorize documents. To create a
   * classifier, you provide a set of training documents that are labeled with the categories that
   * you want to use. For more information, see Training classifier models in the Comprehend
   * Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.CreateDocumentClassifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDocumentClassifier(
    request: AmazonComprehend.CreateDocumentClassifierRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.CreateDocumentClassifierError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDocumentClassifier"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.CreateDocumentClassifierError,
      },
      options,
    );
  }

  /**
   * Create Endpoint
   *
   * @remarks
   * Creates a model-specific endpoint for synchronous inference for a previously trained custom
   * model For information about endpoints, see Managing endpoints.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.CreateEndpointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createEndpoint(
    request: AmazonComprehend.CreateEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.CreateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.CreateEndpointError,
      },
      options,
    );
  }

  /**
   * Create Entity Recognizer
   *
   * @remarks
   * Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request
   * is submitted, you can check job status using the DescribeEntityRecognizer API.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.CreateEntityRecognizerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createEntityRecognizer(
    request: AmazonComprehend.CreateEntityRecognizerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.CreateEntityRecognizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateEntityRecognizer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget27Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.CreateEntityRecognizerError,
      },
      options,
    );
  }

  /**
   * Create Flywheel
   *
   * @remarks
   * A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model
   * for custom classification or custom entity recognition. You can create a flywheel to start with
   * an existing trained model, or Comprehend can create and train a new model. When you create the
   * flywheel, Comprehend creates a data lake in your account. The data lake holds the training data
   * and test data for all versions of the model. To use a flywheel with an existing trained model,
   * you specify the active model version. Comprehend copies the model's training data and test data
   * into the flywheel's data lake. To use the flywheel with a new model, you need to provide a
   * dataset for training data (and optional test data) when you create the flywheel. For more
   * information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.CreateFlywheelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createFlywheel(
    request: AmazonComprehend.CreateFlywheelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.CreateFlywheelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateFlywheel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget31Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.CreateFlywheelError,
      },
      options,
    );
  }

  /**
   * Delete Document Classifier
   *
   * @remarks
   * Deletes a previously created document classifier Only those classifiers that are in terminated
   * states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a
   * ResourceInUseException will be returned. This is an asynchronous action that puts the
   * classifier into a DELETING state, and it is then removed by a background job. Once removed, the
   * classifier disappears from your account and is no longer available for use.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DeleteDocumentClassifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDocumentClassifier(
    request: AmazonComprehend.DeleteDocumentClassifierRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DeleteDocumentClassifierError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDocumentClassifier"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DeleteDocumentClassifierError,
      },
      options,
    );
  }

  /**
   * Delete Endpoint
   *
   * @remarks
   * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be
   * deleted in order for the model to be deleted. For information about endpoints, see Managing
   * endpoints.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DeleteEndpointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteEndpoint(
    request: AmazonComprehend.DeleteEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DeleteEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DeleteEndpointError,
      },
      options,
    );
  }

  /**
   * Delete Entity Recognizer
   *
   * @remarks
   * Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR,
   * TRAINED) will be deleted. If an active inference job is using the model, a
   * ResourceInUseException will be returned. This is an asynchronous action that puts the
   * recognizer into a DELETING state, and it is then removed by a background job. Once removed, the
   * recognizer disappears from your account and is no longer available for use.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DeleteEntityRecognizerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteEntityRecognizer(
    request: AmazonComprehend.DeleteEntityRecognizerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DeleteEntityRecognizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteEntityRecognizer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget28Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DeleteEntityRecognizerError,
      },
      options,
    );
  }

  /**
   * Delete Flywheel
   *
   * @remarks
   * Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data
   * lake or the model associated with the flywheel. For more information about flywheels, see
   * Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DeleteFlywheelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFlywheel(
    request: AmazonComprehend.DeleteFlywheelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DeleteFlywheelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteFlywheel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget32Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DeleteFlywheelError,
      },
      options,
    );
  }

  /**
   * Delete Resource Policy
   *
   * @remarks
   * Deletes a resource-based policy that is attached to a custom model.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DeleteResourcePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteResourcePolicy(
    request: AmazonComprehend.DeleteResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DeleteResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget36Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DeleteResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Describe Dataset
   *
   * @remarks
   * Returns information about the dataset that you specify. For more information about datasets,
   * see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeDatasetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDataset(
    request: AmazonComprehend.DescribeDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDataset"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeDatasetError,
      },
      options,
    );
  }

  /**
   * Describe Document Classification Job
   *
   * @remarks
   * Gets the properties associated with a document classification job. Use this operation to get
   * the status of a classification job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeDocumentClassificationJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDocumentClassificationJob(
    request: AmazonComprehend.DescribeDocumentClassificationJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeDocumentClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDocumentClassificationJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget39Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeDocumentClassificationJobError,
      },
      options,
    );
  }

  /**
   * Describe Document Classifier
   *
   * @remarks
   * Gets the properties associated with a document classifier.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeDocumentClassifierError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDocumentClassifier(
    request: AmazonComprehend.DescribeDocumentClassifierRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeDocumentClassifierError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDocumentClassifier"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeDocumentClassifierError,
      },
      options,
    );
  }

  /**
   * Describe Dominant Language Detection Job
   *
   * @remarks
   * Gets the properties associated with a dominant language detection job. Use this operation to
   * get the status of a detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeDominantLanguageDetectionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDominantLanguageDetectionJob(
    request: AmazonComprehend.DescribeDominantLanguageDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeDominantLanguageDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDominantLanguageDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget42Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeDominantLanguageDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Endpoint
   *
   * @remarks
   * Gets the properties associated with a specific endpoint. Use this operation to get the status
   * of an endpoint. For information about endpoints, see Managing endpoints.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeEndpoint(
    request: AmazonComprehend.DescribeEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeEndpointError,
      },
      options,
    );
  }

  /**
   * Describe Entities Detection Job
   *
   * @remarks
   * Gets the properties associated with an entities detection job. Use this operation to get the
   * status of a detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeEntitiesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeEntitiesDetectionJob(
    request: AmazonComprehend.DescribeEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget46Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Entity Recognizer
   *
   * @remarks
   * Provides details about an entity recognizer including status, S3 buckets containing training
   * data, recognizer metadata, metrics, and so on.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeEntityRecognizerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeEntityRecognizer(
    request: AmazonComprehend.DescribeEntityRecognizerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeEntityRecognizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeEntityRecognizer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget29Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeEntityRecognizerError,
      },
      options,
    );
  }

  /**
   * Describe Events Detection Job
   *
   * @remarks
   * Gets the status and details of an events detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeEventsDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeEventsDetectionJob(
    request: AmazonComprehend.DescribeEventsDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeEventsDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeEventsDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget50Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeEventsDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Flywheel
   *
   * @remarks
   * Provides configuration information about the flywheel. For more information about flywheels,
   * see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeFlywheelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeFlywheel(
    request: AmazonComprehend.DescribeFlywheelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeFlywheelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeFlywheel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget33Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeFlywheelError,
      },
      options,
    );
  }

  /**
   * Describe Flywheel Iteration
   *
   * @remarks
   * Retrieve the configuration properties of a flywheel iteration. For more information about
   * flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeFlywheelIterationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeFlywheelIteration(
    request: AmazonComprehend.DescribeFlywheelIterationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeFlywheelIterationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeFlywheelIteration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget54Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeFlywheelIterationError,
      },
      options,
    );
  }

  /**
   * Describe Key Phrases Detection Job
   *
   * @remarks
   * Gets the properties associated with a key phrases detection job. Use this operation to get the
   * status of a detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeKeyPhrasesDetectionJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeKeyPhrasesDetectionJob(
    request: AmazonComprehend.DescribeKeyPhrasesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeKeyPhrasesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeKeyPhrasesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget56Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeKeyPhrasesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Pii Entities Detection Job
   *
   * @remarks
   * Gets the properties associated with a PII entities detection job. For example, you can use this
   * operation to get the job status.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribePiiEntitiesDetectionJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describePiiEntitiesDetectionJob(
    request: AmazonComprehend.DescribePiiEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribePiiEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribePiiEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget60Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribePiiEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Resource Policy
   *
   * @remarks
   * Gets the details of a resource-based policy that is attached to a custom model, including the
   * JSON body of the policy.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeResourcePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeResourcePolicy(
    request: AmazonComprehend.DescribeResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget37Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Describe Sentiment Detection Job
   *
   * @remarks
   * Gets the properties associated with a sentiment detection job. Use this operation to get the
   * status of a detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeSentimentDetectionJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeSentimentDetectionJob(
    request: AmazonComprehend.DescribeSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget64Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Targeted Sentiment Detection Job
   *
   * @remarks
   * Gets the properties associated with a targeted sentiment detection job. Use this operation to
   * get the status of the job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeTargetedSentimentDetectionJobError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTargetedSentimentDetectionJob(
    request: AmazonComprehend.DescribeTargetedSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeTargetedSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTargetedSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget68Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeTargetedSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Describe Topics Detection Job
   *
   * @remarks
   * Gets the properties associated with a topic detection job. Use this operation to get the status
   * of a detection job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.DescribeTopicsDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTopicsDetectionJob(
    request: AmazonComprehend.DescribeTopicsDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DescribeTopicsDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTopicsDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget72Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DescribeTopicsDetectionJobError,
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
   * @throws {@link AmazonComprehend.DetectDominantLanguageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectDominantLanguage(
    request: AmazonComprehend.DetectDominantLanguageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectDominantLanguageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectDominantLanguage"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectDominantLanguageError,
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
   * @throws {@link AmazonComprehend.DetectEntitiesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectEntities(
    request: AmazonComprehend.DetectEntitiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectEntitiesError,
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
   * @throws {@link AmazonComprehend.DetectKeyPhrasesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectKeyPhrases(
    request: AmazonComprehend.DetectKeyPhrasesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectKeyPhrasesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectKeyPhrases"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget10Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectKeyPhrasesError,
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
   * @throws {@link AmazonComprehend.DetectPiiEntitiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectPiiEntities(
    request: AmazonComprehend.DetectPiiEntitiesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectPiiEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectPiiEntities"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectPiiEntitiesError,
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
   * @throws {@link AmazonComprehend.DetectSentimentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectSentiment(
    request: AmazonComprehend.DetectSentimentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectSentimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectSentimentError,
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
   * @throws {@link AmazonComprehend.DetectSyntaxError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectSyntax(
    request: AmazonComprehend.DetectSyntaxRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectSyntaxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectSyntax"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectSyntaxError,
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
   * @throws {@link AmazonComprehend.DetectTargetedSentimentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detectTargetedSentiment(
    request: AmazonComprehend.DetectTargetedSentimentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.DetectTargetedSentimentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DetectTargetedSentiment"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.DetectTargetedSentimentError,
      },
      options,
    );
  }

  /**
   * Import Model
   *
   * @remarks
   * Creates a new custom model that replicates a source custom model that you import. The source
   * model can be in your Amazon Web Services account or another one. If the source model is in
   * another Amazon Web Services account, then it must have a resource-based policy that authorizes
   * you to import it. The source model must be in the same Amazon Web Services Region that you're
   * using when you import. You can't import a model that's in a different Region.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ImportModelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  importModel(
    request: AmazonComprehend.ImportModelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ImportModelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ImportModel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget75Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ImportModelError,
      },
      options,
    );
  }

  /**
   * List Datasets
   *
   * @remarks
   * List the datasets that you have configured in this Region. For more information about datasets,
   * see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListDatasetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDatasets(
    request: AmazonComprehend.ListDatasetsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDatasets"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListDatasetsError,
      },
      options,
    );
  }

  /**
   * List Document Classification Jobs
   *
   * @remarks
   * Gets a list of the documentation classification jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListDocumentClassificationJobsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDocumentClassificationJobs(
    request: AmazonComprehend.ListDocumentClassificationJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListDocumentClassificationJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDocumentClassificationJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget40Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListDocumentClassificationJobsError,
      },
      options,
    );
  }

  /**
   * List Document Classifier Summaries
   *
   * @remarks
   * Gets a list of summaries of the document classifiers that you have created
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListDocumentClassifierSummariesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDocumentClassifierSummaries(
    request: AmazonComprehend.ListDocumentClassifierSummariesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListDocumentClassifierSummariesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDocumentClassifierSummaries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget76Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListDocumentClassifierSummariesError,
      },
      options,
    );
  }

  /**
   * List Document Classifiers
   *
   * @remarks
   * Gets a list of the document classifiers that you have created.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListDocumentClassifiersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDocumentClassifiers(
    request: AmazonComprehend.ListDocumentClassifiersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListDocumentClassifiersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDocumentClassifiers"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListDocumentClassifiersError,
      },
      options,
    );
  }

  /**
   * List Dominant Language Detection Jobs
   *
   * @remarks
   * Gets a list of the dominant language detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListDominantLanguageDetectionJobsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listDominantLanguageDetectionJobs(
    request: AmazonComprehend.ListDominantLanguageDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListDominantLanguageDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListDominantLanguageDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget43Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListDominantLanguageDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Endpoints
   *
   * @remarks
   * Gets a list of all existing endpoints that you've created. For information about endpoints, see
   * Managing endpoints.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListEndpointsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEndpoints(
    request: AmazonComprehend.ListEndpointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListEndpoints"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListEndpointsError,
      },
      options,
    );
  }

  /**
   * List Entities Detection Jobs
   *
   * @remarks
   * Gets a list of the entity detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListEntitiesDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEntitiesDetectionJobs(
    request: AmazonComprehend.ListEntitiesDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListEntitiesDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListEntitiesDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget47Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListEntitiesDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Entity Recognizer Summaries
   *
   * @remarks
   * Gets a list of summaries for the entity recognizers that you have created.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListEntityRecognizerSummariesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEntityRecognizerSummaries(
    request: AmazonComprehend.ListEntityRecognizerSummariesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListEntityRecognizerSummariesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListEntityRecognizerSummaries"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget77Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListEntityRecognizerSummariesError,
      },
      options,
    );
  }

  /**
   * List Entity Recognizers
   *
   * @remarks
   * Gets a list of the properties of all entity recognizers that you created, including recognizers
   * currently in training. Allows you to filter the list of recognizers based on criteria such as
   * status and submission time. This call returns up to 500 entity recognizers in the list, with a
   * default number of 100 recognizers in the list. The results of this list are not in any
   * particular order. Please get the list and sort locally if needed.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListEntityRecognizersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEntityRecognizers(
    request: AmazonComprehend.ListEntityRecognizersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListEntityRecognizersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListEntityRecognizers"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget30Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListEntityRecognizersError,
      },
      options,
    );
  }

  /**
   * List Events Detection Jobs
   *
   * @remarks
   * Gets a list of the events detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListEventsDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listEventsDetectionJobs(
    request: AmazonComprehend.ListEventsDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListEventsDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListEventsDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget51Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListEventsDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Flywheel Iteration History
   *
   * @remarks
   * Information about the history of a flywheel iteration. For more information about flywheels,
   * see Flywheel overview in the Amazon Comprehend Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListFlywheelIterationHistoryError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFlywheelIterationHistory(
    request: AmazonComprehend.ListFlywheelIterationHistoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListFlywheelIterationHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFlywheelIterationHistory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget78Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListFlywheelIterationHistoryError,
      },
      options,
    );
  }

  /**
   * List Flywheels
   *
   * @remarks
   * Gets a list of the flywheels that you have created.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListFlywheelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFlywheels(
    request: AmazonComprehend.ListFlywheelsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListFlywheelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListFlywheels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget34Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListFlywheelsError,
      },
      options,
    );
  }

  /**
   * List Key Phrases Detection Jobs
   *
   * @remarks
   * Get a list of key phrase detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListKeyPhrasesDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listKeyPhrasesDetectionJobs(
    request: AmazonComprehend.ListKeyPhrasesDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListKeyPhrasesDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListKeyPhrasesDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget57Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListKeyPhrasesDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Pii Entities Detection Jobs
   *
   * @remarks
   * Gets a list of the PII entity detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListPiiEntitiesDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listPiiEntitiesDetectionJobs(
    request: AmazonComprehend.ListPiiEntitiesDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListPiiEntitiesDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListPiiEntitiesDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget61Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListPiiEntitiesDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Sentiment Detection Jobs
   *
   * @remarks
   * Gets a list of sentiment detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListSentimentDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listSentimentDetectionJobs(
    request: AmazonComprehend.ListSentimentDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListSentimentDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListSentimentDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget65Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListSentimentDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Lists all tags associated with a given Amazon Comprehend resource.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListTagsForResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTagsForResource(
    request: AmazonComprehend.ListTagsForResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget79Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListTagsForResourceError,
      },
      options,
    );
  }

  /**
   * List Targeted Sentiment Detection Jobs
   *
   * @remarks
   * Gets a list of targeted sentiment detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListTargetedSentimentDetectionJobsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTargetedSentimentDetectionJobs(
    request: AmazonComprehend.ListTargetedSentimentDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListTargetedSentimentDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTargetedSentimentDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget69Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListTargetedSentimentDetectionJobsError,
      },
      options,
    );
  }

  /**
   * List Topics Detection Jobs
   *
   * @remarks
   * Gets a list of the topic detection jobs that you have submitted.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.ListTopicsDetectionJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listTopicsDetectionJobs(
    request: AmazonComprehend.ListTopicsDetectionJobsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.ListTopicsDetectionJobsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListTopicsDetectionJobs"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget73Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.ListTopicsDetectionJobsError,
      },
      options,
    );
  }

  /**
   * Put Resource Policy
   *
   * @remarks
   * Attaches a resource-based policy to a custom model. You can use this policy to authorize an
   * entity in another Amazon Web Services account to import the custom model, which replicates it
   * in Amazon Comprehend in their account.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.PutResourcePolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putResourcePolicy(
    request: AmazonComprehend.PutResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.PutResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#PutResourcePolicy"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget38Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.PutResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Start Document Classification Job
   *
   * @remarks
   * Starts an asynchronous document classification job using a custom classification model. Use the
   * DescribeDocumentClassificationJob operation to track the progress of the job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartDocumentClassificationJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startDocumentClassificationJob(
    request: AmazonComprehend.StartDocumentClassificationJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartDocumentClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartDocumentClassificationJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget41Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartDocumentClassificationJobError,
      },
      options,
    );
  }

  /**
   * Start Dominant Language Detection Job
   *
   * @remarks
   * Starts an asynchronous dominant language detection job for a collection of documents. Use the
   * operation to track the status of a job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartDominantLanguageDetectionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startDominantLanguageDetectionJob(
    request: AmazonComprehend.StartDominantLanguageDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartDominantLanguageDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartDominantLanguageDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget44Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartDominantLanguageDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Entities Detection Job
   *
   * @remarks
   * Starts an asynchronous entity detection job for a collection of documents. Use the operation to
   * track the status of a job. This API can be used for either standard entity detection or custom
   * entity recognition. In order to be used for custom entity recognition, the optional
   * EntityRecognizerArn must be used in order to provide access to the recognizer being used to
   * detect the custom entity.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartEntitiesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startEntitiesDetectionJob(
    request: AmazonComprehend.StartEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget48Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Events Detection Job
   *
   * @remarks
   * Starts an asynchronous event detection job for a collection of documents.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartEventsDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startEventsDetectionJob(
    request: AmazonComprehend.StartEventsDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartEventsDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartEventsDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget52Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartEventsDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Flywheel Iteration
   *
   * @remarks
   * Start the flywheel iteration.This operation uses any new datasets to train a new model version.
   * For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartFlywheelIterationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startFlywheelIteration(
    request: AmazonComprehend.StartFlywheelIterationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartFlywheelIterationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartFlywheelIteration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget55Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartFlywheelIterationError,
      },
      options,
    );
  }

  /**
   * Start Key Phrases Detection Job
   *
   * @remarks
   * Starts an asynchronous key phrase detection job for a collection of documents. Use the
   * operation to track the status of a job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartKeyPhrasesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startKeyPhrasesDetectionJob(
    request: AmazonComprehend.StartKeyPhrasesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartKeyPhrasesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartKeyPhrasesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget58Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartKeyPhrasesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Pii Entities Detection Job
   *
   * @remarks
   * Starts an asynchronous PII entity detection job for a collection of documents.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartPiiEntitiesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startPiiEntitiesDetectionJob(
    request: AmazonComprehend.StartPiiEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartPiiEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartPiiEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget62Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartPiiEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Sentiment Detection Job
   *
   * @remarks
   * Starts an asynchronous sentiment detection job for a collection of documents. Use the operation
   * to track the status of a job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartSentimentDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startSentimentDetectionJob(
    request: AmazonComprehend.StartSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget66Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Targeted Sentiment Detection Job
   *
   * @remarks
   * Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the
   * DescribeTargetedSentimentDetectionJob operation to track the status of a job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartTargetedSentimentDetectionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startTargetedSentimentDetectionJob(
    request: AmazonComprehend.StartTargetedSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartTargetedSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartTargetedSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget70Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartTargetedSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Start Topics Detection Job
   *
   * @remarks
   * Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to
   * track the status of a job.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StartTopicsDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startTopicsDetectionJob(
    request: AmazonComprehend.StartTopicsDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StartTopicsDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartTopicsDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget74Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StartTopicsDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Dominant Language Detection Job
   *
   * @remarks
   * Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is
   * marked for termination and put into the STOP_REQUESTED state. If the job completes before it
   * can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into
   * the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the
   * StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request
   * Exception. When a job is stopped, any documents already processed are written to the output
   * location.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopDominantLanguageDetectionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopDominantLanguageDetectionJob(
    request: AmazonComprehend.StopDominantLanguageDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopDominantLanguageDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopDominantLanguageDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget45Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopDominantLanguageDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Entities Detection Job
   *
   * @remarks
   * Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked
   * for termination and put into the STOP_REQUESTED state. If the job completes before it can be
   * stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the
   * STOPPED state. If the job is in the COMPLETED or FAILED state when you call the
   * StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request
   * Exception. When a job is stopped, any documents already processed are written to the output
   * location.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopEntitiesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopEntitiesDetectionJob(
    request: AmazonComprehend.StopEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget49Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Events Detection Job
   *
   * @remarks
   * Stops an events detection job in progress.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopEventsDetectionJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopEventsDetectionJob(
    request: AmazonComprehend.StopEventsDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopEventsDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopEventsDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget53Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopEventsDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Key Phrases Detection Job
   *
   * @remarks
   * Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is
   * marked for termination and put into the STOP_REQUESTED state. If the job completes before it
   * can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into
   * the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the
   * StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request
   * Exception. When a job is stopped, any documents already processed are written to the output
   * location.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopKeyPhrasesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopKeyPhrasesDetectionJob(
    request: AmazonComprehend.StopKeyPhrasesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopKeyPhrasesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopKeyPhrasesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget59Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopKeyPhrasesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Pii Entities Detection Job
   *
   * @remarks
   * Stops a PII entities detection job in progress.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopPiiEntitiesDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopPiiEntitiesDetectionJob(
    request: AmazonComprehend.StopPiiEntitiesDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopPiiEntitiesDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopPiiEntitiesDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget63Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopPiiEntitiesDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Sentiment Detection Job
   *
   * @remarks
   * Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked
   * for termination and put into the STOP_REQUESTED state. If the job completes before it can be
   * stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the
   * STOPPED state. If the job is in the COMPLETED or FAILED state when you call the
   * StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request
   * Exception. When a job is stopped, any documents already processed are written to the output
   * location.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopSentimentDetectionJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopSentimentDetectionJob(
    request: AmazonComprehend.StopSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget67Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Targeted Sentiment Detection Job
   *
   * @remarks
   * Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job
   * is marked for termination and put into the STOP_REQUESTED state. If the job completes before it
   * can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put
   * into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the
   * StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request
   * Exception. When a job is stopped, any documents already processed are written to the output
   * location.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopTargetedSentimentDetectionJobError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopTargetedSentimentDetectionJob(
    request: AmazonComprehend.StopTargetedSentimentDetectionJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopTargetedSentimentDetectionJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopTargetedSentimentDetectionJob"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget71Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopTargetedSentimentDetectionJobError,
      },
      options,
    );
  }

  /**
   * Stop Training Document Classifier
   *
   * @remarks
   * Stops a document classifier training job while in progress. If the training job state is
   * TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the
   * training job completes before it can be stopped, it is put into the TRAINED; otherwise the
   * training job is stopped and put into the STOPPED state and the service sends back an HTTP 200
   * response with an empty HTTP body.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopTrainingDocumentClassifierError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopTrainingDocumentClassifier(
    request: AmazonComprehend.StopTrainingDocumentClassifierRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopTrainingDocumentClassifierError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopTrainingDocumentClassifier"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget80Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopTrainingDocumentClassifierError,
      },
      options,
    );
  }

  /**
   * Stop Training Entity Recognizer
   *
   * @remarks
   * Stops an entity recognizer training job while in progress. If the training job state is
   * TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the
   * training job completes before it can be stopped, it is put into the TRAINED; otherwise the
   * training job is stopped and putted into the STOPPED state and the service sends back an HTTP
   * 200 response with an empty HTTP body.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.StopTrainingEntityRecognizerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopTrainingEntityRecognizer(
    request: AmazonComprehend.StopTrainingEntityRecognizerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.StopTrainingEntityRecognizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopTrainingEntityRecognizer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget81Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.StopTrainingEntityRecognizerError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that
   * adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as
   * the key might be added to a resource to indicate its use by the sales department.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.TagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: AmazonComprehend.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget82Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes a specific tag associated with an Amazon Comprehend resource.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: AmazonComprehend.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget83Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Update Endpoint
   *
   * @remarks
   * Updates information about the specified endpoint. For information about endpoints, see Managing
   * endpoints.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.UpdateEndpointError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateEndpoint(
    request: AmazonComprehend.UpdateEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.UpdateEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget26Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.UpdateEndpointError,
      },
      options,
    );
  }

  /**
   * Update Flywheel
   *
   * @remarks
   * Update the configuration information for an existing flywheel.
   *
   * @returns Success
   *
   * @throws {@link AmazonComprehend.UpdateFlywheelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonComprehendError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateFlywheel(
    request: AmazonComprehend.UpdateFlywheelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AmazonComprehend.UpdateFlywheelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateFlywheel"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget35Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AmazonComprehend.UpdateFlywheelError,
      },
      options,
    );
  }
}

export namespace AmazonComprehend {
  export type BatchDetectDominantLanguageRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class BatchDetectDominantLanguageError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectDominantLanguageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BatchDetectEntitiesRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class BatchDetectEntitiesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectEntitiesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BatchDetectKeyPhrasesRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class BatchDetectKeyPhrasesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectKeyPhrasesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BatchDetectSentimentRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class BatchDetectSentimentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectSentimentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BatchDetectSyntaxRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class BatchDetectSyntaxError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectSyntaxError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type BatchDetectTargetedSentimentRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class BatchDetectTargetedSentimentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<BatchDetectTargetedSentimentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ClassifyDocumentRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class ClassifyDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClassifyDocumentError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ContainsPiiEntitiesRequestParams = {
    xAmzTarget: XAmzTarget7;
  };

  export class ContainsPiiEntitiesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainsPiiEntitiesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type CreateDatasetRequestParams = {
    xAmzTarget: XAmzTarget15;
  };

  export class CreateDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateDocumentClassifierRequestParams = {
    xAmzTarget: XAmzTarget18;
  };

  export class CreateDocumentClassifierError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDocumentClassifierError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateEndpointRequestParams = {
    xAmzTarget: XAmzTarget22;
  };

  export class CreateEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEndpointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateEntityRecognizerRequestParams = {
    xAmzTarget: XAmzTarget27;
  };

  export class CreateEntityRecognizerError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEntityRecognizerError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateFlywheelRequestParams = {
    xAmzTarget: XAmzTarget31;
  };

  export class CreateFlywheelError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFlywheelError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDocumentClassifierRequestParams = {
    xAmzTarget: XAmzTarget19;
  };

  export class DeleteDocumentClassifierError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDocumentClassifierError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteEndpointRequestParams = {
    xAmzTarget: XAmzTarget23;
  };

  export class DeleteEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEndpointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteEntityRecognizerRequestParams = {
    xAmzTarget: XAmzTarget28;
  };

  export class DeleteEntityRecognizerError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEntityRecognizerError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteFlywheelRequestParams = {
    xAmzTarget: XAmzTarget32;
  };

  export class DeleteFlywheelError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFlywheelError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteResourcePolicyRequestParams = {
    xAmzTarget: XAmzTarget36;
  };

  export class DeleteResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcePolicyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDatasetRequestParams = {
    xAmzTarget: XAmzTarget16;
  };

  export class DescribeDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDatasetError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDocumentClassificationJobRequestParams = {
    xAmzTarget: XAmzTarget39;
  };

  export class DescribeDocumentClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDocumentClassificationJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDocumentClassifierRequestParams = {
    xAmzTarget: XAmzTarget20;
  };

  export class DescribeDocumentClassifierError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDocumentClassifierError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDominantLanguageDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget42;
  };

  export class DescribeDominantLanguageDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDominantLanguageDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeEndpointRequestParams = {
    xAmzTarget: XAmzTarget24;
  };

  export class DescribeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeEndpointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget46;
  };

  export class DescribeEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeEntityRecognizerRequestParams = {
    xAmzTarget: XAmzTarget29;
  };

  export class DescribeEntityRecognizerError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeEntityRecognizerError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeEventsDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget50;
  };

  export class DescribeEventsDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeEventsDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeFlywheelRequestParams = {
    xAmzTarget: XAmzTarget33;
  };

  export class DescribeFlywheelError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeFlywheelError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeFlywheelIterationRequestParams = {
    xAmzTarget: XAmzTarget54;
  };

  export class DescribeFlywheelIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeFlywheelIterationError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeKeyPhrasesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget56;
  };

  export class DescribeKeyPhrasesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeKeyPhrasesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribePiiEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget60;
  };

  export class DescribePiiEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribePiiEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeResourcePolicyRequestParams = {
    xAmzTarget: XAmzTarget37;
  };

  export class DescribeResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeResourcePolicyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DescribeSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget64;
  };

  export class DescribeSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTargetedSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget68;
  };

  export class DescribeTargetedSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTargetedSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTopicsDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget72;
  };

  export class DescribeTopicsDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTopicsDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DetectDominantLanguageRequestParams = {
    xAmzTarget: XAmzTarget8;
  };

  export class DetectDominantLanguageError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectDominantLanguageError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectEntitiesRequestParams = {
    xAmzTarget: XAmzTarget9;
  };

  export class DetectEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DetectEntitiesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DetectKeyPhrasesRequestParams = {
    xAmzTarget: XAmzTarget10;
  };

  export class DetectKeyPhrasesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectKeyPhrasesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectPiiEntitiesRequestParams = {
    xAmzTarget: XAmzTarget11;
  };

  export class DetectPiiEntitiesError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectPiiEntitiesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectSentimentRequestParams = {
    xAmzTarget: XAmzTarget12;
  };

  export class DetectSentimentError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectSentimentError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectSyntaxRequestParams = {
    xAmzTarget: XAmzTarget13;
  };

  export class DetectSyntaxError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectSyntaxError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DetectTargetedSentimentRequestParams = {
    xAmzTarget: XAmzTarget14;
  };

  export class DetectTargetedSentimentError extends ApiError {
    declare readonly payload: Declared<"error500", undefined> | Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DetectTargetedSentimentError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ImportModelRequestParams = {
    xAmzTarget: XAmzTarget75;
  };

  export class ImportModelError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportModelError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDatasetsRequestParams = {
    xAmzTarget: XAmzTarget17;
  };

  export class ListDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDocumentClassificationJobsRequestParams = {
    xAmzTarget: XAmzTarget40;
  };

  export class ListDocumentClassificationJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentClassificationJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDocumentClassifierSummariesRequestParams = {
    xAmzTarget: XAmzTarget76;
  };

  export class ListDocumentClassifierSummariesError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentClassifierSummariesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDocumentClassifiersRequestParams = {
    xAmzTarget: XAmzTarget21;
  };

  export class ListDocumentClassifiersError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDocumentClassifiersError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDominantLanguageDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget43;
  };

  export class ListDominantLanguageDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDominantLanguageDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListEndpointsRequestParams = {
    xAmzTarget: XAmzTarget25;
  };

  export class ListEndpointsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEndpointsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListEntitiesDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget47;
  };

  export class ListEntitiesDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntitiesDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListEntityRecognizerSummariesRequestParams = {
    xAmzTarget: XAmzTarget77;
  };

  export class ListEntityRecognizerSummariesError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntityRecognizerSummariesError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListEntityRecognizersRequestParams = {
    xAmzTarget: XAmzTarget30;
  };

  export class ListEntityRecognizersError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntityRecognizersError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListEventsDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget51;
  };

  export class ListEventsDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEventsDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListFlywheelIterationHistoryRequestParams = {
    xAmzTarget: XAmzTarget78;
  };

  export class ListFlywheelIterationHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFlywheelIterationHistoryError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListFlywheelsRequestParams = {
    xAmzTarget: XAmzTarget34;
  };

  export class ListFlywheelsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFlywheelsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListKeyPhrasesDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget57;
  };

  export class ListKeyPhrasesDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListKeyPhrasesDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListPiiEntitiesDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget61;
  };

  export class ListPiiEntitiesDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPiiEntitiesDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListSentimentDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget65;
  };

  export class ListSentimentDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSentimentDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListTagsForResourceRequestParams = {
    xAmzTarget: XAmzTarget79;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListTargetedSentimentDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget69;
  };

  export class ListTargetedSentimentDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTargetedSentimentDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListTopicsDetectionJobsRequestParams = {
    xAmzTarget: XAmzTarget73;
  };

  export class ListTopicsDetectionJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTopicsDetectionJobsError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type PutResourcePolicyRequestParams = {
    xAmzTarget: XAmzTarget38;
  };

  export class PutResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutResourcePolicyError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StartDocumentClassificationJobRequestParams = {
    xAmzTarget: XAmzTarget41;
  };

  export class StartDocumentClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartDocumentClassificationJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartDominantLanguageDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget44;
  };

  export class StartDominantLanguageDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartDominantLanguageDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget48;
  };

  export class StartEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartEventsDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget52;
  };

  export class StartEventsDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartEventsDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartFlywheelIterationRequestParams = {
    xAmzTarget: XAmzTarget55;
  };

  export class StartFlywheelIterationError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartFlywheelIterationError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartKeyPhrasesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget58;
  };

  export class StartKeyPhrasesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartKeyPhrasesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartPiiEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget62;
  };

  export class StartPiiEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartPiiEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget66;
  };

  export class StartSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartTargetedSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget70;
  };

  export class StartTargetedSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTargetedSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StartTopicsDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget74;
  };

  export class StartTopicsDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTopicsDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StopDominantLanguageDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget45;
  };

  export class StopDominantLanguageDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopDominantLanguageDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget49;
  };

  export class StopEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopEventsDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget53;
  };

  export class StopEventsDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopEventsDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopKeyPhrasesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget59;
  };

  export class StopKeyPhrasesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopKeyPhrasesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopPiiEntitiesDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget63;
  };

  export class StopPiiEntitiesDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopPiiEntitiesDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget67;
  };

  export class StopSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopTargetedSentimentDetectionJobRequestParams = {
    xAmzTarget: XAmzTarget71;
  };

  export class StopTargetedSentimentDetectionJobError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopTargetedSentimentDetectionJobError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type StopTrainingDocumentClassifierRequestParams = {
    xAmzTarget: XAmzTarget80;
  };

  export class StopTrainingDocumentClassifierError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopTrainingDocumentClassifierError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type StopTrainingEntityRecognizerRequestParams = {
    xAmzTarget: XAmzTarget81;
  };

  export class StopTrainingEntityRecognizerError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopTrainingEntityRecognizerError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget82;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget83;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateEndpointRequestParams = {
    xAmzTarget: XAmzTarget26;
  };

  export class UpdateEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEndpointError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UpdateFlywheelRequestParams = {
    xAmzTarget: XAmzTarget35;
  };

  export class UpdateFlywheelError extends ApiError {
    declare readonly payload:
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFlywheelError> = [
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
