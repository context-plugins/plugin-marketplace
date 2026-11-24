<!-- Generated file — do not edit; regenerated with the SDK. -->

# AmazonComprehend — operations

Accessor: `client.amazon_comprehend` · Source: `amazon_comprehend/apis/amazon_comprehend.py` · 84 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.amazon_comprehend.batch_detect_dominant_language

- **Route**: `POST /#BatchDetectDominantLanguage`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_dominant_language(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectDominantLanguageErrorBody]`
- **Error**: `BatchDetectDominantLanguageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetOrStr` | `amazon_comprehend/models/enums/x_amz_target.py` |
| `BatchDetectDominantLanguageErrorBody` | `amazon_comprehend/errors/batch_detect_dominant_language_error.py` |

### client.amazon_comprehend.batch_detect_entities

- **Route**: `POST /#BatchDetectEntities`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_entities(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectEntitiesErrorBody]`
- **Error**: `BatchDetectEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1OrStr` | `amazon_comprehend/models/enums/x_amz_target1.py` |
| `BatchDetectEntitiesErrorBody` | `amazon_comprehend/errors/batch_detect_entities_error.py` |

### client.amazon_comprehend.batch_detect_key_phrases

- **Route**: `POST /#BatchDetectKeyPhrases`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_key_phrases(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectKeyPhrasesErrorBody]`
- **Error**: `BatchDetectKeyPhrasesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2OrStr` | `amazon_comprehend/models/enums/x_amz_target2.py` |
| `BatchDetectKeyPhrasesErrorBody` | `amazon_comprehend/errors/batch_detect_key_phrases_error.py` |

### client.amazon_comprehend.batch_detect_sentiment

- **Route**: `POST /#BatchDetectSentiment`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_sentiment(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectSentimentErrorBody]`
- **Error**: `BatchDetectSentimentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `amazon_comprehend/models/enums/x_amz_target3.py` |
| `BatchDetectSentimentErrorBody` | `amazon_comprehend/errors/batch_detect_sentiment_error.py` |

### client.amazon_comprehend.batch_detect_syntax

- **Route**: `POST /#BatchDetectSyntax`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_syntax(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectSyntaxErrorBody]`
- **Error**: `BatchDetectSyntaxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `amazon_comprehend/models/enums/x_amz_target4.py` |
| `BatchDetectSyntaxErrorBody` | `amazon_comprehend/errors/batch_detect_syntax_error.py` |

### client.amazon_comprehend.batch_detect_targeted_sentiment

- **Route**: `POST /#BatchDetectTargetedSentiment`
- **Auth**: `sigv4`
- **Signature**: `def batch_detect_targeted_sentiment(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDetectTargetedSentimentErrorBody]`
- **Error**: `BatchDetectTargetedSentimentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_comprehend/models/enums/x_amz_target5.py` |
| `BatchDetectTargetedSentimentErrorBody` | `amazon_comprehend/errors/batch_detect_targeted_sentiment_error.py` |

### client.amazon_comprehend.classify_document

- **Route**: `POST /#ClassifyDocument`
- **Auth**: `sigv4`
- **Signature**: `def classify_document(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ClassifyDocumentErrorBody]`
- **Error**: `ClassifyDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_comprehend/models/enums/x_amz_target6.py` |
| `ClassifyDocumentErrorBody` | `amazon_comprehend/errors/classify_document_error.py` |

### client.amazon_comprehend.contains_pii_entities

- **Route**: `POST /#ContainsPiiEntities`
- **Auth**: `sigv4`
- **Signature**: `def contains_pii_entities(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ContainsPiiEntitiesErrorBody]`
- **Error**: `ContainsPiiEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `amazon_comprehend/models/enums/x_amz_target7.py` |
| `ContainsPiiEntitiesErrorBody` | `amazon_comprehend/errors/contains_pii_entities_error.py` |

### client.amazon_comprehend.create_dataset

- **Route**: `POST /#CreateDataset`
- **Auth**: `sigv4`
- **Signature**: `def create_dataset(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDatasetErrorBody]`
- **Error**: `CreateDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `amazon_comprehend/models/enums/x_amz_target15.py` |
| `CreateDatasetErrorBody` | `amazon_comprehend/errors/create_dataset_error.py` |

### client.amazon_comprehend.create_document_classifier

- **Route**: `POST /#CreateDocumentClassifier`
- **Auth**: `sigv4`
- **Signature**: `def create_document_classifier(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDocumentClassifierErrorBody]`
- **Error**: `CreateDocumentClassifierErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `amazon_comprehend/models/enums/x_amz_target18.py` |
| `CreateDocumentClassifierErrorBody` | `amazon_comprehend/errors/create_document_classifier_error.py` |

### client.amazon_comprehend.create_endpoint

- **Route**: `POST /#CreateEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def create_endpoint(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateEndpointErrorBody]`
- **Error**: `CreateEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `amazon_comprehend/models/enums/x_amz_target22.py` |
| `CreateEndpointErrorBody` | `amazon_comprehend/errors/create_endpoint_error.py` |

### client.amazon_comprehend.create_entity_recognizer

- **Route**: `POST /#CreateEntityRecognizer`
- **Auth**: `sigv4`
- **Signature**: `def create_entity_recognizer(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateEntityRecognizerErrorBody]`
- **Error**: `CreateEntityRecognizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget27OrStr` | `amazon_comprehend/models/enums/x_amz_target27.py` |
| `CreateEntityRecognizerErrorBody` | `amazon_comprehend/errors/create_entity_recognizer_error.py` |

### client.amazon_comprehend.create_flywheel

- **Route**: `POST /#CreateFlywheel`
- **Auth**: `sigv4`
- **Signature**: `def create_flywheel(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateFlywheelErrorBody]`
- **Error**: `CreateFlywheelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget31OrStr` | `amazon_comprehend/models/enums/x_amz_target31.py` |
| `CreateFlywheelErrorBody` | `amazon_comprehend/errors/create_flywheel_error.py` |

### client.amazon_comprehend.delete_document_classifier

- **Route**: `POST /#DeleteDocumentClassifier`
- **Auth**: `sigv4`
- **Signature**: `def delete_document_classifier(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDocumentClassifierErrorBody]`
- **Error**: `DeleteDocumentClassifierErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `amazon_comprehend/models/enums/x_amz_target19.py` |
| `DeleteDocumentClassifierErrorBody` | `amazon_comprehend/errors/delete_document_classifier_error.py` |

### client.amazon_comprehend.delete_endpoint

- **Route**: `POST /#DeleteEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def delete_endpoint(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEndpointErrorBody]`
- **Error**: `DeleteEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `amazon_comprehend/models/enums/x_amz_target23.py` |
| `DeleteEndpointErrorBody` | `amazon_comprehend/errors/delete_endpoint_error.py` |

### client.amazon_comprehend.delete_entity_recognizer

- **Route**: `POST /#DeleteEntityRecognizer`
- **Auth**: `sigv4`
- **Signature**: `def delete_entity_recognizer(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEntityRecognizerErrorBody]`
- **Error**: `DeleteEntityRecognizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget28OrStr` | `amazon_comprehend/models/enums/x_amz_target28.py` |
| `DeleteEntityRecognizerErrorBody` | `amazon_comprehend/errors/delete_entity_recognizer_error.py` |

### client.amazon_comprehend.delete_flywheel

- **Route**: `POST /#DeleteFlywheel`
- **Auth**: `sigv4`
- **Signature**: `def delete_flywheel(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteFlywheelErrorBody]`
- **Error**: `DeleteFlywheelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget32OrStr` | `amazon_comprehend/models/enums/x_amz_target32.py` |
| `DeleteFlywheelErrorBody` | `amazon_comprehend/errors/delete_flywheel_error.py` |

### client.amazon_comprehend.delete_resource_policy

- **Route**: `POST /#DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def delete_resource_policy(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteResourcePolicyErrorBody]`
- **Error**: `DeleteResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget36OrStr` | `amazon_comprehend/models/enums/x_amz_target36.py` |
| `DeleteResourcePolicyErrorBody` | `amazon_comprehend/errors/delete_resource_policy_error.py` |

### client.amazon_comprehend.describe_dataset

- **Route**: `POST /#DescribeDataset`
- **Auth**: `sigv4`
- **Signature**: `def describe_dataset(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDatasetErrorBody]`
- **Error**: `DescribeDatasetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `amazon_comprehend/models/enums/x_amz_target16.py` |
| `DescribeDatasetErrorBody` | `amazon_comprehend/errors/describe_dataset_error.py` |

### client.amazon_comprehend.describe_document_classification_job

- **Route**: `POST /#DescribeDocumentClassificationJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_document_classification_job(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDocumentClassificationJobErrorBody]`
- **Error**: `DescribeDocumentClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget39OrStr` | `amazon_comprehend/models/enums/x_amz_target39.py` |
| `DescribeDocumentClassificationJobErrorBody` | `amazon_comprehend/errors/describe_document_classification_job_error.py` |

### client.amazon_comprehend.describe_document_classifier

- **Route**: `POST /#DescribeDocumentClassifier`
- **Auth**: `sigv4`
- **Signature**: `def describe_document_classifier(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDocumentClassifierErrorBody]`
- **Error**: `DescribeDocumentClassifierErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `amazon_comprehend/models/enums/x_amz_target20.py` |
| `DescribeDocumentClassifierErrorBody` | `amazon_comprehend/errors/describe_document_classifier_error.py` |

### client.amazon_comprehend.describe_dominant_language_detection_job

- **Route**: `POST /#DescribeDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_dominant_language_detection_job(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDominantLanguageDetectionJobErrorBody]`
- **Error**: `DescribeDominantLanguageDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget42OrStr` | `amazon_comprehend/models/enums/x_amz_target42.py` |
| `DescribeDominantLanguageDetectionJobErrorBody` | `amazon_comprehend/errors/describe_dominant_language_detection_job_error.py` |

### client.amazon_comprehend.describe_endpoint

- **Route**: `POST /#DescribeEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def describe_endpoint(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeEndpointErrorBody]`
- **Error**: `DescribeEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `amazon_comprehend/models/enums/x_amz_target24.py` |
| `DescribeEndpointErrorBody` | `amazon_comprehend/errors/describe_endpoint_error.py` |

### client.amazon_comprehend.describe_entities_detection_job

- **Route**: `POST /#DescribeEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_entities_detection_job(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeEntitiesDetectionJobErrorBody]`
- **Error**: `DescribeEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget46OrStr` | `amazon_comprehend/models/enums/x_amz_target46.py` |
| `DescribeEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/describe_entities_detection_job_error.py` |

### client.amazon_comprehend.describe_entity_recognizer

- **Route**: `POST /#DescribeEntityRecognizer`
- **Auth**: `sigv4`
- **Signature**: `def describe_entity_recognizer(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeEntityRecognizerErrorBody]`
- **Error**: `DescribeEntityRecognizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget29OrStr` | `amazon_comprehend/models/enums/x_amz_target29.py` |
| `DescribeEntityRecognizerErrorBody` | `amazon_comprehend/errors/describe_entity_recognizer_error.py` |

### client.amazon_comprehend.describe_events_detection_job

- **Route**: `POST /#DescribeEventsDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_events_detection_job(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeEventsDetectionJobErrorBody]`
- **Error**: `DescribeEventsDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget50OrStr` | `amazon_comprehend/models/enums/x_amz_target50.py` |
| `DescribeEventsDetectionJobErrorBody` | `amazon_comprehend/errors/describe_events_detection_job_error.py` |

### client.amazon_comprehend.describe_flywheel

- **Route**: `POST /#DescribeFlywheel`
- **Auth**: `sigv4`
- **Signature**: `def describe_flywheel(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeFlywheelErrorBody]`
- **Error**: `DescribeFlywheelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget33OrStr` | `amazon_comprehend/models/enums/x_amz_target33.py` |
| `DescribeFlywheelErrorBody` | `amazon_comprehend/errors/describe_flywheel_error.py` |

### client.amazon_comprehend.describe_flywheel_iteration

- **Route**: `POST /#DescribeFlywheelIteration`
- **Auth**: `sigv4`
- **Signature**: `def describe_flywheel_iteration(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeFlywheelIterationErrorBody]`
- **Error**: `DescribeFlywheelIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget54OrStr` | `amazon_comprehend/models/enums/x_amz_target54.py` |
| `DescribeFlywheelIterationErrorBody` | `amazon_comprehend/errors/describe_flywheel_iteration_error.py` |

### client.amazon_comprehend.describe_key_phrases_detection_job

- **Route**: `POST /#DescribeKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_key_phrases_detection_job(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeKeyPhrasesDetectionJobErrorBody]`
- **Error**: `DescribeKeyPhrasesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget56OrStr` | `amazon_comprehend/models/enums/x_amz_target56.py` |
| `DescribeKeyPhrasesDetectionJobErrorBody` | `amazon_comprehend/errors/describe_key_phrases_detection_job_error.py` |

### client.amazon_comprehend.describe_pii_entities_detection_job

- **Route**: `POST /#DescribePiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_pii_entities_detection_job(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribePiiEntitiesDetectionJobErrorBody]`
- **Error**: `DescribePiiEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget60OrStr` | `amazon_comprehend/models/enums/x_amz_target60.py` |
| `DescribePiiEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/describe_pii_entities_detection_job_error.py` |

### client.amazon_comprehend.describe_resource_policy

- **Route**: `POST /#DescribeResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def describe_resource_policy(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeResourcePolicyErrorBody]`
- **Error**: `DescribeResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget37OrStr` | `amazon_comprehend/models/enums/x_amz_target37.py` |
| `DescribeResourcePolicyErrorBody` | `amazon_comprehend/errors/describe_resource_policy_error.py` |

### client.amazon_comprehend.describe_sentiment_detection_job

- **Route**: `POST /#DescribeSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_sentiment_detection_job(x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeSentimentDetectionJobErrorBody]`
- **Error**: `DescribeSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget64OrStr` | `amazon_comprehend/models/enums/x_amz_target64.py` |
| `DescribeSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/describe_sentiment_detection_job_error.py` |

### client.amazon_comprehend.describe_targeted_sentiment_detection_job

- **Route**: `POST /#DescribeTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_targeted_sentiment_detection_job(x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTargetedSentimentDetectionJobErrorBody]`
- **Error**: `DescribeTargetedSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget68OrStr` | `amazon_comprehend/models/enums/x_amz_target68.py` |
| `DescribeTargetedSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/describe_targeted_sentiment_detection_job_error.py` |

### client.amazon_comprehend.describe_topics_detection_job

- **Route**: `POST /#DescribeTopicsDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_topics_detection_job(x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTopicsDetectionJobErrorBody]`
- **Error**: `DescribeTopicsDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget72OrStr` | `amazon_comprehend/models/enums/x_amz_target72.py` |
| `DescribeTopicsDetectionJobErrorBody` | `amazon_comprehend/errors/describe_topics_detection_job_error.py` |

### client.amazon_comprehend.detect_dominant_language

- **Route**: `POST /#DetectDominantLanguage`
- **Auth**: `sigv4`
- **Signature**: `def detect_dominant_language(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectDominantLanguageErrorBody]`
- **Error**: `DetectDominantLanguageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `amazon_comprehend/models/enums/x_amz_target8.py` |
| `DetectDominantLanguageErrorBody` | `amazon_comprehend/errors/detect_dominant_language_error.py` |

### client.amazon_comprehend.detect_entities

- **Route**: `POST /#DetectEntities`
- **Auth**: `sigv4`
- **Signature**: `def detect_entities(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectEntitiesErrorBody]`
- **Error**: `DetectEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `amazon_comprehend/models/enums/x_amz_target9.py` |
| `DetectEntitiesErrorBody` | `amazon_comprehend/errors/detect_entities_error.py` |

### client.amazon_comprehend.detect_key_phrases

- **Route**: `POST /#DetectKeyPhrases`
- **Auth**: `sigv4`
- **Signature**: `def detect_key_phrases(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectKeyPhrasesErrorBody]`
- **Error**: `DetectKeyPhrasesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `amazon_comprehend/models/enums/x_amz_target10.py` |
| `DetectKeyPhrasesErrorBody` | `amazon_comprehend/errors/detect_key_phrases_error.py` |

### client.amazon_comprehend.detect_pii_entities

- **Route**: `POST /#DetectPiiEntities`
- **Auth**: `sigv4`
- **Signature**: `def detect_pii_entities(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectPiiEntitiesErrorBody]`
- **Error**: `DetectPiiEntitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `amazon_comprehend/models/enums/x_amz_target11.py` |
| `DetectPiiEntitiesErrorBody` | `amazon_comprehend/errors/detect_pii_entities_error.py` |

### client.amazon_comprehend.detect_sentiment

- **Route**: `POST /#DetectSentiment`
- **Auth**: `sigv4`
- **Signature**: `def detect_sentiment(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectSentimentErrorBody]`
- **Error**: `DetectSentimentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `amazon_comprehend/models/enums/x_amz_target12.py` |
| `DetectSentimentErrorBody` | `amazon_comprehend/errors/detect_sentiment_error.py` |

### client.amazon_comprehend.detect_syntax

- **Route**: `POST /#DetectSyntax`
- **Auth**: `sigv4`
- **Signature**: `def detect_syntax(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectSyntaxErrorBody]`
- **Error**: `DetectSyntaxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `amazon_comprehend/models/enums/x_amz_target13.py` |
| `DetectSyntaxErrorBody` | `amazon_comprehend/errors/detect_syntax_error.py` |

### client.amazon_comprehend.detect_targeted_sentiment

- **Route**: `POST /#DetectTargetedSentiment`
- **Auth**: `sigv4`
- **Signature**: `def detect_targeted_sentiment(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DetectTargetedSentimentErrorBody]`
- **Error**: `DetectTargetedSentimentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `amazon_comprehend/models/enums/x_amz_target14.py` |
| `DetectTargetedSentimentErrorBody` | `amazon_comprehend/errors/detect_targeted_sentiment_error.py` |

### client.amazon_comprehend.import_model

- **Route**: `POST /#ImportModel`
- **Auth**: `sigv4`
- **Signature**: `def import_model(x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ImportModelErrorBody]`
- **Error**: `ImportModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget75OrStr` | `amazon_comprehend/models/enums/x_amz_target75.py` |
| `ImportModelErrorBody` | `amazon_comprehend/errors/import_model_error.py` |

### client.amazon_comprehend.list_datasets

- **Route**: `POST /#ListDatasets`
- **Auth**: `sigv4`
- **Signature**: `def list_datasets(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetsErrorBody]`
- **Error**: `ListDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `amazon_comprehend/models/enums/x_amz_target17.py` |
| `ListDatasetsErrorBody` | `amazon_comprehend/errors/list_datasets_error.py` |

### client.amazon_comprehend.list_document_classification_jobs

- **Route**: `POST /#ListDocumentClassificationJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_document_classification_jobs(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDocumentClassificationJobsErrorBody]`
- **Error**: `ListDocumentClassificationJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget40OrStr` | `amazon_comprehend/models/enums/x_amz_target40.py` |
| `ListDocumentClassificationJobsErrorBody` | `amazon_comprehend/errors/list_document_classification_jobs_error.py` |

### client.amazon_comprehend.list_document_classifier_summaries

- **Route**: `POST /#ListDocumentClassifierSummaries`
- **Auth**: `sigv4`
- **Signature**: `def list_document_classifier_summaries(x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDocumentClassifierSummariesErrorBody]`
- **Error**: `ListDocumentClassifierSummariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget76OrStr` | `amazon_comprehend/models/enums/x_amz_target76.py` |
| `ListDocumentClassifierSummariesErrorBody` | `amazon_comprehend/errors/list_document_classifier_summaries_error.py` |

### client.amazon_comprehend.list_document_classifiers

- **Route**: `POST /#ListDocumentClassifiers`
- **Auth**: `sigv4`
- **Signature**: `def list_document_classifiers(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDocumentClassifiersErrorBody]`
- **Error**: `ListDocumentClassifiersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `amazon_comprehend/models/enums/x_amz_target21.py` |
| `ListDocumentClassifiersErrorBody` | `amazon_comprehend/errors/list_document_classifiers_error.py` |

### client.amazon_comprehend.list_dominant_language_detection_jobs

- **Route**: `POST /#ListDominantLanguageDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_dominant_language_detection_jobs(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDominantLanguageDetectionJobsErrorBody]`
- **Error**: `ListDominantLanguageDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget43OrStr` | `amazon_comprehend/models/enums/x_amz_target43.py` |
| `ListDominantLanguageDetectionJobsErrorBody` | `amazon_comprehend/errors/list_dominant_language_detection_jobs_error.py` |

### client.amazon_comprehend.list_endpoints

- **Route**: `POST /#ListEndpoints`
- **Auth**: `sigv4`
- **Signature**: `def list_endpoints(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListEndpointsErrorBody]`
- **Error**: `ListEndpointsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `amazon_comprehend/models/enums/x_amz_target25.py` |
| `ListEndpointsErrorBody` | `amazon_comprehend/errors/list_endpoints_error.py` |

### client.amazon_comprehend.list_entities_detection_jobs

- **Route**: `POST /#ListEntitiesDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_entities_detection_jobs(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListEntitiesDetectionJobsErrorBody]`
- **Error**: `ListEntitiesDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget47OrStr` | `amazon_comprehend/models/enums/x_amz_target47.py` |
| `ListEntitiesDetectionJobsErrorBody` | `amazon_comprehend/errors/list_entities_detection_jobs_error.py` |

### client.amazon_comprehend.list_entity_recognizer_summaries

- **Route**: `POST /#ListEntityRecognizerSummaries`
- **Auth**: `sigv4`
- **Signature**: `def list_entity_recognizer_summaries(x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListEntityRecognizerSummariesErrorBody]`
- **Error**: `ListEntityRecognizerSummariesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget77OrStr` | `amazon_comprehend/models/enums/x_amz_target77.py` |
| `ListEntityRecognizerSummariesErrorBody` | `amazon_comprehend/errors/list_entity_recognizer_summaries_error.py` |

### client.amazon_comprehend.list_entity_recognizers

- **Route**: `POST /#ListEntityRecognizers`
- **Auth**: `sigv4`
- **Signature**: `def list_entity_recognizers(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListEntityRecognizersErrorBody]`
- **Error**: `ListEntityRecognizersErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget30OrStr` | `amazon_comprehend/models/enums/x_amz_target30.py` |
| `ListEntityRecognizersErrorBody` | `amazon_comprehend/errors/list_entity_recognizers_error.py` |

### client.amazon_comprehend.list_events_detection_jobs

- **Route**: `POST /#ListEventsDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_events_detection_jobs(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListEventsDetectionJobsErrorBody]`
- **Error**: `ListEventsDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget51OrStr` | `amazon_comprehend/models/enums/x_amz_target51.py` |
| `ListEventsDetectionJobsErrorBody` | `amazon_comprehend/errors/list_events_detection_jobs_error.py` |

### client.amazon_comprehend.list_flywheel_iteration_history

- **Route**: `POST /#ListFlywheelIterationHistory`
- **Auth**: `sigv4`
- **Signature**: `def list_flywheel_iteration_history(x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFlywheelIterationHistoryErrorBody]`
- **Error**: `ListFlywheelIterationHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget78OrStr` | `amazon_comprehend/models/enums/x_amz_target78.py` |
| `ListFlywheelIterationHistoryErrorBody` | `amazon_comprehend/errors/list_flywheel_iteration_history_error.py` |

### client.amazon_comprehend.list_flywheels

- **Route**: `POST /#ListFlywheels`
- **Auth**: `sigv4`
- **Signature**: `def list_flywheels(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListFlywheelsErrorBody]`
- **Error**: `ListFlywheelsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget34OrStr` | `amazon_comprehend/models/enums/x_amz_target34.py` |
| `ListFlywheelsErrorBody` | `amazon_comprehend/errors/list_flywheels_error.py` |

### client.amazon_comprehend.list_key_phrases_detection_jobs

- **Route**: `POST /#ListKeyPhrasesDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_key_phrases_detection_jobs(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListKeyPhrasesDetectionJobsErrorBody]`
- **Error**: `ListKeyPhrasesDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget57OrStr` | `amazon_comprehend/models/enums/x_amz_target57.py` |
| `ListKeyPhrasesDetectionJobsErrorBody` | `amazon_comprehend/errors/list_key_phrases_detection_jobs_error.py` |

### client.amazon_comprehend.list_pii_entities_detection_jobs

- **Route**: `POST /#ListPiiEntitiesDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_pii_entities_detection_jobs(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListPiiEntitiesDetectionJobsErrorBody]`
- **Error**: `ListPiiEntitiesDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget61OrStr` | `amazon_comprehend/models/enums/x_amz_target61.py` |
| `ListPiiEntitiesDetectionJobsErrorBody` | `amazon_comprehend/errors/list_pii_entities_detection_jobs_error.py` |

### client.amazon_comprehend.list_sentiment_detection_jobs

- **Route**: `POST /#ListSentimentDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_sentiment_detection_jobs(x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSentimentDetectionJobsErrorBody]`
- **Error**: `ListSentimentDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget65OrStr` | `amazon_comprehend/models/enums/x_amz_target65.py` |
| `ListSentimentDetectionJobsErrorBody` | `amazon_comprehend/errors/list_sentiment_detection_jobs_error.py` |

### client.amazon_comprehend.list_tags_for_resource

- **Route**: `POST /#ListTagsForResource`
- **Auth**: `sigv4`
- **Signature**: `def list_tags_for_resource(x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTagsForResourceErrorBody]`
- **Error**: `ListTagsForResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget79OrStr` | `amazon_comprehend/models/enums/x_amz_target79.py` |
| `ListTagsForResourceErrorBody` | `amazon_comprehend/errors/list_tags_for_resource_error.py` |

### client.amazon_comprehend.list_targeted_sentiment_detection_jobs

- **Route**: `POST /#ListTargetedSentimentDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_targeted_sentiment_detection_jobs(x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTargetedSentimentDetectionJobsErrorBody]`
- **Error**: `ListTargetedSentimentDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget69OrStr` | `amazon_comprehend/models/enums/x_amz_target69.py` |
| `ListTargetedSentimentDetectionJobsErrorBody` | `amazon_comprehend/errors/list_targeted_sentiment_detection_jobs_error.py` |

### client.amazon_comprehend.list_topics_detection_jobs

- **Route**: `POST /#ListTopicsDetectionJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_topics_detection_jobs(x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTopicsDetectionJobsErrorBody]`
- **Error**: `ListTopicsDetectionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget73OrStr` | `amazon_comprehend/models/enums/x_amz_target73.py` |
| `ListTopicsDetectionJobsErrorBody` | `amazon_comprehend/errors/list_topics_detection_jobs_error.py` |

### client.amazon_comprehend.put_resource_policy

- **Route**: `POST /#PutResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def put_resource_policy(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutResourcePolicyErrorBody]`
- **Error**: `PutResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget38OrStr` | `amazon_comprehend/models/enums/x_amz_target38.py` |
| `PutResourcePolicyErrorBody` | `amazon_comprehend/errors/put_resource_policy_error.py` |

### client.amazon_comprehend.start_document_classification_job

- **Route**: `POST /#StartDocumentClassificationJob`
- **Auth**: `sigv4`
- **Signature**: `def start_document_classification_job(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartDocumentClassificationJobErrorBody]`
- **Error**: `StartDocumentClassificationJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget41OrStr` | `amazon_comprehend/models/enums/x_amz_target41.py` |
| `StartDocumentClassificationJobErrorBody` | `amazon_comprehend/errors/start_document_classification_job_error.py` |

### client.amazon_comprehend.start_dominant_language_detection_job

- **Route**: `POST /#StartDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_dominant_language_detection_job(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartDominantLanguageDetectionJobErrorBody]`
- **Error**: `StartDominantLanguageDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget44OrStr` | `amazon_comprehend/models/enums/x_amz_target44.py` |
| `StartDominantLanguageDetectionJobErrorBody` | `amazon_comprehend/errors/start_dominant_language_detection_job_error.py` |

### client.amazon_comprehend.start_entities_detection_job

- **Route**: `POST /#StartEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_entities_detection_job(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartEntitiesDetectionJobErrorBody]`
- **Error**: `StartEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget48OrStr` | `amazon_comprehend/models/enums/x_amz_target48.py` |
| `StartEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/start_entities_detection_job_error.py` |

### client.amazon_comprehend.start_events_detection_job

- **Route**: `POST /#StartEventsDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_events_detection_job(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartEventsDetectionJobErrorBody]`
- **Error**: `StartEventsDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget52OrStr` | `amazon_comprehend/models/enums/x_amz_target52.py` |
| `StartEventsDetectionJobErrorBody` | `amazon_comprehend/errors/start_events_detection_job_error.py` |

### client.amazon_comprehend.start_flywheel_iteration

- **Route**: `POST /#StartFlywheelIteration`
- **Auth**: `sigv4`
- **Signature**: `def start_flywheel_iteration(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartFlywheelIterationErrorBody]`
- **Error**: `StartFlywheelIterationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget55OrStr` | `amazon_comprehend/models/enums/x_amz_target55.py` |
| `StartFlywheelIterationErrorBody` | `amazon_comprehend/errors/start_flywheel_iteration_error.py` |

### client.amazon_comprehend.start_key_phrases_detection_job

- **Route**: `POST /#StartKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_key_phrases_detection_job(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartKeyPhrasesDetectionJobErrorBody]`
- **Error**: `StartKeyPhrasesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget58OrStr` | `amazon_comprehend/models/enums/x_amz_target58.py` |
| `StartKeyPhrasesDetectionJobErrorBody` | `amazon_comprehend/errors/start_key_phrases_detection_job_error.py` |

### client.amazon_comprehend.start_pii_entities_detection_job

- **Route**: `POST /#StartPiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_pii_entities_detection_job(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartPiiEntitiesDetectionJobErrorBody]`
- **Error**: `StartPiiEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget62OrStr` | `amazon_comprehend/models/enums/x_amz_target62.py` |
| `StartPiiEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/start_pii_entities_detection_job_error.py` |

### client.amazon_comprehend.start_sentiment_detection_job

- **Route**: `POST /#StartSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_sentiment_detection_job(x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartSentimentDetectionJobErrorBody]`
- **Error**: `StartSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget66OrStr` | `amazon_comprehend/models/enums/x_amz_target66.py` |
| `StartSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/start_sentiment_detection_job_error.py` |

### client.amazon_comprehend.start_targeted_sentiment_detection_job

- **Route**: `POST /#StartTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_targeted_sentiment_detection_job(x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartTargetedSentimentDetectionJobErrorBody]`
- **Error**: `StartTargetedSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget70OrStr` | `amazon_comprehend/models/enums/x_amz_target70.py` |
| `StartTargetedSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/start_targeted_sentiment_detection_job_error.py` |

### client.amazon_comprehend.start_topics_detection_job

- **Route**: `POST /#StartTopicsDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def start_topics_detection_job(x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartTopicsDetectionJobErrorBody]`
- **Error**: `StartTopicsDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget74OrStr` | `amazon_comprehend/models/enums/x_amz_target74.py` |
| `StartTopicsDetectionJobErrorBody` | `amazon_comprehend/errors/start_topics_detection_job_error.py` |

### client.amazon_comprehend.stop_dominant_language_detection_job

- **Route**: `POST /#StopDominantLanguageDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_dominant_language_detection_job(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopDominantLanguageDetectionJobErrorBody]`
- **Error**: `StopDominantLanguageDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget45OrStr` | `amazon_comprehend/models/enums/x_amz_target45.py` |
| `StopDominantLanguageDetectionJobErrorBody` | `amazon_comprehend/errors/stop_dominant_language_detection_job_error.py` |

### client.amazon_comprehend.stop_entities_detection_job

- **Route**: `POST /#StopEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_entities_detection_job(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopEntitiesDetectionJobErrorBody]`
- **Error**: `StopEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget49OrStr` | `amazon_comprehend/models/enums/x_amz_target49.py` |
| `StopEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/stop_entities_detection_job_error.py` |

### client.amazon_comprehend.stop_events_detection_job

- **Route**: `POST /#StopEventsDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_events_detection_job(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopEventsDetectionJobErrorBody]`
- **Error**: `StopEventsDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget53OrStr` | `amazon_comprehend/models/enums/x_amz_target53.py` |
| `StopEventsDetectionJobErrorBody` | `amazon_comprehend/errors/stop_events_detection_job_error.py` |

### client.amazon_comprehend.stop_key_phrases_detection_job

- **Route**: `POST /#StopKeyPhrasesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_key_phrases_detection_job(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopKeyPhrasesDetectionJobErrorBody]`
- **Error**: `StopKeyPhrasesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget59OrStr` | `amazon_comprehend/models/enums/x_amz_target59.py` |
| `StopKeyPhrasesDetectionJobErrorBody` | `amazon_comprehend/errors/stop_key_phrases_detection_job_error.py` |

### client.amazon_comprehend.stop_pii_entities_detection_job

- **Route**: `POST /#StopPiiEntitiesDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_pii_entities_detection_job(x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopPiiEntitiesDetectionJobErrorBody]`
- **Error**: `StopPiiEntitiesDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget63OrStr` | `amazon_comprehend/models/enums/x_amz_target63.py` |
| `StopPiiEntitiesDetectionJobErrorBody` | `amazon_comprehend/errors/stop_pii_entities_detection_job_error.py` |

### client.amazon_comprehend.stop_sentiment_detection_job

- **Route**: `POST /#StopSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_sentiment_detection_job(x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopSentimentDetectionJobErrorBody]`
- **Error**: `StopSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget67OrStr` | `amazon_comprehend/models/enums/x_amz_target67.py` |
| `StopSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/stop_sentiment_detection_job_error.py` |

### client.amazon_comprehend.stop_targeted_sentiment_detection_job

- **Route**: `POST /#StopTargetedSentimentDetectionJob`
- **Auth**: `sigv4`
- **Signature**: `def stop_targeted_sentiment_detection_job(x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopTargetedSentimentDetectionJobErrorBody]`
- **Error**: `StopTargetedSentimentDetectionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget71OrStr` | `amazon_comprehend/models/enums/x_amz_target71.py` |
| `StopTargetedSentimentDetectionJobErrorBody` | `amazon_comprehend/errors/stop_targeted_sentiment_detection_job_error.py` |

### client.amazon_comprehend.stop_training_document_classifier

- **Route**: `POST /#StopTrainingDocumentClassifier`
- **Auth**: `sigv4`
- **Signature**: `def stop_training_document_classifier(x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopTrainingDocumentClassifierErrorBody]`
- **Error**: `StopTrainingDocumentClassifierErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget80OrStr` | `amazon_comprehend/models/enums/x_amz_target80.py` |
| `StopTrainingDocumentClassifierErrorBody` | `amazon_comprehend/errors/stop_training_document_classifier_error.py` |

### client.amazon_comprehend.stop_training_entity_recognizer

- **Route**: `POST /#StopTrainingEntityRecognizer`
- **Auth**: `sigv4`
- **Signature**: `def stop_training_entity_recognizer(x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopTrainingEntityRecognizerErrorBody]`
- **Error**: `StopTrainingEntityRecognizerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget81OrStr` | `amazon_comprehend/models/enums/x_amz_target81.py` |
| `StopTrainingEntityRecognizerErrorBody` | `amazon_comprehend/errors/stop_training_entity_recognizer_error.py` |

### client.amazon_comprehend.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget82OrStr` | `amazon_comprehend/models/enums/x_amz_target82.py` |
| `TagResourceErrorBody` | `amazon_comprehend/errors/tag_resource_error.py` |

### client.amazon_comprehend.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget83OrStr` | `amazon_comprehend/models/enums/x_amz_target83.py` |
| `UntagResourceErrorBody` | `amazon_comprehend/errors/untag_resource_error.py` |

### client.amazon_comprehend.update_endpoint

- **Route**: `POST /#UpdateEndpoint`
- **Auth**: `sigv4`
- **Signature**: `def update_endpoint(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateEndpointErrorBody]`
- **Error**: `UpdateEndpointErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget26OrStr` | `amazon_comprehend/models/enums/x_amz_target26.py` |
| `UpdateEndpointErrorBody` | `amazon_comprehend/errors/update_endpoint_error.py` |

### client.amazon_comprehend.update_flywheel

- **Route**: `POST /#UpdateFlywheel`
- **Auth**: `sigv4`
- **Signature**: `def update_flywheel(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateFlywheelErrorBody]`
- **Error**: `UpdateFlywheelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget35OrStr` | `amazon_comprehend/models/enums/x_amz_target35.py` |
| `UpdateFlywheelErrorBody` | `amazon_comprehend/errors/update_flywheel_error.py` |

