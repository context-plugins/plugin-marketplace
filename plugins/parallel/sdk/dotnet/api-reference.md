# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [ParallelSdkClient](src/ParallelSdk/ParallelSdkClient.cs)

## ChatApiBeta

> Source: [ChatApiBeta](src/ParallelSdk/Api/ChatApiBeta.cs)

<details>
<summary><code>Task&lt;ChatCompletion&gt; ChatCompletionsV1BetaChatCompletionsPost(ChatCompletionsV1BetaChatCompletionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Chat completions.

This endpoint can be used to get realtime chat completions. It can also be used
with the Task API processors to get structured, research outputs via a chat
interface.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ChatApiBeta.ChatCompletionsV1BetaChatCompletionsPost(
        new ChatCompletionsV1BetaChatCompletionsPostRequest
        {
            Body = new ChatCompletionRequest
            {
                Model = "some example string",
                Messages = [new ChatMessage { Role = Role1.System, Content = "some example string" }],
            },
        });
    // TODO: Handle 'response' of type ChatCompletion
}
catch (ApiException<ChatCompletionsV1BetaChatCompletionsPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ChatCompletionsV1BetaChatCompletionsPostRequest](src/ParallelSdk/Requests/ChatApiBeta/ChatCompletionsV1BetaChatCompletionsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatCompletion](src/ParallelSdk/Models/ChatCompletion.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ChatCompletionsV1BetaChatCompletionsPostError](src/ParallelSdk/Errors/ChatCompletionsV1BetaChatCompletionsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Extract

> Source: [Extract](src/ParallelSdk/Api/Extract.cs)

<details>
<summary><code>Task&lt;V1ExtractResponse&gt; ExtractV1ExtractPost(ExtractV1ExtractPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extracts relevant content from specific web URLs.

The legacy Extract API reference (`/v1beta/extract` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Extract.ExtractV1ExtractPost(new ExtractV1ExtractPostRequest
    {
        Body = new V1ExtractRequest { Urls = ["some example string"] },
    });
    // TODO: Handle 'response' of type V1ExtractResponse
}
catch (ApiException<ExtractV1ExtractPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExtractV1ExtractPostRequest](src/ParallelSdk/Requests/Extract/ExtractV1ExtractPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExtractResponse](src/ParallelSdk/Models/V1ExtractResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ExtractV1ExtractPostError](src/ParallelSdk/Errors/ExtractV1ExtractPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## FindAll

> Source: [FindAll](src/ParallelSdk/Api/FindAll.cs)

<details>
<summary><code>Task CancelFindallRunV1BetaFindallRunsFindallIdCancelPost(CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPost(
        new CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest { FindallId = "some example string" });
}
catch (ApiException<CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest](src/ParallelSdk/Requests/FindAll/CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError](src/ParallelSdk/Errors/CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllSchema&gt; EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an enrichment to a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(
        new EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest
        {
            FindallId = "some example string",
            Body = new FindAllEnrichInput { OutputSchema = new JsonSchema2 { JsonSchema = jsonSchema } },
        });
    // TODO: Handle 'response' of type FindAllSchema
}
catch (ApiException<EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest](src/ParallelSdk/Requests/FindAll/EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](src/ParallelSdk/Models/FindAllSchema.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError](src/ParallelSdk/Errors/EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllSchema&gt; ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost(ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extend a FindAll run by adding additional matches to the current match limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPost(
        new ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest
        {
            FindallId = "some example string",
            Body = new FindAllExtendInput { AdditionalMatchLimit = 1 },
        });
    // TODO: Handle 'response' of type FindAllSchema
}
catch (ApiException<ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest](src/ParallelSdk/Requests/FindAll/ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](src/ParallelSdk/Models/FindAllSchema.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError](src/ParallelSdk/Errors/ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllEntitySearchResponse&gt; FindallEntitySearchV1BetaFindallEntitySearchPost(FindallEntitySearchV1BetaFindallEntitySearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return ranked entities matching a natural language objective.

This endpoint performs a best-effort search optimized for low latency. To keep
responses fast, it returns a fixed set of attributes and supports queries of
limited complexity.

For comprehensive match evaluation and enrichment, use the
FindAll API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.FindallEntitySearchV1BetaFindallEntitySearchPost(
        new FindallEntitySearchV1BetaFindallEntitySearchPostRequest
        {
            Body = new FindAllEntitySearchRequest { EntityType = EntityType.People, Objective = "some example string" },
        });
    // TODO: Handle 'response' of type FindAllEntitySearchResponse
}
catch (ApiException<FindallEntitySearchV1BetaFindallEntitySearchPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindallEntitySearchV1BetaFindallEntitySearchPostRequest](src/ParallelSdk/Requests/FindAll/FindallEntitySearchV1BetaFindallEntitySearchPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllEntitySearchResponse](src/ParallelSdk/Models/FindAllEntitySearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[FindallEntitySearchV1BetaFindallEntitySearchPostError](src/ParallelSdk/Errors/FindallEntitySearchV1BetaFindallEntitySearchPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllRun&gt; FindallRunsV1GetV1BetaFindallRunsFindallIdGet(FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a FindAll run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGet(
        new FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest { FindallId = "some example string" });
    // TODO: Handle 'response' of type FindAllRun
}
catch (ApiException<FindallRunsV1GetV1BetaFindallRunsFindallIdGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest](src/ParallelSdk/Requests/FindAll/FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRun](src/ParallelSdk/Models/FindAllRun.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[FindallRunsV1GetV1BetaFindallRunsFindallIdGetError](src/ParallelSdk/Errors/FindallRunsV1GetV1BetaFindallRunsFindallIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllRun&gt; FindallRunsV1V1BetaFindallRunsPost(FindallRunsV1V1BetaFindallRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a FindAll run.

This endpoint immediately returns a FindAll run object with status set to 'queued'.
You can get the run result snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint.
You can track the progress of the run by:
- Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
- Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events
endpoint,
- Or specifying a webhook with relevant event types during run creation to receive
notifications.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.FindallRunsV1V1BetaFindallRunsPost(new FindallRunsV1V1BetaFindallRunsPostRequest
    {
        Body = new FindAllRunInput
        {
            Objective = "some example string",
            EntityType = "some example string",
            MatchConditions = [
                new MatchCondition { Name = "some example string", Description = "some example string" },
            ],
            Generator = Generator2.Base,
            MatchLimit = 1,
        },
    });
    // TODO: Handle 'response' of type FindAllRun
}
catch (ApiException<FindallRunsV1V1BetaFindallRunsPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindallRunsV1V1BetaFindallRunsPostRequest](src/ParallelSdk/Requests/FindAll/FindallRunsV1V1BetaFindallRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRun](src/ParallelSdk/Models/FindAllRun.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[FindallRunsV1V1BetaFindallRunsPostError](src/ParallelSdk/Errors/FindallRunsV1V1BetaFindallRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet&gt;&gt; GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream events from a FindAll run.

Args:
request: The Shapi request
findall_id: The FindAll run ID
last_event_id: Optional event ID to resume from.
timeout: Optional timeout in seconds. If None, keep connection alive
as long as the run is going. If set, stop after specified duration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGet(
        new GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest { FindallId = "some example string" });
    // TODO: Handle 'response' of type IAsyncEnumerable<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>
}
catch (ApiException<GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest](src/ParallelSdk/Requests/FindAll/GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;[Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet](src/ParallelSdk/Models/OneOf/Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError](src/ParallelSdk/Errors/GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllRunResult&gt; GetFindallResultV1BetaFindallRunsFindallIdResultGet(GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the FindAll run result at the time of the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGet(
        new GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest { FindallId = "some example string" });
    // TODO: Handle 'response' of type FindAllRunResult
}
catch (ApiException<GetFindallResultV1BetaFindallRunsFindallIdResultGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest](src/ParallelSdk/Requests/FindAll/GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllRunResult](src/ParallelSdk/Models/FindAllRunResult.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[GetFindallResultV1BetaFindallRunsFindallIdResultGetError](src/ParallelSdk/Errors/GetFindallResultV1BetaFindallRunsFindallIdResultGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllSchema&gt; GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(
        new GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest { FindallId = "some example string" });
    // TODO: Handle 'response' of type FindAllSchema
}
catch (ApiException<GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest](src/ParallelSdk/Requests/FindAll/GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](src/ParallelSdk/Models/FindAllSchema.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError](src/ParallelSdk/Errors/GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FindAllSchema&gt; IngestFindallRunV1BetaFindallIngestPost(IngestFindallRunV1BetaFindallIngestPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Transforms a natural language search objective into a structured FindAll spec.

The generated specification serves as a suggested starting point and can be further
customized by the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.FindAll.IngestFindallRunV1BetaFindallIngestPost(
        new IngestFindallRunV1BetaFindallIngestPostRequest
        {
            Body = new IngestInput { Objective = "some example string" },
        });
    // TODO: Handle 'response' of type FindAllSchema
}
catch (ApiException<IngestFindallRunV1BetaFindallIngestPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[IngestFindallRunV1BetaFindallIngestPostRequest](src/ParallelSdk/Requests/FindAll/IngestFindallRunV1BetaFindallIngestPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FindAllSchema](src/ParallelSdk/Models/FindAllSchema.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[IngestFindallRunV1BetaFindallIngestPostError](src/ParallelSdk/Errors/IngestFindallRunV1BetaFindallIngestPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MemoryApi

> Source: [MemoryApi](src/ParallelSdk/Api/MemoryApi.cs)

<details>
<summary><code>Task ClearMemoryV1BetaMemoryClearPost(ClearMemoryV1BetaMemoryClearPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clears all entries from the selected memory without deleting the underlying tasks, monitors, or FindAll runs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MemoryApi.ClearMemoryV1BetaMemoryClearPost(new ClearMemoryV1BetaMemoryClearPostRequest
    {
        Body = new MemoryClearRequest(),
    });
}
catch (ApiException<ClearMemoryV1BetaMemoryClearPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ClearMemoryV1BetaMemoryClearPostRequest](src/ParallelSdk/Requests/MemoryApi/ClearMemoryV1BetaMemoryClearPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ClearMemoryV1BetaMemoryClearPostError](src/ParallelSdk/Errors/ClearMemoryV1BetaMemoryClearPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task EvictMemorySourceV1BetaMemoryEvictPost(EvictMemorySourceV1BetaMemoryEvictPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a task run, monitor, or FindAll run from the selected memory without deleting the original resource.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MemoryApi.EvictMemorySourceV1BetaMemoryEvictPost(new EvictMemorySourceV1BetaMemoryEvictPostRequest
    {
        Body = new MemoryEvictRequest { Kind = Kind3.Task, Id = "some example string" },
    });
}
catch (ApiException<EvictMemorySourceV1BetaMemoryEvictPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EvictMemorySourceV1BetaMemoryEvictPostRequest](src/ParallelSdk/Requests/MemoryApi/EvictMemorySourceV1BetaMemoryEvictPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[EvictMemorySourceV1BetaMemoryEvictPostError](src/ParallelSdk/Errors/EvictMemorySourceV1BetaMemoryEvictPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MemoryRetrieveResponse&gt; RetrieveMemoryV1BetaMemoryRetrievePost(RetrieveMemoryV1BetaMemoryRetrievePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves relevant or recent runs from the selected memory. Provide a query to rank results by relevance; leave it empty to return the most recent runs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MemoryApi.RetrieveMemoryV1BetaMemoryRetrievePost(
        new RetrieveMemoryV1BetaMemoryRetrievePostRequest { Body = new MemoryRetrieveRequest() });
    // TODO: Handle 'response' of type MemoryRetrieveResponse
}
catch (ApiException<RetrieveMemoryV1BetaMemoryRetrievePostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveMemoryV1BetaMemoryRetrievePostRequest](src/ParallelSdk/Requests/MemoryApi/RetrieveMemoryV1BetaMemoryRetrievePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MemoryRetrieveResponse](src/ParallelSdk/Models/MemoryRetrieveResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[RetrieveMemoryV1BetaMemoryRetrievePostError](src/ParallelSdk/Errors/RetrieveMemoryV1BetaMemoryRetrievePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MonitorApi

> Source: [MonitorApi](src/ParallelSdk/Api/MonitorApi.cs)

<details>
<summary><code>Task&lt;MonitorResponse&gt; CancelMonitorV1MonitorsMonitorIdCancelPost(CancelMonitorV1MonitorsMonitorIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a monitor.

Permanently stops the monitor from running. Cancellation is irreversible —
create a new monitor to resume monitoring. Cancelling an already-cancelled
monitor is a no-op.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.CancelMonitorV1MonitorsMonitorIdCancelPost(
        new CancelMonitorV1MonitorsMonitorIdCancelPostRequest { MonitorId = "some example string" });
    // TODO: Handle 'response' of type MonitorResponse
}
catch (ApiException<CancelMonitorV1MonitorsMonitorIdCancelPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelMonitorV1MonitorsMonitorIdCancelPostRequest](src/ParallelSdk/Requests/MonitorApi/CancelMonitorV1MonitorsMonitorIdCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](src/ParallelSdk/Models/MonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[CancelMonitorV1MonitorsMonitorIdCancelPostError](src/ParallelSdk/Errors/CancelMonitorV1MonitorsMonitorIdCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResponse&gt; CreateMonitorV1MonitorsPost(CreateMonitorV1MonitorsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a monitor.

Monitors run on a fixed frequency to detect material changes in web content.
Set `type=event_stream` to monitor a search query, or `type=snapshot` to
monitor a specific task run's output. The monitor runs once immediately at
creation, then continues on the configured schedule.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.CreateMonitorV1MonitorsPost(new CreateMonitorV1MonitorsPostRequest
    {
        Body = new CreateMonitorRequest
        {
            Type = Type2ParallelAiMonitorApi.EventStream,
            Frequency = "some example string",
            Settings = new MonitorEventStreamSettings { Query = "some example string" },
        },
    });
    // TODO: Handle 'response' of type MonitorResponse
}
catch (ApiException<CreateMonitorV1MonitorsPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateMonitorV1MonitorsPostRequest](src/ParallelSdk/Requests/MonitorApi/CreateMonitorV1MonitorsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](src/ParallelSdk/Models/MonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[CreateMonitorV1MonitorsPostError](src/ParallelSdk/Errors/CreateMonitorV1MonitorsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedMonitorEvents&gt; ListMonitorEventsV1MonitorsMonitorIdEventsGet(ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List events for a monitor, newest first.

Pass `event_group_id` to narrow results to a single execution. Otherwise
returns all executions newest-first; use `next_cursor` to paginate.
Set `include_completions=true` to also include no-change executions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.ListMonitorEventsV1MonitorsMonitorIdEventsGet(
        new ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest { MonitorId = "some example string" });
    // TODO: Handle 'response' of type PaginatedMonitorEvents
}
catch (ApiException<ListMonitorEventsV1MonitorsMonitorIdEventsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest](src/ParallelSdk/Requests/MonitorApi/ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMonitorEvents](src/ParallelSdk/Models/PaginatedMonitorEvents.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ListMonitorEventsV1MonitorsMonitorIdEventsGetError](src/ParallelSdk/Errors/ListMonitorEventsV1MonitorsMonitorIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaginatedMonitorResponse&gt; ListMonitorsV1MonitorsGet(ListMonitorsV1MonitorsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List monitors ordered by creation time, newest first.

Monitors are sorted by `created_at` descending. `limit` defaults to 100.
Use `next_cursor` from the response and pass it as `cursor` to fetch the
next page. Pagination ends when `next_cursor` is absent.

By default only `active` monitors are returned. Pass `status=cancelled`
or both values to include cancelled monitors.

The legacy Monitor API (`/v1alpha/monitors` endpoints) is documented under
the `Monitor (Alpha)` tag.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.ListMonitorsV1MonitorsGet(new ListMonitorsV1MonitorsGetRequest());
    // TODO: Handle 'response' of type PaginatedMonitorResponse
}
catch (ApiException<ListMonitorsV1MonitorsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListMonitorsV1MonitorsGetRequest](src/ParallelSdk/Requests/MonitorApi/ListMonitorsV1MonitorsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaginatedMonitorResponse](src/ParallelSdk/Models/PaginatedMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[ListMonitorsV1MonitorsGetError](src/ParallelSdk/Errors/ListMonitorsV1MonitorsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResponse&gt; RetrieveMonitorV1MonitorsMonitorIdGet(RetrieveMonitorV1MonitorsMonitorIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a monitor.

Retrieves a specific monitor by `monitor_id`. Returns the monitor
configuration including status, frequency, query, and webhook settings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.RetrieveMonitorV1MonitorsMonitorIdGet(
        new RetrieveMonitorV1MonitorsMonitorIdGetRequest { MonitorId = "some example string" });
    // TODO: Handle 'response' of type MonitorResponse
}
catch (ApiException<RetrieveMonitorV1MonitorsMonitorIdGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetrieveMonitorV1MonitorsMonitorIdGetRequest](src/ParallelSdk/Requests/MonitorApi/RetrieveMonitorV1MonitorsMonitorIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](src/ParallelSdk/Models/MonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[RetrieveMonitorV1MonitorsMonitorIdGetError](src/ParallelSdk/Errors/RetrieveMonitorV1MonitorsMonitorIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TriggerMonitorRunV1MonitorsMonitorIdTriggerPost(TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate monitor run.

Enqueues a one-off execution of the monitor outside its normal schedule.
The monitor's regular schedule is not affected. An event is only emitted
if the execution detects a material change. Cancelled monitors cannot be
triggered.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.MonitorApi.TriggerMonitorRunV1MonitorsMonitorIdTriggerPost(
        new TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest { MonitorId = "some example string" });
}
catch (ApiException<TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest](src/ParallelSdk/Requests/MonitorApi/TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError](src/ParallelSdk/Errors/TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MonitorResponse&gt; UpdateMonitorV1MonitorsMonitorIdUpdatePost(UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a monitor.

Only fields explicitly included in the request body are changed. Pass
`null` for `webhook` or `metadata` to clear those fields. Pass `type` and
`settings` to update type-specific settings on an `event_stream` monitor.
At least one field must be provided. Cancelled monitors cannot be updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.UpdateMonitorV1MonitorsMonitorIdUpdatePost(
        new UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest
        {
            MonitorId = "some example string",
            Body = new UpdateMonitorRequest(),
        });
    // TODO: Handle 'response' of type MonitorResponse
}
catch (ApiException<UpdateMonitorV1MonitorsMonitorIdUpdatePostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest](src/ParallelSdk/Requests/MonitorApi/UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MonitorResponse](src/ParallelSdk/Models/MonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[UpdateMonitorV1MonitorsMonitorIdUpdatePostError](src/ParallelSdk/Errors/UpdateMonitorV1MonitorsMonitorIdUpdatePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ResponsesApi

> Source: [ResponsesApi](src/ParallelSdk/Api/ResponsesApi.cs)

<details>
<summary><code>Task&lt;ResponseModel&gt; CreateResponseV1ResponsesPost(CreateResponseV1ResponsesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a response.

Generates an answer to the given input, grounded in live web research and
annotated with URL citations. Set `model` to `parallel`; `reasoning.effort`
(`low`/`medium`/`high`) controls how much research is performed, trading
response time for answer quality. Returns an OpenAI-format `Response` as
`application/json`, or a `text/event-stream` of OpenAI Responses SSE
events when `stream=true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ResponsesApi.CreateResponseV1ResponsesPost(new CreateResponseV1ResponsesPostRequest
    {
        Body = new ResponseCreateRequest { Model = "some example string", Input = "some example string" },
    });
    // TODO: Handle 'response' of type ResponseModel
}
catch (ApiException<CreateResponseV1ResponsesPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateResponseV1ResponsesPostRequest](src/ParallelSdk/Requests/ResponsesApi/CreateResponseV1ResponsesPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseModel](src/ParallelSdk/Models/ResponseModel.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[CreateResponseV1ResponsesPostError](src/ParallelSdk/Errors/CreateResponseV1ResponsesPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/ParallelSdk/Api/Search.cs)

<details>
<summary><code>Task&lt;V1SearchResponse&gt; V1SearchV1SearchPost(V1SearchV1SearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the web.

The legacy Search API reference (`/v1beta/search` endpoint) is available
here, and
migration guide is here.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.V1SearchV1SearchPost(new V1SearchV1SearchPostRequest
    {
        Body = new V1SearchRequest { SearchQueries = ["some example string"] },
    });
    // TODO: Handle 'response' of type V1SearchResponse
}
catch (ApiException<V1SearchV1SearchPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[V1SearchV1SearchPostRequest](src/ParallelSdk/Requests/Search/V1SearchV1SearchPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1SearchResponse](src/ParallelSdk/Models/V1SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[V1SearchV1SearchPostError](src/ParallelSdk/Errors/V1SearchV1SearchPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](src/ParallelSdk/Api/Tasks.cs)

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet&gt;&gt; TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsEventsGetV1TasksRunsRunIdEventsGet(
        new TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest { RunId = "some example string" });
    // TODO: Handle 'response' of type IAsyncEnumerable<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>
}
catch (ApiException<TasksRunsEventsGetV1TasksRunsRunIdEventsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest](src/ParallelSdk/Requests/Tasks/TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet](src/ParallelSdk/Models/OneOf/Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsEventsGetV1TasksRunsRunIdEventsGetError](src/ParallelSdk/Errors/TasksRunsEventsGetV1TasksRunsRunIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet&gt;&gt; TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events for a task run.

Returns a stream of events showing progress updates and state changes for the task
run.

For task runs that did not have enable_events set to true during creation, the
frequency of events will be reduced.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(
        new TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest { RunId = "some example string" });
    // TODO: Handle 'response' of type IAsyncEnumerable<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>
}
catch (ApiException<TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest](src/ParallelSdk/Requests/Tasks/TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet](src/ParallelSdk/Models/OneOf/Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError](src/ParallelSdk/Errors/TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskRun&gt; TasksRunsGetV1TasksRunsRunIdGet(TasksRunsGetV1TasksRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsGetV1TasksRunsRunIdGet(new TasksRunsGetV1TasksRunsRunIdGetRequest
    {
        RunId = "some example string",
    });
    // TODO: Handle 'response' of type TaskRun
}
catch (ApiException<TasksRunsGetV1TasksRunsRunIdGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsGetV1TasksRunsRunIdGetRequest](src/ParallelSdk/Requests/Tasks/TasksRunsGetV1TasksRunsRunIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](src/ParallelSdk/Models/TaskRun.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsGetV1TasksRunsRunIdGetError](src/ParallelSdk/Errors/TasksRunsGetV1TasksRunsRunIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskRunInput&gt; TasksRunsInputGetV1TasksRunsRunIdInputGet(TasksRunsInputGetV1TasksRunsRunIdInputGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the input of a run by run_id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsInputGetV1TasksRunsRunIdInputGet(
        new TasksRunsInputGetV1TasksRunsRunIdInputGetRequest { RunId = "some example string" });
    // TODO: Handle 'response' of type TaskRunInput
}
catch (ApiException<TasksRunsInputGetV1TasksRunsRunIdInputGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsInputGetV1TasksRunsRunIdInputGetRequest](src/ParallelSdk/Requests/Tasks/TasksRunsInputGetV1TasksRunsRunIdInputGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRunInput](src/ParallelSdk/Models/TaskRunInput.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsInputGetV1TasksRunsRunIdInputGetError](src/ParallelSdk/Errors/TasksRunsInputGetV1TasksRunsRunIdInputGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskRun&gt; TasksRunsPostV1TasksRunsPost(TasksRunsPostV1TasksRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a task run.

Returns immediately with a run object in status 'queued'.

Beta features can be enabled by setting the 'parallel-beta' header.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsPostV1TasksRunsPost(new TasksRunsPostV1TasksRunsPostRequest
    {
        Body = new TaskRunInput { Processor = "some example string", Input = "some example string" },
    });
    // TODO: Handle 'response' of type TaskRun
}
catch (ApiException<TasksRunsPostV1TasksRunsPostError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsPostV1TasksRunsPostRequest](src/ParallelSdk/Requests/Tasks/TasksRunsPostV1TasksRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](src/ParallelSdk/Models/TaskRun.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsPostV1TasksRunsPostError](src/ParallelSdk/Errors/TasksRunsPostV1TasksRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskRunResult&gt; TasksRunsResultGetV1TasksRunsRunIdResultGet(TasksRunsResultGetV1TasksRunsRunIdResultGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a run result by run_id, blocking until the run is completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksRunsResultGetV1TasksRunsRunIdResultGet(
        new TasksRunsResultGetV1TasksRunsRunIdResultGetRequest { RunId = "some example string" });
    // TODO: Handle 'response' of type TaskRunResult
}
catch (ApiException<TasksRunsResultGetV1TasksRunsRunIdResultGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksRunsResultGetV1TasksRunsRunIdResultGetRequest](src/ParallelSdk/Requests/Tasks/TasksRunsResultGetV1TasksRunsRunIdResultGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRunResult](src/ParallelSdk/Models/TaskRunResult.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksRunsResultGetV1TasksRunsRunIdResultGetError](src/ParallelSdk/Errors/TasksRunsResultGetV1TasksRunsRunIdResultGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet&gt;&gt; TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Streams events from a TaskGroup: status updates and run completions.

The connection will remain open for up to an hour as long as at least one run in the
group is still active.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(
        new TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest { TaskgroupId = "some example string" });
    // TODO: Handle 'response' of type IAsyncEnumerable<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>
}
catch (ApiException<TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest](src/ParallelSdk/Requests/Tasks/TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet](src/ParallelSdk/Models/OneOf/Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError](src/ParallelSdk/Errors/TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskGroupResponse&gt; TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves aggregated status across runs in a TaskGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(
        new TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest { TaskgroupId = "some example string" });
    // TODO: Handle 'response' of type TaskGroupResponse
}
catch (ApiException<TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest](src/ParallelSdk/Requests/Tasks/TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupResponse](src/ParallelSdk/Models/TaskGroupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError](src/ParallelSdk/Errors/TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskGroupResponse&gt; TasksTaskgroupsPostV1TasksGroupsPost(TasksTaskgroupsPostV1TasksGroupsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a TaskGroup to group and track multiple runs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksTaskgroupsPostV1TasksGroupsPost(
        new TasksTaskgroupsPostV1TasksGroupsPostRequest { Body = new CreateTaskGroupRequest() });
    // TODO: Handle 'response' of type TaskGroupResponse
}
catch (ApiException<TasksTaskgroupsPostV1TasksGroupsPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksTaskgroupsPostV1TasksGroupsPostRequest](src/ParallelSdk/Requests/Tasks/TasksTaskgroupsPostV1TasksGroupsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupResponse](src/ParallelSdk/Models/TaskGroupResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksTaskgroupsPostV1TasksGroupsPostError](src/ParallelSdk/Errors/TasksTaskgroupsPostV1TasksGroupsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IAsyncEnumerable&lt;Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet&gt;&gt; TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves task runs in a TaskGroup and optionally their inputs and outputs.

All runs within a TaskGroup are returned as a stream. To get the inputs and/or
outputs back in the stream, set the corresponding `include_input` and
`include_output` parameters to `true`.

The stream is resumable using the `event_id` as the cursor. To resume a stream,
specify the `last_event_id` parameter with the `event_id` of the last event in the
stream. The stream will resume from the next event after the `last_event_id`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(
        new TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest { TaskgroupId = "some example string" });
    // TODO: Handle 'response' of type IAsyncEnumerable<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>
}
catch (ApiException<TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest](src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IAsyncEnumerable&lt;[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet](src/ParallelSdk/Models/OneOf/Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet.cs)&gt;</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError](src/ParallelSdk/Errors/TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskRun&gt; TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves run status by run_id.

This endpoint is equivalent to fetching run status directly using the
`retrieve()` method or the `tasks/runs` GET endpoint.

The run result is available from the `/result` endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(
        new TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest
        {
            TaskgroupId = "some example string",
            RunId = "some example string",
        });
    // TODO: Handle 'response' of type TaskRun
}
catch (ApiException<TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest](src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskRun](src/ParallelSdk/Models/TaskRun.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError](src/ParallelSdk/Errors/TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskGroupRunResponse&gt; TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates multiple task runs within a TaskGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Tasks.TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(
        new TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest
        {
            TaskgroupId = "some example string",
            Body = new TaskGroupRunRequest
            {
                Inputs = [new TaskRunInput { Processor = "some example string", Input = "some example string" }],
            },
        });
    // TODO: Handle 'response' of type TaskGroupRunResponse
}
catch (ApiException<TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest](src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskGroupRunResponse](src/ParallelSdk/Models/TaskGroupRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/ParallelSdk/Core/Exceptions/ApiException.cs)&lt;[TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError](src/ParallelSdk/Errors/TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

