<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `force_dream/client.py` · 15 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.anomaly_detection

- **Route**: `POST /v1/oracle/anomaly_detection`
- **Signature**: `def anomaly_detection(*, x_payment_intent_id: str | None = None, body: V1OracleAnomalyDetectionRequest | V1OracleAnomalyDetectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AnomalyDetectionErrorBody]`
- **Error**: `AnomalyDetectionErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleAnomalyDetectionRequest` | `force_dream/models/v1_oracle_anomaly_detection_request.py` |
| `V1OracleAnomalyDetectionRequestDict` | `force_dream/models/v1_oracle_anomaly_detection_request.py` |
| `AnomalyDetectionErrorBody` | `force_dream/errors/anomaly_detection_error.py` |

### client.classification

- **Route**: `POST /v1/oracle/classification`
- **Signature**: `def classification(*, x_payment_intent_id: str | None = None, body: V1OracleClassificationRequest | V1OracleClassificationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ClassificationErrorBody]`
- **Error**: `ClassificationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleClassificationRequest` | `force_dream/models/v1_oracle_classification_request.py` |
| `V1OracleClassificationRequestDict` | `force_dream/models/v1_oracle_classification_request.py` |
| `ClassificationErrorBody` | `force_dream/errors/classification_error.py` |

### client.code_generation

- **Route**: `POST /v1/oracle/code_generation`
- **Signature**: `def code_generation(*, x_payment_intent_id: str | None = None, body: V1OracleCodeGenerationRequest | V1OracleCodeGenerationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CodeGenerationErrorBody]`
- **Error**: `CodeGenerationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleCodeGenerationRequest` | `force_dream/models/v1_oracle_code_generation_request.py` |
| `V1OracleCodeGenerationRequestDict` | `force_dream/models/v1_oracle_code_generation_request.py` |
| `CodeGenerationErrorBody` | `force_dream/errors/code_generation_error.py` |

### client.fraud_signal

- **Route**: `POST /v1/oracle/fraud_signal`
- **Signature**: `def fraud_signal(*, x_payment_intent_id: str | None = None, body: V1OracleFraudSignalRequest | V1OracleFraudSignalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, FraudSignalErrorBody]`
- **Error**: `FraudSignalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleFraudSignalRequest` | `force_dream/models/v1_oracle_fraud_signal_request.py` |
| `V1OracleFraudSignalRequestDict` | `force_dream/models/v1_oracle_fraud_signal_request.py` |
| `FraudSignalErrorBody` | `force_dream/errors/fraud_signal_error.py` |

### client.lead_score

- **Route**: `POST /v1/oracle/lead_score`
- **Signature**: `def lead_score(*, x_payment_intent_id: str | None = None, body: V1OracleLeadScoreRequest | V1OracleLeadScoreRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, LeadScoreErrorBody]`
- **Error**: `LeadScoreErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleLeadScoreRequest` | `force_dream/models/v1_oracle_lead_score_request.py` |
| `V1OracleLeadScoreRequestDict` | `force_dream/models/v1_oracle_lead_score_request.py` |
| `LeadScoreErrorBody` | `force_dream/errors/lead_score_error.py` |

### client.model_inference

- **Route**: `POST /v1/oracle/model_inference`
- **Signature**: `def model_inference(*, x_payment_intent_id: str | None = None, body: V1OracleModelInferenceRequest | V1OracleModelInferenceRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ModelInferenceErrorBody]`
- **Error**: `ModelInferenceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleModelInferenceRequest` | `force_dream/models/v1_oracle_model_inference_request.py` |
| `V1OracleModelInferenceRequestDict` | `force_dream/models/v1_oracle_model_inference_request.py` |
| `ModelInferenceErrorBody` | `force_dream/errors/model_inference_error.py` |

### client.prompt_template

- **Route**: `POST /v1/oracle/prompt_template`
- **Signature**: `def prompt_template(*, x_payment_intent_id: str | None = None, body: V1OraclePromptTemplateRequest | V1OraclePromptTemplateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PromptTemplateErrorBody]`
- **Error**: `PromptTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OraclePromptTemplateRequest` | `force_dream/models/v1_oracle_prompt_template_request.py` |
| `V1OraclePromptTemplateRequestDict` | `force_dream/models/v1_oracle_prompt_template_request.py` |
| `PromptTemplateErrorBody` | `force_dream/errors/prompt_template_error.py` |

### client.proof_of_work

- **Route**: `POST /v1/oracle/proof_of_work`
- **Signature**: `def proof_of_work(*, x_payment_intent_id: str | None = None, body: V1OracleProofOfWorkRequest | V1OracleProofOfWorkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ProofOfWorkErrorBody]`
- **Error**: `ProofOfWorkErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleProofOfWorkRequest` | `force_dream/models/v1_oracle_proof_of_work_request.py` |
| `V1OracleProofOfWorkRequestDict` | `force_dream/models/v1_oracle_proof_of_work_request.py` |
| `ProofOfWorkErrorBody` | `force_dream/errors/proof_of_work_error.py` |

### client.security_scan

- **Route**: `POST /v1/oracle/security_scan`
- **Signature**: `def security_scan(*, x_payment_intent_id: str | None = None, body: V1OracleSecurityScanRequest | V1OracleSecurityScanRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SecurityScanErrorBody]`
- **Error**: `SecurityScanErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleSecurityScanRequest` | `force_dream/models/v1_oracle_security_scan_request.py` |
| `V1OracleSecurityScanRequestDict` | `force_dream/models/v1_oracle_security_scan_request.py` |
| `SecurityScanErrorBody` | `force_dream/errors/security_scan_error.py` |

### client.semantic_cache

- **Route**: `POST /v1/oracle/semantic_cache`
- **Signature**: `def semantic_cache(*, x_payment_intent_id: str | None = None, body: V1OracleSemanticCacheRequest | V1OracleSemanticCacheRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SemanticCacheErrorBody]`
- **Error**: `SemanticCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleSemanticCacheRequest` | `force_dream/models/v1_oracle_semantic_cache_request.py` |
| `V1OracleSemanticCacheRequestDict` | `force_dream/models/v1_oracle_semantic_cache_request.py` |
| `SemanticCacheErrorBody` | `force_dream/errors/semantic_cache_error.py` |

### client.sentiment_feed

- **Route**: `POST /v1/oracle/sentiment_feed`
- **Signature**: `def sentiment_feed(*, x_payment_intent_id: str | None = None, body: V1OracleSentimentFeedRequest | V1OracleSentimentFeedRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SentimentFeedErrorBody]`
- **Error**: `SentimentFeedErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleSentimentFeedRequest` | `force_dream/models/v1_oracle_sentiment_feed_request.py` |
| `V1OracleSentimentFeedRequestDict` | `force_dream/models/v1_oracle_sentiment_feed_request.py` |
| `SentimentFeedErrorBody` | `force_dream/errors/sentiment_feed_error.py` |

### client.summarization

- **Route**: `POST /v1/oracle/summarization`
- **Signature**: `def summarization(*, x_payment_intent_id: str | None = None, body: V1OracleSummarizationRequest | V1OracleSummarizationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SummarizationErrorBody]`
- **Error**: `SummarizationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleSummarizationRequest` | `force_dream/models/v1_oracle_summarization_request.py` |
| `V1OracleSummarizationRequestDict` | `force_dream/models/v1_oracle_summarization_request.py` |
| `SummarizationErrorBody` | `force_dream/errors/summarization_error.py` |

### client.tax_jar_lookup

- **Route**: `POST /v1/oracle/tax_jar_lookup`
- **Signature**: `def tax_jar_lookup(*, x_payment_intent_id: str | None = None, body: V1OracleTaxJarLookupRequest | V1OracleTaxJarLookupRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TaxJarLookupErrorBody]`
- **Error**: `TaxJarLookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleTaxJarLookupRequest` | `force_dream/models/v1_oracle_tax_jar_lookup_request.py` |
| `V1OracleTaxJarLookupRequestDict` | `force_dream/models/v1_oracle_tax_jar_lookup_request.py` |
| `TaxJarLookupErrorBody` | `force_dream/errors/tax_jar_lookup_error.py` |

### client.translation

- **Route**: `POST /v1/oracle/translation`
- **Signature**: `def translation(*, x_payment_intent_id: str | None = None, body: V1OracleTranslationRequest | V1OracleTranslationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TranslationErrorBody]`
- **Error**: `TranslationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleTranslationRequest` | `force_dream/models/v1_oracle_translation_request.py` |
| `V1OracleTranslationRequestDict` | `force_dream/models/v1_oracle_translation_request.py` |
| `TranslationErrorBody` | `force_dream/errors/translation_error.py` |

### client.validation

- **Route**: `POST /v1/oracle/validation`
- **Signature**: `def validation(*, x_payment_intent_id: str | None = None, body: V1OracleValidationRequest | V1OracleValidationRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_payment_intent_id` — header `X-Payment-Intent-Id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ValidationErrorBody]`
- **Error**: `ValidationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `V1OracleValidationRequest` | `force_dream/models/v1_oracle_validation_request.py` |
| `V1OracleValidationRequestDict` | `force_dream/models/v1_oracle_validation_request.py` |
| `ValidationErrorBody` | `force_dream/errors/validation_error.py` |

