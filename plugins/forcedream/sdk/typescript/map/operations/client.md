<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForceDreamClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 15 operations · Request and error types: namespace `ForceDreamClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ForceDreamClient.AnomalyDetectionRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `force-dream`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### anomalyDetection

- **Signature**: `anomalyDetection(request?: ForceDreamClient.AnomalyDetectionRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.AnomalyDetectionError>`
- **Wire**: `POST /v1/oracle/anomaly_detection`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.AnomalyDetectionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.AnomalyDetectionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleAnomalyDetectionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleAnomalyDetectionRequest` | `v1OracleAnomalyDetectionRequestSchema` | `src/models/v1-oracle-anomaly-detection-request.ts` |

### classification

- **Signature**: `classification(request?: ForceDreamClient.ClassificationRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.ClassificationError>`
- **Wire**: `POST /v1/oracle/classification`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.ClassificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.ClassificationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleClassificationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleClassificationRequest` | `v1OracleClassificationRequestSchema` | `src/models/v1-oracle-classification-request.ts` |

### codeGeneration

- **Signature**: `codeGeneration(request?: ForceDreamClient.CodeGenerationRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.CodeGenerationError>`
- **Wire**: `POST /v1/oracle/code_generation`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.CodeGenerationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.CodeGenerationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleCodeGenerationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleCodeGenerationRequest` | `v1OracleCodeGenerationRequestSchema` | `src/models/v1-oracle-code-generation-request.ts` |

### fraudSignal

- **Signature**: `fraudSignal(request?: ForceDreamClient.FraudSignalRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.FraudSignalError>`
- **Wire**: `POST /v1/oracle/fraud_signal`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.FraudSignalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.FraudSignalRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleFraudSignalRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleFraudSignalRequest` | `v1OracleFraudSignalRequestSchema` | `src/models/v1-oracle-fraud-signal-request.ts` |

### leadScore

- **Signature**: `leadScore(request?: ForceDreamClient.LeadScoreRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.LeadScoreError>`
- **Wire**: `POST /v1/oracle/lead_score`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.LeadScoreError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.LeadScoreRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleLeadScoreRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleLeadScoreRequest` | `v1OracleLeadScoreRequestSchema` | `src/models/v1-oracle-lead-score-request.ts` |

### modelInference

- **Signature**: `modelInference(request?: ForceDreamClient.ModelInferenceRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.ModelInferenceError>`
- **Wire**: `POST /v1/oracle/model_inference`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.ModelInferenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.ModelInferenceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleModelInferenceRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleModelInferenceRequest` | `v1OracleModelInferenceRequestSchema` | `src/models/v1-oracle-model-inference-request.ts` |

### promptTemplate

- **Signature**: `promptTemplate(request?: ForceDreamClient.PromptTemplateRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.PromptTemplateError>`
- **Wire**: `POST /v1/oracle/prompt_template`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.PromptTemplateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.PromptTemplateRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OraclePromptTemplateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OraclePromptTemplateRequest` | `v1OraclePromptTemplateRequestSchema` | `src/models/v1-oracle-prompt-template-request.ts` |

### proofOfWork

- **Signature**: `proofOfWork(request?: ForceDreamClient.ProofOfWorkRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.ProofOfWorkError>`
- **Wire**: `POST /v1/oracle/proof_of_work`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.ProofOfWorkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.ProofOfWorkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleProofOfWorkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleProofOfWorkRequest` | `v1OracleProofOfWorkRequestSchema` | `src/models/v1-oracle-proof-of-work-request.ts` |

### securityScan

- **Signature**: `securityScan(request?: ForceDreamClient.SecurityScanRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.SecurityScanError>`
- **Wire**: `POST /v1/oracle/security_scan`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.SecurityScanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.SecurityScanRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleSecurityScanRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleSecurityScanRequest` | `v1OracleSecurityScanRequestSchema` | `src/models/v1-oracle-security-scan-request.ts` |

### semanticCache

- **Signature**: `semanticCache(request?: ForceDreamClient.SemanticCacheRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.SemanticCacheError>`
- **Wire**: `POST /v1/oracle/semantic_cache`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.SemanticCacheError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.SemanticCacheRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleSemanticCacheRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleSemanticCacheRequest` | `v1OracleSemanticCacheRequestSchema` | `src/models/v1-oracle-semantic-cache-request.ts` |

### sentimentFeed

- **Signature**: `sentimentFeed(request?: ForceDreamClient.SentimentFeedRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.SentimentFeedError>`
- **Wire**: `POST /v1/oracle/sentiment_feed`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.SentimentFeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.SentimentFeedRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleSentimentFeedRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleSentimentFeedRequest` | `v1OracleSentimentFeedRequestSchema` | `src/models/v1-oracle-sentiment-feed-request.ts` |

### summarization

- **Signature**: `summarization(request?: ForceDreamClient.SummarizationRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.SummarizationError>`
- **Wire**: `POST /v1/oracle/summarization`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.SummarizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.SummarizationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleSummarizationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleSummarizationRequest` | `v1OracleSummarizationRequestSchema` | `src/models/v1-oracle-summarization-request.ts` |

### taxJarLookup

- **Signature**: `taxJarLookup(request?: ForceDreamClient.TaxJarLookupRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.TaxJarLookupError>`
- **Wire**: `POST /v1/oracle/tax_jar_lookup`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.TaxJarLookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.TaxJarLookupRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleTaxJarLookupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleTaxJarLookupRequest` | `v1OracleTaxJarLookupRequestSchema` | `src/models/v1-oracle-tax-jar-lookup-request.ts` |

### translation

- **Signature**: `translation(request?: ForceDreamClient.TranslationRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.TranslationError>`
- **Wire**: `POST /v1/oracle/translation`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.TranslationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.TranslationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleTranslationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleTranslationRequest` | `v1OracleTranslationRequestSchema` | `src/models/v1-oracle-translation-request.ts` |

### validation

- **Signature**: `validation(request?: ForceDreamClient.ValidationRequest, options?: RequestOptions): ApiPromise<undefined, ForceDreamClient.ValidationError>`
- **Wire**: `POST /v1/oracle/validation`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ForceDreamError` with `kind: "api"`, an instance of `ForceDreamClient.ValidationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error402"` [402] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ForceDreamClient.ValidationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPaymentIntentId` | `header` | `X-Payment-Intent-Id` | `string` | no |
| `body` | `body` | — | `V1OracleValidationRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleValidationRequest` | `v1OracleValidationRequestSchema` | `src/models/v1-oracle-validation-request.ts` |

