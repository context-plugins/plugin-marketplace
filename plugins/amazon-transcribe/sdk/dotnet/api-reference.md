# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AmazonTranscribeClient](src/AmazonTranscribe/AmazonTranscribeClient.cs)

## CallAnalyticsCategory

> Source: [CallAnalyticsCategory](src/AmazonTranscribe/Api/CallAnalyticsCategory.cs)

<details>
<summary><code>Task CreateCallAnalyticsCategory(CreateCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new Call Analytics category. All categories are automatically applied to your Call Analytics transcriptions. Note that in order to apply categories to your transcriptions, you must create them before submitting your transcription request, as categories cannot be applied retroactively. When creating a new category, you can use the InputType parameter to label the category as a POST_CALL or a REAL_TIME category. POST_CALL categories can only be applied to post-call transcriptions and REAL_TIME categories can only be applied to real-time transcriptions. If you do not include InputType, your category is created as a POST_CALL category by default. Call Analytics categories are composed of rules. For each category, you must create between 1 and 20 rules. Rules can include these parameters: , , , and . To update an existing category, see . To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsCategory.CreateCallAnalyticsCategory(new CreateCallAnalyticsCategoryOperationRequest
    {
        XAmzTarget = XAmzTarget.TranscribeCreateCallAnalyticsCategory,
    });
}
catch (ApiException<CreateCallAnalyticsCategoryError> ex)
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

<code>[CreateCallAnalyticsCategoryOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsCategory/CreateCallAnalyticsCategoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[CreateCallAnalyticsCategoryError](src/AmazonTranscribe/Errors/CreateCallAnalyticsCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteCallAnalyticsCategory(DeleteCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics category. To use this operation, specify the name of the category you want to delete using CategoryName. Category names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsCategory.DeleteCallAnalyticsCategory(new DeleteCallAnalyticsCategoryOperationRequest
    {
        XAmzTarget = XAmzTarget1.TranscribeDeleteCallAnalyticsCategory,
    });
}
catch (ApiException<DeleteCallAnalyticsCategoryError> ex)
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

<code>[DeleteCallAnalyticsCategoryOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsCategory/DeleteCallAnalyticsCategoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteCallAnalyticsCategoryError](src/AmazonTranscribe/Errors/DeleteCallAnalyticsCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetCallAnalyticsCategory(GetCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics category. To get a list of your Call Analytics categories, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsCategory.GetCallAnalyticsCategory(new GetCallAnalyticsCategoryOperationRequest
    {
        XAmzTarget = XAmzTarget2.TranscribeGetCallAnalyticsCategory,
    });
}
catch (ApiException<GetCallAnalyticsCategoryError> ex)
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

<code>[GetCallAnalyticsCategoryOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsCategory/GetCallAnalyticsCategoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetCallAnalyticsCategoryError](src/AmazonTranscribe/Errors/GetCallAnalyticsCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCallAnalyticsCategories(ListCallAnalyticsCategoriesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics categories, including all rules that make up each category. To get detailed information about a specific Call Analytics category, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsCategory.ListCallAnalyticsCategories(new ListCallAnalyticsCategoriesOperationRequest
    {
        XAmzTarget = XAmzTarget3.TranscribeListCallAnalyticsCategories,
    });
}
catch (ApiException<ListCallAnalyticsCategoriesError> ex)
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

<code>[ListCallAnalyticsCategoriesOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsCategory/ListCallAnalyticsCategoriesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListCallAnalyticsCategoriesError](src/AmazonTranscribe/Errors/ListCallAnalyticsCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateCallAnalyticsCategory(UpdateCallAnalyticsCategoryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the specified Call Analytics category with new rules. Note that the UpdateCallAnalyticsCategory operation overwrites all existing rules contained in the specified category. You cannot append additional rules onto an existing category. To create a new category, see .

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsCategory.UpdateCallAnalyticsCategory(new UpdateCallAnalyticsCategoryOperationRequest
    {
        XAmzTarget = XAmzTarget4.TranscribeUpdateCallAnalyticsCategory,
    });
}
catch (ApiException<UpdateCallAnalyticsCategoryError> ex)
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

<code>[UpdateCallAnalyticsCategoryOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsCategory/UpdateCallAnalyticsCategoryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UpdateCallAnalyticsCategoryError](src/AmazonTranscribe/Errors/UpdateCallAnalyticsCategoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CallAnalyticsJobApi

> Source: [CallAnalyticsJobApi](src/AmazonTranscribe/Api/CallAnalyticsJobApi.cs)

<details>
<summary><code>Task DeleteCallAnalyticsJob(DeleteCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsJobApi.DeleteCallAnalyticsJob(new DeleteCallAnalyticsJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi.TranscribeDeleteCallAnalyticsJob,
    });
}
catch (ApiException<DeleteCallAnalyticsJobError> ex)
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

<code>[DeleteCallAnalyticsJobOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsJobApi/DeleteCallAnalyticsJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteCallAnalyticsJobError](src/AmazonTranscribe/Errors/DeleteCallAnalyticsJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetCallAnalyticsJob(GetCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsJobApi.GetCallAnalyticsJob(new GetCallAnalyticsJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeGetCallAnalyticsJob,
    });
}
catch (ApiException<GetCallAnalyticsJobError> ex)
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

<code>[GetCallAnalyticsJobOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsJobApi/GetCallAnalyticsJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetCallAnalyticsJobError](src/AmazonTranscribe/Errors/GetCallAnalyticsJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListCallAnalyticsJobs(ListCallAnalyticsJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsJobApi.ListCallAnalyticsJobs(new ListCallAnalyticsJobsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeListCallAnalyticsJobs,
    });
}
catch (ApiException<ListCallAnalyticsJobsError> ex)
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

<code>[ListCallAnalyticsJobsOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsJobApi/ListCallAnalyticsJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListCallAnalyticsJobsError](src/AmazonTranscribe/Errors/ListCallAnalyticsJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartCallAnalyticsJob(StartCallAnalyticsJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CallAnalyticsJobApi.StartCallAnalyticsJob(new StartCallAnalyticsJobOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi.TranscribeStartCallAnalyticsJob,
    });
}
catch (ApiException<StartCallAnalyticsJobError> ex)
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

<code>[StartCallAnalyticsJobOperationRequest](src/AmazonTranscribe/Requests/CallAnalyticsJobApi/StartCallAnalyticsJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartCallAnalyticsJobError](src/AmazonTranscribe/Errors/StartCallAnalyticsJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LanguageModelApi

> Source: [LanguageModelApi](src/AmazonTranscribe/Api/LanguageModelApi.cs)

<details>
<summary><code>Task CreateLanguageModel(CreateLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom language model. When creating a new custom language model, you must specify: If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband (audio sample rates under 16,000 Hz) base model The location of your training and tuning files (this must be an Amazon S3 URI) The language of your model A unique name for your model

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LanguageModelApi.CreateLanguageModel(new CreateLanguageModelOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceLanguageModelApi.TranscribeCreateLanguageModel,
    });
}
catch (ApiException<CreateLanguageModelError> ex)
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

<code>[CreateLanguageModelOperationRequest](src/AmazonTranscribe/Requests/LanguageModelApi/CreateLanguageModelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[CreateLanguageModelError](src/AmazonTranscribe/Errors/CreateLanguageModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteLanguageModel(DeleteLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom language model. To use this operation, specify the name of the language model you want to delete using ModelName. custom language model names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LanguageModelApi.DeleteLanguageModel(new DeleteLanguageModelOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceLanguageModelApi.TranscribeDeleteLanguageModel,
    });
}
catch (ApiException<DeleteLanguageModelError> ex)
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

<code>[DeleteLanguageModelOperationRequest](src/AmazonTranscribe/Requests/LanguageModelApi/DeleteLanguageModelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteLanguageModelError](src/AmazonTranscribe/Errors/DeleteLanguageModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DescribeLanguageModel(DescribeLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom language model. This operation also shows if the base language model that you used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If you tried to create a new custom language model and the request wasn't successful, you can use DescribeLanguageModel to help identify the reason for this failure.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LanguageModelApi.DescribeLanguageModel(new DescribeLanguageModelOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceLanguageModelApi.TranscribeDescribeLanguageModel,
    });
}
catch (ApiException<DescribeLanguageModelError> ex)
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

<code>[DescribeLanguageModelOperationRequest](src/AmazonTranscribe/Requests/LanguageModelApi/DescribeLanguageModelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DescribeLanguageModelError](src/AmazonTranscribe/Errors/DescribeLanguageModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListLanguageModels(ListLanguageModelsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom language models that match the specified criteria. If no criteria are specified, all custom language models are returned. To get detailed information about a specific custom language model, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LanguageModelApi.ListLanguageModels(new ListLanguageModelsOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceLanguageModelApi.TranscribeListLanguageModels,
    });
}
catch (ApiException<ListLanguageModelsError> ex)
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

<code>[ListLanguageModelsOperationRequest](src/AmazonTranscribe/Requests/LanguageModelApi/ListLanguageModelsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListLanguageModelsError](src/AmazonTranscribe/Errors/ListLanguageModelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateLanguageModel(UpdateLanguageModelOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the encryption configuration for an existing custom language model. You can use this operation to change the KMS key used to encrypt your model artifacts. The model artifacts are re-encrypted in place. No model training is required. Your custom language model must not be in the IN_PROGRESS state when you call this operation. You cannot submit another update while a previous update is in progress. Use to check the current state of your model. Your custom language model remains available for transcription jobs while the update is being processed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LanguageModelApi.UpdateLanguageModel(new UpdateLanguageModelOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonTranscribeServiceLanguageModelApi.TranscribeUpdateLanguageModel,
    });
}
catch (ApiException<UpdateLanguageModelError> ex)
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

<code>[UpdateLanguageModelOperationRequest](src/AmazonTranscribe/Requests/LanguageModelApi/UpdateLanguageModelOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UpdateLanguageModelError](src/AmazonTranscribe/Errors/UpdateLanguageModelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalScribeJobApi

> Source: [MedicalScribeJobApi](src/AmazonTranscribe/Api/MedicalScribeJobApi.cs)

<details>
<summary><code>Task DeleteMedicalScribeJob(DeleteMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalScribeJobApi.DeleteMedicalScribeJob(new DeleteMedicalScribeJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi.TranscribeDeleteMedicalScribeJob,
    });
}
catch (ApiException<DeleteMedicalScribeJobError> ex)
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

<code>[DeleteMedicalScribeJobOperationRequest](src/AmazonTranscribe/Requests/MedicalScribeJobApi/DeleteMedicalScribeJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteMedicalScribeJobError](src/AmazonTranscribe/Errors/DeleteMedicalScribeJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetMedicalScribeJob(GetMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalScribeJobApi.GetMedicalScribeJob(new GetMedicalScribeJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi.TranscribeGetMedicalScribeJob,
    });
}
catch (ApiException<GetMedicalScribeJobError> ex)
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

<code>[GetMedicalScribeJobOperationRequest](src/AmazonTranscribe/Requests/MedicalScribeJobApi/GetMedicalScribeJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetMedicalScribeJobError](src/AmazonTranscribe/Errors/GetMedicalScribeJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMedicalScribeJobs(ListMedicalScribeJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalScribeJobApi.ListMedicalScribeJobs(new ListMedicalScribeJobsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApi.TranscribeListMedicalScribeJobs,
    });
}
catch (ApiException<ListMedicalScribeJobsError> ex)
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

<code>[ListMedicalScribeJobsOperationRequest](src/AmazonTranscribe/Requests/MedicalScribeJobApi/ListMedicalScribeJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListMedicalScribeJobsError](src/AmazonTranscribe/Errors/ListMedicalScribeJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartMedicalScribeJob(StartMedicalScribeJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBu

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalScribeJobApi.StartMedicalScribeJob(new StartMedicalScribeJobOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi.TranscribeStartMedicalScribeJob,
    });
}
catch (ApiException<StartMedicalScribeJobError> ex)
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

<code>[StartMedicalScribeJobOperationRequest](src/AmazonTranscribe/Requests/MedicalScribeJobApi/StartMedicalScribeJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartMedicalScribeJobError](src/AmazonTranscribe/Errors/StartMedicalScribeJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalTranscriptionJobApi

> Source: [MedicalTranscriptionJobApi](src/AmazonTranscribe/Api/MedicalTranscriptionJobApi.cs)

<details>
<summary><code>Task DeleteMedicalTranscriptionJob(DeleteMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalTranscriptionJobApi.DeleteMedicalTranscriptionJob(
        new DeleteMedicalTranscriptionJobOperationRequest
        {
            XAmzTarget = XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeDeleteMedicalTranscriptionJob,
        });
}
catch (ApiException<DeleteMedicalTranscriptionJobError> ex)
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

<code>[DeleteMedicalTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/DeleteMedicalTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteMedicalTranscriptionJobError](src/AmazonTranscribe/Errors/DeleteMedicalTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetMedicalTranscriptionJob(GetMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalTranscriptionJobApi.GetMedicalTranscriptionJob(new GetMedicalTranscriptionJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeGetMedicalTranscriptionJob,
    });
}
catch (ApiException<GetMedicalTranscriptionJobError> ex)
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

<code>[GetMedicalTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/GetMedicalTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetMedicalTranscriptionJobError](src/AmazonTranscribe/Errors/GetMedicalTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMedicalTranscriptionJobs(ListMedicalTranscriptionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalTranscriptionJobApi.ListMedicalTranscriptionJobs(
        new ListMedicalTranscriptionJobsOperationRequest
        {
            XAmzTarget = XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeListMedicalTranscriptionJobs,
        });
}
catch (ApiException<ListMedicalTranscriptionJobsError> ex)
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

<code>[ListMedicalTranscriptionJobsOperationRequest](src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/ListMedicalTranscriptionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListMedicalTranscriptionJobsError](src/AmazonTranscribe/Errors/ListMedicalTranscriptionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartMedicalTranscriptionJob(StartMedicalTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalTranscriptionJobApi.StartMedicalTranscriptionJob(
        new StartMedicalTranscriptionJobOperationRequest
        {
            XAmzTarget = XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApi.TranscribeStartMedicalTranscriptionJob,
        });
}
catch (ApiException<StartMedicalTranscriptionJobError> ex)
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

<code>[StartMedicalTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/MedicalTranscriptionJobApi/StartMedicalTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartMedicalTranscriptionJobError](src/AmazonTranscribe/Errors/StartMedicalTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MedicalVocabulary

> Source: [MedicalVocabulary](src/AmazonTranscribe/Api/MedicalVocabulary.cs)

<details>
<summary><code>Task CreateMedicalVocabulary(CreateMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalVocabulary.CreateMedicalVocabulary(new CreateMedicalVocabularyOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi.TranscribeCreateMedicalVocabulary,
    });
}
catch (ApiException<CreateMedicalVocabularyError> ex)
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

<code>[CreateMedicalVocabularyOperationRequest](src/AmazonTranscribe/Requests/MedicalVocabulary/CreateMedicalVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[CreateMedicalVocabularyError](src/AmazonTranscribe/Errors/CreateMedicalVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteMedicalVocabulary(DeleteMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalVocabulary.DeleteMedicalVocabulary(new DeleteMedicalVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi.TranscribeDeleteMedicalVocabulary,
    });
}
catch (ApiException<DeleteMedicalVocabularyError> ex)
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

<code>[DeleteMedicalVocabularyOperationRequest](src/AmazonTranscribe/Requests/MedicalVocabulary/DeleteMedicalVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteMedicalVocabularyError](src/AmazonTranscribe/Errors/DeleteMedicalVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetMedicalVocabulary(GetMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalVocabulary.GetMedicalVocabulary(new GetMedicalVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi.TranscribeGetMedicalVocabulary,
    });
}
catch (ApiException<GetMedicalVocabularyError> ex)
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

<code>[GetMedicalVocabularyOperationRequest](src/AmazonTranscribe/Requests/MedicalVocabulary/GetMedicalVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetMedicalVocabularyError](src/AmazonTranscribe/Errors/GetMedicalVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListMedicalVocabularies(ListMedicalVocabulariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalVocabulary.ListMedicalVocabularies(new ListMedicalVocabulariesOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi.TranscribeListMedicalVocabularies,
    });
}
catch (ApiException<ListMedicalVocabulariesError> ex)
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

<code>[ListMedicalVocabulariesOperationRequest](src/AmazonTranscribe/Requests/MedicalVocabulary/ListMedicalVocabulariesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListMedicalVocabulariesError](src/AmazonTranscribe/Errors/ListMedicalVocabulariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateMedicalVocabulary(UpdateMedicalVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MedicalVocabulary.UpdateMedicalVocabulary(new UpdateMedicalVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi.TranscribeUpdateMedicalVocabulary,
    });
}
catch (ApiException<UpdateMedicalVocabularyError> ex)
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

<code>[UpdateMedicalVocabularyOperationRequest](src/AmazonTranscribe/Requests/MedicalVocabulary/UpdateMedicalVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UpdateMedicalVocabularyError](src/AmazonTranscribe/Errors/UpdateMedicalVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Operations

> Source: [Operations](src/AmazonTranscribe/Api/Operations.cs)

<details>
<summary><code>Task&lt;GetMedicalScribeStreamResponse&gt; GetMedicalScribeStream(GetMedicalScribeStreamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about the specified Amazon Web Services HealthScribe streaming session. To view the status of the streaming session, check the StreamStatus field in the response. To get the details of post-stream analytics, including its status, check the PostStreamAnalyticsResult field in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.GetMedicalScribeStream(new GetMedicalScribeStreamRequest
    {
        SessionId = "some example string",
    });
    // TODO: Handle 'response' of type GetMedicalScribeStreamResponse
}
catch (ApiException<GetMedicalScribeStreamError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMedicalScribeStreamRequest](src/AmazonTranscribe/Requests/Operations/GetMedicalScribeStreamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMedicalScribeStreamResponse](src/AmazonTranscribe/Models/GetMedicalScribeStreamResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetMedicalScribeStreamError](src/AmazonTranscribe/Errors/GetMedicalScribeStreamError.cs)&gt;</code>

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

Lists all tags associated with the specified transcription job, vocabulary, model, or resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.ListTagsForResource(new ListTagsForResourceOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceOperationsApi.TranscribeListTagsForResource,
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

<code>[ListTagsForResourceOperationRequest](src/AmazonTranscribe/Requests/Operations/ListTagsForResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListTagsForResourceError](src/AmazonTranscribe/Errors/ListTagsForResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartCallAnalyticsStreamTranscriptionResponse&gt; StartCallAnalyticsStreamTranscription(StartCallAnalyticsStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. Use this operation for Call Analytics transcriptions. The following parameters are required: language-code or identify-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartCallAnalyticsStreamTranscription(
        new StartCallAnalyticsStreamTranscriptionRequest
        {
            XAmznTranscribeSampleRate = 1,
            XAmznTranscribeMediaEncoding = XAmznTranscribeMediaEncoding1.Pcm,
        });
    // TODO: Handle 'response' of type StartCallAnalyticsStreamTranscriptionResponse
}
catch (ApiException<StartCallAnalyticsStreamTranscriptionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartCallAnalyticsStreamTranscriptionRequest](src/AmazonTranscribe/Requests/Operations/StartCallAnalyticsStreamTranscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartCallAnalyticsStreamTranscriptionResponse](src/AmazonTranscribe/Models/StartCallAnalyticsStreamTranscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartCallAnalyticsStreamTranscriptionError](src/AmazonTranscribe/Errors/StartCallAnalyticsStreamTranscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartMedicalScribeStreamResponse&gt; StartMedicalScribeStream(StartMedicalScribeStreamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 stream, where audio is streamed to Amazon Web Services HealthScribe and the transcription results are streamed to your application. When you start a stream, you first specify the stream configuration in a MedicalScribeConfigurationEvent. This event includes channel definitions, encryption settings, medical scribe context, and post-stream analytics settings, such as the output configuration for aggregated transcript and clinical note generation. These are additional streaming session configurations beyond those provided in your initial start request headers. Whether you are starting a new session or resuming an existing session, your first event must be a MedicalScribeConfigurationEvent. After you send a MedicalScribeConfigurationEvent, you start AudioEvents and Amazon Web Services HealthScribe responds with real-time transcription results. When you are finished, to start processing the results with the post-stream analytics, send a MedicalScribeSessionControlEvent with a Type of END_OF_SESSION and Amazon Web Services HealthScribe starts the analytics. You can pause or resume streaming. To pause streaming, complete the input stream without sending the M

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartMedicalScribeStream(new StartMedicalScribeStreamRequest
    {
        XAmznTranscribeLanguageCode = XAmznTranscribeLanguageCode.EnUs,
        XAmznTranscribeSampleRate = 1,
        XAmznTranscribeMediaEncoding = XAmznTranscribeMediaEncoding.Pcm,
    });
    // TODO: Handle 'response' of type StartMedicalScribeStreamResponse
}
catch (ApiException<StartMedicalScribeStreamError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartMedicalScribeStreamRequest](src/AmazonTranscribe/Requests/Operations/StartMedicalScribeStreamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartMedicalScribeStreamResponse](src/AmazonTranscribe/Models/StartMedicalScribeStreamResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartMedicalScribeStreamError](src/AmazonTranscribe/Errors/StartMedicalScribeStreamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartMedicalStreamTranscriptionResponse&gt; StartMedicalStreamTranscription(StartMedicalStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe Medical and the transcription results are streamed to your application. The following parameters are required: language-code media-encoding sample-rate For more information on streaming with Amazon Transcribe Medical, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartMedicalStreamTranscription(new StartMedicalStreamTranscriptionRequest
    {
        XAmznTranscribeLanguageCode = XAmznTranscribeLanguageCode2.EnUs,
        XAmznTranscribeSampleRate = 1,
        XAmznTranscribeMediaEncoding = XAmznTranscribeMediaEncoding1.Pcm,
        XAmznTranscribeSpecialty = XAmznTranscribeSpecialty.Primarycare,
        XAmznTranscribeType = XAmznTranscribeType.Conversation,
    });
    // TODO: Handle 'response' of type StartMedicalStreamTranscriptionResponse
}
catch (ApiException<StartMedicalStreamTranscriptionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartMedicalStreamTranscriptionRequest](src/AmazonTranscribe/Requests/Operations/StartMedicalStreamTranscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartMedicalStreamTranscriptionResponse](src/AmazonTranscribe/Models/StartMedicalStreamTranscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartMedicalStreamTranscriptionError](src/AmazonTranscribe/Errors/StartMedicalStreamTranscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StartStreamTranscriptionResponse&gt; StartStreamTranscription(StartStreamTranscriptionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a bidirectional HTTP/2 or WebSocket stream where audio is streamed to Amazon Transcribe and the transcription results are streamed to your application. The following parameters are required: language-code or identify-language or identify-multiple-language media-encoding sample-rate For more information on streaming with Amazon Transcribe, see Transcribing streaming audio.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Operations.StartStreamTranscription(new StartStreamTranscriptionRequest
    {
        XAmznTranscribeSampleRate = 1,
        XAmznTranscribeMediaEncoding = XAmznTranscribeMediaEncoding1.Pcm,
    });
    // TODO: Handle 'response' of type StartStreamTranscriptionResponse
}
catch (ApiException<StartStreamTranscriptionError> ex)
{
    if (ex.Error.TryGetBadRequestException(out var error))
    {
        // TODO: Handle 'error' of type BadRequestException
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartStreamTranscriptionRequest](src/AmazonTranscribe/Requests/Operations/StartStreamTranscriptionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StartStreamTranscriptionResponse](src/AmazonTranscribe/Models/StartStreamTranscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartStreamTranscriptionError](src/AmazonTranscribe/Errors/StartStreamTranscriptionError.cs)&gt;</code>

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

Adds one or more custom tags, each in the form of a key:value pair, to the specified resource. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.TagResource(new TagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceOperationsApi.TranscribeTagResource,
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

<code>[TagResourceOperationRequest](src/AmazonTranscribe/Requests/Operations/TagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[TagResourceError](src/AmazonTranscribe/Errors/TagResourceError.cs)&gt;</code>

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

Removes the specified tags from the specified Amazon Transcribe resource. If you include UntagResource in your request, you must also include ResourceArn and TagKeys.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Operations.UntagResource(new UntagResourceOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceOperationsApi.TranscribeUntagResource,
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

<code>[UntagResourceOperationRequest](src/AmazonTranscribe/Requests/Operations/UntagResourceOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UntagResourceError](src/AmazonTranscribe/Errors/UntagResourceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TranscriptionJobs

> Source: [TranscriptionJobs](src/AmazonTranscribe/Api/TranscriptionJobs.cs)

<details>
<summary><code>Task DeleteTranscriptionJob(DeleteTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TranscriptionJobs.DeleteTranscriptionJob(new DeleteTranscriptionJobOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceTranscriptionJobsApi.TranscribeDeleteTranscriptionJob,
    });
}
catch (ApiException<DeleteTranscriptionJobError> ex)
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

<code>[DeleteTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/TranscriptionJobs/DeleteTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteTranscriptionJobError](src/AmazonTranscribe/Errors/DeleteTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetTranscriptionJob(GetTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TranscriptionJobs.GetTranscriptionJob(new GetTranscriptionJobOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApi.TranscribeGetTranscriptionJob,
    });
}
catch (ApiException<GetTranscriptionJobError> ex)
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

<code>[GetTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/TranscriptionJobs/GetTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetTranscriptionJobError](src/AmazonTranscribe/Errors/GetTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListTranscriptionJobs(ListTranscriptionJobsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TranscriptionJobs.ListTranscriptionJobs(new ListTranscriptionJobsOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApi.TranscribeListTranscriptionJobs,
    });
}
catch (ApiException<ListTranscriptionJobsError> ex)
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

<code>[ListTranscriptionJobsOperationRequest](src/AmazonTranscribe/Requests/TranscriptionJobs/ListTranscriptionJobsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListTranscriptionJobsError](src/AmazonTranscribe/Errors/ListTranscriptionJobsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task StartTranscriptionJob(StartTranscriptionJobOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TranscriptionJobs.StartTranscriptionJob(new StartTranscriptionJobOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApi.TranscribeStartTranscriptionJob,
    });
}
catch (ApiException<StartTranscriptionJobError> ex)
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

<code>[StartTranscriptionJobOperationRequest](src/AmazonTranscribe/Requests/TranscriptionJobs/StartTranscriptionJobOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[StartTranscriptionJobError](src/AmazonTranscribe/Errors/StartTranscriptionJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vocabularies

> Source: [Vocabularies](src/AmazonTranscribe/Api/Vocabularies.cs)

<details>
<summary><code>Task CreateVocabulary(CreateVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary. When creating a new custom vocabulary, you can either upload a text file that contains your new entries, phrases, and terms into an Amazon S3 bucket and include the URI in your request. Or you can include a list of terms directly in your request using the Phrases flag. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vocabularies.CreateVocabulary(new CreateVocabularyOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceVocabulariesApi.TranscribeCreateVocabulary,
    });
}
catch (ApiException<CreateVocabularyError> ex)
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

<code>[CreateVocabularyOperationRequest](src/AmazonTranscribe/Requests/Vocabularies/CreateVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[CreateVocabularyError](src/AmazonTranscribe/Errors/CreateVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVocabulary(DeleteVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vocabularies.DeleteVocabulary(new DeleteVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceVocabulariesApi.TranscribeDeleteVocabulary,
    });
}
catch (ApiException<DeleteVocabularyError> ex)
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

<code>[DeleteVocabularyOperationRequest](src/AmazonTranscribe/Requests/Vocabularies/DeleteVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteVocabularyError](src/AmazonTranscribe/Errors/DeleteVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetVocabulary(GetVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary. To view the status of the specified custom vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your custom vocabulary failed. To get a list of your custom vocabularies, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vocabularies.GetVocabulary(new GetVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceVocabulariesApi.TranscribeGetVocabulary,
    });
}
catch (ApiException<GetVocabularyError> ex)
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

<code>[GetVocabularyOperationRequest](src/AmazonTranscribe/Requests/Vocabularies/GetVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetVocabularyError](src/AmazonTranscribe/Errors/GetVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVocabularies(ListVocabulariesOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabularies that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vocabularies.ListVocabularies(new ListVocabulariesOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceVocabulariesApi.TranscribeListVocabularies,
    });
}
catch (ApiException<ListVocabulariesError> ex)
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

<code>[ListVocabulariesOperationRequest](src/AmazonTranscribe/Requests/Vocabularies/ListVocabulariesOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListVocabulariesError](src/AmazonTranscribe/Errors/ListVocabulariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateVocabulary(UpdateVocabularyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary. Your custom vocabulary must be in a terminal state (READY or FAILED) before you can update it. You must include either Phrases or VocabularyFileUri in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Vocabularies.UpdateVocabulary(new UpdateVocabularyOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonTranscribeServiceVocabulariesApi.TranscribeUpdateVocabulary,
    });
}
catch (ApiException<UpdateVocabularyError> ex)
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

<code>[UpdateVocabularyOperationRequest](src/AmazonTranscribe/Requests/Vocabularies/UpdateVocabularyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UpdateVocabularyError](src/AmazonTranscribe/Errors/UpdateVocabularyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VocabularyFilter

> Source: [VocabularyFilter](src/AmazonTranscribe/Api/VocabularyFilter.cs)

<details>
<summary><code>Task CreateVocabularyFilter(CreateVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VocabularyFilter.CreateVocabularyFilter(new CreateVocabularyFilterOperationRequest
    {
        XAmzTarget = XAmzTargetAmazonTranscribeServiceVocabularyFilterApi.TranscribeCreateVocabularyFilter,
    });
}
catch (ApiException<CreateVocabularyFilterError> ex)
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

<code>[CreateVocabularyFilterOperationRequest](src/AmazonTranscribe/Requests/VocabularyFilter/CreateVocabularyFilterOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[CreateVocabularyFilterError](src/AmazonTranscribe/Errors/CreateVocabularyFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteVocabularyFilter(DeleteVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VocabularyFilter.DeleteVocabularyFilter(new DeleteVocabularyFilterOperationRequest
    {
        XAmzTarget = XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi.TranscribeDeleteVocabularyFilter,
    });
}
catch (ApiException<DeleteVocabularyFilterError> ex)
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

<code>[DeleteVocabularyFilterOperationRequest](src/AmazonTranscribe/Requests/VocabularyFilter/DeleteVocabularyFilterOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[DeleteVocabularyFilterError](src/AmazonTranscribe/Errors/DeleteVocabularyFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetVocabularyFilter(GetVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VocabularyFilter.GetVocabularyFilter(new GetVocabularyFilterOperationRequest
    {
        XAmzTarget = XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi.TranscribeGetVocabularyFilter,
    });
}
catch (ApiException<GetVocabularyFilterError> ex)
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

<code>[GetVocabularyFilterOperationRequest](src/AmazonTranscribe/Requests/VocabularyFilter/GetVocabularyFilterOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[GetVocabularyFilterError](src/AmazonTranscribe/Errors/GetVocabularyFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ListVocabularyFilters(ListVocabularyFiltersOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VocabularyFilter.ListVocabularyFilters(new ListVocabularyFiltersOperationRequest
    {
        XAmzTarget = XAmzTarget3AmazonTranscribeServiceVocabularyFilterApi.TranscribeListVocabularyFilters,
    });
}
catch (ApiException<ListVocabularyFiltersError> ex)
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

<code>[ListVocabularyFiltersOperationRequest](src/AmazonTranscribe/Requests/VocabularyFilter/ListVocabularyFiltersOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[ListVocabularyFiltersError](src/AmazonTranscribe/Errors/ListVocabularyFiltersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task UpdateVocabularyFilter(UpdateVocabularyFilterOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter. You must include either Words or VocabularyFilterFileUri in your request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.VocabularyFilter.UpdateVocabularyFilter(new UpdateVocabularyFilterOperationRequest
    {
        XAmzTarget = XAmzTarget4AmazonTranscribeServiceVocabularyFilterApi.TranscribeUpdateVocabularyFilter,
    });
}
catch (ApiException<UpdateVocabularyFilterError> ex)
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

<code>[UpdateVocabularyFilterOperationRequest](src/AmazonTranscribe/Requests/VocabularyFilter/UpdateVocabularyFilterOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/AmazonTranscribe/Core/Exceptions/ApiException.cs)&lt;[UpdateVocabularyFilterError](src/AmazonTranscribe/Errors/UpdateVocabularyFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

