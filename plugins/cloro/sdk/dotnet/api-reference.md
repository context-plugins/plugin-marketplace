# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CloroClient](src/Cloro/CloroClient.cs)

## Async

> Source: [Async](src/Cloro/Api/Async.cs)

<details>
<summary><code>Task&lt;ClearQueueResponse&gt; ClearAsyncQueue(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes every task still in the `QUEUED` state for the authenticated organization, letting you drain a pending backlog in one call instead of opening a support request. Tasks that are already `PROCESSING` are in-flight on a worker and are left untouched, as are `COMPLETED` and `FAILED` tasks. Queued tasks have not been charged, so clearing them does not affect your credit balance. The call is safe to repeat — if the queue is already empty it simply returns `cleared: 0`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Async.ClearAsyncQueue();
    // TODO: Handle 'response' of type ClearQueueResponse
}
catch (ApiException<ClearAsyncQueueError> ex)
{
    if (ex.Error.TryGetAuthenticationError(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClearQueueResponse](src/Cloro/Models/ClearQueueResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[ClearAsyncQueueError](src/Cloro/Errors/ClearAsyncQueueError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AsyncTaskCreateResponse&gt; CreateAsyncTask(CreateAsyncTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit an asynchronous task for background processing. Returns a task ID that you can use to poll for results or receive via webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Async.CreateAsyncTask(new CreateAsyncTaskRequest
    {
        Body = new BatchTaskRequest
        {
            TaskType = TaskType.Chatgpt,
            Payload = payload,
            Priority = 5,
            IdempotencyKey = "your-custom-identifier-123",
            Webhook = new Webhook { Url = "https://your-app.com/webhook-handler" },
        },
    });
    // TODO: Handle 'response' of type AsyncTaskCreateResponse
}
catch (ApiException<CreateAsyncTaskError> ex)
{
    if (ex.Error.TryGetValidationError(out var error))
    {
        // TODO: Handle 'error' of type ValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateAsyncTaskRequest](src/Cloro/Requests/Async/CreateAsyncTaskRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncTaskCreateResponse](src/Cloro/Models/AsyncTaskCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[CreateAsyncTaskError](src/Cloro/Errors/CreateAsyncTaskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BatchTaskResponse&gt; CreateBatchAsyncTasks(CreateBatchAsyncTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 500 async tasks in one request. Each task is validated independently, so one invalid task does not block the rest. Returns per-task results.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Async.CreateBatchAsyncTasks(new CreateBatchAsyncTasksRequest
    {
        Body = [
            new BatchTaskRequest
            {
                TaskType = TaskType.Chatgpt,
                Payload = payload,
                Priority = 5,
                IdempotencyKey = "batch-chatgpt-001",
                Webhook = new Webhook { Url = "https://your-app.com/webhook-handler" },
            },
            new BatchTaskRequest
            {
                TaskType = TaskType.Perplexity,
                Payload = payload,
                Priority = 3,
                IdempotencyKey = "batch-perplexity-001",
            },
        ],
    });
    // TODO: Handle 'response' of type BatchTaskResponse
}
catch (ApiException<CreateBatchAsyncTasksError> ex)
{
    if (ex.Error.TryGetValidationError(out var error))
    {
        // TODO: Handle 'error' of type ValidationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBatchAsyncTasksRequest](src/Cloro/Requests/Async/CreateBatchAsyncTasksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchTaskResponse](src/Cloro/Models/BatchTaskResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[CreateBatchAsyncTasksError](src/Cloro/Errors/CreateBatchAsyncTasksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AsyncStatusResponse&gt; GetAsyncStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get organization-wide async queue metrics including queued and processing task counts, and concurrency usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Async.GetAsyncStatus();
    // TODO: Handle 'response' of type AsyncStatusResponse
}
catch (ApiException<GetAsyncStatusError> ex)
{
    if (ex.Error.TryGetAuthenticationError(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsyncStatusResponse](src/Cloro/Models/AsyncStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetAsyncStatusError](src/Cloro/Errors/GetAsyncStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TaskStatusResponse&gt; GetTaskStatus(GetTaskStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the status and result of an asynchronous task by ID. Returns the task state and, once complete, the full structured result payload.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Async.GetTaskStatus(new GetTaskStatusRequest
    {
        TaskId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TaskStatusResponse
}
catch (ApiException<GetTaskStatusError> ex)
{
    if (ex.Error.TryGetAuthenticationError(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTaskStatusRequest](src/Cloro/Requests/Async/GetTaskStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TaskStatusResponse](src/Cloro/Models/TaskStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetTaskStatusError](src/Cloro/Errors/GetTaskStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Countries

> Source: [Countries](src/Cloro/Api/Countries.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;string&gt;&gt; GetCountries(GetCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to get countries available for specific AI providers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Countries.GetCountries(new GetCountriesRequest { Model = Model.Chatgpt });
    // TODO: Handle 'response' of type IReadOnlyList<string>
}
catch (ApiException<GetCountriesError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevCountriesApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevCountriesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCountriesRequest](src/Cloro/Requests/Countries/GetCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;string&gt;</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetCountriesError](src/Cloro/Errors/GetCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Credits

> Source: [Credits](src/Cloro/Api/Credits.cs)

<details>
<summary><code>Task&lt;CreditsResponse&gt; GetCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read your organization's current credit balance and billing cycle. Lets you observe your balance programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async tasks are re-checked against your live balance when the scheduler picks them up.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credits.GetCredits();
    // TODO: Handle 'response' of type CreditsResponse
}
catch (ApiException<GetCreditsError> ex)
{
    if (ex.Error.TryGetAuthenticationErrorCloroDevCreditsApi(out var error))
    {
        // TODO: Handle 'error' of type AuthenticationErrorCloroDevCreditsApi
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditsResponse](src/Cloro/Models/CreditsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetCreditsError](src/Cloro/Errors/GetCreditsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MonitorApi

> Source: [MonitorApi](src/Cloro/Api/MonitorApi.cs)

<details>
<summary><code>Task&lt;GoogleProductResponse&gt; GetGoogleProduct(GetGoogleProductRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the product panel that a Google Search shopping card or a Google AI Mode product opens: merchant offers, description, specifications, reviews, images and related products. Send the `productResultToken` from a Google Search `result.shoppingCards` card, or from a Google AI Mode `result.shoppingCards` or `result.inlineProducts` entry.

Costs 1 credit, plus the 2-credit sync surcharge, and only when the request succeeds. A token expires five minutes after the scrape that issued it. If you send the request async, set a high `priority`, so that the token does not expire in the queue.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.GetGoogleProduct(new GetGoogleProductRequest
    {
        Body = new GoogleProductRequest { ProductResultToken = "some example string" },
    });
    // TODO: Handle 'response' of type GoogleProductResponse
}
catch (ApiException<GetGoogleProductError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGoogleProductRequest](src/Cloro/Requests/MonitorApi/GetGoogleProductRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleProductResponse](src/Cloro/Models/GoogleProductResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetGoogleProductError](src/Cloro/Errors/GetGoogleProductError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AiModeMonitorResponse&gt; MonitorAiMode(MonitorAiModeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from AI Mode about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorAiMode(new MonitorAiModeRequest
    {
        Body = new AiModeMonitorRequest { Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type AiModeMonitorResponse
}
catch (ApiException<MonitorAiModeError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorAiModeRequest](src/Cloro/Requests/MonitorApi/MonitorAiModeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AiModeMonitorResponse](src/Cloro/Models/AiModeMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorAiModeError](src/Cloro/Errors/MonitorAiModeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BingAiModeMonitorResponse&gt; MonitorBingAiMode(MonitorBingAiModeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract the answer, sources and citation pills from Bing AI Mode (bing.com/copilotsearch) for a prompt, in the country you select.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorBingAiMode(new MonitorBingAiModeRequest
    {
        Body = new BingAiModeMonitorRequest { Prompt = "some example string", Country = CountryCode13.Ad },
    });
    // TODO: Handle 'response' of type BingAiModeMonitorResponse
}
catch (ApiException<MonitorBingAiModeError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorBingAiModeRequest](src/Cloro/Requests/MonitorApi/MonitorBingAiModeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BingAiModeMonitorResponse](src/Cloro/Models/BingAiModeMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorBingAiModeError](src/Cloro/Errors/MonitorBingAiModeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ChatGptMonitorResponse&gt; MonitorChatgpt(MonitorChatgptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from ChatGPT — answer text, cited sources, shopping cards, brand entities, and ads — for any prompt across supported regions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorChatgpt(new MonitorChatgptRequest
    {
        Body = new ChatGptMonitorRequest { Prompt = "some example string", Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type ChatGptMonitorResponse
}
catch (ApiException<MonitorChatgptError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorChatgptRequest](src/Cloro/Requests/MonitorApi/MonitorChatgptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChatGptMonitorResponse](src/Cloro/Models/ChatGptMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorChatgptError](src/Cloro/Errors/MonitorChatgptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CopilotMonitorResponse&gt; MonitorCopilot(MonitorCopilotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Microsoft Copilot about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorCopilot(new MonitorCopilotRequest
    {
        Body = new CopilotMonitorRequest { Prompt = "some example string", Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type CopilotMonitorResponse
}
catch (ApiException<MonitorCopilotError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorCopilotRequest](src/Cloro/Requests/MonitorApi/MonitorCopilotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CopilotMonitorResponse](src/Cloro/Models/CopilotMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorCopilotError](src/Cloro/Errors/MonitorCopilotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GeminiMonitorResponse&gt; MonitorGemini(MonitorGeminiRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Gemini — generated answer text and cited sources for any prompt, with Markdown and HTML export formats

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorGemini(new MonitorGeminiRequest
    {
        Body = new GeminiMonitorRequest { Prompt = "some example string", Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type GeminiMonitorResponse
}
catch (ApiException<MonitorGeminiError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorGeminiRequest](src/Cloro/Requests/MonitorApi/MonitorGeminiRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeminiMonitorResponse](src/Cloro/Models/GeminiMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorGeminiError](src/Cloro/Errors/MonitorGeminiError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleMonitorResponse&gt; MonitorGoogle(MonitorGoogleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Google Search including organic results, People Also Ask, related searches, and optional AI Overview

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorGoogle(new MonitorGoogleRequest
    {
        Body = new GoogleMonitorRequest { Query = "some example string", Country = CountryCode8.Ad },
    });
    // TODO: Handle 'response' of type GoogleMonitorResponse
}
catch (ApiException<MonitorGoogleError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorGoogleRequest](src/Cloro/Requests/MonitorApi/MonitorGoogleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleMonitorResponse](src/Cloro/Models/GoogleMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorGoogleError](src/Cloro/Errors/MonitorGoogleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleNewsMonitorResponse&gt; MonitorGoogleNews(MonitorGoogleNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured news articles from Google News including titles, links, snippets, sources, dates, and thumbnails

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorGoogleNews(new MonitorGoogleNewsRequest
    {
        Body = new GoogleNewsMonitorRequest { Country = CountryCode1.Ad },
    });
    // TODO: Handle 'response' of type GoogleNewsMonitorResponse
}
catch (ApiException<MonitorGoogleNewsError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorGoogleNewsRequest](src/Cloro/Requests/MonitorApi/MonitorGoogleNewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleNewsMonitorResponse](src/Cloro/Models/GoogleNewsMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorGoogleNewsError](src/Cloro/Errors/MonitorGoogleNewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GrokMonitorResponse&gt; MonitorGrok(MonitorGrokRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Grok — answer text and cited sources, including X/Twitter references — for any prompt across supported regions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorGrok(new MonitorGrokRequest
    {
        Body = new GrokMonitorRequest { Prompt = "some example string", Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type GrokMonitorResponse
}
catch (ApiException<MonitorGrokError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorGrokRequest](src/Cloro/Requests/MonitorApi/MonitorGrokRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GrokMonitorResponse](src/Cloro/Models/GrokMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorGrokError](src/Cloro/Errors/MonitorGrokError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PerplexityMonitorResponse&gt; MonitorPerplexity(MonitorPerplexityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Extract structured data from Perplexity AI about your brand, products, or any topic across various regions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.MonitorPerplexity(new MonitorPerplexityRequest
    {
        Body = new PerplexityMonitorRequest { Prompt = "some example string", Country = CountryCode2.Ad },
    });
    // TODO: Handle 'response' of type PerplexityMonitorResponse
}
catch (ApiException<MonitorPerplexityError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MonitorPerplexityRequest](src/Cloro/Requests/MonitorApi/MonitorPerplexityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PerplexityMonitorResponse](src/Cloro/Models/PerplexityMonitorResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[MonitorPerplexityError](src/Cloro/Errors/MonitorPerplexityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GoogleGotoResponse&gt; ResolveGoogleGoto(ResolveGoogleGotoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve one Google redirect link to its destination URL. Send the `redirectLink` that ships beside every resolved link on a Google Search, Google News, or AI Mode response, and the response gives you the URL it points to.

Charges no credits, does not use a concurrency slot, and counts against the per-second rate limit like any other call. Each request resolves one link, and Google gets at most 10 seconds to answer.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MonitorApi.ResolveGoogleGoto(new ResolveGoogleGotoRequest
    {
        Body = new GoogleGotoRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type GoogleGotoResponse
}
catch (ApiException<ResolveGoogleGotoError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevMonitorApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevMonitorApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ResolveGoogleGotoRequest](src/Cloro/Requests/MonitorApi/ResolveGoogleGotoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GoogleGotoResponse](src/Cloro/Models/GoogleGotoResponse.cs)</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[ResolveGoogleGotoError](src/Cloro/Errors/ResolveGoogleGotoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## StatesApi

> Source: [StatesApi](src/Cloro/Api/StatesApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;V1StatesResponse&gt;&gt; GetStates(GetStatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of US states supported for state-level geo-targeting. Only US is currently supported — other country values return an empty array.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.StatesApi.GetStates(new GetStatesRequest { Country = "US" });
    // TODO: Handle 'response' of type IReadOnlyList<V1StatesResponse>
}
catch (ApiException<GetStatesError> ex)
{
    if (ex.Error.TryGetValidationErrorCloroDevCountriesApi(out var error))
    {
        // TODO: Handle 'error' of type ValidationErrorCloroDevCountriesApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetStatesRequest](src/Cloro/Requests/StatesApi/GetStatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[V1StatesResponse](src/Cloro/Models/V1StatesResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Cloro/Core/Exceptions/ApiException.cs)&lt;[GetStatesError](src/Cloro/Errors/GetStatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

