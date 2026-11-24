# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [SurfeClient](src/Surfe/SurfeClient.cs)

## Account

> Source: [Account](src/Surfe/Api/Account.cs)

<details>
<summary><code>Task&lt;CreditBalance&gt; GetCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetCredits();
    // TODO: Handle 'response' of type CreditBalance
}
catch (ApiException<GetCreditsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreditBalance](src/Surfe/Models/CreditBalance.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[GetCreditsError](src/Surfe/Errors/GetCreditsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Companies

> Source: [Companies](src/Surfe/Api/Companies.cs)

<details>
<summary><code>Task&lt;CompanyEnrichmentResult&gt; GetCompanyEnrichment(GetCompanyEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a company enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.GetCompanyEnrichment(new GetCompanyEnrichmentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type CompanyEnrichmentResult
}
catch (ApiException<GetCompanyEnrichmentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyEnrichmentRequest](src/Surfe/Requests/Companies/GetCompanyEnrichmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyEnrichmentResult](src/Surfe/Models/CompanyEnrichmentResult.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[GetCompanyEnrichmentError](src/Surfe/Errors/GetCompanyEnrichmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanySearchResponse&gt; SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for companies against Ideal Customer Profile filters (industry, employee count, revenue, location, keywords). When credit charging is enabled the call deducts ICP search credits and returns 402 when the balance is insufficient.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.SearchCompanies(new SearchCompaniesRequest
    {
        Body = new CompanySearchRequest { Limit = 1, Filters = new CompanyFilters() },
    });
    // TODO: Handle 'response' of type CompanySearchResponse
}
catch (ApiException<SearchCompaniesError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchCompaniesRequest](src/Surfe/Requests/Companies/SearchCompaniesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanySearchResponse](src/Surfe/Models/CompanySearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[SearchCompaniesError](src/Surfe/Errors/SearchCompaniesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnrichmentJobAccepted&gt; StartCompanyEnrichment(StartCompanyEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for companies identified by domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Companies.StartCompanyEnrichment(new StartCompanyEnrichmentRequest
    {
        Body = new CompanyEnrichmentRequest { Companies = [new Company1()] },
    });
    // TODO: Handle 'response' of type EnrichmentJobAccepted
}
catch (ApiException<StartCompanyEnrichmentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartCompanyEnrichmentRequest](src/Surfe/Requests/Companies/StartCompanyEnrichmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichmentJobAccepted](src/Surfe/Models/EnrichmentJobAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[StartCompanyEnrichmentError](src/Surfe/Errors/StartCompanyEnrichmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## People

> Source: [People](src/Surfe/Api/People.cs)

<details>
<summary><code>Task&lt;PeopleFindByEmailResponse&gt; FindPeopleByEmail(FindPeopleByEmailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrich people directly from a list of email addresses, returning the matched person profile and firmographics where available.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.FindPeopleByEmail(new FindPeopleByEmailRequest
    {
        Body = new PeopleFindByEmailRequest { Emails = ["user@example.com"] },
    });
    // TODO: Handle 'response' of type PeopleFindByEmailResponse
}
catch (ApiException<FindPeopleByEmailError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FindPeopleByEmailRequest](src/Surfe/Requests/People/FindPeopleByEmailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PeopleFindByEmailResponse](src/Surfe/Models/PeopleFindByEmailResponse.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[FindPeopleByEmailError](src/Surfe/Errors/FindPeopleByEmailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PeopleEnrichmentResult&gt; GetPeopleEnrichment(GetPeopleEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.GetPeopleEnrichment(new GetPeopleEnrichmentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PeopleEnrichmentResult
}
catch (ApiException<GetPeopleEnrichmentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPeopleEnrichmentRequest](src/Surfe/Requests/People/GetPeopleEnrichmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PeopleEnrichmentResult](src/Surfe/Models/PeopleEnrichmentResult.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[GetPeopleEnrichmentError](src/Surfe/Errors/GetPeopleEnrichmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PeopleSearchResponse&gt; SearchPeople(SearchPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for people by persona filters (job titles, seniorities, departments) and company filters (industry, headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are paged with nextPageToken.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.SearchPeople(new SearchPeopleRequest
    {
        Body = new PeopleSearchRequest { Limit = 1 },
    });
    // TODO: Handle 'response' of type PeopleSearchResponse
}
catch (ApiException<SearchPeopleError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPeopleRequest](src/Surfe/Requests/People/SearchPeopleRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PeopleSearchResponse](src/Surfe/Models/PeopleSearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[SearchPeopleError](src/Surfe/Errors/SearchPeopleError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnrichmentJobAccepted&gt; StartPeopleEnrichment(StartPeopleEnrichmentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook callback.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.People.StartPeopleEnrichment(new StartPeopleEnrichmentRequest
    {
        Body = new PeopleEnrichmentRequest { People = [new PersonInput()], Include = new IncludeSurfePeopleApi() },
    });
    // TODO: Handle 'response' of type EnrichmentJobAccepted
}
catch (ApiException<StartPeopleEnrichmentError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[StartPeopleEnrichmentRequest](src/Surfe/Requests/People/StartPeopleEnrichmentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichmentJobAccepted](src/Surfe/Models/EnrichmentJobAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[StartPeopleEnrichmentError](src/Surfe/Errors/StartPeopleEnrichmentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Recommendations

> Source: [Recommendations](src/Surfe/Api/Recommendations.cs)

<details>
<summary><code>Task&lt;RecommendationsFetchResponse&gt; FetchRecommendations(FetchRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recommendations.FetchRecommendations(new FetchRecommendationsRequest
    {
        Body = new RecommendationsFetchRequest(),
    });
    // TODO: Handle 'response' of type RecommendationsFetchResponse
}
catch (ApiException<FetchRecommendationsError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FetchRecommendationsRequest](src/Surfe/Requests/Recommendations/FetchRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RecommendationsFetchResponse](src/Surfe/Models/RecommendationsFetchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[FetchRecommendationsError](src/Surfe/Errors/FetchRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IcpDefinition&gt; UpsertIcp(UpsertIcpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Recommendations.UpsertIcp(new UpsertIcpRequest { Body = new IcpDefinition() });
    // TODO: Handle 'response' of type IcpDefinition
}
catch (ApiException<UpsertIcpError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpsertIcpRequest](src/Surfe/Requests/Recommendations/UpsertIcpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IcpDefinition](src/Surfe/Models/IcpDefinition.cs)</code>

**OnError**: <code>[ApiException](src/Surfe/Core/Exceptions/ApiException.cs)&lt;[UpsertIcpError](src/Surfe/Errors/UpsertIcpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

