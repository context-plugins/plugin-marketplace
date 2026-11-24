# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [JuriSignClient](src/JuriSign/JuriSignClient.cs)

## Account

> Source: [Account](src/JuriSign/Api/Account.cs)

<details>
<summary><code>Task&lt;AccountCreditsResponse&gt; GetAccountCredits(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of the authenticated token.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetAccountCredits();
    // TODO: Handle 'response' of type AccountCreditsResponse
}
catch (ApiException<GetAccountCreditsError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountCreditsResponse](src/JuriSign/Models/AccountCreditsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetAccountCreditsError](src/JuriSign/Errors/GetAccountCreditsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AuthenticationApi

> Source: [AuthenticationApi](src/JuriSign/Api/AuthenticationApi.cs)

<details>
<summary><code>Task&lt;AuthSandboxTokenResponse&gt; CreateSandboxToken(CreateSandboxTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it — mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.CreateSandboxToken(new CreateSandboxTokenRequest
    {
        Body = new AuthSandboxTokenRequest { Email = "user@example.com", Password = "some example password" },
    });
    // TODO: Handle 'response' of type AuthSandboxTokenResponse
}
catch (ApiException<CreateSandboxTokenError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSandboxTokenRequest](src/JuriSign/Requests/AuthenticationApi/CreateSandboxTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthSandboxTokenResponse](src/JuriSign/Models/AuthSandboxTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateSandboxTokenError](src/JuriSign/Errors/CreateSandboxTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AuthTokenResponse&gt; CreateToken(CreateTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write, webhooks:manage). Pass `scopes` to request a restricted subset instead — every endpoint checks the token's abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute for the calling IP.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.CreateToken(new CreateTokenRequest
    {
        Body = new AuthTokenRequest { Email = "user@example.com", Password = "some example password" },
    });
    // TODO: Handle 'response' of type AuthTokenResponse
}
catch (ApiException<CreateTokenError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateTokenRequest](src/JuriSign/Requests/AuthenticationApi/CreateTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthTokenResponse](src/JuriSign/Models/AuthTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateTokenError](src/JuriSign/Errors/CreateTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ResponseModel&gt; GetStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current API status and version information.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.GetStatus();
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

**OnSuccess**: <code>[ResponseModel](src/JuriSign/Models/ResponseModel.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[RawError](src/JuriSign/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; RevokeToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke the Bearer token used in this request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.AuthenticationApi.RevokeToken();
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<RevokeTokenError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[RevokeTokenError](src/JuriSign/Errors/RevokeTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Bulk

> Source: [Bulk](src/JuriSign/Api/Bulk.cs)

<details>
<summary><code>Task&lt;BulkCampaignsCancelResponse&gt; CancelBulkCampaign(CancelBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.CancelBulkCampaign(new CancelBulkCampaignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkCampaignsCancelResponse
}
catch (ApiException<CancelBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelBulkCampaignRequest](src/JuriSign/Requests/Bulk/CancelBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsCancelResponse](src/JuriSign/Models/BulkCampaignsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CancelBulkCampaignError](src/JuriSign/Errors/CancelBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsResponse1&gt; CreateBulkCampaign(CreateBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for API clients). Each recipient generates one individualized sign request, merged from the bulk template. Invalid rows (missing fields, invalid email, duplicate email) are skipped and reported in `skipped_recipients`, not fatal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.CreateBulkCampaign(new CreateBulkCampaignRequest
    {
        Body = new BulkCampaignsRequest
        {
            Name = "some example string",
            BulkTemplateId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            ExpiryHours = 1,
            OtpChannel = OtpChannel.Sms,
            Recipients = [
                new Recipient
                {
                    Nom = "some example string",
                    Prenom = "some example string",
                    Email = "user@example.com",
                },
            ],
        },
    });
    // TODO: Handle 'response' of type BulkCampaignsResponse1
}
catch (ApiException<CreateBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBulkCampaignRequest](src/JuriSign/Requests/Bulk/CreateBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsResponse1](src/JuriSign/Models/BulkCampaignsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateBulkCampaignError](src/JuriSign/Errors/CreateBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkTemplatesResponse1&gt; CreateBulkTemplate(CreateBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a merge-field HTML template (e.g. `
Bonjour {{prenom}} {{nom}}
`). Merge fields are auto-extracted from the content.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.CreateBulkTemplate(new CreateBulkTemplateRequest
    {
        Body = new BulkTemplatesRequest { Name = "some example string", HtmlContent = "some example string" },
    });
    // TODO: Handle 'response' of type BulkTemplatesResponse1
}
catch (ApiException<CreateBulkTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateBulkTemplateRequest](src/JuriSign/Requests/Bulk/CreateBulkTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkTemplatesResponse1](src/JuriSign/Models/BulkTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateBulkTemplateError](src/JuriSign/Errors/CreateBulkTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteBulkCampaign(DeleteBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the campaign is currently processing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.DeleteBulkCampaign(new DeleteBulkCampaignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBulkCampaignRequest](src/JuriSign/Requests/Bulk/DeleteBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeleteBulkCampaignError](src/JuriSign/Errors/DeleteBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteBulkTemplate(DeleteBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fails with 422 if the template is still referenced by a campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.DeleteBulkTemplate(new DeleteBulkTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteBulkTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteBulkTemplateRequest](src/JuriSign/Requests/Bulk/DeleteBulkTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeleteBulkTemplateError](src/JuriSign/Errors/DeleteBulkTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsExportResponse&gt; ExportBulkCampaignResults(ExportBulkCampaignResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Per-recipient status, send/sign timestamps, and error messages.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.ExportBulkCampaignResults(new ExportBulkCampaignResultsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkCampaignsExportResponse
}
catch (ApiException<ExportBulkCampaignResultsError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExportBulkCampaignResultsRequest](src/JuriSign/Requests/Bulk/ExportBulkCampaignResultsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsExportResponse](src/JuriSign/Models/BulkCampaignsExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ExportBulkCampaignResultsError](src/JuriSign/Errors/ExportBulkCampaignResultsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsResponse2&gt; GetBulkCampaign(GetBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.GetBulkCampaign(new GetBulkCampaignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkCampaignsResponse2
}
catch (ApiException<GetBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBulkCampaignRequest](src/JuriSign/Requests/Bulk/GetBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsResponse2](src/JuriSign/Models/BulkCampaignsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetBulkCampaignError](src/JuriSign/Errors/GetBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkTemplatesResponse1&gt; GetBulkTemplate(GetBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.GetBulkTemplate(new GetBulkTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkTemplatesResponse1
}
catch (ApiException<GetBulkTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBulkTemplateRequest](src/JuriSign/Requests/Bulk/GetBulkTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkTemplatesResponse1](src/JuriSign/Models/BulkTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetBulkTemplateError](src/JuriSign/Errors/GetBulkTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsLaunchResponse&gt; LaunchBulkCampaign(LaunchBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dispatches an asynchronous job that generates each recipient's document, creates their sign request, and sends it. Fails with 422 if the organization does not have enough remaining credits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.LaunchBulkCampaign(new LaunchBulkCampaignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkCampaignsLaunchResponse
}
catch (ApiException<LaunchBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LaunchBulkCampaignRequest](src/JuriSign/Requests/Bulk/LaunchBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsLaunchResponse](src/JuriSign/Models/BulkCampaignsLaunchResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[LaunchBulkCampaignError](src/JuriSign/Errors/LaunchBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsResponse&gt; ListBulkCampaigns(ListBulkCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.ListBulkCampaigns(new ListBulkCampaignsRequest());
    // TODO: Handle 'response' of type BulkCampaignsResponse
}
catch (ApiException<ListBulkCampaignsError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListBulkCampaignsRequest](src/JuriSign/Requests/Bulk/ListBulkCampaignsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsResponse](src/JuriSign/Models/BulkCampaignsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListBulkCampaignsError](src/JuriSign/Errors/ListBulkCampaignsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkTemplatesResponse&gt; ListBulkTemplates(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable merge-field HTML templates used by bulk campaigns.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.ListBulkTemplates();
    // TODO: Handle 'response' of type BulkTemplatesResponse
}
catch (ApiException<ListBulkTemplatesError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkTemplatesResponse](src/JuriSign/Models/BulkTemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListBulkTemplatesError](src/JuriSign/Errors/ListBulkTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkCampaignsRetryResponse&gt; RetryBulkCampaign(RetryBulkCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets recipients in error back to pending so the campaign can be launched again.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.RetryBulkCampaign(new RetryBulkCampaignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkCampaignsRetryResponse
}
catch (ApiException<RetryBulkCampaignError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RetryBulkCampaignRequest](src/JuriSign/Requests/Bulk/RetryBulkCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkCampaignsRetryResponse](src/JuriSign/Models/BulkCampaignsRetryResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[RetryBulkCampaignError](src/JuriSign/Errors/RetryBulkCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkTemplatesResponse1&gt; UpdateBulkTemplate(UpdateBulkTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Bulk.UpdateBulkTemplate(new UpdateBulkTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BulkTemplatesResponse1
}
catch (ApiException<UpdateBulkTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateBulkTemplateRequest](src/JuriSign/Requests/Bulk/UpdateBulkTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkTemplatesResponse1](src/JuriSign/Models/BulkTemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[UpdateBulkTemplateError](src/JuriSign/Errors/UpdateBulkTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Documents

> Source: [Documents](src/JuriSign/Api/Documents.cs)

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteDocument(DeleteDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a document. Only documents in `draft` status can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.DeleteDocument(new DeleteDocumentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteDocumentError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteDocumentRequest](src/JuriSign/Requests/Documents/DeleteDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeleteDocumentError](src/JuriSign/Errors/DeleteDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadDocument(DownloadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the original PDF file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.DownloadDocument(new DownloadDocumentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadDocumentError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadDocumentRequest](src/JuriSign/Requests/Documents/DownloadDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DownloadDocumentError](src/JuriSign/Errors/DownloadDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentsResponse1&gt; GetDocument(GetDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a specific document.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.GetDocument(new GetDocumentRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type DocumentsResponse1
}
catch (ApiException<GetDocumentError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDocumentRequest](src/JuriSign/Requests/Documents/GetDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentsResponse1](src/JuriSign/Models/DocumentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetDocumentError](src/JuriSign/Errors/GetDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentsResponse&gt; ListDocuments(ListDocumentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of documents belonging to your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.ListDocuments(new ListDocumentsRequest());
    // TODO: Handle 'response' of type DocumentsResponse
}
catch (ApiException<ListDocumentsError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListDocumentsRequest](src/JuriSign/Requests/Documents/ListDocumentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentsResponse](src/JuriSign/Models/DocumentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListDocumentsError](src/JuriSign/Errors/ListDocumentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DocumentsResponse1&gt; UploadDocument(UploadDocumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a PDF document. Maximum file size is 20 MB.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Documents.UploadDocument(new UploadDocumentRequest { File = Array.Empty<byte>() });
    // TODO: Handle 'response' of type DocumentsResponse1
}
catch (ApiException<UploadDocumentError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadDocumentRequest](src/JuriSign/Requests/Documents/UploadDocumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DocumentsResponse1](src/JuriSign/Models/DocumentsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[UploadDocumentError](src/JuriSign/Errors/UploadDocumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PublicForms

> Source: [PublicForms](src/JuriSign/Api/PublicForms.cs)

<details>
<summary><code>Task&lt;PublicFormsResponse1&gt; CreatePublicForm(CreatePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a shareable link backed by one of your sign request templates. Anyone opening the link fills in their details and becomes the signer of their own signature request, generated on the fly. The template MUST have exactly one signer and its own copy of the PDF.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.CreatePublicForm(new CreatePublicFormRequest
    {
        Body = new PublicFormsRequest
        {
            Name = "some example string",
            SignRequestTemplateId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        },
    });
    // TODO: Handle 'response' of type PublicFormsResponse1
}
catch (ApiException<CreatePublicFormError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreatePublicFormRequest](src/JuriSign/Requests/PublicForms/CreatePublicFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicFormsResponse1](src/JuriSign/Models/PublicFormsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreatePublicFormError](src/JuriSign/Errors/CreatePublicFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeletePublicForm(DeletePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.DeletePublicForm(new DeletePublicFormRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeletePublicFormError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeletePublicFormRequest](src/JuriSign/Requests/PublicForms/DeletePublicFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeletePublicFormError](src/JuriSign/Errors/DeletePublicFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicFormsResponse1&gt; GetPublicForm(GetPublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.GetPublicForm(new GetPublicFormRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PublicFormsResponse1
}
catch (ApiException<GetPublicFormError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPublicFormRequest](src/JuriSign/Requests/PublicForms/GetPublicFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicFormsResponse1](src/JuriSign/Models/PublicFormsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetPublicFormError](src/JuriSign/Errors/GetPublicFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicFormsResponse&gt; ListPublicForms(ListPublicFormsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the shareable public forms (PowerForms) of your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.ListPublicForms(new ListPublicFormsRequest());
    // TODO: Handle 'response' of type PublicFormsResponse
}
catch (ApiException<ListPublicFormsError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPublicFormsRequest](src/JuriSign/Requests/PublicForms/ListPublicFormsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicFormsResponse](src/JuriSign/Models/PublicFormsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListPublicFormsError](src/JuriSign/Errors/ListPublicFormsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicFormsRotateTokenResponse&gt; RotatePublicFormToken(RotatePublicFormTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new public token. The previous link stops working immediately — use this if a link leaked or was shared too widely.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.RotatePublicFormToken(new RotatePublicFormTokenRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PublicFormsRotateTokenResponse
}
catch (ApiException<RotatePublicFormTokenError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RotatePublicFormTokenRequest](src/JuriSign/Requests/PublicForms/RotatePublicFormTokenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicFormsRotateTokenResponse](src/JuriSign/Models/PublicFormsRotateTokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[RotatePublicFormTokenError](src/JuriSign/Errors/RotatePublicFormTokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicFormsResponse1&gt; UpdatePublicForm(UpdatePublicFormRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename, pause/reactivate, change the expiry or the daily cap.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PublicForms.UpdatePublicForm(new UpdatePublicFormRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type PublicFormsResponse1
}
catch (ApiException<UpdatePublicFormError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdatePublicFormRequest](src/JuriSign/Requests/PublicForms/UpdatePublicFormRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicFormsResponse1](src/JuriSign/Models/PublicFormsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[UpdatePublicFormError](src/JuriSign/Errors/UpdatePublicFormError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SignRequests

> Source: [SignRequests](src/JuriSign/Api/SignRequests.cs)

<details>
<summary><code>Task&lt;SignRequestsCancelResponse&gt; CancelSignRequest(CancelSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a pending signature request. Only requests in `pending` status can be cancelled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.CancelSignRequest(new CancelSignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type SignRequestsCancelResponse
}
catch (ApiException<CancelSignRequestError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelSignRequest](src/JuriSign/Requests/SignRequests/CancelSignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignRequestsCancelResponse](src/JuriSign/Models/SignRequestsCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CancelSignRequestError](src/JuriSign/Errors/CancelSignRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignRequestsResponse1&gt; CreateSignRequest(CreateSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new signature request with one or more signers. The request is created in `draft` status and must be sent explicitly via the send endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.CreateSignRequest(new CreateSignRequest
    {
        IdempotencyKey = "order-4821",
        Body = new CreateSignRequestInput
        {
            DocumentId = Guid.Parse("00000000-0000-0000-0000-000000000000"),
            Subject = "some example string",
            SigningOrderType = SigningOrderType.Value0,
            ExpiryHours = 1,
            Signers = [
                new Signer
                {
                    Prenom = "some example string",
                    Nom = "some example string",
                    Email = "user@example.com",
                    OtpChannel = OtpChannelJuriSignSignRequestsApi.Sms,
                },
            ],
        },
    });
    // TODO: Handle 'response' of type SignRequestsResponse1
}
catch (ApiException<CreateSignRequestError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignRequest](src/JuriSign/Requests/SignRequests/CreateSignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignRequestsResponse1](src/JuriSign/Models/SignRequestsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateSignRequestError](src/JuriSign/Errors/CreateSignRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadProof(DownloadProofRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the audit proof PDF, containing a detailed log of all signing actions with timestamps and IP addresses.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.DownloadProof(new DownloadProofRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadProofError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadProofRequest](src/JuriSign/Requests/SignRequests/DownloadProofRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DownloadProofError](src/JuriSign/Errors/DownloadProofError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; DownloadSignedPdf(DownloadSignedPdfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Download the signed PDF document. Only available after all signers have completed signing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.DownloadSignedPdf(new DownloadSignedPdfRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<DownloadSignedPdfError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DownloadSignedPdfRequest](src/JuriSign/Requests/SignRequests/DownloadSignedPdfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DownloadSignedPdfError](src/JuriSign/Errors/DownloadSignedPdfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignRequestsResponse2&gt; GetSignRequest(GetSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a signature request, including signers, signature zones, and download links.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.GetSignRequest(new GetSignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type SignRequestsResponse2
}
catch (ApiException<GetSignRequestError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSignRequest](src/JuriSign/Requests/SignRequests/GetSignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignRequestsResponse2](src/JuriSign/Models/SignRequestsResponse2.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetSignRequestError](src/JuriSign/Errors/GetSignRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignRequestsResponse&gt; ListSignRequests(ListSignRequestsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of signature requests.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.ListSignRequests(new ListSignRequestsRequest());
    // TODO: Handle 'response' of type SignRequestsResponse
}
catch (ApiException<ListSignRequestsError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListSignRequestsRequest](src/JuriSign/Requests/SignRequests/ListSignRequestsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignRequestsResponse](src/JuriSign/Models/SignRequestsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListSignRequestsError](src/JuriSign/Errors/ListSignRequestsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SignRequestsSendResponse&gt; SendSignRequest(SendSignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send the signature request to all signers. This changes the status from `draft` to `pending` and sends invitation emails.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SignRequests.SendSignRequest(new SendSignRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type SignRequestsSendResponse
}
catch (ApiException<SendSignRequestError> ex)
{
    if (ex.Error.TryGetUnauthenticated1(out var error))
    {
        // TODO: Handle 'error' of type Unauthenticated1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SendSignRequest](src/JuriSign/Requests/SignRequests/SendSignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SignRequestsSendResponse](src/JuriSign/Models/SignRequestsSendResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[SendSignRequestError](src/JuriSign/Errors/SendSignRequestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Templates

> Source: [Templates](src/JuriSign/Api/Templates.cs)

<details>
<summary><code>Task&lt;TemplatesSignRequestsResponse&gt; CreateSignRequestFromTemplate(CreateSignRequestFromTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a signature request from a template, reusing its signers, signature zones, and (if present) its own copy of the document. Subject, message, expiry and redirect_url can be overridden. If the template has no document of its own, `document_id` is required.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.CreateSignRequestFromTemplate(new CreateSignRequestFromTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TemplatesSignRequestsResponse
}
catch (ApiException<CreateSignRequestFromTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateSignRequestFromTemplateRequest](src/JuriSign/Requests/Templates/CreateSignRequestFromTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TemplatesSignRequestsResponse](src/JuriSign/Models/TemplatesSignRequestsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateSignRequestFromTemplateError](src/JuriSign/Errors/CreateSignRequestFromTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteTemplate(DeleteTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a template and its own copy of the PDF, if any.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.DeleteTemplate(new DeleteTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteTemplateRequest](src/JuriSign/Requests/Templates/DeleteTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeleteTemplateError](src/JuriSign/Errors/DeleteTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TemplatesResponse1&gt; GetTemplate(GetTemplateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve full details of a template, including signers and signature zones.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.GetTemplate(new GetTemplateRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type TemplatesResponse1
}
catch (ApiException<GetTemplateError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTemplateRequest](src/JuriSign/Requests/Templates/GetTemplateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TemplatesResponse1](src/JuriSign/Models/TemplatesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetTemplateError](src/JuriSign/Errors/GetTemplateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TemplatesResponse&gt; ListTemplates(ListTemplatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve reusable sign request templates for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Templates.ListTemplates(new ListTemplatesRequest());
    // TODO: Handle 'response' of type TemplatesResponse
}
catch (ApiException<ListTemplatesError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListTemplatesRequest](src/JuriSign/Requests/Templates/ListTemplatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TemplatesResponse](src/JuriSign/Models/TemplatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListTemplatesError](src/JuriSign/Errors/ListTemplatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/JuriSign/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;WebhooksResponse1&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a new webhook endpoint. The response includes the signing secret which is only shown once.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.CreateWebhook(new CreateWebhookRequest
    {
        Body = new WebhooksRequest { Url = "https://example.com", Events = [Event.SignRequestSent] },
    });
    // TODO: Handle 'response' of type WebhooksResponse1
}
catch (ApiException<CreateWebhookError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWebhookRequest](src/JuriSign/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse1](src/JuriSign/Models/WebhooksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/JuriSign/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MessageResponse&gt; DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a webhook endpoint and all its delivery logs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest { Id = 1 });
    // TODO: Handle 'response' of type MessageResponse
}
catch (ApiException<DeleteWebhookError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWebhookRequest](src/JuriSign/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](src/JuriSign/Models/MessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/JuriSign/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksLogsResponse&gt; GetWebhookLogs(GetWebhookLogsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

View delivery logs for a specific webhook endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhookLogs(new GetWebhookLogsRequest { Id = 1 });
    // TODO: Handle 'response' of type WebhooksLogsResponse
}
catch (ApiException<GetWebhookLogsError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWebhookLogsRequest](src/JuriSign/Requests/WebhooksApi/GetWebhookLogsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksLogsResponse](src/JuriSign/Models/WebhooksLogsResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[GetWebhookLogsError](src/JuriSign/Errors/GetWebhookLogsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse&gt; ListWebhooks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all webhook endpoints for your organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.ListWebhooks();
    // TODO: Handle 'response' of type WebhooksResponse
}
catch (ApiException<ListWebhooksError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse](src/JuriSign/Models/WebhooksResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[ListWebhooksError](src/JuriSign/Errors/ListWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksRegenerateSecretResponse&gt; RegenerateWebhookSecret(RegenerateWebhookSecretRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.RegenerateWebhookSecret(new RegenerateWebhookSecretRequest { Id = 1 });
    // TODO: Handle 'response' of type WebhooksRegenerateSecretResponse
}
catch (ApiException<RegenerateWebhookSecretError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RegenerateWebhookSecretRequest](src/JuriSign/Requests/WebhooksApi/RegenerateWebhookSecretRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksRegenerateSecretResponse](src/JuriSign/Models/WebhooksRegenerateSecretResponse.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[RegenerateWebhookSecretError](src/JuriSign/Errors/RegenerateWebhookSecretError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksResponse2&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook endpoint's URL, events, or active status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest { Id = 1 });
    // TODO: Handle 'response' of type WebhooksResponse2
}
catch (ApiException<UpdateWebhookError> ex)
{
    if (ex.Error.TryGetMessageResponse(out var error))
    {
        // TODO: Handle 'error' of type MessageResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWebhookRequest](src/JuriSign/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksResponse2](src/JuriSign/Models/WebhooksResponse2.cs)</code>

**OnError**: <code>[ApiException](src/JuriSign/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/JuriSign/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

