# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [GoogleSearchConsoleClient](google_search_console/client.py)

## Searchanalytics

> Source: [Searchanalytics](google_search_console/apis/searchanalytics.py)

<details>
<summary><code>def webmasters_searchanalytics_query(site_url: str, body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SearchAnalyticsQueryResponse</code></summary>

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

**Sync**

```python
try:
    response = client.searchanalytics.webmasters_searchanalytics_query(
        "some example string", SearchAnalyticsQueryRequest()
    )
    # TODO: Handle 'response' of type SearchAnalyticsQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSearchanalyticsQueryErrorBody
```

**Async**

```python
try:
    response = await async_client.searchanalytics.webmasters_searchanalytics_query(
        "some example string", SearchAnalyticsQueryRequest()
    )
    # TODO: Handle 'response' of type SearchAnalyticsQueryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSearchanalyticsQueryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>body</code> | <code>[SearchAnalyticsQueryRequest](google_search_console/models/search_analytics_query_request.py) \| [SearchAnalyticsQueryRequestDict](google_search_console/models/search_analytics_query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchAnalyticsQueryResponse](google_search_console/models/search_analytics_query_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSearchanalyticsQueryErrorBody](google_search_console/errors/webmasters_searchanalytics_query_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sitemaps

> Source: [Sitemaps](google_search_console/apis/sitemaps.py)

<details>
<summary><code>def webmasters_sitemaps_delete(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.sitemaps.webmasters_sitemaps_delete("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsDeleteErrorBody
```

**Async**

```python
try:
    await async_client.sitemaps.webmasters_sitemaps_delete("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>str</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitemapsDeleteErrorBody](google_search_console/errors/webmasters_sitemaps_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sitemaps_get(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> WmxSitemap</code></summary>

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

**Sync**

```python
try:
    response = client.sitemaps.webmasters_sitemaps_get("some example string", "some example string")
    # TODO: Handle 'response' of type WmxSitemap
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sitemaps.webmasters_sitemaps_get("some example string", "some example string")
    # TODO: Handle 'response' of type WmxSitemap
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>str</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WmxSitemap](google_search_console/models/wmx_sitemap.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitemapsGetErrorBody](google_search_console/errors/webmasters_sitemaps_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sitemaps_list(site_url: str, *, sitemap_index: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SitemapsListResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sitemaps.webmasters_sitemaps_list("some example string")
    # TODO: Handle 'response' of type SitemapsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsListErrorBody
```

**Async**

```python
try:
    response = await async_client.sitemaps.webmasters_sitemaps_list("some example string")
    # TODO: Handle 'response' of type SitemapsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>sitemap_index</code> | <code>str \| None</code> | A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitemapsListResponse](google_search_console/models/sitemaps_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitemapsListErrorBody](google_search_console/errors/webmasters_sitemaps_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sitemaps_submit(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.sitemaps.webmasters_sitemaps_submit("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsSubmitErrorBody
```

**Async**

```python
try:
    await async_client.sitemaps.webmasters_sitemaps_submit("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitemapsSubmitErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>str</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitemapsSubmitErrorBody](google_search_console/errors/webmasters_sitemaps_submit_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](google_search_console/apis/sites.py)

<details>
<summary><code>def webmasters_sites_add(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.sites.webmasters_sites_add("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesAddErrorBody
```

**Async**

```python
try:
    await async_client.sites.webmasters_sites_add("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesAddErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The URL of the site to add. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitesAddErrorBody](google_search_console/errors/webmasters_sites_add_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sites_delete(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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

**Sync**

```python
try:
    client.sites.webmasters_sites_delete("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesDeleteErrorBody
```

**Async**

```python
try:
    await async_client.sites.webmasters_sites_delete("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitesDeleteErrorBody](google_search_console/errors/webmasters_sites_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sites_get(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> WmxSite</code></summary>

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

**Sync**

```python
try:
    response = client.sites.webmasters_sites_get("some example string")
    # TODO: Handle 'response' of type WmxSite
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sites.webmasters_sites_get("some example string")
    # TODO: Handle 'response' of type WmxSite
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>site_url</code> | <code>str</code> | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WmxSite](google_search_console/models/wmx_site.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitesGetErrorBody](google_search_console/errors/webmasters_sites_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def webmasters_sites_list(*, request_options: RequestOptionsOrDict | None = None) -> SitesListResponse</code></summary>

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

**Sync**

```python
try:
    response = client.sites.webmasters_sites_list()
    # TODO: Handle 'response' of type SitesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesListErrorBody
```

**Async**

```python
try:
    response = await async_client.sites.webmasters_sites_list()
    # TODO: Handle 'response' of type SitesListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WebmastersSitesListErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitesListResponse](google_search_console/models/sites_list_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[WebmastersSitesListErrorBody](google_search_console/errors/webmasters_sites_list_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UrlInspection

> Source: [UrlInspection](google_search_console/apis/url_inspection.py)

<details>
<summary><code>def searchconsole_url_inspection_index_inspect(body: InspectUrlIndexRequest | InspectUrlIndexRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> InspectUrlIndexResponse</code></summary>

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

**Sync**

```python
try:
    response = client.url_inspection.searchconsole_url_inspection_index_inspect(InspectUrlIndexRequest())
    # TODO: Handle 'response' of type InspectUrlIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchconsoleUrlInspectionIndexInspectErrorBody
```

**Async**

```python
try:
    response = await async_client.url_inspection.searchconsole_url_inspection_index_inspect(InspectUrlIndexRequest())
    # TODO: Handle 'response' of type InspectUrlIndexResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchconsoleUrlInspectionIndexInspectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InspectUrlIndexRequest](google_search_console/models/inspect_url_index_request.py) \| [InspectUrlIndexRequestDict](google_search_console/models/inspect_url_index_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InspectUrlIndexResponse](google_search_console/models/inspect_url_index_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[SearchconsoleUrlInspectionIndexInspectErrorBody](google_search_console/errors/searchconsole_url_inspection_index_inspect_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTestingTools

> Source: [UrlTestingTools](google_search_console/apis/url_testing_tools.py)

<details>
<summary><code>def searchconsole_url_testing_tools_mobile_friendly_test_run(body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RunMobileFriendlyTestResponse</code></summary>

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

**Sync**

```python
try:
    response = client.url_testing_tools.searchconsole_url_testing_tools_mobile_friendly_test_run(
        RunMobileFriendlyTestRequest()
    )
    # TODO: Handle 'response' of type RunMobileFriendlyTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody
```

**Async**

```python
try:
    response = await async_client.url_testing_tools.searchconsole_url_testing_tools_mobile_friendly_test_run(
        RunMobileFriendlyTestRequest()
    )
    # TODO: Handle 'response' of type RunMobileFriendlyTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunMobileFriendlyTestRequest](google_search_console/models/run_mobile_friendly_test_request.py) \| [RunMobileFriendlyTestRequestDict](google_search_console/models/run_mobile_friendly_test_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](google_search_console/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunMobileFriendlyTestResponse](google_search_console/models/run_mobile_friendly_test_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](google_search_console/core/exceptions.py)&#91;[SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody](google_search_console/errors/searchconsole_url_testing_tools_mobile_friendly_test_run_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[GoogleRpcError](google_search_console/models/google_rpc_error.py)</code> |
| anything unmapped | <code>[RawError](google_search_console/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

