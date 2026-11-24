# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CodeQrClient](code_qr/client.py)

## Analytics

> Source: [Analytics](code_qr/apis/analytics.py)

<details>
<summary><code>def retrieve_analytics(*, event: EventOrStr | None = Event.CLICKS, group_by: GroupByOrStr | None = GroupBy.COUNT, domain: str | None = None, key: str | None = None, link_id: str | None = None, qrcode_id: str | None = None, page_id: str | None = None, external_id: str | None = None, interval: IntervalOrStr | None = None, start: str | None = None, end: str | None = None, timezone: str | None = "UTC", continent: ContinentCodeOrStr | None = None, country: CountryCodeOrStr | None = None, city: str | None = None, device: str | None = None, browser: str | None = None, os: str | None = None, referer: str | None = None, url: str | None = None, exclude_root: bool | None = None, root: bool | None = None, tag_id: str | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, type_: str | None = None, types: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AnalyticsResponse, RetrieveAnalyticsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve analytics for a link, a domain, or the authenticated workspace. The response type depends on the `event` and `type` query parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.analytics.with_raw_response.retrieve_analytics(
    timezone="America/New_York", city="New York", device="Desktop", browser="Chrome", os="Windows", referer="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveAnalyticsErrorBody
```

**Async**

```python
result = await async_client.analytics.with_raw_response.retrieve_analytics(
    timezone="America/New_York", city="New York", device="Desktop", browser="Chrome", os="Windows", referer="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AnalyticsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetrieveAnalyticsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>event</code> | <code>[EventOrStr](code_qr/models/enums/event.py) \| None</code> | The type of event to retrieve analytics for. Defaults to 'analytics'.<br>**Default**: <code>Event.CLICKS</code> |
| <code>group_by</code> | <code>[GroupByOrStr](code_qr/models/enums/group_by.py) \| None</code> | The parameter to group the analytics data points by. Defaults to 'count' if undefined.<br>**Default**: <code>GroupBy.COUNT</code> |
| <code>domain</code> | <code>str \| None</code> | The domain of the short link.<br>**Default**: <code>None</code> |
| <code>key</code> | <code>str \| None</code> | The short link slug.<br>**Default**: <code>None</code> |
| <code>link_id</code> | <code>str \| None</code> | The unique ID of the short link on CodeQR.<br>**Default**: <code>None</code> |
| <code>qrcode_id</code> | <code>str \| None</code> | The unique ID of the QR code on CodeQR.<br>**Default**: <code>None</code> |
| <code>page_id</code> | <code>str \| None</code> | The unique ID of the page on CodeQR.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.<br>**Default**: <code>None</code> |
| <code>interval</code> | <code>[IntervalOrStr](code_qr/models/enums/interval.py) \| None</code> | The interval to retrieve analytics for. Takes precedence over start and end.<br>**Default**: <code>None</code> |
| <code>start</code> | <code>str \| None</code> | The start date and time when to retrieve analytics from.<br>**Default**: <code>None</code> |
| <code>end</code> | <code>str \| None</code> | The end date and time when to retrieve analytics from. If not provided, defaults to the current date.<br>**Default**: <code>None</code> |
| <code>timezone</code> | <code>str \| None</code> | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.<br>**Default**: <code>"UTC"</code> |
| <code>continent</code> | <code>[ContinentCodeOrStr](code_qr/models/enums/continent_code.py) \| None</code> | The continent to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[CountryCodeOrStr](code_qr/models/enums/country_code.py) \| None</code> | The country to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | The city to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>device</code> | <code>str \| None</code> | The device to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>browser</code> | <code>str \| None</code> | The browser to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>os</code> | <code>str \| None</code> | The OS to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>referer</code> | <code>str \| None</code> | The referer to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | The URL to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>exclude_root</code> | <code>bool \| None</code> | Whether to exclude the root link from the response.<br>**Default**: <code>None</code> |
| <code>root</code> | <code>bool \| None</code> | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | The tag ID to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | UTM source to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | UTM medium to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | UTM campaign to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | UTM content to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | UTM term to filter analytics by.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | The type of analytics to retrieve.<br>**Default**: <code>None</code> |
| <code>types</code> | <code>str \| None</code> | The types of analytics to retrieve.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[AnalyticsResponse](code_qr/models/unions/analytics_response.py), [RetrieveAnalyticsErrorBody](code_qr/errors/retrieve_analytics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AnalyticsResponse](code_qr/models/unions/analytics_response.py)</code> -- Analytics data

**On `Failure`**: `error` is <code>[RetrieveAnalyticsErrorBody](code_qr/errors/retrieve_analytics_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Domains

> Source: [Domains](code_qr/apis/domains.py)

<details>
<summary><code>def create_domain(*, body: DomainsRequest | DomainsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DomainSchema, CreateDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a domain for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domains.with_raw_response.create_domain()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainErrorBody
```

**Async**

```python
result = await async_client.domains.with_raw_response.create_domain()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DomainsRequest](code_qr/models/domains_request.py) \| [DomainsRequestDict](code_qr/models/domains_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[DomainSchema](code_qr/models/domain_schema.py), [CreateDomainErrorBody](code_qr/errors/create_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DomainSchema](code_qr/models/domain_schema.py)</code> -- The domain was created.

**On `Failure`**: `error` is <code>[CreateDomainErrorBody](code_qr/errors/create_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_domain(slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DomainsResponse, DeleteDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domains.with_raw_response.delete_domain("acme.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDomainErrorBody
```

**Async**

```python
result = await async_client.domains.with_raw_response.delete_domain("acme.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The domain name. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[DomainsResponse](code_qr/models/domains_response.py), [DeleteDomainErrorBody](code_qr/errors/delete_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DomainsResponse](code_qr/models/domains_response.py)</code> -- The domain was deleted.

**On `Failure`**: `error` is <code>[DeleteDomainErrorBody](code_qr/errors/delete_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_domains(*, archived: bool | None = False, search: str | None = None, page: float | None = 1.0, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[DomainSchema], ListDomainsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of domains associated with the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domains.with_raw_response.list_domains(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DomainSchema]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

**Async**

```python
result = await async_client.domains.with_raw_response.list_domains(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[DomainSchema]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>archived</code> | <code>bool \| None</code> | Whether to include archived domains in the response. Defaults to `false` if not provided.<br>**Default**: <code>False</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the domains by.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>float \| None</code> | The page number for pagination.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | The number of items per page.<br>**Default**: <code>50.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[DomainSchema](code_qr/models/domain_schema.py)&#93;, [ListDomainsErrorBody](code_qr/errors/list_domains_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[DomainSchema](code_qr/models/domain_schema.py)&#93;</code> -- The domains were retrieved.

**On `Failure`**: `error` is <code>[ListDomainsErrorBody](code_qr/errors/list_domains_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_domain(slug: str, *, body: DomainsRequest1 | DomainsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DomainSchema, UpdateDomainErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a domain for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.domains.with_raw_response.update_domain("acme.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainErrorBody
```

**Async**

```python
result = await async_client.domains.with_raw_response.update_domain("acme.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DomainSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDomainErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | The domain name. |
| <code>body</code> | <code>[DomainsRequest1](code_qr/models/domains_request1.py) \| [DomainsRequest1Dict](code_qr/models/domains_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[DomainSchema](code_qr/models/domain_schema.py), [UpdateDomainErrorBody](code_qr/errors/update_domain_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DomainSchema](code_qr/models/domain_schema.py)</code> -- The domain was updated.

**On `Failure`**: `error` is <code>[UpdateDomainErrorBody](code_qr/errors/update_domain_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](code_qr/apis/events.py)

<details>
<summary><code>def list_events(*, event: EventCodeqrIoEventsApiOrStr | None = EventCodeqrIoEventsApi.CLICKS, domain: str | None = None, key: str | None = None, link_id: str | None = None, qrcode_id: str | None = None, page_id: str | None = None, external_id: str | None = None, interval: IntervalCodeqrIoEventsApiOrStr | None = IntervalCodeqrIoEventsApi._24H, start: str | None = None, end: str | None = None, timezone: str | None = "UTC", continent: ContinentCodeOrStr | None = None, country: CountryCodeOrStr | None = None, city: str | None = None, device: str | None = None, browser: str | None = None, os: str | None = None, referer: str | None = None, url: str | None = None, exclude_root: bool | None = None, root: bool | None = None, tag_id: str | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, type_: str | None = None, types: str | None = None, page: float | None = 1.0, limit: float | None = 100.0, order: OrderOrStr | None = Order.DESC, sort_by: SortByOrStr | None = SortBy.TIMESTAMP, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[EventsResponse], ListEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of events for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.list_events(
    timezone="America/New_York", city="New York", device="Desktop", browser="Chrome", os="Windows", referer="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EventsResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.list_events(
    timezone="America/New_York", city="New York", device="Desktop", browser="Chrome", os="Windows", referer="google.com"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[EventsResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>event</code> | <code>[EventCodeqrIoEventsApiOrStr](code_qr/models/enums/event_codeqr_io_events_api.py) \| None</code> | The type of event to retrieve analytics for. Defaults to 'clicks'.<br>**Default**: <code>EventCodeqrIoEventsApi.CLICKS</code> |
| <code>domain</code> | <code>str \| None</code> | The domain of the short link.<br>**Default**: <code>None</code> |
| <code>key</code> | <code>str \| None</code> | The short link slug.<br>**Default**: <code>None</code> |
| <code>link_id</code> | <code>str \| None</code> | The unique ID of the short link on CodeQR.<br>**Default**: <code>None</code> |
| <code>qrcode_id</code> | <code>str \| None</code> | The unique ID of the QR code on CodeQR.<br>**Default**: <code>None</code> |
| <code>page_id</code> | <code>str \| None</code> | The unique ID of the page on CodeQR.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.<br>**Default**: <code>None</code> |
| <code>interval</code> | <code>[IntervalCodeqrIoEventsApiOrStr](code_qr/models/enums/interval_codeqr_io_events_api.py) \| None</code> | The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h.<br>**Default**: <code>IntervalCodeqrIoEventsApi._24H</code> |
| <code>start</code> | <code>str \| None</code> | The start date and time when to retrieve analytics from.<br>**Default**: <code>None</code> |
| <code>end</code> | <code>str \| None</code> | The end date and time when to retrieve analytics from. If not provided, defaults to the current date.<br>**Default**: <code>None</code> |
| <code>timezone</code> | <code>str \| None</code> | The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.<br>**Default**: <code>"UTC"</code> |
| <code>continent</code> | <code>[ContinentCodeOrStr](code_qr/models/enums/continent_code.py) \| None</code> | The continent to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[CountryCodeOrStr](code_qr/models/enums/country_code.py) \| None</code> | The country to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>city</code> | <code>str \| None</code> | The city to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>device</code> | <code>str \| None</code> | The device to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>browser</code> | <code>str \| None</code> | The browser to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>os</code> | <code>str \| None</code> | The OS to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>referer</code> | <code>str \| None</code> | The referer to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>url</code> | <code>str \| None</code> | The URL to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>exclude_root</code> | <code>bool \| None</code> | Whether to exclude the root link from the response.<br>**Default**: <code>None</code> |
| <code>root</code> | <code>bool \| None</code> | Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | The tag ID to retrieve analytics for.<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | UTM source to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | UTM medium to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | UTM campaign to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | UTM content to filter analytics by.<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | UTM term to filter analytics by.<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>str \| None</code> | The type of analytics to retrieve.<br>**Default**: <code>None</code> |
| <code>types</code> | <code>str \| None</code> | The types of analytics to retrieve.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>1.0</code> |
| <code>limit</code> | <code>float \| None</code> | Value sent with the request.<br>**Default**: <code>100.0</code> |
| <code>order</code> | <code>[OrderOrStr](code_qr/models/enums/order.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Order.DESC</code> |
| <code>sort_by</code> | <code>[SortByOrStr](code_qr/models/enums/sort_by.py) \| None</code> | Value sent with the request.<br>**Default**: <code>SortBy.TIMESTAMP</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[EventsResponse](code_qr/models/unions/events_response.py)&#93;, [ListEventsErrorBody](code_qr/errors/list_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[EventsResponse](code_qr/models/unions/events_response.py)&#93;</code> -- A list of events

**On `Failure`**: `error` is <code>[ListEventsErrorBody](code_qr/errors/list_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Folders

> Source: [Folders](code_qr/apis/folders.py)

<details>
<summary><code>def create_folder(*, body: FoldersRequest | FoldersRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FolderSchema, CreateFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a folder for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.create_folder()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FolderSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.create_folder()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FolderSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FoldersRequest](code_qr/models/folders_request.py) \| [FoldersRequestDict](code_qr/models/folders_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[FolderSchema](code_qr/models/folder_schema.py), [CreateFolderErrorBody](code_qr/errors/create_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FolderSchema](code_qr/models/folder_schema.py)</code> -- The created folder

**On `Failure`**: `error` is <code>[CreateFolderErrorBody](code_qr/errors/create_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_folder(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FoldersResponse, DeleteFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.delete_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FoldersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.delete_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FoldersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the folder to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[FoldersResponse](code_qr/models/folders_response.py), [DeleteFolderErrorBody](code_qr/errors/delete_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FoldersResponse](code_qr/models/folders_response.py)</code> -- The deleted folder ID.

**On `Failure`**: `error` is <code>[DeleteFolderErrorBody](code_qr/errors/delete_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_folders(*, search: str | None = None, page: float | None = 1.0, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[FolderSchema], ListFoldersErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of folders for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.list_folders(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FolderSchema]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.list_folders(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[FolderSchema]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFoldersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>search</code> | <code>str \| None</code> | The search term to filter the folders by.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>float \| None</code> | The page number for pagination.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | The number of items per page.<br>**Default**: <code>50.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[FolderSchema](code_qr/models/folder_schema.py)&#93;, [ListFoldersErrorBody](code_qr/errors/list_folders_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[FolderSchema](code_qr/models/folder_schema.py)&#93;</code> -- A list of folders

**On `Failure`**: `error` is <code>[ListFoldersErrorBody](code_qr/errors/list_folders_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_folder(id_: str, *, body: FoldersRequest1 | FoldersRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FolderSchema, UpdateFolderErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a folder in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.folders.with_raw_response.update_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FolderSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFolderErrorBody
```

**Async**

```python
result = await async_client.folders.with_raw_response.update_folder("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FolderSchema
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFolderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the folder to update. |
| <code>body</code> | <code>[FoldersRequest1](code_qr/models/folders_request1.py) \| [FoldersRequest1Dict](code_qr/models/folders_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[FolderSchema](code_qr/models/folder_schema.py), [UpdateFolderErrorBody](code_qr/errors/update_folder_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FolderSchema](code_qr/models/folder_schema.py)</code> -- The updated folder.

**On `Failure`**: `error` is <code>[UpdateFolderErrorBody](code_qr/errors/update_folder_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Links

> Source: [Links](code_qr/apis/links.py)

<details>
<summary><code>def bulk_create_links(*, body: list[LinksBulkRequest | LinksBulkRequestDict] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[LinksBulkResponse1], BulkCreateLinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.bulk_create_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinksBulkResponse1]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkCreateLinksErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.bulk_create_links()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinksBulkResponse1]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkCreateLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[LinksBulkRequest](code_qr/models/links_bulk_request.py) \| [LinksBulkRequestDict](code_qr/models/links_bulk_request.py)&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[LinksBulkResponse1](code_qr/models/unions/links_bulk_response1.py)&#93;, [BulkCreateLinksErrorBody](code_qr/errors/bulk_create_links_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[LinksBulkResponse1](code_qr/models/unions/links_bulk_response1.py)&#93;</code> -- The created links

**On `Failure`**: `error` is <code>[BulkCreateLinksErrorBody](code_qr/errors/bulk_create_links_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_delete_links(link_ids: list[str], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinksBulkResponse, BulkDeleteLinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.bulk_delete_links(["clux0rgak00011...", "clux0rgak00022..."])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinksBulkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDeleteLinksErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.bulk_delete_links(["clux0rgak00011...", "clux0rgak00022..."])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinksBulkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDeleteLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>link_ids</code> | <code>list&#91;str&#93;</code> | Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[LinksBulkResponse](code_qr/models/links_bulk_response.py), [BulkDeleteLinksErrorBody](code_qr/errors/bulk_delete_links_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinksBulkResponse](code_qr/models/links_bulk_response.py)</code> -- The deleted links count.

**On `Failure`**: `error` is <code>[BulkDeleteLinksErrorBody](code_qr/errors/bulk_delete_links_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_link(*, body: LinksRequest | LinksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkCodeqrIoLinksApi, CreateLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new link for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.create_link()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.create_link()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinksRequest](code_qr/models/links_request.py) \| [LinksRequestDict](code_qr/models/links_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py), [CreateLinkErrorBody](code_qr/errors/create_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py)</code> -- The created link

**On `Failure`**: `error` is <code>[CreateLinkErrorBody](code_qr/errors/create_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_link(link_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinksResponse, DeleteLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a link for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.delete_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLinkErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.delete_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>link_id</code> | <code>str</code> | The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[LinksResponse](code_qr/models/links_response.py), [DeleteLinkErrorBody](code_qr/errors/delete_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinksResponse](code_qr/models/links_response.py)</code> -- The deleted link ID.

**On `Failure`**: `error` is <code>[DeleteLinkErrorBody](code_qr/errors/delete_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_link_info(project_slug: str, domain: str, key: str, *, link_id: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkCodeqrIoLinksApi, GetLinkInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.get_link_info(
    "some example string",
    "some example string",
    "some example string",
    link_id="clux0rgak00011...",
    external_id="ext_123456",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinkInfoErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.get_link_info(
    "some example string",
    "some example string",
    "some example string",
    link_id="clux0rgak00011...",
    external_id="ext_123456",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinkInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | The key of the link to be retrieved. For example, for `codeqr.link/github`, the key is `github`. |
| <code>link_id</code> | <code>str \| None</code> | The unique ID of the short link.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | This is the ID of the link in your database. Must be prefixed with `ext_` when passed as a query parameter.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py), [GetLinkInfoErrorBody](code_qr/errors/get_link_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py)</code> -- The retrieved link

**On `Failure`**: `error` is <code>[GetLinkInfoErrorBody](code_qr/errors/get_link_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_links(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, password: str | None = None, expires_at: RFC3339DateTime | None = None, geo: Geo1 | Geo1Dict | None = None, ios: str | None = None, android: str | None = None, comments: str | None = None, with_tags: bool | None = False, track_conversion: bool | None = False, use_as_template: bool | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, clicks_min: int | None = None, clicks_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, sort: SortOrStr | None = Sort.CREATED_AT, link_ids: LinkIds | LinkIdsDict | None = None, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[LinkCodeqrIoLinksApi], GetLinksErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.get_links(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinkCodeqrIoLinksApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinksErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.get_links(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[LinkCodeqrIoLinksApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str \| None</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | The domain to filter the links. For example, `ac.me`. If not provided, all links of the project will be returned.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.<br>**Default**: <code>None</code> |
| <code>tag_ids</code> | <code>[TagIdsModel](code_qr/models/unions/tag_ids_model.py) \| [TagIdsModelDict](code_qr/models/unions/tag_ids_model.py) \| None</code> | The IDs of the tags to filter the links.<br>**Default**: <code>None</code> |
| <code>tag_names</code> | <code>[TagNames](code_qr/models/unions/tag_names.py) \| [TagNamesDict](code_qr/models/unions/tag_names.py) \| None</code> | The unique name of the tags assigned to the short link (case insensitive).<br>**Default**: <code>None</code> |
| <code>folder_id</code> | <code>str \| None</code> | The folder ID to filter the links by.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the links. The search term will be matched against the short link slug and the destination URL.<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | The ID of the user to filter by.<br>**Default**: <code>None</code> |
| <code>show_archived</code> | <code>bool \| None</code> | If should include archived links in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>password</code> | <code>str \| None</code> | The password to filter by.<br>**Default**: <code>None</code> |
| <code>expires_at</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>geo</code> | <code>[Geo1](code_qr/models/geo1.py) \| [Geo1Dict](code_qr/models/geo1.py) \| None</code> | Geographic segmentation information for the short link in JSON format `{[COUNTRY]: https://example.com }`.<br>**Default**: <code>None</code> |
| <code>ios</code> | <code>str \| None</code> | The iOS device to filter by.<br>**Default**: <code>None</code> |
| <code>android</code> | <code>str \| None</code> | The Android device to filter by.<br>**Default**: <code>None</code> |
| <code>comments</code> | <code>str \| None</code> | The comments to filter by.<br>**Default**: <code>None</code> |
| <code>with_tags</code> | <code>bool \| None</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>track_conversion</code> | <code>bool \| None</code> | If should include links with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>use_as_template</code> | <code>bool \| None</code> | Filter links marked as templates.<br>**Default**: <code>None</code> |
| <code>has_password</code> | <code>bool \| None</code> | Filter links that have password protection (any password)<br>**Default**: <code>None</code> |
| <code>has_expiration</code> | <code>bool \| None</code> | Filter links that have expiration date (any expiration)<br>**Default**: <code>None</code> |
| <code>has_utm</code> | <code>bool \| None</code> | Filter links that have UTM parameters<br>**Default**: <code>None</code> |
| <code>has_custom_social</code> | <code>bool \| None</code> | Filter links that have custom social media cards<br>**Default**: <code>None</code> |
| <code>has_geo</code> | <code>bool \| None</code> | Filter links that have geo-targeting<br>**Default**: <code>None</code> |
| <code>has_device</code> | <code>bool \| None</code> | Filter links that have device targeting<br>**Default**: <code>None</code> |
| <code>has_comments</code> | <code>bool \| None</code> | Filter links that have comments (any comments)<br>**Default**: <code>None</code> |
| <code>has_tags</code> | <code>bool \| None</code> | Filter links that have tags (any tags)<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Created after date (ISO string)<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Created before date (ISO string)<br>**Default**: <code>None</code> |
| <code>expires_after</code> | <code>RFC3339DateTime \| None</code> | Expires after date (ISO string)<br>**Default**: <code>None</code> |
| <code>expires_before</code> | <code>RFC3339DateTime \| None</code> | Expires before date (ISO string)<br>**Default**: <code>None</code> |
| <code>clicks_min</code> | <code>int \| None</code> | Minimum number of clicks<br>**Default**: <code>None</code> |
| <code>clicks_max</code> | <code>int \| None</code> | Maximum number of clicks<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | Filter by UTM source value<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | Filter by UTM medium value<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | Filter by UTM campaign value<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | Filter by UTM content value<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | Filter by UTM term value<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](code_qr/models/enums/sort.py) \| None</code> | The field to sort the links by. The default is `createdAt`, and sort order is always descending.<br>**Default**: <code>Sort.CREATED_AT</code> |
| <code>link_ids</code> | <code>[LinkIds](code_qr/models/unions/link_ids.py) \| [LinkIdsDict](code_qr/models/unions/link_ids.py) \| None</code> | Link IDs to filter by.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>float \| None</code> | The page number for pagination.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | The number of items per page.<br>**Default**: <code>100.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py)&#93;, [GetLinksErrorBody](code_qr/errors/get_links_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py)&#93;</code> -- A list of links

**On `Failure`**: `error` is <code>[GetLinksErrorBody](code_qr/errors/get_links_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_links_count(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, password: str | None = None, expires_at: RFC3339DateTime | None = None, geo: Geo1 | Geo1Dict | None = None, ios: str | None = None, android: str | None = None, comments: str | None = None, with_tags: bool | None = False, track_conversion: bool | None = False, use_as_template: bool | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, clicks_min: int | None = None, clicks_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, group_by: GroupBy4 | GroupBy4Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[float, GetLinksCountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of links for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.get_links_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type float
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinksCountErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.get_links_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type float
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetLinksCountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str \| None</code> | The slug of the project to which the link belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | The domain to filter the links. For example, `ac.me`. If not provided, all links of the project will be returned.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | [OBSOLETO (use tagIds em vez disso)]: The unique ID of the tag assigned to the short link.<br>**Default**: <code>None</code> |
| <code>tag_ids</code> | <code>[TagIdsModel](code_qr/models/unions/tag_ids_model.py) \| [TagIdsModelDict](code_qr/models/unions/tag_ids_model.py) \| None</code> | The IDs of the tags to filter the links.<br>**Default**: <code>None</code> |
| <code>tag_names</code> | <code>[TagNames](code_qr/models/unions/tag_names.py) \| [TagNamesDict](code_qr/models/unions/tag_names.py) \| None</code> | The unique name of the tags assigned to the short link (case insensitive).<br>**Default**: <code>None</code> |
| <code>folder_id</code> | <code>str \| None</code> | The folder ID to filter the links by.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the links. The search term will be matched against the short link slug and the destination URL.<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | The ID of the user to filter by.<br>**Default**: <code>None</code> |
| <code>show_archived</code> | <code>bool \| None</code> | If should include archived links in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>password</code> | <code>str \| None</code> | The password to filter by.<br>**Default**: <code>None</code> |
| <code>expires_at</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>geo</code> | <code>[Geo1](code_qr/models/geo1.py) \| [Geo1Dict](code_qr/models/geo1.py) \| None</code> | Geographic segmentation information for the short link in JSON format `{[COUNTRY]: https://example.com }`.<br>**Default**: <code>None</code> |
| <code>ios</code> | <code>str \| None</code> | The iOS device to filter by.<br>**Default**: <code>None</code> |
| <code>android</code> | <code>str \| None</code> | The Android device to filter by.<br>**Default**: <code>None</code> |
| <code>comments</code> | <code>str \| None</code> | The comments to filter by.<br>**Default**: <code>None</code> |
| <code>with_tags</code> | <code>bool \| None</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>track_conversion</code> | <code>bool \| None</code> | If should include links with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>use_as_template</code> | <code>bool \| None</code> | Filter links marked as templates.<br>**Default**: <code>None</code> |
| <code>has_password</code> | <code>bool \| None</code> | Filter links that have password protection (any password)<br>**Default**: <code>None</code> |
| <code>has_expiration</code> | <code>bool \| None</code> | Filter links that have expiration date (any expiration)<br>**Default**: <code>None</code> |
| <code>has_utm</code> | <code>bool \| None</code> | Filter links that have UTM parameters<br>**Default**: <code>None</code> |
| <code>has_custom_social</code> | <code>bool \| None</code> | Filter links that have custom social media cards<br>**Default**: <code>None</code> |
| <code>has_geo</code> | <code>bool \| None</code> | Filter links that have geo-targeting<br>**Default**: <code>None</code> |
| <code>has_device</code> | <code>bool \| None</code> | Filter links that have device targeting<br>**Default**: <code>None</code> |
| <code>has_comments</code> | <code>bool \| None</code> | Filter links that have comments (any comments)<br>**Default**: <code>None</code> |
| <code>has_tags</code> | <code>bool \| None</code> | Filter links that have tags (any tags)<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Created after date (ISO string)<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Created before date (ISO string)<br>**Default**: <code>None</code> |
| <code>expires_after</code> | <code>RFC3339DateTime \| None</code> | Expires after date (ISO string)<br>**Default**: <code>None</code> |
| <code>expires_before</code> | <code>RFC3339DateTime \| None</code> | Expires before date (ISO string)<br>**Default**: <code>None</code> |
| <code>clicks_min</code> | <code>int \| None</code> | Minimum number of clicks<br>**Default**: <code>None</code> |
| <code>clicks_max</code> | <code>int \| None</code> | Maximum number of clicks<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | Filter by UTM source value<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | Filter by UTM medium value<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | Filter by UTM campaign value<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | Filter by UTM content value<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | Filter by UTM term value<br>**Default**: <code>None</code> |
| <code>group_by</code> | <code>[GroupBy4](code_qr/models/unions/group_by4.py) \| [GroupBy4Dict](code_qr/models/unions/group_by4.py) \| None</code> | The field to group the links by.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;float, [GetLinksCountErrorBody](code_qr/errors/get_links_count_error.py)&#93;</code>

**On `Success`**: `payload` is <code>float</code> -- A list of links

**On `Failure`**: `error` is <code>[GetLinksCountErrorBody](code_qr/errors/get_links_count_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_link(link_id: str, *, body: LinksRequest1 | LinksRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[LinkCodeqrIoLinksApi, UpdateLinkErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a link for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.links.with_raw_response.update_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkErrorBody
```

**Async**

```python
result = await async_client.links.with_raw_response.update_link("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type LinkCodeqrIoLinksApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>link_id</code> | <code>str</code> | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>body</code> | <code>[LinksRequest1](code_qr/models/links_request1.py) \| [LinksRequest1Dict](code_qr/models/links_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py), [UpdateLinkErrorBody](code_qr/errors/update_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[LinkCodeqrIoLinksApi](code_qr/models/link_codeqr_io_links_api.py)</code> -- The updated link

**On `Failure`**: `error` is <code>[UpdateLinkErrorBody](code_qr/errors/update_link_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](code_qr/apis/projects.py)

<details>
<summary><code>def get_project(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project, GetProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a project for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The slug for the project to retrieve. E.g. for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[Project](code_qr/models/project.py), [GetProjectErrorBody](code_qr/errors/get_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project](code_qr/models/project.py)</code> -- The retrieved project

**On `Failure`**: `error` is <code>[GetProjectErrorBody](code_qr/errors/get_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_projects(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Project], GetProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of projects for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.get_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.get_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Project]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[Project](code_qr/models/project.py)&#93;, [GetProjectsErrorBody](code_qr/errors/get_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Project](code_qr/models/project.py)&#93;</code> -- A list of projects

**On `Failure`**: `error` is <code>[GetProjectsErrorBody](code_qr/errors/get_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## QrCodes

> Source: [QrCodes](code_qr/apis/qr_codes.py)

<details>
<summary><code>def bulk_create_qr_codes(*, body: list[QrcodesBulkRequest | QrcodesBulkRequestDict] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[QrcodesBulkResponse1], BulkCreateQrCodesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk create up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.bulk_create_qr_codes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QrcodesBulkResponse1]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkCreateQrCodesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.bulk_create_qr_codes()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QrcodesBulkResponse1]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkCreateQrCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;[QrcodesBulkRequest](code_qr/models/qrcodes_bulk_request.py) \| [QrcodesBulkRequestDict](code_qr/models/qrcodes_bulk_request.py)&#93; \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[QrcodesBulkResponse1](code_qr/models/unions/qrcodes_bulk_response1.py)&#93;, [BulkCreateQrCodesErrorBody](code_qr/errors/bulk_create_qr_codes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[QrcodesBulkResponse1](code_qr/models/unions/qrcodes_bulk_response1.py)&#93;</code> -- The created QR Codes

**On `Failure`**: `error` is <code>[BulkCreateQrCodesErrorBody](code_qr/errors/bulk_create_qr_codes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_delete_qr_codes(qrcode_ids: list[str], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrcodesBulkResponse, BulkDeleteQrCodesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk delete up to 100 QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.bulk_delete_qr_codes(["clux0rgak00011...", "clux0rgak00022..."])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcodesBulkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDeleteQrCodesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.bulk_delete_qr_codes(["clux0rgak00011...", "clux0rgak00022..."])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcodesBulkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkDeleteQrCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_ids</code> | <code>list&#91;str&#93;</code> | Comma-separated list of QR Code IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[QrcodesBulkResponse](code_qr/models/qrcodes_bulk_response.py), [BulkDeleteQrCodesErrorBody](code_qr/errors/bulk_delete_qr_codes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrcodesBulkResponse](code_qr/models/qrcodes_bulk_response.py)</code> -- The deleted QR Codes count.

**On `Failure`**: `error` is <code>[BulkDeleteQrCodesErrorBody](code_qr/errors/bulk_delete_qr_codes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_qr_code(*, body: QrcodesRequest | QrcodesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, CreateQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new QR Code for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.create_qr_code()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.create_qr_code()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QrcodesRequest](code_qr/models/qrcodes_request.py) \| [QrcodesRequestDict](code_qr/models/qrcodes_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[QrCode](code_qr/models/qr_code.py), [CreateQrCodeErrorBody](code_qr/errors/create_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](code_qr/models/qr_code.py)</code> -- The created QR Code

**On `Failure`**: `error` is <code>[CreateQrCodeErrorBody](code_qr/errors/create_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_qr_code(qrcode_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrcodesResponse, DeleteQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a QR Code for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.delete_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.delete_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrcodesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The id of the QR Code to delete. You may use either `qrcodeId` (obtained via `/qrcodes/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[QrcodesResponse](code_qr/models/qrcodes_response.py), [DeleteQrCodeErrorBody](code_qr/errors/delete_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrcodesResponse](code_qr/models/qrcodes_response.py)</code> -- The deleted QR Code ID.

**On `Failure`**: `error` is <code>[DeleteQrCodeErrorBody](code_qr/errors/delete_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qr_code_info(project_slug: str, domain: str, key: str, *, qr_code_id: str | None = None, external_id: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, GetQrCodeInfoErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the info for a QR Code.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_qr_code_info(
    "some example string", "some example string", "some example string", external_id="ext_123456"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeInfoErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_qr_code_info(
    "some example string", "some example string", "some example string", external_id="ext_123456"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodeInfoErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`. |
| <code>domain</code> | <code>str</code> | Value sent with the request. |
| <code>key</code> | <code>str</code> | The key of the QR code to be retrieved. For example, for `codeqr.link/github`, the key is `github`. |
| <code>qr_code_id</code> | <code>str \| None</code> | The unique ID of the QR code.<br>**Default**: <code>None</code> |
| <code>external_id</code> | <code>str \| None</code> | This is the ID of the QR code in your database. It must be prefixed with `ext_` when passed as a query parameter.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[QrCode](code_qr/models/qr_code.py), [GetQrCodeInfoErrorBody](code_qr/errors/get_qr_code_info_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](code_qr/models/qr_code.py)</code> -- The retrieved QR Code

**On `Failure`**: `error` is <code>[GetQrCodeInfoErrorBody](code_qr/errors/get_qr_code_info_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qr_codes(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, comments: str | None = None, password: str | None = None, expires_at: RFC3339DateTime | None = None, track_conversion: bool | None = False, with_tags: bool | None = False, use_as_template: bool | None = None, format_: FormatOrStr | None = None, type_: Type2OrStr | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, scans_min: int | None = None, scans_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, sort: SortCodeqrIoQrCodesApiOrStr | None = SortCodeqrIoQrCodesApi.CREATED_AT, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[QrCode], GetQrCodesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a paginated list of QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_qr_codes(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QrCode]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodesErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_qr_codes(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QrCode]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str \| None</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the project will be returned.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.<br>**Default**: <code>None</code> |
| <code>tag_ids</code> | <code>[TagIdsModel](code_qr/models/unions/tag_ids_model.py) \| [TagIdsModelDict](code_qr/models/unions/tag_ids_model.py) \| None</code> | The IDs of the tags to filter the QR codes.<br>**Default**: <code>None</code> |
| <code>tag_names</code> | <code>[TagNames](code_qr/models/unions/tag_names.py) \| [TagNamesDict](code_qr/models/unions/tag_names.py) \| None</code> | The unique name of the tags assigned to the QR code (case insensitive).<br>**Default**: <code>None</code> |
| <code>folder_id</code> | <code>str \| None</code> | The folder ID to filter the QR codes by.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the QR codes. The search term will be matched against the QR code slug, title, and the destination URL.<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | The ID of the user to filter by.<br>**Default**: <code>None</code> |
| <code>show_archived</code> | <code>bool \| None</code> | If should include archived QR codes in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>comments</code> | <code>str \| None</code> | The comments to filter by.<br>**Default**: <code>None</code> |
| <code>password</code> | <code>str \| None</code> | The password to filter by.<br>**Default**: <code>None</code> |
| <code>expires_at</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>track_conversion</code> | <code>bool \| None</code> | If should include QR codes with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>with_tags</code> | <code>bool \| None</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>use_as_template</code> | <code>bool \| None</code> | Filter QR codes marked as templates.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](code_qr/models/enums/format.py) \| None</code> | Filter by QR code format - static or dynamic<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type2OrStr](code_qr/models/enums/type2.py) \| None</code> | Filter by QR code type<br>**Default**: <code>None</code> |
| <code>has_password</code> | <code>bool \| None</code> | Filter QR codes with/without password protection<br>**Default**: <code>None</code> |
| <code>has_expiration</code> | <code>bool \| None</code> | Filter QR codes with/without expiration date<br>**Default**: <code>None</code> |
| <code>has_utm</code> | <code>bool \| None</code> | Filter QR codes with/without UTM parameters<br>**Default**: <code>None</code> |
| <code>has_custom_social</code> | <code>bool \| None</code> | Filter QR codes with/without custom social media cards<br>**Default**: <code>None</code> |
| <code>has_geo</code> | <code>bool \| None</code> | Filter QR codes with/without geo-targeting<br>**Default**: <code>None</code> |
| <code>has_device</code> | <code>bool \| None</code> | Filter QR codes with/without device targeting<br>**Default**: <code>None</code> |
| <code>has_comments</code> | <code>bool \| None</code> | Filter QR codes with/without comments<br>**Default**: <code>None</code> |
| <code>has_tags</code> | <code>bool \| None</code> | Filter QR codes with/without tags<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes created after this date<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes created before this date<br>**Default**: <code>None</code> |
| <code>expires_after</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes expiring after this date<br>**Default**: <code>None</code> |
| <code>expires_before</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes expiring before this date<br>**Default**: <code>None</code> |
| <code>scans_min</code> | <code>int \| None</code> | Minimum number of scans<br>**Default**: <code>None</code> |
| <code>scans_max</code> | <code>int \| None</code> | Maximum number of scans<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | Filter by UTM source value<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | Filter by UTM medium value<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | Filter by UTM campaign value<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | Filter by UTM content value<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | Filter by UTM term value<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortCodeqrIoQrCodesApiOrStr](code_qr/models/enums/sort_codeqr_io_qr_codes_api.py) \| None</code> | The field to order the QR codes. The default is `createdAt`, and the order of sorting is always descending.<br>**Default**: <code>SortCodeqrIoQrCodesApi.CREATED_AT</code> |
| <code>page</code> | <code>float \| None</code> | The page number for pagination.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | The number of items per page.<br>**Default**: <code>100.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[QrCode](code_qr/models/qr_code.py)&#93;, [GetQrCodesErrorBody](code_qr/errors/get_qr_codes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[QrCode](code_qr/models/qr_code.py)&#93;</code> -- A list of QR Codes

**On `Failure`**: `error` is <code>[GetQrCodesErrorBody](code_qr/errors/get_qr_codes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qr_codes_count(*, project_slug: str | None = None, domain: str | None = None, tag_id: str | None = None, tag_ids: TagIdsModel | TagIdsModelDict | None = None, tag_names: TagNames | TagNamesDict | None = None, folder_id: str | None = None, search: str | None = None, user_id: str | None = None, show_archived: bool | None = False, comments: str | None = None, password: str | None = None, expires_at: RFC3339DateTime | None = None, track_conversion: bool | None = False, with_tags: bool | None = False, use_as_template: bool | None = None, format_: FormatOrStr | None = None, type_: Type2OrStr | None = None, has_password: bool | None = None, has_expiration: bool | None = None, has_utm: bool | None = None, has_custom_social: bool | None = None, has_geo: bool | None = None, has_device: bool | None = None, has_comments: bool | None = None, has_tags: bool | None = None, created_after: RFC3339DateTime | None = None, created_before: RFC3339DateTime | None = None, expires_after: RFC3339DateTime | None = None, expires_before: RFC3339DateTime | None = None, scans_min: int | None = None, scans_max: int | None = None, utm_source: str | None = None, utm_medium: str | None = None, utm_campaign: str | None = None, utm_content: str | None = None, utm_term: str | None = None, group_by: GroupBy4CodeqrIoQrCodesApi | GroupBy4CodeqrIoQrCodesApiDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[float, GetQrCodesCountErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the number of QR Codes for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.get_qr_codes_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type float
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodesCountErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.get_qr_codes_count()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type float
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQrCodesCountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str \| None</code> | The slug of the project to which the QR code belongs. For example, for `app.codeqr.io/acme`, the projectSlug is `acme`.<br>**Default**: <code>None</code> |
| <code>domain</code> | <code>str \| None</code> | The domain to filter the QR codes. For example, `ac.me`. If not provided, all QR codes of the project will be returned.<br>**Default**: <code>None</code> |
| <code>tag_id</code> | <code>str \| None</code> | [DEPRECATED (use tagIds instead)]: The unique ID of the tag assigned to the QR code.<br>**Default**: <code>None</code> |
| <code>tag_ids</code> | <code>[TagIdsModel](code_qr/models/unions/tag_ids_model.py) \| [TagIdsModelDict](code_qr/models/unions/tag_ids_model.py) \| None</code> | The IDs of the tags to filter the QR codes.<br>**Default**: <code>None</code> |
| <code>tag_names</code> | <code>[TagNames](code_qr/models/unions/tag_names.py) \| [TagNamesDict](code_qr/models/unions/tag_names.py) \| None</code> | The unique name of the tags assigned to the QR code (case insensitive).<br>**Default**: <code>None</code> |
| <code>folder_id</code> | <code>str \| None</code> | The folder ID to filter the QR codes by.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the QR codes. The search term will be matched against the QR code slug, title, and the destination URL.<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>str \| None</code> | The ID of the user to filter by.<br>**Default**: <code>None</code> |
| <code>show_archived</code> | <code>bool \| None</code> | If should include archived QR codes in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>comments</code> | <code>str \| None</code> | The comments to filter by.<br>**Default**: <code>None</code> |
| <code>password</code> | <code>str \| None</code> | The password to filter by.<br>**Default**: <code>None</code> |
| <code>expires_at</code> | <code>RFC3339DateTime \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>track_conversion</code> | <code>bool \| None</code> | If should include QR codes with conversion tracking enabled. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>with_tags</code> | <code>bool \| None</code> | If should include tags in the response. The default is `false` if not provided.<br>**Default**: <code>False</code> |
| <code>use_as_template</code> | <code>bool \| None</code> | Filter QR codes marked as templates.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](code_qr/models/enums/format.py) \| None</code> | Filter by QR code format - static or dynamic<br>**Default**: <code>None</code> |
| <code>type_</code> | <code>[Type2OrStr](code_qr/models/enums/type2.py) \| None</code> | Filter by QR code type<br>**Default**: <code>None</code> |
| <code>has_password</code> | <code>bool \| None</code> | Filter QR codes with/without password protection<br>**Default**: <code>None</code> |
| <code>has_expiration</code> | <code>bool \| None</code> | Filter QR codes with/without expiration date<br>**Default**: <code>None</code> |
| <code>has_utm</code> | <code>bool \| None</code> | Filter QR codes with/without UTM parameters<br>**Default**: <code>None</code> |
| <code>has_custom_social</code> | <code>bool \| None</code> | Filter QR codes with/without custom social media cards<br>**Default**: <code>None</code> |
| <code>has_geo</code> | <code>bool \| None</code> | Filter QR codes with/without geo-targeting<br>**Default**: <code>None</code> |
| <code>has_device</code> | <code>bool \| None</code> | Filter QR codes with/without device targeting<br>**Default**: <code>None</code> |
| <code>has_comments</code> | <code>bool \| None</code> | Filter QR codes with/without comments<br>**Default**: <code>None</code> |
| <code>has_tags</code> | <code>bool \| None</code> | Filter QR codes with/without tags<br>**Default**: <code>None</code> |
| <code>created_after</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes created after this date<br>**Default**: <code>None</code> |
| <code>created_before</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes created before this date<br>**Default**: <code>None</code> |
| <code>expires_after</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes expiring after this date<br>**Default**: <code>None</code> |
| <code>expires_before</code> | <code>RFC3339DateTime \| None</code> | Filter QR codes expiring before this date<br>**Default**: <code>None</code> |
| <code>scans_min</code> | <code>int \| None</code> | Minimum number of scans<br>**Default**: <code>None</code> |
| <code>scans_max</code> | <code>int \| None</code> | Maximum number of scans<br>**Default**: <code>None</code> |
| <code>utm_source</code> | <code>str \| None</code> | Filter by UTM source value<br>**Default**: <code>None</code> |
| <code>utm_medium</code> | <code>str \| None</code> | Filter by UTM medium value<br>**Default**: <code>None</code> |
| <code>utm_campaign</code> | <code>str \| None</code> | Filter by UTM campaign value<br>**Default**: <code>None</code> |
| <code>utm_content</code> | <code>str \| None</code> | Filter by UTM content value<br>**Default**: <code>None</code> |
| <code>utm_term</code> | <code>str \| None</code> | Filter by UTM term value<br>**Default**: <code>None</code> |
| <code>group_by</code> | <code>[GroupBy4CodeqrIoQrCodesApi](code_qr/models/unions/group_by4_codeqr_io_qr_codes_api.py) \| [GroupBy4CodeqrIoQrCodesApiDict](code_qr/models/unions/group_by4_codeqr_io_qr_codes_api.py) \| None</code> | The field to group the QR codes.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;float, [GetQrCodesCountErrorBody](code_qr/errors/get_qr_codes_count_error.py)&#93;</code>

**On `Success`**: `payload` is <code>float</code> -- The count of QR Codes

**On `Failure`**: `error` is <code>[GetQrCodesCountErrorBody](code_qr/errors/get_qr_codes_count_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_qr_code(qrcode_id: str, *, body: QrcodesRequest1 | QrcodesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QrCode, UpdateQrCodeErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a QR Code for the authenticated workspace. If there's no change, returns it as it is.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qr_codes.with_raw_response.update_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodeErrorBody
```

**Async**

```python
result = await async_client.qr_codes.with_raw_response.update_qr_code("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QrCode
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateQrCodeErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>qrcode_id</code> | <code>str</code> | The id of the QR Code to update. You may use either `qrcodeId` (obtained via `/qrcodes/info` endpoint) or `externalId` prefixed with `ext_`. |
| <code>body</code> | <code>[QrcodesRequest1](code_qr/models/qrcodes_request1.py) \| [QrcodesRequest1Dict](code_qr/models/qrcodes_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[QrCode](code_qr/models/qr_code.py), [UpdateQrCodeErrorBody](code_qr/errors/update_qr_code_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QrCode](code_qr/models/qr_code.py)</code> -- The updated QR Code

**On `Failure`**: `error` is <code>[UpdateQrCodeErrorBody](code_qr/errors/update_qr_code_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tags

> Source: [Tags](code_qr/apis/tags.py)

<details>
<summary><code>def create_tag(*, body: TagsRequest | TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagModel, CreateTagErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new tag for the authenticated project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.create_tag()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTagErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.create_tag()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TagsRequest](code_qr/models/tags_request.py) \| [TagsRequestDict](code_qr/models/tags_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[TagModel](code_qr/models/tag_model.py), [CreateTagErrorBody](code_qr/errors/create_tag_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagModel](code_qr/models/tag_model.py)</code> -- The created tag

**On `Failure`**: `error` is <code>[CreateTagErrorBody](code_qr/errors/create_tag_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_tag(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagsResponse, DeleteTagErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.delete_tag("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTagErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.delete_tag("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the tag to delete. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[TagsResponse](code_qr/models/tags_response.py), [DeleteTagErrorBody](code_qr/errors/delete_tag_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagsResponse](code_qr/models/tags_response.py)</code> -- The deleted tag ID.

**On `Failure`**: `error` is <code>[DeleteTagErrorBody](code_qr/errors/delete_tag_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_tags(*, sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME, sort_order: SortOrderOrStr | None = SortOrder.ASC, search: str | None = None, ids: Ids | IdsDict | None = None, page: float | None = 1.0, page_size: float | None = 100.0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[TagModel], GetTagsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a list of tags for the authenticated workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.get_tags(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[TagModel]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTagsErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.get_tags(page=1, page_size=50)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[TagModel]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTagsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>sort_by</code> | <code>[SortByCodeqrIoTagsApiOrStr](code_qr/models/enums/sort_by_codeqr_io_tags_api.py) \| None</code> | The field to sort the tags by.<br>**Default**: <code>SortByCodeqrIoTagsApi.NAME</code> |
| <code>sort_order</code> | <code>[SortOrderOrStr](code_qr/models/enums/sort_order.py) \| None</code> | The order to sort the tags by.<br>**Default**: <code>SortOrder.ASC</code> |
| <code>search</code> | <code>str \| None</code> | The search term to filter the tags by.<br>**Default**: <code>None</code> |
| <code>ids</code> | <code>[Ids](code_qr/models/unions/ids.py) \| [IdsDict](code_qr/models/unions/ids.py) \| None</code> | IDs of tags to filter by.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>float \| None</code> | The page number for pagination.<br>**Default**: <code>1.0</code> |
| <code>page_size</code> | <code>float \| None</code> | The number of items per page.<br>**Default**: <code>100.0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;list&#91;[TagModel](code_qr/models/tag_model.py)&#93;, [GetTagsErrorBody](code_qr/errors/get_tags_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[TagModel](code_qr/models/tag_model.py)&#93;</code> -- A list of tags

**On `Failure`**: `error` is <code>[GetTagsErrorBody](code_qr/errors/get_tags_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_tag(id_: str, *, body: TagsRequest1 | TagsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TagModel, UpdateTagErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a tag in the workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tags.with_raw_response.update_tag("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTagErrorBody
```

**Async**

```python
result = await async_client.tags.with_raw_response.update_tag("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TagModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTagErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The ID of the tag to update. |
| <code>body</code> | <code>[TagsRequest1](code_qr/models/tags_request1.py) \| [TagsRequest1Dict](code_qr/models/tags_request1.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[TagModel](code_qr/models/tag_model.py), [UpdateTagErrorBody](code_qr/errors/update_tag_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TagModel](code_qr/models/tag_model.py)</code> -- The updated tag.

**On `Failure`**: `error` is <code>[UpdateTagErrorBody](code_qr/errors/update_tag_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Track

> Source: [Track](code_qr/apis/track.py)

<details>
<summary><code>def track_lead(*, body: TrackLeadRequest | TrackLeadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrackLeadResponse, TrackLeadErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a lead for a short link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.track.with_raw_response.track_lead()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackLeadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackLeadErrorBody
```

**Async**

```python
result = await async_client.track.with_raw_response.track_lead()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackLeadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackLeadErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TrackLeadRequest](code_qr/models/track_lead_request.py) \| [TrackLeadRequestDict](code_qr/models/track_lead_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[TrackLeadResponse](code_qr/models/track_lead_response.py), [TrackLeadErrorBody](code_qr/errors/track_lead_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrackLeadResponse](code_qr/models/track_lead_response.py)</code> -- A lead was tracked.

**On `Failure`**: `error` is <code>[TrackLeadErrorBody](code_qr/errors/track_lead_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def track_sale(*, body: TrackSaleRequest | TrackSaleRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrackSaleResponse, TrackSaleErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Track a sale for a short link.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.track.with_raw_response.track_sale()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackSaleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackSaleErrorBody
```

**Async**

```python
result = await async_client.track.with_raw_response.track_sale()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrackSaleResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrackSaleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TrackSaleRequest](code_qr/models/track_sale_request.py) \| [TrackSaleRequestDict](code_qr/models/track_sale_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](code_qr/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](code_qr/core/results.py)&#91;[TrackSaleResponse](code_qr/models/track_sale_response.py), [TrackSaleErrorBody](code_qr/errors/track_sale_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrackSaleResponse](code_qr/models/track_sale_response.py)</code> -- A sale was tracked.

**On `Failure`**: `error` is <code>[TrackSaleErrorBody](code_qr/errors/track_sale_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 410, 422, 429, 500 | <code>[M4001](code_qr/models/m4001.py)</code> |
| anything unmapped | <code>[RawError](code_qr/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

