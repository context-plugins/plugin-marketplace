import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import {
  v1OracleAnomalyDetectionRequestSchema,
  type V1OracleAnomalyDetectionRequest,
} from "./models/v1-oracle-anomaly-detection-request.js";
import {
  v1OracleClassificationRequestSchema,
  type V1OracleClassificationRequest,
} from "./models/v1-oracle-classification-request.js";
import {
  v1OracleCodeGenerationRequestSchema,
  type V1OracleCodeGenerationRequest,
} from "./models/v1-oracle-code-generation-request.js";
import {
  v1OracleFraudSignalRequestSchema,
  type V1OracleFraudSignalRequest,
} from "./models/v1-oracle-fraud-signal-request.js";
import {
  v1OracleLeadScoreRequestSchema,
  type V1OracleLeadScoreRequest,
} from "./models/v1-oracle-lead-score-request.js";
import {
  v1OracleModelInferenceRequestSchema,
  type V1OracleModelInferenceRequest,
} from "./models/v1-oracle-model-inference-request.js";
import {
  v1OraclePromptTemplateRequestSchema,
  type V1OraclePromptTemplateRequest,
} from "./models/v1-oracle-prompt-template-request.js";
import {
  v1OracleProofOfWorkRequestSchema,
  type V1OracleProofOfWorkRequest,
} from "./models/v1-oracle-proof-of-work-request.js";
import {
  v1OracleSecurityScanRequestSchema,
  type V1OracleSecurityScanRequest,
} from "./models/v1-oracle-security-scan-request.js";
import {
  v1OracleSemanticCacheRequestSchema,
  type V1OracleSemanticCacheRequest,
} from "./models/v1-oracle-semantic-cache-request.js";
import {
  v1OracleSentimentFeedRequestSchema,
  type V1OracleSentimentFeedRequest,
} from "./models/v1-oracle-sentiment-feed-request.js";
import {
  v1OracleSummarizationRequestSchema,
  type V1OracleSummarizationRequest,
} from "./models/v1-oracle-summarization-request.js";
import {
  v1OracleTaxJarLookupRequestSchema,
  type V1OracleTaxJarLookupRequest,
} from "./models/v1-oracle-tax-jar-lookup-request.js";
import {
  v1OracleTranslationRequestSchema,
  type V1OracleTranslationRequest,
} from "./models/v1-oracle-translation-request.js";
import {
  v1OracleValidationRequestSchema,
  type V1OracleValidationRequest,
} from "./models/v1-oracle-validation-request.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * 33 M2M data bridges. HTTP 402 + Stripe payment.
 */
export class ForceDreamClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FORCE_DREAM_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ForceDreamClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);
  }

  /**
   * Outlier detection (£0.30)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.AnomalyDetectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  anomalyDetection(
    request: ForceDreamClient.AnomalyDetectionRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.AnomalyDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/anomaly_detection"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleAnomalyDetectionRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.AnomalyDetectionError,
      },
      options,
    );
  }

  /**
   * Text classification (£0.05)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.ClassificationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  classification(
    request: ForceDreamClient.ClassificationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.ClassificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/classification"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleClassificationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.ClassificationError,
      },
      options,
    );
  }

  /**
   * Code writing (£0.50)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.CodeGenerationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  codeGeneration(
    request: ForceDreamClient.CodeGenerationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.CodeGenerationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/code_generation"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleCodeGenerationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.CodeGenerationError,
      },
      options,
    );
  }

  /**
   * Fraud IP check (£0.02)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.FraudSignalError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fraudSignal(
    request: ForceDreamClient.FraudSignalRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.FraudSignalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/fraud_signal"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleFraudSignalRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.FraudSignalError,
      },
      options,
    );
  }

  /**
   * Lead quality score (£0.50)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.LeadScoreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  leadScore(
    request: ForceDreamClient.LeadScoreRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.LeadScoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/lead_score"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleLeadScoreRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.LeadScoreError,
      },
      options,
    );
  }

  /**
   * LLM inference (£0.10)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.ModelInferenceError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modelInference(
    request: ForceDreamClient.ModelInferenceRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.ModelInferenceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/model_inference"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleModelInferenceRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.ModelInferenceError,
      },
      options,
    );
  }

  /**
   * Optimised prompts (£0.25)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.PromptTemplateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  promptTemplate(
    request: ForceDreamClient.PromptTemplateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.PromptTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/prompt_template"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OraclePromptTemplateRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.PromptTemplateError,
      },
      options,
    );
  }

  /**
   * WORM task verification (£0.20)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.ProofOfWorkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  proofOfWork(
    request: ForceDreamClient.ProofOfWorkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.ProofOfWorkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/proof_of_work"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleProofOfWorkRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.ProofOfWorkError,
      },
      options,
    );
  }

  /**
   * Vulnerability scan (£0.75)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.SecurityScanError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  securityScan(
    request: ForceDreamClient.SecurityScanRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.SecurityScanError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/security_scan"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleSecurityScanRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.SecurityScanError,
      },
      options,
    );
  }

  /**
   * Cached LLM embeddings (£0.05)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.SemanticCacheError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  semanticCache(
    request: ForceDreamClient.SemanticCacheRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.SemanticCacheError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/semantic_cache"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleSemanticCacheRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.SemanticCacheError,
      },
      options,
    );
  }

  /**
   * Market sentiment (£0.10)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.SentimentFeedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sentimentFeed(
    request: ForceDreamClient.SentimentFeedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.SentimentFeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/sentiment_feed"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleSentimentFeedRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.SentimentFeedError,
      },
      options,
    );
  }

  /**
   * Document summary (£0.10)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.SummarizationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  summarization(
    request: ForceDreamClient.SummarizationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.SummarizationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/summarization"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleSummarizationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.SummarizationError,
      },
      options,
    );
  }

  /**
   * Tax rate (£0.01)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.TaxJarLookupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  taxJarLookup(
    request: ForceDreamClient.TaxJarLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.TaxJarLookupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/tax_jar_lookup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleTaxJarLookupRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.TaxJarLookupError,
      },
      options,
    );
  }

  /**
   * Language translation (£0.08)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.TranslationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  translation(
    request: ForceDreamClient.TranslationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.TranslationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/translation"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleTranslationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.TranslationError,
      },
      options,
    );
  }

  /**
   * Output verification (£0.15)
   *
   * @remarks
   * Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.
   *
   * @returns Data returned after payment
   *
   * @throws {@link ForceDreamClient.ValidationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validation(
    request: ForceDreamClient.ValidationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ForceDreamClient.ValidationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/oracle/validation"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Payment-Intent-Id", value: request.xPaymentIntentId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1OracleValidationRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: ForceDreamClient.ValidationError,
      },
      options,
    );
  }
}

export namespace ForceDreamClient {
  export type AnomalyDetectionRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleAnomalyDetectionRequest;
  };

  export class AnomalyDetectionError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AnomalyDetectionError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type ClassificationRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleClassificationRequest;
  };

  export class ClassificationError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ClassificationError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type CodeGenerationRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleCodeGenerationRequest;
  };

  export class CodeGenerationError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CodeGenerationError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type FraudSignalRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleFraudSignalRequest;
  };

  export class FraudSignalError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<FraudSignalError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type LeadScoreRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleLeadScoreRequest;
  };

  export class LeadScoreError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<LeadScoreError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type ModelInferenceRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleModelInferenceRequest;
  };

  export class ModelInferenceError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ModelInferenceError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PromptTemplateRequest = {
    xPaymentIntentId?: string;
    body?: V1OraclePromptTemplateRequest;
  };

  export class PromptTemplateError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PromptTemplateError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type ProofOfWorkRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleProofOfWorkRequest;
  };

  export class ProofOfWorkError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ProofOfWorkError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type SecurityScanRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleSecurityScanRequest;
  };

  export class SecurityScanError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SecurityScanError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type SemanticCacheRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleSemanticCacheRequest;
  };

  export class SemanticCacheError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SemanticCacheError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type SentimentFeedRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleSentimentFeedRequest;
  };

  export class SentimentFeedError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SentimentFeedError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type SummarizationRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleSummarizationRequest;
  };

  export class SummarizationError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SummarizationError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type TaxJarLookupRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleTaxJarLookupRequest;
  };

  export class TaxJarLookupError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TaxJarLookupError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type TranslationRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleTranslationRequest;
  };

  export class TranslationError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TranslationError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type ValidationRequest = {
    xPaymentIntentId?: string;
    body?: V1OracleValidationRequest;
  };

  export class ValidationError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ValidationError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }
}
