# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [Crawl4AiClient](src/Crawl4Ai/Crawl4AiClient.cs)

<details>
<summary><code>Task GetCrawlJob(GetCrawlJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the status and results of a crawl job

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.GetCrawlJob(new GetCrawlJobRequest { JobId = "some example string" });
}
catch (ApiException<GetCrawlJobError> ex)
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

<code>[GetCrawlJobRequest](src/Crawl4Ai/Requests/GetCrawlJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Crawl4Ai/Core/Exceptions/ApiException.cs)&lt;[GetCrawlJobError](src/Crawl4Ai/Errors/GetCrawlJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task SubmitCrawlJob(SubmitCrawlJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit a new web crawling job

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.SubmitCrawlJob(new SubmitCrawlJobRequest
    {
        Body = new CrawlJobRequest { Urls = ["some example string"] },
    });
}
catch (ApiException<SubmitCrawlJobError> ex)
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

<code>[SubmitCrawlJobRequest](src/Crawl4Ai/Requests/SubmitCrawlJobRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Crawl4Ai/Core/Exceptions/ApiException.cs)&lt;[SubmitCrawlJobError](src/Crawl4Ai/Errors/SubmitCrawlJobError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

