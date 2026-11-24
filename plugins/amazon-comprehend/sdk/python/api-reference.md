# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AmazonComprehendClient](amazon_comprehend/client.py)

## AmazonComprehend

> Source: [AmazonComprehend](amazon_comprehend/apis/amazon_comprehend.py)

<details>
<summary><code>def batch_detect_dominant_language(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_dominant_language(
        XAmzTarget.COMPREHEND_20171127_BATCH_DETECT_DOMINANT_LANGUAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectDominantLanguageErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_dominant_language(
        XAmzTarget.COMPREHEND_20171127_BATCH_DETECT_DOMINANT_LANGUAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectDominantLanguageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](amazon_comprehend/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectDominantLanguageErrorBody](amazon_comprehend/errors/batch_detect_dominant_language_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_detect_entities(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see Entities in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_entities(XAmzTarget1.COMPREHEND_20171127_BATCH_DETECT_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectEntitiesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_entities(XAmzTarget1.COMPREHEND_20171127_BATCH_DETECT_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](amazon_comprehend/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectEntitiesErrorBody](amazon_comprehend/errors/batch_detect_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_detect_key_phrases(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in a batch of documents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_key_phrases(XAmzTarget2.COMPREHEND_20171127_BATCH_DETECT_KEY_PHRASES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectKeyPhrasesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_key_phrases(
        XAmzTarget2.COMPREHEND_20171127_BATCH_DETECT_KEY_PHRASES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectKeyPhrasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](amazon_comprehend/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectKeyPhrasesErrorBody](amazon_comprehend/errors/batch_detect_key_phrases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_detect_sentiment(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_sentiment(XAmzTarget3.COMPREHEND_20171127_BATCH_DETECT_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectSentimentErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_sentiment(XAmzTarget3.COMPREHEND_20171127_BATCH_DETECT_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectSentimentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](amazon_comprehend/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectSentimentErrorBody](amazon_comprehend/errors/batch_detect_sentiment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_detect_syntax(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_syntax(XAmzTarget4.COMPREHEND_20171127_BATCH_DETECT_SYNTAX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectSyntaxErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_syntax(XAmzTarget4.COMPREHEND_20171127_BATCH_DETECT_SYNTAX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectSyntaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](amazon_comprehend/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectSyntaxErrorBody](amazon_comprehend/errors/batch_detect_syntax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_detect_targeted_sentiment(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.batch_detect_targeted_sentiment(
        XAmzTarget5.COMPREHEND_20171127_BATCH_DETECT_TARGETED_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectTargetedSentimentErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.batch_detect_targeted_sentiment(
        XAmzTarget5.COMPREHEND_20171127_BATCH_DETECT_TARGETED_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDetectTargetedSentimentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](amazon_comprehend/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[BatchDetectTargetedSentimentErrorBody](amazon_comprehend/errors/batch_detect_targeted_sentiment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def classify_document(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.classify_document(XAmzTarget6.COMPREHEND_20171127_CLASSIFY_DOCUMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocumentErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.classify_document(XAmzTarget6.COMPREHEND_20171127_CLASSIFY_DOCUMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocumentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](amazon_comprehend/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ClassifyDocumentErrorBody](amazon_comprehend/errors/classify_document_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contains_pii_entities(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.contains_pii_entities(XAmzTarget7.COMPREHEND_20171127_CONTAINS_PII_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContainsPiiEntitiesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.contains_pii_entities(XAmzTarget7.COMPREHEND_20171127_CONTAINS_PII_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContainsPiiEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](amazon_comprehend/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ContainsPiiEntitiesErrorBody](amazon_comprehend/errors/contains_pii_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_dataset(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.create_dataset(XAmzTarget15.COMPREHEND_20171127_CREATE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.create_dataset(XAmzTarget15.COMPREHEND_20171127_CREATE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](amazon_comprehend/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[CreateDatasetErrorBody](amazon_comprehend/errors/create_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_document_classifier(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.create_document_classifier(XAmzTarget18.COMPREHEND_20171127_CREATE_DOCUMENT_CLASSIFIER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDocumentClassifierErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.create_document_classifier(
        XAmzTarget18.COMPREHEND_20171127_CREATE_DOCUMENT_CLASSIFIER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDocumentClassifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](amazon_comprehend/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[CreateDocumentClassifierErrorBody](amazon_comprehend/errors/create_document_classifier_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_endpoint(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.create_endpoint(XAmzTarget22.COMPREHEND_20171127_CREATE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEndpointErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.create_endpoint(XAmzTarget22.COMPREHEND_20171127_CREATE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](amazon_comprehend/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[CreateEndpointErrorBody](amazon_comprehend/errors/create_endpoint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_entity_recognizer(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.create_entity_recognizer(XAmzTarget27.COMPREHEND_20171127_CREATE_ENTITY_RECOGNIZER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEntityRecognizerErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.create_entity_recognizer(
        XAmzTarget27.COMPREHEND_20171127_CREATE_ENTITY_RECOGNIZER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEntityRecognizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget27OrStr](amazon_comprehend/models/enums/x_amz_target27.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[CreateEntityRecognizerErrorBody](amazon_comprehend/errors/create_entity_recognizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_flywheel(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.create_flywheel(XAmzTarget31.COMPREHEND_20171127_CREATE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFlywheelErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.create_flywheel(XAmzTarget31.COMPREHEND_20171127_CREATE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFlywheelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget31OrStr](amazon_comprehend/models/enums/x_amz_target31.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[CreateFlywheelErrorBody](amazon_comprehend/errors/create_flywheel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_document_classifier(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.delete_document_classifier(XAmzTarget19.COMPREHEND_20171127_DELETE_DOCUMENT_CLASSIFIER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDocumentClassifierErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.delete_document_classifier(
        XAmzTarget19.COMPREHEND_20171127_DELETE_DOCUMENT_CLASSIFIER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDocumentClassifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](amazon_comprehend/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DeleteDocumentClassifierErrorBody](amazon_comprehend/errors/delete_document_classifier_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_endpoint(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.delete_endpoint(XAmzTarget23.COMPREHEND_20171127_DELETE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEndpointErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.delete_endpoint(XAmzTarget23.COMPREHEND_20171127_DELETE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](amazon_comprehend/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DeleteEndpointErrorBody](amazon_comprehend/errors/delete_endpoint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_entity_recognizer(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.delete_entity_recognizer(XAmzTarget28.COMPREHEND_20171127_DELETE_ENTITY_RECOGNIZER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEntityRecognizerErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.delete_entity_recognizer(
        XAmzTarget28.COMPREHEND_20171127_DELETE_ENTITY_RECOGNIZER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEntityRecognizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget28OrStr](amazon_comprehend/models/enums/x_amz_target28.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DeleteEntityRecognizerErrorBody](amazon_comprehend/errors/delete_entity_recognizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_flywheel(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.delete_flywheel(XAmzTarget32.COMPREHEND_20171127_DELETE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFlywheelErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.delete_flywheel(XAmzTarget32.COMPREHEND_20171127_DELETE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFlywheelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget32OrStr](amazon_comprehend/models/enums/x_amz_target32.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DeleteFlywheelErrorBody](amazon_comprehend/errors/delete_flywheel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_policy(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource-based policy that is attached to a custom model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.delete_resource_policy(XAmzTarget36.COMPREHEND_20171127_DELETE_RESOURCE_POLICY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.delete_resource_policy(XAmzTarget36.COMPREHEND_20171127_DELETE_RESOURCE_POLICY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget36OrStr](amazon_comprehend/models/enums/x_amz_target36.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DeleteResourcePolicyErrorBody](amazon_comprehend/errors/delete_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dataset(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the dataset that you specify. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_dataset(XAmzTarget16.COMPREHEND_20171127_DESCRIBE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_dataset(XAmzTarget16.COMPREHEND_20171127_DESCRIBE_DATASET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDatasetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](amazon_comprehend/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeDatasetErrorBody](amazon_comprehend/errors/describe_dataset_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_document_classification_job(x_amz_target: XAmzTarget39OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_document_classification_job(
        XAmzTarget39.COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDocumentClassificationJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_document_classification_job(
        XAmzTarget39.COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFICATION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDocumentClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget39OrStr](amazon_comprehend/models/enums/x_amz_target39.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeDocumentClassificationJobErrorBody](amazon_comprehend/errors/describe_document_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_document_classifier(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a document classifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_document_classifier(XAmzTarget20.COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFIER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDocumentClassifierErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_document_classifier(
        XAmzTarget20.COMPREHEND_20171127_DESCRIBE_DOCUMENT_CLASSIFIER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDocumentClassifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](amazon_comprehend/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeDocumentClassifierErrorBody](amazon_comprehend/errors/describe_document_classifier_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_dominant_language_detection_job(x_amz_target: XAmzTarget42OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_dominant_language_detection_job(
        XAmzTarget42.COMPREHEND_20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDominantLanguageDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_dominant_language_detection_job(
        XAmzTarget42.COMPREHEND_20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeDominantLanguageDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget42OrStr](amazon_comprehend/models/enums/x_amz_target42.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeDominantLanguageDetectionJobErrorBody](amazon_comprehend/errors/describe_dominant_language_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_endpoint(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_endpoint(XAmzTarget24.COMPREHEND_20171127_DESCRIBE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEndpointErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_endpoint(XAmzTarget24.COMPREHEND_20171127_DESCRIBE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](amazon_comprehend/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeEndpointErrorBody](amazon_comprehend/errors/describe_endpoint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_entities_detection_job(x_amz_target: XAmzTarget46OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_entities_detection_job(
        XAmzTarget46.COMPREHEND_20171127_DESCRIBE_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_entities_detection_job(
        XAmzTarget46.COMPREHEND_20171127_DESCRIBE_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget46OrStr](amazon_comprehend/models/enums/x_amz_target46.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeEntitiesDetectionJobErrorBody](amazon_comprehend/errors/describe_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_entity_recognizer(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_entity_recognizer(XAmzTarget29.COMPREHEND_20171127_DESCRIBE_ENTITY_RECOGNIZER)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEntityRecognizerErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_entity_recognizer(
        XAmzTarget29.COMPREHEND_20171127_DESCRIBE_ENTITY_RECOGNIZER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEntityRecognizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget29OrStr](amazon_comprehend/models/enums/x_amz_target29.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeEntityRecognizerErrorBody](amazon_comprehend/errors/describe_entity_recognizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_events_detection_job(x_amz_target: XAmzTarget50OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the status and details of an events detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_events_detection_job(
        XAmzTarget50.COMPREHEND_20171127_DESCRIBE_EVENTS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEventsDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_events_detection_job(
        XAmzTarget50.COMPREHEND_20171127_DESCRIBE_EVENTS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeEventsDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget50OrStr](amazon_comprehend/models/enums/x_amz_target50.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeEventsDetectionJobErrorBody](amazon_comprehend/errors/describe_events_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_flywheel(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides configuration information about the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_flywheel(XAmzTarget33.COMPREHEND_20171127_DESCRIBE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFlywheelErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_flywheel(XAmzTarget33.COMPREHEND_20171127_DESCRIBE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFlywheelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget33OrStr](amazon_comprehend/models/enums/x_amz_target33.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeFlywheelErrorBody](amazon_comprehend/errors/describe_flywheel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_flywheel_iteration(x_amz_target: XAmzTarget54OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_flywheel_iteration(XAmzTarget54.COMPREHEND_20171127_DESCRIBE_FLYWHEEL_ITERATION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFlywheelIterationErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_flywheel_iteration(
        XAmzTarget54.COMPREHEND_20171127_DESCRIBE_FLYWHEEL_ITERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeFlywheelIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget54OrStr](amazon_comprehend/models/enums/x_amz_target54.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeFlywheelIterationErrorBody](amazon_comprehend/errors/describe_flywheel_iteration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_key_phrases_detection_job(x_amz_target: XAmzTarget56OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_key_phrases_detection_job(
        XAmzTarget56.COMPREHEND_20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeKeyPhrasesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_key_phrases_detection_job(
        XAmzTarget56.COMPREHEND_20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeKeyPhrasesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget56OrStr](amazon_comprehend/models/enums/x_amz_target56.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeKeyPhrasesDetectionJobErrorBody](amazon_comprehend/errors/describe_key_phrases_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_pii_entities_detection_job(x_amz_target: XAmzTarget60OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_pii_entities_detection_job(
        XAmzTarget60.COMPREHEND_20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePiiEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_pii_entities_detection_job(
        XAmzTarget60.COMPREHEND_20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribePiiEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget60OrStr](amazon_comprehend/models/enums/x_amz_target60.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribePiiEntitiesDetectionJobErrorBody](amazon_comprehend/errors/describe_pii_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_resource_policy(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_resource_policy(XAmzTarget37.COMPREHEND_20171127_DESCRIBE_RESOURCE_POLICY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_resource_policy(
        XAmzTarget37.COMPREHEND_20171127_DESCRIBE_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget37OrStr](amazon_comprehend/models/enums/x_amz_target37.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeResourcePolicyErrorBody](amazon_comprehend/errors/describe_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_sentiment_detection_job(x_amz_target: XAmzTarget64OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_sentiment_detection_job(
        XAmzTarget64.COMPREHEND_20171127_DESCRIBE_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_sentiment_detection_job(
        XAmzTarget64.COMPREHEND_20171127_DESCRIBE_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget64OrStr](amazon_comprehend/models/enums/x_amz_target64.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeSentimentDetectionJobErrorBody](amazon_comprehend/errors/describe_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_targeted_sentiment_detection_job(x_amz_target: XAmzTarget68OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_targeted_sentiment_detection_job(
        XAmzTarget68.COMPREHEND_20171127_DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTargetedSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_targeted_sentiment_detection_job(
        XAmzTarget68.COMPREHEND_20171127_DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTargetedSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget68OrStr](amazon_comprehend/models/enums/x_amz_target68.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeTargetedSentimentDetectionJobErrorBody](amazon_comprehend/errors/describe_targeted_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_topics_detection_job(x_amz_target: XAmzTarget72OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.describe_topics_detection_job(
        XAmzTarget72.COMPREHEND_20171127_DESCRIBE_TOPICS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTopicsDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.describe_topics_detection_job(
        XAmzTarget72.COMPREHEND_20171127_DESCRIBE_TOPICS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTopicsDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget72OrStr](amazon_comprehend/models/enums/x_amz_target72.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DescribeTopicsDetectionJobErrorBody](amazon_comprehend/errors/describe_topics_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_dominant_language(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_dominant_language(XAmzTarget8.COMPREHEND_20171127_DETECT_DOMINANT_LANGUAGE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectDominantLanguageErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_dominant_language(
        XAmzTarget8.COMPREHEND_20171127_DETECT_DOMINANT_LANGUAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectDominantLanguageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](amazon_comprehend/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectDominantLanguageErrorBody](amazon_comprehend/errors/detect_dominant_language_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_entities(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_entities(XAmzTarget9.COMPREHEND_20171127_DETECT_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectEntitiesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_entities(XAmzTarget9.COMPREHEND_20171127_DETECT_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](amazon_comprehend/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectEntitiesErrorBody](amazon_comprehend/errors/detect_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_key_phrases(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in the text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_key_phrases(XAmzTarget10.COMPREHEND_20171127_DETECT_KEY_PHRASES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectKeyPhrasesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_key_phrases(XAmzTarget10.COMPREHEND_20171127_DETECT_KEY_PHRASES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectKeyPhrasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](amazon_comprehend/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectKeyPhrasesErrorBody](amazon_comprehend/errors/detect_key_phrases_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_pii_entities(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_pii_entities(XAmzTarget11.COMPREHEND_20171127_DETECT_PII_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectPiiEntitiesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_pii_entities(XAmzTarget11.COMPREHEND_20171127_DETECT_PII_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectPiiEntitiesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](amazon_comprehend/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectPiiEntitiesErrorBody](amazon_comprehend/errors/detect_pii_entities_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_sentiment(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_sentiment(XAmzTarget12.COMPREHEND_20171127_DETECT_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSentimentErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_sentiment(XAmzTarget12.COMPREHEND_20171127_DETECT_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSentimentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](amazon_comprehend/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectSentimentErrorBody](amazon_comprehend/errors/detect_sentiment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_syntax(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_syntax(XAmzTarget13.COMPREHEND_20171127_DETECT_SYNTAX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSyntaxErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_syntax(XAmzTarget13.COMPREHEND_20171127_DETECT_SYNTAX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSyntaxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](amazon_comprehend/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectSyntaxErrorBody](amazon_comprehend/errors/detect_syntax_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_targeted_sentiment(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.detect_targeted_sentiment(XAmzTarget14.COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTargetedSentimentErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.detect_targeted_sentiment(
        XAmzTarget14.COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTargetedSentimentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](amazon_comprehend/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectTargetedSentimentErrorBody](amazon_comprehend/errors/detect_targeted_sentiment_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_model(x_amz_target: XAmzTarget75OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it. The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.import_model(XAmzTarget75.COMPREHEND_20171127_IMPORT_MODEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportModelErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.import_model(XAmzTarget75.COMPREHEND_20171127_IMPORT_MODEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget75OrStr](amazon_comprehend/models/enums/x_amz_target75.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ImportModelErrorBody](amazon_comprehend/errors/import_model_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_datasets(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the datasets that you have configured in this Region. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_datasets(XAmzTarget17.COMPREHEND_20171127_LIST_DATASETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_datasets(XAmzTarget17.COMPREHEND_20171127_LIST_DATASETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDatasetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](amazon_comprehend/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListDatasetsErrorBody](amazon_comprehend/errors/list_datasets_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_document_classification_jobs(x_amz_target: XAmzTarget40OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the documentation classification jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_document_classification_jobs(
        XAmzTarget40.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFICATION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassificationJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_document_classification_jobs(
        XAmzTarget40.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFICATION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassificationJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget40OrStr](amazon_comprehend/models/enums/x_amz_target40.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListDocumentClassificationJobsErrorBody](amazon_comprehend/errors/list_document_classification_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_document_classifier_summaries(x_amz_target: XAmzTarget76OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of summaries of the document classifiers that you have created

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_document_classifier_summaries(
        XAmzTarget76.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIER_SUMMARIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassifierSummariesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_document_classifier_summaries(
        XAmzTarget76.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIER_SUMMARIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassifierSummariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget76OrStr](amazon_comprehend/models/enums/x_amz_target76.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListDocumentClassifierSummariesErrorBody](amazon_comprehend/errors/list_document_classifier_summaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_document_classifiers(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the document classifiers that you have created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_document_classifiers(XAmzTarget21.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassifiersErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_document_classifiers(
        XAmzTarget21.COMPREHEND_20171127_LIST_DOCUMENT_CLASSIFIERS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDocumentClassifiersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](amazon_comprehend/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListDocumentClassifiersErrorBody](amazon_comprehend/errors/list_document_classifiers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_dominant_language_detection_jobs(x_amz_target: XAmzTarget43OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the dominant language detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_dominant_language_detection_jobs(
        XAmzTarget43.COMPREHEND_20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDominantLanguageDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_dominant_language_detection_jobs(
        XAmzTarget43.COMPREHEND_20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDominantLanguageDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget43OrStr](amazon_comprehend/models/enums/x_amz_target43.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListDominantLanguageDetectionJobsErrorBody](amazon_comprehend/errors/list_dominant_language_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_endpoints(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_endpoints(XAmzTarget25.COMPREHEND_20171127_LIST_ENDPOINTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEndpointsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_endpoints(XAmzTarget25.COMPREHEND_20171127_LIST_ENDPOINTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEndpointsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](amazon_comprehend/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListEndpointsErrorBody](amazon_comprehend/errors/list_endpoints_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_entities_detection_jobs(x_amz_target: XAmzTarget47OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the entity detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_entities_detection_jobs(XAmzTarget47.COMPREHEND_20171127_LIST_ENTITIES_DETECTION_JOBS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntitiesDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_entities_detection_jobs(
        XAmzTarget47.COMPREHEND_20171127_LIST_ENTITIES_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntitiesDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget47OrStr](amazon_comprehend/models/enums/x_amz_target47.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListEntitiesDetectionJobsErrorBody](amazon_comprehend/errors/list_entities_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_entity_recognizer_summaries(x_amz_target: XAmzTarget77OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of summaries for the entity recognizers that you have created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_entity_recognizer_summaries(
        XAmzTarget77.COMPREHEND_20171127_LIST_ENTITY_RECOGNIZER_SUMMARIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecognizerSummariesErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_entity_recognizer_summaries(
        XAmzTarget77.COMPREHEND_20171127_LIST_ENTITY_RECOGNIZER_SUMMARIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecognizerSummariesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget77OrStr](amazon_comprehend/models/enums/x_amz_target77.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListEntityRecognizerSummariesErrorBody](amazon_comprehend/errors/list_entity_recognizer_summaries_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_entity_recognizers(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_entity_recognizers(XAmzTarget30.COMPREHEND_20171127_LIST_ENTITY_RECOGNIZERS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecognizersErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_entity_recognizers(
        XAmzTarget30.COMPREHEND_20171127_LIST_ENTITY_RECOGNIZERS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEntityRecognizersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget30OrStr](amazon_comprehend/models/enums/x_amz_target30.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListEntityRecognizersErrorBody](amazon_comprehend/errors/list_entity_recognizers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_events_detection_jobs(x_amz_target: XAmzTarget51OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the events detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_events_detection_jobs(XAmzTarget51.COMPREHEND_20171127_LIST_EVENTS_DETECTION_JOBS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_events_detection_jobs(
        XAmzTarget51.COMPREHEND_20171127_LIST_EVENTS_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEventsDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget51OrStr](amazon_comprehend/models/enums/x_amz_target51.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListEventsDetectionJobsErrorBody](amazon_comprehend/errors/list_events_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_flywheel_iteration_history(x_amz_target: XAmzTarget78OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_flywheel_iteration_history(
        XAmzTarget78.COMPREHEND_20171127_LIST_FLYWHEEL_ITERATION_HISTORY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFlywheelIterationHistoryErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_flywheel_iteration_history(
        XAmzTarget78.COMPREHEND_20171127_LIST_FLYWHEEL_ITERATION_HISTORY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFlywheelIterationHistoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget78OrStr](amazon_comprehend/models/enums/x_amz_target78.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListFlywheelIterationHistoryErrorBody](amazon_comprehend/errors/list_flywheel_iteration_history_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_flywheels(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the flywheels that you have created.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_flywheels(XAmzTarget34.COMPREHEND_20171127_LIST_FLYWHEELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFlywheelsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_flywheels(XAmzTarget34.COMPREHEND_20171127_LIST_FLYWHEELS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFlywheelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget34OrStr](amazon_comprehend/models/enums/x_amz_target34.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListFlywheelsErrorBody](amazon_comprehend/errors/list_flywheels_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_key_phrases_detection_jobs(x_amz_target: XAmzTarget57OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of key phrase detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_key_phrases_detection_jobs(
        XAmzTarget57.COMPREHEND_20171127_LIST_KEY_PHRASES_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListKeyPhrasesDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_key_phrases_detection_jobs(
        XAmzTarget57.COMPREHEND_20171127_LIST_KEY_PHRASES_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListKeyPhrasesDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget57OrStr](amazon_comprehend/models/enums/x_amz_target57.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListKeyPhrasesDetectionJobsErrorBody](amazon_comprehend/errors/list_key_phrases_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pii_entities_detection_jobs(x_amz_target: XAmzTarget61OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the PII entity detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_pii_entities_detection_jobs(
        XAmzTarget61.COMPREHEND_20171127_LIST_PII_ENTITIES_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPiiEntitiesDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_pii_entities_detection_jobs(
        XAmzTarget61.COMPREHEND_20171127_LIST_PII_ENTITIES_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPiiEntitiesDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget61OrStr](amazon_comprehend/models/enums/x_amz_target61.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListPiiEntitiesDetectionJobsErrorBody](amazon_comprehend/errors/list_pii_entities_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sentiment_detection_jobs(x_amz_target: XAmzTarget65OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sentiment detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_sentiment_detection_jobs(
        XAmzTarget65.COMPREHEND_20171127_LIST_SENTIMENT_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSentimentDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_sentiment_detection_jobs(
        XAmzTarget65.COMPREHEND_20171127_LIST_SENTIMENT_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSentimentDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget65OrStr](amazon_comprehend/models/enums/x_amz_target65.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListSentimentDetectionJobsErrorBody](amazon_comprehend/errors/list_sentiment_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tags_for_resource(x_amz_target: XAmzTarget79OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tags associated with a given Amazon Comprehend resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_tags_for_resource(XAmzTarget79.COMPREHEND_20171127_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_tags_for_resource(XAmzTarget79.COMPREHEND_20171127_LIST_TAGS_FOR_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTagsForResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget79OrStr](amazon_comprehend/models/enums/x_amz_target79.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListTagsForResourceErrorBody](amazon_comprehend/errors/list_tags_for_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_targeted_sentiment_detection_jobs(x_amz_target: XAmzTarget69OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of targeted sentiment detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_targeted_sentiment_detection_jobs(
        XAmzTarget69.COMPREHEND_20171127_LIST_TARGETED_SENTIMENT_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTargetedSentimentDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_targeted_sentiment_detection_jobs(
        XAmzTarget69.COMPREHEND_20171127_LIST_TARGETED_SENTIMENT_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTargetedSentimentDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget69OrStr](amazon_comprehend/models/enums/x_amz_target69.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListTargetedSentimentDetectionJobsErrorBody](amazon_comprehend/errors/list_targeted_sentiment_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_topics_detection_jobs(x_amz_target: XAmzTarget73OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the topic detection jobs that you have submitted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.list_topics_detection_jobs(XAmzTarget73.COMPREHEND_20171127_LIST_TOPICS_DETECTION_JOBS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTopicsDetectionJobsErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.list_topics_detection_jobs(
        XAmzTarget73.COMPREHEND_20171127_LIST_TOPICS_DETECTION_JOBS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTopicsDetectionJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget73OrStr](amazon_comprehend/models/enums/x_amz_target73.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ListTopicsDetectionJobsErrorBody](amazon_comprehend/errors/list_topics_detection_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_resource_policy(x_amz_target: XAmzTarget38OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.put_resource_policy(XAmzTarget38.COMPREHEND_20171127_PUT_RESOURCE_POLICY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.put_resource_policy(XAmzTarget38.COMPREHEND_20171127_PUT_RESOURCE_POLICY)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget38OrStr](amazon_comprehend/models/enums/x_amz_target38.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[PutResourcePolicyErrorBody](amazon_comprehend/errors/put_resource_policy_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_document_classification_job(x_amz_target: XAmzTarget41OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous document classification job using a custom classification model. Use the DescribeDocumentClassificationJob operation to track the progress of the job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_document_classification_job(
        XAmzTarget41.COMPREHEND_20171127_START_DOCUMENT_CLASSIFICATION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartDocumentClassificationJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_document_classification_job(
        XAmzTarget41.COMPREHEND_20171127_START_DOCUMENT_CLASSIFICATION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartDocumentClassificationJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget41OrStr](amazon_comprehend/models/enums/x_amz_target41.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartDocumentClassificationJobErrorBody](amazon_comprehend/errors/start_document_classification_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_dominant_language_detection_job(x_amz_target: XAmzTarget44OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_dominant_language_detection_job(
        XAmzTarget44.COMPREHEND_20171127_START_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartDominantLanguageDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_dominant_language_detection_job(
        XAmzTarget44.COMPREHEND_20171127_START_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartDominantLanguageDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget44OrStr](amazon_comprehend/models/enums/x_amz_target44.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartDominantLanguageDetectionJobErrorBody](amazon_comprehend/errors/start_dominant_language_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_entities_detection_job(x_amz_target: XAmzTarget48OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_entities_detection_job(XAmzTarget48.COMPREHEND_20171127_START_ENTITIES_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_entities_detection_job(
        XAmzTarget48.COMPREHEND_20171127_START_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget48OrStr](amazon_comprehend/models/enums/x_amz_target48.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartEntitiesDetectionJobErrorBody](amazon_comprehend/errors/start_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_events_detection_job(x_amz_target: XAmzTarget52OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous event detection job for a collection of documents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_events_detection_job(XAmzTarget52.COMPREHEND_20171127_START_EVENTS_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartEventsDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_events_detection_job(
        XAmzTarget52.COMPREHEND_20171127_START_EVENTS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartEventsDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget52OrStr](amazon_comprehend/models/enums/x_amz_target52.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartEventsDetectionJobErrorBody](amazon_comprehend/errors/start_events_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_flywheel_iteration(x_amz_target: XAmzTarget55OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_flywheel_iteration(XAmzTarget55.COMPREHEND_20171127_START_FLYWHEEL_ITERATION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFlywheelIterationErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_flywheel_iteration(
        XAmzTarget55.COMPREHEND_20171127_START_FLYWHEEL_ITERATION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartFlywheelIterationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget55OrStr](amazon_comprehend/models/enums/x_amz_target55.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartFlywheelIterationErrorBody](amazon_comprehend/errors/start_flywheel_iteration_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_key_phrases_detection_job(x_amz_target: XAmzTarget58OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_key_phrases_detection_job(
        XAmzTarget58.COMPREHEND_20171127_START_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartKeyPhrasesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_key_phrases_detection_job(
        XAmzTarget58.COMPREHEND_20171127_START_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartKeyPhrasesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget58OrStr](amazon_comprehend/models/enums/x_amz_target58.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartKeyPhrasesDetectionJobErrorBody](amazon_comprehend/errors/start_key_phrases_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_pii_entities_detection_job(x_amz_target: XAmzTarget62OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous PII entity detection job for a collection of documents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_pii_entities_detection_job(
        XAmzTarget62.COMPREHEND_20171127_START_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartPiiEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_pii_entities_detection_job(
        XAmzTarget62.COMPREHEND_20171127_START_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartPiiEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget62OrStr](amazon_comprehend/models/enums/x_amz_target62.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartPiiEntitiesDetectionJobErrorBody](amazon_comprehend/errors/start_pii_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_sentiment_detection_job(x_amz_target: XAmzTarget66OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_sentiment_detection_job(
        XAmzTarget66.COMPREHEND_20171127_START_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_sentiment_detection_job(
        XAmzTarget66.COMPREHEND_20171127_START_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget66OrStr](amazon_comprehend/models/enums/x_amz_target66.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartSentimentDetectionJobErrorBody](amazon_comprehend/errors/start_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_targeted_sentiment_detection_job(x_amz_target: XAmzTarget70OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the DescribeTargetedSentimentDetectionJob operation to track the status of a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_targeted_sentiment_detection_job(
        XAmzTarget70.COMPREHEND_20171127_START_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTargetedSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_targeted_sentiment_detection_job(
        XAmzTarget70.COMPREHEND_20171127_START_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTargetedSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget70OrStr](amazon_comprehend/models/enums/x_amz_target70.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartTargetedSentimentDetectionJobErrorBody](amazon_comprehend/errors/start_targeted_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_topics_detection_job(x_amz_target: XAmzTarget74OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.start_topics_detection_job(XAmzTarget74.COMPREHEND_20171127_START_TOPICS_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTopicsDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.start_topics_detection_job(
        XAmzTarget74.COMPREHEND_20171127_START_TOPICS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartTopicsDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget74OrStr](amazon_comprehend/models/enums/x_amz_target74.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StartTopicsDetectionJobErrorBody](amazon_comprehend/errors/start_topics_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_dominant_language_detection_job(x_amz_target: XAmzTarget45OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_dominant_language_detection_job(
        XAmzTarget45.COMPREHEND_20171127_STOP_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopDominantLanguageDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_dominant_language_detection_job(
        XAmzTarget45.COMPREHEND_20171127_STOP_DOMINANT_LANGUAGE_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopDominantLanguageDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget45OrStr](amazon_comprehend/models/enums/x_amz_target45.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopDominantLanguageDetectionJobErrorBody](amazon_comprehend/errors/stop_dominant_language_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_entities_detection_job(x_amz_target: XAmzTarget49OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_entities_detection_job(XAmzTarget49.COMPREHEND_20171127_STOP_ENTITIES_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_entities_detection_job(
        XAmzTarget49.COMPREHEND_20171127_STOP_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget49OrStr](amazon_comprehend/models/enums/x_amz_target49.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopEntitiesDetectionJobErrorBody](amazon_comprehend/errors/stop_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_events_detection_job(x_amz_target: XAmzTarget53OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an events detection job in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_events_detection_job(XAmzTarget53.COMPREHEND_20171127_STOP_EVENTS_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopEventsDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_events_detection_job(
        XAmzTarget53.COMPREHEND_20171127_STOP_EVENTS_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopEventsDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget53OrStr](amazon_comprehend/models/enums/x_amz_target53.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopEventsDetectionJobErrorBody](amazon_comprehend/errors/stop_events_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_key_phrases_detection_job(x_amz_target: XAmzTarget59OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_key_phrases_detection_job(
        XAmzTarget59.COMPREHEND_20171127_STOP_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopKeyPhrasesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_key_phrases_detection_job(
        XAmzTarget59.COMPREHEND_20171127_STOP_KEY_PHRASES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopKeyPhrasesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget59OrStr](amazon_comprehend/models/enums/x_amz_target59.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopKeyPhrasesDetectionJobErrorBody](amazon_comprehend/errors/stop_key_phrases_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_pii_entities_detection_job(x_amz_target: XAmzTarget63OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a PII entities detection job in progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_pii_entities_detection_job(
        XAmzTarget63.COMPREHEND_20171127_STOP_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopPiiEntitiesDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_pii_entities_detection_job(
        XAmzTarget63.COMPREHEND_20171127_STOP_PII_ENTITIES_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopPiiEntitiesDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget63OrStr](amazon_comprehend/models/enums/x_amz_target63.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopPiiEntitiesDetectionJobErrorBody](amazon_comprehend/errors/stop_pii_entities_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_sentiment_detection_job(x_amz_target: XAmzTarget67OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_sentiment_detection_job(XAmzTarget67.COMPREHEND_20171127_STOP_SENTIMENT_DETECTION_JOB)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_sentiment_detection_job(
        XAmzTarget67.COMPREHEND_20171127_STOP_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget67OrStr](amazon_comprehend/models/enums/x_amz_target67.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopSentimentDetectionJobErrorBody](amazon_comprehend/errors/stop_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_targeted_sentiment_detection_job(x_amz_target: XAmzTarget71OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_targeted_sentiment_detection_job(
        XAmzTarget71.COMPREHEND_20171127_STOP_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTargetedSentimentDetectionJobErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_targeted_sentiment_detection_job(
        XAmzTarget71.COMPREHEND_20171127_STOP_TARGETED_SENTIMENT_DETECTION_JOB
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTargetedSentimentDetectionJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget71OrStr](amazon_comprehend/models/enums/x_amz_target71.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopTargetedSentimentDetectionJobErrorBody](amazon_comprehend/errors/stop_targeted_sentiment_detection_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_training_document_classifier(x_amz_target: XAmzTarget80OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_training_document_classifier(
        XAmzTarget80.COMPREHEND_20171127_STOP_TRAINING_DOCUMENT_CLASSIFIER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTrainingDocumentClassifierErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_training_document_classifier(
        XAmzTarget80.COMPREHEND_20171127_STOP_TRAINING_DOCUMENT_CLASSIFIER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTrainingDocumentClassifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget80OrStr](amazon_comprehend/models/enums/x_amz_target80.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopTrainingDocumentClassifierErrorBody](amazon_comprehend/errors/stop_training_document_classifier_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_training_entity_recognizer(x_amz_target: XAmzTarget81OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.stop_training_entity_recognizer(
        XAmzTarget81.COMPREHEND_20171127_STOP_TRAINING_ENTITY_RECOGNIZER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTrainingEntityRecognizerErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.stop_training_entity_recognizer(
        XAmzTarget81.COMPREHEND_20171127_STOP_TRAINING_ENTITY_RECOGNIZER
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopTrainingEntityRecognizerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget81OrStr](amazon_comprehend/models/enums/x_amz_target81.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[StopTrainingEntityRecognizerErrorBody](amazon_comprehend/errors/stop_training_entity_recognizer_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def tag_resource(x_amz_target: XAmzTarget82OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.tag_resource(XAmzTarget82.COMPREHEND_20171127_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.tag_resource(XAmzTarget82.COMPREHEND_20171127_TAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget82OrStr](amazon_comprehend/models/enums/x_amz_target82.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[TagResourceErrorBody](amazon_comprehend/errors/tag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def untag_resource(x_amz_target: XAmzTarget83OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a specific tag associated with an Amazon Comprehend resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.untag_resource(XAmzTarget83.COMPREHEND_20171127_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.untag_resource(XAmzTarget83.COMPREHEND_20171127_UNTAG_RESOURCE)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UntagResourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget83OrStr](amazon_comprehend/models/enums/x_amz_target83.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[UntagResourceErrorBody](amazon_comprehend/errors/untag_resource_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_endpoint(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.update_endpoint(XAmzTarget26.COMPREHEND_20171127_UPDATE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEndpointErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.update_endpoint(XAmzTarget26.COMPREHEND_20171127_UPDATE_ENDPOINT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEndpointErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget26OrStr](amazon_comprehend/models/enums/x_amz_target26.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[UpdateEndpointErrorBody](amazon_comprehend/errors/update_endpoint_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_flywheel(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the configuration information for an existing flywheel.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.amazon_comprehend.update_flywheel(XAmzTarget35.COMPREHEND_20171127_UPDATE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFlywheelErrorBody
```

**Async**

```python
try:
    await async_client.amazon_comprehend.update_flywheel(XAmzTarget35.COMPREHEND_20171127_UPDATE_FLYWHEEL)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFlywheelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget35OrStr](amazon_comprehend/models/enums/x_amz_target35.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[UpdateFlywheelErrorBody](amazon_comprehend/errors/update_flywheel_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 429, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](amazon_comprehend/apis/operations.py)

<details>
<summary><code>def classify_document2(x_amz_target: XAmzTargetAmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.classify_document2(XAmzTargetAmazonComprehendOperationsApi.COMPREHEND_20171127_CLASSIFY_DOCUMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocument2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.classify_document2(
        XAmzTargetAmazonComprehendOperationsApi.COMPREHEND_20171127_CLASSIFY_DOCUMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ClassifyDocument2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ClassifyDocument2ErrorBody](amazon_comprehend/errors/classify_document2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def contains_pii_entities2(x_amz_target: XAmzTarget1AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.contains_pii_entities2(
        XAmzTarget1AmazonComprehendOperationsApi.COMPREHEND_20171127_CONTAINS_PII_ENTITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContainsPiiEntities2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.contains_pii_entities2(
        XAmzTarget1AmazonComprehendOperationsApi.COMPREHEND_20171127_CONTAINS_PII_ENTITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContainsPiiEntities2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target1_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[ContainsPiiEntities2ErrorBody](amazon_comprehend/errors/contains_pii_entities2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_dominant_language2(x_amz_target: XAmzTarget2AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_dominant_language2(
        XAmzTarget2AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_DOMINANT_LANGUAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectDominantLanguage2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_dominant_language2(
        XAmzTarget2AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_DOMINANT_LANGUAGE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectDominantLanguage2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target2_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectDominantLanguage2ErrorBody](amazon_comprehend/errors/detect_dominant_language2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_entities2(x_amz_target: XAmzTarget3AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_entities2(XAmzTarget3AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_ENTITIES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectEntities2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_entities2(
        XAmzTarget3AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_ENTITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectEntities2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target3_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectEntities2ErrorBody](amazon_comprehend/errors/detect_entities2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_key_phrases2(x_amz_target: XAmzTarget4AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in the text.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_key_phrases2(
        XAmzTarget4AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_KEY_PHRASES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectKeyPhrases2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_key_phrases2(
        XAmzTarget4AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_KEY_PHRASES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectKeyPhrases2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target4_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectKeyPhrases2ErrorBody](amazon_comprehend/errors/detect_key_phrases2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_pii_entities2(x_amz_target: XAmzTarget5AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_pii_entities2(
        XAmzTarget5AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_PII_ENTITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectPiiEntities2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_pii_entities2(
        XAmzTarget5AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_PII_ENTITIES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectPiiEntities2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target5_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectPiiEntities2ErrorBody](amazon_comprehend/errors/detect_pii_entities2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_sentiment2(x_amz_target: XAmzTarget6AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_sentiment2(XAmzTarget6AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_SENTIMENT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSentiment2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_sentiment2(
        XAmzTarget6AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSentiment2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target6_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectSentiment2ErrorBody](amazon_comprehend/errors/detect_sentiment2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_syntax2(x_amz_target: XAmzTarget7AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_syntax2(XAmzTarget7AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_SYNTAX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSyntax2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_syntax2(
        XAmzTarget7AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_SYNTAX
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectSyntax2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target7_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectSyntax2ErrorBody](amazon_comprehend/errors/detect_syntax2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_targeted_sentiment2(x_amz_target: XAmzTarget8AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_targeted_sentiment2(
        XAmzTarget8AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTargetedSentiment2ErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_targeted_sentiment2(
        XAmzTarget8AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectTargetedSentiment2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target8_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectTargetedSentiment2ErrorBody](amazon_comprehend/errors/detect_targeted_sentiment2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def detect_toxic_content(x_amz_target: XAmzTarget9AmazonComprehendOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a results list that matches the size of the input list. For more information about toxicity detection, see Toxicity detection in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.operations.detect_toxic_content(
        XAmzTarget9AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_TOXIC_CONTENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectToxicContentErrorBody
```

**Async**

```python
try:
    await async_client.operations.detect_toxic_content(
        XAmzTarget9AmazonComprehendOperationsApi.COMPREHEND_20171127_DETECT_TOXIC_CONTENT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DetectToxicContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9AmazonComprehendOperationsApiOrStr](amazon_comprehend/models/enums/x_amz_target9_amazon_comprehend_operations_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](amazon_comprehend/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](amazon_comprehend/core/exceptions.py)&#91;[DetectToxicContentErrorBody](amazon_comprehend/errors/detect_toxic_content_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 500 | <code>[RawError](amazon_comprehend/core/results.py)</code> |
| anything unmapped | <code>[RawError](amazon_comprehend/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

