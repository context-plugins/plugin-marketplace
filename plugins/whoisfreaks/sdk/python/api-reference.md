# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [WhoisFreaksClient](whois_freaks/client.py)

## AsnWhois

> Source: [AsnWhois](whois_freaks/apis/asn_whois.py)

<details>
<summary><code>def asn_whois(asn: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> AsnWhoisResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS for an ASN. 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.asn_whois.asn_whois("as15169")
    # TODO: Handle 'response' of type AsnWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsnWhoisErrorBody
```

**Async**

```python
try:
    response = await async_client.asn_whois.asn_whois("as15169")
    # TODO: Handle 'response' of type AsnWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AsnWhoisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>asn</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AsnWhoisResponse](whois_freaks/models/asn_whois_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[AsnWhoisErrorBody](whois_freaks/errors/asn_whois_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Account

> Source: [Account](whois_freaks/apis/account.py)

<details>
<summary><code>def account_usage(*, request_options: RequestOptionsOrDict | None = None) -> AccountUsageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Account Usage. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.account_usage()
    # TODO: Handle 'response' of type AccountUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountUsageErrorBody
```

**Async**

```python
try:
    response = await async_client.account.account_usage()
    # TODO: Handle 'response' of type AccountUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AccountUsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AccountUsageResponse](whois_freaks/models/account_usage_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[AccountUsageErrorBody](whois_freaks/errors/account_usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def database_file_status(*, request_options: RequestOptionsOrDict | None = None) -> DatabaseFileStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

No API key required. Returns freshness of all downloadable files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.database_file_status()
    # TODO: Handle 'response' of type DatabaseFileStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatabaseFileStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.account.database_file_status()
    # TODO: Handle 'response' of type DatabaseFileStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DatabaseFileStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DatabaseFileStatus](whois_freaks/models/database_file_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DatabaseFileStatusErrorBody](whois_freaks/errors/database_file_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rotate_api_key(*, request_options: RequestOptionsOrDict | None = None) -> str</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate API Key. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.rotate_api_key()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateApiKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.account.rotate_api_key()
    # TODO: Handle 'response' of type str
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RotateApiKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>str</code> -- Key rotated

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RotateApiKeyErrorBody](whois_freaks/errors/rotate_api_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>str</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Dns

> Source: [Dns](whois_freaks/apis/dns.py)

<details>
<summary><code>def dns_bulk(body: V20DnsBulkLiveRequest | V20DnsBulkLiveRequestDict, *, type_: str = "all", format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> BulkDnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 domains + 100 IPs in one request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dns.dns_bulk(V20DnsBulkLiveRequest(), type_="some example string")
    # TODO: Handle 'response' of type BulkDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsBulkErrorBody
```

**Async**

```python
try:
    response = await async_client.dns.dns_bulk(V20DnsBulkLiveRequest(), type_="some example string")
    # TODO: Handle 'response' of type BulkDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsBulkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V20DnsBulkLiveRequest](whois_freaks/models/v20_dns_bulk_live_request.py) \| [V20DnsBulkLiveRequestDict](whois_freaks/models/v20_dns_bulk_live_request.py)</code> | The request body. |
| <code>type_</code> | <code>str</code> | Value sent with the request.<br>**Default**: <code>"all"</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkDnsResponse](whois_freaks/models/bulk_dns_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DnsBulkErrorBody](whois_freaks/errors/dns_bulk_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dns_historical(domain_name: str, *, type_: str = "all", page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> HistoricalDnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All historical DNS records. 2 credits per page (100 records/page).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dns.dns_historical("some example string", type_="some example string")
    # TODO: Handle 'response' of type HistoricalDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsHistoricalErrorBody
```

**Async**

```python
try:
    response = await async_client.dns.dns_historical("some example string", type_="some example string")
    # TODO: Handle 'response' of type HistoricalDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsHistoricalErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | Value sent with the request. |
| <code>type_</code> | <code>str</code> | Value sent with the request.<br>**Default**: <code>"all"</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HistoricalDnsResponse](whois_freaks/models/historical_dns_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DnsHistoricalErrorBody](whois_freaks/errors/dns_historical_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dns_live(*, type_: str = "all", domain_name: str | None = None, ip_address: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> DnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time DNS record lookup. 1 credit per query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dns.dns_live(type_="some example string")
    # TODO: Handle 'response' of type DnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsLiveErrorBody
```

**Async**

```python
try:
    response = await async_client.dns.dns_live(type_="some example string")
    # TODO: Handle 'response' of type DnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsLiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type_</code> | <code>str</code> | all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME<br>**Default**: <code>"all"</code> |
| <code>domain_name</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>ip_address</code> | <code>str \| None</code> | Use for PTR lookups<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DnsResponse](whois_freaks/models/dns_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DnsLiveErrorBody](whois_freaks/errors/dns_live_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def dns_reverse(value: str, type_: TypeOrStr, *, exact: bool | None = True, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> ReverseDnsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search domains by IP or DNS value. 5 credits per page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.dns.dns_reverse("some example string", Type.A)
    # TODO: Handle 'response' of type ReverseDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsReverseErrorBody
```

**Async**

```python
try:
    response = await async_client.dns.dns_reverse("some example string", Type.A)
    # TODO: Handle 'response' of type ReverseDnsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DnsReverseErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>value</code> | <code>str</code> | IP, CIDR, or record value |
| <code>type_</code> | <code>[TypeOrStr](whois_freaks/models/enums/type.py)</code> | Value sent with the request. |
| <code>exact</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReverseDnsResponse](whois_freaks/models/reverse_dns_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DnsReverseErrorBody](whois_freaks/errors/dns_reverse_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesAsnWhois

> Source: [DatabasesAsnWhois](whois_freaks/apis/databases_asn_whois.py)

<details>
<summary><code>def db_asn_whois(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN WHOIS Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_asn_whois.db_asn_whois(date(2024, 1, 15))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbAsnWhoisErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_asn_whois.db_asn_whois(date(2024, 1, 15))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbAsnWhoisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- JSON gzipped

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbAsnWhoisErrorBody](whois_freaks/errors/db_asn_whois_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_asn_whois_status(*, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

ASN WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_asn_whois.db_asn_whois_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbAsnWhoisStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_asn_whois.db_asn_whois_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbAsnWhoisStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbAsnWhoisStatusErrorBody](whois_freaks/errors/db_asn_whois_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesDns

> Source: [DatabasesDns](whois_freaks/apis/databases_dns.py)

<details>
<summary><code>def db_dns_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_dns.db_dns_daily()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsDailyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_dns.db_dns_daily()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsDailyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDnsDailyErrorBody](whois_freaks/errors/db_dns_daily_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_dns_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_dns.db_dns_monthly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsMonthlyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_dns.db_dns_monthly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsMonthlyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDnsMonthlyErrorBody](whois_freaks/errors/db_dns_monthly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_dns_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

DNS Database Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_dns.db_dns_weekly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsWeeklyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_dns.db_dns_weekly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDnsWeeklyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDnsWeeklyErrorBody](whois_freaks/errors/db_dns_weekly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesExpiringDropped

> Source: [DatabasesExpiringDropped](whois_freaks/apis/databases_expiring_dropped.py)

<details>
<summary><code>def db_dropped(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped Domains. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_expiring_dropped.db_dropped(True)
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_expiring_dropped.db_dropped(True)
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>whois</code> | <code>bool</code> | Value sent with the request. |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDroppedErrorBody](whois_freaks/errors/db_dropped_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_dropped_backlinks(*, whois: bool | None = None, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped With Backlinks. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_expiring_dropped.db_dropped_backlinks()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedBacklinksErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_expiring_dropped.db_dropped_backlinks()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedBacklinksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>whois</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDroppedBacklinksErrorBody](whois_freaks/errors/db_dropped_backlinks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_dropped_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dropped Domains (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_expiring_dropped.db_dropped_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedJsonErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_expiring_dropped.db_dropped_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbDroppedJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>tlds</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- JSON array of domains

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbDroppedJsonErrorBody](whois_freaks/errors/db_dropped_json_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_expired(whois: bool, *, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expiring Domains. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_expiring_dropped.db_expired(True)
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbExpiredErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_expiring_dropped.db_expired(True)
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbExpiredErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>whois</code> | <code>bool</code> | Value sent with the request. |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbExpiredErrorBody](whois_freaks/errors/db_expired_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_expired_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Expiring Cleaned WHOIS. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_expiring_dropped.db_expired_cleaned()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbExpiredCleanedErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_expiring_dropped.db_expired_cleaned()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbExpiredCleanedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbExpiredCleanedErrorBody](whois_freaks/errors/db_expired_cleaned_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpGeolocation

> Source: [DatabasesIpGeolocation](whois_freaks/apis/databases_ip_geolocation.py)

<details>
<summary><code>def db_ip_city(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to City Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_geolocation.db_ip_city(date(2024, 1, 15))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCityErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_geolocation.db_ip_city(date(2024, 1, 15))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- ZIP archive

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpCityErrorBody](whois_freaks/errors/db_ip_city_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_ip_city_status(*, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to City Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_geolocation.db_ip_city_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCityStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_geolocation.db_ip_city_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCityStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpCityStatusErrorBody](whois_freaks/errors/db_ip_city_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_ip_country(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to Country Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_geolocation.db_ip_country(date(2024, 1, 15))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCountryErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_geolocation.db_ip_country(date(2024, 1, 15))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCountryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- ZIP archive

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpCountryErrorBody](whois_freaks/errors/db_ip_country_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_ip_country_status(*, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP to Country Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_geolocation.db_ip_country_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCountryStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_geolocation.db_ip_country_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpCountryStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpCountryStatusErrorBody](whois_freaks/errors/db_ip_country_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpSecurity

> Source: [DatabasesIpSecurity](whois_freaks/apis/databases_ip_security.py)

<details>
<summary><code>def db_ip_security(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP Security Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_security.db_ip_security(date(2024, 1, 15))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpSecurityErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_security.db_ip_security(date(2024, 1, 15))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpSecurityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpSecurityErrorBody](whois_freaks/errors/db_ip_security_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_ip_security_status(*, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP Security Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_security.db_ip_security_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpSecurityStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_security.db_ip_security_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpSecurityStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpSecurityStatusErrorBody](whois_freaks/errors/db_ip_security_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesIpWhois

> Source: [DatabasesIpWhois](whois_freaks/apis/databases_ip_whois.py)

<details>
<summary><code>def db_ip_whois(date: Date, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP WHOIS Snapshot. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_whois.db_ip_whois(date(2024, 1, 15))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpWhoisErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_whois.db_ip_whois(date(2024, 1, 15))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpWhoisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- JSON gzipped

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpWhoisErrorBody](whois_freaks/errors/db_ip_whois_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_ip_whois_status(*, request_options: RequestOptionsOrDict | None = None) -> SnapshotStatus</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

IP WHOIS Snapshot Status. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_ip_whois.db_ip_whois_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpWhoisStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_ip_whois.db_ip_whois_status()
    # TODO: Handle 'response' of type SnapshotStatus
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbIpWhoisStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotStatus](whois_freaks/models/snapshot_status.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbIpWhoisStatusErrorBody](whois_freaks/errors/db_ip_whois_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesNewlyRegistered

> Source: [DatabasesNewlyRegistered](whois_freaks/apis/databases_newly_registered.py)

<details>
<summary><code>def db_newly_cctld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_cctld(True)
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_cctld(True)
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>whois</code> | <code>bool</code> | Value sent with the request. |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>tlds</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyCctldErrorBody](whois_freaks/errors/db_newly_cctld_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_cctld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_cctld_cleaned()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldCleanedErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_cctld_cleaned()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldCleanedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyCctldCleanedErrorBody](whois_freaks/errors/db_newly_cctld_cleaned_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_cctld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered ccTLD (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_cctld_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldJsonErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_cctld_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyCctldJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>tlds</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- JSON array of domains

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyCctldJsonErrorBody](whois_freaks/errors/db_newly_cctld_json_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_dns(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered With DNS. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_dns()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyDnsErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_dns()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyDnsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- JSON array of domains with DNS

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyDnsErrorBody](whois_freaks/errors/db_newly_dns_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_gtld(whois: bool, *, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_gtld(True)
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_gtld(True)
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>whois</code> | <code>bool</code> | Value sent with the request. |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>tlds</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyGtldErrorBody](whois_freaks/errors/db_newly_gtld_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_gtld_cleaned(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD Cleaned WHOIS (CSV). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_gtld_cleaned()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldCleanedErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_gtld_cleaned()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldCleanedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyGtldCleanedErrorBody](whois_freaks/errors/db_newly_gtld_cleaned_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_newly_gtld_json(*, date: Date | None = None, tlds: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[str]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newly Registered gTLD (JSON). Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_newly_registered.db_newly_gtld_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldJsonErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_newly_registered.db_newly_gtld_json()
    # TODO: Handle 'response' of type list[str]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbNewlyGtldJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>tlds</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;str&#93;</code> -- JSON array of domains

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbNewlyGtldJsonErrorBody](whois_freaks/errors/db_newly_gtld_json_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesSubdomains

> Source: [DatabasesSubdomains](whois_freaks/apis/databases_subdomains.py)

<details>
<summary><code>def db_subdomains_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_subdomains.db_subdomains_daily()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsDailyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_subdomains.db_subdomains_daily()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsDailyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbSubdomainsDailyErrorBody](whois_freaks/errors/db_subdomains_daily_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_subdomains_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_subdomains.db_subdomains_monthly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsMonthlyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_subdomains.db_subdomains_monthly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsMonthlyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbSubdomainsMonthlyErrorBody](whois_freaks/errors/db_subdomains_monthly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_subdomains_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Subdomains Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_subdomains.db_subdomains_weekly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsWeeklyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_subdomains.db_subdomains_weekly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbSubdomainsWeeklyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbSubdomainsWeeklyErrorBody](whois_freaks/errors/db_subdomains_weekly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesThreatFeed

> Source: [DatabasesThreatFeed](whois_freaks/apis/databases_threat_feed.py)

<details>
<summary><code>def download_threat_feed_malware(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_malware()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_malware()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Feed date (yyyy-MM-dd); defaults to latest available<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Malware threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_malware_sample(*, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_malware_sample()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_malware_sample()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Sample malware threat feed as CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_phishing(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_phishing()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_phishing()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Feed date (yyyy-MM-dd); defaults to latest available<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Phishing threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_phishing_sample(*, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_phishing_sample()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_phishing_sample()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Sample phishing threat feed as CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_spam(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_spam()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_spam()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>str \| None</code> | Feed date (yyyy-MM-dd); defaults to latest available<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Spam threat feed as CSV (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_threat_feed_spam_sample(*, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_threat_feed.download_threat_feed_spam_sample()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.databases_threat_feed.download_threat_feed_spam_sample()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Sample spam threat feed as CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## DatabasesWhois

> Source: [DatabasesWhois](whois_freaks/apis/databases_whois.py)

<details>
<summary><code>def db_whois_daily(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Daily. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_whois.db_whois_daily()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisDailyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_whois.db_whois_daily()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisDailyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbWhoisDailyErrorBody](whois_freaks/errors/db_whois_daily_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_whois_monthly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Monthly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_whois.db_whois_monthly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisMonthlyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_whois.db_whois_monthly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisMonthlyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbWhoisMonthlyErrorBody](whois_freaks/errors/db_whois_monthly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def db_whois_weekly(*, date: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS Database Weekly. Returns the file/snapshot described by this operation.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.databases_whois.db_whois_weekly()
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisWeeklyErrorBody
```

**Async**

```python
try:
    response = await async_client.databases_whois.db_whois_weekly()
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DbWhoisWeeklyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>date</code> | <code>Date \| None</code> | yyyy-MM-dd; omit for latest<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- CSV

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DbWhoisWeeklyErrorBody](whois_freaks/errors/db_whois_weekly_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DomainAvailability

> Source: [DomainAvailability](whois_freaks/apis/domain_availability.py)

<details>
<summary><code>def bulk_domain_availability_v2(body: BulkDomainAvailabilityRequest | BulkDomainAvailabilityRequestDict, *, domain: str | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> BulkDomainAvailabilityResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param. Max 100 domains per request. 1 credit per domain checked.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.domain_availability.bulk_domain_availability_v2(
        BulkDomainAvailabilityRequest(), domain="google.com"
    )
    # TODO: Handle 'response' of type BulkDomainAvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkDomainAvailabilityV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_availability.bulk_domain_availability_v2(
        BulkDomainAvailabilityRequest(), domain="google.com"
    )
    # TODO: Handle 'response' of type BulkDomainAvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkDomainAvailabilityV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDomainAvailabilityRequest](whois_freaks/models/bulk_domain_availability_request.py) \| [BulkDomainAvailabilityRequestDict](whois_freaks/models/bulk_domain_availability_request.py)</code> | The request body. |
| <code>domain</code> | <code>str \| None</code> | Required for TLD-mode bulk check (base domain).<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkDomainAvailabilityResponse](whois_freaks/models/bulk_domain_availability_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[BulkDomainAvailabilityV2ErrorBody](whois_freaks/errors/bulk_domain_availability_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def domain_availability_v2(domain: str, *, sug: bool | None = False, count: int | None = 5, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> DomainAvailabilityResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check availability of a single domain and optionally get suggestions across multiple TLDs. 1 credit per domain checked. sug=false checks only the queried domain; sug=true returns up to `count` (max 100) TLD suggestions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.domain_availability.domain_availability_v2("google.com")
    # TODO: Handle 'response' of type DomainAvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainAvailabilityV2ErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_availability.domain_availability_v2("google.com")
    # TODO: Handle 'response' of type DomainAvailabilityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainAvailabilityV2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | The domain name to check |
| <code>sug</code> | <code>bool \| None</code> | Whether to return TLD suggestions alongside the queried domain.<br>**Default**: <code>False</code> |
| <code>count</code> | <code>int \| None</code> | Number of TLD suggestions to return when sug=true. Maximum is 100.<br>**Default**: <code>5</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainAvailabilityResponse](whois_freaks/models/domain_availability_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DomainAvailabilityV2ErrorBody](whois_freaks/errors/domain_availability_v2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## DomainReputation

> Source: [DomainReputation](whois_freaks/apis/domain_reputation.py)

<details>
<summary><code>def domain_reputation(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> DomainReputationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat intelligence matches, and security signals. 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.domain_reputation.domain_reputation("amazon.com")
    # TODO: Handle 'response' of type DomainReputationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainReputationErrorBody
```

**Async**

```python
try:
    response = await async_client.domain_reputation.domain_reputation("amazon.com")
    # TODO: Handle 'response' of type DomainReputationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DomainReputationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | The domain name to assess |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DomainReputationResponse](whois_freaks/models/domain_reputation_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[DomainReputationErrorBody](whois_freaks/errors/domain_reputation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Geolocation

> Source: [Geolocation](whois_freaks/apis/geolocation.py)

<details>
<summary><code>def bulk_geolocation(body: V10GeolocationRequest | V10GeolocationRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[GeolocationResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 IPs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.geolocation.bulk_geolocation(V10GeolocationRequest(ips=["some example string"]))
    # TODO: Handle 'response' of type list[GeolocationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkGeolocationErrorBody
```

**Async**

```python
try:
    response = await async_client.geolocation.bulk_geolocation(V10GeolocationRequest(ips=["some example string"]))
    # TODO: Handle 'response' of type list[GeolocationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkGeolocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V10GeolocationRequest](whois_freaks/models/v10_geolocation_request.py) \| [V10GeolocationRequestDict](whois_freaks/models/v10_geolocation_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[GeolocationResponse](whois_freaks/models/geolocation_response.py)&#93;</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[BulkGeolocationErrorBody](whois_freaks/errors/bulk_geolocation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def geolocation(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> GeolocationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get location, ASN, currency for an IP. 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.geolocation.geolocation("some example string")
    # TODO: Handle 'response' of type GeolocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GeolocationErrorBody
```

**Async**

```python
try:
    response = await async_client.geolocation.geolocation("some example string")
    # TODO: Handle 'response' of type GeolocationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GeolocationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GeolocationResponse](whois_freaks/models/geolocation_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[GeolocationErrorBody](whois_freaks/errors/geolocation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IpReputation

> Source: [IpReputation](whois_freaks/apis/ip_reputation.py)

<details>
<summary><code>def bulk_ip_reputation(body: V10SecurityRequest | V10SecurityRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[IpReputationResponse]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 IPs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ip_reputation.bulk_ip_reputation(V10SecurityRequest(ips=["some example string"]))
    # TODO: Handle 'response' of type list[IpReputationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkIpReputationErrorBody
```

**Async**

```python
try:
    response = await async_client.ip_reputation.bulk_ip_reputation(V10SecurityRequest(ips=["some example string"]))
    # TODO: Handle 'response' of type list[IpReputationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkIpReputationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V10SecurityRequest](whois_freaks/models/v10_security_request.py) \| [V10SecurityRequestDict](whois_freaks/models/v10_security_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[IpReputationResponse](whois_freaks/models/ip_reputation_response.py)&#93;</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[BulkIpReputationErrorBody](whois_freaks/errors/bulk_ip_reputation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def ip_reputation(ip: str, *, request_options: RequestOptionsOrDict | None = None) -> IpReputationResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ip_reputation.ip_reputation("some example string")
    # TODO: Handle 'response' of type IpReputationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpReputationErrorBody
```

**Async**

```python
try:
    response = await async_client.ip_reputation.ip_reputation("some example string")
    # TODO: Handle 'response' of type IpReputationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpReputationErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpReputationResponse](whois_freaks/models/ip_reputation_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[IpReputationErrorBody](whois_freaks/errors/ip_reputation_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## IpWhois

> Source: [IpWhois](whois_freaks/apis/ip_whois.py)

<details>
<summary><code>def ip_whois(ip: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> IpWhoisResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

WHOIS for an IP address. 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ip_whois.ip_whois("some example string")
    # TODO: Handle 'response' of type IpWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpWhoisErrorBody
```

**Async**

```python
try:
    response = await async_client.ip_whois.ip_whois("some example string")
    # TODO: Handle 'response' of type IpWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type IpWhoisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ip</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpWhoisResponse](whois_freaks/models/ip_whois_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[IpWhoisErrorBody](whois_freaks/errors/ip_whois_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Ssl

> Source: [Ssl](whois_freaks/apis/ssl.py)

<details>
<summary><code>def ssl_lookup(domain_name: str, *, chain: bool | None = False, ssl_raw: bool | None = False, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> SslResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time SSL cert with optional chain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssl.ssl_lookup("some example string")
    # TODO: Handle 'response' of type SslResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SslLookupErrorBody
```

**Async**

```python
try:
    response = await async_client.ssl.ssl_lookup("some example string")
    # TODO: Handle 'response' of type SslResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SslLookupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | Value sent with the request. |
| <code>chain</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>ssl_raw</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SslResponse](whois_freaks/models/ssl_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[SslLookupErrorBody](whois_freaks/errors/ssl_lookup_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Subdomains

> Source: [Subdomains](whois_freaks/apis/subdomains.py)

<details>
<summary><code>def subdomains(domain: str, *, after: Date | None = None, before: Date | None = None, status: StatusOrStr | None = None, page: int | None = 1, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> SubdomainsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All subdomains including nested. 2 credits per query.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.subdomains.subdomains("some example string")
    # TODO: Handle 'response' of type SubdomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubdomainsErrorBody
```

**Async**

```python
try:
    response = await async_client.subdomains.subdomains("some example string")
    # TODO: Handle 'response' of type SubdomainsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubdomainsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>str</code> | Value sent with the request. |
| <code>after</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>before</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[StatusOrStr](whois_freaks/models/enums/status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SubdomainsResponse](whois_freaks/models/subdomains_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[SubdomainsErrorBody](whois_freaks/errors/subdomains_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Typosquatting

> Source: [Typosquatting](whois_freaks/apis/typosquatting.py)

<details>
<summary><code>def typosquatting(*, keyword: str | None = None, pattern: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> TyposquattingResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find typo variants of a brand. 5 credits per page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.typosquatting.typosquatting()
    # TODO: Handle 'response' of type TyposquattingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TyposquattingErrorBody
```

**Async**

```python
try:
    response = await async_client.typosquatting.typosquatting()
    # TODO: Handle 'response' of type TyposquattingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TyposquattingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>pattern</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TyposquattingResponse](whois_freaks/models/typosquatting_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[TyposquattingErrorBody](whois_freaks/errors/typosquatting_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Whois

> Source: [Whois](whois_freaks/apis/whois.py)

<details>
<summary><code>def bulk_whois(body: V20BulkwhoisLiveRequest | V20BulkwhoisLiveRequestDict, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> BulkWhoisResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 100 domains in one request. 1 credit per successful domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.whois.bulk_whois(V20BulkwhoisLiveRequest(domain_names=["some example string"]))
    # TODO: Handle 'response' of type BulkWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkWhoisErrorBody
```

**Async**

```python
try:
    response = await async_client.whois.bulk_whois(V20BulkwhoisLiveRequest(domain_names=["some example string"]))
    # TODO: Handle 'response' of type BulkWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkWhoisErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V20BulkwhoisLiveRequest](whois_freaks/models/v20_bulkwhois_live_request.py) \| [V20BulkwhoisLiveRequestDict](whois_freaks/models/v20_bulkwhois_live_request.py)</code> | The request body. |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BulkWhoisResponse](whois_freaks/models/bulk_whois_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[BulkWhoisErrorBody](whois_freaks/errors/bulk_whois_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400-499 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whois_history(domain_name: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> WhoisHistoricalResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.whois.whois_history("some example string")
    # TODO: Handle 'response' of type WhoisHistoricalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.whois.whois_history("some example string")
    # TODO: Handle 'response' of type WhoisHistoricalResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | Domain to fetch historical WHOIS records for |
| <code>page</code> | <code>int \| None</code> | Page number<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WhoisHistoricalResponse](whois_freaks/models/whois_historical_response.py)</code> -- Historical WHOIS records

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whois_live(domain_name: str, *, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> WhoisResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Real-time WHOIS lookup from authoritative servers. Cost 1 credit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.whois.whois_live("whoisfreaks.com")
    # TODO: Handle 'response' of type WhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhoisLiveErrorBody
```

**Async**

```python
try:
    response = await async_client.whois.whois_live("whoisfreaks.com")
    # TODO: Handle 'response' of type WhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type WhoisLiveErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain_name</code> | <code>str</code> | Value sent with the request. |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WhoisResponse](whois_freaks/models/whois_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[WhoisLiveErrorBody](whois_freaks/errors/whois_live_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[ErrorResponse](whois_freaks/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](whois_freaks/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def whois_reverse(keyword: str, *, page: int | None = None, format_: FormatOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ReverseWhoisResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.whois.whois_reverse("some example string")
    # TODO: Handle 'response' of type ReverseWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.whois.whois_reverse("some example string")
    # TODO: Handle 'response' of type ReverseWhoisResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>keyword</code> | <code>str</code> | Keyword to search across WHOIS records |
| <code>page</code> | <code>int \| None</code> | Page number<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](whois_freaks/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](whois_freaks/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ReverseWhoisResponse](whois_freaks/models/reverse_whois_response.py)</code> -- Reverse WHOIS results (paginated)

**OnError**: <code>[ApiError](whois_freaks/core/exceptions.py)&#91;[RawError](whois_freaks/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

