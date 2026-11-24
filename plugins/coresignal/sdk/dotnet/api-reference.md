# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [CoresignalClient](src/Coresignal/CoresignalClient.cs)

## Collect

> Source: [Collect](src/Coresignal/Api/Collect.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Company&gt;&gt; BulkCollectCompanies(BulkCollectCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve multiple full company records by an array of IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collect.BulkCollectCompanies(new BulkCollectCompaniesRequest
    {
        Body = new BulkCollectRequest(),
    });
    // TODO: Handle 'response' of type IReadOnlyList<Company>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[BulkCollectCompaniesRequest](src/Coresignal/Requests/Collect/BulkCollectCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Company](src/Coresignal/Models/Company.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Coresignal/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Coresignal/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Company&gt; CollectCompany(CollectCompanyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the full company record for the given ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Collect.CollectCompany(new CollectCompanyRequest { Id = 1L });
    // TODO: Handle 'response' of type Company
}
catch (ApiException<CollectCompanyError> ex)
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

<code>[CollectCompanyRequest](src/Coresignal/Requests/Collect/CollectCompanyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Company](src/Coresignal/Models/Company.cs)</code>

**OnError**: <code>[ApiException](src/Coresignal/Core/Exceptions/ApiException.cs)&lt;[CollectCompanyError](src/Coresignal/Errors/CollectCompanyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Coresignal/Api/Search.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;long&gt;&gt; SearchCompaniesByEsDsl(SearchCompaniesByEsDslRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a full Elasticsearch DSL query body.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchCompaniesByEsDsl(new SearchCompaniesByEsDslRequest { Body = body });
    // TODO: Handle 'response' of type IReadOnlyList<long>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompaniesByEsDslRequest](src/Coresignal/Requests/Search/SearchCompaniesByEsDslRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;long&gt;</code>

**OnError**: <code>[ApiException](src/Coresignal/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Coresignal/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;long&gt;&gt; SearchCompaniesByFilter(SearchCompaniesByFilterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search company records using a structured filter object. Returns matching record IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchCompaniesByFilter(new SearchCompaniesByFilterRequest
    {
        Body = new CompanyFilter(),
    });
    // TODO: Handle 'response' of type IReadOnlyList<long>
}
catch (ApiException<SearchCompaniesByFilterError> ex)
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

<code>[SearchCompaniesByFilterRequest](src/Coresignal/Requests/Search/SearchCompaniesByFilterRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;long&gt;</code>

**OnError**: <code>[ApiException](src/Coresignal/Core/Exceptions/ApiException.cs)&lt;[SearchCompaniesByFilterError](src/Coresignal/Errors/SearchCompaniesByFilterError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

