# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BrowserUseClient](src/BrowserUse/BrowserUseClient.cs)

## Browsers

> Source: [Browsers](src/BrowserUse/Api/Browsers.cs)

<details>
<summary><code>Task&lt;BrowserSessionItemView&gt; CreateBrowserSessionBrowsersPost(CreateBrowserSessionBrowsersPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new browser session.

**Pricing:** Browser sessions are charged at $0.02/hour for all users.

The full rate is charged upfront when the session starts.
When you stop the session, any unused time is automatically refunded proportionally.

Billing is rounded up to the minute (minimum 1 minute).
For example, if you stop a session after 30 minutes, you'll be refunded half the charged amount.

**Session Limits:**
- All users: Up to 4 hours per session

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.CreateBrowserSessionBrowsersPost(new CreateBrowserSessionBrowsersPostRequest
    {
        Body = new CreateBrowserSessionRequest(),
    });
    // TODO: Handle 'response' of type BrowserSessionItemView
}
catch (ApiException<CreateBrowserSessionBrowsersPostError> ex)
{
    if (ex.Error.TryGetApiKeySpendLimitError(out var error))
    {
        // TODO: Handle 'error' of type ApiKeySpendLimitError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBrowserSessionBrowsersPostRequest](src/BrowserUse/Requests/Browsers/CreateBrowserSessionBrowsersPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionItemView](src/BrowserUse/Models/BrowserSessionItemView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CreateBrowserSessionBrowsersPostError](src/BrowserUse/Errors/CreateBrowserSessionBrowsersPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrowserSessionView&gt; GetBrowserSessionBrowsersSessionIdGet(GetBrowserSessionBrowsersSessionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed browser session information including status and URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.GetBrowserSessionBrowsersSessionIdGet(
        new GetBrowserSessionBrowsersSessionIdGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BrowserSessionView
}
catch (ApiException<GetBrowserSessionBrowsersSessionIdGetError> ex)
{
    if (ex.Error.TryGetSessionNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type SessionNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBrowserSessionBrowsersSessionIdGetRequest](src/BrowserUse/Requests/Browsers/GetBrowserSessionBrowsersSessionIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionView](src/BrowserUse/Models/BrowserSessionView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetBrowserSessionBrowsersSessionIdGetError](src/BrowserUse/Errors/GetBrowserSessionBrowsersSessionIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrowserDownloadListResponse&gt; ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the browser downloaded to S3 during the session.

Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline.
Files are stored at ``downloads/projects/{project_id}/sessions/{session_id}/`` in
the private bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(
        new ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type BrowserDownloadListResponse
}
catch (ApiException<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError> ex)
{
    if (ex.Error.TryGetSessionNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type SessionNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest](src/BrowserUse/Requests/Browsers/ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserDownloadListResponse](src/BrowserUse/Models/BrowserDownloadListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError](src/BrowserUse/Errors/ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrowserSessionListResponse&gt; ListBrowserSessionsBrowsersGet(ListBrowserSessionsBrowsersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of browser sessions with optional status filtering.

List responses intentionally omit per-session presigned recording URLs
(`recording_url` is always `null` here). Each recording URL requires a
synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
and blocks the event loop. With page_size up to the max this CPU-pegs the
worker and starves the DB pool, cascading into pool exhaustion across the
fleet. Clients should fetch the recording URL on demand via
`GET /api/v2/browsers/{id}`, which signs exactly one URL for a single
session. Mirrors the v3 sessions list fix (ENG-4904, PR #4621).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.ListBrowserSessionsBrowsersGet(new ListBrowserSessionsBrowsersGetRequest());
    // TODO: Handle 'response' of type BrowserSessionListResponse
}
catch (ApiException<ListBrowserSessionsBrowsersGetError> ex)
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

<code>[ListBrowserSessionsBrowsersGetRequest](src/BrowserUse/Requests/Browsers/ListBrowserSessionsBrowsersGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionListResponse](src/BrowserUse/Models/BrowserSessionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListBrowserSessionsBrowsersGetError](src/BrowserUse/Errors/ListBrowserSessionsBrowsersGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BrowserSessionView&gt; UpdateBrowserSessionBrowsersSessionIdPatch(UpdateBrowserSessionBrowsersSessionIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a browser session.

**Refund:** When you stop a session, unused time is automatically refunded.
If the session ran for less than 1 hour, you'll receive a proportional refund.
Billing is ceil to the nearest minute (minimum 1 minute).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Browsers.UpdateBrowserSessionBrowsersSessionIdPatch(
        new UpdateBrowserSessionBrowsersSessionIdPatchRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new UpdateBrowserSessionRequest(),
        });
    // TODO: Handle 'response' of type BrowserSessionView
}
catch (ApiException<UpdateBrowserSessionBrowsersSessionIdPatchError> ex)
{
    if (ex.Error.TryGetSessionNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type SessionNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBrowserSessionBrowsersSessionIdPatchRequest](src/BrowserUse/Requests/Browsers/UpdateBrowserSessionBrowsersSessionIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionView](src/BrowserUse/Models/BrowserSessionView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateBrowserSessionBrowsersSessionIdPatchError](src/BrowserUse/Errors/UpdateBrowserSessionBrowsersSessionIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExtensionsApi

> Source: [ExtensionsApi](src/BrowserUse/Api/ExtensionsApi.cs)

<details>
<summary><code>Task DeleteExtensionExtensionsExtensionIdDelete(DeleteExtensionExtensionsExtensionIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete an extension without affecting running browsers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ExtensionsApi.DeleteExtensionExtensionsExtensionIdDelete(
        new DeleteExtensionExtensionsExtensionIdDeleteRequest
        {
            ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteExtensionExtensionsExtensionIdDeleteError> ex)
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

<code>[DeleteExtensionExtensionsExtensionIdDeleteRequest](src/BrowserUse/Requests/ExtensionsApi/DeleteExtensionExtensionsExtensionIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DeleteExtensionExtensionsExtensionIdDeleteError](src/BrowserUse/Errors/DeleteExtensionExtensionsExtensionIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExtensionView&gt; GetExtensionExtensionsExtensionIdGet(GetExtensionExtensionsExtensionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an uploaded extension by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionsApi.GetExtensionExtensionsExtensionIdGet(
        new GetExtensionExtensionsExtensionIdGetRequest
        {
            ExtensionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ExtensionView
}
catch (ApiException<GetExtensionExtensionsExtensionIdGetError> ex)
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

<code>[GetExtensionExtensionsExtensionIdGetRequest](src/BrowserUse/Requests/ExtensionsApi/GetExtensionExtensionsExtensionIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionView](src/BrowserUse/Models/ExtensionView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetExtensionExtensionsExtensionIdGetError](src/BrowserUse/Errors/GetExtensionExtensionsExtensionIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExtensionListResponse&gt; ListExtensionsExtensionsGet(ListExtensionsExtensionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the extensions uploaded to this project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionsApi.ListExtensionsExtensionsGet(new ListExtensionsExtensionsGetRequest());
    // TODO: Handle 'response' of type ExtensionListResponse
}
catch (ApiException<ListExtensionsExtensionsGetError> ex)
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

<code>[ListExtensionsExtensionsGetRequest](src/BrowserUse/Requests/ExtensionsApi/ListExtensionsExtensionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionListResponse](src/BrowserUse/Models/ExtensionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListExtensionsExtensionsGetError](src/BrowserUse/Errors/ListExtensionsExtensionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExtensionView&gt; UploadExtensionExtensionsPost(UploadExtensionExtensionsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExtensionsApi.UploadExtensionExtensionsPost(new UploadExtensionExtensionsPostRequest
    {
        File = Array.Empty<byte>(),
    });
    // TODO: Handle 'response' of type ExtensionView
}
catch (ApiException<UploadExtensionExtensionsPostError> ex)
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

<code>[UploadExtensionExtensionsPostRequest](src/BrowserUse/Requests/ExtensionsApi/UploadExtensionExtensionsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionView](src/BrowserUse/Models/ExtensionView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UploadExtensionExtensionsPostError](src/BrowserUse/Errors/UploadExtensionExtensionsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](src/BrowserUse/Api/Integrations.cs)

<details>
<summary><code>Task&lt;AuthorizeResponse&gt; AuthorizeIntegrationIntegrationsProviderAuthorizePost(AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the OAuth redirect URL for connecting an integration.

The client opens the returned URL in a web auth session and polls
`/integrations/{provider}/status` once the flow lands back on the callback
path. The URL is Composio-hosted; no redirect URI is registered per client.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePost(
        new AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest { Provider = "some example string" });
    // TODO: Handle 'response' of type AuthorizeResponse
}
catch (ApiException<AuthorizeIntegrationIntegrationsProviderAuthorizePostError> ex)
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

<code>[AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest](src/BrowserUse/Requests/Integrations/AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizeResponse](src/BrowserUse/Models/AuthorizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[AuthorizeIntegrationIntegrationsProviderAuthorizePostError](src/BrowserUse/Errors/AuthorizeIntegrationIntegrationsProviderAuthorizePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DisconnectResponse&gt; DisconnectIntegrationIntegrationsProviderDelete(DisconnectIntegrationIntegrationsProviderDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnect an integration for this project.

Deliberately NOT gated like `authorize` above: a restricted project must
still be able to tear down a connection it already has.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Integrations.DisconnectIntegrationIntegrationsProviderDelete(
        new DisconnectIntegrationIntegrationsProviderDeleteRequest { Provider = "some example string" });
    // TODO: Handle 'response' of type DisconnectResponse
}
catch (ApiException<DisconnectIntegrationIntegrationsProviderDeleteError> ex)
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

<code>[DisconnectIntegrationIntegrationsProviderDeleteRequest](src/BrowserUse/Requests/Integrations/DisconnectIntegrationIntegrationsProviderDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisconnectResponse](src/BrowserUse/Models/DisconnectResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DisconnectIntegrationIntegrationsProviderDeleteError](src/BrowserUse/Errors/DisconnectIntegrationIntegrationsProviderDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ConnectionStatusResponse&gt; GetConnectionStatusIntegrationsProviderStatusGet(GetConnectionStatusIntegrationsProviderStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether this project has connected a specific provider.

Poll this after opening the authorize URL to learn when OAuth completed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Integrations.GetConnectionStatusIntegrationsProviderStatusGet(
        new GetConnectionStatusIntegrationsProviderStatusGetRequest { Provider = "some example string" });
    // TODO: Handle 'response' of type ConnectionStatusResponse
}
catch (ApiException<GetConnectionStatusIntegrationsProviderStatusGetError> ex)
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

<code>[GetConnectionStatusIntegrationsProviderStatusGetRequest](src/BrowserUse/Requests/Integrations/GetConnectionStatusIntegrationsProviderStatusGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionStatusResponse](src/BrowserUse/Models/ConnectionStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetConnectionStatusIntegrationsProviderStatusGetError](src/BrowserUse/Errors/GetConnectionStatusIntegrationsProviderStatusGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IntegrationCategoryResponse&gt; ListCategoriesIntegrationsCategoriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all integration categories, for filtering the list above.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Integrations.ListCategoriesIntegrationsCategoriesGet();
    // TODO: Handle 'response' of type IntegrationCategoryResponse
}
catch (ApiException<ListCategoriesIntegrationsCategoriesGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntegrationCategoryResponse](src/BrowserUse/Models/IntegrationCategoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListCategoriesIntegrationsCategoriesGetError](src/BrowserUse/Errors/ListCategoriesIntegrationsCategoriesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IntegrationListResponse&gt; ListIntegrationsIntegrationsGet(ListIntegrationsIntegrationsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available integrations with this project's connection status.

`is_connected` is resolved per integration, so a client can render the whole
catalogue and the connected subset from this one call. `connected_only` is
what a "my integrations" view reads — including on a restricted project,
which cannot connect anything but can still remove what it already has.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Integrations.ListIntegrationsIntegrationsGet(
        new ListIntegrationsIntegrationsGetRequest());
    // TODO: Handle 'response' of type IntegrationListResponse
}
catch (ApiException<ListIntegrationsIntegrationsGetError> ex)
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

<code>[ListIntegrationsIntegrationsGetRequest](src/BrowserUse/Requests/Integrations/ListIntegrationsIntegrationsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntegrationListResponse](src/BrowserUse/Models/IntegrationListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListIntegrationsIntegrationsGetError](src/BrowserUse/Errors/ListIntegrationsIntegrationsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](src/BrowserUse/Api/Profiles.cs)

<details>
<summary><code>Task&lt;ProfileView&gt; CreateProfileProfilesPost(CreateProfileProfilesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profiles allow you to preserve the state of the browser between tasks.

They are most commonly used to allow users to preserve the log-in state in the agent between tasks.
You'd normally create one profile per user and then use it for all their tasks.

You can set a `user_id` when creating a profile to associate it with a user in your system.
This allows you to later search for the profile using the GET /profiles endpoint with a query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profiles.CreateProfileProfilesPost(new CreateProfileProfilesPostRequest());
    // TODO: Handle 'response' of type ProfileView
}
catch (ApiException<CreateProfileProfilesPostError> ex)
{
    if (ex.Error.TryGetInsufficientCreditsError(out var error))
    {
        // TODO: Handle 'error' of type InsufficientCreditsError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateProfileProfilesPostRequest](src/BrowserUse/Requests/Profiles/CreateProfileProfilesPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](src/BrowserUse/Models/ProfileView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CreateProfileProfilesPostError](src/BrowserUse/Errors/CreateProfileProfilesPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteBrowserProfileProfilesProfileIdDelete(DeleteBrowserProfileProfilesProfileIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a browser profile and its configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Profiles.DeleteBrowserProfileProfilesProfileIdDelete(
        new DeleteBrowserProfileProfilesProfileIdDeleteRequest
        {
            ProfileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteBrowserProfileProfilesProfileIdDeleteError> ex)
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

<code>[DeleteBrowserProfileProfilesProfileIdDeleteRequest](src/BrowserUse/Requests/Profiles/DeleteBrowserProfileProfilesProfileIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DeleteBrowserProfileProfilesProfileIdDeleteError](src/BrowserUse/Errors/DeleteBrowserProfileProfilesProfileIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileView&gt; GetProfileProfilesProfileIdGet(GetProfileProfilesProfileIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get profile details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profiles.GetProfileProfilesProfileIdGet(new GetProfileProfilesProfileIdGetRequest
    {
        ProfileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type ProfileView
}
catch (ApiException<GetProfileProfilesProfileIdGetError> ex)
{
    if (ex.Error.TryGetProfileNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type ProfileNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProfileProfilesProfileIdGetRequest](src/BrowserUse/Requests/Profiles/GetProfileProfilesProfileIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](src/BrowserUse/Models/ProfileView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetProfileProfilesProfileIdGetError](src/BrowserUse/Errors/GetProfileProfilesProfileIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileListResponse&gt; ListProfilesProfilesGet(ListProfilesProfilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of profiles.

Use the `query` parameter to search profiles by name or user_id.
This is useful when you have many profiles and need to find a specific user.

Example: If you set `user_id` to your internal user identifier when creating profiles,
you can later search for that user by passing their identifier as the `query` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profiles.ListProfilesProfilesGet(new ListProfilesProfilesGetRequest());
    // TODO: Handle 'response' of type ProfileListResponse
}
catch (ApiException<ListProfilesProfilesGetError> ex)
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

<code>[ListProfilesProfilesGetRequest](src/BrowserUse/Requests/Profiles/ListProfilesProfilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileListResponse](src/BrowserUse/Models/ProfileListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListProfilesProfilesGetError](src/BrowserUse/Errors/ListProfilesProfilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ProfileView&gt; UpdateProfileProfilesProfileIdPatch(UpdateProfileProfilesProfileIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a browser profile's information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profiles.UpdateProfileProfilesProfileIdPatch(
        new UpdateProfileProfilesProfileIdPatchRequest
        {
            ProfileId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new ProfileUpdateRequest(),
        });
    // TODO: Handle 'response' of type ProfileView
}
catch (ApiException<UpdateProfileProfilesProfileIdPatchError> ex)
{
    if (ex.Error.TryGetProfileNotFoundError(out var error))
    {
        // TODO: Handle 'error' of type ProfileNotFoundError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateProfileProfilesProfileIdPatchRequest](src/BrowserUse/Requests/Profiles/UpdateProfileProfilesProfileIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](src/BrowserUse/Models/ProfileView.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateProfileProfilesProfileIdPatchError](src/BrowserUse/Errors/UpdateProfileProfilesProfileIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Runs

> Source: [Runs](src/BrowserUse/Api/Runs.cs)

<details>
<summary><code>Task&lt;RunSummary&gt; CancelRunRunsRunIdCancelPost(CancelRunRunsRunIdCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-flight run.

Idempotent: a run already in a terminal state (completed / failed /
cancelled) is returned as-is. Once cancelled, the gateway refuses
every subsequent `chat_completions` call from the worker — so the
project cannot be billed further regardless of whether the worker
subprocess notices the cancel itself.

The worker keeps running for at most one more bcode step
(consuming no LLM tokens because CP 409s them) and then exits when
bcode realizes the next tool call has no model behind it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.CancelRunRunsRunIdCancelPost(new CancelRunRunsRunIdCancelPostRequest
    {
        RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RunSummary
}
catch (ApiException<CancelRunRunsRunIdCancelPostError> ex)
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

<code>[CancelRunRunsRunIdCancelPostRequest](src/BrowserUse/Requests/Runs/CancelRunRunsRunIdCancelPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunSummary](src/BrowserUse/Models/RunSummary.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CancelRunRunsRunIdCancelPostError](src/BrowserUse/Errors/CancelRunRunsRunIdCancelPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunCreateResponse&gt; CreateRunRunsPost(CreateRunRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.CreateRunRunsPost(new CreateRunRunsPostRequest
    {
        Body = new RunCreateRequest { Task = "some example string" },
    });
    // TODO: Handle 'response' of type RunCreateResponse
}
catch (ApiException<CreateRunRunsPostError> ex)
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

<code>[CreateRunRunsPostRequest](src/BrowserUse/Requests/Runs/CreateRunRunsPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunCreateResponse](src/BrowserUse/Models/RunCreateResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CreateRunRunsPostError](src/BrowserUse/Errors/CreateRunRunsPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunEventsResponse&gt; GetRunEventsRunsRunIdEventsGet(GetRunEventsRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated event read. `after` is the event id cursor — clients
doing periodic polls pass back the highest id they've seen to get only
the delta. Default 0 returns from the start.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.GetRunEventsRunsRunIdEventsGet(new GetRunEventsRunsRunIdEventsGetRequest
    {
        RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RunEventsResponse
}
catch (ApiException<GetRunEventsRunsRunIdEventsGetError> ex)
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

<code>[GetRunEventsRunsRunIdEventsGetRequest](src/BrowserUse/Requests/Runs/GetRunEventsRunsRunIdEventsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunEventsResponse](src/BrowserUse/Models/RunEventsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetRunEventsRunsRunIdEventsGetError](src/BrowserUse/Errors/GetRunEventsRunsRunIdEventsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunSummary&gt; GetRunRunsRunIdGet(GetRunRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.GetRunRunsRunIdGet(new GetRunRunsRunIdGetRequest
    {
        RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RunSummary
}
catch (ApiException<GetRunRunsRunIdGetError> ex)
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

<code>[GetRunRunsRunIdGetRequest](src/BrowserUse/Requests/Runs/GetRunRunsRunIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunSummary](src/BrowserUse/Models/RunSummary.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetRunRunsRunIdGetError](src/BrowserUse/Errors/GetRunRunsRunIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunStatusResponse&gt; GetRunStatusRunsRunIdStatusGet(GetRunStatusRunsRunIdStatusGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Minimal status poll (see RunStatusResponse). POLL rate bucket: selects
ONLY the status/project columns — a 2s poll never drags the task/result
text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then
fetch the full summary once.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.GetRunStatusRunsRunIdStatusGet(new GetRunStatusRunsRunIdStatusGetRequest
    {
        RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type RunStatusResponse
}
catch (ApiException<GetRunStatusRunsRunIdStatusGetError> ex)
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

<code>[GetRunStatusRunsRunIdStatusGetRequest](src/BrowserUse/Requests/Runs/GetRunStatusRunsRunIdStatusGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunStatusResponse](src/BrowserUse/Models/RunStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetRunStatusRunsRunIdStatusGetError](src/BrowserUse/Errors/GetRunStatusRunsRunIdStatusGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunAttachmentsResponse&gt; ListRunAttachmentsRunsRunIdAttachmentsGet(ListRunAttachmentsRunsRunIdAttachmentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The upload files attached to a run, for rendering attachment chips.
Ordered to match the run's attached_file_ids.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.ListRunAttachmentsRunsRunIdAttachmentsGet(
        new ListRunAttachmentsRunsRunIdAttachmentsGetRequest
        {
            RunId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type RunAttachmentsResponse
}
catch (ApiException<ListRunAttachmentsRunsRunIdAttachmentsGetError> ex)
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

<code>[ListRunAttachmentsRunsRunIdAttachmentsGetRequest](src/BrowserUse/Requests/Runs/ListRunAttachmentsRunsRunIdAttachmentsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunAttachmentsResponse](src/BrowserUse/Models/RunAttachmentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListRunAttachmentsRunsRunIdAttachmentsGetError](src/BrowserUse/Errors/ListRunAttachmentsRunsRunIdAttachmentsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RunListResponse&gt; ListRunsRunsGet(ListRunsRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Runs.ListRunsRunsGet(new ListRunsRunsGetRequest());
    // TODO: Handle 'response' of type RunListResponse
}
catch (ApiException<ListRunsRunsGetError> ex)
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

<code>[ListRunsRunsGetRequest](src/BrowserUse/Requests/Runs/ListRunsRunsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunListResponse](src/BrowserUse/Models/RunListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListRunsRunsGetError](src/BrowserUse/Errors/ListRunsRunsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](src/BrowserUse/Api/Sessions.cs)

<details>
<summary><code>Task&lt;QueuedMessage&gt; CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a still-pending queued message; 409 once the drain has claimed it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(
        new CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            MessageId = 1,
        });
    // TODO: Handle 'response' of type QueuedMessage
}
catch (ApiException<CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError> ex)
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

<code>[CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest](src/BrowserUse/Requests/Sessions/CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](src/BrowserUse/Models/QueuedMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError](src/BrowserUse/Errors/CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionShareInfo&gt; CreateSessionShareSessionsSessionIdSharePost(CreateSessionShareSessionsSessionIdSharePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable sharing: reactivates the session's existing share (stable token,
so a link that was toggled off keeps working when re-enabled) or creates
one on first use.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.CreateSessionShareSessionsSessionIdSharePost(
        new CreateSessionShareSessionsSessionIdSharePostRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type SessionShareInfo
}
catch (ApiException<CreateSessionShareSessionsSessionIdSharePostError> ex)
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

<code>[CreateSessionShareSessionsSessionIdSharePostRequest](src/BrowserUse/Requests/Sessions/CreateSessionShareSessionsSessionIdSharePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionShareInfo](src/BrowserUse/Models/SessionShareInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CreateSessionShareSessionsSessionIdSharePostError](src/BrowserUse/Errors/CreateSessionShareSessionsSessionIdSharePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteSessionSessionsSessionIdDelete(DeleteSessionSessionsSessionIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a session: it disappears from the session lists and can no longer
be opened or continued.

Soft delete (mirrors V2's `is_archived`): the runs, events and usage records
stay in place so billing and analytics keep reconciling, and ZDR purge is the
only thing that ever destroys V4 content. Idempotent — deleting twice is a
no-op 204.

An in-flight run is cancelled first, and pending queued messages are
cancelled too; otherwise the drain would dispatch a follow-up run whose
`session_archived_at` is NULL and resurrect the session. Cancel is forwarded
to CP before anything is written (and outside the queue lock, per the
enqueue path's ordering), so a CP failure (502) leaves the session visible
rather than hiding a run that is still burning credits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sessions.DeleteSessionSessionsSessionIdDelete(new DeleteSessionSessionsSessionIdDeleteRequest
    {
        SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteSessionSessionsSessionIdDeleteError> ex)
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

<code>[DeleteSessionSessionsSessionIdDeleteRequest](src/BrowserUse/Requests/Sessions/DeleteSessionSessionsSessionIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DeleteSessionSessionsSessionIdDeleteError](src/BrowserUse/Errors/DeleteSessionSessionsSessionIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionCostResponse&gt; GetSessionCostSessionsSessionIdCostGet(GetSessionCostSessionsSessionIdCostGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything this session has cost so far, split by source.

A run's `total_cost_usd` is its LLM (and web-search) charge only. Browser
time and proxy bandwidth are metered against the session's browser, which
outlives any one run — so this is the endpoint for the session's full cost.

These are recorded usage costs, not an invoice total: promotional waivers
and credits are applied downstream in billing, so a session run under a
promotion can report cost here that was never charged.

Costs keep moving after a run reports `finished`: LLM calls settle up to
about 90 seconds later, and the browser accrues time and proxy traffic
until it stops.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionCostSessionsSessionIdCostGet(
        new GetSessionCostSessionsSessionIdCostGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type SessionCostResponse
}
catch (ApiException<GetSessionCostSessionsSessionIdCostGetError> ex)
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

<code>[GetSessionCostSessionsSessionIdCostGetRequest](src/BrowserUse/Requests/Sessions/GetSessionCostSessionsSessionIdCostGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionCostResponse](src/BrowserUse/Models/SessionCostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetSessionCostSessionsSessionIdCostGetError](src/BrowserUse/Errors/GetSessionCostSessionsSessionIdCostGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueuedMessage&gt; GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet(GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read one queued message including terminal handoff states.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGet(
        new GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            MessageId = 1,
        });
    // TODO: Handle 'response' of type QueuedMessage
}
catch (ApiException<GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError> ex)
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

<code>[GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest](src/BrowserUse/Requests/Sessions/GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](src/BrowserUse/Models/QueuedMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError](src/BrowserUse/Errors/GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionInfo&gt; GetSessionSessionsSessionIdGet(GetSessionSessionsSessionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Session detail — the same slim shape as one GET /sessions row (its
latest run). Doubles as the busy/idle poll for a conversation (POLL rate
bucket): slim columns only, indexed public_session_id lookup, never the
heavy result/token fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionSessionsSessionIdGet(new GetSessionSessionsSessionIdGetRequest
    {
        SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type SessionInfo
}
catch (ApiException<GetSessionSessionsSessionIdGetError> ex)
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

<code>[GetSessionSessionsSessionIdGetRequest](src/BrowserUse/Requests/Sessions/GetSessionSessionsSessionIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfo](src/BrowserUse/Models/SessionInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetSessionSessionsSessionIdGetError](src/BrowserUse/Errors/GetSessionSessionsSessionIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResponseGetSessionShareSessionsSessionIdShareGet&gt; GetSessionShareSessionsSessionIdShareGet(GetSessionShareSessionsSessionIdShareGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The session's share link (active or not); null if never shared.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.GetSessionShareSessionsSessionIdShareGet(
        new GetSessionShareSessionsSessionIdShareGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type ResponseGetSessionShareSessionsSessionIdShareGet
}
catch (ApiException<GetSessionShareSessionsSessionIdShareGetError> ex)
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

<code>[GetSessionShareSessionsSessionIdShareGetRequest](src/BrowserUse/Requests/Sessions/GetSessionShareSessionsSessionIdShareGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResponseGetSessionShareSessionsSessionIdShareGet](src/BrowserUse/Models/AnyOf/ResponseGetSessionShareSessionsSessionIdShareGet.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetSessionShareSessionsSessionIdShareGetError](src/BrowserUse/Errors/GetSessionShareSessionsSessionIdShareGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueueListResponse&gt; ListSessionQueueSessionsSessionIdQueueGet(ListSessionQueueSessionsSessionIdQueueGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List open messages, recently delivered queued messages, and steering cutoffs.

Includes live dispatch claims so clients can restore an accepted queued
message after a refresh without briefly losing its waiting state.

Consumed QUEUE rows are returned too, capped at the most recent
_DELIVERED_QUEUE_HISTORY, plus up to _AGENCY_DELIVERED_QUEUE_HISTORY compact
Agency choice and generation receipts so inbox state survives refresh. A message absorbed mid-run is announced by a
`queued_input_injected` event carrying only its input id, so the chat has no
other source for the text to render. The cap bounds this response because
clients poll it while a run is active; a session with more delivered
follow-ups than the cap renders its oldest injected bubbles without text.

The latest consumed interrupt bridges the primary-write/read-replica gap
before its replacement run appears; clients discard it once that run is
visible. Compact per-source cutoffs preserve every historical interrupted
transcript boundary without returning every historical steering message and
its attachments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.ListSessionQueueSessionsSessionIdQueueGet(
        new ListSessionQueueSessionsSessionIdQueueGetRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type QueueListResponse
}
catch (ApiException<ListSessionQueueSessionsSessionIdQueueGetError> ex)
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

<code>[ListSessionQueueSessionsSessionIdQueueGetRequest](src/BrowserUse/Requests/Sessions/ListSessionQueueSessionsSessionIdQueueGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueListResponse](src/BrowserUse/Models/QueueListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListSessionQueueSessionsSessionIdQueueGetError](src/BrowserUse/Errors/ListSessionQueueSessionsSessionIdQueueGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionListResponse&gt; ListSessionsSessionsGet(ListSessionsSessionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the project's V4 sessions — one row per session (its most recent
run), most-recent first.

A session is a conversation: follow-up runs reuse the same
public_session_id, so GET /api/v4/runs would list one row per RUN. This
collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a
chatty session with 100 runs is still a single row (no scan amplification),
and selects only the slim columns the session list needs — never the heavy
per-run text/token/cost fields.

Keyset-paginated on the latest run's (created_at, id): pass `next_cursor`
back as `cursor` to page. Offset/COUNT was dropped — it doesn't scale on
projects with many sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.ListSessionsSessionsGet(new ListSessionsSessionsGetRequest());
    // TODO: Handle 'response' of type SessionListResponse
}
catch (ApiException<ListSessionsSessionsGetError> ex)
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

<code>[ListSessionsSessionsGetRequest](src/BrowserUse/Requests/Sessions/ListSessionsSessionsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionListResponse](src/BrowserUse/Models/SessionListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListSessionsSessionsGetError](src/BrowserUse/Errors/ListSessionsSessionsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task PurgeSessionSessionsSessionIdPurgePost(PurgeSessionSessionsSessionIdPurgePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purge V4 session data; return 202 while active work or uploads defer deletion.

Redacts DB records and deletes S3 objects (bcode state, workspace files,
recordings, downloads, staging uploads) for every run in the session. Same
cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer physical deletion. V4
analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live
sibling run are deferred by the same guards the cron uses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sessions.PurgeSessionSessionsSessionIdPurgePost(new PurgeSessionSessionsSessionIdPurgePostRequest
    {
        SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<PurgeSessionSessionsSessionIdPurgePostError> ex)
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

<code>[PurgeSessionSessionsSessionIdPurgePostRequest](src/BrowserUse/Requests/Sessions/PurgeSessionSessionsSessionIdPurgePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[PurgeSessionSessionsSessionIdPurgePostError](src/BrowserUse/Errors/PurgeSessionSessionsSessionIdPurgePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QueuedMessage&gt; QueueSessionMessageSessionsSessionIdQueuePost(QueueSessionMessageSessionsSessionIdQueuePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a session. If the session is busy it waits on the queue
and runs as the next turn; if idle it drains immediately.

`interrupt=true` cancels the session's active run so this message takes effect
now instead of waiting for the current turn (no-op when the session is idle).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.QueueSessionMessageSessionsSessionIdQueuePost(
        new QueueSessionMessageSessionsSessionIdQueuePostRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new QueueMessageRequest { Text = "some example string" },
        });
    // TODO: Handle 'response' of type QueuedMessage
}
catch (ApiException<QueueSessionMessageSessionsSessionIdQueuePostError> ex)
{
    if (ex.Error.TryGetApiKeySpendLimitError(out var error))
    {
        // TODO: Handle 'error' of type ApiKeySpendLimitError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[QueueSessionMessageSessionsSessionIdQueuePostRequest](src/BrowserUse/Requests/Sessions/QueueSessionMessageSessionsSessionIdQueuePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](src/BrowserUse/Models/QueuedMessage.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[QueueSessionMessageSessionsSessionIdQueuePostError](src/BrowserUse/Errors/QueueSessionMessageSessionsSessionIdQueuePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionCostCapResponse&gt; UpdateSessionCostCapSessionsSessionIdCostCapPatch(UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the active run cap without starting another run.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatch(
        new UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new SessionCostCapRequest { MaxCostUsd = 1.5d },
        });
    // TODO: Handle 'response' of type SessionCostCapResponse
}
catch (ApiException<UpdateSessionCostCapSessionsSessionIdCostCapPatchError> ex)
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

<code>[UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest](src/BrowserUse/Requests/Sessions/UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionCostCapResponse](src/BrowserUse/Models/SessionCostCapResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateSessionCostCapSessionsSessionIdCostCapPatchError](src/BrowserUse/Errors/UpdateSessionCostCapSessionsSessionIdCostCapPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionInfo&gt; UpdateSessionSessionsSessionIdPatch(UpdateSessionSessionsSessionIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a session.

`session_title` is denormalized onto every run in the session (the session
list reads the latest run), so a rename writes them all in one UPDATE. Null
clears the name and the UI falls back to the opening task — it does NOT
re-run title generation, which only fills rows where the title IS NULL and
so would silently overwrite the clear.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.UpdateSessionSessionsSessionIdPatch(
        new UpdateSessionSessionsSessionIdPatchRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new SessionUpdateRequest(),
        });
    // TODO: Handle 'response' of type SessionInfo
}
catch (ApiException<UpdateSessionSessionsSessionIdPatchError> ex)
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

<code>[UpdateSessionSessionsSessionIdPatchRequest](src/BrowserUse/Requests/Sessions/UpdateSessionSessionsSessionIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfo](src/BrowserUse/Models/SessionInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateSessionSessionsSessionIdPatchError](src/BrowserUse/Errors/UpdateSessionSessionsSessionIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SessionShareInfo&gt; UpdateSessionShareSessionsSessionIdSharePut(UpdateSessionShareSessionsSessionIdSharePutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle the session's share link on/off.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sessions.UpdateSessionShareSessionsSessionIdSharePut(
        new UpdateSessionShareSessionsSessionIdSharePutRequest
        {
            SessionId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new SessionShareUpdateRequest { IsActive = true },
        });
    // TODO: Handle 'response' of type SessionShareInfo
}
catch (ApiException<UpdateSessionShareSessionsSessionIdSharePutError> ex)
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

<code>[UpdateSessionShareSessionsSessionIdSharePutRequest](src/BrowserUse/Requests/Sessions/UpdateSessionShareSessionsSessionIdSharePutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionShareInfo](src/BrowserUse/Models/SessionShareInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateSessionShareSessionsSessionIdSharePutError](src/BrowserUse/Errors/UpdateSessionShareSessionsSessionIdSharePutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Wallets

> Source: [Wallets](src/BrowserUse/Api/Wallets.cs)

<details>
<summary><code>Task&lt;StripeLinkStatusResponse&gt; GetStripeLinkStatusStripeLinkGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active Stripe Link wallet connection, if any.

Read-only: connecting happens in the cloud UI. A run opts into paying with
it by passing `connection_id` as RunCreateRequest.stripe_link_connection_id,
which is validated again there against this same project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wallets.GetStripeLinkStatusStripeLinkGet();
    // TODO: Handle 'response' of type StripeLinkStatusResponse
}
catch (ApiException<GetStripeLinkStatusStripeLinkGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StripeLinkStatusResponse](src/BrowserUse/Models/StripeLinkStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetStripeLinkStatusStripeLinkGetError](src/BrowserUse/Errors/GetStripeLinkStatusStripeLinkGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AgentCardWalletListResponse&gt; ListAgentcardWalletsAgentcardWalletsGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active AgentCard wallets, newest first.

Read-only: funding is admin-only during the beta. The UI uses this to offer
a wallet on the composer, which is how a run opts into spending — the id
then rides RunCreateRequest.agentcard_wallet_id and is validated again there
against this same project.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Wallets.ListAgentcardWalletsAgentcardWalletsGet();
    // TODO: Handle 'response' of type AgentCardWalletListResponse
}
catch (ApiException<ListAgentcardWalletsAgentcardWalletsGetError> ex)
{
    if (ex.Error.TryGetHttpValidationError(out var error))
    {
        // TODO: Handle 'error' of type HttpValidationError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentCardWalletListResponse](src/BrowserUse/Models/AgentCardWalletListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListAgentcardWalletsAgentcardWalletsGetError](src/BrowserUse/Errors/ListAgentcardWalletsAgentcardWalletsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/BrowserUse/Api/Workspaces.cs)

<details>
<summary><code>Task&lt;WorkspaceInfo&gt; CreateWorkspaceWorkspacesPost(CreateWorkspaceWorkspacesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mint an empty workspace. Lets callers upload input files BEFORE the
first run exists; pass the id as workspaceId on POST /runs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.CreateWorkspaceWorkspacesPost(new CreateWorkspaceWorkspacesPostRequest
    {
        Body = new WorkspaceCreateRequest(),
    });
    // TODO: Handle 'response' of type WorkspaceInfo
}
catch (ApiException<CreateWorkspaceWorkspacesPostError> ex)
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

<code>[CreateWorkspaceWorkspacesPostRequest](src/BrowserUse/Requests/Workspaces/CreateWorkspaceWorkspacesPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](src/BrowserUse/Models/WorkspaceInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[CreateWorkspaceWorkspacesPostError](src/BrowserUse/Errors/CreateWorkspaceWorkspacesPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one exact path from a workspace and remove matching upload metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Workspaces.DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete(
        new DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Path = "some example string",
        });
}
catch (ApiException<DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError> ex)
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

<code>[DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest](src/BrowserUse/Requests/Workspaces/DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError](src/BrowserUse/Errors/DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWorkspaceWorkspacesWorkspaceIdDelete(DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a workspace. Idempotent for missing, archived, and foreign ids.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Workspaces.DeleteWorkspaceWorkspacesWorkspaceIdDelete(
        new DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
}
catch (ApiException<DeleteWorkspaceWorkspacesWorkspaceIdDeleteError> ex)
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

<code>[DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest](src/BrowserUse/Requests/Workspaces/DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[DeleteWorkspaceWorkspacesWorkspaceIdDeleteError](src/BrowserUse/Errors/DeleteWorkspaceWorkspacesWorkspaceIdDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceSizeInfo&gt; GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet(GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current storage usage and the plan-specific workspace quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet(
        new GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type WorkspaceSizeInfo
}
catch (ApiException<GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError> ex)
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

<code>[GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest](src/BrowserUse/Requests/Workspaces/GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceSizeInfo](src/BrowserUse/Models/WorkspaceSizeInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError](src/BrowserUse/Errors/GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceInfo&gt; GetWorkspaceWorkspacesWorkspaceIdGet(GetWorkspaceWorkspacesWorkspaceIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspaceWorkspacesWorkspaceIdGet(
        new GetWorkspaceWorkspacesWorkspaceIdGetRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type WorkspaceInfo
}
catch (ApiException<GetWorkspaceWorkspacesWorkspaceIdGetError> ex)
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

<code>[GetWorkspaceWorkspacesWorkspaceIdGetRequest](src/BrowserUse/Requests/Workspaces/GetWorkspaceWorkspacesWorkspaceIdGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](src/BrowserUse/Models/WorkspaceInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceWorkspacesWorkspaceIdGetError](src/BrowserUse/Errors/GetWorkspaceWorkspacesWorkspaceIdGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceFileListResponse&gt; ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet(ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the agent has produced for this workspace, paginated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.ListWorkspaceFilesWorkspacesWorkspaceIdFilesGet(
        new ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        });
    // TODO: Handle 'response' of type WorkspaceFileListResponse
}
catch (ApiException<ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError> ex)
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

<code>[ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest](src/BrowserUse/Requests/Workspaces/ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceFileListResponse](src/BrowserUse/Models/WorkspaceFileListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError](src/BrowserUse/Errors/ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceInfo&gt; UpdateWorkspaceWorkspacesWorkspaceIdPatch(UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a workspace. Explicit null clears the name; omission is a no-op.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.UpdateWorkspaceWorkspacesWorkspaceIdPatch(
        new UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new WorkspaceUpdateRequest(),
        });
    // TODO: Handle 'response' of type WorkspaceInfo
}
catch (ApiException<UpdateWorkspaceWorkspacesWorkspaceIdPatchError> ex)
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

<code>[UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest](src/BrowserUse/Requests/Workspaces/UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](src/BrowserUse/Models/WorkspaceInfo.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UpdateWorkspaceWorkspacesWorkspaceIdPatchError](src/BrowserUse/Errors/UpdateWorkspaceWorkspacesWorkspaceIdPatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceFileUploadResponse&gt; UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presigned PUT URLs for input files, placed under ``uploads/`` in the
workspace. The agent pulls them in at the start of every run. URLs are
pinned to the declared Content-Type and exact Content-Length.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost(
        new UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest
        {
            WorkspaceId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Body = new WorkspaceFileUploadRequest
            {
                Files = [new WorkspaceFileUploadItem { Name = "some example string", Size = 1 }],
            },
        });
    // TODO: Handle 'response' of type WorkspaceFileUploadResponse
}
catch (ApiException<UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError> ex)
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

<code>[UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest](src/BrowserUse/Requests/Workspaces/UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceFileUploadResponse](src/BrowserUse/Models/WorkspaceFileUploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/BrowserUse/Core/Exceptions/ApiException.cs)&lt;[UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError](src/BrowserUse/Errors/UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

