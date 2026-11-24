# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [UnbounceClient](src/Unbounce/UnbounceClient.cs)

## Accounts

> Source: [Accounts](src/Unbounce/Api/Accounts.cs)

<details>
<summary><code>Task&lt;Account&gt; GetAccount(GetAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.GetAccount(new GetAccountRequest { AccountId = "some example string" });
    // TODO: Handle 'response' of type Account
}
catch (ApiException<GetAccountError> ex)
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

<code>[GetAccountRequest](src/Unbounce/Requests/Accounts/GetAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Account](src/Unbounce/Models/Account.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[GetAccountError](src/Unbounce/Errors/GetAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubAccount&gt; GetSubAccount(GetSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.GetSubAccount(new GetSubAccountRequest
    {
        SubAccountId = "some example string",
    });
    // TODO: Handle 'response' of type SubAccount
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

<code>[GetSubAccountRequest](src/Unbounce/Requests/Accounts/GetSubAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubAccount](src/Unbounce/Models/SubAccount.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccountCollection&gt; ListAccounts(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.ListAccounts();
    // TODO: Handle 'response' of type AccountCollection
}
catch (ApiException<ListAccountsError> ex)
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

**OnSuccess**: <code>[AccountCollection](src/Unbounce/Models/AccountCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[ListAccountsError](src/Unbounce/Errors/ListAccountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AccountsSubAccountsResponse&gt; ListSubAccountsForAccount(ListSubAccountsForAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Accounts.ListSubAccountsForAccount(new ListSubAccountsForAccountRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type AccountsSubAccountsResponse
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

<code>[ListSubAccountsForAccountRequest](src/Unbounce/Requests/Accounts/ListSubAccountsForAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountsSubAccountsResponse](src/Unbounce/Models/AccountsSubAccountsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](src/Unbounce/Api/Domains.cs)

<details>
<summary><code>Task&lt;Domain&gt; GetDomain(GetDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.GetDomain(new GetDomainRequest { DomainId = "some example string" });
    // TODO: Handle 'response' of type Domain
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

<code>[GetDomainRequest](src/Unbounce/Requests/Domains/GetDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Domain](src/Unbounce/Models/Domain.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubAccountsDomainsResponse&gt; ListDomainsForSubAccount(ListDomainsForSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Domains.ListDomainsForSubAccount(new ListDomainsForSubAccountRequest
    {
        SubAccountId = "some example string",
    });
    // TODO: Handle 'response' of type SubAccountsDomainsResponse
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

<code>[ListDomainsForSubAccountRequest](src/Unbounce/Requests/Domains/ListDomainsForSubAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubAccountsDomainsResponse](src/Unbounce/Models/SubAccountsDomainsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Leads

> Source: [Leads](src/Unbounce/Api/Leads.cs)

<details>
<summary><code>Task&lt;Lead&gt; GetLead(GetLeadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Leads.GetLead(new GetLeadRequest { LeadId = "some example string" });
    // TODO: Handle 'response' of type Lead
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

<code>[GetLeadRequest](src/Unbounce/Requests/Leads/GetLeadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Lead](src/Unbounce/Models/Lead.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LeadDeletionRequest&gt; GetLeadDeletionRequest(GetLeadDeletionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Leads.GetLeadDeletionRequest(new GetLeadDeletionRequest
    {
        PageId = "some example string",
        LeadDeletionRequestId = "some example string",
    });
    // TODO: Handle 'response' of type LeadDeletionRequest
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

<code>[GetLeadDeletionRequest](src/Unbounce/Requests/Leads/GetLeadDeletionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LeadDeletionRequest](src/Unbounce/Models/LeadDeletionRequest.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Lead&gt; GetLeadForPage(GetLeadForPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Leads.GetLeadForPage(new GetLeadForPageRequest
    {
        PageId = "some example string",
        LeadId = "some example string",
    });
    // TODO: Handle 'response' of type Lead
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

<code>[GetLeadForPageRequest](src/Unbounce/Requests/Leads/GetLeadForPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Lead](src/Unbounce/Models/Lead.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagesLeadDeletionRequestResponse&gt; ListLeadDeletionRequests(ListLeadDeletionRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Leads.ListLeadDeletionRequests(new ListLeadDeletionRequestsRequest
    {
        PageId = "some example string",
    });
    // TODO: Handle 'response' of type PagesLeadDeletionRequestResponse
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

<code>[ListLeadDeletionRequestsRequest](src/Unbounce/Requests/Leads/ListLeadDeletionRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagesLeadDeletionRequestResponse](src/Unbounce/Models/PagesLeadDeletionRequestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagesLeadsResponse&gt; ListLeadsForPage(ListLeadsForPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Leads.ListLeadsForPage(new ListLeadsForPageRequest { PageId = "some example string" });
    // TODO: Handle 'response' of type PagesLeadsResponse
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

<code>[ListLeadsForPageRequest](src/Unbounce/Requests/Leads/ListLeadsForPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagesLeadsResponse](src/Unbounce/Models/PagesLeadsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](src/Unbounce/Api/Meta.cs)

<details>
<summary><code>Task&lt;ResponseModel&gt; GetApiMeta(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Meta.GetApiMeta();
    // TODO: Handle 'response' of type ResponseModel
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseModel](src/Unbounce/Models/ResponseModel.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PageGroups

> Source: [PageGroups](src/Unbounce/Api/PageGroups.cs)

<details>
<summary><code>Task&lt;SubAccountsPageGroupsResponse&gt; ListPageGroupsForSubAccount(ListPageGroupsForSubAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PageGroups.ListPageGroupsForSubAccount(new ListPageGroupsForSubAccountRequest
    {
        SubAccountId = "some example string",
    });
    // TODO: Handle 'response' of type SubAccountsPageGroupsResponse
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

<code>[ListPageGroupsForSubAccountRequest](src/Unbounce/Requests/PageGroups/ListPageGroupsForSubAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubAccountsPageGroupsResponse](src/Unbounce/Models/SubAccountsPageGroupsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PageCollection&gt; ListPagesForPageGroup(ListPagesForPageGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PageGroups.ListPagesForPageGroup(new ListPagesForPageGroupRequest
    {
        PageGroupId = "some example string",
    });
    // TODO: Handle 'response' of type PageCollection
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

<code>[ListPagesForPageGroupRequest](src/Unbounce/Requests/PageGroups/ListPagesForPageGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageCollection](src/Unbounce/Models/PageCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Pages

> Source: [Pages](src/Unbounce/Api/Pages.cs)

<details>
<summary><code>Task&lt;Page&gt; GetPage(GetPageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.GetPage(new GetPageRequest { PageId = "some example string" });
    // TODO: Handle 'response' of type Page
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

<code>[GetPageRequest](src/Unbounce/Requests/Pages/GetPageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Page](src/Unbounce/Models/Page.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PageCollection&gt; ListAccountPages(ListAccountPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.ListAccountPages(new ListAccountPagesRequest
    {
        AccountId = "some example string",
    });
    // TODO: Handle 'response' of type PageCollection
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

<code>[ListAccountPagesRequest](src/Unbounce/Requests/Pages/ListAccountPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageCollection](src/Unbounce/Models/PageCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PagesFormFieldsResponse&gt; ListFormFields(ListFormFieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.ListFormFields(new ListFormFieldsRequest { PageId = "some example string" });
    // TODO: Handle 'response' of type PagesFormFieldsResponse
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

<code>[ListFormFieldsRequest](src/Unbounce/Requests/Pages/ListFormFieldsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PagesFormFieldsResponse](src/Unbounce/Models/PagesFormFieldsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PageCollection&gt; ListPages(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.ListPages();
    // TODO: Handle 'response' of type PageCollection
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageCollection](src/Unbounce/Models/PageCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PageCollection&gt; ListPagesForDomain(ListPagesForDomainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.ListPagesForDomain(new ListPagesForDomainRequest
    {
        DomainId = "some example string",
    });
    // TODO: Handle 'response' of type PageCollection
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

<code>[ListPagesForDomainRequest](src/Unbounce/Requests/Pages/ListPagesForDomainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageCollection](src/Unbounce/Models/PageCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PageCollection&gt; ListSubAccountPages(ListSubAccountPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Pages.ListSubAccountPages(new ListSubAccountPagesRequest
    {
        SubAccountId = "some example string",
    });
    // TODO: Handle 'response' of type PageCollection
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

<code>[ListSubAccountPagesRequest](src/Unbounce/Requests/Pages/ListSubAccountPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PageCollection](src/Unbounce/Models/PageCollection.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/Unbounce/Api/Users.cs)

<details>
<summary><code>Task&lt;UsersResponse&gt; ListUsers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Users.ListUsers();
    // TODO: Handle 'response' of type UsersResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsersResponse](src/Unbounce/Models/UsersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Unbounce/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Unbounce/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

