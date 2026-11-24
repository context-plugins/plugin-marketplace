# Reference

> Source: [AmazonComprehendClient](src/client.ts)

## AmazonComprehend

> Source: [AmazonComprehend](src/resources/amazon-comprehend.ts)

<details>
<summary><code>batchDetectDominantLanguage(request: AmazonComprehend.BatchDetectDominantLanguageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectDominantLanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectDominantLanguage({
    xAmzTarget: XAmzTarget.Comprehend20171127BatchDetectDominantLanguage,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectDominantLanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectDominantLanguage({ xAmzTarget: XAmzTarget.Comprehend20171127BatchDetectDominantLanguage })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget](src/models/xamz-target.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectDominantLanguage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectDominantLanguageError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectDominantLanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectDominantLanguageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDetectEntities(request: AmazonComprehend.BatchDetectEntitiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see Entities in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectEntities({
    xAmzTarget: XAmzTarget1.Comprehend20171127BatchDetectEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectEntities({ xAmzTarget: XAmzTarget1.Comprehend20171127BatchDetectEntities })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1](src/models/xamz-target1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectEntities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectEntitiesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectEntitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDetectKeyPhrases(request: AmazonComprehend.BatchDetectKeyPhrasesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectKeyPhrasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in a batch of documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectKeyPhrases({
    xAmzTarget: XAmzTarget2.Comprehend20171127BatchDetectKeyPhrases,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectKeyPhrasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectKeyPhrases({ xAmzTarget: XAmzTarget2.Comprehend20171127BatchDetectKeyPhrases })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2](src/models/xamz-target2.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectKeyPhrases(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectKeyPhrasesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectKeyPhrases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectKeyPhrasesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDetectSentiment(request: AmazonComprehend.BatchDetectSentimentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectSentimentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectSentiment({
    xAmzTarget: XAmzTarget3.Comprehend20171127BatchDetectSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectSentimentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectSentiment({ xAmzTarget: XAmzTarget3.Comprehend20171127BatchDetectSentiment })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3](src/models/xamz-target3.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectSentiment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectSentimentError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectSentimentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDetectSyntax(request: AmazonComprehend.BatchDetectSyntaxRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectSyntaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectSyntax({
    xAmzTarget: XAmzTarget4.Comprehend20171127BatchDetectSyntax,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectSyntaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectSyntax({ xAmzTarget: XAmzTarget4.Comprehend20171127BatchDetectSyntax })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4](src/models/xamz-target4.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectSyntax(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectSyntaxError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectSyntax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectSyntaxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchDetectTargetedSentiment(request: AmazonComprehend.BatchDetectTargetedSentimentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.BatchDetectTargetedSentimentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.batchDetectTargetedSentiment({
    xAmzTarget: XAmzTarget5.Comprehend20171127BatchDetectTargetedSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.BatchDetectTargetedSentimentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .batchDetectTargetedSentiment({ xAmzTarget: XAmzTarget5.Comprehend20171127BatchDetectTargetedSentiment })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5](src/models/xamz-target5.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.batchDetectTargetedSentiment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.BatchDetectTargetedSentimentError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.batchDetectTargetedSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.BatchDetectTargetedSentimentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>classifyDocument(request: AmazonComprehend.ClassifyDocumentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ClassifyDocumentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.classifyDocument({
    xAmzTarget: XAmzTarget6.Comprehend20171127ClassifyDocument,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ClassifyDocumentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .classifyDocument({ xAmzTarget: XAmzTarget6.Comprehend20171127ClassifyDocument })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6](src/models/xamz-target6.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.classifyDocument(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ClassifyDocumentError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.classifyDocument(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ClassifyDocumentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containsPiiEntities(request: AmazonComprehend.ContainsPiiEntitiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ContainsPiiEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.containsPiiEntities({
    xAmzTarget: XAmzTarget7.Comprehend20171127ContainsPiiEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ContainsPiiEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .containsPiiEntities({ xAmzTarget: XAmzTarget7.Comprehend20171127ContainsPiiEntities })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7](src/models/xamz-target7.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.containsPiiEntities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ContainsPiiEntitiesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.containsPiiEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ContainsPiiEntitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDataset(request: AmazonComprehend.CreateDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.CreateDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.createDataset({ xAmzTarget: XAmzTarget15.Comprehend20171127CreateDataset });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.CreateDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .createDataset({ xAmzTarget: XAmzTarget15.Comprehend20171127CreateDataset })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget15](src/models/xamz-target15.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.createDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.CreateDatasetError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.createDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.CreateDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDocumentClassifier(request: AmazonComprehend.CreateDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.CreateDocumentClassifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see Training classifier models in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.createDocumentClassifier({
    xAmzTarget: XAmzTarget18.Comprehend20171127CreateDocumentClassifier,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.CreateDocumentClassifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .createDocumentClassifier({ xAmzTarget: XAmzTarget18.Comprehend20171127CreateDocumentClassifier })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget18](src/models/xamz-target18.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.createDocumentClassifier(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.CreateDocumentClassifierError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.createDocumentClassifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.CreateDocumentClassifierError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEndpoint(request: AmazonComprehend.CreateEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.CreateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.createEndpoint({ xAmzTarget: XAmzTarget22.Comprehend20171127CreateEndpoint });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.CreateEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .createEndpoint({ xAmzTarget: XAmzTarget22.Comprehend20171127CreateEndpoint })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget22](src/models/xamz-target22.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.createEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.CreateEndpointError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.createEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.CreateEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createEntityRecognizer(request: AmazonComprehend.CreateEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.CreateEntityRecognizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an entity recognizer using submitted files. After your CreateEntityRecognizer request is submitted, you can check job status using the DescribeEntityRecognizer API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.createEntityRecognizer({
    xAmzTarget: XAmzTarget27.Comprehend20171127CreateEntityRecognizer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.CreateEntityRecognizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .createEntityRecognizer({ xAmzTarget: XAmzTarget27.Comprehend20171127CreateEntityRecognizer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget27](src/models/xamz-target27.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.createEntityRecognizer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.CreateEntityRecognizerError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.createEntityRecognizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.CreateEntityRecognizerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createFlywheel(request: AmazonComprehend.CreateFlywheelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.CreateFlywheelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model. When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model. To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake. To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.createFlywheel({ xAmzTarget: XAmzTarget31.Comprehend20171127CreateFlywheel });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.CreateFlywheelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .createFlywheel({ xAmzTarget: XAmzTarget31.Comprehend20171127CreateFlywheel })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget31](src/models/xamz-target31.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.createFlywheel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.CreateFlywheelError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.createFlywheel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.CreateFlywheelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDocumentClassifier(request: AmazonComprehend.DeleteDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DeleteDocumentClassifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a previously created document classifier Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.deleteDocumentClassifier({
    xAmzTarget: XAmzTarget19.Comprehend20171127DeleteDocumentClassifier,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DeleteDocumentClassifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .deleteDocumentClassifier({ xAmzTarget: XAmzTarget19.Comprehend20171127DeleteDocumentClassifier })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget19](src/models/xamz-target19.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.deleteDocumentClassifier(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DeleteDocumentClassifierError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.deleteDocumentClassifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DeleteDocumentClassifierError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEndpoint(request: AmazonComprehend.DeleteEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DeleteEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.deleteEndpoint({ xAmzTarget: XAmzTarget23.Comprehend20171127DeleteEndpoint });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DeleteEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .deleteEndpoint({ xAmzTarget: XAmzTarget23.Comprehend20171127DeleteEndpoint })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget23](src/models/xamz-target23.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.deleteEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DeleteEndpointError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.deleteEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DeleteEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEntityRecognizer(request: AmazonComprehend.DeleteEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DeleteEntityRecognizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an entity recognizer. Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a ResourceInUseException will be returned. This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.deleteEntityRecognizer({
    xAmzTarget: XAmzTarget28.Comprehend20171127DeleteEntityRecognizer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DeleteEntityRecognizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .deleteEntityRecognizer({ xAmzTarget: XAmzTarget28.Comprehend20171127DeleteEntityRecognizer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget28](src/models/xamz-target28.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.deleteEntityRecognizer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DeleteEntityRecognizerError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.deleteEntityRecognizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DeleteEntityRecognizerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFlywheel(request: AmazonComprehend.DeleteFlywheelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DeleteFlywheelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.deleteFlywheel({ xAmzTarget: XAmzTarget32.Comprehend20171127DeleteFlywheel });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DeleteFlywheelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .deleteFlywheel({ xAmzTarget: XAmzTarget32.Comprehend20171127DeleteFlywheel })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget32](src/models/xamz-target32.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.deleteFlywheel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DeleteFlywheelError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.deleteFlywheel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DeleteFlywheelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteResourcePolicy(request: AmazonComprehend.DeleteResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DeleteResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource-based policy that is attached to a custom model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.deleteResourcePolicy({
    xAmzTarget: XAmzTarget36.Comprehend20171127DeleteResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DeleteResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .deleteResourcePolicy({ xAmzTarget: XAmzTarget36.Comprehend20171127DeleteResourcePolicy })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget36](src/models/xamz-target36.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.deleteResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DeleteResourcePolicyError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.deleteResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DeleteResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDataset(request: AmazonComprehend.DescribeDatasetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeDatasetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the dataset that you specify. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeDataset({
    xAmzTarget: XAmzTarget16.Comprehend20171127DescribeDataset,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeDatasetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeDataset({ xAmzTarget: XAmzTarget16.Comprehend20171127DescribeDataset })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget16](src/models/xamz-target16.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeDataset(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeDatasetError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeDataset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeDatasetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDocumentClassificationJob(request: AmazonComprehend.DescribeDocumentClassificationJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeDocumentClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeDocumentClassificationJob({
    xAmzTarget: XAmzTarget39.Comprehend20171127DescribeDocumentClassificationJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeDocumentClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeDocumentClassificationJob({
    xAmzTarget: XAmzTarget39.Comprehend20171127DescribeDocumentClassificationJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget39](src/models/xamz-target39.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeDocumentClassificationJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeDocumentClassificationJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeDocumentClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeDocumentClassificationJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDocumentClassifier(request: AmazonComprehend.DescribeDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeDocumentClassifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a document classifier.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeDocumentClassifier({
    xAmzTarget: XAmzTarget20.Comprehend20171127DescribeDocumentClassifier,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeDocumentClassifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeDocumentClassifier({ xAmzTarget: XAmzTarget20.Comprehend20171127DescribeDocumentClassifier })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget20](src/models/xamz-target20.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeDocumentClassifier(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeDocumentClassifierError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeDocumentClassifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeDocumentClassifierError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeDominantLanguageDetectionJob(request: AmazonComprehend.DescribeDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeDominantLanguageDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget42.Comprehend20171127DescribeDominantLanguageDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeDominantLanguageDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget42.Comprehend20171127DescribeDominantLanguageDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget42](src/models/xamz-target42.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeDominantLanguageDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeDominantLanguageDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeDominantLanguageDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeDominantLanguageDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeEndpoint(request: AmazonComprehend.DescribeEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeEndpoint({
    xAmzTarget: XAmzTarget24.Comprehend20171127DescribeEndpoint,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeEndpoint({ xAmzTarget: XAmzTarget24.Comprehend20171127DescribeEndpoint })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget24](src/models/xamz-target24.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeEndpointError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeEntitiesDetectionJob(request: AmazonComprehend.DescribeEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeEntitiesDetectionJob({
    xAmzTarget: XAmzTarget46.Comprehend20171127DescribeEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeEntitiesDetectionJob({ xAmzTarget: XAmzTarget46.Comprehend20171127DescribeEntitiesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget46](src/models/xamz-target46.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeEntityRecognizer(request: AmazonComprehend.DescribeEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeEntityRecognizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeEntityRecognizer({
    xAmzTarget: XAmzTarget29.Comprehend20171127DescribeEntityRecognizer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeEntityRecognizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeEntityRecognizer({ xAmzTarget: XAmzTarget29.Comprehend20171127DescribeEntityRecognizer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget29](src/models/xamz-target29.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeEntityRecognizer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeEntityRecognizerError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeEntityRecognizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeEntityRecognizerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeEventsDetectionJob(request: AmazonComprehend.DescribeEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeEventsDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the status and details of an events detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeEventsDetectionJob({
    xAmzTarget: XAmzTarget50.Comprehend20171127DescribeEventsDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeEventsDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeEventsDetectionJob({ xAmzTarget: XAmzTarget50.Comprehend20171127DescribeEventsDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget50](src/models/xamz-target50.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeEventsDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeEventsDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeEventsDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeEventsDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeFlywheel(request: AmazonComprehend.DescribeFlywheelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeFlywheelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides configuration information about the flywheel. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeFlywheel({
    xAmzTarget: XAmzTarget33.Comprehend20171127DescribeFlywheel,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeFlywheelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeFlywheel({ xAmzTarget: XAmzTarget33.Comprehend20171127DescribeFlywheel })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget33](src/models/xamz-target33.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeFlywheel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeFlywheelError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeFlywheel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeFlywheelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeFlywheelIteration(request: AmazonComprehend.DescribeFlywheelIterationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeFlywheelIterationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeFlywheelIteration({
    xAmzTarget: XAmzTarget54.Comprehend20171127DescribeFlywheelIteration,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeFlywheelIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeFlywheelIteration({ xAmzTarget: XAmzTarget54.Comprehend20171127DescribeFlywheelIteration })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget54](src/models/xamz-target54.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeFlywheelIteration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeFlywheelIterationError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeFlywheelIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeFlywheelIterationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeKeyPhrasesDetectionJob(request: AmazonComprehend.DescribeKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeKeyPhrasesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeKeyPhrasesDetectionJob({
    xAmzTarget: XAmzTarget56.Comprehend20171127DescribeKeyPhrasesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeKeyPhrasesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeKeyPhrasesDetectionJob({
    xAmzTarget: XAmzTarget56.Comprehend20171127DescribeKeyPhrasesDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget56](src/models/xamz-target56.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeKeyPhrasesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeKeyPhrasesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeKeyPhrasesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeKeyPhrasesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describePiiEntitiesDetectionJob(request: AmazonComprehend.DescribePiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribePiiEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describePiiEntitiesDetectionJob({
    xAmzTarget: XAmzTarget60.Comprehend20171127DescribePiiEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribePiiEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describePiiEntitiesDetectionJob({
    xAmzTarget: XAmzTarget60.Comprehend20171127DescribePiiEntitiesDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget60](src/models/xamz-target60.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describePiiEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribePiiEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describePiiEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribePiiEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeResourcePolicy(request: AmazonComprehend.DescribeResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeResourcePolicy({
    xAmzTarget: XAmzTarget37.Comprehend20171127DescribeResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeResourcePolicy({ xAmzTarget: XAmzTarget37.Comprehend20171127DescribeResourcePolicy })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget37](src/models/xamz-target37.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeResourcePolicyError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeSentimentDetectionJob(request: AmazonComprehend.DescribeSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeSentimentDetectionJob({
    xAmzTarget: XAmzTarget64.Comprehend20171127DescribeSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeSentimentDetectionJob({ xAmzTarget: XAmzTarget64.Comprehend20171127DescribeSentimentDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget64](src/models/xamz-target64.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTargetedSentimentDetectionJob(request: AmazonComprehend.DescribeTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeTargetedSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget68.Comprehend20171127DescribeTargetedSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeTargetedSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget68.Comprehend20171127DescribeTargetedSentimentDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget68](src/models/xamz-target68.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeTargetedSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeTargetedSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeTargetedSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeTargetedSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>describeTopicsDetectionJob(request: AmazonComprehend.DescribeTopicsDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DescribeTopicsDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.describeTopicsDetectionJob({
    xAmzTarget: XAmzTarget72.Comprehend20171127DescribeTopicsDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DescribeTopicsDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .describeTopicsDetectionJob({ xAmzTarget: XAmzTarget72.Comprehend20171127DescribeTopicsDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget72](src/models/xamz-target72.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.describeTopicsDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DescribeTopicsDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.describeTopicsDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DescribeTopicsDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectDominantLanguage(request: AmazonComprehend.DetectDominantLanguageRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectDominantLanguageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectDominantLanguage({
    xAmzTarget: XAmzTarget8.Comprehend20171127DetectDominantLanguage,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectDominantLanguageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectDominantLanguage({ xAmzTarget: XAmzTarget8.Comprehend20171127DetectDominantLanguage })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8](src/models/xamz-target8.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectDominantLanguage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectDominantLanguageError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectDominantLanguage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectDominantLanguageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectEntities(request: AmazonComprehend.DetectEntitiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectEntities({ xAmzTarget: XAmzTarget9.Comprehend20171127DetectEntities });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectEntities({ xAmzTarget: XAmzTarget9.Comprehend20171127DetectEntities })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9](src/models/xamz-target9.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectEntities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectEntitiesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectEntitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectKeyPhrases(request: AmazonComprehend.DetectKeyPhrasesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectKeyPhrasesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in the text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectKeyPhrases({
    xAmzTarget: XAmzTarget10.Comprehend20171127DetectKeyPhrases,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectKeyPhrasesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectKeyPhrases({ xAmzTarget: XAmzTarget10.Comprehend20171127DetectKeyPhrases })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget10](src/models/xamz-target10.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectKeyPhrases(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectKeyPhrasesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectKeyPhrases(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectKeyPhrasesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectPiiEntities(request: AmazonComprehend.DetectPiiEntitiesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectPiiEntitiesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectPiiEntities({
    xAmzTarget: XAmzTarget11.Comprehend20171127DetectPiiEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectPiiEntitiesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectPiiEntities({ xAmzTarget: XAmzTarget11.Comprehend20171127DetectPiiEntities })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget11](src/models/xamz-target11.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectPiiEntities(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectPiiEntitiesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectPiiEntities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectPiiEntitiesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectSentiment(request: AmazonComprehend.DetectSentimentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectSentimentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectSentiment({
    xAmzTarget: XAmzTarget12.Comprehend20171127DetectSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectSentimentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectSentiment({ xAmzTarget: XAmzTarget12.Comprehend20171127DetectSentiment })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget12](src/models/xamz-target12.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectSentiment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectSentimentError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectSentimentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectSyntax(request: AmazonComprehend.DetectSyntaxRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectSyntaxError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectSyntax({ xAmzTarget: XAmzTarget13.Comprehend20171127DetectSyntax });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectSyntaxError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectSyntax({ xAmzTarget: XAmzTarget13.Comprehend20171127DetectSyntax })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget13](src/models/xamz-target13.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectSyntax(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectSyntaxError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectSyntax(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectSyntaxError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectTargetedSentiment(request: AmazonComprehend.DetectTargetedSentimentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.DetectTargetedSentimentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.detectTargetedSentiment({
    xAmzTarget: XAmzTarget14.Comprehend20171127DetectTargetedSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.DetectTargetedSentimentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .detectTargetedSentiment({ xAmzTarget: XAmzTarget14.Comprehend20171127DetectTargetedSentiment })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget14](src/models/xamz-target14.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.detectTargetedSentiment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.DetectTargetedSentimentError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.detectTargetedSentiment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.DetectTargetedSentimentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>importModel(request: AmazonComprehend.ImportModelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ImportModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one. If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it. The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.importModel({ xAmzTarget: XAmzTarget75.Comprehend20171127ImportModel });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ImportModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .importModel({ xAmzTarget: XAmzTarget75.Comprehend20171127ImportModel })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget75](src/models/xamz-target75.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.importModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ImportModelError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.importModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ImportModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDatasets(request: AmazonComprehend.ListDatasetsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListDatasetsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the datasets that you have configured in this Region. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listDatasets({ xAmzTarget: XAmzTarget17.Comprehend20171127ListDatasets });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListDatasetsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listDatasets({ xAmzTarget: XAmzTarget17.Comprehend20171127ListDatasets })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget17](src/models/xamz-target17.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listDatasets(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListDatasetsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listDatasets(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListDatasetsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocumentClassificationJobs(request: AmazonComprehend.ListDocumentClassificationJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListDocumentClassificationJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the documentation classification jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listDocumentClassificationJobs({
    xAmzTarget: XAmzTarget40.Comprehend20171127ListDocumentClassificationJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListDocumentClassificationJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listDocumentClassificationJobs({
    xAmzTarget: XAmzTarget40.Comprehend20171127ListDocumentClassificationJobs,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget40](src/models/xamz-target40.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listDocumentClassificationJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListDocumentClassificationJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listDocumentClassificationJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListDocumentClassificationJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocumentClassifierSummaries(request: AmazonComprehend.ListDocumentClassifierSummariesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListDocumentClassifierSummariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of summaries of the document classifiers that you have created

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listDocumentClassifierSummaries({
    xAmzTarget: XAmzTarget76.Comprehend20171127ListDocumentClassifierSummaries,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListDocumentClassifierSummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listDocumentClassifierSummaries({
    xAmzTarget: XAmzTarget76.Comprehend20171127ListDocumentClassifierSummaries,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget76](src/models/xamz-target76.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listDocumentClassifierSummaries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListDocumentClassifierSummariesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listDocumentClassifierSummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListDocumentClassifierSummariesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDocumentClassifiers(request: AmazonComprehend.ListDocumentClassifiersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListDocumentClassifiersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the document classifiers that you have created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listDocumentClassifiers({
    xAmzTarget: XAmzTarget21.Comprehend20171127ListDocumentClassifiers,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListDocumentClassifiersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listDocumentClassifiers({ xAmzTarget: XAmzTarget21.Comprehend20171127ListDocumentClassifiers })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget21](src/models/xamz-target21.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listDocumentClassifiers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListDocumentClassifiersError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listDocumentClassifiers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListDocumentClassifiersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDominantLanguageDetectionJobs(request: AmazonComprehend.ListDominantLanguageDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListDominantLanguageDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the dominant language detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listDominantLanguageDetectionJobs({
    xAmzTarget: XAmzTarget43.Comprehend20171127ListDominantLanguageDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListDominantLanguageDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listDominantLanguageDetectionJobs({
    xAmzTarget: XAmzTarget43.Comprehend20171127ListDominantLanguageDetectionJobs,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget43](src/models/xamz-target43.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listDominantLanguageDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListDominantLanguageDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listDominantLanguageDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListDominantLanguageDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEndpoints(request: AmazonComprehend.ListEndpointsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListEndpointsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of all existing endpoints that you've created. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listEndpoints({ xAmzTarget: XAmzTarget25.Comprehend20171127ListEndpoints });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListEndpointsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listEndpoints({ xAmzTarget: XAmzTarget25.Comprehend20171127ListEndpoints })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget25](src/models/xamz-target25.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listEndpoints(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListEndpointsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listEndpoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListEndpointsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntitiesDetectionJobs(request: AmazonComprehend.ListEntitiesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListEntitiesDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the entity detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listEntitiesDetectionJobs({
    xAmzTarget: XAmzTarget47.Comprehend20171127ListEntitiesDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListEntitiesDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listEntitiesDetectionJobs({ xAmzTarget: XAmzTarget47.Comprehend20171127ListEntitiesDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget47](src/models/xamz-target47.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listEntitiesDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListEntitiesDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listEntitiesDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListEntitiesDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntityRecognizerSummaries(request: AmazonComprehend.ListEntityRecognizerSummariesRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListEntityRecognizerSummariesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of summaries for the entity recognizers that you have created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listEntityRecognizerSummaries({
    xAmzTarget: XAmzTarget77.Comprehend20171127ListEntityRecognizerSummaries,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListEntityRecognizerSummariesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listEntityRecognizerSummaries({ xAmzTarget: XAmzTarget77.Comprehend20171127ListEntityRecognizerSummaries })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget77](src/models/xamz-target77.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listEntityRecognizerSummaries(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListEntityRecognizerSummariesError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listEntityRecognizerSummaries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListEntityRecognizerSummariesError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEntityRecognizers(request: AmazonComprehend.ListEntityRecognizersRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListEntityRecognizersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list. The results of this list are not in any particular order. Please get the list and sort locally if needed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listEntityRecognizers({
    xAmzTarget: XAmzTarget30.Comprehend20171127ListEntityRecognizers,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListEntityRecognizersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listEntityRecognizers({ xAmzTarget: XAmzTarget30.Comprehend20171127ListEntityRecognizers })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget30](src/models/xamz-target30.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listEntityRecognizers(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListEntityRecognizersError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listEntityRecognizers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListEntityRecognizersError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEventsDetectionJobs(request: AmazonComprehend.ListEventsDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListEventsDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the events detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listEventsDetectionJobs({
    xAmzTarget: XAmzTarget51.Comprehend20171127ListEventsDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListEventsDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listEventsDetectionJobs({ xAmzTarget: XAmzTarget51.Comprehend20171127ListEventsDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget51](src/models/xamz-target51.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listEventsDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListEventsDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listEventsDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListEventsDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFlywheelIterationHistory(request: AmazonComprehend.ListFlywheelIterationHistoryRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListFlywheelIterationHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Information about the history of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listFlywheelIterationHistory({
    xAmzTarget: XAmzTarget78.Comprehend20171127ListFlywheelIterationHistory,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListFlywheelIterationHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listFlywheelIterationHistory({ xAmzTarget: XAmzTarget78.Comprehend20171127ListFlywheelIterationHistory })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget78](src/models/xamz-target78.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listFlywheelIterationHistory(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListFlywheelIterationHistoryError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listFlywheelIterationHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListFlywheelIterationHistoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFlywheels(request: AmazonComprehend.ListFlywheelsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListFlywheelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the flywheels that you have created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listFlywheels({ xAmzTarget: XAmzTarget34.Comprehend20171127ListFlywheels });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListFlywheelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listFlywheels({ xAmzTarget: XAmzTarget34.Comprehend20171127ListFlywheels })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget34](src/models/xamz-target34.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listFlywheels(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListFlywheelsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listFlywheels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListFlywheelsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listKeyPhrasesDetectionJobs(request: AmazonComprehend.ListKeyPhrasesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListKeyPhrasesDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of key phrase detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listKeyPhrasesDetectionJobs({
    xAmzTarget: XAmzTarget57.Comprehend20171127ListKeyPhrasesDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListKeyPhrasesDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listKeyPhrasesDetectionJobs({ xAmzTarget: XAmzTarget57.Comprehend20171127ListKeyPhrasesDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget57](src/models/xamz-target57.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listKeyPhrasesDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListKeyPhrasesDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listKeyPhrasesDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListKeyPhrasesDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPiiEntitiesDetectionJobs(request: AmazonComprehend.ListPiiEntitiesDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListPiiEntitiesDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the PII entity detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listPiiEntitiesDetectionJobs({
    xAmzTarget: XAmzTarget61.Comprehend20171127ListPiiEntitiesDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListPiiEntitiesDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listPiiEntitiesDetectionJobs({ xAmzTarget: XAmzTarget61.Comprehend20171127ListPiiEntitiesDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget61](src/models/xamz-target61.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listPiiEntitiesDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListPiiEntitiesDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listPiiEntitiesDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListPiiEntitiesDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSentimentDetectionJobs(request: AmazonComprehend.ListSentimentDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListSentimentDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sentiment detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listSentimentDetectionJobs({
    xAmzTarget: XAmzTarget65.Comprehend20171127ListSentimentDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListSentimentDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listSentimentDetectionJobs({ xAmzTarget: XAmzTarget65.Comprehend20171127ListSentimentDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget65](src/models/xamz-target65.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listSentimentDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListSentimentDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listSentimentDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListSentimentDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTagsForResource(request: AmazonComprehend.ListTagsForResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListTagsForResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all tags associated with a given Amazon Comprehend resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listTagsForResource({
    xAmzTarget: XAmzTarget79.Comprehend20171127ListTagsForResource,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListTagsForResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listTagsForResource({ xAmzTarget: XAmzTarget79.Comprehend20171127ListTagsForResource })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget79](src/models/xamz-target79.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listTagsForResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListTagsForResourceError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listTagsForResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListTagsForResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTargetedSentimentDetectionJobs(request: AmazonComprehend.ListTargetedSentimentDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListTargetedSentimentDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of targeted sentiment detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listTargetedSentimentDetectionJobs({
    xAmzTarget: XAmzTarget69.Comprehend20171127ListTargetedSentimentDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListTargetedSentimentDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listTargetedSentimentDetectionJobs({
    xAmzTarget: XAmzTarget69.Comprehend20171127ListTargetedSentimentDetectionJobs,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget69](src/models/xamz-target69.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listTargetedSentimentDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListTargetedSentimentDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listTargetedSentimentDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListTargetedSentimentDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTopicsDetectionJobs(request: AmazonComprehend.ListTopicsDetectionJobsRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.ListTopicsDetectionJobsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of the topic detection jobs that you have submitted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.listTopicsDetectionJobs({
    xAmzTarget: XAmzTarget73.Comprehend20171127ListTopicsDetectionJobs,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.ListTopicsDetectionJobsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .listTopicsDetectionJobs({ xAmzTarget: XAmzTarget73.Comprehend20171127ListTopicsDetectionJobs })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget73](src/models/xamz-target73.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.listTopicsDetectionJobs(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.ListTopicsDetectionJobsError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.listTopicsDetectionJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.ListTopicsDetectionJobsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>putResourcePolicy(request: AmazonComprehend.PutResourcePolicyRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.PutResourcePolicyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.putResourcePolicy({
    xAmzTarget: XAmzTarget38.Comprehend20171127PutResourcePolicy,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.PutResourcePolicyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .putResourcePolicy({ xAmzTarget: XAmzTarget38.Comprehend20171127PutResourcePolicy })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget38](src/models/xamz-target38.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.putResourcePolicy(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.PutResourcePolicyError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.putResourcePolicy(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.PutResourcePolicyError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startDocumentClassificationJob(request: AmazonComprehend.StartDocumentClassificationJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartDocumentClassificationJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous document classification job using a custom classification model. Use the DescribeDocumentClassificationJob operation to track the progress of the job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startDocumentClassificationJob({
    xAmzTarget: XAmzTarget41.Comprehend20171127StartDocumentClassificationJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartDocumentClassificationJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startDocumentClassificationJob({
    xAmzTarget: XAmzTarget41.Comprehend20171127StartDocumentClassificationJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget41](src/models/xamz-target41.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startDocumentClassificationJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartDocumentClassificationJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startDocumentClassificationJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartDocumentClassificationJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startDominantLanguageDetectionJob(request: AmazonComprehend.StartDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartDominantLanguageDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget44.Comprehend20171127StartDominantLanguageDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartDominantLanguageDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget44.Comprehend20171127StartDominantLanguageDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget44](src/models/xamz-target44.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startDominantLanguageDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartDominantLanguageDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startDominantLanguageDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartDominantLanguageDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startEntitiesDetectionJob(request: AmazonComprehend.StartEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job. This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional EntityRecognizerArn must be used in order to provide access to the recognizer being used to detect the custom entity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startEntitiesDetectionJob({
    xAmzTarget: XAmzTarget48.Comprehend20171127StartEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startEntitiesDetectionJob({ xAmzTarget: XAmzTarget48.Comprehend20171127StartEntitiesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget48](src/models/xamz-target48.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startEventsDetectionJob(request: AmazonComprehend.StartEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartEventsDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous event detection job for a collection of documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startEventsDetectionJob({
    xAmzTarget: XAmzTarget52.Comprehend20171127StartEventsDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartEventsDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startEventsDetectionJob({ xAmzTarget: XAmzTarget52.Comprehend20171127StartEventsDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget52](src/models/xamz-target52.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startEventsDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartEventsDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startEventsDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartEventsDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startFlywheelIteration(request: AmazonComprehend.StartFlywheelIterationRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartFlywheelIterationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startFlywheelIteration({
    xAmzTarget: XAmzTarget55.Comprehend20171127StartFlywheelIteration,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartFlywheelIterationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startFlywheelIteration({ xAmzTarget: XAmzTarget55.Comprehend20171127StartFlywheelIteration })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget55](src/models/xamz-target55.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startFlywheelIteration(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartFlywheelIterationError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startFlywheelIteration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartFlywheelIterationError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startKeyPhrasesDetectionJob(request: AmazonComprehend.StartKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartKeyPhrasesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startKeyPhrasesDetectionJob({
    xAmzTarget: XAmzTarget58.Comprehend20171127StartKeyPhrasesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartKeyPhrasesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startKeyPhrasesDetectionJob({ xAmzTarget: XAmzTarget58.Comprehend20171127StartKeyPhrasesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget58](src/models/xamz-target58.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startKeyPhrasesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartKeyPhrasesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startKeyPhrasesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartKeyPhrasesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startPiiEntitiesDetectionJob(request: AmazonComprehend.StartPiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartPiiEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous PII entity detection job for a collection of documents.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startPiiEntitiesDetectionJob({
    xAmzTarget: XAmzTarget62.Comprehend20171127StartPiiEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartPiiEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startPiiEntitiesDetectionJob({ xAmzTarget: XAmzTarget62.Comprehend20171127StartPiiEntitiesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget62](src/models/xamz-target62.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startPiiEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartPiiEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startPiiEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartPiiEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startSentimentDetectionJob(request: AmazonComprehend.StartSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startSentimentDetectionJob({
    xAmzTarget: XAmzTarget66.Comprehend20171127StartSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startSentimentDetectionJob({ xAmzTarget: XAmzTarget66.Comprehend20171127StartSentimentDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget66](src/models/xamz-target66.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTargetedSentimentDetectionJob(request: AmazonComprehend.StartTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartTargetedSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the DescribeTargetedSentimentDetectionJob operation to track the status of a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget70.Comprehend20171127StartTargetedSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartTargetedSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget70.Comprehend20171127StartTargetedSentimentDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget70](src/models/xamz-target70.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startTargetedSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartTargetedSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startTargetedSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartTargetedSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTopicsDetectionJob(request: AmazonComprehend.StartTopicsDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StartTopicsDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts an asynchronous topic detection job. Use the DescribeTopicDetectionJob operation to track the status of a job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.startTopicsDetectionJob({
    xAmzTarget: XAmzTarget74.Comprehend20171127StartTopicsDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StartTopicsDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .startTopicsDetectionJob({ xAmzTarget: XAmzTarget74.Comprehend20171127StartTopicsDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget74](src/models/xamz-target74.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.startTopicsDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StartTopicsDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.startTopicsDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StartTopicsDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopDominantLanguageDetectionJob(request: AmazonComprehend.StopDominantLanguageDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopDominantLanguageDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a dominant language detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget45.Comprehend20171127StopDominantLanguageDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopDominantLanguageDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopDominantLanguageDetectionJob({
    xAmzTarget: XAmzTarget45.Comprehend20171127StopDominantLanguageDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget45](src/models/xamz-target45.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopDominantLanguageDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopDominantLanguageDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopDominantLanguageDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopDominantLanguageDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopEntitiesDetectionJob(request: AmazonComprehend.StopEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an entities detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopEntitiesDetectionJob({
    xAmzTarget: XAmzTarget49.Comprehend20171127StopEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopEntitiesDetectionJob({ xAmzTarget: XAmzTarget49.Comprehend20171127StopEntitiesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget49](src/models/xamz-target49.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopEventsDetectionJob(request: AmazonComprehend.StopEventsDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopEventsDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an events detection job in progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopEventsDetectionJob({
    xAmzTarget: XAmzTarget53.Comprehend20171127StopEventsDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopEventsDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopEventsDetectionJob({ xAmzTarget: XAmzTarget53.Comprehend20171127StopEventsDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget53](src/models/xamz-target53.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopEventsDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopEventsDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopEventsDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopEventsDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopKeyPhrasesDetectionJob(request: AmazonComprehend.StopKeyPhrasesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopKeyPhrasesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a key phrases detection job in progress. If the job state is IN_PROGRESS the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopKeyPhrasesDetectionJob({
    xAmzTarget: XAmzTarget59.Comprehend20171127StopKeyPhrasesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopKeyPhrasesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopKeyPhrasesDetectionJob({ xAmzTarget: XAmzTarget59.Comprehend20171127StopKeyPhrasesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget59](src/models/xamz-target59.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopKeyPhrasesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopKeyPhrasesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopKeyPhrasesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopKeyPhrasesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopPiiEntitiesDetectionJob(request: AmazonComprehend.StopPiiEntitiesDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopPiiEntitiesDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a PII entities detection job in progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopPiiEntitiesDetectionJob({
    xAmzTarget: XAmzTarget63.Comprehend20171127StopPiiEntitiesDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopPiiEntitiesDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopPiiEntitiesDetectionJob({ xAmzTarget: XAmzTarget63.Comprehend20171127StopPiiEntitiesDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget63](src/models/xamz-target63.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopPiiEntitiesDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopPiiEntitiesDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopPiiEntitiesDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopPiiEntitiesDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopSentimentDetectionJob(request: AmazonComprehend.StopSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopSentimentDetectionJob({
    xAmzTarget: XAmzTarget67.Comprehend20171127StopSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopSentimentDetectionJob({ xAmzTarget: XAmzTarget67.Comprehend20171127StopSentimentDetectionJob })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget67](src/models/xamz-target67.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopTargetedSentimentDetectionJob(request: AmazonComprehend.StopTargetedSentimentDetectionJobRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopTargetedSentimentDetectionJobError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a targeted sentiment detection job in progress. If the job state is IN_PROGRESS, the job is marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state; otherwise the job is be stopped and put into the STOPPED state. If the job is in the COMPLETED or FAILED state when you call the StopDominantLanguageDetectionJob operation, the operation returns a 400 Internal Request Exception. When a job is stopped, any documents already processed are written to the output location.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget71.Comprehend20171127StopTargetedSentimentDetectionJob,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopTargetedSentimentDetectionJobError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopTargetedSentimentDetectionJob({
    xAmzTarget: XAmzTarget71.Comprehend20171127StopTargetedSentimentDetectionJob,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget71](src/models/xamz-target71.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopTargetedSentimentDetectionJob(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopTargetedSentimentDetectionJobError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopTargetedSentimentDetectionJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopTargetedSentimentDetectionJobError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopTrainingDocumentClassifier(request: AmazonComprehend.StopTrainingDocumentClassifierRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopTrainingDocumentClassifierError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a document classifier training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and put into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopTrainingDocumentClassifier({
    xAmzTarget: XAmzTarget80.Comprehend20171127StopTrainingDocumentClassifier,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopTrainingDocumentClassifierError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopTrainingDocumentClassifier({
    xAmzTarget: XAmzTarget80.Comprehend20171127StopTrainingDocumentClassifier,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget80](src/models/xamz-target80.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopTrainingDocumentClassifier(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopTrainingDocumentClassifierError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopTrainingDocumentClassifier(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopTrainingDocumentClassifierError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopTrainingEntityRecognizer(request: AmazonComprehend.StopTrainingEntityRecognizerRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.StopTrainingEntityRecognizerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops an entity recognizer training job while in progress. If the training job state is TRAINING, the job is marked for termination and put into the STOP_REQUESTED state. If the training job completes before it can be stopped, it is put into the TRAINED; otherwise the training job is stopped and putted into the STOPPED state and the service sends back an HTTP 200 response with an empty HTTP body.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.stopTrainingEntityRecognizer({
    xAmzTarget: XAmzTarget81.Comprehend20171127StopTrainingEntityRecognizer,
  });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.StopTrainingEntityRecognizerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .stopTrainingEntityRecognizer({ xAmzTarget: XAmzTarget81.Comprehend20171127StopTrainingEntityRecognizer })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget81](src/models/xamz-target81.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.stopTrainingEntityRecognizer(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.StopTrainingEntityRecognizerError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.stopTrainingEntityRecognizer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.StopTrainingEntityRecognizerError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>tagResource(request: AmazonComprehend.TagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.TagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.tagResource({ xAmzTarget: XAmzTarget82.Comprehend20171127TagResource });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.TagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .tagResource({ xAmzTarget: XAmzTarget82.Comprehend20171127TagResource })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget82](src/models/xamz-target82.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.tagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.TagResourceError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.tagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.TagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>untagResource(request: AmazonComprehend.UntagResourceRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.UntagResourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a specific tag associated with an Amazon Comprehend resource.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.untagResource({ xAmzTarget: XAmzTarget83.Comprehend20171127UntagResource });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.UntagResourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .untagResource({ xAmzTarget: XAmzTarget83.Comprehend20171127UntagResource })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget83](src/models/xamz-target83.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.untagResource(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.UntagResourceError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.untagResource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.UntagResourceError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateEndpoint(request: AmazonComprehend.UpdateEndpointRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.UpdateEndpointError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates information about the specified endpoint. For information about endpoints, see Managing endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.updateEndpoint({ xAmzTarget: XAmzTarget26.Comprehend20171127UpdateEndpoint });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.UpdateEndpointError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .updateEndpoint({ xAmzTarget: XAmzTarget26.Comprehend20171127UpdateEndpoint })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget26](src/models/xamz-target26.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.updateEndpoint(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.UpdateEndpointError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.updateEndpoint(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.UpdateEndpointError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFlywheel(request: AmazonComprehend.UpdateFlywheelRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, AmazonComprehend.UpdateFlywheelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the configuration information for an existing flywheel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.amazonComprehend.updateFlywheel({ xAmzTarget: XAmzTarget35.Comprehend20171127UpdateFlywheel });
} catch (err) {
  // TODO: Handle 'err' of type AmazonComprehend.UpdateFlywheelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.amazonComprehend
  .updateFlywheel({ xAmzTarget: XAmzTarget35.Comprehend20171127UpdateFlywheel })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget35](src/models/xamz-target35.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.amazonComprehend.updateFlywheel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[AmazonComprehend.UpdateFlywheelError](src/resources/amazon-comprehend.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.amazonComprehend.updateFlywheel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, AmazonComprehend.UpdateFlywheelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/resources/operations.ts)

<details>
<summary><code>classifyDocument2(request: Operations.ClassifyDocument2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ClassifyDocument2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a classification request to analyze a single document in real-time. ClassifyDocument supports the following model types: Custom classifier - a custom model that you have created and trained. For input, you can provide plain text, a single-page document (PDF, Word, or image), or Amazon Textract API output. For more information, see Custom classification in the Amazon Comprehend Developer Guide. Prompt safety classifier - Amazon Comprehend provides a pre-trained model for classifying input prompts for generative AI applications. For input, you provide English plain text input. For prompt safety classification, the response includes only the Classes field. For more information about prompt safety classifiers, see Prompt safety classification in the Amazon Comprehend Developer Guide. If the system detects errors while processing a page in the input document, the API response includes an Errors field that describes the errors. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.classifyDocument2({
    xAmzTarget: XAmzTargetAmazonComprehendOperationsApi.Comprehend20171127ClassifyDocument,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ClassifyDocument2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .classifyDocument2({
    xAmzTarget: XAmzTargetAmazonComprehendOperationsApi.Comprehend20171127ClassifyDocument,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTargetAmazonComprehendOperationsApi](src/models/xamz-target-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.classifyDocument2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ClassifyDocument2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.classifyDocument2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ClassifyDocument2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>containsPiiEntities2(request: Operations.ContainsPiiEntities2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.ContainsPiiEntities2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.containsPiiEntities2({
    xAmzTarget: XAmzTarget1AmazonComprehendOperationsApi.Comprehend20171127ContainsPiiEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.ContainsPiiEntities2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .containsPiiEntities2({
    xAmzTarget: XAmzTarget1AmazonComprehendOperationsApi.Comprehend20171127ContainsPiiEntities,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget1AmazonComprehendOperationsApi](src/models/xamz-target1-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.containsPiiEntities2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.ContainsPiiEntities2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.containsPiiEntities2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.ContainsPiiEntities2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectDominantLanguage2(request: Operations.DetectDominantLanguage2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectDominantLanguage2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see Amazon Comprehend Supported Languages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectDominantLanguage2({
    xAmzTarget: XAmzTarget2AmazonComprehendOperationsApi.Comprehend20171127DetectDominantLanguage,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectDominantLanguage2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectDominantLanguage2({
    xAmzTarget: XAmzTarget2AmazonComprehendOperationsApi.Comprehend20171127DetectDominantLanguage,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget2AmazonComprehendOperationsApi](src/models/xamz-target2-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectDominantLanguage2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectDominantLanguage2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectDominantLanguage2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectDominantLanguage2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectEntities2(request: Operations.DetectEntities2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectEntities2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see Entities in the Comprehend Developer Guide. When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). If the system detects errors while processing a page in the input document, the API response includes an entry in Errors for each error. If the system detects a document-level error in your input document, the API returns an InvalidRequestException error response. For details about this exception, see Errors in semi-structured documents in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectEntities2({
    xAmzTarget: XAmzTarget3AmazonComprehendOperationsApi.Comprehend20171127DetectEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectEntities2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectEntities2({ xAmzTarget: XAmzTarget3AmazonComprehendOperationsApi.Comprehend20171127DetectEntities })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget3AmazonComprehendOperationsApi](src/models/xamz-target3-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectEntities2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectEntities2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectEntities2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectEntities2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectKeyPhrases2(request: Operations.DetectKeyPhrases2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectKeyPhrases2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Detects the key noun phrases found in the text.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectKeyPhrases2({
    xAmzTarget: XAmzTarget4AmazonComprehendOperationsApi.Comprehend20171127DetectKeyPhrases,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectKeyPhrases2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectKeyPhrases2({
    xAmzTarget: XAmzTarget4AmazonComprehendOperationsApi.Comprehend20171127DetectKeyPhrases,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget4AmazonComprehendOperationsApi](src/models/xamz-target4-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectKeyPhrases2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectKeyPhrases2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectKeyPhrases2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectKeyPhrases2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectPiiEntities2(request: Operations.DetectPiiEntities2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectPiiEntities2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectPiiEntities2({
    xAmzTarget: XAmzTarget5AmazonComprehendOperationsApi.Comprehend20171127DetectPiiEntities,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectPiiEntities2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectPiiEntities2({
    xAmzTarget: XAmzTarget5AmazonComprehendOperationsApi.Comprehend20171127DetectPiiEntities,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget5AmazonComprehendOperationsApi](src/models/xamz-target5-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectPiiEntities2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectPiiEntities2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectPiiEntities2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectPiiEntities2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectSentiment2(request: Operations.DetectSentiment2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectSentiment2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectSentiment2({
    xAmzTarget: XAmzTarget6AmazonComprehendOperationsApi.Comprehend20171127DetectSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectSentiment2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectSentiment2({
    xAmzTarget: XAmzTarget6AmazonComprehendOperationsApi.Comprehend20171127DetectSentiment,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget6AmazonComprehendOperationsApi](src/models/xamz-target6-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectSentiment2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectSentiment2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectSentiment2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectSentiment2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectSyntax2(request: Operations.DetectSyntax2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectSyntax2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects text for syntax and the part of speech of words in the document. For more information, see Syntax in the Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectSyntax2({
    xAmzTarget: XAmzTarget7AmazonComprehendOperationsApi.Comprehend20171127DetectSyntax,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectSyntax2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectSyntax2({ xAmzTarget: XAmzTarget7AmazonComprehendOperationsApi.Comprehend20171127DetectSyntax })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget7AmazonComprehendOperationsApi](src/models/xamz-target7-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectSyntax2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectSyntax2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectSyntax2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectSyntax2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectTargetedSentiment2(request: Operations.DetectTargetedSentiment2Request, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectTargetedSentiment2Error&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectTargetedSentiment2({
    xAmzTarget: XAmzTarget8AmazonComprehendOperationsApi.Comprehend20171127DetectTargetedSentiment,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectTargetedSentiment2Error, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectTargetedSentiment2({
    xAmzTarget: XAmzTarget8AmazonComprehendOperationsApi.Comprehend20171127DetectTargetedSentiment,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget8AmazonComprehendOperationsApi](src/models/xamz-target8-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectTargetedSentiment2(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectTargetedSentiment2Error](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectTargetedSentiment2(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectTargetedSentiment2Error&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>detectToxicContent(request: Operations.DetectToxicContentRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, Operations.DetectToxicContentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Performs toxicity analysis on the list of text strings that you provide as input. The API response contains a results list that matches the size of the input list. For more information about toxicity detection, see Toxicity detection in the Amazon Comprehend Developer Guide.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.operations.detectToxicContent({
    xAmzTarget: XAmzTarget9AmazonComprehendOperationsApi.Comprehend20171127DetectToxicContent,
  });
} catch (err) {
  // TODO: Handle 'err' of type Operations.DetectToxicContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.operations
  .detectToxicContent({
    xAmzTarget: XAmzTarget9AmazonComprehendOperationsApi.Comprehend20171127DetectToxicContent,
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>xAmzTarget</code> | <code>[XAmzTarget9AmazonComprehendOperationsApi](src/models/xamz-target9-amazon-comprehend-operations-api.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.operations.detectToxicContent(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Operations.DetectToxicContentError](src/resources/operations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.operations.detectToxicContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Operations.DetectToxicContentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[AmazonComprehendError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

