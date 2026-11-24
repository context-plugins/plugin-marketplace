# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [GoogleSearchConsoleClient](google_search_console/client.py)

## Searchanalytics

> Source: [Searchanalytics](google_search_console/apis/searchanalytics.py)

<details>
<summary><code>def webmasters_searchanalytics_query(site_url: str, body: SearchAnalyticsQueryRequest | SearchAnalyticsQueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchAnalyticsQueryResponse, WebmastersSearchanalyticsQueryErrorBody]</code></summary>

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
result = client.searchanalytics.with_raw_response.webmasters_searchanalytics_query(
    "some example string", SearchAnalyticsQueryRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchAnalyticsQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSearchanalyticsQueryErrorBody
```

**Async**

```python
result = await async_client.searchanalytics.with_raw_response.webmasters_searchanalytics_query(
    "some example string", SearchAnalyticsQueryRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchAnalyticsQueryResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSearchanalyticsQueryErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[SearchAnalyticsQueryResponse](google_search_console/models/search_analytics_query_response.py), [WebmastersSearchanalyticsQueryErrorBody](google_search_console/errors/webmasters_searchanalytics_query_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchAnalyticsQueryResponse](google_search_console/models/search_analytics_query_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WebmastersSearchanalyticsQueryErrorBody](google_search_console/errors/webmasters_searchanalytics_query_error.py)</code>

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
<summary><code>def webmasters_sitemaps_delete(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, WebmastersSitemapsDeleteErrorBody]</code></summary>

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
result = client.sitemaps.with_raw_response.webmasters_sitemaps_delete("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsDeleteErrorBody
```

**Async**

```python
result = await async_client.sitemaps.with_raw_response.webmasters_sitemaps_delete(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsDeleteErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;None, [WebmastersSitemapsDeleteErrorBody](google_search_console/errors/webmasters_sitemaps_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[WebmastersSitemapsDeleteErrorBody](google_search_console/errors/webmasters_sitemaps_delete_error.py)</code>

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
<summary><code>def webmasters_sitemaps_get(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WmxSitemap, WebmastersSitemapsGetErrorBody]</code></summary>

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
result = client.sitemaps.with_raw_response.webmasters_sitemaps_get("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WmxSitemap
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsGetErrorBody
```

**Async**

```python
result = await async_client.sitemaps.with_raw_response.webmasters_sitemaps_get(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WmxSitemap
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsGetErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[WmxSitemap](google_search_console/models/wmx_sitemap.py), [WebmastersSitemapsGetErrorBody](google_search_console/errors/webmasters_sitemaps_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WmxSitemap](google_search_console/models/wmx_sitemap.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WebmastersSitemapsGetErrorBody](google_search_console/errors/webmasters_sitemaps_get_error.py)</code>

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
<summary><code>def webmasters_sitemaps_list(site_url: str, *, sitemap_index: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitemapsListResponse, WebmastersSitemapsListErrorBody]</code></summary>

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
result = client.sitemaps.with_raw_response.webmasters_sitemaps_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitemapsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsListErrorBody
```

**Async**

```python
result = await async_client.sitemaps.with_raw_response.webmasters_sitemaps_list("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitemapsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsListErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[SitemapsListResponse](google_search_console/models/sitemaps_list_response.py), [WebmastersSitemapsListErrorBody](google_search_console/errors/webmasters_sitemaps_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitemapsListResponse](google_search_console/models/sitemaps_list_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WebmastersSitemapsListErrorBody](google_search_console/errors/webmasters_sitemaps_list_error.py)</code>

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
<summary><code>def webmasters_sitemaps_submit(site_url: str, feedpath: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, WebmastersSitemapsSubmitErrorBody]</code></summary>

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
result = client.sitemaps.with_raw_response.webmasters_sitemaps_submit("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsSubmitErrorBody
```

**Async**

```python
result = await async_client.sitemaps.with_raw_response.webmasters_sitemaps_submit(
    "some example string", "some example string"
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitemapsSubmitErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;None, [WebmastersSitemapsSubmitErrorBody](google_search_console/errors/webmasters_sitemaps_submit_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[WebmastersSitemapsSubmitErrorBody](google_search_console/errors/webmasters_sitemaps_submit_error.py)</code>

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
<summary><code>def webmasters_sites_add(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, WebmastersSitesAddErrorBody]</code></summary>

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
result = client.sites.with_raw_response.webmasters_sites_add("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesAddErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.webmasters_sites_add("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesAddErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;None, [WebmastersSitesAddErrorBody](google_search_console/errors/webmasters_sites_add_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[WebmastersSitesAddErrorBody](google_search_console/errors/webmasters_sites_add_error.py)</code>

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
<summary><code>def webmasters_sites_delete(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, WebmastersSitesDeleteErrorBody]</code></summary>

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
result = client.sites.with_raw_response.webmasters_sites_delete("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesDeleteErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.webmasters_sites_delete("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesDeleteErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;None, [WebmastersSitesDeleteErrorBody](google_search_console/errors/webmasters_sites_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[WebmastersSitesDeleteErrorBody](google_search_console/errors/webmasters_sites_delete_error.py)</code>

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
<summary><code>def webmasters_sites_get(site_url: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WmxSite, WebmastersSitesGetErrorBody]</code></summary>

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
result = client.sites.with_raw_response.webmasters_sites_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WmxSite
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesGetErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.webmasters_sites_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WmxSite
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesGetErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[WmxSite](google_search_console/models/wmx_site.py), [WebmastersSitesGetErrorBody](google_search_console/errors/webmasters_sites_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WmxSite](google_search_console/models/wmx_site.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WebmastersSitesGetErrorBody](google_search_console/errors/webmasters_sites_get_error.py)</code>

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
<summary><code>def webmasters_sites_list(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitesListResponse, WebmastersSitesListErrorBody]</code></summary>

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
result = client.sites.with_raw_response.webmasters_sites_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesListErrorBody
```

**Async**

```python
result = await async_client.sites.with_raw_response.webmasters_sites_list()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitesListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type WebmastersSitesListErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[SitesListResponse](google_search_console/models/sites_list_response.py), [WebmastersSitesListErrorBody](google_search_console/errors/webmasters_sites_list_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitesListResponse](google_search_console/models/sites_list_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[WebmastersSitesListErrorBody](google_search_console/errors/webmasters_sites_list_error.py)</code>

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
<summary><code>def searchconsole_url_inspection_index_inspect(body: InspectUrlIndexRequest | InspectUrlIndexRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InspectUrlIndexResponse, SearchconsoleUrlInspectionIndexInspectErrorBody]</code></summary>

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
result = client.url_inspection.with_raw_response.searchconsole_url_inspection_index_inspect(InspectUrlIndexRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InspectUrlIndexResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchconsoleUrlInspectionIndexInspectErrorBody
```

**Async**

```python
result = await async_client.url_inspection.with_raw_response.searchconsole_url_inspection_index_inspect(
    InspectUrlIndexRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InspectUrlIndexResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchconsoleUrlInspectionIndexInspectErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[InspectUrlIndexResponse](google_search_console/models/inspect_url_index_response.py), [SearchconsoleUrlInspectionIndexInspectErrorBody](google_search_console/errors/searchconsole_url_inspection_index_inspect_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InspectUrlIndexResponse](google_search_console/models/inspect_url_index_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SearchconsoleUrlInspectionIndexInspectErrorBody](google_search_console/errors/searchconsole_url_inspection_index_inspect_error.py)</code>

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
<summary><code>def searchconsole_url_testing_tools_mobile_friendly_test_run(body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunMobileFriendlyTestResponse, SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody]</code></summary>

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
result = client.url_testing_tools.with_raw_response.searchconsole_url_testing_tools_mobile_friendly_test_run(
    RunMobileFriendlyTestRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunMobileFriendlyTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody
```

**Async**

```python
result = await async_client.url_testing_tools.with_raw_response.searchconsole_url_testing_tools_mobile_friendly_test_run(
    RunMobileFriendlyTestRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunMobileFriendlyTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody
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

**Returns**: <code>[ApiResult](google_search_console/core/results.py)&#91;[RunMobileFriendlyTestResponse](google_search_console/models/run_mobile_friendly_test_response.py), [SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody](google_search_console/errors/searchconsole_url_testing_tools_mobile_friendly_test_run_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunMobileFriendlyTestResponse](google_search_console/models/run_mobile_friendly_test_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody](google_search_console/errors/searchconsole_url_testing_tools_mobile_friendly_test_run_error.py)</code>

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

