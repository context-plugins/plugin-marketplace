# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AudioscrapeClient](src/Audioscrape/AudioscrapeClient.cs)

## ApiKeys

> Source: [ApiKeys](src/Audioscrape/Api/ApiKeys.cs)

<details>
<summary><code>Task&lt;ApiKeyUsage&gt; ApiKeyUsage(ApiKeyUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns how many requests authenticated with this key over the trailing 30 days. Pair with `last_used` / `last_used_ip` from the list endpoint to audit a credential before revoking or rotating it.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.ApiKeyUsage(new ApiKeyUsageRequest { Id = 1L });
    // TODO: Handle 'response' of type ApiKeyUsage
}
catch (ApiException<ApiKeyUsageError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApiKeyUsageRequest](src/Audioscrape/Requests/ApiKeys/ApiKeyUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyUsage](src/Audioscrape/Models/ApiKeyUsage.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ApiKeyUsageError](src/Audioscrape/Errors/ApiKeyUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiKeyModel&gt; CreateApiKey(CreateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generates a new workspace-scoped API key. The full `key_value` is returned **only** in this response — Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If you lose it, rotate the key.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.CreateApiKey(new CreateApiKeyRequest
    {
        Body = new CreateApiKey { KeyName = "some example string" },
    });
    // TODO: Handle 'response' of type ApiKeyModel
}
catch (ApiException<CreateApiKeyError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateApiKeyRequest](src/Audioscrape/Requests/ApiKeys/CreateApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyModel](src/Audioscrape/Models/ApiKeyModel.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[CreateApiKeyError](src/Audioscrape/Errors/CreateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteApiKey(DeleteApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next call.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.ApiKeys.DeleteApiKey(new DeleteApiKeyRequest { Id = 1L });
}
catch (ApiException<DeleteApiKeyError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteApiKeyRequest](src/Audioscrape/Requests/ApiKeys/DeleteApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[DeleteApiKeyError](src/Audioscrape/Errors/DeleteApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiKeyModel&gt;&gt; ListApiKeys(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all API keys belonging to the calling user. `key_value` is `null` on every entry — only the display `key_prefix` is recoverable after creation. To get a fresh raw value for a key, rotate it: `POST /api/keys/{id}/rotate`.

Accepts either a session cookie or an existing API key as auth.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.ListApiKeys();
    // TODO: Handle 'response' of type IReadOnlyList<ApiKeyModel>
}
catch (ApiException<ListApiKeysError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiKeyModel](src/Audioscrape/Models/ApiKeyModel.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListApiKeysError](src/Audioscrape/Errors/ListApiKeysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiKeyModel&gt; RotateApiKey(RotateApiKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old secret stops authenticating the moment this call returns; the new secret is in `key_value` — shown only in this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with zero valid credentials. `last_used` resets to `null` because the new secret has never been used.

Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ApiKeys.RotateApiKey(new RotateApiKeyRequest { Id = 1L });
    // TODO: Handle 'response' of type ApiKeyModel
}
catch (ApiException<RotateApiKeyError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RotateApiKeyRequest](src/Audioscrape/Requests/ApiKeys/RotateApiKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiKeyModel](src/Audioscrape/Models/ApiKeyModel.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[RotateApiKeyError](src/Audioscrape/Errors/RotateApiKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Account

> Source: [Account](src/Audioscrape/Api/Account.cs)

<details>
<summary><code>Task&lt;MeResponse&gt; GetMe(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the request (if any), and the effective dated API version. Use this as the first call in any integration to verify credentials and discover capabilities.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetMe();
    // TODO: Handle 'response' of type MeResponse
}
catch (ApiException<GetMeError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MeResponse](src/Audioscrape/Models/MeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetMeError](src/Audioscrape/Errors/GetMeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UsageResponse&gt; GetMeUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts) alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy burst and back off if you're close to a cap.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Account.GetMeUsage();
    // TODO: Handle 'response' of type UsageResponse
}
catch (ApiException<GetMeUsageError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](src/Audioscrape/Models/UsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetMeUsageError](src/Audioscrape/Errors/GetMeUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## AgentRail

> Source: [AgentRail](src/Audioscrape/Api/AgentRail.cs)

<details>
<summary><code>Task BuyCredit(BuyCreditOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.BuyCredit(new BuyCreditOperationRequest { Body = new BuyCreditRequest() });
}
catch (ApiException<BuyCreditError> ex)
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

<code>[BuyCreditOperationRequest](src/Audioscrape/Requests/AgentRail/BuyCreditOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[BuyCreditError](src/Audioscrape/Errors/BuyCreditError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task CreditBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.CreditBalance();
}
catch (ApiException<CreditBalanceError> ex)
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[CreditBalanceError](src/Audioscrape/Errors/CreditBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Excerpt(ExcerptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.Excerpt(new ExcerptRequest { EpisodeId = 1L, T = 1.5d });
}
catch (ApiException<ExcerptError> ex)
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

<code>[ExcerptRequest](src/Audioscrape/Requests/AgentRail/ExcerptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ExcerptError](src/Audioscrape/Errors/ExcerptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Manifest(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.Manifest();
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

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Audioscrape/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Overview(OverviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.Overview(new OverviewRequest { EpisodeId = 1L });
}
catch (ApiException<OverviewError> ex)
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

<code>[OverviewRequest](src/Audioscrape/Requests/AgentRail/OverviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[OverviewError](src/Audioscrape/Errors/OverviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Search(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.Search(new SearchOperationRequest
    {
        Body = new AgentSearchRequest { Query = "some example string" },
    });
}
catch (ApiException<SearchError> ex)
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

<code>[SearchOperationRequest](src/Audioscrape/Requests/AgentRail/SearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/Audioscrape/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task Transcribe(TranscribeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.Transcribe(new TranscribeRequest
    {
        Body = new AgentTranscribeRequest { Url = "some example string" },
    });
}
catch (ApiException<TranscribeError> ex)
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

<code>[TranscribeRequest](src/Audioscrape/Requests/AgentRail/TranscribeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[TranscribeError](src/Audioscrape/Errors/TranscribeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task TranscriptionStatus(TranscriptionStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.AgentRail.TranscriptionStatus(new TranscriptionStatusRequest { JobId = 1L });
}
catch (ApiException<TranscriptionStatusError> ex)
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

<code>[TranscriptionStatusRequest](src/Audioscrape/Requests/AgentRail/TranscriptionStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[TranscriptionStatusError](src/Audioscrape/Errors/TranscriptionStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Charts

> Source: [Charts](src/Audioscrape/Api/Charts.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ChartPodcastEntry&gt;&gt; GetChartPodcasts(GetChartPodcastsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest Apple Podcasts / Spotify podcast chart for the given country. If `platform` is omitted, results from both platforms are interleaved. Audioscrape ingests new chart snapshots daily.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Charts.GetChartPodcasts(new GetChartPodcastsRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ChartPodcastEntry>
}
catch (ApiException<GetChartPodcastsError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetChartPodcastsRequest](src/Audioscrape/Requests/Charts/GetChartPodcastsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ChartPodcastEntry](src/Audioscrape/Models/ChartPodcastEntry.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetChartPodcastsError](src/Audioscrape/Errors/GetChartPodcastsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DataExport

> Source: [DataExport](src/Audioscrape/Api/DataExport.cs)

<details>
<summary><code>Task&lt;CreateExportJobResponse&gt; CreateWorkspaceExport(CreateWorkspaceExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an asynchronous job to package the workspace's audio files,
transcripts, items, and metadata into a single downloadable archive.
Only workspace `owner` or `admin` members may call this endpoint.

At most one job per workspace can be in `queued` or `running` status at
any time; further requests return `429` until the active job finishes.
Poll `GET /api/workspaces/{workspace}/export/{job_id}` for status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataExport.CreateWorkspaceExport(new CreateWorkspaceExportRequest { Workspace = 1L });
    // TODO: Handle 'response' of type CreateExportJobResponse
}
catch (ApiException<CreateWorkspaceExportError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWorkspaceExportRequest](src/Audioscrape/Requests/DataExport/CreateWorkspaceExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CreateExportJobResponse](src/Audioscrape/Models/CreateExportJobResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[CreateWorkspaceExportError](src/Audioscrape/Errors/CreateWorkspaceExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExportJobStatus&gt; GetWorkspaceExport(GetWorkspaceExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current lifecycle state of an export job. When `status` is
`completed`, `download_url` is a signed URL valid for 15 minutes (until
`download_expires_at`); each call signs a fresh one. A finished export
stays downloadable for 7 days, after which `status` reads `expired`.

Caller must be a member of the workspace (any role).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.DataExport.GetWorkspaceExport(new GetWorkspaceExportRequest
    {
        Workspace = 1L,
        JobId = 1L,
    });
    // TODO: Handle 'response' of type ExportJobStatus
}
catch (ApiException<GetWorkspaceExportError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWorkspaceExportRequest](src/Audioscrape/Requests/DataExport/GetWorkspaceExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExportJobStatus](src/Audioscrape/Models/ExportJobStatus.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceExportError](src/Audioscrape/Errors/GetWorkspaceExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Episodes

> Source: [Episodes](src/Audioscrape/Api/Episodes.cs)

<details>
<summary><code>Task&lt;Transcript&gt; GetEpisodeTranscript(GetEpisodeTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own (segments + speaker list). Equivalent to the `transcript` field on `GET /api/episodes/{id}?include=transcript`. Use this endpoint when you don't need the metadata envelope.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetEpisodeTranscript(new GetEpisodeTranscriptRequest
    {
        EpisodeId = "some example string",
    });
    // TODO: Handle 'response' of type Transcript
}
catch (ApiException<GetEpisodeTranscriptError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEpisodeTranscriptRequest](src/Audioscrape/Requests/Episodes/GetEpisodeTranscriptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transcript](src/Audioscrape/Models/Transcript.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetEpisodeTranscriptError](src/Audioscrape/Errors/GetEpisodeTranscriptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpisodeDetail&gt; GetPublicEpisode(GetPublicEpisodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the episode + its parent podcast. Heavy fields are opt-in via `?include=` — pass `transcript`, `entities`, or both to load them in the same response. Useful when you want details without paying the cost of fetching a 500KB+ transcript by default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.GetPublicEpisode(new GetPublicEpisodeRequest
    {
        EpisodeId = "some example string",
    });
    // TODO: Handle 'response' of type EpisodeDetail
}
catch (ApiException<GetPublicEpisodeError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPublicEpisodeRequest](src/Audioscrape/Requests/Episodes/GetPublicEpisodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeDetail](src/Audioscrape/Models/EpisodeDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetPublicEpisodeError](src/Audioscrape/Errors/GetPublicEpisodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpisodeList&gt; ListRecentEpisodesV1(ListRecentEpisodesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the most recently published episodes across all podcasts. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Episodes.ListRecentEpisodesV1(new ListRecentEpisodesV1Request());
    // TODO: Handle 'response' of type EpisodeList
}
catch (ApiException<ListRecentEpisodesV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListRecentEpisodesV1Request](src/Audioscrape/Requests/Episodes/ListRecentEpisodesV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeList](src/Audioscrape/Models/EpisodeList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListRecentEpisodesV1Error](src/Audioscrape/Errors/ListRecentEpisodesV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Items

> Source: [Items](src/Audioscrape/Api/Items.cs)

<details>
<summary><code>Task&lt;EpisodeDetail&gt; GetItem(GetItemRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are opt-in via `?include=`. Equivalent to `GET /api/episodes/{id}` for podcast episodes, but works uniformly across all content types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.GetItem(new GetItemRequest { ItemId = "some example string" });
    // TODO: Handle 'response' of type EpisodeDetail
}
catch (ApiException<GetItemError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetItemRequest](src/Audioscrape/Requests/Items/GetItemRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeDetail](src/Audioscrape/Models/EpisodeDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetItemError](src/Audioscrape/Errors/GetItemError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Transcript&gt; GetItemTranscript(GetItemTranscriptRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.GetItemTranscript(new GetItemTranscriptRequest
    {
        ItemId = "some example string",
    });
    // TODO: Handle 'response' of type Transcript
}
catch (ApiException<GetItemTranscriptError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetItemTranscriptRequest](src/Audioscrape/Requests/Items/GetItemTranscriptRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Transcript](src/Audioscrape/Models/Transcript.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetItemTranscriptError](src/Audioscrape/Errors/GetItemTranscriptError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ItemList&gt; ListItems(ListItemsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Universal listing across content types — podcast episodes, uploads, and future formats. Filter by `source_type`, `dataset_id`, or `library` (slug). Results are newest-first. Use this in place of `/api/episodes` when your integration needs to work with multiple content types.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.ListItems(new ListItemsRequest());
    // TODO: Handle 'response' of type ItemList
}
catch (ApiException<ListItemsError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListItemsRequest](src/Audioscrape/Requests/Items/ListItemsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ItemList](src/Audioscrape/Models/ItemList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListItemsError](src/Audioscrape/Errors/ListItemsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UploadResponse&gt; UploadItemExternal(UploadItemExternalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Two intake modes:
• `Content-Type: multipart/form-data` — form fields `audio` (file), optional `title`, `description`
• `Content-Type: application/json` — `{ "audio_url": "https://...", "title": "...", "description": "..." }`

JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files).
Both modes converge on the same storage + transcription pipeline; the resulting item is identical.
Transcription minutes consumed count against your plan's monthly quota (see `/api/me/usage`).
After upload, fetch full metadata at `GET /api/items/{item_id}` once transcription completes.

## Constraints

• **File size:** Free tier is hard-capped at **400 MB** per audio upload regardless of dataset config (**1 GB** for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio is kept). Paid plans honour the dataset's `max_file_size_mb` (default 500 MB). Exceeding the cap returns `413 Payload Too Large`; JSON-mode `audio_url` is fetched under the same cap. (The MCP connector's `transcribe_audio` link path and the web paste-a-link import fetch in the pipeline without a byte cap.)
• **URL-fetch safety (JSON mode):** `audio_url` must use `https://`. URLs that resolve to private, link-local, loopback, or otherwise internal IP ranges are rejected (SSRF guard) with `422 Unprocessable Entity`.
• **Dataset configuration:** The target dataset must have `content_type = 'uploads'`. Datasets backed by RSS feeds or other source types return `409 Conflict`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Items.UploadItemExternal(new UploadItemExternalRequest
    {
        Id = 1L,
        Body = new UploadFromUrl { AudioUrl = "some example string" },
    });
    // TODO: Handle 'response' of type UploadResponse
}
catch (ApiException<UploadItemExternalError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadItemExternalRequest](src/Audioscrape/Requests/Items/UploadItemExternalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UploadResponse](src/Audioscrape/Models/UploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[UploadItemExternalError](src/Audioscrape/Errors/UploadItemExternalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## KnowledgeGraph

> Source: [KnowledgeGraph](src/Audioscrape/Api/KnowledgeGraph.cs)

<details>
<summary><code>Task&lt;EntityDetail&gt; GetEntity(GetEntityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an entity (person, organisation, place, etc.) plus the episodes where it's most mentioned. Useful for building topic-specific feeds: pin to an entity, watch which episodes mention it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.KnowledgeGraph.GetEntity(new GetEntityRequest { EntitySlug = "some example string" });
    // TODO: Handle 'response' of type EntityDetail
}
catch (ApiException<GetEntityError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetEntityRequest](src/Audioscrape/Requests/KnowledgeGraph/GetEntityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntityDetail](src/Audioscrape/Models/EntityDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetEntityError](src/Audioscrape/Errors/GetEntityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrendingResponse&gt; GetRealTrending(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns what's trending across Audioscrape in the last 7 days — most-searched queries and most-mentioned entities. Computed from anonymised search logs and live entity-mention counts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.KnowledgeGraph.GetRealTrending();
    // TODO: Handle 'response' of type TrendingResponse
}
catch (ApiException<GetRealTrendingError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrendingResponse](src/Audioscrape/Models/TrendingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetRealTrendingError](src/Audioscrape/Errors/GetRealTrendingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EntitySearchResponse&gt; SearchEntities(SearchEntitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the knowledge-graph index for entities (people, organisations, places, topics, products) extracted from podcast content. Results are sorted by total mention count across the corpus.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.KnowledgeGraph.SearchEntities(new SearchEntitiesRequest());
    // TODO: Handle 'response' of type EntitySearchResponse
}
catch (ApiException<SearchEntitiesError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchEntitiesRequest](src/Audioscrape/Requests/KnowledgeGraph/SearchEntitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EntitySearchResponse](src/Audioscrape/Models/EntitySearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[SearchEntitiesError](src/Audioscrape/Errors/SearchEntitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Libraries

> Source: [Libraries](src/Audioscrape/Api/Libraries.cs)

<details>
<summary><code>Task&lt;DatasetDetail&gt; GetDataset(GetDatasetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip when you have a dataset ID from a search result and need its context.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Libraries.GetDataset(new GetDatasetRequest { Id = 1L });
    // TODO: Handle 'response' of type DatasetDetail
}
catch (ApiException<GetDatasetError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDatasetRequest](src/Audioscrape/Requests/Libraries/GetDatasetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetDetail](src/Audioscrape/Models/DatasetDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetDatasetError](src/Audioscrape/Errors/GetDatasetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LibraryDetail&gt; GetLibrary(GetLibraryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one library + the datasets the calling user can see. Public datasets are always returned; workspace-scoped datasets are returned only to members.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Libraries.GetLibrary(new GetLibraryRequest { Slug = "some example string" });
    // TODO: Handle 'response' of type LibraryDetail
}
catch (ApiException<GetLibraryError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLibraryRequest](src/Audioscrape/Requests/Libraries/GetLibraryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LibraryDetail](src/Audioscrape/Models/LibraryDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetLibraryError](src/Audioscrape/Errors/GetLibraryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LibraryList&gt; ListLibraries(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every public library on Audioscrape, ordered by subscriber count. The `is_subscribed` field on each entry tells you whether the calling user is already a member.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Libraries.ListLibraries();
    // TODO: Handle 'response' of type LibraryList
}
catch (ApiException<ListLibrariesError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LibraryList](src/Audioscrape/Models/LibraryList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListLibrariesError](src/Audioscrape/Errors/ListLibrariesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Persons

> Source: [Persons](src/Audioscrape/Api/Persons.cs)

<details>
<summary><code>Task&lt;PersonDetail&gt; GetPersonV1(GetPersonV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Persons.GetPersonV1(new GetPersonV1Request { PersonSlug = "some example string" });
    // TODO: Handle 'response' of type PersonDetail
}
catch (ApiException<GetPersonV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPersonV1Request](src/Audioscrape/Requests/Persons/GetPersonV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonDetail](src/Audioscrape/Models/PersonDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetPersonV1Error](src/Audioscrape/Errors/GetPersonV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PersonList&gt; SearchPersonsV1(SearchPersonsV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the persons index by name. Persons are speakers identified across podcast transcripts — every speaker who's been attributed to at least one segment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Persons.SearchPersonsV1(new SearchPersonsV1Request());
    // TODO: Handle 'response' of type PersonList
}
catch (ApiException<SearchPersonsV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPersonsV1Request](src/Audioscrape/Requests/Persons/SearchPersonsV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PersonList](src/Audioscrape/Models/PersonList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[SearchPersonsV1Error](src/Audioscrape/Errors/SearchPersonsV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Podcasts

> Source: [Podcasts](src/Audioscrape/Api/Podcasts.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;PodcastRankingHistoryEntry&gt;&gt; GetPodcastRankingHistory(GetPodcastRankingHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the historical chart positions for a single podcast across countries and platforms, most recent first. Useful for tracking a show's performance trajectory over time.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.GetPodcastRankingHistory(new GetPodcastRankingHistoryRequest
    {
        PodcastId = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<PodcastRankingHistoryEntry>
}
catch (ApiException<GetPodcastRankingHistoryError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPodcastRankingHistoryRequest](src/Audioscrape/Requests/Podcasts/GetPodcastRankingHistoryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[PodcastRankingHistoryEntry](src/Audioscrape/Models/PodcastRankingHistoryEntry.cs)&gt;</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetPodcastRankingHistoryError](src/Audioscrape/Errors/GetPodcastRankingHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PodcastDetail&gt; GetPublicPodcast(GetPublicPodcastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a URL slug, so links you share by slug also work for API calls.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.GetPublicPodcast(new GetPublicPodcastRequest
    {
        PodcastId = "some example string",
    });
    // TODO: Handle 'response' of type PodcastDetail
}
catch (ApiException<GetPublicPodcastError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPublicPodcastRequest](src/Audioscrape/Requests/Podcasts/GetPublicPodcastRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastDetail](src/Audioscrape/Models/PodcastDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetPublicPodcastError](src/Audioscrape/Errors/GetPublicPodcastError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;EpisodeList&gt; ListPodcastEpisodesV1(ListPodcastEpisodesV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a URL slug.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.ListPodcastEpisodesV1(new ListPodcastEpisodesV1Request
    {
        PodcastId = "some example string",
    });
    // TODO: Handle 'response' of type EpisodeList
}
catch (ApiException<ListPodcastEpisodesV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListPodcastEpisodesV1Request](src/Audioscrape/Requests/Podcasts/ListPodcastEpisodesV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EpisodeList](src/Audioscrape/Models/EpisodeList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListPodcastEpisodesV1Error](src/Audioscrape/Errors/ListPodcastEpisodesV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PodcastList&gt; SearchPodcastsV1(SearchPodcastsV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count (most prolific first), then alphabetically. Convenience alias for items where `source_type = 'podcast_episode'` — for multi-format integrations, prefer `/api/items`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Podcasts.SearchPodcastsV1(new SearchPodcastsV1Request());
    // TODO: Handle 'response' of type PodcastList
}
catch (ApiException<SearchPodcastsV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchPodcastsV1Request](src/Audioscrape/Requests/Podcasts/SearchPodcastsV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PodcastList](src/Audioscrape/Models/PodcastList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[SearchPodcastsV1Error](src/Audioscrape/Errors/SearchPodcastsV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Audioscrape/Api/Search.cs)

<details>
<summary><code>Task&lt;SearchResponse&gt; SearchApiV1(SearchApiV1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the audio corpus and returns segment-level results with timestamps, highlights, and the parent episode + podcast.
The default `search_type` of `hybrid` combines keyword scoring with semantic vector matching; use `text` for boolean queries
and quoted phrases, `semantic` for natural-language questions. Filter by podcast, speaker, or publish-date range via the
`filters` object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchApiV1(new SearchApiV1Request
    {
        Body = new SearchRequest { Query = "some example string" },
    });
    // TODO: Handle 'response' of type SearchResponse
}
catch (ApiException<SearchApiV1Error> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchApiV1Request](src/Audioscrape/Requests/Search/SearchApiV1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse](src/Audioscrape/Models/SearchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[SearchApiV1Error](src/Audioscrape/Errors/SearchApiV1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SystemApi

> Source: [SystemApi](src/Audioscrape/Api/SystemApi.cs)

<details>
<summary><code>Task&lt;HealthResponse&gt; GetHealthOpenapi(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns `200 OK` with a small JSON payload as long as the API is responding. Useful as a liveness probe; does not check downstream dependencies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SystemApi.GetHealthOpenapi();
    // TODO: Handle 'response' of type HealthResponse
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

**OnSuccess**: <code>[HealthResponse](src/Audioscrape/Models/HealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Audioscrape/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](src/Audioscrape/Api/Workspaces.cs)

<details>
<summary><code>Task&lt;WorkspaceDetail&gt; GetWorkspace(GetWorkspaceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns one of your workspaces + ALL of its datasets regardless of visibility — including private datasets that never appear under `/api/libraries`. `{workspace}` accepts a slug or a numeric ID. Members only: a workspace you don't belong to returns 404.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.GetWorkspace(new GetWorkspaceRequest { Workspace = "some example string" });
    // TODO: Handle 'response' of type WorkspaceDetail
}
catch (ApiException<GetWorkspaceError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWorkspaceRequest](src/Audioscrape/Requests/Workspaces/GetWorkspaceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceDetail](src/Audioscrape/Models/WorkspaceDetail.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[GetWorkspaceError](src/Audioscrape/Errors/GetWorkspaceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DatasetList&gt; ListWorkspaceDatasets(ListWorkspaceDatasetsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every dataset in one of your workspaces — `public`, `workspace`, and `private` alike. Same `{workspace}` resolution (slug or numeric ID) and members-only access rules as `GET /api/workspaces/{workspace}`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.ListWorkspaceDatasets(new ListWorkspaceDatasetsRequest
    {
        Workspace = "some example string",
    });
    // TODO: Handle 'response' of type DatasetList
}
catch (ApiException<ListWorkspaceDatasetsError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWorkspaceDatasetsRequest](src/Audioscrape/Requests/Workspaces/ListWorkspaceDatasetsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatasetList](src/Audioscrape/Models/DatasetList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListWorkspaceDatasetsError](src/Audioscrape/Errors/ListWorkspaceDatasetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WorkspaceList&gt; ListWorkspaces(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns every workspace the calling user is a member of, with the caller's role in each. `is_current` marks the workspace the authenticating API key (or session) is scoped to. Ordered current-first, then by name.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Workspaces.ListWorkspaces();
    // TODO: Handle 'response' of type WorkspaceList
}
catch (ApiException<ListWorkspacesError> ex)
{
    if (ex.Error.TryGetApiErrorBody(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorBody
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceList](src/Audioscrape/Models/WorkspaceList.cs)</code>

**OnError**: <code>[ApiException](src/Audioscrape/Core/Exceptions/ApiException.cs)&lt;[ListWorkspacesError](src/Audioscrape/Errors/ListWorkspacesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

