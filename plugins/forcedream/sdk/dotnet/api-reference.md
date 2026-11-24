# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ForceDreamClient](src/ForceDream/ForceDreamClient.cs)

<details>
<summary><code>Task AnomalyDetection(AnomalyDetectionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AnomalyDetection(new AnomalyDetectionRequest());
}
catch (ApiException<AnomalyDetectionError> ex)
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

<code>[AnomalyDetectionRequest](src/ForceDream/Requests/AnomalyDetectionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[AnomalyDetectionError](src/ForceDream/Errors/AnomalyDetectionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Classification(ClassificationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Classification(new ClassificationRequest());
}
catch (ApiException<ClassificationError> ex)
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

<code>[ClassificationRequest](src/ForceDream/Requests/ClassificationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[ClassificationError](src/ForceDream/Errors/ClassificationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CodeGeneration(CodeGenerationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.CodeGeneration(new CodeGenerationRequest());
}
catch (ApiException<CodeGenerationError> ex)
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

<code>[CodeGenerationRequest](src/ForceDream/Requests/CodeGenerationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[CodeGenerationError](src/ForceDream/Errors/CodeGenerationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task FraudSignal(FraudSignalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FraudSignal(new FraudSignalRequest());
}
catch (ApiException<FraudSignalError> ex)
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

<code>[FraudSignalRequest](src/ForceDream/Requests/FraudSignalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[FraudSignalError](src/ForceDream/Errors/FraudSignalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task LeadScore(LeadScoreRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.LeadScore(new LeadScoreRequest());
}
catch (ApiException<LeadScoreError> ex)
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

<code>[LeadScoreRequest](src/ForceDream/Requests/LeadScoreRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[LeadScoreError](src/ForceDream/Errors/LeadScoreError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ModelInference(ModelInferenceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ModelInference(new ModelInferenceRequest());
}
catch (ApiException<ModelInferenceError> ex)
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

<code>[ModelInferenceRequest](src/ForceDream/Requests/ModelInferenceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[ModelInferenceError](src/ForceDream/Errors/ModelInferenceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PromptTemplate(PromptTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PromptTemplate(new PromptTemplateRequest());
}
catch (ApiException<PromptTemplateError> ex)
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

<code>[PromptTemplateRequest](src/ForceDream/Requests/PromptTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[PromptTemplateError](src/ForceDream/Errors/PromptTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task ProofOfWork(ProofOfWorkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ProofOfWork(new ProofOfWorkRequest());
}
catch (ApiException<ProofOfWorkError> ex)
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

<code>[ProofOfWorkRequest](src/ForceDream/Requests/ProofOfWorkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[ProofOfWorkError](src/ForceDream/Errors/ProofOfWorkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SecurityScan(SecurityScanRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SecurityScan(new SecurityScanRequest());
}
catch (ApiException<SecurityScanError> ex)
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

<code>[SecurityScanRequest](src/ForceDream/Requests/SecurityScanRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[SecurityScanError](src/ForceDream/Errors/SecurityScanError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SemanticCache(SemanticCacheRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SemanticCache(new SemanticCacheRequest());
}
catch (ApiException<SemanticCacheError> ex)
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

<code>[SemanticCacheRequest](src/ForceDream/Requests/SemanticCacheRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[SemanticCacheError](src/ForceDream/Errors/SemanticCacheError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SentimentFeed(SentimentFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SentimentFeed(new SentimentFeedRequest());
}
catch (ApiException<SentimentFeedError> ex)
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

<code>[SentimentFeedRequest](src/ForceDream/Requests/SentimentFeedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[SentimentFeedError](src/ForceDream/Errors/SentimentFeedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Summarization(SummarizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Summarization(new SummarizationRequest());
}
catch (ApiException<SummarizationError> ex)
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

<code>[SummarizationRequest](src/ForceDream/Requests/SummarizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[SummarizationError](src/ForceDream/Errors/SummarizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TaxJarLookup(TaxJarLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.TaxJarLookup(new TaxJarLookupRequest());
}
catch (ApiException<TaxJarLookupError> ex)
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

<code>[TaxJarLookupRequest](src/ForceDream/Requests/TaxJarLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[TaxJarLookupError](src/ForceDream/Errors/TaxJarLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Translation(TranslationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Translation(new TranslationRequest());
}
catch (ApiException<TranslationError> ex)
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

<code>[TranslationRequest](src/ForceDream/Requests/TranslationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[TranslationError](src/ForceDream/Errors/TranslationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Validation(ValidationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns HTTP 402 with payment link if no payment. Include X-Payment-Intent-Id after paying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Validation(new ValidationRequest());
}
catch (ApiException<ValidationError> ex)
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

<code>[ValidationRequest](src/ForceDream/Requests/ValidationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ForceDream/Core/Exceptions/ApiException.cs)&lt;[ValidationError](src/ForceDream/Errors/ValidationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

