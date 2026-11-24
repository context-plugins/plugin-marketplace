# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [RocketReachClient](src/RocketReach/RocketReachClient.cs)

## Account

> Source: [Account](src/RocketReach/Api/Account.cs)

<details>
<summary><code>Task&lt;ApiKeyModel&gt; CreateNewApiKey(CreateNewApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create New API Key

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.CreateNewApiKey(new CreateNewApiKeyRequest());
    // TODO: Handle 'response' of type ApiKeyModel
}
catch (ApiException<CreateNewApiKeyError> ex)
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

<code>[CreateNewApiKeyRequest](src/RocketReach/Requests/Account/CreateNewApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyModel](src/RocketReach/Models/ApiKeyModel.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateNewApiKeyError](src/RocketReach/Errors/CreateNewApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserModel&gt; GetAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetAccount();
    // TODO: Handle 'response' of type UserModel
}
catch (ApiException<GetAccountError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserModel](src/RocketReach/Models/UserModel.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[GetAccountError](src/RocketReach/Errors/GetAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UniversalCreditsUserModelWithExtraAttributes&gt; GetUniversalAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve & Manage Account Details

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetUniversalAccount();
    // TODO: Handle 'response' of type UniversalCreditsUserModelWithExtraAttributes
}
catch (ApiException<GetUniversalAccountError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UniversalCreditsUserModelWithExtraAttributes](src/RocketReach/Models/UniversalCreditsUserModelWithExtraAttributes.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[GetUniversalAccountError](src/RocketReach/Errors/GetUniversalAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CompanyDataApi

> Source: [CompanyDataApi](src/RocketReach/Api/CompanyDataApi.cs)

<details>
<summary><code>Task&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes&gt; CreateCompanyLookup(CreateCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyDataApi.CreateCompanyLookup(new CreateCompanyLookupRequest());
    // TODO: Handle 'response' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
}
catch (ApiException<CreateCompanyLookupError> ex)
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

<code>[CreateCompanyLookupRequest](src/RocketReach/Requests/CompanyDataApi/CreateCompanyLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/RocketReach/Models/CompiledCompanyApiSerializerWithExtendedCompanyAttributes.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateCompanyLookupError](src/RocketReach/Errors/CreateCompanyLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CompiledCompanyPublicDetails&gt;&gt; CreateCompanySearch(CreateCompanySearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyDataApi.CreateCompanySearch(new CreateCompanySearchRequest
    {
        OrderBy = OrderByEnum.Popularity,
    });
    // TODO: Handle 'response' of type IReadOnlyList<CompiledCompanyPublicDetails>
}
catch (ApiException<CreateCompanySearchError> ex)
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

<code>[CreateCompanySearchRequest](src/RocketReach/Requests/CompanyDataApi/CreateCompanySearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CompiledCompanyPublicDetails](src/RocketReach/Models/CompiledCompanyPublicDetails.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateCompanySearchError](src/RocketReach/Errors/CreateCompanySearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileApiSerializerWithCompiledCompany&gt; CreatePersonAndCompanyLookup(CreatePersonAndCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyDataApi.CreatePersonAndCompanyLookup(new CreatePersonAndCompanyLookupRequest());
    // TODO: Handle 'response' of type ProfileApiSerializerWithCompiledCompany
}
catch (ApiException<CreatePersonAndCompanyLookupError> ex)
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

<code>[CreatePersonAndCompanyLookupRequest](src/RocketReach/Requests/CompanyDataApi/CreatePersonAndCompanyLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileApiSerializerWithCompiledCompany](src/RocketReach/Models/ProfileApiSerializerWithCompiledCompany.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreatePersonAndCompanyLookupError](src/RocketReach/Errors/CreatePersonAndCompanyLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompiledCompanyApiSerializerWithExtendedCompanyAttributes&gt; CreateUniversalCompanyLookup(CreateUniversalCompanyLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyDataApi.CreateUniversalCompanyLookup(new CreateUniversalCompanyLookupRequest());
    // TODO: Handle 'response' of type CompiledCompanyApiSerializerWithExtendedCompanyAttributes
}
catch (ApiException<CreateUniversalCompanyLookupError> ex)
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

<code>[CreateUniversalCompanyLookupRequest](src/RocketReach/Requests/CompanyDataApi/CreateUniversalCompanyLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompiledCompanyApiSerializerWithExtendedCompanyAttributes](src/RocketReach/Models/CompiledCompanyApiSerializerWithExtendedCompanyAttributes.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateUniversalCompanyLookupError](src/RocketReach/Errors/CreateUniversalCompanyLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UniversalCreditCompanySearchOutput&gt;&gt; CreateUniversalCompanySearch(CreateUniversalCompanySearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search Companies by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CompanyDataApi.CreateUniversalCompanySearch(new CreateUniversalCompanySearchRequest());
    // TODO: Handle 'response' of type IReadOnlyList<UniversalCreditCompanySearchOutput>
}
catch (ApiException<CreateUniversalCompanySearchError> ex)
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

<code>[CreateUniversalCompanySearchRequest](src/RocketReach/Requests/CompanyDataApi/CreateUniversalCompanySearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UniversalCreditCompanySearchOutput](src/RocketReach/Models/UniversalCreditCompanySearchOutput.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateUniversalCompanySearchError](src/RocketReach/Errors/CreateUniversalCompanySearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PeopleDataApi

> Source: [PeopleDataApi](src/RocketReach/Api/PeopleDataApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ProfileApiCompiledCompany&gt;&gt; CheckPersonLookupStatus(CheckPersonLookupStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Person Lookup Status

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CheckPersonLookupStatus(new CheckPersonLookupStatusRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ProfileApiCompiledCompany>
}
catch (ApiException<CheckPersonLookupStatusError> ex)
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

<code>[CheckPersonLookupStatusRequest](src/RocketReach/Requests/PeopleDataApi/CheckPersonLookupStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ProfileApiCompiledCompany](src/RocketReach/Models/ProfileApiCompiledCompany.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CheckPersonLookupStatusError](src/RocketReach/Errors/CheckPersonLookupStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UniversalCreditPersonLookupOutput&gt;&gt; CheckUniversalPersonLookupStatus(CheckUniversalPersonLookupStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check Universal Person Lookup Status

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CheckUniversalPersonLookupStatus(
        new CheckUniversalPersonLookupStatusRequest());
    // TODO: Handle 'response' of type IReadOnlyList<UniversalCreditPersonLookupOutput>
}
catch (ApiException<CheckUniversalPersonLookupStatusError> ex)
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

<code>[CheckUniversalPersonLookupStatusRequest](src/RocketReach/Requests/PeopleDataApi/CheckUniversalPersonLookupStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UniversalCreditPersonLookupOutput](src/RocketReach/Models/UniversalCreditPersonLookupOutput.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CheckUniversalPersonLookupStatusError](src/RocketReach/Errors/CheckUniversalPersonLookupStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileApiSerializerWithCompiledCompany&gt; CreatePersonAndCompanyLookup2(CreatePersonAndCompanyLookup2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person and Company Lookup

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CreatePersonAndCompanyLookup2(new CreatePersonAndCompanyLookup2Request());
    // TODO: Handle 'response' of type ProfileApiSerializerWithCompiledCompany
}
catch (ApiException<CreatePersonAndCompanyLookup2Error> ex)
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

<code>[CreatePersonAndCompanyLookup2Request](src/RocketReach/Requests/PeopleDataApi/CreatePersonAndCompanyLookup2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileApiSerializerWithCompiledCompany](src/RocketReach/Models/ProfileApiSerializerWithCompiledCompany.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreatePersonAndCompanyLookup2Error](src/RocketReach/Errors/CreatePersonAndCompanyLookup2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreatePersonBulkLookup(CreatePersonBulkLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PeopleDataApi.CreatePersonBulkLookup(new CreatePersonBulkLookupRequest
    {
        ProfileList = "API Bulk Lookup",
        WebhookId = 12345,
    });
}
catch (ApiException<CreatePersonBulkLookupError> ex)
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

<code>[CreatePersonBulkLookupRequest](src/RocketReach/Requests/PeopleDataApi/CreatePersonBulkLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreatePersonBulkLookupError](src/RocketReach/Errors/CreatePersonBulkLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileApiWithMetadataCompiledCompany&gt; CreatePersonLookup(CreatePersonLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CreatePersonLookup(new CreatePersonLookupRequest());
    // TODO: Handle 'response' of type ProfileApiWithMetadataCompiledCompany
}
catch (ApiException<CreatePersonLookupError> ex)
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

<code>[CreatePersonLookupRequest](src/RocketReach/Requests/PeopleDataApi/CreatePersonLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileApiWithMetadataCompiledCompany](src/RocketReach/Models/ProfileApiWithMetadataCompiledCompany.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreatePersonLookupError](src/RocketReach/Errors/CreatePersonLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ProfileSearchResultSerializerBase&gt;&gt; CreatePersonSearch(CreatePersonSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CreatePersonSearch(new CreatePersonSearchRequest
    {
        OrderBy = OrderByEnum.Popularity,
    });
    // TODO: Handle 'response' of type IReadOnlyList<ProfileSearchResultSerializerBase>
}
catch (ApiException<CreatePersonSearchError> ex)
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

<code>[CreatePersonSearchRequest](src/RocketReach/Requests/PeopleDataApi/CreatePersonSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ProfileSearchResultSerializerBase](src/RocketReach/Models/ProfileSearchResultSerializerBase.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreatePersonSearchError](src/RocketReach/Errors/CreatePersonSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreateUniversalPersonBulkLookup(CreateUniversalPersonBulkLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk People Lookup by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.PeopleDataApi.CreateUniversalPersonBulkLookup(new CreateUniversalPersonBulkLookupRequest());
}
catch (ApiException<CreateUniversalPersonBulkLookupError> ex)
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

<code>[CreateUniversalPersonBulkLookupRequest](src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonBulkLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateUniversalPersonBulkLookupError](src/RocketReach/Errors/CreateUniversalPersonBulkLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UniversalCreditPersonLookupOutputWithMetadata&gt; CreateUniversalPersonLookup(CreateUniversalPersonLookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Person Enrichment API

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CreateUniversalPersonLookup(new CreateUniversalPersonLookupRequest());
    // TODO: Handle 'response' of type UniversalCreditPersonLookupOutputWithMetadata
}
catch (ApiException<CreateUniversalPersonLookupError> ex)
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

<code>[CreateUniversalPersonLookupRequest](src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonLookupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UniversalCreditPersonLookupOutputWithMetadata](src/RocketReach/Models/UniversalCreditPersonLookupOutputWithMetadata.cs)</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateUniversalPersonLookupError](src/RocketReach/Errors/CreateUniversalPersonLookupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;UniversalCreditPersonSearchOutput&gt;&gt; CreateUniversalPersonSearch(CreateUniversalPersonSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search People by Criteria

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PeopleDataApi.CreateUniversalPersonSearch(new CreateUniversalPersonSearchRequest());
    // TODO: Handle 'response' of type IReadOnlyList<UniversalCreditPersonSearchOutput>
}
catch (ApiException<CreateUniversalPersonSearchError> ex)
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

<code>[CreateUniversalPersonSearchRequest](src/RocketReach/Requests/PeopleDataApi/CreateUniversalPersonSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[UniversalCreditPersonSearchOutput](src/RocketReach/Models/UniversalCreditPersonSearchOutput.cs)&gt;</code>

**OnError**: <code>[ApiException](src/RocketReach/Core/Exceptions/ApiException.cs)&lt;[CreateUniversalPersonSearchError](src/RocketReach/Errors/CreateUniversalPersonSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

