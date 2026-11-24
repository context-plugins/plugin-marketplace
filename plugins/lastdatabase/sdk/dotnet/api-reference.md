# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [LastDatabaseClient](src/LastDatabase/LastDatabaseClient.cs)

<details>
<summary><code>Task&lt;LeadSearchResponse&gt; SearchLeads(SearchLeadsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search email, phone, or fax lead inventory.

The default lead type is email.

For phone searches, the public industry parameter maps
to the phone category field.

The current endpoint does not expose page, offset, or
cursor pagination.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SearchLeads(new SearchLeadsRequest
    {
        Country = "usa",
        City = "New York",
        Industry = "healthcare",
        Limit = 10,
    });
    // TODO: Handle 'response' of type LeadSearchResponse
}
catch (ApiException<SearchLeadsError> ex)
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

<code>[SearchLeadsRequest](src/LastDatabase/Requests/SearchLeadsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LeadSearchResponse](src/LastDatabase/Models/LeadSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/LastDatabase/Core/Exceptions/ApiException.cs)&lt;[SearchLeadsError](src/LastDatabase/Errors/SearchLeadsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

