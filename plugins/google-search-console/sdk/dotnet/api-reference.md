# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [GoogleSearchConsoleClient](src/GoogleSearchConsole/GoogleSearchConsoleClient.cs)

## Searchanalytics

> Source: [Searchanalytics](src/GoogleSearchConsole/Api/Searchanalytics.cs)

<details>
<summary><code>Task&lt;SearchAnalyticsQueryResponse&gt; WebmastersSearchanalyticsQuery(WebmastersSearchanalyticsQueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Searchanalytics.WebmastersSearchanalyticsQuery(new WebmastersSearchanalyticsQueryRequest
    {
        SiteUrl = "some example string",
        Body = new SearchAnalyticsQueryRequest(),
    });
    // TODO: Handle 'response' of type SearchAnalyticsQueryResponse
}
catch (ApiException<WebmastersSearchanalyticsQueryError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSearchanalyticsQueryRequest](src/GoogleSearchConsole/Requests/Searchanalytics/WebmastersSearchanalyticsQueryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchAnalyticsQueryResponse](src/GoogleSearchConsole/Models/SearchAnalyticsQueryResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSearchanalyticsQueryError](src/GoogleSearchConsole/Errors/WebmastersSearchanalyticsQueryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sitemaps

> Source: [Sitemaps](src/GoogleSearchConsole/Api/Sitemaps.cs)

<details>
<summary><code>Task WebmastersSitemapsDelete(WebmastersSitemapsDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sitemaps.WebmastersSitemapsDelete(new WebmastersSitemapsDeleteRequest
    {
        SiteUrl = "some example string",
        Feedpath = "some example string",
    });
}
catch (ApiException<WebmastersSitemapsDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitemapsDeleteRequest](src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitemapsDeleteError](src/GoogleSearchConsole/Errors/WebmastersSitemapsDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WmxSitemap&gt; WebmastersSitemapsGet(WebmastersSitemapsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a specific sitemap.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sitemaps.WebmastersSitemapsGet(new WebmastersSitemapsGetRequest
    {
        SiteUrl = "some example string",
        Feedpath = "some example string",
    });
    // TODO: Handle 'response' of type WmxSitemap
}
catch (ApiException<WebmastersSitemapsGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitemapsGetRequest](src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WmxSitemap](src/GoogleSearchConsole/Models/WmxSitemap.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitemapsGetError](src/GoogleSearchConsole/Errors/WebmastersSitemapsGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitemapsListResponse&gt; WebmastersSitemapsList(WebmastersSitemapsListRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sitemaps.WebmastersSitemapsList(new WebmastersSitemapsListRequest
    {
        SiteUrl = "some example string",
    });
    // TODO: Handle 'response' of type SitemapsListResponse
}
catch (ApiException<WebmastersSitemapsListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitemapsListRequest](src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsListRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitemapsListResponse](src/GoogleSearchConsole/Models/SitemapsListResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitemapsListError](src/GoogleSearchConsole/Errors/WebmastersSitemapsListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task WebmastersSitemapsSubmit(WebmastersSitemapsSubmitRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a sitemap for a site.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sitemaps.WebmastersSitemapsSubmit(new WebmastersSitemapsSubmitRequest
    {
        SiteUrl = "some example string",
        Feedpath = "some example string",
    });
}
catch (ApiException<WebmastersSitemapsSubmitError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitemapsSubmitRequest](src/GoogleSearchConsole/Requests/Sitemaps/WebmastersSitemapsSubmitRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitemapsSubmitError](src/GoogleSearchConsole/Errors/WebmastersSitemapsSubmitError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/GoogleSearchConsole/Api/Sites.cs)

<details>
<summary><code>Task WebmastersSitesAdd(WebmastersSitesAddRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a site to the set of the user's sites in Search Console.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sites.WebmastersSitesAdd(new WebmastersSitesAddRequest { SiteUrl = "some example string" });
}
catch (ApiException<WebmastersSitesAddError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitesAddRequest](src/GoogleSearchConsole/Requests/Sites/WebmastersSitesAddRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitesAddError](src/GoogleSearchConsole/Errors/WebmastersSitesAddError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task WebmastersSitesDelete(WebmastersSitesDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a site from the set of the user's Search Console sites.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Sites.WebmastersSitesDelete(new WebmastersSitesDeleteRequest { SiteUrl = "some example string" });
}
catch (ApiException<WebmastersSitesDeleteError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitesDeleteRequest](src/GoogleSearchConsole/Requests/Sites/WebmastersSitesDeleteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitesDeleteError](src/GoogleSearchConsole/Errors/WebmastersSitesDeleteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WmxSite&gt; WebmastersSitesGet(WebmastersSitesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about specific site.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.WebmastersSitesGet(new WebmastersSitesGetRequest
    {
        SiteUrl = "some example string",
    });
    // TODO: Handle 'response' of type WmxSite
}
catch (ApiException<WebmastersSitesGetError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[WebmastersSitesGetRequest](src/GoogleSearchConsole/Requests/Sites/WebmastersSitesGetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WmxSite](src/GoogleSearchConsole/Models/WmxSite.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitesGetError](src/GoogleSearchConsole/Errors/WebmastersSitesGetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitesListResponse&gt; WebmastersSitesList(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the user's Search Console sites.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Sites.WebmastersSitesList();
    // TODO: Handle 'response' of type SitesListResponse
}
catch (ApiException<WebmastersSitesListError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitesListResponse](src/GoogleSearchConsole/Models/SitesListResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[WebmastersSitesListError](src/GoogleSearchConsole/Errors/WebmastersSitesListError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UrlInspection

> Source: [UrlInspection](src/GoogleSearchConsole/Api/UrlInspection.cs)

<details>
<summary><code>Task&lt;InspectUrlIndexResponse&gt; SearchconsoleUrlInspectionIndexInspect(SearchconsoleUrlInspectionIndexInspectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Index inspection.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UrlInspection.SearchconsoleUrlInspectionIndexInspect(
        new SearchconsoleUrlInspectionIndexInspectRequest { Body = new InspectUrlIndexRequest() });
    // TODO: Handle 'response' of type InspectUrlIndexResponse
}
catch (ApiException<SearchconsoleUrlInspectionIndexInspectError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchconsoleUrlInspectionIndexInspectRequest](src/GoogleSearchConsole/Requests/UrlInspection/SearchconsoleUrlInspectionIndexInspectRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InspectUrlIndexResponse](src/GoogleSearchConsole/Models/InspectUrlIndexResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[SearchconsoleUrlInspectionIndexInspectError](src/GoogleSearchConsole/Errors/SearchconsoleUrlInspectionIndexInspectError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTestingTools

> Source: [UrlTestingTools](src/GoogleSearchConsole/Api/UrlTestingTools.cs)

<details>
<summary><code>Task&lt;RunMobileFriendlyTestResponse&gt; SearchconsoleUrlTestingToolsMobileFriendlyTestRun(SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs Mobile-Friendly Test for a given URL.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRun(
        new SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest { Body = new RunMobileFriendlyTestRequest() });
    // TODO: Handle 'response' of type RunMobileFriendlyTestResponse
}
catch (ApiException<SearchconsoleUrlTestingToolsMobileFriendlyTestRunError> ex)
{
    if (ex.Error.TryGetGoogleRpcError(out var error))
    {
        // TODO: Handle 'error' of type GoogleRpcError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest](src/GoogleSearchConsole/Requests/UrlTestingTools/SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunMobileFriendlyTestResponse](src/GoogleSearchConsole/Models/RunMobileFriendlyTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/GoogleSearchConsole/Core/Exceptions/ApiException.cs)&lt;[SearchconsoleUrlTestingToolsMobileFriendlyTestRunError](src/GoogleSearchConsole/Errors/SearchconsoleUrlTestingToolsMobileFriendlyTestRunError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

