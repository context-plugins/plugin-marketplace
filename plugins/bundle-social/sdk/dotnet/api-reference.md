# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BundleSocialClient](src/BundleSocial/BundleSocialClient.cs)

## Analytics

> Source: [Analytics](src/BundleSocial/Api/Analytics.cs)

<details>
<summary><code>Task&lt;ApiV1AnalyticsPostForceResponse&gt; AnalyticsForcePostAnalytics(AnalyticsForcePostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsForcePostAnalytics(new AnalyticsForcePostAnalyticsRequest());
    // TODO: Handle 'response' of type ApiV1AnalyticsPostForceResponse
}
catch (ApiException<AnalyticsForcePostAnalyticsError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsPostForce400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsPostForce400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsForcePostAnalyticsRequest](src/BundleSocial/Requests/Analytics/AnalyticsForcePostAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostForceResponse](src/BundleSocial/Models/ApiV1AnalyticsPostForceResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsForcePostAnalyticsError](src/BundleSocial/Errors/AnalyticsForcePostAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsSocialAccountForceResponse&gt; AnalyticsForceSocialAccountAnalytics(AnalyticsForceSocialAccountAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsForceSocialAccountAnalytics(
        new AnalyticsForceSocialAccountAnalyticsRequest());
    // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountForceResponse
}
catch (ApiException<AnalyticsForceSocialAccountAnalyticsError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsSocialAccountForce400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsSocialAccountForce400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsForceSocialAccountAnalyticsRequest](src/BundleSocial/Requests/Analytics/AnalyticsForceSocialAccountAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountForceResponse](src/BundleSocial/Models/ApiV1AnalyticsSocialAccountForceResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsForceSocialAccountAnalyticsError](src/BundleSocial/Errors/AnalyticsForceSocialAccountAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsPostBulkResponse&gt; AnalyticsGetBulkPostAnalytics(AnalyticsGetBulkPostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20 per page.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsGetBulkPostAnalytics(new AnalyticsGetBulkPostAnalyticsRequest
    {
        PostIds = ["some example string"],
        PlatformType = PlatformType.Tiktok,
    });
    // TODO: Handle 'response' of type ApiV1AnalyticsPostBulkResponse
}
catch (ApiException<AnalyticsGetBulkPostAnalyticsError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsPostBulk400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsPostBulk400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsGetBulkPostAnalyticsRequest](src/BundleSocial/Requests/Analytics/AnalyticsGetBulkPostAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostBulkResponse](src/BundleSocial/Models/ApiV1AnalyticsPostBulkResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsGetBulkPostAnalyticsError](src/BundleSocial/Errors/AnalyticsGetBulkPostAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsPostResponse&gt; AnalyticsGetPostAnalytics(AnalyticsGetPostAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published post. Metric names are unified across platforms for easier reporting.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsGetPostAnalytics(new AnalyticsGetPostAnalyticsRequest());
    // TODO: Handle 'response' of type ApiV1AnalyticsPostResponse
}
catch (ApiException<AnalyticsGetPostAnalyticsError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsGetPostAnalyticsRequest](src/BundleSocial/Requests/Analytics/AnalyticsGetPostAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostResponse](src/BundleSocial/Models/ApiV1AnalyticsPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsGetPostAnalyticsError](src/BundleSocial/Errors/AnalyticsGetPostAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsPostRawResponse&gt; AnalyticsGetPostAnalyticsRaw(AnalyticsGetPostAnalyticsRawRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsGetPostAnalyticsRaw(new AnalyticsGetPostAnalyticsRawRequest());
    // TODO: Handle 'response' of type ApiV1AnalyticsPostRawResponse
}
catch (ApiException<AnalyticsGetPostAnalyticsRawError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsPostRaw400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsPostRaw400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsGetPostAnalyticsRawRequest](src/BundleSocial/Requests/Analytics/AnalyticsGetPostAnalyticsRawRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsPostRawResponse](src/BundleSocial/Models/ApiV1AnalyticsPostRawResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsGetPostAnalyticsRawError](src/BundleSocial/Errors/AnalyticsGetPostAnalyticsRawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsSocialAccountResponse&gt; AnalyticsGetSocialAccountAnalytics(AnalyticsGetSocialAccountAnalyticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social account over a date range. Metric names are unified across platforms so you can chart accounts side by side.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsGetSocialAccountAnalytics(
        new AnalyticsGetSocialAccountAnalyticsRequest
        {
            TeamId = "some example string",
            PlatformType = PlatformType.Tiktok,
        });
    // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountResponse
}
catch (ApiException<AnalyticsGetSocialAccountAnalyticsError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsSocialAccount400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsSocialAccount400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsGetSocialAccountAnalyticsRequest](src/BundleSocial/Requests/Analytics/AnalyticsGetSocialAccountAnalyticsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountResponse](src/BundleSocial/Models/ApiV1AnalyticsSocialAccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsGetSocialAccountAnalyticsError](src/BundleSocial/Errors/AnalyticsGetSocialAccountAnalyticsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AnalyticsSocialAccountRawResponse&gt; AnalyticsGetSocialAccountAnalyticsRaw(AnalyticsGetSocialAccountAnalyticsRawRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve social account analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Analytics.AnalyticsGetSocialAccountAnalyticsRaw(
        new AnalyticsGetSocialAccountAnalyticsRawRequest
        {
            TeamId = "some example string",
            PlatformType = PlatformType.Tiktok,
        });
    // TODO: Handle 'response' of type ApiV1AnalyticsSocialAccountRawResponse
}
catch (ApiException<AnalyticsGetSocialAccountAnalyticsRawError> ex)
{
    if (ex.Error.TryGetApiV1AnalyticsSocialAccountRaw400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AnalyticsSocialAccountRaw400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AnalyticsGetSocialAccountAnalyticsRawRequest](src/BundleSocial/Requests/Analytics/AnalyticsGetSocialAccountAnalyticsRawRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AnalyticsSocialAccountRawResponse](src/BundleSocial/Models/ApiV1AnalyticsSocialAccountRawResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AnalyticsGetSocialAccountAnalyticsRawError](src/BundleSocial/Errors/AnalyticsGetSocialAccountAnalyticsRawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## App

> Source: [App](src/BundleSocial/Api/App.cs)

<details>
<summary><code>Task&lt;ApiV1Response&gt; AppGetHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether the bundle.social API is reachable and see the current operational status of every supported social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.App.AppGetHealth();
    // TODO: Handle 'response' of type ApiV1Response
}
catch (ApiException<AppGetHealthError> ex)
{
    if (ex.Error.TryGetApiV1400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1Response](src/BundleSocial/Models/ApiV1Response.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AppGetHealthError](src/BundleSocial/Errors/AppGetHealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Automation

> Source: [Automation](src/BundleSocial/Api/Automation.cs)

<details>
<summary><code>Task&lt;ApiV1AutomationsActivateResponse&gt; AutomationActivateFlow(AutomationActivateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resume a paused flow so that it triggers on new events again.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationActivateFlow(new AutomationActivateFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsActivateResponse
}
catch (ApiException<AutomationActivateFlowError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsActivate400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsActivate400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationActivateFlowRequest](src/BundleSocial/Requests/Automation/AutomationActivateFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsActivateResponse](src/BundleSocial/Models/ApiV1AutomationsActivateResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationActivateFlowError](src/BundleSocial/Errors/AutomationActivateFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsArchiveResponse&gt; AutomationArchiveFlow(AutomationArchiveFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationArchiveFlow(new AutomationArchiveFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsArchiveResponse
}
catch (ApiException<AutomationArchiveFlowError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsArchive400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsArchive400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationArchiveFlowRequest](src/BundleSocial/Requests/Automation/AutomationArchiveFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsArchiveResponse](src/BundleSocial/Models/ApiV1AutomationsArchiveResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationArchiveFlowError](src/BundleSocial/Errors/AutomationArchiveFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsCopyResponse&gt; AutomationCopyFlows(AutomationCopyFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Duplicate one or more automation flows into another team. The copies are created as drafts so they can be re-pointed at that team's social accounts before going live.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationCopyFlows(new AutomationCopyFlowsRequest());
    // TODO: Handle 'response' of type ApiV1AutomationsCopyResponse
}
catch (ApiException<AutomationCopyFlowsError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsCopy400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsCopy400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationCopyFlowsRequest](src/BundleSocial/Requests/Automation/AutomationCopyFlowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsCopyResponse](src/BundleSocial/Models/ApiV1AutomationsCopyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationCopyFlowsError](src/BundleSocial/Errors/AutomationCopyFlowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsResponse1&gt; AutomationCreateFlow(AutomationCreateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once it is published.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationCreateFlow(new AutomationCreateFlowRequest());
    // TODO: Handle 'response' of type ApiV1AutomationsResponse1
}
catch (ApiException<AutomationCreateFlowError> ex)
{
    if (ex.Error.TryGetApiV1Automations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Automations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationCreateFlowRequest](src/BundleSocial/Requests/Automation/AutomationCreateFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](src/BundleSocial/Models/ApiV1AutomationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationCreateFlowError](src/BundleSocial/Errors/AutomationCreateFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsResponse1&gt; AutomationDeleteFlow(AutomationDeleteFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an automation flow. Past executions are kept for auditing and stay readable.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationDeleteFlow(new AutomationDeleteFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsResponse1
}
catch (ApiException<AutomationDeleteFlowError> ex)
{
    if (ex.Error.TryGetApiV1Automations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Automations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationDeleteFlowRequest](src/BundleSocial/Requests/Automation/AutomationDeleteFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](src/BundleSocial/Models/ApiV1AutomationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationDeleteFlowError](src/BundleSocial/Errors/AutomationDeleteFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationExecutionsResponse&gt; AutomationGetExecution(AutomationGetExecutionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation run by id, including its input event, its per-step results and any error that stopped it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationGetExecution(new AutomationGetExecutionRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationExecutionsResponse
}
catch (ApiException<AutomationGetExecutionError> ex)
{
    if (ex.Error.TryGetApiV1AutomationExecutions400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationExecutions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationGetExecutionRequest](src/BundleSocial/Requests/Automation/AutomationGetExecutionRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationExecutionsResponse](src/BundleSocial/Models/ApiV1AutomationExecutionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationGetExecutionError](src/BundleSocial/Errors/AutomationGetExecutionError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsResponse1&gt; AutomationGetFlow(AutomationGetFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single automation flow by id, including its trigger, its steps and its current status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationGetFlow(new AutomationGetFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsResponse1
}
catch (ApiException<AutomationGetFlowError> ex)
{
    if (ex.Error.TryGetApiV1Automations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Automations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationGetFlowRequest](src/BundleSocial/Requests/Automation/AutomationGetFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](src/BundleSocial/Models/ApiV1AutomationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationGetFlowError](src/BundleSocial/Errors/AutomationGetFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsExecutionsResponse&gt; AutomationGetFlowExecutions(AutomationGetFlowExecutionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the runs of a single automation flow, newest first. Use it to see which events matched and how each run ended. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationGetFlowExecutions(new AutomationGetFlowExecutionsRequest
    {
        Id = "some example string",
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsExecutionsResponse
}
catch (ApiException<AutomationGetFlowExecutionsError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsExecutions400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsExecutions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationGetFlowExecutionsRequest](src/BundleSocial/Requests/Automation/AutomationGetFlowExecutionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsExecutionsResponse](src/BundleSocial/Models/ApiV1AutomationsExecutionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationGetFlowExecutionsError](src/BundleSocial/Errors/AutomationGetFlowExecutionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsResponse&gt; AutomationGetFlows(AutomationGetFlowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the automation flows of a team, newest first. Filter by `socialAccountId`, `status` and `platformScope`. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationGetFlows(new AutomationGetFlowsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsResponse
}
catch (ApiException<AutomationGetFlowsError> ex)
{
    if (ex.Error.TryGetApiV1Automations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Automations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationGetFlowsRequest](src/BundleSocial/Requests/Automation/AutomationGetFlowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse](src/BundleSocial/Models/ApiV1AutomationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationGetFlowsError](src/BundleSocial/Errors/AutomationGetFlowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationProviderSettingsResponse&gt; AutomationGetProviderSettings(AutomationGetProviderSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the platform-side automation settings stored per social account, such as the Instagram icebreakers or persistent menu we manage for you. Paginate with `offset` and `limit` (default 10). The response always carries the full `total`.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationGetProviderSettings(new AutomationGetProviderSettingsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse
}
catch (ApiException<AutomationGetProviderSettingsError> ex)
{
    if (ex.Error.TryGetApiV1AutomationProviderSettings400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationProviderSettings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationGetProviderSettingsRequest](src/BundleSocial/Requests/Automation/AutomationGetProviderSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse](src/BundleSocial/Models/ApiV1AutomationProviderSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationGetProviderSettingsError](src/BundleSocial/Errors/AutomationGetProviderSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsPauseResponse&gt; AutomationPauseFlow(AutomationPauseFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a live flow from triggering on new events while keeping its configuration intact.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationPauseFlow(new AutomationPauseFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsPauseResponse
}
catch (ApiException<AutomationPauseFlowError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsPause400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsPause400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationPauseFlowRequest](src/BundleSocial/Requests/Automation/AutomationPauseFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsPauseResponse](src/BundleSocial/Models/ApiV1AutomationsPauseResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationPauseFlowError](src/BundleSocial/Errors/AutomationPauseFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsPublishResponse&gt; AutomationPublishFlow(AutomationPublishFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the flow is not valid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationPublishFlow(new AutomationPublishFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsPublishResponse
}
catch (ApiException<AutomationPublishFlowError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsPublish400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsPublish400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationPublishFlowRequest](src/BundleSocial/Requests/Automation/AutomationPublishFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsPublishResponse](src/BundleSocial/Models/ApiV1AutomationsPublishResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationPublishFlowError](src/BundleSocial/Errors/AutomationPublishFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationRichMessagesConversationsResponse&gt; AutomationSendRichMessage(AutomationSendRichMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a rich message, such as a button or card template, into a conversation using the same renderer the automation steps use. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationSendRichMessage(new AutomationSendRichMessageRequest
    {
        ConversationId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationRichMessagesConversationsResponse
}
catch (ApiException<AutomationSendRichMessageError> ex)
{
    if (ex.Error.TryGetApiV1AutomationRichMessagesConversations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationRichMessagesConversations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationSendRichMessageRequest](src/BundleSocial/Requests/Automation/AutomationSendRichMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationRichMessagesConversationsResponse](src/BundleSocial/Models/ApiV1AutomationRichMessagesConversationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationSendRichMessageError](src/BundleSocial/Errors/AutomationSendRichMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationProviderSettingsSyncResponse&gt; AutomationSyncProviderSetting(AutomationSyncProviderSettingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected account.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationSyncProviderSetting(new AutomationSyncProviderSettingRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsSyncResponse
}
catch (ApiException<AutomationSyncProviderSettingError> ex)
{
    if (ex.Error.TryGetApiV1AutomationProviderSettingsSync400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationProviderSettingsSync400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationSyncProviderSettingRequest](src/BundleSocial/Requests/Automation/AutomationSyncProviderSettingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsSyncResponse](src/BundleSocial/Models/ApiV1AutomationProviderSettingsSyncResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationSyncProviderSettingError](src/BundleSocial/Errors/AutomationSyncProviderSettingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsTestResponse&gt; AutomationTestFlow(AutomationTestFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run a flow once against a sample event and return the resulting execution. Steps that send a message really send it, so a test returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationTestFlow(new AutomationTestFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsTestResponse
}
catch (ApiException<AutomationTestFlowError> ex)
{
    if (ex.Error.TryGetApiV1AutomationsTest400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationsTest400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationTestFlowRequest](src/BundleSocial/Requests/Automation/AutomationTestFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsTestResponse](src/BundleSocial/Models/ApiV1AutomationsTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationTestFlowError](src/BundleSocial/Errors/AutomationTestFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationsResponse1&gt; AutomationUpdateFlow(AutomationUpdateFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next matching event.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationUpdateFlow(new AutomationUpdateFlowRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1AutomationsResponse1
}
catch (ApiException<AutomationUpdateFlowError> ex)
{
    if (ex.Error.TryGetApiV1Automations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Automations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationUpdateFlowRequest](src/BundleSocial/Requests/Automation/AutomationUpdateFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationsResponse1](src/BundleSocial/Models/ApiV1AutomationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationUpdateFlowError](src/BundleSocial/Errors/AutomationUpdateFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1AutomationProviderSettingsResponse1&gt; AutomationUpsertProviderSetting(AutomationUpsertProviderSettingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace the automation setting of a given type for a social account, and push it to the platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Automation.AutomationUpsertProviderSetting(new AutomationUpsertProviderSettingRequest
    {
        SocialAccountId = "some example string",
        Type = Type112.FacebookPersistentMenu,
    });
    // TODO: Handle 'response' of type ApiV1AutomationProviderSettingsResponse1
}
catch (ApiException<AutomationUpsertProviderSettingError> ex)
{
    if (ex.Error.TryGetApiV1AutomationProviderSettings400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1AutomationProviderSettings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AutomationUpsertProviderSettingRequest](src/BundleSocial/Requests/Automation/AutomationUpsertProviderSettingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1AutomationProviderSettingsResponse1](src/BundleSocial/Models/ApiV1AutomationProviderSettingsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[AutomationUpsertProviderSettingError](src/BundleSocial/Errors/AutomationUpsertProviderSettingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CommentApi

> Source: [CommentApi](src/BundleSocial/Api/CommentApi.cs)

<details>
<summary><code>Task&lt;ApiV1CommentResponse&gt; CommentCreate(CommentCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on Instagram or LinkedIn, or to respond to your audience programmatically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentCreate(new CommentCreateRequest());
    // TODO: Handle 'response' of type ApiV1CommentResponse
}
catch (ApiException<CommentCreateError> ex)
{
    if (ex.Error.TryGetApiV1Comment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Comment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentCreateRequest](src/BundleSocial/Requests/CommentApi/CommentCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](src/BundleSocial/Models/ApiV1CommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentCreateError](src/BundleSocial/Errors/CommentCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentResponse&gt; CommentDelete(CommentDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentDelete(new CommentDeleteRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentResponse
}
catch (ApiException<CommentDeleteError> ex)
{
    if (ex.Error.TryGetApiV1Comment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Comment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentDeleteRequest](src/BundleSocial/Requests/CommentApi/CommentDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](src/BundleSocial/Models/ApiV1CommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentDeleteError](src/BundleSocial/Errors/CommentDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentResponse&gt; CommentGet(CommentGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single comment you created through bundle.social, including its publishing status and any error details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentGet(new CommentGetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentResponse
}
catch (ApiException<CommentGetError> ex)
{
    if (ex.Error.TryGetApiV1Comment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Comment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentGetRequest](src/BundleSocial/Requests/CommentApi/CommentGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](src/BundleSocial/Models/ApiV1CommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentGetError](src/BundleSocial/Errors/CommentGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentResponse3&gt; CommentGetList(CommentGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter the comments your organization has created, with pagination. Use it to track which scheduled comments published successfully.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentGetList(new CommentGetListRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentResponse3
}
catch (ApiException<CommentGetListError> ex)
{
    if (ex.Error.TryGetApiV1Comment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Comment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentGetListRequest](src/BundleSocial/Requests/CommentApi/CommentGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse3](src/BundleSocial/Models/ApiV1CommentResponse3.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentGetListError](src/BundleSocial/Errors/CommentGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentImportCommentsActionResponse&gt; CommentImportActionFetchedComment(CommentImportActionFetchedCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and engage without leaving your own app.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentImportActionFetchedComment(
        new CommentImportActionFetchedCommentRequest { CommentId = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentImportCommentsActionResponse
}
catch (ApiException<CommentImportActionFetchedCommentError> ex)
{
    if (ex.Error.TryGetApiV1CommentImportCommentsAction400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentImportCommentsAction400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentImportActionFetchedCommentRequest](src/BundleSocial/Requests/CommentApi/CommentImportActionFetchedCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportCommentsActionResponse](src/BundleSocial/Models/ApiV1CommentImportCommentsActionResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentImportActionFetchedCommentError](src/BundleSocial/Errors/CommentImportActionFetchedCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentImportResponse&gt; CommentImportCreate(CommentImportCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls existing comments from a published post on the social platform into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentImportCreate(new CommentImportCreateRequest());
    // TODO: Handle 'response' of type ApiV1CommentImportResponse
}
catch (ApiException<CommentImportCreateError> ex)
{
    if (ex.Error.TryGetApiV1CommentImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentImportCreateRequest](src/BundleSocial/Requests/CommentApi/CommentImportCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse](src/BundleSocial/Models/ApiV1CommentImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentImportCreateError](src/BundleSocial/Errors/CommentImportCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentImportResponse&gt; CommentImportGetById(CommentImportGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single comment import job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentImportGetById(new CommentImportGetByIdRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1CommentImportResponse
}
catch (ApiException<CommentImportGetByIdError> ex)
{
    if (ex.Error.TryGetApiV1CommentImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentImportGetByIdRequest](src/BundleSocial/Requests/CommentApi/CommentImportGetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse](src/BundleSocial/Models/ApiV1CommentImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentImportGetByIdError](src/BundleSocial/Errors/CommentImportGetByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentImportCommentsResponse&gt; CommentImportGetFetchedComments(CommentImportGetFetchedCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments pulled in by a comment import, with pagination. Use this to read audience replies and decide which ones need a response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentImportGetFetchedComments(new CommentImportGetFetchedCommentsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1CommentImportCommentsResponse
}
catch (ApiException<CommentImportGetFetchedCommentsError> ex)
{
    if (ex.Error.TryGetApiV1CommentImportComments400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentImportComments400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentImportGetFetchedCommentsRequest](src/BundleSocial/Requests/CommentApi/CommentImportGetFetchedCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportCommentsResponse](src/BundleSocial/Models/ApiV1CommentImportCommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentImportGetFetchedCommentsError](src/BundleSocial/Errors/CommentImportGetFetchedCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentImportResponse1&gt; CommentImportGetList(CommentImportGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comment import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentImportGetList(new CommentImportGetListRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1CommentImportResponse1
}
catch (ApiException<CommentImportGetListError> ex)
{
    if (ex.Error.TryGetApiV1CommentImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentImportGetListRequest](src/BundleSocial/Requests/CommentApi/CommentImportGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentImportResponse1](src/BundleSocial/Models/ApiV1CommentImportResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentImportGetListError](src/BundleSocial/Errors/CommentImportGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentRetryResponse&gt; CommentRetry(CommentRetryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentRetry(new CommentRetryRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentRetryResponse
}
catch (ApiException<CommentRetryError> ex)
{
    if (ex.Error.TryGetApiV1CommentRetry400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1CommentRetry400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentRetryRequest](src/BundleSocial/Requests/CommentApi/CommentRetryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentRetryResponse](src/BundleSocial/Models/ApiV1CommentRetryResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentRetryError](src/BundleSocial/Errors/CommentRetryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1CommentResponse&gt; CommentUpdate(CommentUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content or scheduled time of a comment that has not published yet.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CommentApi.CommentUpdate(new CommentUpdateRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1CommentResponse
}
catch (ApiException<CommentUpdateError> ex)
{
    if (ex.Error.TryGetApiV1Comment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Comment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CommentUpdateRequest](src/BundleSocial/Requests/CommentApi/CommentUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1CommentResponse](src/BundleSocial/Models/ApiV1CommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CommentUpdateError](src/BundleSocial/Errors/CommentUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Credit

> Source: [Credit](src/BundleSocial/Api/Credit.cs)

<details>
<summary><code>Task&lt;ApiV1BillingCreditsBalanceResponse&gt; CreditGetCreditBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's prepaid credit balance: settled funds, in-flight holds, and the available amount metered X actions draw from.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credit.CreditGetCreditBalance();
    // TODO: Handle 'response' of type ApiV1BillingCreditsBalanceResponse
}
catch (ApiException<CreditGetCreditBalanceError> ex)
{
    if (ex.Error.TryGetApiV1BillingCreditsBalance400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1BillingCreditsBalance400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BillingCreditsBalanceResponse](src/BundleSocial/Models/ApiV1BillingCreditsBalanceResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CreditGetCreditBalanceError](src/BundleSocial/Errors/CreditGetCreditBalanceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1BillingBillableUsageQuoteResponse&gt; CreditQuoteBillableUsage(CreditQuoteBillableUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate the credit cost of a metered X action (post publishing, analytics reads, imports) before running it, and see whether your current balance covers it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Credit.CreditQuoteBillableUsage(new CreditQuoteBillableUsageRequest());
    // TODO: Handle 'response' of type ApiV1BillingBillableUsageQuoteResponse
}
catch (ApiException<CreditQuoteBillableUsageError> ex)
{
    if (ex.Error.TryGetApiV1BillingBillableUsageQuote400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1BillingBillableUsageQuote400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreditQuoteBillableUsageRequest](src/BundleSocial/Requests/Credit/CreditQuoteBillableUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1BillingBillableUsageQuoteResponse](src/BundleSocial/Models/ApiV1BillingBillableUsageQuoteResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[CreditQuoteBillableUsageError](src/BundleSocial/Errors/CreditQuoteBillableUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Misc

> Source: [Misc](src/BundleSocial/Api/Misc.cs)

<details>
<summary><code>Task&lt;ApiV1MiscBlueskyCommentResponse&gt; MiscBlueskyDeleteComment(MiscBlueskyDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscBlueskyDeleteComment(new MiscBlueskyDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscBlueskyCommentResponse
}
catch (ApiException<MiscBlueskyDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscBlueskyComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscBlueskyComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscBlueskyDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscBlueskyDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscBlueskyCommentResponse](src/BundleSocial/Models/ApiV1MiscBlueskyCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscBlueskyDeleteCommentError](src/BundleSocial/Errors/MiscBlueskyDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscBlueskyPostResponse&gt; MiscBlueskyDeletePost(MiscBlueskyDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Bluesky post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscBlueskyDeletePost(new MiscBlueskyDeletePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscBlueskyPostResponse
}
catch (ApiException<MiscBlueskyDeletePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscBlueskyPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscBlueskyPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscBlueskyDeletePostRequest](src/BundleSocial/Requests/Misc/MiscBlueskyDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscBlueskyPostResponse](src/BundleSocial/Models/ApiV1MiscBlueskyPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscBlueskyDeletePostError](src/BundleSocial/Errors/MiscBlueskyDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscDiscordMessageResponse&gt; MiscDiscordDeleteMessage(MiscDiscordDeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Discord message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscDiscordDeleteMessage(new MiscDiscordDeleteMessageRequest());
    // TODO: Handle 'response' of type ApiV1MiscDiscordMessageResponse
}
catch (ApiException<MiscDiscordDeleteMessageError> ex)
{
    if (ex.Error.TryGetApiV1MiscDiscordMessage400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscDiscordMessage400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscDiscordDeleteMessageRequest](src/BundleSocial/Requests/Misc/MiscDiscordDeleteMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscDiscordMessageResponse](src/BundleSocial/Models/ApiV1MiscDiscordMessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscDiscordDeleteMessageError](src/BundleSocial/Errors/MiscDiscordDeleteMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookCommentResponse1&gt; MiscFacebookDeleteComment(MiscFacebookDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookDeleteComment(new MiscFacebookDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse1
}
catch (ApiException<MiscFacebookDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscFacebookDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse1](src/BundleSocial/Models/ApiV1MiscFacebookCommentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookDeleteCommentError](src/BundleSocial/Errors/MiscFacebookDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookPostResponse1&gt; MiscFacebookDeletePost(MiscFacebookDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Facebook post or reel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookDeletePost(new MiscFacebookDeletePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse1
}
catch (ApiException<MiscFacebookDeletePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookDeletePostRequest](src/BundleSocial/Requests/Misc/MiscFacebookDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPostResponse1](src/BundleSocial/Models/ApiV1MiscFacebookPostResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookDeletePostError](src/BundleSocial/Errors/MiscFacebookDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookCommentResponse&gt; MiscFacebookEditComment(MiscFacebookEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Facebook comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookEditComment(new MiscFacebookEditCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscFacebookCommentResponse
}
catch (ApiException<MiscFacebookEditCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookEditCommentRequest](src/BundleSocial/Requests/Misc/MiscFacebookEditCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookCommentResponse](src/BundleSocial/Models/ApiV1MiscFacebookCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookEditCommentError](src/BundleSocial/Errors/MiscFacebookEditCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookPostResponse&gt; MiscFacebookEditPost(MiscFacebookEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the message/content of a published Facebook post or reel. Note: Only text content can be edited, media cannot be changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookEditPost(new MiscFacebookEditPostRequest());
    // TODO: Handle 'response' of type ApiV1MiscFacebookPostResponse
}
catch (ApiException<MiscFacebookEditPostError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookEditPostRequest](src/BundleSocial/Requests/Misc/MiscFacebookEditPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPostResponse](src/BundleSocial/Models/ApiV1MiscFacebookPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookEditPostError](src/BundleSocial/Errors/MiscFacebookEditPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsResponse1&gt; MiscFacebookGetRecommendationById(MiscFacebookGetRecommendationByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Facebook recommendation with its rating, text, author, and existing replies.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetRecommendationById(new MiscFacebookGetRecommendationByIdRequest
    {
        RecommendationId = "some example string",
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse1
}
catch (ApiException<MiscFacebookGetRecommendationByIdError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetRecommendationByIdRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse1](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetRecommendationByIdError](src/BundleSocial/Errors/MiscFacebookGetRecommendationByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsCommentsResponse&gt; MiscFacebookGetRecommendationComments(MiscFacebookGetRecommendationCommentsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the comments in a Facebook recommendation thread so you can see the full conversation before replying.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetRecommendationComments(
        new MiscFacebookGetRecommendationCommentsRequest
        {
            RecommendationId = "some example string",
            TeamId = "some example string",
        });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsResponse
}
catch (ApiException<MiscFacebookGetRecommendationCommentsError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsComments400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsComments400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetRecommendationCommentsRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationCommentsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetRecommendationCommentsError](src/BundleSocial/Errors/MiscFacebookGetRecommendationCommentsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsImportResponse&gt; MiscFacebookGetRecommendationImportById(MiscFacebookGetRecommendationImportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Facebook recommendations import job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetRecommendationImportById(
        new MiscFacebookGetRecommendationImportByIdRequest { ImportId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
}
catch (ApiException<MiscFacebookGetRecommendationImportByIdError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetRecommendationImportByIdRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationImportByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetRecommendationImportByIdError](src/BundleSocial/Errors/MiscFacebookGetRecommendationImportByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsImportResponse1&gt; MiscFacebookGetRecommendationImportStatus(MiscFacebookGetRecommendationImportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Facebook recommendation import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetRecommendationImportStatus(
        new MiscFacebookGetRecommendationImportStatusRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse1
}
catch (ApiException<MiscFacebookGetRecommendationImportStatusError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetRecommendationImportStatusRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationImportStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse1](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetRecommendationImportStatusError](src/BundleSocial/Errors/MiscFacebookGetRecommendationImportStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsResponse&gt; MiscFacebookGetRecommendations(MiscFacebookGetRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Facebook Page recommendations pulled in by an import, with paging and your remaining import capacity. Use it to build a reputation-management inbox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetRecommendations(new MiscFacebookGetRecommendationsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsResponse
}
catch (ApiException<MiscFacebookGetRecommendationsError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetRecommendationsRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetRecommendationsError](src/BundleSocial/Errors/MiscFacebookGetRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookTextFormatPresetsResponse&gt; MiscFacebookGetTextFormatPresets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text background presets (colored statuses) that can be passed as data.FACEBOOK.textFormatPresetId, grouped by whether each one renders as a flat color, a gradient, or an illustration. Facebook exposes no endpoint of its own for this, so read the list from here instead of hardcoding IDs. Any other numeric ID is also accepted and passed straight through to Facebook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetTextFormatPresets();
    // TODO: Handle 'response' of type ApiV1MiscFacebookTextFormatPresetsResponse
}
catch (ApiException<MiscFacebookGetTextFormatPresetsError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookTextFormatPresets400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookTextFormatPresets400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookTextFormatPresetsResponse](src/BundleSocial/Models/ApiV1MiscFacebookTextFormatPresetsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetTextFormatPresetsError](src/BundleSocial/Errors/MiscFacebookGetTextFormatPresetsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookTokenDebugResponse&gt; MiscFacebookGetTokenDebug(MiscFacebookGetTokenDebugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Inspect a connected Facebook account's access token, including its scopes and expiry. Use it to diagnose permission errors when publishing fails.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookGetTokenDebug(new MiscFacebookGetTokenDebugRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscFacebookTokenDebugResponse
}
catch (ApiException<MiscFacebookGetTokenDebugError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookTokenDebug400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookTokenDebug400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookGetTokenDebugRequest](src/BundleSocial/Requests/Misc/MiscFacebookGetTokenDebugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookTokenDebugResponse](src/BundleSocial/Models/ApiV1MiscFacebookTokenDebugResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookGetTokenDebugError](src/BundleSocial/Errors/MiscFacebookGetTokenDebugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsImportResponse&gt; MiscFacebookImportRecommendations(MiscFacebookImportRecommendationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls recommendations left on your Facebook Page into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookImportRecommendations(new MiscFacebookImportRecommendationsRequest());
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsImportResponse
}
catch (ApiException<MiscFacebookImportRecommendationsError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookImportRecommendationsRequest](src/BundleSocial/Requests/Misc/MiscFacebookImportRecommendationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsImportResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookImportRecommendationsError](src/BundleSocial/Errors/MiscFacebookImportRecommendationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsReplyResponse&gt; MiscFacebookReplyToRecommendation(MiscFacebookReplyToRecommendationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a Page reply to a Facebook recommendation. Use it to respond to reviews programmatically instead of through Meta Business Suite.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookReplyToRecommendation(new MiscFacebookReplyToRecommendationRequest
    {
        RecommendationId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsReplyResponse
}
catch (ApiException<MiscFacebookReplyToRecommendationError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsReply400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsReply400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookReplyToRecommendationRequest](src/BundleSocial/Requests/Misc/MiscFacebookReplyToRecommendationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsReplyResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsReplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookReplyToRecommendationError](src/BundleSocial/Errors/MiscFacebookReplyToRecommendationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookRecommendationsCommentsReplyResponse&gt; MiscFacebookReplyToRecommendationComment(MiscFacebookReplyToRecommendationCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a reply to a specific comment inside a Facebook recommendation thread.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookReplyToRecommendationComment(
        new MiscFacebookReplyToRecommendationCommentRequest
        {
            RecommendationId = "some example string",
            CommentId = "some example string",
        });
    // TODO: Handle 'response' of type ApiV1MiscFacebookRecommendationsCommentsReplyResponse
}
catch (ApiException<MiscFacebookReplyToRecommendationCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookRecommendationsCommentsReply400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookRecommendationsCommentsReply400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookReplyToRecommendationCommentRequest](src/BundleSocial/Requests/Misc/MiscFacebookReplyToRecommendationCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookRecommendationsCommentsReplyResponse](src/BundleSocial/Models/ApiV1MiscFacebookRecommendationsCommentsReplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookReplyToRecommendationCommentError](src/BundleSocial/Errors/MiscFacebookReplyToRecommendationCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscFacebookPagesResponse&gt; MiscFacebookSearchPages(MiscFacebookSearchPagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches public Facebook Pages and returns IDs that can be inserted into Facebook Page mention tokens.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscFacebookSearchPages(new MiscFacebookSearchPagesRequest
    {
        TeamId = "some example string",
        Q = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscFacebookPagesResponse
}
catch (ApiException<MiscFacebookSearchPagesError> ex)
{
    if (ex.Error.TryGetApiV1MiscFacebookPages400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscFacebookPages400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscFacebookSearchPagesRequest](src/BundleSocial/Requests/Misc/MiscFacebookSearchPagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscFacebookPagesResponse](src/BundleSocial/Models/ApiV1MiscFacebookPagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscFacebookSearchPagesError](src/BundleSocial/Errors/MiscFacebookSearchPagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessMediaResponse&gt; MiscGoogleBusinessAddMedia(MiscGoogleBusinessAddMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a photo or video to your Google Business Profile from a bundle.social upload, tagged with a category such as exterior, interior, or product. Fresh photos are a local ranking and conversion signal.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessAddMedia(new MiscGoogleBusinessAddMediaRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse
}
catch (ApiException<MiscGoogleBusinessAddMediaError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessMedia400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessMedia400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessAddMediaRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessAddMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessAddMediaError](src/BundleSocial/Errors/MiscGoogleBusinessAddMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1&gt; MiscGoogleBusinessCreatePlaceActionLink(MiscGoogleBusinessCreatePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an action link such as Book, Order online, or Reserve to your Google Business Profile so customers can convert straight from the listing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessCreatePlaceActionLink(
        new MiscGoogleBusinessCreatePlaceActionLinkRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
}
catch (ApiException<MiscGoogleBusinessCreatePlaceActionLinkError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessCreatePlaceActionLinkRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessCreatePlaceActionLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessCreatePlaceActionLinkError](src/BundleSocial/Errors/MiscGoogleBusinessCreatePlaceActionLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessMediaResponse2&gt; MiscGoogleBusinessDeleteMedia(MiscGoogleBusinessDeleteMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a photo or video from your Google Business Profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessDeleteMedia(new MiscGoogleBusinessDeleteMediaRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse2
}
catch (ApiException<MiscGoogleBusinessDeleteMediaError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessMedia400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessMedia400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessDeleteMediaRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeleteMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse2](src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse2.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessDeleteMediaError](src/BundleSocial/Errors/MiscGoogleBusinessDeleteMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3&gt; MiscGoogleBusinessDeletePlaceActionLink(MiscGoogleBusinessDeletePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an action link from your Google Business Profile, for example when a booking URL is retired.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessDeletePlaceActionLink(
        new MiscGoogleBusinessDeletePlaceActionLinkRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3
}
catch (ApiException<MiscGoogleBusinessDeletePlaceActionLinkError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessDeletePlaceActionLinkRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeletePlaceActionLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessDeletePlaceActionLinkError](src/BundleSocial/Errors/MiscGoogleBusinessDeletePlaceActionLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessPostResponse&gt; MiscGoogleBusinessDeletePost(MiscGoogleBusinessDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Google Business post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessDeletePost(new MiscGoogleBusinessDeletePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessPostResponse
}
catch (ApiException<MiscGoogleBusinessDeletePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessDeletePostRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessPostResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessDeletePostError](src/BundleSocial/Errors/MiscGoogleBusinessDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse&gt; MiscGoogleBusinessDeleteReviewReply(MiscGoogleBusinessDeleteReviewReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove your owner reply from a Google Review, leaving the customer's review in place.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessDeleteReviewReply(new MiscGoogleBusinessDeleteReviewReplyRequest
    {
        ReviewId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
}
catch (ApiException<MiscGoogleBusinessDeleteReviewReplyError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviewsReply400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviewsReply400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessDeleteReviewReplyRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessDeleteReviewReplyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessDeleteReviewReplyError](src/BundleSocial/Errors/MiscGoogleBusinessDeleteReviewReplyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse&gt; MiscGoogleBusinessGetAttributes(MiscGoogleBusinessGetAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the attributes currently set on your Google Business Profile location, such as accessibility, payment options, or amenities.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetAttributes(new MiscGoogleBusinessGetAttributesRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
}
catch (ApiException<MiscGoogleBusinessGetAttributesError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationAttributes400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetAttributesRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetAttributesError](src/BundleSocial/Errors/MiscGoogleBusinessGetAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse&gt; MiscGoogleBusinessGetFoodMenus(MiscGoogleBusinessGetFoodMenusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,menus`) and repeated params (`fields=name&fields=menus`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetFoodMenus(new MiscGoogleBusinessGetFoodMenusRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
}
catch (ApiException<MiscGoogleBusinessGetFoodMenusError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationFoodMenus400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetFoodMenusRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetFoodMenusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetFoodMenusError](src/BundleSocial/Errors/MiscGoogleBusinessGetFoodMenusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationResponse&gt; MiscGoogleBusinessGetLocation(MiscGoogleBusinessGetLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use typed query param `fields`. Supports both comma-separated values (`fields=name,title`) and repeated params (`fields=name&fields=title`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetLocation(new MiscGoogleBusinessGetLocationRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
}
catch (ApiException<MiscGoogleBusinessGetLocationError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocation400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocation400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetLocationRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetLocationError](src/BundleSocial/Errors/MiscGoogleBusinessGetLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsResponse1&gt; MiscGoogleBusinessGetReviewById(MiscGoogleBusinessGetReviewByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve one imported Google Review with its star rating, text, reviewer, and any existing owner reply.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetReviewById(new MiscGoogleBusinessGetReviewByIdRequest
    {
        ReviewId = "some example string",
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse1
}
catch (ApiException<MiscGoogleBusinessGetReviewByIdError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviews400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviews400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetReviewByIdRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse1](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetReviewByIdError](src/BundleSocial/Errors/MiscGoogleBusinessGetReviewByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsImportResponse&gt; MiscGoogleBusinessGetReviewImportById(MiscGoogleBusinessGetReviewImportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single Google Reviews import job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetReviewImportById(
        new MiscGoogleBusinessGetReviewImportByIdRequest { ImportId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
}
catch (ApiException<MiscGoogleBusinessGetReviewImportByIdError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviewsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviewsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetReviewImportByIdRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewImportByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetReviewImportByIdError](src/BundleSocial/Errors/MiscGoogleBusinessGetReviewImportByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsImportResponse1&gt; MiscGoogleBusinessGetReviewImportStatus(MiscGoogleBusinessGetReviewImportStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List Google Review import jobs for a team so you can monitor which imports are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetReviewImportStatus(
        new MiscGoogleBusinessGetReviewImportStatusRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse1
}
catch (ApiException<MiscGoogleBusinessGetReviewImportStatusError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviewsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviewsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetReviewImportStatusRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewImportStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse1](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetReviewImportStatusError](src/BundleSocial/Errors/MiscGoogleBusinessGetReviewImportStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsResponse&gt; MiscGoogleBusinessGetReviews(MiscGoogleBusinessGetReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the Google Reviews pulled in by an import, with paging and your remaining import capacity. Use it to build a review inbox or monitor rating trends.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetReviews(new MiscGoogleBusinessGetReviewsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsResponse
}
catch (ApiException<MiscGoogleBusinessGetReviewsError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviews400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviews400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetReviewsRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetReviewsError](src/BundleSocial/Errors/MiscGoogleBusinessGetReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse&gt; MiscGoogleBusinessGetServiceList(MiscGoogleBusinessGetServiceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the services listed on your Google Business Profile, including custom services and prices.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessGetServiceList(new MiscGoogleBusinessGetServiceListRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
}
catch (ApiException<MiscGoogleBusinessGetServiceListError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationServiceList400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessGetServiceListRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessGetServiceListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessGetServiceListError](src/BundleSocial/Errors/MiscGoogleBusinessGetServiceListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsImportResponse&gt; MiscGoogleBusinessImportReviews(MiscGoogleBusinessImportReviewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that pulls your Google Business Profile reviews into bundle.social so you can read and reply to them through the API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessImportReviews(new MiscGoogleBusinessImportReviewsRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsImportResponse
}
catch (ApiException<MiscGoogleBusinessImportReviewsError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviewsImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviewsImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessImportReviewsRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessImportReviewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsImportResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessImportReviewsError](src/BundleSocial/Errors/MiscGoogleBusinessImportReviewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse&gt; MiscGoogleBusinessListAvailableAttributes(MiscGoogleBusinessListAvailableAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the attributes Google allows for your location's category and country. Check this before updating attributes, since the valid set differs per business category. `regionCode`/`languageCode` are honoured by looking the attributes up through the location's primary category; when that category or a region code cannot be resolved (common for service-area businesses with no storefront address) the location's own defaults are returned instead and `lookup.by` comes back as `location`, meaning those two parameters were not applied.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessListAvailableAttributes(
        new MiscGoogleBusinessListAvailableAttributesRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse
}
catch (ApiException<MiscGoogleBusinessListAvailableAttributesError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationAttributesAvailable400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessListAvailableAttributesRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessListAvailableAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesAvailableResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessListAvailableAttributesError](src/BundleSocial/Errors/MiscGoogleBusinessListAvailableAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse&gt; MiscGoogleBusinessListCategories(MiscGoogleBusinessListCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Requires `regionCode` and `languageCode`. Default `view=BASIC`. Optional `names` fetches exact category IDs through `categories:batchGet`; otherwise `filter` supports `displayName` prefix search.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessListCategories(new MiscGoogleBusinessListCategoriesRequest
    {
        TeamId = "some example string",
        RegionCode = "some example string",
        LanguageCode = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse
}
catch (ApiException<MiscGoogleBusinessListCategoriesError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationCategoriesAvailable400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessListCategoriesRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessListCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationCategoriesAvailableResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessListCategoriesError](src/BundleSocial/Errors/MiscGoogleBusinessListCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessMediaResponse1&gt; MiscGoogleBusinessListMedia(MiscGoogleBusinessListMediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the photos and videos on your Google Business Profile, with paging. Use it to audit which images are live before adding or removing media.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessListMedia(new MiscGoogleBusinessListMediaRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessMediaResponse1
}
catch (ApiException<MiscGoogleBusinessListMediaError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessMedia400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessMedia400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessListMediaRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessListMediaRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessMediaResponse1](src/BundleSocial/Models/ApiV1MiscGoogleBusinessMediaResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessListMediaError](src/BundleSocial/Errors/MiscGoogleBusinessListMediaError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse&gt; MiscGoogleBusinessListPlaceActionLinks(MiscGoogleBusinessListPlaceActionLinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the action links on your Google Business Profile, such as booking, ordering, or reservation URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessListPlaceActionLinks(
        new MiscGoogleBusinessListPlaceActionLinksRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse
}
catch (ApiException<MiscGoogleBusinessListPlaceActionLinksError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessListPlaceActionLinksRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessListPlaceActionLinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessListPlaceActionLinksError](src/BundleSocial/Errors/MiscGoogleBusinessListPlaceActionLinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse&gt; MiscGoogleBusinessListSearchKeywords(MiscGoogleBusinessListSearchKeywordsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Monthly search keyword impressions for your selected location. `startMonth`/`endMonth` are inclusive `YYYY-MM` values; counts are aggregated across the whole range, so request a single month for a per-month figure. Each keyword returns either an exact `value` or a `threshold`, meaning the real count is below that number: low-volume keywords are only ever reported as a threshold, so treat a null `value` as suppressed rather than zero. Counts are unique users, not raw impressions. Paginated with `pageToken`/`nextPageToken`, max `pageSize` 100.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessListSearchKeywords(
        new MiscGoogleBusinessListSearchKeywordsRequest
        {
            TeamId = "some example string",
            StartMonth = "some example string",
            EndMonth = "some example string",
        });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse
}
catch (ApiException<MiscGoogleBusinessListSearchKeywordsError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationSearchKeywords400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationSearchKeywords400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessListSearchKeywordsRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessListSearchKeywordsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessListSearchKeywordsError](src/BundleSocial/Errors/MiscGoogleBusinessListSearchKeywordsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessReviewsReplyResponse&gt; MiscGoogleBusinessReplyToReview(MiscGoogleBusinessReplyToReviewRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish or update the owner reply on a Google Review. Google allows one owner reply per review, so sending again overwrites the previous text.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessReplyToReview(new MiscGoogleBusinessReplyToReviewRequest
    {
        ReviewId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessReviewsReplyResponse
}
catch (ApiException<MiscGoogleBusinessReplyToReviewError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessReviewsReply400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessReviewsReply400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessReplyToReviewRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessReplyToReviewRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessReviewsReplyResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessReviewsReplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessReplyToReviewError](src/BundleSocial/Errors/MiscGoogleBusinessReplyToReviewError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationAttributesResponse&gt; MiscGoogleBusinessUpdateAttributes(MiscGoogleBusinessUpdateAttributesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set or change attributes on your Google Business Profile location. Complete attributes help your listing surface for more specific local searches.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdateAttributes(
        new MiscGoogleBusinessUpdateAttributesRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationAttributesResponse
}
catch (ApiException<MiscGoogleBusinessUpdateAttributesError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationAttributes400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationAttributes400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdateAttributesRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateAttributesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationAttributesResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationAttributesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdateAttributesError](src/BundleSocial/Errors/MiscGoogleBusinessUpdateAttributesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationFoodMenusResponse&gt; MiscGoogleBusinessUpdateFoodMenus(MiscGoogleBusinessUpdateFoodMenusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`menus`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdateFoodMenus(new MiscGoogleBusinessUpdateFoodMenusRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationFoodMenusResponse
}
catch (ApiException<MiscGoogleBusinessUpdateFoodMenusError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationFoodMenus400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationFoodMenus400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdateFoodMenusRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateFoodMenusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationFoodMenusResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationFoodMenusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdateFoodMenusError](src/BundleSocial/Errors/MiscGoogleBusinessUpdateFoodMenusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationHoursResponse&gt; MiscGoogleBusinessUpdateHours(MiscGoogleBusinessUpdateHoursRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`regularHours`, `specialHours`, `moreHours`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdateHours(new MiscGoogleBusinessUpdateHoursRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationHoursResponse
}
catch (ApiException<MiscGoogleBusinessUpdateHoursError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationHours400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationHours400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdateHoursRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateHoursRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationHoursResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationHoursResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdateHoursError](src/BundleSocial/Errors/MiscGoogleBusinessUpdateHoursError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationResponse&gt; MiscGoogleBusinessUpdateLocation(MiscGoogleBusinessUpdateLocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Field mask is derived automatically from provided fields.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdateLocation(new MiscGoogleBusinessUpdateLocationRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationResponse
}
catch (ApiException<MiscGoogleBusinessUpdateLocationError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocation400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocation400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdateLocationRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateLocationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdateLocationError](src/BundleSocial/Errors/MiscGoogleBusinessUpdateLocationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1&gt; MiscGoogleBusinessUpdatePlaceActionLink(MiscGoogleBusinessUpdatePlaceActionLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`uri`, `placeActionType`, `isPreferred`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdatePlaceActionLink(
        new MiscGoogleBusinessUpdatePlaceActionLinkRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1
}
catch (ApiException<MiscGoogleBusinessUpdatePlaceActionLinkError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationPlaceActionLinks400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdatePlaceActionLinkRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdatePlaceActionLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdatePlaceActionLinkError](src/BundleSocial/Errors/MiscGoogleBusinessUpdatePlaceActionLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscGoogleBusinessLocationServiceListResponse&gt; MiscGoogleBusinessUpdateServiceList(MiscGoogleBusinessUpdateServiceListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Body requires `fields` (`serviceItems`).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscGoogleBusinessUpdateServiceList(
        new MiscGoogleBusinessUpdateServiceListRequest());
    // TODO: Handle 'response' of type ApiV1MiscGoogleBusinessLocationServiceListResponse
}
catch (ApiException<MiscGoogleBusinessUpdateServiceListError> ex)
{
    if (ex.Error.TryGetApiV1MiscGoogleBusinessLocationServiceList400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscGoogleBusinessLocationServiceList400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscGoogleBusinessUpdateServiceListRequest](src/BundleSocial/Requests/Misc/MiscGoogleBusinessUpdateServiceListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscGoogleBusinessLocationServiceListResponse](src/BundleSocial/Models/ApiV1MiscGoogleBusinessLocationServiceListResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscGoogleBusinessUpdateServiceListError](src/BundleSocial/Errors/MiscGoogleBusinessUpdateServiceListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscInstagramTagsResponse&gt; MiscInstagramBusinessDiscovery(MiscInstagramBusinessDiscoveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks if an Instagram user exists and returns their public profile data. Only works for Business and Creator accounts and only when Instagram is connected via Facebook Login. Returns followers_count, media_count, and profile picture if available.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscInstagramBusinessDiscovery(new MiscInstagramBusinessDiscoveryRequest
    {
        TeamId = "some example string",
        Username = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscInstagramTagsResponse
}
catch (ApiException<MiscInstagramBusinessDiscoveryError> ex)
{
    if (ex.Error.TryGetApiV1MiscInstagramTags400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscInstagramTags400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscInstagramBusinessDiscoveryRequest](src/BundleSocial/Requests/Misc/MiscInstagramBusinessDiscoveryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramTagsResponse](src/BundleSocial/Models/ApiV1MiscInstagramTagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscInstagramBusinessDiscoveryError](src/BundleSocial/Errors/MiscInstagramBusinessDiscoveryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscInstagramCommentResponse&gt; MiscInstagramDeleteComment(MiscInstagramDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Instagram comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscInstagramDeleteComment(new MiscInstagramDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscInstagramCommentResponse
}
catch (ApiException<MiscInstagramDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscInstagramComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscInstagramComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscInstagramDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscInstagramDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramCommentResponse](src/BundleSocial/Models/ApiV1MiscInstagramCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscInstagramDeleteCommentError](src/BundleSocial/Errors/MiscInstagramDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscInstagramAudioResponse&gt; MiscInstagramSearchAudio(MiscInstagramSearchAudioRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Instagram music or original sounds that can be attached to Reels. Only works for Instagram accounts connected via Facebook Login.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscInstagramSearchAudio(new MiscInstagramSearchAudioRequest
    {
        TeamId = "some example string",
        AudioType = AudioType.OriginalSound,
    });
    // TODO: Handle 'response' of type ApiV1MiscInstagramAudioResponse
}
catch (ApiException<MiscInstagramSearchAudioError> ex)
{
    if (ex.Error.TryGetApiV1MiscInstagramAudio400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscInstagramAudio400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscInstagramSearchAudioRequest](src/BundleSocial/Requests/Misc/MiscInstagramSearchAudioRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramAudioResponse](src/BundleSocial/Models/ApiV1MiscInstagramAudioResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscInstagramSearchAudioError](src/BundleSocial/Errors/MiscInstagramSearchAudioError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscInstagramLocationsResponse&gt; MiscInstagramSearchLocations(MiscInstagramSearchLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches Facebook Pages with physical location data and returns IDs that can be used as data.INSTAGRAM.locationId.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscInstagramSearchLocations(new MiscInstagramSearchLocationsRequest
    {
        TeamId = "some example string",
        Q = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscInstagramLocationsResponse
}
catch (ApiException<MiscInstagramSearchLocationsError> ex)
{
    if (ex.Error.TryGetApiV1MiscInstagramLocations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscInstagramLocations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscInstagramSearchLocationsRequest](src/BundleSocial/Requests/Misc/MiscInstagramSearchLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscInstagramLocationsResponse](src/BundleSocial/Models/ApiV1MiscInstagramLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscInstagramSearchLocationsError](src/BundleSocial/Errors/MiscInstagramSearchLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinMentionsBuilderResponse&gt; MiscLinkedinBuildCommentary(MiscLinkedinBuildCommentaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

If tag already exists (case insensitive), mentions replace it; otherwise they're appended to the end.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinBuildCommentary(new MiscLinkedinBuildCommentaryRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsBuilderResponse
}
catch (ApiException<MiscLinkedinBuildCommentaryError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinMentionsBuilder400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinMentionsBuilder400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinBuildCommentaryRequest](src/BundleSocial/Requests/Misc/MiscLinkedinBuildCommentaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinMentionsBuilderResponse](src/BundleSocial/Models/ApiV1MiscLinkedinMentionsBuilderResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinBuildCommentaryError](src/BundleSocial/Errors/MiscLinkedinBuildCommentaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinCommentResponse1&gt; MiscLinkedinDeleteComment(MiscLinkedinDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinDeleteComment(new MiscLinkedinDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse1
}
catch (ApiException<MiscLinkedinDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscLinkedinDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse1](src/BundleSocial/Models/ApiV1MiscLinkedinCommentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinDeleteCommentError](src/BundleSocial/Errors/MiscLinkedinDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinPostResponse1&gt; MiscLinkedinDeletePost(MiscLinkedinDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published LinkedIn post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinDeletePost(new MiscLinkedinDeletePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse1
}
catch (ApiException<MiscLinkedinDeletePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinDeletePostRequest](src/BundleSocial/Requests/Misc/MiscLinkedinDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse1](src/BundleSocial/Models/ApiV1MiscLinkedinPostResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinDeletePostError](src/BundleSocial/Errors/MiscLinkedinDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinCommentResponse&gt; MiscLinkedinEditComment(MiscLinkedinEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinEditComment(new MiscLinkedinEditCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinCommentResponse
}
catch (ApiException<MiscLinkedinEditCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinEditCommentRequest](src/BundleSocial/Requests/Misc/MiscLinkedinEditCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinCommentResponse](src/BundleSocial/Models/ApiV1MiscLinkedinCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinEditCommentError](src/BundleSocial/Errors/MiscLinkedinEditCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinPostResponse&gt; MiscLinkedinEditPost(MiscLinkedinEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published LinkedIn post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinEditPost(new MiscLinkedinEditPostRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinPostResponse
}
catch (ApiException<MiscLinkedinEditPostError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinEditPostRequest](src/BundleSocial/Requests/Misc/MiscLinkedinEditPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostResponse](src/BundleSocial/Models/ApiV1MiscLinkedinPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinEditPostError](src/BundleSocial/Errors/MiscLinkedinEditPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinMentionsTagsResponse&gt; MiscLinkedinGetTags(MiscLinkedinGetTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for LinkedIn people and organizations that can be @-mentioned, and get the tag IDs needed to insert them into post text. LinkedIn only renders a mention when the display text matches the entity's name exactly (case sensitive), so a vanity slug never works. When a person is resolved from `url` but LinkedIn does not expose their name, the tag comes back with an empty `display` and `needsDisplayName: true` — pass `displayName` to set it. Note that a page can only mention its own followers.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinGetTags(new MiscLinkedinGetTagsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscLinkedinMentionsTagsResponse
}
catch (ApiException<MiscLinkedinGetTagsError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinMentionsTags400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinMentionsTags400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinGetTagsRequest](src/BundleSocial/Requests/Misc/MiscLinkedinGetTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinMentionsTagsResponse](src/BundleSocial/Models/ApiV1MiscLinkedinMentionsTagsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinGetTagsError](src/BundleSocial/Errors/MiscLinkedinGetTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscLinkedinPostReshareResponse&gt; MiscLinkedinResharePost(MiscLinkedinResharePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a LinkedIn reshare as the currently selected LinkedIn channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscLinkedinResharePost(new MiscLinkedinResharePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscLinkedinPostReshareResponse
}
catch (ApiException<MiscLinkedinResharePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscLinkedinPostReshare400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscLinkedinPostReshare400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscLinkedinResharePostRequest](src/BundleSocial/Requests/Misc/MiscLinkedinResharePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscLinkedinPostReshareResponse](src/BundleSocial/Models/ApiV1MiscLinkedinPostReshareResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscLinkedinResharePostError](src/BundleSocial/Errors/MiscLinkedinResharePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscMastodonCommentResponse1&gt; MiscMastodonDeleteComment(MiscMastodonDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscMastodonDeleteComment(new MiscMastodonDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse1
}
catch (ApiException<MiscMastodonDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscMastodonComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscMastodonComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscMastodonDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscMastodonDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse1](src/BundleSocial/Models/ApiV1MiscMastodonCommentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscMastodonDeleteCommentError](src/BundleSocial/Errors/MiscMastodonDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscMastodonStatusResponse1&gt; MiscMastodonDeleteStatus(MiscMastodonDeleteStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Mastodon status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscMastodonDeleteStatus(new MiscMastodonDeleteStatusRequest());
    // TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse1
}
catch (ApiException<MiscMastodonDeleteStatusError> ex)
{
    if (ex.Error.TryGetApiV1MiscMastodonStatus400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscMastodonStatus400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscMastodonDeleteStatusRequest](src/BundleSocial/Requests/Misc/MiscMastodonDeleteStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse1](src/BundleSocial/Models/ApiV1MiscMastodonStatusResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscMastodonDeleteStatusError](src/BundleSocial/Errors/MiscMastodonDeleteStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscMastodonCommentResponse&gt; MiscMastodonEditComment(MiscMastodonEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Mastodon reply/comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscMastodonEditComment(new MiscMastodonEditCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscMastodonCommentResponse
}
catch (ApiException<MiscMastodonEditCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscMastodonComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscMastodonComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscMastodonEditCommentRequest](src/BundleSocial/Requests/Misc/MiscMastodonEditCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonCommentResponse](src/BundleSocial/Models/ApiV1MiscMastodonCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscMastodonEditCommentError](src/BundleSocial/Errors/MiscMastodonEditCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscMastodonStatusResponse&gt; MiscMastodonEditStatus(MiscMastodonEditStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content and spoiler text of a published Mastodon status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscMastodonEditStatus(new MiscMastodonEditStatusRequest());
    // TODO: Handle 'response' of type ApiV1MiscMastodonStatusResponse
}
catch (ApiException<MiscMastodonEditStatusError> ex)
{
    if (ex.Error.TryGetApiV1MiscMastodonStatus400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscMastodonStatus400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscMastodonEditStatusRequest](src/BundleSocial/Requests/Misc/MiscMastodonEditStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscMastodonStatusResponse](src/BundleSocial/Models/ApiV1MiscMastodonStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscMastodonEditStatusError](src/BundleSocial/Errors/MiscMastodonEditStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscPinterestPinResponse1&gt; MiscPinterestDeletePin(MiscPinterestDeletePinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Pinterest pin.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscPinterestDeletePin(new MiscPinterestDeletePinRequest());
    // TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse1
}
catch (ApiException<MiscPinterestDeletePinError> ex)
{
    if (ex.Error.TryGetApiV1MiscPinterestPin400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscPinterestPin400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscPinterestDeletePinRequest](src/BundleSocial/Requests/Misc/MiscPinterestDeletePinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscPinterestPinResponse1](src/BundleSocial/Models/ApiV1MiscPinterestPinResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscPinterestDeletePinError](src/BundleSocial/Errors/MiscPinterestDeletePinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscPinterestPinResponse&gt; MiscPinterestEditPin(MiscPinterestEditPinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Temporarily disabled

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscPinterestEditPin(new MiscPinterestEditPinRequest());
    // TODO: Handle 'response' of type ApiV1MiscPinterestPinResponse
}
catch (ApiException<MiscPinterestEditPinError> ex)
{
    if (ex.Error.TryGetApiV1MiscPinterestPin400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscPinterestPin400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscPinterestEditPinRequest](src/BundleSocial/Requests/Misc/MiscPinterestEditPinRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscPinterestPinResponse](src/BundleSocial/Models/ApiV1MiscPinterestPinResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscPinterestEditPinError](src/BundleSocial/Errors/MiscPinterestEditPinError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscRedditCommentResponse1&gt; MiscRedditDeleteComment(MiscRedditDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditDeleteComment(new MiscRedditDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse1
}
catch (ApiException<MiscRedditDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscRedditDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditCommentResponse1](src/BundleSocial/Models/ApiV1MiscRedditCommentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditDeleteCommentError](src/BundleSocial/Errors/MiscRedditDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscRedditPostResponse1&gt; MiscRedditDeletePost(MiscRedditDeletePostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Reddit post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditDeletePost(new MiscRedditDeletePostRequest());
    // TODO: Handle 'response' of type ApiV1MiscRedditPostResponse1
}
catch (ApiException<MiscRedditDeletePostError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditDeletePostRequest](src/BundleSocial/Requests/Misc/MiscRedditDeletePostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostResponse1](src/BundleSocial/Models/ApiV1MiscRedditPostResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditDeletePostError](src/BundleSocial/Errors/MiscRedditDeletePostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscRedditCommentResponse&gt; MiscRedditEditComment(MiscRedditEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Reddit comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditEditComment(new MiscRedditEditCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscRedditCommentResponse
}
catch (ApiException<MiscRedditEditCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditEditCommentRequest](src/BundleSocial/Requests/Misc/MiscRedditEditCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditCommentResponse](src/BundleSocial/Models/ApiV1MiscRedditCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditEditCommentError](src/BundleSocial/Errors/MiscRedditEditCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscRedditPostResponse&gt; MiscRedditEditPost(MiscRedditEditPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the selftext content of a published Reddit text post. Link and media posts cannot be edited.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditEditPost(new MiscRedditEditPostRequest());
    // TODO: Handle 'response' of type ApiV1MiscRedditPostResponse
}
catch (ApiException<MiscRedditEditPostError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditPost400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditPost400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditEditPostRequest](src/BundleSocial/Requests/Misc/MiscRedditEditPostRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostResponse](src/BundleSocial/Models/ApiV1MiscRedditPostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditEditPostError](src/BundleSocial/Errors/MiscRedditEditPostError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscRedditPostRequirementsResponse&gt; MiscRedditGetPostRequirements(MiscRedditGetPostRequirementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check a subreddit's posting rules before publishing, including whether flair is enabled or mandatory. Call this first to avoid rejected submissions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditGetPostRequirements(new MiscRedditGetPostRequirementsRequest
    {
        TeamId = "some example string",
        Subreddit = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscRedditPostRequirementsResponse
}
catch (ApiException<MiscRedditGetPostRequirementsError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditPostRequirements400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditPostRequirements400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditGetPostRequirementsRequest](src/BundleSocial/Requests/Misc/MiscRedditGetPostRequirementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscRedditPostRequirementsResponse](src/BundleSocial/Models/ApiV1MiscRedditPostRequirementsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditGetPostRequirementsError](src/BundleSocial/Errors/MiscRedditGetPostRequirementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1MiscRedditSubredditFlairsResponse&gt;&gt; MiscRedditGetSubredditFlairs(MiscRedditGetSubredditFlairsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the flairs available in a subreddit so you can attach a valid flair ID when creating a Reddit post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscRedditGetSubredditFlairs(new MiscRedditGetSubredditFlairsRequest
    {
        TeamId = "some example string",
        Subreddit = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1MiscRedditSubredditFlairsResponse>
}
catch (ApiException<MiscRedditGetSubredditFlairsError> ex)
{
    if (ex.Error.TryGetApiV1MiscRedditSubredditFlairs400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscRedditSubredditFlairs400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscRedditGetSubredditFlairsRequest](src/BundleSocial/Requests/Misc/MiscRedditGetSubredditFlairsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1MiscRedditSubredditFlairsResponse](src/BundleSocial/Models/ApiV1MiscRedditSubredditFlairsResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscRedditGetSubredditFlairsError](src/BundleSocial/Errors/MiscRedditGetSubredditFlairsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscSlackMessageResponse1&gt; MiscSlackDeleteMessage(MiscSlackDeleteMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Slack message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscSlackDeleteMessage(new MiscSlackDeleteMessageRequest());
    // TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse1
}
catch (ApiException<MiscSlackDeleteMessageError> ex)
{
    if (ex.Error.TryGetApiV1MiscSlackMessage400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscSlackMessage400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscSlackDeleteMessageRequest](src/BundleSocial/Requests/Misc/MiscSlackDeleteMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscSlackMessageResponse1](src/BundleSocial/Models/ApiV1MiscSlackMessageResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscSlackDeleteMessageError](src/BundleSocial/Errors/MiscSlackDeleteMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscSlackMessageResponse&gt; MiscSlackEditMessage(MiscSlackEditMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published Slack message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscSlackEditMessage(new MiscSlackEditMessageRequest());
    // TODO: Handle 'response' of type ApiV1MiscSlackMessageResponse
}
catch (ApiException<MiscSlackEditMessageError> ex)
{
    if (ex.Error.TryGetApiV1MiscSlackMessage400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscSlackMessage400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscSlackEditMessageRequest](src/BundleSocial/Requests/Misc/MiscSlackEditMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscSlackMessageResponse](src/BundleSocial/Models/ApiV1MiscSlackMessageResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscSlackEditMessageError](src/BundleSocial/Errors/MiscSlackEditMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTiktokCommentResponse&gt; MiscTiktokDeleteComment(MiscTiktokDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a published TikTok comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTiktokDeleteComment(new MiscTiktokDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscTiktokCommentResponse
}
catch (ApiException<MiscTiktokDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscTiktokComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTiktokComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTiktokDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscTiktokDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokCommentResponse](src/BundleSocial/Models/ApiV1MiscTiktokCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTiktokDeleteCommentError](src/BundleSocial/Errors/MiscTiktokDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1MiscTiktokCmlTrendingListResponse&gt;&gt; MiscTiktokGetCommercialMusicTrendingList(MiscTiktokGetCommercialMusicTrendingListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve up to 100 popular tracks pre-cleared for organic content and ad creation from TikTok CML.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTiktokGetCommercialMusicTrendingList(
        new MiscTiktokGetCommercialMusicTrendingListRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1MiscTiktokCmlTrendingListResponse>
}
catch (ApiException<MiscTiktokGetCommercialMusicTrendingListError> ex)
{
    if (ex.Error.TryGetApiV1MiscTiktokCmlTrendingList400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTiktokCmlTrendingList400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTiktokGetCommercialMusicTrendingListRequest](src/BundleSocial/Requests/Misc/MiscTiktokGetCommercialMusicTrendingListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1MiscTiktokCmlTrendingListResponse](src/BundleSocial/Models/ApiV1MiscTiktokCmlTrendingListResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTiktokGetCommercialMusicTrendingListError](src/BundleSocial/Errors/MiscTiktokGetCommercialMusicTrendingListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTiktokPostSettingsResponse&gt; MiscTiktokGetPostSettings(MiscTiktokGetPostSettingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the privacy levels, interaction settings (comments, duet, stitch) and maximum video duration the connected TikTok account allows, read live from TikTok. A value the account does not allow is not rejected when you create the post, it fails at publish time with TT:40002. Use it to build the options of your own composer, not as a check before every publish: each call counts against the account's TikTok rate limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTiktokGetPostSettings(new MiscTiktokGetPostSettingsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscTiktokPostSettingsResponse
}
catch (ApiException<MiscTiktokGetPostSettingsError> ex)
{
    if (ex.Error.TryGetApiV1MiscTiktokPostSettings400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTiktokPostSettings400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTiktokGetPostSettingsRequest](src/BundleSocial/Requests/Misc/MiscTiktokGetPostSettingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokPostSettingsResponse](src/BundleSocial/Models/ApiV1MiscTiktokPostSettingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTiktokGetPostSettingsError](src/BundleSocial/Errors/MiscTiktokGetPostSettingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTiktokLocationsResponse&gt; MiscTiktokSearchLocations(MiscTiktokSearchLocationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches location tags available to the connected TikTok account (up to 20 results). Pass `locationId` and `name` as data.TIKTOK.locationId and data.TIKTOK.locationName to show the location on a video or photo post.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTiktokSearchLocations(new MiscTiktokSearchLocationsRequest
    {
        TeamId = "some example string",
        Q = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscTiktokLocationsResponse
}
catch (ApiException<MiscTiktokSearchLocationsError> ex)
{
    if (ex.Error.TryGetApiV1MiscTiktokLocations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTiktokLocations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTiktokSearchLocationsRequest](src/BundleSocial/Requests/Misc/MiscTiktokSearchLocationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTiktokLocationsResponse](src/BundleSocial/Models/ApiV1MiscTiktokLocationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTiktokSearchLocationsError](src/BundleSocial/Errors/MiscTiktokSearchLocationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTwitterCommentResponse&gt; MiscTwitterDeleteComment(MiscTwitterDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X reply/comment. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTwitterDeleteComment(new MiscTwitterDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscTwitterCommentResponse
}
catch (ApiException<MiscTwitterDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscTwitterComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTwitterComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTwitterDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscTwitterDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterCommentResponse](src/BundleSocial/Models/ApiV1MiscTwitterCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTwitterDeleteCommentError](src/BundleSocial/Errors/MiscTwitterDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTwitterTweetResponse&gt; MiscTwitterDeleteTweet(MiscTwitterDeleteTweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published Twitter/X tweet. X charges for deletes ($0.01 per request).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTwitterDeleteTweet(new MiscTwitterDeleteTweetRequest());
    // TODO: Handle 'response' of type ApiV1MiscTwitterTweetResponse
}
catch (ApiException<MiscTwitterDeleteTweetError> ex)
{
    if (ex.Error.TryGetApiV1MiscTwitterTweet400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTwitterTweet400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTwitterDeleteTweetRequest](src/BundleSocial/Requests/Misc/MiscTwitterDeleteTweetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterTweetResponse](src/BundleSocial/Models/ApiV1MiscTwitterTweetResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTwitterDeleteTweetError](src/BundleSocial/Errors/MiscTwitterDeleteTweetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTwitterRetweetResponse&gt; MiscTwitterRetweet(MiscTwitterRetweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Repost (retweet) any X post from the connected account. X charges for reposts ($0.015 per request); your credits are charged once per post, per connected account, per UTC day, so reposting the same post again on the same day costs no extra credit. Reposting a post that is already reposted is a no-op on X's side.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTwitterRetweet(new MiscTwitterRetweetRequest());
    // TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
}
catch (ApiException<MiscTwitterRetweetError> ex)
{
    if (ex.Error.TryGetApiV1MiscTwitterRetweet400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTwitterRetweet400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTwitterRetweetRequest](src/BundleSocial/Requests/Misc/MiscTwitterRetweetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](src/BundleSocial/Models/ApiV1MiscTwitterRetweetResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTwitterRetweetError](src/BundleSocial/Errors/MiscTwitterRetweetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscTwitterRetweetResponse&gt; MiscTwitterUnretweet(MiscTwitterUnretweetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a repost (retweet) made by the connected account. X charges for this too ($0.01 per request); your credits are charged once per post, per connected account, per UTC day, the same way reposting is.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscTwitterUnretweet(new MiscTwitterUnretweetRequest());
    // TODO: Handle 'response' of type ApiV1MiscTwitterRetweetResponse
}
catch (ApiException<MiscTwitterUnretweetError> ex)
{
    if (ex.Error.TryGetApiV1MiscTwitterRetweet400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscTwitterRetweet400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscTwitterUnretweetRequest](src/BundleSocial/Requests/Misc/MiscTwitterUnretweetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscTwitterRetweetResponse](src/BundleSocial/Models/ApiV1MiscTwitterRetweetResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscTwitterUnretweetError](src/BundleSocial/Errors/MiscTwitterUnretweetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubePlaylistItemsResponse&gt; MiscYoutubeAddVideoToPlaylist(MiscYoutubeAddVideoToPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Append a video to a YouTube playlist on a connected channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeAddVideoToPlaylist(new MiscYoutubeAddVideoToPlaylistRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse
}
catch (ApiException<MiscYoutubeAddVideoToPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylistItems400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylistItems400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeAddVideoToPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeAddVideoToPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse](src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItemsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeAddVideoToPlaylistError](src/BundleSocial/Errors/MiscYoutubeAddVideoToPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubePlaylistResponse1&gt; MiscYoutubeCreateNewChannelPlaylist(MiscYoutubeCreateNewChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a playlist on a connected YouTube channel with a title, description, and privacy status. Playlists group related videos and increase session watch time.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeCreateNewChannelPlaylist(
        new MiscYoutubeCreateNewChannelPlaylistRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
}
catch (ApiException<MiscYoutubeCreateNewChannelPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylist400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylist400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeCreateNewChannelPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeCreateNewChannelPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeCreateNewChannelPlaylistError](src/BundleSocial/Errors/MiscYoutubeCreateNewChannelPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;bool&gt; MiscYoutubeDeleteChannelPlaylist(MiscYoutubeDeleteChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a playlist from a connected YouTube channel. The videos themselves are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeDeleteChannelPlaylist(new MiscYoutubeDeleteChannelPlaylistRequest
    {
        PlaylistId = "some example string",
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type bool
}
catch (ApiException<MiscYoutubeDeleteChannelPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylist400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylist400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeDeleteChannelPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeDeleteChannelPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeDeleteChannelPlaylistError](src/BundleSocial/Errors/MiscYoutubeDeleteChannelPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeCommentResponse1&gt; MiscYoutubeDeleteComment(MiscYoutubeDeleteCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeDeleteComment(new MiscYoutubeDeleteCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse1
}
catch (ApiException<MiscYoutubeDeleteCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeDeleteCommentRequest](src/BundleSocial/Requests/Misc/MiscYoutubeDeleteCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse1](src/BundleSocial/Models/ApiV1MiscYoutubeCommentResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeDeleteCommentError](src/BundleSocial/Errors/MiscYoutubeDeleteCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeVideoResponse1&gt; MiscYoutubeDeleteVideo(MiscYoutubeDeleteVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a published YouTube video.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeDeleteVideo(new MiscYoutubeDeleteVideoRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse1
}
catch (ApiException<MiscYoutubeDeleteVideoError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeVideo400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeVideo400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeDeleteVideoRequest](src/BundleSocial/Requests/Misc/MiscYoutubeDeleteVideoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse1](src/BundleSocial/Models/ApiV1MiscYoutubeVideoResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeDeleteVideoError](src/BundleSocial/Errors/MiscYoutubeDeleteVideoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;bool&gt; MiscYoutubeDeleteVideoFromPlaylist(MiscYoutubeDeleteVideoFromPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a single video from a YouTube playlist. Pass the playlist item ID, not the video ID. The video itself stays on the channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeDeleteVideoFromPlaylist(new MiscYoutubeDeleteVideoFromPlaylistRequest
    {
        PlaylistItemId = "some example string",
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type bool
}
catch (ApiException<MiscYoutubeDeleteVideoFromPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylistItems400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylistItems400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeDeleteVideoFromPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeDeleteVideoFromPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>bool</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeDeleteVideoFromPlaylistError](src/BundleSocial/Errors/MiscYoutubeDeleteVideoFromPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeCommentResponse&gt; MiscYoutubeEditComment(MiscYoutubeEditCommentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the text content of a published YouTube comment.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeEditComment(new MiscYoutubeEditCommentRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubeCommentResponse
}
catch (ApiException<MiscYoutubeEditCommentError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeComment400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeComment400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeEditCommentRequest](src/BundleSocial/Requests/Misc/MiscYoutubeEditCommentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeCommentResponse](src/BundleSocial/Models/ApiV1MiscYoutubeCommentResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeEditCommentError](src/BundleSocial/Errors/MiscYoutubeEditCommentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeVideoResponse&gt; MiscYoutubeEditVideo(MiscYoutubeEditVideoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the title, description, tags, category, or privacy status of a published YouTube video.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeEditVideo(new MiscYoutubeEditVideoRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoResponse
}
catch (ApiException<MiscYoutubeEditVideoError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeVideo400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeVideo400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeEditVideoRequest](src/BundleSocial/Requests/Misc/MiscYoutubeEditVideoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoResponse](src/BundleSocial/Models/ApiV1MiscYoutubeVideoResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeEditVideoError](src/BundleSocial/Errors/MiscYoutubeEditVideoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubePlaylistResponse&gt; MiscYoutubeGetChannelPlaylist(MiscYoutubeGetChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the playlists on a connected YouTube channel, with their IDs, titles, and privacy status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeGetChannelPlaylist(new MiscYoutubeGetChannelPlaylistRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse
}
catch (ApiException<MiscYoutubeGetChannelPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylist400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylist400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeGetChannelPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeGetChannelPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse](src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeGetChannelPlaylistError](src/BundleSocial/Errors/MiscYoutubeGetChannelPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeRegionsResponse&gt; MiscYoutubeGetRegions(MiscYoutubeGetRegionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of content regions that the YouTube website supports.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeGetRegions(new MiscYoutubeGetRegionsRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscYoutubeRegionsResponse
}
catch (ApiException<MiscYoutubeGetRegionsError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeRegions400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeRegions400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeGetRegionsRequest](src/BundleSocial/Requests/Misc/MiscYoutubeGetRegionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeRegionsResponse](src/BundleSocial/Models/ApiV1MiscYoutubeRegionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeGetRegionsError](src/BundleSocial/Errors/MiscYoutubeGetRegionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeVideoCategoriesResponse&gt; MiscYoutubeGetVideoCategories(MiscYoutubeGetVideoCategoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the list of video categories that can be associated with YouTube videos for a specific region.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeGetVideoCategories(new MiscYoutubeGetVideoCategoriesRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscYoutubeVideoCategoriesResponse
}
catch (ApiException<MiscYoutubeGetVideoCategoriesError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeVideoCategories400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeVideoCategories400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeGetVideoCategoriesRequest](src/BundleSocial/Requests/Misc/MiscYoutubeGetVideoCategoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeVideoCategoriesResponse](src/BundleSocial/Models/ApiV1MiscYoutubeVideoCategoriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeGetVideoCategoriesError](src/BundleSocial/Errors/MiscYoutubeGetVideoCategoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubePlaylistItemsResponse1&gt; MiscYoutubeGetVideosFromPlaylist(MiscYoutubeGetVideosFromPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the videos in a YouTube playlist, including the playlist item IDs required to remove individual entries.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeGetVideosFromPlaylist(new MiscYoutubeGetVideosFromPlaylistRequest
    {
        TeamId = "some example string",
        PlaylistId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistItemsResponse1
}
catch (ApiException<MiscYoutubeGetVideosFromPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylistItems400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylistItems400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeGetVideosFromPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeGetVideosFromPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistItemsResponse1](src/BundleSocial/Models/ApiV1MiscYoutubePlaylistItemsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeGetVideosFromPlaylistError](src/BundleSocial/Errors/MiscYoutubeGetVideosFromPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubeThumbnailResponse&gt; MiscYoutubeSetThumbnail(MiscYoutubeSetThumbnailRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a custom thumbnail for a published YouTube video. Custom thumbnails require a verified channel and strongly influence click-through rate.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeSetThumbnail(new MiscYoutubeSetThumbnailRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubeThumbnailResponse
}
catch (ApiException<MiscYoutubeSetThumbnailError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubeThumbnail400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubeThumbnail400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeSetThumbnailRequest](src/BundleSocial/Requests/Misc/MiscYoutubeSetThumbnailRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubeThumbnailResponse](src/BundleSocial/Models/ApiV1MiscYoutubeThumbnailResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeSetThumbnailError](src/BundleSocial/Errors/MiscYoutubeSetThumbnailError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1MiscYoutubePlaylistResponse1&gt; MiscYoutubeUpdateChannelPlaylist(MiscYoutubeUpdateChannelPlaylistRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the title, description, or privacy status of a YouTube playlist on a connected channel. Send the playlist ID together with the fields you want to update.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Misc.MiscYoutubeUpdateChannelPlaylist(new MiscYoutubeUpdateChannelPlaylistRequest());
    // TODO: Handle 'response' of type ApiV1MiscYoutubePlaylistResponse1
}
catch (ApiException<MiscYoutubeUpdateChannelPlaylistError> ex)
{
    if (ex.Error.TryGetApiV1MiscYoutubePlaylist400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1MiscYoutubePlaylist400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[MiscYoutubeUpdateChannelPlaylistRequest](src/BundleSocial/Requests/Misc/MiscYoutubeUpdateChannelPlaylistRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1MiscYoutubePlaylistResponse1](src/BundleSocial/Models/ApiV1MiscYoutubePlaylistResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[MiscYoutubeUpdateChannelPlaylistError](src/BundleSocial/Errors/MiscYoutubeUpdateChannelPlaylistError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationApi

> Source: [OrganizationApi](src/BundleSocial/Api/OrganizationApi.cs)

<details>
<summary><code>Task&lt;ApiV1OrganizationUsageCommentsResponse&gt; OrganizationGetCommentsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many comments your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetCommentsUsage();
    // TODO: Handle 'response' of type ApiV1OrganizationUsageCommentsResponse
}
catch (ApiException<OrganizationGetCommentsUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsageComments400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsageComments400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageCommentsResponse](src/BundleSocial/Models/ApiV1OrganizationUsageCommentsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetCommentsUsageError](src/BundleSocial/Errors/OrganizationGetCommentsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationUsageDailyLimitsResponse&gt; OrganizationGetDailyLimitsUsage(OrganizationGetDailyLimitsUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check how many posts a single social account has already published on a specific day versus the platform's own daily cap. Use this to avoid hitting platform-side publishing limits.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetDailyLimitsUsage(
        new OrganizationGetDailyLimitsUsageRequest { SocialAccountId = "some example string" });
    // TODO: Handle 'response' of type ApiV1OrganizationUsageDailyLimitsResponse
}
catch (ApiException<OrganizationGetDailyLimitsUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsageDailyLimits400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsageDailyLimits400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OrganizationGetDailyLimitsUsageRequest](src/BundleSocial/Requests/OrganizationApi/OrganizationGetDailyLimitsUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageDailyLimitsResponse](src/BundleSocial/Models/ApiV1OrganizationUsageDailyLimitsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetDailyLimitsUsageError](src/BundleSocial/Errors/OrganizationGetDailyLimitsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationUsageImportsResponse&gt; OrganizationGetImportsUsage(OrganizationGetImportsUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much import capacity each social account has consumed, paginated and filterable by team or platform. Use it to track post history and review import quota.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetImportsUsage(new OrganizationGetImportsUsageRequest());
    // TODO: Handle 'response' of type ApiV1OrganizationUsageImportsResponse
}
catch (ApiException<OrganizationGetImportsUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsageImports400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsageImports400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OrganizationGetImportsUsageRequest](src/BundleSocial/Requests/OrganizationApi/OrganizationGetImportsUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageImportsResponse](src/BundleSocial/Models/ApiV1OrganizationUsageImportsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetImportsUsageError](src/BundleSocial/Errors/OrganizationGetImportsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationUsageMessagesResponse&gt; OrganizationGetMessagesUsage(OrganizationGetMessagesUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this UTC calendar month against its monthly limits, paginated with `offset`/`limit` and filterable by team, platform or account. Messages counted: every message you sent, including private replies to comments. Not counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect per-account and organization overrides on top of the plan default.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetMessagesUsage(new OrganizationGetMessagesUsageRequest());
    // TODO: Handle 'response' of type ApiV1OrganizationUsageMessagesResponse
}
catch (ApiException<OrganizationGetMessagesUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsageMessages400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsageMessages400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[OrganizationGetMessagesUsageRequest](src/BundleSocial/Requests/OrganizationApi/OrganizationGetMessagesUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageMessagesResponse](src/BundleSocial/Models/ApiV1OrganizationUsageMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetMessagesUsageError](src/BundleSocial/Errors/OrganizationGetMessagesUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationResponse&gt; OrganizationGetOrganization(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve your organization's details and plan. The `teams` field is deprecated and will be removed on 2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetOrganization();
    // TODO: Handle 'response' of type ApiV1OrganizationResponse
}
catch (ApiException<OrganizationGetOrganizationError> ex)
{
    if (ex.Error.TryGetApiV1Organization400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Organization400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationResponse](src/BundleSocial/Models/ApiV1OrganizationResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetOrganizationError](src/BundleSocial/Errors/OrganizationGetOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationUsagePostsResponse&gt; OrganizationGetPostsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how many posts your organization has consumed against its plan limit for the current billing period. Use it to monitor quota before scheduling large batches.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetPostsUsage();
    // TODO: Handle 'response' of type ApiV1OrganizationUsagePostsResponse
}
catch (ApiException<OrganizationGetPostsUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsagePosts400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsagePosts400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsagePostsResponse](src/BundleSocial/Models/ApiV1OrganizationUsagePostsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetPostsUsageError](src/BundleSocial/Errors/OrganizationGetPostsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1OrganizationUsageUploadsResponse&gt; OrganizationGetUploadsUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

See how much upload capacity your organization has consumed against its plan limit for the current billing period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationApi.OrganizationGetUploadsUsage();
    // TODO: Handle 'response' of type ApiV1OrganizationUsageUploadsResponse
}
catch (ApiException<OrganizationGetUploadsUsageError> ex)
{
    if (ex.Error.TryGetApiV1OrganizationUsageUploads400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1OrganizationUsageUploads400Error1
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1OrganizationUsageUploadsResponse](src/BundleSocial/Models/ApiV1OrganizationUsageUploadsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[OrganizationGetUploadsUsageError](src/BundleSocial/Errors/OrganizationGetUploadsUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PostApi

> Source: [PostApi](src/BundleSocial/Api/PostApi.cs)

<details>
<summary><code>Task&lt;ApiV1PostResponse1&gt; PostCreate(PostCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply shared content plus optional per-platform overrides for captions, media, and platform-specific options.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostCreate(new PostCreateRequest());
    // TODO: Handle 'response' of type ApiV1PostResponse1
}
catch (ApiException<PostCreateError> ex)
{
    if (ex.Error.TryGetApiV1Post400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Post400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCreateRequest](src/BundleSocial/Requests/PostApi/PostCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse1](src/BundleSocial/Models/ApiV1PostResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCreateError](src/BundleSocial/Errors/PostCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostResponse2&gt; PostDelete(PostDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an already-published post does not remove it from the social platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostDelete(new PostDeleteRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostResponse2
}
catch (ApiException<PostDeleteError> ex)
{
    if (ex.Error.TryGetApiV1Post400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Post400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostDeleteRequest](src/BundleSocial/Requests/PostApi/PostDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse2](src/BundleSocial/Models/ApiV1PostResponse2.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostDeleteError](src/BundleSocial/Errors/PostDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostResponse&gt; PostGet(PostGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing errors.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostGet(new PostGetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostResponse
}
catch (ApiException<PostGetError> ex)
{
    if (ex.Error.TryGetApiV1Post400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Post400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostGetRequest](src/BundleSocial/Requests/PostApi/PostGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse](src/BundleSocial/Models/ApiV1PostResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostGetError](src/BundleSocial/Errors/PostGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostReferenceKeyResponse&gt; PostGetByReferenceKey(PostGetByReferenceKeyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you store your own identifier on create and want to look the post up later without keeping a mapping table.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostGetByReferenceKey(new PostGetByReferenceKeyRequest
    {
        ReferenceKey = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1PostReferenceKeyResponse
}
catch (ApiException<PostGetByReferenceKeyError> ex)
{
    if (ex.Error.TryGetApiV1PostReferenceKey400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostReferenceKey400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostGetByReferenceKeyRequest](src/BundleSocial/Requests/PostApi/PostGetByReferenceKeyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReferenceKeyResponse](src/BundleSocial/Models/ApiV1PostReferenceKeyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostGetByReferenceKeyError](src/BundleSocial/Errors/PostGetByReferenceKeyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostResponse3&gt; PostGetList(PostGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List and filter posts across a team by status, platform, or date range with pagination. Use this to build a content calendar or reconcile your own database with bundle.social.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostGetList(new PostGetListRequest { TeamId = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostResponse3
}
catch (ApiException<PostGetListError> ex)
{
    if (ex.Error.TryGetApiV1Post400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Post400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostGetListRequest](src/BundleSocial/Requests/PostApi/PostGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse3](src/BundleSocial/Models/ApiV1PostResponse3.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostGetListError](src/BundleSocial/Errors/PostGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostReconnectSocialAccountCandidatesResponse&gt; PostGetReconnectSocialAccountCandidates(PostGetReconnectSocialAccountCandidatesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly connected account of the same platform.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostGetReconnectSocialAccountCandidates(
        new PostGetReconnectSocialAccountCandidatesRequest { TeamId = "some example string", Type = TypeEnum.Tiktok });
    // TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountCandidatesResponse
}
catch (ApiException<PostGetReconnectSocialAccountCandidatesError> ex)
{
    if (ex.Error.TryGetApiV1PostReconnectSocialAccountCandidates400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostReconnectSocialAccountCandidates400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostGetReconnectSocialAccountCandidatesRequest](src/BundleSocial/Requests/PostApi/PostGetReconnectSocialAccountCandidatesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReconnectSocialAccountCandidatesResponse](src/BundleSocial/Models/ApiV1PostReconnectSocialAccountCandidatesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostGetReconnectSocialAccountCandidatesError](src/BundleSocial/Errors/PostGetReconnectSocialAccountCandidatesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostReconnectSocialAccountResponse&gt; PostReconnectSocialAccount(PostReconnectSocialAccountRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reattach a newly connected social account to posts that were orphaned when the previous account was disconnected, so scheduled posts publish instead of failing.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostReconnectSocialAccount(new PostReconnectSocialAccountRequest());
    // TODO: Handle 'response' of type ApiV1PostReconnectSocialAccountResponse
}
catch (ApiException<PostReconnectSocialAccountError> ex)
{
    if (ex.Error.TryGetApiV1PostReconnectSocialAccount400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostReconnectSocialAccount400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostReconnectSocialAccountRequest](src/BundleSocial/Requests/PostApi/PostReconnectSocialAccountRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostReconnectSocialAccountResponse](src/BundleSocial/Models/ApiV1PostReconnectSocialAccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostReconnectSocialAccountError](src/BundleSocial/Errors/PostReconnectSocialAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostRetryResponse&gt; PostRetry(PostRetryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the underlying cause first, then retry.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostRetry(new PostRetryRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostRetryResponse
}
catch (ApiException<PostRetryError> ex)
{
    if (ex.Error.TryGetApiV1PostRetry400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostRetry400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostRetryRequest](src/BundleSocial/Requests/PostApi/PostRetryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostRetryResponse](src/BundleSocial/Models/ApiV1PostRetryResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostRetryError](src/BundleSocial/Errors/PostRetryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostResponse1&gt; PostUpdate(PostUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the fields you send are modified.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostApi.PostUpdate(new PostUpdateRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostResponse1
}
catch (ApiException<PostUpdateError> ex)
{
    if (ex.Error.TryGetApiV1Post400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Post400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostUpdateRequest](src/BundleSocial/Requests/PostApi/PostUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostResponse1](src/BundleSocial/Models/ApiV1PostResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostUpdateError](src/BundleSocial/Errors/PostUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TeamApi

> Source: [TeamApi](src/BundleSocial/Api/TeamApi.cs)

<details>
<summary><code>Task&lt;ApiV1TeamResponse1&gt; TeamCreateTeam(TeamCreateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new team in your organization. Create one team per brand, client, or workspace you want to keep separate, then connect social accounts to it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamApi.TeamCreateTeam(new TeamCreateTeamRequest());
    // TODO: Handle 'response' of type ApiV1TeamResponse1
}
catch (ApiException<TeamCreateTeamError> ex)
{
    if (ex.Error.TryGetApiV1Team400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Team400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TeamCreateTeamRequest](src/BundleSocial/Requests/TeamApi/TeamCreateTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](src/BundleSocial/Models/ApiV1TeamResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[TeamCreateTeamError](src/BundleSocial/Errors/TeamCreateTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TeamResponse1&gt; TeamDeleteTeam(TeamDeleteTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a team along with its connected social accounts, posts, and uploads. This cannot be undone.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamApi.TeamDeleteTeam(new TeamDeleteTeamRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1TeamResponse1
}
catch (ApiException<TeamDeleteTeamError> ex)
{
    if (ex.Error.TryGetApiV1Team400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Team400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TeamDeleteTeamRequest](src/BundleSocial/Requests/TeamApi/TeamDeleteTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](src/BundleSocial/Models/ApiV1TeamResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[TeamDeleteTeamError](src/BundleSocial/Errors/TeamDeleteTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TeamResponse3&gt; TeamGetList(TeamGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the teams in your organization with pagination. Use this to discover team IDs, which are required by most publishing and analytics endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamApi.TeamGetList(new TeamGetListRequest());
    // TODO: Handle 'response' of type ApiV1TeamResponse3
}
catch (ApiException<TeamGetListError> ex)
{
    if (ex.Error.TryGetApiV1Team400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Team400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TeamGetListRequest](src/BundleSocial/Requests/TeamApi/TeamGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse3](src/BundleSocial/Models/ApiV1TeamResponse3.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[TeamGetListError](src/BundleSocial/Errors/TeamGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TeamResponse&gt; TeamGetTeam(TeamGetTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single team with its connected social accounts and settings. Teams are the container that social accounts, posts, and uploads belong to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamApi.TeamGetTeam(new TeamGetTeamRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1TeamResponse
}
catch (ApiException<TeamGetTeamError> ex)
{
    if (ex.Error.TryGetApiV1Team400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Team400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TeamGetTeamRequest](src/BundleSocial/Requests/TeamApi/TeamGetTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse](src/BundleSocial/Models/ApiV1TeamResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[TeamGetTeamError](src/BundleSocial/Errors/TeamGetTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1TeamResponse1&gt; TeamUpdateTeam(TeamUpdateTeamRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a team's name, avatar, time zone, or other settings. Only the fields you send are changed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TeamApi.TeamUpdateTeam(new TeamUpdateTeamRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1TeamResponse1
}
catch (ApiException<TeamUpdateTeamError> ex)
{
    if (ex.Error.TryGetApiV1Team400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Team400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TeamUpdateTeamRequest](src/BundleSocial/Requests/TeamApi/TeamUpdateTeamRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1TeamResponse1](src/BundleSocial/Models/ApiV1TeamResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[TeamUpdateTeamError](src/BundleSocial/Errors/TeamUpdateTeamError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UploadApi

> Source: [UploadApi](src/BundleSocial/Api/UploadApi.cs)

<details>
<summary><code>Task&lt;ApiV1UploadMultipartAbortResponse&gt; UploadAbortMultipartUpload(UploadAbortMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discard an unfinished multipart upload and its parts. Call this when you give up on an upload — abandoned parts stay in storage and count against your usage.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadAbortMultipartUpload(new UploadAbortMultipartUploadRequest());
    // TODO: Handle 'response' of type ApiV1UploadMultipartAbortResponse
}
catch (ApiException<UploadAbortMultipartUploadError> ex)
{
    if (ex.Error.TryGetApiV1UploadMultipartAbort400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadMultipartAbort400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadAbortMultipartUploadRequest](src/BundleSocial/Requests/UploadApi/UploadAbortMultipartUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartAbortResponse](src/BundleSocial/Models/ApiV1UploadMultipartAbortResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadAbortMultipartUploadError](src/BundleSocial/Errors/UploadAbortMultipartUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadMultipartCompleteResponse&gt; UploadCompleteMultipartUpload(UploadCompleteMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Assemble the uploaded parts into the final object and add it to your media library. Send every part with the ETag returned by its PUT. A 500 is always retryable — whatever we have (your parts, or the assembled object) is kept, so retry this call rather than re-uploading. A 400 is final: either the part list was wrong, or the file itself was rejected (empty, wrong type, too large, no readable preview) and its bytes have been deleted. A 403 means quota or permissions and is raised before assembly, so your parts are still open — call abort yourself. Calling this again after it already succeeded returns the same upload instead of charging you twice.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadCompleteMultipartUpload(new UploadCompleteMultipartUploadRequest());
    // TODO: Handle 'response' of type ApiV1UploadMultipartCompleteResponse
}
catch (ApiException<UploadCompleteMultipartUploadError> ex)
{
    if (ex.Error.TryGetApiV1UploadMultipartComplete400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadMultipartComplete400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadCompleteMultipartUploadRequest](src/BundleSocial/Requests/UploadApi/UploadCompleteMultipartUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartCompleteResponse](src/BundleSocial/Models/ApiV1UploadMultipartCompleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadCompleteMultipartUploadError](src/BundleSocial/Errors/UploadCompleteMultipartUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadResponse1&gt; UploadCreate(UploadCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a file. This is the only endpoint that uses multipart/form-data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadCreate(new UploadCreateRequest());
    // TODO: Handle 'response' of type ApiV1UploadResponse1
}
catch (ApiException<UploadCreateError> ex)
{
    if (ex.Error.TryGetApiV1Upload400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Upload400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadCreateRequest](src/BundleSocial/Requests/UploadApi/UploadCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse1](src/BundleSocial/Models/ApiV1UploadResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadCreateError](src/BundleSocial/Errors/UploadCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadFromUrlResponse&gt; UploadCreateFromUrl(UploadCreateFromUrlRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an image or video to your media library by giving bundle.social a public URL to fetch, instead of uploading the bytes yourself. Useful when your media already lives in a CDN or S3 bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadCreateFromUrl(new UploadCreateFromUrlRequest());
    // TODO: Handle 'response' of type ApiV1UploadFromUrlResponse
}
catch (ApiException<UploadCreateFromUrlError> ex)
{
    if (ex.Error.TryGetApiV1UploadFromUrl400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadFromUrl400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadCreateFromUrlRequest](src/BundleSocial/Requests/UploadApi/UploadCreateFromUrlRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadFromUrlResponse](src/BundleSocial/Models/ApiV1UploadFromUrlResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadCreateFromUrlError](src/BundleSocial/Errors/UploadCreateFromUrlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadResponse1&gt; UploadDelete(UploadDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a single media file from your library. Files still attached to scheduled posts should be replaced first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadDelete(new UploadDeleteRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1UploadResponse1
}
catch (ApiException<UploadDeleteError> ex)
{
    if (ex.Error.TryGetApiV1Upload400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Upload400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadDeleteRequest](src/BundleSocial/Requests/UploadApi/UploadDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse1](src/BundleSocial/Models/ApiV1UploadResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadDeleteError](src/BundleSocial/Errors/UploadDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1UploadResponse1&gt;&gt; UploadDeleteMany(UploadDeleteManyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete several media files in one request. Use it to clean up your library in bulk instead of calling delete per file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadDeleteMany(new UploadDeleteManyRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1UploadResponse1>
}
catch (ApiException<UploadDeleteManyError> ex)
{
    if (ex.Error.TryGetApiV1Upload400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Upload400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadDeleteManyRequest](src/BundleSocial/Requests/UploadApi/UploadDeleteManyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1UploadResponse1](src/BundleSocial/Models/ApiV1UploadResponse1.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadDeleteManyError](src/BundleSocial/Errors/UploadDeleteManyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadFinalizeResponse&gt; UploadFinalizeLargeUpload(UploadFinalizeLargeUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finalize large upload.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadFinalizeLargeUpload(new UploadFinalizeLargeUploadRequest());
    // TODO: Handle 'response' of type ApiV1UploadFinalizeResponse
}
catch (ApiException<UploadFinalizeLargeUploadError> ex)
{
    if (ex.Error.TryGetApiV1UploadFinalize400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadFinalize400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadFinalizeLargeUploadRequest](src/BundleSocial/Requests/UploadApi/UploadFinalizeLargeUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadFinalizeResponse](src/BundleSocial/Models/ApiV1UploadFinalizeResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadFinalizeLargeUploadError](src/BundleSocial/Errors/UploadFinalizeLargeUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadResponse&gt; UploadGet(UploadGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single media file with its processing status, dimensions, duration, and the posts it is attached to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadGet(new UploadGetRequest { Id = "some example string" });
    // TODO: Handle 'response' of type ApiV1UploadResponse
}
catch (ApiException<UploadGetError> ex)
{
    if (ex.Error.TryGetApiV1Upload400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Upload400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadGetRequest](src/BundleSocial/Requests/UploadApi/UploadGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadResponse](src/BundleSocial/Models/ApiV1UploadResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadGetError](src/BundleSocial/Errors/UploadGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1UploadResponse&gt;&gt; UploadGetList(UploadGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the media files in your team's library, newest first. Each file carries `posts`, the links to the posts using it — pass `includePosts=false` to leave them out. Page with `limit` and `offset`. To check whether specific files already exist, filter by `ids` or `urls` instead of listing everything.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadGetList(new UploadGetListRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1UploadResponse>
}
catch (ApiException<UploadGetListError> ex)
{
    if (ex.Error.TryGetApiV1Upload400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Upload400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadGetListRequest](src/BundleSocial/Requests/UploadApi/UploadGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1UploadResponse](src/BundleSocial/Models/ApiV1UploadResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadGetListError](src/BundleSocial/Errors/UploadGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadInitResponse&gt; UploadInitLargeUpload(UploadInitLargeUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initialize large upload, you need to initialize a large upload if your file is larger than 90 MB.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadInitLargeUpload(new UploadInitLargeUploadRequest());
    // TODO: Handle 'response' of type ApiV1UploadInitResponse
}
catch (ApiException<UploadInitLargeUploadError> ex)
{
    if (ex.Error.TryGetApiV1UploadInit400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadInit400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadInitLargeUploadRequest](src/BundleSocial/Requests/UploadApi/UploadInitLargeUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadInitResponse](src/BundleSocial/Models/ApiV1UploadInitResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadInitLargeUploadError](src/BundleSocial/Errors/UploadInitLargeUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadMultipartInitResponse&gt; UploadInitMultipartUpload(UploadInitMultipartUploadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a multipart upload. Required above the 5 GiB single-request storage limit that /upload/init is bound by, and allowed for any smaller file too. Returns an uploadId plus one presigned URL per part; PUT each part, keep the ETag response header, then call complete with the full part list. Parts are 64 MiB each except the last, up to 10000 parts.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadInitMultipartUpload(new UploadInitMultipartUploadRequest());
    // TODO: Handle 'response' of type ApiV1UploadMultipartInitResponse
}
catch (ApiException<UploadInitMultipartUploadError> ex)
{
    if (ex.Error.TryGetApiV1UploadMultipartInit400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadMultipartInit400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadInitMultipartUploadRequest](src/BundleSocial/Requests/UploadApi/UploadInitMultipartUploadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartInitResponse](src/BundleSocial/Models/ApiV1UploadMultipartInitResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadInitMultipartUploadError](src/BundleSocial/Errors/UploadInitMultipartUploadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1UploadMultipartSignResponse&gt; UploadSignMultipartParts(UploadSignMultipartPartsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Issue fresh presigned URLs for parts whose original URLs expired mid-upload. Parts already uploaded keep their ETags — only re-upload the ones that failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UploadApi.UploadSignMultipartParts(new UploadSignMultipartPartsRequest());
    // TODO: Handle 'response' of type ApiV1UploadMultipartSignResponse
}
catch (ApiException<UploadSignMultipartPartsError> ex)
{
    if (ex.Error.TryGetApiV1UploadMultipartSign400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1UploadMultipartSign400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UploadSignMultipartPartsRequest](src/BundleSocial/Requests/UploadApi/UploadSignMultipartPartsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1UploadMultipartSignResponse](src/BundleSocial/Models/ApiV1UploadMultipartSignResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[UploadSignMultipartPartsError](src/BundleSocial/Errors/UploadSignMultipartPartsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ConversationApi

> Source: [ConversationApi](src/BundleSocial/Api/ConversationApi.cs)

<details>
<summary><code>Task&lt;ApiV1ConversationsArchiveResponse&gt; ConversationArchive(ConversationArchiveRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a conversation out of the active inbox. Incoming messages reopen it automatically.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationArchive(new ConversationArchiveRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsArchiveResponse
}
catch (ApiException<ConversationArchiveError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsArchive400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsArchive400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationArchiveRequest](src/BundleSocial/Requests/ConversationApi/ConversationArchiveRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsArchiveResponse](src/BundleSocial/Models/ApiV1ConversationsArchiveResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationArchiveError](src/BundleSocial/Errors/ConversationArchiveError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsResponse1&gt; ConversationGet(ConversationGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a single conversation by id, including the participant, the linked social account and its unread and status flags.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationGet(new ConversationGetRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsResponse1
}
catch (ApiException<ConversationGetError> ex)
{
    if (ex.Error.TryGetApiV1Conversations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Conversations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationGetRequest](src/BundleSocial/Requests/ConversationApi/ConversationGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse1](src/BundleSocial/Models/ApiV1ConversationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationGetError](src/BundleSocial/Errors/ConversationGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsResponse&gt; ConversationGetList(ConversationGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List conversations for a team, newest activity first. Filter by `socialAccountId`, `platform` and `status`. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationGetList(new ConversationGetListRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsResponse
}
catch (ApiException<ConversationGetListError> ex)
{
    if (ex.Error.TryGetApiV1Conversations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Conversations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationGetListRequest](src/BundleSocial/Requests/ConversationApi/ConversationGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse](src/BundleSocial/Models/ApiV1ConversationsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationGetListError](src/BundleSocial/Errors/ConversationGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsMessagesResponse&gt; ConversationGetMessages(ConversationGetMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the messages of a conversation. Pages walk backwards in time, while the messages inside a page are ordered oldest first, ready to render. Includes attachments, reactions and delivery state. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on the first page only.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationGetMessages(new ConversationGetMessagesRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse
}
catch (ApiException<ConversationGetMessagesError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsMessages400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsMessages400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationGetMessagesRequest](src/BundleSocial/Requests/ConversationApi/ConversationGetMessagesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesResponse](src/BundleSocial/Models/ApiV1ConversationsMessagesResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationGetMessagesError](src/BundleSocial/Errors/ConversationGetMessagesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsReadResponse&gt; ConversationMarkRead(ConversationMarkReadRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear the unread state of a conversation, optionally up to a specific message.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationMarkRead(new ConversationMarkReadRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsReadResponse
}
catch (ApiException<ConversationMarkReadError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsRead400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsRead400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationMarkReadRequest](src/BundleSocial/Requests/ConversationApi/ConversationMarkReadRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsReadResponse](src/BundleSocial/Models/ApiV1ConversationsReadResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationMarkReadError](src/BundleSocial/Errors/ConversationMarkReadError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsOpenResponse&gt; ConversationOpen(ConversationOpenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move an archived or closed conversation back into the active inbox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationOpen(new ConversationOpenRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsOpenResponse
}
catch (ApiException<ConversationOpenError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsOpen400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsOpen400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationOpenRequest](src/BundleSocial/Requests/ConversationApi/ConversationOpenRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsOpenResponse](src/BundleSocial/Models/ApiV1ConversationsOpenResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationOpenError](src/BundleSocial/Errors/ConversationOpenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsPrivateReplyResponse&gt; ConversationPrivateReply(ConversationPrivateReplyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a direct message in reply to a Facebook or Instagram comment we have already imported. Creates the conversation when none exists yet. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationPrivateReply(new ConversationPrivateReplyRequest());
    // TODO: Handle 'response' of type ApiV1ConversationsPrivateReplyResponse
}
catch (ApiException<ConversationPrivateReplyError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsPrivateReply400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsPrivateReply400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationPrivateReplyRequest](src/BundleSocial/Requests/ConversationApi/ConversationPrivateReplyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsPrivateReplyResponse](src/BundleSocial/Models/ApiV1ConversationsPrivateReplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationPrivateReplyError](src/BundleSocial/Errors/ConversationPrivateReplyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsMessagesReactionResponse&gt; ConversationReactMessage(ConversationReactMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationReactMessage(new ConversationReactMessageRequest
    {
        Id = "some example string",
        MessageId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsMessagesReactionResponse
}
catch (ApiException<ConversationReactMessageError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsMessagesReaction400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsMessagesReaction400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationReactMessageRequest](src/BundleSocial/Requests/ConversationApi/ConversationReactMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesReactionResponse](src/BundleSocial/Models/ApiV1ConversationsMessagesReactionResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationReactMessageError](src/BundleSocial/Errors/ConversationReactMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsMessagesResponse1&gt; ConversationSendMessage(ConversationSendMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to the participant of a conversation. The platform reply window must still be open. Returns 503 while messaging sending is temporarily disabled.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationSendMessage(new ConversationSendMessageRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsMessagesResponse1
}
catch (ApiException<ConversationSendMessageError> ex)
{
    if (ex.Error.TryGetApiV1ConversationsMessages400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1ConversationsMessages400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationSendMessageRequest](src/BundleSocial/Requests/ConversationApi/ConversationSendMessageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsMessagesResponse1](src/BundleSocial/Models/ApiV1ConversationsMessagesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationSendMessageError](src/BundleSocial/Errors/ConversationSendMessageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1ConversationsResponse1&gt; ConversationUpdate(ConversationUpdateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the status of a conversation. This is the general form of the archive and open endpoints, which move a conversation to one specific status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ConversationApi.ConversationUpdate(new ConversationUpdateRequest
    {
        Id = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1ConversationsResponse1
}
catch (ApiException<ConversationUpdateError> ex)
{
    if (ex.Error.TryGetApiV1Conversations400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1Conversations400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConversationUpdateRequest](src/BundleSocial/Requests/ConversationApi/ConversationUpdateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1ConversationsResponse1](src/BundleSocial/Models/ApiV1ConversationsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[ConversationUpdateError](src/BundleSocial/Errors/ConversationUpdateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PostCsv

> Source: [PostCsv](src/BundleSocial/Api/PostCsv.cs)

<details>
<summary><code>Task&lt;ApiV1PostCsvImportResponse&gt; PostCsvCreate(PostCsvCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload CSV for async bulk post import.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostCsv.PostCsvCreate(new PostCsvCreateRequest());
    // TODO: Handle 'response' of type ApiV1PostCsvImportResponse
}
catch (ApiException<PostCsvCreateError> ex)
{
    if (ex.Error.TryGetApiV1PostCsvImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostCsvImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCsvCreateRequest](src/BundleSocial/Requests/PostCsv/PostCsvCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse](src/BundleSocial/Models/ApiV1PostCsvImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCsvCreateError](src/BundleSocial/Errors/PostCsvCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostCsvImportResponse&gt; PostCsvGetById(PostCsvGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a single CSV import with its summary counts and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostCsv.PostCsvGetById(new PostCsvGetByIdRequest { ImportId = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostCsvImportResponse
}
catch (ApiException<PostCsvGetByIdError> ex)
{
    if (ex.Error.TryGetApiV1PostCsvImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostCsvImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCsvGetByIdRequest](src/BundleSocial/Requests/PostCsv/PostCsvGetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse](src/BundleSocial/Models/ApiV1PostCsvImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCsvGetByIdError](src/BundleSocial/Errors/PostCsvGetByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostCsvImportResponse1&gt; PostCsvGetList(PostCsvGetListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your team's bulk CSV post imports with pagination, so you can see what was uploaded and when.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostCsv.PostCsvGetList(new PostCsvGetListRequest());
    // TODO: Handle 'response' of type ApiV1PostCsvImportResponse1
}
catch (ApiException<PostCsvGetListError> ex)
{
    if (ex.Error.TryGetApiV1PostCsvImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostCsvImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCsvGetListRequest](src/BundleSocial/Requests/PostCsv/PostCsvGetListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportResponse1](src/BundleSocial/Models/ApiV1PostCsvImportResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCsvGetListError](src/BundleSocial/Errors/PostCsvGetListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostCsvImportRowsResponse&gt; PostCsvGetRows(PostCsvGetRowsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the per-row outcome of a CSV import with pagination, showing which rows created posts and which failed validation and why. Use it to report errors back to the person who uploaded the file.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostCsv.PostCsvGetRows(new PostCsvGetRowsRequest { ImportId = "some example string" });
    // TODO: Handle 'response' of type ApiV1PostCsvImportRowsResponse
}
catch (ApiException<PostCsvGetRowsError> ex)
{
    if (ex.Error.TryGetApiV1PostCsvImportRows400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostCsvImportRows400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCsvGetRowsRequest](src/BundleSocial/Requests/PostCsv/PostCsvGetRowsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportRowsResponse](src/BundleSocial/Models/ApiV1PostCsvImportRowsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCsvGetRowsError](src/BundleSocial/Errors/PostCsvGetRowsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostCsvImportStatusResponse&gt; PostCsvGetStatus(PostCsvGetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded, and failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostCsv.PostCsvGetStatus(new PostCsvGetStatusRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1PostCsvImportStatusResponse
}
catch (ApiException<PostCsvGetStatusError> ex)
{
    if (ex.Error.TryGetApiV1PostCsvImportStatus400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostCsvImportStatus400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostCsvGetStatusRequest](src/BundleSocial/Requests/PostCsv/PostCsvGetStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostCsvImportStatusResponse](src/BundleSocial/Models/ApiV1PostCsvImportStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostCsvGetStatusError](src/BundleSocial/Errors/PostCsvGetStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PostImport

> Source: [PostImport](src/BundleSocial/Api/PostImport.cs)

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportResponse&gt; PostImportCreate(PostImportCreateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Kick off an asynchronous import that backfills posts a social account published before it was connected to bundle.social, together with their analytics. Use it to get historical reporting from day one.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportCreate(new PostImportCreateRequest());
    // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
}
catch (ApiException<PostImportCreateError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportCreateRequest](src/BundleSocial/Requests/PostImport/PostImportCreateRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse](src/BundleSocial/Models/ApiV1PostHistoryImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportCreateError](src/BundleSocial/Errors/PostImportCreateError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportPostsResponse1&gt; PostImportDeleteImportedPosts(PostImportDeleteImportedPostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import capacity.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportDeleteImportedPosts(new PostImportDeleteImportedPostsRequest());
    // TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse1
}
catch (ApiException<PostImportDeleteImportedPostsError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImportPosts400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImportPosts400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportDeleteImportedPostsRequest](src/BundleSocial/Requests/PostImport/PostImportDeleteImportedPostsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse1](src/BundleSocial/Models/ApiV1PostHistoryImportPostsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportDeleteImportedPostsError](src/BundleSocial/Errors/PostImportDeleteImportedPostsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportResponse&gt; PostImportGetById(PostImportGetByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check the status, progress, and result of a single post history import job.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportGetById(new PostImportGetByIdRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse
}
catch (ApiException<PostImportGetByIdError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportGetByIdRequest](src/BundleSocial/Requests/PostImport/PostImportGetByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse](src/BundleSocial/Models/ApiV1PostHistoryImportResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportGetByIdError](src/BundleSocial/Errors/PostImportGetByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportPostsResponse&gt; PostImportGetImportedPosts(PostImportGetImportedPostsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the historical posts pulled in by an import, with their analytics and your remaining import capacity. Use it to report on performance from before the account was connected.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportGetImportedPosts(new PostImportGetImportedPostsRequest
    {
        TeamId = "some example string",
        SocialAccountType = SocialAccountTypeBundleSocialPostImportApi.Facebook,
    });
    // TODO: Handle 'response' of type ApiV1PostHistoryImportPostsResponse
}
catch (ApiException<PostImportGetImportedPostsError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImportPosts400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImportPosts400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportGetImportedPostsRequest](src/BundleSocial/Requests/PostImport/PostImportGetImportedPostsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportPostsResponse](src/BundleSocial/Models/ApiV1PostHistoryImportPostsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportGetImportedPostsError](src/BundleSocial/Errors/PostImportGetImportedPostsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportResponse1&gt; PostImportGetStatus(PostImportGetStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or failed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportGetStatus(new PostImportGetStatusRequest
    {
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1PostHistoryImportResponse1
}
catch (ApiException<PostImportGetStatusError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImport400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImport400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportGetStatusRequest](src/BundleSocial/Requests/PostImport/PostImportGetStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportResponse1](src/BundleSocial/Models/ApiV1PostHistoryImportResponse1.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportGetStatusError](src/BundleSocial/Errors/PostImportGetStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1PostHistoryImportRetryResponse&gt; PostImportRetryImport(PostImportRetryImportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-run a post history import that failed, for example after a token expired or the platform rate-limited the request.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostImport.PostImportRetryImport(new PostImportRetryImportRequest
    {
        ImportId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1PostHistoryImportRetryResponse
}
catch (ApiException<PostImportRetryImportError> ex)
{
    if (ex.Error.TryGetApiV1PostHistoryImportRetry400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1PostHistoryImportRetry400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostImportRetryImportRequest](src/BundleSocial/Requests/PostImport/PostImportRetryImportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1PostHistoryImportRetryResponse](src/BundleSocial/Models/ApiV1PostHistoryImportRetryResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[PostImportRetryImportError](src/BundleSocial/Errors/PostImportRetryImportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SocialAccountApi

> Source: [SocialAccountApi](src/BundleSocial/Api/SocialAccountApi.cs)

<details>
<summary><code>Task&lt;ApiV1SocialAccountConnectResponse&gt; SocialAccountConnect(SocialAccountConnectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate OAuth URL for social account connection. Redirect user to this URL to connect social account. For Mastodon and Bluesky an unusable `serverUrl` returns 400 with the reason, while a reachable-but-failing instance returns 502.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountConnect(new SocialAccountConnectRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountConnectResponse
}
catch (ApiException<SocialAccountConnectError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountConnect400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountConnect400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountConnectRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountConnectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountConnectResponse](src/BundleSocial/Models/ApiV1SocialAccountConnectResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountConnectError](src/BundleSocial/Errors/SocialAccountConnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountConnectionCheckResponse&gt; SocialAccountConnectionCheck(SocialAccountConnectionCheckRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Force an immediate check of whether a social account's authorization is still valid, instead of waiting for the scheduled check. Use it to surface expired tokens before a scheduled post fails.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountConnectionCheck(
        new SocialAccountConnectionCheckRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountConnectionCheckResponse
}
catch (ApiException<SocialAccountConnectionCheckError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountConnectionCheck400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountConnectionCheck400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountConnectionCheckRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountConnectionCheckRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountConnectionCheckResponse](src/BundleSocial/Models/ApiV1SocialAccountConnectionCheckResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountConnectionCheckError](src/BundleSocial/Errors/SocialAccountConnectionCheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;ApiV1SocialAccountCopyResponse&gt;&gt; SocialAccountCopy(SocialAccountCopyRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Copy connected social accounts from one team to another so you can reuse an existing authorization without sending the user through OAuth again.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountCopy(new SocialAccountCopyRequest());
    // TODO: Handle 'response' of type IReadOnlyList<ApiV1SocialAccountCopyResponse>
}
catch (ApiException<SocialAccountCopyError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountCopy400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountCopy400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountCopyRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountCopyRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[ApiV1SocialAccountCopyResponse](src/BundleSocial/Models/ApiV1SocialAccountCopyResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountCopyError](src/BundleSocial/Errors/SocialAccountCopyError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountCreatePortalLinkResponse&gt; SocialAccountCreatePortalLink(SocialAccountCreatePortalLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Simplify connect flow. Create a portal link which can be used to manage connected social accounts directly on bundle.social platform without implementing the logic on your side.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountCreatePortalLink(
        new SocialAccountCreatePortalLinkRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountCreatePortalLinkResponse
}
catch (ApiException<SocialAccountCreatePortalLinkError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountCreatePortalLink400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountCreatePortalLink400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountCreatePortalLinkRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountCreatePortalLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountCreatePortalLinkResponse](src/BundleSocial/Models/ApiV1SocialAccountCreatePortalLinkResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountCreatePortalLinkError](src/BundleSocial/Errors/SocialAccountCreatePortalLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountMessagingDisableResponse&gt; SocialAccountDisableMessaging(SocialAccountDisableMessagingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop processing DMs for the account and narrow its Meta webhook subscription to what other features still need. Idempotent. Processing stops immediately; if Meta does not confirm the change the status is DISABLE_PENDING and the call returns 502, so it can be retried.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountDisableMessaging(
        new SocialAccountDisableMessagingRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountMessagingDisableResponse
}
catch (ApiException<SocialAccountDisableMessagingError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountMessagingDisable400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountMessagingDisable400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountDisableMessagingRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountDisableMessagingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountMessagingDisableResponse](src/BundleSocial/Models/ApiV1SocialAccountMessagingDisableResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountDisableMessagingError](src/BundleSocial/Errors/SocialAccountDisableMessagingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountDisconnectResponse&gt; SocialAccountDisconnect(SocialAccountDisconnectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This will remove the social account from all the scheduled posts too.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountDisconnect(new SocialAccountDisconnectRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountDisconnectResponse
}
catch (ApiException<SocialAccountDisconnectError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountDisconnect400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountDisconnect400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountDisconnectRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountDisconnectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountDisconnectResponse](src/BundleSocial/Models/ApiV1SocialAccountDisconnectResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountDisconnectError](src/BundleSocial/Errors/SocialAccountDisconnectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountMessagingEnableResponse&gt; SocialAccountEnableMessaging(SocialAccountEnableMessagingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subscribe the team's Facebook page or Instagram account to Meta DM webhooks and start processing its messages. Connecting or re-authorizing an account never does this on its own. Idempotent. Returns 403 when the organization has not been granted Instagram and Facebook direct messages and automations (email contact@bundle.social to request it), 400 when the account lacks the messaging permissions (reconnect it), and 502 when Meta rejects the subscription; the account then stays DISABLED.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountEnableMessaging(
        new SocialAccountEnableMessagingRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountMessagingEnableResponse
}
catch (ApiException<SocialAccountEnableMessagingError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountMessagingEnable400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountMessagingEnable400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountEnableMessagingRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountEnableMessagingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountMessagingEnableResponse](src/BundleSocial/Models/ApiV1SocialAccountMessagingEnableResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountEnableMessagingError](src/BundleSocial/Errors/SocialAccountEnableMessagingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountToDeleteResponse&gt; SocialAccountGetAccountsToDelete(SocialAccountGetAccountsToDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List social accounts queued for deletion, with pagination. Use it to warn users before an account and its data are permanently removed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountGetAccountsToDelete(
        new SocialAccountGetAccountsToDeleteRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountToDeleteResponse
}
catch (ApiException<SocialAccountGetAccountsToDeleteError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountToDelete400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountToDelete400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountGetAccountsToDeleteRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountGetAccountsToDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountToDeleteResponse](src/BundleSocial/Models/ApiV1SocialAccountToDeleteResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountGetAccountsToDeleteError](src/BundleSocial/Errors/SocialAccountGetAccountsToDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountByTypeResponse&gt; SocialAccountGetByType(SocialAccountGetByTypeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Look up a team's connected account for a specific platform without listing every account first. Useful when you already know which platform you want to publish to.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountGetByType(new SocialAccountGetByTypeRequest
    {
        Type = TypeEnum.Tiktok,
        TeamId = "some example string",
    });
    // TODO: Handle 'response' of type ApiV1SocialAccountByTypeResponse
}
catch (ApiException<SocialAccountGetByTypeError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountByType400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountByType400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountGetByTypeRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountGetByTypeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountByTypeResponse](src/BundleSocial/Models/ApiV1SocialAccountByTypeResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountGetByTypeError](src/BundleSocial/Errors/SocialAccountGetByTypeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountProfileRefreshResponse&gt; SocialAccountProfileRefresh(SocialAccountProfileRefreshRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull the latest profile name, handle, and avatar from the platform for a connected account. Use it to keep your own UI in sync after a user renames their profile.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountProfileRefresh(new SocialAccountProfileRefreshRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountProfileRefreshResponse
}
catch (ApiException<SocialAccountProfileRefreshError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountProfileRefresh400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountProfileRefresh400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountProfileRefreshRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountProfileRefreshRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountProfileRefreshResponse](src/BundleSocial/Models/ApiV1SocialAccountProfileRefreshResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountProfileRefreshError](src/BundleSocial/Errors/SocialAccountProfileRefreshError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountRefreshChannelsResponse&gt; SocialAccountRefreshChannels(SocialAccountRefreshChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refresh channels saved on socialAccount.channels. This is only needed for some social account types - Reddit, Discord, Slack, Pinterest.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountRefreshChannels(
        new SocialAccountRefreshChannelsRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountRefreshChannelsResponse
}
catch (ApiException<SocialAccountRefreshChannelsError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountRefreshChannels400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountRefreshChannels400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountRefreshChannelsRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountRefreshChannelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountRefreshChannelsResponse](src/BundleSocial/Models/ApiV1SocialAccountRefreshChannelsResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountRefreshChannelsError](src/BundleSocial/Errors/SocialAccountRefreshChannelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountSetChannelResponse&gt; SocialAccountSetChannel(SocialAccountSetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Needed only for some social account types - Youtube, Instagram, Facebook and Linkedin.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountSetChannel(new SocialAccountSetChannelRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountSetChannelResponse
}
catch (ApiException<SocialAccountSetChannelError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountSetChannel400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountSetChannel400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountSetChannelRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountSetChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountSetChannelResponse](src/BundleSocial/Models/ApiV1SocialAccountSetChannelResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountSetChannelError](src/BundleSocial/Errors/SocialAccountSetChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiV1SocialAccountUnsetChannelResponse&gt; SocialAccountUnsetChannel(SocialAccountUnsetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Clear selected channel while keeping social account authorization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.SocialAccountApi.SocialAccountUnsetChannel(new SocialAccountUnsetChannelRequest());
    // TODO: Handle 'response' of type ApiV1SocialAccountUnsetChannelResponse
}
catch (ApiException<SocialAccountUnsetChannelError> ex)
{
    if (ex.Error.TryGetApiV1SocialAccountUnsetChannel400Error1(out var error))
    {
        // TODO: Handle 'error' of type ApiV1SocialAccountUnsetChannel400Error1
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SocialAccountUnsetChannelRequest](src/BundleSocial/Requests/SocialAccountApi/SocialAccountUnsetChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiV1SocialAccountUnsetChannelResponse](src/BundleSocial/Models/ApiV1SocialAccountUnsetChannelResponse.cs)</code>

**OnError**: <code>[ApiException](src/BundleSocial/Core/Exceptions/ApiException.cs)&lt;[SocialAccountUnsetChannelError](src/BundleSocial/Errors/SocialAccountUnsetChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

