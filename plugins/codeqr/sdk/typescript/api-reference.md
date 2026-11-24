# Reference

> Source: [CodeQrClient](src/client.ts)

## Analytics

> Source: [Analytics](src/resources/analytics.ts)

<details>
<summary><code>retrieveAnalytics(request?: Analytics.RetrieveAnalyticsRequest, options?: RequestOptions): ApiPromise&lt;AnalyticsResponse, Analytics.RetrieveAnalyticsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the `event` and `type` query parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.analytics.retrieveAnalytics({
    timezone: "America/New_York",
    city: "New York",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referer: "google.com",
  });
  // TODO: Handle 'response' of type AnalyticsResponse
} catch (err) {
  // TODO: Handle 'err' of type Analytics.RetrieveAnalyticsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.analytics
  .retrieveAnalytics({
    timezone: "America/New_York",
    city: "New York",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referer: "google.com",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AnalyticsResponse
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
| <code>event?</code> | <code>[Event](src/models/event.ts)</code> | The type of event to retrieve analytics for. Defaults to 'analytics'.<br>**Default**: "clicks" |
| <code>groupBy?</code> | <code>[GroupBy](src/models/group-by.ts)</code> | The parameter to group the analytics data points by. Defaults to 'count' if undefined.<br>**Default**: "count" |
| <code>domain?</code> | <code>string</code> | The domain of the short link. |
| <code>key?</code> | <code>string</code> | The short link slug. |
| <code>linkId?</code> | <code>string</code> | The unique ID of the short link on CodeQR. |
| <code>qrcodeId?</code> | <code>string</code> | The unique ID of the QR code on CodeQR. |
| <code>pageId?</code> | <code>string</code> | The unique ID of the page on CodeQR. |
| <code>externalId?</code> | <code>string</code> | This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| <code>interval?</code> | <code>[Interval](src/models/interval.ts)</code> | The interval to retrieve analytics for. Takes precedence over start and end. |
| <code>start?</code> | <code>string</code> | The start date and time when to retrieve analytics from. |
| <code>end?</code> | <code>string</code> | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. |
| <code>timezone?</code> | <code>string</code> | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.<br>**Default**: "UTC" |
| <code>continent?</code> | <code>[ContinentCode](src/models/continent-code.ts)</code> | The continent to retrieve analytics for. |
| <code>country?</code> | <code>[CountryCode](src/models/country-code.ts)</code> | The country to retrieve analytics for. |
| <code>city?</code> | <code>string</code> | The city to retrieve analytics for. |
| <code>device?</code> | <code>string</code> | The device to retrieve analytics for. |
| <code>browser?</code> | <code>string</code> | The browser to retrieve analytics for. |
| <code>os?</code> | <code>string</code> | The OS to retrieve analytics for. |
| <code>referer?</code> | <code>string</code> | The referer to retrieve analytics for. |
| <code>url?</code> | <code>string</code> | The URL to retrieve analytics for. |
| <code>excludeRoot?</code> | <code>boolean</code> | Whether to exclude the root link from the response. |
| <code>root?</code> | <code>boolean</code> | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| <code>tagId?</code> | <code>string</code> | The tag ID to retrieve analytics for. |
| <code>utmSource?</code> | <code>string</code> | UTM source to filter analytics by. |
| <code>utmMedium?</code> | <code>string</code> | UTM medium to filter analytics by. |
| <code>utmCampaign?</code> | <code>string</code> | UTM campaign to filter analytics by. |
| <code>utmContent?</code> | <code>string</code> | UTM content to filter analytics by. |
| <code>utmTerm?</code> | <code>string</code> | UTM term to filter analytics by. |
| <code>type?</code> | <code>string</code> | The type of analytics to retrieve. |
| <code>types?</code> | <code>string</code> | The types of analytics to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.analytics.retrieveAnalytics(request)`

- **OnSuccess**: <code>[AnalyticsResponse](src/models/unions/analytics-response.ts)</code>
- **OnError**: throws <code>[Analytics.RetrieveAnalyticsError](src/resources/analytics.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.analytics.retrieveAnalytics(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AnalyticsResponse, Analytics.RetrieveAnalyticsError&gt;</code>, with `result.value` of type <code>[AnalyticsResponse](src/models/unions/analytics-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](src/resources/domains.ts)

<details>
<summary><code>createDomain(request?: Domains.CreateDomainRequest, options?: RequestOptions): ApiPromise&lt;DomainSchema, Domains.CreateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a domain for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domains.createDomain();
  // TODO: Handle 'response' of type DomainSchema
} catch (err) {
  // TODO: Handle 'err' of type Domains.CreateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domains.createDomain().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainSchema
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
| <code>body?</code> | <code>[DomainsRequest](src/models/domains-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domains.createDomain(request)`

- **OnSuccess**: <code>[DomainSchema](src/models/domain-schema.ts)</code>
- **OnError**: throws <code>[Domains.CreateDomainError](src/resources/domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domains.createDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainSchema, Domains.CreateDomainError&gt;</code>, with `result.value` of type <code>[DomainSchema](src/models/domain-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDomain(request: Domains.DeleteDomainRequest, options?: RequestOptions): ApiPromise&lt;DomainsResponse, Domains.DeleteDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domains.deleteDomain({ slug: "acme.com" });
  // TODO: Handle 'response' of type DomainsResponse
} catch (err) {
  // TODO: Handle 'err' of type Domains.DeleteDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domains.deleteDomain({ slug: "acme.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainsResponse
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
| <code>slug</code> | <code>string</code> | The domain name. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domains.deleteDomain(request)`

- **OnSuccess**: <code>[DomainsResponse](src/models/domains-response.ts)</code>
- **OnError**: throws <code>[Domains.DeleteDomainError](src/resources/domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domains.deleteDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainsResponse, Domains.DeleteDomainError&gt;</code>, with `result.value` of type <code>[DomainsResponse](src/models/domains-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDomains(request?: Domains.ListDomainsRequest, options?: RequestOptions): ApiPromise&lt;DomainSchema[], Domains.ListDomainsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of domains associated with the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domains.listDomains({ page: 1, pageSize: 50 });
  // TODO: Handle 'response' of type DomainSchema[]
} catch (err) {
  // TODO: Handle 'err' of type Domains.ListDomainsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domains.listDomains({ page: 1, pageSize: 50 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainSchema[]
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
| <code>archived?</code> | <code>boolean</code> | Whether to include archived domains in the response. Defaults to `false` if not provided.<br>**Default**: false |
| <code>search?</code> | <code>string</code> | The search term to filter the domains by. |
| <code>page?</code> | <code>number</code> | The page number for pagination.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The number of items per page.<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domains.listDomains(request)`

- **OnSuccess**: <code>[DomainSchema](src/models/domain-schema.ts)[]</code>
- **OnError**: throws <code>[Domains.ListDomainsError](src/resources/domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domains.listDomains(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainSchema[], Domains.ListDomainsError&gt;</code>, with `result.value` of type <code>[DomainSchema](src/models/domain-schema.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateDomain(request: Domains.UpdateDomainRequest, options?: RequestOptions): ApiPromise&lt;DomainSchema, Domains.UpdateDomainError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a domain for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.domains.updateDomain({ slug: "acme.com" });
  // TODO: Handle 'response' of type DomainSchema
} catch (err) {
  // TODO: Handle 'err' of type Domains.UpdateDomainError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.domains.updateDomain({ slug: "acme.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DomainSchema
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
| <code>slug</code> | <code>string</code> | The domain name. |
| <code>body?</code> | <code>[DomainsRequest1](src/models/domains-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.domains.updateDomain(request)`

- **OnSuccess**: <code>[DomainSchema](src/models/domain-schema.ts)</code>
- **OnError**: throws <code>[Domains.UpdateDomainError](src/resources/domains.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.domains.updateDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DomainSchema, Domains.UpdateDomainError&gt;</code>, with `result.value` of type <code>[DomainSchema](src/models/domain-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>listEvents(request?: Events.ListEventsRequest, options?: RequestOptions): ApiPromise&lt;EventsResponse[], Events.ListEventsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of events for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEvents({
    timezone: "America/New_York",
    city: "New York",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referer: "google.com",
  });
  // TODO: Handle 'response' of type EventsResponse[]
} catch (err) {
  // TODO: Handle 'err' of type Events.ListEventsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events
  .listEvents({
    timezone: "America/New_York",
    city: "New York",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows",
    referer: "google.com",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EventsResponse[]
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
| <code>event?</code> | <code>[EventCodeqrIoEventsApi](src/models/event-codeqr-io-events-api.ts)</code> | The type of event to retrieve analytics for. Defaults to 'clicks'.<br>**Default**: "clicks" |
| <code>domain?</code> | <code>string</code> | The domain of the short link. |
| <code>key?</code> | <code>string</code> | The short link slug. |
| <code>linkId?</code> | <code>string</code> | The unique ID of the short link on CodeQR. |
| <code>qrcodeId?</code> | <code>string</code> | The unique ID of the QR code on CodeQR. |
| <code>pageId?</code> | <code>string</code> | The unique ID of the page on CodeQR. |
| <code>externalId?</code> | <code>string</code> | This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter. |
| <code>interval?</code> | <code>[IntervalCodeqrIoEventsApi](src/models/interval-codeqr-io-events-api.ts)</code> | The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h.<br>**Default**: "24h" |
| <code>start?</code> | <code>string</code> | The start date and time when to retrieve analytics from. |
| <code>end?</code> | <code>string</code> | The end date and time when to retrieve analytics from. If not provided, defaults to the current date. |
| <code>timezone?</code> | <code>string</code> | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.<br>**Default**: "UTC" |
| <code>continent?</code> | <code>[ContinentCode](src/models/continent-code.ts)</code> | The continent to retrieve analytics for. |
| <code>country?</code> | <code>[CountryCode](src/models/country-code.ts)</code> | The country to retrieve analytics for. |
| <code>city?</code> | <code>string</code> | The city to retrieve analytics for. |
| <code>device?</code> | <code>string</code> | The device to retrieve analytics for. |
| <code>browser?</code> | <code>string</code> | The browser to retrieve analytics for. |
| <code>os?</code> | <code>string</code> | The OS to retrieve analytics for. |
| <code>referer?</code> | <code>string</code> | The referer to retrieve analytics for. |
| <code>url?</code> | <code>string</code> | The URL to retrieve analytics for. |
| <code>excludeRoot?</code> | <code>boolean</code> | Whether to exclude the root link from the response. |
| <code>root?</code> | <code>boolean</code> | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both. |
| <code>tagId?</code> | <code>string</code> | The tag ID to retrieve analytics for. |
| <code>utmSource?</code> | <code>string</code> | UTM source to filter analytics by. |
| <code>utmMedium?</code> | <code>string</code> | UTM medium to filter analytics by. |
| <code>utmCampaign?</code> | <code>string</code> | UTM campaign to filter analytics by. |
| <code>utmContent?</code> | <code>string</code> | UTM content to filter analytics by. |
| <code>utmTerm?</code> | <code>string</code> | UTM term to filter analytics by. |
| <code>type?</code> | <code>string</code> | The type of analytics to retrieve. |
| <code>types?</code> | <code>string</code> | The types of analytics to retrieve. |
| <code>page?</code> | <code>number</code> | -<br>**Default**: 1 |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 100 |
| <code>order?</code> | <code>[Order](src/models/order.ts)</code> | -<br>**Default**: "desc" |
| <code>sortBy?</code> | <code>[SortBy](src/models/sort-by.ts)</code> | -<br>**Default**: "timestamp" |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listEvents(request)`

- **OnSuccess**: <code>[EventsResponse](src/models/unions/events-response.ts)[]</code>
- **OnError**: throws <code>[Events.ListEventsError](src/resources/events.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.events.listEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EventsResponse[], Events.ListEventsError&gt;</code>, with `result.value` of type <code>[EventsResponse](src/models/unions/events-response.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](src/resources/folders.ts)

<details>
<summary><code>createFolder(request?: Folders.CreateFolderRequest, options?: RequestOptions): ApiPromise&lt;FolderSchema, Folders.CreateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a folder for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.createFolder();
  // TODO: Handle 'response' of type FolderSchema
} catch (err) {
  // TODO: Handle 'err' of type Folders.CreateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.createFolder().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSchema
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
| <code>body?</code> | <code>[FoldersRequest](src/models/folders-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.createFolder(request)`

- **OnSuccess**: <code>[FolderSchema](src/models/folder-schema.ts)</code>
- **OnError**: throws <code>[Folders.CreateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.createFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSchema, Folders.CreateFolderError&gt;</code>, with `result.value` of type <code>[FolderSchema](src/models/folder-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFolder(request: Folders.DeleteFolderRequest, options?: RequestOptions): ApiPromise&lt;FoldersResponse, Folders.DeleteFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.deleteFolder({ id: "some example string" });
  // TODO: Handle 'response' of type FoldersResponse
} catch (err) {
  // TODO: Handle 'err' of type Folders.DeleteFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.deleteFolder({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FoldersResponse
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
| <code>id</code> | <code>string</code> | The ID of the folder to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.deleteFolder(request)`

- **OnSuccess**: <code>[FoldersResponse](src/models/folders-response.ts)</code>
- **OnError**: throws <code>[Folders.DeleteFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.deleteFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FoldersResponse, Folders.DeleteFolderError&gt;</code>, with `result.value` of type <code>[FoldersResponse](src/models/folders-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listFolders(request?: Folders.ListFoldersRequest, options?: RequestOptions): ApiPromise&lt;FolderSchema[], Folders.ListFoldersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of folders for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.listFolders({ page: 1, pageSize: 50 });
  // TODO: Handle 'response' of type FolderSchema[]
} catch (err) {
  // TODO: Handle 'err' of type Folders.ListFoldersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.listFolders({ page: 1, pageSize: 50 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSchema[]
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
| <code>search?</code> | <code>string</code> | The search term to filter the folders by. |
| <code>page?</code> | <code>number</code> | The page number for pagination.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The number of items per page.<br>**Default**: 50 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.listFolders(request)`

- **OnSuccess**: <code>[FolderSchema](src/models/folder-schema.ts)[]</code>
- **OnError**: throws <code>[Folders.ListFoldersError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.listFolders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSchema[], Folders.ListFoldersError&gt;</code>, with `result.value` of type <code>[FolderSchema](src/models/folder-schema.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateFolder(request: Folders.UpdateFolderRequest, options?: RequestOptions): ApiPromise&lt;FolderSchema, Folders.UpdateFolderError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a folder in the workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.folders.updateFolder({ id: "some example string" });
  // TODO: Handle 'response' of type FolderSchema
} catch (err) {
  // TODO: Handle 'err' of type Folders.UpdateFolderError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.folders.updateFolder({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FolderSchema
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
| <code>id</code> | <code>string</code> | The ID of the folder to update. |
| <code>body?</code> | <code>[FoldersRequest1](src/models/folders-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.folders.updateFolder(request)`

- **OnSuccess**: <code>[FolderSchema](src/models/folder-schema.ts)</code>
- **OnError**: throws <code>[Folders.UpdateFolderError](src/resources/folders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.folders.updateFolder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FolderSchema, Folders.UpdateFolderError&gt;</code>, with `result.value` of type <code>[FolderSchema](src/models/folder-schema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Links

> Source: [Links](src/resources/links.ts)

<details>
<summary><code>bulkCreateLinks(request?: Links.BulkCreateLinksRequest, options?: RequestOptions): ApiPromise&lt;LinksBulkResponse1[], Links.BulkCreateLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 links for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.bulkCreateLinks();
  // TODO: Handle 'response' of type LinksBulkResponse1[]
} catch (err) {
  // TODO: Handle 'err' of type Links.BulkCreateLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.bulkCreateLinks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksBulkResponse1[]
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
| <code>body?</code> | <code>[LinksBulkRequest](src/models/links-bulk-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.bulkCreateLinks(request)`

- **OnSuccess**: <code>[LinksBulkResponse1](src/models/unions/links-bulk-response1.ts)[]</code>
- **OnError**: throws <code>[Links.BulkCreateLinksError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.bulkCreateLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksBulkResponse1[], Links.BulkCreateLinksError&gt;</code>, with `result.value` of type <code>[LinksBulkResponse1](src/models/unions/links-bulk-response1.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkDeleteLinks(request: Links.BulkDeleteLinksRequest, options?: RequestOptions): ApiPromise&lt;LinksBulkResponse, Links.BulkDeleteLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 links for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.bulkDeleteLinks({
    linkIds: ["clux0rgak00011...", "clux0rgak00022..."],
  });
  // TODO: Handle 'response' of type LinksBulkResponse
} catch (err) {
  // TODO: Handle 'err' of type Links.BulkDeleteLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links
  .bulkDeleteLinks({ linkIds: ["clux0rgak00011...", "clux0rgak00022..."] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksBulkResponse
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
| <code>linkIds</code> | <code>string[]</code> | Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.bulkDeleteLinks(request)`

- **OnSuccess**: <code>[LinksBulkResponse](src/models/links-bulk-response.ts)</code>
- **OnError**: throws <code>[Links.BulkDeleteLinksError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.bulkDeleteLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksBulkResponse, Links.BulkDeleteLinksError&gt;</code>, with `result.value` of type <code>[LinksBulkResponse](src/models/links-bulk-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLink(request?: Links.CreateLinkRequest, options?: RequestOptions): ApiPromise&lt;LinkCodeqrIoLinksApi, Links.CreateLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new link for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.createLink();
  // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
} catch (err) {
  // TODO: Handle 'err' of type Links.CreateLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.createLink().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkCodeqrIoLinksApi
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
| <code>body?</code> | <code>[LinksRequest](src/models/links-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.createLink(request)`

- **OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: throws <code>[Links.CreateLinkError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.createLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkCodeqrIoLinksApi, Links.CreateLinkError&gt;</code>, with `result.value` of type <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLink(request: Links.DeleteLinkRequest, options?: RequestOptions): ApiPromise&lt;LinksResponse, Links.DeleteLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a link for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.deleteLink({ linkId: "some example string" });
  // TODO: Handle 'response' of type LinksResponse
} catch (err) {
  // TODO: Handle 'err' of type Links.DeleteLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.deleteLink({ linkId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinksResponse
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
| <code>linkId</code> | <code>string</code> | The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.deleteLink(request)`

- **OnSuccess**: <code>[LinksResponse](src/models/links-response.ts)</code>
- **OnError**: throws <code>[Links.DeleteLinkError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.deleteLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinksResponse, Links.DeleteLinkError&gt;</code>, with `result.value` of type <code>[LinksResponse](src/models/links-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLinkInfo(request: Links.GetLinkInfoRequest, options?: RequestOptions): ApiPromise&lt;LinkCodeqrIoLinksApi, Links.GetLinkInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.getLinkInfo({
    projectSlug: "some example string",
    domain: "some example string",
    key: "some example string",
    linkId: "clux0rgak00011...",
    externalId: "ext_123456",
  });
  // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
} catch (err) {
  // TODO: Handle 'err' of type Links.GetLinkInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links
  .getLinkInfo({
    projectSlug: "some example string",
    domain: "some example string",
    key: "some example string",
    linkId: "clux0rgak00011...",
    externalId: "ext_123456",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkCodeqrIoLinksApi
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
| <code>projectSlug</code> | <code>string</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | The key of the link to be retrieved. For example, for `codeqr.link/github`, the key is `github`. |
| <code>linkId?</code> | <code>string</code> | The unique ID of the short link. |
| <code>externalId?</code> | <code>string</code> | This is the ID of the link in your database. Must be prefixed with `ext_` when passed as a query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.getLinkInfo(request)`

- **OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: throws <code>[Links.GetLinkInfoError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.getLinkInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkCodeqrIoLinksApi, Links.GetLinkInfoError&gt;</code>, with `result.value` of type <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLinks(request?: Links.GetLinksRequest, options?: RequestOptions): ApiPromise&lt;LinkCodeqrIoLinksApi[], Links.GetLinksError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of links for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.getLinks({ page: 1, pageSize: 50 });
  // TODO: Handle 'response' of type LinkCodeqrIoLinksApi[]
} catch (err) {
  // TODO: Handle 'err' of type Links.GetLinksError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.getLinks({ page: 1, pageSize: 50 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkCodeqrIoLinksApi[]
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
| <code>projectSlug?</code> | <code>string</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain?</code> | <code>string</code> | The domain to filter the links. For example, `ac.me`. If not provided, all links of the project will be returned. |
| <code>tagId?</code> | <code>string</code> | [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link. |
| <code>tagIds?</code> | <code>[TagIdsModel](src/models/unions/tag-ids-model.ts)</code> | The IDs of the tags to filter the links. |
| <code>tagNames?</code> | <code>[TagNames](src/models/unions/tag-names.ts)</code> | The unique name of the tags assigned to the short link (case insensitive). |
| <code>folderId?</code> | <code>string</code> | The folder ID to filter the links by. |
| <code>search?</code> | <code>string</code> | The search term to filter the links. The search term will be matched against the short link slug and the destination URL. |
| <code>userId?</code> | <code>string</code> | The ID of the user to filter by. |
| <code>showArchived?</code> | <code>boolean</code> | If should include archived links in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>password?</code> | <code>string</code> | The password to filter by. |
| <code>expiresAt?</code> | <code>Date</code> (date-time) | - |
| <code>geo?</code> | <code>[Geo1](src/models/geo1.ts)</code> | Geographic segmentation information for the short link in JSON format `{[COUNTRY]: https://example.com }`. |
| <code>ios?</code> | <code>string</code> | The iOS device to filter by. |
| <code>android?</code> | <code>string</code> | The Android device to filter by. |
| <code>comments?</code> | <code>string</code> | The comments to filter by. |
| <code>withTags?</code> | <code>boolean</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>trackConversion?</code> | <code>boolean</code> | If should include links with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: false |
| <code>useAsTemplate?</code> | <code>boolean</code> | Filter links marked as templates. |
| <code>hasPassword?</code> | <code>boolean</code> | Filter links that have password protection (any password) |
| <code>hasExpiration?</code> | <code>boolean</code> | Filter links that have expiration date (any expiration) |
| <code>hasUtm?</code> | <code>boolean</code> | Filter links that have UTM parameters |
| <code>hasCustomSocial?</code> | <code>boolean</code> | Filter links that have custom social media cards |
| <code>hasGeo?</code> | <code>boolean</code> | Filter links that have geo-targeting |
| <code>hasDevice?</code> | <code>boolean</code> | Filter links that have device targeting |
| <code>hasComments?</code> | <code>boolean</code> | Filter links that have comments (any comments) |
| <code>hasTags?</code> | <code>boolean</code> | Filter links that have tags (any tags) |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | Created after date (ISO string) |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | Created before date (ISO string) |
| <code>expiresAfter?</code> | <code>Date</code> (date-time) | Expires after date (ISO string) |
| <code>expiresBefore?</code> | <code>Date</code> (date-time) | Expires before date (ISO string) |
| <code>clicksMin?</code> | <code>number</code> | Minimum number of clicks |
| <code>clicksMax?</code> | <code>number</code> | Maximum number of clicks |
| <code>utmSource?</code> | <code>string</code> | Filter by UTM source value |
| <code>utmMedium?</code> | <code>string</code> | Filter by UTM medium value |
| <code>utmCampaign?</code> | <code>string</code> | Filter by UTM campaign value |
| <code>utmContent?</code> | <code>string</code> | Filter by UTM content value |
| <code>utmTerm?</code> | <code>string</code> | Filter by UTM term value |
| <code>sort?</code> | <code>[Sort](src/models/sort.ts)</code> | The field to sort the links by. The default is `createdAt`, and sort order is always descending.<br>**Default**: "createdAt" |
| <code>linkIds?</code> | <code>[LinkIds](src/models/unions/link-ids.ts)</code> | Link IDs to filter by. |
| <code>page?</code> | <code>number</code> | The page number for pagination.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The number of items per page.<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.getLinks(request)`

- **OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)[]</code>
- **OnError**: throws <code>[Links.GetLinksError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.getLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkCodeqrIoLinksApi[], Links.GetLinksError&gt;</code>, with `result.value` of type <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLinksCount(request?: Links.GetLinksCountRequest, options?: RequestOptions): ApiPromise&lt;number, Links.GetLinksCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of links for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.getLinksCount();
  // TODO: Handle 'response' of type number
} catch (err) {
  // TODO: Handle 'err' of type Links.GetLinksCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.getLinksCount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number
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
| <code>projectSlug?</code> | <code>string</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain?</code> | <code>string</code> | The domain to filter the links. For example, `ac.me`. If not provided, all links of the project will be returned. |
| <code>tagId?</code> | <code>string</code> | [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link. |
| <code>tagIds?</code> | <code>[TagIdsModel](src/models/unions/tag-ids-model.ts)</code> | The IDs of the tags to filter the links. |
| <code>tagNames?</code> | <code>[TagNames](src/models/unions/tag-names.ts)</code> | The unique name of the tags assigned to the short link (case insensitive). |
| <code>folderId?</code> | <code>string</code> | The folder ID to filter the links by. |
| <code>search?</code> | <code>string</code> | The search term to filter the links. The search term will be matched against the short link slug and the destination URL. |
| <code>userId?</code> | <code>string</code> | The ID of the user to filter by. |
| <code>showArchived?</code> | <code>boolean</code> | If should include archived links in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>password?</code> | <code>string</code> | The password to filter by. |
| <code>expiresAt?</code> | <code>Date</code> (date-time) | - |
| <code>geo?</code> | <code>[Geo1](src/models/geo1.ts)</code> | Geographic segmentation information for the short link in JSON format `{[COUNTRY]: https://example.com }`. |
| <code>ios?</code> | <code>string</code> | The iOS device to filter by. |
| <code>android?</code> | <code>string</code> | The Android device to filter by. |
| <code>comments?</code> | <code>string</code> | The comments to filter by. |
| <code>withTags?</code> | <code>boolean</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>trackConversion?</code> | <code>boolean</code> | If should include links with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: false |
| <code>useAsTemplate?</code> | <code>boolean</code> | Filter links marked as templates. |
| <code>hasPassword?</code> | <code>boolean</code> | Filter links that have password protection (any password) |
| <code>hasExpiration?</code> | <code>boolean</code> | Filter links that have expiration date (any expiration) |
| <code>hasUtm?</code> | <code>boolean</code> | Filter links that have UTM parameters |
| <code>hasCustomSocial?</code> | <code>boolean</code> | Filter links that have custom social media cards |
| <code>hasGeo?</code> | <code>boolean</code> | Filter links that have geo-targeting |
| <code>hasDevice?</code> | <code>boolean</code> | Filter links that have device targeting |
| <code>hasComments?</code> | <code>boolean</code> | Filter links that have comments (any comments) |
| <code>hasTags?</code> | <code>boolean</code> | Filter links that have tags (any tags) |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | Created after date (ISO string) |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | Created before date (ISO string) |
| <code>expiresAfter?</code> | <code>Date</code> (date-time) | Expires after date (ISO string) |
| <code>expiresBefore?</code> | <code>Date</code> (date-time) | Expires before date (ISO string) |
| <code>clicksMin?</code> | <code>number</code> | Minimum number of clicks |
| <code>clicksMax?</code> | <code>number</code> | Maximum number of clicks |
| <code>utmSource?</code> | <code>string</code> | Filter by UTM source value |
| <code>utmMedium?</code> | <code>string</code> | Filter by UTM medium value |
| <code>utmCampaign?</code> | <code>string</code> | Filter by UTM campaign value |
| <code>utmContent?</code> | <code>string</code> | Filter by UTM content value |
| <code>utmTerm?</code> | <code>string</code> | Filter by UTM term value |
| <code>groupBy?</code> | <code>[GroupBy4](src/models/unions/group-by4.ts)</code> | The field to group the links by. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.getLinksCount(request)`

- **OnSuccess**: <code>number</code>
- **OnError**: throws <code>[Links.GetLinksCountError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.getLinksCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number, Links.GetLinksCountError&gt;</code>, with `result.value` of type <code>number</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLink(request: Links.UpdateLinkRequest, options?: RequestOptions): ApiPromise&lt;LinkCodeqrIoLinksApi, Links.UpdateLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a link for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.links.updateLink({ linkId: "some example string" });
  // TODO: Handle 'response' of type LinkCodeqrIoLinksApi
} catch (err) {
  // TODO: Handle 'err' of type Links.UpdateLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.links.updateLink({ linkId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkCodeqrIoLinksApi
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
| <code>linkId</code> | <code>string</code> | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>body?</code> | <code>[LinksRequest1](src/models/links-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.links.updateLink(request)`

- **OnSuccess**: <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: throws <code>[Links.UpdateLinkError](src/resources/links.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.links.updateLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkCodeqrIoLinksApi, Links.UpdateLinkError&gt;</code>, with `result.value` of type <code>[LinkCodeqrIoLinksApi](src/models/link-codeqr-io-links-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](src/resources/projects.ts)

<details>
<summary><code>getProject(request: Projects.GetProjectRequest, options?: RequestOptions): ApiPromise&lt;Project, Projects.GetProjectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a project for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProject({ projectSlug: "some example string" });
  // TODO: Handle 'response' of type Project
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getProject({ projectSlug: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project
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
| <code>projectSlug</code> | <code>string</code> | The slug for the project to retrieve. E.g. for `app.codeqr.io/acme`, the projectSlug is `acme`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProject(request)`

- **OnSuccess**: <code>[Project](src/models/project.ts)</code>
- **OnError**: throws <code>[Projects.GetProjectError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project, Projects.GetProjectError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProjects(options?: RequestOptions): ApiPromise&lt;Project[], Projects.GetProjectsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of projects for the authenticated user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.projects.getProjects();
  // TODO: Handle 'response' of type Project[]
} catch (err) {
  // TODO: Handle 'err' of type Projects.GetProjectsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.projects.getProjects().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Project[]
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.projects.getProjects()`

- **OnSuccess**: <code>[Project](src/models/project.ts)[]</code>
- **OnError**: throws <code>[Projects.GetProjectsError](src/resources/projects.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.projects.getProjects().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Project[], Projects.GetProjectsError&gt;</code>, with `result.value` of type <code>[Project](src/models/project.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](src/resources/qr-codes.ts)

<details>
<summary><code>bulkCreateQrCodes(request?: QrCodes.BulkCreateQrCodesRequest, options?: RequestOptions): ApiPromise&lt;QrcodesBulkResponse1[], QrCodes.BulkCreateQrCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.bulkCreateQrCodes();
  // TODO: Handle 'response' of type QrcodesBulkResponse1[]
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.BulkCreateQrCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.bulkCreateQrCodes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrcodesBulkResponse1[]
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
| <code>body?</code> | <code>[QrcodesBulkRequest](src/models/qrcodes-bulk-request.ts)[]</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.bulkCreateQrCodes(request)`

- **OnSuccess**: <code>[QrcodesBulkResponse1](src/models/unions/qrcodes-bulk-response1.ts)[]</code>
- **OnError**: throws <code>[QrCodes.BulkCreateQrCodesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.bulkCreateQrCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrcodesBulkResponse1[], QrCodes.BulkCreateQrCodesError&gt;</code>, with `result.value` of type <code>[QrcodesBulkResponse1](src/models/unions/qrcodes-bulk-response1.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkDeleteQrCodes(request: QrCodes.BulkDeleteQrCodesRequest, options?: RequestOptions): ApiPromise&lt;QrcodesBulkResponse, QrCodes.BulkDeleteQrCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.bulkDeleteQrCodes({
    qrcodeIds: ["clux0rgak00011...", "clux0rgak00022..."],
  });
  // TODO: Handle 'response' of type QrcodesBulkResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.BulkDeleteQrCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .bulkDeleteQrCodes({ qrcodeIds: ["clux0rgak00011...", "clux0rgak00022..."] })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrcodesBulkResponse
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
| <code>qrcodeIds</code> | <code>string[]</code> | Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.bulkDeleteQrCodes(request)`

- **OnSuccess**: <code>[QrcodesBulkResponse](src/models/qrcodes-bulk-response.ts)</code>
- **OnError**: throws <code>[QrCodes.BulkDeleteQrCodesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.bulkDeleteQrCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrcodesBulkResponse, QrCodes.BulkDeleteQrCodesError&gt;</code>, with `result.value` of type <code>[QrcodesBulkResponse](src/models/qrcodes-bulk-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createQrCode(request?: QrCodes.CreateQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.CreateQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.createQrCode();
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.CreateQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.createQrCode().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>body?</code> | <code>[QrcodesRequest](src/models/qrcodes-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.createQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.CreateQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.createQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.CreateQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteQrCode(request: QrCodes.DeleteQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrcodesResponse, QrCodes.DeleteQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.deleteQrCode({ qrcodeId: "some example string" });
  // TODO: Handle 'response' of type QrcodesResponse
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.DeleteQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.deleteQrCode({ qrcodeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrcodesResponse
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
| <code>qrcodeId</code> | <code>string</code> | The id of the QR Code to delete. You may use either `qrcodeId` (obtained via `/qrcodes/info` endpoint) or `externalId` prefixed with `ext_`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.deleteQrCode(request)`

- **OnSuccess**: <code>[QrcodesResponse](src/models/qrcodes-response.ts)</code>
- **OnError**: throws <code>[QrCodes.DeleteQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.deleteQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrcodesResponse, QrCodes.DeleteQrCodeError&gt;</code>, with `result.value` of type <code>[QrcodesResponse](src/models/qrcodes-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQrCodeInfo(request: QrCodes.GetQrCodeInfoRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.GetQrCodeInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a QR Code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getQrCodeInfo({
    projectSlug: "some example string",
    domain: "some example string",
    key: "some example string",
    externalId: "ext_123456",
  });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetQrCodeInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes
  .getQrCodeInfo({
    projectSlug: "some example string",
    domain: "some example string",
    key: "some example string",
    externalId: "ext_123456",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>projectSlug</code> | <code>string</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain</code> | <code>string</code> | - |
| <code>key</code> | <code>string</code> | The key of the QR code to be retrieved. For example, for `codeqr.link/github`, the key is `github`. |
| <code>qrCodeId?</code> | <code>string</code> | The unique ID of the QR code. |
| <code>externalId?</code> | <code>string</code> | This is the ID of the QR code in your database. It must be prefixed with `ext_` when passed as a query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getQrCodeInfo(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.GetQrCodeInfoError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getQrCodeInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.GetQrCodeInfoError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQrCodes(request?: QrCodes.GetQrCodesRequest, options?: RequestOptions): ApiPromise&lt;QrCode[], QrCodes.GetQrCodesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of QR Codes for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getQrCodes({ page: 1, pageSize: 50 });
  // TODO: Handle 'response' of type QrCode[]
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetQrCodesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.getQrCodes({ page: 1, pageSize: 50 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode[]
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
| <code>projectSlug?</code> | <code>string</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain?</code> | <code>string</code> | The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the project will be returned. |
| <code>tagId?</code> | <code>string</code> | [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code. |
| <code>tagIds?</code> | <code>[TagIdsModel](src/models/unions/tag-ids-model.ts)</code> | The IDs of the tags to filter the QR codes. |
| <code>tagNames?</code> | <code>[TagNames](src/models/unions/tag-names.ts)</code> | The unique name of the tags assigned to the QR code (case insensitive). |
| <code>folderId?</code> | <code>string</code> | The folder ID to filter the QR codes by. |
| <code>search?</code> | <code>string</code> | The search term to filter the QR codes. The search term will be matched against the QR code slug, title, and the destination URL. |
| <code>userId?</code> | <code>string</code> | The ID of the user to filter by. |
| <code>showArchived?</code> | <code>boolean</code> | If should include archived QR codes in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>comments?</code> | <code>string</code> | The comments to filter by. |
| <code>password?</code> | <code>string</code> | The password to filter by. |
| <code>expiresAt?</code> | <code>Date</code> (date-time) | - |
| <code>trackConversion?</code> | <code>boolean</code> | If should include QR codes with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: false |
| <code>withTags?</code> | <code>boolean</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>useAsTemplate?</code> | <code>boolean</code> | Filter QR codes marked as templates. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Filter by QR code format - static or dynamic |
| <code>type?</code> | <code>[Type2](src/models/type2.ts)</code> | Filter by QR code type |
| <code>hasPassword?</code> | <code>boolean</code> | Filter QR codes with/without password protection |
| <code>hasExpiration?</code> | <code>boolean</code> | Filter QR codes with/without expiration date |
| <code>hasUtm?</code> | <code>boolean</code> | Filter QR codes with/without UTM parameters |
| <code>hasCustomSocial?</code> | <code>boolean</code> | Filter QR codes with/without custom social media cards |
| <code>hasGeo?</code> | <code>boolean</code> | Filter QR codes with/without geo-targeting |
| <code>hasDevice?</code> | <code>boolean</code> | Filter QR codes with/without device targeting |
| <code>hasComments?</code> | <code>boolean</code> | Filter QR codes with/without comments |
| <code>hasTags?</code> | <code>boolean</code> | Filter QR codes with/without tags |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | Filter QR codes created after this date |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | Filter QR codes created before this date |
| <code>expiresAfter?</code> | <code>Date</code> (date-time) | Filter QR codes expiring after this date |
| <code>expiresBefore?</code> | <code>Date</code> (date-time) | Filter QR codes expiring before this date |
| <code>scansMin?</code> | <code>number</code> | Minimum number of scans |
| <code>scansMax?</code> | <code>number</code> | Maximum number of scans |
| <code>utmSource?</code> | <code>string</code> | Filter by UTM source value |
| <code>utmMedium?</code> | <code>string</code> | Filter by UTM medium value |
| <code>utmCampaign?</code> | <code>string</code> | Filter by UTM campaign value |
| <code>utmContent?</code> | <code>string</code> | Filter by UTM content value |
| <code>utmTerm?</code> | <code>string</code> | Filter by UTM term value |
| <code>sort?</code> | <code>[SortCodeqrIoQrCodesApi](src/models/sort-codeqr-io-qr-codes-api.ts)</code> | The field to order the QR codes. The default is `createdAt`, and the order of sorting is always descending.<br>**Default**: "createdAt" |
| <code>page?</code> | <code>number</code> | The page number for pagination.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The number of items per page.<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getQrCodes(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)[]</code>
- **OnError**: throws <code>[QrCodes.GetQrCodesError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getQrCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode[], QrCodes.GetQrCodesError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getQrCodesCount(request?: QrCodes.GetQrCodesCountRequest, options?: RequestOptions): ApiPromise&lt;number, QrCodes.GetQrCodesCountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of QR Codes for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.getQrCodesCount();
  // TODO: Handle 'response' of type number
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.GetQrCodesCountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.getQrCodesCount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type number
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
| <code>projectSlug?</code> | <code>string</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain?</code> | <code>string</code> | The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the project will be returned. |
| <code>tagId?</code> | <code>string</code> | [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code. |
| <code>tagIds?</code> | <code>[TagIdsModel](src/models/unions/tag-ids-model.ts)</code> | The IDs of the tags to filter the QR codes. |
| <code>tagNames?</code> | <code>[TagNames](src/models/unions/tag-names.ts)</code> | The unique name of the tags assigned to the QR code (case insensitive). |
| <code>folderId?</code> | <code>string</code> | The folder ID to filter the QR codes by. |
| <code>search?</code> | <code>string</code> | The search term to filter the QR codes. The search term will be matched against the QR code slug, title, and the destination URL. |
| <code>userId?</code> | <code>string</code> | The ID of the user to filter by. |
| <code>showArchived?</code> | <code>boolean</code> | If should include archived QR codes in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>comments?</code> | <code>string</code> | The comments to filter by. |
| <code>password?</code> | <code>string</code> | The password to filter by. |
| <code>expiresAt?</code> | <code>Date</code> (date-time) | - |
| <code>trackConversion?</code> | <code>boolean</code> | If should include QR codes with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: false |
| <code>withTags?</code> | <code>boolean</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: false |
| <code>useAsTemplate?</code> | <code>boolean</code> | Filter QR codes marked as templates. |
| <code>format?</code> | <code>[Format](src/models/format.ts)</code> | Filter by QR code format - static or dynamic |
| <code>type?</code> | <code>[Type2](src/models/type2.ts)</code> | Filter by QR code type |
| <code>hasPassword?</code> | <code>boolean</code> | Filter QR codes with/without password protection |
| <code>hasExpiration?</code> | <code>boolean</code> | Filter QR codes with/without expiration date |
| <code>hasUtm?</code> | <code>boolean</code> | Filter QR codes with/without UTM parameters |
| <code>hasCustomSocial?</code> | <code>boolean</code> | Filter QR codes with/without custom social media cards |
| <code>hasGeo?</code> | <code>boolean</code> | Filter QR codes with/without geo-targeting |
| <code>hasDevice?</code> | <code>boolean</code> | Filter QR codes with/without device targeting |
| <code>hasComments?</code> | <code>boolean</code> | Filter QR codes with/without comments |
| <code>hasTags?</code> | <code>boolean</code> | Filter QR codes with/without tags |
| <code>createdAfter?</code> | <code>Date</code> (date-time) | Filter QR codes created after this date |
| <code>createdBefore?</code> | <code>Date</code> (date-time) | Filter QR codes created before this date |
| <code>expiresAfter?</code> | <code>Date</code> (date-time) | Filter QR codes expiring after this date |
| <code>expiresBefore?</code> | <code>Date</code> (date-time) | Filter QR codes expiring before this date |
| <code>scansMin?</code> | <code>number</code> | Minimum number of scans |
| <code>scansMax?</code> | <code>number</code> | Maximum number of scans |
| <code>utmSource?</code> | <code>string</code> | Filter by UTM source value |
| <code>utmMedium?</code> | <code>string</code> | Filter by UTM medium value |
| <code>utmCampaign?</code> | <code>string</code> | Filter by UTM campaign value |
| <code>utmContent?</code> | <code>string</code> | Filter by UTM content value |
| <code>utmTerm?</code> | <code>string</code> | Filter by UTM term value |
| <code>groupBy?</code> | <code>[GroupBy4CodeqrIoQrCodesApi](src/models/unions/group-by4-codeqr-io-qr-codes-api.ts)</code> | The field to group the QR codes. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.getQrCodesCount(request)`

- **OnSuccess**: <code>number</code>
- **OnError**: throws <code>[QrCodes.GetQrCodesCountError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.getQrCodesCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;number, QrCodes.GetQrCodesCountError&gt;</code>, with `result.value` of type <code>number</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateQrCode(request: QrCodes.UpdateQrCodeRequest, options?: RequestOptions): ApiPromise&lt;QrCode, QrCodes.UpdateQrCodeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.qrCodes.updateQrCode({ qrcodeId: "some example string" });
  // TODO: Handle 'response' of type QrCode
} catch (err) {
  // TODO: Handle 'err' of type QrCodes.UpdateQrCodeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.qrCodes.updateQrCode({ qrcodeId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type QrCode
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
| <code>qrcodeId</code> | <code>string</code> | The id of the QR Code to update. You may use either `qrcodeId` (obtained via `/qrcodes/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>body?</code> | <code>[QrcodesRequest1](src/models/qrcodes-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.qrCodes.updateQrCode(request)`

- **OnSuccess**: <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: throws <code>[QrCodes.UpdateQrCodeError](src/resources/qr-codes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.qrCodes.updateQrCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;QrCode, QrCodes.UpdateQrCodeError&gt;</code>, with `result.value` of type <code>[QrCode](src/models/qr-code.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](src/resources/tags.ts)

<details>
<summary><code>createTag(request?: Tags.CreateTagRequest, options?: RequestOptions): ApiPromise&lt;Tag, Tags.CreateTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tag for the authenticated project.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.createTag();
  // TODO: Handle 'response' of type Tag
} catch (err) {
  // TODO: Handle 'err' of type Tags.CreateTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.createTag().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tag
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
| <code>body?</code> | <code>[TagsRequest](src/models/tags-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.createTag(request)`

- **OnSuccess**: <code>[Tag](src/models/tag.ts)</code>
- **OnError**: throws <code>[Tags.CreateTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.createTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tag, Tags.CreateTagError&gt;</code>, with `result.value` of type <code>[Tag](src/models/tag.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTag(request: Tags.DeleteTagRequest, options?: RequestOptions): ApiPromise&lt;TagsResponse, Tags.DeleteTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.deleteTag({ id: "some example string" });
  // TODO: Handle 'response' of type TagsResponse
} catch (err) {
  // TODO: Handle 'err' of type Tags.DeleteTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.deleteTag({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TagsResponse
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
| <code>id</code> | <code>string</code> | The ID of the tag to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.deleteTag(request)`

- **OnSuccess**: <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: throws <code>[Tags.DeleteTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.deleteTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TagsResponse, Tags.DeleteTagError&gt;</code>, with `result.value` of type <code>[TagsResponse](src/models/tags-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTags(request?: Tags.GetTagsRequest, options?: RequestOptions): ApiPromise&lt;Tag[], Tags.GetTagsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of tags for the authenticated workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.getTags({ page: 1, pageSize: 50 });
  // TODO: Handle 'response' of type Tag[]
} catch (err) {
  // TODO: Handle 'err' of type Tags.GetTagsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.getTags({ page: 1, pageSize: 50 }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tag[]
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
| <code>sortBy?</code> | <code>[SortByCodeqrIoTagsApi](src/models/sort-by-codeqr-io-tags-api.ts)</code> | The field to sort the tags by.<br>**Default**: "name" |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order to sort the tags by.<br>**Default**: "asc" |
| <code>search?</code> | <code>string</code> | The search term to filter the tags by. |
| <code>ids?</code> | <code>[Ids](src/models/unions/ids.ts)</code> | IDs of tags to filter by. |
| <code>page?</code> | <code>number</code> | The page number for pagination.<br>**Default**: 1 |
| <code>pageSize?</code> | <code>number</code> | The number of items per page.<br>**Default**: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.getTags(request)`

- **OnSuccess**: <code>[Tag](src/models/tag.ts)[]</code>
- **OnError**: throws <code>[Tags.GetTagsError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.getTags(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tag[], Tags.GetTagsError&gt;</code>, with `result.value` of type <code>[Tag](src/models/tag.ts)[]</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTag(request: Tags.UpdateTagRequest, options?: RequestOptions): ApiPromise&lt;Tag, Tags.UpdateTagError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a tag in the workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.tags.updateTag({ id: "some example string" });
  // TODO: Handle 'response' of type Tag
} catch (err) {
  // TODO: Handle 'err' of type Tags.UpdateTagError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.tags.updateTag({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Tag
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
| <code>id</code> | <code>string</code> | The ID of the tag to update. |
| <code>body?</code> | <code>[TagsRequest1](src/models/tags-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.tags.updateTag(request)`

- **OnSuccess**: <code>[Tag](src/models/tag.ts)</code>
- **OnError**: throws <code>[Tags.UpdateTagError](src/resources/tags.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.tags.updateTag(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Tag, Tags.UpdateTagError&gt;</code>, with `result.value` of type <code>[Tag](src/models/tag.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Track

> Source: [Track](src/resources/track.ts)

<details>
<summary><code>trackLead(request?: Track.TrackLeadRequestParams, options?: RequestOptions): ApiPromise&lt;TrackLeadResponse, Track.TrackLeadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a lead for a short link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.track.trackLead();
  // TODO: Handle 'response' of type TrackLeadResponse
} catch (err) {
  // TODO: Handle 'err' of type Track.TrackLeadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.track.trackLead().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackLeadResponse
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
| <code>body?</code> | <code>[TrackLeadRequest](src/models/track-lead-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.track.trackLead(request)`

- **OnSuccess**: <code>[TrackLeadResponse](src/models/track-lead-response.ts)</code>
- **OnError**: throws <code>[Track.TrackLeadError](src/resources/track.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.track.trackLead(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackLeadResponse, Track.TrackLeadError&gt;</code>, with `result.value` of type <code>[TrackLeadResponse](src/models/track-lead-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trackSale(request?: Track.TrackSaleRequestParams, options?: RequestOptions): ApiPromise&lt;TrackSaleResponse, Track.TrackSaleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a sale for a short link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.track.trackSale();
  // TODO: Handle 'response' of type TrackSaleResponse
} catch (err) {
  // TODO: Handle 'err' of type Track.TrackSaleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.track.trackSale().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrackSaleResponse
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
| <code>body?</code> | <code>[TrackSaleRequest](src/models/track-sale-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.track.trackSale(request)`

- **OnSuccess**: <code>[TrackSaleResponse](src/models/track-sale-response.ts)</code>
- **OnError**: throws <code>[Track.TrackSaleError](src/resources/track.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.track.trackSale(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrackSaleResponse, Track.TrackSaleError&gt;</code>, with `result.value` of type <code>[TrackSaleResponse](src/models/track-sale-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[CodeQrError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

