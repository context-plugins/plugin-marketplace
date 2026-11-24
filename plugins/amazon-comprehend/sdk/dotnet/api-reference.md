# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonComprehendClient](src/AmazonComprehend/AmazonComprehendClient.cs)

## AmazonComprehendApi

> Source: [AmazonComprehendApi](src/AmazonComprehend/Api/AmazonComprehendApi.cs)

<details>
<summary><code>Task BatchDetectDominantLanguage(BatchDetectDominantLanguageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectDominantLanguage(new BatchDetectDominantLanguageOperationRequest
    {
        XAmzTarget = XAmzTarget.Comprehend20171127BatchDetectDominantLanguage,
    });
}
catch (ApiException<BatchDetectDominantLanguageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectDominantLanguageOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectDominantLanguageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectDominantLanguageError](src/AmazonComprehend/Errors/BatchDetectDominantLanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchDetectEntities(BatchDetectEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectEntities(new BatchDetectEntitiesOperationRequest
    {
        XAmzTarget = XAmzTarget1.Comprehend20171127BatchDetectEntities,
    });
}
catch (ApiException<BatchDetectEntitiesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectEntitiesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectEntitiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectEntitiesError](src/AmazonComprehend/Errors/BatchDetectEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchDetectKeyPhrases(BatchDetectKeyPhrasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectKeyPhrases(new BatchDetectKeyPhrasesOperationRequest
    {
        XAmzTarget = XAmzTarget2.Comprehend20171127BatchDetectKeyPhrases,
    });
}
catch (ApiException<BatchDetectKeyPhrasesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectKeyPhrasesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectKeyPhrasesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectKeyPhrasesError](src/AmazonComprehend/Errors/BatchDetectKeyPhrasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchDetectSentiment(BatchDetectSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectSentiment(new BatchDetectSentimentOperationRequest
    {
        XAmzTarget = XAmzTarget3.Comprehend20171127BatchDetectSentiment,
    });
}
catch (ApiException<BatchDetectSentimentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectSentimentOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectSentimentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectSentimentError](src/AmazonComprehend/Errors/BatchDetectSentimentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchDetectSyntax(BatchDetectSyntaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectSyntax(new BatchDetectSyntaxOperationRequest
    {
        XAmzTarget = XAmzTarget4.Comprehend20171127BatchDetectSyntax,
    });
}
catch (ApiException<BatchDetectSyntaxError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectSyntaxOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectSyntaxOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectSyntaxError](src/AmazonComprehend/Errors/BatchDetectSyntaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task BatchDetectTargetedSentiment(BatchDetectTargetedSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.BatchDetectTargetedSentiment(new BatchDetectTargetedSentimentOperationRequest
    {
        XAmzTarget = XAmzTarget5.Comprehend20171127BatchDetectTargetedSentiment,
    });
}
catch (ApiException<BatchDetectTargetedSentimentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BatchDetectTargetedSentimentOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/BatchDetectTargetedSentimentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[BatchDetectTargetedSentimentError](src/AmazonComprehend/Errors/BatchDetectTargetedSentimentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ClassifyDocument(ClassifyDocumentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ClassifyDocument(new ClassifyDocumentOperationRequest
    {
        XAmzTarget = XAmzTarget6.Comprehend20171127ClassifyDocument,
    });
}
catch (ApiException<ClassifyDocumentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClassifyDocumentOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ClassifyDocumentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ClassifyDocumentError](src/AmazonComprehend/Errors/ClassifyDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ContainsPiiEntities(ContainsPiiEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ContainsPiiEntities(new ContainsPiiEntitiesOperationRequest
    {
        XAmzTarget = XAmzTarget7.Comprehend20171127ContainsPiiEntities,
    });
}
catch (ApiException<ContainsPiiEntitiesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContainsPiiEntitiesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ContainsPiiEntitiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ContainsPiiEntitiesError](src/AmazonComprehend/Errors/ContainsPiiEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateDataset(CreateDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.CreateDataset(new CreateDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget15.Comprehend20171127CreateDataset,
    });
}
catch (ApiException<CreateDatasetError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDatasetOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/CreateDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[CreateDatasetError](src/AmazonComprehend/Errors/CreateDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateDocumentClassifier(CreateDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.CreateDocumentClassifier(new CreateDocumentClassifierOperationRequest
    {
        XAmzTarget = XAmzTarget18.Comprehend20171127CreateDocumentClassifier,
    });
}
catch (ApiException<CreateDocumentClassifierError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateDocumentClassifierOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/CreateDocumentClassifierOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[CreateDocumentClassifierError](src/AmazonComprehend/Errors/CreateDocumentClassifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateEndpoint(CreateEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.CreateEndpoint(new CreateEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget22.Comprehend20171127CreateEndpoint,
    });
}
catch (ApiException<CreateEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEndpointOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/CreateEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[CreateEndpointError](src/AmazonComprehend/Errors/CreateEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateEntityRecognizer(CreateEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.CreateEntityRecognizer(new CreateEntityRecognizerOperationRequest
    {
        XAmzTarget = XAmzTarget27.Comprehend20171127CreateEntityRecognizer,
    });
}
catch (ApiException<CreateEntityRecognizerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateEntityRecognizerOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/CreateEntityRecognizerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[CreateEntityRecognizerError](src/AmazonComprehend/Errors/CreateEntityRecognizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateFlywheel(CreateFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.CreateFlywheel(new CreateFlywheelOperationRequest
    {
        XAmzTarget = XAmzTarget31.Comprehend20171127CreateFlywheel,
    });
}
catch (ApiException<CreateFlywheelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateFlywheelOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/CreateFlywheelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[CreateFlywheelError](src/AmazonComprehend/Errors/CreateFlywheelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteDocumentClassifier(DeleteDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DeleteDocumentClassifier(new DeleteDocumentClassifierOperationRequest
    {
        XAmzTarget = XAmzTarget19.Comprehend20171127DeleteDocumentClassifier,
    });
}
catch (ApiException<DeleteDocumentClassifierError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocumentClassifierOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteDocumentClassifierOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DeleteDocumentClassifierError](src/AmazonComprehend/Errors/DeleteDocumentClassifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEndpoint(DeleteEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DeleteEndpoint(new DeleteEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget23.Comprehend20171127DeleteEndpoint,
    });
}
catch (ApiException<DeleteEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEndpointOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DeleteEndpointError](src/AmazonComprehend/Errors/DeleteEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteEntityRecognizer(DeleteEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DeleteEntityRecognizer(new DeleteEntityRecognizerOperationRequest
    {
        XAmzTarget = XAmzTarget28.Comprehend20171127DeleteEntityRecognizer,
    });
}
catch (ApiException<DeleteEntityRecognizerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteEntityRecognizerOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteEntityRecognizerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DeleteEntityRecognizerError](src/AmazonComprehend/Errors/DeleteEntityRecognizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFlywheel(DeleteFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DeleteFlywheel(new DeleteFlywheelOperationRequest
    {
        XAmzTarget = XAmzTarget32.Comprehend20171127DeleteFlywheel,
    });
}
catch (ApiException<DeleteFlywheelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteFlywheelOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteFlywheelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DeleteFlywheelError](src/AmazonComprehend/Errors/DeleteFlywheelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteResourcePolicy(DeleteResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DeleteResourcePolicy(new DeleteResourcePolicyOperationRequest
    {
        XAmzTarget = XAmzTarget36.Comprehend20171127DeleteResourcePolicy,
    });
}
catch (ApiException<DeleteResourcePolicyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteResourcePolicyOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DeleteResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DeleteResourcePolicyError](src/AmazonComprehend/Errors/DeleteResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDataset(DescribeDatasetOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeDataset(new DescribeDatasetOperationRequest
    {
        XAmzTarget = XAmzTarget16.Comprehend20171127DescribeDataset,
    });
}
catch (ApiException<DescribeDatasetError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDatasetOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDatasetOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeDatasetError](src/AmazonComprehend/Errors/DescribeDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDocumentClassificationJob(DescribeDocumentClassificationJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeDocumentClassificationJob(
        new DescribeDocumentClassificationJobOperationRequest
        {
            XAmzTarget = XAmzTarget39.Comprehend20171127DescribeDocumentClassificationJob,
        });
}
catch (ApiException<DescribeDocumentClassificationJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDocumentClassificationJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDocumentClassificationJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeDocumentClassificationJobError](src/AmazonComprehend/Errors/DescribeDocumentClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDocumentClassifier(DescribeDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeDocumentClassifier(new DescribeDocumentClassifierOperationRequest
    {
        XAmzTarget = XAmzTarget20.Comprehend20171127DescribeDocumentClassifier,
    });
}
catch (ApiException<DescribeDocumentClassifierError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDocumentClassifierOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDocumentClassifierOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeDocumentClassifierError](src/AmazonComprehend/Errors/DescribeDocumentClassifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeDominantLanguageDetectionJob(DescribeDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeDominantLanguageDetectionJob(
        new DescribeDominantLanguageDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget42.Comprehend20171127DescribeDominantLanguageDetectionJob,
        });
}
catch (ApiException<DescribeDominantLanguageDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeDominantLanguageDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeDominantLanguageDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeDominantLanguageDetectionJobError](src/AmazonComprehend/Errors/DescribeDominantLanguageDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeEndpoint(DescribeEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeEndpoint(new DescribeEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget24.Comprehend20171127DescribeEndpoint,
    });
}
catch (ApiException<DescribeEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeEndpointOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeEndpointError](src/AmazonComprehend/Errors/DescribeEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeEntitiesDetectionJob(DescribeEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeEntitiesDetectionJob(new DescribeEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget46.Comprehend20171127DescribeEntitiesDetectionJob,
    });
}
catch (ApiException<DescribeEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeEntitiesDetectionJobError](src/AmazonComprehend/Errors/DescribeEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeEntityRecognizer(DescribeEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeEntityRecognizer(new DescribeEntityRecognizerOperationRequest
    {
        XAmzTarget = XAmzTarget29.Comprehend20171127DescribeEntityRecognizer,
    });
}
catch (ApiException<DescribeEntityRecognizerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeEntityRecognizerOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEntityRecognizerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeEntityRecognizerError](src/AmazonComprehend/Errors/DescribeEntityRecognizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeEventsDetectionJob(DescribeEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeEventsDetectionJob(new DescribeEventsDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget50.Comprehend20171127DescribeEventsDetectionJob,
    });
}
catch (ApiException<DescribeEventsDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeEventsDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeEventsDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeEventsDetectionJobError](src/AmazonComprehend/Errors/DescribeEventsDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeFlywheel(DescribeFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeFlywheel(new DescribeFlywheelOperationRequest
    {
        XAmzTarget = XAmzTarget33.Comprehend20171127DescribeFlywheel,
    });
}
catch (ApiException<DescribeFlywheelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeFlywheelOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeFlywheelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeFlywheelError](src/AmazonComprehend/Errors/DescribeFlywheelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeFlywheelIteration(DescribeFlywheelIterationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeFlywheelIteration(new DescribeFlywheelIterationOperationRequest
    {
        XAmzTarget = XAmzTarget54.Comprehend20171127DescribeFlywheelIteration,
    });
}
catch (ApiException<DescribeFlywheelIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeFlywheelIterationOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeFlywheelIterationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeFlywheelIterationError](src/AmazonComprehend/Errors/DescribeFlywheelIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeKeyPhrasesDetectionJob(DescribeKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeKeyPhrasesDetectionJob(new DescribeKeyPhrasesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget56.Comprehend20171127DescribeKeyPhrasesDetectionJob,
    });
}
catch (ApiException<DescribeKeyPhrasesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeKeyPhrasesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeKeyPhrasesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeKeyPhrasesDetectionJobError](src/AmazonComprehend/Errors/DescribeKeyPhrasesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribePiiEntitiesDetectionJob(DescribePiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribePiiEntitiesDetectionJob(new DescribePiiEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget60.Comprehend20171127DescribePiiEntitiesDetectionJob,
    });
}
catch (ApiException<DescribePiiEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribePiiEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribePiiEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribePiiEntitiesDetectionJobError](src/AmazonComprehend/Errors/DescribePiiEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeResourcePolicy(DescribeResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeResourcePolicy(new DescribeResourcePolicyOperationRequest
    {
        XAmzTarget = XAmzTarget37.Comprehend20171127DescribeResourcePolicy,
    });
}
catch (ApiException<DescribeResourcePolicyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeResourcePolicyOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeResourcePolicyError](src/AmazonComprehend/Errors/DescribeResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeSentimentDetectionJob(DescribeSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeSentimentDetectionJob(new DescribeSentimentDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget64.Comprehend20171127DescribeSentimentDetectionJob,
    });
}
catch (ApiException<DescribeSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeSentimentDetectionJobError](src/AmazonComprehend/Errors/DescribeSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTargetedSentimentDetectionJob(DescribeTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeTargetedSentimentDetectionJob(
        new DescribeTargetedSentimentDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget68.Comprehend20171127DescribeTargetedSentimentDetectionJob,
        });
}
catch (ApiException<DescribeTargetedSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTargetedSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeTargetedSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeTargetedSentimentDetectionJobError](src/AmazonComprehend/Errors/DescribeTargetedSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeTopicsDetectionJob(DescribeTopicsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DescribeTopicsDetectionJob(new DescribeTopicsDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget72.Comprehend20171127DescribeTopicsDetectionJob,
    });
}
catch (ApiException<DescribeTopicsDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DescribeTopicsDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DescribeTopicsDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DescribeTopicsDetectionJobError](src/AmazonComprehend/Errors/DescribeTopicsDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectDominantLanguage(DetectDominantLanguageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectDominantLanguage(new DetectDominantLanguageOperationRequest
    {
        XAmzTarget = XAmzTarget8.Comprehend20171127DetectDominantLanguage,
    });
}
catch (ApiException<DetectDominantLanguageError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectDominantLanguageOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectDominantLanguageOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectDominantLanguageError](src/AmazonComprehend/Errors/DetectDominantLanguageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectEntities(DetectEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectEntities(new DetectEntitiesOperationRequest
    {
        XAmzTarget = XAmzTarget9.Comprehend20171127DetectEntities,
    });
}
catch (ApiException<DetectEntitiesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectEntitiesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectEntitiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectEntitiesError](src/AmazonComprehend/Errors/DetectEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectKeyPhrases(DetectKeyPhrasesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectKeyPhrases(new DetectKeyPhrasesOperationRequest
    {
        XAmzTarget = XAmzTarget10.Comprehend20171127DetectKeyPhrases,
    });
}
catch (ApiException<DetectKeyPhrasesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectKeyPhrasesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectKeyPhrasesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectKeyPhrasesError](src/AmazonComprehend/Errors/DetectKeyPhrasesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectPiiEntities(DetectPiiEntitiesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectPiiEntities(new DetectPiiEntitiesOperationRequest
    {
        XAmzTarget = XAmzTarget11.Comprehend20171127DetectPiiEntities,
    });
}
catch (ApiException<DetectPiiEntitiesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectPiiEntitiesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectPiiEntitiesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectPiiEntitiesError](src/AmazonComprehend/Errors/DetectPiiEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectSentiment(DetectSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectSentiment(new DetectSentimentOperationRequest
    {
        XAmzTarget = XAmzTarget12.Comprehend20171127DetectSentiment,
    });
}
catch (ApiException<DetectSentimentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectSentimentOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectSentimentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectSentimentError](src/AmazonComprehend/Errors/DetectSentimentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectSyntax(DetectSyntaxOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectSyntax(new DetectSyntaxOperationRequest
    {
        XAmzTarget = XAmzTarget13.Comprehend20171127DetectSyntax,
    });
}
catch (ApiException<DetectSyntaxError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectSyntaxOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectSyntaxOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectSyntaxError](src/AmazonComprehend/Errors/DetectSyntaxError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectTargetedSentiment(DetectTargetedSentimentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.DetectTargetedSentiment(new DetectTargetedSentimentOperationRequest
    {
        XAmzTarget = XAmzTarget14.Comprehend20171127DetectTargetedSentiment,
    });
}
catch (ApiException<DetectTargetedSentimentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectTargetedSentimentOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/DetectTargetedSentimentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectTargetedSentimentError](src/AmazonComprehend/Errors/DetectTargetedSentimentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ImportModel(ImportModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ImportModel(new ImportModelOperationRequest
    {
        XAmzTarget = XAmzTarget75.Comprehend20171127ImportModel,
    });
}
catch (ApiException<ImportModelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ImportModelOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ImportModelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ImportModelError](src/AmazonComprehend/Errors/ImportModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDatasets(ListDatasetsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListDatasets(new ListDatasetsOperationRequest
    {
        XAmzTarget = XAmzTarget17.Comprehend20171127ListDatasets,
    });
}
catch (ApiException<ListDatasetsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDatasetsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListDatasetsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListDatasetsError](src/AmazonComprehend/Errors/ListDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDocumentClassificationJobs(ListDocumentClassificationJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListDocumentClassificationJobs(new ListDocumentClassificationJobsOperationRequest
    {
        XAmzTarget = XAmzTarget40.Comprehend20171127ListDocumentClassificationJobs,
    });
}
catch (ApiException<ListDocumentClassificationJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentClassificationJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassificationJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListDocumentClassificationJobsError](src/AmazonComprehend/Errors/ListDocumentClassificationJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDocumentClassifierSummaries(ListDocumentClassifierSummariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListDocumentClassifierSummaries(new ListDocumentClassifierSummariesOperationRequest
    {
        XAmzTarget = XAmzTarget76.Comprehend20171127ListDocumentClassifierSummaries,
    });
}
catch (ApiException<ListDocumentClassifierSummariesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentClassifierSummariesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassifierSummariesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListDocumentClassifierSummariesError](src/AmazonComprehend/Errors/ListDocumentClassifierSummariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDocumentClassifiers(ListDocumentClassifiersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListDocumentClassifiers(new ListDocumentClassifiersOperationRequest
    {
        XAmzTarget = XAmzTarget21.Comprehend20171127ListDocumentClassifiers,
    });
}
catch (ApiException<ListDocumentClassifiersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentClassifiersOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListDocumentClassifiersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListDocumentClassifiersError](src/AmazonComprehend/Errors/ListDocumentClassifiersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListDominantLanguageDetectionJobs(ListDominantLanguageDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListDominantLanguageDetectionJobs(
        new ListDominantLanguageDetectionJobsOperationRequest
        {
            XAmzTarget = XAmzTarget43.Comprehend20171127ListDominantLanguageDetectionJobs,
        });
}
catch (ApiException<ListDominantLanguageDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDominantLanguageDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListDominantLanguageDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListDominantLanguageDetectionJobsError](src/AmazonComprehend/Errors/ListDominantLanguageDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListEndpoints(ListEndpointsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListEndpoints(new ListEndpointsOperationRequest
    {
        XAmzTarget = XAmzTarget25.Comprehend20171127ListEndpoints,
    });
}
catch (ApiException<ListEndpointsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEndpointsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListEndpointsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListEndpointsError](src/AmazonComprehend/Errors/ListEndpointsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListEntitiesDetectionJobs(ListEntitiesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListEntitiesDetectionJobs(new ListEntitiesDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget47.Comprehend20171127ListEntitiesDetectionJobs,
    });
}
catch (ApiException<ListEntitiesDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEntitiesDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntitiesDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListEntitiesDetectionJobsError](src/AmazonComprehend/Errors/ListEntitiesDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListEntityRecognizerSummaries(ListEntityRecognizerSummariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListEntityRecognizerSummaries(new ListEntityRecognizerSummariesOperationRequest
    {
        XAmzTarget = XAmzTarget77.Comprehend20171127ListEntityRecognizerSummaries,
    });
}
catch (ApiException<ListEntityRecognizerSummariesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEntityRecognizerSummariesOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntityRecognizerSummariesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListEntityRecognizerSummariesError](src/AmazonComprehend/Errors/ListEntityRecognizerSummariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListEntityRecognizers(ListEntityRecognizersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListEntityRecognizers(new ListEntityRecognizersOperationRequest
    {
        XAmzTarget = XAmzTarget30.Comprehend20171127ListEntityRecognizers,
    });
}
catch (ApiException<ListEntityRecognizersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEntityRecognizersOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListEntityRecognizersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListEntityRecognizersError](src/AmazonComprehend/Errors/ListEntityRecognizersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListEventsDetectionJobs(ListEventsDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListEventsDetectionJobs(new ListEventsDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget51.Comprehend20171127ListEventsDetectionJobs,
    });
}
catch (ApiException<ListEventsDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListEventsDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListEventsDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListEventsDetectionJobsError](src/AmazonComprehend/Errors/ListEventsDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFlywheelIterationHistory(ListFlywheelIterationHistoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListFlywheelIterationHistory(new ListFlywheelIterationHistoryOperationRequest
    {
        XAmzTarget = XAmzTarget78.Comprehend20171127ListFlywheelIterationHistory,
    });
}
catch (ApiException<ListFlywheelIterationHistoryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFlywheelIterationHistoryOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListFlywheelIterationHistoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListFlywheelIterationHistoryError](src/AmazonComprehend/Errors/ListFlywheelIterationHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListFlywheels(ListFlywheelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListFlywheels(new ListFlywheelsOperationRequest
    {
        XAmzTarget = XAmzTarget34.Comprehend20171127ListFlywheels,
    });
}
catch (ApiException<ListFlywheelsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListFlywheelsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListFlywheelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListFlywheelsError](src/AmazonComprehend/Errors/ListFlywheelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListKeyPhrasesDetectionJobs(ListKeyPhrasesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListKeyPhrasesDetectionJobs(new ListKeyPhrasesDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget57.Comprehend20171127ListKeyPhrasesDetectionJobs,
    });
}
catch (ApiException<ListKeyPhrasesDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListKeyPhrasesDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListKeyPhrasesDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListKeyPhrasesDetectionJobsError](src/AmazonComprehend/Errors/ListKeyPhrasesDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListPiiEntitiesDetectionJobs(ListPiiEntitiesDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListPiiEntitiesDetectionJobs(new ListPiiEntitiesDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget61.Comprehend20171127ListPiiEntitiesDetectionJobs,
    });
}
catch (ApiException<ListPiiEntitiesDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPiiEntitiesDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListPiiEntitiesDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListPiiEntitiesDetectionJobsError](src/AmazonComprehend/Errors/ListPiiEntitiesDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListSentimentDetectionJobs(ListSentimentDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListSentimentDetectionJobs(new ListSentimentDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget65.Comprehend20171127ListSentimentDetectionJobs,
    });
}
catch (ApiException<ListSentimentDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSentimentDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListSentimentDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListSentimentDetectionJobsError](src/AmazonComprehend/Errors/ListSentimentDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTagsForResource(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        XAmzTarget = XAmzTarget79.Comprehend20171127ListTagsForResource,
    });
}
catch (ApiException<ListTagsForResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTagsForResourceOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonComprehend/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTargetedSentimentDetectionJobs(ListTargetedSentimentDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListTargetedSentimentDetectionJobs(
        new ListTargetedSentimentDetectionJobsOperationRequest
        {
            XAmzTarget = XAmzTarget69.Comprehend20171127ListTargetedSentimentDetectionJobs,
        });
}
catch (ApiException<ListTargetedSentimentDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTargetedSentimentDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListTargetedSentimentDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListTargetedSentimentDetectionJobsError](src/AmazonComprehend/Errors/ListTargetedSentimentDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTopicsDetectionJobs(ListTopicsDetectionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.ListTopicsDetectionJobs(new ListTopicsDetectionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget73.Comprehend20171127ListTopicsDetectionJobs,
    });
}
catch (ApiException<ListTopicsDetectionJobsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTopicsDetectionJobsOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/ListTopicsDetectionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ListTopicsDetectionJobsError](src/AmazonComprehend/Errors/ListTopicsDetectionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PutResourcePolicy(PutResourcePolicyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.PutResourcePolicy(new PutResourcePolicyOperationRequest
    {
        XAmzTarget = XAmzTarget38.Comprehend20171127PutResourcePolicy,
    });
}
catch (ApiException<PutResourcePolicyError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PutResourcePolicyOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/PutResourcePolicyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[PutResourcePolicyError](src/AmazonComprehend/Errors/PutResourcePolicyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartDocumentClassificationJob(StartDocumentClassificationJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartDocumentClassificationJob(new StartDocumentClassificationJobOperationRequest
    {
        XAmzTarget = XAmzTarget41.Comprehend20171127StartDocumentClassificationJob,
    });
}
catch (ApiException<StartDocumentClassificationJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartDocumentClassificationJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartDocumentClassificationJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartDocumentClassificationJobError](src/AmazonComprehend/Errors/StartDocumentClassificationJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartDominantLanguageDetectionJob(StartDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartDominantLanguageDetectionJob(
        new StartDominantLanguageDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget44.Comprehend20171127StartDominantLanguageDetectionJob,
        });
}
catch (ApiException<StartDominantLanguageDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartDominantLanguageDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartDominantLanguageDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartDominantLanguageDetectionJobError](src/AmazonComprehend/Errors/StartDominantLanguageDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartEntitiesDetectionJob(StartEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartEntitiesDetectionJob(new StartEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget48.Comprehend20171127StartEntitiesDetectionJob,
    });
}
catch (ApiException<StartEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartEntitiesDetectionJobError](src/AmazonComprehend/Errors/StartEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartEventsDetectionJob(StartEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartEventsDetectionJob(new StartEventsDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget52.Comprehend20171127StartEventsDetectionJob,
    });
}
catch (ApiException<StartEventsDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartEventsDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartEventsDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartEventsDetectionJobError](src/AmazonComprehend/Errors/StartEventsDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartFlywheelIteration(StartFlywheelIterationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartFlywheelIteration(new StartFlywheelIterationOperationRequest
    {
        XAmzTarget = XAmzTarget55.Comprehend20171127StartFlywheelIteration,
    });
}
catch (ApiException<StartFlywheelIterationError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartFlywheelIterationOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartFlywheelIterationOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartFlywheelIterationError](src/AmazonComprehend/Errors/StartFlywheelIterationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartKeyPhrasesDetectionJob(StartKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartKeyPhrasesDetectionJob(new StartKeyPhrasesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget58.Comprehend20171127StartKeyPhrasesDetectionJob,
    });
}
catch (ApiException<StartKeyPhrasesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartKeyPhrasesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartKeyPhrasesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartKeyPhrasesDetectionJobError](src/AmazonComprehend/Errors/StartKeyPhrasesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartPiiEntitiesDetectionJob(StartPiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartPiiEntitiesDetectionJob(new StartPiiEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget62.Comprehend20171127StartPiiEntitiesDetectionJob,
    });
}
catch (ApiException<StartPiiEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartPiiEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartPiiEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartPiiEntitiesDetectionJobError](src/AmazonComprehend/Errors/StartPiiEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartSentimentDetectionJob(StartSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartSentimentDetectionJob(new StartSentimentDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget66.Comprehend20171127StartSentimentDetectionJob,
    });
}
catch (ApiException<StartSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartSentimentDetectionJobError](src/AmazonComprehend/Errors/StartSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartTargetedSentimentDetectionJob(StartTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartTargetedSentimentDetectionJob(
        new StartTargetedSentimentDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget70.Comprehend20171127StartTargetedSentimentDetectionJob,
        });
}
catch (ApiException<StartTargetedSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTargetedSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartTargetedSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartTargetedSentimentDetectionJobError](src/AmazonComprehend/Errors/StartTargetedSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartTopicsDetectionJob(StartTopicsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StartTopicsDetectionJob(new StartTopicsDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget74.Comprehend20171127StartTopicsDetectionJob,
    });
}
catch (ApiException<StartTopicsDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartTopicsDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StartTopicsDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StartTopicsDetectionJobError](src/AmazonComprehend/Errors/StartTopicsDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopDominantLanguageDetectionJob(StopDominantLanguageDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopDominantLanguageDetectionJob(
        new StopDominantLanguageDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget45.Comprehend20171127StopDominantLanguageDetectionJob,
        });
}
catch (ApiException<StopDominantLanguageDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopDominantLanguageDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopDominantLanguageDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopDominantLanguageDetectionJobError](src/AmazonComprehend/Errors/StopDominantLanguageDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopEntitiesDetectionJob(StopEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopEntitiesDetectionJob(new StopEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget49.Comprehend20171127StopEntitiesDetectionJob,
    });
}
catch (ApiException<StopEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopEntitiesDetectionJobError](src/AmazonComprehend/Errors/StopEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopEventsDetectionJob(StopEventsDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopEventsDetectionJob(new StopEventsDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget53.Comprehend20171127StopEventsDetectionJob,
    });
}
catch (ApiException<StopEventsDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopEventsDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopEventsDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopEventsDetectionJobError](src/AmazonComprehend/Errors/StopEventsDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopKeyPhrasesDetectionJob(StopKeyPhrasesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopKeyPhrasesDetectionJob(new StopKeyPhrasesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget59.Comprehend20171127StopKeyPhrasesDetectionJob,
    });
}
catch (ApiException<StopKeyPhrasesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopKeyPhrasesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopKeyPhrasesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopKeyPhrasesDetectionJobError](src/AmazonComprehend/Errors/StopKeyPhrasesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopPiiEntitiesDetectionJob(StopPiiEntitiesDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopPiiEntitiesDetectionJob(new StopPiiEntitiesDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget63.Comprehend20171127StopPiiEntitiesDetectionJob,
    });
}
catch (ApiException<StopPiiEntitiesDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopPiiEntitiesDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopPiiEntitiesDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopPiiEntitiesDetectionJobError](src/AmazonComprehend/Errors/StopPiiEntitiesDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopSentimentDetectionJob(StopSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopSentimentDetectionJob(new StopSentimentDetectionJobOperationRequest
    {
        XAmzTarget = XAmzTarget67.Comprehend20171127StopSentimentDetectionJob,
    });
}
catch (ApiException<StopSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopSentimentDetectionJobError](src/AmazonComprehend/Errors/StopSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopTargetedSentimentDetectionJob(StopTargetedSentimentDetectionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopTargetedSentimentDetectionJob(
        new StopTargetedSentimentDetectionJobOperationRequest
        {
            XAmzTarget = XAmzTarget71.Comprehend20171127StopTargetedSentimentDetectionJob,
        });
}
catch (ApiException<StopTargetedSentimentDetectionJobError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopTargetedSentimentDetectionJobOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopTargetedSentimentDetectionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopTargetedSentimentDetectionJobError](src/AmazonComprehend/Errors/StopTargetedSentimentDetectionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopTrainingDocumentClassifier(StopTrainingDocumentClassifierOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopTrainingDocumentClassifier(new StopTrainingDocumentClassifierOperationRequest
    {
        XAmzTarget = XAmzTarget80.Comprehend20171127StopTrainingDocumentClassifier,
    });
}
catch (ApiException<StopTrainingDocumentClassifierError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopTrainingDocumentClassifierOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopTrainingDocumentClassifierOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopTrainingDocumentClassifierError](src/AmazonComprehend/Errors/StopTrainingDocumentClassifierError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StopTrainingEntityRecognizer(StopTrainingEntityRecognizerOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.StopTrainingEntityRecognizer(new StopTrainingEntityRecognizerOperationRequest
    {
        XAmzTarget = XAmzTarget81.Comprehend20171127StopTrainingEntityRecognizer,
    });
}
catch (ApiException<StopTrainingEntityRecognizerError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StopTrainingEntityRecognizerOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/StopTrainingEntityRecognizerOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[StopTrainingEntityRecognizerError](src/AmazonComprehend/Errors/StopTrainingEntityRecognizerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TagResource(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget82.Comprehend20171127TagResource,
    });
}
catch (ApiException<TagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TagResourceOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonComprehend/Errors/TagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UntagResource(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget83.Comprehend20171127UntagResource,
    });
}
catch (ApiException<UntagResourceError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UntagResourceOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonComprehend/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateEndpoint(UpdateEndpointOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.UpdateEndpoint(new UpdateEndpointOperationRequest
    {
        XAmzTarget = XAmzTarget26.Comprehend20171127UpdateEndpoint,
    });
}
catch (ApiException<UpdateEndpointError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateEndpointOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/UpdateEndpointOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[UpdateEndpointError](src/AmazonComprehend/Errors/UpdateEndpointError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateFlywheel(UpdateFlywheelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.AmazonComprehendApi.UpdateFlywheel(new UpdateFlywheelOperationRequest
    {
        XAmzTarget = XAmzTarget35.Comprehend20171127UpdateFlywheel,
    });
}
catch (ApiException<UpdateFlywheelError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateFlywheelOperationRequest](src/AmazonComprehend/Requests/AmazonComprehendApi/UpdateFlywheelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[UpdateFlywheelError](src/AmazonComprehend/Errors/UpdateFlywheelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonComprehend/Api/Operations.cs)

<details>
<summary><code>Task ClassifyDocument2(ClassifyDocument2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ClassifyDocument2(new ClassifyDocument2Request
    {
        XAmzTarget = XAmzTargetAmazonComprehendOperationsApi.Comprehend20171127ClassifyDocument,
    });
}
catch (ApiException<ClassifyDocument2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClassifyDocument2Request](src/AmazonComprehend/Requests/Operations/ClassifyDocument2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ClassifyDocument2Error](src/AmazonComprehend/Errors/ClassifyDocument2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ContainsPiiEntities2(ContainsPiiEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.ContainsPiiEntities2(new ContainsPiiEntities2Request
    {
        XAmzTarget = XAmzTarget1AmazonComprehendOperationsApi.Comprehend20171127ContainsPiiEntities,
    });
}
catch (ApiException<ContainsPiiEntities2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ContainsPiiEntities2Request](src/AmazonComprehend/Requests/Operations/ContainsPiiEntities2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[ContainsPiiEntities2Error](src/AmazonComprehend/Errors/ContainsPiiEntities2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectDominantLanguage2(DetectDominantLanguage2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectDominantLanguage2(new DetectDominantLanguage2Request
    {
        XAmzTarget = XAmzTarget2AmazonComprehendOperationsApi.Comprehend20171127DetectDominantLanguage,
    });
}
catch (ApiException<DetectDominantLanguage2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectDominantLanguage2Request](src/AmazonComprehend/Requests/Operations/DetectDominantLanguage2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectDominantLanguage2Error](src/AmazonComprehend/Errors/DetectDominantLanguage2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectEntities2(DetectEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectEntities2(new DetectEntities2Request
    {
        XAmzTarget = XAmzTarget3AmazonComprehendOperationsApi.Comprehend20171127DetectEntities,
    });
}
catch (ApiException<DetectEntities2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectEntities2Request](src/AmazonComprehend/Requests/Operations/DetectEntities2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectEntities2Error](src/AmazonComprehend/Errors/DetectEntities2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectKeyPhrases2(DetectKeyPhrases2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectKeyPhrases2(new DetectKeyPhrases2Request
    {
        XAmzTarget = XAmzTarget4AmazonComprehendOperationsApi.Comprehend20171127DetectKeyPhrases,
    });
}
catch (ApiException<DetectKeyPhrases2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectKeyPhrases2Request](src/AmazonComprehend/Requests/Operations/DetectKeyPhrases2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectKeyPhrases2Error](src/AmazonComprehend/Errors/DetectKeyPhrases2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectPiiEntities2(DetectPiiEntities2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectPiiEntities2(new DetectPiiEntities2Request
    {
        XAmzTarget = XAmzTarget5AmazonComprehendOperationsApi.Comprehend20171127DetectPiiEntities,
    });
}
catch (ApiException<DetectPiiEntities2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectPiiEntities2Request](src/AmazonComprehend/Requests/Operations/DetectPiiEntities2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectPiiEntities2Error](src/AmazonComprehend/Errors/DetectPiiEntities2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectSentiment2(DetectSentiment2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectSentiment2(new DetectSentiment2Request
    {
        XAmzTarget = XAmzTarget6AmazonComprehendOperationsApi.Comprehend20171127DetectSentiment,
    });
}
catch (ApiException<DetectSentiment2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectSentiment2Request](src/AmazonComprehend/Requests/Operations/DetectSentiment2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectSentiment2Error](src/AmazonComprehend/Errors/DetectSentiment2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectSyntax2(DetectSyntax2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectSyntax2(new DetectSyntax2Request
    {
        XAmzTarget = XAmzTarget7AmazonComprehendOperationsApi.Comprehend20171127DetectSyntax,
    });
}
catch (ApiException<DetectSyntax2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectSyntax2Request](src/AmazonComprehend/Requests/Operations/DetectSyntax2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectSyntax2Error](src/AmazonComprehend/Errors/DetectSyntax2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectTargetedSentiment2(DetectTargetedSentiment2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectTargetedSentiment2(new DetectTargetedSentiment2Request
    {
        XAmzTarget = XAmzTarget8AmazonComprehendOperationsApi.Comprehend20171127DetectTargetedSentiment,
    });
}
catch (ApiException<DetectTargetedSentiment2Error> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectTargetedSentiment2Request](src/AmazonComprehend/Requests/Operations/DetectTargetedSentiment2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectTargetedSentiment2Error](src/AmazonComprehend/Errors/DetectTargetedSentiment2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DetectToxicContent(DetectToxicContentOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.Operations.DetectToxicContent(new DetectToxicContentOperationRequest
    {
        XAmzTarget = XAmzTarget9AmazonComprehendOperationsApi.Comprehend20171127DetectToxicContent,
    });
}
catch (ApiException<DetectToxicContentError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DetectToxicContentOperationRequest](src/AmazonComprehend/Requests/Operations/DetectToxicContentOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonComprehend/Core/Exceptions/ApiException.cs)&lt;[DetectToxicContentError](src/AmazonComprehend/Errors/DetectToxicContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

