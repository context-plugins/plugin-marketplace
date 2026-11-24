# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [StatableClient](src/Statable/StatableClient.cs)

## Bootstrap

> Source: [Bootstrap](src/Statable/Api/Bootstrap.cs)

<details>
<summary><code>Task&lt;BootstrapSendOtpResponse&gt; BootstrapSendOtp(BootstrapSendOtpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a 6-digit code to the address, valid for a short window and usable once. Takes no credential — this is the entry point for a client that has none. Rate limited per email (2/minute), per IP (5/hour) and per IP across the whole bootstrap branch (20/hour). The response is identical whether or not the address already has an account, so it cannot be used to test for one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bootstrap.BootstrapSendOtp(new BootstrapSendOtpOperationRequest
    {
        Body = new BootstrapSendOtpRequest { Email = "agent@yourcompany.com" },
    });
    // TODO: Handle 'response' of type BootstrapSendOtpResponse
}
catch (ApiException<BootstrapSendOtpError> ex)
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

<code>[BootstrapSendOtpOperationRequest](src/Statable/Requests/Bootstrap/BootstrapSendOtpOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BootstrapSendOtpResponse](src/Statable/Models/BootstrapSendOtpResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[BootstrapSendOtpError](src/Statable/Errors/BootstrapSendOtpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BootstrapVerifyOtpResponse&gt; BootstrapVerifyOtp(BootstrapVerifyOtpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies the code, creates the account if the address is new, records the terms acceptance, and returns a freshly minted key — the raw token EXACTLY ONCE. `accept_terms` must be true. Requested `scopes` must be within `API_BOOTSTRAP_SCOPES` (default `read,sites:write`); omitting them yields that whole set, and `billing:write` is never obtainable here. Everything that can be rejected without the code is validated first, so a bad field does not burn a valid code. The key is always all-sites and always expires (90 days by default, 365 max).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bootstrap.BootstrapVerifyOtp(new BootstrapVerifyOtpOperationRequest
    {
        Body = new BootstrapVerifyOtpRequest
        {
            Email = "agent@yourcompany.com",
            Code = "123456",
            AcceptTerms = true,
            KeyName = "provisioning bot",
        },
    });
    // TODO: Handle 'response' of type BootstrapVerifyOtpResponse
}
catch (ApiException<BootstrapVerifyOtpError> ex)
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

<code>[BootstrapVerifyOtpOperationRequest](src/Statable/Requests/Bootstrap/BootstrapVerifyOtpOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BootstrapVerifyOtpResponse](src/Statable/Models/BootstrapVerifyOtpResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[BootstrapVerifyOtpError](src/Statable/Errors/BootstrapVerifyOtpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Keys

> Source: [Keys](src/Statable/Api/Keys.cs)

<details>
<summary><code>Task&lt;CreatedApiKey&gt; CreateApiKey(CreateApiKeyOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the authenticating key's scopes (else 403 `scope_escalation`), and a single-site key may only create keys locked to its own site (else 403 `key_not_scoped`). `expires_in_days` defaults to 90 and is capped at 365 — unlike the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keys.CreateApiKey(new CreateApiKeyOperationRequest
    {
        Body = new CreateApiKeyRequest { Name = "reporting job", Scopes = [Scope.Read] },
    });
    // TODO: Handle 'response' of type CreatedApiKey
}
catch (ApiException<CreateApiKeyError> ex)
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

<code>[CreateApiKeyOperationRequest](src/Statable/Requests/Keys/CreateApiKeyOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreatedApiKey](src/Statable/Models/CreatedApiKey.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[CreateApiKeyError](src/Statable/Errors/CreateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiKeyEventList&gt; ListApiKeyEvents(ListApiKeyEventsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail). `actor_key_id` names the API key that performed the action, or null when it was done from the dashboard.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keys.ListApiKeyEvents(new ListApiKeyEventsRequest { Id = 1L });
    // TODO: Handle 'response' of type ApiKeyEventList
}
catch (ApiException<ListApiKeyEventsError> ex)
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

<code>[ListApiKeyEventsRequest](src/Statable/Requests/Keys/ListApiKeyEventsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyEventList](src/Statable/Models/ApiKeyEventList.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListApiKeyEventsError](src/Statable/Errors/ListApiKeyEventsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiKeyList&gt; ListApiKeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw token exists only in the create and rotate responses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keys.ListApiKeys();
    // TODO: Handle 'response' of type ApiKeyList
}
catch (ApiException<ListApiKeysError> ex)
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

**OnSuccess**: <code>[ApiKeyList](src/Statable/Models/ApiKeyList.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListApiKeysError](src/Statable/Errors/ListApiKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task RevokeApiKey(RevokeApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409 `self_modification`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Keys.RevokeApiKey(new RevokeApiKeyRequest { Id = 1L });
}
catch (ApiException<RevokeApiKeyError> ex)
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

<code>[RevokeApiKeyRequest](src/Statable/Requests/Keys/RevokeApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[RevokeApiKeyError](src/Statable/Errors/RevokeApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CreatedApiKey&gt; RotateApiKey(RotateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409 `self_modification`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Keys.RotateApiKey(new RotateApiKeyRequest { Id = 1L });
    // TODO: Handle 'response' of type CreatedApiKey
}
catch (ApiException<RotateApiKeyError> ex)
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

<code>[RotateApiKeyRequest](src/Statable/Requests/Keys/RotateApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreatedApiKey](src/Statable/Models/CreatedApiKey.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[RotateApiKeyError](src/Statable/Errors/RotateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/Statable/Api/Sites.cs)

<details>
<summary><code>Task&lt;FunnelDefinition&gt; CreateFunnel(CreateFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step. A duplicate name is 409 `funnel_exists`. Listing and running funnels lives on the read surface (GET /funnels, POST /funnels/{id}/report).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.CreateFunnel(new CreateFunnelRequest
    {
        Id = 1L,
        Body = new FunnelRequest
        {
            Name = "Signup flow",
            Steps = [
                new FunnelStep { Kind = Kind.Page, Path = "/" },
                new FunnelStep { Kind = Kind.Goal, GoalId = 12L },
            ],
        },
    });
    // TODO: Handle 'response' of type FunnelDefinition
}
catch (ApiException<CreateFunnelError> ex)
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

<code>[CreateFunnelRequest](src/Statable/Requests/Sites/CreateFunnelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FunnelDefinition](src/Statable/Models/FunnelDefinition.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[CreateFunnelError](src/Statable/Errors/CreateFunnelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Goal&gt; CreateGoal(CreateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. A duplicate name is 409 `goal_exists`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.CreateGoal(new CreateGoalRequest
    {
        Id = 1L,
        Body = new GoalRequest { Name = "Signup", Path = "/thanks", Operator = Operator.E },
    });
    // TODO: Handle 'response' of type Goal
}
catch (ApiException<CreateGoalError> ex)
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

<code>[CreateGoalRequest](src/Statable/Requests/Sites/CreateGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Goal](src/Statable/Models/Goal.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[CreateGoalError](src/Statable/Errors/CreateGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SiteDetail&gt; CreateSite(CreateSiteOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a site and returns everything needed to install tracking, so provisioning is one round-trip. Requires an ALL-SITES key: a single-site key gets 403 `key_not_scoped`, since the new site would be outside its own scope. A duplicate url is 409 `site_exists` — unlike the dashboard, which permits it: for an agent a duplicate is nearly always a retry that lost its response. The first non-hobby site starts the trial subscription exactly as the dashboard does. Send an `Idempotency-Key` to make retries safe.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.CreateSite(new CreateSiteOperationRequest
    {
        Body = new CreateSiteRequest { Url = "https://example.com", Timezone = "Europe/Kyiv" },
    });
    // TODO: Handle 'response' of type SiteDetail
}
catch (ApiException<CreateSiteError> ex)
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

<code>[CreateSiteOperationRequest](src/Statable/Requests/Sites/CreateSiteOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteDetail](src/Statable/Models/SiteDetail.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[CreateSiteError](src/Statable/Errors/CreateSiteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteFunnel(DeleteFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sites.DeleteFunnel(new DeleteFunnelRequest { Id = 1L, FunnelId = 1L });
}
catch (ApiException<DeleteFunnelError> ex)
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

<code>[DeleteFunnelRequest](src/Statable/Requests/Sites/DeleteFunnelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[DeleteFunnelError](src/Statable/Errors/DeleteFunnelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteGoal(DeleteGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sites.DeleteGoal(new DeleteGoalRequest { Id = 1L, GoalId = 1L });
}
catch (ApiException<DeleteGoalError> ex)
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

<code>[DeleteGoalRequest](src/Statable/Requests/Sites/DeleteGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[DeleteGoalError](src/Statable/Errors/DeleteGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSite(DeleteSiteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner only — an admin may edit the site but not delete it — and it really deletes: the site plus its goals, hostnames, blocklists and import jobs, with its ClickHouse data removed asynchronously. An admin or a member gets 403 `not_site_owner` — there is no API equivalent of the dashboard's "remove my access".

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sites.DeleteSite(new DeleteSiteRequest { Id = 1L });
}
catch (ApiException<DeleteSiteError> ex)
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

<code>[DeleteSiteRequest](src/Statable/Requests/Sites/DeleteSiteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[DeleteSiteError](src/Statable/Errors/DeleteSiteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitesSettingsBlockedIpsResponse&gt; GetBlockedIPs(GetBlockedIPsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetBlockedIPs(new GetBlockedIPsRequest { Id = 1L });
    // TODO: Handle 'response' of type SitesSettingsBlockedIpsResponse
}
catch (ApiException<GetBlockedIPsError> ex)
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

<code>[GetBlockedIPsRequest](src/Statable/Requests/Sites/GetBlockedIPsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitesSettingsBlockedIpsResponse](src/Statable/Models/SitesSettingsBlockedIpsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetBlockedIPsError](src/Statable/Errors/GetBlockedIPsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CountryList&gt; GetCountrySettings(GetCountrySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetCountrySettings(new GetCountrySettingsRequest { Id = 1L });
    // TODO: Handle 'response' of type CountryList
}
catch (ApiException<GetCountrySettingsError> ex)
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

<code>[GetCountrySettingsRequest](src/Statable/Requests/Sites/GetCountrySettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CountryList](src/Statable/Models/CountryList.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetCountrySettingsError](src/Statable/Errors/GetCountrySettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;HostnameList&gt; GetHostnameSettings(GetHostnameSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetHostnameSettings(new GetHostnameSettingsRequest { Id = 1L });
    // TODO: Handle 'response' of type HostnameList
}
catch (ApiException<GetHostnameSettingsError> ex)
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

<code>[GetHostnameSettingsRequest](src/Statable/Requests/Sites/GetHostnameSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HostnameList](src/Statable/Models/HostnameList.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetHostnameSettingsError](src/Statable/Errors/GetHostnameSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicDashboard&gt; GetPublicDashboard(GetPublicDashboardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetPublicDashboard(new GetPublicDashboardRequest { Id = 1L });
    // TODO: Handle 'response' of type PublicDashboard
}
catch (ApiException<GetPublicDashboardError> ex)
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

<code>[GetPublicDashboardRequest](src/Statable/Requests/Sites/GetPublicDashboardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicDashboard](src/Statable/Models/PublicDashboard.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetPublicDashboardError](src/Statable/Errors/GetPublicDashboardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SiteSnippet&gt; GetSiteSnippet(GetSiteSnippetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the script URL and the ready-to-paste tag. Scope `read`, not `sites:write`: the snippet is public information (it ends up in the page source), and shared users may install tracking too. `type` selects a widget instead of the tracker: a hobby site gets the bundled `/t/` build, which counts as well as draws, a paid site the widget-only build — its counting is the tracker tag it installs separately.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetSiteSnippet(new GetSiteSnippetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type SiteSnippet
}
catch (ApiException<GetSiteSnippetError> ex)
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

<code>[GetSiteSnippetRequest](src/Statable/Requests/Sites/GetSiteSnippetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteSnippet](src/Statable/Models/SiteSnippet.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetSiteSnippetError](src/Statable/Errors/GetSiteSnippetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrackingSettings&gt; GetTrackingSettings(GetTrackingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's effective feature selection plus the full catalogue — each entry's state, its dependencies and its marginal brotli cost — so a caller can trade capability against script weight without a second call. Owner or admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.GetTrackingSettings(new GetTrackingSettingsRequest { Id = 1L });
    // TODO: Handle 'response' of type TrackingSettings
}
catch (ApiException<GetTrackingSettingsError> ex)
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

<code>[GetTrackingSettingsRequest](src/Statable/Requests/Sites/GetTrackingSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackingSettings](src/Statable/Models/TrackingSettings.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetTrackingSettingsError](src/Statable/Errors/GetTrackingSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitesGoalsResponse&gt; ListSiteGoals(ListSiteGoalsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Goal definitions with their ids, for the write calls below.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.ListSiteGoals(new ListSiteGoalsRequest { Id = 1L });
    // TODO: Handle 'response' of type SitesGoalsResponse
}
catch (ApiException<ListSiteGoalsError> ex)
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

<code>[ListSiteGoalsRequest](src/Statable/Requests/Sites/ListSiteGoalsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitesGoalsResponse](src/Statable/Models/SitesGoalsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListSiteGoalsError](src/Statable/Errors/ListSiteGoalsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettingsCount&gt; SetBlockedIPs(SetBlockedIPsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.SetBlockedIPs(new SetBlockedIPsRequest
    {
        Id = 1L,
        Body = ["some example string"],
    });
    // TODO: Handle 'response' of type SettingsCount
}
catch (ApiException<SetBlockedIPsError> ex)
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

<code>[SetBlockedIPsRequest](src/Statable/Requests/Sites/SetBlockedIPsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettingsCount](src/Statable/Models/SettingsCount.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[SetBlockedIPsError](src/Statable/Errors/SetBlockedIPsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettingsCount&gt; SetCountrySettings(SetCountrySettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.SetCountrySettings(new SetCountrySettingsRequest
    {
        Id = 1L,
        Body = new CountryListRequest(),
    });
    // TODO: Handle 'response' of type SettingsCount
}
catch (ApiException<SetCountrySettingsError> ex)
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

<code>[SetCountrySettingsRequest](src/Statable/Requests/Sites/SetCountrySettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettingsCount](src/Statable/Models/SettingsCount.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[SetCountrySettingsError](src/Statable/Errors/SetCountrySettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SettingsCount&gt; SetHostnameSettings(SetHostnameSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking client must not read a failure as done.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.SetHostnameSettings(new SetHostnameSettingsRequest
    {
        Id = 1L,
        Body = new HostnameListRequest(),
    });
    // TODO: Handle 'response' of type SettingsCount
}
catch (ApiException<SetHostnameSettingsError> ex)
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

<code>[SetHostnameSettingsRequest](src/Statable/Requests/Sites/SetHostnameSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SettingsCount](src/Statable/Models/SettingsCount.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[SetHostnameSettingsError](src/Statable/Errors/SetHostnameSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicDashboard&gt; SetPublicDashboard(SetPublicDashboardRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only. `enabled` must be sent explicitly — this is the one setting that changes who can SEE the data, so an absent field must not read as "turn it off".

A hobby site on a free account is always public and answers `409 hobby_always_public` to `enabled: false`. Its stats are the widget it ships, and the hash that addresses them is already in the page's markup; `enabled: true` on one succeeds as a no-op. An owner with a paid subscription (`active`, or `past_due` during a retried renewal) may turn it off.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.SetPublicDashboard(new SetPublicDashboardRequest
    {
        Id = 1L,
        Body = new PublicDashboard { Enabled = true },
    });
    // TODO: Handle 'response' of type PublicDashboard
}
catch (ApiException<SetPublicDashboardError> ex)
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

<code>[SetPublicDashboardRequest](src/Statable/Requests/Sites/SetPublicDashboardRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicDashboard](src/Statable/Models/PublicDashboard.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[SetPublicDashboardError](src/Statable/Errors/SetPublicDashboardError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrackingSettings&gt; SetTrackingSettings(SetTrackingSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replaces the selection wholesale. `features` is REQUIRED — an omitted key would be indistinguishable from `[]`, which disables everything optional. Locked features stay enabled whether or not they are sent, and a feature whose `requires` are unmet is rejected. Applying repoints the served bundle, then stores the selection, then purges the CDN — the same order the dashboard uses. Owner or admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.SetTrackingSettings(new SetTrackingSettingsRequest
    {
        Id = 1L,
        Body = new TrackingSettingsRequest { Features = [] },
    });
    // TODO: Handle 'response' of type TrackingSettings
}
catch (ApiException<SetTrackingSettingsError> ex)
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

<code>[SetTrackingSettingsRequest](src/Statable/Requests/Sites/SetTrackingSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrackingSettings](src/Statable/Models/TrackingSettings.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[SetTrackingSettingsError](src/Statable/Errors/SetTrackingSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FunnelDefinition&gt; UpdateFunnel(UpdateFunnelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.UpdateFunnel(new UpdateFunnelRequest
    {
        Id = 1L,
        FunnelId = 1L,
        Body = new FunnelRequest { Name = "some example string", Steps = [new FunnelStep { Kind = Kind.Page }] },
    });
    // TODO: Handle 'response' of type FunnelDefinition
}
catch (ApiException<UpdateFunnelError> ex)
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

<code>[UpdateFunnelRequest](src/Statable/Requests/Sites/UpdateFunnelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FunnelDefinition](src/Statable/Models/FunnelDefinition.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[UpdateFunnelError](src/Statable/Errors/UpdateFunnelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Goal&gt; UpdateGoal(UpdateGoalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.UpdateGoal(new UpdateGoalRequest
    {
        Id = 1L,
        GoalId = 1L,
        Body = new GoalRequest { Name = "some example string" },
    });
    // TODO: Handle 'response' of type Goal
}
catch (ApiException<UpdateGoalError> ex)
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

<code>[UpdateGoalRequest](src/Statable/Requests/Sites/UpdateGoalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Goal](src/Statable/Models/Goal.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[UpdateGoalError](src/Statable/Errors/UpdateGoalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SiteDetail&gt; UpdateSite(UpdateSiteOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Owner or admin only — a member gets 403 `not_site_owner`. Omitted fields are left alone. Unlike the read surface there is no tracking-active gate: a lapsed account must still be able to fix and clean up its sites. Another account's id answers 404 `unknown_site`, exactly as a nonexistent one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.UpdateSite(new UpdateSiteOperationRequest
    {
        Id = 1L,
        Body = new UpdateSiteRequest { Timezone = "UTC", WeekStart = 0 },
    });
    // TODO: Handle 'response' of type SiteDetail
}
catch (ApiException<UpdateSiteError> ex)
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

<code>[UpdateSiteOperationRequest](src/Statable/Requests/Sites/UpdateSiteOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteDetail](src/Statable/Models/SiteDetail.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[UpdateSiteError](src/Statable/Errors/UpdateSiteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stats

> Source: [Stats](src/Statable/Api/Stats.cs)

<details>
<summary><code>Task&lt;CurrentVisitorsResponse&gt; CurrentVisitors(CurrentVisitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.CurrentVisitors(new CurrentVisitorsRequest());
    // TODO: Handle 'response' of type CurrentVisitorsResponse
}
catch (ApiException<CurrentVisitorsError> ex)
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

<code>[CurrentVisitorsRequest](src/Statable/Requests/Stats/CurrentVisitorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CurrentVisitorsResponse](src/Statable/Models/CurrentVisitorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[CurrentVisitorsError](src/Statable/Errors/CurrentVisitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SubscriptionResponse&gt; GetSubscription(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The subscription of the key's owner, in one line's worth of fields: enough to say "Trial — N days left", not a billing page. Hobby-only accounts have no subscription and answer `status: "none"` with `only_hobby: true`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.GetSubscription();
    // TODO: Handle 'response' of type SubscriptionResponse
}
catch (ApiException<GetSubscriptionError> ex)
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

**OnSuccess**: <code>[SubscriptionResponse](src/Statable/Models/SubscriptionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[GetSubscriptionError](src/Statable/Errors/GetSubscriptionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FunnelsResponse&gt; ListFunnels(ListFunnelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the site's saved funnel definitions (managed in the dashboard). Use a funnel `id` with POST /funnels/{id}/report. Funnels are read-only over the API — this endpoint does not create or edit them.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.ListFunnels(new ListFunnelsRequest());
    // TODO: Handle 'response' of type FunnelsResponse
}
catch (ApiException<ListFunnelsError> ex)
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

<code>[ListFunnelsRequest](src/Statable/Requests/Stats/ListFunnelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FunnelsResponse](src/Statable/Models/FunnelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListFunnelsError](src/Statable/Errors/ListFunnelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PropsResponse&gt; ListPropKeys(ListPropKeysRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The custom-property keys a site has recorded (each paired with the event it was sent with) — discovery for the event:props: breakdown. Returns the full set (no pagination) for the window.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.ListPropKeys(new ListPropKeysRequest());
    // TODO: Handle 'response' of type PropsResponse
}
catch (ApiException<ListPropKeysError> ex)
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

<code>[ListPropKeysRequest](src/Statable/Requests/Stats/ListPropKeysRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PropsResponse](src/Statable/Models/PropsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListPropKeysError](src/Statable/Errors/ListPropKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitesResponse&gt; ListSites(ListSitesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the sites the authenticating key may read — useful for discovering `site_id` values and token introspection. An all-sites key returns every accessible site (sorted by name); a single-site key returns just its one site (or an empty list if access was removed).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.ListSites(new ListSitesRequest { DateRange = "7d" });
    // TODO: Handle 'response' of type SitesResponse
}
catch (ApiException<ListSitesError> ex)
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

<code>[ListSitesRequest](src/Statable/Requests/Stats/ListSitesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitesResponse](src/Statable/Models/SitesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[ListSitesError](src/Statable/Errors/ListSitesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueryResponse&gt; Query(QueryOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One query returns a list of result rows. With no `dimensions` it is an aggregate (one row); with one time dimension (`time[:hour|day|week|month]`) it is a time series; with one breakdown dimension it is a top-N list plus a `meta` pagination block. The response always echoes the resolved request in `query` (most usefully `date_range` normalized to concrete `[from,to]` dates). At most one dimension per query.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.Query(new QueryOperationRequest
    {
        Body = new QueryRequest { SiteId = 3093477L, Metrics = [Metric.Visitors, Metric.Pageviews], DateRange = "7d" },
    });
    // TODO: Handle 'response' of type QueryResponse
}
catch (ApiException<QueryError> ex)
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

<code>[QueryOperationRequest](src/Statable/Requests/Stats/QueryOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueryResponse](src/Statable/Models/QueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[QueryError](src/Statable/Errors/QueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;FunnelReportResponse&gt; RunFunnelReport(RunFunnelReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs a saved funnel over a date range (+ optional segment filters) and returns an ORDERED per-step result with top-level scalars — a bespoke, non-tabular shape (funnel output is not rows). `steps` must not be sorted; `conversion_rate` is cumulative versus the first step (`entering`), not step-to-step. The intra-conversion window is a fixed 1 day, independent of `date_range` (which only bounds the sessions scanned).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stats.RunFunnelReport(new RunFunnelReportRequest
    {
        Id = 1L,
        Body = new FunnelReportRequest { SiteId = 3093477L, DateRange = "30d" },
    });
    // TODO: Handle 'response' of type FunnelReportResponse
}
catch (ApiException<RunFunnelReportError> ex)
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

<code>[RunFunnelReportRequest](src/Statable/Requests/Stats/RunFunnelReportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FunnelReportResponse](src/Statable/Models/FunnelReportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Statable/Core/Exceptions/ApiException.cs)&lt;[RunFunnelReportError](src/Statable/Errors/RunFunnelReportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

