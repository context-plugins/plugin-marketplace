# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [LeadspaceClient](src/Leadspace/LeadspaceClient.cs)

## Authorization

> Source: [Authorization](src/Leadspace/Api/Authorization.cs)

<details>
<summary><code>Task&lt;AuthorizationResponse&gt; CreateAuthorizationToken(CreateAuthorizationTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire every 24 hours.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Authorization.CreateAuthorizationToken(new CreateAuthorizationTokenRequest
    {
        Body = new AuthorizationRequest
        {
            User = "some example string",
            Pass = "some example string",
            Audience = "some example string",
        },
    });
    // TODO: Handle 'response' of type AuthorizationResponse
}
catch (ApiException<CreateAuthorizationTokenError> ex)
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

<code>[CreateAuthorizationTokenRequest](src/Leadspace/Requests/Authorization/CreateAuthorizationTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizationResponse](src/Leadspace/Models/AuthorizationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[CreateAuthorizationTokenError](src/Leadspace/Errors/CreateAuthorizationTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuthorizationResponse&gt; RefreshAuthorizationToken(RefreshAuthorizationTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a refreshToken for a new bearer token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Authorization.RefreshAuthorizationToken(new RefreshAuthorizationTokenRequest
    {
        Body = new RefreshRequest { User = "some example string", RefreshToken = "some example string" },
    });
    // TODO: Handle 'response' of type AuthorizationResponse
}
catch (ApiException<RefreshAuthorizationTokenError> ex)
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

<code>[RefreshAuthorizationTokenRequest](src/Leadspace/Requests/Authorization/RefreshAuthorizationTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizationResponse](src/Leadspace/Models/AuthorizationResponse.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[RefreshAuthorizationTokenError](src/Leadspace/Errors/RefreshAuthorizationTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Discovery

> Source: [Discovery](src/Leadspace/Api/Discovery.cs)

<details>
<summary><code>Task&lt;DiscoveryAccepted&gt; DiscoverCompanyContacts(DiscoverCompanyContactsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Discovery.DiscoverCompanyContacts(new DiscoverCompanyContactsRequest
    {
        Body = new DiscoveryRequest { Data = [new DiscoveryItem()] },
    });
    // TODO: Handle 'response' of type DiscoveryAccepted
}
catch (ApiException<DiscoverCompanyContactsError> ex)
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

<code>[DiscoverCompanyContactsRequest](src/Leadspace/Requests/Discovery/DiscoverCompanyContactsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiscoveryAccepted](src/Leadspace/Models/DiscoveryAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[DiscoverCompanyContactsError](src/Leadspace/Errors/DiscoverCompanyContactsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Enrichment

> Source: [Enrichment](src/Leadspace/Api/Enrichment.cs)

<details>
<summary><code>Task&lt;BulkAccepted&gt; EnrichBulkRecords(EnrichBulkRecordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts up to 500 records per request and returns a polling URI. An optional callbackUrl receives a notification when processing completes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Enrichment.EnrichBulkRecords(new EnrichBulkRecordsRequest
    {
        Body = new BulkEnrichmentRequest { Data = [new SingleEnrichmentRequest()] },
    });
    // TODO: Handle 'response' of type BulkAccepted
}
catch (ApiException<EnrichBulkRecordsError> ex)
{
    if (ex.Error.TryGetErrorLeadspaceApiV4EnrichmentApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorLeadspaceApiV4EnrichmentApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichBulkRecordsRequest](src/Leadspace/Requests/Enrichment/EnrichBulkRecordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkAccepted](src/Leadspace/Models/BulkAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[EnrichBulkRecordsError](src/Leadspace/Errors/EnrichBulkRecordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EnrichmentResult&gt; EnrichSingleRecord(EnrichSingleRecordRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Synchronously enriches one record. Account enrichment requires a company name. Person enrichment requires first name, last name, and one of company name, email address, or website.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Enrichment.EnrichSingleRecord(new EnrichSingleRecordRequest
    {
        Body = new SingleEnrichmentRequest(),
    });
    // TODO: Handle 'response' of type EnrichmentResult
}
catch (ApiException<EnrichSingleRecordError> ex)
{
    if (ex.Error.TryGetErrorLeadspaceApiV4EnrichmentApi(out var error))
    {
        // TODO: Handle 'error' of type ErrorLeadspaceApiV4EnrichmentApi
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[EnrichSingleRecordRequest](src/Leadspace/Requests/Enrichment/EnrichSingleRecordRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnrichmentResult](src/Leadspace/Models/EnrichmentResult.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[EnrichSingleRecordError](src/Leadspace/Errors/EnrichSingleRecordError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Intent

> Source: [Intent](src/Leadspace/Api/Intent.cs)

<details>
<summary><code>Task&lt;IntentAccepted&gt; ScoreCompanyIntent(ScoreCompanyIntentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a bulk of companies for intent refresh. Company name is required. Returns a polling URI.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Intent.ScoreCompanyIntent(new ScoreCompanyIntentRequest
    {
        Body = new IntentRequest { Data = [new Datum()] },
    });
    // TODO: Handle 'response' of type IntentAccepted
}
catch (ApiException<ScoreCompanyIntentError> ex)
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

<code>[ScoreCompanyIntentRequest](src/Leadspace/Requests/Intent/ScoreCompanyIntentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntentAccepted](src/Leadspace/Models/IntentAccepted.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[ScoreCompanyIntentError](src/Leadspace/Errors/ScoreCompanyIntentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Results

> Source: [Results](src/Leadspace/Api/Results.cs)

<details>
<summary><code>Task&lt;BulkResults&gt; GetBulkEnrichmentResults(GetBulkEnrichmentResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the results of a previously submitted bulk enrichment job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.GetBulkEnrichmentResults(new GetBulkEnrichmentResultsRequest
    {
        BulkId = "some example string",
    });
    // TODO: Handle 'response' of type BulkResults
}
catch (ApiException<GetBulkEnrichmentResultsError> ex)
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

<code>[GetBulkEnrichmentResultsRequest](src/Leadspace/Requests/Results/GetBulkEnrichmentResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkResults](src/Leadspace/Models/BulkResults.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[GetBulkEnrichmentResultsError](src/Leadspace/Errors/GetBulkEnrichmentResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DiscoveryResults&gt; GetDiscoveryResults(GetDiscoveryResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.GetDiscoveryResults(new GetDiscoveryResultsRequest
    {
        BulkId = "some example string",
    });
    // TODO: Handle 'response' of type DiscoveryResults
}
catch (ApiException<GetDiscoveryResultsError> ex)
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

<code>[GetDiscoveryResultsRequest](src/Leadspace/Requests/Results/GetDiscoveryResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DiscoveryResults](src/Leadspace/Models/DiscoveryResults.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[GetDiscoveryResultsError](src/Leadspace/Errors/GetDiscoveryResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IntentResults&gt; GetIntentResults(GetIntentResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Results.GetIntentResults(new GetIntentResultsRequest { JobId = "some example string" });
    // TODO: Handle 'response' of type IntentResults
}
catch (ApiException<GetIntentResultsError> ex)
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

<code>[GetIntentResultsRequest](src/Leadspace/Requests/Results/GetIntentResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntentResults](src/Leadspace/Models/IntentResults.cs)</code>

**OnError**: <code>[ApiException](src/Leadspace/Core/Exceptions/ApiException.cs)&lt;[GetIntentResultsError](src/Leadspace/Errors/GetIntentResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

