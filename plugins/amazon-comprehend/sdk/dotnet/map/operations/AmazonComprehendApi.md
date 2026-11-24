<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonComprehendApi — operations

Accessor: `client.AmazonComprehendApi` · Source: `src/AmazonComprehend/Api/AmazonComprehendApi.cs` · 84 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchDetectDominantLanguage

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectDominantLanguage(BatchDetectDominantLanguageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectDominantLanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectDominantLanguageOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectDominantLanguageOperationRequest.cs` |
| `XAmzTarget` | `src/AmazonComprehend/Models/Enums/XAmzTarget.cs` |
| `BatchDetectDominantLanguageError` | `src/AmazonComprehend/Errors/BatchDetectDominantLanguageError.cs` |

### BatchDetectEntities

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectEntities(BatchDetectEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectEntitiesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectEntitiesOperationRequest.cs` |
| `XAmzTarget1` | `src/AmazonComprehend/Models/Enums/XAmzTarget1.cs` |
| `BatchDetectEntitiesError` | `src/AmazonComprehend/Errors/BatchDetectEntitiesError.cs` |

### BatchDetectKeyPhrases

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectKeyPhrases(BatchDetectKeyPhrasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectKeyPhrasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectKeyPhrasesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectKeyPhrasesOperationRequest.cs` |
| `XAmzTarget2` | `src/AmazonComprehend/Models/Enums/XAmzTarget2.cs` |
| `BatchDetectKeyPhrasesError` | `src/AmazonComprehend/Errors/BatchDetectKeyPhrasesError.cs` |

### BatchDetectSentiment

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectSentiment(BatchDetectSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectSentimentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectSentimentOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectSentimentOperationRequest.cs` |
| `XAmzTarget3` | `src/AmazonComprehend/Models/Enums/XAmzTarget3.cs` |
| `BatchDetectSentimentError` | `src/AmazonComprehend/Errors/BatchDetectSentimentError.cs` |

### BatchDetectSyntax

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectSyntax(BatchDetectSyntaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectSyntaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectSyntaxOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectSyntaxOperationRequest.cs` |
| `XAmzTarget4` | `src/AmazonComprehend/Models/Enums/XAmzTarget4.cs` |
| `BatchDetectSyntaxError` | `src/AmazonComprehend/Errors/BatchDetectSyntaxError.cs` |

### BatchDetectTargetedSentiment

- **Auth**: `options.Sigv4`
- **Signature**: `BatchDetectTargetedSentiment(BatchDetectTargetedSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<BatchDetectTargetedSentimentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchDetectTargetedSentimentOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectTargetedSentimentOperationRequest.cs` |
| `XAmzTarget5` | `src/AmazonComprehend/Models/Enums/XAmzTarget5.cs` |
| `BatchDetectTargetedSentimentError` | `src/AmazonComprehend/Errors/BatchDetectTargetedSentimentError.cs` |

### ClassifyDocument

- **Auth**: `options.Sigv4`
- **Signature**: `ClassifyDocument(ClassifyDocumentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ClassifyDocumentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClassifyDocumentOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ClassifyDocumentOperationRequest.cs` |
| `XAmzTarget6` | `src/AmazonComprehend/Models/Enums/XAmzTarget6.cs` |
| `ClassifyDocumentError` | `src/AmazonComprehend/Errors/ClassifyDocumentError.cs` |

### ContainsPiiEntities

- **Auth**: `options.Sigv4`
- **Signature**: `ContainsPiiEntities(ContainsPiiEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ContainsPiiEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ContainsPiiEntitiesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ContainsPiiEntitiesOperationRequest.cs` |
| `XAmzTarget7` | `src/AmazonComprehend/Models/Enums/XAmzTarget7.cs` |
| `ContainsPiiEntitiesError` | `src/AmazonComprehend/Errors/ContainsPiiEntitiesError.cs` |

### CreateDataset

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDatasetOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/CreateDatasetOperationRequest.cs` |
| `XAmzTarget15` | `src/AmazonComprehend/Models/Enums/XAmzTarget15.cs` |
| `CreateDatasetError` | `src/AmazonComprehend/Errors/CreateDatasetError.cs` |

### CreateDocumentClassifier

- **Auth**: `options.Sigv4`
- **Signature**: `CreateDocumentClassifier(CreateDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateDocumentClassifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateDocumentClassifierOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/CreateDocumentClassifierOperationRequest.cs` |
| `XAmzTarget18` | `src/AmazonComprehend/Models/Enums/XAmzTarget18.cs` |
| `CreateDocumentClassifierError` | `src/AmazonComprehend/Errors/CreateDocumentClassifierError.cs` |

### CreateEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `CreateEndpoint(CreateEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEndpointOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/CreateEndpointOperationRequest.cs` |
| `XAmzTarget22` | `src/AmazonComprehend/Models/Enums/XAmzTarget22.cs` |
| `CreateEndpointError` | `src/AmazonComprehend/Errors/CreateEndpointError.cs` |

### CreateEntityRecognizer

- **Auth**: `options.Sigv4`
- **Signature**: `CreateEntityRecognizer(CreateEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateEntityRecognizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEntityRecognizerOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/CreateEntityRecognizerOperationRequest.cs` |
| `XAmzTarget27` | `src/AmazonComprehend/Models/Enums/XAmzTarget27.cs` |
| `CreateEntityRecognizerError` | `src/AmazonComprehend/Errors/CreateEntityRecognizerError.cs` |

### CreateFlywheel

- **Auth**: `options.Sigv4`
- **Signature**: `CreateFlywheel(CreateFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<CreateFlywheelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateFlywheelOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/CreateFlywheelOperationRequest.cs` |
| `XAmzTarget31` | `src/AmazonComprehend/Models/Enums/XAmzTarget31.cs` |
| `CreateFlywheelError` | `src/AmazonComprehend/Errors/CreateFlywheelError.cs` |

### DeleteDocumentClassifier

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteDocumentClassifier(DeleteDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteDocumentClassifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteDocumentClassifierOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteDocumentClassifierOperationRequest.cs` |
| `XAmzTarget19` | `src/AmazonComprehend/Models/Enums/XAmzTarget19.cs` |
| `DeleteDocumentClassifierError` | `src/AmazonComprehend/Errors/DeleteDocumentClassifierError.cs` |

### DeleteEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteEndpoint(DeleteEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEndpointOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteEndpointOperationRequest.cs` |
| `XAmzTarget23` | `src/AmazonComprehend/Models/Enums/XAmzTarget23.cs` |
| `DeleteEndpointError` | `src/AmazonComprehend/Errors/DeleteEndpointError.cs` |

### DeleteEntityRecognizer

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteEntityRecognizer(DeleteEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEntityRecognizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEntityRecognizerOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteEntityRecognizerOperationRequest.cs` |
| `XAmzTarget28` | `src/AmazonComprehend/Models/Enums/XAmzTarget28.cs` |
| `DeleteEntityRecognizerError` | `src/AmazonComprehend/Errors/DeleteEntityRecognizerError.cs` |

### DeleteFlywheel

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteFlywheel(DeleteFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteFlywheelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteFlywheelOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteFlywheelOperationRequest.cs` |
| `XAmzTarget32` | `src/AmazonComprehend/Models/Enums/XAmzTarget32.cs` |
| `DeleteFlywheelError` | `src/AmazonComprehend/Errors/DeleteFlywheelError.cs` |

### DeleteResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteResourcePolicyOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteResourcePolicyOperationRequest.cs` |
| `XAmzTarget36` | `src/AmazonComprehend/Models/Enums/XAmzTarget36.cs` |
| `DeleteResourcePolicyError` | `src/AmazonComprehend/Errors/DeleteResourcePolicyError.cs` |

### DescribeDataset

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDataset(DescribeDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDatasetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDatasetOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDatasetOperationRequest.cs` |
| `XAmzTarget16` | `src/AmazonComprehend/Models/Enums/XAmzTarget16.cs` |
| `DescribeDatasetError` | `src/AmazonComprehend/Errors/DescribeDatasetError.cs` |

### DescribeDocumentClassificationJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDocumentClassificationJob(DescribeDocumentClassificationJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDocumentClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDocumentClassificationJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDocumentClassificationJobOperationRequest.cs` |
| `XAmzTarget39` | `src/AmazonComprehend/Models/Enums/XAmzTarget39.cs` |
| `DescribeDocumentClassificationJobError` | `src/AmazonComprehend/Errors/DescribeDocumentClassificationJobError.cs` |

### DescribeDocumentClassifier

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDocumentClassifier(DescribeDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDocumentClassifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDocumentClassifierOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDocumentClassifierOperationRequest.cs` |
| `XAmzTarget20` | `src/AmazonComprehend/Models/Enums/XAmzTarget20.cs` |
| `DescribeDocumentClassifierError` | `src/AmazonComprehend/Errors/DescribeDocumentClassifierError.cs` |

### DescribeDominantLanguageDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeDominantLanguageDetectionJob(DescribeDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeDominantLanguageDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeDominantLanguageDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDominantLanguageDetectionJobOperationRequest.cs` |
| `XAmzTarget42` | `src/AmazonComprehend/Models/Enums/XAmzTarget42.cs` |
| `DescribeDominantLanguageDetectionJobError` | `src/AmazonComprehend/Errors/DescribeDominantLanguageDetectionJobError.cs` |

### DescribeEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeEndpoint(DescribeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeEndpointOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEndpointOperationRequest.cs` |
| `XAmzTarget24` | `src/AmazonComprehend/Models/Enums/XAmzTarget24.cs` |
| `DescribeEndpointError` | `src/AmazonComprehend/Errors/DescribeEndpointError.cs` |

### DescribeEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeEntitiesDetectionJob(DescribeEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget46` | `src/AmazonComprehend/Models/Enums/XAmzTarget46.cs` |
| `DescribeEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/DescribeEntitiesDetectionJobError.cs` |

### DescribeEntityRecognizer

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeEntityRecognizer(DescribeEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeEntityRecognizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeEntityRecognizerOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEntityRecognizerOperationRequest.cs` |
| `XAmzTarget29` | `src/AmazonComprehend/Models/Enums/XAmzTarget29.cs` |
| `DescribeEntityRecognizerError` | `src/AmazonComprehend/Errors/DescribeEntityRecognizerError.cs` |

### DescribeEventsDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeEventsDetectionJob(DescribeEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeEventsDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeEventsDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEventsDetectionJobOperationRequest.cs` |
| `XAmzTarget50` | `src/AmazonComprehend/Models/Enums/XAmzTarget50.cs` |
| `DescribeEventsDetectionJobError` | `src/AmazonComprehend/Errors/DescribeEventsDetectionJobError.cs` |

### DescribeFlywheel

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeFlywheel(DescribeFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeFlywheelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeFlywheelOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeFlywheelOperationRequest.cs` |
| `XAmzTarget33` | `src/AmazonComprehend/Models/Enums/XAmzTarget33.cs` |
| `DescribeFlywheelError` | `src/AmazonComprehend/Errors/DescribeFlywheelError.cs` |

### DescribeFlywheelIteration

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeFlywheelIteration(DescribeFlywheelIterationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeFlywheelIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeFlywheelIterationOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeFlywheelIterationOperationRequest.cs` |
| `XAmzTarget54` | `src/AmazonComprehend/Models/Enums/XAmzTarget54.cs` |
| `DescribeFlywheelIterationError` | `src/AmazonComprehend/Errors/DescribeFlywheelIterationError.cs` |

### DescribeKeyPhrasesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeKeyPhrasesDetectionJob(DescribeKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeKeyPhrasesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeKeyPhrasesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeKeyPhrasesDetectionJobOperationRequest.cs` |
| `XAmzTarget56` | `src/AmazonComprehend/Models/Enums/XAmzTarget56.cs` |
| `DescribeKeyPhrasesDetectionJobError` | `src/AmazonComprehend/Errors/DescribeKeyPhrasesDetectionJobError.cs` |

### DescribePiiEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribePiiEntitiesDetectionJob(DescribePiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribePiiEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribePiiEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribePiiEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget60` | `src/AmazonComprehend/Models/Enums/XAmzTarget60.cs` |
| `DescribePiiEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/DescribePiiEntitiesDetectionJobError.cs` |

### DescribeResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeResourcePolicyOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeResourcePolicyOperationRequest.cs` |
| `XAmzTarget37` | `src/AmazonComprehend/Models/Enums/XAmzTarget37.cs` |
| `DescribeResourcePolicyError` | `src/AmazonComprehend/Errors/DescribeResourcePolicyError.cs` |

### DescribeSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeSentimentDetectionJob(DescribeSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget64` | `src/AmazonComprehend/Models/Enums/XAmzTarget64.cs` |
| `DescribeSentimentDetectionJobError` | `src/AmazonComprehend/Errors/DescribeSentimentDetectionJobError.cs` |

### DescribeTargetedSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTargetedSentimentDetectionJob(DescribeTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTargetedSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTargetedSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeTargetedSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget68` | `src/AmazonComprehend/Models/Enums/XAmzTarget68.cs` |
| `DescribeTargetedSentimentDetectionJobError` | `src/AmazonComprehend/Errors/DescribeTargetedSentimentDetectionJobError.cs` |

### DescribeTopicsDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `DescribeTopicsDetectionJob(DescribeTopicsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DescribeTopicsDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DescribeTopicsDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeTopicsDetectionJobOperationRequest.cs` |
| `XAmzTarget72` | `src/AmazonComprehend/Models/Enums/XAmzTarget72.cs` |
| `DescribeTopicsDetectionJobError` | `src/AmazonComprehend/Errors/DescribeTopicsDetectionJobError.cs` |

### DetectDominantLanguage

- **Auth**: `options.Sigv4`
- **Signature**: `DetectDominantLanguage(DetectDominantLanguageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectDominantLanguageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectDominantLanguageOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectDominantLanguageOperationRequest.cs` |
| `XAmzTarget8` | `src/AmazonComprehend/Models/Enums/XAmzTarget8.cs` |
| `DetectDominantLanguageError` | `src/AmazonComprehend/Errors/DetectDominantLanguageError.cs` |

### DetectEntities

- **Auth**: `options.Sigv4`
- **Signature**: `DetectEntities(DetectEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectEntitiesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectEntitiesOperationRequest.cs` |
| `XAmzTarget9` | `src/AmazonComprehend/Models/Enums/XAmzTarget9.cs` |
| `DetectEntitiesError` | `src/AmazonComprehend/Errors/DetectEntitiesError.cs` |

### DetectKeyPhrases

- **Auth**: `options.Sigv4`
- **Signature**: `DetectKeyPhrases(DetectKeyPhrasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectKeyPhrasesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectKeyPhrasesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectKeyPhrasesOperationRequest.cs` |
| `XAmzTarget10` | `src/AmazonComprehend/Models/Enums/XAmzTarget10.cs` |
| `DetectKeyPhrasesError` | `src/AmazonComprehend/Errors/DetectKeyPhrasesError.cs` |

### DetectPiiEntities

- **Auth**: `options.Sigv4`
- **Signature**: `DetectPiiEntities(DetectPiiEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectPiiEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectPiiEntitiesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectPiiEntitiesOperationRequest.cs` |
| `XAmzTarget11` | `src/AmazonComprehend/Models/Enums/XAmzTarget11.cs` |
| `DetectPiiEntitiesError` | `src/AmazonComprehend/Errors/DetectPiiEntitiesError.cs` |

### DetectSentiment

- **Auth**: `options.Sigv4`
- **Signature**: `DetectSentiment(DetectSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectSentimentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectSentimentOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectSentimentOperationRequest.cs` |
| `XAmzTarget12` | `src/AmazonComprehend/Models/Enums/XAmzTarget12.cs` |
| `DetectSentimentError` | `src/AmazonComprehend/Errors/DetectSentimentError.cs` |

### DetectSyntax

- **Auth**: `options.Sigv4`
- **Signature**: `DetectSyntax(DetectSyntaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectSyntaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectSyntaxOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectSyntaxOperationRequest.cs` |
| `XAmzTarget13` | `src/AmazonComprehend/Models/Enums/XAmzTarget13.cs` |
| `DetectSyntaxError` | `src/AmazonComprehend/Errors/DetectSyntaxError.cs` |

### DetectTargetedSentiment

- **Auth**: `options.Sigv4`
- **Signature**: `DetectTargetedSentiment(DetectTargetedSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DetectTargetedSentimentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DetectTargetedSentimentOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/DetectTargetedSentimentOperationRequest.cs` |
| `XAmzTarget14` | `src/AmazonComprehend/Models/Enums/XAmzTarget14.cs` |
| `DetectTargetedSentimentError` | `src/AmazonComprehend/Errors/DetectTargetedSentimentError.cs` |

### ImportModel

- **Auth**: `options.Sigv4`
- **Signature**: `ImportModel(ImportModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ImportModelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ImportModelOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ImportModelOperationRequest.cs` |
| `XAmzTarget75` | `src/AmazonComprehend/Models/Enums/XAmzTarget75.cs` |
| `ImportModelError` | `src/AmazonComprehend/Errors/ImportModelError.cs` |

### ListDatasets

- **Auth**: `options.Sigv4`
- **Signature**: `ListDatasets(ListDatasetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDatasetsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDatasetsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListDatasetsOperationRequest.cs` |
| `XAmzTarget17` | `src/AmazonComprehend/Models/Enums/XAmzTarget17.cs` |
| `ListDatasetsError` | `src/AmazonComprehend/Errors/ListDatasetsError.cs` |

### ListDocumentClassificationJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListDocumentClassificationJobs(ListDocumentClassificationJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDocumentClassificationJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentClassificationJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassificationJobsOperationRequest.cs` |
| `XAmzTarget40` | `src/AmazonComprehend/Models/Enums/XAmzTarget40.cs` |
| `ListDocumentClassificationJobsError` | `src/AmazonComprehend/Errors/ListDocumentClassificationJobsError.cs` |

### ListDocumentClassifierSummaries

- **Auth**: `options.Sigv4`
- **Signature**: `ListDocumentClassifierSummaries(ListDocumentClassifierSummariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDocumentClassifierSummariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentClassifierSummariesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassifierSummariesOperationRequest.cs` |
| `XAmzTarget76` | `src/AmazonComprehend/Models/Enums/XAmzTarget76.cs` |
| `ListDocumentClassifierSummariesError` | `src/AmazonComprehend/Errors/ListDocumentClassifierSummariesError.cs` |

### ListDocumentClassifiers

- **Auth**: `options.Sigv4`
- **Signature**: `ListDocumentClassifiers(ListDocumentClassifiersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDocumentClassifiersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDocumentClassifiersOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassifiersOperationRequest.cs` |
| `XAmzTarget21` | `src/AmazonComprehend/Models/Enums/XAmzTarget21.cs` |
| `ListDocumentClassifiersError` | `src/AmazonComprehend/Errors/ListDocumentClassifiersError.cs` |

### ListDominantLanguageDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListDominantLanguageDetectionJobs(ListDominantLanguageDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListDominantLanguageDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListDominantLanguageDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListDominantLanguageDetectionJobsOperationRequest.cs` |
| `XAmzTarget43` | `src/AmazonComprehend/Models/Enums/XAmzTarget43.cs` |
| `ListDominantLanguageDetectionJobsError` | `src/AmazonComprehend/Errors/ListDominantLanguageDetectionJobsError.cs` |

### ListEndpoints

- **Auth**: `options.Sigv4`
- **Signature**: `ListEndpoints(ListEndpointsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListEndpointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEndpointsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListEndpointsOperationRequest.cs` |
| `XAmzTarget25` | `src/AmazonComprehend/Models/Enums/XAmzTarget25.cs` |
| `ListEndpointsError` | `src/AmazonComprehend/Errors/ListEndpointsError.cs` |

### ListEntitiesDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListEntitiesDetectionJobs(ListEntitiesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListEntitiesDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEntitiesDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntitiesDetectionJobsOperationRequest.cs` |
| `XAmzTarget47` | `src/AmazonComprehend/Models/Enums/XAmzTarget47.cs` |
| `ListEntitiesDetectionJobsError` | `src/AmazonComprehend/Errors/ListEntitiesDetectionJobsError.cs` |

### ListEntityRecognizerSummaries

- **Auth**: `options.Sigv4`
- **Signature**: `ListEntityRecognizerSummaries(ListEntityRecognizerSummariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListEntityRecognizerSummariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEntityRecognizerSummariesOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntityRecognizerSummariesOperationRequest.cs` |
| `XAmzTarget77` | `src/AmazonComprehend/Models/Enums/XAmzTarget77.cs` |
| `ListEntityRecognizerSummariesError` | `src/AmazonComprehend/Errors/ListEntityRecognizerSummariesError.cs` |

### ListEntityRecognizers

- **Auth**: `options.Sigv4`
- **Signature**: `ListEntityRecognizers(ListEntityRecognizersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListEntityRecognizersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEntityRecognizersOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntityRecognizersOperationRequest.cs` |
| `XAmzTarget30` | `src/AmazonComprehend/Models/Enums/XAmzTarget30.cs` |
| `ListEntityRecognizersError` | `src/AmazonComprehend/Errors/ListEntityRecognizersError.cs` |

### ListEventsDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListEventsDetectionJobs(ListEventsDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListEventsDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEventsDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListEventsDetectionJobsOperationRequest.cs` |
| `XAmzTarget51` | `src/AmazonComprehend/Models/Enums/XAmzTarget51.cs` |
| `ListEventsDetectionJobsError` | `src/AmazonComprehend/Errors/ListEventsDetectionJobsError.cs` |

### ListFlywheelIterationHistory

- **Auth**: `options.Sigv4`
- **Signature**: `ListFlywheelIterationHistory(ListFlywheelIterationHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFlywheelIterationHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFlywheelIterationHistoryOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListFlywheelIterationHistoryOperationRequest.cs` |
| `XAmzTarget78` | `src/AmazonComprehend/Models/Enums/XAmzTarget78.cs` |
| `ListFlywheelIterationHistoryError` | `src/AmazonComprehend/Errors/ListFlywheelIterationHistoryError.cs` |

### ListFlywheels

- **Auth**: `options.Sigv4`
- **Signature**: `ListFlywheels(ListFlywheelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListFlywheelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListFlywheelsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListFlywheelsOperationRequest.cs` |
| `XAmzTarget34` | `src/AmazonComprehend/Models/Enums/XAmzTarget34.cs` |
| `ListFlywheelsError` | `src/AmazonComprehend/Errors/ListFlywheelsError.cs` |

### ListKeyPhrasesDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListKeyPhrasesDetectionJobs(ListKeyPhrasesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListKeyPhrasesDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListKeyPhrasesDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListKeyPhrasesDetectionJobsOperationRequest.cs` |
| `XAmzTarget57` | `src/AmazonComprehend/Models/Enums/XAmzTarget57.cs` |
| `ListKeyPhrasesDetectionJobsError` | `src/AmazonComprehend/Errors/ListKeyPhrasesDetectionJobsError.cs` |

### ListPiiEntitiesDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListPiiEntitiesDetectionJobs(ListPiiEntitiesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListPiiEntitiesDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListPiiEntitiesDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListPiiEntitiesDetectionJobsOperationRequest.cs` |
| `XAmzTarget61` | `src/AmazonComprehend/Models/Enums/XAmzTarget61.cs` |
| `ListPiiEntitiesDetectionJobsError` | `src/AmazonComprehend/Errors/ListPiiEntitiesDetectionJobsError.cs` |

### ListSentimentDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListSentimentDetectionJobs(ListSentimentDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListSentimentDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListSentimentDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListSentimentDetectionJobsOperationRequest.cs` |
| `XAmzTarget65` | `src/AmazonComprehend/Models/Enums/XAmzTarget65.cs` |
| `ListSentimentDetectionJobsError` | `src/AmazonComprehend/Errors/ListSentimentDetectionJobsError.cs` |

### ListTagsForResource

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListTagsForResourceOperationRequest.cs` |
| `XAmzTarget79` | `src/AmazonComprehend/Models/Enums/XAmzTarget79.cs` |
| `ListTagsForResourceError` | `src/AmazonComprehend/Errors/ListTagsForResourceError.cs` |

### ListTargetedSentimentDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListTargetedSentimentDetectionJobs(ListTargetedSentimentDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTargetedSentimentDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTargetedSentimentDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListTargetedSentimentDetectionJobsOperationRequest.cs` |
| `XAmzTarget69` | `src/AmazonComprehend/Models/Enums/XAmzTarget69.cs` |
| `ListTargetedSentimentDetectionJobsError` | `src/AmazonComprehend/Errors/ListTargetedSentimentDetectionJobsError.cs` |

### ListTopicsDetectionJobs

- **Auth**: `options.Sigv4`
- **Signature**: `ListTopicsDetectionJobs(ListTopicsDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<ListTopicsDetectionJobsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTopicsDetectionJobsOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/ListTopicsDetectionJobsOperationRequest.cs` |
| `XAmzTarget73` | `src/AmazonComprehend/Models/Enums/XAmzTarget73.cs` |
| `ListTopicsDetectionJobsError` | `src/AmazonComprehend/Errors/ListTopicsDetectionJobsError.cs` |

### PutResourcePolicy

- **Auth**: `options.Sigv4`
- **Signature**: `PutResourcePolicy(PutResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PutResourcePolicyError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutResourcePolicyOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/PutResourcePolicyOperationRequest.cs` |
| `XAmzTarget38` | `src/AmazonComprehend/Models/Enums/XAmzTarget38.cs` |
| `PutResourcePolicyError` | `src/AmazonComprehend/Errors/PutResourcePolicyError.cs` |

### StartDocumentClassificationJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartDocumentClassificationJob(StartDocumentClassificationJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartDocumentClassificationJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartDocumentClassificationJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartDocumentClassificationJobOperationRequest.cs` |
| `XAmzTarget41` | `src/AmazonComprehend/Models/Enums/XAmzTarget41.cs` |
| `StartDocumentClassificationJobError` | `src/AmazonComprehend/Errors/StartDocumentClassificationJobError.cs` |

### StartDominantLanguageDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartDominantLanguageDetectionJob(StartDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartDominantLanguageDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartDominantLanguageDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartDominantLanguageDetectionJobOperationRequest.cs` |
| `XAmzTarget44` | `src/AmazonComprehend/Models/Enums/XAmzTarget44.cs` |
| `StartDominantLanguageDetectionJobError` | `src/AmazonComprehend/Errors/StartDominantLanguageDetectionJobError.cs` |

### StartEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartEntitiesDetectionJob(StartEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget48` | `src/AmazonComprehend/Models/Enums/XAmzTarget48.cs` |
| `StartEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/StartEntitiesDetectionJobError.cs` |

### StartEventsDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartEventsDetectionJob(StartEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartEventsDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartEventsDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartEventsDetectionJobOperationRequest.cs` |
| `XAmzTarget52` | `src/AmazonComprehend/Models/Enums/XAmzTarget52.cs` |
| `StartEventsDetectionJobError` | `src/AmazonComprehend/Errors/StartEventsDetectionJobError.cs` |

### StartFlywheelIteration

- **Auth**: `options.Sigv4`
- **Signature**: `StartFlywheelIteration(StartFlywheelIterationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartFlywheelIterationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartFlywheelIterationOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartFlywheelIterationOperationRequest.cs` |
| `XAmzTarget55` | `src/AmazonComprehend/Models/Enums/XAmzTarget55.cs` |
| `StartFlywheelIterationError` | `src/AmazonComprehend/Errors/StartFlywheelIterationError.cs` |

### StartKeyPhrasesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartKeyPhrasesDetectionJob(StartKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartKeyPhrasesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartKeyPhrasesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartKeyPhrasesDetectionJobOperationRequest.cs` |
| `XAmzTarget58` | `src/AmazonComprehend/Models/Enums/XAmzTarget58.cs` |
| `StartKeyPhrasesDetectionJobError` | `src/AmazonComprehend/Errors/StartKeyPhrasesDetectionJobError.cs` |

### StartPiiEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartPiiEntitiesDetectionJob(StartPiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartPiiEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartPiiEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartPiiEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget62` | `src/AmazonComprehend/Models/Enums/XAmzTarget62.cs` |
| `StartPiiEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/StartPiiEntitiesDetectionJobError.cs` |

### StartSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartSentimentDetectionJob(StartSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget66` | `src/AmazonComprehend/Models/Enums/XAmzTarget66.cs` |
| `StartSentimentDetectionJobError` | `src/AmazonComprehend/Errors/StartSentimentDetectionJobError.cs` |

### StartTargetedSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartTargetedSentimentDetectionJob(StartTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartTargetedSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTargetedSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartTargetedSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget70` | `src/AmazonComprehend/Models/Enums/XAmzTarget70.cs` |
| `StartTargetedSentimentDetectionJobError` | `src/AmazonComprehend/Errors/StartTargetedSentimentDetectionJobError.cs` |

### StartTopicsDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StartTopicsDetectionJob(StartTopicsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StartTopicsDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StartTopicsDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StartTopicsDetectionJobOperationRequest.cs` |
| `XAmzTarget74` | `src/AmazonComprehend/Models/Enums/XAmzTarget74.cs` |
| `StartTopicsDetectionJobError` | `src/AmazonComprehend/Errors/StartTopicsDetectionJobError.cs` |

### StopDominantLanguageDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopDominantLanguageDetectionJob(StopDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopDominantLanguageDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopDominantLanguageDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopDominantLanguageDetectionJobOperationRequest.cs` |
| `XAmzTarget45` | `src/AmazonComprehend/Models/Enums/XAmzTarget45.cs` |
| `StopDominantLanguageDetectionJobError` | `src/AmazonComprehend/Errors/StopDominantLanguageDetectionJobError.cs` |

### StopEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopEntitiesDetectionJob(StopEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget49` | `src/AmazonComprehend/Models/Enums/XAmzTarget49.cs` |
| `StopEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/StopEntitiesDetectionJobError.cs` |

### StopEventsDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopEventsDetectionJob(StopEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopEventsDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopEventsDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopEventsDetectionJobOperationRequest.cs` |
| `XAmzTarget53` | `src/AmazonComprehend/Models/Enums/XAmzTarget53.cs` |
| `StopEventsDetectionJobError` | `src/AmazonComprehend/Errors/StopEventsDetectionJobError.cs` |

### StopKeyPhrasesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopKeyPhrasesDetectionJob(StopKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopKeyPhrasesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopKeyPhrasesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopKeyPhrasesDetectionJobOperationRequest.cs` |
| `XAmzTarget59` | `src/AmazonComprehend/Models/Enums/XAmzTarget59.cs` |
| `StopKeyPhrasesDetectionJobError` | `src/AmazonComprehend/Errors/StopKeyPhrasesDetectionJobError.cs` |

### StopPiiEntitiesDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopPiiEntitiesDetectionJob(StopPiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopPiiEntitiesDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopPiiEntitiesDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopPiiEntitiesDetectionJobOperationRequest.cs` |
| `XAmzTarget63` | `src/AmazonComprehend/Models/Enums/XAmzTarget63.cs` |
| `StopPiiEntitiesDetectionJobError` | `src/AmazonComprehend/Errors/StopPiiEntitiesDetectionJobError.cs` |

### StopSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopSentimentDetectionJob(StopSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget67` | `src/AmazonComprehend/Models/Enums/XAmzTarget67.cs` |
| `StopSentimentDetectionJobError` | `src/AmazonComprehend/Errors/StopSentimentDetectionJobError.cs` |

### StopTargetedSentimentDetectionJob

- **Auth**: `options.Sigv4`
- **Signature**: `StopTargetedSentimentDetectionJob(StopTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopTargetedSentimentDetectionJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopTargetedSentimentDetectionJobOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopTargetedSentimentDetectionJobOperationRequest.cs` |
| `XAmzTarget71` | `src/AmazonComprehend/Models/Enums/XAmzTarget71.cs` |
| `StopTargetedSentimentDetectionJobError` | `src/AmazonComprehend/Errors/StopTargetedSentimentDetectionJobError.cs` |

### StopTrainingDocumentClassifier

- **Auth**: `options.Sigv4`
- **Signature**: `StopTrainingDocumentClassifier(StopTrainingDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopTrainingDocumentClassifierError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopTrainingDocumentClassifierOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopTrainingDocumentClassifierOperationRequest.cs` |
| `XAmzTarget80` | `src/AmazonComprehend/Models/Enums/XAmzTarget80.cs` |
| `StopTrainingDocumentClassifierError` | `src/AmazonComprehend/Errors/StopTrainingDocumentClassifierError.cs` |

### StopTrainingEntityRecognizer

- **Auth**: `options.Sigv4`
- **Signature**: `StopTrainingEntityRecognizer(StopTrainingEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<StopTrainingEntityRecognizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StopTrainingEntityRecognizerOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/StopTrainingEntityRecognizerOperationRequest.cs` |
| `XAmzTarget81` | `src/AmazonComprehend/Models/Enums/XAmzTarget81.cs` |
| `StopTrainingEntityRecognizerError` | `src/AmazonComprehend/Errors/StopTrainingEntityRecognizerError.cs` |

### TagResource

- **Auth**: `options.Sigv4`
- **Signature**: `TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/TagResourceOperationRequest.cs` |
| `XAmzTarget82` | `src/AmazonComprehend/Models/Enums/XAmzTarget82.cs` |
| `TagResourceError` | `src/AmazonComprehend/Errors/TagResourceError.cs` |

### UntagResource

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/UntagResourceOperationRequest.cs` |
| `XAmzTarget83` | `src/AmazonComprehend/Models/Enums/XAmzTarget83.cs` |
| `UntagResourceError` | `src/AmazonComprehend/Errors/UntagResourceError.cs` |

### UpdateEndpoint

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateEndpoint(UpdateEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateEndpointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEndpointOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/UpdateEndpointOperationRequest.cs` |
| `XAmzTarget26` | `src/AmazonComprehend/Models/Enums/XAmzTarget26.cs` |
| `UpdateEndpointError` | `src/AmazonComprehend/Errors/UpdateEndpointError.cs` |

### UpdateFlywheel

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateFlywheel(UpdateFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<UpdateFlywheelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateFlywheelOperationRequest` | `src/AmazonComprehend/Requests/AmazonComprehendApi/UpdateFlywheelOperationRequest.cs` |
| `XAmzTarget35` | `src/AmazonComprehend/Models/Enums/XAmzTarget35.cs` |
| `UpdateFlywheelError` | `src/AmazonComprehend/Errors/UpdateFlywheelError.cs` |

