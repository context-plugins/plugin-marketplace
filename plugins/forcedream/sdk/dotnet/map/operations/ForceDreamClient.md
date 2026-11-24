<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForceDreamClient — operations

Accessor: `client` · Source: `src/ForceDream/ForceDreamClient.cs` · 15 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AnomalyDetection

- **Signature**: `AnomalyDetection(AnomalyDetectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AnomalyDetectionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AnomalyDetectionRequest` | `src/ForceDream/Requests/AnomalyDetectionRequest.cs` |
| `V1OracleAnomalyDetectionRequest` | `src/ForceDream/Models/V1OracleAnomalyDetectionRequest.cs` |
| `AnomalyDetectionError` | `src/ForceDream/Errors/AnomalyDetectionError.cs` |

### Classification

- **Signature**: `Classification(ClassificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ClassificationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClassificationRequest` | `src/ForceDream/Requests/ClassificationRequest.cs` |
| `V1OracleClassificationRequest` | `src/ForceDream/Models/V1OracleClassificationRequest.cs` |
| `ClassificationError` | `src/ForceDream/Errors/ClassificationError.cs` |

### CodeGeneration

- **Signature**: `CodeGeneration(CodeGenerationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CodeGenerationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CodeGenerationRequest` | `src/ForceDream/Requests/CodeGenerationRequest.cs` |
| `V1OracleCodeGenerationRequest` | `src/ForceDream/Models/V1OracleCodeGenerationRequest.cs` |
| `CodeGenerationError` | `src/ForceDream/Errors/CodeGenerationError.cs` |

### FraudSignal

- **Signature**: `FraudSignal(FraudSignalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<FraudSignalError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FraudSignalRequest` | `src/ForceDream/Requests/FraudSignalRequest.cs` |
| `V1OracleFraudSignalRequest` | `src/ForceDream/Models/V1OracleFraudSignalRequest.cs` |
| `FraudSignalError` | `src/ForceDream/Errors/FraudSignalError.cs` |

### LeadScore

- **Signature**: `LeadScore(LeadScoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<LeadScoreError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LeadScoreRequest` | `src/ForceDream/Requests/LeadScoreRequest.cs` |
| `V1OracleLeadScoreRequest` | `src/ForceDream/Models/V1OracleLeadScoreRequest.cs` |
| `LeadScoreError` | `src/ForceDream/Errors/LeadScoreError.cs` |

### ModelInference

- **Signature**: `ModelInference(ModelInferenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ModelInferenceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModelInferenceRequest` | `src/ForceDream/Requests/ModelInferenceRequest.cs` |
| `V1OracleModelInferenceRequest` | `src/ForceDream/Models/V1OracleModelInferenceRequest.cs` |
| `ModelInferenceError` | `src/ForceDream/Errors/ModelInferenceError.cs` |

### PromptTemplate

- **Signature**: `PromptTemplate(PromptTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PromptTemplateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PromptTemplateRequest` | `src/ForceDream/Requests/PromptTemplateRequest.cs` |
| `V1OraclePromptTemplateRequest` | `src/ForceDream/Models/V1OraclePromptTemplateRequest.cs` |
| `PromptTemplateError` | `src/ForceDream/Errors/PromptTemplateError.cs` |

### ProofOfWork

- **Signature**: `ProofOfWork(ProofOfWorkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ProofOfWorkError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ProofOfWorkRequest` | `src/ForceDream/Requests/ProofOfWorkRequest.cs` |
| `V1OracleProofOfWorkRequest` | `src/ForceDream/Models/V1OracleProofOfWorkRequest.cs` |
| `ProofOfWorkError` | `src/ForceDream/Errors/ProofOfWorkError.cs` |

### SecurityScan

- **Signature**: `SecurityScan(SecurityScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SecurityScanError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SecurityScanRequest` | `src/ForceDream/Requests/SecurityScanRequest.cs` |
| `V1OracleSecurityScanRequest` | `src/ForceDream/Models/V1OracleSecurityScanRequest.cs` |
| `SecurityScanError` | `src/ForceDream/Errors/SecurityScanError.cs` |

### SemanticCache

- **Signature**: `SemanticCache(SemanticCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SemanticCacheError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SemanticCacheRequest` | `src/ForceDream/Requests/SemanticCacheRequest.cs` |
| `V1OracleSemanticCacheRequest` | `src/ForceDream/Models/V1OracleSemanticCacheRequest.cs` |
| `SemanticCacheError` | `src/ForceDream/Errors/SemanticCacheError.cs` |

### SentimentFeed

- **Signature**: `SentimentFeed(SentimentFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SentimentFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SentimentFeedRequest` | `src/ForceDream/Requests/SentimentFeedRequest.cs` |
| `V1OracleSentimentFeedRequest` | `src/ForceDream/Models/V1OracleSentimentFeedRequest.cs` |
| `SentimentFeedError` | `src/ForceDream/Errors/SentimentFeedError.cs` |

### Summarization

- **Signature**: `Summarization(SummarizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SummarizationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SummarizationRequest` | `src/ForceDream/Requests/SummarizationRequest.cs` |
| `V1OracleSummarizationRequest` | `src/ForceDream/Models/V1OracleSummarizationRequest.cs` |
| `SummarizationError` | `src/ForceDream/Errors/SummarizationError.cs` |

### TaxJarLookup

- **Signature**: `TaxJarLookup(TaxJarLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TaxJarLookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TaxJarLookupRequest` | `src/ForceDream/Requests/TaxJarLookupRequest.cs` |
| `V1OracleTaxJarLookupRequest` | `src/ForceDream/Models/V1OracleTaxJarLookupRequest.cs` |
| `TaxJarLookupError` | `src/ForceDream/Errors/TaxJarLookupError.cs` |

### Translation

- **Signature**: `Translation(TranslationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TranslationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TranslationRequest` | `src/ForceDream/Requests/TranslationRequest.cs` |
| `V1OracleTranslationRequest` | `src/ForceDream/Models/V1OracleTranslationRequest.cs` |
| `TranslationError` | `src/ForceDream/Errors/TranslationError.cs` |

### Validation

- **Signature**: `Validation(ValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ValidationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ValidationRequest` | `src/ForceDream/Requests/ValidationRequest.cs` |
| `V1OracleValidationRequest` | `src/ForceDream/Models/V1OracleValidationRequest.cs` |
| `ValidationError` | `src/ForceDream/Errors/ValidationError.cs` |

