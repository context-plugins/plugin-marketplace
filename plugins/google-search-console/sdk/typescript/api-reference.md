# Reference

> Source: [GoogleSearchConsoleClient](src/client.ts)

## Searchanalytics

> Source: [Searchanalytics](src/resources/searchanalytics.ts)

<details>
<summary><code>webmastersSearchanalyticsQuery(request: Searchanalytics.WebmastersSearchanalyticsQueryRequest, options?: RequestOptions): ApiPromise&lt;SearchAnalyticsQueryResponse, Searchanalytics.WebmastersSearchanalyticsQueryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.searchanalytics.webmastersSearchanalyticsQuery({
    siteUrl: "some example string",
    body: {},
  });
  // TODO: Handle 'response' of type SearchAnalyticsQueryResponse
} catch (err) {
  // TODO: Handle 'err' of type Searchanalytics.WebmastersSearchanalyticsQueryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.searchanalytics
  .webmastersSearchanalyticsQuery({ siteUrl: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchAnalyticsQueryResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>body</code> | <code>[SearchAnalyticsQueryRequest](src/models/search-analytics-query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.searchanalytics.webmastersSearchanalyticsQuery(request)`

- **OnSuccess**: <code>[SearchAnalyticsQueryResponse](src/models/search-analytics-query-response.ts)</code>
- **OnError**: throws <code>[Searchanalytics.WebmastersSearchanalyticsQueryError](src/resources/searchanalytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.searchanalytics.webmastersSearchanalyticsQuery(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchAnalyticsQueryResponse, Searchanalytics.WebmastersSearchanalyticsQueryError&gt;</code>, with `result.value` of type <code>[SearchAnalyticsQueryResponse](src/models/search-analytics-query-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sitemaps

> Source: [Sitemaps](src/resources/sitemaps.ts)

<details>
<summary><code>webmastersSitemapsDelete(request: Sitemaps.WebmastersSitemapsDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sitemaps.WebmastersSitemapsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sitemaps.webmastersSitemapsDelete({
    siteUrl: "some example string",
    feedpath: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Sitemaps.WebmastersSitemapsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sitemaps
  .webmastersSitemapsDelete({ siteUrl: "some example string", feedpath: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>string</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sitemaps.webmastersSitemapsDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sitemaps.WebmastersSitemapsDeleteError](src/resources/sitemaps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sitemaps.webmastersSitemapsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sitemaps.WebmastersSitemapsDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitemapsGet(request: Sitemaps.WebmastersSitemapsGetRequest, options?: RequestOptions): ApiPromise&lt;WmxSitemap, Sitemaps.WebmastersSitemapsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about a specific sitemap.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sitemaps.webmastersSitemapsGet({
    siteUrl: "some example string",
    feedpath: "some example string",
  });
  // TODO: Handle 'response' of type WmxSitemap
} catch (err) {
  // TODO: Handle 'err' of type Sitemaps.WebmastersSitemapsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sitemaps
  .webmastersSitemapsGet({ siteUrl: "some example string", feedpath: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WmxSitemap
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>string</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sitemaps.webmastersSitemapsGet(request)`

- **OnSuccess**: <code>[WmxSitemap](src/models/wmx-sitemap.ts)</code>
- **OnError**: throws <code>[Sitemaps.WebmastersSitemapsGetError](src/resources/sitemaps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sitemaps.webmastersSitemapsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WmxSitemap, Sitemaps.WebmastersSitemapsGetError&gt;</code>, with `result.value` of type <code>[WmxSitemap](src/models/wmx-sitemap.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitemapsList(request: Sitemaps.WebmastersSitemapsListRequest, options?: RequestOptions): ApiPromise&lt;SitemapsListResponse, Sitemaps.WebmastersSitemapsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sitemaps.webmastersSitemapsList({ siteUrl: "some example string" });
  // TODO: Handle 'response' of type SitemapsListResponse
} catch (err) {
  // TODO: Handle 'err' of type Sitemaps.WebmastersSitemapsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sitemaps.webmastersSitemapsList({ siteUrl: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitemapsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>sitemapIndex?</code> | <code>string</code> | A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sitemaps.webmastersSitemapsList(request)`

- **OnSuccess**: <code>[SitemapsListResponse](src/models/sitemaps-list-response.ts)</code>
- **OnError**: throws <code>[Sitemaps.WebmastersSitemapsListError](src/resources/sitemaps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sitemaps.webmastersSitemapsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitemapsListResponse, Sitemaps.WebmastersSitemapsListError&gt;</code>, with `result.value` of type <code>[SitemapsListResponse](src/models/sitemaps-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitemapsSubmit(request: Sitemaps.WebmastersSitemapsSubmitRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sitemaps.WebmastersSitemapsSubmitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits a sitemap for a site.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sitemaps.webmastersSitemapsSubmit({
    siteUrl: "some example string",
    feedpath: "some example string",
  });
} catch (err) {
  // TODO: Handle 'err' of type Sitemaps.WebmastersSitemapsSubmitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sitemaps
  .webmastersSitemapsSubmit({ siteUrl: "some example string", feedpath: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The site's URL, including protocol. For example: `http://www.example.com/`. |
| <code>feedpath</code> | <code>string</code> | The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sitemaps.webmastersSitemapsSubmit(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sitemaps.WebmastersSitemapsSubmitError](src/resources/sitemaps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sitemaps.webmastersSitemapsSubmit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sitemaps.WebmastersSitemapsSubmitError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/resources/sites.ts)

<details>
<summary><code>webmastersSitesAdd(request: Sites.WebmastersSitesAddRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sites.WebmastersSitesAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a site to the set of the user's sites in Search Console.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sites.webmastersSitesAdd({ siteUrl: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Sites.WebmastersSitesAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.webmastersSitesAdd({ siteUrl: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The URL of the site to add. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.webmastersSitesAdd(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sites.WebmastersSitesAddError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.webmastersSitesAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sites.WebmastersSitesAddError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitesDelete(request: Sites.WebmastersSitesDeleteRequest, options?: RequestOptions): ApiPromise&lt;undefined, Sites.WebmastersSitesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a site from the set of the user's Search Console sites.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.sites.webmastersSitesDelete({ siteUrl: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Sites.WebmastersSitesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.webmastersSitesDelete({ siteUrl: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.webmastersSitesDelete(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Sites.WebmastersSitesDeleteError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.webmastersSitesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Sites.WebmastersSitesDeleteError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitesGet(request: Sites.WebmastersSitesGetRequest, options?: RequestOptions): ApiPromise&lt;WmxSite, Sites.WebmastersSitesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about specific site.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.webmastersSitesGet({ siteUrl: "some example string" });
  // TODO: Handle 'response' of type WmxSite
} catch (err) {
  // TODO: Handle 'err' of type Sites.WebmastersSitesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.webmastersSitesGet({ siteUrl: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WmxSite
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteUrl</code> | <code>string</code> | The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.webmastersSitesGet(request)`

- **OnSuccess**: <code>[WmxSite](src/models/wmx-site.ts)</code>
- **OnError**: throws <code>[Sites.WebmastersSitesGetError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.webmastersSitesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WmxSite, Sites.WebmastersSitesGetError&gt;</code>, with `result.value` of type <code>[WmxSite](src/models/wmx-site.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webmastersSitesList(options?: RequestOptions): ApiPromise&lt;SitesListResponse, Sites.WebmastersSitesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the user's Search Console sites.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.webmastersSitesList();
  // TODO: Handle 'response' of type SitesListResponse
} catch (err) {
  // TODO: Handle 'err' of type Sites.WebmastersSitesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.webmastersSitesList().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.webmastersSitesList()`

- **OnSuccess**: <code>[SitesListResponse](src/models/sites-list-response.ts)</code>
- **OnError**: throws <code>[Sites.WebmastersSitesListError](src/resources/sites.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sites.webmastersSitesList().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitesListResponse, Sites.WebmastersSitesListError&gt;</code>, with `result.value` of type <code>[SitesListResponse](src/models/sites-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UrlInspection

> Source: [UrlInspection](src/resources/url-inspection.ts)

<details>
<summary><code>searchconsoleUrlInspectionIndexInspect(request: UrlInspection.SearchconsoleUrlInspectionIndexInspectRequest, options?: RequestOptions): ApiPromise&lt;InspectUrlIndexResponse, UrlInspection.SearchconsoleUrlInspectionIndexInspectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Index inspection.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.urlInspection.searchconsoleUrlInspectionIndexInspect({ body: {} });
  // TODO: Handle 'response' of type InspectUrlIndexResponse
} catch (err) {
  // TODO: Handle 'err' of type UrlInspection.SearchconsoleUrlInspectionIndexInspectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.urlInspection.searchconsoleUrlInspectionIndexInspect({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InspectUrlIndexResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InspectUrlIndexRequest](src/models/inspect-url-index-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.urlInspection.searchconsoleUrlInspectionIndexInspect(request)`

- **OnSuccess**: <code>[InspectUrlIndexResponse](src/models/inspect-url-index-response.ts)</code>
- **OnError**: throws <code>[UrlInspection.SearchconsoleUrlInspectionIndexInspectError](src/resources/url-inspection.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.urlInspection.searchconsoleUrlInspectionIndexInspect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InspectUrlIndexResponse, UrlInspection.SearchconsoleUrlInspectionIndexInspectError&gt;</code>, with `result.value` of type <code>[InspectUrlIndexResponse](src/models/inspect-url-index-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UrlTestingTools

> Source: [UrlTestingTools](src/resources/url-testing-tools.ts)

<details>
<summary><code>searchconsoleUrlTestingToolsMobileFriendlyTestRun(request: UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest, options?: RequestOptions): ApiPromise&lt;RunMobileFriendlyTestResponse, UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Runs Mobile-Friendly Test for a given URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.urlTestingTools.searchconsoleUrlTestingToolsMobileFriendlyTestRun({
    body: {},
  });
  // TODO: Handle 'response' of type RunMobileFriendlyTestResponse
} catch (err) {
  // TODO: Handle 'err' of type UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.urlTestingTools
  .searchconsoleUrlTestingToolsMobileFriendlyTestRun({ body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RunMobileFriendlyTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunMobileFriendlyTestRequest](src/models/run-mobile-friendly-test-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.urlTestingTools.searchconsoleUrlTestingToolsMobileFriendlyTestRun(request)`

- **OnSuccess**: <code>[RunMobileFriendlyTestResponse](src/models/run-mobile-friendly-test-response.ts)</code>
- **OnError**: throws <code>[UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError](src/resources/url-testing-tools.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.urlTestingTools.searchconsoleUrlTestingToolsMobileFriendlyTestRun(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RunMobileFriendlyTestResponse, UrlTestingTools.SearchconsoleUrlTestingToolsMobileFriendlyTestRunError&gt;</code>, with `result.value` of type <code>[RunMobileFriendlyTestResponse](src/models/run-mobile-friendly-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[GoogleSearchConsoleError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

