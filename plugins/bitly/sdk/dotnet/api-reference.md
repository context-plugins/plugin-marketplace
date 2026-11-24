# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [BitlyClient](src/Bitly/BitlyClient.cs)

## Apps

> Source: [Apps](src/Bitly/Api/Apps.cs)

<details>
<summary><code>Task&lt;OAuthApp&gt; GetOAuthApp(GetOAuthAppRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the details for the provided OAuth App client ID

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Apps.GetOAuthApp(new GetOAuthAppRequest
    {
        ClientId = "1234a56b789cd0e123456fg7h8901j123km45n6p",
    });
    // TODO: Handle 'response' of type OAuthApp
}
catch (ApiException<GetOAuthAppError> ex)
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

<code>[GetOAuthAppRequest](src/Bitly/Requests/Apps/GetOAuthAppRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OAuthApp](src/Bitly/Models/OAuthApp.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetOAuthAppError](src/Bitly/Errors/GetOAuthAppError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BsDs

> Source: [BsDs](src/Bitly/Api/BsDs.cs)

<details>
<summary><code>Task&lt;BsDsResponse&gt; GetBsDs(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all Branded Short Domains

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BsDs.GetBsDs();
    // TODO: Handle 'response' of type BsDsResponse
}
catch (ApiException<GetBsDsError> ex)
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

**OnSuccess**: <code>[BsDsResponse](src/Bitly/Models/BsDsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetBsDsError](src/Bitly/Errors/GetBsDsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BitlinksApi

> Source: [BitlinksApi](src/Bitly/Api/BitlinksApi.cs)

<details>
<summary><code>Task&lt;ShortenBitlinkBody&gt; CreateBitlink(CreateBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.CreateBitlink(new CreateBitlinkRequest
    {
        Body = new Shorten { LongUrl = "some example string" },
    });
    // TODO: Handle 'response' of type ShortenBitlinkBody
}
catch (ApiException<CreateBitlinkError> ex)
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

<code>[CreateBitlinkRequest](src/Bitly/Requests/BitlinksApi/CreateBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShortenBitlinkBody](src/Bitly/Models/ShortenBitlinkBody.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateBitlinkError](src/Bitly/Errors/CreateBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkBody&gt; CreateFullBitlink(CreateFullBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Converts a long url to a Bitlink and sets additional parameters. You may see errors returned from this endpoint - "BRANDED_LINK_MONTHLY_LIMIT_EXCEEDED" occurs if you have shortened more links than your account is configured for for the month, and "DNS_CONFIGURATION_ERROR" occurs if you are attempting to shorten links against a custom domain which doesn't have DNS properly configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.CreateFullBitlink(new CreateFullBitlinkRequest
    {
        Body = new FullShorten
        {
            LongUrl = "https://dev.bitly.com",
            Domain = "yourdomain.co",
            GroupGuid = "Ba1bc23dE4F",
            Keyword = "new-link",
        },
    });
    // TODO: Handle 'response' of type BitlinkBody
}
catch (ApiException<CreateFullBitlinkError> ex)
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

<code>[CreateFullBitlinkRequest](src/Bitly/Requests/BitlinksApi/CreateFullBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkBody](src/Bitly/Models/BitlinkBody.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateFullBitlinkError](src/Bitly/Errors/CreateFullBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LinkDeletionResponse&gt; DeleteBitlink(DeleteBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete an unedited hash Bitlink.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.DeleteBitlink(new DeleteBitlinkRequest { Bitlink = "bit.ly/12a4b6c" });
    // TODO: Handle 'response' of type LinkDeletionResponse
}
catch (ApiException<DeleteBitlinkError> ex)
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

<code>[DeleteBitlinkRequest](src/Bitly/Requests/BitlinksApi/DeleteBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LinkDeletionResponse](src/Bitly/Models/LinkDeletionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[DeleteBitlinkError](src/Bitly/Errors/DeleteBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExpandedBitlink&gt; ExpandBitlink(ExpandBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the short link and long URL for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.ExpandBitlink(new ExpandBitlinkRequest { Body = new ExpandBitlink() });
    // TODO: Handle 'response' of type ExpandedBitlink
}
catch (ApiException<ExpandBitlinkError> ex)
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

<code>[ExpandBitlinkRequest](src/Bitly/Requests/BitlinksApi/ExpandBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExpandedBitlink](src/Bitly/Models/ExpandedBitlink.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[ExpandBitlinkError](src/Bitly/Errors/ExpandBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkBody&gt; GetBitlink(GetBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetBitlink(new GetBitlinkRequest { Bitlink = "bit.ly/12a4b6c" });
    // TODO: Handle 'response' of type BitlinkBody
}
catch (ApiException<GetBitlinkError> ex)
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

<code>[GetBitlinkRequest](src/Bitly/Requests/BitlinksApi/GetBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkBody](src/Bitly/Models/BitlinkBody.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetBitlinkError](src/Bitly/Errors/GetBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Bitlinks&gt; GetBitlinksByGroup(GetBitlinksByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated collection of Bitlinks for a group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetBitlinksByGroup(new GetBitlinksByGroupRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Size = 10,
        Query = "api",
        HostnamePathQuery = "dev.bitly.com/api-reference",
        CreatedBefore = 1694529902,
        CreatedAfter = 1694529902,
        Archived = Archived.Both,
        Deeplinks = Deeplinks.Both,
        DomainDeeplinks = DomainDeeplinks.Both,
        CampaignGuid = "Ca1bcd2EFGh",
        ChannelGuid = "Ha1bc2DefGh",
        CustomBitlink = CustomBitlink.Both,
        HasQrCodes = HasQrCodes.Both,
        Tags = ["bitly", "api"],
        LaunchpadIds = ["M1234567890"],
        EncodingLogin = ["chauncey"],
    });
    // TODO: Handle 'response' of type Bitlinks
}
catch (ApiException<GetBitlinksByGroupError> ex)
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

<code>[GetBitlinksByGroupRequest](src/Bitly/Requests/BitlinksApi/GetBitlinksByGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Bitlinks](src/Bitly/Models/Bitlinks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetBitlinksByGroupError](src/Bitly/Errors/GetBitlinksByGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Clicks&gt; GetClicksForBitlink(GetClicksForBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link in an array based on a date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetClicksForBitlink(new GetClicksForBitlinkRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type Clicks
}
catch (ApiException<GetClicksForBitlinkError> ex)
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

<code>[GetClicksForBitlinkRequest](src/Bitly/Requests/BitlinksApi/GetClicksForBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Clicks](src/Bitly/Models/Clicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetClicksForBitlinkError](src/Bitly/Errors/GetClicksForBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClicksSummary&gt; GetClicksSummaryForBitlink(GetClicksSummaryForBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link rolled up into a single field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetClicksSummaryForBitlink(new GetClicksSummaryForBitlinkRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClicksSummary
}
catch (ApiException<GetClicksSummaryForBitlinkError> ex)
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

<code>[GetClicksSummaryForBitlinkRequest](src/Bitly/Requests/BitlinksApi/GetClicksSummaryForBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClicksSummary](src/Bitly/Models/ClicksSummary.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetClicksSummaryForBitlinkError](src/Bitly/Errors/GetClicksSummaryForBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TotalEngagements&gt; GetEngagements(GetEngagementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of engagement counts for the specified link. The array is comprised of button click, click and scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetEngagements(new GetEngagementsRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type TotalEngagements
}
catch (ApiException<GetEngagementsError> ex)
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

<code>[GetEngagementsRequest](src/Bitly/Requests/BitlinksApi/GetEngagementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TotalEngagements](src/Bitly/Models/TotalEngagements.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetEngagementsError](src/Bitly/Errors/GetEngagementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TotalEngagementsSummary&gt; GetEngagementsSummary(GetEngagementsSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the engagement counts for the specified link rolled up into a single field.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetEngagementsSummary(new GetEngagementsSummaryRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type TotalEngagementsSummary
}
catch (ApiException<GetEngagementsSummaryError> ex)
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

<code>[GetEngagementsSummaryRequest](src/Bitly/Requests/BitlinksApi/GetEngagementsSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TotalEngagementsSummary](src/Bitly/Models/TotalEngagementsSummary.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetEngagementsSummaryError](src/Bitly/Errors/GetEngagementsSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CityMetrics&gt; GetMetricsForBitlinkByCities(GetMetricsForBitlinkByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of click traffic for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByCities(new GetMetricsForBitlinkByCitiesRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type CityMetrics
}
catch (ApiException<GetMetricsForBitlinkByCitiesError> ex)
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

<code>[GetMetricsForBitlinkByCitiesRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByCitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CityMetrics](src/Bitly/Models/CityMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByCitiesError](src/Bitly/Errors/GetMetricsForBitlinkByCitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetrics&gt; GetMetricsForBitlinkByCountries(GetMetricsForBitlinkByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of click traffic for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByCountries(new GetMetricsForBitlinkByCountriesRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetrics
}
catch (ApiException<GetMetricsForBitlinkByCountriesError> ex)
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

<code>[GetMetricsForBitlinkByCountriesRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetrics](src/Bitly/Models/ClickMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByCountriesError](src/Bitly/Errors/GetMetricsForBitlinkByCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeviceMetrics&gt; GetMetricsForBitlinkByDevices(GetMetricsForBitlinkByDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByDevices(new GetMetricsForBitlinkByDevicesRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type DeviceMetrics
}
catch (ApiException<GetMetricsForBitlinkByDevicesError> ex)
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

<code>[GetMetricsForBitlinkByDevicesRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByDevicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceMetrics](src/Bitly/Models/DeviceMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByDevicesError](src/Bitly/Errors/GetMetricsForBitlinkByDevicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetrics&gt; GetMetricsForBitlinkByReferrerName(GetMetricsForBitlinkByReferrerNameRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByReferrerName(
        new GetMetricsForBitlinkByReferrerNameRequest
        {
            Bitlink = "bit.ly/12a4b6c",
            Unit = TimeUnit.Month,
            Units = 1,
            Size = 10,
            UnitReference = "2006-01-02T15:04:05-0700",
        });
    // TODO: Handle 'response' of type ClickMetrics
}
catch (ApiException<GetMetricsForBitlinkByReferrerNameError> ex)
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

<code>[GetMetricsForBitlinkByReferrerNameRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrerNameRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetrics](src/Bitly/Models/ClickMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByReferrerNameError](src/Bitly/Errors/GetMetricsForBitlinkByReferrerNameError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetrics&gt; GetMetricsForBitlinkByReferrers(GetMetricsForBitlinkByReferrersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns referrer click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByReferrers(new GetMetricsForBitlinkByReferrersRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetrics
}
catch (ApiException<GetMetricsForBitlinkByReferrersError> ex)
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

<code>[GetMetricsForBitlinkByReferrersRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetrics](src/Bitly/Models/ClickMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByReferrersError](src/Bitly/Errors/GetMetricsForBitlinkByReferrersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ReferrersByDomains&gt; GetMetricsForBitlinkByReferrersByDomains(GetMetricsForBitlinkByReferrersByDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics grouped by referrers for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByReferrersByDomains(
        new GetMetricsForBitlinkByReferrersByDomainsRequest
        {
            Bitlink = "bit.ly/12a4b6c",
            Unit = TimeUnit.Month,
            Units = 1,
            Size = 10,
            UnitReference = "2006-01-02T15:04:05-0700",
        });
    // TODO: Handle 'response' of type ReferrersByDomains
}
catch (ApiException<GetMetricsForBitlinkByReferrersByDomainsError> ex)
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

<code>[GetMetricsForBitlinkByReferrersByDomainsRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferrersByDomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReferrersByDomains](src/Bitly/Models/ReferrersByDomains.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByReferrersByDomainsError](src/Bitly/Errors/GetMetricsForBitlinkByReferrersByDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetrics&gt; GetMetricsForBitlinkByReferringDomains(GetMetricsForBitlinkByReferringDomainsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the referring domain click counts for the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetMetricsForBitlinkByReferringDomains(
        new GetMetricsForBitlinkByReferringDomainsRequest
        {
            Bitlink = "bit.ly/12a4b6c",
            Unit = TimeUnit.Month,
            Units = 1,
            Size = 10,
            UnitReference = "2006-01-02T15:04:05-0700",
        });
    // TODO: Handle 'response' of type ClickMetrics
}
catch (ApiException<GetMetricsForBitlinkByReferringDomainsError> ex)
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

<code>[GetMetricsForBitlinkByReferringDomainsRequest](src/Bitly/Requests/BitlinksApi/GetMetricsForBitlinkByReferringDomainsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetrics](src/Bitly/Models/ClickMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetMetricsForBitlinkByReferringDomainsError](src/Bitly/Errors/GetMetricsForBitlinkByReferringDomainsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SortedLinks&gt; GetSortedBitlinks(GetSortedBitlinksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Bitlinks sorted by group. The list of custom bitlinks has newest entries first.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetSortedBitlinks(new GetSortedBitlinksRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Sort = Sort.Clicks,
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
        Size = 10,
    });
    // TODO: Handle 'response' of type SortedLinks
}
catch (ApiException<GetSortedBitlinksError> ex)
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

<code>[GetSortedBitlinksRequest](src/Bitly/Requests/BitlinksApi/GetSortedBitlinksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SortedLinks](src/Bitly/Models/SortedLinks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetSortedBitlinksError](src/Bitly/Errors/GetSortedBitlinksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TopLinksAndQrCodes&gt; GetTopLinksAndQrCodesByEngagements(GetTopLinksAndQrCodesByEngagementsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the bitlinks and decoupled QR codes in a group with the most engagements over the requested time window, ranked together in descending order by engagement count. Bitlinks and decoupled QR codes are returned in separate lists; `sorted_links` preserves the unified descending-by-count ordering across both, with each entry's id referencing either a bitlink or a QR code guid.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.GetTopLinksAndQrCodesByEngagements(
        new GetTopLinksAndQrCodesByEngagementsRequest
        {
            GroupGuid = "Ba1bc23dE4F",
            Unit = TimeUnit.Month,
            Units = 1,
            UnitReference = "2006-01-02T15:04:05-0700",
            Size = 10,
        });
    // TODO: Handle 'response' of type TopLinksAndQrCodes
}
catch (ApiException<GetTopLinksAndQrCodesByEngagementsError> ex)
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

<code>[GetTopLinksAndQrCodesByEngagementsRequest](src/Bitly/Requests/BitlinksApi/GetTopLinksAndQrCodesByEngagementsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TopLinksAndQrCodes](src/Bitly/Models/TopLinksAndQrCodes.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetTopLinksAndQrCodesByEngagementsError](src/Bitly/Errors/GetTopLinksAndQrCodesByEngagementsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkBody&gt; UpdateBitlink(UpdateBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates fields in the specified link. To redirect the link (i.e. to update the Long URL), use the long_url parameter. This will always charge an encode limit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.UpdateBitlink(new UpdateBitlinkRequest
    {
        Bitlink = "bit.ly/12a4b6c",
        Body = new BitlinkUpdateBody { LongUrl = "https://www.newdestination.com" },
    });
    // TODO: Handle 'response' of type BitlinkBody
}
catch (ApiException<UpdateBitlinkError> ex)
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

<code>[UpdateBitlinkRequest](src/Bitly/Requests/BitlinksApi/UpdateBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkBody](src/Bitly/Models/BitlinkBody.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateBitlinkError](src/Bitly/Errors/UpdateBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BulkUpdate&gt; UpdateBitlinksByGroup(UpdateBitlinksByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags or archive up to 100 links at a time; The response includes a list of bitlink ids that were updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BitlinksApi.UpdateBitlinksByGroup(new UpdateBitlinksByGroupRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Body = new BulkUpdateRequest { Action = ActionEnum.Archive },
    });
    // TODO: Handle 'response' of type BulkUpdate
}
catch (ApiException<UpdateBitlinksByGroupError> ex)
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

<code>[UpdateBitlinksByGroupRequest](src/Bitly/Requests/BitlinksApi/UpdateBitlinksByGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkUpdate](src/Bitly/Models/BulkUpdate.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateBitlinksByGroupError](src/Bitly/Errors/UpdateBitlinksByGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CampaignsApi

> Source: [CampaignsApi](src/Bitly/Api/CampaignsApi.cs)

<details>
<summary><code>Task&lt;Campaign&gt; CreateCampaign(CreateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.CreateCampaign(new CreateCampaignRequest { Body = new CampaignModify() });
    // TODO: Handle 'response' of type Campaign
}
catch (ApiException<CreateCampaignError> ex)
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

<code>[CreateCampaignRequest](src/Bitly/Requests/CampaignsApi/CreateCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](src/Bitly/Models/Campaign.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateCampaignError](src/Bitly/Errors/CreateCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Channel&gt; CreateChannel(CreateChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.CreateChannel(new CreateChannelRequest { Body = new ChannelModify() });
    // TODO: Handle 'response' of type Channel
}
catch (ApiException<CreateChannelError> ex)
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

<code>[CreateChannelRequest](src/Bitly/Requests/CampaignsApi/CreateChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/Bitly/Models/Channel.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateChannelError](src/Bitly/Errors/CreateChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Campaign&gt; GetCampaign(GetCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a campaign.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.GetCampaign(new GetCampaignRequest { CampaignGuid = "Ca1bcd2EFGh" });
    // TODO: Handle 'response' of type Campaign
}
catch (ApiException<GetCampaignError> ex)
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

<code>[GetCampaignRequest](src/Bitly/Requests/CampaignsApi/GetCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](src/Bitly/Models/Campaign.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetCampaignError](src/Bitly/Errors/GetCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Campaigns&gt; GetCampaigns(GetCampaignsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the campaigns for the current authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.GetCampaigns(new GetCampaignsRequest { GroupGuid = "Ba1bc23dE4F" });
    // TODO: Handle 'response' of type Campaigns
}
catch (ApiException<GetCampaignsError> ex)
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

<code>[GetCampaignsRequest](src/Bitly/Requests/CampaignsApi/GetCampaignsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaigns](src/Bitly/Models/Campaigns.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetCampaignsError](src/Bitly/Errors/GetCampaignsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Channel&gt; GetChannel(GetChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a channel's details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.GetChannel(new GetChannelRequest { ChannelGuid = "Ha1bc2DefGh" });
    // TODO: Handle 'response' of type Channel
}
catch (ApiException<GetChannelError> ex)
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

<code>[GetChannelRequest](src/Bitly/Requests/CampaignsApi/GetChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/Bitly/Models/Channel.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetChannelError](src/Bitly/Errors/GetChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Channels&gt; GetChannels(GetChannelsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the channels available to a user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.GetChannels(new GetChannelsRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        CampaignGuid = "Ca1bcd2EFGh",
    });
    // TODO: Handle 'response' of type Channels
}
catch (ApiException<GetChannelsError> ex)
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

<code>[GetChannelsRequest](src/Bitly/Requests/CampaignsApi/GetChannelsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channels](src/Bitly/Models/Channels.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetChannelsError](src/Bitly/Errors/GetChannelsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Campaign&gt; UpdateCampaign(UpdateCampaignRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a campaign's details.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.UpdateCampaign(new UpdateCampaignRequest
    {
        CampaignGuid = "Ca1bcd2EFGh",
        Body = new CampaignModify(),
    });
    // TODO: Handle 'response' of type Campaign
}
catch (ApiException<UpdateCampaignError> ex)
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

<code>[UpdateCampaignRequest](src/Bitly/Requests/CampaignsApi/UpdateCampaignRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Campaign](src/Bitly/Models/Campaign.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateCampaignError](src/Bitly/Errors/UpdateCampaignError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Channel&gt; UpdateChannel(UpdateChannelRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing channel.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CampaignsApi.UpdateChannel(new UpdateChannelRequest
    {
        ChannelGuid = "Ha1bc2DefGh",
        Body = new ChannelModify(),
    });
    // TODO: Handle 'response' of type Channel
}
catch (ApiException<UpdateChannelError> ex)
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

<code>[UpdateChannelRequest](src/Bitly/Requests/CampaignsApi/UpdateChannelRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Channel](src/Bitly/Models/Channel.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateChannelError](src/Bitly/Errors/UpdateChannelError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomBitlinks

> Source: [CustomBitlinks](src/Bitly/Api/CustomBitlinks.cs)

<details>
<summary><code>Task&lt;CustomBitlinkBitlyCustomBitlinksApi&gt; AddCustomBitlink(AddCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a keyword (or "custom back-half") to a Bitlink with a Custom Domain (domains must match). This endpoint can also be used for initial redirects to a link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomBitlinks.AddCustomBitlink(new AddCustomBitlinkRequest
    {
        Body = new AddCustomBitlink(),
    });
    // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
}
catch (ApiException<AddCustomBitlinkError> ex)
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

<code>[AddCustomBitlinkRequest](src/Bitly/Requests/CustomBitlinks/AddCustomBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[AddCustomBitlinkError](src/Bitly/Errors/AddCustomBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Clicks&gt; GetClicksForCustomBitlink(GetClicksForCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the click counts for the specified link. This returns an array with clicks based on a date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomBitlinks.GetClicksForCustomBitlink(new GetClicksForCustomBitlinkRequest
    {
        CustomBitlink = "chauncey.ly/chauncey",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type Clicks
}
catch (ApiException<GetClicksForCustomBitlinkError> ex)
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

<code>[GetClicksForCustomBitlinkRequest](src/Bitly/Requests/CustomBitlinks/GetClicksForCustomBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Clicks](src/Bitly/Models/Clicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetClicksForCustomBitlinkError](src/Bitly/Errors/GetClicksForCustomBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomBitlinkBitlyCustomBitlinksApi&gt; GetCustomBitlink(GetCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details and history of the specified link.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomBitlinks.GetCustomBitlink(new GetCustomBitlinkRequest
    {
        CustomBitlink = "chauncey.ly/chauncey",
    });
    // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
}
catch (ApiException<GetCustomBitlinkError> ex)
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

<code>[GetCustomBitlinkRequest](src/Bitly/Requests/CustomBitlinks/GetCustomBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetCustomBitlinkError](src/Bitly/Errors/GetCustomBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetCustomBitlinkMetricsByDestination(GetCustomBitlinkMetricsByDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns click metrics for the specified link by its historical destinations.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomBitlinks.GetCustomBitlinkMetricsByDestination(
        new GetCustomBitlinkMetricsByDestinationRequest
        {
            CustomBitlink = "chauncey.ly/chauncey",
            Unit = TimeUnit.Month,
            Units = 1,
            UnitReference = "2006-01-02T15:04:05-0700",
        });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetCustomBitlinkMetricsByDestinationError> ex)
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

<code>[GetCustomBitlinkMetricsByDestinationRequest](src/Bitly/Requests/CustomBitlinks/GetCustomBitlinkMetricsByDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetCustomBitlinkMetricsByDestinationError](src/Bitly/Errors/GetCustomBitlinkMetricsByDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CustomBitlinkBitlyCustomBitlinksApi&gt; UpdateCustomBitlink(UpdateCustomBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Move a keyword (or custom back-half) to a different Bitlink (domains must match).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CustomBitlinks.UpdateCustomBitlink(new UpdateCustomBitlinkRequest
    {
        CustomBitlink = "chauncey.ly/chauncey",
        Body = new UpdateCustomBitlink(),
    });
    // TODO: Handle 'response' of type CustomBitlinkBitlyCustomBitlinksApi
}
catch (ApiException<UpdateCustomBitlinkError> ex)
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

<code>[UpdateCustomBitlinkRequest](src/Bitly/Requests/CustomBitlinks/UpdateCustomBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CustomBitlinkBitlyCustomBitlinksApi](src/Bitly/Models/CustomBitlinkBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateCustomBitlinkError](src/Bitly/Errors/UpdateCustomBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GroupsApi

> Source: [GroupsApi](src/Bitly/Api/GroupsApi.cs)

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupMetricsByReferrer(GetGroupMetricsByReferrerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referrer for the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsByReferrer(new GetGroupMetricsByReferrerRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupMetricsByReferrerError> ex)
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

<code>[GetGroupMetricsByReferrerRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsByReferrerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsByReferrerError](src/Bitly/Errors/GetGroupMetricsByReferrerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupMetricsByReferringNetworks(GetGroupMetricsByReferringNetworksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns metrics by referring networks for the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsByReferringNetworks(
        new GetGroupMetricsByReferringNetworksRequest
        {
            GroupGuid = "Ba1bc23dE4F",
            Unit = TimeUnit.Month,
            Units = 1,
            Size = 10,
            UnitReference = "2006-01-02T15:04:05-0700",
        });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupMetricsByReferringNetworksError> ex)
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

<code>[GetGroupMetricsByReferringNetworksRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsByReferringNetworksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsByReferringNetworksError](src/Bitly/Errors/GetGroupMetricsByReferringNetworksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Group&gt; GetGroup(GetGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroup(new GetGroupRequest { GroupGuid = "Ba1bc23dE4F" });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<GetGroupError> ex)
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

<code>[GetGroupRequest](src/Bitly/Requests/GroupsApi/GetGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/Bitly/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupError](src/Bitly/Errors/GetGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupClicks&gt; GetGroupClicks(GetGroupClicksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

get number of clicks on bitlinks in a group

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupClicks(new GetGroupClicksRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupClicks
}
catch (ApiException<GetGroupClicksError> ex)
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

<code>[GetGroupClicksRequest](src/Bitly/Requests/GroupsApi/GetGroupClicksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupClicks](src/Bitly/Models/GroupClicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupClicksError](src/Bitly/Errors/GetGroupClicksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CityMetricsBitlyGroupsApi&gt; GetGroupCodeScansByCity(GetGroupCodeScansByCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by city.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupCodeScansByCity(new GetGroupCodeScansByCityRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
}
catch (ApiException<GetGroupCodeScansByCityError> ex)
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

<code>[GetGroupCodeScansByCityRequest](src/Bitly/Requests/GroupsApi/GetGroupCodeScansByCityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/Bitly/Models/CityMetricsBitlyGroupsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupCodeScansByCityError](src/Bitly/Errors/GetGroupCodeScansByCityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupCodeScansByCountry(GetGroupCodeScansByCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics for a group broken down by country.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupCodeScansByCountry(new GetGroupCodeScansByCountryRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupCodeScansByCountryError> ex)
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

<code>[GetGroupCodeScansByCountryRequest](src/Bitly/Requests/GroupsApi/GetGroupCodeScansByCountryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupCodeScansByCountryError](src/Bitly/Errors/GetGroupCodeScansByCountryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupClicks&gt; GetGroupCodeScansOverTime(GetGroupCodeScansOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get QR code scan metrics over time for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupCodeScansOverTime(new GetGroupCodeScansOverTimeRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupClicks
}
catch (ApiException<GetGroupCodeScansOverTimeError> ex)
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

<code>[GetGroupCodeScansOverTimeRequest](src/Bitly/Requests/GroupsApi/GetGroupCodeScansOverTimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupClicks](src/Bitly/Models/GroupClicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupCodeScansOverTimeError](src/Bitly/Errors/GetGroupCodeScansOverTimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupFeatureUsage&gt; GetGroupFeatureUsage(GetGroupFeatureUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's current feature limit usage, optionally provide limit name(s) for usage on specific limit(s)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupFeatureUsage(new GetGroupFeatureUsageRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Name = ["qr_codes"],
    });
    // TODO: Handle 'response' of type GroupFeatureUsage
}
catch (ApiException<GetGroupFeatureUsageError> ex)
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

<code>[GetGroupFeatureUsageRequest](src/Bitly/Requests/GroupsApi/GetGroupFeatureUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupFeatureUsage](src/Bitly/Models/GroupFeatureUsage.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupFeatureUsageError](src/Bitly/Errors/GetGroupFeatureUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupHistoricalUsage&gt; GetGroupHistoricalUsage(GetGroupHistoricalUsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a group's historical usage for specific limit(s) and date range. Refer to GET /v4/groups/{group_guid}/feature_usage endpoint response for available limit names.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupHistoricalUsage(new GetGroupHistoricalUsageRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Name = ["qr_codes"],
        StartDate = "2022-02-02",
        EndDate = "2023-10-04",
        Unit = TimeUnitDwm.Month,
    });
    // TODO: Handle 'response' of type GroupHistoricalUsage
}
catch (ApiException<GetGroupHistoricalUsageError> ex)
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

<code>[GetGroupHistoricalUsageRequest](src/Bitly/Requests/GroupsApi/GetGroupHistoricalUsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupHistoricalUsage](src/Bitly/Models/GroupHistoricalUsage.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupHistoricalUsageError](src/Bitly/Errors/GetGroupHistoricalUsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CityMetricsBitlyGroupsApi&gt; GetGroupLinkClicksByCity(GetGroupLinkClicksByCityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by city for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupLinkClicksByCity(new GetGroupLinkClicksByCityRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
}
catch (ApiException<GetGroupLinkClicksByCityError> ex)
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

<code>[GetGroupLinkClicksByCityRequest](src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByCityRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/Bitly/Models/CityMetricsBitlyGroupsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupLinkClicksByCityError](src/Bitly/Errors/GetGroupLinkClicksByCityError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupLinkClicksByCountry(GetGroupLinkClicksByCountryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by country for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupLinkClicksByCountry(new GetGroupLinkClicksByCountryRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupLinkClicksByCountryError> ex)
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

<code>[GetGroupLinkClicksByCountryRequest](src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByCountryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupLinkClicksByCountryError](src/Bitly/Errors/GetGroupLinkClicksByCountryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupsLinksClicksDevicesResponse&gt; GetGroupLinkClicksByDevice(GetGroupLinkClicksByDeviceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by device for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupLinkClicksByDevice(new GetGroupLinkClicksByDeviceRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupsLinksClicksDevicesResponse
}
catch (ApiException<GetGroupLinkClicksByDeviceError> ex)
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

<code>[GetGroupLinkClicksByDeviceRequest](src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByDeviceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupsLinksClicksDevicesResponse](src/Bitly/Models/GroupsLinksClicksDevicesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupLinkClicksByDeviceError](src/Bitly/Errors/GetGroupLinkClicksByDeviceError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupLinkClicksByReferrer(GetGroupLinkClicksByReferrerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks by referrer for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupLinkClicksByReferrer(new GetGroupLinkClicksByReferrerRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupLinkClicksByReferrerError> ex)
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

<code>[GetGroupLinkClicksByReferrerRequest](src/Bitly/Requests/GroupsApi/GetGroupLinkClicksByReferrerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupLinkClicksByReferrerError](src/Bitly/Errors/GetGroupLinkClicksByReferrerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupClicks&gt; GetGroupLinkClicksOverTime(GetGroupLinkClicksOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get link clicks over time for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupLinkClicksOverTime(new GetGroupLinkClicksOverTimeRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupClicks
}
catch (ApiException<GetGroupLinkClicksOverTimeError> ex)
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

<code>[GetGroupLinkClicksOverTimeRequest](src/Bitly/Requests/GroupsApi/GetGroupLinkClicksOverTimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupClicks](src/Bitly/Models/GroupClicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupLinkClicksOverTimeError](src/Bitly/Errors/GetGroupLinkClicksOverTimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CityMetricsBitlyGroupsApi&gt; GetGroupMetricsByCities(GetGroupMetricsByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by city for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsByCities(new GetGroupMetricsByCitiesRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type CityMetricsBitlyGroupsApi
}
catch (ApiException<GetGroupMetricsByCitiesError> ex)
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

<code>[GetGroupMetricsByCitiesRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsByCitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CityMetricsBitlyGroupsApi](src/Bitly/Models/CityMetricsBitlyGroupsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsByCitiesError](src/Bitly/Errors/GetGroupMetricsByCitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ClickMetricsBitlyCustomBitlinksApi&gt; GetGroupMetricsByCountries(GetGroupMetricsByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the geographic origins of click traffic by country for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsByCountries(new GetGroupMetricsByCountriesRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ClickMetricsBitlyCustomBitlinksApi
}
catch (ApiException<GetGroupMetricsByCountriesError> ex)
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

<code>[GetGroupMetricsByCountriesRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsByCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ClickMetricsBitlyCustomBitlinksApi](src/Bitly/Models/ClickMetricsBitlyCustomBitlinksApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsByCountriesError](src/Bitly/Errors/GetGroupMetricsByCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeviceMetricsBitlyGroupsApi&gt; GetGroupMetricsByDevices(GetGroupMetricsByDevicesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device types generating click traffic to the specified group's links.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsByDevices(new GetGroupMetricsByDevicesRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type DeviceMetricsBitlyGroupsApi
}
catch (ApiException<GetGroupMetricsByDevicesError> ex)
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

<code>[GetGroupMetricsByDevicesRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsByDevicesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeviceMetricsBitlyGroupsApi](src/Bitly/Models/DeviceMetricsBitlyGroupsApi.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsByDevicesError](src/Bitly/Errors/GetGroupMetricsByDevicesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupClicks&gt; GetGroupMetricsOverTime(GetGroupMetricsOverTimeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get group engagement metrics over time for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupMetricsOverTime(new GetGroupMetricsOverTimeRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupClicks
}
catch (ApiException<GetGroupMetricsOverTimeError> ex)
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

<code>[GetGroupMetricsOverTimeRequest](src/Bitly/Requests/GroupsApi/GetGroupMetricsOverTimeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupClicks](src/Bitly/Models/GroupClicks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupMetricsOverTimeError](src/Bitly/Errors/GetGroupMetricsOverTimeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupPreferences&gt; GetGroupPreferences(GetGroupPreferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns preferences for the specified group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupPreferences(new GetGroupPreferencesRequest
    {
        GroupGuid = "Ba1bc23dE4F",
    });
    // TODO: Handle 'response' of type GroupPreferences
}
catch (ApiException<GetGroupPreferencesError> ex)
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

<code>[GetGroupPreferencesRequest](src/Bitly/Requests/GroupsApi/GetGroupPreferencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupPreferences](src/Bitly/Models/GroupPreferences.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupPreferencesError](src/Bitly/Errors/GetGroupPreferencesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Metrics&gt; GetGroupShortenCounts(GetGroupShortenCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all the shorten counts for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupShortenCounts(new GetGroupShortenCountsRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type Metrics
}
catch (ApiException<GetGroupShortenCountsError> ex)
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

<code>[GetGroupShortenCountsRequest](src/Bitly/Requests/GroupsApi/GetGroupShortenCountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metrics](src/Bitly/Models/Metrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupShortenCountsError](src/Bitly/Errors/GetGroupShortenCountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Tags&gt; GetGroupTags(GetGroupTagsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the tags currently used in the specified group. Maximum 1000.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupTags(new GetGroupTagsRequest { GroupGuid = "Ba1bc23dE4F" });
    // TODO: Handle 'response' of type Tags
}
catch (ApiException<GetGroupTagsError> ex)
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

<code>[GetGroupTagsRequest](src/Bitly/Requests/GroupsApi/GetGroupTagsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Tags](src/Bitly/Models/Tags.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupTagsError](src/Bitly/Errors/GetGroupTagsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupsCodesScansTopResponse&gt; GetGroupTopCodeScans(GetGroupTopCodeScansRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing QR codes by scan count for all codes in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupTopCodeScans(new GetGroupTopCodeScansRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type GroupsCodesScansTopResponse
}
catch (ApiException<GetGroupTopCodeScansError> ex)
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

<code>[GetGroupTopCodeScansRequest](src/Bitly/Requests/GroupsApi/GetGroupTopCodeScansRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupsCodesScansTopResponse](src/Bitly/Models/AnyOf/GroupsCodesScansTopResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupTopCodeScansError](src/Bitly/Errors/GetGroupTopCodeScansError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SortedLinks&gt; GetGroupTopLinkClicks(GetGroupTopLinkClicksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by click for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupTopLinkClicks(new GetGroupTopLinkClicksRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type SortedLinks
}
catch (ApiException<GetGroupTopLinkClicksError> ex)
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

<code>[GetGroupTopLinkClicksRequest](src/Bitly/Requests/GroupsApi/GetGroupTopLinkClicksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SortedLinks](src/Bitly/Models/SortedLinks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupTopLinkClicksError](src/Bitly/Errors/GetGroupTopLinkClicksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SortedLinks&gt; GetGroupTopMetrics(GetGroupTopMetricsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get top performing links by engagement for all links in a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroupTopMetrics(new GetGroupTopMetricsRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type SortedLinks
}
catch (ApiException<GetGroupTopMetricsError> ex)
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

<code>[GetGroupTopMetricsRequest](src/Bitly/Requests/GroupsApi/GetGroupTopMetricsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SortedLinks](src/Bitly/Models/SortedLinks.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupTopMetricsError](src/Bitly/Errors/GetGroupTopMetricsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Groups&gt; GetGroups(GetGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of groups in the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.GetGroups(new GetGroupsRequest { OrganizationGuid = "Oa1bcd234eF" });
    // TODO: Handle 'response' of type Groups
}
catch (ApiException<GetGroupsError> ex)
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

<code>[GetGroupsRequest](src/Bitly/Requests/GroupsApi/GetGroupsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Groups](src/Bitly/Models/Groups.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetGroupsError](src/Bitly/Errors/GetGroupsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupExportResponse&gt; PostCreateGroupExport(PostCreateGroupExportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Build a CSV export synchronously and return it inline as a base64 data URI plus metadata.
The export_type field selects the CSV shape: link_engagements_batch (engagement metrics for
explicit bitlinks or a filter), links_list (link metadata roster), or qr_codes_list (QR code
metadata roster). Row caps apply per request: 200 rows when metrics are included
(link_engagements_batch, or include_metrics on a list export); 1000 rows for metadata-only
list exports. When the match set exceeds the cap, truncated is true and only the first
cap rows are returned; row_count reports how many data rows are in the CSV.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.PostCreateGroupExport(new PostCreateGroupExportRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Body = new GroupExportRequestBody { ExportType = ExportType.LinkEngagementsBatch },
    });
    // TODO: Handle 'response' of type GroupExportResponse
}
catch (ApiException<PostCreateGroupExportError> ex)
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

<code>[PostCreateGroupExportRequest](src/Bitly/Requests/GroupsApi/PostCreateGroupExportRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupExportResponse](src/Bitly/Models/GroupExportResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[PostCreateGroupExportError](src/Bitly/Errors/PostCreateGroupExportError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Group&gt; UpdateGroup(UpdateGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details of a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.UpdateGroup(new UpdateGroupRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Body = new GroupUpdate(),
    });
    // TODO: Handle 'response' of type Group
}
catch (ApiException<UpdateGroupError> ex)
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

<code>[UpdateGroupRequest](src/Bitly/Requests/GroupsApi/UpdateGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Group](src/Bitly/Models/Group.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateGroupError](src/Bitly/Errors/UpdateGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GroupPreferences&gt; UpdateGroupPreferences(UpdateGroupPreferencesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates preferences for a group.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.GroupsApi.UpdateGroupPreferences(new UpdateGroupPreferencesRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Body = new GroupPreferences(),
    });
    // TODO: Handle 'response' of type GroupPreferences
}
catch (ApiException<UpdateGroupPreferencesError> ex)
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

<code>[UpdateGroupPreferencesRequest](src/Bitly/Requests/GroupsApi/UpdateGroupPreferencesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GroupPreferences](src/Bitly/Models/GroupPreferences.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateGroupPreferencesError](src/Bitly/Errors/UpdateGroupPreferencesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrganizationsApi

> Source: [OrganizationsApi](src/Bitly/Api/OrganizationsApi.cs)

<details>
<summary><code>Task&lt;Organization&gt; GetOrganization(GetOrganizationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrive details for the specified organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationsApi.GetOrganization(new GetOrganizationRequest
    {
        OrganizationGuid = "Oa1bcd234eF",
    });
    // TODO: Handle 'response' of type Organization
}
catch (ApiException<GetOrganizationError> ex)
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

<code>[GetOrganizationRequest](src/Bitly/Requests/OrganizationsApi/GetOrganizationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Organization](src/Bitly/Models/Organization.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationError](src/Bitly/Errors/GetOrganizationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Metrics&gt; GetOrganizationShortenCounts(GetOrganizationShortenCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization over a specified time period.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationsApi.GetOrganizationShortenCounts(new GetOrganizationShortenCountsRequest
    {
        OrganizationGuid = "Oa1bcd234eF",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type Metrics
}
catch (ApiException<GetOrganizationShortenCountsError> ex)
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

<code>[GetOrganizationShortenCountsRequest](src/Bitly/Requests/OrganizationsApi/GetOrganizationShortenCountsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metrics](src/Bitly/Models/Metrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationShortenCountsError](src/Bitly/Errors/GetOrganizationShortenCountsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Metrics&gt; GetOrganizationShortenCountsByGroup(GetOrganizationShortenCountsByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the shorten counts for a specific organization by group for the current month.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationsApi.GetOrganizationShortenCountsByGroup(
        new GetOrganizationShortenCountsByGroupRequest { OrganizationGuid = "Oa1bcd234eF" });
    // TODO: Handle 'response' of type Metrics
}
catch (ApiException<GetOrganizationShortenCountsByGroupError> ex)
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

<code>[GetOrganizationShortenCountsByGroupRequest](src/Bitly/Requests/OrganizationsApi/GetOrganizationShortenCountsByGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Metrics](src/Bitly/Models/Metrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationShortenCountsByGroupError](src/Bitly/Errors/GetOrganizationShortenCountsByGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Organizations&gt; GetOrganizations(GetOrganizationsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of organizations for the authenticated user. By default, only organizations permitted by the token's allowed_orgs are returned. Use include_all=true to return all organizations regardless of token restrictions. Each organization is annotated with its authentication requirements (require_sso, require_2fa) when configured.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationsApi.GetOrganizations(new GetOrganizationsRequest());
    // TODO: Handle 'response' of type Organizations
}
catch (ApiException<GetOrganizationsError> ex)
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

<code>[GetOrganizationsRequest](src/Bitly/Requests/OrganizationsApi/GetOrganizationsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Organizations](src/Bitly/Models/Organizations.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetOrganizationsError](src/Bitly/Errors/GetOrganizationsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlanLimits&gt; GetPlanLimits(GetPlanLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all plan limits and counts available for an organization.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.OrganizationsApi.GetPlanLimits(new GetPlanLimitsRequest
    {
        OrganizationGuid = "Oa1bcd234eF",
    });
    // TODO: Handle 'response' of type PlanLimits
}
catch (ApiException<GetPlanLimitsError> ex)
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

<code>[GetPlanLimitsRequest](src/Bitly/Requests/OrganizationsApi/GetPlanLimitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlanLimits](src/Bitly/Models/PlanLimits.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetPlanLimitsError](src/Bitly/Errors/GetPlanLimitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/Bitly/Api/QrCodes.cs)

<details>
<summary><code>Task&lt;QrCodeMinimal&gt; CreateQrCodePublic(CreateQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code and return its metadata

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.CreateQrCodePublic(new CreateQrCodePublicRequest
    {
        Body = new PublicCreateQrCodeRequest
        {
            Title = "Minimal QR Code",
            GroupGuid = "Ba1bc23dE4F",
            Destination = new QrCodeDestination { BitlinkId = "bit.ly/abc123" },
            Tags = ["tag1", "tag2"],
        },
    });
    // TODO: Handle 'response' of type QrCodeMinimal
}
catch (ApiException<CreateQrCodePublicError> ex)
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

<code>[CreateQrCodePublicRequest](src/Bitly/Requests/QrCodes/CreateQrCodePublicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCodeMinimal](src/Bitly/Models/QrCodeMinimal.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateQrCodePublicError](src/Bitly/Errors/CreateQrCodePublicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicStaticQrCodeResponse&gt; CreateStaticQrCodePublic(CreateStaticQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Generate a static QR code image without creating or saving a QR code resource. SVG and PNG output are supported via the Accept header
Contact your Account Manager to discuss enabling this feature for your account.

The `render_customizations` field supports basic appearance options. Customizations that require the rasterize API are not supported: `gradient`, `background_gradient`, `frame`, `text`, and `logo`.

The Accept header controls the response format:
- `application/json` (default): Returns a JSON object with the image as a base64-encoded byte string.
- `image/svg+xml`: Returns the raw SVG image.
- `image/png`: Returns the raw PNG image.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.CreateStaticQrCodePublic(new CreateStaticQrCodePublicRequest
    {
        Accept = Accept.ImageSvgXml,
        Body = new PublicCreateStaticQrCodeRequest { Content = "https://bitly.com", GroupGuid = "Ba1bc23dE4F" },
    });
    // TODO: Handle 'response' of type PublicStaticQrCodeResponse
}
catch (ApiException<CreateStaticQrCodePublicError> ex)
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

<code>[CreateStaticQrCodePublicRequest](src/Bitly/Requests/QrCodes/CreateStaticQrCodePublicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicStaticQrCodeResponse](src/Bitly/Models/PublicStaticQrCodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateStaticQrCodePublicError](src/Bitly/Errors/CreateStaticQrCodePublicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicDeleteQrCodeResponse&gt; DeleteQrCode(DeleteQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code that has not been redirected and is not for a custom link. Also deletes the associated link (if applicable).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.DeleteQrCode(new DeleteQrCodeRequest { QrcodeId = "Qabcde12345" });
    // TODO: Handle 'response' of type PublicDeleteQrCodeResponse
}
catch (ApiException<DeleteQrCodeError> ex)
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

<code>[DeleteQrCodeRequest](src/Bitly/Requests/QrCodes/DeleteQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicDeleteQrCodeResponse](src/Bitly/Models/PublicDeleteQrCodeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[DeleteQrCodeError](src/Bitly/Errors/DeleteQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCodeDetails&gt; GetQrCodeByIdPublic(GetQrCodeByIdPublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the QR code with a matching id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetQrCodeByIdPublic(new GetQrCodeByIdPublicRequest
    {
        QrcodeId = "Qabcde12345",
    });
    // TODO: Handle 'response' of type QrCodeDetails
}
catch (ApiException<GetQrCodeByIdPublicError> ex)
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

<code>[GetQrCodeByIdPublicRequest](src/Bitly/Requests/QrCodes/GetQrCodeByIdPublicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCodeDetails](src/Bitly/Models/QrCodeDetails.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetQrCodeByIdPublicError](src/Bitly/Errors/GetQrCodeByIdPublicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PublicQrCodeImageResponse&gt; GetQrCodeImagePublic(GetQrCodeImagePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the image of a given QR Code. The Accept header controls how this is returned (options are "application/json", "image/svg+xml", and "image/png").
If the Accept header is "application/json" the format query parameter will determine the image format inside of the json (which will be base64 encoded and prefixed with its mime type as would be suitable for a HTML image src tag).
To Return the QR Code image itself, set the Accept header to "image/svg+xml" or "image/png", or remove the Accept header and set the format query parameter to “svg” or “png” (if no format is specified the default will be “svg”).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetQrCodeImagePublic(new GetQrCodeImagePublicRequest
    {
        QrcodeId = "Qabcde12345",
        Format = Format.Svg,
        Accept = "image/svg+xml",
    });
    // TODO: Handle 'response' of type PublicQrCodeImageResponse
}
catch (ApiException<GetQrCodeImagePublicError> ex)
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

<code>[GetQrCodeImagePublicRequest](src/Bitly/Requests/QrCodes/GetQrCodeImagePublicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicQrCodeImageResponse](src/Bitly/Models/PublicQrCodeImageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetQrCodeImagePublicError](src/Bitly/Errors/GetQrCodeImagePublicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkScans&gt; GetScanMetricsForQrCode(GetScanMetricsForQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of scan counts for the specified QR code. The array is comprised of scan counts for each time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsForQrCode(new GetScanMetricsForQrCodeRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type BitlinkScans
}
catch (ApiException<GetScanMetricsForQrCodeError> ex)
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

<code>[GetScanMetricsForQrCodeRequest](src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkScans](src/Bitly/Models/BitlinkScans.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsForQrCodeError](src/Bitly/Errors/GetScanMetricsForQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScanMetrics&gt; GetScanMetricsForQrCodeByBrowser(GetScanMetricsForQrCodeByBrowserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the browsers generating scan traffic to the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsForQrCodeByBrowser(new GetScanMetricsForQrCodeByBrowserRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ScanMetrics
}
catch (ApiException<GetScanMetricsForQrCodeByBrowserError> ex)
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

<code>[GetScanMetricsForQrCodeByBrowserRequest](src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByBrowserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScanMetrics](src/Bitly/Models/ScanMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsForQrCodeByBrowserError](src/Bitly/Errors/GetScanMetricsForQrCodeByBrowserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CityScanMetrics&gt; GetScanMetricsForQrCodeByCities(GetScanMetricsForQrCodeByCitiesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the city origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsForQrCodeByCities(new GetScanMetricsForQrCodeByCitiesRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type CityScanMetrics
}
catch (ApiException<GetScanMetricsForQrCodeByCitiesError> ex)
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

<code>[GetScanMetricsForQrCodeByCitiesRequest](src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByCitiesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CityScanMetrics](src/Bitly/Models/CityScanMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsForQrCodeByCitiesError](src/Bitly/Errors/GetScanMetricsForQrCodeByCitiesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScanMetrics&gt; GetScanMetricsForQrCodeByCountries(GetScanMetricsForQrCodeByCountriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the country origins of scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsForQrCodeByCountries(new GetScanMetricsForQrCodeByCountriesRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ScanMetrics
}
catch (ApiException<GetScanMetricsForQrCodeByCountriesError> ex)
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

<code>[GetScanMetricsForQrCodeByCountriesRequest](src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByCountriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScanMetrics](src/Bitly/Models/ScanMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsForQrCodeByCountriesError](src/Bitly/Errors/GetScanMetricsForQrCodeByCountriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScanMetrics&gt; GetScanMetricsForQrCodeByDevicesOs(GetScanMetricsForQrCodeByDevicesOsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the device os generating scan traffic for the specified QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsForQrCodeByDevicesOs(new GetScanMetricsForQrCodeByDevicesOsRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        Size = 10,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type ScanMetrics
}
catch (ApiException<GetScanMetricsForQrCodeByDevicesOsError> ex)
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

<code>[GetScanMetricsForQrCodeByDevicesOsRequest](src/Bitly/Requests/QrCodes/GetScanMetricsForQrCodeByDevicesOsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScanMetrics](src/Bitly/Models/ScanMetrics.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsForQrCodeByDevicesOsError](src/Bitly/Errors/GetScanMetricsForQrCodeByDevicesOsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkScansSummary&gt; GetScanMetricsSummaryForQrCode(GetScanMetricsSummaryForQrCodeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the scan counts for a QR Code rolled up into a single field for a specified time window, where the window is based on the provided unit.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.GetScanMetricsSummaryForQrCode(new GetScanMetricsSummaryForQrCodeRequest
    {
        QrcodeId = "Qabcde12345",
        Unit = TimeUnit.Month,
        Units = 1,
        UnitReference = "2006-01-02T15:04:05-0700",
    });
    // TODO: Handle 'response' of type BitlinkScansSummary
}
catch (ApiException<GetScanMetricsSummaryForQrCodeError> ex)
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

<code>[GetScanMetricsSummaryForQrCodeRequest](src/Bitly/Requests/QrCodes/GetScanMetricsSummaryForQrCodeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkScansSummary](src/Bitly/Models/BitlinkScansSummary.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetScanMetricsSummaryForQrCodeError](src/Bitly/Errors/GetScanMetricsSummaryForQrCodeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCodesMinimal&gt; ListQrMinimal(ListQrMinimalRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of QR codes matching the filter settings. Values are in reverse chronological order.
The pagination occurs by calling the next link in the pagination response object.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.ListQrMinimal(new ListQrMinimalRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        HasRenderCustomizations = HasRenderCustomizations.Both,
        Size = 10,
        Query = "api",
        HostnamePathQuery = "dev.bitly.com/api-reference",
        CreatedBefore = 1694529902,
        CreatedAfter = 1694529902,
        Archived = Archived.Both,
        CreatingLogin = ["chauncey"],
        QrcType = [QrcType.Bitlink],
        IsGs1 = IsGs1.Both,
        Tags = ["bitly", "api"],
    });
    // TODO: Handle 'response' of type QrCodesMinimal
}
catch (ApiException<ListQrMinimalError> ex)
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

<code>[ListQrMinimalRequest](src/Bitly/Requests/QrCodes/ListQrMinimalRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCodesMinimal](src/Bitly/Models/QrCodesMinimal.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[ListQrMinimalError](src/Bitly/Errors/ListQrMinimalError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCodeMinimal&gt; RedirectQrCodeDestination(RedirectQrCodeDestinationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the destination URL that a stand alone QR Code redirects to. This only works for stand alone QR Codes; a QR Code already associated with a bitlink must be updated via the Bitlinks API.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.RedirectQrCodeDestination(new RedirectQrCodeDestinationRequest
    {
        QrcodeId = "some example string",
        Body = new RedirectQrCodeRequest { LongUrl = "some example string" },
    });
    // TODO: Handle 'response' of type QrCodeMinimal
}
catch (ApiException<RedirectQrCodeDestinationError> ex)
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

<code>[RedirectQrCodeDestinationRequest](src/Bitly/Requests/QrCodes/RedirectQrCodeDestinationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCodeMinimal](src/Bitly/Models/QrCodeMinimal.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[RedirectQrCodeDestinationError](src/Bitly/Errors/RedirectQrCodeDestinationError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrCodeMinimal&gt; UpdateQrCodePublic(UpdateQrCodePublicRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the QR code with a matching id and returns it.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.UpdateQrCodePublic(new UpdateQrCodePublicRequest
    {
        QrcodeId = "Qabc123",
        Body = new PublicUpdateQrCodeRequest { Title = "Minimal QR Code Updated", Tags = ["tag1", "tag2"] },
    });
    // TODO: Handle 'response' of type QrCodeMinimal
}
catch (ApiException<UpdateQrCodePublicError> ex)
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

<code>[UpdateQrCodePublicRequest](src/Bitly/Requests/QrCodes/UpdateQrCodePublicRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrCodeMinimal](src/Bitly/Models/QrCodeMinimal.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateQrCodePublicError](src/Bitly/Errors/UpdateQrCodePublicError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;QrcBulkUpdate&gt; UpdateQrCodesByGroup(UpdateQrCodesByGroupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk update can add or remove tags, or archive/un-archive, up to 100 QR codes at a time.
Pages QR codes cannot be updated with this endpoint.
The response includes a list of QR code ids that were updated.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.UpdateQrCodesByGroup(new UpdateQrCodesByGroupRequest
    {
        GroupGuid = "Ba1bc23dE4F",
        Body = new QrcBulkUpdateRequest { Action = ActionEnum.Archive },
    });
    // TODO: Handle 'response' of type QrcBulkUpdate
}
catch (ApiException<UpdateQrCodesByGroupError> ex)
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

<code>[UpdateQrCodesByGroupRequest](src/Bitly/Requests/QrCodes/UpdateQrCodesByGroupRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QrcBulkUpdate](src/Bitly/Models/QrcBulkUpdate.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateQrCodesByGroupError](src/Bitly/Errors/UpdateQrCodesByGroupError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BitlinkBody&gt; UpgradeQrCodeToBitlink(UpgradeQrCodeToBitlinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upgrades a stand alone (decoupled) QR Code to a coupled QR Code by associating it with its underlying Bitly short link. This operation consumes one encode from the organization's monthly Link limit. If the QR Code is already coupled, no encode is consumed.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.QrCodes.UpgradeQrCodeToBitlink(new UpgradeQrCodeToBitlinkRequest
    {
        QrcodeId = "some example string",
    });
    // TODO: Handle 'response' of type BitlinkBody
}
catch (ApiException<UpgradeQrCodeToBitlinkError> ex)
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

<code>[UpgradeQrCodeToBitlinkRequest](src/Bitly/Requests/QrCodes/UpgradeQrCodeToBitlinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BitlinkBody](src/Bitly/Models/BitlinkBody.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpgradeQrCodeToBitlinkError](src/Bitly/Errors/UpgradeQrCodeToBitlinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](src/Bitly/Api/UserApi.cs)

<details>
<summary><code>Task&lt;PlatformLimits&gt; GetPlatformLimits(GetPlatformLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all platform limits and counts available for an organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.GetPlatformLimits(new GetPlatformLimitsRequest
    {
        Path = "/organizations/{organization_guid}",
    });
    // TODO: Handle 'response' of type PlatformLimits
}
catch (ApiException<GetPlatformLimitsError> ex)
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

<code>[GetPlatformLimitsRequest](src/Bitly/Requests/UserApi/GetPlatformLimitsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlatformLimits](src/Bitly/Models/PlatformLimits.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetPlatformLimitsError](src/Bitly/Errors/GetPlatformLimitsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information for the current authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.GetUser();
    // TODO: Handle 'response' of type User
}
catch (ApiException<GetUserError> ex)
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

**OnSuccess**: <code>[User](src/Bitly/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetUserError](src/Bitly/Errors/GetUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;User&gt; UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update fields in the user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UserApi.UpdateUser(new UpdateUserRequest { Body = new UserUpdate() });
    // TODO: Handle 'response' of type User
}
catch (ApiException<UpdateUserError> ex)
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

<code>[UpdateUserRequest](src/Bitly/Requests/UserApi/UpdateUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](src/Bitly/Models/User.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateUserError](src/Bitly/Errors/UpdateUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhooksApi

> Source: [WebhooksApi](src/Bitly/Api/WebhooksApi.cs)

<details>
<summary><code>Task&lt;Webhook&gt; CreateWebhook(CreateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a webhook.

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
        Body = new WebhookCreate
        {
            OrganizationGuid = "some example string",
            Name = "some example string",
            Event = "some example string",
            Url = "some example string",
        },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<CreateWebhookError> ex)
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

<code>[CreateWebhookRequest](src/Bitly/Requests/WebhooksApi/CreateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/Bitly/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[CreateWebhookError](src/Bitly/Errors/CreateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWebhook(DeleteWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.WebhooksApi.DeleteWebhook(new DeleteWebhookRequest { WebhookGuid = "Wa1bcDefG23" });
}
catch (ApiException<DeleteWebhookError> ex)
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

<code>[DeleteWebhookRequest](src/Bitly/Requests/WebhooksApi/DeleteWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[DeleteWebhookError](src/Bitly/Errors/DeleteWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; GetWebhook(GetWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhook(new GetWebhookRequest { WebhookGuid = "Wa1bcDefG23" });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<GetWebhookError> ex)
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

<code>[GetWebhookRequest](src/Bitly/Requests/WebhooksApi/GetWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/Bitly/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetWebhookError](src/Bitly/Errors/GetWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebhooksModel&gt; GetWebhooks(GetWebhooksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch all webhooks available for an Organization

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.GetWebhooks(new GetWebhooksRequest { OrganizationGuid = "Oa1bcd234eF" });
    // TODO: Handle 'response' of type WebhooksModel
}
catch (ApiException<GetWebhooksError> ex)
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

<code>[GetWebhooksRequest](src/Bitly/Requests/WebhooksApi/GetWebhooksRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhooksModel](src/Bitly/Models/WebhooksModel.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[GetWebhooksError](src/Bitly/Errors/GetWebhooksError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; UpdateWebhook(UpdateWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a webhook

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.UpdateWebhook(new UpdateWebhookRequest
    {
        WebhookGuid = "Wa1bcDefG23",
        Body = new WebhookUpdate { Guid = "some example string" },
    });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<UpdateWebhookError> ex)
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

<code>[UpdateWebhookRequest](src/Bitly/Requests/WebhooksApi/UpdateWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/Bitly/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[UpdateWebhookError](src/Bitly/Errors/UpdateWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Webhook&gt; VerifyWebhook(VerifyWebhookRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends ping event to test webhook configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.WebhooksApi.VerifyWebhook(new VerifyWebhookRequest { WebhookGuid = "Wa1bcDefG23" });
    // TODO: Handle 'response' of type Webhook
}
catch (ApiException<VerifyWebhookError> ex)
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

<code>[VerifyWebhookRequest](src/Bitly/Requests/WebhooksApi/VerifyWebhookRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Webhook](src/Bitly/Models/Webhook.cs)</code>

**OnError**: <code>[ApiException](src/Bitly/Core/Exceptions/ApiException.cs)&lt;[VerifyWebhookError](src/Bitly/Errors/VerifyWebhookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

